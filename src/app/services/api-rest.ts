import { environment } from './../../environments/environment';

export const POST_LOGIN_URL = `${environment.apiURL}/api/auth/login`;

export const GET_USERS_URL = `${environment.apiURL}/api/users`;
export const getUsersPostsUrl = (username) => `${GET_USERS_URL}/${username}/posts`;
export const getUsersPostUrl = (username, slug) => `${GET_USERS_URL}/${username}/posts/${slug}`;
