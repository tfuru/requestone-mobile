/** mp3 dataURI を webkitAudioContext で再生するオブジェクト
 * 
 */
var Mp3DataUriAudio = function(){
	this.audioContext = null;
	this.pcmAudioData = null;
	this.bufferSource = null;
	//再生開始時に設定されていたコールバック
	this.callbackOnEnded = null;
	
	//初期化
	this.init = function(){
		this.audioContext = new webkitAudioContext();
	};
	
	//mp3をPCM音声データに変換
	this.decodeMp3Audio = function(url,success){
		if(typeof url == 'undefined'){
			return;
		}
		
		//BASE64部分だけ ArrayBuffer に変換
		var dataBase64 = url.replace('data:audio/mp3;base64,','');
		var byteArray = Base64Binary.decodeArrayBuffer( dataBase64 );
		this.audioContext.decodeAudioData(byteArray,$.proxy(function(buffer){
			this.pcmAudioData = buffer;
			success();
			},this));
	};
	
	//再生
	this.playSound = function(url, onended){
		if(typeof url == 'undefined'){
			this._play(onended);
			return;
		}
		
		//mp3をPCMに変換
		var fnc = $.proxy(function(){ this._play(onended);},this);
		this.decodeMp3Audio(url, fnc);
	}
	
	this._play = function(onended){
		//BufferSourceを設定
		if(this.bufferSource == null){
			this.bufferSource = this.audioContext.createBufferSource();  
			this.bufferSource.connect(this.audioContext.destination);
			this.bufferSource.onended = $.proxy(this.onEnded,this);
			//再生,停止メソッドをブラウザ互換の為に揃える
			this.bufferSource.start = this.bufferSource.start || this.bufferSource.noteOn;
			this.bufferSource.stop = this.bufferSource.stop || this.bufferSource.noteOff;
		}
		
		//再生終了時のコールバックを設定
		if((typeof onended != "undefined") && (onended != null)){
			this.callbackOnEnded = onended;			
		}
		
		//PCM音源バッファを設定
		if(this.pcmAudioData != null){
			this.bufferSource.buffer = this.pcmAudioData;
		}
		
		//再生開始
		this.bufferSource.start(0); 
	};
	
	//再生停止
	this.stopSound = function(){
		if(this.bufferSource == null) return;
		this.bufferSource.stop(0);
		this.bufferSource = null;
	};
	
	//再生終了時に呼び出される
	this.onEnded = function(){
		//再生終了したのでbufferSourceは削除
		this.bufferSource = null;		
		
		if((typeof this.callbackOnEnded != "undefined") && (this.callbackOnEnded != null)){
			//再生開始時に設定されていたコールバックに通知
			this.callbackOnEnded();
		}
	};
	
	this.init();
};