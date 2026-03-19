(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_P_1", frames: [[122,370,64,67],[188,370,60,63],[250,430,60,60],[310,0,248,428],[0,370,120,160],[0,0,308,368]]},
		{name:"300x250_atlas_NP_1", frames: [[0,0,353,87]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.coin1 = function() {
	this.initialize(ss["300x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.coin2 = function() {
	this.initialize(ss["300x250_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.coin3 = function() {
	this.initialize(ss["300x250_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fox = function() {
	this.initialize(ss["300x250_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.LIGHT_YELLOW = function() {
	this.initialize(ss["300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["300x250_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.main = function() {
	this.initialize(ss["300x250_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(-24,-32,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-32,48,64);


(lib.SYMBOLS__light_001_podl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AAIHOIAAnGIPgAAIAAHGgAvnHOIAAnGIPqAAIAAHGgAAIACIAAnPIPgAAIAAHPgAvnACIAAnPIPqAAIAAHPg");
	this.shape.setTransform(1,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SYMBOLS__light_001_podl, new cjs.Rectangle(-99,-46.3,200,92.5), null);


(lib.gradient_radial_002 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.918)","rgba(255,255,255,0.427)","rgba(255,255,255,0.212)","rgba(255,255,255,0.09)","rgba(255,255,255,0.024)","rgba(255,255,255,0)"],[0,0.161,0.447,0.647,0.8,0.898,1],0,-0.5,0,0,-0.5,51.6).s().p("AlkFlQiUiUAAjRQAAjQCUiUQCUiUDQAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRAAQjQAAiUiUg");
	this.shape.setTransform(50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient_radial_002, new cjs.Rectangle(0,0,101,101), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.941)","rgba(255,255,255,0.8)","rgba(255,255,255,0.6)","rgba(255,255,255,0.251)","rgba(255,255,255,0.09)","rgba(255,255,255,0)"],[0.361,0.447,0.569,0.675,0.808,0.898,1],0,-1,0,0,-1,94.9).s().p("AqQKSQkRkRAAmBQAAmAERkQQEQkRGAAAQGBAAERERQEQEQAAGAQAAGBkQERQkREQmBAAQmAAAkQkQg");
	this.shape.setTransform(93,93);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,186,186), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,248,428), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AoHiuIQPAAQBGAAAABGIAADRQAABGhGAAIwPAAQhGAAAAhGIAAjRQAAhGBGAAg");
	this.shape.setTransform(59,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AoHCvQhGAAAAhGIAAjRQAAhGBGAAIQPAAQBGAAAABGIAADRQAABGhGAAg");
	this.shape_1.setTransform(59,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1,-1,120,37), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgSAkQgKgGgGgJQgFgKAAgLQAAgLAFgJQAFgKAKgEQAJgGAKAAQAMAAAJAGQAJAEAFAKQAFAKAAALIAAAEIhAAAQABAKAIAHQAIAGALAAQAOAAAJgJIAIAJQgGAGgIAEQgIADgKAAQgMAAgJgFgAgQgWQgHAHgBAKIAyAAQgBgKgHgGQgHgHgLABQgJAAgHAFg");
	this.shape.setTransform(85.825,14.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgVApIAAhPIAOAAIAAANQAEgHAHgEQAHgEALABIAAANIgEAAQgMABgGAGQgGAIAAALIAAApg");
	this.shape_1.setTransform(78.525,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgVAkQgJgGgGgJQgEgKAAgLQAAgLAEgJQAGgKAJgEQAKgGALAAQAMAAAKAGQAJAEAGAKQAEAJAAALQAAALgEAKQgGAJgJAGQgKAFgMAAQgLAAgKgFgAgNgYQgGAEgDAGQgEAHAAAHQAAAJAEAFQADAHAGAEQAGADAHAAQAIAAAGgDQAGgEADgHQAEgFAAgJQAAgHgEgHQgDgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_2.setTransform(70.2,14.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AA0ApIAAgsQAAgMgFgFQgGgHgKAAQgLAAgGAHQgHAIAAAMIAAApIgNAAIAAgsQAAgMgGgFQgFgHgKAAQgLAAgGAHQgHAIAAAMIAAApIgPAAIAAhPIAOAAIAAALQAFgGAHgDQAHgEAJABQAJAAAIADQAHAEADAHQAEgGAIgFQAJgDAKAAQAPgBAJAKQAJAIAAASIAAAtg");
	this.shape_3.setTransform(57.475,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAYApIAAgsQAAgMgGgFQgGgHgKAAQgLAAgHAHQgGAIAAAMIAAApIgPAAIAAhPIAOAAIAAALQAEgFAIgEQAHgEAJABQAPgBAJAKQAJAIAAASIAAAtg");
	this.shape_4.setTransform(40.225,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgVApIAAhPIAOAAIAAANQAEgHAHgEQAHgEALABIAAANIgEAAQgMABgGAGQgGAIAAALIAAApg");
	this.shape_5.setTransform(32.425,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgaAjQgIgHAAgKQAAgMAIgFQAHgGASAAIAVAAIAAgDQAAgJgFgGQgFgEgLAAQgGAAgHACQgHADgFAEIgFgMQAFgFAJgCQAJgDAIAAQARAAAJAIQAJAJAAAQIAAAvIgOAAIAAgLQgDAGgIADQgGADgIAAQgOAAgIgGgAgUARQABAGAEAEQAFACAIAAQAHAAAHgDQAGgEACgGIAAgMIgVAAQgTAAAAANg");
	this.shape_6.setTransform(24.1,14.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgSAkQgKgGgGgJQgFgKAAgLQAAgLAFgJQAFgKAKgEQAJgGAKAAQAMAAAJAGQAJAEAFAKQAFAKAAALIAAAEIhAAAQABAKAIAHQAIAGALAAQAOAAAJgJIAIAJQgGAGgIAEQgIADgKAAQgMAAgJgFgAgQgWQgHAHgBAKIAyAAQgBgKgHgGQgHgHgLABQgJAAgHAFg");
	this.shape_7.setTransform(15.225,14.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgjA1IAAhpIAPAAIAABcIA4AAIAAANg");
	this.shape_8.setTransform(6.8,12.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,92.1,23.9), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBZIAAhcQAAgUgJgKQgKgLgRAAQgSAAgLAMQgMAMAAAWIAABXIgyAAIAAiuIAwAAIAAAUQAKgLAPgGQAPgGARAAQAgAAAUAUQAUATAAAnIAABjg");
	this.shape.setTransform(174.025,30.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYCAIAAiuIAxAAIAACugAgWhPQgIgIAAgMQAAgMAIgIQAJgIANAAQAOAAAJAIQAIAIAAALQAAANgIAIQgJAJgOAAQgNAAgJgJg");
	this.shape_1.setTransform(157.875,26.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBPQgXgMgMgVQgMgUAAgaQAAgZAMgUQAMgVAXgLQAVgMAbAAQAcAAAWAMQAVALAMAVQANAUAAAZQAAAagNAUQgMAVgVAMQgWALgcAAQgbAAgVgLgAgfgiQgNANAAAVQAAAWANAOQAMAMATAAQATAAANgMQAMgOAAgWQAAgVgMgNQgNgNgTAAQgTAAgMANg");
	this.shape_2.setTransform(142.35,30.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvBmQgcgPgQgaQgRgcABghQgBghARgbQAQgaAcgPQAcgPAigBQAeAAAXAKQAZALAQATIgiAgQgXgbgiAAQgUAAgRAKQgQAJgKAQQgJARAAAUQAAAVAJAQQAKARAQAJQARAKAUgBQAiAAAXgbIAiAgQgQAUgZAKQgXAKgeAAQgiAAgcgPg");
	this.shape_3.setTransform(120,27.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmBYIgmg2IgnA2Ig3AAIBDhYIhBhXIA5AAIAkA0IAmg0IA2AAIhBBWIBDBZg");
	this.shape_4.setTransform(89.075,30.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBPQgVgMgNgVQgMgUAAgaQAAgZAMgUQANgVAVgLQAWgMAbAAQAbAAAWAMQAWALAMAVQANAUAAAZQAAAagNAUQgMAVgWAMQgWALgbAAQgbAAgWgLgAgfgiQgNANAAAVQAAAWANAOQANAMASAAQAUAAAMgMQANgOAAgWQAAgVgNgNQgMgNgUAAQgSAAgNANg");
	this.shape_5.setTransform(68.8,30.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhVByIAAjjICrAAIAAArIh2AAIAAA8IBoAAIAAApIhoAAIAABTg");
	this.shape_6.setTransform(48.625,27.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYCAIAAiuIAxAAIAACugAgWhPQgIgIAAgMQAAgMAIgIQAJgIANAAQAOAAAJAIQAIAIAAALQAAANgIAIQgJAJgOAAQgNAAgJgJg");
	this.shape_7.setTransform(32.475,26.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZByIhijjIA5AAIBECiIBGiiIA0AAIhiDjg");
	this.shape_8.setTransform(15.525,27.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,188.6,51.3), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdA/QgRgJgKgQQgKgRAAgVQAAgUAKgRQAKgQARgJQARgKAVABQASgBAPAHQAPAGAKAMIgVATQgOgQgVAAQgMAAgLAGQgKAFgFALQgGAKAAAMQAAANAGAKQAFAKAKAGQALAGAMAAQAVAAAOgRIAVAUQgKAMgPAGQgPAHgSAAQgVAAgRgKg");
	this.shape.setTransform(180.675,38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBEQgQgFgJgHIALgYQAJAGAMAEQANAFAMAAQANAAAGgFQAHgEAAgHQAAgEgEgEQgEgDgGgCIgPgFIgbgHQgKgEgHgHQgHgJAAgOQAAgMAGgKQAHgKANgGQANgFATAAQANAAANADQANADAJAGIgKAZQgTgMgUAAQgMAAgHAFQgGAFAAAGQAAAIAHADQAIAEAOADQAQAEAKAEQALADAHAIQAHAIAAAOQAAAMgGAKQgHAKgOAGQgNAFgSABQgRAAgPgFg");
	this.shape_1.setTransform(166.825,38.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BGIAAiLIBDAAQAaAAAOAKQANAKAAARQAAAKgFAIQgFAHgIAFQAMADAGAJQAHAJAAANQAAASgOAKQgOAKgcAAgAgfAuIAlAAQANAAAGgFQAHgEAAgIQAAgSgaAAIglAAgAgfgMIAfAAQAMABAGgFQAHgEAAgIQAAgJgHgEQgGgDgMAAIgfAAg");
	this.shape_2.setTransform(153.225,38.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA3IAAg4QAAgNgFgHQgGgFgKAAQgLgBgHAIQgHAHAAAOIAAA1IgfAAIAAhrIAeAAIAAAMQAGgGAJgEQAJgEALABQATgBAMAMQANANAAAXIAAA9g");
	this.shape_3.setTransform(132.65,40.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAwQgNgHgHgMQgIgNAAgQQAAgPAIgNQAHgMANgHQAOgHAQAAQARAAAOAHQANAHAHAMQAIANAAAPQAAAQgIANQgHAMgNAHQgOAHgRAAQgQAAgOgHgAgTgVQgHAIgBANQABAOAHAIQAIAIALAAQAMAAAIgIQAIgIgBgOQABgNgIgIQgIgIgMAAQgLAAgIAIg");
	this.shape_4.setTransform(119.15,40.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBEQgLgGgIgNQgHgNAAgQQAAgRAHgLQAIgNALgHQANgGAPAAQATgBANANIAAg0IAeAAIAACUIgdAAIAAgNQgMAOgVAAQgPAAgNgHgAgSgBQgIAHAAAOQAAAOAIAHQAHAJAMgBQAMABAHgJQAIgHAAgOQAAgOgIgHQgHgIgMAAQgMAAgHAIg");
	this.shape_5.setTransform(99.65,38.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAwQgOgHgHgMQgIgNAAgQQAAgPAIgNQAHgMANgHQANgHAQAAQAPAAANAGQANAHAHANQAIANAAAPIgBAJIhQAAQACAKAIAGQAIAFALAAQAJAAAGgCQAHgDAFgFIARASQgPARgdAAQgSAAgOgHgAgQgZQgHAGgCALIA0AAQgBgLgIgGQgHgGgKAAQgKAAgHAGg");
	this.shape_6.setTransform(86.825,40.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBPIAAhrIAdAAIAABrgAgNgwQgGgFAAgHQAAgIAGgFQAFgFAIAAQAIAAAGAFQAFAFABAHQgBAIgFAFQgGAFgIAAQgIAAgFgFg");
	this.shape_7.setTransform(77.5,37.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXBLIAAhQIgRAAIAAgYIARAAIAAgFQAAgTALgKQALgLASAAQAHAAAHACQAGABAEADIgIAXQgGgEgGgBQgPABAAAPIAAAFIAbAAIAAAYIgaAAIAABQg");
	this.shape_8.setTransform(71,38.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBPIAAhrIAfAAIAABrgAgNgwQgGgFABgHQgBgIAGgFQAGgFAHAAQAIAAAGAFQAFAFAAAHQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_9.setTransform(63.75,37.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggA3IAAhrIAdAAIAAAOQAFgHAKgFQAJgDAMAAIAAAcIgHAAQgNAAgIAHQgGAIAAANIAAA0g");
	this.shape_10.setTransform(56.925,40.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAwQgOgHgHgMQgIgNAAgQQAAgPAIgNQAHgMANgHQANgHAQAAQAPAAANAGQANAHAHANQAIANAAAPIgBAJIhQAAQACAKAIAGQAIAFALAAQAJAAAGgCQAHgDAFgFIARASQgPARgdAAQgSAAgOgHgAgQgZQgHAGgCALIA0AAQgBgLgIgGQgHgGgKAAQgKAAgHAGg");
	this.shape_11.setTransform(45.875,40.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBGIg8iLIAjAAIApBjIArhjIAhAAIg9CLg");
	this.shape_12.setTransform(32.1,38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNA5QgLgKAAgTIAAgrIgQAAIAAgYIAQAAIAAgaIAfAAIAAAaIAaAAIAAAYIgaAAIAAAqQAAAIADADQAEAEAGAAQAHAAAGgEIAIAWQgFADgGACQgHACgHAAQgTAAgKgKg");
	this.shape_13.setTransform(205.975,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAwQgNgHgJgMQgHgNAAgQQAAgPAHgNQAJgMANgHQANgHARAAQARAAAMAHQANAHAGANIgYANQgJgPgPAAQgMAAgHAIQgJAIABANQgBAOAJAIQAHAIAMAAQAPAAAJgPIAYANQgGANgNAHQgMAHgRAAQgRAAgNgHg");
	this.shape_14.setTransform(196,18.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggAzQgIgEgFgHQgFgIAAgJQAAgPALgIQAMgIAXAAIAYAAQAAgLgHgFQgFgGgMAAQgIAAgJADQgIADgGAEIgLgVQAJgHAMgDQAMgDANAAQAZAAAMALQAOAMAAAYIAAA9IgdAAIAAgOQgJAPgXAAQgMAAgKgEgAgTAVQgBAGAFAEQAEADAJAAQAHAAAGgDQAGgEADgHIAAgLIgUAAQgUAAABAMg");
	this.shape_15.setTransform(183.45,18.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggA3IAAhrIAdAAIAAAOQAFgHAKgFQAJgDAMAAIAAAcIgHAAQgNAAgIAHQgGAIAAANIAAA0g");
	this.shape_16.setTransform(173.775,18.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNA5QgLgKAAgTIAAgrIgQAAIAAgYIAQAAIAAgaIAfAAIAAAaIAaAAIAAAYIgaAAIAAAqQAAAIADADQAEAEAGAAQAHAAAGgEIAIAWQgFADgGACQgHACgHAAQgTAAgKgKg");
	this.shape_17.setTransform(164.575,17.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAXA3IAAg4QAAgNgFgHQgFgFgLAAQgLgBgHAIQgHAHAAANIAAA2IgfAAIAAhrIAeAAIAAAMQAGgGAJgEQAJgEALABQATgBAMAMQANANAAAXIAAA9g");
	this.shape_18.setTransform(153.45,18.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAwQgNgHgHgMQgIgNAAgQQAAgPAIgNQAHgMANgHQAOgHAQAAQARAAAOAHQANAHAHAMQAIANAAAPQAAAQgIANQgHAMgNAHQgOAHgRAAQgQAAgOgHgAgTgVQgHAIgBANQABAOAHAIQAIAIALAAQAMAAAIgIQAIgIAAgOQAAgNgIgIQgIgIgMAAQgLAAgIAIg");
	this.shape_19.setTransform(139.95,18.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdA/QgRgJgKgQQgKgRAAgVQAAgUAKgRQAKgQARgJQARgKAVABQASgBAPAHQAPAGAKAMIgVATQgOgQgVAAQgMAAgLAGQgKAFgFALQgGAKAAAMQAAANAGAKQAFAKAKAGQALAGAMAAQAVAAAOgRIAVAUQgKAMgPAGQgPAHgSAAQgVAAgRgKg");
	this.shape_20.setTransform(126.225,17.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNA5QgLgKAAgTIAAgrIgQAAIAAgYIAQAAIAAgaIAfAAIAAAaIAaAAIAAAYIgaAAIAAAqQAAAIADADQAEAEAGAAQAHAAAGgEIAIAWQgFADgGACQgHACgHAAQgTAAgKgKg");
	this.shape_21.setTransform(108.675,17.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggA3IAAhrIAdAAIAAAOQAFgHAKgFQAJgDAMAAIAAAcIgHAAQgNAAgIAHQgGAIAAANIAAA0g");
	this.shape_22.setTransform(100.575,18.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggAzQgJgEgEgHQgFgIAAgJQAAgPALgIQAMgIAXAAIAYAAQAAgLgHgFQgFgGgMAAQgJAAgIADQgIADgGAEIgLgVQAJgHAMgDQANgDAMAAQAZAAANALQANAMAAAYIAAA9IgdAAIAAgOQgJAPgXAAQgMAAgKgEgAgUAVQAAAGAFAEQAFADAIAAQAHAAAGgDQAHgEACgHIAAgLIgUAAQgUAAAAAMg");
	this.shape_23.setTransform(89.3,18.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA8A3IAAg4QAAgNgGgHQgFgFgKAAQgLgBgGAIQgGAGAAAOIAAA2IgfAAIAAg4QAAgZgUAAQgLgBgGAIQgHAGAAAOIAAA2IgfAAIAAhrIAeAAIAAAMQAGgGAJgEQAIgEALABQALgBAJAFQAJAFAFAIQAHgIAKgFQAKgFAMABQAUAAAMALQAMAMAAAYIAAA9g");
	this.shape_24.setTransform(73.025,18.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggBEQgQgFgJgHIALgYQAJAGAMAEQANAFAMAAQANAAAGgFQAHgEAAgHQAAgEgEgEQgEgDgGgCIgPgFIgbgHQgKgEgHgHQgHgJAAgOQAAgMAGgKQAHgKANgGQANgFATAAQANAAANADQANADAJAGIgKAZQgTgMgUAAQgMAAgHAFQgGAFAAAGQAAAIAHADQAIAEAOADQAQAEAKAEQALADAHAIQAHAIAAAOQAAAMgGAKQgHAKgOAGQgNAFgSABQgRAAgPgFg");
	this.shape_25.setTransform(56.125,17.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAiBGIgigwIggAwIgmAAIA0hGIgxhFIAlAAIAfAuIAgguIAjAAIgxBDIA0BIg");
	this.shape_26.setTransform(36.925,17.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBpAAIAAAaIhJAAIAAAlIBBAAIAAAZIhBAAIAAAzg");
	this.shape_27.setTransform(23.95,17.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPBGIg9iLIAkAAIAqBjIArhjIAfAAIg8CLg");
	this.shape_28.setTransform(9.55,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,212.5,53.2), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coin1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,64,67), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coin2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,60,63), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coin3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,60,60), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.main();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,308,368), null);


(lib.Symbol2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7LGXIAAstMA2XAAAIAAMtg");
	mask.setTransform(176.5,43.5);

	// Layer_1
	this.instance_1 = new lib.LIGHT_YELLOW();
	this.instance_1.setTransform(353,87,1,1,180);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2_1, new cjs.Rectangle(2.5,2.8,348,81.5), null);


(lib.PARTICLES_bounds_podl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,204,0.298)").s().p("EgwIAj9MAAAhH5MBgRAAAMAAABH5g");
	this.shape.setTransform(308.05,230.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PARTICLES_bounds_podl, new cjs.Rectangle(0,0,616.1,460.3), null);


(lib.gradient_radial_002copy16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.918)","rgba(255,255,255,0.427)","rgba(255,255,255,0.212)","rgba(255,255,255,0.09)","rgba(255,255,255,0.024)","rgba(255,255,255,0)"],[0,0.161,0.447,0.647,0.8,0.898,1],0,-0.5,0,0,-0.5,51.6).s().p("AlkFlQiUiUAAjRQAAjQCUiUQCUiUDQAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRAAQjQAAiUiUg");
	this.shape.setTransform(50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient_radial_002copy16, new cjs.Rectangle(0,0,101,101), null);


(lib.gradient_radial_002copy15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.918)","rgba(255,255,255,0.427)","rgba(255,255,255,0.212)","rgba(255,255,255,0.09)","rgba(255,255,255,0.024)","rgba(255,255,255,0)"],[0,0.161,0.447,0.647,0.8,0.898,1],0,-0.5,0,0,-0.5,51.6).s().p("AlkFlQiUiUAAjRQAAjQCUiUQCUiUDQAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRAAQjQAAiUiUg");
	this.shape.setTransform(50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient_radial_002copy15, new cjs.Rectangle(0,0,101,101), null);


(lib.GLOW_WAVE_glow_in = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.918)","rgba(255,255,255,0.427)","rgba(255,255,255,0.212)","rgba(255,255,255,0.09)","rgba(255,255,255,0.024)","rgba(255,255,255,0)"],[0,0.161,0.447,0.647,0.8,0.898,1],0,-0.5,0,0,-0.5,51.6).s().p("AlkFlQiUiUAAjRQAAjQCUiUQCUiUDQAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRAAQjQAAiUiUg");
	this.shape.setTransform(50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GLOW_WAVE_glow_in, new cjs.Rectangle(0,0,101,101), null);


(lib.background_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15181D").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_color, new cjs.Rectangle(0,0,300,250), null);


(lib.SYMBOLS__light_001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol27();
	this.instance.setTransform(-0.2,0,1.7833,1,0,0,0,92.9,93);
	var instanceFilter_1 = new cjs.ColorFilter(0.42,0.42,0.42,1,0,118.32,88.74,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,190,190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SYMBOLS__light_001, new cjs.Rectangle(-165.8,-93,331.70000000000005,186), null);


(lib.Symbol15copy5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As6KIIgSv5ICgg7IX5jbIAAUPg");
	mask.setTransform(258.625,414.35);

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(124,214,1,1,0,0,0,124,214);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15copy5, new cjs.Rectangle(0,0,248,428), null);


(lib.Symbol15copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqHovIUPHqIhTDoIAACTQgcBTgvAZQglARhpgRIvjCOg");
	mask.setTransform(-11.225,260.275);

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(124,214,1,1,0,0,0,124,214);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15copy4, new cjs.Rectangle(0,0,248,428), null);


(lib.Symbol15copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgguAWGIAA5cIQIihQBEAkBjigIANhwIBTjpI0PnqIAAhPIbnEaIJihBIBoAAIasiWIAAW4I35DaIiOA6IAAP8gAuDnWIAEgdg");
	mask.setTransform(133.55,337.7875);

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(124,214,1,1,0,0,0,124,214);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15copy3, new cjs.Rectangle(0,0,248,428), null);


(lib.Symbol15copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjqUQIhdgbI7nkZIAAoEIUIhRIAljNIBBh6IBmh6IBshGIBpg1IAAxaIIlAAIAAQ6IDFBGIB2BnIBkCNIBQCPIBECTIAmBEIU2gaIAAJtI6sCWIhoAAIjfA+IipAeg");
	mask.setTransform(133.55,97.675);

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(124,214,1,1,0,0,0,124,214);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15copy2, new cjs.Rectangle(0,0,248,428), null);


(lib.Symbol15copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApyJeIlVmSIAAw5IePAAIAAbBI2SAag");
	mask.setTransform(246.325,55.8);

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(124,214,1,1,0,0,0,124,214);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15copy, new cjs.Rectangle(0,0,248,428), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtUtzIapAAIAARZIiiEaIiZBxIhnCzI0HBQg");
	mask.setTransform(9.275,56.45);

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(124,214,1,1,0,0,0,124,214);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,248,428), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// face
	this.instance = new lib.Symbol15copy2();
	this.instance.setTransform(124,214,1,1,0,0,0,124,214);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({regY:113.7,scaleY:1.0147,y:112.15},0).wait(1).to({scaleY:1.0197,y:111.7},0).wait(1).to({scaleY:1.0222,y:111.4},0).wait(1).to({scaleY:1.0236,y:111.3},0).wait(1).to({scaleY:1.0241,y:111.25},0).wait(1).to({scaleY:1.0244,y:111.15},0).wait(1).to({scaleY:1.0246},0).wait(1).to({scaleY:1.0247},0).wait(1).to({scaleY:1.0248},0).wait(1).to({regY:214,y:213.95},0).wait(1).to({regY:113.7,scaleY:1.0101,y:112.75},0).wait(1).to({scaleY:1.0051,y:113.25},0).wait(1).to({scaleY:1.0026,y:113.5},0).wait(1).to({scaleY:1.0012,y:113.65},0).wait(1).to({scaleY:1.0007,y:113.7},0).wait(1).to({scaleY:1.0004,y:113.75},0).wait(1).to({scaleY:1.0002},0).wait(1).to({scaleY:1.0001,y:113.7},0).wait(1).to({scaleY:1},0).wait(1).to({regY:214,y:214},0).wait(13));

	// r
	this.instance_1 = new lib.Symbol15copy();
	this.instance_1.setTransform(152.3,77.1,1,1,0,0,0,152.3,77.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:198.8,regY:71.8,rotation:3.2394,x:199.05,y:74.5},0).wait(1).to({rotation:4.3327,x:199.1,y:75.35},0).wait(1).to({rotation:4.8968,x:199.05,y:75.8},0).wait(1).to({rotation:5.1966,x:199.1,y:76.05},0).wait(1).to({rotation:5.309,x:199.05,y:76.15},0).wait(1).to({rotation:5.3721,x:199.1,y:76.2},0).wait(1).to({rotation:5.4138,y:76.25},0).wait(1).to({rotation:5.4415,y:76.3},0).wait(1).to({rotation:5.4586,x:199.05,y:76.25},0).wait(1).to({regX:152.3,regY:77.1,rotation:5.4654,x:152.3,y:77.1},0).wait(1).to({regX:198.8,regY:71.8,rotation:3.2094,x:199.05,y:74.45},0).wait(1).to({rotation:2.146,x:198.9,y:73.6},0).wait(1).to({rotation:1.5092,y:73.05},0).wait(1).to({rotation:1.05,x:198.85,y:72.7},0).wait(1).to({rotation:0.7247,y:72.4},0).wait(1).to({rotation:0.5084,x:198.8,y:72.25},0).wait(1).to({rotation:0.3411,y:72.1},0).wait(1).to({rotation:0.2342,y:72},0).wait(1).to({rotation:0.1785,y:71.95},0).wait(1).to({rotation:0.137,y:71.9},0).wait(1).to({rotation:0.1045,x:198.75},0).wait(1).to({rotation:0.0784,x:198.8,y:71.85},0).wait(1).to({rotation:0.0572},0).wait(1).to({rotation:0.04},0).wait(1).to({rotation:0.0263,x:198.75},0).wait(1).to({rotation:0.0156,x:198.8},0).wait(1).to({rotation:0.0075,y:71.8},0).wait(1).to({rotation:0.0022},0).wait(1).to({regX:152.3,regY:77.1,rotation:0,x:152.3,y:77.1},0).wait(11).to({regX:198.8,regY:71.8,scaleX:0.9501,scaleY:1.001,skewX:-1.9798,x:196.15,y:70.2},0).wait(1).to({scaleX:0.9333,scaleY:1.0014,skewX:-2.648,x:195.2,y:69.6},0).wait(1).to({scaleX:0.9246,scaleY:1.0016,skewX:-2.9927,x:194.75,y:69.3},0).wait(1).to({scaleX:0.92,scaleY:1.0017,skewX:-3.1759,x:194.55,y:69.15},0).wait(1).to({scaleX:0.9183,skewX:-3.2447,x:194.4,y:69.1},0).wait(1).to({scaleX:0.9173,skewX:-3.2832,x:194.35,y:69.05},0).wait(1).to({scaleX:0.9167,skewX:-3.3087},0).wait(1).to({scaleX:0.9162,skewX:-3.3257,x:194.3},0).wait(1).to({scaleX:0.916,skewX:-3.3361},0).wait(1).to({regX:152.3,regY:77.1,scaleX:0.9159,skewX:-3.3403,x:152,y:74.3},0).wait(1).to({regX:198.8,regY:71.8,scaleX:0.9657,scaleY:1.0007,skewX:-1.3605,x:196.9,y:70.7},0).wait(1).to({scaleX:0.9826,scaleY:1.0004,skewX:-0.6923,x:197.8,y:71.2},0).wait(1).to({scaleX:0.9912,scaleY:1.0002,skewX:-0.3475,x:198.25,y:71.5},0).wait(1).to({scaleX:0.9959,scaleY:1.0001,skewX:-0.1643,x:198.45,y:71.7},0).wait(1).to({scaleX:0.9976,scaleY:1,skewX:-0.0956,x:198.55,y:71.75},0).wait(1).to({scaleX:0.9986,skewX:-0.0571,x:198.6},0).wait(1).to({scaleX:0.9992,rotation:-0.0316,skewX:0,x:198.7,y:71.8},0).wait(1).to({scaleX:0.9996,rotation:-0.0146},0).wait(1).to({scaleX:0.9999,rotation:-0.0042,x:198.8},0).wait(1).to({regX:152.3,regY:77.1,scaleX:1,rotation:0,x:152.3,y:77.1},0).wait(13));

	// l
	this.instance_2 = new lib.Symbol15();
	this.instance_2.setTransform(95.4,81.2,1,1,0,0,0,95.4,81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:47.3,regY:72.4,rotation:-3.5461,x:46.9,y:75.35},0).wait(1).to({rotation:-4.743,x:46.8,y:76.4},0).wait(1).to({rotation:-5.3605,x:46.75,y:76.95},0).wait(1).to({rotation:-5.6886,y:77.2},0).wait(1).to({rotation:-5.8117,y:77.3},0).wait(1).to({rotation:-5.8807,x:46.7,y:77.35},0).wait(1).to({rotation:-5.9264},0).wait(1).to({rotation:-5.9568,y:77.45},0).wait(1).to({rotation:-5.9754,x:46.75},0).wait(1).to({regX:95.4,regY:81.2,rotation:-5.983,x:95.45,y:81.2},0).wait(1).to({regX:47.3,regY:72.4,rotation:-3.5132,x:46.9,y:75.35},0).wait(1).to({rotation:-2.3492,x:47,y:74.35},0).wait(1).to({rotation:-1.6521,x:47.15,y:73.75},0).wait(1).to({rotation:-1.1495,y:73.35},0).wait(1).to({rotation:-0.7933,x:47.2,y:73.05},0).wait(1).to({rotation:-0.5566,x:47.25,y:72.85},0).wait(1).to({rotation:-0.3734,y:72.7},0).wait(1).to({rotation:-0.2564,y:72.6},0).wait(1).to({rotation:-0.1954,x:47.3,y:72.55},0).wait(1).to({rotation:-0.15},0).wait(1).to({rotation:-0.1144,y:72.45},0).wait(1).to({rotation:-0.0858},0).wait(1).to({rotation:-0.0626,x:47.35},0).wait(1).to({rotation:-0.0438,x:47.3,y:72.4},0).wait(1).to({rotation:-0.0288,x:47.35},0).wait(1).to({rotation:-0.017,x:47.3},0).wait(1).to({rotation:-0.0083},0).wait(1).to({rotation:-0.0024},0).wait(1).to({regX:95.4,regY:81.2,rotation:0,x:95.4,y:81.2},0).wait(11).to({regX:47.3,regY:72.4,scaleX:0.9167,scaleY:1.003,skewX:3.4157,x:51.55,y:70.75},0).wait(1).to({scaleX:0.8886,scaleY:1.004,skewX:4.5685,x:53.05,y:70.2},0).wait(1).to({scaleX:0.8741,scaleY:1.0046,skewX:5.1633,x:53.8,y:69.95},0).wait(1).to({scaleX:0.8664,scaleY:1.0048,skewX:5.4794,x:54.2,y:69.75},0).wait(1).to({scaleX:0.8635,scaleY:1.005,skewX:5.5979,x:54.35,y:69.7},0).wait(1).to({scaleX:0.8619,skewX:5.6644,x:54.4,y:69.65},0).wait(1).to({scaleX:0.8608,scaleY:1.0051,skewX:5.7084,x:54.45},0).wait(1).to({scaleX:0.8601,skewX:5.7376,x:54.6},0).wait(1).to({scaleX:0.8596,skewX:5.7556,x:54.55},0).wait(1).to({regX:95.4,regY:81.2,scaleX:0.8595,skewX:5.7629,x:95,y:78.4},0).wait(1).to({regX:47.3,regY:72.4,scaleX:0.9428,scaleY:1.0021,skewX:2.3472,x:50.2,y:71.3},0).wait(1).to({scaleX:0.9709,scaleY:1.0011,skewX:1.1943,x:48.7,y:71.85},0).wait(1).to({scaleX:0.9854,scaleY:1.0006,skewX:0.5996,x:48,y:72.15},0).wait(1).to({scaleX:0.9931,scaleY:1.0003,skewX:0.2835,x:47.55,y:72.25},0).wait(1).to({scaleX:0.996,scaleY:1.0002,skewX:0.1649,x:47.45,y:72.35},0).wait(1).to({scaleX:0.9976,scaleY:1.0001,skewX:0.0985,x:47.4},0).wait(1).to({scaleX:0.9987,scaleY:1,skewX:0.0545,x:47.35,y:72.4},0).wait(1).to({scaleX:0.9994,rotation:0.0252,skewX:0,x:47.2},0).wait(1).to({scaleX:0.9998,rotation:0.0073,x:47.3},0).wait(1).to({regX:95.4,regY:81.2,scaleX:1,rotation:0,x:95.4,y:81.2},0).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.9,-100.6,603.2,641);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(24,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,48,64), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(154,184,1,1,0,0,0,154,184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,308,368), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gradient_radial_002();
	this.instance.setTransform(163.15,163.15,3.2366,3.2366,0,0,0,50.4,50.4);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,33,59,101,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,105,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,326.9,326.9), null);


(lib.FLOATING_OBJECT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// IMAGE
	this.instance = new lib.Symbol5();
	this.instance.setTransform(31.3,31.25,0.5,0.5,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FLOATING_OBJECT, new cjs.Rectangle(0,0,62,62), null);


(lib.Symbol32copy10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gradient_radial_002copy16();
	this.instance.setTransform(578.6,148.25,11.4574,2.9416,0,0,0,50.5,50.4);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,255,153,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,105,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32copy10, new cjs.Rectangle(0,0,1157.2,297.1), null);


(lib.Symbol32copy9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gradient_radial_002copy15();
	this.instance.setTransform(578.6,148.25,11.4574,2.9416,0,0,0,50.5,50.4);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,81,93,68,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,105,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32copy9, new cjs.Rectangle(0,0,1157.2,297.1), null);


(lib.Symbol4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Symbol2_1();
	this.instance_1.setTransform(176.5,43.5,1,1,0,0,0,176.5,43.5);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4_1, new cjs.Rectangle(0,0,353,87), null);


(lib.PARTICLES_DOTSconstantCHAOTIC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var max_elements_number = 200;							// максимально разрешенное количество элементов на поле
		var max_speed_x = 0.3;									// максимальная скорость по _x
		var min_speed_x = -0.3;									// минимальная скорость по _x
		var max_speed_y = 0.3;									// максимальная скорость по _y
		var min_speed_y = -0.3;									// минимальная скорость по _y
		var particle_size = 2;
		var max_scale = 0.6;										// максимальный масштаб элемента (_xscale = 0..100)
		var min_scale = 0.2;									// минимальный масштаб элемента (_xscale = 0..100) (значение 100 = "размер все время постоянный")
		var particle_color_1 = "#66FFFF";
		var particle_color_2 = "#66CCFF";
		var particle_color_3 = "#ffffff";
		
		var particle_color_1 = "#FF9900";
		var particle_color_2 = "#66CCFF";
		var particle_color_3 = "#ffffff";
		
		var avg_rotation_change = 1;							// СРЕДНЕЕ изменение поворота ("градусов за 1 кадр") (значение 0 = "нет вращения")
		var avg_alpha_change = -0.01;							// СРЕДНЕЕ изменение прозрачности
		var trace_inteval_time = 0;								// период вывода trace (0 = "не выводить ничего")
		var trace_inteval_id;
		var active_width;										// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)
		var active_height;										// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
		var created_elements_number = 0;						// количество созданных элементов (с самого начала работы)
		var live_elements_number = 0;							// текущее количество элементов на поле
		var skipped = 0;										
		var _this = this;
		var active_proportions;									// соотношкение ширины/высоты активной области
		var speed_slowdown_multiplier = 1.00;					// замедление (без замедления = 1)
		var gravity_x = 0;										// ускорение X
		var gravity_y = 0;									// ускорение Y
		
		main();
		
		function main() {
			_this.podl_mc.visible = false;
			//_this.snow_mc.visible = false; // SYMBOL TO COPY
			_this.stop();
			active_width = Math.round(_this.podl_mc.nominalBounds.width * _this.podl_mc.scaleX);	// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)		
			active_height = Math.round(_this.podl_mc.nominalBounds.height * _this.podl_mc.scaleY);	// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
			active_proportions = active_width / active_height;	
			init();												// начальное создание элементов
		}
		
		// функция начального создания заданного количества элементов 
		function init() {
			for (var i = 0; i < max_elements_number; i++) {
				generate_random_element(true);								// добавление нового элемента
			}
		}
		
		// функция генерация случайных параметров для элемента
		function generate_random_element(initial_adding) {					// initial_adding = начальное ли это добавление
			var element_x;										// начальное положение по _x
			var element_y;										// начальное положение по _y
			var element_speed_x;								// скорость по _x
			var element_speed_y;								// скорость по _y
			var element_scale;									// масштаб (_xscale)
			var sign = Math.floor(Math.random() * 2) * 2 - 1;	// случаный знак = 1 или -1
			var element_rotation_speed;
			var element_alpha_change;
			var element_color;
		
			if (initial_adding == true) {
				// добавляется в любое место 
				element_x = Math.floor(Math.random() * active_width); 
				element_y = Math.floor(Math.random() * active_height); 
			}
			else {
				// добавляется сверху
				element_x = Math.floor(Math.random() * active_width); 
				element_y = 0; 
			}
			
			element_speed_x = min_speed_x + Math.random() * (max_speed_x - min_speed_x); 
			element_speed_y = min_speed_y + Math.random() * (max_speed_y - min_speed_y); 
			element_scale = min_scale + Math.random() * (max_scale - min_scale); 
			element_rotation_speed = avg_rotation_change * (Math.random() * 0.8 + 0.4) * sign;
			element_alpha = Math.random() * 0.8 + 0.4;
			element_alpha_change = avg_alpha_change * (Math.random() * 0.8 + 0.4);
			
			var random_color = Math.random();
			if (random_color > 0.9) {
				element_color = particle_color_3;
			}	
			else if (random_color > 0.5) {
				element_color = particle_color_2;
			}
			else {
				element_color = particle_color_1;
			}
			
		
			add_element(element_x, element_y, element_speed_x, element_speed_y, element_scale, element_rotation_speed, element_alpha, element_alpha_change, element_color);
		}
		
		// фактическое добавление элеиента (в том числе с учетом зависимости одних параметров от других)
		function add_element(element_x, 
								element_y, 
								element_speed_x, 
								element_speed_y, 
								element_scale, 
								element_rotation_speed,
								element_alpha,
								element_alpha_change,
								element_color) {
			var new_name;										// имя нового элеента	
			var obj_mc;											// созданный новый элемент
			var scale_multiplier = 1; 							// зависимость (скорости) от размера
			//var scale_multiplier = element_scale * 2;
			
			new_name = "element_" + created_elements_number + "_mc";
		
			//var obj_mc = new lib.PARTICLES_CHAOTIC_ELEMENT_001();
			obj_mc = new createjs.Shape();
			obj_mc.graphics.beginFill(element_color);
			obj_mc.graphics.drawCircle(1, 0, particle_size);	// x-отступ, y-отступ, радиус							
		
			_this.addChild(obj_mc);	
		
		
			obj_mc.name = new_name;
			
			obj_mc.x = element_x;								// начальное положение по _x
			obj_mc.y = element_y;								// начальное положение по _y
			obj_mc.new_x = obj_mc.x;								
			obj_mc.new_y = obj_mc.y;								
			
			obj_mc.speed_x = element_speed_x * scale_multiplier;// скорость по _x
			obj_mc.speed_y = element_speed_y * scale_multiplier;// скорость по _y
			obj_mc.scaleX = obj_mc.scaleY = element_scale;		// масштаб
			obj_mc.rotation_speed = element_rotation_speed * scale_multiplier;		// скорость вращения элемента со случаным знаком
			obj_mc.rotation = Math.floor(Math.random() * 360);	// случаный начальный поворот, чтобы в самом начале не было синхронного вращения
			obj_mc.new_rotation = obj_mc.rotation;
			obj_mc.alpha = element_alpha;
			obj_mc.alpha_change = element_alpha_change;
			obj_mc.tick_listener = obj_mc.on("tick", element_on_enter_frame, obj_mc, false);
			created_elements_number++;							// количество созданных элементов (с самого начала работы)
			live_elements_number++;								// текущее количество элементов на поле
		}
		
		
		// функция обработчик onEnterFrame() элемента(частицы)
		function element_on_enter_frame(event) {
			
			var kill = false;									// необходимо ли удалять элемент
			var min_distance = 0;								// минимальное расстояние для перерисовки
		
			this.speed_x = (this.speed_x + gravity_x) * speed_slowdown_multiplier;
			this.speed_y = (this.speed_y + gravity_y) * speed_slowdown_multiplier;
			
			this.new_x += this.speed_x;
			this.new_y += this.speed_y;
			this.new_rotation += this.rotation_speed;
			
			this.alpha += this.alpha_change;	
			
			if (Math.abs(this.x - this.new_x) > min_distance) {
				this.x = this.new_x;
				this.rotation = this.new_rotation;
			}
			else {
				this.parent.skipped++;
			}
			
			if (Math.abs(this.y - this.new_y) > min_distance) {
				this.y = this.new_y;
				this.rotation = this.new_rotation;
			}
			else {
				this.parent.skipped++;
			}
			
			
			if ((this.alpha <= 0.2) || (this.alpha >=1)) {
				this.alpha_change = -this.alpha_change;
			}
		
			// проверка на удаление по достижению координат 
			if ((this.new_x < 0) || (this.new_x > active_width) || (this.new_y < 0) || (this.new_y > active_height)) {
				kill = true;
			}
			
			// удаление элемента
			if (kill == true) {
				_this.removeChild(this);	
				this.removeAllEventListeners();
				live_elements_number--;							// текущее количество элементов на поле
				//generate_random_element(true);					// добавление нового элемента
				if (live_elements_number == 0) {
					_this.parent.removeChild(_this);
				}
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// PODL_MC
	this.podl_mc = new lib.PARTICLES_bounds_podl();
	this.podl_mc.name = "podl_mc";
	this.podl_mc.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.podl_mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PARTICLES_DOTSconstantCHAOTIC, new cjs.Rectangle(0,0,616.1,460.3), null);


(lib.GLOW_WAVE_gradient_radial_003 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.GLOW_WAVE_glow_in();
	this.instance.setTransform(50.5,50.5,1,1,0,0,0,50.5,50.5);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,255,255,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,105,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GLOW_WAVE_gradient_radial_003, new cjs.Rectangle(0,0,101,101), null);


(lib.FLOATING_OBJECTcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// IMAGE
	this.instance = new lib.Symbol7();
	this.instance.setTransform(32.25,31.25,0.5,0.5,0,0,0,32,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FLOATING_OBJECTcopy, new cjs.Rectangle(0,0,62,62), null);


(lib.FLOATING_OBJECT_rotationcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {repeat:1,repeat_2:150};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}
	this.frame_149 = function() {
		this.gotoAndPlay("repeat");
	}
	this.frame_298 = function() {
		this.gotoAndPlay("repeat_2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(149).call(this.frame_149).wait(149).call(this.frame_298).wait(1));

	// actual_image
	this.instance = new lib.FLOATING_OBJECTcopy();
	this.instance.setTransform(31,31,1,1,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:32.2,regY:31.2,rotation:-0.0011,x:32.2,y:31.2},0).wait(1).to({rotation:-0.0044},0).wait(1).to({rotation:-0.01},0).wait(1).to({rotation:-0.018},0).wait(1).to({rotation:-0.0285},0).wait(1).to({rotation:-0.0416},0).wait(1).to({rotation:-0.0575,x:32.25,y:31.15},0).wait(1).to({rotation:-0.0762},0).wait(1).to({rotation:-0.0979,x:32.2,y:31.2},0).wait(1).to({rotation:-0.1227},0).wait(1).to({rotation:-0.1508,x:32.25,y:31.15},0).wait(1).to({rotation:-0.1823},0).wait(1).to({rotation:-0.2174,x:32.2,y:31.2},0).wait(1).to({rotation:-0.2563,x:32.25,y:31.15},0).wait(1).to({rotation:-0.2991,x:32.2,y:31.2},0).wait(1).to({rotation:-0.3461,x:32.25,y:31.15},0).wait(1).to({rotation:-0.3974,x:32.2,y:31.2},0).wait(1).to({rotation:-0.4532,x:32.25,y:31.15},0).wait(1).to({rotation:-0.5139},0).wait(1).to({rotation:-0.5796},0).wait(1).to({rotation:-0.6506,y:31.2},0).wait(1).to({rotation:-0.7271,y:31.15},0).wait(1).to({rotation:-0.8093},0).wait(1).to({rotation:-0.8976},0).wait(1).to({rotation:-0.9921},0).wait(1).to({rotation:-1.0931},0).wait(1).to({rotation:-1.2009,y:31.2},0).wait(1).to({rotation:-1.3154,y:31.15},0).wait(1).to({rotation:-1.437,x:32.3},0).wait(1).to({rotation:-1.5657},0).wait(1).to({rotation:-1.7013},0).wait(1).to({rotation:-1.8438},0).wait(1).to({rotation:-1.9929},0).wait(1).to({rotation:-2.1482},0).wait(1).to({rotation:-2.3091,x:32.25,y:31.1},0).wait(1).to({rotation:-2.4748,x:32.3},0).wait(1).to({rotation:-2.6444},0).wait(1).to({rotation:-2.8169},0).wait(1).to({rotation:-2.991,x:32.35},0).wait(1).to({rotation:-3.1654,x:32.3},0).wait(1).to({rotation:-3.3389,y:31.15},0).wait(1).to({rotation:-3.5102,x:32.35},0).wait(1).to({rotation:-3.6782,y:31.1},0).wait(1).to({rotation:-3.8417,x:32.4},0).wait(1).to({rotation:-3.9999,x:32.35,y:31.05},0).wait(1).to({rotation:-4.1522},0).wait(1).to({rotation:-4.2979,y:31.1},0).wait(1).to({rotation:-4.4367,y:31.05},0).wait(1).to({rotation:-4.5684,x:32.4,y:31.1},0).wait(1).to({rotation:-4.6929,y:31.05},0).wait(1).to({rotation:-4.8101,x:32.35,y:31.1},0).wait(1).to({rotation:-4.9203,x:32.4},0).wait(1).to({rotation:-5.0234},0).wait(1).to({rotation:-5.1198,y:31.05},0).wait(1).to({rotation:-5.2096},0).wait(1).to({rotation:-5.2932},0).wait(1).to({rotation:-5.3706,x:32.35},0).wait(1).to({rotation:-5.4423,x:32.4},0).wait(1).to({rotation:-5.5085},0).wait(1).to({rotation:-5.5694},0).wait(1).to({rotation:-5.6252},0).wait(1).to({rotation:-5.6763},0).wait(1).to({rotation:-5.7228},0).wait(1).to({rotation:-5.765,x:32.45},0).wait(1).to({rotation:-5.8031,x:32.4},0).wait(1).to({rotation:-5.8372,y:31.1},0).wait(1).to({rotation:-5.8676,x:32.45,y:31.05},0).wait(1).to({rotation:-5.8945,x:32.4},0).wait(1).to({rotation:-5.9179,y:31.1},0).wait(1).to({rotation:-5.9381,x:32.45,y:31.05},0).wait(1).to({rotation:-5.9552},0).wait(1).to({rotation:-5.9693,x:32.4},0).wait(1).to({rotation:-5.9806},0).wait(1).to({rotation:-5.9892},0).wait(1).to({rotation:-5.9953},0).wait(1).to({rotation:-5.9988,x:32.35},0).wait(1).to({regX:31,regY:31,rotation:-5.9999,x:31.2,y:31},0).wait(1).to({regX:32.2,regY:31.2,rotation:-5.9987,x:32.4,y:31.05},0).wait(1).to({rotation:-5.9949},0).wait(1).to({rotation:-5.9885},0).wait(1).to({rotation:-5.9793},0).wait(1).to({rotation:-5.9672},0).wait(1).to({rotation:-5.9521,x:32.45},0).wait(1).to({rotation:-5.9337,x:32.4},0).wait(1).to({rotation:-5.9121},0).wait(1).to({rotation:-5.8869,x:32.45},0).wait(1).to({rotation:-5.8581},0).wait(1).to({rotation:-5.8254,x:32.4},0).wait(1).to({rotation:-5.7886},0).wait(1).to({rotation:-5.7476,y:31.1},0).wait(1).to({rotation:-5.7021,y:31.05},0).wait(1).to({rotation:-5.6518},0).wait(1).to({rotation:-5.5966},0).wait(1).to({rotation:-5.5361},0).wait(1).to({rotation:-5.4701,x:32.35},0).wait(1).to({rotation:-5.3982,x:32.4,y:31},0).wait(1).to({rotation:-5.3203},0).wait(1).to({rotation:-5.2359,x:32.35},0).wait(1).to({rotation:-5.1448},0).wait(1).to({rotation:-5.0467,y:31.05},0).wait(1).to({rotation:-4.9412,x:32.4,y:31.1},0).wait(1).to({rotation:-4.8282},0).wait(1).to({rotation:-4.7073,x:32.35,y:31.05},0).wait(1).to({rotation:-4.5785,x:32.4,y:31.1},0).wait(1).to({rotation:-4.4416,x:32.35,y:31.05},0).wait(1).to({rotation:-4.2967,y:31.1},0).wait(1).to({rotation:-4.144,y:31.05},0).wait(1).to({rotation:-3.9837,x:32.3},0).wait(1).to({rotation:-3.8165,x:32.4,y:31.1},0).wait(1).to({rotation:-3.643,x:32.35},0).wait(1).to({rotation:-3.4643},0).wait(1).to({rotation:-3.2815},0).wait(1).to({rotation:-3.0961},0).wait(1).to({rotation:-2.9096,x:32.3},0).wait(1).to({rotation:-2.7235},0).wait(1).to({rotation:-2.5394,y:31.05},0).wait(1).to({rotation:-2.3588},0).wait(1).to({rotation:-2.1829,x:32.35,y:31.1},0).wait(1).to({rotation:-2.013,x:32.3,y:31.15},0).wait(1).to({rotation:-1.8499},0).wait(1).to({rotation:-1.6942,x:32.25},0).wait(1).to({rotation:-1.5464,x:32.3},0).wait(1).to({rotation:-1.4068,x:32.25},0).wait(1).to({rotation:-1.2754,x:32.3},0).wait(1).to({rotation:-1.1523},0).wait(1).to({rotation:-1.0373,x:32.25},0).wait(1).to({rotation:-0.9302,y:31.2},0).wait(1).to({rotation:-0.8307},0).wait(1).to({rotation:-0.7385},0).wait(1).to({rotation:-0.6534},0).wait(1).to({rotation:-0.575},0).wait(1).to({rotation:-0.503,x:32.2,y:31.15},0).wait(1).to({rotation:-0.4371,x:32.25},0).wait(1).to({rotation:-0.377,y:31.2},0).wait(1).to({rotation:-0.3223,y:31.15},0).wait(1).to({rotation:-0.2728},0).wait(1).to({rotation:-0.2283,x:32.2},0).wait(1).to({rotation:-0.1884,x:32.25,y:31.2},0).wait(1).to({rotation:-0.153,y:31.15},0).wait(1).to({rotation:-0.1218,x:32.2,y:31.2},0).wait(1).to({rotation:-0.0946,x:32.25},0).wait(1).to({rotation:-0.0713,y:31.15},0).wait(1).to({rotation:-0.0515},0).wait(1).to({rotation:-0.0352,x:32.2,y:31.2},0).wait(1).to({rotation:-0.0222},0).wait(1).to({rotation:-0.0123},0).wait(1).to({rotation:-0.0054},0).wait(1).to({rotation:-0.0013},0).wait(1).to({regX:31,regY:31,rotation:0,x:31,y:31},0).wait(1).to({regX:32.2,regY:31.2,rotation:0.0011,x:32.2,y:31.2},0).wait(1).to({rotation:0.0044},0).wait(1).to({rotation:0.01},0).wait(1).to({rotation:0.018},0).wait(1).to({rotation:0.0285},0).wait(1).to({rotation:0.0416},0).wait(1).to({rotation:0.0575,x:32.15,y:31.25},0).wait(1).to({rotation:0.0762},0).wait(1).to({rotation:0.0979,x:32.2,y:31.2},0).wait(1).to({rotation:0.1227},0).wait(1).to({rotation:0.1508,x:32.15,y:31.25},0).wait(1).to({rotation:0.1823,x:32.2},0).wait(1).to({rotation:0.2174,y:31.2},0).wait(1).to({rotation:0.2562,x:32.15,y:31.25},0).wait(1).to({rotation:0.299,x:32.2,y:31.2},0).wait(1).to({rotation:0.346,x:32.15,y:31.25},0).wait(1).to({rotation:0.3973,x:32.2,y:31.2},0).wait(1).to({rotation:0.4531,y:31.25},0).wait(1).to({rotation:0.5138,x:32.15},0).wait(1).to({rotation:0.5794,x:32.2},0).wait(1).to({rotation:0.6504},0).wait(1).to({rotation:0.7268},0).wait(1).to({rotation:0.8091},0).wait(1).to({rotation:0.8973},0).wait(1).to({rotation:0.9918},0).wait(1).to({rotation:1.0928},0).wait(1).to({rotation:1.2005},0).wait(1).to({rotation:1.3151},0).wait(1).to({rotation:1.4366},0).wait(1).to({rotation:1.5652,y:31.3},0).wait(1).to({rotation:1.7008,y:31.25},0).wait(1).to({rotation:1.8433,x:32.25,y:31.3},0).wait(1).to({rotation:1.9923,x:32.2,y:31.25},0).wait(1).to({rotation:2.1476,x:32.25,y:31.3},0).wait(1).to({rotation:2.3084,x:32.2,y:31.25},0).wait(1).to({rotation:2.4741},0).wait(1).to({rotation:2.6437,y:31.3},0).wait(1).to({rotation:2.8161},0).wait(1).to({rotation:2.9901},0).wait(1).to({rotation:3.1645,x:32.25},0).wait(1).to({rotation:3.338},0).wait(1).to({rotation:3.5092},0).wait(1).to({rotation:3.6771},0).wait(1).to({rotation:3.8406,y:31.35},0).wait(1).to({rotation:3.9988,x:32.2,y:31.3},0).wait(1).to({rotation:4.151,x:32.25},0).wait(1).to({rotation:4.2966},0).wait(1).to({rotation:4.4354,y:31.35},0).wait(1).to({rotation:4.5671,y:31.3},0).wait(1).to({rotation:4.6915,y:31.35},0).wait(1).to({rotation:4.8087,x:32.3},0).wait(1).to({rotation:4.9188,x:32.25},0).wait(1).to({rotation:5.022},0).wait(1).to({rotation:5.1183,y:31.3},0).wait(1).to({rotation:5.2081},0).wait(1).to({rotation:5.2916},0).wait(1).to({rotation:5.3691,x:32.3},0).wait(1).to({rotation:5.4407,y:31.35},0).wait(1).to({rotation:5.5069,x:32.25},0).wait(1).to({rotation:5.5677},0).wait(1).to({rotation:5.6236,x:32.3},0).wait(1).to({rotation:5.6747,x:32.25},0).wait(1).to({rotation:5.7212,x:32.3},0).wait(1).to({rotation:5.7633,x:32.25,y:31.4},0).wait(1).to({rotation:5.8014,x:32.3,y:31.35},0).wait(1).to({rotation:5.8355},0).wait(1).to({rotation:5.8659,y:31.4},0).wait(1).to({rotation:5.8928,y:31.35},0).wait(1).to({rotation:5.9162},0).wait(1).to({rotation:5.9364,y:31.4},0).wait(1).to({rotation:5.9535},0).wait(1).to({rotation:5.9676,x:32.25},0).wait(1).to({rotation:5.9789},0).wait(1).to({rotation:5.9875,y:31.35},0).wait(1).to({rotation:5.9935},0).wait(1).to({rotation:5.997},0).wait(1).to({regX:30.9,regY:31.1,rotation:5.9982,x:31.1,y:31.1},0).wait(1).to({regX:32.2,regY:31.2,rotation:5.997,x:32.3,y:31.3},0).wait(1).to({rotation:5.9932,y:31.35},0).wait(1).to({rotation:5.9868},0).wait(1).to({rotation:5.9776},0).wait(1).to({rotation:5.9655},0).wait(1).to({rotation:5.9503,x:32.35},0).wait(1).to({rotation:5.932,x:32.4},0).wait(1).to({rotation:5.9104,x:32.35,y:31.3},0).wait(1).to({rotation:5.8852,y:31.35},0).wait(1).to({rotation:5.8564},0).wait(1).to({rotation:5.8237,y:31.3},0).wait(1).to({rotation:5.787,y:31.35},0).wait(1).to({rotation:5.7459,y:31.3},0).wait(1).to({rotation:5.7004},0).wait(1).to({rotation:5.6502},0).wait(1).to({rotation:5.595},0).wait(1).to({rotation:5.5345},0).wait(1).to({rotation:5.4685},0).wait(1).to({rotation:5.3967,x:32.3},0).wait(1).to({rotation:5.3188},0).wait(1).to({rotation:5.2344},0).wait(1).to({rotation:5.1433},0).wait(1).to({rotation:5.0452,y:31.35},0).wait(1).to({rotation:4.9398,x:32.35,y:31.3},0).wait(1).to({rotation:4.8268,x:32.3},0).wait(1).to({rotation:4.706,x:32.35},0).wait(1).to({rotation:4.5772,x:32.3,y:31.25},0).wait(1).to({rotation:4.4403,y:31.3},0).wait(1).to({rotation:4.2955,y:31.25},0).wait(1).to({rotation:4.1428,y:31.3},0).wait(1).to({rotation:3.9825,y:31.25},0).wait(1).to({rotation:3.8153,y:31.3},0).wait(1).to({rotation:3.6419},0).wait(1).to({rotation:3.4633,y:31.25},0).wait(1).to({rotation:3.2806},0).wait(1).to({rotation:3.0952,x:32.25},0).wait(1).to({rotation:2.9087},0).wait(1).to({rotation:2.7227},0).wait(1).to({rotation:2.5386},0).wait(1).to({rotation:2.3581,y:31.2},0).wait(1).to({rotation:2.1823,x:32.3,y:31.25},0).wait(1).to({rotation:2.0124},0).wait(1).to({rotation:1.8493},0).wait(1).to({rotation:1.6937},0).wait(1).to({rotation:1.546,x:32.25,y:31.2},0).wait(1).to({rotation:1.4064,x:32.3,y:31.25},0).wait(1).to({rotation:1.2751,x:32.25,y:31.2},0).wait(1).to({rotation:1.152},0).wait(1).to({rotation:1.037},0).wait(1).to({rotation:0.9299},0).wait(1).to({rotation:0.8304},0).wait(1).to({rotation:0.7383},0).wait(1).to({rotation:0.6532},0).wait(1).to({rotation:0.5749,y:31.15},0).wait(1).to({rotation:0.5029,y:31.2},0).wait(1).to({rotation:0.437,x:32.2},0).wait(1).to({rotation:0.3769,x:32.25,y:31.15},0).wait(1).to({rotation:0.3222,x:32.2,y:31.2},0).wait(1).to({rotation:0.2728,x:32.25},0).wait(1).to({rotation:0.2282},0).wait(1).to({rotation:0.1884,y:31.15},0).wait(1).to({rotation:0.153,x:32.2,y:31.2},0).wait(1).to({rotation:0.1218,x:32.25,y:31.15},0).wait(1).to({rotation:0.0946},0).wait(1).to({rotation:0.0712,x:32.2,y:31.2},0).wait(1).to({rotation:0.0515},0).wait(1).to({rotation:0.0352,x:32.25,y:31.15},0).wait(1).to({rotation:0.0222},0).wait(1).to({rotation:0.0123},0).wait(1).to({rotation:0.0054},0).wait(1).to({rotation:0.0013},0).wait(1).to({regX:31,regY:31,rotation:0,x:31,y:31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.7,12.8,35.5,37);


(lib.FLOATING_OBJECT_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// IMAGE
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(30.3,31.25,0.5,0.5,0,0,0,30,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FLOATING_OBJECT_1, new cjs.Rectangle(0,0,62,62), null);


(lib.SYMBOLS__light_001_animated = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"repeat":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_82 = function() {
		this.stop();
		//this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(82).call(this.frame_82).wait(14));

	// Layer_2
	this.instance = new lib.SYMBOLS__light_001();
	this.instance.setTransform(-145.75,0,0.4944,0.4944);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:-145.4332},0).wait(1).to({x:-144.9418},0).wait(1).to({x:-144.2638},0).wait(1).to({x:-143.3867},0).wait(1).to({x:-142.2964},0).wait(1).to({x:-140.9778},0).wait(1).to({x:-139.4143},0).wait(1).to({x:-137.5877},0).wait(1).to({x:-135.4783},0).wait(1).to({x:-133.0647},0).wait(1).to({x:-130.3238},0).wait(1).to({x:-127.2307},0).wait(1).to({x:-123.7589},0).wait(1).to({x:-119.8806},0).wait(1).to({x:-115.567},0).wait(1).to({x:-110.7894},0).wait(1).to({x:-105.5198},0).wait(1).to({x:-99.7332},0).wait(1).to({x:-93.4095},0).wait(1).to({x:-86.5363},0).wait(1).to({x:-79.1125},0).wait(1).to({x:-71.1519},0).wait(1).to({x:-62.6863},0).wait(1).to({x:-53.7679},0).wait(1).to({x:-44.4694},0).wait(1).to({x:-34.881},0).wait(1).to({x:-25.1057},0).wait(1).to({x:-15.2514},0).wait(1).to({x:-5.4234},0).wait(1).to({x:4.2831},0).wait(1).to({x:13.7873},0).wait(1).to({x:23.0254},0).wait(1).to({x:31.9508},0).wait(1).to({x:40.5325},0).wait(1).to({x:48.7527},0).wait(1).to({x:56.604},0).wait(1).to({x:64.0871},0).wait(1).to({x:71.2086},0).wait(1).to({x:77.9787},0).wait(1).to({x:84.4106},0).wait(1).to({x:90.5186},0).wait(1).to({x:96.3178},0).wait(1).to({x:101.8237},0).wait(1).to({x:107.0513},0).wait(1).to({x:112.0152},0).wait(1).to({x:116.7297},0).wait(1).to({x:121.2079},0).wait(1).to({x:124.8773},0).wait(1).to({x:127.6656},0).wait(1).to({x:129.9354},0).wait(1).to({x:131.8526},0).wait(1).to({x:133.5096},0).wait(1).to({x:134.9642},0).wait(1).to({x:136.2553},0).wait(1).to({x:137.4107},0).wait(1).to({x:138.4509},0).wait(1).to({x:139.3916},0).wait(1).to({x:140.2454},0).wait(1).to({x:141.022},0).wait(1).to({x:141.7297},0).wait(1).to({x:142.3751},0).wait(1).to({x:142.9639},0).wait(1).to({x:143.5009},0).wait(1).to({x:143.9901},0).wait(1).to({x:144.4352},0).wait(1).to({x:144.8392},0).wait(1).to({x:145.2047},0).wait(1).to({x:145.5342},0).wait(1).to({x:145.8297},0).wait(1).to({x:146.0931},0).wait(1).to({x:146.3261},0).wait(1).to({x:146.53},0).wait(1).to({x:146.7062},0).wait(1).to({x:146.8559},0).wait(1).to({x:146.9801},0).wait(1).to({x:147.0798},0).wait(1).to({x:147.1557},0).wait(1).to({x:147.2089},0).wait(1).to({x:147.2399},0).wait(1).to({x:147.25},0).to({_off:true},1).wait(14));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	// Layer_1
	this.podl_mc = new lib.SYMBOLS__light_001_podl();
	this.podl_mc.name = "podl_mc";

	this.timeline.addTween(cjs.Tween.get(this.podl_mc).to({_off:true},1).wait(95));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.7,-46.3,456.9,92.5);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"repeat":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_119 = function() {
		this.stop();
	}
	this.frame_125 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(6).call(this.frame_125).wait(49));

	// Symbol 23 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AFWBUIgFABIAAAAQgPAAgNgHIAAAAQgMgHgHgMIAAAAQgHgNAAgRIAAAAIAAgFIAAAAIAAgFIAAAAQAAgQAHgMIAAAAQAHgMAMgIIAAAAQANgGAPAAIAAAAIAFAAIAAAAIAFAAIAAAAQANAAAJAFIAAAAIAAgjIAAgKIAKAAIAfAAIAACUIAAAKIgeAAIgKAAIAAgEQgJAGgOAAIAAAAIgFgBgAFMApQAHAGAIACIAAAAQAJgCAGgGIAAAAQAGgGABgLIAAAAQgBgKgGgHIAAAAQgGgGgJgBIAAAAQgIABgHAGIAAAAQgGAHgBAKIAAAAQABALAGAGgADfBUIgFABIAAAAQgSgBgOgHIAAAAQgOgHgIgMIAAAAQgHgNAAgQIAAAAIAAgFIAAAAIAAgFIAAAAQAAgQAHgMIAAAAQAIgMANgHIAAAAQANgHAQAAIAAAAIAFAAIAAAAIAFAAIAAAAQAQAAANAGIAAAAQAMAIAIAMIAAAAQAHAMAAAQIAAAAIAAAEIAAAAIAAAHIAAAAIgBAIIAAAAIhNAAIAGAGIAAAAQAHAEAJABIAAAAIAKgCIAAAAQAGgCAGgGIAAAAIAEAFIAGgFIAAAAIAQASIgFAFIAAAAIAFAFQgPASgdAAIAAAAIgFgBgADtAKQgCgEgDgCIAAAAQgGgEgHgBIAAAAQgHABgGAEIAAAAQgDACgCAEIAAAAgAi5BUIgFABIAAAAQgTgBgOgHIAAAAQgOgHgHgMIAAAAQgIgNAAgQIAAAAIAAgFIAAAAIAAgFIAAAAQAAgQAIgMIAAAAQAHgMANgHIAAAAQANgHARAAIAAAAIAFAAIAAAAIAFAAIAAAAQAPAAANAGIAAAAQANAIAHAMIAAAAQAIAMAAAQIAAAAIgBAEIAAAAIABAHIAAAAIgBAIIAAAAIhNAAIAGAGIAAAAQAGAEAJABIAAAAIAKgCIAAAAQAHgCAFgGIAAAAIAFAFIAFgFIAAAAIARASIgFAFIAAAAIAFAFQgPASgdAAIAAAAIgFgBgAirAKQgCgEgEgCIAAAAQgFgEgHgBIAAAAQgIABgFAEIAAAAQgDACgDAEIAAAAgABzBTIgKAAIAAhqIAAgLIAKAAIAfAAIAABrIAAAKgAApBTIgKAAIAAhRIgHAAIgKAAIAAgXIAAgKIAKAAIAHAAIAAgFQAAgTALgKIAAAAQALgLAUAAIAAAAIAFAAIAAAAIAFAAIAAAAQAHAAAGABIAAAAIAGADIAAAAQABgEADgDIAAAAQAGgFAIAAIAAAAIAFABIAAAAIAFgBIAAAAQAJAAAFAFIAAAAQAGAFAAAHIAAAAIgBAGIAAAAIABAEIAAAAQAAAIgGAFIAAAAQgFAGgJgBIAAAAIgFAAIAAAAIgFAAIAAAAQgIABgGgGIAAAAIgEgFIAAAAIgEALQgEgCgEgBIAAAAIgCADQgDgCgEgBIAAAAQgIACgBAIIAAAAIAbAAIAAAYIAAAJIgbAAIAABHIAAAKgAgWBTIgKAAIAAhqIAAgLIAKAAIAeAAIAABrIAAAKgAhsBTIgKAAIAAhqIAAgLIAKAAIAeAAIAAAGIAFgDIAAAAQAKgEAMAAIAAAAIAAABIAKgBIAAAAIAAAcIAAAKIgHgBIAAAAIgDAAIAAAAIAAABIgCgBIAAAAQgKACgGAFIAAAAQgIAIAAAPIAAAAIAAApIAAAKgAlTBTIgKAAIg8iLIAEAAIgEgKIAKAAIAjAAIAmBXIAmhXIAKAAIAgAAIgFAKIAFAAIg9CLgAgLgnIgFAAIAAAAQgJABgFgGIAAAAQgGgEAAgIIAAAAIABgFIAAAAIgBgFIAAAAQAAgHAGgGIAAAAQAFgFAJAAIAAAAIAFABIAAAAIAFgBIAAAAQAHAAAGAFIAAAAQAFAFAAAHIAAAAIAAAGIAAAAIAAAEIAAAAQAAAIgFAFIAAAAQgGAGgHgBIAAAAIgFAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AFWBUIgFAAIAAAAQgPABgNgHIAAAAQgMgHgHgMIAAAAQgHgNAAgRIAAAAIAAgFIAAAAIAAgFIAAAAQAAgRAHgLIAAAAQAHgMAMgHIAAAAQANgHAPAAIAAAAIAFAAIAAAAIAFAAIAAAAQANAAAJAFIAAAAIAAgiIAAgKIAKAAIAfAAIAACTIAAAKIgeAAIgKAAIAAgEQgJAFgOAAIAAAAIgFAAgAFMApQAHAGAIACIAAAAQAJgCAGgGIAAAAQAGgGABgLIAAAAQgBgKgGgGIAAAAQgGgHgJgBIAAAAQgIABgHAHIAAAAQgGAGgBAKIAAAAQABALAGAGgADfBUIgFAAIAAAAQgSAAgOgGIAAAAQgOgIgIgMIAAAAQgHgNAAgQIAAAAIAAgFIAAAAIAAgFIAAAAQAAgPAHgMIAAAAQAIgNANgHIAAAAQANgHAQAAIAAAAIAFAAIAAAAIAFAAIAAAAQAQAAANAHIAAAAQAMAHAIAMIAAAAQAHAMAAAQIAAAAIAAAEIAAAAIAAAGIAAAAIgBAJIAAAAIhNAAIAGAGIAAAAQAHAEAJABIAAAAIAKgCIAAAAQAGgCAGgGIAAAAIAEAFIAGgFIAAAAIAQASIgFAFIAAAAIAFAFQgPARgdAAIAAAAIgFAAgADtAKQgCgEgDgDIAAAAQgGgDgHgBIAAAAQgHABgGADIAAAAQgDADgCAEIAAAAgAi5BUIgFAAIAAAAQgTAAgOgGIAAAAQgOgIgHgMIAAAAQgIgNAAgQIAAAAIAAgFIAAAAIAAgFIAAAAQAAgPAIgMIAAAAQAHgNANgHIAAAAQANgHARAAIAAAAIAFAAIAAAAIAFAAIAAAAQAPAAANAHIAAAAQANAHAHAMIAAAAQAIAMAAAQIAAAAIgBAEIAAAAIABAGIAAAAIgBAJIAAAAIhNAAIAGAGIAAAAQAGAEAJABIAAAAIAKgCIAAAAQAHgCAFgGIAAAAIAFAFIAFgFIAAAAIARASIgFAFIAAAAIAFAFQgPARgdAAIAAAAIgFAAgAirAKQgCgEgEgDIAAAAQgFgDgHgBIAAAAQgIABgFADIAAAAQgDADgDAEIAAAAgABzBTIgKAAIAAhrIAAgKIAKAAIAfAAIAABrIAAAKgAApBTIgKAAIAAhRIgHAAIgKAAIAAgXIAAgKIAKAAIAHAAIAAgFQAAgSALgLIAAAAQALgLAUAAIAAAAIAFAAIAAAAIAFAAIAAAAQAHAAAGACIAAAAIAGACIAAAAQABgEADgDIAAAAQAGgEAIAAIAAAAIAFAAIAAAAIAFAAIAAAAQAJAAAFAEIAAAAQAGAFAAAIIAAAAIgBAFIAAAAIABAFIAAAAQAAAHgGAFIAAAAQgFAFgJABIAAAAIgFgBIAAAAIgFABIAAAAQgIgBgGgFIAAAAIgEgFIAAAAIgEAMQgEgDgEgBIAAAAIgCAEQgDgDgEgBIAAAAQgIACgBAIIAAAAIAbAAIAAAYIAAAJIgbAAIAABHIAAAKgAgWBTIgKAAIAAhrIAAgKIAKAAIAeAAIAABrIAAAKgAhsBTIgKAAIAAhrIAAgKIAKAAIAeAAIAAAGIAFgDIAAAAQAKgEAMAAIAAAAIAAABIAKgBIAAAAIAAAcIAAAJIgHAAIAAAAIgDAAIAAAAIAAAAIgCAAIAAAAQgKACgGAFIAAAAQgIAIAAAPIAAAAIAAApIAAAKgAlTBTIgKAAIg8iLIAEAAIgEgKIAKAAIAjAAIAmBXIAmhXIAKAAIAgAAIgFAKIAFAAIg9CLgAgLgnIgFABIAAAAQgJgBgFgFIAAAAQgGgEAAgIIAAAAIABgFIAAAAIgBgFIAAAAQAAgHAGgGIAAAAQAFgEAJAAIAAAAIAFAAIAAAAIAFAAIAAAAQAHAAAGAEIAAAAQAFAFAAAIIAAAAIAAAFIAAAAIAAAFIAAAAQAAAHgFAFIAAAAQgGAFgHABIAAAAIgFgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:42.925,y:16.9002}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:42.7252,y:16.6999}).wait(172));

	// SYMBOLS__light_001_animated
	this.instance = new lib.SYMBOLS__light_001_animated();
	this.instance.setTransform(42.25,18.35,0.4294,1,7.448,0,0,0.4,0.2);
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,regX:0.5,scaleX:0.524,x:42.7},0).to({_off:true},145).wait(27));

	// Layer_1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AABEHQh5g5g7iCQgOgogKgiQgMhKAHhKQADgOAQgGIAzgQQAugTAkgXIAogjQAcgKATARQAkAfApAVIBdAgQAOAOgEAmQABBYgWBNQgbBSg1A3IhRBNg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AABEHQh5g5g7iCQgOgogKgiQgMhKAHhKQADgOAQgGIAzgQQAugTAkgXIAogjQAcgKATARQAkAfApAVIBdAgQAOAOgEAmQABBYgWBNQgbBSg1A3IhRBNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:24.8155,y:133.4014}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_2,x:24.8155,y:133.4014}).wait(172));

	// Layer_2
	this.instance_1 = new lib.SYMBOLS__light_001_animated();
	this.instance_1.setTransform(24.05,128.55,0.2382,1,22.4476,0,0,-0.1,0.1);
	this.instance_1.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,scaleX:0.2822,x:24},0).to({_off:true},145).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,87.7,160);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol15copy5();
	this.instance.setTransform(179.5,375.6,1,1,0,0,0,179.5,375.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:211.1,regY:388.8,rotation:0.8139,x:210.95,y:389.3},0).wait(1).to({rotation:1.162,x:210.85,y:389.5},0).wait(1).to({rotation:1.3695,y:389.65},0).wait(1).to({rotation:1.5155,x:210.75,y:389.7},0).wait(1).to({rotation:1.6012,x:210.8,y:389.75},0).wait(1).to({rotation:1.6648,x:210.75,y:389.85},0).wait(1).to({rotation:1.7004,y:389.8},0).wait(1).to({rotation:1.7192,x:210.8},0).wait(1).to({rotation:1.7329,y:389.85},0).wait(1).to({rotation:1.7435,y:389.8},0).wait(1).to({rotation:1.7517,x:210.75,y:389.85},0).wait(1).to({rotation:1.7581,x:210.8,y:389.8},0).wait(1).to({rotation:1.7629,y:389.85},0).wait(1).to({rotation:1.7665,x:210.75},0).wait(1).to({rotation:1.7688},0).wait(1).to({regX:179.6,regY:375.5,rotation:1.7698,x:179.65,y:375.6},0).wait(1).to({regX:211.1,regY:388.8,rotation:1.0866,x:210.85,y:389.5},0).wait(1).to({rotation:0.7455,x:210.95,y:389.3},0).wait(1).to({rotation:0.5398,y:389.2},0).wait(1).to({rotation:0.3921,x:211,y:389.1},0).wait(1).to({rotation:0.2751,y:389.05},0).wait(1).to({rotation:0.2029,x:210.95,y:389},0).wait(1).to({rotation:0.1446,x:211},0).wait(1).to({rotation:0.1003,y:388.9},0).wait(1).to({rotation:0.0728},0).wait(1).to({rotation:0.0571},0).wait(1).to({rotation:0.0449},0).wait(1).to({rotation:0.0352},0).wait(1).to({rotation:0.0272},0).wait(1).to({rotation:0.0207,y:388.85},0).wait(1).to({rotation:0.0152,x:211.05},0).wait(1).to({rotation:0.0107},0).wait(1).to({rotation:0.0071},0).wait(1).to({rotation:0.0042,x:211.1,y:388.8},0).wait(1).to({rotation:0.002},0).wait(1).to({rotation:0.0006},0).wait(1).to({regX:179.5,regY:375.6,rotation:0,x:179.5,y:375.6},0).wait(21).to({regX:211.1,regY:388.8,scaleX:0.9886,skewY:-1.756,x:210.2,y:387.65},0).wait(1).to({scaleX:0.9822,skewY:-2.7461,x:209.7,y:387.05},0).wait(1).to({scaleX:0.9782,skewY:-3.3585,x:209.4,y:386.65},0).wait(1).to({scaleX:0.9754,skewY:-3.7969,x:209.15,y:386.4},0).wait(1).to({scaleX:0.9732,skewY:-4.1408,x:208.95,y:386.15},0).wait(1).to({scaleX:0.9713,skewY:-4.4267,x:208.85,y:386},0).wait(1).to({scaleX:0.97,skewY:-4.6238,x:208.7,y:385.9},0).wait(1).to({scaleX:0.969,skewY:-4.7778,x:208.65,y:385.8},0).wait(1).to({scaleX:0.9682,skewY:-4.9074,x:208.55,y:385.7},0).wait(1).to({scaleX:0.9676,skewY:-5.0083,x:208.5,y:385.65},0).wait(1).to({scaleX:0.9671,skewY:-5.0758,x:208.45},0).wait(1).to({scaleX:0.9668,skewY:-5.1163,y:385.6},0).wait(1).to({scaleX:0.9666,skewY:-5.1486},0).wait(1).to({scaleX:0.9665,skewY:-5.1754,y:385.55},0).wait(1).to({scaleX:0.9663,skewY:-5.1979,x:208.4},0).wait(1).to({scaleX:0.9662,skewY:-5.2171},0).wait(1).to({scaleX:0.9661,skewY:-5.2335},0).wait(1).to({scaleX:0.966,skewY:-5.2477,x:208.35,y:385.5},0).wait(1).to({scaleX:0.9659,skewY:-5.2598,x:208.4},0).wait(1).to({scaleX:0.9658,skewY:-5.2701,x:208.35,y:385.55},0).wait(1).to({skewY:-5.2787,y:385.5},0).wait(1).to({scaleX:0.9657,skewY:-5.2859},0).wait(1).to({skewY:-5.2917},0).wait(1).to({skewY:-5.2961},0).wait(1).to({scaleX:0.9656,skewY:-5.2991},0).wait(1).to({regX:179.6,regY:375.7,skewY:-5.3003,x:178,y:375.15},0).wait(1).to({regX:211.1,regY:388.8,scaleX:0.9785,skewY:-3.3189,x:209.3,y:386.6},0).wait(1).to({scaleX:0.9851,skewY:-2.3029,x:209.85,y:387.25},0).wait(1).to({scaleX:0.9891,skewY:-1.6877,x:210.15,y:387.6},0).wait(1).to({scaleX:0.9919,skewY:-1.2465,x:210.35,y:387.9},0).wait(1).to({scaleX:0.9942,skewY:-0.8978,x:210.55,y:388.1},0).wait(1).to({scaleX:0.9957,skewY:-0.6616,x:210.65,y:388.25},0).wait(1).to({scaleX:0.9969,skewY:-0.4846,x:210.75,y:388.35},0).wait(1).to({scaleX:0.9978,skewY:-0.3433,x:210.8,y:388.45},0).wait(1).to({scaleX:0.9984,skewY:-0.2449,x:210.85,y:388.5},0).wait(1).to({scaleX:0.9988,skewY:-0.1906,x:210.9,y:388.55},0).wait(1).to({scaleX:0.999,skewY:-0.1517,y:388.6},0).wait(1).to({scaleX:0.9992,skewY:-0.1206,x:210.95},0).wait(1).to({scaleX:0.9994,skewY:-0.0951},0).wait(1).to({scaleX:0.9995,skewY:-0.074,x:211,y:388.65},0).wait(1).to({scaleX:0.9996,skewY:-0.0563,x:210.95},0).wait(1).to({scaleX:0.9997,skewY:0,x:211},0).wait(1).to({scaleX:0.9998,y:388.7},0).wait(1).to({scaleX:0.9999,y:388.75},0).wait(1).to({x:211.05,y:388.7},0).wait(1).to({scaleX:1,y:388.75},0).wait(2).to({regX:179.5,regY:375.6,x:179.5,y:375.6},0).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.3,-90.1,536.2,636.5);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol15copy4();
	this.instance.setTransform(38,291.4,1,1,6.9596,0,0,38,291.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:26.8,regY:260.3,rotation:3.8756,x:28.9,y:259.65},0).wait(1).to({rotation:2.5111,x:28.15,y:259.85},0).wait(1).to({rotation:1.6972,x:27.75,y:260.05},0).wait(1).to({rotation:1.1067,x:27.4,y:260.1},0).wait(1).to({rotation:0.754,x:27.2,y:260.2},0).wait(1).to({rotation:0.4897,x:27.05,y:260.25},0).wait(1).to({rotation:0.3159,x:26.95},0).wait(1).to({rotation:0.2308,x:26.9},0).wait(1).to({rotation:0.1718,x:26.85,y:260.3},0).wait(1).to({rotation:0.1267},0).wait(1).to({rotation:0.0913},0).wait(1).to({rotation:0.0633,x:26.8,y:260.35},0).wait(1).to({rotation:0.0412,y:260.3},0).wait(1).to({rotation:0.0242},0).wait(1).to({rotation:0.0117},0).wait(1).to({rotation:0.0034},0).wait(1).to({regX:38,regY:291.4,rotation:0,x:38,y:291.4},0).wait(1).to({regX:26.8,regY:260.3,rotation:0.0104,x:26.8,y:260.3},0).wait(1).to({rotation:0.0434},0).wait(1).to({rotation:0.1019,x:26.85},0).wait(1).to({rotation:0.1893,x:26.9},0).wait(1).to({rotation:0.3097,x:26.95,y:260.25},0).wait(1).to({rotation:0.4678,x:27.05,y:260.2},0).wait(1).to({rotation:0.6693,x:27.15},0).wait(1).to({rotation:0.9205,x:27.25,y:260.15},0).wait(1).to({rotation:1.2279,x:27.45,y:260.1},0).wait(1).to({rotation:1.5978,x:27.65,y:260.05},0).wait(1).to({rotation:2.0335,x:27.9,y:259.95},0).wait(1).to({rotation:2.5325,x:28.15,y:259.9},0).wait(1).to({rotation:3.0818,x:28.45,y:259.75},0).wait(1).to({rotation:3.6564,x:28.8,y:259.65},0).wait(1).to({rotation:4.2231,x:29.15,y:259.55},0).wait(1).to({rotation:4.7512,x:29.4,y:259.5},0).wait(1).to({rotation:5.2204,x:29.65,y:259.45},0).wait(1).to({rotation:5.6224,x:29.85,y:259.4},0).wait(1).to({rotation:5.9579,x:30.1,y:259.35},0).wait(1).to({rotation:6.2322,x:30.25,y:259.3},0).wait(1).to({rotation:6.4519,x:30.35,y:259.25},0).wait(1).to({rotation:6.624,x:30.45},0).wait(1).to({rotation:6.7546,x:30.55},0).wait(1).to({rotation:6.8491},0).wait(1).to({rotation:6.9122,x:30.6,y:259.2},0).wait(1).to({rotation:6.9477},0).wait(1).to({regX:38,regY:291.4,rotation:6.9589,x:38,y:291.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.4,-88.9,585.9,648.6999999999999);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol14();
	this.instance.setTransform(118.3,207.1,1,1,0,0,0,118.3,207.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:123.5,regY:111.1,rotation:-1.3943,x:121.15,y:110.95},0).wait(1).to({rotation:-2.3273,x:119.6},0).wait(1).to({rotation:-2.9442,x:118.6,y:110.9},0).wait(1).to({rotation:-3.3909,x:117.85,y:110.95},0).wait(1).to({rotation:-3.7395,x:117.3},0).wait(1).to({rotation:-4.0262,x:116.8,y:111},0).wait(1).to({rotation:-4.271,x:116.35,y:110.95},0).wait(1).to({rotation:-4.4857,x:116},0).wait(1).to({rotation:-4.6622,x:115.75},0).wait(1).to({rotation:-4.7866,x:115.45},0).wait(1).to({rotation:-4.8995,x:115.35,y:111},0).wait(1).to({rotation:-4.9994,x:115.2},0).wait(1).to({rotation:-5.0848,x:115,y:110.95},0).wait(1).to({rotation:-5.1539,x:114.9,y:111},0).wait(1).to({rotation:-5.2048,x:114.85},0).wait(1).to({rotation:-5.2382,x:114.75,y:111.05},0).wait(1).to({rotation:-5.2653,y:111},0).wait(1).to({rotation:-5.2886,x:114.65},0).wait(1).to({rotation:-5.3089,y:110.95},0).wait(1).to({rotation:-5.3268,x:114.55,y:111},0).wait(1).to({rotation:-5.3427},0).wait(1).to({rotation:-5.3568,x:114.5,y:110.95},0).wait(1).to({rotation:-5.3695,x:114.55,y:111},0).wait(1).to({rotation:-5.3809,x:114.5},0).wait(1).to({rotation:-5.391},0).wait(1).to({rotation:-5.4001,x:114.45},0).wait(1).to({rotation:-5.4082},0).wait(1).to({rotation:-5.4154},0).wait(1).to({rotation:-5.4218,y:111.05},0).wait(1).to({rotation:-5.4273,y:111},0).wait(1).to({rotation:-5.4321,x:114.4},0).wait(1).to({rotation:-5.4361},0).wait(1).to({rotation:-5.4394,x:114.45},0).wait(1).to({rotation:-5.442},0).wait(1).to({rotation:-5.4437,x:114.4,y:111.05},0).wait(1).to({regX:118.2,regY:207,rotation:-5.4444,x:118.25,y:207.05},0).wait(1).to({regX:123.5,regY:111.1,rotation:-4.0172,x:116.85,y:111},0).wait(1).to({rotation:-3.0752,x:118.4},0).wait(1).to({rotation:-2.4566,x:119.45},0).wait(1).to({rotation:-2.0096,x:120.2},0).wait(1).to({rotation:-1.6607,x:120.8},0).wait(1).to({rotation:-1.3736,x:121.25},0).wait(1).to({rotation:-1.1283,x:121.7,y:111.05},0).wait(1).to({rotation:-0.913,x:122.05,y:111.1},0).wait(1).to({rotation:-0.7492,x:122.35},0).wait(1).to({rotation:-0.6243,x:122.55},0).wait(1).to({rotation:-0.512,x:122.75},0).wait(1).to({rotation:-0.414,x:122.9},0).wait(1).to({rotation:-0.3319,x:123.05},0).wait(1).to({rotation:-0.2678,x:123.1},0).wait(1).to({rotation:-0.2238,x:123.2},0).wait(1).to({rotation:-0.1933,x:123.25},0).wait(1).to({rotation:-0.1674},0).wait(1).to({rotation:-0.1451,x:123.35},0).wait(1).to({rotation:-0.1255,y:111.15},0).wait(1).to({rotation:-0.1083,x:123.4,y:111.1},0).wait(1).to({rotation:-0.093,x:123.45},0).wait(1).to({rotation:-0.0794,y:111.15},0).wait(1).to({rotation:-0.0673,x:123.5,y:111.1},0).wait(1).to({rotation:-0.0564,x:123.45,y:111.15},0).wait(1).to({rotation:-0.0468,x:123.5,y:111.1},0).wait(1).to({rotation:-0.0382},0).wait(1).to({rotation:-0.0305,y:111.15},0).wait(1).to({rotation:-0.0238,x:123.55,y:111.1},0).wait(1).to({rotation:-0.018},0).wait(1).to({rotation:-0.0129,x:123.5},0).wait(1).to({rotation:-0.0087,y:111.15},0).wait(1).to({rotation:-0.0052},0).wait(1).to({rotation:-0.0026},0).wait(1).to({rotation:-0.0007},0).wait(1).to({regX:118.3,regY:207.1,rotation:0,x:118.3,y:207.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.3,-95.3,571.9000000000001,636.8);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.instance = new lib.Symbol18();
	this.instance.setTransform(128,226.1,1,1,0,0,0,128,224.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tail
	this.instance_1 = new lib.Symbol21();
	this.instance_1.setTransform(128,224.1,1,1,0,0,0,128,224.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hand
	this.instance_2 = new lib.Symbol19();
	this.instance_2.setTransform(128,224.1,1,1,0,0,0,128,224.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.Symbol15copy3();
	this.instance_3.setTransform(124,214,1,1,0,0,0,124,214);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-157.4,-88.9,585.9,648.6999999999999), null);


(lib.FLOATING_OBJECT_rotation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"repeat":1,"repeat_2":150};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}
	this.frame_149 = function() {
		this.gotoAndPlay("repeat");
	}
	this.frame_298 = function() {
		this.gotoAndPlay("repeat_2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(149).call(this.frame_149).wait(149).call(this.frame_298).wait(1));

	// actual_image
	this.instance = new lib.FLOATING_OBJECT();
	this.instance.setTransform(31,31,1,1,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:31.3,regY:31.2,rotation:-0.0011,x:31.3,y:31.2},0).wait(1).to({rotation:-0.0044},0).wait(1).to({rotation:-0.01},0).wait(1).to({rotation:-0.018},0).wait(1).to({rotation:-0.0285},0).wait(1).to({rotation:-0.0416},0).wait(1).to({rotation:-0.0575,x:31.35,y:31.15},0).wait(1).to({rotation:-0.0762},0).wait(1).to({rotation:-0.0979,x:31.3,y:31.2},0).wait(1).to({rotation:-0.1227},0).wait(1).to({rotation:-0.1508,x:31.35,y:31.15},0).wait(1).to({rotation:-0.1823},0).wait(1).to({rotation:-0.2174,x:31.3,y:31.2},0).wait(1).to({rotation:-0.2563,x:31.35,y:31.15},0).wait(1).to({rotation:-0.2991,x:31.3,y:31.2},0).wait(1).to({rotation:-0.3461,x:31.35,y:31.15},0).wait(1).to({rotation:-0.3974,x:31.3,y:31.2},0).wait(1).to({rotation:-0.4532,x:31.35,y:31.15},0).wait(1).to({rotation:-0.5139},0).wait(1).to({rotation:-0.5796,y:31.2},0).wait(1).to({rotation:-0.6506},0).wait(1).to({rotation:-0.7271,y:31.15},0).wait(1).to({rotation:-0.8093},0).wait(1).to({rotation:-0.8976},0).wait(1).to({rotation:-0.9921},0).wait(1).to({rotation:-1.0931},0).wait(1).to({rotation:-1.2009,y:31.2},0).wait(1).to({rotation:-1.3154},0).wait(1).to({rotation:-1.437,x:31.4,y:31.15},0).wait(1).to({rotation:-1.5657,y:31.2},0).wait(1).to({rotation:-1.7013,y:31.15},0).wait(1).to({rotation:-1.8438,y:31.2},0).wait(1).to({rotation:-1.9929,y:31.15},0).wait(1).to({rotation:-2.1482,y:31.2},0).wait(1).to({rotation:-2.3091,x:31.35,y:31.15},0).wait(1).to({rotation:-2.4748,x:31.4},0).wait(1).to({rotation:-2.6444},0).wait(1).to({rotation:-2.8169},0).wait(1).to({rotation:-2.991,x:31.45},0).wait(1).to({rotation:-3.1654,x:31.4},0).wait(1).to({rotation:-3.3389,y:31.2},0).wait(1).to({rotation:-3.5102,x:31.45},0).wait(1).to({rotation:-3.6782,y:31.15},0).wait(1).to({rotation:-3.8417,x:31.5},0).wait(1).to({rotation:-3.9999,x:31.45,y:31.1},0).wait(1).to({rotation:-4.1522,y:31.15},0).wait(1).to({rotation:-4.2979},0).wait(1).to({rotation:-4.4367},0).wait(1).to({rotation:-4.5684,x:31.5},0).wait(1).to({rotation:-4.6929},0).wait(1).to({rotation:-4.8101,x:31.45,y:31.2},0).wait(1).to({rotation:-4.9203,x:31.5,y:31.15},0).wait(1).to({rotation:-5.0234},0).wait(1).to({rotation:-5.1198,y:31.1},0).wait(1).to({rotation:-5.2096},0).wait(1).to({rotation:-5.2932},0).wait(1).to({rotation:-5.3706,x:31.45},0).wait(1).to({rotation:-5.4423,x:31.5,y:31.15},0).wait(1).to({rotation:-5.5085},0).wait(1).to({rotation:-5.5694,y:31.1},0).wait(1).to({rotation:-5.6252,y:31.15},0).wait(1).to({rotation:-5.6763},0).wait(1).to({rotation:-5.7228},0).wait(1).to({rotation:-5.765,x:31.55},0).wait(1).to({rotation:-5.8031,x:31.5},0).wait(1).to({rotation:-5.8372},0).wait(1).to({rotation:-5.8676,x:31.55},0).wait(1).to({rotation:-5.8945,x:31.5},0).wait(1).to({rotation:-5.9179},0).wait(1).to({rotation:-5.9381,x:31.55},0).wait(1).to({rotation:-5.9552},0).wait(1).to({rotation:-5.9693},0).wait(1).to({rotation:-5.9806},0).wait(1).to({rotation:-5.9892},0).wait(1).to({rotation:-5.9953},0).wait(1).to({rotation:-5.9988,x:31.5},0).wait(1).to({regX:31,regY:31,rotation:-5.9999,x:31.2,y:31},0).wait(1).to({regX:31.3,regY:31.2,rotation:-5.9987,x:31.55,y:31.15},0).wait(1).to({rotation:-5.9949},0).wait(1).to({rotation:-5.9885},0).wait(1).to({rotation:-5.9793},0).wait(1).to({rotation:-5.9672},0).wait(1).to({rotation:-5.9521},0).wait(1).to({rotation:-5.9337,x:31.5},0).wait(1).to({rotation:-5.9121},0).wait(1).to({rotation:-5.8869,x:31.55},0).wait(1).to({rotation:-5.8581},0).wait(1).to({rotation:-5.8254,x:31.5,y:31.1},0).wait(1).to({rotation:-5.7886,y:31.15},0).wait(1).to({rotation:-5.7476},0).wait(1).to({rotation:-5.7021},0).wait(1).to({rotation:-5.6518,y:31.1},0).wait(1).to({rotation:-5.5966,y:31.15},0).wait(1).to({rotation:-5.5361},0).wait(1).to({rotation:-5.4701,x:31.45,y:31.1},0).wait(1).to({rotation:-5.3982,x:31.5},0).wait(1).to({rotation:-5.3203},0).wait(1).to({rotation:-5.2359,x:31.45},0).wait(1).to({rotation:-5.1448},0).wait(1).to({rotation:-5.0467,x:31.5,y:31.15},0).wait(1).to({rotation:-4.9412},0).wait(1).to({rotation:-4.8282},0).wait(1).to({rotation:-4.7073,x:31.45},0).wait(1).to({rotation:-4.5785,x:31.5},0).wait(1).to({rotation:-4.4416,x:31.45},0).wait(1).to({rotation:-4.2967},0).wait(1).to({rotation:-4.144},0).wait(1).to({rotation:-3.9837,x:31.4},0).wait(1).to({rotation:-3.8165,x:31.5},0).wait(1).to({rotation:-3.643,x:31.45},0).wait(1).to({rotation:-3.4643},0).wait(1).to({rotation:-3.2815},0).wait(1).to({rotation:-3.0961},0).wait(1).to({rotation:-2.9096,x:31.4},0).wait(1).to({rotation:-2.7235},0).wait(1).to({rotation:-2.5394,y:31.1},0).wait(1).to({rotation:-2.3588},0).wait(1).to({rotation:-2.1829,x:31.45,y:31.15},0).wait(1).to({rotation:-2.013,x:31.4,y:31.2},0).wait(1).to({rotation:-1.8499},0).wait(1).to({rotation:-1.6942,x:31.35,y:31.15},0).wait(1).to({rotation:-1.5464,x:31.4},0).wait(1).to({rotation:-1.4068,x:31.35,y:31.2},0).wait(1).to({rotation:-1.2754,x:31.4,y:31.15},0).wait(1).to({rotation:-1.1523},0).wait(1).to({rotation:-1.0373,x:31.35,y:31.2},0).wait(1).to({rotation:-0.9302},0).wait(1).to({rotation:-0.8307},0).wait(1).to({rotation:-0.7385},0).wait(1).to({rotation:-0.6534},0).wait(1).to({rotation:-0.575},0).wait(1).to({rotation:-0.503,x:31.3},0).wait(1).to({rotation:-0.4371,x:31.35,y:31.15},0).wait(1).to({rotation:-0.377,y:31.2},0).wait(1).to({rotation:-0.3223,y:31.15},0).wait(1).to({rotation:-0.2728},0).wait(1).to({rotation:-0.2283,x:31.3,y:31.2},0).wait(1).to({rotation:-0.1884,x:31.35},0).wait(1).to({rotation:-0.153,y:31.15},0).wait(1).to({rotation:-0.1218,x:31.3,y:31.2},0).wait(1).to({rotation:-0.0946,x:31.35},0).wait(1).to({rotation:-0.0713,y:31.15},0).wait(1).to({rotation:-0.0515},0).wait(1).to({rotation:-0.0352,x:31.3,y:31.2},0).wait(1).to({rotation:-0.0222},0).wait(1).to({rotation:-0.0123},0).wait(1).to({rotation:-0.0054},0).wait(1).to({rotation:-0.0013},0).wait(1).to({regX:31,regY:31,rotation:0,x:31,y:31},0).wait(1).to({regX:31.3,regY:31.2,rotation:0.0011,x:31.3,y:31.2},0).wait(1).to({rotation:0.0044},0).wait(1).to({rotation:0.01},0).wait(1).to({rotation:0.018},0).wait(1).to({rotation:0.0285},0).wait(1).to({rotation:0.0416},0).wait(1).to({rotation:0.0575,x:31.25,y:31.25},0).wait(1).to({rotation:0.0762},0).wait(1).to({rotation:0.0979,x:31.3,y:31.2},0).wait(1).to({rotation:0.1227},0).wait(1).to({rotation:0.1508,x:31.25,y:31.25},0).wait(1).to({rotation:0.1823,x:31.3},0).wait(1).to({rotation:0.2174,y:31.2},0).wait(1).to({rotation:0.2562,x:31.25,y:31.25},0).wait(1).to({rotation:0.299,x:31.3,y:31.2},0).wait(1).to({rotation:0.346,x:31.25,y:31.25},0).wait(1).to({rotation:0.3973,x:31.3,y:31.2},0).wait(1).to({rotation:0.4531,y:31.25},0).wait(1).to({rotation:0.5138,x:31.25},0).wait(1).to({rotation:0.5794,x:31.3,y:31.2},0).wait(1).to({rotation:0.6504,y:31.25},0).wait(1).to({rotation:0.7268},0).wait(1).to({rotation:0.8091},0).wait(1).to({rotation:0.8973},0).wait(1).to({rotation:0.9918},0).wait(1).to({rotation:1.0928},0).wait(1).to({rotation:1.2005},0).wait(1).to({rotation:1.3151,y:31.2},0).wait(1).to({rotation:1.4366,y:31.25},0).wait(1).to({rotation:1.5652},0).wait(1).to({rotation:1.7008},0).wait(1).to({rotation:1.8433,x:31.35},0).wait(1).to({rotation:1.9923,x:31.3},0).wait(1).to({rotation:2.1476,x:31.35},0).wait(1).to({rotation:2.3084,x:31.3,y:31.2},0).wait(1).to({rotation:2.4741},0).wait(1).to({rotation:2.6437,y:31.25},0).wait(1).to({rotation:2.8161},0).wait(1).to({rotation:2.9901},0).wait(1).to({rotation:3.1645,x:31.35},0).wait(1).to({rotation:3.338},0).wait(1).to({rotation:3.5092},0).wait(1).to({rotation:3.6771},0).wait(1).to({rotation:3.8406,y:31.3},0).wait(1).to({rotation:3.9988,x:31.3,y:31.25},0).wait(1).to({rotation:4.151,x:31.35,y:31.2},0).wait(1).to({rotation:4.2966,y:31.25},0).wait(1).to({rotation:4.4354},0).wait(1).to({rotation:4.5671},0).wait(1).to({rotation:4.6915},0).wait(1).to({rotation:4.8087,x:31.4},0).wait(1).to({rotation:4.9188,x:31.35,y:31.3},0).wait(1).to({rotation:5.022},0).wait(1).to({rotation:5.1183,y:31.25},0).wait(1).to({rotation:5.2081},0).wait(1).to({rotation:5.2916},0).wait(1).to({rotation:5.3691,x:31.4},0).wait(1).to({rotation:5.4407},0).wait(1).to({rotation:5.5069,x:31.35},0).wait(1).to({rotation:5.5677,y:31.3},0).wait(1).to({rotation:5.6236,x:31.4,y:31.25},0).wait(1).to({rotation:5.6747,x:31.35},0).wait(1).to({rotation:5.7212,x:31.4},0).wait(1).to({rotation:5.7633,x:31.35,y:31.3},0).wait(1).to({rotation:5.8014,x:31.4,y:31.25},0).wait(1).to({rotation:5.8355,y:31.3},0).wait(1).to({rotation:5.8659},0).wait(1).to({rotation:5.8928,y:31.25},0).wait(1).to({rotation:5.9162,y:31.3},0).wait(1).to({rotation:5.9364},0).wait(1).to({rotation:5.9535},0).wait(1).to({rotation:5.9676},0).wait(1).to({rotation:5.9789},0).wait(1).to({rotation:5.9875,y:31.25},0).wait(1).to({rotation:5.9935},0).wait(1).to({rotation:5.997},0).wait(1).to({regX:30.9,regY:31.1,rotation:5.9982,x:31.1,y:31.1},0).wait(1).to({regX:31.3,regY:31.2,rotation:5.997,x:31.45,y:31.2},0).wait(1).to({rotation:5.9932,y:31.25},0).wait(1).to({rotation:5.9868},0).wait(1).to({rotation:5.9776},0).wait(1).to({rotation:5.9655},0).wait(1).to({rotation:5.9503},0).wait(1).to({rotation:5.932,x:31.5},0).wait(1).to({rotation:5.9104,x:31.45,y:31.2},0).wait(1).to({rotation:5.8852,y:31.25},0).wait(1).to({rotation:5.8564},0).wait(1).to({rotation:5.8237},0).wait(1).to({rotation:5.787},0).wait(1).to({rotation:5.7459},0).wait(1).to({rotation:5.7004,y:31.2},0).wait(1).to({rotation:5.6502,y:31.25},0).wait(1).to({rotation:5.595,y:31.2},0).wait(1).to({rotation:5.5345},0).wait(1).to({rotation:5.4685,y:31.25},0).wait(1).to({rotation:5.3967,x:31.4,y:31.2},0).wait(1).to({rotation:5.3188},0).wait(1).to({rotation:5.2344},0).wait(1).to({rotation:5.1433},0).wait(1).to({rotation:5.0452,x:31.45,y:31.25},0).wait(1).to({rotation:4.9398},0).wait(1).to({rotation:4.8268,x:31.4},0).wait(1).to({rotation:4.706,x:31.45,y:31.2},0).wait(1).to({rotation:4.5772,x:31.4},0).wait(1).to({rotation:4.4403},0).wait(1).to({rotation:4.2955},0).wait(1).to({rotation:4.1428},0).wait(1).to({rotation:3.9825,y:31.15},0).wait(1).to({rotation:3.8153,y:31.25},0).wait(1).to({rotation:3.6419},0).wait(1).to({rotation:3.4633,y:31.2},0).wait(1).to({rotation:3.2806},0).wait(1).to({rotation:3.0952,x:31.35},0).wait(1).to({rotation:2.9087},0).wait(1).to({rotation:2.7227},0).wait(1).to({rotation:2.5386},0).wait(1).to({rotation:2.3581},0).wait(1).to({rotation:2.1823,x:31.4},0).wait(1).to({rotation:2.0124},0).wait(1).to({rotation:1.8493},0).wait(1).to({rotation:1.6937},0).wait(1).to({rotation:1.546,x:31.35},0).wait(1).to({rotation:1.4064,x:31.4},0).wait(1).to({rotation:1.2751,x:31.35},0).wait(1).to({rotation:1.152},0).wait(1).to({rotation:1.037,y:31.15},0).wait(1).to({rotation:0.9299,y:31.2},0).wait(1).to({rotation:0.8304},0).wait(1).to({rotation:0.7383},0).wait(1).to({rotation:0.6532},0).wait(1).to({rotation:0.5749,y:31.15},0).wait(1).to({rotation:0.5029},0).wait(1).to({rotation:0.437,x:31.3,y:31.2},0).wait(1).to({rotation:0.3769,x:31.35,y:31.15},0).wait(1).to({rotation:0.3222,x:31.3,y:31.2},0).wait(1).to({rotation:0.2728,x:31.35},0).wait(1).to({rotation:0.2282,y:31.15},0).wait(1).to({rotation:0.1884},0).wait(1).to({rotation:0.153,x:31.3,y:31.2},0).wait(1).to({rotation:0.1218,x:31.35,y:31.15},0).wait(1).to({rotation:0.0946},0).wait(1).to({rotation:0.0712,x:31.3,y:31.2},0).wait(1).to({rotation:0.0515},0).wait(1).to({rotation:0.0352,x:31.35,y:31.15},0).wait(1).to({rotation:0.0222},0).wait(1).to({rotation:0.0123},0).wait(1).to({rotation:0.0054},0).wait(1).to({rotation:0.0013},0).wait(1).to({regX:31,regY:31,rotation:0,x:31,y:31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,14.7,33.1,33.2);


(lib.Symbol35copy10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol32copy10();
	this.instance.setTransform(1024.75,110.6,2.1394,0.7442,0,0,0,578.6,148.6);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35copy10, new cjs.Rectangle(-213.1,0,2475.7,221.1), null);


(lib.Symbol35copy9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol32copy9();
	this.instance.setTransform(1024.7,110.6,1.771,0.7442,0,0,0,578.6,148.6);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35copy9, new cjs.Rectangle(0,0,2049.4,221.1), null);


(lib.Symbol33copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gradient_radial_DARK_002
	this.instance = new lib.Symbol35copy10();
	this.instance.setTransform(1093.7,394.65,0.7961,0.6563,0,0,0,1024.8,110.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).to({regY:110.5,scaleX:0.5755,scaleY:1,x:1313.75,y:414.5,alpha:1},38).wait(1));

	// Symbol_35
	this.instance_1 = new lib.Symbol35copy10();
	this.instance_1.setTransform(529.75,516.1,0.5755,1,0,0,0,1024.8,110.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({x:686.65,y:471.5,alpha:1},38).wait(1));

	// Symbol_35
	this.instance_2 = new lib.Symbol35copy9();
	this.instance_2.setTransform(307.6,395.6,0.434,0.8632,0,0,0,1024.8,110.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.4339,x:1085.5,y:395.55,alpha:0.75},42).to({scaleX:0.434,x:2058.6,y:395.6,alpha:0},49).wait(1));

	// Symbol_35
	this.instance_3 = new lib.Symbol35copy10();
	this.instance_3.setTransform(1313.75,414.5,0.5755,1,0,0,0,1024.8,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.6311,x:1460.75,y:408.5},24).to({x:1503.8,y:429.55},29).to({x:1577.8,y:479.55,alpha:0},38).wait(1));

	// Symbol_35
	this.instance_4 = new lib.Symbol35copy10();
	this.instance_4.setTransform(686.65,471.5,0.5755,1,0,0,0,1024.8,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:110.6,scaleY:1.1447,x:822.65,y:426.4},24).to({x:946.7,y:393.65},29).to({scaleX:0.6496,x:1142.75,y:415.65,alpha:0},38).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,267.1,2685.9,359.6);


(lib.Symbol5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(132).call(this.frame_132).wait(10));

	// Layer_1
	this.instance_1 = new lib.Symbol4_1();
	this.instance_1.setTransform(113.3,47.5,1,1,0,0,0,113.3,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:113.5,scaleX:0.2154,scaleY:0.5482,x:113.35,y:47.55},0).to({regX:113.3,scaleX:1,scaleY:1,x:113.3,y:47.5},7,cjs.Ease.get(-1)).to({regX:113.2,regY:47.6,scaleX:1.5574,scaleY:0.8484,x:113.25,y:47.65,alpha:0},91,cjs.Ease.get(1)).to({_off:true},1).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,0,549.7,87);


(lib.Symbol3copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_125 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(125).call(this.frame_125).wait(31));

	// Layer_4
	this.instance = new lib.Symbol35copy10();
	this.instance.setTransform(284.95,279.8,0.0793,2.0493,0,0,0,1024.8,110.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,scaleX:0.1818,x:284.9,alpha:0},0).wait(1).to({regX:1024.7,regY:110.5,y:279.4,alpha:0.0006},0).wait(1).to({alpha:0.0023},0).wait(1).to({alpha:0.0055},0).wait(1).to({alpha:0.0101},0).wait(1).to({alpha:0.0164},0).wait(1).to({alpha:0.0246},0).wait(1).to({alpha:0.0349},0).wait(1).to({alpha:0.0476},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.0814},0).wait(1).to({alpha:0.1031},0).wait(1).to({alpha:0.1284},0).wait(1).to({alpha:0.1572},0).wait(1).to({alpha:0.1894},0).wait(1).to({alpha:0.2241},0).wait(1).to({alpha:0.26},0).wait(1).to({alpha:0.2957},0).wait(1).to({alpha:0.3296},0).wait(1).to({alpha:0.3604},0).wait(1).to({alpha:0.3878},0).wait(1).to({alpha:0.4115},0).wait(1).to({alpha:0.4315},0).wait(1).to({alpha:0.4484},0).wait(1).to({alpha:0.4622},0).wait(1).to({alpha:0.4734},0).wait(1).to({alpha:0.4823},0).wait(1).to({alpha:0.4891},0).wait(1).to({alpha:0.4941},0).wait(1).to({alpha:0.4975},0).wait(1).to({alpha:0.4994},0).wait(1).to({regX:1024.8,regY:110.7,y:279.8,alpha:0.5},0).to({regX:1025.5,regY:110.8,scaleX:0.1205,scaleY:2.0635,skewX:-6.7046,x:284.95,y:280,alpha:0},64,cjs.Ease.get(1)).to({_off:true},1).wait(58));

	// Symbol_33
	this.instance_1 = new lib.Symbol33copy3();
	this.instance_1.setTransform(376.5,283.6,0.2358,0.8116,0,175.2852,-4.7147,1306.8,413.1);
	this.instance_1.alpha = 0.5391;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).wait(1).to({regX:1160.3,regY:446.9,scaleY:0.8117,x:339.8,y:259.05,alpha:0.0009},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.0093},0).wait(1).to({alpha:0.0174},0).wait(1).to({alpha:0.0285},0).wait(1).to({alpha:0.0433},0).wait(1).to({alpha:0.0622},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.1152},0).wait(1).to({alpha:0.1504},0).wait(1).to({alpha:0.1913},0).wait(1).to({alpha:0.237},0).wait(1).to({alpha:0.285},0).wait(1).to({alpha:0.3322},0).wait(1).to({alpha:0.3757},0).wait(1).to({alpha:0.4136},0).wait(1).to({alpha:0.4455},0).wait(1).to({alpha:0.4714},0).wait(1).to({alpha:0.4921},0).wait(1).to({alpha:0.5082},0).wait(1).to({alpha:0.5203},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.5348},0).wait(1).to({alpha:0.538},0).wait(1).to({regX:1306.8,regY:413.1,scaleY:0.8116,x:376.5,y:283.6,alpha:0.5391},0).wait(34).to({regX:1160.3,regY:446.9,scaleY:0.8117,x:339.8,y:259.05,alpha:0.5389},0).wait(1).to({alpha:0.5383},0).wait(1).to({alpha:0.5373},0).wait(1).to({alpha:0.5359},0).wait(1).to({alpha:0.5341},0).wait(1).to({alpha:0.5318},0).wait(1).to({alpha:0.5289},0).wait(1).to({alpha:0.5255},0).wait(1).to({alpha:0.5215},0).wait(1).to({alpha:0.5169},0).wait(1).to({alpha:0.5117},0).wait(1).to({alpha:0.5057},0).wait(1).to({alpha:0.499},0).wait(1).to({alpha:0.4915},0).wait(1).to({alpha:0.4831},0).wait(1).to({alpha:0.4737},0).wait(1).to({alpha:0.4634},0).wait(1).to({alpha:0.4521},0).wait(1).to({alpha:0.4397},0).wait(1).to({alpha:0.4261},0).wait(1).to({alpha:0.4114},0).wait(1).to({alpha:0.3954},0).wait(1).to({alpha:0.3783},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.3407},0).wait(1).to({alpha:0.3205},0).wait(1).to({alpha:0.2995},0).wait(1).to({alpha:0.2782},0).wait(1).to({alpha:0.2566},0).wait(1).to({alpha:0.2352},0).wait(1).to({alpha:0.2142},0).wait(1).to({alpha:0.1939},0).wait(1).to({alpha:0.1745},0).wait(1).to({alpha:0.1561},0).wait(1).to({alpha:0.1389},0).wait(1).to({alpha:0.1229},0).wait(1).to({alpha:0.1082},0).wait(1).to({alpha:0.0946},0).wait(1).to({alpha:0.0823},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.0608},0).wait(1).to({alpha:0.0517},0).wait(1).to({alpha:0.0434},0).wait(1).to({alpha:0.0361},0).wait(1).to({alpha:0.0296},0).wait(1).to({alpha:0.0239},0).wait(1).to({alpha:0.0189},0).wait(1).to({alpha:0.0146},0).wait(1).to({alpha:0.0109},0).wait(1).to({alpha:0.0079},0).wait(1).to({alpha:0.0053},0).wait(1).to({alpha:0.0034},0).wait(1).to({alpha:0.0018},0).wait(1).to({alpha:0.0008},0).wait(1).to({alpha:0.0002},0).wait(1).to({regX:1306.8,regY:413.1,scaleY:0.8116,x:376.5,y:283.6,alpha:0},0).to({_off:true},1).wait(39));

	// Symbol_33
	this.instance_2 = new lib.Symbol33copy3();
	this.instance_2.setTransform(340.5,257.7,0.2358,0.7062,0,0,0,1307,413.1);
	this.instance_2.alpha = 0.8398;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).wait(1).to({regX:1160.3,regY:446.9,x:305.9,y:281.55,alpha:0.0015},0).wait(1).to({alpha:0.0062},0).wait(1).to({alpha:0.0145},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.0444},0).wait(1).to({alpha:0.0674},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.134},0).wait(1).to({alpha:0.1795},0).wait(1).to({alpha:0.2343},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.3692},0).wait(1).to({alpha:0.4441},0).wait(1).to({alpha:0.5176},0).wait(1).to({alpha:0.5854},0).wait(1).to({alpha:0.6444},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.7345},0).wait(1).to({alpha:0.7667},0).wait(1).to({alpha:0.7918},0).wait(1).to({alpha:0.8106},0).wait(1).to({alpha:0.8242},0).wait(1).to({alpha:0.8332},0).wait(1).to({alpha:0.8383},0).wait(1).to({regX:1307,regY:413.1,x:340.5,y:257.7,alpha:0.8398},0).wait(34).to({regX:1160.3,regY:446.9,x:305.9,y:281.55,alpha:0.8396},0).wait(1).to({alpha:0.8387},0).wait(1).to({alpha:0.8372},0).wait(1).to({alpha:0.835},0).wait(1).to({alpha:0.8321},0).wait(1).to({alpha:0.8285},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.8187},0).wait(1).to({alpha:0.8125},0).wait(1).to({alpha:0.8054},0).wait(1).to({alpha:0.7972},0).wait(1).to({alpha:0.7879},0).wait(1).to({alpha:0.7774},0).wait(1).to({alpha:0.7657},0).wait(1).to({alpha:0.7526},0).wait(1).to({alpha:0.7381},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.7044},0).wait(1).to({alpha:0.685},0).wait(1).to({alpha:0.6639},0).wait(1).to({alpha:0.6409},0).wait(1).to({alpha:0.616},0).wait(1).to({alpha:0.5893},0).wait(1).to({alpha:0.5609},0).wait(1).to({alpha:0.5308},0).wait(1).to({alpha:0.4993},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4334},0).wait(1).to({alpha:0.3998},0).wait(1).to({alpha:0.3664},0).wait(1).to({alpha:0.3337},0).wait(1).to({alpha:0.3021},0).wait(1).to({alpha:0.2719},0).wait(1).to({alpha:0.2433},0).wait(1).to({alpha:0.2165},0).wait(1).to({alpha:0.1915},0).wait(1).to({alpha:0.1685},0).wait(1).to({alpha:0.1474},0).wait(1).to({alpha:0.1281},0).wait(1).to({alpha:0.1106},0).wait(1).to({alpha:0.0948},0).wait(1).to({alpha:0.0805},0).wait(1).to({alpha:0.0677},0).wait(1).to({alpha:0.0563},0).wait(1).to({alpha:0.0462},0).wait(1).to({alpha:0.0373},0).wait(1).to({alpha:0.0295},0).wait(1).to({alpha:0.0228},0).wait(1).to({alpha:0.0171},0).wait(1).to({alpha:0.0123},0).wait(1).to({alpha:0.0083},0).wait(1).to({alpha:0.0052},0).wait(1).to({alpha:0.0029},0).wait(1).to({alpha:0.0013},0).wait(1).to({alpha:0.0003},0).wait(1).to({regX:1307,regY:413.1,x:340.5,y:257.7,alpha:0},0).to({_off:true},1).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,552.7,506.6);


(lib.GLOW_WAVE_IN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_87 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(87).call(this.frame_87).wait(1));

	// Layer_2
	this.instance = new lib.GLOW_WAVE_gradient_radial_003();
	this.instance.setTransform(50.5,50.5,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).wait(1).to({alpha:0.0021},0).wait(1).to({alpha:0.0087},0).wait(1).to({alpha:0.0206},0).wait(1).to({alpha:0.0387},0).wait(1).to({alpha:0.0639},0).wait(1).to({alpha:0.0976},0).wait(1).to({alpha:0.1412},0).wait(1).to({alpha:0.1961},0).wait(1).to({alpha:0.2638},0).wait(1).to({alpha:0.3444},0).wait(1).to({alpha:0.4358},0).wait(1).to({alpha:0.5326},0).wait(1).to({alpha:0.6274},0).wait(1).to({alpha:0.7132},0).wait(1).to({alpha:0.7865},0).wait(1).to({alpha:0.8465},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.9307},0).wait(1).to({alpha:0.9582},0).wait(1).to({alpha:0.9777},0).wait(1).to({alpha:0.9906},0).wait(1).to({alpha:0.9978},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9997},0).wait(1).to({alpha:0.9988},0).wait(1).to({alpha:0.9973},0).wait(1).to({alpha:0.9952},0).wait(1).to({alpha:0.9923},0).wait(1).to({alpha:0.9887},0).wait(1).to({alpha:0.9843},0).wait(1).to({alpha:0.9791},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.9581},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.9389},0).wait(1).to({alpha:0.9276},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.9011},0).wait(1).to({alpha:0.8858},0).wait(1).to({alpha:0.869},0).wait(1).to({alpha:0.8507},0).wait(1).to({alpha:0.8306},0).wait(1).to({alpha:0.8088},0).wait(1).to({alpha:0.7852},0).wait(1).to({alpha:0.7598},0).wait(1).to({alpha:0.7325},0).wait(1).to({alpha:0.7033},0).wait(1).to({alpha:0.6724},0).wait(1).to({alpha:0.6398},0).wait(1).to({alpha:0.6057},0).wait(1).to({alpha:0.5704},0).wait(1).to({alpha:0.5343},0).wait(1).to({alpha:0.4977},0).wait(1).to({alpha:0.461},0).wait(1).to({alpha:0.4247},0).wait(1).to({alpha:0.3892},0).wait(1).to({alpha:0.3549},0).wait(1).to({alpha:0.322},0).wait(1).to({alpha:0.2907},0).wait(1).to({alpha:0.2613},0).wait(1).to({alpha:0.2337},0).wait(1).to({alpha:0.2081},0).wait(1).to({alpha:0.1844},0).wait(1).to({alpha:0.1625},0).wait(1).to({alpha:0.1424},0).wait(1).to({alpha:0.1241},0).wait(1).to({alpha:0.1074},0).wait(1).to({alpha:0.0922},0).wait(1).to({alpha:0.0785},0).wait(1).to({alpha:0.0662},0).wait(1).to({alpha:0.0551},0).wait(1).to({alpha:0.0453},0).wait(1).to({alpha:0.0367},0).wait(1).to({alpha:0.0291},0).wait(1).to({alpha:0.0225},0).wait(1).to({alpha:0.0169},0).wait(1).to({alpha:0.0122},0).wait(1).to({alpha:0.0083},0).wait(1).to({alpha:0.0052},0).wait(1).to({alpha:0.0029},0).wait(1).to({alpha:0.0013},0).wait(1).to({alpha:0.0003},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


(lib.GLOW_WAVE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"repeat":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_135 = function() {
		this.gotoAndPlay("repeat");
	}
	this.frame_153 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(135).call(this.frame_135).wait(18).call(this.frame_153).wait(87));

	// GLOW
	this.instance = new lib.GLOW_WAVE_IN();
	this.instance.setTransform(251.35,253.35,5.0167,5.0167,0,0,0,50.1,50.5);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(36).to({_off:false,scaleX:7.4536,scaleY:2.8824,x:251.25,y:253.55},0).wait(1).to({regX:50.5,scaleX:7.4502,scaleY:2.8867,x:254.3,alpha:0.9993},0).wait(1).to({scaleX:7.4395,scaleY:2.9004,x:254.2,y:253.5,alpha:0.9971},0).wait(1).to({scaleX:7.4206,scaleY:2.9247,x:254.1,y:253.55,alpha:0.9932},0).wait(1).to({scaleX:7.3923,scaleY:2.9609,x:253.9,y:253.5,alpha:0.9874},0).wait(1).to({scaleX:7.3536,scaleY:3.0105,x:253.7,y:253.55,alpha:0.9795},0).wait(1).to({scaleX:7.3028,scaleY:3.0756,x:253.45,y:253.5,alpha:0.9691},0).wait(1).to({scaleX:7.2384,scaleY:3.1582,x:253.05,alpha:0.9558},0).wait(1).to({scaleX:7.1583,scaleY:3.2609,x:252.6,alpha:0.9394},0).wait(1).to({scaleX:7.0605,scaleY:3.3862,x:252.05,alpha:0.9193},0).wait(1).to({scaleX:6.9429,scaleY:3.5369,x:251.35,y:253.45,alpha:0.8952},0).wait(1).to({scaleX:6.8042,scaleY:3.7147,x:250.6,alpha:0.8668},0).wait(1).to({scaleX:6.6442,scaleY:3.9198,x:249.7,alpha:0.8339},0).wait(1).to({scaleX:6.4654,scaleY:4.1489,x:248.65,y:253.4,alpha:0.7973},0).wait(1).to({scaleX:6.2742,scaleY:4.394,x:247.6,alpha:0.758},0).wait(1).to({scaleX:6.08,scaleY:4.643,x:246.5,y:253.35,alpha:0.7182},0).wait(1).to({scaleX:5.8933,scaleY:4.8823,x:245.4,alpha:0.6799},0).wait(1).to({scaleX:5.7226,scaleY:5.1011,x:244.45,y:253.4,alpha:0.6448},0).wait(1).to({scaleX:5.5725,scaleY:5.2934,x:243.55,y:253.35,alpha:0.614},0).wait(1).to({scaleX:5.4445,scaleY:5.4575,x:242.85,alpha:0.5878},0).wait(1).to({scaleX:5.3377,scaleY:5.5944,x:242.25,alpha:0.5659},0).wait(1).to({scaleX:5.2503,scaleY:5.7065,x:241.75,alpha:0.5479},0).wait(1).to({scaleX:5.18,scaleY:5.7965,x:241.35,y:253.3,alpha:0.5335},0).wait(1).to({scaleX:5.1248,scaleY:5.8672,x:241.05,y:253.35,alpha:0.5222},0).wait(1).to({scaleX:5.0828,scaleY:5.9211,x:240.8,y:253.3,alpha:0.5136},0).wait(1).to({scaleX:5.0523,scaleY:5.9602,x:240.65,y:253.35,alpha:0.5073},0).wait(1).to({scaleX:5.0319,scaleY:5.9864,x:240.5,y:253.3,alpha:0.5031},0).wait(1).to({scaleX:5.0204,scaleY:6.0011,x:240.45,alpha:0.5007},0).wait(1).to({regX:50.1,scaleX:5.0167,scaleY:6.0058,x:238.15,alpha:0.5},0).wait(1).to({regX:50.5,scaleX:5.023,scaleY:6.0023,x:240.1,alpha:0.5006},0).wait(1).to({scaleX:5.0427,scaleY:5.9912,x:240,alpha:0.5023},0).wait(1).to({scaleX:5.0774,scaleY:5.9717,x:239.75,alpha:0.5055},0).wait(1).to({scaleX:5.1286,scaleY:5.9428,x:239.4,alpha:0.5101},0).wait(1).to({scaleX:5.1985,scaleY:5.9035,x:238.95,alpha:0.5164},0).wait(1).to({scaleX:5.2894,scaleY:5.8523,x:238.3,y:253.35,alpha:0.5246},0).wait(1).to({scaleX:5.4037,scaleY:5.788,x:237.55,alpha:0.5349},0).wait(1).to({scaleX:5.5447,scaleY:5.7086,x:236.6,alpha:0.5476},0).wait(1).to({scaleX:5.7156,scaleY:5.6125,x:235.45,alpha:0.563},0).wait(1).to({scaleX:5.9198,scaleY:5.4975,x:234.1,alpha:0.5814},0).wait(1).to({scaleX:6.1609,scaleY:5.3618,x:232.45,alpha:0.6031},0).wait(1).to({scaleX:6.4413,scaleY:5.204,x:230.6,y:253.4,alpha:0.6284},0).wait(1).to({scaleX:6.7615,scaleY:5.0238,x:228.4,alpha:0.6572},0).wait(1).to({scaleX:7.1184,scaleY:4.8229,x:226,y:253.35,alpha:0.6894},0).wait(1).to({scaleX:7.5035,scaleY:4.6061,x:223.4,y:253.4,alpha:0.7241},0).wait(1).to({scaleX:7.9028,scaleY:4.3814,x:220.7,alpha:0.76},0).wait(1).to({scaleX:8.2987,scaleY:4.1585,x:218.05,alpha:0.7957},0).wait(1).to({scaleX:8.6743,scaleY:3.9471,x:215.5,y:253.45,alpha:0.8296},0).wait(1).to({scaleX:9.0172,scaleY:3.7542,x:213.15,y:253.5,alpha:0.8604},0).wait(1).to({scaleX:9.3208,scaleY:3.5833,x:211.15,y:253.45,alpha:0.8878},0).wait(1).to({scaleX:9.5833,scaleY:3.4355,x:209.35,y:253.5,alpha:0.9115},0).wait(1).to({scaleX:9.8063,scaleY:3.31,x:207.85,alpha:0.9315},0).wait(1).to({scaleX:9.9929,scaleY:3.205,x:206.6,alpha:0.9484},0).wait(1).to({scaleX:10.1466,scaleY:3.1185,x:205.55,y:253.55,alpha:0.9622},0).wait(1).to({scaleX:10.2711,scaleY:3.0484,x:204.75,alpha:0.9734},0).wait(1).to({scaleX:10.3697,scaleY:2.9929,x:204.05,alpha:0.9823},0).wait(1).to({scaleX:10.4454,scaleY:2.9503,x:203.55,alpha:0.9891},0).wait(1).to({scaleX:10.5008,scaleY:2.9191,x:203.2,y:253.5,alpha:0.9941},0).wait(1).to({scaleX:10.5382,scaleY:2.8981,x:202.95,y:253.55,alpha:0.9975},0).wait(1).to({scaleX:10.5594,scaleY:2.8862,x:202.8,alpha:0.9994},0).wait(1).to({regX:50.1,scaleX:10.5661,scaleY:2.8824,x:199,alpha:1},0).to({_off:true},31).wait(113));

	// GLOW
	this.instance_1 = new lib.GLOW_WAVE_IN();
	this.instance_1.setTransform(488.45,254.35,5.0167,5.0167,0,0,0,50.1,50.5);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(18).to({_off:false,regX:50.2,scaleX:7.202,scaleY:2.8824,x:489.25,y:254.1},0).wait(1).to({regX:50.5,scaleX:7.1989,scaleY:2.8867,x:491.4,alpha:0.9993},0).wait(1).to({scaleX:7.1893,scaleY:2.9004,x:491.35,y:254.05,alpha:0.9971},0).wait(1).to({scaleX:7.1723,scaleY:2.9247,y:254.1,alpha:0.9932},0).wait(1).to({scaleX:7.147,scaleY:2.9609,y:254.05,alpha:0.9874},0).wait(1).to({scaleX:7.1123,scaleY:3.0105,x:491.3,y:254.1,alpha:0.9795},0).wait(1).to({scaleX:7.0668,scaleY:3.0756,alpha:0.9691},0).wait(1).to({scaleX:7.009,scaleY:3.1582,x:491.25,y:254.15,alpha:0.9558},0).wait(1).to({scaleX:6.9372,scaleY:3.2609,y:254.1,alpha:0.9394},0).wait(1).to({scaleX:6.8495,scaleY:3.3862,x:491.2,y:254.15,alpha:0.9193},0).wait(1).to({scaleX:6.7441,scaleY:3.5369,x:491.1,alpha:0.8952},0).wait(1).to({scaleX:6.6196,scaleY:3.7147,x:491.05,y:254.2,alpha:0.8668},0).wait(1).to({scaleX:6.4761,scaleY:3.9198,x:491,alpha:0.8339},0).wait(1).to({scaleX:6.3159,scaleY:4.1489,x:490.9,alpha:0.7973},0).wait(1).to({scaleX:6.1444,scaleY:4.394,x:490.8,y:254.25,alpha:0.758},0).wait(1).to({scaleX:5.9702,scaleY:4.643,x:490.7,y:254.3,alpha:0.7182},0).wait(1).to({scaleX:5.8028,scaleY:4.8823,x:490.6,y:254.35,alpha:0.6799},0).wait(1).to({scaleX:5.6497,scaleY:5.1011,x:490.5,y:254.4,alpha:0.6448},0).wait(1).to({scaleX:5.5151,scaleY:5.2934,x:490.45,alpha:0.614},0).wait(1).to({scaleX:5.4003,scaleY:5.4575,x:490.35,y:254.45,alpha:0.5878},0).wait(1).to({scaleX:5.3046,scaleY:5.5944,alpha:0.5659},0).wait(1).to({scaleX:5.2262,scaleY:5.7065,x:490.25,y:254.5,alpha:0.5479},0).wait(1).to({scaleX:5.1632,scaleY:5.7965,y:254.45,alpha:0.5335},0).wait(1).to({scaleX:5.1137,scaleY:5.8672,y:254.5,alpha:0.5222},0).wait(1).to({scaleX:5.076,scaleY:5.9211,x:490.2,alpha:0.5136},0).wait(1).to({scaleX:5.0486,scaleY:5.9602,alpha:0.5073},0).wait(1).to({scaleX:5.0303,scaleY:5.9864,alpha:0.5031},0).wait(1).to({scaleX:5.02,scaleY:6.0011,x:490.15,alpha:0.5007},0).wait(1).to({regX:50.1,scaleX:5.0167,scaleY:6.0058,x:488.45,alpha:0.5},0).wait(1).to({regX:50.5,scaleX:5.0192,scaleY:6.0023,x:490.4,alpha:0.5006},0).wait(1).to({scaleX:5.027,scaleY:5.9912,alpha:0.5023},0).wait(1).to({scaleX:5.0406,scaleY:5.9717,x:490.45,alpha:0.5055},0).wait(1).to({scaleX:5.0608,scaleY:5.9428,alpha:0.5101},0).wait(1).to({scaleX:5.0883,scaleY:5.9035,alpha:0.5164},0).wait(1).to({scaleX:5.1241,scaleY:5.8523,alpha:0.5246},0).wait(1).to({scaleX:5.1691,scaleY:5.788,x:490.5,alpha:0.5349},0).wait(1).to({scaleX:5.2246,scaleY:5.7086,x:490.55,alpha:0.5476},0).wait(1).to({scaleX:5.2919,scaleY:5.6125,x:490.6,alpha:0.563},0).wait(1).to({scaleX:5.3723,scaleY:5.4975,x:490.65,y:254.45,alpha:0.5814},0).wait(1).to({scaleX:5.4673,scaleY:5.3618,x:490.7,y:254.4,alpha:0.6031},0).wait(1).to({scaleX:5.5777,scaleY:5.204,x:490.75,alpha:0.6284},0).wait(1).to({scaleX:5.7038,scaleY:5.0238,x:490.85,y:254.35,alpha:0.6572},0).wait(1).to({scaleX:5.8443,scaleY:4.8229,x:490.95,y:254.3,alpha:0.6894},0).wait(1).to({scaleX:5.996,scaleY:4.6061,x:491,alpha:0.7241},0).wait(1).to({scaleX:6.1532,scaleY:4.3814,x:491.1,y:254.25,alpha:0.76},0).wait(1).to({scaleX:6.3091,scaleY:4.1585,x:491.2,alpha:0.7957},0).wait(1).to({scaleX:6.457,scaleY:3.9471,x:491.3,alpha:0.8296},0).wait(1).to({scaleX:6.592,scaleY:3.7542,x:491.35,y:254.2,alpha:0.8604},0).wait(1).to({scaleX:6.7116,scaleY:3.5833,x:491.45,y:254.15,alpha:0.8878},0).wait(1).to({scaleX:6.815,scaleY:3.4355,x:491.5,alpha:0.9115},0).wait(1).to({scaleX:6.9028,scaleY:3.31,x:491.55,alpha:0.9315},0).wait(1).to({scaleX:6.9762,scaleY:3.205,x:491.6,y:254.1,alpha:0.9484},0).wait(1).to({scaleX:7.0368,scaleY:3.1185,x:491.65,y:254.15,alpha:0.9622},0).wait(1).to({scaleX:7.0858,scaleY:3.0484,x:491.7,y:254.1,alpha:0.9734},0).wait(1).to({scaleX:7.1246,scaleY:2.9929,alpha:0.9823},0).wait(1).to({scaleX:7.1544,scaleY:2.9503,alpha:0.9891},0).wait(1).to({scaleX:7.1763,scaleY:2.9191,y:254.05,alpha:0.9941},0).wait(1).to({scaleX:7.191,scaleY:2.8981,x:491.75,y:254.1,alpha:0.9975},0).wait(1).to({scaleX:7.1993,scaleY:2.8862,x:491.7,alpha:0.9994},0).wait(1).to({regX:50.2,scaleX:7.202,scaleY:2.8824,x:489.25,alpha:1},0).to({_off:true},31).wait(131));

	// GLOW
	this.instance_2 = new lib.GLOW_WAVE_IN();
	this.instance_2.setTransform(714.45,254.35,5.0167,5.0167,0,0,0,50.1,50.5);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,regX:50.2,scaleX:7.9666,scaleY:2.8824,x:715.25,y:254.1},0).wait(1).to({regX:50.5,scaleX:7.9624,scaleY:2.8867,x:717.65},0).wait(1).to({scaleX:7.9495,scaleY:2.9005,y:254.05},0).wait(1).to({scaleX:7.9266,scaleY:2.9247,x:717.6,y:254.1},0).wait(1).to({scaleX:7.8924,scaleY:2.9609,y:254.05},0).wait(1).to({scaleX:7.8455,scaleY:3.0106,y:254.1},0).wait(1).to({scaleX:7.7841,scaleY:3.0756,x:717.55},0).wait(1).to({scaleX:7.7061,scaleY:3.1582,x:717.5,y:254.15},0).wait(1).to({scaleX:7.6091,scaleY:3.2609,x:717.45,y:254.1},0).wait(1).to({scaleX:7.4907,scaleY:3.3862,x:717.4,y:254.15},0).wait(1).to({scaleX:7.3484,scaleY:3.5369,x:717.35},0).wait(1).to({scaleX:7.1805,scaleY:3.7147,x:717.25,y:254.2},0).wait(1).to({scaleX:6.9868,scaleY:3.9199,x:717.15},0).wait(1).to({scaleX:6.7704,scaleY:4.1489,x:717.05},0).wait(1).to({scaleX:6.5389,scaleY:4.394,x:716.9,y:254.25},0).wait(1).to({scaleX:6.3038,scaleY:4.643,x:716.8,y:254.3},0).wait(1).to({scaleX:6.0778,scaleY:4.8823,x:716.7,y:254.35},0).wait(1).to({scaleX:5.8711,scaleY:5.1011,x:716.6,y:254.4},0).wait(1).to({scaleX:5.6895,scaleY:5.2935,x:716.5},0).wait(1).to({scaleX:5.5345,scaleY:5.4575,x:716.45,y:254.45},0).wait(1).to({scaleX:5.4053,scaleY:5.5944,x:716.35},0).wait(1).to({scaleX:5.2994,scaleY:5.7065,x:716.3,y:254.5},0).wait(1).to({scaleX:5.2144,scaleY:5.7965,y:254.45},0).wait(1).to({scaleX:5.1476,scaleY:5.8673,x:716.25,y:254.5},0).wait(1).to({scaleX:5.0967,scaleY:5.9211,x:716.2},0).wait(1).to({scaleX:5.0598,scaleY:5.9602,x:716.15},0).wait(1).to({scaleX:5.0351,scaleY:5.9864},0).wait(1).to({scaleX:5.0211,scaleY:6.0012},0).wait(1).to({regX:50.1,scaleX:5.0167,scaleY:6.0058,x:714.45},0).wait(1).to({regX:50.5,scaleX:5.0201,scaleY:6.0023,x:716.4},0).wait(1).to({scaleX:5.0305,scaleY:5.9912,x:716.45},0).wait(1).to({scaleX:5.049,scaleY:5.9717,x:716.4},0).wait(1).to({scaleX:5.0762,scaleY:5.9428,x:716.45},0).wait(1).to({scaleX:5.1134,scaleY:5.9035,x:716.5,y:254.55},0).wait(1).to({scaleX:5.1616,scaleY:5.8524,y:254.5},0).wait(1).to({scaleX:5.2225,scaleY:5.788,x:716.55},0).wait(1).to({scaleX:5.2974,scaleY:5.7087},0).wait(1).to({scaleX:5.3882,scaleY:5.6125,x:716.6},0).wait(1).to({scaleX:5.4968,scaleY:5.4975,x:716.7,y:254.45},0).wait(1).to({scaleX:5.6249,scaleY:5.3618,x:716.75,y:254.4},0).wait(1).to({scaleX:5.774,scaleY:5.204,x:716.85},0).wait(1).to({scaleX:5.9442,scaleY:5.0238,x:716.95,y:254.35},0).wait(1).to({scaleX:6.1339,scaleY:4.8229,x:717,y:254.3},0).wait(1).to({scaleX:6.3386,scaleY:4.6061,x:717.15},0).wait(1).to({scaleX:6.5509,scaleY:4.3814,x:717.25,y:254.25},0).wait(1).to({scaleX:6.7613,scaleY:4.1586,x:717.4},0).wait(1).to({scaleX:6.961,scaleY:3.9472,x:717.5},0).wait(1).to({scaleX:7.1432,scaleY:3.7542,x:717.6,y:254.2},0).wait(1).to({scaleX:7.3046,scaleY:3.5833,x:717.7,y:254.15},0).wait(1).to({scaleX:7.4441,scaleY:3.4355,x:717.75},0).wait(1).to({scaleX:7.5627,scaleY:3.31,x:717.8},0).wait(1).to({scaleX:7.6619,scaleY:3.205,x:717.85,y:254.1},0).wait(1).to({scaleX:7.7436,scaleY:3.1185,x:717.9,y:254.15},0).wait(1).to({scaleX:7.8097,scaleY:3.0484,x:717.95,y:254.1},0).wait(1).to({scaleX:7.8622,scaleY:2.9929,x:718},0).wait(1).to({scaleX:7.9024,scaleY:2.9503},0).wait(1).to({scaleX:7.9319,scaleY:2.9191,y:254.05},0).wait(1).to({scaleX:7.9517,scaleY:2.8981,y:254.1},0).wait(1).to({scaleX:7.963,scaleY:2.8862,x:718.05},0).wait(1).to({regX:50.2,scaleX:7.9666,scaleY:2.8824,x:715.25},0).to({_off:true},31).wait(148));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330.3,-50,1450.5,607.8);


(lib.FLOATING_OBJECT_verticalcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));

	// rotated
	this.instance = new lib.FLOATING_OBJECT_rotationcopy();
	this.instance.setTransform(31,31,1,1,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:32.4,regY:31.2,x:32.4,y:31.2},0).wait(6).to({y:31.25},0).wait(2).to({y:31.3},0).wait(2).to({y:31.35},0).wait(1).to({y:31.4},0).wait(1).to({y:31.45},0).wait(1).to({y:31.5},0).wait(1).to({y:31.55},0).wait(1).to({y:31.6},0).wait(1).to({y:31.65},0).wait(1).to({y:31.75},0).wait(1).to({y:31.8},0).wait(1).to({y:31.9},0).wait(1).to({y:32},0).wait(1).to({y:32.1},0).wait(1).to({y:32.2},0).wait(1).to({y:32.35},0).wait(1).to({y:32.45},0).wait(1).to({y:32.6},0).wait(1).to({y:32.75},0).wait(1).to({y:32.9},0).wait(1).to({y:33.05},0).wait(1).to({y:33.2},0).wait(1).to({y:33.35},0).wait(1).to({y:33.5},0).wait(1).to({y:33.65},0).wait(1).to({y:33.8},0).wait(1).to({y:33.9},0).wait(1).to({y:34.05},0).wait(1).to({y:34.15},0).wait(1).to({y:34.25},0).wait(1).to({y:34.35},0).wait(1).to({y:34.45},0).wait(1).to({y:34.55},0).wait(1).to({y:34.65},0).wait(1).to({y:34.7},0).wait(1).to({y:34.8},0).wait(1).to({y:34.85},0).wait(1).to({y:34.9},0).wait(1).to({y:34.95},0).wait(1).to({y:35},0).wait(2).to({y:35.05},0).wait(1).to({y:35.1},0).wait(3).to({y:35.15},0).wait(5).to({regX:31,regY:31,x:31,y:35},0).wait(1).to({regX:32.4,regY:31.2,x:32.4,y:35.15},0).wait(6).to({y:35.1},0).wait(2).to({y:35.05},0).wait(2).to({y:35},0).wait(1).to({y:34.95},0).wait(1).to({y:34.9},0).wait(1).to({y:34.85},0).wait(1).to({y:34.8},0).wait(1).to({y:34.75},0).wait(1).to({y:34.7},0).wait(1).to({y:34.65},0).wait(1).to({y:34.55},0).wait(1).to({y:34.45},0).wait(1).to({y:34.4},0).wait(1).to({y:34.3},0).wait(1).to({y:34.15},0).wait(1).to({y:34.05},0).wait(1).to({y:33.95},0).wait(1).to({y:33.8},0).wait(1).to({y:33.65},0).wait(1).to({y:33.55},0).wait(1).to({y:33.4},0).wait(1).to({y:33.25},0).wait(1).to({y:33.1},0).wait(1).to({y:32.95},0).wait(1).to({y:32.8},0).wait(1).to({y:32.65},0).wait(1).to({y:32.5},0).wait(1).to({y:32.4},0).wait(1).to({y:32.25},0).wait(1).to({y:32.15},0).wait(1).to({y:32.05},0).wait(1).to({y:31.95},0).wait(1).to({y:31.85},0).wait(1).to({y:31.75},0).wait(1).to({y:31.7},0).wait(1).to({y:31.6},0).wait(1).to({y:31.55},0).wait(1).to({y:31.5},0).wait(1).to({y:31.45},0).wait(1).to({y:31.4},0).wait(1).to({y:31.35},0).wait(2).to({y:31.3},0).wait(1).to({y:31.25},0).wait(3).to({y:31.2},0).wait(5).to({regX:31,regY:31,x:31,y:31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.3,14.5,31.999999999999996,37.5);


(lib.FLOATING_OBJECT_rotation_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"repeat":1,"repeat_2":150};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}
	this.frame_149 = function() {
		this.gotoAndPlay("repeat");
	}
	this.frame_298 = function() {
		this.gotoAndPlay("repeat_2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(149).call(this.frame_149).wait(149).call(this.frame_298).wait(1));

	// actual_image
	this.instance_1 = new lib.FLOATING_OBJECT_1();
	this.instance_1.setTransform(31,31,1,1,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:30.3,regY:31.2,rotation:-0.0011,x:30.3,y:31.2},0).wait(1).to({rotation:-0.0044},0).wait(1).to({rotation:-0.01},0).wait(1).to({rotation:-0.018},0).wait(1).to({rotation:-0.0285},0).wait(1).to({rotation:-0.0416},0).wait(1).to({rotation:-0.0575,x:30.35,y:31.15},0).wait(1).to({rotation:-0.0762},0).wait(1).to({rotation:-0.0979,x:30.3,y:31.2},0).wait(1).to({rotation:-0.1227},0).wait(1).to({rotation:-0.1508,x:30.35,y:31.15},0).wait(1).to({rotation:-0.1823},0).wait(1).to({rotation:-0.2174,x:30.3,y:31.2},0).wait(1).to({rotation:-0.2563,x:30.35,y:31.15},0).wait(1).to({rotation:-0.2991,x:30.3,y:31.2},0).wait(1).to({rotation:-0.3461,x:30.35,y:31.15},0).wait(1).to({rotation:-0.3974,x:30.3,y:31.2},0).wait(1).to({rotation:-0.4532,x:30.35,y:31.15},0).wait(1).to({rotation:-0.5139,y:31.2},0).wait(1).to({rotation:-0.5796},0).wait(1).to({rotation:-0.6506},0).wait(1).to({rotation:-0.7271,y:31.15},0).wait(1).to({rotation:-0.8093},0).wait(1).to({rotation:-0.8976,y:31.2},0).wait(1).to({rotation:-0.9921},0).wait(1).to({rotation:-1.0931,y:31.15},0).wait(1).to({rotation:-1.2009,y:31.2},0).wait(1).to({rotation:-1.3154},0).wait(1).to({rotation:-1.437,x:30.4},0).wait(1).to({rotation:-1.5657},0).wait(1).to({rotation:-1.7013},0).wait(1).to({rotation:-1.8438,y:31.25},0).wait(1).to({rotation:-1.9929,y:31.2},0).wait(1).to({rotation:-2.1482},0).wait(1).to({rotation:-2.3091},0).wait(1).to({rotation:-2.4748},0).wait(1).to({rotation:-2.6444},0).wait(1).to({rotation:-2.8169},0).wait(1).to({rotation:-2.991,x:30.45},0).wait(1).to({rotation:-3.1654,x:30.4,y:31.25},0).wait(1).to({rotation:-3.3389},0).wait(1).to({rotation:-3.5102,x:30.45},0).wait(1).to({rotation:-3.6782,y:31.2},0).wait(1).to({rotation:-3.8417,x:30.5},0).wait(1).to({rotation:-3.9999},0).wait(1).to({rotation:-4.1522,x:30.45},0).wait(1).to({rotation:-4.2979,y:31.25},0).wait(1).to({rotation:-4.4367,y:31.2},0).wait(1).to({rotation:-4.5684,x:30.5,y:31.25},0).wait(1).to({rotation:-4.6929,y:31.2},0).wait(1).to({rotation:-4.8101,x:30.45,y:31.25},0).wait(1).to({rotation:-4.9203,x:30.5},0).wait(1).to({rotation:-5.0234},0).wait(1).to({rotation:-5.1198,x:30.55,y:31.2},0).wait(1).to({rotation:-5.2096,x:30.5},0).wait(1).to({rotation:-5.2932},0).wait(1).to({rotation:-5.3706,x:30.45},0).wait(1).to({rotation:-5.4423,x:30.5,y:31.25},0).wait(1).to({rotation:-5.5085},0).wait(1).to({rotation:-5.5694,y:31.2},0).wait(1).to({rotation:-5.6252,y:31.25},0).wait(1).to({rotation:-5.6763},0).wait(1).to({rotation:-5.7228},0).wait(1).to({rotation:-5.765,x:30.55},0).wait(1).to({rotation:-5.8031,x:30.5},0).wait(1).to({rotation:-5.8372},0).wait(1).to({rotation:-5.8676,x:30.55},0).wait(1).to({rotation:-5.8945,x:30.5},0).wait(1).to({rotation:-5.9179,y:31.3},0).wait(1).to({rotation:-5.9381,x:30.55,y:31.25},0).wait(1).to({rotation:-5.9552},0).wait(1).to({rotation:-5.9693},0).wait(1).to({rotation:-5.9806},0).wait(1).to({rotation:-5.9892},0).wait(1).to({rotation:-5.9953},0).wait(1).to({rotation:-5.9988,x:30.5},0).wait(1).to({regX:31,regY:31,rotation:-5.9999,x:31.2,y:31},0).wait(1).to({regX:30.3,regY:31.2,rotation:-5.9987,x:30.55,y:31.25},0).wait(1).to({rotation:-5.9949},0).wait(1).to({rotation:-5.9885},0).wait(1).to({rotation:-5.9793},0).wait(1).to({rotation:-5.9672},0).wait(1).to({rotation:-5.9521},0).wait(1).to({rotation:-5.9337,x:30.5},0).wait(1).to({rotation:-5.9121},0).wait(1).to({rotation:-5.8869,x:30.55},0).wait(1).to({rotation:-5.8581},0).wait(1).to({rotation:-5.8254,x:30.5,y:31.2},0).wait(1).to({rotation:-5.7886,y:31.25},0).wait(1).to({rotation:-5.7476},0).wait(1).to({rotation:-5.7021},0).wait(1).to({rotation:-5.6518,y:31.2},0).wait(1).to({rotation:-5.5966,y:31.25},0).wait(1).to({rotation:-5.5361},0).wait(1).to({rotation:-5.4701,x:30.45,y:31.2},0).wait(1).to({rotation:-5.3982,x:30.5},0).wait(1).to({rotation:-5.3203},0).wait(1).to({rotation:-5.2359,x:30.45},0).wait(1).to({rotation:-5.1448,x:30.5},0).wait(1).to({rotation:-5.0467,y:31.25},0).wait(1).to({rotation:-4.9412},0).wait(1).to({rotation:-4.8282},0).wait(1).to({rotation:-4.7073,x:30.45,y:31.2},0).wait(1).to({rotation:-4.5785,x:30.5,y:31.25},0).wait(1).to({rotation:-4.4416,x:30.45,y:31.2},0).wait(1).to({rotation:-4.2967,y:31.25},0).wait(1).to({rotation:-4.144,y:31.2},0).wait(1).to({rotation:-3.9837},0).wait(1).to({rotation:-3.8165,x:30.5,y:31.25},0).wait(1).to({rotation:-3.643,x:30.45,y:31.2},0).wait(1).to({rotation:-3.4643},0).wait(1).to({rotation:-3.2815},0).wait(1).to({rotation:-3.0961},0).wait(1).to({rotation:-2.9096,x:30.4},0).wait(1).to({rotation:-2.7235},0).wait(1).to({rotation:-2.5394,y:31.15},0).wait(1).to({rotation:-2.3588},0).wait(1).to({rotation:-2.1829,x:30.45,y:31.2},0).wait(1).to({rotation:-2.013,x:30.4,y:31.25},0).wait(1).to({rotation:-1.8499,y:31.2},0).wait(1).to({rotation:-1.6942,x:30.35},0).wait(1).to({rotation:-1.5464,x:30.4},0).wait(1).to({rotation:-1.4068,x:30.35},0).wait(1).to({rotation:-1.2754,x:30.4},0).wait(1).to({rotation:-1.1523},0).wait(1).to({rotation:-1.0373,x:30.35},0).wait(1).to({rotation:-0.9302},0).wait(1).to({rotation:-0.8307},0).wait(1).to({rotation:-0.7385},0).wait(1).to({rotation:-0.6534},0).wait(1).to({rotation:-0.575},0).wait(1).to({rotation:-0.503,x:30.3},0).wait(1).to({rotation:-0.4371,x:30.35,y:31.15},0).wait(1).to({rotation:-0.377,y:31.2},0).wait(1).to({rotation:-0.3223},0).wait(1).to({rotation:-0.2728,y:31.15},0).wait(1).to({rotation:-0.2283,x:30.3,y:31.2},0).wait(1).to({rotation:-0.1884,x:30.35},0).wait(1).to({rotation:-0.153,y:31.15},0).wait(1).to({rotation:-0.1218,x:30.3,y:31.2},0).wait(1).to({rotation:-0.0946,x:30.35},0).wait(1).to({rotation:-0.0713,y:31.15},0).wait(1).to({rotation:-0.0515},0).wait(1).to({rotation:-0.0352,x:30.3,y:31.2},0).wait(1).to({rotation:-0.0222},0).wait(1).to({rotation:-0.0123},0).wait(1).to({rotation:-0.0054},0).wait(1).to({rotation:-0.0013},0).wait(1).to({regX:31,regY:31,rotation:0,x:31,y:31},0).wait(1).to({regX:30.3,regY:31.2,rotation:0.0011,x:30.3,y:31.2},0).wait(1).to({rotation:0.0044},0).wait(1).to({rotation:0.01},0).wait(1).to({rotation:0.018},0).wait(1).to({rotation:0.0285},0).wait(1).to({rotation:0.0416},0).wait(1).to({rotation:0.0575,x:30.25,y:31.25},0).wait(1).to({rotation:0.0762},0).wait(1).to({rotation:0.0979,x:30.3,y:31.2},0).wait(1).to({rotation:0.1227},0).wait(1).to({rotation:0.1508,x:30.25,y:31.25},0).wait(1).to({rotation:0.1823,x:30.3},0).wait(1).to({rotation:0.2174,y:31.2},0).wait(1).to({rotation:0.2562,x:30.25,y:31.25},0).wait(1).to({rotation:0.299,x:30.3,y:31.2},0).wait(1).to({rotation:0.346,x:30.25,y:31.25},0).wait(1).to({rotation:0.3973,x:30.3,y:31.2},0).wait(1).to({rotation:0.4531,y:31.25},0).wait(1).to({rotation:0.5138,x:30.25,y:31.2},0).wait(1).to({rotation:0.5794,x:30.3},0).wait(1).to({rotation:0.6504,y:31.25},0).wait(1).to({rotation:0.7268},0).wait(1).to({rotation:0.8091},0).wait(1).to({rotation:0.8973,y:31.2},0).wait(1).to({rotation:0.9918},0).wait(1).to({rotation:1.0928,y:31.25},0).wait(1).to({rotation:1.2005},0).wait(1).to({rotation:1.3151,y:31.2},0).wait(1).to({rotation:1.4366},0).wait(1).to({rotation:1.5652,y:31.25},0).wait(1).to({rotation:1.7008,y:31.2},0).wait(1).to({rotation:1.8433,x:30.35},0).wait(1).to({rotation:1.9923,x:30.3},0).wait(1).to({rotation:2.1476,x:30.35,y:31.25},0).wait(1).to({rotation:2.3084,y:31.15},0).wait(1).to({rotation:2.4741,x:30.3},0).wait(1).to({rotation:2.6437,y:31.2},0).wait(1).to({rotation:2.8161},0).wait(1).to({rotation:2.9901},0).wait(1).to({rotation:3.1645,x:30.35,y:31.15},0).wait(1).to({rotation:3.338,y:31.2},0).wait(1).to({rotation:3.5092},0).wait(1).to({rotation:3.6771},0).wait(1).to({rotation:3.8406,y:31.25},0).wait(1).to({rotation:3.9988,y:31.15},0).wait(1).to({rotation:4.151},0).wait(1).to({rotation:4.2966},0).wait(1).to({rotation:4.4354,y:31.2},0).wait(1).to({rotation:4.5671,y:31.15},0).wait(1).to({rotation:4.6915,y:31.2},0).wait(1).to({rotation:4.8087,x:30.4},0).wait(1).to({rotation:4.9188,x:30.35},0).wait(1).to({rotation:5.022},0).wait(1).to({rotation:5.1183,x:30.4,y:31.15},0).wait(1).to({rotation:5.2081,x:30.35},0).wait(1).to({rotation:5.2916},0).wait(1).to({rotation:5.3691,x:30.4},0).wait(1).to({rotation:5.4407},0).wait(1).to({rotation:5.5069,x:30.35},0).wait(1).to({rotation:5.5677,y:31.2},0).wait(1).to({rotation:5.6236,x:30.4,y:31.15},0).wait(1).to({rotation:5.6747,x:30.35},0).wait(1).to({rotation:5.7212,x:30.4},0).wait(1).to({rotation:5.7633,x:30.35,y:31.2},0).wait(1).to({rotation:5.8014,x:30.4,y:31.15},0).wait(1).to({rotation:5.8355,y:31.2},0).wait(1).to({rotation:5.8659},0).wait(1).to({rotation:5.8928,y:31.15},0).wait(1).to({rotation:5.9162},0).wait(1).to({rotation:5.9364,y:31.2},0).wait(1).to({rotation:5.9535},0).wait(1).to({rotation:5.9676},0).wait(1).to({rotation:5.9789},0).wait(1).to({rotation:5.9875,y:31.15},0).wait(1).to({rotation:5.9935},0).wait(1).to({rotation:5.997},0).wait(1).to({regX:30.9,regY:31.1,rotation:5.9982,x:31.1,y:31.1},0).wait(1).to({regX:30.3,regY:31.2,rotation:5.997,x:30.45},0).wait(1).to({rotation:5.9932,y:31.15},0).wait(1).to({rotation:5.9868},0).wait(1).to({rotation:5.9776},0).wait(1).to({rotation:5.9655},0).wait(1).to({rotation:5.9503},0).wait(1).to({rotation:5.932,x:30.5},0).wait(1).to({rotation:5.9104,x:30.45,y:31.1},0).wait(1).to({rotation:5.8852,y:31.15},0).wait(1).to({rotation:5.8564},0).wait(1).to({rotation:5.8237,y:31.1},0).wait(1).to({rotation:5.787,y:31.15},0).wait(1).to({rotation:5.7459},0).wait(1).to({rotation:5.7004,y:31.1},0).wait(1).to({rotation:5.6502,y:31.15},0).wait(1).to({rotation:5.595,y:31.1},0).wait(1).to({rotation:5.5345},0).wait(1).to({rotation:5.4685,y:31.15},0).wait(1).to({rotation:5.3967,x:30.4,y:31.1},0).wait(1).to({rotation:5.3188},0).wait(1).to({rotation:5.2344},0).wait(1).to({rotation:5.1433,x:30.45},0).wait(1).to({rotation:5.0452,y:31.15},0).wait(1).to({rotation:4.9398},0).wait(1).to({rotation:4.8268,x:30.4},0).wait(1).to({rotation:4.706,x:30.45},0).wait(1).to({rotation:4.5772,x:30.4,y:31.1},0).wait(1).to({rotation:4.4403,y:31.15},0).wait(1).to({rotation:4.2955,y:31.1},0).wait(1).to({rotation:4.1428,y:31.15},0).wait(1).to({rotation:3.9825,x:30.45,y:31.1},0).wait(1).to({rotation:3.8153,x:30.4,y:31.15},0).wait(1).to({rotation:3.6419},0).wait(1).to({rotation:3.4633},0).wait(1).to({rotation:3.2806},0).wait(1).to({rotation:3.0952,x:30.35},0).wait(1).to({rotation:2.9087},0).wait(1).to({rotation:2.7227},0).wait(1).to({rotation:2.5386},0).wait(1).to({rotation:2.3581},0).wait(1).to({rotation:2.1823,x:30.4},0).wait(1).to({rotation:2.0124},0).wait(1).to({rotation:1.8493,y:31.2},0).wait(1).to({rotation:1.6937},0).wait(1).to({rotation:1.546,x:30.35,y:31.15},0).wait(1).to({rotation:1.4064,x:30.4,y:31.2},0).wait(1).to({rotation:1.2751,x:30.35,y:31.15},0).wait(1).to({rotation:1.152},0).wait(1).to({rotation:1.037},0).wait(1).to({rotation:0.9299,y:31.2},0).wait(1).to({rotation:0.8304},0).wait(1).to({rotation:0.7383},0).wait(1).to({rotation:0.6532},0).wait(1).to({rotation:0.5749,y:31.15},0).wait(1).to({rotation:0.5029},0).wait(1).to({rotation:0.437,x:30.3,y:31.2},0).wait(1).to({rotation:0.3769,x:30.35,y:31.15},0).wait(1).to({rotation:0.3222,x:30.3},0).wait(1).to({rotation:0.2728,x:30.35,y:31.2},0).wait(1).to({rotation:0.2282,y:31.15},0).wait(1).to({rotation:0.1884},0).wait(1).to({rotation:0.153,x:30.3,y:31.2},0).wait(1).to({rotation:0.1218,x:30.35,y:31.15},0).wait(1).to({rotation:0.0946},0).wait(1).to({rotation:0.0712,x:30.3,y:31.2},0).wait(1).to({rotation:0.0515},0).wait(1).to({rotation:0.0352,x:30.35,y:31.15},0).wait(1).to({rotation:0.0222},0).wait(1).to({rotation:0.0123},0).wait(1).to({rotation:0.0054},0).wait(1).to({rotation:0.0013},0).wait(1).to({regX:31,regY:31,rotation:0,x:31,y:31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.9,13.9,33.300000000000004,34.800000000000004);


(lib.FLOATING_OBJECT_horizontalcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180));

	// vertical
	this.instance = new lib.FLOATING_OBJECT_verticalcopy();
	this.instance.setTransform(31,31,1,1,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:32.4,regY:33.2,x:32.4,y:33.2},0).wait(12).to({x:32.35},0).wait(5).to({x:32.3},0).wait(3).to({x:32.25},0).wait(3).to({x:32.2},0).wait(2).to({x:32.15},0).wait(2).to({x:32.1},0).wait(2).to({x:32.05},0).wait(2).to({x:32},0).wait(1).to({x:31.95},0).wait(2).to({x:31.9},0).wait(1).to({x:31.85},0).wait(1).to({x:31.8},0).wait(1).to({x:31.75},0).wait(1).to({x:31.7},0).wait(2).to({x:31.65},0).wait(1).to({x:31.6},0).wait(1).to({x:31.55},0).wait(1).to({x:31.5},0).wait(1).to({x:31.45},0).wait(1).to({x:31.4},0).wait(1).to({x:31.35},0).wait(1).to({x:31.3},0).wait(1).to({x:31.25},0).wait(1).to({x:31.2},0).wait(1).to({x:31.15},0).wait(1).to({x:31.1},0).wait(1).to({x:31.05},0).wait(1).to({x:31},0).wait(1).to({x:30.95},0).wait(2).to({x:30.9},0).wait(1).to({x:30.85},0).wait(1).to({x:30.8},0).wait(2).to({x:30.75},0).wait(2).to({x:30.7},0).wait(2).to({x:30.65},0).wait(2).to({x:30.6},0).wait(2).to({x:30.55},0).wait(4).to({x:30.5},0).wait(4).to({x:30.45},0).wait(12).to({regX:31,regY:31,x:29,y:31},0).wait(1).to({regX:32.4,regY:33.2,x:30.45,y:33.2},0).wait(12).to({x:30.5},0).wait(5).to({x:30.55},0).wait(3).to({x:30.6},0).wait(3).to({x:30.65},0).wait(3).to({x:30.7},0).wait(2).to({x:30.75},0).wait(1).to({x:30.8},0).wait(2).to({x:30.85},0).wait(2).to({x:30.9},0).wait(1).to({x:30.95},0).wait(1).to({x:31},0).wait(2).to({x:31.05},0).wait(1).to({x:31.1},0).wait(1).to({x:31.15},0).wait(1).to({x:31.2},0).wait(1).to({x:31.25},0).wait(1).to({x:31.3},0).wait(1).to({x:31.35},0).wait(1).to({x:31.4},0).wait(1).to({x:31.45},0).wait(1).to({x:31.5},0).wait(1).to({x:31.55},0).wait(1).to({x:31.6},0).wait(1).to({x:31.65},0).wait(1).to({x:31.7},0).wait(1).to({x:31.75},0).wait(1).to({x:31.8},0).wait(2).to({x:31.85},0).wait(1).to({x:31.9},0).wait(1).to({x:31.95},0).wait(2).to({x:32},0).wait(1).to({x:32.05},0).wait(2).to({x:32.1},0).wait(1).to({x:32.15},0).wait(2).to({x:32.2},0).wait(3).to({x:32.25},0).wait(2).to({x:32.3},0).wait(4).to({x:32.35},0).wait(4).to({x:32.4},0).wait(12).to({regX:31,regY:31,x:31,y:31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.3,14.5,34,33.5);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol17();
	this.instance.setTransform(158.95,424.55,1,1,0,0,0,142.7,422.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:114.4,regY:207.4,rotation:-0.0006,x:130.6,y:209.8},0).wait(1).to({rotation:-0.0023},0).wait(1).to({rotation:-0.0053},0).wait(1).to({rotation:-0.0097},0).wait(1).to({rotation:-0.0155,x:130.55},0).wait(1).to({rotation:-0.0229},0).wait(1).to({rotation:-0.0319,x:130.5},0).wait(1).to({rotation:-0.0427,x:130.45},0).wait(1).to({rotation:0,skewX:-0.0554,x:130.4},0).wait(1).to({skewX:-0.0702,x:130.35},0).wait(1).to({skewX:-0.0873,x:130.3},0).wait(1).to({skewX:-0.1067,x:130.25},0).wait(1).to({skewX:-0.1288,x:130.15},0).wait(1).to({skewX:-0.1537,x:130.05},0).wait(1).to({skewX:-0.1816,x:129.95},0).wait(1).to({scaleY:1.0001,skewX:-0.2127,x:129.8},0).wait(1).to({skewX:-0.2472,x:129.7},0).wait(1).to({skewX:-0.2853,x:129.6},0).wait(1).to({skewX:-0.327,x:129.45},0).wait(1).to({skewX:-0.3724,x:129.25},0).wait(1).to({skewX:-0.4213,x:129.05},0).wait(1).to({skewX:-0.4734,x:128.85},0).wait(1).to({skewX:-0.5282,x:128.65},0).wait(1).to({scaleY:1.0002,skewX:-0.585,x:128.45},0).wait(1).to({skewX:-0.6428,x:128.3},0).wait(1).to({skewX:-0.7006,x:128.05},0).wait(1).to({skewX:-0.7574,x:127.85},0).wait(1).to({skewX:-0.8121,x:127.65},0).wait(1).to({skewX:-0.8641,x:127.45},0).wait(1).to({skewX:-0.9128,x:127.25},0).wait(1).to({skewX:-0.9579,x:127.1},0).wait(1).to({skewX:-0.9993,x:126.95},0).wait(1).to({skewX:-1.0369,x:126.8},0).wait(1).to({skewX:-1.0708,x:126.7},0).wait(1).to({scaleY:1.0003,skewX:-1.1013,x:126.6},0).wait(1).to({skewX:-1.1285,x:126.5},0).wait(1).to({skewX:-1.1525,x:126.35},0).wait(1).to({skewX:-1.1738,x:126.3},0).wait(1).to({skewX:-1.1923,x:126.25},0).wait(1).to({skewX:-1.2084,x:126.15},0).wait(1).to({skewX:-1.2222,x:126.1},0).wait(1).to({skewX:-1.234},0).wait(1).to({skewX:-1.2437,x:126.05},0).wait(1).to({skewX:-1.2517},0).wait(1).to({skewX:-1.2579,x:126},0).wait(1).to({skewX:-1.2626,x:125.95},0).wait(1).to({skewX:-1.2659,x:126},0).wait(1).to({skewX:-1.2677},0).wait(1).to({regX:142.8,regY:422.1,skewX:-1.2684,x:159.1,y:424.55},0).wait(1).to({regX:114.4,regY:207.4,skewX:-1.2678,x:125.95,y:209.8},0).wait(1).to({skewX:-1.266},0).wait(1).to({skewX:-1.263,x:125.9},0).wait(1).to({skewX:-1.2587,x:125.95},0).wait(1).to({skewX:-1.2528,x:126},0).wait(1).to({skewX:-1.2455},0).wait(1).to({skewX:-1.2365},0).wait(1).to({skewX:-1.2257,x:126.1},0).wait(1).to({skewX:-1.2129,x:126.15},0).wait(1).to({skewX:-1.1981,x:126.2},0).wait(1).to({skewX:-1.1811,x:126.25},0).wait(1).to({skewX:-1.1616,x:126.3},0).wait(1).to({skewX:-1.1395,x:126.35},0).wait(1).to({skewX:-1.1147,x:126.5},0).wait(1).to({skewX:-1.0868,x:126.6},0).wait(1).to({scaleY:1.0002,skewX:-1.0557,x:126.7},0).wait(1).to({skewX:-1.0212,x:126.85},0).wait(1).to({skewX:-0.9831,x:126.95},0).wait(1).to({skewX:-0.9414,x:127.1},0).wait(1).to({skewX:-0.896,x:127.3},0).wait(1).to({skewX:-0.8471,x:127.45},0).wait(1).to({skewX:-0.7949,x:127.7},0).wait(1).to({skewX:-0.7401,x:127.9},0).wait(1).to({skewX:-0.6833,x:128.05},0).wait(1).to({skewX:-0.6255,x:128.25},0).wait(1).to({skewX:-0.5677,x:128.5},0).wait(1).to({scaleY:1.0001,skewX:-0.511,x:128.7},0).wait(1).to({skewX:-0.4562,x:128.9},0).wait(1).to({skewX:-0.4042,x:129.1},0).wait(1).to({skewX:-0.3555,x:129.3},0).wait(1).to({skewX:-0.3104,x:129.4},0).wait(1).to({skewX:-0.2691,x:129.55},0).wait(1).to({skewX:-0.2315,x:129.75},0).wait(1).to({skewX:-0.1975,x:129.85},0).wait(1).to({scaleY:1,skewX:-0.1671,x:129.95},0).wait(1).to({skewX:-0.1399,x:130.05},0).wait(1).to({skewX:-0.1158,x:130.15},0).wait(1).to({skewX:-0.0946,x:130.25},0).wait(1).to({skewX:-0.076},0).wait(1).to({skewX:-0.0599,x:130.35},0).wait(1).to({rotation:-0.0461,skewX:0,x:130.4},0).wait(1).to({rotation:-0.0344},0).wait(1).to({rotation:-0.0246,x:130.5},0).wait(1).to({rotation:-0.0167},0).wait(1).to({rotation:-0.0104,x:130.55},0).wait(1).to({rotation:-0.0057},0).wait(1).to({rotation:-0.0025},0).wait(1).to({rotation:-0.0006},0).wait(1).to({regX:142.7,regY:422.1,rotation:0,x:158.95,y:424.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,-86.4,586,648.6999999999999);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol20();
	this.instance.setTransform(135.55,235.45,1,1,0,0,0,151.8,237.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-157.4,-88.9,585.9,648.6999999999999), null);


(lib.FLOATING_OBJECT_vertical = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));

	// rotated
	this.instance = new lib.FLOATING_OBJECT_rotation();
	this.instance.setTransform(31,31,1,1,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:31.5,regY:31.2,x:31.5,y:31.2},0).wait(6).to({y:31.25},0).wait(2).to({y:31.3},0).wait(2).to({y:31.35},0).wait(1).to({y:31.4},0).wait(1).to({y:31.45},0).wait(1).to({y:31.5},0).wait(1).to({y:31.55},0).wait(1).to({y:31.6},0).wait(1).to({y:31.65},0).wait(1).to({y:31.75},0).wait(1).to({y:31.8},0).wait(1).to({y:31.9},0).wait(1).to({y:32},0).wait(1).to({y:32.1},0).wait(1).to({y:32.2},0).wait(1).to({y:32.35},0).wait(1).to({y:32.45},0).wait(1).to({y:32.6},0).wait(1).to({y:32.75},0).wait(1).to({y:32.9},0).wait(1).to({y:33.05},0).wait(1).to({y:33.2},0).wait(1).to({y:33.35},0).wait(1).to({y:33.5},0).wait(1).to({y:33.65},0).wait(1).to({y:33.8},0).wait(1).to({y:33.9},0).wait(1).to({y:34.05},0).wait(1).to({y:34.15},0).wait(1).to({y:34.25},0).wait(1).to({y:34.35},0).wait(1).to({y:34.45},0).wait(1).to({y:34.55},0).wait(1).to({y:34.65},0).wait(1).to({y:34.7},0).wait(1).to({y:34.8},0).wait(1).to({y:34.85},0).wait(1).to({y:34.9},0).wait(1).to({y:34.95},0).wait(1).to({y:35},0).wait(2).to({y:35.05},0).wait(1).to({y:35.1},0).wait(3).to({y:35.15},0).wait(5).to({regX:31,regY:31,x:31,y:35},0).wait(1).to({regX:31.5,regY:31.2,x:31.5,y:35.15},0).wait(6).to({y:35.1},0).wait(2).to({y:35.05},0).wait(2).to({y:35},0).wait(1).to({y:34.95},0).wait(1).to({y:34.9},0).wait(1).to({y:34.85},0).wait(1).to({y:34.8},0).wait(1).to({y:34.75},0).wait(1).to({y:34.7},0).wait(1).to({y:34.65},0).wait(1).to({y:34.55},0).wait(1).to({y:34.45},0).wait(1).to({y:34.4},0).wait(1).to({y:34.3},0).wait(1).to({y:34.15},0).wait(1).to({y:34.05},0).wait(1).to({y:33.95},0).wait(1).to({y:33.8},0).wait(1).to({y:33.65},0).wait(1).to({y:33.55},0).wait(1).to({y:33.4},0).wait(1).to({y:33.25},0).wait(1).to({y:33.1},0).wait(1).to({y:32.95},0).wait(1).to({y:32.8},0).wait(1).to({y:32.65},0).wait(1).to({y:32.5},0).wait(1).to({y:32.4},0).wait(1).to({y:32.25},0).wait(1).to({y:32.15},0).wait(1).to({y:32.05},0).wait(1).to({y:31.95},0).wait(1).to({y:31.85},0).wait(1).to({y:31.75},0).wait(1).to({y:31.7},0).wait(1).to({y:31.6},0).wait(1).to({y:31.55},0).wait(1).to({y:31.5},0).wait(1).to({y:31.45},0).wait(1).to({y:31.4},0).wait(1).to({y:31.35},0).wait(2).to({y:31.3},0).wait(1).to({y:31.25},0).wait(3).to({y:31.2},0).wait(5).to({regX:31,regY:31,x:31,y:31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.3,16.3,29.999999999999996,34);


(lib.FLOATING_OBJECT_horizontal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180));

	// vertical
	this.instance = new lib.FLOATING_OBJECT_vertical();
	this.instance.setTransform(31,31,1,1,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:31.5,regY:33.2,x:31.5,y:33.2},0).wait(12).to({x:31.45},0).wait(5).to({x:31.4},0).wait(3).to({x:31.35},0).wait(3).to({x:31.3},0).wait(2).to({x:31.25},0).wait(2).to({x:31.2},0).wait(2).to({x:31.15},0).wait(2).to({x:31.1},0).wait(1).to({x:31.05},0).wait(2).to({x:31},0).wait(1).to({x:30.95},0).wait(1).to({x:30.9},0).wait(1).to({x:30.85},0).wait(1).to({x:30.8},0).wait(2).to({x:30.75},0).wait(1).to({x:30.7},0).wait(1).to({x:30.65},0).wait(1).to({x:30.6},0).wait(1).to({x:30.55},0).wait(1).to({x:30.5},0).wait(1).to({x:30.45},0).wait(1).to({x:30.4},0).wait(1).to({x:30.35},0).wait(1).to({x:30.3},0).wait(1).to({x:30.25},0).wait(1).to({x:30.2},0).wait(1).to({x:30.15},0).wait(1).to({x:30.1},0).wait(1).to({x:30.05},0).wait(2).to({x:30},0).wait(1).to({x:29.95},0).wait(1).to({x:29.9},0).wait(2).to({x:29.85},0).wait(2).to({x:29.8},0).wait(2).to({x:29.75},0).wait(2).to({x:29.7},0).wait(2).to({x:29.65},0).wait(4).to({x:29.6},0).wait(4).to({x:29.55},0).wait(12).to({regX:31,regY:31,x:29,y:31},0).wait(1).to({regX:31.5,regY:33.2,x:29.55,y:33.2},0).wait(12).to({x:29.6},0).wait(5).to({x:29.65},0).wait(3).to({x:29.7},0).wait(3).to({x:29.75},0).wait(3).to({x:29.8},0).wait(2).to({x:29.85},0).wait(1).to({x:29.9},0).wait(2).to({x:29.95},0).wait(2).to({x:30},0).wait(1).to({x:30.05},0).wait(1).to({x:30.1},0).wait(2).to({x:30.15},0).wait(1).to({x:30.2},0).wait(1).to({x:30.25},0).wait(1).to({x:30.3},0).wait(1).to({x:30.35},0).wait(1).to({x:30.4},0).wait(1).to({x:30.45},0).wait(1).to({x:30.5},0).wait(1).to({x:30.55},0).wait(1).to({x:30.6},0).wait(1).to({x:30.65},0).wait(1).to({x:30.7},0).wait(1).to({x:30.75},0).wait(1).to({x:30.8},0).wait(1).to({x:30.85},0).wait(1).to({x:30.9},0).wait(2).to({x:30.95},0).wait(1).to({x:31},0).wait(1).to({x:31.05},0).wait(2).to({x:31.1},0).wait(1).to({x:31.15},0).wait(2).to({x:31.2},0).wait(1).to({x:31.25},0).wait(2).to({x:31.3},0).wait(3).to({x:31.35},0).wait(2).to({x:31.4},0).wait(4).to({x:31.45},0).wait(4).to({x:31.5},0).wait(12).to({regX:31,regY:31,x:31,y:31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.3,16.3,31.999999999999996,29.999999999999996);


(lib.Symbol6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"repeat":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_146 = function() {
		this.gotoAndPlay("repeat");
	}
	this.frame_161 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(146).call(this.frame_146).wait(15).call(this.frame_161).wait(55));

	// Layer_2
	this.instance_1 = new lib.Symbol3copy4();
	this.instance_1.setTransform(261.35,103.45,0.5598,0.5159,0,180,0,284.7,302.9);
	this.instance_1.alpha = 0.7383;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({_off:true},117).wait(70));

	// Layer_1
	this.instance_2 = new lib.Symbol3copy4();
	this.instance_2.setTransform(159.35,128.95,0.5598,0.5159,0,0,0,284.7,302.9);
	this.instance_2.alpha = 0.7383;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},117).wait(97));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.4,411.3,235.20000000000002);


(lib.FLOATING_OBJECT_vertical_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));

	// rotated
	this.instance_1 = new lib.FLOATING_OBJECT_rotation_1();
	this.instance_1.setTransform(31,31,1,1,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:30.5,regY:31.2,x:30.5,y:31.2},0).wait(6).to({y:31.25},0).wait(2).to({y:31.3},0).wait(2).to({y:31.35},0).wait(1).to({y:31.4},0).wait(1).to({y:31.45},0).wait(1).to({y:31.5},0).wait(1).to({y:31.55},0).wait(1).to({y:31.6},0).wait(1).to({y:31.65},0).wait(1).to({y:31.75},0).wait(1).to({y:31.8},0).wait(1).to({y:31.9},0).wait(1).to({y:32},0).wait(1).to({y:32.1},0).wait(1).to({y:32.2},0).wait(1).to({y:32.35},0).wait(1).to({y:32.45},0).wait(1).to({y:32.6},0).wait(1).to({y:32.75},0).wait(1).to({y:32.9},0).wait(1).to({y:33.05},0).wait(1).to({y:33.2},0).wait(1).to({y:33.35},0).wait(1).to({y:33.5},0).wait(1).to({y:33.65},0).wait(1).to({y:33.8},0).wait(1).to({y:33.9},0).wait(1).to({y:34.05},0).wait(1).to({y:34.15},0).wait(1).to({y:34.25},0).wait(1).to({y:34.35},0).wait(1).to({y:34.45},0).wait(1).to({y:34.55},0).wait(1).to({y:34.65},0).wait(1).to({y:34.7},0).wait(1).to({y:34.8},0).wait(1).to({y:34.85},0).wait(1).to({y:34.9},0).wait(1).to({y:34.95},0).wait(1).to({y:35},0).wait(2).to({y:35.05},0).wait(1).to({y:35.1},0).wait(3).to({y:35.15},0).wait(5).to({regX:31,regY:31,x:31,y:35},0).wait(1).to({regX:30.5,regY:31.2,x:30.5,y:35.15},0).wait(6).to({y:35.1},0).wait(2).to({y:35.05},0).wait(2).to({y:35},0).wait(1).to({y:34.95},0).wait(1).to({y:34.9},0).wait(1).to({y:34.85},0).wait(1).to({y:34.8},0).wait(1).to({y:34.75},0).wait(1).to({y:34.7},0).wait(1).to({y:34.65},0).wait(1).to({y:34.55},0).wait(1).to({y:34.45},0).wait(1).to({y:34.4},0).wait(1).to({y:34.3},0).wait(1).to({y:34.15},0).wait(1).to({y:34.05},0).wait(1).to({y:33.95},0).wait(1).to({y:33.8},0).wait(1).to({y:33.65},0).wait(1).to({y:33.55},0).wait(1).to({y:33.4},0).wait(1).to({y:33.25},0).wait(1).to({y:33.1},0).wait(1).to({y:32.95},0).wait(1).to({y:32.8},0).wait(1).to({y:32.65},0).wait(1).to({y:32.5},0).wait(1).to({y:32.4},0).wait(1).to({y:32.25},0).wait(1).to({y:32.15},0).wait(1).to({y:32.05},0).wait(1).to({y:31.95},0).wait(1).to({y:31.85},0).wait(1).to({y:31.75},0).wait(1).to({y:31.7},0).wait(1).to({y:31.6},0).wait(1).to({y:31.55},0).wait(1).to({y:31.5},0).wait(1).to({y:31.45},0).wait(1).to({y:31.4},0).wait(1).to({y:31.35},0).wait(2).to({y:31.3},0).wait(1).to({y:31.25},0).wait(3).to({y:31.2},0).wait(5).to({regX:31,regY:31,x:31,y:31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.3,15.5,29.999999999999996,35.5);


(lib.FLOATING_OBJECT_horizontal_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180));

	// vertical
	this.instance_1 = new lib.FLOATING_OBJECT_vertical_1();
	this.instance_1.setTransform(31,31,1,1,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:30.5,regY:33.2,x:30.5,y:33.2},0).wait(12).to({x:30.45},0).wait(5).to({x:30.4},0).wait(3).to({x:30.35},0).wait(3).to({x:30.3},0).wait(2).to({x:30.25},0).wait(2).to({x:30.2},0).wait(2).to({x:30.15},0).wait(2).to({x:30.1},0).wait(1).to({x:30.05},0).wait(2).to({x:30},0).wait(1).to({x:29.95},0).wait(1).to({x:29.9},0).wait(1).to({x:29.85},0).wait(1).to({x:29.8},0).wait(2).to({x:29.75},0).wait(1).to({x:29.7},0).wait(1).to({x:29.65},0).wait(1).to({x:29.6},0).wait(1).to({x:29.55},0).wait(1).to({x:29.5},0).wait(1).to({x:29.45},0).wait(1).to({x:29.4},0).wait(1).to({x:29.35},0).wait(1).to({x:29.3},0).wait(1).to({x:29.25},0).wait(1).to({x:29.2},0).wait(1).to({x:29.15},0).wait(1).to({x:29.1},0).wait(1).to({x:29.05},0).wait(2).to({x:29},0).wait(1).to({x:28.95},0).wait(1).to({x:28.9},0).wait(2).to({x:28.85},0).wait(2).to({x:28.8},0).wait(2).to({x:28.75},0).wait(2).to({x:28.7},0).wait(2).to({x:28.65},0).wait(4).to({x:28.6},0).wait(4).to({x:28.55},0).wait(12).to({regX:31,regY:31,x:29,y:31},0).wait(1).to({regX:30.5,regY:33.2,x:28.55,y:33.2},0).wait(12).to({x:28.6},0).wait(5).to({x:28.65},0).wait(3).to({x:28.7},0).wait(3).to({x:28.75},0).wait(3).to({x:28.8},0).wait(2).to({x:28.85},0).wait(1).to({x:28.9},0).wait(2).to({x:28.95},0).wait(2).to({x:29},0).wait(1).to({x:29.05},0).wait(1).to({x:29.1},0).wait(2).to({x:29.15},0).wait(1).to({x:29.2},0).wait(1).to({x:29.25},0).wait(1).to({x:29.3},0).wait(1).to({x:29.35},0).wait(1).to({x:29.4},0).wait(1).to({x:29.45},0).wait(1).to({x:29.5},0).wait(1).to({x:29.55},0).wait(1).to({x:29.6},0).wait(1).to({x:29.65},0).wait(1).to({x:29.7},0).wait(1).to({x:29.75},0).wait(1).to({x:29.8},0).wait(1).to({x:29.85},0).wait(1).to({x:29.9},0).wait(2).to({x:29.95},0).wait(1).to({x:30},0).wait(1).to({x:30.05},0).wait(2).to({x:30.1},0).wait(1).to({x:30.15},0).wait(2).to({x:30.2},0).wait(1).to({x:30.25},0).wait(2).to({x:30.3},0).wait(3).to({x:30.35},0).wait(2).to({x:30.4},0).wait(4).to({x:30.45},0).wait(4).to({x:30.5},0).wait(12).to({regX:31,regY:31,x:31,y:31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,15.5,31.999999999999996,31.5);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {over:244,out:256};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/*
		
			WARNING 
			About stage.enableMouseOver();
			
			Earlier I used:
				stage.enableMouseOver();
				
				+ ALL events (mouseover\rollover) work
				- canvas loses "hand cursor pointer" 	
				
			Now two options works fine:
			Either: 
				document.getElementById("animation_container").style.cursor = "pointer";
				stage.enableMouseOver();
		
				+ ALL events (mouseover\rollover) work
				+ "animation_container" will have "hand cursor pointer" IF only
				  Code [...style.cursor = "pointer"] used just at least ONCE in a Project 
				  (not every time with "stage.enableMouseOver();") 	
				
			Or:
				// NO code at all:
				// stage.enableMouseOver();
				
				+ CANVAS mouseover\rollover events WILL STILL WORK
				  it is enougth for classic rollover code:
					canvas.addEventListener('mouseover', over.bind(this));		
					canvas.addEventListener('mouseout', over.bind(this));		
					
				+ OBJECT(particular movieclip) pressmove will work (without hover-feedback):
					obj.addEventListener("pressmove", handleDrag);
					
				+ OBJECT(particular movieclip) this events will work:
					obj.addEventListener("click", handleClick);
					obj.addEventListener("dblclick", handleDoubleClick);
					obj.addEventListener("pressmove", handlePressMove);
					obj.addEventListener("pressup", handlePressUp);
					obj.addEventListener("mousedown", handleMouseDown);
					obj.addEventListener("mouseup", handleMouseUp);		
					
				- OBJECT(particular movieclip) this events will NOT work:
					obj.addEventListener("mouseover", handleOver);
					obj.addEventListener("mouseout", handleOut);
					obj.addEventListener("rollover", handleRollOver);
					obj.addEventListener("rollout", handleRollOut);		
					
		*/
		
		this.gotoAndPlay(1);
		var rollover_animation_started = false;
		
		canvas.addEventListener('mouseover', over.bind(this));
		
		function over() {
			this.gotoAndPlay('over');
			rollover_animation_started = true;
			
			/*
			//WARNING: trows errors into browser console if only parent.rollover_is_active is not defined
			if (this.parent.rollover_is_active == false) {
				return;
			}
			*/
			
			//this.parent.gotoAndPlay('over');
			//this.parent.art_mc.gotoAndPlay('over');
		}
		
		canvas.addEventListener('mouseout', out.bind(this));
		
		function out() {
			if (rollover_animation_started == false) {
				return;
			} 
			this.gotoAndPlay('out');
			
			/*
			//WARNING: trows errors into browser console if only parent.rollover_is_active is not defined	
			if (this.parent.rollover_is_active == false) {
				return;
			}
			*/
		
			//this.parent.gotoAndPlay('out');
			//this.parent.art_mc.gotoAndPlay('out');
		}
	}
	this.frame_243 = function() {
		this.stop();
	}
	this.frame_255 = function() {
		this.stop();
	}
	this.frame_271 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(243).call(this.frame_243).wait(12).call(this.frame_255).wait(16).call(this.frame_271).wait(22));

	// LABELS
	this.instance = new lib.Symbol5_1();
	this.instance.setTransform(30.25,34.9,1,1,0,0,0,113.5,47.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160).to({_off:false},0).to({_off:true},73).wait(60));

	// LABELS
	this.instance_1 = new lib.Symbol5_1();
	this.instance_1.setTransform(55.75,0.9,1,1,0,0,0,113.5,47.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},73).wait(219));

	// Learn more
	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(58.5,16.4,1,1,0,0,0,46,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:12,scaleX:1.1466,scaleY:1.1466,x:58.55,y:16.55,alpha:0},0).wait(1).to({regX:46.5,regY:13,scaleX:1.0996,scaleY:1.0996,x:59.05,y:17.6,alpha:0.3203},0).wait(1).to({scaleX:1.0673,scaleY:1.0673,y:17.5,alpha:0.5409},0).wait(1).to({scaleX:1.0495,scaleY:1.0495,x:59,alpha:0.6624},0).wait(1).to({scaleX:1.0385,scaleY:1.0385,alpha:0.7376},0).wait(1).to({scaleX:1.0309,scaleY:1.0309,alpha:0.7893},0).wait(1).to({scaleX:1.0253,scaleY:1.0253,alpha:0.8272},0).wait(1).to({scaleX:1.021,scaleY:1.021,y:17.45,alpha:0.8564},0).wait(1).to({scaleX:1.0177,scaleY:1.0177,x:58.95,y:17.5,alpha:0.8795},0).wait(1).to({scaleX:1.0149,scaleY:1.0149,x:59,y:17.45,alpha:0.8981},0).wait(1).to({scaleX:1.0127,scaleY:1.0127,alpha:0.9134},0).wait(1).to({scaleX:1.0108,scaleY:1.0108,alpha:0.926},0).wait(1).to({scaleX:1.0093,scaleY:1.0093,y:17.4,alpha:0.9366},0).wait(1).to({scaleX:1.008,scaleY:1.008,x:58.95,y:17.45,alpha:0.9456},0).wait(1).to({scaleX:1.0069,scaleY:1.0069,alpha:0.9531},0).wait(1).to({scaleX:1.0059,scaleY:1.0059,x:59,alpha:0.9595},0).wait(1).to({scaleX:1.0052,scaleY:1.0052,y:17.4,alpha:0.9648},0).wait(1).to({scaleX:1.0045,scaleY:1.0045,x:58.95,alpha:0.9694},0).wait(1).to({scaleX:1.004,scaleY:1.004,x:59,y:17.45,alpha:0.9729},0).wait(1).to({scaleX:1.0037,scaleY:1.0037,x:58.95,alpha:0.9749},0).wait(1).to({scaleX:1.0034,scaleY:1.0034,alpha:0.9768},0).wait(1).to({scaleX:1.0031,scaleY:1.0031,x:59,alpha:0.9787},0).wait(1).to({scaleX:1.0029,scaleY:1.0029,alpha:0.9804},0).wait(1).to({scaleX:1.0026,scaleY:1.0026,x:58.95,alpha:0.9822},0).wait(1).to({scaleX:1.0024,scaleY:1.0024,alpha:0.9838},0).wait(1).to({scaleX:1.0021,scaleY:1.0021,x:59,alpha:0.9854},0).wait(1).to({scaleX:1.0019,scaleY:1.0019,y:17.4,alpha:0.987},0).wait(1).to({scaleX:1.0017,scaleY:1.0017,alpha:0.9884},0).wait(1).to({scaleX:1.0015,scaleY:1.0015,x:58.95,alpha:0.9898},0).wait(1).to({scaleX:1.0013,scaleY:1.0013,alpha:0.9911},0).wait(1).to({scaleX:1.0011,scaleY:1.0011,alpha:0.9923},0).wait(1).to({scaleX:1.001,scaleY:1.001,x:59,alpha:0.9935},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,alpha:0.9945},0).wait(1).to({scaleX:1.0007,scaleY:1.0007,alpha:0.9955},0).wait(1).to({scaleX:1.0005,scaleY:1.0005,x:58.95,alpha:0.9963},0).wait(1).to({scaleX:1.0004,scaleY:1.0004,alpha:0.9971},0).wait(1).to({scaleX:1.0003,scaleY:1.0003,alpha:0.9978},0).wait(1).to({scaleX:1.0002,scaleY:1.0002,alpha:0.9984},0).wait(1).to({alpha:0.9989},0).wait(1).to({scaleX:1.0001,scaleY:1.0001,alpha:0.9992},0).wait(1).to({alpha:0.9995},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.9998},0).wait(1).to({alpha:0.9999},0).wait(1).to({alpha:1},0).wait(2).to({regX:46,regY:11.9,x:58.5,y:16.4},0).wait(247));

	// Layer_1
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(59,17.5,1,1,0,0,0,59,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:59.1,scaleX:0.8449,scaleY:0.7429,x:59.15},0).wait(1).to({regX:59,scaleX:0.8946,scaleY:0.8252,x:59},0).wait(1).to({scaleX:0.9288,scaleY:0.8819,x:58.95},0).wait(1).to({scaleX:0.9476,scaleY:0.9132,x:58.9},0).wait(1).to({scaleX:0.9593,scaleY:0.9325,y:17.45},0).wait(1).to({scaleX:0.9673,scaleY:0.9458},0).wait(1).to({scaleX:0.9732,scaleY:0.9556},0).wait(1).to({scaleX:0.9777,scaleY:0.9631},0).wait(1).to({scaleX:0.9813,scaleY:0.969},0).wait(1).to({scaleX:0.9842,scaleY:0.9738,x:58.85,y:17.5},0).wait(1).to({scaleX:0.9866,scaleY:0.9777,x:58.9,y:17.45},0).wait(1).to({scaleX:0.9885,scaleY:0.981,x:58.85},0).wait(1).to({scaleX:0.9902,scaleY:0.9837},0).wait(1).to({scaleX:0.9916,scaleY:0.986,x:58.9},0).wait(1).to({scaleX:0.9927,scaleY:0.9879,x:58.85,y:17.5},0).wait(1).to({scaleX:0.9937,scaleY:0.9896,x:58.9,y:17.45},0).wait(1).to({scaleX:0.9945,scaleY:0.991,y:17.5},0).wait(1).to({scaleX:0.9952,scaleY:0.9921,x:58.85,y:17.45},0).wait(1).to({scaleX:0.9958,scaleY:0.993,x:58.9,y:17.5},0).wait(1).to({scaleX:0.9961,scaleY:0.9935,x:58.85},0).wait(1).to({scaleX:0.9964,scaleY:0.994,x:58.9},0).wait(1).to({scaleX:0.9967,scaleY:0.9945,x:58.85,y:17.45},0).wait(1).to({scaleX:0.997,scaleY:0.995},0).wait(1).to({scaleX:0.9972,scaleY:0.9954,x:58.9},0).wait(1).to({scaleX:0.9975,scaleY:0.9958,y:17.5},0).wait(1).to({scaleX:0.9977,scaleY:0.9963,x:58.85},0).wait(1).to({scaleX:0.998,scaleY:0.9966,x:58.9},0).wait(1).to({scaleX:0.9982,scaleY:0.997},0).wait(1).to({scaleX:0.9984,scaleY:0.9974,y:17.45},0).wait(1).to({scaleX:0.9986,scaleY:0.9977},0).wait(1).to({scaleX:0.9988,scaleY:0.998,x:58.95},0).wait(1).to({scaleX:0.999,scaleY:0.9983},0).wait(1).to({scaleX:0.9991,scaleY:0.9986,y:17.5},0).wait(1).to({scaleX:0.9993,scaleY:0.9988,x:58.9},0).wait(1).to({scaleX:0.9994,scaleY:0.9991},0).wait(1).to({scaleX:0.9996,scaleY:0.9993},0).wait(1).to({scaleX:0.9997,scaleY:0.9994,x:58.95},0).wait(1).to({scaleY:0.9996},0).wait(1).to({scaleX:0.9998,scaleY:0.9997},0).wait(1).to({scaleX:0.9999,scaleY:0.9998},0).wait(1).to({scaleY:0.9999},0).wait(1).to({scaleX:1},0).wait(1).to({scaleY:1},0).wait(3).to({x:59},0).wait(247));

	// Layer_2
	this.instance_4 = new lib.Symbol6_1();
	this.instance_4.setTransform(21.3,19.15,0.4763,0.5715,0,0,0,154.8,116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(293));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-47.5,378.5,133.6);


(lib._TEMPLATE_all_300250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"repeat":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_581 = function() {
		this.gotoAndPlay("repeat");
	}
	this.frame_588 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(581).call(this.frame_581).wait(7).call(this.frame_588).wait(32));

	// Layer_7
	this.instance = new lib.Symbol5_1();
	this.instance.setTransform(17.35,205.95,0.6087,0.6087,0,0,0,113.5,47.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(108).to({scaleX:1.2236,scaleY:1.2236,rotation:180,x:175.95,y:44.8},0).to({_off:true},76).wait(435));

	// Layer_6
	this.instance_1 = new lib.GLOW_WAVE();
	this.instance_1.setTransform(151.25,255.85,0.3844,0.4279,0,0,180,484.5,254.2);
	this.instance_1.alpha = 0.8008;

	this.instance_2 = new lib.Symbol26();
	this.instance_2.setTransform(110.15,108.75,1,1,0,0,0,43.8,80.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},86).to({state:[]},129).to({state:[{t:this.instance_2}]},84).to({state:[]},319).wait(2));

	// CTA
	this.instance_3 = new lib.Symbol10();
	this.instance_3.setTransform(83.5,219,1,1,0,0,0,59,17.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(235).to({_off:false},0).wait(309).to({regX:141.3,regY:18.8,scaleX:1.0089,scaleY:1.0089,x:165.7,y:220.8},0).wait(1).to({scaleX:1.0275,scaleY:1.0275,x:165.55,y:222},0).wait(1).to({scaleX:1.0582,scaleY:1.0582,x:165.25,y:223.9},0).wait(1).to({scaleX:1.1042,scaleY:1.1042,x:164.95,y:226.8},0).wait(1).to({scaleX:1.1701,scaleY:1.1701,x:164.45,y:230.9},0).wait(1).to({scaleX:1.2623,scaleY:1.2623,x:163.65,y:236.7},0).wait(1).to({scaleX:1.3896,scaleY:1.3896,x:162.6,y:244.6},0).wait(1).to({scaleX:1.5626,scaleY:1.5626,x:161.2,y:255.45},0).wait(1).to({scaleX:1.7865,scaleY:1.7865,x:159.35,y:269.45},0).wait(1).to({scaleX:2.0466,scaleY:2.0466,x:157.25,y:285.7},0).wait(1).to({scaleX:2.3067,scaleY:2.3067,x:155.05,y:301.9},0).wait(1).to({scaleX:2.5383,scaleY:2.5383,x:153.15,y:316.35},0).wait(1).to({scaleX:2.7342,scaleY:2.7342,x:151.55,y:328.6},0).wait(1).to({scaleX:2.8981,scaleY:2.8981,x:150.2,y:338.9},0).wait(1).to({scaleX:3.0361,scaleY:3.0361,x:149.05,y:347.5},0).wait(1).to({scaleX:3.1533,scaleY:3.1533,x:148.1,y:354.85},0).wait(1).to({scaleX:3.2539,scaleY:3.2539,x:147.3,y:361.05},0).wait(1).to({scaleX:3.3324,scaleY:3.3324,x:146.6,y:366},0).wait(1).to({scaleX:3.3737,scaleY:3.3737,x:146.25,y:368.6},0).wait(1).to({scaleX:3.401,scaleY:3.401,x:146.05,y:370.3},0).wait(1).to({scaleX:3.4211,scaleY:3.4211,x:145.9,y:371.5},0).wait(1).to({scaleX:3.4365,scaleY:3.4365,x:145.75,y:372.5},0).wait(1).to({scaleX:3.4486,scaleY:3.4486,x:145.7,y:373.25},0).wait(1).to({scaleX:3.4582,scaleY:3.4582,x:145.6,y:373.85},0).wait(1).to({scaleX:3.4658,scaleY:3.4658,x:145.5,y:374.35},0).wait(1).to({scaleX:3.4718,scaleY:3.4718,x:145.45,y:374.7},0).wait(1).to({scaleX:3.4764,scaleY:3.4764,x:145.4,y:375},0).wait(1).to({scaleX:3.4798,scaleY:3.4798,y:375.2},0).wait(1).to({scaleX:3.4823,scaleY:3.4823,y:375.35},0).wait(1).to({scaleX:3.4839,scaleY:3.4839,x:145.35,y:375.45},0).wait(1).to({scaleX:3.4848,scaleY:3.4848,y:375.5},0).wait(1).to({scaleX:3.485,scaleY:3.485,x:145.4},0).wait(1).to({scaleX:3.4848,scaleY:3.4848,x:145.35},0).wait(1).to({regX:58.8,regY:17.8,scaleX:3.4845,scaleY:3.4845,x:-141.25,y:371.15},0).to({_off:true},41).wait(2));

	// TEXT
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(375.25,-148.85,6.0777,6.0777,0,0,0,106,26.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(183).to({_off:false},0).wait(1).to({regY:28,scaleX:6.0679,scaleY:6.0679,x:374.85,y:-138.75},0).wait(1).to({scaleX:6.0502,scaleY:6.0502,x:374,y:-138.15},0).wait(1).to({scaleX:6.0234,scaleY:6.0234,x:372.9,y:-137.25},0).wait(1).to({scaleX:5.9862,scaleY:5.9862,x:371.2,y:-135.95},0).wait(1).to({scaleX:5.9369,scaleY:5.9369,x:369,y:-134.25},0).wait(1).to({scaleX:5.8733,scaleY:5.8733,x:366.2,y:-132.1},0).wait(1).to({scaleX:5.7928,scaleY:5.7928,x:362.65,y:-129.3},0).wait(1).to({scaleX:5.692,scaleY:5.692,x:358.15,y:-125.85},0).wait(1).to({scaleX:5.5667,scaleY:5.5667,x:352.6,y:-121.6},0).wait(1).to({scaleX:5.4119,scaleY:5.4119,x:345.75,y:-116.25},0).wait(1).to({scaleX:5.2213,scaleY:5.2213,x:337.25,y:-109.7},0).wait(1).to({scaleX:4.9892,scaleY:4.9892,x:327,y:-101.75},0).wait(1).to({scaleX:4.7117,scaleY:4.7117,x:314.7,y:-92.2},0).wait(1).to({scaleX:4.3919,scaleY:4.3919,x:300.5,y:-81.25},0).wait(1).to({scaleX:4.0436,scaleY:4.0436,x:285.05,y:-69.3},0).wait(1).to({scaleX:3.6888,scaleY:3.6888,x:269.3,y:-57.1},0).wait(1).to({scaleX:3.3489,scaleY:3.3489,x:254.25,y:-45.45},0).wait(1).to({scaleX:3.0365,scaleY:3.0365,x:240.35,y:-34.75},0).wait(1).to({scaleX:2.7558,scaleY:2.7558,x:227.95,y:-25.1},0).wait(1).to({scaleX:2.5056,scaleY:2.5056,x:216.85,y:-16.5},0).wait(1).to({scaleX:2.283,scaleY:2.283,x:206.95,y:-8.9},0).wait(1).to({scaleX:2.0845,scaleY:2.0845,x:198.15,y:-2.05},0).wait(1).to({scaleX:1.9066,scaleY:1.9066,x:190.3,y:4.05},0).wait(1).to({scaleX:1.7467,scaleY:1.7467,x:183.2,y:9.55},0).wait(1).to({scaleX:1.6023,scaleY:1.6023,x:176.75,y:14.5},0).wait(1).to({scaleX:1.4713,scaleY:1.4713,x:170.9,y:19},0).wait(1).to({scaleX:1.3548,scaleY:1.3548,x:165.75,y:23},0).wait(1).to({scaleX:1.2802,scaleY:1.2802,x:162.45,y:25.55},0).wait(1).to({scaleX:1.229,scaleY:1.229,x:160.2,y:27.3},0).wait(1).to({scaleX:1.1899,scaleY:1.1899,x:158.45,y:28.65},0).wait(1).to({scaleX:1.1585,scaleY:1.1585,x:157.05,y:29.75},0).wait(1).to({scaleX:1.1325,scaleY:1.1325,x:155.9,y:30.6},0).wait(1).to({scaleX:1.1106,scaleY:1.1106,x:154.95,y:31.35},0).wait(1).to({scaleX:1.092,scaleY:1.092,x:154.1,y:32},0).wait(1).to({scaleX:1.0761,scaleY:1.0761,x:153.4,y:32.55},0).wait(1).to({scaleX:1.0624,scaleY:1.0624,x:152.8,y:33},0).wait(1).to({scaleX:1.0506,scaleY:1.0506,x:152.25,y:33.35},0).wait(1).to({scaleX:1.0405,scaleY:1.0405,x:151.85,y:33.75},0).wait(1).to({scaleX:1.0319,scaleY:1.0319,x:151.45,y:34.05},0).wait(1).to({scaleX:1.0245,scaleY:1.0245,x:151.1,y:34.3},0).wait(1).to({scaleX:1.0183,scaleY:1.0183,x:150.85,y:34.5},0).wait(1).to({scaleX:1.0132,scaleY:1.0132,x:150.6,y:34.65},0).wait(1).to({scaleX:1.0089,scaleY:1.0089,x:150.4,y:34.8},0).wait(1).to({scaleX:1.0056,scaleY:1.0056,x:150.3,y:34.95},0).wait(1).to({scaleX:1.003,scaleY:1.003,x:150.15,y:35.05},0).wait(1).to({scaleX:1.0011,scaleY:1.0011,x:150.05,y:35.1},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,y:35.15},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,x:149.95},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,x:150},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,x:149.95},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:150},0).wait(1).to({regX:106.2,regY:26.6,scaleX:1,scaleY:1,x:150.05,y:33.55},0).wait(309).to({regX:106,regY:28,scaleX:1.0169,scaleY:1.0169,x:149.4,y:34.25},0).wait(1).to({scaleX:1.0521,scaleY:1.0521,x:148.5,y:32.95},0).wait(1).to({scaleX:1.1103,scaleY:1.1103,x:146.95,y:30.85},0).wait(1).to({scaleX:1.1975,scaleY:1.1975,x:144.7,y:27.6},0).wait(1).to({scaleX:1.3223,scaleY:1.3223,x:141.4,y:22.9},0).wait(1).to({scaleX:1.497,scaleY:1.497,x:136.9,y:16.4},0).wait(1).to({scaleX:1.7383,scaleY:1.7383,x:130.55,y:7.35},0).wait(1).to({scaleX:2.0661,scaleY:2.0661,x:122,y:-4.9},0).wait(1).to({scaleX:2.4903,scaleY:2.4903,x:110.9,y:-20.7},0).wait(1).to({scaleX:2.9832,scaleY:2.9832,x:98.05,y:-39.15},0).wait(1).to({scaleX:3.4763,scaleY:3.4763,x:85.2,y:-57.6},0).wait(1).to({scaleX:3.9151,scaleY:3.9151,x:73.7,y:-74.05},0).wait(1).to({scaleX:4.2862,scaleY:4.2862,x:64.05,y:-87.9},0).wait(1).to({scaleX:4.5969,scaleY:4.5969,x:55.9,y:-99.5},0).wait(1).to({scaleX:4.8583,scaleY:4.8583,x:49.1,y:-109.25},0).wait(1).to({scaleX:5.0805,scaleY:5.0805,x:43.3,y:-117.6},0).wait(1).to({scaleX:5.2712,scaleY:5.2712,x:38.3,y:-124.7},0).wait(1).to({scaleX:5.4198,scaleY:5.4198,x:34.4,y:-130.25},0).wait(1).to({scaleX:5.4982,scaleY:5.4982,x:32.35,y:-133.2},0).wait(1).to({scaleX:5.5499,scaleY:5.5499,x:31,y:-135.15},0).wait(1).to({scaleX:5.5879,scaleY:5.5879,x:30,y:-136.55},0).wait(1).to({scaleX:5.6171,scaleY:5.6171,x:29.25,y:-137.6},0).wait(1).to({scaleX:5.64,scaleY:5.64,x:28.65,y:-138.5},0).wait(1).to({scaleX:5.6582,scaleY:5.6582,x:28.15,y:-139.15},0).wait(1).to({scaleX:5.6726,scaleY:5.6726,x:27.8,y:-139.7},0).wait(1).to({scaleX:5.684,scaleY:5.684,x:27.5,y:-140.15},0).wait(1).to({scaleX:5.6927,scaleY:5.6927,x:27.3,y:-140.45},0).wait(1).to({scaleX:5.6993,scaleY:5.6993,x:27.1,y:-140.7},0).wait(1).to({scaleX:5.7039,scaleY:5.7039,x:26.95,y:-140.9},0).wait(1).to({scaleX:5.707,scaleY:5.707,x:26.9,y:-141},0).wait(1).to({scaleX:5.7086,scaleY:5.7086,x:26.85,y:-141.05},0).wait(1).to({scaleX:5.709,scaleY:5.709,y:-141.1},0).wait(1).to({scaleX:5.7087,scaleY:5.7087,y:-141.05},0).wait(1).to({regY:26.4,scaleX:5.7082,scaleY:5.7082,x:28.25,y:-149.35},0).to({_off:true},41).wait(2));

	// logo text
	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(107.95,-211.95,4.7707,4.7707,0,0,0,94.2,25.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({_off:false},0).wait(1).to({regX:93,regY:26.7,scaleX:4.7648,scaleY:4.7648,x:102.35,y:-206.35},0).wait(1).to({scaleX:4.7547,scaleY:4.7547,x:102.6,y:-205.65},0).wait(1).to({scaleX:4.74,scaleY:4.74,x:102.85,y:-204.7},0).wait(1).to({scaleX:4.72,scaleY:4.72,x:103.3,y:-203.4},0).wait(1).to({scaleX:4.694,scaleY:4.694,x:103.85,y:-201.65},0).wait(1).to({scaleX:4.6612,scaleY:4.6612,x:104.5,y:-199.5},0).wait(1).to({scaleX:4.6206,scaleY:4.6206,x:105.35,y:-196.85},0).wait(1).to({scaleX:4.5709,scaleY:4.5709,x:106.4,y:-193.55},0).wait(1).to({scaleX:4.5106,scaleY:4.5106,x:107.65,y:-189.6},0).wait(1).to({scaleX:4.4379,scaleY:4.4379,x:109.15,y:-184.85},0).wait(1).to({scaleX:4.3507,scaleY:4.3507,x:110.9,y:-179.15},0).wait(1).to({scaleX:4.2462,scaleY:4.2462,x:113.05,y:-172.3},0).wait(1).to({scaleX:4.1218,scaleY:4.1218,x:115.65,y:-164.1},0).wait(1).to({scaleX:3.9746,scaleY:3.9746,x:118.7,y:-154.45},0).wait(1).to({scaleX:3.803,scaleY:3.803,x:122.25,y:-143.15},0).wait(1).to({scaleX:3.6076,scaleY:3.6076,x:126.25,y:-130.35},0).wait(1).to({scaleX:3.3933,scaleY:3.3933,x:130.7,y:-116.3},0).wait(1).to({scaleX:3.1691,scaleY:3.1691,x:135.3,y:-101.6},0).wait(1).to({scaleX:2.9458,scaleY:2.9458,x:139.9,y:-86.9},0).wait(1).to({scaleX:2.7323,scaleY:2.7323,x:144.3,y:-72.9},0).wait(1).to({scaleX:2.5341,scaleY:2.5341,x:148.4,y:-59.9},0).wait(1).to({scaleX:2.3529,scaleY:2.3529,x:152.15,y:-48},0).wait(1).to({scaleX:2.1886,scaleY:2.1886,x:155.55,y:-37.2},0).wait(1).to({scaleX:2.0398,scaleY:2.0398,x:158.6,y:-27.45},0).wait(1).to({scaleX:1.905,scaleY:1.905,x:161.4,y:-18.6},0).wait(1).to({scaleX:1.7827,scaleY:1.7827,x:163.95,y:-10.55},0).wait(1).to({scaleX:1.6712,scaleY:1.6712,x:166.15,y:-3.25},0).wait(1).to({scaleX:1.5694,scaleY:1.5694,x:168.25,y:3.45},0).wait(1).to({scaleX:1.4761,scaleY:1.4761,x:170.2,y:9.55},0).wait(1).to({scaleX:1.3903,scaleY:1.3903,x:171.95,y:15.2},0).wait(1).to({scaleX:1.3113,scaleY:1.3113,x:173.6,y:20.4},0).wait(1).to({scaleX:1.2452,scaleY:1.2452,x:174.95,y:24.75},0).wait(1).to({scaleX:1.2024,scaleY:1.2024,x:175.85,y:27.55},0).wait(1).to({scaleX:1.1706,scaleY:1.1706,x:176.5,y:29.6},0).wait(1).to({scaleX:1.1454,scaleY:1.1454,x:177,y:31.25},0).wait(1).to({scaleX:1.1245,scaleY:1.1245,x:177.5,y:32.6},0).wait(1).to({scaleX:1.1068,scaleY:1.1068,x:177.85,y:33.75},0).wait(1).to({scaleX:1.0917,scaleY:1.0917,x:178.15,y:34.75},0).wait(1).to({scaleX:1.0786,scaleY:1.0786,x:178.4,y:35.6},0).wait(1).to({scaleX:1.0671,scaleY:1.0671,x:178.65,y:36.4},0).wait(1).to({scaleX:1.0571,scaleY:1.0571,x:178.85,y:37},0).wait(1).to({scaleX:1.0482,scaleY:1.0482,x:179.05,y:37.6},0).wait(1).to({scaleX:1.0405,scaleY:1.0405,x:179.2,y:38.15},0).wait(1).to({scaleX:1.0336,scaleY:1.0336,x:179.35,y:38.55},0).wait(1).to({scaleX:1.0277,scaleY:1.0277,x:179.45,y:38.95},0).wait(1).to({scaleX:1.0224,scaleY:1.0224,x:179.6,y:39.3},0).wait(1).to({scaleX:1.0179,scaleY:1.0179,x:179.65,y:39.6},0).wait(1).to({scaleX:1.0139,scaleY:1.0139,x:179.75,y:39.85},0).wait(1).to({scaleX:1.0106,scaleY:1.0106,x:179.8,y:40.1},0).wait(1).to({scaleX:1.0077,scaleY:1.0077,x:179.85,y:40.25},0).wait(1).to({scaleX:1.0054,scaleY:1.0054,x:179.9,y:40.45},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,x:179.95,y:40.55},0).wait(1).to({scaleX:1.0019,scaleY:1.0019,x:180,y:40.65},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,y:40.7},0).wait(1).to({scaleX:1,scaleY:1,y:40.75},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:180.05,y:40.8},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,y:40.85},0).wait(1).to({scaleX:0.9994,scaleY:0.9994},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,y:40.8},0).wait(1).to({scaleX:0.9998,scaleY:0.9998},0).wait(1).to({regX:94.2,regY:25.7,scaleX:1,scaleY:1,x:181.25,y:39.75},0).wait(60).to({regX:93,regY:26.7,scaleX:0.9988,scaleY:0.9988,x:179.9,y:40.7,alpha:0.9981},0).wait(1).to({scaleX:0.9967,scaleY:0.9967,x:179.6,alpha:0.9946},0).wait(1).to({scaleX:0.9934,scaleY:0.9934,x:179.2,alpha:0.9893},0).wait(1).to({scaleX:0.989,scaleY:0.989,x:178.6,y:40.75,alpha:0.982},0).wait(1).to({scaleX:0.983,scaleY:0.983,x:177.85,alpha:0.9723},0).wait(1).to({scaleX:0.9753,scaleY:0.9753,x:176.9,y:40.8,alpha:0.9597},0).wait(1).to({scaleX:0.9656,scaleY:0.9656,x:175.65,y:40.85,alpha:0.9439},0).wait(1).to({scaleX:0.9535,scaleY:0.9535,x:174.1,alpha:0.924},0).wait(1).to({scaleX:0.9384,scaleY:0.9384,x:172.2,y:40.9,alpha:0.8994},0).wait(1).to({scaleX:0.9197,scaleY:0.9197,x:169.9,y:40.95,alpha:0.8689},0).wait(1).to({scaleX:0.8967,scaleY:0.8967,x:166.95,y:41,alpha:0.8313},0).wait(1).to({scaleX:0.8687,scaleY:0.8687,x:163.45,y:41.05,alpha:0.7856},0).wait(1).to({scaleX:0.8353,scaleY:0.8353,x:159.2,y:41.15,alpha:0.731},0).wait(1).to({scaleX:0.7967,scaleY:0.7967,x:154.3,y:41.25,alpha:0.668},0).wait(1).to({scaleX:0.7547,scaleY:0.7547,x:149,y:41.35,alpha:0.5994},0).wait(1).to({scaleX:0.7119,scaleY:0.7119,x:143.6,y:41.45,alpha:0.5295},0).wait(1).to({scaleX:0.6709,scaleY:0.6709,x:138.4,y:41.6,alpha:0.4626},0).wait(1).to({scaleX:0.6333,scaleY:0.6333,x:133.65,y:41.7,alpha:0.4011},0).wait(1).to({scaleX:0.5994,scaleY:0.5994,x:129.35,y:41.75,alpha:0.3458},0).wait(1).to({scaleX:0.5692,scaleY:0.5692,x:125.55,y:41.85,alpha:0.2965},0).wait(1).to({scaleX:0.5424,scaleY:0.5424,x:122.15,y:41.95,alpha:0.2527},0).wait(1).to({scaleX:0.5184,scaleY:0.5184,x:119.1,y:42,alpha:0.2136},0).wait(1).to({scaleX:0.497,scaleY:0.497,x:116.4,y:42.05,alpha:0.1786},0).wait(1).to({scaleX:0.4777,scaleY:0.4777,x:114,y:42.1,alpha:0.1471},0).wait(1).to({scaleX:0.4603,scaleY:0.4603,x:111.75,y:42.15,alpha:0.1186},0).wait(1).to({scaleX:0.4445,scaleY:0.4445,x:109.8,alpha:0.0928},0).wait(1).to({scaleX:0.4305,scaleY:0.4305,x:108,y:42.25,alpha:0.0699},0).wait(1).to({scaleX:0.4215,scaleY:0.4215,x:106.85,alpha:0.0552},0).wait(1).to({scaleX:0.4153,scaleY:0.4153,x:106.05,alpha:0.0451},0).wait(1).to({scaleX:0.4106,scaleY:0.4106,x:105.5,alpha:0.0374},0).wait(1).to({scaleX:0.4068,scaleY:0.4068,x:105,alpha:0.0312},0).wait(1).to({scaleX:0.4036,scaleY:0.4036,x:104.6,y:42.3,alpha:0.0261},0).wait(1).to({scaleX:0.401,scaleY:0.401,x:104.3,alpha:0.0218},0).wait(1).to({scaleX:0.3988,scaleY:0.3988,x:104,alpha:0.0181},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:103.75,alpha:0.015},0).wait(1).to({scaleX:0.3952,scaleY:0.3952,x:103.55,alpha:0.0123},0).wait(1).to({scaleX:0.3938,scaleY:0.3938,x:103.35,alpha:0.01},0).wait(1).to({scaleX:0.3926,scaleY:0.3926,x:103.2,y:42.35,alpha:0.008},0).wait(1).to({scaleX:0.3915,scaleY:0.3915,x:103.05,y:42.3,alpha:0.0063},0).wait(1).to({scaleX:0.3906,scaleY:0.3906,x:103,y:42.35,alpha:0.0048},0).wait(1).to({scaleX:0.3899,scaleY:0.3899,x:102.85,y:42.3,alpha:0.0036},0).wait(1).to({scaleX:0.3893,scaleY:0.3893,x:102.8,y:42.35,alpha:0.0026},0).wait(1).to({scaleX:0.3887,scaleY:0.3887,x:102.7,alpha:0.0018},0).wait(1).to({scaleX:0.3883,scaleY:0.3883,x:102.65,y:42.3,alpha:0.0011},0).wait(1).to({scaleX:0.388,scaleY:0.388,alpha:0.0006},0).wait(1).to({scaleX:0.3878,scaleY:0.3878,x:102.6,y:42.35,alpha:0.0002},0).wait(1).to({scaleX:0.3877,scaleY:0.3877,alpha:0},0).wait(1).to({scaleX:0.3876,scaleY:0.3876},0).wait(4).to({regX:94.4,regY:25.8,scaleX:0.3877,scaleY:0.3877,x:103.1,y:41.95},0).to({_off:true},1).wait(384));

	// logo
	this.instance_6 = new lib.Symbol11();
	this.instance_6.setTransform(-503.8,-191.25,4.7707,4.7707,0,0,0,24,32);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(63).to({_off:false},0).wait(1).to({scaleX:4.7648,scaleY:4.7648,x:-502.9,y:-190.85},0).wait(1).to({scaleX:4.7547,scaleY:4.7547,x:-501.45,y:-190.2},0).wait(1).to({scaleX:4.74,scaleY:4.74,x:-499.25,y:-189.3},0).wait(1).to({scaleX:4.72,scaleY:4.72,x:-496.3,y:-188.05},0).wait(1).to({scaleX:4.694,scaleY:4.694,x:-492.45,y:-186.45},0).wait(1).to({scaleX:4.6612,scaleY:4.6612,x:-487.65,y:-184.4},0).wait(1).to({scaleX:4.6206,scaleY:4.6206,x:-481.6,y:-181.85},0).wait(1).to({scaleX:4.5709,scaleY:4.5709,x:-474.3,y:-178.75},0).wait(1).to({scaleX:4.5106,scaleY:4.5106,x:-465.4,y:-175},0).wait(1).to({scaleX:4.4379,scaleY:4.4379,x:-454.65,y:-170.45},0).wait(1).to({scaleX:4.3507,scaleY:4.3507,x:-441.75,y:-165.05},0).wait(1).to({scaleX:4.2462,scaleY:4.2462,x:-426.35,y:-158.5},0).wait(1).to({scaleX:4.1218,scaleY:4.1218,x:-408,y:-150.75},0).wait(1).to({scaleX:3.9746,scaleY:3.9746,x:-386.2,y:-141.55},0).wait(1).to({scaleX:3.803,scaleY:3.803,x:-360.9,y:-130.85},0).wait(1).to({scaleX:3.6076,scaleY:3.6076,x:-332,y:-118.65},0).wait(1).to({scaleX:3.3933,scaleY:3.3933,x:-300.4,y:-105.25},0).wait(1).to({scaleX:3.1691,scaleY:3.1691,x:-267.3,y:-91.3},0).wait(1).to({scaleX:2.9458,scaleY:2.9458,x:-234.3,y:-77.4},0).wait(1).to({scaleX:2.7323,scaleY:2.7323,x:-202.75,y:-64.05},0).wait(1).to({scaleX:2.5341,scaleY:2.5341,x:-173.55,y:-51.65},0).wait(1).to({scaleX:2.3529,scaleY:2.3529,x:-146.75,y:-40.35},0).wait(1).to({scaleX:2.1886,scaleY:2.1886,x:-122.45,y:-30.1},0).wait(1).to({scaleX:2.0398,scaleY:2.0398,x:-100.55,y:-20.85},0).wait(1).to({scaleX:1.905,scaleY:1.905,x:-80.65,y:-12.45},0).wait(1).to({scaleX:1.7827,scaleY:1.7827,x:-62.55,y:-4.8},0).wait(1).to({scaleX:1.6712,scaleY:1.6712,x:-46.1,y:2.15},0).wait(1).to({scaleX:1.5694,scaleY:1.5694,x:-31.05,y:8.5},0).wait(1).to({scaleX:1.4761,scaleY:1.4761,x:-17.25,y:14.35},0).wait(1).to({scaleX:1.3903,scaleY:1.3903,x:-4.65,y:19.7},0).wait(1).to({scaleX:1.3113,scaleY:1.3113,x:7.05,y:24.6},0).wait(1).to({scaleX:1.2452,scaleY:1.2452,x:16.85,y:28.75},0).wait(1).to({scaleX:1.2024,scaleY:1.2024,x:23.15,y:31.4},0).wait(1).to({scaleX:1.1706,scaleY:1.1706,x:27.85,y:33.35},0).wait(1).to({scaleX:1.1454,scaleY:1.1454,x:31.5,y:34.95},0).wait(1).to({scaleX:1.1245,scaleY:1.1245,x:34.6,y:36.25},0).wait(1).to({scaleX:1.1068,scaleY:1.1068,x:37.2,y:37.3},0).wait(1).to({scaleX:1.0917,scaleY:1.0917,x:39.45,y:38.25},0).wait(1).to({scaleX:1.0786,scaleY:1.0786,x:41.4,y:39.05},0).wait(1).to({scaleX:1.0671,scaleY:1.0671,x:43.05,y:39.8},0).wait(1).to({scaleX:1.0571,scaleY:1.0571,x:44.55,y:40.45},0).wait(1).to({scaleX:1.0482,scaleY:1.0482,x:45.85,y:40.95},0).wait(1).to({scaleX:1.0405,scaleY:1.0405,x:47,y:41.45},0).wait(1).to({scaleX:1.0336,scaleY:1.0336,x:48,y:41.9},0).wait(1).to({scaleX:1.0277,scaleY:1.0277,x:48.9,y:42.25},0).wait(1).to({scaleX:1.0224,scaleY:1.0224,x:49.65,y:42.55},0).wait(1).to({scaleX:1.0179,scaleY:1.0179,x:50.35,y:42.85},0).wait(1).to({scaleX:1.0139,scaleY:1.0139,x:50.95,y:43.1},0).wait(1).to({scaleX:1.0106,scaleY:1.0106,x:51.4,y:43.35},0).wait(1).to({scaleX:1.0077,scaleY:1.0077,x:51.85,y:43.5},0).wait(1).to({scaleX:1.0054,scaleY:1.0054,x:52.2,y:43.6},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,x:52.5,y:43.75},0).wait(1).to({scaleX:1.0019,scaleY:1.0019,x:52.7,y:43.85},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,x:52.85,y:43.95},0).wait(1).to({scaleX:1,scaleY:1,x:52.95},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:53.05,y:44},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,x:53.1,y:44.05},0).wait(1).to({scaleX:0.9994,scaleY:0.9994},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,x:53.05,y:44},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,x:53},0).wait(1).to({scaleX:1,scaleY:1},0).wait(60).to({scaleX:0.9988,scaleY:0.9988,x:52.95,y:43.95,alpha:0.9981},0).wait(1).to({scaleX:0.9967,scaleY:0.9967,y:44,alpha:0.9946},0).wait(1).to({scaleX:0.9934,scaleY:0.9934,x:53,alpha:0.9893},0).wait(1).to({scaleX:0.989,scaleY:0.989,y:43.95,alpha:0.982},0).wait(1).to({scaleX:0.983,scaleY:0.983,alpha:0.9723},0).wait(1).to({scaleX:0.9753,scaleY:0.9753,alpha:0.9597},0).wait(1).to({scaleX:0.9656,scaleY:0.9656,x:52.95,alpha:0.9439},0).wait(1).to({scaleX:0.9535,scaleY:0.9535,x:53,alpha:0.924},0).wait(1).to({scaleX:0.9384,scaleY:0.9384,alpha:0.8994},0).wait(1).to({scaleX:0.9197,scaleY:0.9197,alpha:0.8689},0).wait(1).to({scaleX:0.8967,scaleY:0.8967,y:43.9,alpha:0.8313},0).wait(1).to({scaleX:0.8687,scaleY:0.8687,x:53.05,alpha:0.7856},0).wait(1).to({scaleX:0.8353,scaleY:0.8353,alpha:0.731},0).wait(1).to({scaleX:0.7967,scaleY:0.7967,y:43.85,alpha:0.668},0).wait(1).to({scaleX:0.7547,scaleY:0.7547,x:53.1,y:43.8,alpha:0.5994},0).wait(1).to({scaleX:0.7119,scaleY:0.7119,x:53.15,alpha:0.5295},0).wait(1).to({scaleX:0.6709,scaleY:0.6709,y:43.75,alpha:0.4626},0).wait(1).to({scaleX:0.6333,scaleY:0.6333,x:53.2,y:43.7,alpha:0.4011},0).wait(1).to({scaleX:0.5994,scaleY:0.5994,y:43.75,alpha:0.3458},0).wait(1).to({scaleX:0.5692,scaleY:0.5692,y:43.7,alpha:0.2965},0).wait(1).to({scaleX:0.5424,scaleY:0.5424,y:43.65,alpha:0.2527},0).wait(1).to({scaleX:0.5184,scaleY:0.5184,x:53.25,alpha:0.2136},0).wait(1).to({scaleX:0.497,scaleY:0.497,x:53.3,alpha:0.1786},0).wait(1).to({scaleX:0.4777,scaleY:0.4777,x:53.25,alpha:0.1471},0).wait(1).to({scaleX:0.4603,scaleY:0.4603,x:53.3,alpha:0.1186},0).wait(1).to({scaleX:0.4445,scaleY:0.4445,x:53.25,y:43.6,alpha:0.0928},0).wait(1).to({scaleX:0.4305,scaleY:0.4305,x:53.3,alpha:0.0699},0).wait(1).to({scaleX:0.4215,scaleY:0.4215,alpha:0.0552},0).wait(1).to({scaleX:0.4153,scaleY:0.4153,alpha:0.0451},0).wait(1).to({scaleX:0.4106,scaleY:0.4106,alpha:0.0374},0).wait(1).to({scaleX:0.4068,scaleY:0.4068,alpha:0.0312},0).wait(1).to({scaleX:0.4036,scaleY:0.4036,y:43.55,alpha:0.0261},0).wait(1).to({scaleX:0.401,scaleY:0.401,y:43.6,alpha:0.0218},0).wait(1).to({scaleX:0.3988,scaleY:0.3988,alpha:0.0181},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,alpha:0.015},0).wait(1).to({scaleX:0.3952,scaleY:0.3952,x:53.35,alpha:0.0123},0).wait(1).to({scaleX:0.3938,scaleY:0.3938,x:53.3,alpha:0.01},0).wait(1).to({scaleX:0.3926,scaleY:0.3926,y:43.55,alpha:0.008},0).wait(1).to({scaleX:0.3915,scaleY:0.3915,y:43.6,alpha:0.0063},0).wait(1).to({scaleX:0.3906,scaleY:0.3906,alpha:0.0048},0).wait(1).to({scaleX:0.3899,scaleY:0.3899,alpha:0.0036},0).wait(1).to({scaleX:0.3893,scaleY:0.3893,alpha:0.0026},0).wait(1).to({scaleX:0.3887,scaleY:0.3887,x:53.35,alpha:0.0018},0).wait(1).to({scaleX:0.3883,scaleY:0.3883,x:53.3,alpha:0.0011},0).wait(1).to({scaleX:0.388,scaleY:0.388,y:43.55,alpha:0.0006},0).wait(1).to({scaleX:0.3878,scaleY:0.3878,alpha:0.0002},0).wait(1).to({scaleX:0.3877,scaleY:0.3877,y:43.6,alpha:0},0).wait(1).to({scaleX:0.3876,scaleY:0.3876},0).wait(4).to({regX:24.1,scaleX:0.3877,scaleY:0.3877,x:53.35},0).to({_off:true},1).wait(384));

	// fox.png
	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(146,185,1,1,0,0,0,124,214);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({regX:109.7,regY:207.4,scaleX:0.9994,scaleY:0.9994,x:132.1,y:178.5},0).wait(1).to({scaleX:0.9984,scaleY:0.9984,x:132.7,y:178.65},0).wait(1).to({scaleX:0.9969,scaleY:0.9969,x:133.7,y:178.85},0).wait(1).to({scaleX:0.9948,scaleY:0.9948,x:135,y:179.1},0).wait(1).to({scaleX:0.9921,scaleY:0.9921,x:136.7,y:179.45},0).wait(1).to({scaleX:0.9888,scaleY:0.9888,x:138.8,y:179.9},0).wait(1).to({scaleX:0.9846,scaleY:0.9846,x:141.5,y:180.45},0).wait(1).to({scaleX:0.9795,scaleY:0.9795,x:144.75,y:181.15},0).wait(1).to({scaleX:0.9733,scaleY:0.9733,x:148.65,y:181.95},0).wait(1).to({scaleX:0.9658,scaleY:0.9658,x:153.45,y:182.95},0).wait(1).to({scaleX:0.9569,scaleY:0.9569,x:159.1,y:184.15},0).wait(1).to({scaleX:0.9462,scaleY:0.9462,x:165.95,y:185.6},0).wait(1).to({scaleX:0.9334,scaleY:0.9334,x:174.1,y:187.3},0).wait(1).to({scaleX:0.9183,scaleY:0.9183,x:183.75,y:189.3},0).wait(1).to({scaleX:0.9007,scaleY:0.9007,x:194.95,y:191.6},0).wait(1).to({scaleX:0.8806,scaleY:0.8806,x:207.7,y:194.25},0).wait(1).to({scaleX:0.8586,scaleY:0.8586,x:221.75,y:197.15},0).wait(1).to({scaleX:0.8356,scaleY:0.8356,x:236.4,y:200.25},0).wait(1).to({scaleX:0.8127,scaleY:0.8127,x:251,y:203.3},0).wait(1).to({scaleX:0.7907,scaleY:0.7907,x:264.95,y:206.2},0).wait(1).to({scaleX:0.7704,scaleY:0.7704,x:277.9,y:208.9},0).wait(1).to({scaleX:0.7518,scaleY:0.7518,x:289.75,y:211.35},0).wait(1).to({scaleX:0.7349,scaleY:0.7349,x:300.5,y:213.6},0).wait(1).to({scaleX:0.7196,scaleY:0.7196,x:310.25,y:215.65},0).wait(1).to({scaleX:0.7058,scaleY:0.7058,x:319.05,y:217.5},0).wait(1).to({scaleX:0.6932,scaleY:0.6932,x:327.05,y:219.15},0).wait(1).to({scaleX:0.6818,scaleY:0.6818,x:334.35,y:220.65},0).wait(1).to({scaleX:0.6714,scaleY:0.6714,x:341,y:222.05},0).wait(1).to({scaleX:0.6618,scaleY:0.6618,x:347.1,y:223.3},0).wait(1).to({scaleX:0.653,scaleY:0.653,x:352.7,y:224.5},0).wait(1).to({scaleX:0.6449,scaleY:0.6449,x:357.85,y:225.6},0).wait(1).to({scaleX:0.6381,scaleY:0.6381,x:362.2,y:226.5},0).wait(1).to({scaleX:0.6337,scaleY:0.6337,x:364.95,y:227.05},0).wait(1).to({scaleX:0.6304,scaleY:0.6304,x:367.05,y:227.5},0).wait(1).to({scaleX:0.6278,scaleY:0.6278,x:368.7,y:227.85},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:370.1,y:228.1},0).wait(1).to({scaleX:0.6239,scaleY:0.6239,x:371.25,y:228.35},0).wait(1).to({scaleX:0.6223,scaleY:0.6223,x:372.2,y:228.55},0).wait(1).to({scaleX:0.621,scaleY:0.621,x:373.05,y:228.75},0).wait(1).to({scaleX:0.6198,scaleY:0.6198,x:373.85,y:228.9},0).wait(1).to({scaleX:0.6188,scaleY:0.6188,x:374.5,y:229.05},0).wait(1).to({scaleX:0.6179,scaleY:0.6179,x:375.1,y:229.15},0).wait(1).to({scaleX:0.6171,scaleY:0.6171,x:375.55,y:229.3},0).wait(1).to({scaleX:0.6164,scaleY:0.6164,x:376,y:229.4},0).wait(1).to({scaleX:0.6157,scaleY:0.6157,x:376.4,y:229.45},0).wait(1).to({scaleX:0.6152,scaleY:0.6152,x:376.75,y:229.5},0).wait(1).to({scaleX:0.6147,scaleY:0.6147,x:377.05,y:229.6},0).wait(1).to({scaleX:0.6143,scaleY:0.6143,x:377.3},0).wait(1).to({scaleX:0.614,scaleY:0.614,x:377.5,y:229.7},0).wait(1).to({scaleX:0.6137,scaleY:0.6137,x:377.7,y:229.75},0).wait(1).to({scaleX:0.6135,scaleY:0.6135,x:377.85},0).wait(1).to({scaleX:0.6133,scaleY:0.6133,x:377.95,y:229.8},0).wait(1).to({scaleX:0.6131,scaleY:0.6131,x:378.1},0).wait(1).to({scaleX:0.613,scaleY:0.613,x:378.15,y:229.85},0).wait(1).to({scaleX:0.6129,scaleY:0.6129,x:378.2,y:229.8},0).wait(1).to({x:378.25},0).wait(1).to({scaleX:0.6128,scaleY:0.6128,x:378.3,y:229.85},0).wait(1).to({x:378.25},0).wait(1).to({scaleX:0.6129,scaleY:0.6129,y:229.8},0).wait(2).to({regX:124,regY:214.1,x:387,y:233.9},0).wait(59).to({regX:124.4,regY:214,scaleX:4.2367,scaleY:4.2367,x:761.95,y:415.05},0).wait(1).to({regX:109.7,regY:207.4,scaleX:4.2294,scaleY:4.2294,x:698.65,y:386.65},0).wait(1).to({scaleX:4.2162,scaleY:4.2162,x:696.95,y:385.85},0).wait(1).to({scaleX:4.1964,scaleY:4.1964,x:694.35,y:384.65},0).wait(1).to({scaleX:4.1688,scaleY:4.1688,x:690.7,y:382.95},0).wait(1).to({scaleX:4.1322,scaleY:4.1322,x:685.9,y:380.7},0).wait(1).to({scaleX:4.0851,scaleY:4.0851,x:679.7,y:377.8},0).wait(1).to({scaleX:4.0253,scaleY:4.0253,x:671.85,y:374.15},0).wait(1).to({scaleX:3.9506,scaleY:3.9506,x:662,y:369.55},0).wait(1).to({scaleX:3.8577,scaleY:3.8577,x:649.75,y:363.85},0).wait(1).to({scaleX:3.7428,scaleY:3.7428,x:634.6,y:356.75},0).wait(1).to({scaleX:3.6015,scaleY:3.6015,x:616,y:348.1},0).wait(1).to({scaleX:3.4294,scaleY:3.4294,x:593.35,y:337.55},0).wait(1).to({scaleX:3.2236,scaleY:3.2236,x:566.2,y:324.9},0).wait(1).to({scaleX:2.9864,scaleY:2.9864,x:535,y:310.35},0).wait(1).to({scaleX:2.7281,scaleY:2.7281,x:501,y:294.45},0).wait(1).to({scaleX:2.465,scaleY:2.465,x:466.35,y:278.35},0).wait(1).to({scaleX:2.2128,scaleY:2.2128,x:433.15,y:262.85},0).wait(1).to({scaleX:1.9812,scaleY:1.9812,x:402.65,y:248.6},0).wait(1).to({scaleX:1.773,scaleY:1.773,x:375.25,y:235.8},0).wait(1).to({scaleX:1.5874,scaleY:1.5874,x:350.8,y:224.45},0).wait(1).to({scaleX:1.4223,scaleY:1.4223,x:329.1,y:214.3},0).wait(1).to({scaleX:1.2751,scaleY:1.2751,x:309.7,y:205.25},0).wait(1).to({scaleX:1.1432,scaleY:1.1432,x:292.3,y:197.15},0).wait(1).to({scaleX:1.0246,scaleY:1.0246,x:276.7,y:189.85},0).wait(1).to({scaleX:0.9175,scaleY:0.9175,x:262.6,y:183.3},0).wait(1).to({scaleX:0.8204,scaleY:0.8204,x:249.8,y:177.25},0).wait(1).to({scaleX:0.7339,scaleY:0.7339,x:238.4,y:171.95},0).wait(1).to({scaleX:0.6786,scaleY:0.6786,x:231.15,y:168.55},0).wait(1).to({scaleX:0.6406,scaleY:0.6406,x:226.15,y:166.2},0).wait(1).to({scaleX:0.6117,scaleY:0.6117,x:222.35,y:164.45},0).wait(1).to({scaleX:0.5883,scaleY:0.5883,x:219.25,y:163},0).wait(1).to({scaleX:0.5691,scaleY:0.5691,x:216.75,y:161.8},0).wait(1).to({scaleX:0.5528,scaleY:0.5528,x:214.6,y:160.8},0).wait(1).to({scaleX:0.539,scaleY:0.539,x:212.8,y:160},0).wait(1).to({scaleX:0.5272,scaleY:0.5272,x:211.2,y:159.25},0).wait(1).to({scaleX:0.5171,scaleY:0.5171,x:209.85,y:158.65},0).wait(1).to({scaleX:0.5083,scaleY:0.5083,x:208.7,y:158.1},0).wait(1).to({scaleX:0.5008,scaleY:0.5008,x:207.75,y:157.6},0).wait(1).to({scaleX:0.4944,scaleY:0.4944,x:206.9,y:157.25},0).wait(1).to({scaleX:0.489,scaleY:0.489,x:206.2,y:156.9},0).wait(1).to({scaleX:0.4844,scaleY:0.4844,x:205.6,y:156.6},0).wait(1).to({scaleX:0.4805,scaleY:0.4805,x:205.05,y:156.35},0).wait(1).to({scaleX:0.4774,scaleY:0.4774,x:204.65,y:156.2},0).wait(1).to({scaleX:0.4749,scaleY:0.4749,x:204.3,y:156.05},0).wait(1).to({scaleX:0.473,scaleY:0.473,x:204.1,y:155.9},0).wait(1).to({scaleX:0.4716,scaleY:0.4716,x:203.9,y:155.85},0).wait(1).to({scaleX:0.4707,scaleY:0.4707,x:203.8,y:155.75},0).wait(1).to({scaleX:0.4702,scaleY:0.4702,x:203.7},0).wait(1).to({scaleX:0.4701,scaleY:0.4701,x:203.65},0).wait(1).to({scaleX:0.4702,scaleY:0.4702,x:203.7,y:155.8},0).wait(1).to({scaleX:0.4706,scaleY:0.4706,x:203.75},0).wait(1).to({regX:124,regY:214,scaleX:0.4708,scaleY:0.4708,x:210.7,y:158.9},0).wait(309).to({regX:109.7,regY:207.4,scaleX:0.4727,scaleY:0.4727,x:203.65,y:155.85},0).wait(1).to({scaleX:0.4766,scaleY:0.4766,x:203.15,y:156},0).wait(1).to({scaleX:0.4832,scaleY:0.4832,x:202.2,y:156.3},0).wait(1).to({scaleX:0.493,scaleY:0.493,x:200.9,y:156.7},0).wait(1).to({scaleX:0.507,scaleY:0.507,x:198.95,y:157.3},0).wait(1).to({scaleX:0.5266,scaleY:0.5266,x:196.25,y:158.2},0).wait(1).to({scaleX:0.5538,scaleY:0.5538,x:192.6,y:159.3},0).wait(1).to({scaleX:0.5906,scaleY:0.5906,x:187.55,y:160.9},0).wait(1).to({scaleX:0.6383,scaleY:0.6383,x:181,y:162.95},0).wait(1).to({scaleX:0.6937,scaleY:0.6937,x:173.45,y:165.25},0).wait(1).to({scaleX:0.7491,scaleY:0.7491,x:165.9,y:167.65},0).wait(1).to({scaleX:0.7985,scaleY:0.7985,x:159.15,y:169.75},0).wait(1).to({scaleX:0.8402,scaleY:0.8402,x:153.45,y:171.6},0).wait(1).to({scaleX:0.8751,scaleY:0.8751,x:148.7,y:173.1},0).wait(1).to({scaleX:0.9045,scaleY:0.9045,x:144.65,y:174.35},0).wait(1).to({scaleX:0.9294,scaleY:0.9294,x:141.25,y:175.4},0).wait(1).to({scaleX:0.9509,scaleY:0.9509,x:138.3,y:176.3},0).wait(1).to({scaleX:0.9676,scaleY:0.9676,x:136.05,y:177.05},0).wait(1).to({scaleX:0.9764,scaleY:0.9764,x:134.85,y:177.4},0).wait(1).to({scaleX:0.9822,scaleY:0.9822,x:134.05,y:177.65},0).wait(1).to({scaleX:0.9865,scaleY:0.9865,x:133.45,y:177.85},0).wait(1).to({scaleX:0.9898,scaleY:0.9898,x:133.05,y:177.95},0).wait(1).to({scaleX:0.9923,scaleY:0.9923,x:132.65,y:178.1},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,x:132.4,y:178.2},0).wait(1).to({scaleX:0.996,scaleY:0.996,x:132.15,y:178.25},0).wait(1).to({scaleX:0.9973,scaleY:0.9973,x:132,y:178.3},0).wait(1).to({scaleX:0.9983,scaleY:0.9983,x:131.85,y:178.35},0).wait(1).to({scaleX:0.999,scaleY:0.999,x:131.75,y:178.4},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:131.7},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,x:131.65},0).wait(1).to({scaleX:1,scaleY:1,x:131.6},0).wait(1).to({scaleX:1.0001,scaleY:1.0001},0).wait(2).to({regX:124,regY:214,scaleX:1,scaleY:1,x:146,y:185},0).to({_off:true},41).wait(2));

	// BIG
	this.instance_8 = new lib.Symbol4();
	this.instance_8.setTransform(-255.1,183.1,1.6042,1.6042,0,0,0,153.9,184);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({_off:false},0).wait(1).to({regX:154,scaleX:1.6029,scaleY:1.6029,x:-254.3,y:183.2},0).wait(1).to({scaleX:1.6008,scaleY:1.6008,x:-253.2,y:183.3},0).wait(1).to({scaleX:1.5977,scaleY:1.5977,x:-251.6,y:183.5},0).wait(1).to({scaleX:1.5935,scaleY:1.5935,x:-249.45,y:183.7},0).wait(1).to({scaleX:1.5881,scaleY:1.5881,x:-246.65,y:183.95},0).wait(1).to({scaleX:1.5812,scaleY:1.5812,x:-243.1,y:184.35},0).wait(1).to({scaleX:1.5727,scaleY:1.5727,x:-238.65,y:184.8},0).wait(1).to({scaleX:1.5623,scaleY:1.5623,x:-233.3,y:185.3},0).wait(1).to({scaleX:1.5497,scaleY:1.5497,x:-226.75,y:186},0).wait(1).to({scaleX:1.5345,scaleY:1.5345,x:-218.9,y:186.8},0).wait(1).to({scaleX:1.5162,scaleY:1.5162,x:-209.4,y:187.8},0).wait(1).to({scaleX:1.4944,scaleY:1.4944,x:-198.1,y:188.9},0).wait(1).to({scaleX:1.4683,scaleY:1.4683,x:-184.65,y:190.25},0).wait(1).to({scaleX:1.4375,scaleY:1.4375,x:-168.65,y:191.9},0).wait(1).to({scaleX:1.4016,scaleY:1.4016,x:-150.05,y:193.8},0).wait(1).to({scaleX:1.3607,scaleY:1.3607,x:-128.9,y:195.95},0).wait(1).to({scaleX:1.3158,scaleY:1.3158,x:-105.65,y:198.3},0).wait(1).to({scaleX:1.2689,scaleY:1.2689,x:-81.35,y:200.8},0).wait(1).to({scaleX:1.2222,scaleY:1.2222,x:-57.15,y:203.25},0).wait(1).to({scaleX:1.1775,scaleY:1.1775,x:-34,y:205.6},0).wait(1).to({scaleX:1.136,scaleY:1.136,x:-12.55,y:207.75},0).wait(1).to({scaleX:1.0981,scaleY:1.0981,x:7.1,y:209.75},0).wait(1).to({scaleX:1.0636,scaleY:1.0636,x:24.9,y:211.55},0).wait(1).to({scaleX:1.0325,scaleY:1.0325,x:41,y:213.2},0).wait(1).to({scaleX:1.0043,scaleY:1.0043,x:55.6,y:214.7},0).wait(1).to({scaleX:0.9787,scaleY:0.9787,x:68.9,y:216.05},0).wait(1).to({scaleX:0.9554,scaleY:0.9554,x:80.95,y:217.25},0).wait(1).to({scaleX:0.934,scaleY:0.934,x:92,y:218.35},0).wait(1).to({scaleX:0.9145,scaleY:0.9145,x:102.15,y:219.4},0).wait(1).to({scaleX:0.8966,scaleY:0.8966,x:111.4,y:220.35},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:119.95,y:221.2},0).wait(1).to({scaleX:0.8662,scaleY:0.8662,x:127.15,y:221.95},0).wait(1).to({scaleX:0.8572,scaleY:0.8572,x:131.75,y:222.45},0).wait(1).to({scaleX:0.8506,scaleY:0.8506,x:135.2,y:222.75},0).wait(1).to({scaleX:0.8453,scaleY:0.8453,x:137.9,y:223.05},0).wait(1).to({scaleX:0.8409,scaleY:0.8409,x:140.15,y:223.25},0).wait(1).to({scaleX:0.8372,scaleY:0.8372,x:142.1,y:223.45},0).wait(1).to({scaleX:0.834,scaleY:0.834,x:143.75,y:223.6},0).wait(1).to({scaleX:0.8313,scaleY:0.8313,x:145.15,y:223.75},0).wait(1).to({scaleX:0.8289,scaleY:0.8289,x:146.4,y:223.9},0).wait(1).to({scaleX:0.8268,scaleY:0.8268,x:147.45,y:224.05},0).wait(1).to({scaleX:0.8249,scaleY:0.8249,x:148.45,y:224.15},0).wait(1).to({scaleX:0.8233,scaleY:0.8233,x:149.3,y:224.2},0).wait(1).to({scaleX:0.8219,scaleY:0.8219,x:150,y:224.3},0).wait(1).to({scaleX:0.8206,scaleY:0.8206,x:150.7,y:224.35},0).wait(1).to({scaleX:0.8195,scaleY:0.8195,x:151.25,y:224.4},0).wait(1).to({scaleX:0.8186,scaleY:0.8186,x:151.7,y:224.45},0).wait(1).to({scaleX:0.8178,scaleY:0.8178,x:152.15},0).wait(1).to({scaleX:0.8171,scaleY:0.8171,x:152.55,y:224.55},0).wait(1).to({scaleX:0.8165,scaleY:0.8165,x:152.85,y:224.6},0).wait(1).to({scaleX:0.816,scaleY:0.816,x:153.05},0).wait(1).to({scaleX:0.8156,scaleY:0.8156,x:153.3},0).wait(1).to({scaleX:0.8153,scaleY:0.8153,x:153.45},0).wait(1).to({scaleX:0.815,scaleY:0.815,x:153.55,y:224.65},0).wait(1).to({scaleX:0.8149,scaleY:0.8149,x:153.7},0).wait(1).to({scaleX:0.8148,scaleY:0.8148},0).wait(1).to({scaleX:0.8147,scaleY:0.8147},0).wait(2).to({scaleX:0.8148,scaleY:0.8148},0).wait(1).to({y:224.6},0).wait(1).to({regX:154.2,x:153.65,y:224.65},0).wait(60).to({regX:154,scaleX:0.8139,scaleY:0.8139,x:153.35,y:224.4},0).wait(1).to({scaleX:0.8122,scaleY:0.8122,x:153.05,y:224.1},0).wait(1).to({scaleX:0.8095,scaleY:0.8095,x:152.7,y:223.6},0).wait(1).to({scaleX:0.8059,scaleY:0.8059,x:152.15,y:222.9},0).wait(1).to({scaleX:0.8011,scaleY:0.8011,x:151.45,y:222},0).wait(1).to({scaleX:0.7949,scaleY:0.7949,x:150.6,y:220.8},0).wait(1).to({scaleX:0.787,scaleY:0.787,x:149.45,y:219.3},0).wait(1).to({scaleX:0.7771,scaleY:0.7771,x:148.05,y:217.45},0).wait(1).to({scaleX:0.7649,scaleY:0.7649,x:146.3,y:215.1},0).wait(1).to({scaleX:0.7497,scaleY:0.7497,x:144.1,y:212.2},0).wait(1).to({scaleX:0.7311,scaleY:0.7311,x:141.45,y:208.65},0).wait(1).to({scaleX:0.7084,scaleY:0.7084,x:138.15,y:204.35},0).wait(1).to({scaleX:0.6812,scaleY:0.6812,x:134.25,y:199.2},0).wait(1).to({scaleX:0.6499,scaleY:0.6499,x:129.75,y:193.25},0).wait(1).to({scaleX:0.6159,scaleY:0.6159,x:124.85,y:186.75},0).wait(1).to({scaleX:0.5812,scaleY:0.5812,x:119.85,y:180.15},0).wait(1).to({scaleX:0.5479,scaleY:0.5479,x:115.1,y:173.8},0).wait(1).to({scaleX:0.5174,scaleY:0.5174,x:110.65,y:168.05},0).wait(1).to({scaleX:0.4899,scaleY:0.4899,x:106.75,y:162.8},0).wait(1).to({scaleX:0.4654,scaleY:0.4654,x:103.25,y:158.15},0).wait(1).to({scaleX:0.4437,scaleY:0.4437,x:100.05,y:154},0).wait(1).to({scaleX:0.4242,scaleY:0.4242,x:97.3,y:150.3},0).wait(1).to({scaleX:0.4068,scaleY:0.4068,x:94.75,y:147},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,x:92.55,y:144.05},0).wait(1).to({scaleX:0.3771,scaleY:0.3771,x:90.5,y:141.35},0).wait(1).to({scaleX:0.3643,scaleY:0.3643,x:88.65,y:138.9},0).wait(1).to({scaleX:0.3529,scaleY:0.3529,x:87,y:136.75},0).wait(1).to({scaleX:0.3456,scaleY:0.3456,x:85.95,y:135.35},0).wait(1).to({scaleX:0.3406,scaleY:0.3406,x:85.25,y:134.4},0).wait(1).to({scaleX:0.3367,scaleY:0.3367,x:84.7,y:133.65},0).wait(1).to({scaleX:0.3337,scaleY:0.3337,x:84.25,y:133.1},0).wait(1).to({scaleX:0.3311,scaleY:0.3311,x:83.9,y:132.6},0).wait(1).to({scaleX:0.329,scaleY:0.329,x:83.55,y:132.2},0).wait(1).to({scaleX:0.3272,scaleY:0.3272,x:83.35,y:131.85},0).wait(1).to({scaleX:0.3256,scaleY:0.3256,x:83.1,y:131.55},0).wait(1).to({scaleX:0.3243,scaleY:0.3243,x:82.9,y:131.3},0).wait(1).to({scaleX:0.3231,scaleY:0.3231,x:82.7,y:131.05},0).wait(1).to({scaleX:0.3221,scaleY:0.3221,x:82.6,y:130.85},0).wait(1).to({scaleX:0.3213,scaleY:0.3213,x:82.5,y:130.7},0).wait(1).to({scaleX:0.3206,scaleY:0.3206,x:82.35,y:130.6},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:82.25,y:130.45},0).wait(1).to({scaleX:0.3194,scaleY:0.3194,x:82.2,y:130.4},0).wait(1).to({scaleX:0.319,scaleY:0.319,x:82.15,y:130.3},0).wait(1).to({scaleX:0.3187,scaleY:0.3187,x:82.1,y:130.25},0).wait(1).to({scaleX:0.3185,scaleY:0.3185,x:82.05,y:130.2},0).wait(1).to({scaleX:0.3183,scaleY:0.3183,x:82,y:130.15},0).wait(1).to({scaleX:0.3182,scaleY:0.3182,x:82.05},0).wait(1).to({scaleX:0.3181,scaleY:0.3181},0).wait(1).to({y:130.1},0).wait(1).to({y:130.15},0).wait(2).to({regX:154.2,regY:184.2,scaleX:0.3182,scaleY:0.3182,x:82.1},0).wait(309).to({regX:154,regY:184,scaleX:0.3177,scaleY:0.3177,x:82.3,y:130.1},0).wait(1).to({scaleX:0.3167,scaleY:0.3167,x:82.85,y:130.25},0).wait(1).to({scaleX:0.3152,scaleY:0.3152,x:83.7,y:130.45},0).wait(1).to({scaleX:0.3128,scaleY:0.3128,x:85,y:130.75},0).wait(1).to({scaleX:0.3094,scaleY:0.3094,x:86.95,y:131.2},0).wait(1).to({scaleX:0.3047,scaleY:0.3047,x:89.6,y:131.75},0).wait(1).to({scaleX:0.2981,scaleY:0.2981,x:93.3,y:132.55},0).wait(1).to({scaleX:0.2892,scaleY:0.2892,x:98.35,y:133.65},0).wait(1).to({scaleX:0.2777,scaleY:0.2777,x:104.8,y:135.15},0).wait(1).to({scaleX:0.2644,scaleY:0.2644,x:112.35,y:136.8},0).wait(1).to({scaleX:0.251,scaleY:0.251,x:119.9,y:138.5},0).wait(1).to({scaleX:0.2391,scaleY:0.2391,x:126.6,y:140},0).wait(1).to({scaleX:0.229,scaleY:0.229,x:132.25,y:141.25},0).wait(1).to({scaleX:0.2206,scaleY:0.2206,x:137,y:142.3},0).wait(1).to({scaleX:0.2135,scaleY:0.2135,x:141.05,y:143.2},0).wait(1).to({scaleX:0.2075,scaleY:0.2075,x:144.45,y:144},0).wait(1).to({scaleX:0.2023,scaleY:0.2023,x:147.35,y:144.6},0).wait(1).to({scaleX:0.1983,scaleY:0.1983,x:149.65,y:145.1},0).wait(1).to({scaleX:0.1962,scaleY:0.1962,x:150.8,y:145.4},0).wait(1).to({scaleX:0.1948,scaleY:0.1948,x:151.65,y:145.55},0).wait(1).to({scaleX:0.1937,scaleY:0.1937,x:152.2,y:145.7},0).wait(1).to({scaleX:0.1929,scaleY:0.1929,x:152.65,y:145.8},0).wait(1).to({scaleX:0.1923,scaleY:0.1923,x:153,y:145.85},0).wait(1).to({scaleX:0.1918,scaleY:0.1918,x:153.3,y:145.9},0).wait(1).to({scaleX:0.1914,scaleY:0.1914,x:153.5,y:145.95},0).wait(1).to({scaleX:0.1911,scaleY:0.1911,x:153.7,y:146},0).wait(1).to({scaleX:0.1909,scaleY:0.1909,x:153.8},0).wait(1).to({scaleX:0.1907,scaleY:0.1907,x:153.9,y:146.05},0).wait(1).to({scaleX:0.1906,scaleY:0.1906,x:154},0).wait(1).to({scaleX:0.1905,scaleY:0.1905,x:154.05,y:146.1},0).wait(1).to({scaleX:0.1904,scaleY:0.1904},0).wait(1).to({x:154.1},0).wait(1).to({x:154.05},0).wait(1).to({regX:154.3,regY:184.3,scaleX:0.1905,scaleY:0.1905,x:154.1,y:146.15},0).to({_off:true},41).wait(2));

	// coin
	this.instance_9 = new lib.FLOATING_OBJECT_horizontal();
	this.instance_9.setTransform(877.95,358.3,16.5935,16.5935,0,0,0,31,30.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(186).to({_off:false},0).wait(1).to({regX:30.5,regY:33.2,scaleX:16.5767,scaleY:16.5767,x:869,y:396.25},0).wait(1).to({scaleX:16.5504,scaleY:16.5504,x:868,y:395.85},0).wait(1).to({scaleX:16.5138,scaleY:16.5138,x:866.55,y:395.3},0).wait(1).to({scaleX:16.4658,scaleY:16.4658,x:864.75,y:394.6},0).wait(1).to({scaleX:16.4054,scaleY:16.4054,x:862.4,y:393.75},0).wait(1).to({scaleX:16.3315,scaleY:16.3315,x:859.6,y:392.7},0).wait(1).to({scaleX:16.2426,scaleY:16.2426,x:856.2,y:391.4},0).wait(1).to({scaleX:16.1371,scaleY:16.1371,x:852.2,y:389.9},0).wait(1).to({scaleX:16.0132,scaleY:16.0132,x:847.4,y:388.1},0).wait(1).to({scaleX:15.8687,scaleY:15.8687,x:841.9,y:386},0).wait(1).to({scaleX:15.7012,scaleY:15.7012,x:835.5,y:383.6},0).wait(1).to({scaleX:15.5078,scaleY:15.5078,x:828.1,y:380.8},0).wait(1).to({scaleX:15.2852,scaleY:15.2852,x:819.55,y:377.55},0).wait(1).to({scaleX:15.0295,scaleY:15.0295,x:809.75,y:373.9},0).wait(1).to({scaleX:14.7365,scaleY:14.7365,x:798.55,y:369.65},0).wait(1).to({scaleX:14.4013,scaleY:14.4013,x:785.75,y:364.75},0).wait(1).to({scaleX:14.0189,scaleY:14.0189,x:771.1,y:359.3},0).wait(1).to({scaleX:13.5842,scaleY:13.5842,x:754.45,y:353},0).wait(1).to({scaleX:13.0933,scaleY:13.0933,x:735.65,y:345.9},0).wait(1).to({scaleX:12.5445,scaleY:12.5445,x:714.65,y:337.95},0).wait(1).to({scaleX:11.9401,scaleY:11.9401,x:691.5,y:329.2},0).wait(1).to({scaleX:11.2879,scaleY:11.2879,x:666.6,y:319.8},0).wait(1).to({scaleX:10.6021,scaleY:10.6021,x:640.3,y:309.9},0).wait(1).to({scaleX:9.9011,scaleY:9.9011,x:613.5,y:299.7},0).wait(1).to({scaleX:9.2042,scaleY:9.2042,x:586.85,y:289.7},0).wait(1).to({scaleX:8.5277,scaleY:8.5277,x:560.95,y:279.85},0).wait(1).to({scaleX:7.8831,scaleY:7.8831,x:536.25,y:270.5},0).wait(1).to({scaleX:7.2766,scaleY:7.2766,x:513.05,y:261.75},0).wait(1).to({scaleX:6.7104,scaleY:6.7104,x:491.35,y:253.6},0).wait(1).to({scaleX:6.184,scaleY:6.184,x:471.2,y:245.95},0).wait(1).to({scaleX:5.6957,scaleY:5.6957,x:452.5,y:238.9},0).wait(1).to({scaleX:5.2426,scaleY:5.2426,x:435.2,y:232.35},0).wait(1).to({scaleX:4.822,scaleY:4.822,x:419.1,y:226.3},0).wait(1).to({scaleX:4.4309,scaleY:4.4309,x:404.15,y:220.6},0).wait(1).to({scaleX:4.0668,scaleY:4.0668,x:390.2,y:215.35},0).wait(1).to({scaleX:3.7271,scaleY:3.7271,x:377.2,y:210.45},0).wait(1).to({scaleX:3.4097,scaleY:3.4097,x:365.05,y:205.85},0).wait(1).to({scaleX:3.1125,scaleY:3.1125,x:353.7,y:201.6},0).wait(1).to({scaleX:2.8339,scaleY:2.8339,x:343.05,y:197.55},0).wait(1).to({scaleX:2.5723,scaleY:2.5723,x:333,y:193.75},0).wait(1).to({scaleX:2.3263,scaleY:2.3263,x:323.6,y:190.2},0).wait(1).to({scaleX:2.1006,scaleY:2.1006,x:314.95,y:186.95},0).wait(1).to({scaleX:1.9387,scaleY:1.9387,x:308.75,y:184.6},0).wait(1).to({scaleX:1.817,scaleY:1.817,x:304.05,y:182.8},0).wait(1).to({scaleX:1.7186,scaleY:1.7186,x:300.3,y:181.4},0).wait(1).to({scaleX:1.6361,scaleY:1.6361,x:297.15,y:180.2},0).wait(1).to({scaleX:1.5652,scaleY:1.5652,x:294.45,y:179.2},0).wait(1).to({scaleX:1.5032,scaleY:1.5032,x:292.1,y:178.3},0).wait(1).to({scaleX:1.4485,scaleY:1.4485,x:290,y:177.5},0).wait(1).to({scaleX:1.3998,scaleY:1.3998,x:288.15,y:176.8},0).wait(1).to({scaleX:1.3562,scaleY:1.3562,x:286.45,y:176.15},0).wait(1).to({scaleX:1.3169,scaleY:1.3169,x:284.95,y:175.6},0).wait(1).to({scaleX:1.2814,scaleY:1.2814,x:283.6,y:175.1},0).wait(1).to({scaleX:1.2492,scaleY:1.2492,x:282.35,y:174.6},0).wait(1).to({scaleX:1.2201,scaleY:1.2201,x:281.25,y:174.2},0).wait(1).to({scaleX:1.1936,scaleY:1.1936,x:280.25,y:173.85},0).wait(1).to({scaleX:1.1696,scaleY:1.1696,x:279.3,y:173.5},0).wait(1).to({scaleX:1.1478,scaleY:1.1478,x:278.45,y:173.15},0).wait(1).to({scaleX:1.128,scaleY:1.128,x:277.7,y:172.85},0).wait(1).to({scaleX:1.1102,scaleY:1.1102,x:277.05,y:172.6},0).wait(1).to({scaleX:1.094,scaleY:1.094,x:276.4,y:172.35},0).wait(1).to({scaleX:1.0795,scaleY:1.0795,x:275.85,y:172.2},0).wait(1).to({scaleX:1.0664,scaleY:1.0664,x:275.35,y:172},0).wait(1).to({scaleX:1.0547,scaleY:1.0547,x:274.9,y:171.8},0).wait(1).to({scaleX:1.0444,scaleY:1.0444,x:274.5,y:171.65},0).wait(1).to({scaleX:1.0353,scaleY:1.0353,x:274.2,y:171.5},0).wait(1).to({scaleX:1.0273,scaleY:1.0273,x:273.9,y:171.4},0).wait(1).to({scaleX:1.0204,scaleY:1.0204,x:273.6,y:171.35},0).wait(1).to({scaleX:1.0146,scaleY:1.0146,x:273.4,y:171.25},0).wait(1).to({scaleX:1.0096,scaleY:1.0096,x:273.2,y:171.15},0).wait(1).to({scaleX:1.0056,scaleY:1.0056,x:273,y:171.1},0).wait(1).to({scaleX:1.0025,scaleY:1.0025,x:272.95},0).wait(1).to({scaleX:1.0001,scaleY:1.0001,x:272.85,y:171},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,x:272.75},0).wait(1).to({scaleX:0.9975,scaleY:0.9975,x:272.7,y:170.95},0).wait(1).to({scaleX:0.9972,scaleY:0.9972,y:171},0).wait(1).to({scaleX:0.9973,scaleY:0.9973},0).wait(1).to({scaleX:0.9979,scaleY:0.9979,x:272.75},0).wait(1).to({scaleX:0.9987,scaleY:0.9987},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,x:272.8,y:171.05},0).wait(1).to({regX:31,regY:31,scaleX:1,scaleY:1,x:273.35,y:168.8},0).wait(279).to({regX:30.5,regY:33.2,scaleX:0.9982,scaleY:0.9982,x:272.6,y:171},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,x:272.2,y:170.95},0).wait(1).to({scaleX:0.9883,scaleY:0.9883,x:271.45},0).wait(1).to({scaleX:0.9791,scaleY:0.9791,x:270.3,y:170.9},0).wait(1).to({scaleX:0.966,scaleY:0.966,x:268.75},0).wait(1).to({scaleX:0.9475,scaleY:0.9475,x:266.55,y:170.85},0).wait(1).to({scaleX:0.922,scaleY:0.922,x:263.45,y:170.8},0).wait(1).to({scaleX:0.8874,scaleY:0.8874,x:259.35,y:170.7},0).wait(1).to({scaleX:0.8426,scaleY:0.8426,x:254,y:170.6},0).wait(1).to({scaleX:0.7905,scaleY:0.7905,x:247.75,y:170.5},0).wait(1).to({scaleX:0.7384,scaleY:0.7384,x:241.5,y:170.35},0).wait(1).to({scaleX:0.6921,scaleY:0.6921,x:235.95,y:170.3},0).wait(1).to({scaleX:0.6529,scaleY:0.6529,x:231.25,y:170.2},0).wait(1).to({scaleX:0.6201,scaleY:0.6201,x:227.3,y:170.1},0).wait(1).to({scaleX:0.5924,scaleY:0.5924,x:224,y:170},0).wait(1).to({scaleX:0.569,scaleY:0.569,x:221.2},0).wait(1).to({scaleX:0.5488,scaleY:0.5488,x:218.8,y:169.9},0).wait(1).to({scaleX:0.5331,scaleY:0.5331,x:216.9},0).wait(1).to({scaleX:0.5249,scaleY:0.5249,x:215.95,y:169.85},0).wait(1).to({scaleX:0.5194,scaleY:0.5194,x:215.3,y:169.9},0).wait(1).to({scaleX:0.5154,scaleY:0.5154,x:214.8,y:169.85},0).wait(1).to({scaleX:0.5123,scaleY:0.5123,x:214.4},0).wait(1).to({scaleX:0.5099,scaleY:0.5099,x:214.15,y:169.9},0).wait(1).to({scaleX:0.508,scaleY:0.508,x:213.9,y:169.85},0).wait(1).to({scaleX:0.5064,scaleY:0.5064,x:213.75},0).wait(1).to({scaleX:0.5052,scaleY:0.5052,x:213.6,y:169.8},0).wait(1).to({scaleX:0.5043,scaleY:0.5043,x:213.5,y:169.85},0).wait(1).to({scaleX:0.5036,scaleY:0.5036,x:213.4,y:169.8},0).wait(1).to({scaleX:0.5031,scaleY:0.5031,x:213.35,y:169.85},0).wait(1).to({scaleX:0.5028,scaleY:0.5028,x:213.3},0).wait(1).to({scaleX:0.5026,scaleY:0.5026},0).wait(3).to({regX:31.1,regY:31.1,scaleX:0.5027,scaleY:0.5027,x:213.6,y:168.8},0).wait(41));

	// coin
	this.instance_10 = new lib.FLOATING_OBJECT_horizontalcopy();
	this.instance_10.setTransform(415.9,393.75,5.7897,5.7897,0,0,0,30.9,31.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(185).to({_off:false},0).wait(1).to({regX:31.4,regY:33.2,scaleX:5.7823,scaleY:5.7823,x:418.35,y:405.5},0).wait(1).to({scaleX:5.7695,scaleY:5.7695,x:417.6,y:404.85},0).wait(1).to({scaleX:5.7508,scaleY:5.7508,x:416.55,y:403.85},0).wait(1).to({scaleX:5.7254,scaleY:5.7254,x:415.15,y:402.5},0).wait(1).to({scaleX:5.6923,scaleY:5.6923,x:413.25,y:400.75},0).wait(1).to({scaleX:5.6507,scaleY:5.6507,x:410.9,y:398.55},0).wait(1).to({scaleX:5.5991,scaleY:5.5991,x:407.95,y:395.85},0).wait(1).to({scaleX:5.5359,scaleY:5.5359,x:404.4,y:392.5},0).wait(1).to({scaleX:5.4594,scaleY:5.4594,x:400.05,y:388.45},0).wait(1).to({scaleX:5.367,scaleY:5.367,x:394.8,y:383.55},0).wait(1).to({scaleX:5.2562,scaleY:5.2562,x:388.55,y:377.7},0).wait(1).to({scaleX:5.1236,scaleY:5.1236,x:381.05,y:370.7},0).wait(1).to({scaleX:4.9655,scaleY:4.9655,x:372.05,y:362.3},0).wait(1).to({scaleX:4.7785,scaleY:4.7785,x:361.5,y:352.45},0).wait(1).to({scaleX:4.5605,scaleY:4.5605,x:349.15,y:340.9},0).wait(1).to({scaleX:4.3123,scaleY:4.3123,x:335.1,y:327.8},0).wait(1).to({scaleX:4.0401,scaleY:4.0401,x:319.65,y:313.45},0).wait(1).to({scaleX:3.7553,scaleY:3.7553,x:303.5,y:298.4},0).wait(1).to({scaleX:3.4716,scaleY:3.4716,x:287.45,y:283.35},0).wait(1).to({scaleX:3.2005,scaleY:3.2005,x:272.1,y:269.05},0).wait(1).to({scaleX:2.9487,scaleY:2.9487,x:257.85,y:255.75},0).wait(1).to({scaleX:2.7185,scaleY:2.7185,x:244.8,y:243.55},0).wait(1).to({scaleX:2.5098,scaleY:2.5098,x:233,y:232.5},0).wait(1).to({scaleX:2.3208,scaleY:2.3208,x:222.25,y:222.55},0).wait(1).to({scaleX:2.1496,scaleY:2.1496,x:212.6,y:213.45},0).wait(1).to({scaleX:1.9942,scaleY:1.9942,x:203.75,y:205.25},0).wait(1).to({scaleX:1.8526,scaleY:1.8526,x:195.75,y:197.8},0).wait(1).to({scaleX:1.7233,scaleY:1.7233,x:188.45,y:190.95},0).wait(1).to({scaleX:1.6047,scaleY:1.6047,x:181.75,y:184.7},0).wait(1).to({scaleX:1.4958,scaleY:1.4958,x:175.55,y:178.9},0).wait(1).to({scaleX:1.3954,scaleY:1.3954,x:169.85,y:173.65},0).wait(1).to({scaleX:1.3115,scaleY:1.3115,x:165.15,y:169.2},0).wait(1).to({scaleX:1.2571,scaleY:1.2571,x:162,y:166.35},0).wait(1).to({scaleX:1.2167,scaleY:1.2167,x:159.75,y:164.2},0).wait(1).to({scaleX:1.1846,scaleY:1.1846,x:157.95,y:162.5},0).wait(1).to({scaleX:1.1581,scaleY:1.1581,x:156.4,y:161.1},0).wait(1).to({scaleX:1.1357,scaleY:1.1357,x:155.15,y:159.9},0).wait(1).to({scaleX:1.1165,scaleY:1.1165,x:154.05,y:158.85},0).wait(1).to({scaleX:1.0998,scaleY:1.0998,x:153.15,y:158},0).wait(1).to({scaleX:1.0852,scaleY:1.0852,x:152.35,y:157.25},0).wait(1).to({scaleX:1.0725,scaleY:1.0725,x:151.6,y:156.55},0).wait(1).to({scaleX:1.0613,scaleY:1.0613,x:150.9,y:156},0).wait(1).to({scaleX:1.0514,scaleY:1.0514,x:150.35,y:155.45},0).wait(1).to({scaleX:1.0427,scaleY:1.0427,x:149.9,y:154.95},0).wait(1).to({scaleX:1.0351,scaleY:1.0351,x:149.45,y:154.55},0).wait(1).to({scaleX:1.0285,scaleY:1.0285,x:149.1,y:154.25},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,x:148.75,y:153.9},0).wait(1).to({scaleX:1.0177,scaleY:1.0177,x:148.45,y:153.65},0).wait(1).to({scaleX:1.0134,scaleY:1.0134,x:148.2,y:153.45},0).wait(1).to({scaleX:1.0098,scaleY:1.0098,x:148,y:153.25},0).wait(1).to({scaleX:1.0068,scaleY:1.0068,x:147.85,y:153.1},0).wait(1).to({scaleX:1.0044,scaleY:1.0044,x:147.75,y:152.95},0).wait(1).to({scaleX:1.0025,scaleY:1.0025,x:147.65,y:152.85},0).wait(1).to({scaleX:1.001,scaleY:1.001,x:147.55,y:152.8},0).wait(1).to({scaleX:1,scaleY:1,x:147.5,y:152.75},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,x:147.45,y:152.7},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,x:147.4,y:152.65},0).wait(1).to({scaleX:0.9992,scaleY:0.9992},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,x:147.45,y:152.7},0).wait(1).to({scaleX:0.9998,scaleY:0.9998},0).wait(1).to({regX:31,regY:31,scaleX:1,scaleY:1,x:147.05,y:150.65},0).wait(298).to({regX:31.4,regY:33.2,scaleX:0.9982,scaleY:0.9982,x:147.55,y:152.85},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,x:147.85,y:152.8},0).wait(1).to({scaleX:0.9883,scaleY:0.9883,x:148.25},0).wait(1).to({scaleX:0.9791,scaleY:0.9791,x:148.9},0).wait(1).to({scaleX:0.966,scaleY:0.966,x:149.85},0).wait(1).to({scaleX:0.9475,scaleY:0.9475,x:151.1},0).wait(1).to({scaleX:0.922,scaleY:0.922,x:152.9},0).wait(1).to({scaleX:0.8874,scaleY:0.8874,x:155.3},0).wait(1).to({scaleX:0.8426,scaleY:0.8426,x:158.45,y:152.75},0).wait(1).to({scaleX:0.7905,scaleY:0.7905,x:162.05,y:152.8},0).wait(1).to({scaleX:0.7384,scaleY:0.7384,x:165.75,y:152.75},0).wait(1).to({scaleX:0.6921,scaleY:0.6921,x:169,y:152.8},0).wait(1).to({scaleX:0.6529,scaleY:0.6529,x:171.7},0).wait(1).to({scaleX:0.6201,scaleY:0.6201,x:174,y:152.75},0).wait(1).to({scaleX:0.5924,scaleY:0.5924,x:175.95},0).wait(1).to({scaleX:0.569,scaleY:0.569,x:177.6},0).wait(1).to({scaleX:0.5488,scaleY:0.5488,x:179},0).wait(1).to({scaleX:0.5331,scaleY:0.5331,x:180.1},0).wait(1).to({scaleX:0.5249,scaleY:0.5249,x:180.7,y:152.7},0).wait(1).to({scaleX:0.5194,scaleY:0.5194,x:181.05,y:152.75},0).wait(1).to({scaleX:0.5154,scaleY:0.5154,x:181.35},0).wait(1).to({scaleX:0.5123,scaleY:0.5123,x:181.55},0).wait(1).to({scaleX:0.5099,scaleY:0.5099,x:181.7},0).wait(1).to({scaleX:0.508,scaleY:0.508,x:181.85},0).wait(1).to({scaleX:0.5064,scaleY:0.5064,x:181.95},0).wait(1).to({scaleX:0.5052,scaleY:0.5052,x:182.05,y:152.7},0).wait(1).to({scaleX:0.5043,scaleY:0.5043,x:182.15,y:152.75},0).wait(1).to({scaleX:0.5036,scaleY:0.5036,y:152.7},0).wait(1).to({scaleX:0.5031,scaleY:0.5031,x:182.2,y:152.75},0).wait(1).to({scaleX:0.5028,scaleY:0.5028,x:182.25},0).wait(1).to({scaleX:0.5026,scaleY:0.5026},0).wait(3).to({regX:31.1,regY:31.2,scaleX:0.5027,scaleY:0.5027,x:182.1,y:151.7},0).to({_off:true},41).wait(2));

	// coin
	this.instance_11 = new lib.FLOATING_OBJECT_horizontal_1();
	this.instance_11.setTransform(-90.85,334.45,5.4136,5.4136,0,0,0,30.9,31.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(184).to({_off:false},0).wait(1).to({regX:29.5,regY:33.2,scaleX:5.4084,scaleY:5.4084,x:-98.25,y:345.6},0).wait(1).to({scaleX:5.4,scaleY:5.4,x:-98.05,y:345.3},0).wait(1).to({scaleX:5.3881,scaleY:5.3881,x:-97.7,y:344.85},0).wait(1).to({scaleX:5.3724,scaleY:5.3724,x:-97.2,y:344.2},0).wait(1).to({scaleX:5.3525,scaleY:5.3525,x:-96.65,y:343.45},0).wait(1).to({scaleX:5.3279,scaleY:5.3279,x:-96,y:342.55},0).wait(1).to({scaleX:5.2982,scaleY:5.2982,x:-95.1,y:341.4},0).wait(1).to({scaleX:5.2626,scaleY:5.2626,x:-94.05,y:340},0).wait(1).to({scaleX:5.2205,scaleY:5.2205,x:-92.85,y:338.4},0).wait(1).to({scaleX:5.1711,scaleY:5.1711,x:-91.45,y:336.5},0).wait(1).to({scaleX:5.1133,scaleY:5.1133,x:-89.75,y:334.25},0).wait(1).to({scaleX:5.046,scaleY:5.046,x:-87.85,y:331.7},0).wait(1).to({scaleX:4.9678,scaleY:4.9678,x:-85.6,y:328.7},0).wait(1).to({scaleX:4.8773,scaleY:4.8773,x:-82.95,y:325.25},0).wait(1).to({scaleX:4.7726,scaleY:4.7726,x:-79.95,y:321.2},0).wait(1).to({scaleX:4.652,scaleY:4.652,x:-76.5,y:316.6},0).wait(1).to({scaleX:4.5137,scaleY:4.5137,x:-72.5,y:311.25},0).wait(1).to({scaleX:4.3566,scaleY:4.3566,x:-68,y:305.25},0).wait(1).to({scaleX:4.1805,scaleY:4.1805,x:-62.95,y:298.5},0).wait(1).to({scaleX:3.9871,scaleY:3.9871,x:-57.4,y:291.05},0).wait(1).to({scaleX:3.7806,scaleY:3.7806,x:-51.4,y:283.1},0).wait(1).to({scaleX:3.5671,scaleY:3.5671,x:-45.25,y:274.95},0).wait(1).to({scaleX:3.3534,scaleY:3.3534,x:-39.1,y:266.75},0).wait(1).to({scaleX:3.1457,scaleY:3.1457,x:-33.15,y:258.8},0).wait(1).to({scaleX:2.9482,scaleY:2.9482,x:-27.5,y:251.2},0).wait(1).to({scaleX:2.7633,scaleY:2.7633,x:-22.15,y:244.1},0).wait(1).to({scaleX:2.5917,scaleY:2.5917,x:-17.2,y:237.5},0).wait(1).to({scaleX:2.4332,scaleY:2.4332,x:-12.6,y:231.45},0).wait(1).to({scaleX:2.287,scaleY:2.287,x:-8.45,y:225.85},0).wait(1).to({scaleX:2.1522,scaleY:2.1522,x:-4.55,y:220.65},0).wait(1).to({scaleX:2.0277,scaleY:2.0277,x:-0.95,y:215.85},0).wait(1).to({scaleX:1.9125,scaleY:1.9125,x:2.35,y:211.45},0).wait(1).to({scaleX:1.8057,scaleY:1.8057,x:5.4,y:207.35},0).wait(1).to({scaleX:1.7066,scaleY:1.7066,x:8.3,y:203.55},0).wait(1).to({scaleX:1.6143,scaleY:1.6143,x:10.9,y:200},0).wait(1).to({scaleX:1.5283,scaleY:1.5283,x:13.45,y:196.7},0).wait(1).to({scaleX:1.4479,scaleY:1.4479,x:15.7,y:193.6},0).wait(1).to({scaleX:1.3727,scaleY:1.3727,x:17.9,y:190.7},0).wait(1).to({scaleX:1.3051,scaleY:1.3051,x:19.85,y:188.15},0).wait(1).to({scaleX:1.2581,scaleY:1.2581,x:21.2,y:186.3},0).wait(1).to({scaleX:1.2229,scaleY:1.2229,x:22.25,y:185},0).wait(1).to({scaleX:1.1946,scaleY:1.1946,x:23.05,y:183.9},0).wait(1).to({scaleX:1.1709,scaleY:1.1709,x:23.7,y:182.95},0).wait(1).to({scaleX:1.1506,scaleY:1.1506,x:24.3,y:182.2},0).wait(1).to({scaleX:1.1329,scaleY:1.1329,x:24.8,y:181.5},0).wait(1).to({scaleX:1.1174,scaleY:1.1174,x:25.25,y:180.95},0).wait(1).to({scaleX:1.1037,scaleY:1.1037,x:25.65,y:180.4},0).wait(1).to({scaleX:1.0914,scaleY:1.0914,x:26,y:179.95},0).wait(1).to({scaleX:1.0804,scaleY:1.0804,x:26.3,y:179.5},0).wait(1).to({scaleX:1.0705,scaleY:1.0705,x:26.6,y:179.15},0).wait(1).to({scaleX:1.0617,scaleY:1.0617,x:26.85,y:178.8},0).wait(1).to({scaleX:1.0537,scaleY:1.0537,x:27.1,y:178.5},0).wait(1).to({scaleX:1.0465,scaleY:1.0465,x:27.25,y:178.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:27.5,y:178},0).wait(1).to({scaleX:1.0342,scaleY:1.0342,x:27.65,y:177.75},0).wait(1).to({scaleX:1.0289,scaleY:1.0289,x:27.8,y:177.5},0).wait(1).to({scaleX:1.0242,scaleY:1.0242,x:27.9,y:177.35},0).wait(1).to({scaleX:1.0201,scaleY:1.0201,x:28.05,y:177.2},0).wait(1).to({scaleX:1.0164,scaleY:1.0164,x:28.15,y:177.05},0).wait(1).to({scaleX:1.0131,scaleY:1.0131,x:28.25,y:176.95},0).wait(1).to({scaleX:1.0103,scaleY:1.0103,x:28.35,y:176.85},0).wait(1).to({scaleX:1.0078,scaleY:1.0078,x:28.4,y:176.7},0).wait(1).to({scaleX:1.0057,scaleY:1.0057,x:28.45,y:176.65},0).wait(1).to({scaleX:1.0039,scaleY:1.0039,x:28.5,y:176.6},0).wait(1).to({scaleX:1.0025,scaleY:1.0025,x:28.55,y:176.55},0).wait(1).to({scaleX:1.0013,scaleY:1.0013,x:28.6,y:176.5},0).wait(1).to({scaleX:1.0004,scaleY:1.0004,y:176.45},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,x:28.65,y:176.4},0).wait(1).to({scaleX:0.9994,scaleY:0.9994},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,y:176.35},0).wait(2).to({scaleX:0.9994,scaleY:0.9994,y:176.4},0).wait(1).to({scaleX:0.9996,scaleY:0.9996},0).wait(1).to({scaleX:0.9999,scaleY:0.9999},0).wait(1).to({regX:31,regY:31,scaleX:1,scaleY:1,x:30.05,y:174.3},0).wait(286).to({regX:29.5,regY:33.2,scaleX:0.9982,scaleY:0.9982,x:28.85,y:176.45},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,x:29.45,y:176.4},0).wait(1).to({scaleX:0.9883,scaleY:0.9883,x:30.45,y:176.3},0).wait(1).to({scaleX:0.9791,scaleY:0.9791,x:32,y:176.15},0).wait(1).to({scaleX:0.966,scaleY:0.966,x:34.2,y:175.95},0).wait(1).to({scaleX:0.9475,scaleY:0.9475,x:37.25,y:175.7},0).wait(1).to({scaleX:0.922,scaleY:0.922,x:41.5,y:175.35},0).wait(1).to({scaleX:0.8874,scaleY:0.8874,x:47.3,y:174.85},0).wait(1).to({scaleX:0.8426,scaleY:0.8426,x:54.7,y:174.2},0).wait(1).to({scaleX:0.7905,scaleY:0.7905,x:63.35,y:173.5},0).wait(1).to({scaleX:0.7384,scaleY:0.7384,x:72.05,y:172.75},0).wait(1).to({scaleX:0.6921,scaleY:0.6921,x:79.75,y:172.1},0).wait(1).to({scaleX:0.6529,scaleY:0.6529,x:86.3,y:171.55},0).wait(1).to({scaleX:0.6201,scaleY:0.6201,x:91.75,y:171.1},0).wait(1).to({scaleX:0.5924,scaleY:0.5924,x:96.35,y:170.65},0).wait(1).to({scaleX:0.569,scaleY:0.569,x:100.25,y:170.35},0).wait(1).to({scaleX:0.5488,scaleY:0.5488,x:103.6,y:170.05},0).wait(1).to({scaleX:0.5331,scaleY:0.5331,x:106.25,y:169.8},0).wait(1).to({scaleX:0.5249,scaleY:0.5249,x:107.6,y:169.7},0).wait(1).to({scaleX:0.5194,scaleY:0.5194,x:108.45,y:169.65},0).wait(1).to({scaleX:0.5154,scaleY:0.5154,x:109.15,y:169.55},0).wait(1).to({scaleX:0.5123,scaleY:0.5123,x:109.65,y:169.5},0).wait(1).to({scaleX:0.5099,scaleY:0.5099,x:110.1},0).wait(1).to({scaleX:0.508,scaleY:0.508,x:110.4,y:169.45},0).wait(1).to({scaleX:0.5064,scaleY:0.5064,x:110.65},0).wait(1).to({scaleX:0.5052,scaleY:0.5052,x:110.85,y:169.4},0).wait(1).to({scaleX:0.5043,scaleY:0.5043,x:111.05},0).wait(1).to({scaleX:0.5036,scaleY:0.5036,x:111.1},0).wait(1).to({scaleX:0.5031,scaleY:0.5031,x:111.2},0).wait(1).to({scaleX:0.5028,scaleY:0.5028,x:111.25},0).wait(1).to({scaleX:0.5026,scaleY:0.5026,x:111.3},0).wait(3).to({regX:31.1,regY:31.1,scaleX:0.5027,scaleY:0.5027,x:112.1,y:168.35},0).to({_off:true},41).wait(1));

	// coin
	this.instance_12 = new lib.FLOATING_OBJECT_horizontal();
	this.instance_12.setTransform(283.35,112.85,1.0717,1.0717,0,0,0,31.1,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(64).to({regX:30.5,regY:33.2,scaleX:1.0714,scaleY:1.0714,x:282.75,y:115.1},0).wait(1).to({scaleX:1.0709,scaleY:1.0709,x:282.85,y:115.15},0).wait(1).to({scaleX:1.0702,scaleY:1.0702,x:283.05,y:115.3},0).wait(1).to({scaleX:1.0692,scaleY:1.0692,x:283.3,y:115.45},0).wait(1).to({scaleX:1.068,scaleY:1.068,x:283.6,y:115.65},0).wait(1).to({scaleX:1.0664,scaleY:1.0664,x:284.05,y:115.9},0).wait(1).to({scaleX:1.0644,scaleY:1.0644,x:284.55,y:116.2},0).wait(1).to({scaleX:1.062,scaleY:1.062,x:285.2,y:116.55},0).wait(1).to({scaleX:1.0591,scaleY:1.0591,x:285.95,y:117},0).wait(1).to({scaleX:1.0556,scaleY:1.0556,x:286.9,y:117.55},0).wait(1).to({scaleX:1.0514,scaleY:1.0514,x:288,y:118.2},0).wait(1).to({scaleX:1.0464,scaleY:1.0464,x:289.3,y:119},0).wait(1).to({scaleX:1.0404,scaleY:1.0404,x:290.95,y:119.95},0).wait(1).to({scaleX:1.0333,scaleY:1.0333,x:292.75,y:121.05},0).wait(1).to({scaleX:1.0251,scaleY:1.0251,x:294.95,y:122.35},0).wait(1).to({scaleX:1.0157,scaleY:1.0157,x:297.5,y:123.8},0).wait(1).to({scaleX:1.0053,scaleY:1.0053,x:300.15,y:125.45},0).wait(1).to({scaleX:0.9945,scaleY:0.9945,x:303.05,y:127.1},0).wait(1).to({scaleX:0.9838,scaleY:0.9838,x:305.85,y:128.8},0).wait(1).to({scaleX:0.9735,scaleY:0.9735,x:308.6,y:130.4},0).wait(1).to({scaleX:0.964,scaleY:0.964,x:311.1,y:131.9},0).wait(1).to({scaleX:0.9553,scaleY:0.9553,x:313.45,y:133.25},0).wait(1).to({scaleX:0.9473,scaleY:0.9473,x:315.5,y:134.5},0).wait(1).to({scaleX:0.9402,scaleY:0.9402,x:317.4,y:135.6},0).wait(1).to({scaleX:0.9337,scaleY:0.9337,x:319.15,y:136.65},0).wait(1).to({scaleX:0.9278,scaleY:0.9278,x:320.65,y:137.55},0).wait(1).to({scaleX:0.9224,scaleY:0.9224,x:322.1,y:138.4},0).wait(1).to({scaleX:0.9175,scaleY:0.9175,x:323.4,y:139.15},0).wait(1).to({scaleX:0.913,scaleY:0.913,x:324.55,y:139.9},0).wait(1).to({scaleX:0.9089,scaleY:0.9089,x:325.65,y:140.55},0).wait(1).to({scaleX:0.9051,scaleY:0.9051,x:326.65,y:141.15},0).wait(1).to({scaleX:0.9019,scaleY:0.9019,x:327.5,y:141.65},0).wait(1).to({scaleX:0.8999,scaleY:0.8999,x:328.05,y:142},0).wait(1).to({scaleX:0.8983,scaleY:0.8983,x:328.45,y:142.15},0).wait(1).to({scaleX:0.8971,scaleY:0.8971,x:328.75,y:142.4},0).wait(1).to({scaleX:0.8961,scaleY:0.8961,x:329.05,y:142.55},0).wait(1).to({scaleX:0.8953,scaleY:0.8953,x:329.25,y:142.65},0).wait(1).to({scaleX:0.8945,scaleY:0.8945,x:329.45,y:142.8},0).wait(1).to({scaleX:0.8939,scaleY:0.8939,x:329.6,y:142.9},0).wait(1).to({scaleX:0.8934,scaleY:0.8934,x:329.75,y:142.95},0).wait(1).to({scaleX:0.8929,scaleY:0.8929,x:329.9,y:143.05},0).wait(1).to({scaleX:0.8924,scaleY:0.8924,x:330,y:143.15},0).wait(1).to({scaleX:0.8921,scaleY:0.8921,x:330.1},0).wait(1).to({scaleX:0.8917,scaleY:0.8917,x:330.2,y:143.2},0).wait(1).to({scaleX:0.8915,scaleY:0.8915,x:330.3,y:143.25},0).wait(1).to({scaleX:0.8912,scaleY:0.8912,x:330.35,y:143.3},0).wait(1).to({scaleX:0.891,scaleY:0.891,y:143.35},0).wait(1).to({scaleX:0.8908,scaleY:0.8908,x:330.45},0).wait(1).to({scaleX:0.8906,scaleY:0.8906,y:143.4},0).wait(1).to({scaleX:0.8905,scaleY:0.8905,x:330.5},0).wait(1).to({scaleX:0.8904,scaleY:0.8904,x:330.55,y:143.45},0).wait(1).to({scaleX:0.8903,scaleY:0.8903,x:330.6},0).wait(1).to({scaleX:0.8902,scaleY:0.8902},0).wait(2).to({scaleX:0.8901,scaleY:0.8901},0).wait(1).to({x:330.65,y:143.5},0).wait(5).to({regX:31.1,regY:31.1,x:331.2,y:141.65},0).wait(1).to({y:491.65},0).wait(418).to({scaleX:1.8913,scaleY:1.8913,x:332.35,y:99.6},0).wait(1).to({regX:30.5,regY:33.2,scaleX:1.8884,scaleY:1.8884,x:331.05,y:103.6},0).wait(1).to({scaleX:1.8823,scaleY:1.8823,x:330.65,y:103.7},0).wait(1).to({scaleX:1.8721,scaleY:1.8721,x:330.05,y:103.85},0).wait(1).to({scaleX:1.857,scaleY:1.857,x:329.2,y:104.05},0).wait(1).to({scaleX:1.8352,scaleY:1.8352,x:327.85,y:104.35},0).wait(1).to({scaleX:1.8048,scaleY:1.8048,x:326.1,y:104.75},0).wait(1).to({scaleX:1.7628,scaleY:1.7628,x:323.6,y:105.35},0).wait(1).to({scaleX:1.7057,scaleY:1.7057,x:320.2,y:106.2},0).wait(1).to({scaleX:1.6319,scaleY:1.6319,x:315.8,y:107.25},0).wait(1).to({scaleX:1.5461,scaleY:1.5461,x:310.75,y:108.45},0).wait(1).to({scaleX:1.4602,scaleY:1.4602,x:305.7,y:109.65},0).wait(1).to({scaleX:1.3838,scaleY:1.3838,x:301.15,y:110.7},0).wait(1).to({scaleX:1.3192,scaleY:1.3192,x:297.35,y:111.6},0).wait(1).to({scaleX:1.2651,scaleY:1.2651,x:294.15,y:112.35},0).wait(1).to({scaleX:1.2196,scaleY:1.2196,x:291.45,y:113},0).wait(1).to({scaleX:1.1809,scaleY:1.1809,x:289.1,y:113.5},0).wait(1).to({scaleX:1.1477,scaleY:1.1477,x:287.15,y:114},0).wait(1).to({scaleX:1.1219,scaleY:1.1219,x:285.6,y:114.35},0).wait(1).to({scaleX:1.1082,scaleY:1.1082,x:284.85,y:114.55},0).wait(1).to({scaleX:1.0992,scaleY:1.0992,x:284.3,y:114.65},0).wait(1).to({scaleX:1.0926,scaleY:1.0926,x:283.9,y:114.75},0).wait(1).to({scaleX:1.0875,scaleY:1.0875,x:283.6,y:114.85},0).wait(1).to({scaleX:1.0835,scaleY:1.0835,x:283.35},0).wait(1).to({scaleX:1.0804,scaleY:1.0804,x:283.2,y:114.9},0).wait(1).to({scaleX:1.0778,scaleY:1.0778,x:283,y:115},0).wait(1).to({scaleX:1.0759,scaleY:1.0759,x:282.9},0).wait(1).to({scaleX:1.0743,scaleY:1.0743,x:282.8},0).wait(1).to({scaleX:1.0732,scaleY:1.0732,x:282.75,y:115.05},0).wait(1).to({scaleX:1.0724,scaleY:1.0724,x:282.7},0).wait(1).to({scaleX:1.0719,scaleY:1.0719},0).wait(1).to({scaleX:1.0716,scaleY:1.0716,x:282.65,y:115.1},0).wait(1).to({scaleX:1.0715,scaleY:1.0715,y:115.05},0).wait(1).to({scaleX:1.0716,scaleY:1.0716,y:115.1},0).wait(1).to({regX:31.1,regY:31.1,scaleX:1.0717,scaleY:1.0717,x:283.35,y:112.85},0).wait(43));

	// coin
	this.instance_13 = new lib.FLOATING_OBJECT_horizontalcopy();
	this.instance_13.setTransform(288.4,198.5,2.0496,2.0496,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(64).to({regX:31.4,regY:33.2,scaleX:2.049,scaleY:2.049,x:289.25,y:203},0).wait(1).to({scaleX:2.0481,scaleY:2.0481,x:289.35,y:203.05},0).wait(1).to({scaleX:2.0467,scaleY:2.0467,x:289.55,y:203.1},0).wait(1).to({scaleX:2.0449,scaleY:2.0449,x:289.8,y:203.15},0).wait(1).to({scaleX:2.0425,scaleY:2.0425,x:290.15,y:203.25},0).wait(1).to({scaleX:2.0395,scaleY:2.0395,x:290.55,y:203.35},0).wait(1).to({scaleX:2.0357,scaleY:2.0357,x:291,y:203.5},0).wait(1).to({scaleX:2.0312,scaleY:2.0312,x:291.7,y:203.7},0).wait(1).to({scaleX:2.0256,scaleY:2.0256,x:292.4,y:203.9},0).wait(1).to({scaleX:2.0189,scaleY:2.0189,x:293.3,y:204.2},0).wait(1).to({scaleX:2.0109,scaleY:2.0109,x:294.4,y:204.45},0).wait(1).to({scaleX:2.0013,scaleY:2.0013,x:295.7,y:204.85},0).wait(1).to({scaleX:1.9898,scaleY:1.9898,x:297.25,y:205.3},0).wait(1).to({scaleX:1.9763,scaleY:1.9763,x:299.05,y:205.8},0).wait(1).to({scaleX:1.9605,scaleY:1.9605,x:301.2,y:206.45},0).wait(1).to({scaleX:1.9425,scaleY:1.9425,x:303.65,y:207.15},0).wait(1).to({scaleX:1.9227,scaleY:1.9227,x:306.25,y:207.95},0).wait(1).to({scaleX:1.9021,scaleY:1.9021,x:309.1,y:208.75},0).wait(1).to({scaleX:1.8815,scaleY:1.8815,x:311.85,y:209.5},0).wait(1).to({scaleX:1.8619,scaleY:1.8619,x:314.5,y:210.3},0).wait(1).to({scaleX:1.8436,scaleY:1.8436,x:317,y:211},0).wait(1).to({scaleX:1.827,scaleY:1.827,x:319.2,y:211.65},0).wait(1).to({scaleX:1.8118,scaleY:1.8118,x:321.25,y:212.25},0).wait(1).to({scaleX:1.7981,scaleY:1.7981,x:323.1,y:212.8},0).wait(1).to({scaleX:1.7857,scaleY:1.7857,x:324.75,y:213.3},0).wait(1).to({scaleX:1.7745,scaleY:1.7745,x:326.3,y:213.7},0).wait(1).to({scaleX:1.7642,scaleY:1.7642,x:327.7,y:214.1},0).wait(1).to({scaleX:1.7548,scaleY:1.7548,x:328.95,y:214.5},0).wait(1).to({scaleX:1.7462,scaleY:1.7462,x:330.15,y:214.8},0).wait(1).to({scaleX:1.7383,scaleY:1.7383,x:331.2,y:215.15},0).wait(1).to({scaleX:1.7311,scaleY:1.7311,x:332.15,y:215.4},0).wait(1).to({scaleX:1.725,scaleY:1.725,x:332.95,y:215.65},0).wait(1).to({scaleX:1.721,scaleY:1.721,x:333.55,y:215.85},0).wait(1).to({scaleX:1.7181,scaleY:1.7181,x:333.9,y:215.95},0).wait(1).to({scaleX:1.7158,scaleY:1.7158,x:334.25,y:216},0).wait(1).to({scaleX:1.7139,scaleY:1.7139,x:334.45,y:216.1},0).wait(1).to({scaleX:1.7122,scaleY:1.7122,x:334.7,y:216.15},0).wait(1).to({scaleX:1.7108,scaleY:1.7108,x:334.85,y:216.2},0).wait(1).to({scaleX:1.7096,scaleY:1.7096,x:335.05,y:216.25},0).wait(1).to({scaleX:1.7086,scaleY:1.7086,x:335.2,y:216.3},0).wait(1).to({scaleX:1.7076,scaleY:1.7076,x:335.3,y:216.35},0).wait(1).to({scaleX:1.7068,scaleY:1.7068,x:335.45},0).wait(1).to({scaleX:1.7061,scaleY:1.7061,x:335.5,y:216.4},0).wait(1).to({scaleX:1.7055,scaleY:1.7055,x:335.6},0).wait(1).to({scaleX:1.7049,scaleY:1.7049,x:335.7,y:216.45},0).wait(1).to({scaleX:1.7045,scaleY:1.7045,x:335.75,y:216.5},0).wait(1).to({scaleX:1.704,scaleY:1.704,x:335.8,y:216.45},0).wait(1).to({scaleX:1.7037,scaleY:1.7037,x:335.85,y:216.5},0).wait(1).to({scaleX:1.7034,scaleY:1.7034,x:335.9},0).wait(1).to({scaleX:1.7031,scaleY:1.7031,x:335.95},0).wait(1).to({scaleX:1.7029,scaleY:1.7029,y:216.55},0).wait(1).to({scaleX:1.7027,scaleY:1.7027},0).wait(1).to({scaleX:1.7026,scaleY:1.7026,x:336},0).wait(1).to({scaleX:1.7025,scaleY:1.7025,y:216.5},0).wait(1).to({scaleX:1.7024,scaleY:1.7024},0).wait(1).to({scaleX:1.7023,scaleY:1.7023,x:336.05,y:216.55},0).wait(3).to({scaleX:1.7024,scaleY:1.7024},0).wait(2).to({regX:31,regY:31,x:335.35,y:212.8},0).wait(1).to({y:562.8},0).wait(420).to({scaleX:3.6172,scaleY:3.6172,x:392.3,y:224.05},0).wait(1).to({regX:31.4,regY:33.2,scaleX:3.6123,scaleY:3.6123,x:393.4,y:231.9},0).wait(1).to({scaleX:3.6023,scaleY:3.6023,x:392.7,y:231.7},0).wait(1).to({scaleX:3.586,scaleY:3.586,x:391.6,y:231.4},0).wait(1).to({scaleX:3.5621,scaleY:3.5621,x:390.05,y:230.95},0).wait(1).to({scaleX:3.5285,scaleY:3.5285,x:387.8,y:230.35},0).wait(1).to({scaleX:3.4824,scaleY:3.4824,x:384.7,y:229.45},0).wait(1).to({scaleX:3.4201,scaleY:3.4201,x:380.55,y:228.3},0).wait(1).to({scaleX:3.3367,scaleY:3.3367,x:375,y:226.8},0).wait(1).to({scaleX:3.2272,scaleY:3.2272,x:367.7,y:224.75},0).wait(1).to({scaleX:3.0911,scaleY:3.0911,x:358.6,y:222.25},0).wait(1).to({scaleX:2.9387,scaleY:2.9387,x:348.5,y:219.4},0).wait(1).to({scaleX:2.7885,scaleY:2.7885,x:338.45,y:216.65},0).wait(1).to({scaleX:2.6539,scaleY:2.6539,x:329.5,y:214.15},0).wait(1).to({scaleX:2.5385,scaleY:2.5385,x:321.75,y:212.05},0).wait(1).to({scaleX:2.4404,scaleY:2.4404,x:315.25,y:210.2},0).wait(1).to({scaleX:2.3569,scaleY:2.3569,x:309.65,y:208.65},0).wait(1).to({scaleX:2.2852,scaleY:2.2852,x:304.9,y:207.3},0).wait(1).to({scaleX:2.2231,scaleY:2.2231,x:300.75,y:206.15},0).wait(1).to({scaleX:2.1689,scaleY:2.1689,x:297.15,y:205.15},0).wait(1).to({scaleX:2.1341,scaleY:2.1341,x:294.8,y:204.55},0).wait(1).to({scaleX:2.1137,scaleY:2.1137,x:293.45,y:204.2},0).wait(1).to({scaleX:2.0992,scaleY:2.0992,x:292.5,y:203.9},0).wait(1).to({scaleX:2.0882,scaleY:2.0882,x:291.75,y:203.7},0).wait(1).to({scaleX:2.0794,scaleY:2.0794,x:291.2,y:203.55},0).wait(1).to({scaleX:2.0725,scaleY:2.0725,x:290.7,y:203.4},0).wait(1).to({scaleX:2.0668,scaleY:2.0668,x:290.35,y:203.25},0).wait(1).to({scaleX:2.0622,scaleY:2.0622,x:290,y:203.2},0).wait(1).to({scaleX:2.0586,scaleY:2.0586,x:289.8,y:203.15},0).wait(1).to({scaleX:2.0556,scaleY:2.0556,x:289.6,y:203.1},0).wait(1).to({scaleX:2.0534,scaleY:2.0534,x:289.45,y:203},0).wait(1).to({scaleX:2.0517,scaleY:2.0517,x:289.3},0).wait(1).to({scaleX:2.0505,scaleY:2.0505,x:289.25},0).wait(1).to({scaleX:2.0497,scaleY:2.0497,x:289.2,y:202.95},0).wait(1).to({scaleX:2.0494,scaleY:2.0494,x:289.15,y:203},0).wait(1).to({scaleX:2.0493,scaleY:2.0493},0).wait(1).to({scaleX:2.0494,scaleY:2.0494},0).wait(1).to({regX:31,regY:31,scaleX:2.0496,scaleY:2.0496,x:288.4,y:198.5},0).wait(38));

	// coin
	this.instance_14 = new lib.FLOATING_OBJECT_horizontal_1();
	this.instance_14.setTransform(13.6,175.8,2.0496,2.0496,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(64).to({regX:29.5,regY:33.2,scaleX:2.049,scaleY:2.049,x:10.7,y:180.3},0).wait(1).to({scaleX:2.0481,scaleY:2.0481,x:10.9,y:180.35},0).wait(1).to({scaleX:2.0467,scaleY:2.0467,x:11.3,y:180.4},0).wait(1).to({scaleX:2.0449,scaleY:2.0449,x:11.8,y:180.5},0).wait(1).to({scaleX:2.0425,scaleY:2.0425,x:12.45,y:180.6},0).wait(1).to({scaleX:2.0395,scaleY:2.0395,x:13.25,y:180.75},0).wait(1).to({scaleX:2.0357,scaleY:2.0357,x:14.3,y:181},0).wait(1).to({scaleX:2.0312,scaleY:2.0312,x:15.5,y:181.2},0).wait(1).to({scaleX:2.0256,scaleY:2.0256,x:17,y:181.45},0).wait(1).to({scaleX:2.0189,scaleY:2.0189,x:18.85,y:181.85},0).wait(1).to({scaleX:2.0109,scaleY:2.0109,x:21,y:182.2},0).wait(1).to({scaleX:2.0013,scaleY:2.0013,x:23.65,y:182.7},0).wait(1).to({scaleX:1.9898,scaleY:1.9898,x:26.7,y:183.25},0).wait(1).to({scaleX:1.9763,scaleY:1.9763,x:30.4,y:183.95},0).wait(1).to({scaleX:1.9605,scaleY:1.9605,x:34.7,y:184.75},0).wait(1).to({scaleX:1.9425,scaleY:1.9425,x:39.55,y:185.65},0).wait(1).to({scaleX:1.9227,scaleY:1.9227,x:44.85,y:186.65},0).wait(1).to({scaleX:1.9021,scaleY:1.9021,x:50.5,y:187.7},0).wait(1).to({scaleX:1.8815,scaleY:1.8815,x:56,y:188.7},0).wait(1).to({scaleX:1.8619,scaleY:1.8619,x:61.35,y:189.7},0).wait(1).to({scaleX:1.8436,scaleY:1.8436,x:66.3,y:190.6},0).wait(1).to({scaleX:1.827,scaleY:1.827,x:70.8,y:191.45},0).wait(1).to({scaleX:1.8118,scaleY:1.8118,x:74.9,y:192.2},0).wait(1).to({scaleX:1.7981,scaleY:1.7981,x:78.6,y:192.9},0).wait(1).to({scaleX:1.7857,scaleY:1.7857,x:82,y:193.55},0).wait(1).to({scaleX:1.7745,scaleY:1.7745,x:85.05,y:194.1},0).wait(1).to({scaleX:1.7642,scaleY:1.7642,x:87.8,y:194.6},0).wait(1).to({scaleX:1.7548,scaleY:1.7548,x:90.35,y:195.1},0).wait(1).to({scaleX:1.7462,scaleY:1.7462,x:92.65,y:195.5},0).wait(1).to({scaleX:1.7383,scaleY:1.7383,x:94.85,y:195.9},0).wait(1).to({scaleX:1.7311,scaleY:1.7311,x:96.75,y:196.25},0).wait(1).to({scaleX:1.725,scaleY:1.725,x:98.45,y:196.6},0).wait(1).to({scaleX:1.721,scaleY:1.721,x:99.5,y:196.8},0).wait(1).to({scaleX:1.7181,scaleY:1.7181,x:100.3,y:196.95},0).wait(1).to({scaleX:1.7158,scaleY:1.7158,x:100.9,y:197.05},0).wait(1).to({scaleX:1.7139,scaleY:1.7139,x:101.45,y:197.15},0).wait(1).to({scaleX:1.7122,scaleY:1.7122,x:101.85,y:197.25},0).wait(1).to({scaleX:1.7108,scaleY:1.7108,x:102.25,y:197.3},0).wait(1).to({scaleX:1.7096,scaleY:1.7096,x:102.6,y:197.35},0).wait(1).to({scaleX:1.7086,scaleY:1.7086,x:102.85,y:197.4},0).wait(1).to({scaleX:1.7076,scaleY:1.7076,x:103.15,y:197.45},0).wait(1).to({scaleX:1.7068,scaleY:1.7068,x:103.35,y:197.5},0).wait(1).to({scaleX:1.7061,scaleY:1.7061,x:103.55,y:197.55},0).wait(1).to({scaleX:1.7055,scaleY:1.7055,x:103.7},0).wait(1).to({scaleX:1.7049,scaleY:1.7049,x:103.85,y:197.6},0).wait(1).to({scaleX:1.7045,scaleY:1.7045,x:104,y:197.65},0).wait(1).to({scaleX:1.704,scaleY:1.704,x:104.1,y:197.6},0).wait(1).to({scaleX:1.7037,scaleY:1.7037,x:104.2,y:197.65},0).wait(1).to({scaleX:1.7034,scaleY:1.7034,x:104.3,y:197.7},0).wait(1).to({scaleX:1.7031,scaleY:1.7031,x:104.35},0).wait(1).to({scaleX:1.7029,scaleY:1.7029,x:104.45},0).wait(1).to({scaleX:1.7027,scaleY:1.7027,x:104.5,y:197.75},0).wait(1).to({scaleX:1.7026,scaleY:1.7026},0).wait(1).to({scaleX:1.7025,scaleY:1.7025,y:197.7},0).wait(1).to({scaleX:1.7024,scaleY:1.7024},0).wait(1).to({scaleX:1.7023,scaleY:1.7023,x:104.55},0).wait(3).to({scaleX:1.7024,scaleY:1.7024},0).wait(2).to({regX:31,regY:31.1,x:107.1,y:194.1},0).wait(1).to({y:544.1},0).wait(418).to({regY:31,scaleX:3.6172,scaleY:3.6172,x:-92.65,y:184},0).wait(1).to({regX:29.5,regY:33.2,scaleX:3.6116,scaleY:3.6116,x:-97.65,y:191.85},0).wait(1).to({scaleX:3.5999,scaleY:3.5999,x:-96.85,y:191.75},0).wait(1).to({scaleX:3.5805,scaleY:3.5805,x:-95.55,y:191.6},0).wait(1).to({scaleX:3.5515,scaleY:3.5515,x:-93.55,y:191.4},0).wait(1).to({scaleX:3.5099,scaleY:3.5099,x:-90.6,y:191.15},0).wait(1).to({scaleX:3.4518,scaleY:3.4518,x:-86.6,y:190.7},0).wait(1).to({scaleX:3.3714,scaleY:3.3714,x:-81.05,y:190.1},0).wait(1).to({scaleX:3.2623,scaleY:3.2623,x:-73.45,y:189.25},0).wait(1).to({scaleX:3.121,scaleY:3.121,x:-63.7,y:188.2},0).wait(1).to({scaleX:2.9569,scaleY:2.9569,x:-52.3,y:187},0).wait(1).to({scaleX:2.7927,scaleY:2.7927,x:-40.95,y:185.75},0).wait(1).to({scaleX:2.6466,scaleY:2.6466,x:-30.85,y:184.7},0).wait(1).to({scaleX:2.523,scaleY:2.523,x:-22.25,y:183.75},0).wait(1).to({scaleX:2.4196,scaleY:2.4196,x:-15.1,y:183.05},0).wait(1).to({scaleX:2.3325,scaleY:2.3325,x:-9.1,y:182.4},0).wait(1).to({scaleX:2.2586,scaleY:2.2586,x:-3.9,y:181.85},0).wait(1).to({scaleX:2.1951,scaleY:2.1951,x:0.45,y:181.35},0).wait(1).to({scaleX:2.1456,scaleY:2.1456,x:3.9,y:181},0).wait(1).to({scaleX:2.1195,scaleY:2.1195,x:5.65,y:180.75},0).wait(1).to({scaleX:2.1023,scaleY:2.1023,x:6.85,y:180.65},0).wait(1).to({scaleX:2.0896,scaleY:2.0896,x:7.75,y:180.6},0).wait(1).to({scaleX:2.0799,scaleY:2.0799,x:8.45,y:180.5},0).wait(1).to({scaleX:2.0723,scaleY:2.0723,x:9,y:180.45},0).wait(1).to({scaleX:2.0662,scaleY:2.0662,x:9.4,y:180.4},0).wait(1).to({scaleX:2.0614,scaleY:2.0614,x:9.7,y:180.35},0).wait(1).to({scaleX:2.0576,scaleY:2.0576,x:10,y:180.3},0).wait(1).to({scaleX:2.0547,scaleY:2.0547,x:10.15},0).wait(1).to({scaleX:2.0525,scaleY:2.0525,x:10.35},0).wait(1).to({scaleX:2.051,scaleY:2.051,x:10.45},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:10.5,y:180.25},0).wait(1).to({scaleX:2.0494,scaleY:2.0494,x:10.55,y:180.3},0).wait(1).to({scaleX:2.0493,scaleY:2.0493},0).wait(1).to({scaleX:2.0494,scaleY:2.0494},0).wait(1).to({regX:31,regY:31,scaleX:2.0496,scaleY:2.0496,x:13.6,y:175.8},0).wait(43));

	// PARTICLES_DOTS constant CHAOTIC
	this.instance_15 = new lib.PARTICLES_DOTSconstantCHAOTIC();
	this.instance_15.setTransform(20,140,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(64).to({regX:308.1,regY:230.1,x:208.3,y:170.2},0).wait(1).to({x:208.55,y:170.4},0).wait(1).to({x:208.95,y:170.6},0).wait(1).to({x:209.45,y:170.95},0).wait(1).to({x:210.15,y:171.35},0).wait(1).to({x:211.05,y:171.85},0).wait(1).to({x:212.1,y:172.5},0).wait(1).to({x:213.4,y:173.3},0).wait(1).to({x:215,y:174.25},0).wait(1).to({x:216.95,y:175.4},0).wait(1).to({x:219.25,y:176.8},0).wait(1).to({x:222.05,y:178.45},0).wait(1).to({x:225.35,y:180.45},0).wait(1).to({x:229.25,y:182.8},0).wait(1).to({x:233.8,y:185.5},0).wait(1).to({x:238.95,y:188.65},0).wait(1).to({x:244.65,y:192.05},0).wait(1).to({x:250.6,y:195.6},0).wait(1).to({x:256.5,y:199.15},0).wait(1).to({x:262.2,y:202.55},0).wait(1).to({x:267.45,y:205.7},0).wait(1).to({x:272.25,y:208.6},0).wait(1).to({x:276.6,y:211.2},0).wait(1).to({x:280.55,y:213.6},0).wait(1).to({x:284.1,y:215.7},0).wait(1).to({x:287.35,y:217.65},0).wait(1).to({x:290.3,y:219.45},0).wait(1).to({x:293,y:221.05},0).wait(1).to({x:295.5,y:222.55},0).wait(1).to({x:297.75,y:223.9},0).wait(1).to({x:299.85,y:225.15},0).wait(1).to({x:301.6,y:226.2},0).wait(1).to({x:302.75,y:226.9},0).wait(1).to({x:303.6,y:227.4},0).wait(1).to({x:304.25,y:227.8},0).wait(1).to({x:304.8,y:228.15},0).wait(1).to({x:305.3,y:228.4},0).wait(1).to({x:305.7,y:228.65},0).wait(1).to({x:306.05,y:228.85},0).wait(1).to({x:306.35,y:229.05},0).wait(1).to({x:306.6,y:229.2},0).wait(1).to({x:306.85,y:229.35},0).wait(1).to({x:307.05,y:229.5},0).wait(1).to({x:307.25,y:229.6},0).wait(1).to({x:307.4,y:229.7},0).wait(1).to({x:307.55,y:229.75},0).wait(1).to({x:307.65,y:229.85},0).wait(1).to({x:307.75,y:229.9},0).wait(1).to({x:307.85,y:229.95},0).wait(1).to({x:307.9,y:230},0).wait(1).to({x:308,y:230.05},0).wait(1).to({x:308.05},0).wait(1).to({y:230.1},0).wait(1).to({x:308.1},0).wait(7).to({regX:120,regY:200,x:120,y:200},0).wait(60).to({regX:308.1,regY:230.1,scaleX:0.9996,scaleY:0.9996,x:308,y:230},0).wait(1).to({scaleX:0.999,scaleY:0.999,x:307.8,y:229.85},0).wait(1).to({scaleX:0.9979,scaleY:0.9979,x:307.45,y:229.65},0).wait(1).to({scaleX:0.9965,scaleY:0.9965,x:307.05,y:229.3},0).wait(1).to({scaleX:0.9947,scaleY:0.9947,x:306.45,y:228.85},0).wait(1).to({scaleX:0.9923,scaleY:0.9923,x:305.7,y:228.3},0).wait(1).to({scaleX:0.9892,scaleY:0.9892,x:304.8,y:227.6},0).wait(1).to({scaleX:0.9854,scaleY:0.9854,x:303.6,y:226.75},0).wait(1).to({scaleX:0.9807,scaleY:0.9807,x:302.15,y:225.65},0).wait(1).to({scaleX:0.9749,scaleY:0.9749,x:300.35,y:224.3},0).wait(1).to({scaleX:0.9677,scaleY:0.9677,x:298.15,y:222.65},0).wait(1).to({scaleX:0.9589,scaleY:0.9589,x:295.45,y:220.65},0).wait(1).to({scaleX:0.9484,scaleY:0.9484,x:292.2,y:218.25},0).wait(1).to({scaleX:0.9364,scaleY:0.9364,x:288.5,y:215.45},0).wait(1).to({scaleX:0.9232,scaleY:0.9232,x:284.45,y:212.45},0).wait(1).to({scaleX:0.9098,scaleY:0.9098,x:280.3,y:209.35},0).wait(1).to({scaleX:0.897,scaleY:0.897,x:276.35,y:206.4},0).wait(1).to({scaleX:0.8852,scaleY:0.8852,x:272.75,y:203.7},0).wait(1).to({scaleX:0.8746,scaleY:0.8746,x:269.45,y:201.25},0).wait(1).to({scaleX:0.8652,scaleY:0.8652,x:266.55,y:199.1},0).wait(1).to({scaleX:0.8568,scaleY:0.8568,x:263.95,y:197.15},0).wait(1).to({scaleX:0.8493,scaleY:0.8493,x:261.65,y:195.4},0).wait(1).to({scaleX:0.8426,scaleY:0.8426,x:259.6,y:193.9},0).wait(1).to({scaleX:0.8365,scaleY:0.8365,x:257.75,y:192.5},0).wait(1).to({scaleX:0.8311,scaleY:0.8311,x:256.05,y:191.25},0).wait(1).to({scaleX:0.8262,scaleY:0.8262,x:254.55,y:190.1},0).wait(1).to({scaleX:0.8218,scaleY:0.8218,x:253.2,y:189.1},0).wait(1).to({scaleX:0.8189,scaleY:0.8189,x:252.3,y:188.45},0).wait(1).to({scaleX:0.817,scaleY:0.817,x:251.7,y:188},0).wait(1).to({scaleX:0.8155,scaleY:0.8155,x:251.25,y:187.65},0).wait(1).to({scaleX:0.8143,scaleY:0.8143,x:250.9,y:187.4},0).wait(1).to({scaleX:0.8134,scaleY:0.8134,x:250.6,y:187.15},0).wait(1).to({scaleX:0.8125,scaleY:0.8125,x:250.35,y:186.95},0).wait(1).to({scaleX:0.8118,scaleY:0.8118,x:250.1,y:186.8},0).wait(1).to({scaleX:0.8112,scaleY:0.8112,x:249.95,y:186.65},0).wait(1).to({scaleX:0.8107,scaleY:0.8107,x:249.8,y:186.55},0).wait(1).to({scaleX:0.8103,scaleY:0.8103,x:249.65,y:186.45},0).wait(1).to({scaleX:0.8099,scaleY:0.8099,x:249.55,y:186.35},0).wait(1).to({scaleX:0.8096,scaleY:0.8096,x:249.4,y:186.3},0).wait(1).to({scaleX:0.8093,scaleY:0.8093,x:249.35,y:186.2},0).wait(1).to({scaleX:0.8091,scaleY:0.8091,x:249.25,y:186.15},0).wait(1).to({scaleX:0.8089,scaleY:0.8089,x:249.2,y:186.1},0).wait(1).to({scaleX:0.8087,scaleY:0.8087,x:249.15},0).wait(1).to({scaleX:0.8086,scaleY:0.8086,x:249.1,y:186.05},0).wait(1).to({scaleX:0.8085,scaleY:0.8085},0).wait(1).to({scaleX:0.8084,scaleY:0.8084,x:249.05,y:186},0).wait(2).to({scaleX:0.8083,scaleY:0.8083},0).wait(3).to({scaleX:0.8084,scaleY:0.8084},0).wait(1).to({regX:120,regY:200,x:97,y:161.65},0).to({_off:true},383).wait(2));

	// glow
	this.instance_16 = new lib.Symbol1();
	this.instance_16.setTransform(150.55,128.55,1.2412,1.2412,0,0,0,163.4,163.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},618).wait(2));
	this.instance_16.addEventListener("tick", AdobeAn.handleFilterCache);

	// BACKGROUND
	this.instance_17 = new lib.background_color();
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},618).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-618.3,-868,2668.5,2748.3);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.body.style.margin="0px";
		document.body.style.background = "#ffffff";
		
		var border = new createjs.Shape();
		border.graphics.beginStroke("#999999").setStrokeStyle(2).drawRect(0, 0, lib.properties.width, lib.properties.height);
		stage.addChild(border);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// ALL
	this.instance = new lib._TEMPLATE_all_300250();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(14.6,7.1,501.5,523.6999999999999);
// library properties:
lib.properties = {
	id: '69C616AD3F03554197CFFE0BE1D7617E',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"300x250_atlas_P_1.png", id:"300x250_atlas_P_1"},
		{src:"300x250_atlas_NP_1.jpg", id:"300x250_atlas_NP_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['69C616AD3F03554197CFFE0BE1D7617E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;