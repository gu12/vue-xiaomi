let baseURL
switch (process.env.NODE_ENV){
    case 'development':
        baseURL = 'http:dev-mall-pre.springboot.cn/api';
        break
    case 'production':
        baseURL = 'http:dev-mall-pre.springboot.cn/api';
        break

    default:
        baseURL = 'http:dev-mall-pre.springboot.cn/api';
        break

}
export default {
    baseURL
}