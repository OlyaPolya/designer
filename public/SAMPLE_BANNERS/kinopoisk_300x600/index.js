(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.aviator = function() {
	this.initialize(img.aviator);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,538,66);


(lib.Component3 = function() {
	this.initialize(img.Component3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,338);


(lib.LIGHT_YELLOW = function() {
	this.initialize(img.LIGHT_YELLOW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,87);


(lib.pic = function() {
	this.initialize(img.pic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,856);


(lib.shine = function() {
	this.initialize(img.shine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,69);// helper functions:

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


(lib.gradient_radial_001copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.949)","rgba(255,255,255,0.8)","rgba(255,255,255,0.6)","rgba(255,255,255,0.251)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0.361,0.447,0.569,0.675,0.808,0.898,1],0,-1,0,0,-1,94.9).s().p("AqRKSQkQkRAAmBQAAmAEQkRQERkQGAAAQGBAAEREQQEQERAAGAQAAGBkQERQkREQmBAAQmAAAkRkQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient_radial_001copy, new cjs.Rectangle(-93,-93,186,186), null);


(lib.gradient_hor_DARK_002 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.047)","rgba(0,0,0,0.149)","rgba(0,0,0,0.349)","#000000"],[0,0.141,0.329,0.565,1],45,21.3,-45,21.3).s().p("AnBKtIAA1aIODAAIAAVag");
	this.shape.setTransform(45.025,68.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient_hor_DARK_002, new cjs.Rectangle(0,0,90.1,137.1), null);


(lib.gradient_hor_DARK_001 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],45,21.3,-45,21.3).s().p("AnBKtIAA1aIODAAIAAVag");
	this.shape.setTransform(45.025,68.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient_hor_DARK_001, new cjs.Rectangle(0,0,90.1,137.1), null);


(lib.gradient_hole_DARK_001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("APHVZMAAAgpxIC/AAMAAAApxgAyFUZMAAAgpxIC/AAMAAAApxg");
	this.shape.setTransform(123.65,118.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// black_field
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgmzAboMAAAg4EMBMxAAAMAA2A45gAr2SyIfPAAIAA/PI/PAAg");
	this.shape_1.setTransform(97.975,101.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// gradient
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.047)","rgba(0,0,0,0.271)","rgba(0,0,0,0.6)","rgba(0,0,0,0.769)","rgba(0,0,0,0.902)","#000000"],[0.11,0.188,0.243,0.325,0.412,0.565,0.722],0,0,0,0,0,141.5).s().p("AvnPoIAA/PIfPAAIAAfPg");
	this.shape_2.setTransform(122.05,122);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient_hole_DARK_001, new cjs.Rectangle(-150.4,-80.3,496.79999999999995,364.2), null);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shine();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,79,69), null);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#362745","#A32300","#FF5500","#FFCC00","#00FFBB","rgba(255,255,0,0.2)","rgba(0,255,187,0)","rgba(7,214,161,0)"],[0.176,0.263,0.333,0.416,0.514,0.655,0.835,1],-540.4,0,540.4,0).s().p("EhUbBBqMAAAiDTMCo3AAAMAAACDTg");
	this.shape.setTransform(540.4,420.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,1080.8,840.4), null);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF7900").s().p("AjTF0Qg5AAgngnQgogoAAg5IAAnXQAAg4AogoQAngoA5AAIGoAAQA4AAAnAoQAoAoAAA4IAAHXQAAA5goAoQgnAng4AAg");
	this.shape.setTransform(34.8,37.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,69.6,74.4), null);


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
	this.instance = new lib.aviator();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,269,33), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AggA+QgPgIgJgPQgJgPAAgWIAAgCQAAgVAJgPQAKgQAPgIQAQgJASAAQAPAAAOAFQAOAFAJAMQAJALACATIgjAAQgCgMgHgFQgHgGgLAAQgOAAgJALQgIAKAAATIAAABQAAAUAIALQAJAKAOAAQAMAAAHgHQAIgGACgNIAhAAQgBAQgIAMQgHAMgOAHQgOAGgTABQgTAAgQgIg");
	this.shape.setTransform(162.275,45.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFA/QgOgGgJgMQgJgMgCgRIgBgCIAAgCIgPAAIAAA3IglAAIAAiFIAlAAIAAA1IAPAAQADgRAJgMQAJgNAOgHQAMgGASAAQATAAAQAIQAPAIAJAPQAIAQABAUIAAACQgBAVgIAQQgJAPgQAIQgOAJgVgBQgQABgNgHgAADgeQgHAKAAATIAAACQAAATAHALQAHAKAPABQAPgBAHgKQAIgLAAgSIAAgCQAAgTgIgLQgHgLgPABQgOgBgIALg");
	this.shape_1.setTransform(144.8,45.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BDIgDgBIAAgeIABABIAEAAQAHABAEgJQAEgJABgRIABgNIABgTIAAgSIABgOIAAgGIBlAAIAACFIgkAAIAAhqIghAAIgBAaIgCAYQgCAUgEAMQgFANgIAGQgIAHgOAAIgJgBg");
	this.shape_2.setTransform(125.925,45.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBbIAAiUIhFAAIAACUIgqAAIAAi1ICZAAIAAC1g");
	this.shape_3.setTransform(109.375,42.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA+QgPgIgJgPQgJgPAAgWIAAgCQAAgVAJgPQAKgQAPgIQAQgJASAAQAPAAAOAFQAOAFAJAMQAJALACATIgjAAQgCgMgHgFQgHgGgLAAQgOAAgJALQgIAKAAATIAAABQAAAUAIALQAJAKAOAAQAMAAAHgHQAIgGACgNIAhAAQgBAQgIAMQgHAMgOAHQgOAGgTABQgTAAgQgIg");
	this.shape_4.setTransform(86.775,45.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUBDIgsg/IAAA/IgkAAIAAiFIAkAAIAAA6IAqg6IAoAAIgxA9IA0BIg");
	this.shape_5.setTransform(72.975,45.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggA+QgQgJgIgPQgKgPAAgVIAAgCQAAgVAKgPQAIgQAQgIQAPgJATAAQARAAAPAHQAPAHAJAPQAIAPABAYIAAAJIhfAAQABARAIAJQAJAJAOAAQANAAAGgFQAHgFACgIIAjAAQgEAVgQAMQgQALgcABQgUgBgPgHgAAfgNQgBgPgHgIQgIgHgNAAQgMAAgIAIQgHAHgDAPIA7AAIAAAAg");
	this.shape_6.setTransform(57.75,45.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AArBTIgBggIhSAAIgBAgIggAAIAAg7IAIAAQAGgCAEgKQADgIABgPIADggIABgnIBmAAIAABqIATAAIAAA7gAgRggIgBAYIgDASQgCAIgDAGIAtAAIAAhQIgjAAIgBAYg");
	this.shape_7.setTransform(42.45,46.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZBDIAAg3IgxAAIAAA3IgkAAIAAiFIAkAAIAAA1IAxAAIAAg1IAkAAIAACFg");
	this.shape_8.setTransform(26.975,45.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhBbIAAhFIgTAAIgrBFIgsAAIAzhNQgRgEgKgKQgLgMAAgVIAAgBQAAgTAJgNQAJgMAQgGQAPgGAVAAIBAAAIAAC1gAgLg1QgIAGgBAOIAAABQAAAOAIAGQAIAHAPAAIAWAAIAAg2IgWAAQgOAAgIAGg");
	this.shape_9.setTransform(9.875,42.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggA+QgQgJgIgPQgKgPAAgVIAAgCQAAgVAKgPQAIgQAQgIQAPgJATAAQARAAAPAHQAPAHAJAPQAIAPABAYIAAAJIhfAAQABARAIAJQAJAJAOAAQANAAAGgFQAHgFACgIIAjAAQgEAVgQAMQgQALgcABQgUgBgPgHgAAfgNQgBgPgHgIQgIgHgNAAQgMAAgIAIQgHAHgDAPIA7AAIAAAAg");
	this.shape_10.setTransform(228.3,19.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUBDIgsg/IAAA/IgkAAIAAiFIAkAAIAAA6IAqg6IAoAAIgxA9IA0BIg");
	this.shape_11.setTransform(214.425,19.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggA+QgPgIgJgPQgJgPAAgWIAAgCQAAgVAJgPQAKgQAPgIQAQgJASAAQAPAAAOAFQAOAFAJAMQAJALACATIgjAAQgCgMgHgFQgHgGgLAAQgOAAgJALQgIAKAAATIAAABQAAAUAIALQAJAKAOAAQAMAAAHgHQAIgGACgNIAhAAQgBAQgIAMQgHAMgOAHQgOAGgTABQgTAAgQgIg");
	this.shape_12.setTransform(199.325,19.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaBDIAAhYIgzBYIgkAAIAAiFIAkAAIAABYIAzhYIAkAAIAACFg");
	this.shape_13.setTransform(184.075,19.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAYBDIAAhqIguAAIAABqIglAAIAAiFIB3AAIAACFg");
	this.shape_14.setTransform(168.55,19.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAqBTIAAghIhTAAIAAAhIggAAIAAg7IAHAAQAHgDADgIQAEgKACgOIACgfIAAgoIBoAAIAABqIASAAIAAA7gAgQgfIgCAXIgDASQgBAIgDAGIAsAAIAAhQIgiAAIgBAZg");
	this.shape_15.setTransform(153.1,21.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjA9QgQgIgJgPQgJgQAAgUIAAgCQAAgVAJgPQAKgQAPgIQAQgJATAAQAUAAAQAJQAQAIAJAPQAJAQAAAVIAAABQAAAVgJAPQgJAQgQAIQgQAIgUABQgTgBgQgIgAgXgeQgIAKAAAUIAAABQAAATAIALQAJAKAOABQAQgBAIgKQAJgLAAgTIAAgBQAAgTgJgLQgIgLgQAAQgOAAgJALg");
	this.shape_16.setTransform(137.525,19.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXBDIAAhqIguAAIAABqIgkAAIAAiFIB3AAIAACFg");
	this.shape_17.setTransform(122.05,19.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaBDIAAhYIgzBYIgkAAIAAiFIAkAAIAABYIAzhYIAkAAIAACFg");
	this.shape_18.setTransform(106.575,19.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBDIAAhqIgoAAIAAgbIBzAAIAAAbIgoAAIAABqg");
	this.shape_19.setTransform(92.475,19.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag3BDIAAiFIAlAAIAAArIAWAAQAZAAANAMQAOALAAAWIAAAAQAAAWgNAMQgOALgaAAgAgSApIAPAAQALAAAFgFQAGgEAAgKIAAgBQAAgKgGgFQgFgEgLAAIgPAAg");
	this.shape_20.setTransform(79.95,19.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag7BDIgDgBIAAgdIABAAIAEAAQAHAAAEgIQAEgJABgRIABgNIABgSIAAgTIABgOIAAgGIBlAAIAACEIgkAAIAAhqIghAAIgBAbIgCAYQgCATgEANQgFANgIAHQgIAGgOAAIgJgBg");
	this.shape_21.setTransform(64.725,19.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmBaIAXg8Ig1h2IAoAAIAgBQIAdhQIAkAAIhHCyg");
	this.shape_22.setTransform(50.575,21.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AApBDIAAhfIgkBfIgSAAIgkhfIAABfIgcAAIAAiFIAxAAIAdBRIAfhRIAuAAIAACFg");
	this.shape_23.setTransform(33.875,19.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhEBbIAAi1IBHAAQAdAAAQAMQAPAMAAAXIAAABQgBAPgGAKQgIAKgPAEQASADAJAKQAJALAAASIAAABQAAAZgPANQgRANggAAgAgcA/IAcAAQAOAAAIgHQAHgHAAgMIAAgBQAAgNgHgGQgIgHgQAAIgaAAgAgcgPIAYAAQAPAAAGgGQAGgFAAgNIAAgBQABgLgIgFQgGgGgOAAIgYAAg");
	this.shape_24.setTransform(10.9,17.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,238,60.2), null);


(lib.Symbol24copy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AApBDIAAhfIgkBfIgSAAIgkhfIAABfIgcAAIAAiFIAxAAIAdBRIAfhRIAuAAIAACFg");
	this.shape.setTransform(155.425,70.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBDIAAhYIgzBYIgkAAIAAiFIAkAAIAABYIAzhYIAkAAIAACFg");
	this.shape_1.setTransform(138.175,70.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUBDIgsg/IAAA/IgkAAIAAiFIAkAAIAAA6IAqg6IAoAAIgxA9IA0BIg");
	this.shape_2.setTransform(123.925,70.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA+QgPgIgJgPQgJgPAAgWIAAgCQAAgVAJgPQAKgQAPgIQAQgJASAAQAPAAAOAFQAOAFAJAMQAJALACATIgjAAQgCgMgHgFQgHgGgLAAQgOAAgJALQgIAKAAATIAAABQAAAUAIALQAJAKAOAAQAMAAAHgHQAIgGACgNIAhAAQgBAQgIAMQgHAMgOAHQgOAGgTABQgTAAgQgIg");
	this.shape_3.setTransform(108.825,70.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZBDIAAg3IgxAAIAAA3IgkAAIAAiFIAkAAIAAA1IAxAAIAAg1IAkAAIAACFg");
	this.shape_4.setTransform(93.625,70.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggA+QgPgJgKgPQgIgPgBgVIAAgCQABgVAIgPQAKgQAPgIQAQgJASAAQASAAAOAHQAOAHAKAPQAJAPAAAYIAAAJIhgAAQABARAJAJQAIAJAPAAQAMAAAHgFQAHgFABgIIAjAAQgDAVgQAMQgRALgbABQgTgBgQgHgAAfgNQgBgPgIgIQgHgHgNAAQgMAAgHAIQgJAHgCAPIA7AAIAAAAg");
	this.shape_5.setTransform(78.4,70.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBcQgQgJgJgTQgIgSAAgeIAAgIQAAgvATgaQATgbAogCIAKAAIAYgCQAJgBAGgCIAAAcIgJADIgMACIgTACIgIAAQgZACgMAOQgMAPgCAZIABAAQAHgMALgIQAMgHATAAQASAAAOAJQAOAIAHAPQAIAOAAATIAAACQAAAVgJAPQgJAQgQAIQgQAIgUAAQgVAAgPgIgAgXACQgIALgBASIAAACQABASAIALQAIAKAPAAQAQAAAIgKQAJgLAAgTIAAgBQAAgTgIgKQgIgJgQAAQgPAAgJAJg");
	this.shape_6.setTransform(63.075,67.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBCQgKgFgGgIQgGgJgBgOQAAgQAJgJQAKgJAPgEQAPgEAUAAIAPAAIAAgFQAAgMgEgHQgFgGgNAAQgKAAgFAFQgGAFAAAJIgjAAQABgQAIgKQAIgKANgFQANgFAPAAQARAAANAFQAMAFAIALQAGALABASIAABWIgkAAIAAgQQgGAIgJAFQgKAFgPABQgMAAgKgEgAgOANQgJAEAAALQgBAHAGAEQAEAFAKAAQALAAAJgHQAIgGAAgLIAAgLIgOAAQgQAAgIAEg");
	this.shape_7.setTransform(47.55,70.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlBbIgmhEIgoBEIgqAAIA6hcIg2hZIAvAAIAiA9IAig9IArAAIg0BXIA5Beg");
	this.shape_8.setTransform(31.55,68.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggA+QgPgIgJgPQgJgPAAgWIAAgCQAAgVAJgPQAKgQAPgIQAQgJASAAQAPAAAOAFQAOAFAJAMQAJALACATIgjAAQgCgMgHgFQgHgGgLAAQgOAAgJALQgIAKAAATIAAABQAAAUAIALQAJAKAOAAQAMAAAHgHQAIgGACgNIAhAAQgBAQgIAMQgHAMgOAHQgOAGgTABQgTAAgQgIg");
	this.shape_9.setTransform(9.425,70.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24copy2, new cjs.Rectangle(0,0,167.1,85.8), null);


(lib.Symbol24copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AglBCQgKgFgGgIQgHgJAAgOQABgQAIgJQAKgJAPgEQAPgEAUAAIAPAAIAAgFQABgMgGgHQgEgGgNAAQgJAAgGAFQgFAFgBAJIgkAAQACgQAIgKQAIgKANgFQANgFAQAAQAQAAANAFQAMAFAHALQAIALAAASIAABWIgkAAIAAgQQgGAIgKAFQgJAFgPABQgMAAgKgEgAgOANQgJAEAAALQAAAHAEAEQAFAFALAAQAKAAAJgHQAIgGAAgLIAAgLIgPAAQgOAAgJAEg");
	this.shape.setTransform(138.3,45.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBDIAAhfIgkBfIgSAAIgkhfIAABfIgcAAIAAiFIAxAAIAdBRIAfhRIAuAAIAACFg");
	this.shape_1.setTransform(122.025,45.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBCQgKgFgGgIQgHgJAAgOQABgQAIgJQAKgJAPgEQAPgEAUAAIAPAAIAAgFQABgMgGgHQgEgGgNAAQgJAAgGAFQgFAFgBAJIgkAAQACgQAIgKQAIgKANgFQANgFAQAAQAQAAANAFQAMAFAHALQAIALAAASIAABWIgkAAIAAgQQgGAIgKAFQgJAFgPABQgMAAgKgEgAgOANQgJAEAAALQAAAHAEAEQAFAFALAAQAKAAAJgHQAIgGAAgLIAAgLIgPAAQgOAAgJAEg");
	this.shape_2.setTransform(105,45.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEBbIAAiyIAlAAIAAAVQAGgKALgHQALgGAOgBQAQAAANAIQANAIAIAPQAIAPAAAWIAAACQAAAWgIAPQgIAPgNAIQgNAJgQAAQgPgBgLgHQgLgGgFgKIAABCgAgXgzQgJAJAAAUIAAADQAAATAJAKQAIAKAPAAQAPgBAIgJQAIgKAAgTIAAgDQAAgUgJgJQgIgKgOAAQgOAAgJAKg");
	this.shape_3.setTransform(90.475,47.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqBTIAAggIhSAAIgBAgIggAAIAAg7IAHAAQAHgCADgKQAEgIACgPIACggIAAgnIBoAAIAABqIASAAIAAA7gAgRggIgBAYIgDASQgBAIgEAGIAtAAIAAhQIgiAAIgCAYg");
	this.shape_4.setTransform(74.15,46.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA9QgQgIgJgPQgJgQAAgUIAAgCQAAgVAJgPQAKgQAPgIQAQgJATAAQAUAAAQAJQAQAIAJAPQAJAQAAAVIAAABQAAAVgJAPQgJAQgQAIQgQAIgUABQgTgBgQgIgAgXgeQgIAKAAAUIAAABQAAATAIALQAJAKAOABQAQgBAIgKQAJgLAAgTIAAgBQAAgTgJgLQgIgLgQAAQgOAAgJALg");
	this.shape_5.setTransform(58.575,45.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7BDIgDgBIAAgeIABABIAEAAQAHABAEgJQAEgJABgRIABgNIABgTIAAgSIABgOIAAgGIBlAAIAACFIgkAAIAAhqIghAAIgBAaIgCAYQgCAUgEAMQgFANgIAGQgIAHgOAAIgJgBg");
	this.shape_6.setTransform(42.775,45.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggA+QgQgJgIgPQgKgPAAgVIAAgCQAAgVAKgPQAIgQAQgIQAPgJATAAQARAAAPAHQAPAHAIAPQAKAPAAAYIAAAJIhfAAQABARAIAJQAJAJAOAAQANAAAGgFQAHgFACgIIAiAAQgDAVgQAMQgQALgcABQgUgBgPgHgAAfgNQgBgPgHgIQgIgHgNAAQgMAAgIAIQgHAHgDAPIA7AAIAAAAg");
	this.shape_7.setTransform(28.4,45.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AApBDIAAhfIgkBfIgSAAIgkhfIAABfIgcAAIAAiFIAxAAIAdBRIAfhRIAuAAIAACFg");
	this.shape_8.setTransform(11.425,45.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24copy, new cjs.Rectangle(0,0,148.1,60.2), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAYBDIAAgvIgQAAIgbAvIgoAAIAig3QgLgEgHgIQgHgIAAgOIAAgBQAAgUAOgLQANgLAYgBIA7AAIAACFgAgHgjQgGAEAAAJIAAABQAAAJAGAEQAFAFALAAIAPAAIAAglIgPAAQgLAAgFAFg");
	this.shape.setTransform(203.775,19.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBCQgKgFgGgIQgGgJgBgOQABgQAIgJQAKgJAPgEQAQgEATAAIAPAAIAAgFQAAgMgFgHQgEgGgNAAQgKAAgFAFQgGAFAAAJIgjAAQABgQAIgKQAIgKANgFQANgFAPAAQARAAANAFQAMAFAIALQAGALABASIAABWIgkAAIAAgQQgGAIgJAFQgKAFgPABQgMAAgKgEgAgOANQgJAEAAALQgBAHAGAEQAEAFAKAAQALAAAJgHQAIgGAAgLIAAgLIgOAAQgQAAgIAEg");
	this.shape_1.setTransform(189.85,19.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUBDIgsg/IAAA/IgkAAIAAiFIAkAAIAAA6IAqg6IAoAAIgxA9IA0BIg");
	this.shape_2.setTransform(176.675,19.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA+QgPgIgJgPQgJgPAAgWIAAgCQAAgVAJgPQAKgQAPgIQAQgJASAAQAPAAAOAFQAOAFAJAMQAJALACATIgjAAQgCgMgHgFQgHgGgLAAQgOAAgJALQgIAKAAATIAAABQAAAUAIALQAJAKAOAAQAMAAAHgHQAIgGACgNIAhAAQgBAQgIAMQgHAMgOAHQgOAGgTABQgTAAgQgIg");
	this.shape_3.setTransform(161.575,19.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA+QgPgJgKgPQgJgPAAgVIAAgCQAAgVAJgPQAKgQAPgIQAPgJATAAQASAAAOAHQAOAHAKAPQAJAPAAAYIAAAJIhgAAQABARAJAJQAIAJAPAAQAMAAAHgFQAHgFABgIIAkAAQgEAVgQAMQgRALgbABQgUgBgPgHgAAfgNQgBgPgIgIQgHgHgNAAQgMAAgIAIQgHAHgDAPIA7AAIAAAAg");
	this.shape_4.setTransform(146.7,19.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXBDIAAg6IgGAGQgEADgJADQgHADgMAAQgNAAgKgFQgJgFgGgLQgFgKgBgSIAAgpIAlAAIAAAkQAAAOAFAGQAFAHALAAQAHAAAFgCIAIgFIAEgEIAAg0IAkAAIAACFg");
	this.shape_5.setTransform(131.6,19.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBDIAAhYIgzBYIgkAAIAAiFIAkAAIAABYIAzhYIAkAAIAACFg");
	this.shape_6.setTransform(116.675,19.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBDIAAhqIgoAAIAAgbIBzAAIAAAbIgoAAIAABqg");
	this.shape_7.setTransform(102.575,19.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA+QgPgIgJgPQgJgPAAgWIAAgCQAAgVAJgPQAKgQAPgIQAQgJASAAQAPAAAOAFQAOAFAJAMQAJALACATIgjAAQgCgMgHgFQgHgGgLAAQgOAAgJALQgIAKAAATIAAABQAAAUAIALQAJAKAOAAQAMAAAHgHQAIgGACgNIAhAAQgBAQgIAMQgHAMgOAHQgOAGgTABQgTAAgQgIg");
	this.shape_8.setTransform(89.025,19.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBCQgKgFgGgIQgGgJgBgOQAAgQAJgJQAKgJAPgEQAQgEATAAIAPAAIAAgFQAAgMgEgHQgFgGgMAAQgLAAgFAFQgFAFgCAJIgiAAQABgQAIgKQAIgKANgFQANgFAPAAQARAAAMAFQANAFAIALQAGALAAASIAABWIgkAAIAAgQQgFAIgJAFQgKAFgPABQgMAAgKgEgAgOANQgJAEAAALQAAAHAFAEQAEAFAKAAQAMAAAHgHQAJgGAAgLIAAgLIgOAAQgQAAgIAEg");
	this.shape_9.setTransform(74,19.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBDIAAhqIgoAAIAAgbIBzAAIAAAbIgoAAIAABqg");
	this.shape_10.setTransform(60.975,19.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZBDIAAg3IgxAAIAAA3IgkAAIAAiFIAkAAIAAA1IAxAAIAAg1IAkAAIAACFg");
	this.shape_11.setTransform(46.975,19.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglBCQgKgFgGgIQgGgJAAgOQgBgQAKgJQAJgJAPgEQAQgEATAAIAPAAIAAgFQAAgMgEgHQgFgGgMAAQgLAAgFAFQgGAFgBAJIgjAAQACgQAIgKQAIgKANgFQANgFAPAAQARAAAMAFQANAFAIALQAGALAAASIAABWIgkAAIAAgQQgFAIgJAFQgKAFgOABQgNAAgKgEgAgOANQgJAEAAALQgBAHAFAEQAFAFAKAAQAMAAAHgHQAJgGAAgLIAAgLIgOAAQgQAAgIAEg");
	this.shape_12.setTransform(31.6,19.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTBfIAAgYQgZAAgTgJQgTgHgLgQQgKgPgBgXIAAgBQABgXALgPQALgQATgIQATgIAYgBIAAgWIAoAAIAAAWQAYABATAIQATAIALAQQALAPAAAWIAAABQgBAYgLAQQgLAPgTAHQgTAJgXAAIAAAYgAAVApQALAAAKgEQAKgEAGgJQAFgIABgQIAAgBQAAgOgGgIQgGgJgJgEQgKgEgMAAgAgpgkQgJAEgGAJQgGAIAAAPIAAABQAAAOAGAJQAFAIAKAEQAJAFANAAIAAhSQgMAAgKAFg");
	this.shape_13.setTransform(13.375,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,213.5,34.6), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Component3();
	this.instance.setTransform(-9,-9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#411500").s().p("A0pLqIAA3TMApTAAAIAAXTg");
	this.shape.setTransform(132.2,74.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-9,-9,283,169), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF5500","#BDF700"],[0.498,1],-137.9,-9.2,0,-137.9,-9.2,173.1).s().p("AAOBcIghhSIAABSIgtAAIAAi4IAtAAIAABUIAkhUIAuAAIg1BaIA2Beg");
	this.shape.setTransform(137.95,9.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF5500","#BDF700"],[0.498,1],-122.5,-9.2,0,-122.5,-9.2,170.9).s().p("Ag0BEQgSgaAAgqQAAgpASgaQAUgcAjgBQAaABARAPQARAOAGAZIABAGIgsAJQgFgqgSAAQgMAAgHAUQgGASAAAeQAAAeAGATQAHAUAMAAQATAAAGgpIArAFIgCAHQgGAbgQAOQgRAPgbAAQgjAAgUgcg");
	this.shape_1.setTransform(122.575,9.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FF5500","#BDF700"],[0.498,1],-106.9,-9.2,0,-106.9,-9.2,170.9).s().p("AAUBcIAHh2Ig2B2IglAAIAAi4IAtAAIgHB4IA3h4IAkAAIAAC4g");
	this.shape_2.setTransform(106.925,9.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FF5500","#BDF700"],[0.498,1],-90.8,-9.2,0,-90.8,-9.2,173.1).s().p("Ag3BEQgTgaAAgqQAAgpATgaQAUgcAjgBQAkABAUAcQATAaAAApQAAAqgTAaQgUAcgkAAQgjAAgUgcgAgUgwQgHATAAAdQAAAeAHATQAIAUAMAAQANAAAIgUQAHgTAAgeQAAgdgHgTQgIgTgNgBQgMABgIATg");
	this.shape_3.setTransform(90.825,9.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FF5500","#BDF700"],[0.498,1],-74.8,-9.2,0,-74.8,-9.2,173.1).s().p("AAUBcIAAiaIgnAAIAACaIgtAAIAAi4ICBAAIAAC4g");
	this.shape_4.setTransform(74.8,9.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FF5500","#BDF700"],[0.498,1],-58.7,-9.2,0,-58.7,-9.2,173.1).s().p("Ag3BEQgTgaAAgqQAAgpATgaQAUgcAjgBQAkABAVAcQASAaAAApQAAAqgSAaQgVAcgkAAQgjAAgUgcgAgTgwQgIATAAAdQAAAeAIATQAHAUAMAAQANAAAIgUQAHgUAAgdQAAgcgHgUQgIgTgNgBQgMABgHATg");
	this.shape_5.setTransform(58.725,9.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FF5500","#BDF700"],[0.498,1],-42.7,-9.2,0,-42.7,-9.2,173.1).s().p("AATBcIAAhUIglAAIAABUIgtAAIAAi4IAtAAIAABIIAlAAIAAhIIAtAAIAAC4g");
	this.shape_6.setTransform(42.775,9.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FF5500","#BDF700"],[0.498,1],-27.1,-9.2,0,-27.1,-9.2,173.1).s().p("AAUBcIAHh2Ig3B2IgkAAIAAi4IAtAAIgHB4IA2h4IAlAAIAAC4g");
	this.shape_7.setTransform(27.15,9.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FF5500","#BDF700"],[0.498,1],-8.9,-9.2,0,-8.9,-9.2,170.9).s().p("AggAaIBCBCIgtAAIgog4IAAA4IgmAAIAAi4IAmAAIAAA6IAog6IAtAAIhCBDIB6hDIAAArIhtAoIBtgKIAAAnIhtgKIBtAoIAAAqg");
	this.shape_8.setTransform(8.95,9.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,144.4,19.3), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-10.8,-14,-4.3,2).s().p("AjKElIAApJIGVAAIAAJJg");
	this.shape.setTransform(20.325,29.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,40.7,58.6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(250,250,250,0.8)").s().p("AgDAaIAAgWIgVAAIAAgHIAVAAIAAgWIAHAAIAAAWIAVAAIAAAHIgVAAIAAAWg");
	this.shape.setTransform(16.15,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(250,250,250,0.8)").s().p("AgPAjQgGgEgDgIQgDgJAAgKIAAgBQAAgOAEgJQAEgKAHgFQAHgEAIAAQAJAAAGAEQAGAFACAKIgJAAQgBgGgEgDQgDgDgHAAQgEAAgFAEQgFADgCAHQgDAHAAALQADgFAFgDQAFgDAGAAQAIAAAGAEQAFADAEAFQADAGAAAHQAAAIgEAGQgDAGgGADQgGADgIAAQgKAAgGgFgAgIgBQgEABgCAEQgCAEgBAFQABAHACAEQACAEAEADQAEACAFAAQAIAAAEgFQAFgFAAgJQAAgIgFgFQgEgEgIAAQgFAAgEACg");
	this.shape_1.setTransform(9.925,8.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(250,250,250,0.8)").s().p("AAEAnIAAhEIgRANIAAgJIASgNIAJAAIAABNg");
	this.shape_2.setTransform(3.825,8.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(250,250,250,0.8)").s().p("AgJAoQgGgDgCgEIAAAJIgJAAIAAhUIAJAAIAAAlQABgDADgCIAHgEQAEgCAEAAQAHAAAGAEQAGADADAHQADAGABAJIAAABQgBAIgDAHQgDAGgGAEQgGAEgHAAQgHAAgEgDgAgIgGQgEADgDADQgCAGAAAHIAAABQgBALAGAFQAFAFAIAAQAIAAAEgFQAFgGAAgKIAAgBQAAgHgDgFQgCgEgDgDQgFgCgEAAQgFAAgEACg");
	this.shape_3.setTransform(214.85,8.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(250,250,250,0.8)").s().p("AgTAzIAfhlIAIAAIgfBlg");
	this.shape_4.setTransform(208.825,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(250,250,250,0.8)").s().p("AgMAaQgGgDgEgHQgEgGAAgJIAAgBQAAgIAFgHQADgGAHgEQAFgEAHAAQAHAAAFACQAFACAEAFQADAEABAHIgJAAQgBgGgEgDQgEgDgHAAQgEAAgEACQgEADgCAFQgDAFAAAGIAAABQAAAKAFAGQAGAFAGAAQAFAAADgBQAEgCACgDQADgDAAgFIAIAAQAAAGgDAFQgDAFgGADQgFADgIAAQgGAAgHgEg");
	this.shape_5.setTransform(203.65,9.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(250,250,250,0.8)").s().p("AgMAaQgGgDgEgHQgDgGAAgJIAAgBQAAgIADgHQAEgGAGgEQAGgEAIAAQAFAAAGACQAFACADAFQAFAEABAHIgJAAQgCgGgEgDQgFgDgFAAQgFAAgEACQgEADgDAFQgCAFAAAGIAAABQAAAKAFAGQAFAFAIAAQAEAAAEgBQADgCADgDQABgDABgFIAJAAQgBAGgEAFQgDAFgFADQgGADgGAAQgIAAgGgEg");
	this.shape_6.setTransform(197.4,9.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(250,250,250,0.8)").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_7.setTransform(192.7,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(250,250,250,0.8)").s().p("AgNAcQgEgCgCgEQgDgDAAgGQAAgHAEgEQAFgDAGgBQAGgCAHAAIAIAAIAAgEQAAgHgDgDQgDgDgGAAQgFAAgEACQgDADAAAFIgJAAQAAgGAEgEQADgEAFgCQAEgCAFAAQAGAAAEACQAFACADAEQADAFAAAIIAAAlIgJAAIAAgHQgDAEgEACQgFACgFAAQgFAAgFgCgAgDADQgEABgDACQgDADAAAEQAAAEADADQACACAGABQAEAAADgCQAEgCADgDQACgDAAgEIAAgIIgIAAQgFAAgEACg");
	this.shape_8.setTransform(187.95,9.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(250,250,250,0.8)").s().p("AgOAnIALgaIgWgzIAKAAIAQAoIAQgoIAKAAIgfBNg");
	this.shape_9.setTransform(182.35,10.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(250,250,250,0.8)").s().p("AgEAVQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCgAgEgKQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_10.setTransform(175.05,10.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(250,250,250,0.8)").s().p("AANAdIAAgXIgJAAIgQAXIgKAAIARgYIgGgDQgDgCgBgCQgCgDAAgFIAAAAQAAgGACgEQAEgEAFgCQAFgCAEAAIAUAAIAAA5gAgGgSQgCADAAAFIAAAAQAAAFACADQADACAGAAIAKAAIAAgVIgKAAQgGAAgDADg");
	this.shape_11.setTransform(170.3,9.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(250,250,250,0.8)").s().p("AAOAdIAAgsIgcAsIgJAAIAAg5IAJAAIAAAsIAcgsIAKAAIAAA5g");
	this.shape_12.setTransform(164.55,9.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(250,250,250,0.8)").s().p("AgVAdIAAg5IAVAAQAEAAAFACQAEABADADQADADAAAGIAAAAQAAAEgCAEQgDADgEACQAFAAADADQAEADAAAGQAAAIgGAFQgFAEgKAAgAgLAVIALAAQAGABADgDQADgCAAgFQAAgFgDgCQgDgCgGAAIgLAAgAgLgDIALAAQAEAAADgDQACgCAAgEIAAgBQAAgEgCgCQgDgCgEAAIgLAAg");
	this.shape_13.setTransform(158.625,9.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(250,250,250,0.8)").s().p("AgOAaQgGgEgEgGQgDgHAAgJIAAAAQAAgIADgHQAEgGAGgEQAHgEAHAAQAIAAAHAEQAGAEAEAGQADAHAAAIIAAAAQAAAJgDAHQgEAGgHAEQgGAEgIAAQgHAAgHgEgAgNgPQgFAGAAAJIAAAAQAAAKAFAGQAFAGAIAAQAGAAAEgDQAEgCACgFQADgFAAgHIAAAAQAAgJgFgGQgFgGgJAAQgIAAgFAGg");
	this.shape_14.setTransform(152.225,9.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(250,250,250,0.8)").s().p("AgXAdIgBgBIAAgIIABAAIADAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQACgCAAgDIABgHIABgKIAAgMIABgJIAAgDIAlAAIAAA4IgJAAIAAgwIgUAAIAAAJIgBAJIgBAJQAAAKgEAHQgDAFgHAAIgDAAg");
	this.shape_15.setTransform(145.525,9.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(250,250,250,0.8)").s().p("AgMAaQgGgDgEgHQgEgGAAgJIAAgBQAAgIAFgHQADgGAHgEQAFgEAHAAQAHAAAFACQAFACAEAFQADAEABAHIgJAAQgBgGgEgDQgEgDgHAAQgEAAgEACQgEADgCAFQgDAFAAAGIAAABQAAAKAFAGQAGAFAGAAQAFAAADgBQAEgCADgDQACgDAAgFIAIAAQAAAGgDAFQgDAFgGADQgFADgIAAQgGAAgHgEg");
	this.shape_16.setTransform(139.75,9.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(250,250,250,0.8)").s().p("AgVAnIgBAAIAAgJIABAAIAEABQAEAAAEgDQADgCADgGIgbg7IAKAAIAUAwIAWgwIAJAAIgbA7IgEAKIgHAHQgEADgGAAIgEgBg");
	this.shape_17.setTransform(133.425,8.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(250,250,250,0.8)").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_18.setTransform(125.75,11.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(250,250,250,0.8)").s().p("AAMAdIgZgdIAAAdIgJAAIAAg5IAJAAIAAAbIAXgbIALAAIgYAbIAaAeg");
	this.shape_19.setTransform(121.7,9.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(250,250,250,0.8)").s().p("AgMAaQgGgDgEgHQgEgGABgJIAAgBQAAgIADgHQAEgGAGgEQAGgEAIAAQAFAAAGACQAFACADAFQAEAEACAHIgJAAQgCgGgEgDQgFgDgFAAQgFAAgEACQgEADgDAFQgCAFAAAGIAAABQAAAKAFAGQAFAFAIAAQAEAAAEgBQADgCACgDQADgDAAgFIAJAAQgBAGgEAFQgDAFgFADQgGADgGAAQgIAAgGgEg");
	this.shape_20.setTransform(115.4,9.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(250,250,250,0.8)").s().p("AAPAdIAAgsIgcAsIgKAAIAAg5IAKAAIAAAsIAcgsIAJAAIAAA5g");
	this.shape_21.setTransform(109.05,9.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(250,250,250,0.8)").s().p("AgOAaQgGgEgEgGQgDgHAAgJIAAAAQAAgIADgHQAEgGAGgEQAHgEAHAAQAIAAAHAEQAGAEAEAGQADAHAAAIIAAAAQAAAJgDAHQgEAGgHAEQgGAEgIAAQgHAAgHgEgAgNgPQgFAGAAAJIAAAAQAAAKAFAGQAFAGAIAAQAGAAAEgDQAEgCACgFQADgFAAgHIAAAAQAAgJgFgGQgFgGgJAAQgIAAgFAGg");
	this.shape_22.setTransform(102.425,9.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(250,250,250,0.8)").s().p("AAOAdIAAgxIgaAAIAAAxIgKAAIAAg5IAtAAIAAA5g");
	this.shape_23.setTransform(95.925,9.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(250,250,250,0.8)").s().p("AgOAaQgGgEgEgGQgDgHAAgJIAAAAQAAgIADgHQAEgGAGgEQAHgEAHAAQAIAAAHAEQAGAEAEAGQADAHAAAIIAAAAQAAAJgDAHQgEAGgHAEQgGAEgIAAQgHAAgHgEgAgNgPQgFAGAAAJIAAAAQAAAKAFAGQAFAGAIAAQAGAAAEgDQAEgCACgFQADgFAAgHIAAAAQAAgJgFgGQgFgGgJAAQgIAAgFAGg");
	this.shape_24.setTransform(89.425,9.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(250,250,250,0.8)").s().p("AAOAdIAAgaIgbAAIAAAaIgKAAIAAg5IAKAAIAAAYIAbAAIAAgYIAKAAIAAA5g");
	this.shape_25.setTransform(82.85,9.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(250,250,250,0.8)").s().p("AAOAdIAAgsIgbAsIgKAAIAAg5IAKAAIAAAsIAbgsIAKAAIAAA5g");
	this.shape_26.setTransform(76.4,9.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(250,250,250,0.8)").s().p("AAQAnIgigmIAAAmIgJAAIAAhNIAJAAIAAAlIAhglIALAAIgiAmIAkAng");
	this.shape_27.setTransform(70.1,8.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(250,250,250,0.8)").s().p("AgMAaQgGgDgEgHQgDgGgBgJIAAgBQAAgIAFgHQADgGAHgEQAGgEAGAAQAHAAAFACQAFACADAFQAFAEAAAHIgJAAQgBgGgEgDQgEgDgHAAQgEAAgEACQgEADgDAFQgCAFAAAGIAAABQAAAKAFAGQAGAFAGAAQAFAAADgBQAEgCADgDQACgDAAgFIAIAAQAAAGgDAFQgDAFgGADQgFADgIAAQgGAAgHgEg");
	this.shape_28.setTransform(60.35,9.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(250,250,250,0.8)").s().p("AAOAdIAAgsIgbAsIgKAAIAAg5IAKAAIAAAsIAbgsIAKAAIAAA5g");
	this.shape_29.setTransform(54,9.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(250,250,250,0.8)").s().p("AgVAdIAAg5IAVAAQAEAAAFACQAEABADADQADADAAAGIAAAAQAAAEgCAEQgDADgEACQAFAAADADQAEADAAAGQAAAIgGAFQgFAEgKAAgAgLAVIALAAQAGABADgDQADgCAAgFQAAgFgDgCQgDgCgGAAIgLAAgAgLgDIALAAQAEAAADgDQACgCAAgEIAAgBQAAgEgCgCQgDgCgEAAIgLAAg");
	this.shape_30.setTransform(48.075,9.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(250,250,250,0.8)").s().p("AgbAnIAAhMIAKAAIAAAJQACgDADgCIAHgEQADgBAEAAQAHAAAGADQAFAEAEAGQADAHAAAJIAAABQAAAIgDAGQgDAHgGADQgGAEgHAAQgHAAgFgDQgEgDgDgEIAAAdgAgJgcQgEACgCAFQgDAFAAAHIAAABQAAAKAGAFQAFAGAHAAQAJAAAFgGQAEgFAAgKIAAgBQAAgHgDgFQgCgFgEgCQgEgDgFAAQgEAAgFADg");
	this.shape_31.setTransform(41.75,10.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(250,250,250,0.8)").s().p("AgMAaQgGgDgEgHQgDgGAAgJIAAgBQAAgIADgHQAEgGAGgEQAGgEAHAAQAGAAAGADQAGADAEAGQADAHAAAKIAAACIgqAAQAAAKAFAFQAFAFAIAAQAGAAAEgCQAEgDABgFIAJAAQgCAJgGAEQgHAFgJAAQgIAAgGgEgAARgFQgBgIgEgEQgEgEgHAAQgGAAgFAEQgEAFgCAHIAhAAIAAAAg");
	this.shape_32.setTransform(34.975,9.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(250,250,250,0.8)").s().p("AgRAkQgIgFgEgJQgFgJAAgMIAAgBQAAgLAFgJQAFgJAIgFQAIgGAKAAQAJABAGADQAHADAFAFQAEAGABAIIgJAAQgCgIgFgFQgGgFgKAAQgHABgGADQgGAEgDAHQgEAIAAAJIAAABQAAAPAHAIQAHAJAMAAQAKAAAGgFQAGgFACgKIAJAAQgBAKgFAFQgEAHgHACQgHADgJAAQgKAAgJgEg");
	this.shape_33.setTransform(27.875,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,220.2,17.2), null);


(lib.pic_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pic();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pic_1, new cjs.Rectangle(0,0,300,428), null);


(lib.Symbol5copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF5500","#BBFF00"],[0.698,1],-75.4,-22.4,0,-75.4,-22.4,155.5).s().p("AoRDhQhdAAhBhCQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBChdAAg");
	this.shape.setTransform(82.475,22.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5copy2, new cjs.Rectangle(7.1,0.2,150.8,45), null);


(lib.Symbol4copy3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag9hDIB7BDIh7BEg");
	this.shape.setTransform(9.975,25.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4copy3, new cjs.Rectangle(3.8,18.6,12.399999999999999,13.600000000000001), null);


(lib.Symbol4copy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AApBSIAAh+IAaAAIAAAPQAKgRAUAAQASAAALANQAMAMAAAWIAAACQAAAWgLAOQgMAMgSAAQgVAAgJgQIAAAvgABJgTQgHAHAAAOIAAABQAAAcAYAAQAWAAAAgcIAAgBQAAgcgXAAQgKAAgGAHgACkAnQgOgNAAgWIAAgCQAAgVAOgNQAOgOAVAAQATAAANAMQAOAMAAAXIAAAHIhEAAQABAZAWgBQARABADgNIAYAAQgEAfgpAAQgVAAgOgMgACxgHIAqAAQgBgVgTAAQgTAAgDAVgAiSAnQgOgOAAgWIAAgBQAAgWAOgNQAOgNAWAAQAVAAAOANQAOAOAAAUIAAACQAAAVgOAPQgOANgWgBQgVABgOgNgAh/gTQgGAHAAANIAAACQAAAcAXAAQALAAAGgHQAGgIAAgNIAAgBQAAgNgGgIQgGgHgLgBQgLAAgGAIgAmbAhQgQgRAAgdIAAgCQAAgdASgTQASgSAcAAQAYAAAPAMQAQAMACAYIgeAAQgDgZgYAAQgQAAgIAMQgJALAAAUIAAACQAAATAIAKQAJAMAQAAQAaAAAEgZIAcAAQgCAYgQANQgPAMgZgBQgfABgRgTgAFdAyIAAheIAaAAIAAAeIARAAQARAAAKAJQAJAHAAAPIAAABQAAAfglABgAF3AfIALAAQAQAAAAgNIAAgBQAAgOgQAAIgLAAgAEYAyIAAhLIgcAAIAAgTIBSAAIAAATIgcAAIAABLgAgbAyIAAhLIgcAAIAAgTIBRAAIAAATIgbAAIAABLgAjMAyIAAhDIgaBDIgNAAIgZhDIAABDIgUAAIAAheIAiAAIAWA5IAWg5IAgAAIAABeg");
	this.shape.setTransform(64.925,26.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4copy2, new cjs.Rectangle(22.1,18.8,85.69999999999999,16.3), null);


(lib.Symbol2copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LIGHT_YELLOW();
	this.instance.setTransform(353,87,1,1,180);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(2.5,2.8,348,81.5), null);


(lib.SYMBOLS_Symbol22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.gradient_radial_001copy();
	this.instance.setTransform(50.5,50.5,0.543,0.543);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,240,105,26,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-95,-95,190,190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SYMBOLS_Symbol22, new cjs.Rectangle(0,0,101,101), null);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(50.5,50.5,1,1,0,0,0,50.5,50.5);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,255,255,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,105,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,101,101), null);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(482.3,61.8,9.5508,1.2218,0,0,0,50.5,50.6);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,196,131,10,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,105,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,964.7,123.4), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol28();
	this.instance.setTransform(34.8,37.2,1,1,0,0,0,34.8,37.2);
	this.instance.filters = [new cjs.BlurFilter(23, 23, 2)];
	this.instance.cache(-2,-2,74,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-24,-24,121,126), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(72.2,9.7,1,1,0,0,0,72.2,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,144.4,19.3), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {repeat:1,"repeat":14};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_319 = function() {
		this.gotoAndPlay("repeat");
	}
	this.frame_325 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(319).call(this.frame_319).wait(6).call(this.frame_325).wait(37));

	// Layer_16
	this.instance = new lib.Symbol31();
	this.instance.setTransform(260.85,29.1,1,1,90.0009,0,0,39.5,34.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).to({rotation:90.0017,x:260.9,y:37.2,alpha:1},5).to({scaleX:2.096,y:96.4,alpha:0.5},26).to({regX:39.6,scaleX:1.4359,rotation:90.0009,x:260.85,y:109.2,alpha:0},8).to({_off:true},1).wait(265));

	// Layer_15
	this.instance_1 = new lib.Symbol31();
	this.instance_1.setTransform(34.5,144.5,1,1,0,0,0,39.5,34.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).to({x:47.3,alpha:1},5).to({regX:39.6,scaleX:3.0613,x:142.45,alpha:0.5},26).to({scaleX:1.8,x:162.7,alpha:0},8).to({_off:true},1).wait(265));

	// FRAME (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AxwLZQg5AAgpgoQgogpAAg5IAAyBQAAg5AogpQAogoA6AAMAj/AAAQA5AAAoAoQApApAAA5IAASBQAAA5gpApQgoAog5AAgAzKqMQgkAlAAA1IAASBQAAA0AkAlQAmAlA0AAMAj/AAAQA0AAAlglQAlglAAg0IAAyBQAAg1glglQglglg0ABMgj/AAAIAAAAQg1AAglAkg");
	var mask_graphics_159 = new cjs.Graphics().p("AxwLZQg5AAgpgoQgogpAAg5IAAyBQAAg5AogpQAogoA6AAMAj/AAAQA5AAAoAoQApApAAA5IAASBQAAA5gpApQgoAog5AAgAzKqMQgkAlAAA1IAASBQAAA0AkAlQAmAlA0AAMAj/AAAQA0AAAlglQAlglAAg0IAAyBQAAg1glglQglglg0ABMgj/AAAIAAAAQg1AAglAkg");
	var mask_graphics_160 = new cjs.Graphics().p("AxwLZQg5AAgpgpQgogoAAg5IAAyBQAAg5AogpQAogoA6AAMAj/AAAQA5AAAoAoQApApAAA5IAASBQAAA5gpAoQgoApg5AAgAzKqLQgkAlAAA0IAASBQAAA0AkAlQAmAlA0AAMAj/AAAQA0AAAlglQAlglAAg0IAAyBQAAg0glglQglglg0AAMgj/AAAQg1AAglAlg");
	var mask_graphics_161 = new cjs.Graphics().p("AxwLYQg5AAgpgoQgogpAAg5IAAx/QAAg5AogpQAogoA6AAMAj/AAAQA5AAAoAoQApApAAA5IAAR/QAAA5gpApQgoAog5AAgAzKqLQgkAmAAA0IAAR/QAAA0AkAlQAmAlA0AAMAj/AAAQA0AAAlglQAlglAAg0IAAx/QAAg0glgmQglgkg0AAMgj/AAAIAAAAQg1AAglAkg");
	var mask_graphics_162 = new cjs.Graphics().p("AxwLWQg5AAgpgoQgogoAAg5IAAx9QAAg5AogpQAogoA6AAMAj/AAAQA5AAAoAoQApApAAA5IAAR9QAAA5gpAoQgoAog5AAgAzKqJQgkAlAAA0IAAR9QAAA0AkAlQAmAkA0AAMAj/AAAQA0AAAlgkQAlglAAg0IAAx9QAAg0glglQglglg0AAMgj/AAAQg1AAglAlg");
	var mask_graphics_163 = new cjs.Graphics().p("AxwLUQg5AAgpgoQgogoAAg5IAAx5QAAg5AogpQAogoA6AAMAj/AAAQA5AAAoAoQApApAAA5IAAR5QAAA5gpAoQgoAog5AAgAzKqHQgkAlAAA0IAAR5QAAA0AkAlQAmAkA0AAMAj/AAAQA0AAAlgkQAlglAAg0IAAx5QAAg0glglQglglg0AAMgj/AAAQg1AAglAlg");
	var mask_graphics_164 = new cjs.Graphics().p("AxwLRQg5AAgpgoQgogoAAg5IAAxzQAAg5AogoQAogoA6AAMAj/AAAQA5AAAoAoQApAoAAA5IAARzQAAA5gpAoQgoAog5AAgAzKqEQgkAlAAA0IAARzQAAA0AkAlQAmAkA0AAMAj/AAAQA0AAAlgkQAlglAAg0IAAxzQAAg0glglQglgkg0AAMgj/AAAQg1AAglAkg");
	var mask_graphics_165 = new cjs.Graphics().p("AxwLMQg5AAgpgnQgogpAAg3IAAxsQAAg5AogoQAognA6AAMAj/AAAQA5AAAoAnQApAoAAA5IAARsQAAA3gpApQgoAng5AAgAzKqAQgkAlAAA0IAARsQAAAzAkAkQAmAkA0AAMAj/AAAQA0AAAlgkQAlgkAAgzIAAxsQAAg0glglQglgkg0AAMgj/AAAIAAAAQg1AAglAkg");
	var mask_graphics_166 = new cjs.Graphics().p("AxwLFQg5AAgpgnQgogoAAg3IAAxgQAAg4AogoQAognA6AAMAj/AAAQA5AAAoAnQApAoAAA4IAARgQAAA3gpAoQgoAng5AAgAzKp5QgkAlAAAzIAARgQAAAyAkAkQAmAkA0AAMAj/AAAQA0AAAlgkQAlgkAAgyIAAxgQAAgzglglQglgjg0AAMgj/AAAIAAAAQg1AAglAjg");
	var mask_graphics_167 = new cjs.Graphics().p("AxwK4Qg5AAgpgmQgognAAg3IAAxLQAAg3AognQAogmA6AAMAj/AAAQA5AAAoAmQApAnAAA3IAARLQAAA3gpAnQgoAmg5AAgAzKptQgkAkAAAyIAARLQAAAyAkAkQAmAjA0AAMAj/AAAQA0AAAlgjQAlgkAAgyIAAxLQAAgyglgkQglgjg0AAMgj/AAAQg1AAglAjg");
	var mask_graphics_168 = new cjs.Graphics().p("AxwKhQg5AAgpglQgogmAAg0IAAwmQAAg1AogmQAoglA6AAMAj/AAAQA5AAAoAlQApAmAAA1IAAQmQAAA0gpAmQgoAlg5AAgAzKpXQgkAiAAAxIAAQmQAAAwAkAiQAmAiA0AAMAj/AAAQA0AAAlgiQAlgiAAgwIAAwmQAAgxglgiQglgig0AAMgj/AAAQg1AAglAig");
	var mask_graphics_169 = new cjs.Graphics().p("AxwKDQg5AAgpgjQgogkAAgyIAAv2QAAgzAogkQAogjA6AAMAj/AAAQA5AAAoAjQApAkAAAzIAAP2QAAAygpAkQgoAjg5AAgAzKo7QgkAgAAAvIAAP2QAAAuAkAhQAmAgA0AAMAj/AAAQA0AAAlggQAlghAAguIAAv2QAAgvglggQglghg0AAMgj/AAAIAAAAQg1AAglAhg");
	var mask_graphics_170 = new cjs.Graphics().p("AxwJwQg5AAgpgjQgogiAAgxIAAvWQAAgxAogjQAogiA6AAMAj/AAAQA5AAAoAiQApAjAAAxIAAPWQAAAxgpAiQgoAjg5AAgAzKopQgkAgAAAtIAAPWQAAAsAkAgQAmAfA0AAMAj/AAAQA0AAAlgfQAlggAAgsIAAvWQAAgtglggQglgfg0AAMgj/AAAQg1AAglAfg");
	var mask_graphics_171 = new cjs.Graphics().p("AxwJiQg5AAgpghQgogiAAgwIAAvAQAAgwAogiQAogiA6AAMAj/AAAQA5AAAoAiQApAiAAAwIAAPAQAAAwgpAiQgoAhg5AAgAzKocQgkAfAAAsIAAPAQAAAsAkAfQAmAeA0AAMAj/AAAQA0AAAlgeQAlgfAAgsIAAvAQAAgsglgfQglgfg0AAMgj/AAAIAAAAQg1AAglAfg");
	var mask_graphics_172 = new cjs.Graphics().p("AxwJYQg5AAgpghQgoghAAgvIAAuwQAAgvAogiQAoghA6AAMAj/AAAQA5AAAoAhQApAiAAAvIAAOwQAAAvgpAhQgoAhg5AAgAzKoTQgkAfAAArIAAOwQAAArAkAeQAmAeA0AAMAj/AAAQA0AAAlgeQAlgeAAgrIAAuwQAAgrglgfQglgeg0AAMgj/AAAQg1AAglAeg");
	var mask_graphics_173 = new cjs.Graphics().p("AxwJQQg5AAgpggQgoghAAguIAAukQAAguAoghQAoggA6AAMAj/AAAQA5AAAoAgQApAhAAAuIAAOkQAAAugpAhQgoAgg5AAgAzKoLQgkAeAAAqIAAOkQAAAqAkAeQAmAdA0AAMAj/AAAQA0AAAlgdQAlgeAAgqIAAukQAAgqglgeQglgeg0AAMgj/AAAIAAAAQg1AAglAeg");
	var mask_graphics_174 = new cjs.Graphics().p("AxwJJQg5AAgpggQgoggAAguIAAuYQAAguAoghQAoggA6AAMAj/AAAQA5AAAoAgQApAhAAAuIAAOYQAAAugpAgQgoAgg5AAgAzKoFQgkAeAAAqIAAOYQAAAqAkAeQAmAdA0AAMAj/AAAQA0AAAlgdQAlgeAAgqIAAuYQAAgqglgeQglgdg0AAMgj/AAAIAAAAQg1AAglAdg");
	var mask_graphics_175 = new cjs.Graphics().p("AxwJEQg5AAgpggQgoggAAgtIAAuQQAAgtAoggQAoggA6AAMAj/AAAQA5AAAoAgQApAgAAAtIAAOQQAAAtgpAgQgoAgg5AAgAzKoAQgkAeAAApIAAOQQAAApAkAdQAmAdA0AAMAj/AAAQA0AAAlgdQAlgdAAgpIAAuQQAAgpglgeQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_176 = new cjs.Graphics().p("AxwI/Qg5AAgpgfQgoggAAgtIAAuIQAAgtAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAtIAAOIQAAAtgpAgQgoAfg5AAgAzKn7QgkAdAAApIAAOIQAAApAkAdQAmAdA0AAMAj/AAAQA0AAAlgdQAlgdAAgpIAAuIQAAgpglgdQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_177 = new cjs.Graphics().p("AxwI9Qg5AAgpggQgoggAAgsIAAuEQAAgtAogfQAoggA6AAMAj/AAAQA5AAAoAgQApAfAAAtIAAOEQAAAsgpAgQgoAgg5AAgAzKn5QgkAdAAApIAAOEQAAApAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgpIAAuEQAAgpglgdQglgdg0ABMgj/AAAIAAAAQg1AAglAcg");
	var mask_graphics_178 = new cjs.Graphics().p("AxwI7Qg5AAgpgfQgoggAAgsIAAuBQAAgtAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAtIAAOBQAAAsgpAgQgoAfg5AAgAzKn3QgkAdAAApIAAOBQAAAoAkAdQAmAdA0AAMAj/AAAQA0AAAlgdQAlgdAAgoIAAuBQAAgpglgdQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_179 = new cjs.Graphics().p("AxwI6Qg5AAgpgfQgoggAAgsIAAt/QAAgtAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAtIAAN/QAAAsgpAgQgoAfg5AAgAzKn2QgkAdAAApIAAN/QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt/QAAgpglgdQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_180 = new cjs.Graphics().p("AxwI5Qg5AAgpgfQgoggAAgsIAAt+QAAgsAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAsIAAN+QAAAsgpAgQgoAfg5AAgAzKn1QgkAdAAAoIAAN+QAAAoAkAdQAmAdA0gBMAj/AAAQA0ABAlgdQAlgdAAgoIAAt+QAAgoglgdQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_181 = new cjs.Graphics().p("AxwI4Qg5AAgpgfQgoggAAgsIAAt8QAAgsAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAsIAAN8QAAAsgpAgQgoAfg5AAgAzKn0QgkAcAAApIAAN8QAAAoAkAdQAmAdA0AAMAj/AAAQA0AAAlgdQAlgdAAgoIAAt8QAAgpglgcQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_182 = new cjs.Graphics().p("AxwI3Qg5AAgpgfQgogfAAgsIAAt7QAAgtAogfQAogfA6AAMAj/AAAQA5AAAoAfQApAfAAAtIAAN7QAAAsgpAfQgoAfg5AAgAzKn0QgkAdAAApIAAN7QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt7QAAgpglgdQglgcg0AAMgj/AAAIAAAAQg1AAglAcg");
	var mask_graphics_183 = new cjs.Graphics().p("AxwI3Qg5AAgpgfQgoggAAgsIAAt6QAAgsAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAsIAAN6QAAAsgpAgQgoAfg5AAgAzKnzQgkAdAAAoIAAN6QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt6QAAgoglgdQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_184 = new cjs.Graphics().p("AxwI2Qg5AAgpgfQgogfAAgsIAAt5QAAgtAogfQAogfA6AAMAj/AAAQA5AAAoAfQApAfAAAtIAAN5QAAAsgpAfQgoAfg5AAgAzKnzQgkAdAAApIAAN5QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt5QAAgpglgdQglgcg0AAMgj/AAAQg1AAglAcg");
	var mask_graphics_185 = new cjs.Graphics().p("AxwI2Qg5AAgpgfQgoggAAgsIAAt4QAAgsAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAsIAAN4QAAAsgpAgQgoAfg5AAgAzKnyQgkAcAAApIAAN4QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt4QAAgpglgcQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_186 = new cjs.Graphics().p("AxwI1Qg5AAgpgfQgogfAAgsIAAt4QAAgsAogfQAogfA6AAMAj/AAAQA5AAAoAfQApAfAAAsIAAN4QAAAsgpAfQgoAfg5AAgAzKnyQgkAdAAAoIAAN4QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt4QAAgoglgdQglgcg0AAMgj/AAAIAAAAQg1AAglAcg");
	var mask_graphics_187 = new cjs.Graphics().p("AxwI1Qg5AAgpgfQgogfAAgsIAAt3QAAgtAogfQAogfA6AAMAj/AAAQA5AAAoAfQApAfAAAtIAAN3QAAAsgpAfQgoAfg5AAgAzKnyQgkAdAAApIAAN3QAAAoAkAcQAmAdA0AAMAj/AAAQA0AAAlgdQAlgcAAgoIAAt3QAAgpglgdQglgcg0AAMgj/AAAQg1AAglAcg");
	var mask_graphics_188 = new cjs.Graphics().p("AxwI1Qg5AAgpgfQgoggAAgsIAAt2QAAgsAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAsIAAN2QAAAsgpAgQgoAfg5AAgAzKnxQgkAcAAApIAAN2QAAApAkAcQAmAcA0AAMAj/AAAQA0AAAlgcQAlgcAAgpIAAt2QAAgpglgcQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_189 = new cjs.Graphics().p("AxwI0Qg5AAgpgfQgogfAAgsIAAt2QAAgsAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAsIAAN2QAAAsgpAfQgoAfg5AAgAzKnxQgkAdAAAoIAAN2QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt2QAAgoglgdQglgcg0AAMgj/AAAIAAAAQg1AAglAcg");
	var mask_graphics_190 = new cjs.Graphics().p("AxwI0Qg5AAgpgfQgogfAAgsIAAt2QAAgsAogfQAogfA6AAMAj/AAAQA5AAAoAfQApAfAAAsIAAN2QAAAsgpAfQgoAfg5AAgAzKnxQgkAdAAAoIAAN2QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt2QAAgoglgdQglgcg0AAMgj/AAAIAAAAQg1AAglAcg");
	var mask_graphics_191 = new cjs.Graphics().p("AxwI0Qg5AAgpgfQgogfAAgsIAAt2QAAgsAogfQAogfA6AAMAj/AAAQA5AAAoAfQApAfAAAsIAAN2QAAAsgpAfQgoAfg5AAgAzKnxQgkAdAAAoIAAN2QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt2QAAgoglgdQglgcg0AAMgj/AAAQg1AAglAcg");
	var mask_graphics_192 = new cjs.Graphics().p("AxwI0Qg5AAgpgfQgogfAAgsIAAt2QAAgsAogfQAogfA6AAMAj/AAAQA5AAAoAfQApAfAAAsIAAN2QAAAsgpAfQgoAfg5AAgAzKnwQgkAcAAAoIAAN2QAAAoAkAcQAmAdA0AAMAj/AAAQA0AAAlgdQAlgcAAgoIAAt2QAAgoglgcQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_193 = new cjs.Graphics().p("AxwI0Qg5AAgpgfQgoggAAgrIAAt1QAAgtAogfQAogfA6AAMAj/AAAQA5AAAoAfQApAfAAAtIAAN1QAAArgpAgQgoAfg5AAgAzKnwQgkAcAAApIAAN1QAAAoAkAcQAmAcA0AAMAj/AAAQA0AAAlgcQAlgcAAgoIAAt1QAAgpglgcQglgdg0AAMgj/AAAQg1AAglAdg");
	var mask_graphics_194 = new cjs.Graphics().p("AxwI0Qg5AAgpgfQgoggAAgrIAAt1QAAgsAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAsIAAN1QAAArgpAgQgoAfg5AAgAzKnwQgkAcAAApIAAN1QAAAoAkAcQAmAcA0AAMAj/AAAQA0AAAlgcQAlgcAAgoIAAt1QAAgpglgcQglgcg0AAMgj/AAAQg1AAglAcg");
	var mask_graphics_195 = new cjs.Graphics().p("AxwIzQg5AAgpgeQgoggAAgrIAAt1QAAgsAoggQAogfA6AAMAj/AAAQA5AAAoAfQApAgAAAsIAAN1QAAArgpAgQgoAeg5AAgAzKnwQgkAcAAApIAAN1QAAAnAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgnIAAt1QAAgpglgcQglgcg0AAMgj/AAAQg1AAglAcg");
	var mask_graphics_196 = new cjs.Graphics().p("AxwIzQg5AAgpgeQgoggAAgsIAAt0QAAgsAoggQAogeA6AAMAj/AAAQA5AAAoAeQApAgAAAsIAAN0QAAAsgpAgQgoAeg5AAgAzKnwQgkAcAAApIAAN0QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt0QAAgpglgcQglgcg0AAMgj/AAAQg1AAglAcg");
	var mask_graphics_197 = new cjs.Graphics().p("AxwIzQg5AAgpgfQgogfAAgsIAAt0QAAgsAoggQAogeA6AAMAj/AAAQA5AAAoAeQApAgAAAsIAAN0QAAAsgpAfQgoAfg5AAgAzKnwQgkAdAAAoIAAN0QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt0QAAgoglgdQglgcg0AAMgj/AAAQg1AAglAcg");
	var mask_graphics_198 = new cjs.Graphics().p("AxwIzQg5AAgpgfQgogfAAgsIAAt0QAAgsAoggQAogeA6AAMAj/AAAQA5AAAoAeQApAgAAAsIAAN0QAAAsgpAfQgoAfg5AAgAzKnwQgkAdAAAoIAAN0QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt0QAAgoglgdQglgcg0AAMgj/AAAIAAAAQg1AAglAcg");
	var mask_graphics_199 = new cjs.Graphics().p("AxwIzQg5AAgpgfQgogfAAgsIAAt0QAAgsAoggQAogeA6AAMAj/AAAQA5AAAoAeQApAgAAAsIAAN0QAAAsgpAfQgoAfg5AAgAzKnwQgkAdAAAoIAAN0QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt0QAAgoglgdQglgcg0AAMgj/AAAIAAAAQg1AAglAcg");
	var mask_graphics_200 = new cjs.Graphics().p("AxwIzQg5AAgpgfQgogfAAgsIAAt0QAAgsAoggQAogeA6AAMAj/AAAQA5AAAoAeQApAgAAAsIAAN0QAAAsgpAfQgoAfg5AAgAzKnwQgkAdAAAoIAAN0QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt0QAAgoglgdQglgcg0AAMgj/AAAIAAAAQg1AAglAcg");
	var mask_graphics_201 = new cjs.Graphics().p("AxwIzQg5AAgpgfQgogfAAgsIAAt0QAAgsAoggQAogeA6AAMAj/AAAQA5AAAoAeQApAgAAAsIAAN0QAAAsgpAfQgoAfg5AAgAzKnwQgkAdAAAoIAAN0QAAAoAkAdQAmAcA0AAMAj/AAAQA0AAAlgcQAlgdAAgoIAAt0QAAgoglgdQglgcg0AAMgj/AAAIAAAAQg1AAglAcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:130.475,y:72.9}).wait(145).to({graphics:mask_graphics_159,x:130.475,y:72.9}).wait(1).to({graphics:mask_graphics_160,x:130.475,y:72.8561}).wait(1).to({graphics:mask_graphics_161,x:130.475,y:72.7684}).wait(1).to({graphics:mask_graphics_162,x:130.475,y:72.6246}).wait(1).to({graphics:mask_graphics_163,x:130.475,y:72.4062}).wait(1).to({graphics:mask_graphics_164,x:130.475,y:72.0833}).wait(1).to({graphics:mask_graphics_165,x:130.475,y:71.6035}).wait(1).to({graphics:mask_graphics_166,x:130.475,y:70.8621}).wait(1).to({graphics:mask_graphics_167,x:130.475,y:69.6106}).wait(1).to({graphics:mask_graphics_168,x:130.475,y:67.2707}).wait(1).to({graphics:mask_graphics_169,x:130.475,y:64.348}).wait(1).to({graphics:mask_graphics_170,x:130.475,y:62.368}).wait(1).to({graphics:mask_graphics_171,x:130.475,y:61.0216}).wait(1).to({graphics:mask_graphics_172,x:130.475,y:60.0132}).wait(1).to({graphics:mask_graphics_173,x:130.475,y:59.211}).wait(1).to({graphics:mask_graphics_174,x:130.475,y:58.548}).wait(1).to({graphics:mask_graphics_175,x:130.475,y:57.9861}).wait(1).to({graphics:mask_graphics_176,x:130.475,y:57.5202}).wait(1).to({graphics:mask_graphics_177,x:130.475,y:57.2687}).wait(1).to({graphics:mask_graphics_178,x:130.475,y:57.1044}).wait(1).to({graphics:mask_graphics_179,x:130.475,y:56.9801}).wait(1).to({graphics:mask_graphics_180,x:130.475,y:56.8803}).wait(1).to({graphics:mask_graphics_181,x:130.475,y:56.7975}).wait(1).to({graphics:mask_graphics_182,x:130.475,y:56.7274}).wait(1).to({graphics:mask_graphics_183,x:130.475,y:56.6672}).wait(1).to({graphics:mask_graphics_184,x:130.475,y:56.6152}).wait(1).to({graphics:mask_graphics_185,x:130.475,y:56.5699}).wait(1).to({graphics:mask_graphics_186,x:130.475,y:56.5304}).wait(1).to({graphics:mask_graphics_187,x:130.475,y:56.4959}).wait(1).to({graphics:mask_graphics_188,x:130.475,y:56.4658}).wait(1).to({graphics:mask_graphics_189,x:130.475,y:56.4396}).wait(1).to({graphics:mask_graphics_190,x:130.475,y:56.4169}).wait(1).to({graphics:mask_graphics_191,x:130.475,y:56.3975}).wait(1).to({graphics:mask_graphics_192,x:130.475,y:56.381}).wait(1).to({graphics:mask_graphics_193,x:130.475,y:56.3671}).wait(1).to({graphics:mask_graphics_194,x:130.475,y:56.3557}).wait(1).to({graphics:mask_graphics_195,x:130.475,y:56.3466}).wait(1).to({graphics:mask_graphics_196,x:130.475,y:56.3397}).wait(1).to({graphics:mask_graphics_197,x:130.475,y:56.3348}).wait(1).to({graphics:mask_graphics_198,x:130.475,y:56.3316}).wait(1).to({graphics:mask_graphics_199,x:130.475,y:56.3302}).wait(1).to({graphics:mask_graphics_200,x:130.475,y:56.3301}).wait(1).to({graphics:mask_graphics_201,x:130.475,y:56.3305}).wait(81).to({graphics:null,x:0,y:0}).wait(80));

	// FRAME_color
	this.instance_2 = new lib.Symbol30();
	this.instance_2.setTransform(-80.9,-120.2,0.4119,0.7978,57.6352,0,0,540.4,419.9);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regY:420.2,x:-81.05,y:-120},0).wait(1).to({x:-80.85,y:-119.85},0).wait(1).to({x:-80.55,y:-119.65},0).wait(1).to({x:-80.05,y:-119.4},0).wait(1).to({x:-79.45,y:-119},0).wait(1).to({x:-78.65,y:-118.5},0).wait(1).to({x:-77.7,y:-117.95},0).wait(1).to({x:-76.6,y:-117.25},0).wait(1).to({x:-75.3,y:-116.45},0).wait(1).to({x:-73.8,y:-115.55},0).wait(1).to({x:-72.1,y:-114.55},0).wait(1).to({x:-70.2,y:-113.35},0).wait(1).to({x:-68.05,y:-112.1},0).wait(1).to({x:-65.7,y:-110.65},0).wait(1).to({x:-63.1,y:-109.05},0).wait(1).to({x:-60.2,y:-107.3},0).wait(1).to({x:-57.05,y:-105.4},0).wait(1).to({x:-53.65,y:-103.3},0).wait(1).to({x:-49.9,y:-101.05},0).wait(1).to({x:-45.85,y:-98.55},0).wait(1).to({x:-41.45,y:-95.9},0).wait(1).to({x:-36.7,y:-93},0).wait(1).to({x:-31.6,y:-89.9},0).wait(1).to({x:-26.1,y:-86.55},0).wait(1).to({x:-20.2,y:-83},0).wait(1).to({x:-13.9,y:-79.15},0).wait(1).to({x:-7.2,y:-75.05},0).wait(1).to({x:-0.1,y:-70.75},0).wait(1).to({x:7.45,y:-66.15},0).wait(1).to({x:15.4,y:-61.3},0).wait(1).to({x:23.7,y:-56.25},0).wait(1).to({x:32.4,y:-51},0).wait(1).to({x:41.35,y:-45.55},0).wait(1).to({x:50.55,y:-39.95},0).wait(1).to({x:59.9,y:-34.25},0).wait(1).to({x:69.4,y:-28.45},0).wait(1).to({x:78.9,y:-22.7},0).wait(1).to({x:88.3,y:-16.95},0).wait(1).to({x:97.6,y:-11.3},0).wait(1).to({x:106.65,y:-5.8},0).wait(1).to({x:115.45,y:-0.45},0).wait(1).to({x:123.9,y:4.7},0).wait(1).to({x:132,y:9.6},0).wait(1).to({x:139.65,y:14.25},0).wait(1).to({x:146.95,y:18.7},0).wait(1).to({x:153.75,y:22.85},0).wait(1).to({x:160.2,y:26.75},0).wait(1).to({x:166.2,y:30.4},0).wait(1).to({x:171.75,y:33.8},0).wait(1).to({x:176.95,y:36.95},0).wait(1).to({x:181.75,y:39.85},0).wait(1).to({x:186.15,y:42.55},0).wait(1).to({x:190.25,y:45.05},0).wait(1).to({x:194,y:47.3},0).wait(1).to({x:197.4,y:49.4},0).wait(1).to({x:200.55,y:51.3},0).wait(1).to({x:203.4,y:53},0).wait(1).to({x:205.95,y:54.6},0).wait(1).to({x:208.25,y:56},0).wait(1).to({x:210.3,y:57.25},0).wait(1).to({x:212.15,y:58.35},0).wait(1).to({x:213.75,y:59.35},0).wait(1).to({x:215.2,y:60.2},0).wait(1).to({x:216.4,y:60.95},0).wait(1).to({x:217.4,y:61.55},0).wait(1).to({x:218.25,y:62.05},0).wait(1).to({x:218.95,y:62.5},0).wait(1).to({x:219.45,y:62.8},0).wait(1).to({x:219.8,y:63},0).wait(1).to({x:220,y:63.15},0).wait(1).to({regY:419.9,x:220.3,y:63},0).wait(181).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(80));

	// BIG SHAPE (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AyfLmQg5AAgngoQgognAAg5IAAy7QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAS7QAAA5goAnQgnAog4AAg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AjTF0Qg5AAgngnQgogoAAg5IAAnXQAAg4AogoQAngoA5AAIGoAAQA4AAAnAoQAoAoAAA4IAAHXQAAA5goAoQgnAng4AAg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjTF0Qg5AAgngnQgogoAAg5IAAnXQAAg4AogoQAngoA5AAIGoAAQA4AAAnAoQAoAoAAA4IAAHXQAAA5goAoQgnAng4AAg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjVF1Qg4AAgogoQgogoAAg4IAAnZQAAg4AogoQAngoA5AAIGrAAQA4AAAoAoQAoAoAAA4IAAHZQAAA4goAoQgoAog4AAg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AjYF2Qg4AAgogoQgngnAAg5IAAnbQAAg4AngoQAogoA4AAIGxAAQA4AAAoAoQAnAoAAA4IAAHbQAAA5gnAnQgoAog4AAg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AjcF3Qg4AAgognQgogoAAg4IAAneQAAg5AogoQAngnA5AAIG5AAQA4AAAoAnQAnAoAAA5IAAHeQAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AjiF6Qg4AAgogoQgngnAAg5IAAnjQAAg4AngoQAogoA4AAIHFAAQA4AAAoAoQAnAoAAA4IAAHjQAAA5gnAnQgoAog4AAg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AjpF8Qg5AAgngnQgogoAAg4IAAnoQAAg5AogoQAngnA5AAIHUAAQA4AAAnAnQAoAoAAA5IAAHoQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Aj0GAQg4AAgognQgngoAAg4IAAnwQAAg5AngoQAognA4AAIHpAAQA4AAAoAnQAnAoAAA5IAAHwQAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AkBGGQg4AAgogoQgogoAAg4IAAn7QAAg4AogoQAngoA5AAIIDAAQA5AAAnAoQAoAoAAA4IAAH7QAAA4goAoQgnAog5AAg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AkTGMQg4AAgognQgogoAAg4IAAoIQAAg5AogoQAngnA5AAIInAAQA5AAAnAnQAnAoAAA5IAAIIQAAA4gnAoQgnAng5AAg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AkqGVQg5AAgngnQgogoAAg4IAAoaQAAg5AogoQAngnA5AAIJVAAQA5AAAoAnQAnAoAAA5IAAIaQAAA4gnAoQgoAng5AAg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AlLGiQg4AAgogoQgogoAAg4IAAozQAAg4AogoQAngoA5AAIKXAAQA5AAAnAoQAoAoAAA4IAAIzQAAA4goAoQgnAog5AAg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Al6GzQg4AAgognQgngoAAg4IAApWQAAg5AngoQAognA4AAIL1AAQA4AAAoAnQAnAoAAA5IAAJWQAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AnBHPQg4AAgogoQgogoAAg4IAAqNQAAg4AogoQAngoA5AAIODAAQA5AAAnAoQAoAoAAA4IAAKNQAAA4goAoQgnAog5AAg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AowH4Qg4AAgognQgngoAAg4IAArhQAAg4AngoQAogoA4AAIRhAAQA4AAAoAoQAnAoAAA4IAALhQAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AqrIoQg4AAgogoQgogoAAg4IAAs/QAAg4AogoQAngoA5AAIVXAAQA4AAAoAoQAnAoAAA4IAAM/QAAA4gnAoQgoAog4AAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AsJJMQg5AAgngoQgogoAAg4IAAuHQAAg4AogoQAngoA5AAIYUAAQA4AAAnAoQAoAoAAA4IAAOHQAAA4goAoQgnAog4AAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AtPJmQg4AAgognQgogoAAg4IAAu8QAAg4AogoQAngoA5AAIafAAQA5AAAnAoQAoAoAAA4IAAO8QAAA4goAoQgnAng5AAg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AuFJ7Qg5AAgngoQgognAAg5IAAvlQAAg4AogoQAngoA5AAIcLAAQA5AAAoAoQAnAoAAA4IAAPlQAAA5gnAnQgoAog5AAg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AuxKMQg5AAgngoQgogoAAg4IAAwHQAAg4AogoQAngoA5AAIdkAAQA4AAAoAoQAnAoAAA4IAAQHQAAA4gnAoQgoAog4AAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AvWKaQg5AAgngoQgognAAg5IAAwjQAAg4AogoQAngoA5AAIetAAQA5AAAoAoQAnAoAAA4IAAQjQAAA5gnAnQgoAog5AAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Av2KmQg5AAgngoQgognAAg5IAAw7QAAg4AogoQAngoA5AAIftAAQA5AAAoAoQAnAoAAA4IAAQ7QAAA5gnAnQgoAog5AAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AwSKwQg5AAgngnQgogoAAg4IAAxQQAAg5AogoQAngnA5AAMAglAAAQA5AAAnAnQAoAoAAA5IAARQQAAA4goAoQgnAng5AAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AwrK6Qg4AAgogoQgognAAg5IAAxjQAAg4AogoQAngoA5AAMAhXAAAQA5AAAnAoQAoAoAAA4IAARjQAAA5goAnQgnAog5AAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AxBLCQg5AAgngnQgogoAAg4IAAx0QAAg5AogoQAngnA5AAMAiEAAAQA4AAAoAnQAnAoAAA5IAAR0QAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AxVLKQg4AAgogoQgognAAg5IAAyDQAAg4AogoQAngoA5AAMAirAAAQA5AAAnAoQAoAoAAA4IAASDQAAA5goAnQgnAog5AAg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AxiLPQg4AAgogoQgognAAg5IAAyNQAAg4AogoQAngoA5AAMAjFAAAQA4AAAoAoQAoAoAAA4IAASNQAAA5goAnQgoAog4AAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AxrLSQg4AAgognQgngoAAg4IAAyUQAAg4AngoQAogoA4AAMAjXAAAQA4AAAoAoQAnAoAAA4IAASUQAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AxxLUQg4AAgognQgognAAg5IAAyZQAAg4AogoQAngoA5AAMAjjAAAQA5AAAnAoQAoAoAAA4IAASZQAAA5goAnQgnAng5AAg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Ax3LWQg4AAgognQgngnAAg5IAAydQAAg4AngoQAogoA4AAMAjvAAAQA4AAAoAoQAnAoAAA4IAASdQAAA5gnAnQgoAng4AAg");
	var mask_1_graphics_48 = new cjs.Graphics().p("Ax7LYQg4AAgognQgogoAAg4IAAygQAAg5AogoQAngnA5AAMAj3AAAQA5AAAnAnQAoAoAAA5IAASgQAAA4goAoQgnAng5AAg");
	var mask_1_graphics_49 = new cjs.Graphics().p("Ax/LaQg4AAgogoQgognAAg5IAAyjQAAg4AogoQAngoA5AAMAj/AAAQA5AAAnAoQAoAoAAA4IAASjQAAA5goAnQgnAog5AAg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AyDLbQg4AAgognQgngoAAg4IAAymQAAg4AngoQAogoA4AAMAkHAAAQA4AAAoAoQAnAoAAA4IAASmQAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AyGLcQg4AAgognQgngoAAg4IAAyoQAAg5AngoQAognA4AAMAkNAAAQA4AAAoAnQAnAoAAA5IAASoQAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AyILdQg5AAgngnQgogoAAg4IAAyqQAAg5AogoQAngnA5AAMAkSAAAQA4AAAnAnQAoAoAAA5IAASqQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AyLLeQg4AAgognQgogoAAg4IAAysQAAg5AogoQAngnA5AAMAkXAAAQA4AAAoAnQAoAoAAA5IAASsQAAA4goAoQgoAng4AAg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AyNLfQg4AAgogoQgognAAg4IAAyuQAAg4AogoQAngoA5AAMAkbAAAQA5AAAnAoQAoAoAAA4IAASuQAAA4goAnQgnAog5AAg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AyPLgQg4AAgogoQgognAAg5IAAyvQAAg4AogoQAngoA5AAMAkfAAAQA5AAAnAoQAoAoAAA4IAASvQAAA5goAnQgnAog5AAg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AyRLhQg4AAgogoQgogoAAg4IAAyxQAAg4AogoQAngoA5AAMAkjAAAQA5AAAnAoQAoAoAAA4IAASxQAAA4goAoQgnAog5AAg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AyTLhQg4AAgognQgogoAAg4IAAyyQAAg5AogoQAngnA5AAMAknAAAQA4AAAoAnQAoAoAAA5IAASyQAAA4goAoQgoAng4AAg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AyULiQg5AAgngoQgognAAg5IAAyzQAAg4AogoQAngoA5AAMAkpAAAQA5AAAoAoQAnAoAAA4IAASzQAAA5gnAnQgoAog5AAg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AyWLiQg4AAgognQgngoAAg4IAAy0QAAg5AngoQAognA4AAMAktAAAQA4AAAoAnQAnAoAAA5IAAS0QAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AyXLjQg4AAgogoQgognAAg5IAAy1QAAg4AogoQAngoA5AAMAkvAAAQA5AAAnAoQAnAoAAA4IAAS1QAAA5gnAnQgnAog5AAg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AyYLjQg4AAgognQgogoAAg4IAAy2QAAg5AogoQAngnA5AAMAkxAAAQA5AAAnAnQAoAoAAA5IAAS2QAAA4goAoQgnAng5AAg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AyZLjQg4AAgognQgognAAg5IAAy3QAAg4AogoQAngoA5AAMAkzAAAQA5AAAnAoQAoAoAAA4IAAS3QAAA5goAnQgnAng5AAg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AyaLkQg4AAgognQgogoAAg4IAAy4QAAg4AogoQAngoA5AAMAk1AAAQA5AAAnAoQAoAoAAA4IAAS4QAAA4goAoQgnAng5AAg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AybLkQg4AAgognQgogoAAg4IAAy4QAAg5AogoQAngnA5AAMAk3AAAQA5AAAnAnQAnAoAAA5IAAS4QAAA4gnAoQgnAng5AAg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AycLlQg4AAgogoQgngoAAg4IAAy5QAAg4AngoQAogoA4AAMAk5AAAQA4AAAoAoQAnAoAAA4IAAS5QAAA4gnAoQgoAog4AAg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AycLlQg5AAgngoQgognAAg5IAAy5QAAg4AogoQAngoA5AAMAk5AAAQA5AAAoAoQAnAoAAA4IAAS5QAAA5gnAnQgoAog5AAg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AydLlQg4AAgognQgogoAAg5IAAy5QAAg4AogoQAngoA5AAMAk7AAAQA4AAAoAoQAoAoAAA4IAAS5QAAA5goAoQgoAng4AAg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AydLlQg5AAgngnQgogoAAg4IAAy6QAAg5AogoQAngnA5AAMAk7AAAQA5AAAnAnQAoAoAAA5IAAS6QAAA4goAoQgnAng5AAg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AyeLmQg4AAgogoQgogoAAg4IAAy7QAAg4AogoQAngoA5AAMAk9AAAQA5AAAnAoQAnAoAAA4IAAS7QAAA4gnAoQgnAog5AAg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AyeLmQg5AAgngoQgogoAAg4IAAy7QAAg4AogoQAngoA5AAMAk+AAAQA4AAAnAoQAoAoAAA4IAAS7QAAA4goAoQgnAog4AAg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AyfLmQg4AAgogoQgngnAAg5IAAy7QAAg4AngoQAogoA4AAMAk/AAAQA4AAAoAoQAnAoAAA4IAAS7QAAA5gnAnQgoAog4AAg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AyfLmQg4AAgogoQgognAAg5IAAy7QAAg4AogoQAngoA5AAMAk/AAAQA4AAAoAoQAnAoAAA4IAAS7QAAA5gnAnQgoAog4AAg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AyfLmQg4AAgogoQgognAAg5IAAy7QAAg4AogoQAngoA5AAMAk/AAAQA5AAAnAoQAoAoAAA4IAAS7QAAA5goAnQgnAog5AAg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AyfLmQg4AAgogoQgognAAg5IAAy7QAAg4AogoQAngoA5AAMAk/AAAQA5AAAnAoQAoAoAAA4IAAS7QAAA5goAnQgnAog5AAg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AyfLmQg5AAgngoQgognAAg5IAAy7QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAS7QAAA5goAnQgnAog4AAg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AyfLmQg5AAgngoQgognAAg5IAAy7QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAS7QAAA5goAnQgnAog4AAg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AyfLmQg5AAgngoQgognAAg5IAAy7QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAS7QAAA5goAnQgnAog4AAg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AyfLmQg5AAgngoQgognAAg5IAAy7QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAS7QAAA5goAnQgnAog4AAg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AyfLmQg5AAgngoQgognAAg5IAAy7QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAS7QAAA5goAnQgnAog4AAg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AyfLmQg5AAgngoQgognAAg5IAAy7QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAS7QAAA5goAnQgnAog4AAg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AyfLmQg5AAgngoQgogoAAg4IAAy7QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAS7QAAA4goAoQgnAog4AAg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AyfLlQg5AAgngoQgognAAg5IAAy5QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAS5QAAA5goAnQgnAog4AAg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AyfLjQg5AAgngnQgogoAAg4IAAy2QAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAS2QAAA4goAoQgnAng4AAg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AyfLhQg5AAgngnQgogoAAg4IAAyyQAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAASyQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AyfLeQg5AAgngoQgognAAg4IAAysQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAASsQAAA4goAnQgnAog4AAg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AyfLZQg5AAgngnQgogoAAg4IAAyjQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAASjQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AyfLSQg5AAgngnQgogoAAg4IAAyUQAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAASUQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AyfLGQg5AAgngnQgogoAAg4IAAx8QAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAR8QAAA4goAoQgnAng4AAg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AyfKwQg5AAgngoQgognAAg5IAAxPQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAARPQAAA5goAnQgnAog4AAg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AyfKUQg5AAgngoQgogoAAg4IAAwXQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAQXQAAA4goAoQgnAog4AAg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AyfKAQg5AAgngnQgogoAAg4IAAvwQAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAPwQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AyfJzQg5AAgngnQgogoAAg4IAAvWQAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAPWQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AyfJpQg5AAgngnQgogoAAg4IAAvDQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAPDQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_173 = new cjs.Graphics().p("AyfJiQg5AAgngoQgognAAg5IAAuzQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAOzQAAA5goAnQgnAog4AAg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AyfJbQg5AAgngnQgogoAAg4IAAunQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAOnQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AyfJWQg5AAgngnQgogoAAg5IAAubQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAObQAAA5goAoQgnAng4AAg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AyfJSQg5AAgngoQgognAAg5IAAuTQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAOTQAAA5goAnQgnAog4AAg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AyfJPQg5AAgngoQgognAAg4IAAuOQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAOOQAAA4goAnQgnAog4AAg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AyfJOQg5gBgngnQgognAAg5IAAuLQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAOLQAAA5goAnQgnAng4ABg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AyfJMQg5AAgngnQgogoAAg4IAAuIQAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAOIQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_180 = new cjs.Graphics().p("AyfJLQg5AAgngnQgogoAAg4IAAuGQAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAOGQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_181 = new cjs.Graphics().p("AyfJKQg5AAgngnQgognAAg5IAAuFQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAOFQAAA5goAnQgnAng4AAg");
	var mask_1_graphics_182 = new cjs.Graphics().p("AyfJKQg5AAgngoQgognAAg5IAAuDQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAODQAAA5goAnQgnAog4AAg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AyfJJQg5AAgngnQgogoAAg4IAAuCQAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAOCQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_184 = new cjs.Graphics().p("AyfJJQg5AAgngoQgognAAg5IAAuBQAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAOBQAAA5goAnQgnAog4AAg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AyfJIQg5AAgngnQgogoAAg4IAAuAQAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAOAQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_186 = new cjs.Graphics().p("AyfJIQg5AAgngnQgogoAAg5IAAt/QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN/QAAA5goAoQgnAng4AAg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AyfJIQg5AAgngoQgogoAAg4IAAt/QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN/QAAA4goAoQgnAog4AAg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AyfJHQg5AAgngnQgogoAAg4IAAt+QAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAN+QAAA4goAoQgnAng4AAg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AyfJHQg5AAgngnQgogoAAg5IAAt9QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN9QAAA5goAoQgnAng4AAg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AyfJHQg5AAgngoQgognAAg5IAAt9QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN9QAAA5goAnQgnAog4AAg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AyfJHQg5AAgngoQgognAAg5IAAt9QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN9QAAA5goAnQgnAog4AAg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AyfJGQg5AAgngnQgognAAg5IAAt9QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN9QAAA5goAnQgnAng4AAg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AyfJGQg5AAgngnQgogoAAg4IAAt8QAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAN8QAAA4goAoQgnAng4AAg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AyfJGQg5AAgngnQgogoAAg4IAAt8QAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAN8QAAA4goAoQgnAng4AAg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AyfJGQg5AAgngnQgogoAAg4IAAt8QAAg5AogoQAngnA5AAMAlAAAAQA4AAAnAnQAoAoAAA5IAAN8QAAA4goAoQgnAng4AAg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AyfJGQg5AAgngoQgognAAg4IAAt8QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN8QAAA4goAnQgnAog4AAg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AyfJGQg5AAgngoQgognAAg4IAAt8QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN8QAAA4goAnQgnAog4AAg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AyfJGQg5AAgngoQgognAAg4IAAt8QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN8QAAA4goAnQgnAog4AAg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AyfJGQg5AAgngoQgognAAg4IAAt8QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN8QAAA4goAnQgnAog4AAg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AyfJGQg5AAgngoQgognAAg4IAAt8QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN8QAAA4goAnQgnAog4AAg");
	var mask_1_graphics_201 = new cjs.Graphics().p("AyfJGQg5AAgngoQgognAAg4IAAt8QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN8QAAA4goAnQgnAog4AAg");
	var mask_1_graphics_279 = new cjs.Graphics().p("AyfJGQg5AAgngoQgognAAg4IAAt8QAAg4AogoQAngoA5AAMAlAAAAQA4AAAnAoQAoAoAAA4IAAN8QAAA4goAnQgnAog4AAg");
	var mask_1_graphics_280 = new cjs.Graphics().p("AydJFQg4AAgognQgngoAAg4IAAt7QAAg4AngoQAogoA4AAMAk7AAAQA4AAAoAoQAnAoAAA4IAAN7QAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_281 = new cjs.Graphics().p("AyXJEQg4AAgognQgogoAAg4IAAt4QAAg5AogoQAngnA5AAMAkvAAAQA5AAAnAnQAnAoAAA5IAAN4QAAA4gnAoQgnAng5AAg");
	var mask_1_graphics_282 = new cjs.Graphics().p("AyOJCQg4AAgognQgngoAAg4IAAt0QAAg5AngoQAognA4AAMAkdAAAQA4AAAoAnQAnAoAAA5IAAN0QAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_283 = new cjs.Graphics().p("Ax/I/Qg4AAgognQgogoAAg5IAAttQAAg4AogoQAngoA5AAMAj/AAAQA5AAAnAoQAoAoAAA4IAANtQAAA5goAoQgnAng5AAg");
	var mask_1_graphics_284 = new cjs.Graphics().p("AxpI6Qg5AAgngnQgogoAAg4IAAtkQAAg5AogoQAngnA5AAMAjUAAAQA4AAAnAnQAoAoAAA5IAANkQAAA4goAoQgnAng4AAg");
	var mask_1_graphics_285 = new cjs.Graphics().p("AxIIzQg5AAgngnQgogoAAg4IAAtWQAAg5AogoQAngnA5AAMAiRAAAQA5AAAnAnQAoAoAAA5IAANWQAAA4goAoQgnAng5AAg");
	var mask_1_graphics_286 = new cjs.Graphics().p("AwTIoQg4AAgogoQgogoAAg4IAAs/QAAg4AogoQAngoA5AAMAgnAAAQA4AAAoAoQAnAoAAA4IAAM/QAAA4gnAoQgoAog4AAg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AuyITQg4AAgogoQgngnAAg5IAAsVQAAg4AngoQAogoA4AAIdlAAQA4AAAoAoQAnAoAAA4IAAMVQAAA5gnAnQgoAog4AAg");
	var mask_1_graphics_288 = new cjs.Graphics().p("AsDHtQg5AAgngnQgogoAAg5IAArJQAAg4AogoQAngoA5AAIYHAAQA5AAAoAoQAnAoAAA4IAALJQAAA5gnAoQgoAng5AAg");
	var mask_1_graphics_289 = new cjs.Graphics().p("AppHMQg5AAgngoQgognAAg5IAAqHQAAg4AogoQAngoA5AAITUAAQA4AAAoAoQAnAoAAA4IAAKHQAAA5gnAnQgoAog4AAg");
	var mask_1_graphics_290 = new cjs.Graphics().p("AoHG2Qg4AAgognQgognAAg5IAApdQAAg4AogoQAngoA5AAIQPAAQA4AAAoAoQAoAoAAA4IAAJdQAAA5goAnQgoAng4AAg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AnBGnQg5AAgngnQgogoAAg4IAAo/QAAg4AogoQAngoA5AAIOEAAQA4AAAnAoQAoAoAAA4IAAI/QAAA4goAoQgnAng4AAg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AmMGcQg4AAgogoQgngnAAg5IAAonQAAg4AngoQAogoA4AAIMZAAQA4AAAoAoQAnAoAAA4IAAInQAAA5gnAnQgoAog4AAg");
	var mask_1_graphics_293 = new cjs.Graphics().p("AlgGSQg5AAgngnQgognAAg5IAAoVQAAg4AogoQAngoA5AAILBAAQA5AAAoAoQAnAoAAA4IAAIVQAAA5gnAnQgoAng5AAg");
	var mask_1_graphics_294 = new cjs.Graphics().p("Ak8GLQg5AAgngoQgognAAg5IAAoFQAAg4AogoQAngoA5AAIJ5AAQA5AAAoAoQAnAoAAA4IAAIFQAAA5gnAnQgoAog5AAg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AkeGEQg4AAgogoQgngnAAg4IAAn4QAAg4AngoQAogoA4AAII9AAQA4AAAoAoQAnAoAAA4IAAH4QAAA4gnAnQgoAog4AAg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AkMGAQg4AAgognQgogoAAg4IAAnwQAAg5AogoQAngnA5AAIIZAAQA5AAAnAnQAoAoAAA5IAAHwQAAA4goAoQgnAng5AAg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AkCF+Qg4AAgogoQgngnAAg5IAAnrQAAg4AngoQAogoA4AAIIFAAQA4AAAoAoQAnAoAAA4IAAHrQAAA5gnAnQgoAog4AAg");
	var mask_1_graphics_298 = new cjs.Graphics().p("Aj6F8Qg4AAgognQgogoAAg4IAAnoQAAg5AogoQAngnA5AAIH1AAQA5AAAnAnQAoAoAAA5IAAHoQAAA4goAoQgnAng5AAg");
	var mask_1_graphics_299 = new cjs.Graphics().p("Aj0F7Qg4AAgogoQgngnAAg4IAAnmQAAg4AngoQAogoA4AAIHpAAQA4AAAoAoQAnAoAAA4IAAHmQAAA4gnAnQgoAog4AAg");
	var mask_1_graphics_300 = new cjs.Graphics().p("AjvF6Qg4AAgogoQgngnAAg5IAAnjQAAg4AngoQAogoA4AAIHfAAQA4AAAoAoQAnAoAAA4IAAHjQAAA5gnAnQgoAog4AAg");
	var mask_1_graphics_301 = new cjs.Graphics().p("AjqF5Qg5AAgngnQgogoAAg5IAAnhQAAg4AogoQAngoA5AAIHWAAQA4AAAoAoQAnAoAAA4IAAHhQAAA5gnAoQgoAng4AAg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AjnF4Qg4AAgognQgngoAAg4IAAngQAAg5AngoQAognA4AAIHPAAQA4AAAoAnQAnAoAAA5IAAHgQAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AjkF3Qg4AAgognQgngnAAg5IAAnfQAAg4AngoQAogoA4AAIHJAAQA4AAAoAoQAnAoAAA4IAAHfQAAA5gnAnQgoAng4AAg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AjhF3Qg4AAgogoQgognAAg4IAAneQAAg4AogoQAngoA5AAIHDAAQA5AAAnAoQAnAoAAA4IAAHeQAAA4gnAnQgnAog5AAg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AjeF2Qg5AAgngnQgogoAAg4IAAndQAAg4AogoQAngoA5AAIG9AAQA5AAAoAoQAnAoAAA4IAAHdQAAA4gnAoQgoAng5AAg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AjcF2Qg5AAgngoQgognAAg4IAAncQAAg4AogoQAngoA5AAIG6AAQA4AAAnAoQAoAoAAA4IAAHcQAAA4goAnQgnAog4AAg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AjbF1Qg4AAgognQgngnAAg5IAAnbQAAg4AngoQAogoA4AAIG3AAQA4AAAoAoQAnAoAAA4IAAHbQAAA5gnAnQgoAng4AAg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AjZF1Qg4AAgognQgogoAAg4IAAnaQAAg5AogoQAngnA5AAIGzAAQA5AAAnAnQAoAoAAA5IAAHaQAAA4goAoQgnAng5AAg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AjYF1Qg4AAgognQgogoAAg5IAAnZQAAg4AogoQAngoA5AAIGxAAQA5AAAnAoQAnAoAAA4IAAHZQAAA5gnAoQgnAng5AAg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AjXF1Qg4AAgogoQgognAAg5IAAnZQAAg4AogoQAngoA5AAIGvAAQA4AAAoAoQAnAoAAA4IAAHZQAAA5gnAnQgoAog4AAg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AjWF1Qg4AAgogoQgogoAAg4IAAnZQAAg4AogoQAngoA5AAIGtAAQA5AAAnAoQAoAoAAA4IAAHZQAAA4goAoQgnAog5AAg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AjVF0Qg4AAgognQgogoAAg4IAAnYQAAg5AogoQAngnA5AAIGrAAQA5AAAnAnQAoAoAAA5IAAHYQAAA4goAoQgnAng5AAg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AjUF0Qg5AAgngnQgogoAAg4IAAnYQAAg5AogoQAngnA5AAIGqAAQA4AAAoAnQAnAoAAA5IAAHYQAAA4gnAoQgoAng4AAg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AjUF0Qg4AAgognQgogoAAg4IAAnYQAAg5AogoQAngnA5AAIGpAAQA5AAAnAnQAoAoAAA5IAAHYQAAA4goAoQgnAng5AAg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AjUF0Qg4AAgognQgngoAAg5IAAnXQAAg4AngoQAogoA4AAIGpAAQA4AAAoAoQAnAoAAA4IAAHXQAAA5gnAoQgoAng4AAg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AjTF0Qg5AAgngnQgogoAAg5IAAnXQAAg4AogoQAngoA5AAIGoAAQA4AAAnAoQAoAoAAA4IAAHXQAAA5goAoQgnAng4AAg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AjTF0Qg5AAgngnQgogoAAg5IAAnXQAAg4AogoQAngoA5AAIGoAAQA4AAAnAoQAoAoAAA4IAAHXQAAA5goAoQgnAng4AAg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AjTF0Qg5AAgngnQgogoAAg5IAAnXQAAg4AogoQAngoA5AAIGoAAQA4AAAnAoQAoAoAAA4IAAHXQAAA5goAoQgnAng4AAg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AjTF0Qg5AAgngnQgogoAAg5IAAnXQAAg4AogoQAngoA5AAIGoAAQA4AAAnAoQAoAoAAA4IAAHXQAAA5goAoQgnAng4AAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:132,y:74.2}).wait(1).to({graphics:mask_1_graphics_1,x:34.8,y:37.2}).wait(18).to({graphics:mask_1_graphics_19,x:34.8,y:37.2}).wait(1).to({graphics:mask_1_graphics_20,x:34.95,y:37.25}).wait(1).to({graphics:mask_1_graphics_21,x:35.225,y:37.375}).wait(1).to({graphics:mask_1_graphics_22,x:35.65,y:37.525}).wait(1).to({graphics:mask_1_graphics_23,x:36.225,y:37.75}).wait(1).to({graphics:mask_1_graphics_24,x:37,y:38.025}).wait(1).to({graphics:mask_1_graphics_25,x:38.025,y:38.425}).wait(1).to({graphics:mask_1_graphics_26,x:39.375,y:38.95}).wait(1).to({graphics:mask_1_graphics_27,x:41.15,y:39.625}).wait(1).to({graphics:mask_1_graphics_28,x:43.5,y:40.525}).wait(1).to({graphics:mask_1_graphics_29,x:46.75,y:41.75}).wait(1).to({graphics:mask_1_graphics_30,x:51.425,y:43.525}).wait(1).to({graphics:mask_1_graphics_31,x:58.575,y:46.25}).wait(1).to({graphics:mask_1_graphics_32,x:69.625,y:50.45}).wait(1).to({graphics:mask_1_graphics_33,x:81.95,y:55.15}).wait(1).to({graphics:mask_1_graphics_34,x:91.4,y:58.75}).wait(1).to({graphics:mask_1_graphics_35,x:98.375,y:61.4}).wait(1).to({graphics:mask_1_graphics_36,x:103.8,y:63.475}).wait(1).to({graphics:mask_1_graphics_37,x:108.2,y:65.15}).wait(1).to({graphics:mask_1_graphics_38,x:111.9,y:66.55}).wait(1).to({graphics:mask_1_graphics_39,x:115.1,y:67.775}).wait(1).to({graphics:mask_1_graphics_40,x:117.9,y:68.825}).wait(1).to({graphics:mask_1_graphics_41,x:120.375,y:69.775}).wait(1).to({graphics:mask_1_graphics_42,x:122.6,y:70.625}).wait(1).to({graphics:mask_1_graphics_43,x:124.575,y:71.375}).wait(1).to({graphics:mask_1_graphics_44,x:125.85,y:71.875}).wait(1).to({graphics:mask_1_graphics_45,x:126.725,y:72.2}).wait(1).to({graphics:mask_1_graphics_46,x:127.375,y:72.45}).wait(1).to({graphics:mask_1_graphics_47,x:127.925,y:72.65}).wait(1).to({graphics:mask_1_graphics_48,x:128.375,y:72.825}).wait(1).to({graphics:mask_1_graphics_49,x:128.775,y:72.975}).wait(1).to({graphics:mask_1_graphics_50,x:129.125,y:73.1}).wait(1).to({graphics:mask_1_graphics_51,x:129.425,y:73.225}).wait(1).to({graphics:mask_1_graphics_52,x:129.7,y:73.325}).wait(1).to({graphics:mask_1_graphics_53,x:129.95,y:73.425}).wait(1).to({graphics:mask_1_graphics_54,x:130.175,y:73.5}).wait(1).to({graphics:mask_1_graphics_55,x:130.375,y:73.575}).wait(1).to({graphics:mask_1_graphics_56,x:130.575,y:73.65}).wait(1).to({graphics:mask_1_graphics_57,x:130.75,y:73.725}).wait(1).to({graphics:mask_1_graphics_58,x:130.9,y:73.775}).wait(1).to({graphics:mask_1_graphics_59,x:131.025,y:73.825}).wait(1).to({graphics:mask_1_graphics_60,x:131.15,y:73.875}).wait(1).to({graphics:mask_1_graphics_61,x:131.275,y:73.925}).wait(1).to({graphics:mask_1_graphics_62,x:131.375,y:73.95}).wait(1).to({graphics:mask_1_graphics_63,x:131.475,y:74}).wait(1).to({graphics:mask_1_graphics_64,x:131.55,y:74.025}).wait(1).to({graphics:mask_1_graphics_65,x:131.625,y:74.05}).wait(1).to({graphics:mask_1_graphics_66,x:131.7,y:74.075}).wait(1).to({graphics:mask_1_graphics_67,x:131.75,y:74.1}).wait(1).to({graphics:mask_1_graphics_68,x:131.8,y:74.125}).wait(1).to({graphics:mask_1_graphics_69,x:131.85,y:74.15}).wait(1).to({graphics:mask_1_graphics_70,x:131.9,y:74.15}).wait(1).to({graphics:mask_1_graphics_71,x:131.925,y:74.175}).wait(1).to({graphics:mask_1_graphics_72,x:131.95,y:74.175}).wait(1).to({graphics:mask_1_graphics_73,x:131.975,y:74.2}).wait(1).to({graphics:mask_1_graphics_74,x:131.975,y:74.2}).wait(1).to({graphics:mask_1_graphics_75,x:132,y:74.2}).wait(1).to({graphics:mask_1_graphics_76,x:132,y:74.2}).wait(1).to({graphics:mask_1_graphics_77,x:132,y:74.2}).wait(1).to({graphics:mask_1_graphics_78,x:132,y:74.2}).wait(1).to({graphics:mask_1_graphics_79,x:132,y:74.2}).wait(80).to({graphics:mask_1_graphics_159,x:132,y:74.2}).wait(1).to({graphics:mask_1_graphics_160,x:132,y:74.15}).wait(1).to({graphics:mask_1_graphics_161,x:132,y:74.075}).wait(1).to({graphics:mask_1_graphics_162,x:132,y:73.925}).wait(1).to({graphics:mask_1_graphics_163,x:132,y:73.725}).wait(1).to({graphics:mask_1_graphics_164,x:132,y:73.4}).wait(1).to({graphics:mask_1_graphics_165,x:132,y:72.95}).wait(1).to({graphics:mask_1_graphics_166,x:132,y:72.225}).wait(1).to({graphics:mask_1_graphics_167,x:132,y:71.025}).wait(1).to({graphics:mask_1_graphics_168,x:132,y:68.775}).wait(1).to({graphics:mask_1_graphics_169,x:132,y:65.95}).wait(1).to({graphics:mask_1_graphics_170,x:132,y:64.025}).wait(1).to({graphics:mask_1_graphics_171,x:132,y:62.725}).wait(1).to({graphics:mask_1_graphics_172,x:132,y:61.75}).wait(1).to({graphics:mask_1_graphics_173,x:132,y:60.975}).wait(1).to({graphics:mask_1_graphics_174,x:132,y:60.35}).wait(1).to({graphics:mask_1_graphics_175,x:132,y:59.8}).wait(1).to({graphics:mask_1_graphics_176,x:132,y:59.35}).wait(1).to({graphics:mask_1_graphics_177,x:132,y:59.1}).wait(1).to({graphics:mask_1_graphics_178,x:132,y:58.95}).wait(1).to({graphics:mask_1_graphics_179,x:132,y:58.825}).wait(1).to({graphics:mask_1_graphics_180,x:132,y:58.725}).wait(1).to({graphics:mask_1_graphics_181,x:132,y:58.65}).wait(1).to({graphics:mask_1_graphics_182,x:132,y:58.575}).wait(1).to({graphics:mask_1_graphics_183,x:132,y:58.525}).wait(1).to({graphics:mask_1_graphics_184,x:132,y:58.475}).wait(1).to({graphics:mask_1_graphics_185,x:132,y:58.425}).wait(1).to({graphics:mask_1_graphics_186,x:132,y:58.4}).wait(1).to({graphics:mask_1_graphics_187,x:132,y:58.35}).wait(1).to({graphics:mask_1_graphics_188,x:132,y:58.325}).wait(1).to({graphics:mask_1_graphics_189,x:132,y:58.3}).wait(1).to({graphics:mask_1_graphics_190,x:132,y:58.275}).wait(1).to({graphics:mask_1_graphics_191,x:132,y:58.275}).wait(1).to({graphics:mask_1_graphics_192,x:132,y:58.25}).wait(1).to({graphics:mask_1_graphics_193,x:132,y:58.225}).wait(1).to({graphics:mask_1_graphics_194,x:132,y:58.225}).wait(1).to({graphics:mask_1_graphics_195,x:132,y:58.225}).wait(1).to({graphics:mask_1_graphics_196,x:132,y:58.2}).wait(1).to({graphics:mask_1_graphics_197,x:132,y:58.2}).wait(1).to({graphics:mask_1_graphics_198,x:132,y:58.2}).wait(1).to({graphics:mask_1_graphics_199,x:132,y:58.2}).wait(1).to({graphics:mask_1_graphics_200,x:132,y:58.2}).wait(1).to({graphics:mask_1_graphics_201,x:132,y:58.2}).wait(78).to({graphics:mask_1_graphics_279,x:132,y:58.2}).wait(1).to({graphics:mask_1_graphics_280,x:131.725,y:58.15}).wait(1).to({graphics:mask_1_graphics_281,x:131.15,y:58.025}).wait(1).to({graphics:mask_1_graphics_282,x:130.225,y:57.825}).wait(1).to({graphics:mask_1_graphics_283,x:128.775,y:57.5}).wait(1).to({graphics:mask_1_graphics_284,x:126.6,y:57.025}).wait(1).to({graphics:mask_1_graphics_285,x:123.3,y:56.325}).wait(1).to({graphics:mask_1_graphics_286,x:117.95,y:55.15}).wait(1).to({graphics:mask_1_graphics_287,x:108.225,y:53.05}).wait(1).to({graphics:mask_1_graphics_288,x:90.8,y:49.3}).wait(1).to({graphics:mask_1_graphics_289,x:75.4,y:45.975}).wait(1).to({graphics:mask_1_graphics_290,x:65.55,y:43.85}).wait(1).to({graphics:mask_1_graphics_291,x:58.6,y:42.35}).wait(1).to({graphics:mask_1_graphics_292,x:53.225,y:41.175}).wait(1).to({graphics:mask_1_graphics_293,x:48.9,y:40.25}).wait(1).to({graphics:mask_1_graphics_294,x:45.3,y:39.475}).wait(1).to({graphics:mask_1_graphics_295,x:42.225,y:38.8}).wait(1).to({graphics:mask_1_graphics_296,x:40.475,y:38.425}).wait(1).to({graphics:mask_1_graphics_297,x:39.425,y:38.2}).wait(1).to({graphics:mask_1_graphics_298,x:38.65,y:38.025}).wait(1).to({graphics:mask_1_graphics_299,x:38.025,y:37.9}).wait(1).to({graphics:mask_1_graphics_300,x:37.525,y:37.775}).wait(1).to({graphics:mask_1_graphics_301,x:37.1,y:37.7}).wait(1).to({graphics:mask_1_graphics_302,x:36.725,y:37.625}).wait(1).to({graphics:mask_1_graphics_303,x:36.425,y:37.55}).wait(1).to({graphics:mask_1_graphics_304,x:36.15,y:37.5}).wait(1).to({graphics:mask_1_graphics_305,x:35.9,y:37.45}).wait(1).to({graphics:mask_1_graphics_306,x:35.7,y:37.4}).wait(1).to({graphics:mask_1_graphics_307,x:35.525,y:37.35}).wait(1).to({graphics:mask_1_graphics_308,x:35.375,y:37.325}).wait(1).to({graphics:mask_1_graphics_309,x:35.25,y:37.3}).wait(1).to({graphics:mask_1_graphics_310,x:35.15,y:37.275}).wait(1).to({graphics:mask_1_graphics_311,x:35.05,y:37.25}).wait(1).to({graphics:mask_1_graphics_312,x:34.975,y:37.225}).wait(1).to({graphics:mask_1_graphics_313,x:34.9,y:37.225}).wait(1).to({graphics:mask_1_graphics_314,x:34.875,y:37.225}).wait(1).to({graphics:mask_1_graphics_315,x:34.825,y:37.2}).wait(1).to({graphics:mask_1_graphics_316,x:34.8,y:37.2}).wait(1).to({graphics:mask_1_graphics_317,x:34.8,y:37.2}).wait(1).to({graphics:mask_1_graphics_318,x:34.8,y:37.2}).wait(1).to({graphics:mask_1_graphics_319,x:34.8,y:37.2}).wait(43));

	// T2
	this.instance_3 = new lib.Symbol26();
	this.instance_3.setTransform(133.75,76.6,1,1,0,0,0,119,30.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(170).to({_off:false},0).to({alpha:1},31,cjs.Ease.get(1)).wait(78).to({y:105.8},13,cjs.Ease.quadIn).to({_off:true},1).wait(69));

	// T
	this.instance_4 = new lib.Symbol24copy2();
	this.instance_4.setTransform(124.25,123.8,1,1,0,0,0,109.5,42.9);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).to({y:89.4},39,cjs.Ease.quintOut).wait(80).to({alpha:0},11,cjs.Ease.cubicIn).to({_off:true},1).wait(191));

	// T
	this.instance_5 = new lib.Symbol24copy();
	this.instance_5.setTransform(124.25,123.4,1,1,0,0,0,109.5,42.9);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({y:89.4},39,cjs.Ease.quintOut).wait(86).to({alpha:0},11,cjs.Ease.cubicIn).to({_off:true},1).wait(191));

	// T
	this.instance_6 = new lib.Symbol24();
	this.instance_6.setTransform(124.25,117,1,1,0,0,0,109.5,42.9);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({y:89.4},39,cjs.Ease.quintOut).wait(92).to({alpha:0},11,cjs.Ease.cubicIn).to({_off:true},1).wait(191));

	// LOGO
	this.instance_7 = new lib.Symbol25();
	this.instance_7.setTransform(21.75,27.3,1,1,0,0,0,4,9.7);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:4.1,scaleX:2.9042,scaleY:2.9042,x:29.4,y:37},0).wait(19).to({regX:72.2,scaleX:2.9012,scaleY:2.9012,x:226.95},0).wait(1).to({scaleX:2.8958,scaleY:2.8958,x:226.6,y:36.95},0).wait(1).to({scaleX:2.8878,scaleY:2.8878,x:226,y:36.9},0).wait(1).to({scaleX:2.8765,scaleY:2.8765,x:225.2,y:36.85},0).wait(1).to({scaleX:2.8613,scaleY:2.8613,x:224.1,y:36.75},0).wait(1).to({scaleX:2.8411,scaleY:2.8411,x:222.65,y:36.65},0).wait(1).to({scaleX:2.8148,scaleY:2.8148,x:220.7,y:36.55},0).wait(1).to({scaleX:2.78,scaleY:2.78,x:218.2,y:36.35},0).wait(1).to({scaleX:2.7336,scaleY:2.7336,x:214.85,y:36.1},0).wait(1).to({scaleX:2.67,scaleY:2.67,x:210.25,y:35.8},0).wait(1).to({scaleX:2.5786,scaleY:2.5786,x:203.65,y:35.3},0).wait(1).to({scaleX:2.4383,scaleY:2.4383,x:193.55,y:34.6},0).wait(1).to({scaleX:2.2221,scaleY:2.2221,x:178,y:33.5},0).wait(1).to({scaleX:1.9807,scaleY:1.9807,x:160.55,y:32.25},0).wait(1).to({scaleX:1.7952,scaleY:1.7952,x:147.15,y:31.3},0).wait(1).to({scaleX:1.6586,scaleY:1.6586,x:137.3,y:30.65},0).wait(1).to({scaleX:1.5525,scaleY:1.5525,x:129.7,y:30.1},0).wait(1).to({scaleX:1.4661,scaleY:1.4661,x:123.45,y:29.65},0).wait(1).to({scaleX:1.3935,scaleY:1.3935,x:118.2,y:29.25},0).wait(1).to({scaleX:1.331,scaleY:1.331,x:113.7,y:28.95},0).wait(1).to({scaleX:1.2763,scaleY:1.2763,x:109.75,y:28.7},0).wait(1).to({scaleX:1.2278,scaleY:1.2278,x:106.25,y:28.45},0).wait(1).to({scaleX:1.1843,scaleY:1.1843,x:103.1,y:28.25},0).wait(1).to({scaleX:1.1454,scaleY:1.1454,x:100.3,y:28},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,x:98.5,y:27.85},0).wait(1).to({scaleX:1.1035,scaleY:1.1035,x:97.25,y:27.8},0).wait(1).to({scaleX:1.0906,scaleY:1.0906,x:96.35,y:27.75},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:95.55,y:27.7},0).wait(1).to({scaleX:1.071,scaleY:1.071,x:94.9,y:27.65},0).wait(1).to({scaleX:1.0632,scaleY:1.0632,x:94.35,y:27.6},0).wait(1).to({scaleX:1.0564,scaleY:1.0564,x:93.85,y:27.55},0).wait(1).to({scaleX:1.0503,scaleY:1.0503,x:93.45},0).wait(1).to({scaleX:1.0449,scaleY:1.0449,x:93.05,y:27.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:92.7},0).wait(1).to({scaleX:1.0356,scaleY:1.0356,x:92.35,y:27.45},0).wait(1).to({scaleX:1.0316,scaleY:1.0316,x:92.1},0).wait(1).to({scaleX:1.028,scaleY:1.028,x:91.8,y:27.4},0).wait(1).to({scaleX:1.0247,scaleY:1.0247,x:91.6},0).wait(1).to({scaleX:1.0217,scaleY:1.0217,x:91.35},0).wait(1).to({scaleX:1.019,scaleY:1.019,x:91.15},0).wait(1).to({scaleX:1.0165,scaleY:1.0165,x:91,y:27.35},0).wait(1).to({scaleX:1.0143,scaleY:1.0143,x:90.85},0).wait(1).to({scaleX:1.0123,scaleY:1.0123,x:90.7,y:27.3},0).wait(1).to({scaleX:1.0104,scaleY:1.0104,x:90.55,y:27.35},0).wait(1).to({scaleX:1.0088,scaleY:1.0088,x:90.45},0).wait(1).to({scaleX:1.0073,scaleY:1.0073,x:90.35,y:27.3},0).wait(1).to({scaleX:1.006,scaleY:1.006,x:90.25},0).wait(1).to({scaleX:1.0048,scaleY:1.0048,x:90.15},0).wait(1).to({scaleX:1.0038,scaleY:1.0038,x:90.05},0).wait(1).to({scaleX:1.0029,scaleY:1.0029,x:90},0).wait(1).to({scaleX:1.0021,scaleY:1.0021,x:89.95,y:27.25},0).wait(1).to({scaleX:1.0015,scaleY:1.0015,x:89.9},0).wait(1).to({scaleX:1.001,scaleY:1.001,x:89.85},0).wait(1).to({scaleX:1.0006,scaleY:1.0006},0).wait(1).to({scaleX:1.0003,scaleY:1.0003,x:89.8},0).wait(1).to({scaleX:1.0001,scaleY:1.0001},0).wait(1).to({scaleX:1,scaleY:1,x:89.85,y:27.3},0).wait(1).to({scaleX:0.9999,scaleY:0.9999},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:4,x:21.75},0).wait(201).to({regX:72.2,scaleX:1.0054,scaleY:1.0054,x:90.35},0).wait(1).to({scaleX:1.0165,scaleY:1.0165,x:91.15,y:27.35},0).wait(1).to({scaleX:1.0348,scaleY:1.0348,x:92.45,y:27.45},0).wait(1).to({scaleX:1.0631,scaleY:1.0631,x:94.5,y:27.6},0).wait(1).to({scaleX:1.1056,scaleY:1.1056,x:97.6,y:27.8},0).wait(1).to({scaleX:1.1706,scaleY:1.1706,x:102.25,y:28.15},0).wait(1).to({scaleX:1.2755,scaleY:1.2755,x:109.85,y:28.65},0).wait(1).to({scaleX:1.466,scaleY:1.466,x:123.6,y:29.65},0).wait(1).to({scaleX:1.8073,scaleY:1.8073,x:148.25,y:31.4},0).wait(1).to({scaleX:2.1091,scaleY:2.1091,x:170,y:32.95},0).wait(1).to({scaleX:2.3017,scaleY:2.3017,x:183.95,y:33.95},0).wait(1).to({scaleX:2.4381,scaleY:2.4381,x:193.8,y:34.6},0).wait(1).to({scaleX:2.543,scaleY:2.543,x:201.35,y:35.15},0).wait(1).to({scaleX:2.6279,scaleY:2.6279,x:207.5,y:35.6},0).wait(1).to({scaleX:2.6987,scaleY:2.6987,x:212.6,y:35.95},0).wait(1).to({scaleX:2.7589,scaleY:2.7589,x:216.95,y:36.25},0).wait(1).to({scaleX:2.793,scaleY:2.793,x:219.4,y:36.45},0).wait(1).to({scaleX:2.8137,scaleY:2.8137,x:220.9,y:36.55},0).wait(1).to({scaleX:2.8289,scaleY:2.8289,x:222,y:36.6},0).wait(1).to({scaleX:2.841,scaleY:2.841,x:222.85,y:36.65},0).wait(1).to({scaleX:2.851,scaleY:2.851,x:223.6,y:36.7},0).wait(1).to({scaleX:2.8594,scaleY:2.8594,x:224.2,y:36.8},0).wait(1).to({scaleX:2.8665,scaleY:2.8665,x:224.7},0).wait(1).to({scaleX:2.8726,scaleY:2.8726,x:225.15},0).wait(1).to({scaleX:2.8779,scaleY:2.8779,x:225.55,y:36.85},0).wait(1).to({scaleX:2.8825,scaleY:2.8825,x:225.85},0).wait(1).to({scaleX:2.8865,scaleY:2.8865,x:226.15,y:36.9},0).wait(1).to({scaleX:2.8899,scaleY:2.8899,x:226.4,y:36.95},0).wait(1).to({scaleX:2.8929,scaleY:2.8929,x:226.6},0).wait(1).to({scaleX:2.8955,scaleY:2.8955,x:226.8},0).wait(1).to({scaleX:2.8976,scaleY:2.8976,x:226.95},0).wait(1).to({scaleX:2.8994,scaleY:2.8994,x:227.1},0).wait(1).to({scaleX:2.9009,scaleY:2.9009,x:227.2,y:37},0).wait(1).to({scaleX:2.9021,scaleY:2.9021,x:227.3},0).wait(1).to({scaleX:2.903,scaleY:2.903,x:227.35},0).wait(1).to({scaleX:2.9036,scaleY:2.9036,x:227.4},0).wait(1).to({scaleX:2.9041,scaleY:2.9041},0).wait(1).to({scaleX:2.9043,scaleY:2.9043,x:227.45,y:36.95},0).wait(2).to({regX:4.1,scaleX:2.9042,scaleY:2.9042,x:29.4,y:37},0).to({_off:true},28).wait(15));

	// Layer_17
	this.instance_8 = new lib.Symbol32();
	this.instance_8.setTransform(140.45,131.6,0.6203,1.2996,-14.9986,0,0,482.2,61.8);
	this.instance_8.compositeOperation = "lighter";
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).wait(1).to({regX:482.3,regY:61.7,scaleX:0.6205,scaleY:1.2994,x:140.6,y:131.45},0).wait(1).to({scaleX:0.6214,scaleY:1.2987,x:140.85},0).wait(1).to({scaleX:0.623,scaleY:1.2975,x:141.35,y:131.5},0).wait(1).to({scaleX:0.6252,scaleY:1.2957,x:142.1},0).wait(1).to({scaleX:0.6282,scaleY:1.2933,x:143.05,y:131.6},0).wait(1).to({scaleX:0.6321,scaleY:1.2903,x:144.35,y:131.65},0).wait(1).to({scaleX:0.637,scaleY:1.2865,x:145.95,y:131.75},0).wait(1).to({scaleX:0.6428,scaleY:1.2818,x:147.8,y:131.85},0).wait(1).to({scaleX:0.6498,scaleY:1.2763,x:150.15,y:132},0).wait(1).to({scaleX:0.6581,scaleY:1.2698,x:152.8,y:132.2},0).wait(1).to({scaleX:0.6677,scaleY:1.2622,x:156,y:132.35},0).wait(1).to({scaleX:0.6789,scaleY:1.2534,rotation:-14.9985,x:159.65,y:132.6},0).wait(1).to({scaleX:0.6917,scaleY:1.2432,x:163.8,y:132.85},0).wait(1).to({scaleX:0.7063,scaleY:1.2318,x:168.55,y:133.2},0).wait(1).to({scaleX:0.7227,scaleY:1.2188,x:173.9,y:133.55},0).wait(1).to({scaleX:0.7409,scaleY:1.2045,x:179.85,y:133.95},0).wait(1).to({scaleX:0.7607,scaleY:1.1888,x:186.35,y:134.3},0).wait(1).to({scaleX:0.782,scaleY:1.1721,x:193.25,y:134.75},0).wait(1).to({scaleX:0.8041,scaleY:1.1546,x:200.45,y:135.2},0).wait(1).to({scaleX:0.8264,scaleY:1.137,rotation:-14.9984,x:207.75,y:135.65},0).wait(1).to({scaleX:0.8483,scaleY:1.1197,x:214.95,y:136.1},0).wait(1).to({scaleX:0.8693,scaleY:1.1032,x:221.75,y:136.5},0).wait(1).to({scaleX:0.8887,scaleY:1.0878,x:228.05,y:136.95},0).wait(1).to({scaleX:0.9064,scaleY:1.0739,x:233.85,y:137.25},0).wait(1).to({scaleX:0.9222,scaleY:1.0614,x:239,y:137.6},0).wait(1).to({scaleX:0.9362,scaleY:1.0504,x:243.6,y:137.9},0).wait(1).to({scaleX:0.9484,scaleY:1.0407,x:247.55,y:138.2},0).wait(1).to({scaleX:0.9589,scaleY:1.0324,rotation:-14.9983,x:251.05,y:138.4},0).wait(1).to({scaleX:0.9679,scaleY:1.0253,x:253.95,y:138.55},0).wait(1).to({scaleX:0.9756,scaleY:1.0193,x:256.5,y:138.75},0).wait(1).to({scaleX:0.982,scaleY:1.0143,x:258.55,y:138.85},0).wait(1).to({scaleX:0.9872,scaleY:1.0101,x:260.25,y:138.95},0).wait(1).to({scaleX:0.9914,scaleY:1.0068,x:261.65,y:139},0).wait(1).to({scaleX:0.9947,scaleY:1.0042,x:262.7,y:139.1},0).wait(1).to({scaleX:0.9971,scaleY:1.0023,x:263.45,y:139.15},0).wait(1).to({scaleX:0.9988,scaleY:1.001,x:264.05,y:139.2},0).wait(1).to({scaleX:0.9997,scaleY:1.0003,x:264.35},0).wait(1).to({regX:482.2,regY:61.6,scaleX:1,scaleY:1,x:264.3,y:139.25},0).to({regY:61.7,scaleX:0.4188,x:384.3,y:172},72).to({_off:true},1).wait(18).to({_off:false,regX:482.1,regY:61.8,scaleX:0.37,scaleY:0.532,rotation:-3.7629,x:77.15,y:182.5},0).wait(1).to({regX:482.3,regY:61.7,scaleY:0.5328,rotation:-3.7789,x:77.45,y:182.35},0).wait(1).to({scaleY:0.5341,rotation:-3.8055,x:77.95,y:182.15},0).wait(1).to({scaleX:0.3699,scaleY:0.5361,rotation:-3.8441,x:78.5,y:181.9},0).wait(1).to({scaleY:0.5388,rotation:-3.8966,x:79.35,y:181.6},0).wait(1).to({scaleX:0.3698,scaleY:0.5422,rotation:-3.9654,x:80.4,y:181.2},0).wait(1).to({scaleY:0.5467,rotation:-4.0537,x:81.8,y:180.6},0).wait(1).to({scaleX:0.3697,scaleY:0.5524,rotation:-4.1653,x:83.55,y:179.9},0).wait(1).to({scaleX:0.3696,scaleY:0.5595,rotation:-4.3058,x:85.75,y:179.05},0).wait(1).to({scaleX:0.3694,scaleY:0.5684,rotation:-4.4828,x:88.45,y:177.95},0).wait(1).to({scaleX:0.3692,scaleY:0.5798,rotation:-4.7074,x:92.05,y:176.55},0).wait(1).to({scaleX:0.369,scaleY:0.5944,rotation:-4.9967,x:96.5,y:174.75},0).wait(1).to({scaleX:0.3687,scaleY:0.6138,rotation:-5.3785,x:102.5,y:172.35},0).wait(1).to({scaleX:0.3683,scaleY:0.6402,rotation:-5.9013,x:110.65,y:169.1},0).wait(1).to({scaleX:0.3677,scaleY:0.6783,rotation:-6.6526,x:122.4,y:164.4},0).wait(1).to({scaleX:0.3668,scaleY:0.7341,rotation:-7.7556,x:139.6,y:157.55},0).wait(1).to({scaleX:0.3657,scaleY:0.8035,rotation:-9.1265,x:161,y:149},0).wait(1).to({scaleX:0.3648,scaleY:0.8649,rotation:-10.3403,x:180,y:141.45},0).wait(1).to({scaleX:0.364,scaleY:0.912,rotation:-11.2694,x:194.5,y:135.65},0).wait(1).to({scaleX:0.3635,scaleY:0.9486,rotation:-11.9932,x:205.75,y:131.15},0).wait(1).to({scaleX:0.363,scaleY:0.9783,rotation:-12.5802,x:214.9,y:127.45},0).wait(1).to({scaleX:0.3626,scaleY:1.0032,rotation:-13.0724,x:222.65,y:124.4},0).wait(1).to({scaleX:0.3623,scaleY:1.0247,rotation:-13.4953,x:229.25,y:121.75},0).wait(1).to({scaleX:0.362,scaleY:1.0434,rotation:-13.8653,x:235.05,y:119.4},0).wait(1).to({scaleX:0.3617,scaleY:1.06,rotation:-14.1937,x:240.2,y:117.4},0).wait(1).to({scaleX:0.3615,scaleY:1.0749,rotation:-14.4883,x:244.75,y:115.55},0).wait(1).to({scaleX:0.3613,scaleY:1.0884,rotation:-14.7548,x:248.9,y:113.95},0).wait(1).to({regX:482.4,regY:61.8,scaleX:0.3611,scaleY:1.1007,rotation:-14.9976,x:252.7,y:112.6},0).wait(1).to({regX:482.3,regY:61.7,scaleX:0.3567,scaleY:1.1316,x:254,y:108.2,alpha:0.9015},0).wait(1).to({scaleX:0.3525,scaleY:1.1612,rotation:-14.9977,x:255.35,y:104.1,alpha:0.8074},0).wait(1).to({scaleX:0.349,scaleY:1.1866,rotation:-14.9978,x:256.45,y:100.6,alpha:0.7263},0).wait(1).to({scaleX:0.3463,scaleY:1.2055,x:257.3,y:98.05,alpha:0.6661},0).wait(1).to({scaleX:0.3441,scaleY:1.2209,rotation:-14.9979,x:258,y:95.85,alpha:0.6171},0).wait(1).to({scaleX:0.3423,scaleY:1.234,x:258.6,y:94.1,alpha:0.5755},0).wait(1).to({scaleX:0.3407,scaleY:1.2454,x:259.15,y:92.5,alpha:0.539},0).wait(1).to({scaleX:0.3392,scaleY:1.2556,x:259.6,y:91.1,alpha:0.5064},0).wait(1).to({scaleX:0.3379,scaleY:1.2649,rotation:-14.998,x:260,y:89.85,alpha:0.477},0).wait(1).to({scaleX:0.3367,scaleY:1.2733,x:260.4,y:88.7,alpha:0.4501},0).wait(1).to({scaleX:0.3356,scaleY:1.2811,x:260.7,y:87.55,alpha:0.4253},0).wait(1).to({scaleX:0.3346,scaleY:1.2883,x:261.05,y:86.65,alpha:0.4024},0).wait(1).to({scaleX:0.3336,scaleY:1.295,x:261.4,y:85.7,alpha:0.381},0).wait(1).to({scaleX:0.3328,scaleY:1.3013,x:261.65,y:84.8,alpha:0.3611},0).wait(1).to({scaleX:0.3319,scaleY:1.3071,rotation:-14.9981,x:261.9,y:83.95,alpha:0.3424},0).wait(1).to({scaleX:0.3312,scaleY:1.3127,x:262.1,y:83.3,alpha:0.3248},0).wait(1).to({scaleX:0.3304,scaleY:1.3179,x:262.4,y:82.5,alpha:0.3082},0).wait(1).to({scaleX:0.3297,scaleY:1.3228,x:262.6,y:81.85,alpha:0.2924},0).wait(1).to({scaleX:0.3291,scaleY:1.3275,x:262.8,y:81.2,alpha:0.2776},0).wait(1).to({scaleX:0.3284,scaleY:1.3319,x:263,y:80.6,alpha:0.2635},0).wait(1).to({scaleX:0.3278,scaleY:1.3361,x:263.25,y:80.05,alpha:0.2501},0).wait(1).to({scaleX:0.3273,scaleY:1.3401,x:263.35,y:79.45,alpha:0.2373},0).wait(1).to({scaleX:0.3267,scaleY:1.344,x:263.55,y:78.9,alpha:0.2252},0).wait(1).to({scaleX:0.3262,scaleY:1.3476,x:263.7,y:78.45,alpha:0.2136},0).wait(1).to({scaleX:0.3257,scaleY:1.3511,rotation:-14.9982,x:263.85,y:77.95,alpha:0.2025},0).wait(1).to({scaleX:0.3253,scaleY:1.3544,x:264,y:77.45,alpha:0.192},0).wait(1).to({scaleX:0.3248,scaleY:1.3575,x:264.15,y:77.05,alpha:0.1819},0).wait(1).to({scaleX:0.3244,scaleY:1.3606,x:264.25,y:76.65,alpha:0.1723},0).wait(1).to({scaleX:0.324,scaleY:1.3635,x:264.45,y:76.2,alpha:0.1631},0).wait(1).to({scaleX:0.3236,scaleY:1.3662,x:264.55,y:75.8,alpha:0.1543},0).wait(1).to({scaleX:0.3232,scaleY:1.3689,x:264.7,y:75.5,alpha:0.1458},0).wait(1).to({scaleX:0.3229,scaleY:1.3714,x:264.8,y:75.15,alpha:0.1378},0).wait(1).to({scaleX:0.3225,scaleY:1.3738,x:264.9,y:74.85,alpha:0.13},0).wait(1).to({scaleX:0.3222,scaleY:1.3761,x:265,y:74.5,alpha:0.1226},0).wait(1).to({scaleX:0.3219,scaleY:1.3784,x:265.1,y:74.2,alpha:0.1156},0).wait(1).to({scaleX:0.3216,scaleY:1.3805,x:265.2,y:73.85,alpha:0.1088},0).wait(1).to({scaleX:0.3213,scaleY:1.3825,x:265.25,y:73.6,alpha:0.1023},0).wait(1).to({scaleX:0.321,scaleY:1.3845,x:265.35,y:73.35,alpha:0.0961},0).wait(1).to({scaleX:0.3208,scaleY:1.3864,x:265.45,y:73.05,alpha:0.0901},0).wait(1).to({scaleX:0.3205,scaleY:1.3881,x:265.5,y:72.85,alpha:0.0844},0).wait(1).to({scaleX:0.3203,scaleY:1.3898,x:265.65,y:72.65,alpha:0.079},0).wait(1).to({scaleX:0.32,scaleY:1.3915,x:265.7,y:72.4,alpha:0.0738},0).wait(1).to({scaleX:0.3198,scaleY:1.393,x:265.8,y:72.15,alpha:0.0688},0).wait(1).to({scaleX:0.3196,scaleY:1.3945,rotation:-14.9983,y:71.95,alpha:0.0641},0).wait(1).to({scaleX:0.3194,scaleY:1.396,x:265.9,y:71.8,alpha:0.0595},0).wait(1).to({scaleX:0.3192,scaleY:1.3973,x:265.95,y:71.6,alpha:0.0552},0).wait(1).to({scaleX:0.319,scaleY:1.3986,x:266,y:71.4,alpha:0.0511},0).wait(1).to({scaleX:0.3188,scaleY:1.3998,x:266.05,y:71.25,alpha:0.0472},0).wait(1).to({scaleX:0.3187,scaleY:1.401,x:266.1,y:71.1,alpha:0.0435},0).wait(1).to({scaleX:0.3185,scaleY:1.4021,x:266.2,y:70.9,alpha:0.0399},0).wait(1).to({scaleX:0.3184,scaleY:1.4032,y:70.7,alpha:0.0365},0).wait(1).to({scaleX:0.3182,scaleY:1.4042,x:266.25,y:70.65,alpha:0.0334},0).wait(1).to({scaleX:0.3181,scaleY:1.4051,x:266.3,y:70.5,alpha:0.0303},0).wait(1).to({scaleX:0.318,scaleY:1.406,x:266.35,y:70.35,alpha:0.0275},0).wait(1).to({scaleX:0.3179,scaleY:1.4069,x:266.4,y:70.3,alpha:0.0248},0).wait(1).to({scaleX:0.3177,scaleY:1.4077,x:266.45,y:70.15,alpha:0.0223},0).wait(1).to({scaleX:0.3176,scaleY:1.4084,y:70.05,alpha:0.0199},0).wait(1).to({scaleX:0.3175,scaleY:1.4091,x:266.5,y:69.95,alpha:0.0177},0).wait(1).to({scaleX:0.3174,scaleY:1.4097,y:69.85,alpha:0.0156},0).wait(1).to({scaleY:1.4104,y:69.8,alpha:0.0137},0).wait(1).to({scaleX:0.3173,scaleY:1.4109,x:266.55,y:69.7,alpha:0.0119},0).wait(1).to({scaleX:0.3172,scaleY:1.4114,x:266.6,y:69.6,alpha:0.0102},0).wait(1).to({scaleX:0.3171,scaleY:1.4119,y:69.55,alpha:0.0087},0).wait(1).to({scaleY:1.4124,y:69.5,alpha:0.0073},0).wait(1).to({scaleX:0.317,scaleY:1.4127,x:266.65,y:69.45,alpha:0.006},0).wait(1).to({scaleY:1.4131,y:69.4,alpha:0.0049},0).wait(1).to({scaleX:0.3169,scaleY:1.4134,y:69.35,alpha:0.0039},0).wait(1).to({scaleY:1.4137,x:266.7,y:69.3,alpha:0.003},0).wait(1).to({scaleY:1.414,y:69.25,alpha:0.0022},0).wait(1).to({scaleX:0.3168,scaleY:1.4142,x:266.75,alpha:0.0015},0).wait(1).to({scaleY:1.4143,y:69.2,alpha:0.001},0).wait(1).to({scaleY:1.4145,alpha:0.0005},0).wait(1).to({scaleY:1.4146,x:266.7,y:69.15,alpha:0.0002},0).wait(1).to({scaleY:1.4147,x:266.75,alpha:0},0).wait(1).to({scaleX:0.3167},0).wait(4).to({scaleX:0.3168},0).wait(2).to({regX:482.4,regY:61.9,scaleY:1.4146,x:266.8,y:69.35},0).to({_off:true},1).wait(105));
	this.instance_8.addEventListener("tick", AdobeAn.handleFilterCache);

	// BACK GRADIENT
	this.instance_9 = new lib.Symbol23();
	this.instance_9.setTransform(132.2,74.2,1,1,0,0,0,132.2,74.6);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:74.5,scaleX:1.2623,scaleY:1.5045,x:132.3,y:75.2},0).wait(35).to({regY:74.6,scaleX:1,scaleY:1,x:132.2,y:74.2},25,cjs.Ease.get(1)).wait(99).to({regX:132.5,regY:75.5,x:132.5,y:75.05},0).wait(1).to({y:74.85},0).wait(1).to({y:74.6},0).wait(1).to({y:74.15},0).wait(1).to({y:73.55},0).wait(1).to({y:72.6},0).wait(1).to({y:71.2},0).wait(1).to({y:68.75},0).wait(1).to({y:64.25},0).wait(1).to({y:58.6},0).wait(1).to({y:54.8},0).wait(1).to({y:52.2},0).wait(1).to({y:50.25},0).wait(1).to({y:48.7},0).wait(1).to({y:47.4},0).wait(1).to({y:46.3},0).wait(1).to({y:45.4},0).wait(1).to({y:44.95},0).wait(1).to({y:44.6},0).wait(1).to({y:44.4},0).wait(1).to({y:44.2},0).wait(1).to({y:44.05},0).wait(1).to({y:43.9},0).wait(1).to({y:43.8},0).wait(1).to({y:43.65},0).wait(1).to({y:43.6},0).wait(1).to({y:43.5},0).wait(1).to({y:43.45},0).wait(1).to({y:43.4},0).wait(1).to({y:43.35},0).wait(1).to({y:43.3},0).wait(1).to({y:43.25},0).wait(1).to({y:43.2},0).wait(2).to({y:43.15},0).wait(5).to({y:43.1},0).wait(2).to({regX:132.2,regY:74.6,x:132.2,y:42.2},0).to({_off:true},146).wait(15));

	// Layer_18
	this.instance_10 = new lib.Symbol33();
	this.instance_10.setTransform(99.15,61.7,1.0632,2.0919,75.917,0,0,50.6,50.4);
	this.instance_10.compositeOperation = "lighter";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(289).to({_off:false},0).to({regX:50.5,scaleX:1.0633,rotation:64.2286,x:52.7,y:31.6},5).to({scaleX:0.981,scaleY:1.1069,rotation:64.2283,x:27.1,y:25.05,alpha:0.6406},6).to({regX:50.6,regY:50.2,scaleX:0.846,scaleY:0.9905,rotation:64.2295,x:2.85,y:4.95,alpha:0},19).to({_off:true},1).wait(42));
	this.instance_10.addEventListener("tick", AdobeAn.handleFilterCache);

	// BIG SHAPE
	this.instance_11 = new lib.Symbol29();
	this.instance_11.setTransform(34.8,37.1,1.1494,1.1494,0,0,0,34.8,37.1);
	this.instance_11.alpha = 0.5;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(18).to({regX:34.7,scaleX:1.862,scaleY:1.4352,x:59.4,y:47.7,alpha:0},12,cjs.Ease.get(-1)).to({_off:true},1).wait(247).to({_off:false,regX:34.6,scaleX:3.9662,scaleY:1.7198,x:132.15,y:58.25},0).wait(1).to({regX:34.8,regY:37.2,scaleX:3.9582,scaleY:1.7182,x:132.7,y:58.4,alpha:0.0014},0).wait(1).to({scaleX:3.9418,scaleY:1.7149,x:132.15,y:58.3,alpha:0.0043},0).wait(1).to({scaleX:3.9147,scaleY:1.7094,x:131.2,y:58.1,alpha:0.0091},0).wait(1).to({scaleX:3.8729,scaleY:1.7009,x:129.75,y:57.75,alpha:0.0166},0).wait(1).to({scaleX:3.8099,scaleY:1.6881,x:127.55,y:57.3,alpha:0.0277},0).wait(1).to({scaleX:3.7139,scaleY:1.6687,x:124.2,y:56.6,alpha:0.0448},0).wait(1).to({scaleX:3.5587,scaleY:1.6373,x:118.8,y:55.4,alpha:0.0723},0).wait(1).to({scaleX:3.2769,scaleY:1.5802,x:109,y:53.3,alpha:0.1224},0).wait(1).to({scaleX:2.7721,scaleY:1.478,x:91.45,y:49.5,alpha:0.212},0).wait(1).to({scaleX:2.3256,scaleY:1.3876,x:75.95,y:46.1,alpha:0.2912},0).wait(1).to({scaleX:2.0407,scaleY:1.3299,x:66,y:43.95,alpha:0.3418},0).wait(1).to({scaleX:1.8389,scaleY:1.289,x:59,y:42.45,alpha:0.3776},0).wait(1).to({scaleX:1.6837,scaleY:1.2576,x:53.65,y:41.3,alpha:0.4052},0).wait(1).to({scaleX:1.5582,scaleY:1.2322,x:49.25,y:40.35,alpha:0.4274},0).wait(1).to({scaleX:1.4534,scaleY:1.211,x:45.65,y:39.6,alpha:0.446},0).wait(1).to({scaleX:1.3644,scaleY:1.193,x:42.55,y:38.95,alpha:0.4618},0).wait(1).to({scaleX:1.314,scaleY:1.1828,x:40.8,y:38.55,alpha:0.4708},0).wait(1).to({scaleX:1.2834,scaleY:1.1766,x:39.7,y:38.3,alpha:0.4762},0).wait(1).to({scaleX:1.2608,scaleY:1.172,x:38.95,y:38.15,alpha:0.4802},0).wait(1).to({scaleX:1.2429,scaleY:1.1684,x:38.3,y:38,alpha:0.4834},0).wait(1).to({scaleX:1.2282,scaleY:1.1654,x:37.8,y:37.9,alpha:0.486},0).wait(1).to({scaleX:1.2158,scaleY:1.1629,x:37.35,y:37.8,alpha:0.4882},0).wait(1).to({scaleX:1.2053,scaleY:1.1607,x:37,y:37.75,alpha:0.4901},0).wait(1).to({scaleX:1.1962,scaleY:1.1589,x:36.7,y:37.65,alpha:0.4917},0).wait(1).to({scaleX:1.1884,scaleY:1.1573,x:36.4,y:37.6,alpha:0.4931},0).wait(1).to({scaleX:1.1816,scaleY:1.1559,x:36.15,y:37.55,alpha:0.4943},0).wait(1).to({scaleX:1.1757,scaleY:1.1547,x:35.95,y:37.5,alpha:0.4953},0).wait(1).to({scaleX:1.1706,scaleY:1.1537,x:35.8,y:37.45,alpha:0.4962},0).wait(1).to({scaleX:1.1662,scaleY:1.1528,x:35.65,alpha:0.497},0).wait(1).to({scaleX:1.1624,scaleY:1.1521,x:35.5,y:37.4,alpha:0.4977},0).wait(1).to({scaleX:1.1592,scaleY:1.1514,x:35.4,alpha:0.4983},0).wait(1).to({scaleX:1.1565,scaleY:1.1509,x:35.3,y:37.35,alpha:0.4987},0).wait(1).to({scaleX:1.1543,scaleY:1.1504,x:35.2,alpha:0.4991},0).wait(1).to({scaleX:1.1526,scaleY:1.1501,x:35.15,alpha:0.4994},0).wait(1).to({scaleX:1.1513,scaleY:1.1498,x:35.1,y:37.3,alpha:0.4997},0).wait(1).to({scaleX:1.1503,scaleY:1.1496,alpha:0.4998},0).wait(1).to({scaleX:1.1497,scaleY:1.1495,x:35.05,alpha:0.5},0).wait(1).to({scaleX:1.1494,scaleY:1.1494},0).wait(1).to({scaleX:1.1493},0).wait(1).to({regY:37.1,scaleX:1.1494,x:34.8,y:37.1},0).to({_off:true},41).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.9,-62.6,363.9,241.79999999999998);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
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
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}
	this.frame_83 = function() {
		this.gotoAndPlay("repeat");
	}
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(83).call(this.frame_83).wait(11).call(this.frame_94).wait(38));

	// Layer_1
	this.instance = new lib.Symbol18();
	this.instance.setTransform(17.1,24.2,1,1,0,0,0,17.1,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(22).to({_off:false,alpha:0},0).to({alpha:1},17,cjs.Ease.get(-1)).to({alpha:0},41,cjs.Ease.get(1)).to({_off:true},1).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.7,58.6);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgwAcIA4g9IApAQIgeAwIgCACg");
	mask.setTransform(4.925,3.35);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(4.15,3.7,1,0.2629,-53.7959,0,0,16.9,24.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,9.9,6.7), null);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AggAOIAAgcIBBAGIgbAWg");
	mask.setTransform(3.325,1.45);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(-0.85,-4.2,1,1,0,0,0,17.1,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,6.7,2.9), null);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAFAOIgggTIA3gJIAAAcg");
	mask.setTransform(2.825,1.45);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(-2.1,-0.95,1,1,0,0,0,17.1,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,5.7,2.9), null);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrgTIAegQIA5A/Ig3AIg");
	mask.setTransform(4.425,3.6);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(3.95,7.8,1,1,0,0,0,17.1,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,8.9,7.2), null);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUCtIAAloIApAbIAAFcg");
	mask.setTransform(2.075,18.825);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(1.15,18.2,1,1,0,0,0,17.1,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,4.2,37.7), null);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5CpIAAloIA5goIA6AqIAAFoIg6A9g");
	mask.setTransform(5.75,23.225);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(5.55,31.65,1.4794,1,50.6801,0,0,17.1,24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,11.5,46.5), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOidIAdgfIAAFoIgdARg");
	mask.setTransform(1.525,18.85);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(1.15,18.2,1,1,0,0,0,17.1,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,3.1,37.7), null);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgDAQIgig7IAeANIAsBKg");
	mask.setTransform(3.75,4.375);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(-3.55,3.4,1,1,0,0,0,17.1,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,7.5,8.8), null);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcgLIAZgSIAgA7g");
	mask.setTransform(2.925,3);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(-5.2,3.65,1,0.3333,0,0,0,17.1,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,5.9,6), null);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYgIIAxAAIgZARg");
	mask.setTransform(2.525,0.9);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(-2,0.5,0.8178,0.3002,0,0,0,17.1,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,5.1,1.8), null);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AADgcIAZASIg3Ang");
	mask.setTransform(2.825,2.9);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(-1.05,-1.1,1,1,0,0,0,17.1,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,5.7,5.8), null);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AABgVIAegWIgfA5IgeAeg");
	mask.setTransform(3.075,4.425);

	// WHITE_GRAIN
	this.instance = new lib.Symbol17();
	this.instance.setTransform(-1.35,9.65,1,1,0,0,0,17.1,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,6.2,8.9), null);


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

	// Symbol 16
	this.instance = new lib.Symbol16();
	this.instance.setTransform(13.75,45.5,1,1,0,0,0,4.9,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 15
	this.instance_1 = new lib.Symbol15();
	this.instance_1.setTransform(12.15,49.65,1,1,0,0,0,3.3,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 14
	this.instance_2 = new lib.Symbol14();
	this.instance_2.setTransform(6,49.65,1,1,0,0,0,2.8,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Symbol 13
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(4.4,45.5,1,1,0,0,0,4.4,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Symbol 12
	this.instance_4 = new lib.Symbol12();
	this.instance_4.setTransform(16.55,24.8,1,1,0,0,0,2,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Symbol 11
	this.instance_5 = new lib.Symbol11();
	this.instance_5.setTransform(8.85,25,1,1,0,0,0,5.8,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Symbol 10
	this.instance_6 = new lib.Symbol10();
	this.instance_6.setTransform(1.5,24.7,1,1,0,0,0,1.5,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Symbol 9
	this.instance_7 = new lib.Symbol9();
	this.instance_7.setTransform(15,4.4,1,1,0,0,0,3.8,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Symbol 8
	this.instance_8 = new lib.Symbol8();
	this.instance_8.setTransform(11.6,3,1,1,0,0,0,2.9,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Symbol 7
	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(8.65,0.9,1,1,0,0,0,2.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Symbol 6
	this.instance_10 = new lib.Symbol6();
	this.instance_10.setTransform(5.85,2.9,1,1,0,0,0,2.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Symbol 5
	this.instance_11 = new lib.Symbol5();
	this.instance_11.setTransform(3.1,4.4,1,1,0,0,0,3.1,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-34.2,-25.3,83.4,109.39999999999999), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_176 = function() {
		this.stop();
	}
	this.frame_182 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(176).call(this.frame_176).wait(6).call(this.frame_182).wait(16));

	// Layer_5
	this.instance = new lib.Symbol27();
	this.instance.setTransform(134.5,16.5,1,1,0,0,0,134.5,16.5);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(-1)).wait(20).to({alpha:0},59).to({_off:true},1).wait(31));

	// Layer_2
	this.instance_1 = new lib.Symbol27();
	this.instance_1.setTransform(134.5,16.5,1,1,0,0,0,134.5,16.5);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:0},67).to({_off:true},1).wait(129));

	// Layer_1
	this.instance_2 = new lib.Symbol27();
	this.instance_2.setTransform(134.5,16.5,1,1,0,0,0,134.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},194).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269,33);


(lib.Symbol4copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2copy();
	this.instance.setTransform(176.5,43.5,1,1,0,0,0,176.5,43.5);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4copy, new cjs.Rectangle(0,0,353,87), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {over:50,out:62};
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
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_61 = function() {
		this.stop();
	}
	this.frame_77 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(12).call(this.frame_61).wait(16).call(this.frame_77).wait(22));

	// oval (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AntD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCgBBcQABBdhCBCQhCBBhdAAg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah8CdQgWAAgPgPQgQgQAAgWQAAgWAQgPQAPgQAWAAID5AAQAWAAAQAQQAPAPAAAWQAAAWgPAQQgQAPgWAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AiMChQgZAAgSgSQgRgRAAgZQAAgZARgSQASgRAZAAIEZAAQAZAAASARQARASAAAZQAAAZgRARQgSASgZAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai9CrQghAAgYgXQgXgYAAghQAAgiAXgXQAYgYAhAAIF7AAQAhAAAYAYQAXAXAAAiQAAAhgXAYQgYAXghAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AkOC8QgvAAgighQghgiAAgvQAAgwAhghQAighAvAAIIdAAQAvAAAiAhQAhAhAAAwQAAAvghAiQgiAhgvAAg");
	var mask_graphics_5 = new cjs.Graphics().p("Al/DUQhDAAgwgvQgwgwAAhDQAAhDAwgwQAwgwBDAAIL/AAQBDAAAwAwQAwAwAABDQAABDgwAwQgwAvhDAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AoRD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AoRD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AoRD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AoRD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AoRD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AoRD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AoRD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AoRD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AoRD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AoRD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AoOD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AoJD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AoFD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AoCD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AoAD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_21 = new cjs.Graphics().p("An/D0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_22 = new cjs.Graphics().p("An+D0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_23 = new cjs.Graphics().p("An8D0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_24 = new cjs.Graphics().p("An7D0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_25 = new cjs.Graphics().p("An6D0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_26 = new cjs.Graphics().p("An5D0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_27 = new cjs.Graphics().p("An4D0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_28 = new cjs.Graphics().p("An2D0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_29 = new cjs.Graphics().p("An1D0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_30 = new cjs.Graphics().p("An0D0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AnzD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AnyD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AnxD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AnwD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AnvD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AnvD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AnuD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBBhdAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AnuD0QhdAAhBhBQhChCAAhdQAAhcBChCQBBhCBdAAIQjAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AntD0QhdAAhChBQhChCAAhdQAAhcBChCQBChCBdAAIQiAAQBdAABCBCQBCBCgBBcQABBdhCBCQhCBBhdAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:78.95,y:24.425}).wait(1).to({graphics:mask_graphics_1,x:-11.2802,y:15.7293}).wait(1).to({graphics:mask_graphics_2,x:-11.69,y:16.0731}).wait(1).to({graphics:mask_graphics_3,x:-12.9194,y:17.1046}).wait(1).to({graphics:mask_graphics_4,x:-14.9683,y:18.8237}).wait(1).to({graphics:mask_graphics_5,x:-17.8369,y:21.2305}).wait(1).to({graphics:mask_graphics_6,x:-21.625,y:24.425}).wait(1).to({graphics:mask_graphics_7,x:17.8482,y:24.425}).wait(1).to({graphics:mask_graphics_8,x:39.641,y:24.425}).wait(1).to({graphics:mask_graphics_9,x:51.5862,y:24.425}).wait(1).to({graphics:mask_graphics_10,x:59.1092,y:24.425}).wait(1).to({graphics:mask_graphics_11,x:64.2852,y:24.425}).wait(1).to({graphics:mask_graphics_12,x:68.04,y:24.425}).wait(1).to({graphics:mask_graphics_13,x:70.8542,y:24.425}).wait(1).to({graphics:mask_graphics_14,x:73.0057,y:24.425}).wait(1).to({graphics:mask_graphics_15,x:74.6686,y:24.425}).wait(1).to({graphics:mask_graphics_16,x:75.6919,y:24.425}).wait(1).to({graphics:mask_graphics_17,x:76.1908,y:24.425}).wait(1).to({graphics:mask_graphics_18,x:76.5727,y:24.425}).wait(1).to({graphics:mask_graphics_19,x:76.859,y:24.425}).wait(1).to({graphics:mask_graphics_20,x:77.0663,y:24.425}).wait(1).to({graphics:mask_graphics_21,x:77.2101,y:24.425}).wait(1).to({graphics:mask_graphics_22,x:77.3382,y:24.425}).wait(1).to({graphics:mask_graphics_23,x:77.4644,y:24.425}).wait(1).to({graphics:mask_graphics_24,x:77.5884,y:24.425}).wait(1).to({graphics:mask_graphics_25,x:77.7103,y:24.425}).wait(1).to({graphics:mask_graphics_26,x:77.8299,y:24.425}).wait(1).to({graphics:mask_graphics_27,x:77.947,y:24.425}).wait(1).to({graphics:mask_graphics_28,x:78.0613,y:24.425}).wait(1).to({graphics:mask_graphics_29,x:78.1727,y:24.425}).wait(1).to({graphics:mask_graphics_30,x:78.2807,y:24.425}).wait(1).to({graphics:mask_graphics_31,x:78.385,y:24.425}).wait(1).to({graphics:mask_graphics_32,x:78.4851,y:24.425}).wait(1).to({graphics:mask_graphics_33,x:78.5802,y:24.425}).wait(1).to({graphics:mask_graphics_34,x:78.6695,y:24.425}).wait(1).to({graphics:mask_graphics_35,x:78.7516,y:24.425}).wait(1).to({graphics:mask_graphics_36,x:78.8249,y:24.425}).wait(1).to({graphics:mask_graphics_37,x:78.8863,y:24.425}).wait(1).to({graphics:mask_graphics_38,x:78.9312,y:24.425}).wait(1).to({graphics:mask_graphics_39,x:78.95,y:24.425}).wait(60));

	// Layer_2
	this.instance = new lib.Symbol4copy3();
	this.instance.setTransform(83.4,23.2,1,1,0,0,0,56.9,23.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(10).to({_off:false,x:67,alpha:0},0).wait(1).to({regX:10,regY:25.4,x:25.2,y:25.4,alpha:0.3132},0).wait(1).to({x:28.25,alpha:0.4972},0).wait(1).to({x:30.1,alpha:0.6124},0).wait(1).to({x:31.45,alpha:0.695},0).wait(1).to({x:32.55,alpha:0.7596},0).wait(1).to({x:33.4,alpha:0.8131},0).wait(1).to({x:34.1,alpha:0.8563},0).wait(1).to({x:34.6,alpha:0.8853},0).wait(1).to({x:35,alpha:0.9107},0).wait(1).to({x:35.35,alpha:0.9319},0).wait(1).to({x:35.65,alpha:0.9482},0).wait(1).to({x:35.8,alpha:0.9589},0).wait(1).to({x:35.9,alpha:0.9658},0).wait(1).to({x:36,alpha:0.9714},0).wait(1).to({x:36.1,alpha:0.9761},0).wait(1).to({x:36.15,alpha:0.9801},0).wait(1).to({x:36.2,alpha:0.9836},0).wait(1).to({x:36.25,alpha:0.9866},0).wait(1).to({x:36.3,alpha:0.9892},0).wait(1).to({x:36.35,alpha:0.9914},0).wait(1).to({alpha:0.9934},0).wait(1).to({x:36.4,alpha:0.995},0).wait(1).to({alpha:0.9964},0).wait(1).to({x:36.45,alpha:0.9976},0).wait(1).to({alpha:0.9986},0).wait(1).to({alpha:0.9993},0).wait(1).to({alpha:0.9998},0).wait(1).to({regX:56.9,regY:23.2,x:83.4,y:23.2,alpha:1},0).wait(60));

	// text
	this.instance_1 = new lib.Symbol4copy2();
	this.instance_1.setTransform(83.4,23.2,1,1,0,0,0,56.9,23.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(5).to({_off:false,x:47.4,alpha:0},0).wait(1).to({regX:64.9,regY:27,x:69.05,y:27,alpha:0.3792},0).wait(1).to({x:76.55,alpha:0.5885},0).wait(1).to({x:80.7,alpha:0.7033},0).wait(1).to({x:83.3,alpha:0.7755},0).wait(1).to({x:85.1,alpha:0.8253},0).wait(1).to({x:86.4,alpha:0.8613},0).wait(1).to({x:87.35,alpha:0.8884},0).wait(1).to({x:88.1,alpha:0.909},0).wait(1).to({x:88.7,alpha:0.925},0).wait(1).to({x:89.1,alpha:0.9374},0).wait(1).to({x:89.45,alpha:0.947},0).wait(1).to({x:89.75,alpha:0.9543},0).wait(1).to({x:89.95,alpha:0.9598},0).wait(1).to({x:90.05,alpha:0.9638},0).wait(1).to({x:90.15,alpha:0.9666},0).wait(1).to({x:90.25,alpha:0.969},0).wait(1).to({x:90.35,alpha:0.9715},0).wait(1).to({x:90.45,alpha:0.9738},0).wait(1).to({x:90.5,alpha:0.9762},0).wait(1).to({x:90.6,alpha:0.9785},0).wait(1).to({x:90.7,alpha:0.9807},0).wait(1).to({x:90.75,alpha:0.9829},0).wait(1).to({x:90.85,alpha:0.9851},0).wait(1).to({x:90.9,alpha:0.9871},0).wait(1).to({x:91,alpha:0.9891},0).wait(1).to({x:91.05,alpha:0.9911},0).wait(1).to({x:91.1,alpha:0.9929},0).wait(1).to({x:91.2,alpha:0.9946},0).wait(1).to({x:91.25,alpha:0.9962},0).wait(1).to({x:91.3,alpha:0.9976},0).wait(1).to({x:91.35,alpha:0.9988},0).wait(1).to({alpha:0.9996},0).wait(1).to({regX:56.9,regY:23.2,x:83.4,y:23.2,alpha:1},0).wait(60));

	// oval
	this.instance_2 = new lib.Symbol5copy2();
	this.instance_2.setTransform(83.5,26.1,1,1,0,0,0,83.5,22.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:22.7,scaleX:0.2361,scaleY:0.2361,x:16.25,y:26.15},0).to({regY:22.4,scaleX:1,scaleY:1,x:83.5,y:26.1},5,cjs.Ease.get(-1)).wait(1).to({regX:82.5,regY:22.7,x:82.5,y:26.4},0).wait(32).to({regX:83.5,regY:22.4,x:83.5,y:26.1},0).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,3.7,227,45.199999999999996);


(lib.SYMBOLS_Symbol23copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.SYMBOLS_Symbol22();
	this.instance.setTransform(27.1,52.7,0.4257,1,-6.4895,0,0,50.6,50.6);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SYMBOLS_Symbol23copy, new cjs.Rectangle(0,-0.1,54.1,105.3), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
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
	this.frame_150 = function() {
		this.stop();
	}
	this.frame_156 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(150).call(this.frame_150).wait(6).call(this.frame_156).wait(82));

	// Symbol 4
	this.instance = new lib.Symbol4();
	this.instance.setTransform(52.6,44.2,0.311,0.2978,0,0,0,9.3,25.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98).to({_off:false},0).wait(140));

	// Symbol 4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(15.5,24.85,0.2154,0.2037,0,0,0,9.3,25.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({_off:false},0).to({_off:true},150).wait(13));

	// Symbol 4
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(63.5,32.9,0.5033,0.4889,0,0,0,9.5,25.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({_off:true},159).wait(29));

	// Symbol 4
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(5.15,27.4,0.5488,0.5189,0,0,0,9.4,25.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({_off:true},169).wait(45));

	// Symbol 4
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(35.05,25.6,1,1,0,0,0,9.3,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},174).wait(64));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-25.3,102.3,109.39999999999999);


(lib.Symbol5copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129).call(this.frame_129).wait(10));

	// Layer_1
	this.instance = new lib.Symbol4copy();
	this.instance.setTransform(113.3,47.5,1,1,0,0,0,113.3,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:113.5,scaleX:0.2154,scaleY:0.5482,x:113.35,y:47.55},0).to({regX:113.3,scaleX:1,scaleY:1,x:113.3,y:47.5},7,cjs.Ease.get(-1)).to({regX:113.2,regY:47.6,scaleX:1.5574,scaleY:0.8484,x:113.25,y:47.65,alpha:0},88,cjs.Ease.get(1)).to({_off:true},1).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,0,549.7,87);


(lib.SYMBOLS_Symbol24LOW = function(mode,startPosition,loop,reversed) {
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
		this.gotoAndPlay(Math.floor(Math.random()*(this.totalFrames-2))+2);
	}
	this.frame_67 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(67).call(this.frame_67).wait(1));

	// Layer_1
	this.instance = new lib.SYMBOLS_Symbol23copy();
	this.instance.setTransform(27.1,52.6,1,1,0,0,0,27.1,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({alpha:0.9994},0).wait(1).to({alpha:0.9974},0).wait(1).to({alpha:0.9939},0).wait(1).to({alpha:0.9887},0).wait(1).to({alpha:0.9817},0).wait(1).to({alpha:0.9726},0).wait(1).to({alpha:0.9613},0).wait(1).to({alpha:0.9474},0).wait(1).to({alpha:0.9305},0).wait(1).to({alpha:0.9105},0).wait(1).to({alpha:0.8868},0).wait(1).to({alpha:0.8591},0).wait(1).to({alpha:0.8271},0).wait(1).to({alpha:0.7906},0).wait(1).to({alpha:0.7497},0).wait(1).to({alpha:0.7052},0).wait(1).to({alpha:0.6583},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.5228},0).wait(1).to({alpha:0.4849},0).wait(1).to({alpha:0.4518},0).wait(1).to({alpha:0.4237},0).wait(1).to({alpha:0.4002},0).wait(1).to({alpha:0.3808},0).wait(1).to({alpha:0.3651},0).wait(1).to({alpha:0.3527},0).wait(1).to({alpha:0.3432},0).wait(1).to({alpha:0.3363},0).wait(1).to({alpha:0.3316},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.3281},0).wait(1).to({alpha:0.3287},0).wait(1).to({alpha:0.3306},0).wait(1).to({alpha:0.3339},0).wait(1).to({alpha:0.3387},0).wait(1).to({alpha:0.3453},0).wait(1).to({alpha:0.3537},0).wait(1).to({alpha:0.3642},0).wait(1).to({alpha:0.3771},0).wait(1).to({alpha:0.3927},0).wait(1).to({alpha:0.4112},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.4585},0).wait(1).to({alpha:0.4879},0).wait(1).to({alpha:0.5215},0).wait(1).to({alpha:0.5593},0).wait(1).to({alpha:0.601},0).wait(1).to({alpha:0.6455},0).wait(1).to({alpha:0.6914},0).wait(1).to({alpha:0.7369},0).wait(1).to({alpha:0.7801},0).wait(1).to({alpha:0.8197},0).wait(1).to({alpha:0.8548},0).wait(1).to({alpha:0.8853},0).wait(1).to({alpha:0.9113},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:0.9655},0).wait(1).to({alpha:0.9771},0).wait(1).to({alpha:0.9859},0).wait(1).to({alpha:0.9924},0).wait(1).to({alpha:0.9967},0).wait(1).to({alpha:0.9992},0).wait(1).to({alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,54.1,105.3);


(lib.art = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(6).call(this.frame_125).wait(60));

	// GRAINS
	this.instance = new lib.Symbol19();
	this.instance.setTransform(147.25,400.9,1,1,0,0,0,32.4,29.4);
	this.instance.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185));

	// GLOW
	this.instance_1 = new lib.Symbol5copy();
	this.instance_1.setTransform(147.35,442.4,0.6442,0.9861,0,0,0,113.5,47.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).wait(106));

	// Layer_8
	this.instance_2 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_2.setTransform(60,445.55,1,0.3896,0,11.765,0,28,52.1);
	this.instance_2.alpha = 0.1016;

	this.instance_3 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_3.setTransform(222.85,445.55,1,0.3896,0,11.765,0,28,52.1);
	this.instance_3.alpha = 0.1484;

	this.instance_4 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_4.setTransform(190.5,433,1,0.3896,0,11.765,0,28,52.1);
	this.instance_4.alpha = 0.2695;

	this.instance_5 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_5.setTransform(180.95,458.05,1,0.3896,0,11.765,0,28,52.1);
	this.instance_5.alpha = 0.2695;

	this.instance_6 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_6.setTransform(132.05,457.35,1,0.3896,0,11.765,0,28,52.1);
	this.instance_6.alpha = 0.2695;

	this.instance_7 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_7.setTransform(74.2,421.85,1,0.3896,0,11.765,0,28,52.1);
	this.instance_7.alpha = 0.2695;

	this.instance_8 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_8.setTransform(76.65,415.3,1,0.3896,0,11.765,0,28,52.1);
	this.instance_8.alpha = 0.2695;

	this.instance_9 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_9.setTransform(108.6,423.3,1,0.3896,0,11.765,0,28,52.1);
	this.instance_9.alpha = 0.2695;

	this.instance_10 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_10.setTransform(115,444.2,1,0.3896,0,11.765,0,28,52.1);
	this.instance_10.alpha = 0.2695;

	this.instance_11 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_11.setTransform(124.65,444.2,1,0.3896,0,11.765,0,28,52.1);
	this.instance_11.alpha = 0.2695;

	this.instance_12 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_12.setTransform(143.3,444.2,1,0.3896,0,11.765,0,28,52.1);
	this.instance_12.alpha = 0.2695;

	this.instance_13 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_13.setTransform(198.7,444.2,1,0.3896,0,11.765,0,28,52.1);
	this.instance_13.alpha = 0.2695;

	this.instance_14 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_14.setTransform(175.2,444.2,1,0.3896,0,11.765,0,28,52.1);
	this.instance_14.alpha = 0.2695;

	this.instance_15 = new lib.SYMBOLS_Symbol24LOW();
	this.instance_15.setTransform(153.95,444.2,1,0.3896,0,11.765,0,28,52.1);
	this.instance_15.alpha = 0.2695;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(185));

	// DARKENING
	this.instance_16 = new lib.gradient_hor_DARK_001();
	this.instance_16.setTransform(150.35,486.65,0.9428,2.1878,-90,0,0,45,68.7);

	this.instance_17 = new lib.gradient_hor_DARK_002();
	this.instance_17.setTransform(150.2,133.55,0.75,2.189,90,0,0,45,68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(185));

	// pic
	this.instance_18 = new lib.pic_1();
	this.instance_18.setTransform(150,315.1,1,1,0,0,0,150,214);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(0.1,1,1).p("AAACeIAAk7");
	this.shape.setTransform(143.65,397.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_18}]}).wait(185));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(185));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,301.8,600);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_428 = function() {
		this.stop();
	}
	this.frame_434 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(428).call(this.frame_428).wait(6).call(this.frame_434).wait(49));

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(150.2,480.05,1,1,0,0,0,134.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:134.6,scaleX:0.7455,scaleY:0.7455,x:150.3,y:471},0).wait(1).to({regX:134.5,scaleX:0.7545,scaleY:0.7545,x:150.2,y:471.3},0).wait(1).to({scaleX:0.7637,scaleY:0.7637,x:150.15,y:471.6},0).wait(1).to({scaleX:0.773,scaleY:0.773,y:471.95},0).wait(1).to({scaleX:0.7824,scaleY:0.7824,x:150.2,y:472.3},0).wait(1).to({scaleX:0.7917,scaleY:0.7917,y:472.6},0).wait(1).to({scaleX:0.801,scaleY:0.801,y:472.95},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:473.25},0).wait(1).to({scaleX:0.8188,scaleY:0.8188,x:150.15,y:473.55},0).wait(1).to({scaleX:0.8272,scaleY:0.8272,y:473.9},0).wait(1).to({scaleX:0.8351,scaleY:0.8351,x:150.2,y:474.2},0).wait(1).to({scaleX:0.8427,scaleY:0.8427,x:150.15,y:474.45},0).wait(1).to({scaleX:0.8498,scaleY:0.8498,y:474.65},0).wait(1).to({scaleX:0.8564,scaleY:0.8564,x:150.2,y:474.95},0).wait(1).to({scaleX:0.8626,scaleY:0.8626,x:150.15,y:475.15},0).wait(1).to({scaleX:0.8683,scaleY:0.8683,y:475.35},0).wait(1).to({scaleX:0.8737,scaleY:0.8737,y:475.5},0).wait(1).to({scaleX:0.8787,scaleY:0.8787,y:475.7},0).wait(1).to({scaleX:0.8833,scaleY:0.8833,y:475.85},0).wait(1).to({scaleX:0.8877,scaleY:0.8877,y:476.05},0).wait(1).to({scaleX:0.8918,scaleY:0.8918,y:476.15},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,y:476.35},0).wait(1).to({scaleX:0.8992,scaleY:0.8992,y:476.45},0).wait(1).to({scaleX:0.9025,scaleY:0.9025,y:476.55},0).wait(1).to({scaleX:0.9057,scaleY:0.9057,y:476.7},0).wait(1).to({scaleX:0.9087,scaleY:0.9087,y:476.8},0).wait(1).to({scaleX:0.9115,scaleY:0.9115,y:476.9},0).wait(1).to({scaleX:0.9142,scaleY:0.9142,y:477},0).wait(1).to({scaleX:0.9168,scaleY:0.9168,y:477.1},0).wait(1).to({scaleX:0.9192,scaleY:0.9192,y:477.15},0).wait(1).to({scaleX:0.9215,scaleY:0.9215,y:477.25},0).wait(1).to({scaleX:0.9237,scaleY:0.9237,y:477.3},0).wait(1).to({scaleX:0.9258,scaleY:0.9258,x:150.1,y:477.4},0).wait(1).to({scaleX:0.9278,scaleY:0.9278,x:150.15,y:477.45},0).wait(1).to({scaleX:0.9297,scaleY:0.9297,y:477.55},0).wait(1).to({scaleX:0.9316,scaleY:0.9316},0).wait(1).to({scaleX:0.9334,scaleY:0.9334,y:477.65},0).wait(1).to({scaleX:0.935,scaleY:0.935,y:477.75},0).wait(1).to({scaleX:0.9367,scaleY:0.9367},0).wait(1).to({scaleX:0.9382,scaleY:0.9382,y:477.85},0).wait(1).to({scaleX:0.9397,scaleY:0.9397,y:477.9},0).wait(1).to({scaleX:0.9412,scaleY:0.9412,y:477.95},0).wait(1).to({scaleX:0.9426,scaleY:0.9426,y:478},0).wait(1).to({scaleX:0.9439,scaleY:0.9439},0).wait(1).to({scaleX:0.9452,scaleY:0.9452,y:478.1},0).wait(1).to({scaleX:0.9465,scaleY:0.9465},0).wait(1).to({scaleX:0.9477,scaleY:0.9477,x:150.1,y:478.2},0).wait(1).to({scaleX:0.9489,scaleY:0.9489},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:150.15,y:478.25},0).wait(1).to({scaleX:0.9511,scaleY:0.9511,x:150.1,y:478.3},0).wait(1).to({scaleX:0.9522,scaleY:0.9522},0).wait(1).to({scaleX:0.9532,scaleY:0.9532,x:150.15,y:478.4},0).wait(1).to({scaleX:0.9542,scaleY:0.9542},0).wait(1).to({scaleX:0.9552,scaleY:0.9552,x:150.1},0).wait(1).to({scaleX:0.9561,scaleY:0.9561,x:150.15,y:478.5},0).wait(1).to({scaleX:0.9571,scaleY:0.9571,x:150.1},0).wait(1).to({scaleX:0.958,scaleY:0.958,x:150.15},0).wait(1).to({scaleX:0.9588,scaleY:0.9588,x:150.1,y:478.55},0).wait(1).to({scaleX:0.9597,scaleY:0.9597,y:478.6},0).wait(1).to({scaleX:0.9605,scaleY:0.9605,x:150.15},0).wait(1).to({scaleX:0.9613,scaleY:0.9613,y:478.65},0).wait(1).to({scaleX:0.9621,scaleY:0.9621},0).wait(1).to({scaleX:0.9628,scaleY:0.9628,y:478.7},0).wait(1).to({scaleX:0.9636,scaleY:0.9636,y:478.75},0).wait(1).to({scaleX:0.9643,scaleY:0.9643},0).wait(1).to({scaleX:0.965,scaleY:0.965},0).wait(1).to({scaleX:0.9657,scaleY:0.9657,y:478.8},0).wait(1).to({scaleX:0.9663,scaleY:0.9663,x:150.1,y:478.85},0).wait(1).to({scaleX:0.967,scaleY:0.967},0).wait(1).to({scaleX:0.9676,scaleY:0.9676,x:150.15},0).wait(1).to({scaleX:0.9682,scaleY:0.9682,y:478.9},0).wait(1).to({scaleX:0.9688,scaleY:0.9688,x:150.1,y:478.95},0).wait(1).to({scaleX:0.9694,scaleY:0.9694,x:150.15},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:150.1},0).wait(1).to({scaleX:0.9706,scaleY:0.9706,x:150.15},0).wait(1).to({scaleX:0.9711,scaleY:0.9711,x:150.1},0).wait(1).to({scaleX:0.9716,scaleY:0.9716,x:150.15,y:479.05},0).wait(1).to({scaleX:0.9722,scaleY:0.9722},0).wait(1).to({scaleX:0.9727,scaleY:0.9727,x:150.1},0).wait(1).to({scaleX:0.9732,scaleY:0.9732,x:150.15},0).wait(1).to({scaleX:0.9737,scaleY:0.9737,x:150.1},0).wait(1).to({scaleX:0.9742,scaleY:0.9742,y:479.1},0).wait(1).to({scaleX:0.9746,scaleY:0.9746,x:150.15,y:479.15},0).wait(1).to({scaleX:0.9751,scaleY:0.9751},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,x:150.1},0).wait(1).to({scaleX:0.976,scaleY:0.976},0).wait(1).to({scaleX:0.9764,scaleY:0.9764,x:150.15,y:479.2},0).wait(1).to({scaleX:0.9768,scaleY:0.9768},0).wait(1).to({scaleX:0.9772,scaleY:0.9772},0).wait(1).to({scaleX:0.9776,scaleY:0.9776,y:479.25},0).wait(1).to({scaleX:0.978,scaleY:0.978},0).wait(1).to({scaleX:0.9784,scaleY:0.9784},0).wait(1).to({scaleX:0.9788,scaleY:0.9788},0).wait(1).to({scaleX:0.9792,scaleY:0.9792,y:479.3},0).wait(1).to({scaleX:0.9795,scaleY:0.9795},0).wait(1).to({scaleX:0.9799,scaleY:0.9799},0).wait(1).to({scaleX:0.9802,scaleY:0.9802},0).wait(1).to({scaleX:0.9806,scaleY:0.9806,y:479.35},0).wait(1).to({scaleX:0.9809,scaleY:0.9809},0).wait(1).to({scaleX:0.9813,scaleY:0.9813},0).wait(1).to({scaleX:0.9816,scaleY:0.9816,x:150.1},0).wait(1).to({scaleX:0.9819,scaleY:0.9819,y:479.4},0).wait(1).to({scaleX:0.9822,scaleY:0.9822},0).wait(1).to({scaleX:0.9825,scaleY:0.9825,x:150.15},0).wait(1).to({scaleX:0.9828,scaleY:0.9828},0).wait(1).to({scaleX:0.9831,scaleY:0.9831},0).wait(1).to({scaleX:0.9834,scaleY:0.9834,x:150.1,y:479.45},0).wait(1).to({scaleX:0.9837,scaleY:0.9837,x:150.15},0).wait(1).to({scaleX:0.9839,scaleY:0.9839},0).wait(1).to({scaleX:0.9842,scaleY:0.9842},0).wait(1).to({scaleX:0.9845,scaleY:0.9845,x:150.1,y:479.5},0).wait(1).to({scaleX:0.9847,scaleY:0.9847,x:150.15},0).wait(1).to({scaleX:0.985,scaleY:0.985},0).wait(1).to({scaleX:0.9853,scaleY:0.9853,x:150.1},0).wait(1).to({scaleX:0.9855,scaleY:0.9855,x:150.15},0).wait(1).to({scaleX:0.9857,scaleY:0.9857},0).wait(1).to({scaleX:0.986,scaleY:0.986,x:150.1},0).wait(1).to({scaleX:0.9862,scaleY:0.9862,x:150.15},0).wait(1).to({scaleX:0.9864,scaleY:0.9864,y:479.55},0).wait(1).to({scaleX:0.9867,scaleY:0.9867,x:150.1},0).wait(1).to({scaleX:0.9869,scaleY:0.9869,x:150.15,y:479.6},0).wait(1).to({scaleX:0.9871,scaleY:0.9871,x:150.1},0).wait(1).to({scaleX:0.9873,scaleY:0.9873,x:150.15},0).wait(1).to({scaleX:0.9875,scaleY:0.9875,x:150.1},0).wait(1).to({scaleX:0.9877,scaleY:0.9877,x:150.15},0).wait(1).to({scaleX:0.9879,scaleY:0.9879,x:150.1},0).wait(1).to({scaleX:0.9881,scaleY:0.9881,x:150.15},0).wait(1).to({scaleX:0.9883,scaleY:0.9883},0).wait(1).to({scaleX:0.9885,scaleY:0.9885,x:150.1},0).wait(1).to({scaleX:0.9887,scaleY:0.9887,x:150.15},0).wait(1).to({scaleX:0.9889,scaleY:0.9889,x:150.1},0).wait(1).to({scaleX:0.989,scaleY:0.989,x:150.15},0).wait(1).to({scaleX:0.9892,scaleY:0.9892},0).wait(1).to({scaleX:0.9894,scaleY:0.9894,x:150.1,y:479.65},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:150.15,y:479.7},0).wait(1).to({scaleX:0.9897,scaleY:0.9897,x:150.1},0).wait(1).to({scaleX:0.9899,scaleY:0.9899,x:150.15},0).wait(1).to({scaleX:0.9901,scaleY:0.9901,x:150.1},0).wait(1).to({scaleX:0.9902,scaleY:0.9902,x:150.15},0).wait(1).to({scaleX:0.9904,scaleY:0.9904,x:150.1},0).wait(1).to({scaleX:0.9905,scaleY:0.9905},0).wait(1).to({scaleX:0.9907,scaleY:0.9907,x:150.15},0).wait(1).to({scaleX:0.9908,scaleY:0.9908,x:150.1},0).wait(1).to({scaleX:0.991,scaleY:0.991,x:150.15},0).wait(1).to({scaleX:0.9911,scaleY:0.9911,x:150.1},0).wait(1).to({scaleX:0.9912,scaleY:0.9912},0).wait(1).to({scaleX:0.9914,scaleY:0.9914,x:150.15},0).wait(1).to({scaleX:0.9915,scaleY:0.9915,x:150.1},0).wait(1).to({scaleX:0.9916,scaleY:0.9916},0).wait(1).to({scaleX:0.9918,scaleY:0.9918,x:150.15},0).wait(1).to({scaleX:0.9919,scaleY:0.9919,x:150.1},0).wait(1).to({scaleX:0.992,scaleY:0.992},0).wait(1).to({scaleX:0.9921,scaleY:0.9921,x:150.15,y:479.75},0).wait(1).to({scaleX:0.9922,scaleY:0.9922,x:150.1},0).wait(1).to({scaleX:0.9924,scaleY:0.9924},0).wait(1).to({scaleX:0.9925,scaleY:0.9925,x:150.15,y:479.8},0).wait(1).to({scaleX:0.9926,scaleY:0.9926,x:150.1},0).wait(1).to({scaleX:0.9927,scaleY:0.9927},0).wait(1).to({scaleX:0.9928,scaleY:0.9928,x:150.15},0).wait(1).to({scaleX:0.9929,scaleY:0.9929},0).wait(1).to({scaleX:0.993,scaleY:0.993,x:150.1},0).wait(1).to({scaleX:0.9931,scaleY:0.9931},0).wait(2).to({scaleX:0.9932,scaleY:0.9932,x:150.15},0).wait(2).to({scaleX:0.9933,scaleY:0.9933},0).wait(1).to({scaleX:0.9934,scaleY:0.9934,x:150.1},0).wait(2).to({scaleX:0.9935,scaleY:0.9935},0).wait(1).to({x:150.15},0).wait(1).to({scaleX:0.9936,scaleY:0.9936},0).wait(2).to({scaleX:0.9937,scaleY:0.9937},0).wait(1).to({x:150.1},0).wait(1).to({scaleX:0.9938,scaleY:0.9938},0).wait(1).to({scaleX:0.9939,scaleY:0.9939},0).wait(1).to({x:150.15},0).wait(1).to({scaleX:0.994,scaleY:0.994},0).wait(2).to({scaleX:0.9941,scaleY:0.9941,x:150.1},0).wait(2).to({scaleX:0.9942,scaleY:0.9942},0).wait(2).to({scaleX:0.9943,scaleY:0.9943,x:150.15},0).wait(2).to({scaleX:0.9944,scaleY:0.9944},0).wait(2).to({scaleX:0.9945,scaleY:0.9945,x:150.1},0).wait(2).to({scaleX:0.9946,scaleY:0.9946},0).wait(1).to({x:150.15},0).wait(1).to({scaleX:0.9947,scaleY:0.9947},0).wait(2).to({scaleX:0.9948,scaleY:0.9948,y:479.85},0).wait(1).to({x:150.1},0).wait(1).to({scaleX:0.9949,scaleY:0.9949},0).wait(2).to({scaleX:0.995,scaleY:0.995,x:150.15},0).wait(2).to({scaleX:0.9951,scaleY:0.9951},0).wait(2).to({scaleX:0.9952,scaleY:0.9952,x:150.1},0).wait(2).to({scaleX:0.9953,scaleY:0.9953},0).wait(2).to({scaleX:0.9954,scaleY:0.9954,x:150.15},0).wait(2).to({scaleX:0.9955,scaleY:0.9955,y:479.9},0).wait(2).to({scaleX:0.9956,scaleY:0.9956,x:150.1},0).wait(2).to({scaleX:0.9957,scaleY:0.9957},0).wait(2).to({scaleX:0.9958,scaleY:0.9958,x:150.15},0).wait(2).to({scaleX:0.9959,scaleY:0.9959},0).wait(2).to({scaleX:0.996,scaleY:0.996,x:150.1},0).wait(3).to({scaleX:0.9961,scaleY:0.9961},0).wait(1).to({x:150.15},0).wait(1).to({scaleX:0.9962,scaleY:0.9962},0).wait(2).to({scaleX:0.9963,scaleY:0.9963},0).wait(1).to({x:150.1},0).wait(1).to({scaleX:0.9964,scaleY:0.9964},0).wait(3).to({scaleX:0.9965,scaleY:0.9965,x:150.15},0).wait(2).to({scaleX:0.9966,scaleY:0.9966},0).wait(2).to({scaleX:0.9967,scaleY:0.9967,x:150.1},0).wait(3).to({scaleX:0.9968,scaleY:0.9968},0).wait(2).to({scaleX:0.9969,scaleY:0.9969,x:150.15},0).wait(2).to({scaleX:0.997,scaleY:0.997},0).wait(2).to({x:150.1},0).wait(1).to({scaleX:0.9971,scaleY:0.9971},0).wait(2).to({scaleX:0.9972,scaleY:0.9972},0).wait(2).to({x:150.15},0).wait(1).to({scaleX:0.9973,scaleY:0.9973},0).wait(2).to({scaleX:0.9974,scaleY:0.9974},0).wait(1).to({y:479.95},0).wait(1).to({x:150.1},0).wait(1).to({scaleX:0.9975,scaleY:0.9975},0).wait(3).to({scaleX:0.9976,scaleY:0.9976},0).wait(1).to({x:150.15},0).wait(2).to({scaleX:0.9977,scaleY:0.9977},0).wait(2).to({scaleX:0.9978,scaleY:0.9978},0).wait(1).to({x:150.1},0).wait(2).to({scaleX:0.9979,scaleY:0.9979},0).wait(3).to({scaleX:0.998,scaleY:0.998},0).wait(1).to({x:150.15},0).wait(2).to({scaleX:0.9981,scaleY:0.9981},0).wait(3).to({scaleX:0.9982,scaleY:0.9982,x:150.1},0).wait(3).to({scaleX:0.9983,scaleY:0.9983},0).wait(3).to({scaleX:0.9984,scaleY:0.9984,x:150.15},0).wait(4).to({scaleX:0.9985,scaleY:0.9985},0).wait(1).to({y:480},0).wait(1).to({x:150.1},0).wait(1).to({scaleX:0.9986,scaleY:0.9986},0).wait(3).to({scaleX:0.9987,scaleY:0.9987},0).wait(2).to({x:150.15},0).wait(2).to({scaleX:0.9988,scaleY:0.9988},0).wait(4).to({scaleX:0.9989,scaleY:0.9989},0).wait(1).to({x:150.1},0).wait(3).to({scaleX:0.999,scaleY:0.999},0).wait(4).to({scaleX:0.9991,scaleY:0.9991},0).wait(1).to({x:150.15},0).wait(3).to({scaleX:0.9992,scaleY:0.9992},0).wait(5).to({scaleX:0.9993,scaleY:0.9993,x:150.1},0).wait(5).to({scaleX:0.9994,scaleY:0.9994},0).wait(5).to({scaleX:0.9995,scaleY:0.9995,x:150.15},0).wait(6).to({scaleX:0.9996,scaleY:0.9996},0).wait(6).to({x:150.1},0).wait(1).to({scaleX:0.9997,scaleY:0.9997},0).wait(8).to({scaleX:0.9998,scaleY:0.9998},0).wait(7).to({x:150.15},0).wait(3).to({scaleX:0.9999,scaleY:0.9999},0).wait(16).to({scaleX:1,scaleY:1},0).wait(33).to({x:150.2,y:480.05},0).wait(78));

	// Layer_6
	this.instance_1 = new lib.gradient_hole_DARK_001();
	this.instance_1.setTransform(161.1,310.95,1.7245,1.8424,0,0,0,123.2,123);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:123,regY:122.8,scaleX:12.6648,scaleY:13.5311,x:160.65,y:308.95},102).to({_off:true},1).wait(379));

	// Layer_1
	this.art = new lib.art();
	this.art.name = "art";
	this.art.setTransform(150.15,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.art).wait(1).to({regY:299.9,scaleX:1.4042,scaleY:1.4042,x:150.3},0).wait(1).to({regX:192.6,regY:300,scaleX:1.3898,scaleY:1.3898,x:209.55,y:300.2},0).wait(1).to({scaleX:1.3752,scaleY:1.3752,x:208.85,y:300.15},0).wait(1).to({scaleX:1.3604,scaleY:1.3604,x:208.25},0).wait(1).to({scaleX:1.3455,scaleY:1.3455,x:207.6},0).wait(1).to({scaleX:1.3307,scaleY:1.3307,x:207},0).wait(1).to({scaleX:1.316,scaleY:1.316,x:206.35},0).wait(1).to({scaleX:1.3017,scaleY:1.3017,x:205.75},0).wait(1).to({scaleX:1.2878,scaleY:1.2878,x:205.1},0).wait(1).to({scaleX:1.2744,scaleY:1.2744,x:204.55},0).wait(1).to({scaleX:1.2618,scaleY:1.2618,x:204},0).wait(1).to({scaleX:1.2498,scaleY:1.2498,x:203.5},0).wait(1).to({scaleX:1.2386,scaleY:1.2386,x:203.05,y:300.1},0).wait(1).to({scaleX:1.228,scaleY:1.228,x:202.55},0).wait(1).to({scaleX:1.2182,scaleY:1.2182,x:202.2},0).wait(1).to({scaleX:1.2091,scaleY:1.2091,x:201.75,y:300.15},0).wait(1).to({scaleX:1.2006,scaleY:1.2006,x:201.45,y:300.1},0).wait(1).to({scaleX:1.1927,scaleY:1.1927,x:201.05,y:300.15},0).wait(1).to({scaleX:1.1853,scaleY:1.1853,x:200.75,y:300.1},0).wait(1).to({scaleX:1.1783,scaleY:1.1783,x:200.45},0).wait(1).to({scaleX:1.1719,scaleY:1.1719,x:200.2},0).wait(1).to({scaleX:1.1658,scaleY:1.1658,x:199.95},0).wait(1).to({scaleX:1.1601,scaleY:1.1601,x:199.7,y:300.15},0).wait(1).to({scaleX:1.1548,scaleY:1.1548,x:199.45},0).wait(1).to({scaleX:1.1497,scaleY:1.1497,x:199.25,y:300.1},0).wait(1).to({scaleX:1.145,scaleY:1.145,x:199,y:300.15},0).wait(1).to({scaleX:1.1405,scaleY:1.1405,x:198.85},0).wait(1).to({scaleX:1.1362,scaleY:1.1362,x:198.65,y:300.1},0).wait(1).to({scaleX:1.1321,scaleY:1.1321,x:198.5},0).wait(1).to({scaleX:1.1283,scaleY:1.1283,x:198.3,y:300.15},0).wait(1).to({scaleX:1.1246,scaleY:1.1246,x:198.15,y:300.1},0).wait(1).to({scaleX:1.1211,scaleY:1.1211,x:198.05},0).wait(1).to({scaleX:1.1178,scaleY:1.1178,x:197.9},0).wait(1).to({scaleX:1.1146,scaleY:1.1146,x:197.7,y:300.15},0).wait(1).to({scaleX:1.1115,scaleY:1.1115,x:197.6,y:300.1},0).wait(1).to({scaleX:1.1086,scaleY:1.1086,x:197.45},0).wait(1).to({scaleX:1.1058,scaleY:1.1058,x:197.35},0).wait(1).to({scaleX:1.1031,scaleY:1.1031,x:197.2},0).wait(1).to({scaleX:1.1006,scaleY:1.1006,x:197.1},0).wait(1).to({scaleX:1.0981,scaleY:1.0981,x:197.05},0).wait(1).to({scaleX:1.0957,scaleY:1.0957,x:196.95},0).wait(1).to({scaleX:1.0934,scaleY:1.0934,x:196.85},0).wait(1).to({scaleX:1.0912,scaleY:1.0912,x:196.7},0).wait(1).to({scaleX:1.089,scaleY:1.089,x:196.65},0).wait(1).to({scaleX:1.087,scaleY:1.087,x:196.55},0).wait(1).to({scaleX:1.085,scaleY:1.085,x:196.45},0).wait(1).to({scaleX:1.083,scaleY:1.083,x:196.4},0).wait(1).to({scaleX:1.0812,scaleY:1.0812,x:196.3},0).wait(1).to({scaleX:1.0794,scaleY:1.0794,x:196.25},0).wait(1).to({scaleX:1.0776,scaleY:1.0776,x:196.15},0).wait(1).to({scaleX:1.0759,scaleY:1.0759,x:196.05,y:300.05},0).wait(1).to({scaleX:1.0743,scaleY:1.0743,x:196,y:300.1},0).wait(1).to({scaleX:1.0727,scaleY:1.0727,x:195.95},0).wait(1).to({scaleX:1.0711,scaleY:1.0711,x:195.85},0).wait(1).to({scaleX:1.0696,scaleY:1.0696,x:195.8},0).wait(1).to({scaleX:1.0682,scaleY:1.0682,x:195.75},0).wait(1).to({scaleX:1.0668,scaleY:1.0668,x:195.65,y:300.05},0).wait(1).to({scaleX:1.0654,scaleY:1.0654,y:300.1},0).wait(1).to({scaleX:1.064,scaleY:1.064,x:195.6},0).wait(1).to({scaleX:1.0627,scaleY:1.0627,x:195.55,y:300.05},0).wait(1).to({scaleX:1.0615,scaleY:1.0615,x:195.45,y:300.1},0).wait(1).to({scaleX:1.0602,scaleY:1.0602,x:195.4,y:300.05},0).wait(1).to({scaleX:1.059,scaleY:1.059,x:195.35,y:300.1},0).wait(1).to({scaleX:1.0579,scaleY:1.0579,x:195.3},0).wait(1).to({scaleX:1.0567,scaleY:1.0567,x:195.25,y:300.05},0).wait(1).to({scaleX:1.0556,scaleY:1.0556,x:195.2,y:300.1},0).wait(1).to({scaleX:1.0545,scaleY:1.0545,x:195.15},0).wait(1).to({scaleX:1.0535,scaleY:1.0535,x:195.1},0).wait(1).to({scaleX:1.0524,scaleY:1.0524,x:195.05},0).wait(1).to({scaleX:1.0514,scaleY:1.0514,x:195},0).wait(1).to({scaleX:1.0505,scaleY:1.0505,x:194.95},0).wait(1).to({scaleX:1.0495,scaleY:1.0495},0).wait(1).to({scaleX:1.0486,scaleY:1.0486,x:194.9,y:300.05},0).wait(1).to({scaleX:1.0476,scaleY:1.0476,y:300.1},0).wait(1).to({scaleX:1.0467,scaleY:1.0467,x:194.8,y:300.05},0).wait(1).to({scaleX:1.0459,scaleY:1.0459},0).wait(1).to({scaleX:1.045,scaleY:1.045,x:194.75,y:300.1},0).wait(1).to({scaleX:1.0442,scaleY:1.0442,x:194.7},0).wait(1).to({scaleX:1.0434,scaleY:1.0434,y:300.05},0).wait(1).to({scaleX:1.0426,scaleY:1.0426,x:194.65},0).wait(1).to({scaleX:1.0418,scaleY:1.0418,x:194.6,y:300.1},0).wait(1).to({scaleX:1.041,scaleY:1.041,y:300.05},0).wait(1).to({scaleX:1.0403,scaleY:1.0403,x:194.55,y:300.1},0).wait(1).to({scaleX:1.0396,scaleY:1.0396,x:194.5,y:300.05},0).wait(1).to({scaleX:1.0389,scaleY:1.0389,y:300.1},0).wait(1).to({scaleX:1.0382,scaleY:1.0382,x:194.45},0).wait(1).to({scaleX:1.0375,scaleY:1.0375,x:194.4},0).wait(1).to({scaleX:1.0368,scaleY:1.0368},0).wait(1).to({scaleX:1.0361,scaleY:1.0361,x:194.35},0).wait(1).to({scaleX:1.0355,scaleY:1.0355},0).wait(1).to({scaleX:1.0349,scaleY:1.0349,x:194.3,y:300.05},0).wait(1).to({scaleX:1.0343,scaleY:1.0343,y:300.1},0).wait(1).to({scaleX:1.0337,scaleY:1.0337},0).wait(1).to({scaleX:1.0331,scaleY:1.0331,x:194.2,y:300.05},0).wait(1).to({scaleX:1.0325,scaleY:1.0325,y:300.1},0).wait(1).to({scaleX:1.0319,scaleY:1.0319},0).wait(1).to({scaleX:1.0314,scaleY:1.0314,y:300.05},0).wait(1).to({scaleX:1.0308,scaleY:1.0308,x:194.15,y:300.1},0).wait(1).to({scaleX:1.0303,scaleY:1.0303},0).wait(1).to({scaleX:1.0298,scaleY:1.0298,x:194.1},0).wait(1).to({scaleX:1.0293,scaleY:1.0293},0).wait(1).to({scaleX:1.0287,scaleY:1.0287,x:194.05,y:300.05},0).wait(1).to({scaleX:1.0283,scaleY:1.0283},0).wait(1).to({scaleX:1.0278,scaleY:1.0278,x:194,y:300.1},0).wait(1).to({scaleX:1.0273,scaleY:1.0273},0).wait(1).to({scaleX:1.0268,scaleY:1.0268,x:193.95},0).wait(1).to({scaleX:1.0264,scaleY:1.0264,y:300.05},0).wait(1).to({scaleX:1.0259,scaleY:1.0259,y:300.1},0).wait(1).to({scaleX:1.0255,scaleY:1.0255,x:193.9},0).wait(1).to({scaleX:1.0251,scaleY:1.0251,y:300.05},0).wait(1).to({scaleX:1.0246,scaleY:1.0246,y:300.1},0).wait(1).to({scaleX:1.0242,scaleY:1.0242,x:193.85,y:300.05},0).wait(1).to({scaleX:1.0238,scaleY:1.0238,y:300.1},0).wait(1).to({scaleX:1.0234,scaleY:1.0234,x:193.8,y:300.05},0).wait(1).to({scaleX:1.023,scaleY:1.023,x:193.85},0).wait(1).to({scaleX:1.0226,scaleY:1.0226,x:193.8,y:300.1},0).wait(1).to({scaleX:1.0223,scaleY:1.0223},0).wait(1).to({scaleX:1.0219,scaleY:1.0219,x:193.75,y:300.05},0).wait(1).to({scaleX:1.0215,scaleY:1.0215},0).wait(1).to({scaleX:1.0212,scaleY:1.0212,y:300.1},0).wait(1).to({scaleX:1.0208,scaleY:1.0208,x:193.7},0).wait(1).to({scaleX:1.0205,scaleY:1.0205},0).wait(1).to({scaleX:1.0201,scaleY:1.0201},0).wait(1).to({scaleX:1.0198,scaleY:1.0198,x:193.65},0).wait(1).to({scaleX:1.0195,scaleY:1.0195},0).wait(1).to({scaleX:1.0192,scaleY:1.0192},0).wait(1).to({scaleX:1.0189,scaleY:1.0189,y:300.05},0).wait(1).to({scaleX:1.0186,scaleY:1.0186,x:193.6},0).wait(1).to({scaleX:1.0183,scaleY:1.0183},0).wait(1).to({scaleX:1.018,scaleY:1.018,y:300.1},0).wait(1).to({scaleX:1.0177,scaleY:1.0177},0).wait(1).to({scaleX:1.0174,scaleY:1.0174,x:193.55,y:300.05},0).wait(1).to({scaleX:1.0171,scaleY:1.0171,y:300.1},0).wait(1).to({scaleX:1.0168,scaleY:1.0168},0).wait(1).to({scaleX:1.0166,scaleY:1.0166,y:300.05},0).wait(1).to({scaleX:1.0163,scaleY:1.0163,y:300.1},0).wait(1).to({scaleX:1.016,scaleY:1.016,x:193.5,y:300.05},0).wait(1).to({scaleX:1.0158,scaleY:1.0158,y:300.1},0).wait(1).to({scaleX:1.0155,scaleY:1.0155,y:300.05},0).wait(1).to({scaleX:1.0153,scaleY:1.0153,y:300.1},0).wait(1).to({scaleX:1.0151,scaleY:1.0151,x:193.45,y:300.05},0).wait(1).to({scaleX:1.0148,scaleY:1.0148,y:300.1},0).wait(1).to({scaleX:1.0146,scaleY:1.0146,y:300.05},0).wait(1).to({scaleX:1.0144,scaleY:1.0144,x:193.4},0).wait(1).to({scaleX:1.0141,scaleY:1.0141,y:300.1},0).wait(1).to({scaleX:1.0139,scaleY:1.0139,x:193.45,y:300.05},0).wait(1).to({scaleX:1.0137,scaleY:1.0137,x:193.4},0).wait(1).to({scaleX:1.0135,scaleY:1.0135,y:300.1},0).wait(1).to({scaleX:1.0133,scaleY:1.0133},0).wait(1).to({scaleX:1.0131,scaleY:1.0131,x:193.35,y:300.05},0).wait(1).to({scaleX:1.0129,scaleY:1.0129,x:193.4},0).wait(1).to({scaleX:1.0127,scaleY:1.0127,x:193.35},0).wait(1).to({scaleX:1.0125,scaleY:1.0125,y:300.1},0).wait(1).to({scaleX:1.0123,scaleY:1.0123},0).wait(1).to({scaleX:1.0121,scaleY:1.0121},0).wait(1).to({scaleX:1.0119,scaleY:1.0119},0).wait(1).to({scaleX:1.0118,scaleY:1.0118,x:193.3},0).wait(1).to({scaleX:1.0116,scaleY:1.0116,x:193.35,y:300.05},0).wait(1).to({scaleX:1.0114,scaleY:1.0114,x:193.3},0).wait(1).to({scaleX:1.0113,scaleY:1.0113},0).wait(1).to({scaleX:1.0111,scaleY:1.0111},0).wait(1).to({scaleX:1.011,scaleY:1.011,y:300.1},0).wait(1).to({scaleX:1.0109,scaleY:1.0109,y:300.05},0).wait(1).to({scaleX:1.0108,scaleY:1.0108,y:300.1},0).wait(1).to({scaleX:1.0107,scaleY:1.0107,x:193.25,y:300.05},0).wait(1).to({scaleX:1.0106,scaleY:1.0106,x:193.3,y:300.1},0).wait(1).to({scaleX:1.0105,scaleY:1.0105,y:300.05},0).wait(1).to({x:193.25,y:300.1},0).wait(1).to({scaleX:1.0104,scaleY:1.0104,y:300.05},0).wait(1).to({scaleX:1.0103,scaleY:1.0103,x:193.3,y:300.1},0).wait(1).to({scaleX:1.0102,scaleY:1.0102,x:193.25,y:300.05},0).wait(1).to({scaleX:1.0101,scaleY:1.0101,y:300.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:300.05},0).wait(1).to({scaleX:1.0099,scaleY:1.0099,y:300.1},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0098,scaleY:1.0098,y:300.1},0).wait(1).to({scaleX:1.0097,scaleY:1.0097,x:193.2,y:300.05},0).wait(1).to({scaleX:1.0096,scaleY:1.0096,x:193.25},0).wait(1).to({scaleX:1.0095,scaleY:1.0095},0).wait(1).to({scaleX:1.0094,scaleY:1.0094,x:193.2},0).wait(1).to({scaleX:1.0093,scaleY:1.0093,x:193.25,y:300.1},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0092,scaleY:1.0092,x:193.2,y:300.1},0).wait(1).to({scaleX:1.0091,scaleY:1.0091,y:300.05},0).wait(1).to({scaleX:1.009,scaleY:1.009,x:193.25,y:300.1},0).wait(1).to({scaleX:1.0089,scaleY:1.0089,x:193.2,y:300.05},0).wait(1).to({scaleX:1.0088,scaleY:1.0088,y:300.1},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0087,scaleY:1.0087,y:300.1},0).wait(1).to({scaleX:1.0086,scaleY:1.0086},0).wait(1).to({scaleX:1.0085,scaleY:1.0085,y:300.05},0).wait(1).to({scaleX:1.0084,scaleY:1.0084,x:193.15,y:300.1},0).wait(1).to({scaleX:1.0083,scaleY:1.0083,y:300.05},0).wait(1).to({x:193.2,y:300.1},0).wait(1).to({scaleX:1.0082,scaleY:1.0082,y:300.05},0).wait(1).to({scaleX:1.0081,scaleY:1.0081,x:193.15,y:300.1},0).wait(1).to({scaleX:1.008,scaleY:1.008,y:300.05},0).wait(1).to({scaleX:1.0079,scaleY:1.0079,x:193.2,y:300.1},0).wait(1).to({x:193.15,y:300.05},0).wait(1).to({scaleX:1.0078,scaleY:1.0078,y:300.1},0).wait(1).to({scaleX:1.0077,scaleY:1.0077,y:300.05},0).wait(1).to({scaleX:1.0076,scaleY:1.0076,y:300.1},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0075,scaleY:1.0075,y:300.1},0).wait(1).to({scaleX:1.0074,scaleY:1.0074,x:193.1,y:300.05},0).wait(1).to({scaleX:1.0073,scaleY:1.0073,x:193.15,y:300.1},0).wait(1).to({scaleX:1.0072,scaleY:1.0072,y:300.05},0).wait(1).to({y:300.1},0).wait(1).to({scaleX:1.0071,scaleY:1.0071,x:193.1,y:300.05},0).wait(1).to({scaleX:1.007,scaleY:1.007},0).wait(1).to({scaleX:1.0069,scaleY:1.0069,x:193.15,y:300.1},0).wait(1).to({x:193.1,y:300.05},0).wait(1).to({scaleX:1.0068,scaleY:1.0068,y:300.1},0).wait(1).to({scaleX:1.0067,scaleY:1.0067,y:300.05},0).wait(1).to({scaleX:1.0066,scaleY:1.0066,x:193.15,y:300.1},0).wait(1).to({x:193.1,y:300.05},0).wait(1).to({scaleX:1.0065,scaleY:1.0065,y:300.1},0).wait(1).to({scaleX:1.0064,scaleY:1.0064,y:300.05},0).wait(1).to({scaleX:1.0063,scaleY:1.0063,x:193.05},0).wait(1).to({x:193.1,y:300.1},0).wait(1).to({scaleX:1.0062,scaleY:1.0062,y:300.05},0).wait(1).to({scaleX:1.0061,scaleY:1.0061,y:300.1},0).wait(1).to({x:193.05,y:300.05},0).wait(1).to({scaleX:1.006,scaleY:1.006,x:193.1,y:300.1},0).wait(1).to({scaleX:1.0059,scaleY:1.0059,y:300.05},0).wait(1).to({scaleX:1.0058,scaleY:1.0058},0).wait(1).to({x:193.05,y:300.1},0).wait(1).to({scaleX:1.0057,scaleY:1.0057,y:300.05},0).wait(1).to({scaleX:1.0056,scaleY:1.0056,x:193.1,y:300.1},0).wait(1).to({x:193.05,y:300.05},0).wait(1).to({scaleX:1.0055,scaleY:1.0055,y:300.1},0).wait(1).to({scaleX:1.0054,scaleY:1.0054},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0053,scaleY:1.0053,y:300.1},0).wait(1).to({scaleX:1.0052,scaleY:1.0052,y:300.05},0).wait(1).to({y:300.1},0).wait(1).to({scaleX:1.0051,scaleY:1.0051},0).wait(1).to({scaleX:1.005,scaleY:1.005,x:193,y:300.05},0).wait(1).to({x:193.05,y:300.1},0).wait(1).to({scaleX:1.0049,scaleY:1.0049,y:300.05},0).wait(1).to({scaleX:1.0048,scaleY:1.0048,y:300.1},0).wait(1).to({x:193},0).wait(1).to({scaleX:1.0047,scaleY:1.0047,y:300.05},0).wait(1).to({scaleX:1.0046,scaleY:1.0046,x:193.05,y:300.1},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0045,scaleY:1.0045,x:193},0).wait(1).to({y:300.1},0).wait(1).to({scaleX:1.0044,scaleY:1.0044,y:300.05},0).wait(1).to({scaleX:1.0043,scaleY:1.0043,x:193.05,y:300.1},0).wait(1).to({x:193},0).wait(1).to({scaleX:1.0042,scaleY:1.0042,y:300.05},0).wait(1).to({scaleX:1.0041,scaleY:1.0041,y:300.1},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.004,scaleY:1.004,x:192.95},0).wait(1).to({x:193,y:300.1},0).wait(1).to({scaleX:1.0039,scaleY:1.0039,y:300.05},0).wait(1).to({scaleX:1.0038,scaleY:1.0038},0).wait(1).to({y:300.1},0).wait(1).to({scaleX:1.0037,scaleY:1.0037,x:192.95,y:300.05},0).wait(2).to({scaleX:1.0036,scaleY:1.0036,x:193,y:300.1},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,x:192.95},0).wait(1).to({scaleX:1.0034,scaleY:1.0034,y:300.1},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0033,scaleY:1.0033,x:193},0).wait(1).to({y:300.1},0).wait(1).to({scaleX:1.0032,scaleY:1.0032,x:192.95,y:300.05},0).wait(2).to({scaleX:1.0031,scaleY:1.0031,y:300.1},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.003,scaleY:1.003},0).wait(1).to({y:300.1},0).wait(1).to({scaleX:1.0029,scaleY:1.0029,y:300.05},0).wait(2).to({scaleX:1.0028,scaleY:1.0028,y:300.1},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0027,scaleY:1.0027,x:192.9},0).wait(1).to({x:192.95,y:300.1},0).wait(1).to({scaleX:1.0026,scaleY:1.0026},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0025,scaleY:1.0025},0).wait(1).to({x:192.9,y:300.1},0).wait(1).to({scaleX:1.0024,scaleY:1.0024,y:300.05},0).wait(2).to({scaleX:1.0023,scaleY:1.0023,x:192.95,y:300.1},0).wait(2).to({scaleX:1.0022,scaleY:1.0022,y:300.05},0).wait(1).to({x:192.9},0).wait(1).to({scaleX:1.0021,scaleY:1.0021,y:300.1},0).wait(2).to({y:300.05},0).wait(1).to({scaleX:1.002,scaleY:1.002},0).wait(1).to({x:192.95,y:300.1},0).wait(1).to({scaleX:1.0019,scaleY:1.0019,x:192.9},0).wait(1).to({y:300.05},0).wait(1).to({scaleX:1.0018,scaleY:1.0018},0).wait(1).to({y:300.1},0).wait(2).to({scaleX:1.0017,scaleY:1.0017,y:300.05},0).wait(1).to({x:192.85},0).wait(1).to({scaleX:1.0016,scaleY:1.0016,x:192.9,y:300.1},0).wait(2).to({y:300.05},0).wait(1).to({scaleX:1.0015,scaleY:1.0015},0).wait(1).to({y:300.1},0).wait(2).to({scaleX:1.0014,scaleY:1.0014,x:192.85,y:300.05},0).wait(2).to({scaleX:1.0013,scaleY:1.0013},0).wait(1).to({y:300.1},0).wait(2).to({scaleX:1.0012,scaleY:1.0012,y:300.05},0).wait(3).to({scaleX:1.0011,scaleY:1.0011,x:192.8,y:300.1},0).wait(2).to({y:300.05},0).wait(1).to({scaleX:1.001,scaleY:1.001},0).wait(2).to({x:192.85,y:300.1},0).wait(2).to({scaleX:1.0009,scaleY:1.0009,y:300.05},0).wait(1).to({x:192.8},0).wait(2).to({scaleX:1.0008,scaleY:1.0008},0).wait(1).to({y:300.1},0).wait(3).to({scaleX:1.0007,scaleY:1.0007,y:300.05},0).wait(3).to({x:192.85,y:300.1},0).wait(1).to({scaleX:1.0006,scaleY:1.0006,x:192.8},0).wait(2).to({y:300.05},0).wait(3).to({scaleX:1.0005,scaleY:1.0005},0).wait(2).to({y:300.1},0).wait(2).to({scaleX:1.0004,scaleY:1.0004},0).wait(2).to({y:300.05},0).wait(1).to({x:192.75},0).wait(3).to({scaleX:1.0003,scaleY:1.0003},0).wait(1).to({x:192.8,y:300.1},0).wait(5).to({y:300.05},0).wait(1).to({scaleX:1.0002,scaleY:1.0002},0).wait(8).to({scaleX:1.0001,scaleY:1.0001},0).wait(1).to({x:192.75},0).wait(6).to({y:300},0).wait(6).to({scaleX:1,scaleY:1},0).wait(28).to({regX:150,x:150.15},0).wait(78));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3301.9,-2439.2,6291.200000000001,4928.1);


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
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_195 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(189).call(this.frame_189).wait(6).call(this.frame_195).wait(49));

	// -
	this.instance = new lib.Symbol3();
	this.instance.setTransform(124.25,580.4,1,1,0,0,0,110.1,8.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:110,regY:9.2,x:124.15,y:581,alpha:0.0003},0).wait(1).to({alpha:0.0014},0).wait(1).to({alpha:0.0032},0).wait(1).to({alpha:0.0058},0).wait(1).to({alpha:0.0092},0).wait(1).to({alpha:0.0136},0).wait(1).to({alpha:0.0188},0).wait(1).to({alpha:0.0251},0).wait(1).to({alpha:0.0325},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.0508},0).wait(1).to({alpha:0.0619},0).wait(1).to({alpha:0.0743},0).wait(1).to({alpha:0.0883},0).wait(1).to({alpha:0.1039},0).wait(1).to({alpha:0.1212},0).wait(1).to({alpha:0.1403},0).wait(1).to({alpha:0.1613},0).wait(1).to({alpha:0.1844},0).wait(1).to({alpha:0.2095},0).wait(1).to({alpha:0.2369},0).wait(1).to({alpha:0.2665},0).wait(1).to({alpha:0.2983},0).wait(1).to({alpha:0.3322},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.4055},0).wait(1).to({alpha:0.4443},0).wait(1).to({alpha:0.484},0).wait(1).to({alpha:0.5239},0).wait(1).to({alpha:0.5637},0).wait(1).to({alpha:0.6026},0).wait(1).to({alpha:0.6403},0).wait(1).to({alpha:0.6763},0).wait(1).to({alpha:0.7104},0).wait(1).to({alpha:0.7423},0).wait(1).to({alpha:0.7719},0).wait(1).to({alpha:0.7993},0).wait(1).to({alpha:0.8245},0).wait(1).to({alpha:0.8474},0).wait(1).to({alpha:0.8683},0).wait(1).to({alpha:0.8872},0).wait(1).to({alpha:0.9042},0).wait(1).to({alpha:0.9194},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.945},0).wait(1).to({alpha:0.9556},0).wait(1).to({alpha:0.9649},0).wait(1).to({alpha:0.9729},0).wait(1).to({alpha:0.9797},0).wait(1).to({alpha:0.9854},0).wait(1).to({alpha:0.9901},0).wait(1).to({alpha:0.9938},0).wait(1).to({alpha:0.9966},0).wait(1).to({alpha:0.9985},0).wait(1).to({alpha:0.9996},0).wait(1).to({regX:110.1,regY:8.6,x:124.25,y:580.4,alpha:1},0).to({_off:true},166).wait(12));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(151.05,534.7,0.9947,0.9947,0,0,0,83.9,24.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).wait(154));

	// MAIN ANEL
	this.instance_2 = new lib.Symbol22();
	this.instance_2.setTransform(149.85,101,1,1,0,0,0,132,74.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0},0).to({alpha:1},9).wait(234));

	// art_mc
	this.art_mc = new lib.Symbol1();
	this.art_mc.name = "art_mc";
	this.art_mc.setTransform(149.95,300,1,1,0,0,0,150.1,300);

	this.timeline.addTween(cjs.Tween.get(this.art_mc).to({_off:true},232).wait(12));

	// BACKGROUND
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},232).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,300.1,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
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
		
		/*
		var border = new createjs.Shape();
		border.graphics.beginStroke("#999999").setStrokeStyle(2).drawRect(0, 0, lib.properties.width, lib.properties.height);
		stage.addChild(border);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// ALL
	this.instance = new lib._TEMPLATE_all_300250();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgY/gwbMAx/AAAMAAABg3Mgx/AAAg");
	this.shape.setTransform(150,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgY/AwcMAAAhg3MAx/AAAMAAABg3g");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.9,300,150.1,300);
// library properties:
lib.properties = {
	id: '253EE687B0D839438420658A95EF90D6',
	width: 300,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/aviator.png", id:"aviator"},
		{src:"images/Component3.jpg", id:"Component3"},
		{src:"images/LIGHT_YELLOW.jpg", id:"LIGHT_YELLOW"},
		{src:"images/pic.jpg", id:"pic"},
		{src:"images/shine.png", id:"shine"}
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
an.compositions['253EE687B0D839438420658A95EF90D6'] = {
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