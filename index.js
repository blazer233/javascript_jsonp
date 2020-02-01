const http = require('http');
const url = require('url');
let data = {
	name: '小明',
	sex: '男',
	age: 16
};
http.createServer((req, res) => {
	//获取请求参数
	const params = url.parse(req.url, true);
	//获取请求参数中callback的值(回调函数)
	const callbackParams =params.query.callback
	if (params && callbackParams) {
		// jsonp请求
		// 获取请求参数中callback的值，并返回一个函数调用的字符串
		const str = callbackParams + `(${JSON.stringify(data)})`;
		res.end(str)
	} else {
		// 普通ajax请求
		res.end('helloWorld')
	}

}).listen(5000,()=>{
  console.log('node服务已启动')
})
