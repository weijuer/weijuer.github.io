import service from '../utils/service'

// console.log(`process.env:===> ${JSON.stringify(process.env)}`);

/**
 * 获取登录User信息
 */
export const get_user = (username) => {
    return service({
        url: `/github/users/${username}`,
        method: 'get'
    })
};