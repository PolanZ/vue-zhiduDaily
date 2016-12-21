var request = require('request');
var url = require("url");
var querystring = require("querystring");

module.exports.requestapi = function(req, res) {
	// console.log(req.url)
	var uri = req.url;
	var urlOption = url.parse(uri);
	var pathName = urlOption.pathname;
	var query = querystring.parse(urlOption.query);

	switch (pathName) {
		case '/latest':
			var _url = "http://news-at.zhihu.com/api/4/news/latest";
		    request.get(_url)
		    	   .on('response', function(response) {
		    	   		var c = "";
						response.setEncoding('utf8');
						response.on('data', function(chunk) {
							c += chunk;
						});
						response.on('end', function() {
							res.writeHead(200, response.headers);
							res.write(c);
							res.end();
						})
		    	   })
		    	   .on("error",(e)=>{
					    console.log(`获取数据失败: ${e.message}`)
					    res.end();
					})
			break;
		case '/news':
			var _url = `http://news-at.zhihu.com/api/4/news/${query.id}`;
			request.get(_url)
		    	   .on('response', function(response) {
		    	   		var c = "";
						response.setEncoding('utf8');
						response.on('data', function(chunk) {
							c += chunk;
						});
						response.on('end', function() {
							res.writeHead(200, response.headers);
							res.write(c);
							res.end();
						})
		    	   })
		    	   .on("error",(e)=>{
					    console.log(`获取数据失败: ${e.message}`)
					    res.end();
					})
			break;
		case '/contents':
			var _url = `http://news-at.zhihu.com/api/4/story/${query.id}/long-comments`;
			request.get(_url)
		    	   .on('response', function(response) {
		    	   		var c = "";
						response.setEncoding('utf8');
						response.on('data', function(chunk) {
							c += chunk;
						});
						response.on('end', function() {
							res.writeHead(200, response.headers);
							res.write(c);
							res.end();
						})
		    	   })
		    	   .on("error",(e)=>{
					    console.log(`获取数据失败: ${e.message}`)
					    res.end();
					})
			break;
		case '/themes':
			var _url = `http://news-at.zhihu.com/api/4/themes`
			request.get(_url)
		    	   .on('response', function(response) {
		    	   		var c = "";
						response.setEncoding('utf8');
						response.on('data', function(chunk) {
							c += chunk;
						});
						response.on('end', function() {
							res.writeHead(200, response.headers);
							res.write(c);
							res.end();
						})
		    	   })
		    	   .on("error",(e)=>{
					    console.log(`获取数据失败: ${e.message}`)
					    res.end();
					})
			break;
		default:
			res.writeHead(404);
            res.end();
			break;
	}
};

module.exports.requestImg = function(req, res) {
	var urlOption = url.parse(req.url);
	var query = querystring.parse(urlOption.query);
    var img = query.img;
    var imgUrl = url.parse(img);
    // console.log(imgUrl)
    imgUrl.headers = {
            "Referer": "https://daily.zhihu.com/"
        };
	var opt = {
		url: imgUrl.href,
		headers: imgUrl.headers
	}

	req.pipe(request(opt)).pipe(res)

	/*request.get(opt)
		.on('response', function(response) {
			var c = "";
			response.setEncoding('utf8');
			response.on('data', function(chunk) {
				c += chunk;
			});
			response.on('end', function() {
				res.writeHead(200, response.headers);
				res.write(c);
				res.end();
			})
		})
		.on("error",(e)=>{
			console.log(`获取数据失败: ${e.message}`)
			res.end();
		})*/

}