var P = function(){
	this.url = "data:audio/mp3;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1DEu4AKbHlJp7BJQS4UpgT3oTBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxMMDyEyEuqekaUAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVV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";

	this.audio = null;
	this.init = function(){
		this.audio = new Mp3DataUriAudio();
		this.audio.decodeMp3Audio( this.url,function(){
			console.log("success decodeMp3Audio");
		});

		$("#btnStart").click($.proxy(this.clickBtnStart,this));
		$("#btnStop").click($.proxy(this.clickBtnStop,this));
	};

	this.clickBtnStart = function(){
		//これはクリック時にやらないと行けない処理
		this.audio.playSound();
		this.audio.stopSound();
		
		var fnc = function(){
			console.log("timeout fnc");
			this.audio.playSound( this.onEnded );			
		};
		setTimeout($.proxy(fnc,this), 1000);
	};
	
	this.clickBtnStop = function(){
		this.audio.stopSound();
	};
	
	//再生停止時に呼び出される
	this.onEnded = function(){
		console.log("onEnded");
	};
};

var p = new P()
$(function(){
	p.init();
});