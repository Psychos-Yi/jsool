var jsool=function(){var a=[],b=[],c=false,d=false,f={},i=0;f.namespace=function(e){e=e.split(/\./);for(var h,j=window,l=0,m;m=e[l++];){h=j[m];if(typeof h==="undefined")j[m]={};j=j[m]}};f.doReady=function(){for(var e=0;e<b.length;e++)try{b[e]()}catch(h){if(typeof console!="undefined"){console.error(h.message||h.toString());console.info(h)}else{alert(h.description||h.toString());throw h;}}};f.prepareSystem=function(){for(var e=0;e<a.length;e++)a[e]()};if(window.addEventListener)window.addEventListener("load",
function(){jsool.start();delete jsool.start;window.removeEventListener("load",arguments.callee,false)},false);else window.onload=function(){jsool.start();delete jsool.start;window.onload=null};return{onReady:function(e){b.push(e);this.isReady()&&e.call(jsool,[])},onSystemReady:function(e){a.push(e);this.isReady()&&e.call(jsool,[])},time:function(){return+new Date},start:function(){c=true;f.prepareSystem();d=true;f.doReady()},isReady:function(){return d&&c},emptyFn:function(){},apply:function(e,h,
j){j&&jsool.apply(e,j);if(e&&h&&typeof h=="object")for(var l in h)e[l]=h[l];return e},applyIf:function(e,h){if(e)for(var j in h)jsool.isDefined(e[j])||(e[j]=h[j]);return e},copy:function(e){if(typeof e==="object"){var h;h=e.cls?new e.cls:{};jsool.apply(h,e)}return h},iterate:function(e,h){for(var j in e)typeof e[j]!=="function"&&h(j,e[j])},id:function(e){e.id=e.id||"jsool-"+i++;return e.id},isDefined:function(e){return typeof e!=="undefined"},isArray:function(e){return e.constructor==Array},isObject:function(e){return typeof e===
"object"},isNumber:function(e){return typeof e==="number"},isBoolean:function(e){return typeof e==="boolean"},isDate:function(e){return e.constructor==Date},isFunction:function(e){return typeof e==="function"},namespace:f.namespace}}();
jsool.$extends=function(a,b,c){var d;if(typeof a!="function")return null;if(b.cons&&typeof b.cons=="function"){d=function(h,j){h=b.cons;j=a;return function(){j.apply(this,arguments);h.apply(this,arguments)}}();delete b.cons}else if(b.ccons&&typeof b.ccons=="function"){d=function(){var h=b.ccons;return function(){h.apply(this,arguments)}}();delete b.ccons}else d=function(){return function(){a.apply(this,arguments)}}();for(var f in a.prototype)d.prototype[f]=a.prototype[f];if(jsool.isIE)d.prototype.toString=
a.prototype.toString;for(var i in b)d.prototype[i]=b[i];f=function(){return function(){a.apply(this,arguments)}}();for(var e in a.prototype)if(typeof a.prototype[e]=="function")f[e]=function(){var h=a.prototype[e];return function(){return h.apply(this,arguments)}}();d.prototype.supercls=a;d.prototype.$super=f;d.prototype.type=c;return d.prototype.cls=d};var $extends=jsool.$extends;Number.prototype.instanceOf=function(a){return a==Number||typeof a=="number"};Number.prototype.type="Number";Number.prototype.cls=Number;Number.prototype.supercls=Object;Number.isNumber=function(a){return typeof a=="number"};jsool.namespace("js.core");js.core.Number=Number;jsool.applyIf(String.prototype,{replaceAll:function(a,b){for(var c=this,d=c.indexOf(a);d>-1;){c=c.replace(a,b);d=c.indexOf(a)}return c},toCharArray:function(){for(var a=[],b=0;b<this.length;b++)a.push(this[b]);return a},trim:function(){return this.replace(/^\s*([\S\s]*?)\s*$/,"$1")},hash:0,hashCode:function(){var a=this.hash;if(a==0){for(var b=0,c=0;c<this.length;c++)a=31*a+this.charCodeAt(b++);this.hash=a}return a},instanceOf:function(a){return a==String||a==js.core.Object},substr:function(a,b){if(b==
null)b=this.length-a;return substring(this,a+1,b)},lastIndexOf:function(a,b){size=a.length;b==null?b=this.length-size+1:++b;if(a.length==0)return b-1;for(;b>=0&&substring(this,b--,size)!=a;);return b==-1?-1:b}});String.isString=function(a){return typeof a=="string"};
String.decodeHTML=function(a){var b=RegExp("&#[0-9]{1,3};","g");if(b=a.match(b))for(var c=function(i){i=i.substring(2);i=i.substring(0,i.length-1);i=window.parseInt(i,10);return String.fromCharCode(i)},d=0;d<b.length;d++){var f=c(b[d]);a=a.replace(b[d],f)}return a};String.encodeHTML=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charAt(c);d>="a"&&d<="z"||d>="A"&&d<="Z"||d>="0"&&d<="9"?b.push(d):b.push("&#"+a.charCodeAt(c)+";")}return b.join("")};jsool.namespace("js.core");js.core.String=String;Array.isArray=function(a){return a.constructor==Array};Array.iterate=function(a,b){for(var c=0,d;d=a[c++];)b(c,d)};
jsool.applyIf(Array.prototype,{shuffle:function(){this.sort(function(){return Math.random()>0.5?1:-1})},instanceOf:function(a){return a==Array},forEach:function(a){for(var b=this.length,c=0;c<b;c++)a(this[c])},every:function(a){for(var b=this.length;b--;)if(!a(this[b]))return false;return true},filter:function(a){for(var b=this.length,c=[],d=0;d<b;d++)a(this[d])&&c.push(this[d]);return c},map:function(a){for(var b=this.length,c=[],d=0;d<b;d++)c.push(a(this[d]));return c},indexOf:function(a,b){var c=
this.length>>>0,d=Number(b)||0;d=d<0?Math.ceil(d):Math.floor(d);if(d<0)d+=c;for(;d<c;d++)if(d in this&&this[d]===a)return d;return-1},clone:function(){for(var a=[],b=0,c;c=this[b++];)a.push(c);return a},concat:function(a){for(var b=[],c,d=0;c=this[d++];)b.push(c);for(d=0;c=a[d++];)b.push(c);return b},remove:function(a){for(var b=0;b<this.length;b++)a==this[b]&&this.slice(b,1)},contains:function(a){return this.indexOf(a)>=0}});Array.MAX_LENGTH=4294967295;jsool.namespace("js.core");js.core.Array=Array;jsool.namespace("js.core");js.core.Object=function(){};
js.core.Object.prototype={hash:0,type:"js.core.Object",cls:js.core.Object,supercls:js.core.Object,hashCode:function(){if(this.hash==0)this.hash=Math.round(Math.random()*1E3)+(new Date).getTime();return this.hash},equals:function(a){if(a==null)return false;if(typeof a!="object")return false;for(var b in this)if(this[b]!=a[b])return false;return true},toString:function(){return this.type+"@"+this.hashCode()},instanceOf:function(a){if(a==js.core.Object)return true;else if(this.cls==a)return true;else{var b=
this.cls.prototype.supercls;do{if(b==a)return true;b=b.prototype.supercls}while(b!=js.core.Object);return false}},clone:function(){var a=new this.supercls;jsool.apply(a,this);return a}};Object.isObject=function(a){return typeof a==="object"};js.core.Browser={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS";jsool.isIE=this.browser=="Explorer";jsool.isFF=this.browser=="Firefox";jsool.isOpera=this.browser=="Opera";jsool.isChrome=this.browser=="Chrome";jsool.isSafari=this.browser=="Safari";jsool.isWebKit=jsool.isChrome||jsool.isSafari},
searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string,d=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(c.indexOf(a[b].subString)!=-1)return a[b].identity}else if(d)return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(b!=-1)return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",
versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,
subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};
js.core.Browser.init();jsool.namespace("js.core");
js.core.Exception=$extends(js.core.Object,{cons:function(a,b,c,d){if(a==null)throw Error("The Exception message must not be null");this.message=a;this.source=b;this.method=c;this.cause=d},message:null,source:null,method:null,cause:null,getMethod:function(){if(!this.source)return"";var a=this.source.cls.prototype,b=this.method.callee,c;for(var d in a)if(a[d]==b)c="."+d+"(";a=[];for(b=0;b<this.method.length;b++)typeof this.method[b]=="object"?a.push(this.method[b].type||this.method[b]):a.push(this.method[b]);
return c+a.join(",")+")"},toString:function(){var a;if(this.source){a=this.source.type;if(this.method)a+=this.getMethod()}else a=this.type;a=a+": "+this.message;if(this.cause)a=a+"\n"+this.cause.toString();return a}},"js.core.Exception");jsool.namespace("js.core");
js.core.EventManager=function(){function a(i,e,h,j){var l=jsool.id(i);l=f[l]=f[l]||{};l=l[e]=l[e]||[];j=j||i;var m=function(k){k=k||window.event;k={original:k,x:jsool.isIE?k.x||k.clientX+document.body.scrollLeft:k.pageX,y:jsool.isIE?k.y||k.clientY+document.body.scrollTop:k.pageY,source:k.target||k.source||k.srcElement,timestamp:jsool.time(),type:k.type};h.call(j,k)};l.push({EVENT:e,FUNCTION:h,HANDLER:m,ELEMENT:i,SCOPE:j});jsool.isIE?i.attachEvent("on"+e,m):i.addEventListener(e,m,false);return true}
function b(i,e,h){jsool.isIE?i.detachEvent("on"+e,h):i.removeEventListener(e,h,false)}function c(i,e,h){var j=jsool.id(i),l=f[j][e];if(h)for(var m=0,k;k=l[m++];){if(k.FUNCTION==h){b(i,e,k.HANDLER);delete f[j][e][m]}}else{for(m=0;k=l[m++];)b(i,e,k.HANDLER);delete f[j][e]}}function d(i){var e=jsool.id(i);jsool.iterate(f[e],function(h,j){Array.iterate(j,function(l,m){b(i,h,m.HANDLER);delete f[e][h][l]});delete f[e][h]})}var f={};return{on:a,addListener:a,un:c,removeListener:c,destroy:d,detroyListeners:d,
isDomEvent:function(i){return i.match(domEventsRe)!=null}}}();jsool.namespace("js.util");js.util.Collection=$extends(js.core.Object,{add:jsool.emptyFn,addAll:function(a){for(a=a.iterator();a.hasNext();)this.add(a.next())},contains:jsool.emptyFn,isEmpty:function(){return this.size()==0},size:jsool.emptyFn,iterator:jsool.emptyFn,remove:jsool.emptyFn,toArray:jsool.emptyFn},"js.util.Collection");jsool.namespace("js.util");
js.util.MixedCollection=$extends(js.util.Collection,{cons:function(){this.map={};this.data=[];this.keys=[]},map:null,data:null,keys:null,add:function(a,b){if(!String.isString(a))throw new js.core.Exception("Illegal argument: "+a,this,arguments);this.map[a]=b;this.data.push(b);this.keys.push(a)},get:function(a){if(typeof a==="number")return this.map[this.keys[a]];else if(typeof a==="string")return this.map[a];return null},addAll:function(a){for(a=a.iterator();a.hasNext();)this.add(a.next())},contains:function(a){return this.data.indexOf(a)!=
-1},isEmpty:function(){return this.size()==0},size:function(){return this.data.length},iterator:function(){return new js.util.ArrayList.Iterator(this.data)},remove:function(a){this.keys.remove(this.keys[this.data.indexOf(a)]);this.data.remove(a);for(var b in this.map)if(this.map[b]==a){delete this.map[b];return}},toArray:function(){return this.data.clone()}},"js.util.MixedCollection");jsool.namespace("js.util");js.util.List=$extends(js.util.Collection,{get:jsool.emptyFn,clear:jsool.emptyFn,indexOf:jsool.emptyFn},"js.util.List");jsool.namespace("js.util");
js.util.ArrayList=$extends(js.util.List,{cons:function(a){this.data=[];if(a!=null)if(Array.isArray(a))this.addAll(a);else typeof a=="object"&&a.instanceOf(js.util.Collection)&&this.addAll(a)},data:null,_size:0,indexOf:function(a){if(typeof a=="object")for(var b=0;b<this._size;b++){if(a.equals(this.data[b]))return b}else return this.data.indexOf(a);return-1},lastIndexOf:function(a){if(a==null)for(var b=this._size-1;b>=0;b--){if(this.data[b]==null)return b}else if(typeof a=="object")for(b=this._size-
1;b>=0;b--){if(a.equals(this.data[b]))return b}else for(b=this._size-1;b>=0;b--)if(a==this.data[b])return b;return-1},clone:function(){var a=new js.util.ArrayList;a.addAll(this.data);return a},toArray:function(){return this.data.clone()},get:function(a){if(a>=this._size)throw new js.core.Exception("Array Index Out Of Bounds",this,arguments);return this.data[a]},add:function(a,b){if(b==null){this.data.push(a);this._size++}else{if(typeof b!="number")throw new js.core.Exception("Invalid argument type: "+
typeof number,this,arguments);if(b>=this._size)throw new js.core.Exception("Array index out of bounds: "+number,this,arguments);this.data.splice(b,0,a)}},remove:function(a){if(a>=this.length||a<0)throw new js.core.Exception("Array index out of bounds: "+a,this,arguments);this.data.splice(a,1)},clear:function(){delete this.data;this.data=[];this._size=0},addAll:function(a){if(a.instanceOf&&a.instanceOf(js.util.Collection))for(a=a.iterator();a.hasNext();){this.data.push(a.next());this._size++}else{var b=
this;Array.iterate(a,function(c,d){b.data.push(d);b._size+=1})}},size:function(){return this._size},iterator:function(){return new js.util.ArrayList.Iterator(this.data)},contains:function(a){return this.indexOf(a)>=0}},"js.util.ArrayList");
js.util.ArrayList.Iterator=$extends(js.core.Object,{cons:function(a){js.core.Object.apply(this,arguments);this.size=a.length;this.list=a},size:0,index:0,list:null,hasNext:function(){return this.index<this.size},next:function(){if(!this.hasNext())throw new js.core.Exception("Array Index Out Of Bounds: "+this.index,this,arguments);var a=this.list[this.index];this.index++;return a},nextIndex:function(){return this.index}},"js.util.ArrayList.Iterator");jsool.namespace("js.util");
js.util.LinkedList=$extends(js.util.List,{cons:function(){this.header={element:null,next:null,previous:null};this.header.next=this.header.previous=this.header},header:null,last:null,_size:0,_newEntry:function(a,b,c){return{element:a,next:b,previous:c}},_addBefore:function(a,b){var c=this._newEntry(a,b,b.previous);c.previous.next=c;c.next.previous=c;this._size++},_entry:function(a){if(a<0||a>=this._size)throw new js.core.Exception("Index Out Of Bounds: "+a,this,arguments);var b=this.header;if(a<this._size>>
1)for(var c=0;c<=a;c++)b=b.next;else for(c=this._size;c>a;c--)b=b.previous;return b},_remove:function(a){if(a==this.header)throw new js.core.Exception("No Such Element",this,arguments);a.previous.next=a.next;a.next.previous=a.previous;a.next=a.previous=null;a.element=null;this._size--},add:function(a,b){if(b==null)this._addBefore(a,this.header);else{if(typeof b!="number")throw new js.core.Exception("Invalid argument type: "+typeof number,this,arguments);if(b>=this._size)throw new js.core.Exception("Array index out of bounds: "+
number,this,arguments);this._addBefore(a,b==this._size?this.header:this._entry(b))}},get:function(a){return this._entry(a).element},set:function(a,b){this._entry(b).element=a},remove:function(a){if(typeof a=="number")this._remove(this._entry(a));else if(typeof a=="object")for(var b=this.header.next;b!=this.header;b=b.next)a==b.element&&this._remove(b)},clear:function(){for(var a=this.header.next;a!=this.header;){var b=a.next;a.next=a.previous=null;a.element=null;a=b}this.header.next=this.header.previous=
this.header;this._size=0},addAll:function(a){if(a.iterator)for(a=a.iterator();a.hasNext();)this.add(a.next());else for(var b=0;b<a.length;b++)this.add(a[b])},toArray:function(){for(var a=[],b=this.header.next;b!=this.header;b=b.next)a.push(b.element);return a},indexOf:function(a){for(var b=0,c=this.header.next;c!=this.header;c=c.next){if(a==c.element)return b;b++}return-1},contains:function(a){return this.indexOf(a)!=-1},iterator:function(){return new js.util.LinkedList.Iterator(this)},size:function(){return this._size},
clone:function(){var a=new js.util.LinkedList;a.addAll(this);return a}},"js.util.LinkedList");
js.util.LinkedList.Iterator=$extends(js.core.Object,{cons:function(a){js.core.Object.apply(this,arguments);this.size=a._size;this.nextNode=a.header.next;this.header=a.header},size:0,nextNode:null,header:null,index:0,hasNext:function(){return this.nextNode!=this.header},next:function(){if(!this.hasNext())throw new js.core.Exception("No Such Element",this,arguments);var a=this.nextNode;this.nextNode=a.next;this.index++;return a.element},nextIndex:function(){return this.index+1}},"js.util.LinkedList.Iterator");jsool.namespace("js.util");
js.util.HashSet=$extends(js.util.Collection,{cons:function(){this.set={}},set:null,_size:0,add:function(a){var b=typeof a;if(b=="object"&&a.hashCode)b=a.hashCode();else if(b=="number"||b=="string")b=a.toString();else throw new js.core.Exception("Invalid argument type: "+a.toString(),this,arguments);this.set[b]||this._size++;this.set[b]=a},mapCode:function(a){return typeof a=="object"&&a.hashCode?a.hashCode():a.toString()},addAll:function(a){if(a.instanceOf(js.util.Collection))for(a=a.iterator();a.hasNext();)this.add(a.next());
else if(Array.isArray(a))for(var b=0;b<a.length;b++)this.add(a[b])},contains:function(a){if(a=="toString")return null;return this.set[this.mapCode(a)]!=null},clear:function(){this._size=0;this.set={}},remove:function(a){delete this.set[this.mapCode(a)]&&this._size--},size:function(){return this._size},toArray:function(){var a=[];for(var b in this.set)a.push(this.set[b]);return a},iterator:function(){return new js.util.HashSet.Iterator(this.set)}},"js.util.HashSet");
js.util.HashSet.Iterator=$extends(js.core.Object,{constructor:function(a){js.core.Object.apply(this,arguments);this.data=[];for(var b in a){this.data.push(b);this.size++}},data:null,index:0,size:0,hasNext:function(){return this.index<this.size},next:function(){if(!this.hasNext())throw new js.core.Exception("Array Index Out of Bounds: "+this.index,this,arguments);var a=this.data[this.index];this.index++;return a},nextIndex:function(){return this.hasNext()?this.index+1:-1}},"js.util.HashSet.Iterator");jsool.namespace("js.util");js.util.Map=$extends(js.core.Object,{containsKey:jsool.emptyFn,containsValue:jsool.emptyFn,size:jsool.emptyFn,clear:jsool.emptyFn,put:jsool.emptyFn,get:jsool.emptyFn,isEmpty:function(){return this.size()<=0}},"js.util.Map");jsool.namespace("js.util");
js.util.HashMap=$extends(js.util.Map,{cons:function(){this.map={};this.keys={}},values:null,map:null,_size:0,keys:null,put:function(a,b){var c=typeof a;if(c=="object"&&a.hashCode)c=a.hashCode();else if(c=="number"||c=="string")c=a.toString();else throw new js.core.Exception("Invalid argument type: "+a.toString(),this,arguments);c in this.keys&&this._size--;this._size++;this.keys[c]=c;this.map[c]=b;return true},containsKey:function(a){return this.mapCode(a)in this.keys},containsValue:function(a){for(var b in this.map)if(this.map[b]==
a)return true;return false},get:function(a){return this.map[this.mapCode(a)]},size:function(){return this._size},remove:function(a){if(this.get(a)==null)return false;delete this.map[this.mapCode(a)];this._size--;return true},mapCode:function(a){return typeof a=="object"&&a.hashCode?a.hashCode():a.toString()},contains:function(a){return this.containsValue(a)},clear:function(){this._size=0;this.map={}}},"js.util.HashMap");jsool.namespace("js.util");
js.util.ReferenceMap=$extends(js.util.Map,{cons:function(){this.keys=new js.util.LinkedList;this.values=new js.util.LinkedList},values:null,keys:null,put:function(a,b){var c=this.keys.indexOf(a);if(c>=0)this.values.add(b,c);else{this.keys.add(a);this.values.add(a)}},containsKey:function(a){return this.keys.contains(a)},containsValue:function(a){return this.values.contains(a)},size:function(){return this.keys.size()},clear:function(){this.keys.clear();this.values.clear()},get:function(a){a=this.keys.indexOf(a);
return a<0?null:this.values.get(a)}},"js.util.ReferenceMap");jsool.namespace("js.util");
js.util.StringBuilder=$extends(js.core.Object,{cons:function(a){this.buffer=[];a&&this.append(a)},_length:0,buffer:null,append:function(a){a=String(a);this.buffer.push(a);this._length+=a.length;return this},clear:function(){this.buffer=[]},toString:function(){return this.buffer.join("")},deleteCharAt:function(a){if(typeof a!="number")throw new js.core.Exception("Invalid argument type",this,arguments);if(a>this._length||a<0)throw new js.core.Exception("Array out of bounds",this,arguments);var b=this.buffer.join("");
this.clear();if(a==0)this.append(b.substring(1));else if(a==this._length)this.append(b.substring(0,this._length-1));else{this.append(b.substring(0,a));this.append(b.substring(a+1))}},length:function(){return this._length}},"js.util.StringBuilder");jsool.namespace("js.util");js.util.Locale=$extends(js.core.Object,{cons:function(a){for(var b=this.cache.length,c=0;c<b;c++)if(this.cache[c].language==a)return this.cache[c];this.language=a;this.cache.push(this)},cache:[],language:null,weekdays:null,months:null,datePattern:null},"js.util.Locale");js.util.Locale.DEFAULT=null;
jsool.onSystemReady(function(){var a=js.util.Locale,b=new js.util.Locale("en-US");b.weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];b.months=["January","February","March","April","May","June","July","August","September","October","November","December"];b.datePattern="MM/dd/yyyy";a.USA=b;b=new js.util.Locale("pt-BR");b.weekdays=["Domingo","Segunda-feira","Terca-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"];b.months=["Janeiro","Fevereiro","Marco","Abril",
"Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];b.datePattern="dd/MM/yyyy";a.BRAZIL=b;js.util.Locale.DEFAULT=a.USA});jsool.namespace("js.util");js.util.Serializable=$extends(js.core.Object,{serialize:function(){var a=this.cls.prototype,b=new js.util.StringBuilder,c;b.append("{");for(var d in a){c=typeof a[d];if(c=="string")b.append(d).append(': "').append(a[d]).append('",');else if(c=="number")b.append(d).append(": ").append(a[d]).append(",");else if(c=="boolean")b.append(d).append(": ").append(a[d]?"TRUE":"FALSE").append(",")}b.deleteCharAt(b.length());b.append("}");return b.toString()}},"js.util.Serializable");jsool.namespace("js.util");
js.util.DateFormat=$extends(js.core.Object,{cons:function(a,b){this.setLocale(b?b:js.util.Locale.DEFAULT);this.pattern=a?a:this.pattern;this.patternKeyMap=new js.util.HashMap;for(var c=0,d;d=this.patterns[c++];)this.patternKeyMap.put("{"+d.key+"}",d)},pattern:"yyyy/mm/dd",locale:null,compiled:null,weekdays:null,months:null,patternKeyMap:null,format:function(a){for(var b=new String(this.pattern),c,d=this.patterns.length,f=0;f<d;f++){c=this.patterns[f];if(b.search(c.pattern)>=0)b=b.replace(c.pattern,
this["get"+c.name](a))}return b},setLocale:function(a){if(!a.instanceOf(js.util.Locale))throw new js.core.Exception("Invalid argument: "+a,this,arguments);this.locale=a;this.months=a.months;this.weekdays=a.weekdays;this.pattern=a.datePattern;this.compiled=null},compile:function(){for(var a=new String(this.pattern),b,c=this.patterns.length,d=0;d<c;d++){b=this.patterns[d];a=a.replace(b.pattern,"{"+b.key+"}")}this.compiled=a},parse:function(a){if(!String.isString(a))throw new js.core.Exception("invalid argument type: "+
a,this,arguments);this.compiled||this.compile();var b=new Date,c,d,f=this.compiled;for(a=a.toLowerCase();(c=f.indexOf("{"))>=0;){d=f.indexOf("}")+1;a=a.substring(c);c=this.patternKeyMap.get(f.substring(c,d));a=this["parse"+c.name](a,b);f=f.substring(d)}return b},patterns:[{pattern:/y{3,}/,key:"0",name:"LongYear"},{pattern:/y{1,2}/,key:"1",name:"ShortYear"},{pattern:/M{4,}/,key:"2",name:"LongMonth"},{pattern:/M{3}/,key:"3",name:"ShortMonth"},{pattern:/M{2}/,key:"4",name:"LongNumericMonth"},{pattern:/M{1}/,
key:"5",name:"ShortNumericMonth"},{pattern:/d{2,}/,key:"6",name:"LongDay"},{pattern:/d/,key:"7",name:"ShortDay"},{pattern:/E{4,}/,key:"8",name:"LongWeekday"},{pattern:/E{1,3}/,key:"9",name:"ShortWeekday"}],getLongYear:function(a){return new String(a.getFullYear())},getShortYear:function(a){return(new String(a.getFullYear())).substring(2)},getLongMonth:function(a){return this.months[a.getMonth()]},getShortMonth:function(a){return this.months[a.getMonth()].substring(0,3)},getLongNumericMonth:function(a){a=
new String(a.getMonth()+1);return a.length<2?"0"+a:a},getShortNumericMonth:function(a){return new String(a.getMonth()+1)},getLongDay:function(a){a=new String(a.getDate());return a.length<2?"0"+a:a},getShortDay:function(a){return new String(a.getDate())},getLongWeekday:function(a){return this.weekdays[a.getDay()]},getShortWeekday:function(a){return this.weekdays[a.getDay()].substring(0,3)},parseLongYear:function(a,b){var c=a.substring(0,4);b.setYear(parseInt(c));return a.substring(4)},parseShortYear:function(a,
b){var c=a.substring(0,2);c=(new Date).getFullYear().toString().substring(0,2)+c;b.setYear(parseInt(c));return a.substring(2)},parseLongMonth:function(a,b){for(var c=0;a.indexOf(this.months[c].toLowerCase())!=0;)c++;b.setMonth(c);return a.substring(this.months[c].length)},parseShortMonth:function(a,b){for(var c=0;a.indexOf(this.months[c].substring(0,3).toLowerCase())!=0;)c++;b.setMonth(c);return a.substring(3)},parseLongNumericMonth:function(a,b){var c=a.substring(0,2);b.setMonth(window.parseInt(c)-
1);return a.substring(2)},parseShortNumericMonth:function(a,b){var c=false;try{var d=window.parseInt(a.substring(0,2));c=a.charCodeAt(1)<48||a.charCodeAt(1)>57}catch(f){c=true}if(c||d>12){d=window.parseInt(a.substring(0,1));b.setMonth(d-1);return a.substring(1)}else{b.setMonth(d-1);return a.substring(2)}},parseLongDay:function(a,b){var c=a.substring(0,2);b.setDate(window.parseInt(c));return a.substring(2)},parseShortDay:function(a,b){var c=false;try{var d=window.parseInt(a.substring(0,2));c=a.charCodeAt(1)<
48||a.charCodeAt(1)>57}catch(f){c=true}if(c||d>31){d=window.parseInt(a.substring(0,1));b.setDate(d);return a.substring(1)}else{b.setDate(d);return a.substring(2)}}},"js.util.DateFormat");jsool.namespace("js.dom");js.dom.Template=$extends(js.core.Object,{cons:function(){var a=arguments;if(Array.isArray(a[0]))this.html=a[0].join("");else if(a.length>1){var b=[];Array.iterate(a,function(c,d){b.push(d)});this.html=b.join("")}else if(String.isString(a[0]))this.html=a[0]},propertyRe:/\{([\w-]+)\}/g,html:null,compile:function(a){return this.html.replace(this.propertyRe,function(b,c){return jsool.isDefined(a[c])?a[c]:""})}},"js.dom.Template");jsool.namespace("js.dom");
js.dom.Helper=function(){function a(f){if(!d){d=document.getElementById("jsool-proxy");if(!d){d=b.createElement("div");d.style.display="none";d.innerHTML="";d.id="jsool-proxy";c=b.getElementsByTagName("body")[0]}}c.appendChild(d);d.innerHTML=f;var i=b.createDocumentFragment();Array.iterate(d.childNodes,function(e,h){h.nodeType==1&&i.appendChild(h)});d.innerHTML="";c.removeChild(d);return i}var b=window.document,c,d;return{createDom:function(f,i){var e;if(String.isString(f))e=a(f);else if(Array.isArray(f)){e=
b.createDocumentFragment();f.forEach(function(h){js.dom.Helper.createDom(h,e)})}else if(Object.isObject(f)){e=b.createElement(f.tag||"div");jsool.iterate(f,function(h,j){/tag|style|html|children/.test(h)||(e[h]=j)});f.style&&js.dom.Helper.applyStyle(e,f.style);if(f.children)js.dom.Helper.createDom(f.children,e);else if(f.html)e.innerHTML=f.html}if(i)i.append?i.append(e):i.appendChild(e);return e},applyStyle:function(f,i){if(f.nodeType&&i){var e=f.style;jsool.iterate(i,function(h,j){if(typeof j!==
"undefined")e[h]=j})}}}}();jsool.namespace("js.dom");
js.dom.Element=$extends(js.core.Object,{cons:function(a){var b=typeof a;if(b=="string")this.dom=document.createElement(a);else if(b=="object"&&a.tagName)this.dom=a;else throw new js.core.Exception("Invalid tag: "+a,this);this.id=jsool.id(this.dom);js.dom.Element.cache(this)},dom:null,parent:null,getDom:function(){return this.dom},set:function(a,b){if(typeof a=="string")this.dom[a]=b;else if(typeof a=="object")for(var c in a)this.dom[c]=a[c]},get:function(a){return this.dom[a]},getId:function(){return this.id},
append:function(a){var b=typeof a;if(b==="string")this.dom.innerHTML+=a;else if(b==="object")if(a.nodeType)this.dom.appendChild(a);else if(a.instanceOf(js.dom.Element)){a.parent&&a.parent.remove(a);this.dom.appendChild(a.getDom());a.parent=this}},setText:function(a){this.dom.innerHTML="";this.dom.appendChild(document.createTextNode(String.isString(a)?a:new String(a)))},getText:function(){return this.dom.innerHTML},setHtml:function(a){this.dom.innerHTML=String.isString(a)?a:new String(a)},getHtml:function(){return this.dom.innerHTML},
tag:function(){return this.dom.tagName},remove:function(a){a.nodeType||(a=a.getDom());this.getDom().removeChild(a)},on:function(a,b,c){js.core.EventManager.on(this.dom,a,b,c||this)},un:function(a,b){a?js.core.EventManager.un(this.dom,a,b):js.core.EventManager.destroy(this.dom)},destroyListeners:function(){js.core.EventManager.destroy(this.dom)},setClass:function(a){if(typeof a==="string")this.dom.className=a},addClass:function(a){if(a)this.dom.className+=" "+a.trim()},removeClass:function(a){this.dom.className=
this.dom.className.replace(RegExp("\\b"+a.trim()+"\\b","g"),"")},applyStyle:function(a,b){var c=this.dom.style;if(typeof a=="string")c[a]=b;else if(typeof a=="object")for(var d in a)c[d]=a[d]},children:function(){return Raze.query("*",this.dom)},getPosition:function(){for(var a=this.dom,b=0,c=0;a!=null;){b+=a.offsetTop;c+=a.offsetLeft;a=a.offsetParent}return{y:b,x:c}},getBox:function(){var a=this.getPosition(),b=this.dom;a.w=b.clientWidth;a.h=b.clientHeight;return a},getWidth:function(){return this.dom.clientWidth},
getHeight:function(){return this.dom.clientHeight},getParent:function(){return jsool.get(this.dom.parentNode)},destroy:function(){this.getParent()!=null&&this.getParent().remove(this);this.dom.parentNode&&this.dom.parentNode.removeChild(this.dom);this.destroyListeners();for(var a in this.dom)try{this.dom[a]=null}catch(b){}js.dom.Element.unCache(this);delete this.dom},query:function(a,b){return b?Raze.query(a,this.getDom()):js.dom.Element.select(a)},setOpacity:function(a){var b=this.dom.style;if(jsool.isIE)b.filter=
"alpha(opacity="+a*100+")";else b.opacity=a}},"js.dom.Element");js.dom.Element.attributes={"class":"className"};
jsool.onSystemReady(function(){var a=new js.util.HashMap,b=js.dom.Element;b.get=function(c){if(typeof c=="string"){var d=a.get(c);if(d)return d;if(c=document.getElementById(c))return new js.dom.Element(c)}else if(typeof c=="object"&&c.nodeType){if(c.id){d=b.get(c.id);if(d!=null)return d}return new js.dom.Element(c)}return null};jsool.get=b.get;b.cache=function(c){if(c.instanceOf(b)){a.put(c.getId(),c);return true}return false};b.unCache=function(c){if(c.instanceOf(EL)){a.remove(c);return true}return false};
b.query=function(c,d){return Raze.query(c,d)};jsool.query=b.query;b.queryNode=function(c,d){return Raze.queryNode(c,d)};jsool.queryNode=b.queryNode;b.BODY=new js.dom.Element(Raze.queryNode("body"));if(jsool.isIE)b.BODY.addClass("ie");else if(jsool.isFF)b.BODY.addClass("ff");else jsool.isOpera&&b.BODY.addClass("opera")});jsool.namespace("js.dom");
js.dom.CompositeElement=$extends(js.core.Object,{cons:function(a){this.elements=a},elements:[],add:function(a){this.elements.addAll(a)},size:function(){return this.elements.size()},clear:function(){this.elements.clear()},each:function(a,b){for(var c,d=0,f=[];c=this.elements[d++];)f.push(a.apply(b||c,[c]));return f},first:function(){return this.elements[0]},item:function(a){return this.elements[a]},set:function(a,b){var c=this;typeof a==="object"?jsool.iterate(a,function(d,f){Array.iterate(c.elements,
function(i,e){e[d]=f})}):Array.iterate(c.elements,function(d,f){f[a]=b});return this},on:function(a,b){var c=js.core.EventManager;Array.iterate(this.elements,function(d,f){c.on(f,a,b,f)});return this},un:function(a,b){var c=js.core.EventManager;Array.iterate(this.elements,function(d,f){c.un(f,a,b,f)});return this},addClass:function(a){var b=RegExp("\\b"+a+"\\b",g);Array.iterate(this.elements,function(c,d){d.className.match(b)||(d.className+=a.trim())});return this},setClass:function(a){Array.iterate(this.elements,
function(b,c){c.className=a.trim()});return this},removeClass:function(a){var b=RegExp("\\b"+a.trim()+"\\b");Array.iterate(this.elements,function(c,d){d.className=d.className.replace(b,"")});return this},setText:function(a){var b=document.createTextNode(a);Array.iterate(this.elements,function(c,d){d.innerHTML="";d.appendChild(b.cloneNode())});return this},applyStyle:function(a,b){if(typeof a=="string")Array.iterate(this.elements,function(c,d){d.style[a]=b});else typeof a=="object"&&Array.iterate(this.elements,
function(c,d){var f=d.style;jsool.iterate(a,function(i,e){f[i]=e})});return this}},"js.dom.CompositeElement");js.dom.Element.select=function(a,b){var c=Raze.query(a,b);return new js.dom.CompositeElement(c)};jsool.select=js.dom.Element.select;