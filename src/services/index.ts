import { CommonService } from './common';
import { PostService } from './posts';
import { ProTagService } from './protags';

export const services = {
    common: new CommonService(),
    posts: new PostService(),
    proTags: new ProTagService()
};