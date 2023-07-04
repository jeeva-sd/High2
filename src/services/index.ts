import { CommonService } from './common';
import { PostService } from './posts';

export const services = {
  common: new CommonService(),
  posts: new PostService(),
};