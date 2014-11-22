//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);

var bgmManager;
var requestone_server = "http://ampersand.xyz/requestone/";
$(function() {
  var wav2mp3 = new Wav2Mp3();
  var audioPlayer = new Mp3DataUriAudio();
  var youtube2Mp3 = new YouTube2Mp3();

  //起動直後に 自動再生の為にボタンを押させる
  jAlert('ようこそ リクエストーン モバイル へ', 'requestone mobile',function(){
	  audioPlayer.playSound();
	  audioPlayer.stopSound();
  });
  
  var STATUS_PLAY = 'play';
  var STATUS_STOP = 'stop';
  var status = STATUS_PLAY;

  $('#show_infomation').on('click',function(e){
    $('#infomation').fadeIn();
  })
  $('#infomation').on('click',function(e){
    $(this).fadeOut();
  });

  $('#btn_play').on('click',function(e){
    e.preventDefault();
    status = STATUS_PLAY;
    bgmManager.resume();
    $('#sound_status').text('音声受信中');
  });
  
  $('#btn_pause').on('click',function(e){
    e.preventDefault();
    playerManager.playQuere = [];
    status = STATUS_STOP;
    $("#player").remove();
    $("audio").remove();
    bgmManager.mute();
    $('#sound_status').text('音声停止中');
  });

  $('.menu_link').click(function(e){
    e.preventDefault();
    console.log($('#section_'+$(this).attr('href')))
    $('.section_block').hide();
    $($(this).attr('href')).fadeIn('fast');
  });


  var HOST = '153.121.45.187:8080'
  var socket = io.connect('http://'+HOST);
  var timer;

  var domlist = [];
  var currentPlaying = {ended:true};

  // サーバからのイベント'voicetext'を受信する
  socket.on('voicetext', function(data) {
	if(status == STATUS_STOP) return;
    console.log('event:voicetext');

    if(playerManager.status === playerManager.STATUS.EMERGENCY) {
      return;
    }

    playerManager.playQuere.push(function(){
      console.log('event runnning:voicetext 1');
      emotionManager.setEmotion('paku');
      console.log('audioVoiceText play');
            
      //data を wav から mp3 に変換して再生
      var fnc = function(data){
	      console.log('audioVoiceText play');
    	  //終了時の処理
	      var playEnded = function(){
	    	  	//bgmフェードイン？
	    	  	bgmManager.fadeIn();
		        emotionManager.setEmotion('wait');
		        playerManager.complete();
		  };
		  //再生
	      audioPlayer.playSound('data:audio/mp3;base64,'+data,playEnded);
      };
      wav2mp3.convert('voicetext1',data,fnc);
    });
  });

  // 次のナンバーのコール。BGMをフェードアウトする
  socket.on('nextnumber', function(data) {
    if(status == STATUS_STOP) return;
    
    if(playerManager.status === playerManager.STATUS.EMERGENCY) {
      return;
    }
    console.log('event:nextnumber');
    playerManager.playQuere.push(function(){
      console.log('event runnning:voicetext 2');
      emotionManager.setEmotion('paku');
      
      var fnc = function(data){
	      console.log('audioVoiceText2 play');
    	  //終了時の処理
	      var playEnded = function(){
	    	  emotionManager.setEmotion('wait');
		      playerManager.complete();
		  };
		  //再生
	      audioPlayer.playSound('data:audio/mp3;base64,'+data,playEnded);
       };
       wav2mp3.convert('voicetext2',data,fnc);
    });
  });

  // サーバからのイベント'topix_artist'を受信する
  socket.on('topix_artist', function(data) {
    $('#topix_artist span').remove();
    $.each(data,function(){
      $('#topix_artist').append('<span class="tag tag-artist">'+this+'</span>')
    })
  });

  // サーバからのイベント'topix_sensation'を受信する
  socket.on('topix_sensation', function(data) {
    $('#topix_sensation span').remove();
    $.each(data,function(){
      $('#topix_sensation').append('<span class="tag tag-sensation">'+this+'</span>')
    })
  });

  // サーバからのイベント'topix_sensation'を受信する
  socket.on('topix_hashtag', function(data) {
    $('#topix_hashtag span').remove();
    $.each(data,function(){
      $('#topix_hashtag').append('<span class="tag tag-hashtag">'+this+'</span>')
    })
  });

  socket.on('radio_log_sep',function(){
    playerManager.playQuere.push(function(){
      console.log('event:radio_log_sep');
      var date = new Date();
      var log = $('<p>'+("0" + date.getHours()).slice(-2)+':'+("0" + date.getMinutes()).slice(-2)+'</p>');
      $('#section_log_box').append(log);
      $('#section_log_box').scrollTop(999999999);
      //バグ原因？ 音声再生していないのに complete させるから音声再生が途中で停止するっぽい
      playerManager.complete();
    })
  });
  
  // サーバからのイベント'radio_log'を受信する
  socket.on('radio_log', function(data) {
    playerManager.playQuere.push(function(){
      console.log('event:radio_log');
      var log = $('<p>'+data+'</p>');
      $('#section_log_box').append(log);
      $('#section_log_box').scrollTop(999999999);
      console.log('ログ出力：',data);
      //バグ原因？ 音声再生していないのに complete させるから音声再生が途中で停止するっぽい
      playerManager.complete();
    });
  });

  // サーバからのイベント'twitter_log'を受信する
  socket.on('twitter_log', function(data) {
    console.log('event:twitter_log');
    var log = $('<p class="twitterlog"><img width="15" src="images/Twitter_logo_blue.png" alt=""> '+data+'</p>');
    $('#section_log_box').append(log);
    $('#section_log_box').scrollTop(999999999);
    console.log('ログ出力：',data);
  });


  // サーバからのイベント'edisonaction'を受信する
  socket.on('edisonaction', function(data) {
    if(status == STATUS_STOP) return;
    
    emotionManager.setEmotion('paku');
    var fnc = function(data){
	      console.log('audioEdisonaction play');
	      //終了時の処理を設定して 再生開始
	      var playEnded = function(){
	    	  	emotionManager.setEmotion('heart');
		  };
	      audioPlayer.playSound('data:audio/mp3;base64,'+data,playEnded);
  	};
  	wav2mp3.convert('edisonaction',data,fnc);
  });


  // サーバからのイベント'topix_sensation'を受信する
  socket.on('delete_queue', function(data) {
    console.log('delete_queue',data);
    playerManager.emergency();
    playerManager.playQuere = [];
    bgmManager.mute();
  });

  
  // サーバからのイベント'topix_sensation'を受信する
  // 緊急放送？ BGM状態にかかわらず実行したいっぽい
  socket.on('emergency', function(data) {
    console.log('emergency');
    playerManager.playQuere.push(function(){
      console.log('event runnning:emergency');
      emotionManager.setEmotion('angry');
      
      var fnc = function(data){
	      console.log('audioEmergency play');
	      //終了時の処理を設定して 再生開始
	      var playEnded = function(){
	    	  	playerManager.complete();
		  };
	      audioPlayer.playSound('data:audio/mp3;base64,'+data,playEnded);
  	  };
  	  wav2mp3.convert('emergency',data,fnc);
    });
  });

  // サーバからのイベント'twitter'を受信する
  socket.on('tweet', function(data) {
	  //再生状態を確認する？
	  if(status == STATUS_STOP) return;
	  
	  console.log('tweet');
	  playerManager.playQuere.push(function(){
		  var fnc = function(data){
  	      console.log('audioTweet play');
  	      //終了時の処理を設定して 再生開始
		  var playEnded = function(){
		    	  	
		  };
  	      audioPlayer.playSound('data:audio/mp3;base64,'+data,playEnded);
	  };
  	  wav2mp3.convert('tweet',data,fnc);
    });
  });

  // youtubeIdを取得する
  socket.on('youtube',function(_videoId) {
	    if(status == STATUS_STOP) return;
	    
	    playerManager.playQuere.push(function(){
		    console.log('event:youtube');
			console.log('_videoId:'+_videoId);
			var fnc = function( data ){
		      console.log('audioYoutube play');
		      //終了時の処理を設定して 再生開始
		      var playEnded = function(){
		    	  console.log('youtube ended');
		          emotionManager.setEmotion('wait');
		          //playerManager を complete ステータスに変更
		          playerManager.complete();
		          bgmManager.fadeIn();
			  };
		      audioPlayer.playSound('data:audio/mp3;base64,'+data,playEnded);
			};		
			youtube2Mp3.convert('youtube',_videoId,fnc);
	    });
  });
  
  function PlayerManager() {
    var self = this;

    this.STATUS = {
      'READY' : 'ready',
      'EMERGENCY' : 'emergency',
      'WAIT' : 'wait'
    }
    var status = this.STATUS.READY;

    this.startProcess = function(){
      console.log('status changecall wait');
      status = self.STATUS.WAIT;
    }
    this.complete = function(){
      console.log('status changecall complete');
      status = self.STATUS.READY;
    }
    this.emergency = function(){
      console.log('status changecall complete');
      status = self.STATUS.EMERGENCY;
    }
    this.playQuere = [];

    (function process(){
      console.log('process...',status);
      if(status != self.STATUS.WAIT && self.playQuere.length > 0) {
        console.log('event pop');
        self.startProcess();
        var fn = self.playQuere.shift();
        fn();
      }
      setTimeout(process,500);
    })();
  }

  var playerManager = new PlayerManager();

  function BGMManager() {
    var self = this;
    var $melocy;
    var FADE_STEP = 0.04;
    var FADE_SPEED_MS = 1;
    var MAX_VOLUME = 0.2;
    var volume = MAX_VOLUME;
    var tid;
    
    //TODO m4aをmp3に変換して再生できるようにする必要がある
    var melocyPlayer = new Mp3DataUriAudio();
    
    // URLを取得して再生
    this.get = function () {
      $.ajax({
        url: 'http://153.121.45.187/requestone/melocy.php',
        type: 'POST',
        data: { MELOCY : 'yes! melocy!' },
        dataType: 'text'
      }).done(function( body ) {
        console.log('melocy url',body);
        self.play(body);
      });
    }
    // 指定URLのmp4を再生
    this.play = function(url) {
      console.log('bgm append volume:'+volume);
      //$melocy = $('<video id="melocy" style="display:none;" autoplay controls src="'+url+'">');      
      //$melocy[0].volume = volume;      
      //$('body').append($melocy);
      /*
      console.log('videoBGM');
      videoBGM.src = url;
      videoBGM.volume = volume;
      
      videoBGM.on('ended',function(){
    	  console.log('ended');
        //$(this).remove();
        self.get();
      });
      */
    }

    // フェードアウト
    this.fadeOut = function () {
      console.log('bgm fadeout');
      clearTimeout(tid);
      tid = setTimeout(function(){
        if(!$melocy) {
          return;
        }
        volume -= FADE_STEP;
        if(volume < 0) {
          volume = 0;
          $melocy[0].volume = volume;
          return;
        }
        else {
          $melocy[0].volume = volume;
          self.fadeOut();
        }
      },FADE_SPEED_MS);
    }

    // フェードイン
    this.fadeIn = function () {
      console.log('bgm fadein');
      clearTimeout(tid);
      tid = setTimeout(function(){
        if(!$melocy) {
          return;
        }
        volume += FADE_STEP;
        if(volume > MAX_VOLUME) {
          volume = MAX_VOLUME;
          $melocy[0].volume = volume;
          return;
        }
        else {
          $melocy[0].volume = volume;
          self.fadeIn();
        }
      },FADE_SPEED_MS);
    }

    // 音量０にする
    this.mute = function () {
      $melocy[0].volume = 0;
    }

    // 音量を戻す
    this.resume = function () {
      $melocy[0].volume = volume;
    }
  }

  bgmManager = new BGMManager();
  bgmManager.get();

  function EmotionManager() {
    var self = this;
    var tid;
    this.status = 'wait';
    var $edi = $('#djedi');
    this.paku = function() {
      var arr = [
        requestone_server+'images/edi6.svg',
        requestone_server+'images/edi1.svg']
      $edi.attr('src',_.sample(arr));
      tid = setTimeout(
        function(){self.paku()},
        (Math.random()*(500-100)+100)
      );
    }
    this.wait = function() {
      $edi.attr('src',requestone_server+'images/edi2.svg');
      tid = setTimeout(function(){
        $edi.attr('src',requestone_server+'images/edi1.svg');
        tid = setTimeout(
          function(){self.wait()},
          (Math.random()*(10000-1000)+1000)
        );
      },100);
    }

    this.listening = function() {
      tid = setTimeout(function(){
        var arr = [
          requestone_server+'images/edi2.svg',
          requestone_server+'images/edi5.svg',
          requestone_server+'images/edi8.svg'];
        $edi.attr('src',_.sample(arr));
        tid = setTimeout(
          function(){self.listening()},
          (Math.random()*(10000-1000)+1000)
        );
      },100);
    }

    this.heart = function() {
      $edi.attr('src',requestone_server+'images/edi7.svg');
    }

    this.angry = function() {
      $edi.attr('src',requestone_server+'images/edi3.svg');
    }

    this.setEmotion = function (emoName) {
      clearTimeout(tid);
      self.status = emoName;
      self[self.status]();
    }
    self[self.status]();
  }

  var emotionManager = new EmotionManager();
});

function VoiceTextManager() {
	var self = this;
	this.textArr = [];
	this.speak = function(text,emittype,cb) {

  		io.sockets.emit('radio_log_sep','sep');
		if(!emittype) {
			emittype = '';
		}
		if(typeof cb !== 'function') {
			cb = '';
		}
		if(typeof text !== 'undefined') {
			this.textArr = text.split(/、|。|¥n|\r\n/);
		}
		self.emitVoice(emittype,cb);
	}

	this.emitVoice = function(emittype,cb) {
		console.log('self.textArr.length',self.textArr.length)
		var text = self.textArr.shift().trim();
		text = text.replace(/（.*）/g,'');
		text = text.replace(/\*/g,'');
		text = text.replace(/\＊/g,'');
		console.log('voice request',text);
		var voice = new VoiceText('2fdo27wgqvdymrqw');
		voice
		.speaker(voice.SPEAKER.HIKARI)
		.emotion(voice.EMOTION.HAPPINESS)
		.emotion_level(voice.EMOTION_LEVEL.HIGH)
		.pitch(10)
		.speed(10)
		.volume(200)
		.speak(text, function(e, buf) {
			console.log(e,buf);
			if(text) {
				console.log('emittype',emittype);
				if(emittype == 'emergency') {
					io.sockets.emit('radio_log', text);
					io.sockets.emit('emergency', buf.toString('base64'));
				}
				else if(emittype == 'edisonaction') {
					io.sockets.emit('radio_log', text);
					io.sockets.emit('edisonaction', buf.toString('base64'));
				}
				else {
					console.log('callback',text);
					io.sockets.emit('radio_log', text);
					io.sockets.emit('voicetext', buf.toString('base64'));
				}
			}

			if(self.textArr.length == 0) {
				console.log('voice callback',cb)
				if(typeof cb === 'function') {
					cb();
				}
				return;
			}
			else {
				self.emitVoice(emittype,cb);
			}
		});
	}


	this.twitterVoice = function(tweettext) {
		console.log('voice tweettext',tweettext);
		if(tweettext.match(/^RT/)) {
			return;
		}
		var t = tweettext.replace(/(?:^|[^ｦ-ﾟー゛゜々ヾヽぁ-ヶ一-龠ａ-ｚＡ-Ｚ０-９a-zA-Z0-9&_\/]+)[#＃]([ｦ-ﾟー゛゜々ヾヽぁ-ヶ一-龠ａ-ｚＡ-Ｚ０-９a-zA-Z0-9_]*[ｦ-ﾟー゛゜々ヾヽぁ-ヶ一-龠ａ-ｚＡ-Ｚ０-９a-zA-Z]+[ｦ-ﾟー゛゜々ヾヽぁ-ヶ一-龠ａ-ｚＡ-Ｚ０-９a-zA-Z0-9_]*)/g,'');
		t = t.replace(/(@[A-Za-z0-9_]{1,15})/);

		var voice = new VoiceText('2fdo27wgqvdymrqw');
		voice
		.speaker(_.sample(voice.SPEAKER))
		.emotion(voice.EMOTION.HAPPINESS)
		.emotion_level(voice.EMOTION_LEVEL.HIGH)
		.pitch(10)
		.speed(10)
		.volume(200)
		.speak(text, function(e, buf) {
			io.sockets.emit('twitter_log', 'ツイート : '+tweettext);
			io.sockets.emit('twitter', buf.toString('base64'));
		});
	}
}

var voiceTextManager = new VoiceTextManager();