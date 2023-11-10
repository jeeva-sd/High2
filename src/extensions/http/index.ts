import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class Http {
    private instance: any;
    private pendingRequests: Map<string, any>;

    constructor(baseURL: string, timeout: number = 20000) {
        this.instance = axios.create({
            baseURL,
            timeout,
        });

        this.pendingRequests = new Map();
    }

    setAuthToken(token: string): void {
        this.instance.defaults.headers.common['x-key'] = token;
    }

    cancelPendingRequests(config: AxiosRequestConfig): void {
        const requestKey = `${config.url}-${config.method}`;

        if (this.pendingRequests.has(requestKey)) {
            const cancelToken = this.pendingRequests.get(requestKey);
            cancelToken.cancel('Request cancelled due to duplication');
        }
        this.pendingRequests.delete(requestKey);
    }

    request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        this.cancelPendingRequests(config);

        const source = axios.CancelToken.source();
        // Generate a unique key for each request based on the URL, HTTP method, and payload
        const requestKey = `${config.url}-${config.method}-${JSON.stringify(config.data)}`;
        this.pendingRequests.set(requestKey, source);

        config.cancelToken = source.token;
        return this.instance.request(config)
            .then((response: AxiosResponse) => {
                this.pendingRequests.delete(requestKey);
                return response;
            })
            .catch((error: any) => {
                if (axios.isCancel(error)) {
                    console.log('Request cancelled:', error.message);
                }
                throw error;
            });
    }

    get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'get', url: url });
    }

    post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'post', url, data });
    }

    put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'put', url, data });
    }

    patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'patch', url, data });
    }

    delete(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'delete', url, data });
    }
}

export default Http;
