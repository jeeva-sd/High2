import { http } from '~/extensions';

export class CommonService {
    subscribeEmail = async (params: any): Promise<any> => await http.post('/fav/subscribe', params);
}