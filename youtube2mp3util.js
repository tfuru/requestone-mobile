//YouTubeをMp3に変換する
var fs = require("fs");
var exec = require('child_process').exec;
var youtubedl = require('youtube-dl');
var temporary = __dirname+"/temp";

var YouTube2Mp3Util = function(){
	this.youtubeId = null;
	this.file_name = null;
	
	//ffmpeg ビットレート
	this.bitrate = '32k';
	
	//ダウンロードしてファイルを保存する
	this.download = function(youtubeId,callback){
		this.youtubeId = youtubeId;
		var url = 'http://www.youtube.com/watch?v='+youtubeId;
		var video = youtubedl(url,['--max-quality=13'],{cwd:temporary});
		var dst = temporary+'/'+youtubeId+'.mp4';
		var write_stream = fs.createWriteStream(dst);
		write_stream.on('close', function(){ callback(null); });
		
		video.pipe( write_stream );
	};
	
	//ファイルをmp3にコンバートする
	this.convert = function(callback){
		console.log( "convert()" );
		var src = temporary+'/'+this.youtubeId+'.mp4';
		var dst = src.replace('.mp4','.mp3');
		var cmd = 'ffmpeg -y -i '+src+' -ab '+this.bitrate+' '+dst;
		console.log( cmd );
		var child = exec(cmd, function(err, stdout, stderr){
			if (!err) {
				//mp3 ファイルを読み込んでcallback
				var file = fs.readFile(dst, function(err, data) {
					callback( data );
				});
    		}
			else{
				console.log(err);
			}
		});
	};
};

module.exports = YouTube2Mp3Util;