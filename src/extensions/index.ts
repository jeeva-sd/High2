// HTTP
import WebAPI from './webAPI';

const apiInstance1 = new WebAPI('https://tags.jee6.in');
export const http = apiInstance1.getInstance();


// FFMPEG
export { useFFmpeg } from './ffmpeg';