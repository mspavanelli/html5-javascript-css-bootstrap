var express=require("express"),app=express();app.use(express["static"]("dist"));var port=3e3;process.argv.forEach(function(e,r,p){"--port"==e&&p.length-1<=r+1&&(port=p[r+1])}),console.log("Servidor de testes LiNE rodando na porta",port),app.listen(port);