//wavをmp3に変換する
var fs = require("fs");
var exec = require('child_process').exec;
var temporary = __dirname+"/temp";

var Wav2mp3Util = function(){
	this.file_name = null;
	//ffmpeg ビットレート
	this.bitrate = '64k';
	
	//Wavファイルを保存する
	this.save = function(file_name,data,callback){
		//TODO file_name に危険な文字が含まれていない事を確認するべき
		this.file_name = file_name;
		var path = temporary+"/"+file_name;
		fs.writeFile(path, data , callback);
	};
	
	//ファイルをmp3にコンバートする
	this.convert = function(callback){
		console.log( "convert()" );
		var src = temporary+"/"+this.file_name;
		var dst = temporary+"/"+this.file_name.replace('.wav','.mp3');
		var cmd = 'ffmpeg -y -i '+src+' -ab '+this.bitrate+' '+dst;
		console.log( cmd );
		var child = exec(cmd, function(err, stdout, stderr){
			//console.log( err );
			if (!err) {
				//console.log( dst );
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

module.exports = Wav2mp3Util;