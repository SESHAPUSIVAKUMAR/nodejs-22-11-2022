const http=require("http")
http.createServer((req,res)=>{
	res.write("server created")
	res.write("  \n learning about node.js")
	res.write("   \n .........")
	res.end();

}).listen(2004)