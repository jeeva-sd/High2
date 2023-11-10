import { http_high } from '~/extensions';
import { YouTubeTagParams } from './types';

export class ProTagService {
    getYtTags = async ({ title }: YouTubeTagParams) => await http_high.get(`/api/keyword/youtube?q=${title}`);
}