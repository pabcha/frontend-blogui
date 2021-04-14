import { environment } from '../../../environments/environment';

export const GET_POSTS_URL = `${environment.apiURL}/api/posts`;
export const GET_POST_URL = `${GET_POSTS_URL}/`;
export const POST_POSTS_URL = `${GET_POSTS_URL}/`;

export const GET_CATEGORIES_URL = `${environment.apiURL}/api/categories`;
