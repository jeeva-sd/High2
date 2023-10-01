import { http } from '~/extensions';
import { YouTubeTagParams } from './types';

export class ProTagService {
    getYtTags = async ({ title }: YouTubeTagParams) => await http.get(`/youtube/tags?q=${title}`);
}