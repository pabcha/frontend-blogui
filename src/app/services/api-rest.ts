import { environment } from './../../environments/environment';

export const POST_LOGIN_URL = `${environment.apiURL}/api/auth/login`;

export const getUserPostsUrl = (username) => `${environment.apiURL}/api/users/${username}/posts`;
