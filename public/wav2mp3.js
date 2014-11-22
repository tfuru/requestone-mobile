/** wav バイナリ(BASE64) を mp3 化する
 * 
 */
var Wav2Mp3 = function(){
	//変換サーバへのWebSocket接続
	this.socket = io.connect(config.CONVERT_SERVER_URL);	
	this.src_base64_data = null;
	this.fnc_callback = null;
	
	//初期化処理
	this.init = function(){
		this.socket.on('didWav2mp3', $.proxy(this.socketMessage,this));
	};
	
	/*
	 * src_base64_data : wav バイナリを base64したもの
	 * fnc_callback : 完了時にコールバックするファンクション
	 */
	this.convert = function(tag,src,callback){
		//console.log("convert");
		this.src_base64_data = src;
		this.fnc_callback = callback;
		
		//変換サーバに wavバイナリを送信
		this.socket.emit('wav2mp3', {tag:tag,wav:src});
	};
	
	//変換サーバからメッセージ受け取り
	this.socketMessage = function(json){
		//サーバ側でmp3に変換した 結果を通知 コールバックを実行
		this.fnc_callback( json['mp3'] );
	};
	
	//初期化
	this.init();
};