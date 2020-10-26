module.exports = {
    publicPath: './',
    pages: {
        index: {
            entry: 'src/pages/index/index.js',
            template: 'src/pages/index/index.html',
            filename: 'index.html'
        },
        select: {
            entry: 'src/pages/select/select.js',
            template: 'src/pages/select/select.html',
            filename: 'select.html'
        },
        register: {
            entry: 'src/pages/register/register.js',
            template: 'src/pages/register/register.html',
            filename: 'register.html'
        },
        user:{
            entry: 'src/pages/user/user.js',
            template: 'src/pages/user/user.html',
            filename: 'user.html'
        },
        pay:{
            entry: 'src/pages/pay/pay.js',
            template: 'src/pages/pay/pay.html',
            filename: 'pay.html'
        }
    },
    devServer:{
        proxy: {
            '/api': {                       //需要代理的接口
                target:'http://49.235.232.153:8751', //目标服务器
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '/api'             //重定向
                }
            }
        },
    }
}
