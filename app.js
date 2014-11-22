{
	var port = process.env.PORT || 3000;
	
    var http  = require("http"),
    	url   = require("url"),
    	path  = require("path"),
    	fs    = require("fs"),
    	parse = require('url').parse,
    	join = require('path').join,
    	mime = require('mime');
    var root = __dirname+"/public";
    
    var httpServer = http.createServer(function(req, res){
    									   // リクエストされた URLからファイルパスを取得
                                           var url = parse(req.url);
                                           var path = join(root, url.pathname);
                                           fs.stat(path, function(err, stat){
                                                   if (err) {
	                                                   if ('ENOENT' == err.code) {
	                                                	   res.statusCode = 404;
	                                                	   res.end('Not Found');
	                                                   }
	                                                   else {
	                                                	   res.statusCode = 500;
	                                                	   res.end('Internal Server Error');
	                                                   }
                                                   }
                                                   else {
	                                                   res.setHeader('Content-Type', mime.lookup(path));
	                                                   res.setHeader('Content-Length', stat.size);
	                                                   var stream = fs.createReadStream(path);
	                                                   stream.pipe(res);
	                                                   stream.on('error', function(err){
	                                                             res.statusCode = 500;
	                                                             res.end('Internal Server Error');
	                                                             });
	                                                   }
                                                   });
                                           });
    httpServer.listen(port);
    
    var Wav2mp3Util = require('./wav2mp3util.js');
    var wav2mp3Util = new Wav2mp3Util();
    
    var YouTube2Mp3Util = require('./youtube2mp3util.js');
    var youtube2mp3Util = new YouTube2Mp3Util();
    
    //WebSocket
    var socketIO = require('socket.io');
    var io = socketIO.listen(httpServer);
    // クライアントが接続してきたときの処理
    io.sockets.on('connection', function(socket) {
    	console.log("connection");
    	
    	// メッセージを受けたときの処理
    	socket.on('message', function(json) {
    		var cmd = json['cmd'];
    		console.log("message cmd:"+cmd);
    		if(cmd == 'wav2mp3'){
        		var tag = json['tag'];
        		var wav = json['wav'];
	    		//ここで wavバイナリを mp3 に変換する
	    		wav2mp3Util.save(tag+'.wav',new Buffer(wav,'base64'),function(err){
	    			console.log('save '+err);
	    			//MP3に変換したバイナリを受け取る
	    			wav2mp3Util.convert(function( data ){
	    				var mp3 = new Buffer(data).toString('base64');
	    				// つながっているクライアント全員に送信
	    				//io.sockets.emit('message', { mp3:mp3 });
	    				//接続してきたクライアントだけに変身する
	    				socket.emit('didWav2mp3', { mp3:mp3 });
	    			});
	    		});
    		}
    		else if(cmd == 'youtube2mp3'){
    			//youtube をダウンロードして mp3 を作る
        		var tag = json['tag'];
        		var videoId = json['videoId'];
        		
        		youtube2mp3Util.download(videoId,function(err){
        			youtube2mp3Util.convert(function( data ){
	    				var mp3 = new Buffer(data).toString('base64');
	    				//接続してきたクライアントだけに変身する
	    				socket.emit('didYouTube2Mp3', { mp3:mp3 });
	    			});
        		});
    		}
    	});

    	// クライアントが切断したときの処理
    	socket.on('disconnect', function(){
    		console.log("disconnect");
    	});
    });
}
