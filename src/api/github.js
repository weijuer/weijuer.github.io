import service from '../utils/service'
const API_BASE = 'https://api.github.com/users';

console.log(`API_BASE:===>${API_BASE}`);

/**
 * 获取登录User信息
 */
export const get_user = (username) => {
    return service({
        url: `${API_BASE}/${username}`,
        method: 'get'
    })
};