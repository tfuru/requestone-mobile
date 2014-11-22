/* YouTube IDを受け取って ダウンロード後に mp3に変換する
 * 
 */
var YouTube2Mp3 = function(){
	//変換サーバへのWebSocket接続
	this.socket = io.connect(config.CONVERT_SERVER_URL);
	this.fnc_callback = null;
	
	//初期化処理
	this.init = function(){
		this.socket.on('didYouTube2Mp3', $.proxy(this.socketMessage,this));
	};
	
	this.convert = function(tag,videoId,callback){
		if(videoId == null) return;
		this.fnc_callback = callback;		
		//変換サーバに wavバイナリを送信
		this.socket.emit('youtube2mp3',{tag:tag,videoId:videoId});
	};
	
	//変換サーバからメッセージ受け取り
	this.socketMessage = function(json){
		//サーバ側でmp3に変換した 結果を通知 コールバックを実行
		this.fnc_callback( json['mp3'] );
	};
	
	//初期化
	this.init();
};