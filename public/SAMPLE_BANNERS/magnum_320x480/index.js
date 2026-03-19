(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,0,219,167],[0,169,265,49],[221,0,102,60],[221,62,65,80],[267,144,66,67]]}
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



(lib.knife = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.productsitem4 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.productsitem5 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.productsitem6 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(4);
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
	this.instance.setTransform(-132.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-24.5,265,49);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-132.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-24.5,265,49);


(lib.gradient_radial_002_ = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.gradient_radial_002_, new cjs.Rectangle(0,0,101,101), null);


(lib.Symbol42 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AI1mjQpQFsoZHbQG9o0KskTg");
	this.shape.setTransform(56.5,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,113,84), null);


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.productsitem4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,102,60), null);


(lib.Symbol38 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.productsitem6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,66,67), null);


(lib.Symbol37 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.productsitem5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,65,80), null);


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.knife();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,219,167), null);


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
	this.shape.graphics.f("#F5136D").s().p("Au4KeIAAxzQAAjIDIAAIapU7g");
	this.shape.setTransform(95.275,67);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,190.6,134), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwrQrQm6m5AApyQAApwG6m7QG7m6JwAAQJyAAG5G6QG6G7AAJwQAAJym6G5Qm5G6pyAAQpwAAm7m6gAtXtXQljFiAAH1QAAH2FjFjQFiFjH1gBQH2ABFjljQFjljgBn2QABn1ljliQljlkn2AAQn1AAliFkg");
	this.shape.setTransform(150.95,150.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,301.9,301.9), null);


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
	this.shape.graphics.f("#F5136D").s().p("Av7c/QilAAh2h2Qh1h1AAilMAAAgtdQAAilB1h2QB2h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	this.shape.setTransform(141.975,185.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,284,371), null);


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

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(this.parent.parent.parent.parent.image_number);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.productsitem6();

	this.instance_1 = new lib.productsitem4();
	this.instance_1.setTransform(-14.05,5.05);

	this.instance_2 = new lib.productsitem5();
	this.instance_2.setTransform(0.5,-6.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-6.9,102,80);


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

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(this.parent.parent.parent.parent.image_number);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlJlMIAAgCIKTAAIAAKdg");
	var mask_graphics_1 = new cjs.Graphics().p("An9krIP7AAIv7JXg");
	var mask_graphics_2 = new cjs.Graphics().p("AlEmPIKJAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:33,y:33.5}).wait(1).to({graphics:mask_graphics_1,x:31.25,y:30.5}).wait(1).to({graphics:mask_graphics_2,x:32.5,y:20.05}).wait(1));

	// Layer_4
	this.instance = new lib.productsitem6();

	this.instance_1 = new lib.productsitem4();
	this.instance_1.setTransform(-19.75,0.5);

	this.instance_2 = new lib.productsitem5();
	this.instance_2.setTransform(0,-19.95);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-19.9,102,86.9);


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

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(this.parent.parent.parent.parent.image_number);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlJFPIAAqdIKTKbIAAACg");
	var mask_graphics_1 = new cjs.Graphics().p("An9EsIP7pXIAAJXg");
	var mask_graphics_2 = new cjs.Graphics().p("AlEGQIAAsfIKJMfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:33,y:33.5}).wait(1).to({graphics:mask_graphics_1,x:31.25,y:30.5}).wait(1).to({graphics:mask_graphics_2,x:32.5,y:20.05}).wait(1));

	// Layer_4
	this.instance = new lib.productsitem6();

	this.instance_1 = new lib.productsitem4();
	this.instance_1.setTransform(-19.75,0.5);

	this.instance_2 = new lib.productsitem5();
	this.instance_2.setTransform(0,-19.95);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-19.9,102,86.9);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AneCCQguAAgggiQgggjAAgwIAAgZQAAgxAgghQAggjAuAAIO9AAQAuAAAgAjQAgAhAAAxIAAAZQAAAwggAjQggAiguAAg");
	this.shape.setTransform(56.175,12.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-2.7,0,117.8,25.9), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AmjGkIAAtHINHAAIAANHg");
	this.shape.setTransform(42,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,84,84), null);


(lib.Symbol18copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF00").s().p("AgcBzQgLgEgIgIQgHgJgDgLQgDgLgBgMIAvgJQAAANADAGQAEAHAHAAQAGAAACgDQADgCACgEIACgIIAAgLIAAgMQgCgFgCgDQgCgDgFgDIgKgGQgRgGgLgIQgKgHgGgIQgFgJgCgKQgCgKAAgLQAAgPADgNQAEgMAHgIQAHgJAMgGQAMgEAPAAQATgBALAGQAMAFAGAJQAHAJADAKQACALAAAKIguAKIAAgKIgCgIIgFgFQgDgCgFAAQgEAAgDACIgEAFIgBAHIgBAIIABAJQAAADADAEQACADAGAEQAFADAJADQAQAHAKAHQAKAIAEAHQAGAJABAKQACALgBAOQAAAQgCANQgDANgHAKQgIAKgLAEQgMAFgSABQgQgBgMgFg");
	this.shape.setTransform(201.4,44.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AASB2IgbhcIgJAAIAABcIguAAIAAjsIA4AAQANABANADQAMAEAJAIQAJAIAFANQAFAOAAAUQAAAYgHAPQgGAOgOAKIAiBmgAgSgSIAHAAIAKgBQADgBAEgDQADgEACgFQACgGAAgJQAAgNgGgHQgHgGgKAAIgIAAg");
	this.shape_1.setTransform(187.075,44.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("Ag1B2IAAjsIBrAAIAAAtIg9AAIAAAyIA2AAIAAArIg2AAIAAA2IA9AAIAAAsg");
	this.shape_2.setTransform(172.575,44.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAUB2IgghbIgJAWIAABFIguAAIAAjsIAuAAIAABJIADAAIAfhJIAyAAIgyBjIA3CJg");
	this.shape_3.setTransform(158.725,44.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgtBqQgPgPAAgeIAAh2QAAgdAPgRQAPgQAfAAQAfgBAPAPQAOAQAAAYIAAADIAAADIgtAIQAAgKgFgIQgDgGgIAAQgDAAgDACIgGAEIgCAGIgBAGIAAB3QABAFACAFQACAEAKAAQAFAAAFgGQAEgGAAgMIAuAGQAAAcgPASQgQARgdAAQgfAAgOgPg");
	this.shape_4.setTransform(143.3,44.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgWB2IAAjsIAtAAIAADsg");
	this.shape_5.setTransform(131.475,44.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgWB2IAAi/IgkAAIAAgtIB2AAIAAAtIglAAIAAC/g");
	this.shape_6.setTransform(121.2,44.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgbBzQgMgEgHgIQgIgJgEgLQgDgLAAgMIAugJQABANAEAGQACAHAJAAQAEAAAEgDQADgCABgEIACgIIABgLIgBgMQgCgFgCgDQgDgDgEgDIgKgGQgSgGgKgIQgLgHgFgIQgFgJgDgKQgBgKAAgLQAAgPAEgNQADgMAHgIQAIgJALgGQAMgEAPAAQASgBAMAGQALAFAHAJQAHAJACAKQAEALAAAKIguAKIgBgKIgCgIIgEgFQgDgCgGAAQgEAAgDACIgDAFIgDAHIAAAIIAAAJQABADADAEQADADAFAEQAFADAJADQAQAHAKAHQAJAIAGAHQAEAJACAKQABALABAOQAAAQgEANQgCANgIAKQgGAKgNAEQgMAFgRABQgQgBgLgFg");
	this.shape_7.setTransform(107.95,44.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgWB2IAAi/IgkAAIAAgtIB2AAIAAAtIglAAIAAC/g");
	this.shape_8.setTransform(87,44.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AAaB2IgbhEIgQgtIgCAAIAABxIgtAAIAAjsIAoAAIAbBGIAQAqIABAAIAAhwIAtAAIAADsg");
	this.shape_9.setTransform(72.75,44.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("Ag8A7IAAixIAvAAIAACyQAAAJAEADQAEADAFAAQAGAAADgDQAEgDAAgJIAAiyIAwAAIAACxQAAAfgQAPQgPAOgeAAQg8AAAAg8g");
	this.shape_10.setTransform(56.975,44.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("Ag8A9IAAh5QABgfAQgPQAQgOAbABQAfgBAPAOQAPAPAAAfIAAB5QgBAegPAPQgQAPgdAAQg8gBAAg7gAgJhJQgEAEgBAHIAAB8QABAJAEADQAEADAFAAQAGAAAEgDQADgDAAgJIAAh8QAAgHgDgEQgEgDgGAAQgFAAgEADg");
	this.shape_11.setTransform(41.7,44.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgtBqQgPgPAAgeIAAh2QAAgdAPgRQAPgQAfAAQAfgBAPAPQAOAQAAAYIAAADIAAADIgtAIQAAgKgEgIQgEgGgIAAQgDAAgDACIgGAEIgCAGIgBAGIAAB3QABAFACAFQACAEAKAAQAFAAAFgGQAEgGAAgMIAuAGQAAAcgPASQgQARgdAAQgfAAgOgPg");
	this.shape_12.setTransform(27.2,44.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AgbBzQgMgEgHgIQgIgJgEgLQgDgLAAgMIAugJQABANAEAGQACAHAJAAQAFAAADgDQADgCABgEIACgIIABgLIgCgMQgBgFgCgDQgDgDgEgDIgKgGQgSgGgKgIQgLgHgFgIQgGgJgCgKQgBgKAAgLQAAgPAEgNQADgMAHgIQAHgJAMgGQAMgEAPAAQASgBAMAGQALAFAHAJQAHAJACAKQAEALAAAKIguAKIgBgKIgCgIIgEgFQgDgCgGAAQgEAAgDACIgDAFIgDAHIAAAIIAAAJQABADADAEQADADAFAEQAFADAJADQAQAHAKAHQAJAIAGAHQAEAJACAKQACALAAAOQAAAQgEANQgCANgIAKQgGAKgNAEQgMAFgRABQgQgBgLgFg");
	this.shape_13.setTransform(12.45,44.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AgWB2IAAjsIAtAAIAADsg");
	this.shape_14.setTransform(0.875,44.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("Ag5B2IAAjsIA9AAQAVAAAMAIQANAHAEASQADAKABAXIAAA0IAAAzQgBAWgDAKQgHAUgOAIQgOAIgSgBgAgMBKIAIAAQAJAAAEgFQADgFAAgLIAAhqQAAgKgDgEQgEgGgJAAIgIAAg");
	this.shape_15.setTransform(-10.875,44.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAlD0Ig4i+IgTAAIAAC+IhgAAIAAnoIB0AAQAdABAaAHQAZAHASASQATARAKAbQAKAcAAAoQAAAygNAfQgOAfgbAUIBGDTgAgmglIAOAAQALAAAJgCQAIgDAIgHQAHgHAFgLQAEgMAAgTQAAgcgOgNQgOgNgVgBIgRAAg");
	this.shape_16.setTransform(192.975,-4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ah8B9IAAj6QAAg/AhgeQAigeA5AAQBAAAAeAeQAfAeAAA/IAAD6QAAA/ggAfQggAeg9AAQh8AAAAh8gAgTiYQgJAHAAARIAAEBQAAARAJAHQAHAHAMAAQAMAAAHgHQAJgHAAgRIAAkBQAAgRgJgHQgHgHgMAAQgMAAgHAHg");
	this.shape_17.setTransform(160.15,-4.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhvD0IAAnoIDfAAIAABbIh/AAIAABoIBvAAIAABbIhvAAIAADKg");
	this.shape_18.setTransform(131.625,-4.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AApD0IhDi8IgRAtIAACPIhgAAIAAnoIBgAAIAACYIAFAAIBBiYIBmAAIhmDLIBxEdg");
	this.shape_19.setTransform(87.775,-4.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah8B9IAAj6QAAg/AhgeQAhgeA6AAQBAAAAfAeQAeAeAAA/IAAD6QAAA/gfAfQggAeg+AAQh8AAAAh8gAgUiYQgIAHAAARIAAEBQAAARAIAHQAJAHALAAQALAAAJgHQAIgHAAgRIAAkBQAAgRgIgHQgJgHgLAAQgLAAgJAHg");
	this.shape_20.setTransform(54.45,-4.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah8B9IAAj6QAAg/AhgeQAhgeA6AAQBAAAAeAeQAfAeAAA/IAAD6QAAA/ggAfQgfAeg+AAQh8AAAAh8gAgUiYQgIAHAAARIAAEBQAAARAIAHQAJAHALAAQALAAAJgHQAIgHAAgRIAAkBQAAgRgIgHQgJgHgLAAQgLAAgJAHg");
	this.shape_21.setTransform(23.05,-4.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhvD0IAAnoIBgAAIAAGMIB/AAIAABcg");
	this.shape_22.setTransform(-4.325,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18copy, new cjs.Rectangle(-28.9,-54.1,246,122), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgZCLIAAg3IAyAAIAAA3gAgVA6IgFjEIA0AAIgDDEg");
	this.shape.setTransform(198.6,-5.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggCHQgOgFgIgJQgJgLgEgNQgEgNAAgOIA2gLQABAPAEAIQAEAIAJAAQAGAAAEgDIAEgHQADgFAAgGIABgLIgBgPQgBgFgEgEQgDgEgFgDIgLgGQgVgJgNgIQgMgJgHgKQgGgKgCgMQgCgLAAgOQAAgQAEgPQAEgPAJgKQAIgKAOgHQAOgFASAAQAVgBAOAHQANAHAIAKQAIAKADANQADAMAAALIg1AMIgBgMQAAgEgDgFQgBgEgEgCQgEgDgFAAQgFAAgDADQgDACgDAEIgCAJIAAAJIAAAKQABAEADAEQAEAFAGADIAQAIQAUAIALAIQALAJAGAJQAFAKADANQABAMAAAQQAAATgDAQQgEAPgIAMQgIAKgOAGQgOAHgVgBQgTABgNgHg");
	this.shape_1.setTransform(184.7,-5.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/CLIAAkVIB/AAIAAA0IhJAAIAAA6IA/AAIAAA0Ig/AAIAAA+IBJAAIAAA1g");
	this.shape_2.setTransform(168.725,-5.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2B8QgRgSAAgjIAAiKQAAgiASgTQASgVAkABQAkgBARATQASARAAAdIAAADIgBAEIg0AJQgBgMgFgJQgEgHgJgBQgEABgEACIgFAFIgDAHIgBAHIAACNQAAAFADAFQADAGAKgBQAHABAFgIQAFgHAAgOIA2AHQAAAhgSAVQgSATgiAAQgkAAgSgRg");
	this.shape_3.setTransform(152.275,-5.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaCLIAAkVIA1AAIAAEVg");
	this.shape_4.setTransform(138.375,-5.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVCLIgghsIgLAAIAABsIg2AAIAAkVIBCAAQAQAAAPAEQAOAFAKAJQALAKAGAQQAFAPAAAXQAAAdgHARQgIASgPAKIAoB5gAgWgVIAJAAQAGAAAFgBQAEgBAFgFQAEgDACgHQACgHAAgKQAAgQgHgHQgIgIgMAAIgKAAg");
	this.shape_5.setTransform(125.425,-5.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGCLIAAkVIBBAAQARAAAOAEQAOAFAKAJQAKAKAGARQAFAQABAZQgBAqgRAYQgTAXgnAAIgMAAIAABmgAgQgOIAJAAIAJgBQAFgCAEgEQAEgEADgIQACgHAAgNQAAgSgIgHQgHgIgMAAIgJAAg");
	this.shape_6.setTransform(107.85,-5.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/CLIAAkVIB/AAIAAA0IhJAAIAAA6IA/AAIAAA0Ig/AAIAAA+IBJAAIAAA1g");
	this.shape_7.setTransform(82.725,-5.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASCLIAAhzIgiAAIAABzIg2AAIAAkVIA2AAIAABuIAiAAIAAhuIA1AAIAAEVg");
	this.shape_8.setTransform(65.125,-5.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaCLIAAjhIgrAAIAAg0ICLAAIAAA0IgrAAIAADhg");
	this.shape_9.setTransform(48.7,-5.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaCLIAAjhIgrAAIAAg0ICLAAIAAA0IgrAAIAADhg");
	this.shape_10.setTransform(25.65,-5.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhGBGIAAjRIA2AAIAADSQAAAKAFADQAFAEAGAAQAGAAAFgEQAFgDgBgKIAAjSIA4AAIAADRQAAAjgSASQgTARgiAAQhGAAAAhGg");
	this.shape_11.setTransform(9.65,-4.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2B8QgRgSAAgjIAAiKQAAgiASgTQASgVAkABQAkgBARATQASARAAAdIAAADIgBAEIg0AJQgBgMgFgJQgEgHgJgBQgEABgEACIgFAFIgDAHIgBAHIAACNQAAAFADAFQADAGAKgBQAHABAFgIQAFgHAAgOIA2AHQAAAhgSAVQgSATgiAAQgkAAgSgRg");
	this.shape_12.setTransform(-7.375,-5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-21.9,-33.1,231.6,55.7), null);


(lib.Symbol16copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoMDAIAAl/IQZAAIAAF/g");
	this.shape.setTransform(58.325,16.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16copy, new cjs.Rectangle(5.8,-2.5,105.10000000000001,38.3), null);


(lib.Symbol7copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgUAuIAAhbIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAWIAXAAIAAARg");
	this.shape.setTransform(12.6,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAHAuIgKgkIgDAAIAAAkIgSAAIAAhbIAWAAIAJACQAFABADADQAEAEABAFQACAFAAAHQAAAKgCAFQgDAFgFAEIANAogAgGgGIADAAIADAAIACgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgGQAAgFgCgCQgDgDgDAAIgDAAg");
	this.shape_1.setTransform(7.125,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWAXIAAgtQAAgMAGgGQAGgGAKAAQAMAAAGAGQAFAGAAAMIAAAtQAAAMgGAGQgGAFgLABQgWgBAAgXgAgDgcQAAABAAAAQgBAAAAABQAAABAAAAQAAABAAABIAAAvQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIADABIAEgBQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAAgvQAAgBAAgBQAAAAAAgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_2.setTransform(1.025,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAuIAAgrIAAAAIgFAOIgDALIgLAAIgEgMIgEgNIgBAAIAAArIgRAAIAAhbIAQAAIAJAYIAGASIAAAAIAHgSIAJgYIAQAAIAABbg");
	this.shape_3.setTransform(-5.725,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7copy, new cjs.Rectangle(-11.3,-4.7,28.2,18.3), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AEMGpIlBAAQgjAAgXgcQgqg1gjgsQiFinglgrQgXgbgCgbQgBgZAQgQQAQgQAXAAQAZABAVAVQA9A9BcBpQAFiTgwiSQgxiUAKgYQAKgWAhgPQAhgQAoBNQAoBMAkCYQAFg9gFhDQgDgugKhCQgPhoAQgRQAPgPAWgCQAWgCASAOQARAOAIAjQAIAjAOBcQAOBbAEBrQAWjCADhNQAChNASgJQAQgJAUAEQAzAJgDBpQgEBogDClQAMg1AOg5QAchzAPgXQASgcAjAVQAjAXgGAqQgIA2gJBPQgJBUgBAjQgCAngHBpQgDA/gCAwQAAAdgBAYQAAAegVAVQgWAVgeAAg");
	this.shape.setTransform(38.366,42.5629);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1GpQgjAAgXgcIhNhhQiFinglgrQgXgbgCgbQgBgZAQgQQAQgQAXAAQAZABAVAVQA9A9BcBpQAFiTgwiSQgxiUAKgYQAKgWAhgPQAhgQAoBNQAoBMAkCYQAFg9gFhDQgDgugKhCQgPhoAQgRQAPgPAWgCQAWgCASAOQARAOAIAjQAIAjAOBcQAOBbAEBrQAWjCADhNQAChNASgJQAQgJAUAEQAzAJgDBpQgEBogDClIAahuQAchzAPgXQASgcAjAVQAjAXgGAqQgIA2gJBPQgJBUgBAjQgCAngHBpIgFBvIgBA1QAAAegVAVQgWAVgeAAg");
	this.shape_1.setTransform(38.366,42.5629);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1.5,-1.4,79.8,88), null);


(lib.Symbol6copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAKAuIgKgbIgGgSIgBAAIAAAtIgRAAIAAhaIAPAAIAKAaIAGARIABAAIAAgrIARAAIAABag");
	this.shape.setTransform(32.375,4.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAHAuIgKgkIgDAAIAAAkIgSAAIAAhaIAWAAIAJAAQAFACADADQAEADABAFQACAGAAAIQAAAJgCAGQgDAFgFADIANAogAgGgGIADAAIADgBIACgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgFQAAgGgCgDQgDgBgDAAIgDAAg");
	this.shape_1.setTransform(26.475,4.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAuIgDgTIgMAAIgDATIgTAAIARhaIAVAAIARBagAgBgCIgCANIAHAAIgBgNIgCgTIgBAAg");
	this.shape_2.setTransform(20.325,4.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAuIAAhaIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAUIAXAAIAAASg");
	this.shape_3.setTransform(15,4.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAuIAAhaIASAAIAABIIAXAAIAAASg");
	this.shape_4.setTransform(10.05,4.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6copy, new cjs.Rectangle(5.5,-4.7,31.799999999999997,18.2), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAekZQgBAAgBAAQgBgBAAAAQgGgBgHAAQgdAAgUAXIgOAXQAAgEAAgFQgDgVgQgQQgTgTgbAAQgcAAgTATQgTATAAAbIAACHIAAAbIAAAAIhaABQgoAAgHAvQgHAuAZA4QAaA4AxAvQACACACADQAhArAoAxQAWAcAjAAIFCAAQAeAAAVgVQAVgVABgeQAAgWABgaQAAgCAAgDIANk1QAAgjgZgYQgYgZgjAAQgUAAgTAJQgEgOgKgNQgTgagdAAQgMAAgVAJQgSAHgMAHIAAgBIAAAAQgBgBAAgBIgBCnADFjKIAACCABGjwIAAABQgBgDgBgDIgBgCIghghAgxj2IgBCuAi0hmIAAAbIAAB0");
	this.shape.setTransform(30.2601,27.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaEvQgjAAgWgcIhJhcIgEgFQgxgvgag4QgZg4AHguQAHgvAoAAIBagBIAAB0IAAh0IAAAAIAAgbIAAiHQAAgbATgTQATgTAcAAQAbAAATATQAQAQADAVIAAAJIAOgXQAUgXAdAAIANABIABABIACAAIACABIACAAIAhAhIABACIACAGIAAgBIABADIgBgCIABACIAAAAIAAABQAMgHASgHQAVgJAMAAQAdAAATAaQAKANAEAOQATgJAUAAQAjAAAYAZQAZAYAAAjIgNE1QANgdgLAiIgCAAIAAgFIAAAFIgBAwQgBAegVAVQgVAVgeAAgADFhIIAAiCgABFhIIABingAgyhIIABiugABEj1IACAFIAAABIgCgGgABGjwIAAAAg");
	this.shape_1.setTransform(30.2601,27.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-3.1,-3.9,66.8,63.699999999999996), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjUBvQguAAggggQghghAAguIAAAAQAAgtAhghQAgggAuAAIGpAAQAuAAAgAgQAhAhAAAtIAAAAQAAAughAhQggAgguAAg");
	this.shape.setTransform(32.375,11.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,64.8,22.3), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66E8FF").s().p("AjfCSQg8AAgsgrQgqgqAAg9IAAAAQAAg8AqgrQAsgqA8AAIG/AAQA8AAArAqQArArAAA8IAAAAQAAA9grAqQgrArg8AAg");
	this.shape.setTransform(37,14.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,74,29.3), null);


(lib.Symbol3copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#66E8FF").s().p("AjUBvQguAAggggQghghAAguIAAAAQAAgtAhghQAgggAuAAIGpAAQAuAAAgAgQAhAhAAAtIAAAAQAAAughAhQggAgguAAg");
	this.shape.setTransform(32.375,11.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(0,0,64.8,22.3), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009FC6").s().p("AhIBIQgegeAAgqQAAgpAegfQAfgeApAAQAqAAAeAeQAfAfAAApQAAAqgfAeQgeAfgqAAQgpAAgfgfg");
	this.shape.setTransform(10.25,10.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,20.5,20.5), null);


(lib.not_targeted_area_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("EgY/AlgIAAveMAx/AAAIAAPegEgY/glfMAx/AAAMAAAAnNI42p/IAAhGIgmAAIAABGI4jKdg");
	this.shape.setTransform(160,240.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.not_targeted_area_mc, new cjs.Rectangle(0,0.1,320,479.9), null);


(lib.knife_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.knife();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.knife_1, new cjs.Rectangle(0,0,219,167), null);


(lib.Symbol7copy_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5136D").s().p("AgUAuIAAhbIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAWIAXAAIAAARg");
	this.shape_4.setTransform(12.6,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5136D").s().p("AAHAuIgKgkIgDAAIAAAkIgSAAIAAhbIAWAAIAJACQAFABADADQAEAEABAFQACAFAAAHQAAAKgCAFQgDAFgFAEIANAogAgGgGIADAAIADAAIACgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgGQAAgFgCgCQgDgDgDAAIgDAAg");
	this.shape_5.setTransform(7.125,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5136D").s().p("AgWAXIAAgtQAAgMAGgGQAGgGAKAAQAMAAAGAGQAFAGAAAMIAAAtQAAAMgGAGQgGAFgLABQgWgBAAgXgAgDgcQAAABAAAAQgBAAAAABQAAABAAAAQAAABAAABIAAAvQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIADABIAEgBQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAAgvQAAgBAAgBQAAAAAAgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_6.setTransform(1.025,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5136D").s().p("AAOAuIAAgrIAAAAIgFAOIgDALIgLAAIgEgMIgEgNIgBAAIAAArIgRAAIAAhbIAQAAIAJAYIAGASIAAAAIAHgSIAJgYIAQAAIAABbg");
	this.shape_7.setTransform(-5.725,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7copy_1, new cjs.Rectangle(-11.3,-4.7,28.2,18.3), null);


(lib.Symbol6_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5136D").s().p("AAKAuIgKgbIgGgSIgBAAIAAAtIgRAAIAAhaIAPAAIAKAaIAGARIABAAIAAgrIARAAIAABag");
	this.shape_2.setTransform(32.375,4.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5136D").s().p("AAHAuIgKgkIgDAAIAAAkIgSAAIAAhaIAWAAIAJAAQAFACADADQAEADABAFQACAGAAAIQAAAJgCAGQgDAFgFADIANAogAgGgGIADAAIADgBIACgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgFQAAgGgCgDQgDgBgDAAIgDAAg");
	this.shape_3.setTransform(26.475,4.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5136D").s().p("AAKAuIgDgTIgMAAIgDATIgTAAIARhaIAVAAIARBagAgBgCIgCANIAHAAIgBgNIgCgTIgBAAg");
	this.shape_4.setTransform(20.325,4.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5136D").s().p("AgUAuIAAhaIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAUIAXAAIAAASg");
	this.shape_5.setTransform(15,4.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5136D").s().p("AgUAuIAAhaIASAAIAABIIAXAAIAAASg");
	this.shape_6.setTransform(10.05,4.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6_1, new cjs.Rectangle(5.5,-4.7,31.799999999999997,18.2), null);


(lib.CURSOR_DRAG_UPcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// merged
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBLIAAgUIgKAAIAAgKIgKAAIAAgKIgKAAIAAgUIgKAAIAAgKIgKAAIAAgTIAUAAIAAAKIAKAAIAAAJIAKAAIAAgdIgKAAIAAgUIgKAAIAAgUIAUAAIAAAUIAKAAIAAAUIAKAAIAAgyIATAAIAAAyIAKAAIAAgoIAUAAIAAAyIAKAAIAAgUIAKAAIAAgKIAKAAIAAAoIgKAAIAAAdIgKAAIAAAUIgKAAIAAAeg");
	this.shape.setTransform(8,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoBQIAAgeIAKAAIAAAegAgdBQIAAgUIgKAAIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIAKAAIAAAUgAAyAyIAAgUIAKAAIAAAUgAg7AoIAAgUIgKAAIAAgKIAKAAIAAAKIAKAAIAAAUgAA8AeIAAgeIAKAAIAAAegAA8AegAgnAKIAAgKIgKAAIAAgJIgUAAIAAgKIAUAAIAAAKIAKAAIAAgKIAKAAIAAAdgAhPAKIAAgTIAKAAIAAATgABGAAIAAgnIAKAAIAAAngAAogJIAAgyIgUAAIAAAoIgKAAIAAgyIgTAAIAAgKIATAAIAAAKIAeAAIAAAKIAKAAIAAAUIAKAAIAAAKIgKAAIAAAUgAgTgTIAAgUIgKAAIAAgUIgUAAIAAgKIAUAAIAAAKIAKAAIAAgKIAKAAIAAAygAgxgTIAAgUIgKAAIAAgUIAKAAIAAAUIAKAAIAAAUgAA8gnIAAgKIAKAAIAAAKg");
	this.shape_1.setTransform(8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CURSOR_DRAG_UPcopy, new cjs.Rectangle(0,0,16,16), null);


(lib.CURSOR_DRAG_UP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// merged
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBLIAAgUIgKAAIAAgKIgKAAIAAgKIgKAAIAAgUIgKAAIAAgKIgKAAIAAgTIAUAAIAAAKIAKAAIAAAJIAKAAIAAgdIgKAAIAAgUIgKAAIAAgUIAUAAIAAAUIAKAAIAAAUIAKAAIAAgyIATAAIAAAyIAKAAIAAgoIAUAAIAAAyIAKAAIAAgUIAKAAIAAgKIAKAAIAAAoIgKAAIAAAdIgKAAIAAAUIgKAAIAAAeg");
	this.shape.setTransform(8,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoBQIAAgeIAKAAIAAAegAgdBQIAAgUIgKAAIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIAKAAIAAAUgAAyAyIAAgUIAKAAIAAAUgAg7AoIAAgUIgKAAIAAgKIAKAAIAAAKIAKAAIAAAUgAA8AeIAAgeIAKAAIAAAegAA8AegAgnAKIAAgKIgKAAIAAgJIgUAAIAAgKIAUAAIAAAKIAKAAIAAgKIAKAAIAAAdgAhPAKIAAgTIAKAAIAAATgABGAAIAAgnIAKAAIAAAngAAogJIAAgyIgUAAIAAAoIgKAAIAAgyIgTAAIAAgKIATAAIAAAKIAeAAIAAAKIAKAAIAAAUIAKAAIAAAKIgKAAIAAAUgAgTgTIAAgUIgKAAIAAgUIgUAAIAAgKIAUAAIAAAKIAKAAIAAgKIAKAAIAAAygAgxgTIAAgUIgKAAIAAgUIAKAAIAAAUIAKAAIAAAUgAA8gnIAAgKIAKAAIAAAKg");
	this.shape_1.setTransform(8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CURSOR_DRAG_UP, new cjs.Rectangle(0,0,16,16), null);


(lib.CURSOR_DRAG_DOWNcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// merged
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAyIAAgUIgKAAIAAgKIgKAAIAAgKIgKAAIAAgTIAUAAIAAgUIgKAAIAAgUIAUAAIAAAKIAKAAIAAgKIATAAIAAAKIAKAAIAAgKIAUAAIAAAUIAKAAIAAgKIAKAAIAAAnIgKAAIAAAUIgKAAIAAAeg");
	this.shape.setTransform(6.5,5.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjA3IAAAAIAAgeIAKAAIAAgUIAKAAIAAgnIgKAAIAAAKIgKAAIAAgUIAUAAIAAAKIAKAAIAAAnIgKAAIAAAUIgKAAIAAAegAgiA3IAAgUIgKAAIAAgKIAKAAIAAAKIAKAAIAAAUIAAAAgAg2AZIAAgKIgKAAIAAgTIAKAAIAAATIAKAAIAAAKgAg2gEIAAgKIAKAAIAAgKIAKAAIAAAUgAg2gYIAAgUIAKAAIAAAUgAAFgiIAAgKIgTAAIAAgKIATAAIAAAKIAKAAIAAAKgAgYgiIAAgKIAKAAIAAAKgAAPgsIAAgKIAUAAIAAAKgAAPgsgAgsgsIAAgKIAUAAIAAAKgAgsgsg");
	this.shape_1.setTransform(6.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CURSOR_DRAG_DOWNcopy, new cjs.Rectangle(0,0,13,11), null);


(lib.CURSOR_DRAG_DOWN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// merged
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAyIAAgUIgKAAIAAgKIgKAAIAAgKIgKAAIAAgTIAUAAIAAgUIgKAAIAAgUIAUAAIAAAKIAKAAIAAgKIATAAIAAAKIAKAAIAAgKIAUAAIAAAUIAKAAIAAgKIAKAAIAAAnIgKAAIAAAUIgKAAIAAAeg");
	this.shape.setTransform(6.5,5.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjA3IAAAAIAAgeIAKAAIAAgUIAKAAIAAgnIgKAAIAAAKIgKAAIAAgUIAUAAIAAAKIAKAAIAAAnIgKAAIAAAUIgKAAIAAAegAgiA3IAAgUIgKAAIAAgKIAKAAIAAAKIAKAAIAAAUIAAAAgAg2AZIAAgKIgKAAIAAgTIAKAAIAAATIAKAAIAAAKgAg2gEIAAgKIAKAAIAAgKIAKAAIAAAUgAg2gYIAAgUIAKAAIAAAUgAAFgiIAAgKIgTAAIAAgKIATAAIAAAKIAKAAIAAAKgAgYgiIAAgKIAKAAIAAAKgAAPgsIAAgKIAUAAIAAAKgAAPgsgAgsgsIAAgKIAUAAIAAAKgAgsgsg");
	this.shape_1.setTransform(6.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CURSOR_DRAG_DOWN, new cjs.Rectangle(0,0,13,11), null);


(lib.star_002 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAgIkmggIEmgfIAfkmIAgEmIEmAfIkmAgIggEmg");
	this.shape.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.instance = new lib.gradient_radial_002_();
	this.instance.setTransform(-0.45,0.65,0.7405,0.7405,0,0,0,50.6,50.5);
	this.instance.alpha = 0.3789;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star_002, new cjs.Rectangle(-37.9,-36.7,74.8,74.80000000000001), null);


(lib.CURSOR_DRAG_UP_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_7
	this.instance = new lib.Symbol7();
	this.instance.setTransform(7.75,7.9,0.1912,0.1912,0,0,0,40.2,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CURSOR_DRAG_UP_1, new cjs.Rectangle(-0.2,-0.5,15.2,16.8), null);


(lib.CURSOR_DRAG_DOWN_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol6();
	this.instance.setTransform(6.35,6.5,0.1912,0.1912,0,0,0,31.7,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CURSOR_DRAG_DOWN_1, new cjs.Rectangle(-0.3,-0.8,12.8,12.200000000000001), null);


(lib.Symbol41 = function(mode,startPosition,loop,reversed) {
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
	this.frame_78 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(78).call(this.frame_78).wait(16));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AI1mjQpQFsoZHbQG9o0KskTg");
	var mask_graphics_2 = new cjs.Graphics().p("AS7kXQqUDbp3FUQIxm/Lahwg");
	var mask_graphics_3 = new cjs.Graphics().p("ANSloQpzEvpFGiQHzoELFjNg");
	var mask_graphics_4 = new cjs.Graphics().p("ALQmEQpkFMoxG9QHaobK7jug");
	var mask_graphics_5 = new cjs.Graphics().p("AKHmTQpbFcolHLQHNonKzkAg");
	var mask_graphics_6 = new cjs.Graphics().p("AJgmbQpWFkogHTQHGotKwkKg");
	var mask_graphics_7 = new cjs.Graphics().p("AJNmeQpTFnodHWQHCowKukNg");
	var mask_graphics_8 = new cjs.Graphics().p("AJEmgQpSFpobHYQHAoxKtkQg");
	var mask_graphics_9 = new cjs.Graphics().p("AI+mhQpRFqoaHZQG/oyKskRg");
	var mask_graphics_10 = new cjs.Graphics().p("AI6miQpQFroaHaQG+ozKskSg");
	var mask_graphics_11 = new cjs.Graphics().p("AI3mjQpQFsoZHbQG9o0KskTg");
	var mask_graphics_12 = new cjs.Graphics().p("AI2mjQpQFsoZHbQG9o0KskTg");
	var mask_graphics_13 = new cjs.Graphics().p("AI1mjQpQFsoZHbQG9o0KskTg");
	var mask_graphics_14 = new cjs.Graphics().p("AI0mhQpPFtoYHcQG8o0KrkVg");
	var mask_graphics_15 = new cjs.Graphics().p("AIzmfQpOFvoXHcQG7o1KqkWg");
	var mask_graphics_16 = new cjs.Graphics().p("AIzmdQpOFwoXHdQG6o2KrkXg");
	var mask_graphics_17 = new cjs.Graphics().p("AIymbQpNFxoWHeQG5o2KqkZg");
	var mask_graphics_18 = new cjs.Graphics().p("AIxmZQpMFyoVHgQG4o4Kpkag");
	var mask_graphics_19 = new cjs.Graphics().p("AIwmXQpLFzoUHhQG3o5Kokbg");
	var mask_graphics_20 = new cjs.Graphics().p("AIwmUQpMFzoTHiQG2o6Kpkbg");
	var mask_graphics_21 = new cjs.Graphics().p("AIvmSQpLF0oSHjQG1o6Kokdg");
	var mask_graphics_22 = new cjs.Graphics().p("AIumQQpKF2oRHjQG0o7Knkeg");
	var mask_graphics_23 = new cjs.Graphics().p("AItmOQpJF3oQHkQGzo8Kmkfg");
	var mask_graphics_24 = new cjs.Graphics().p("AItmMQpJF4oQHlQGyo8Knkhg");
	var mask_graphics_25 = new cjs.Graphics().p("AIsmKQpIF5oPHmQGxo9Kmkig");
	var mask_graphics_26 = new cjs.Graphics().p("AIrmIQpHF6oOHnQGwo+Klkjg");
	var mask_graphics_27 = new cjs.Graphics().p("AIqmGQpGF7oNHoQGvo+Kkklg");
	var mask_graphics_28 = new cjs.Graphics().p("AIpmEQpFF9oMHpQGtpAKkkmg");
	var mask_graphics_29 = new cjs.Graphics().p("AIpmCQpFF+oMHqQGtpBKkkng");
	var mask_graphics_30 = new cjs.Graphics().p("AIol/QpFF+oKHrQGspBKjkog");
	var mask_graphics_31 = new cjs.Graphics().p("AInl9QpEF+oJHtQGrpCKikpg");
	var mask_graphics_32 = new cjs.Graphics().p("AIml7QpDF/oIHuQGppDKikqg");
	var mask_graphics_33 = new cjs.Graphics().p("AIml5QpDGAoIHvQGppDKiksg");
	var mask_graphics_34 = new cjs.Graphics().p("AIll3QpCGCoHHvQGopEKhktg");
	var mask_graphics_35 = new cjs.Graphics().p("AIkl1QpBGDoGHwQGnpFKgkug");
	var mask_graphics_36 = new cjs.Graphics().p("AIjlzQpAGEoFHxQGlpFKgkwg");
	var mask_graphics_37 = new cjs.Graphics().p("AIilxQo/GFoEHyQGkpGKfkxg");
	var mask_graphics_38 = new cjs.Graphics().p("AIiluQo/GFoEH0QGkpIKfkxg");
	var mask_graphics_39 = new cjs.Graphics().p("AIhlsQo+GGoDH1QGjpIKekzg");
	var mask_graphics_40 = new cjs.Graphics().p("AIglqQo9GIoCH1QGhpJKek0g");
	var mask_graphics_41 = new cjs.Graphics().p("AIfloQo9GJoAH2QGgpKKdk1g");
	var mask_graphics_42 = new cjs.Graphics().p("AIelmQo8GKn/H3QGfpKKck3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:56.5,y:42}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:121.1034,y:-27.8945}).wait(1).to({graphics:mask_graphics_3,x:84.9657,y:11.4288}).wait(1).to({graphics:mask_graphics_4,x:71.9803,y:25.4275}).wait(1).to({graphics:mask_graphics_5,x:64.7376,y:33.2125}).wait(1).to({graphics:mask_graphics_6,x:60.7803,y:37.46}).wait(1).to({graphics:mask_graphics_7,x:58.8786,y:39.4999}).wait(1).to({graphics:mask_graphics_8,x:58.005,y:40.4366}).wait(1).to({graphics:mask_graphics_9,x:57.4232,y:41.0603}).wait(1).to({graphics:mask_graphics_10,x:57.0194,y:41.4933}).wait(1).to({graphics:mask_graphics_11,x:56.7432,y:41.7893}).wait(1).to({graphics:mask_graphics_12,x:56.5705,y:41.9744}).wait(1).to({graphics:mask_graphics_13,x:56.5,y:42}).wait(1).to({graphics:mask_graphics_14,x:55.7668,y:42.4101}).wait(1).to({graphics:mask_graphics_15,x:55.0335,y:42.8203}).wait(1).to({graphics:mask_graphics_16,x:54.2999,y:43.2304}).wait(1).to({graphics:mask_graphics_17,x:53.5662,y:43.6406}).wait(1).to({graphics:mask_graphics_18,x:52.8323,y:44.0507}).wait(1).to({graphics:mask_graphics_19,x:52.0982,y:44.4609}).wait(1).to({graphics:mask_graphics_20,x:51.3639,y:44.871}).wait(1).to({graphics:mask_graphics_21,x:50.6295,y:45.2812}).wait(1).to({graphics:mask_graphics_22,x:49.8948,y:45.6913}).wait(1).to({graphics:mask_graphics_23,x:49.16,y:46.1015}).wait(1).to({graphics:mask_graphics_24,x:48.425,y:46.5116}).wait(1).to({graphics:mask_graphics_25,x:47.6898,y:46.9218}).wait(1).to({graphics:mask_graphics_26,x:46.9545,y:47.3319}).wait(1).to({graphics:mask_graphics_27,x:46.219,y:47.742}).wait(1).to({graphics:mask_graphics_28,x:45.4832,y:48.1522}).wait(1).to({graphics:mask_graphics_29,x:44.7473,y:48.5623}).wait(1).to({graphics:mask_graphics_30,x:44.0113,y:48.9725}).wait(1).to({graphics:mask_graphics_31,x:43.275,y:49.3826}).wait(1).to({graphics:mask_graphics_32,x:42.5386,y:49.7928}).wait(1).to({graphics:mask_graphics_33,x:41.802,y:50.2029}).wait(1).to({graphics:mask_graphics_34,x:41.0652,y:50.6131}).wait(1).to({graphics:mask_graphics_35,x:40.3283,y:51.0232}).wait(1).to({graphics:mask_graphics_36,x:39.5911,y:51.4334}).wait(1).to({graphics:mask_graphics_37,x:38.8538,y:51.8435}).wait(1).to({graphics:mask_graphics_38,x:38.1163,y:52.2536}).wait(1).to({graphics:mask_graphics_39,x:37.3787,y:52.6638}).wait(1).to({graphics:mask_graphics_40,x:36.6408,y:53.0739}).wait(1).to({graphics:mask_graphics_41,x:35.9028,y:53.4841}).wait(1).to({graphics:mask_graphics_42,x:35.2112,y:53.868}).wait(1).to({graphics:null,x:0,y:0}).wait(51));

	// Layer_1
	this.instance = new lib.Symbol42();
	this.instance.setTransform(0,84,1,1,0,0,0,0,84);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11).to({alpha:0},29).to({_off:true},1).wait(51));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,84);


(lib.Symbol40 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.rotation = -30 + 60*Math.random();
	}
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(39).call(this.frame_40).wait(25));

	// Layer_1
	this.instance = new lib.Symbol41();
	this.instance.setTransform(6.6,-6,0.7097,0.7097,-20.7308,0,0,56.6,41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,rotation:-20.7319},0).wait(63));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-48,96.1,84.2);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol39();
	this.instance.setTransform(51,30,1,1,0,0,0,51,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.0009},0).wait(1).to({rotation:0.0037},0).wait(1).to({rotation:0.0085},0).wait(1).to({rotation:0.0153},0).wait(1).to({rotation:0.0242},0).wait(1).to({rotation:0.0354,y:30.05},0).wait(1).to({rotation:0.0489,x:50.95},0).wait(1).to({rotation:0.0648},0).wait(1).to({rotation:0.0833},0).wait(1).to({rotation:0.1045,x:51,y:30.1},0).wait(1).to({rotation:0.1284},0).wait(1).to({rotation:0.1553,x:50.95},0).wait(1).to({rotation:0.1852},0).wait(1).to({rotation:0.2184,x:51,y:30.15},0).wait(1).to({rotation:0.2549,x:50.95,y:30.2},0).wait(1).to({rotation:0.2951,x:51,y:30.15},0).wait(1).to({rotation:0.3389,x:50.95,y:30.2},0).wait(1).to({rotation:0.3867,x:51,y:30.25},0).wait(1).to({rotation:0.4385,x:50.95},0).wait(1).to({rotation:0.4947,x:51,y:30.3},0).wait(1).to({rotation:0.5555,x:50.95},0).wait(1).to({rotation:0.621,y:30.35},0).wait(1).to({rotation:0.6914,x:51},0).wait(1).to({rotation:0.767,y:30.45},0).wait(1).to({rotation:0.848},0).wait(1).to({rotation:0.9346,x:50.95,y:30.5},0).wait(1).to({rotation:1.0269,y:30.55},0).wait(1).to({rotation:1.1251,x:51,y:30.6},0).wait(1).to({rotation:1.2293,y:30.65},0).wait(1).to({rotation:1.3395,y:30.7},0).wait(1).to({rotation:1.4555,y:30.75},0).wait(1).to({rotation:1.5774,x:50.95,y:30.85},0).wait(1).to({rotation:1.7047,x:51,y:30.9},0).wait(1).to({rotation:1.837,x:50.95,y:31},0).wait(1).to({rotation:1.9739,y:31.05},0).wait(1).to({rotation:2.1145,y:31.15},0).wait(1).to({rotation:2.258,y:31.2},0).wait(1).to({rotation:2.4034,x:51},0).wait(1).to({rotation:2.5496,x:50.95,y:31.25},0).wait(1).to({rotation:2.6956,x:51,y:31.35},0).wait(1).to({rotation:2.8403,y:31.45},0).wait(1).to({rotation:2.9825,y:31.5},0).wait(1).to({rotation:3.1213,x:50.95,y:31.6},0).wait(1).to({rotation:3.256,y:31.65},0).wait(1).to({rotation:3.3858,x:51,y:31.7},0).wait(1).to({rotation:3.5102,x:50.95,y:31.8},0).wait(1).to({rotation:3.6289,x:51,y:31.9},0).wait(1).to({rotation:3.7416,y:31.95},0).wait(1).to({rotation:3.8482},0).wait(1).to({rotation:3.9486,y:32},0).wait(1).to({rotation:4.043,y:32.1},0).wait(1).to({rotation:4.1313,y:32.05},0).wait(1).to({rotation:4.2139,y:32.15},0).wait(1).to({rotation:4.2908,x:50.95},0).wait(1).to({rotation:4.3623,y:32.25},0).wait(1).to({rotation:4.4287,x:51},0).wait(1).to({rotation:4.49,y:32.3},0).wait(1).to({rotation:4.5466,x:50.95},0).wait(1).to({rotation:4.5986,x:51,y:32.35},0).wait(1).to({rotation:4.6464,y:32.4},0).wait(1).to({rotation:4.69,y:32.35},0).wait(1).to({rotation:4.7297,x:51.05,y:32.4},0).wait(1).to({rotation:4.7658,x:50.95,y:32.45},0).wait(1).to({rotation:4.7982},0).wait(1).to({rotation:4.8274,x:51},0).wait(1).to({rotation:4.8533,x:50.95},0).wait(1).to({rotation:4.8761,y:32.5},0).wait(1).to({rotation:4.8961,x:51},0).wait(1).to({rotation:4.9133},0).wait(1).to({rotation:4.9278,x:50.95,y:32.55},0).wait(1).to({rotation:4.9399},0).wait(1).to({rotation:4.9495},0).wait(1).to({rotation:4.9568},0).wait(1).to({rotation:4.9619},0).wait(1).to({rotation:4.9649,y:32.5},0).wait(1).to({rotation:4.9659,x:51},0).wait(1).to({rotation:4.9649,x:50.95},0).wait(1).to({rotation:4.9617,y:32.55},0).wait(1).to({rotation:4.9562},0).wait(1).to({rotation:4.9483},0).wait(1).to({rotation:4.938},0).wait(1).to({rotation:4.9251},0).wait(1).to({rotation:4.9095,x:51,y:32.5},0).wait(1).to({rotation:4.891},0).wait(1).to({rotation:4.8695,x:50.95},0).wait(1).to({rotation:4.8449,y:32.45},0).wait(1).to({rotation:4.817,x:51},0).wait(1).to({rotation:4.7855,x:50.95},0).wait(1).to({rotation:4.7505,y:32.4},0).wait(1).to({rotation:4.7115,x:51},0).wait(1).to({rotation:4.6685},0).wait(1).to({rotation:4.6212,y:32.35},0).wait(1).to({rotation:4.5694,y:32.3},0).wait(1).to({rotation:4.5128},0).wait(1).to({rotation:4.4512,x:50.95,y:32.25},0).wait(1).to({rotation:4.3843,x:51,y:32.2},0).wait(1).to({rotation:4.3119},0).wait(1).to({rotation:4.2336,y:32.1},0).wait(1).to({rotation:4.1493},0).wait(1).to({rotation:4.0587,y:32.05},0).wait(1).to({rotation:3.9616,x:51.05,y:32},0).wait(1).to({rotation:3.8578,x:51},0).wait(1).to({rotation:3.7471,y:31.95},0).wait(1).to({rotation:3.6296,y:31.9},0).wait(1).to({rotation:3.5054,x:50.95,y:31.8},0).wait(1).to({rotation:3.3745,x:51,y:31.7},0).wait(1).to({rotation:3.2374,x:50.95,y:31.65},0).wait(1).to({rotation:3.0946,x:51.05,y:31.55},0).wait(1).to({rotation:2.9469,x:51,y:31.5},0).wait(1).to({rotation:2.7952,y:31.45},0).wait(1).to({rotation:2.6405,x:50.95,y:31.35},0).wait(1).to({rotation:2.4843,x:51,y:31.25},0).wait(1).to({rotation:2.3278,y:31.2},0).wait(1).to({rotation:2.1723,x:50.95,y:31.15},0).wait(1).to({rotation:2.0192,y:31.05},0).wait(1).to({rotation:1.8697,y:30.95},0).wait(1).to({rotation:1.7248,x:51,y:30.9},0).wait(1).to({rotation:1.5855,y:30.8},0).wait(1).to({rotation:1.4522,y:30.75},0).wait(1).to({rotation:1.3256,y:30.7},0).wait(1).to({rotation:1.2059,x:50.95,y:30.6},0).wait(1).to({rotation:1.0931,x:51,y:30.55},0).wait(1).to({rotation:0.9874},0).wait(1).to({rotation:0.8887,y:30.5},0).wait(1).to({rotation:0.7967,y:30.4},0).wait(1).to({rotation:0.7112},0).wait(1).to({rotation:0.6321,x:50.95,y:30.35},0).wait(1).to({rotation:0.5591,y:30.3},0).wait(1).to({rotation:0.4919,x:51},0).wait(1).to({rotation:0.4301,y:30.25},0).wait(1).to({rotation:0.3736,x:50.95},0).wait(1).to({rotation:0.3221,x:51,y:30.2},0).wait(1).to({rotation:0.2753,x:50.95,y:30.15},0).wait(1).to({rotation:0.233,x:51},0).wait(1).to({rotation:0.1949,y:30.1},0).wait(1).to({rotation:0.1608,x:50.95},0).wait(1).to({rotation:0.1306,x:51,y:30.05},0).wait(1).to({rotation:0.1039,y:30.1},0).wait(1).to({rotation:0.0807,x:50.95,y:30.05},0).wait(1).to({rotation:0.0608},0).wait(1).to({rotation:0.0439,x:51},0).wait(1).to({rotation:0.03},0).wait(1).to({rotation:0.0189,y:30},0).wait(1).to({rotation:0.0105},0).wait(1).to({rotation:0.0046},0).wait(1).to({rotation:0.0011},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-1.8,106.80000000000001,68.7);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol38();
	this.instance.setTransform(33,33.5,1,1,0,0,0,33,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.0067},0).wait(1).to({rotation:-0.0274},0).wait(1).to({rotation:-0.0631,x:33.05,y:33.45},0).wait(1).to({rotation:-0.1147,x:33},0).wait(1).to({rotation:-0.1833},0).wait(1).to({rotation:-0.2703},0).wait(1).to({rotation:-0.377},0).wait(1).to({rotation:-0.5048,x:33.05,y:33.4},0).wait(1).to({rotation:-0.6554,y:33.35},0).wait(1).to({rotation:-0.8305,y:33.3},0).wait(1).to({rotation:-1.0321},0).wait(1).to({rotation:-1.2623,y:33.25},0).wait(1).to({rotation:-1.5233,y:33.2},0).wait(1).to({rotation:-1.8176},0).wait(1).to({rotation:-2.1474,y:33.15},0).wait(1).to({rotation:-2.5152,x:33,y:33.05},0).wait(1).to({rotation:-2.9233,y:32.95},0).wait(1).to({rotation:-3.3735,y:32.9},0).wait(1).to({rotation:-3.8669,y:32.8},0).wait(1).to({rotation:-4.4036,y:32.75},0).wait(1).to({rotation:-4.982,x:33.05,y:32.65},0).wait(1).to({rotation:-5.5985,y:32.6},0).wait(1).to({rotation:-6.2468,y:32.45},0).wait(1).to({rotation:-6.9182,y:32.35},0).wait(1).to({rotation:-7.6018,y:32.25},0).wait(1).to({rotation:-8.2852,y:32.1},0).wait(1).to({rotation:-8.9563,y:32},0).wait(1).to({rotation:-9.6038,x:33.1,y:31.9},0).wait(1).to({rotation:-10.2188,y:31.75},0).wait(1).to({rotation:-10.7948,x:33,y:31.65},0).wait(1).to({rotation:-11.3282,x:33.05,y:31.6},0).wait(1).to({rotation:-11.8172,y:31.55},0).wait(1).to({rotation:-12.2618,y:31.45},0).wait(1).to({rotation:-12.6633,y:31.4},0).wait(1).to({rotation:-13.0235,y:31.3},0).wait(1).to({rotation:-13.3447},0).wait(1).to({rotation:-13.6296,y:31.2},0).wait(1).to({rotation:-13.8806,x:33.1,y:31.15},0).wait(1).to({rotation:-14.1001,x:33.05},0).wait(1).to({rotation:-14.2905,y:31.1},0).wait(1).to({rotation:-14.4539},0).wait(1).to({rotation:-14.5924,x:33.1,y:31.05},0).wait(1).to({rotation:-14.7078,x:33.05,y:31},0).wait(1).to({rotation:-14.8018},0).wait(1).to({rotation:-14.8758,x:33.1,y:31.05},0).wait(1).to({rotation:-14.9314,y:31},0).wait(1).to({rotation:-14.9697},0).wait(1).to({rotation:-14.992,y:30.95},0).wait(1).to({rotation:-14.9992,x:33.05,y:31},0).wait(1).to({rotation:-14.993,x:33.1,y:30.95},0).wait(1).to({rotation:-14.9739},0).wait(1).to({rotation:-14.9411,y:31},0).wait(1).to({rotation:-14.8937,x:33.05,y:30.95},0).wait(1).to({rotation:-14.8307,y:31.05},0).wait(1).to({rotation:-14.751,x:33.1},0).wait(1).to({rotation:-14.6535,x:33.05},0).wait(1).to({rotation:-14.5369},0).wait(1).to({rotation:-14.3997,y:31.1},0).wait(1).to({rotation:-14.2404,x:33.1},0).wait(1).to({rotation:-14.0574,x:33.05,y:31.15},0).wait(1).to({rotation:-13.8489,y:31.2},0).wait(1).to({rotation:-13.6129,y:31.25},0).wait(1).to({rotation:-13.3474,y:31.3},0).wait(1).to({rotation:-13.0503,y:31.35},0).wait(1).to({rotation:-12.7193,x:33.1,y:31.4},0).wait(1).to({rotation:-12.3525,x:33.05},0).wait(1).to({rotation:-11.9479,x:33.1,y:31.45},0).wait(1).to({rotation:-11.504,y:31.6},0).wait(1).to({rotation:-11.0201,x:33.05,y:31.7},0).wait(1).to({rotation:-10.4964,y:31.75},0).wait(1).to({rotation:-9.9347,y:31.85},0).wait(1).to({rotation:-9.3384,y:31.95},0).wait(1).to({rotation:-8.7134,x:33,y:32},0).wait(1).to({rotation:-8.0677,y:32.1},0).wait(1).to({rotation:-7.4108,y:32.25},0).wait(1).to({rotation:-6.7539,x:33.05,y:32.3},0).wait(1).to({rotation:-6.1078,x:33,y:32.45},0).wait(1).to({rotation:-5.4825,x:33.05,y:32.55},0).wait(1).to({rotation:-4.8863,y:32.7},0).wait(1).to({rotation:-4.3251,y:32.75},0).wait(1).to({rotation:-3.8027,y:32.85},0).wait(1).to({rotation:-3.3212,y:32.95},0).wait(1).to({rotation:-2.8807,y:33},0).wait(1).to({rotation:-2.4805,x:33},0).wait(1).to({rotation:-2.1192,x:33.05,y:33.15},0).wait(1).to({rotation:-1.7946,y:33.2},0).wait(1).to({rotation:-1.5048,y:33.25},0).wait(1).to({rotation:-1.2474,y:33.3},0).wait(1).to({rotation:-1.0202},0).wait(1).to({rotation:-0.8211,y:33.35},0).wait(1).to({rotation:-0.6481,y:33.4},0).wait(1).to({rotation:-0.4992},0).wait(1).to({rotation:-0.3729,x:33,y:33.45},0).wait(1).to({rotation:-0.2674},0).wait(1).to({rotation:-0.1813},0).wait(1).to({rotation:-0.1134},0).wait(1).to({rotation:-0.0624,x:33.05},0).wait(1).to({rotation:-0.0271,x:33,y:33.5},0).wait(1).to({rotation:-0.0066},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-9.9,81.2,81.9);


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
	this.instance = new lib.Symbol37();
	this.instance.setTransform(32.5,40,1,1,0,0,0,32.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({y:40.05},0).wait(5).to({y:40.1},0).wait(3).to({y:40.15},0).wait(2).to({y:40.2},0).wait(3).to({y:40.25},0).wait(1).to({y:40.3},0).wait(2).to({y:40.35},0).wait(2).to({y:40.4},0).wait(1).to({y:40.45},0).wait(1).to({y:40.5},0).wait(2).to({y:40.55},0).wait(1).to({y:40.6},0).wait(1).to({y:40.65},0).wait(1).to({y:40.7},0).wait(1).to({y:40.75},0).wait(1).to({y:40.8},0).wait(1).to({y:40.85},0).wait(1).to({y:40.9},0).wait(1).to({y:40.95},0).wait(1).to({y:41},0).wait(1).to({y:41.1},0).wait(1).to({y:41.15},0).wait(1).to({y:41.2},0).wait(1).to({y:41.25},0).wait(1).to({y:41.3},0).wait(1).to({y:41.35},0).wait(1).to({y:41.4},0).wait(2).to({y:41.45},0).wait(1).to({y:41.5},0).wait(1).to({y:41.55},0).wait(1).to({y:41.6},0).wait(2).to({y:41.65},0).wait(1).to({y:41.7},0).wait(2).to({y:41.75},0).wait(2).to({y:41.8},0).wait(3).to({y:41.85},0).wait(3).to({y:41.9},0).wait(4).to({y:41.95},0).wait(11).to({y:42},0).wait(1).to({y:41.95},0).wait(9).to({y:41.9},0).wait(4).to({y:41.85},0).wait(2).to({y:41.8},0).wait(2).to({y:41.75},0).wait(2).to({y:41.7},0).wait(1).to({y:41.65},0).wait(2).to({y:41.6},0).wait(1).to({y:41.55},0).wait(1).to({y:41.5},0).wait(1).to({y:41.45},0).wait(1).to({y:41.4},0).wait(1).to({y:41.35},0).wait(1).to({y:41.3},0).wait(1).to({y:41.25},0).wait(1).to({y:41.15},0).wait(1).to({y:41.1},0).wait(1).to({y:41.05},0).wait(1).to({y:40.95},0).wait(1).to({y:40.9},0).wait(1).to({y:40.85},0).wait(1).to({y:40.8},0).wait(1).to({y:40.7},0).wait(1).to({y:40.65},0).wait(1).to({y:40.6},0).wait(1).to({y:40.55},0).wait(1).to({y:40.5},0).wait(1).to({y:40.45},0).wait(1).to({y:40.4},0).wait(1).to({y:40.35},0).wait(1).to({y:40.3},0).wait(1).to({y:40.25},0).wait(2).to({y:40.2},0).wait(1).to({y:40.15},0).wait(2).to({y:40.1},0).wait(3).to({y:40.05},0).wait(3).to({y:40},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,82);


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
	this.instance = new lib.Symbol36();
	this.instance.setTransform(109.5,83.5,1,1,0,0,0,109.5,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.0008},0).wait(1).to({rotation:-0.0033},0).wait(1).to({rotation:-0.0076},0).wait(1).to({rotation:-0.0139,y:83.45},0).wait(1).to({rotation:-0.0222,x:109.55},0).wait(1).to({rotation:-0.0328,y:83.5},0).wait(1).to({rotation:-0.0459,x:109.5,y:83.45},0).wait(1).to({rotation:-0.0616,x:109.55,y:83.5},0).wait(1).to({rotation:-0.0802,x:109.5},0).wait(1).to({rotation:-0.102,x:109.55,y:83.45},0).wait(1).to({rotation:-0.1271},0).wait(1).to({rotation:-0.156,y:83.5},0).wait(1).to({rotation:-0.1888,x:109.5},0).wait(1).to({rotation:-0.2259,x:109.55,y:83.45},0).wait(1).to({rotation:-0.2677,y:83.5},0).wait(1).to({rotation:-0.3144,x:109.5},0).wait(1).to({rotation:-0.3662,x:109.55},0).wait(1).to({rotation:-0.4232,x:109.5},0).wait(1).to({rotation:-0.4853,x:109.55},0).wait(1).to({rotation:-0.5521},0).wait(1).to({rotation:-0.6229},0).wait(1).to({rotation:-0.6967},0).wait(1).to({rotation:-0.7719,x:109.5,y:83.55},0).wait(1).to({rotation:-0.8471,x:109.55},0).wait(1).to({rotation:-0.9207},0).wait(1).to({rotation:-0.9911},0).wait(1).to({rotation:-1.0574},0).wait(1).to({rotation:-1.1187,x:109.6},0).wait(1).to({rotation:-1.1749,x:109.55},0).wait(1).to({rotation:-1.2257},0).wait(1).to({rotation:-1.2713,x:109.5},0).wait(1).to({rotation:-1.3118},0).wait(1).to({rotation:-1.3477,y:83.6},0).wait(1).to({rotation:-1.3791,y:83.55},0).wait(1).to({rotation:-1.4065,x:109.55,y:83.5},0).wait(1).to({rotation:-1.4302},0).wait(1).to({rotation:-1.4504,x:109.5,y:83.55},0).wait(1).to({rotation:-1.4675,x:109.55},0).wait(1).to({rotation:-1.4816,x:109.5,y:83.5},0).wait(1).to({rotation:-1.4931,y:83.55},0).wait(1).to({rotation:-1.5021,x:109.55},0).wait(1).to({rotation:-1.5089,y:83.5},0).wait(1).to({rotation:-1.5135},0).wait(1).to({rotation:-1.5162},0).wait(1).to({rotation:-1.517},0).wait(1).to({rotation:-1.5164,y:83.45},0).wait(1).to({rotation:-1.5145,x:109.6},0).wait(1).to({rotation:-1.5112},0).wait(1).to({rotation:-1.5064},0).wait(1).to({rotation:-1.5,y:83.5},0).wait(1).to({rotation:-1.492,x:109.55,y:83.45},0).wait(1).to({rotation:-1.4821},0).wait(1).to({rotation:-1.4703,x:109.6,y:83.5},0).wait(1).to({rotation:-1.4564,x:109.55,y:83.45},0).wait(1).to({rotation:-1.4403,x:109.6},0).wait(1).to({rotation:-1.4218,x:109.55,y:83.5},0).wait(1).to({rotation:-1.4007,x:109.6,y:83.45},0).wait(1).to({rotation:-1.3768,x:109.55,y:83.5},0).wait(1).to({rotation:-1.35},0).wait(1).to({rotation:-1.3199,y:83.55},0).wait(1).to({rotation:-1.2865,y:83.5},0).wait(1).to({rotation:-1.2494},0).wait(1).to({rotation:-1.2084},0).wait(1).to({rotation:-1.1635,x:109.6},0).wait(1).to({rotation:-1.1146,y:83.45},0).wait(1).to({rotation:-1.0616},0).wait(1).to({rotation:-1.0048,y:83.5},0).wait(1).to({rotation:-0.9445,x:109.65},0).wait(1).to({rotation:-0.8813,x:109.6,y:83.45},0).wait(1).to({rotation:-0.816,y:83.5},0).wait(1).to({rotation:-0.7496,y:83.45},0).wait(1).to({rotation:-0.6831},0).wait(1).to({rotation:-0.6178},0).wait(1).to({rotation:-0.5545},0).wait(1).to({rotation:-0.4942,x:109.55},0).wait(1).to({rotation:-0.4374,x:109.6},0).wait(1).to({rotation:-0.3846,x:109.55},0).wait(1).to({rotation:-0.3359,x:109.6},0).wait(1).to({rotation:-0.2914,x:109.55},0).wait(1).to({rotation:-0.2509,y:83.4},0).wait(1).to({rotation:-0.2143,y:83.45},0).wait(1).to({rotation:-0.1815},0).wait(1).to({rotation:-0.1522,y:83.4},0).wait(1).to({rotation:-0.1262,x:109.6},0).wait(1).to({rotation:-0.1032,y:83.45},0).wait(1).to({rotation:-0.083,x:109.55},0).wait(1).to({rotation:-0.0655,x:109.6},0).wait(1).to({rotation:-0.0505,x:109.55,y:83.4},0).wait(1).to({rotation:-0.0377,y:83.45},0).wait(1).to({rotation:-0.027},0).wait(1).to({rotation:-0.0183},0).wait(1).to({rotation:-0.0115,x:109.5,y:83.5},0).wait(1).to({rotation:-0.0063},0).wait(1).to({rotation:-0.0027},0).wait(1).to({rotation:-0.0007},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.8,223.4,172.8);


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
	this.instance = new lib.Symbol30();
	this.instance.setTransform(95.2,67,1,1,0,0,0,95.2,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,190.6,134), null);


(lib.Symbol23copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(10));

	// Symbol_26
	this.instance = new lib.Symbol26();
	this.instance.setTransform(33,30.1,1,1,0,0,0,33,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:31.2,regY:23.5,rotation:75.5615,x:59.45,y:8.2},0).wait(1).to({rotation:143.0324,x:77.25,y:-0.75},0).wait(1).to({rotation:190.53,x:85.4,y:-9.75},0).wait(1).to({rotation:222.5467,x:90.4,y:-18.3},0).wait(1).to({rotation:245.2669,x:94.5,y:-25.6},0).wait(1).to({rotation:262.2946,x:98.1,y:-31.4},0).wait(1).to({rotation:275.6029,x:101.3,y:-36.15},0).wait(1).to({rotation:286.3324,x:104.05,y:-40.05},0).wait(1).to({rotation:295.1865,x:106.6,y:-43.25},0).wait(1).to({rotation:302.6245,x:108.8,y:-45.95},0).wait(1).to({rotation:308.9605,x:110.75,y:-48.15},0).wait(1).to({rotation:314.418,x:112.6,y:-50.1},0).wait(1).to({rotation:319.1608,x:114.15,y:-51.7},0).wait(1).to({rotation:323.3126,x:115.6,y:-53.15},0).wait(1).to({rotation:326.9685,x:116.85,y:-54.35},0).wait(1).to({rotation:330.2036,x:118,y:-55.4},0).wait(1).to({rotation:333.0776,x:119,y:-56.4},0).wait(1).to({rotation:335.639,x:119.95,y:-57.2},0).wait(1).to({rotation:337.9277,x:120.8,y:-57.9},0).wait(1).to({rotation:339.9768,x:121.55,y:-58.55},0).wait(1).to({rotation:341.814,x:122.25,y:-59.15},0).wait(1).to({rotation:343.4628,x:122.85,y:-59.65},0).wait(1).to({rotation:344.9432,x:123.4,y:-60.1},0).wait(1).to({rotation:346.2724,x:123.9,y:-60.5},0).wait(1).to({rotation:347.4653,x:124.35,y:-60.85},0).wait(1).to({rotation:348.535,x:124.75,y:-61.15},0).wait(1).to({rotation:349.4927,x:125.15,y:-61.5},0).wait(1).to({rotation:350.2554,x:125.4,y:-61.7},0).wait(1).to({rotation:350.7116,x:125.6,y:-61.85},0).wait(1).to({rotation:351.1598,x:125.75,y:-62},0).wait(1).to({rotation:351.5997,x:125.9,y:-62.1},0).wait(1).to({rotation:352.0312,x:126.05,y:-62.25},0).wait(1).to({rotation:352.454,x:126.25,y:-62.35},0).wait(1).to({rotation:352.8679,x:126.35,y:-62.45},0).wait(1).to({rotation:353.2727,x:126.55,y:-62.55},0).wait(1).to({rotation:353.6681,x:126.7,y:-62.7},0).wait(1).to({rotation:354.0539,x:126.85,y:-62.85},0).wait(1).to({rotation:354.4299,x:127,y:-62.9},0).wait(1).to({rotation:354.7958,x:127.1,y:-63.05},0).wait(1).to({rotation:355.1513,x:127.3,y:-63.15},0).wait(1).to({rotation:355.4961,x:127.4,y:-63.2},0).wait(1).to({rotation:355.8301,x:127.5,y:-63.3},0).wait(1).to({rotation:356.1528,x:127.7,y:-63.4},0).wait(1).to({rotation:356.4641,x:127.75,y:-63.45},0).wait(1).to({rotation:356.7636,x:127.9,y:-63.55},0).wait(1).to({rotation:357.051,x:127.95,y:-63.65},0).wait(1).to({rotation:357.3261,x:128.1,y:-63.75},0).wait(1).to({rotation:357.5886,x:128.2},0).wait(1).to({rotation:357.8382,x:128.35,y:-63.9},0).wait(1).to({rotation:358.0746,x:128.4,y:-63.95},0).wait(1).to({rotation:358.2975,x:128.5,y:-64},0).wait(1).to({rotation:358.5068,x:128.55,y:-64.05},0).wait(1).to({rotation:358.7022,x:128.65,y:-64.1},0).wait(1).to({rotation:358.8835,x:128.7,y:-64.15},0).wait(1).to({rotation:359.0505,x:128.75,y:-64.2},0).wait(1).to({rotation:359.2032,x:128.85,y:-64.25},0).wait(1).to({rotation:359.3414,y:-64.3},0).wait(1).to({rotation:359.4653,x:128.9,y:-64.35},0).wait(1).to({rotation:359.5749,x:128.95,y:-64.4},0).wait(1).to({rotation:359.6704,x:129},0).wait(1).to({rotation:359.752,x:129.05},0).wait(1).to({rotation:359.8203,y:-64.45},0).wait(1).to({rotation:359.8759,x:129.1,y:-64.4},0).wait(1).to({rotation:359.9194,y:-64.45},0).wait(1).to({rotation:359.952,y:-64.5},0).wait(1).to({rotation:359.9747,y:-64.45},0).wait(1).to({rotation:359.989},0).wait(1).to({rotation:359.9967},0).wait(1).to({rotation:359.9996},0).wait(1).to({regX:33,regY:30.1,rotation:360,x:130.95,y:-57.9},0).wait(24));

	// Symbol_25
	this.instance_1 = new lib.Symbol25();
	this.instance_1.setTransform(33,33.6,1,1,0,0,0,33,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:31.2,regY:23.5,rotation:-75.5615,x:1.4,y:53},0).wait(1).to({rotation:-143.0324,x:-12.4,y:80.7},0).wait(1).to({rotation:-190.53,x:-17.95,y:93.8},0).wait(1).to({rotation:-222.5467,x:-22.7,y:99},0).wait(1).to({rotation:-245.2669,x:-27.45,y:101.5},0).wait(1).to({rotation:-262.2946,x:-32,y:103.05},0).wait(1).to({rotation:-275.6029,x:-36.15,y:104.3},0).wait(1).to({rotation:-286.3324,x:-39.95,y:105.4},0).wait(1).to({rotation:-295.1865,x:-43.2,y:106.45},0).wait(1).to({rotation:-302.6245,x:-46.2,y:107.4},0).wait(1).to({rotation:-308.9605,x:-48.8,y:108.35},0).wait(1).to({rotation:-314.418,x:-51.1,y:109.2},0).wait(1).to({rotation:-319.1608,x:-53.15,y:110.05},0).wait(1).to({rotation:-323.3126,x:-55.05,y:110.8},0).wait(1).to({rotation:-326.9685,x:-56.65,y:111.5},0).wait(1).to({rotation:-330.2036,x:-58.15,y:112.15},0).wait(1).to({rotation:-333.0776,x:-59.4,y:112.75},0).wait(1).to({rotation:-335.639,x:-60.6,y:113.3},0).wait(1).to({rotation:-337.9277,x:-61.65,y:113.85},0).wait(1).to({rotation:-339.9768,x:-62.55,y:114.35},0).wait(1).to({rotation:-341.814,x:-63.4,y:114.8},0).wait(1).to({rotation:-343.4628,x:-64.15,y:115.2},0).wait(1).to({rotation:-344.9432,x:-64.8,y:115.55},0).wait(1).to({rotation:-346.2724,x:-65.5,y:115.9},0).wait(1).to({rotation:-347.4653,x:-66,y:116.15},0).wait(1).to({rotation:-348.535,x:-66.45,y:116.45},0).wait(1).to({rotation:-349.4927,x:-66.9,y:116.7},0).wait(1).to({rotation:-350.2554,x:-67.3,y:116.9},0).wait(1).to({rotation:-350.7116,x:-67.5,y:117.05},0).wait(1).to({rotation:-351.1598,x:-67.65,y:117.15},0).wait(1).to({rotation:-351.5997,x:-67.95,y:117.25},0).wait(1).to({rotation:-352.0312,x:-68.1,y:117.4},0).wait(1).to({rotation:-352.454,x:-68.3,y:117.5},0).wait(1).to({rotation:-352.8679,x:-68.5,y:117.6},0).wait(1).to({rotation:-353.2727,x:-68.65,y:117.75},0).wait(1).to({rotation:-353.6681,x:-68.9,y:117.85},0).wait(1).to({rotation:-354.0539,x:-69.05,y:117.95},0).wait(1).to({rotation:-354.4299,x:-69.25,y:118.1},0).wait(1).to({rotation:-354.7958,x:-69.4,y:118.2},0).wait(1).to({rotation:-355.1513,x:-69.55,y:118.25},0).wait(1).to({rotation:-355.4961,x:-69.7,y:118.4},0).wait(1).to({rotation:-355.8301,x:-69.85,y:118.45},0).wait(1).to({rotation:-356.1528,x:-70,y:118.55},0).wait(1).to({rotation:-356.4641,x:-70.15,y:118.6},0).wait(1).to({rotation:-356.7636,x:-70.3,y:118.7},0).wait(1).to({rotation:-357.051,x:-70.4,y:118.8},0).wait(1).to({rotation:-357.3261,x:-70.55,y:118.85},0).wait(1).to({rotation:-357.5886,x:-70.7,y:118.95},0).wait(1).to({rotation:-357.8382,x:-70.75,y:119.1},0).wait(1).to({rotation:-358.0746,x:-70.9},0).wait(1).to({rotation:-358.2975,x:-71,y:119.2},0).wait(1).to({rotation:-358.5068,x:-71.05,y:119.25},0).wait(1).to({rotation:-358.7022,x:-71.2,y:119.3},0).wait(1).to({rotation:-358.8835,x:-71.25,y:119.35},0).wait(1).to({rotation:-359.0505,x:-71.35,y:119.4},0).wait(1).to({rotation:-359.2032,x:-71.45,y:119.45},0).wait(1).to({rotation:-359.3414},0).wait(1).to({rotation:-359.4653,x:-71.5,y:119.55},0).wait(1).to({rotation:-359.5749,x:-71.55},0).wait(1).to({rotation:-359.6704,x:-71.65,y:119.6},0).wait(1).to({rotation:-359.752},0).wait(1).to({rotation:-359.8203},0).wait(1).to({rotation:-359.8759,x:-71.7},0).wait(1).to({rotation:-359.9194,x:-71.75,y:119.65},0).wait(1).to({rotation:-359.952,y:119.7},0).wait(1).to({rotation:-359.9747,y:119.65},0).wait(1).to({rotation:-359.989},0).wait(1).to({rotation:-359.9967},0).wait(1).to({rotation:-359.9996},0).wait(1).to({regX:33,regY:33.4,rotation:-360,x:-70,y:129.6},0).wait(24));

	// Layer_9
	this.instance_2 = new lib.Symbol29();
	this.instance_2.setTransform(32.85,32.95,0.0666,0.0666,0,0,0,150.2,150.2);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:150.9,regY:150.9,scaleX:0.1643,scaleY:0.1643,x:31.7,y:32.8,alpha:0.3344},0).wait(1).to({scaleX:0.2194,scaleY:0.2194,x:31.1,y:32.7,alpha:0.2409},0).wait(1).to({scaleX:0.2534,scaleY:0.2534,x:30.7,y:32.65,alpha:0.1832},0).wait(1).to({scaleX:0.2778,scaleY:0.2778,x:30.4,y:32.55,alpha:0.1418},0).wait(1).to({scaleX:0.2969,scaleY:0.2969,x:30.15,y:32.5,alpha:0.1094},0).wait(1).to({scaleX:0.3129,scaleY:0.3129,x:29.95,alpha:0.0824},0).wait(1).to({scaleX:0.3238,scaleY:0.3238,x:29.85,y:32.45,alpha:0.0638},0).wait(1).to({scaleX:0.3324,scaleY:0.3324,x:29.75,alpha:0.0493},0).wait(1).to({scaleX:0.3396,scaleY:0.3396,x:29.65,alpha:0.0371},0).wait(1).to({scaleX:0.3452,scaleY:0.3452,x:29.6,alpha:0.0276},0).wait(1).to({scaleX:0.349,scaleY:0.349,x:29.55,y:32.4,alpha:0.0212},0).wait(1).to({scaleX:0.3512,scaleY:0.3512,x:29.5,alpha:0.0174},0).wait(1).to({scaleX:0.353,scaleY:0.353,alpha:0.0143},0).wait(1).to({scaleX:0.3545,scaleY:0.3545,alpha:0.0118},0).wait(1).to({scaleX:0.3558,scaleY:0.3558,alpha:0.0097},0).wait(1).to({scaleX:0.3568,scaleY:0.3568,x:29.45,alpha:0.0079},0).wait(1).to({scaleX:0.3577,scaleY:0.3577,alpha:0.0063},0).wait(1).to({scaleX:0.3585,scaleY:0.3585,alpha:0.005},0).wait(1).to({scaleX:0.3592,scaleY:0.3592,x:29.4,alpha:0.0038},0).wait(1).to({scaleX:0.3598,scaleY:0.3598,x:29.45,alpha:0.0029},0).wait(1).to({scaleX:0.3602,scaleY:0.3602,x:29.4,alpha:0.002},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,y:32.35,alpha:0.0014},0).wait(1).to({scaleX:0.361,scaleY:0.361,alpha:0.0008},0).wait(1).to({scaleX:0.3612,scaleY:0.3612,y:32.4,alpha:0.0004},0).wait(1).to({scaleX:0.3614,scaleY:0.3614,alpha:0.0001},0).wait(1).to({regX:150.7,regY:150.5,scaleX:0.3615,scaleY:0.3615,x:29.1,y:32.1,alpha:0},0).wait(68));

	// Layer_7
	this.instance_3 = new lib.Symbol29();
	this.instance_3.setTransform(32.9,32.95,0.2182,0.2182,0,0,0,150.3,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:150.9,regY:150.9,scaleX:0.4046,scaleY:0.4046,x:31.9,alpha:0.6687},0).wait(1).to({scaleX:0.5097,scaleY:0.5097,x:31.25,y:32.85,alpha:0.4819},0).wait(1).to({scaleX:0.5746,scaleY:0.5746,x:30.85,y:32.8,alpha:0.3664},0).wait(1).to({scaleX:0.6212,scaleY:0.6212,x:30.6,alpha:0.2837},0).wait(1).to({scaleX:0.6577,scaleY:0.6577,x:30.35,y:32.75,alpha:0.2188},0).wait(1).to({scaleX:0.688,scaleY:0.688,x:30.15,y:32.7,alpha:0.1648},0).wait(1).to({scaleX:0.7089,scaleY:0.7089,x:30.05,y:32.75,alpha:0.1276},0).wait(1).to({scaleX:0.7253,scaleY:0.7253,x:29.95,y:32.7,alpha:0.0986},0).wait(1).to({scaleX:0.739,scaleY:0.739,x:29.85,y:32.65,alpha:0.0741},0).wait(1).to({scaleX:0.7497,scaleY:0.7497,x:29.8,y:32.7,alpha:0.0551},0).wait(1).to({scaleX:0.7569,scaleY:0.7569,x:29.75,y:32.65,alpha:0.0424},0).wait(1).to({scaleX:0.7612,scaleY:0.7612,x:29.7,alpha:0.0347},0).wait(1).to({scaleX:0.7646,scaleY:0.7646,y:32.7,alpha:0.0286},0).wait(1).to({scaleX:0.7675,scaleY:0.7675,x:29.65,y:32.65,alpha:0.0236},0).wait(1).to({scaleX:0.7698,scaleY:0.7698,alpha:0.0193},0).wait(1).to({scaleX:0.7719,scaleY:0.7719,y:32.7,alpha:0.0157},0).wait(1).to({scaleX:0.7736,scaleY:0.7736,y:32.65,alpha:0.0126},0).wait(1).to({scaleX:0.7751,scaleY:0.7751,x:29.6,alpha:0.0099},0).wait(1).to({scaleX:0.7764,scaleY:0.7764,alpha:0.0077},0).wait(1).to({scaleX:0.7775,scaleY:0.7775,y:32.6,alpha:0.0057},0).wait(1).to({scaleX:0.7784,scaleY:0.7784,y:32.65,alpha:0.0041},0).wait(1).to({scaleX:0.7792,scaleY:0.7792,x:29.65,alpha:0.0027},0).wait(1).to({scaleX:0.7798,scaleY:0.7798,x:29.6,alpha:0.0016},0).wait(1).to({scaleX:0.7803,scaleY:0.7803,alpha:0.0008},0).wait(1).to({scaleX:0.7806,scaleY:0.7806,alpha:0.0002},0).wait(1).to({regX:150.7,regY:150.7,scaleX:0.7807,scaleY:0.7807,x:29.1,y:32.15,alpha:0},0).wait(68));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.9,-93.1,276.8,260.4);


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

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88));

	// Layer_1
	this.instance = new lib.Symbol27();
	this.instance.setTransform(33,33.5,1,1,0,0,0,33,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},87).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-13.5,94.1,94.1);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {normal:10,activated:31};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		// Yandex.Metrika counter
		ym(99950413,'reachGoal','CUT2')
		ym_debug_function("ym(99950413,'reachGoal','CUT2')");
		
		
		
		this.activated_mc.rotation = Math.random()*360;
		this.parent.parent.parent.activated_items_number++;
		this.parent.parent.parent.check_state();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(35));

	// Layer_1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(33,33.5,1,1,0,0,0,33,33.5);

	this.activated_mc = new lib.Symbol23copy();
	this.activated_mc.name = "activated_mc";
	this.activated_mc.setTransform(33,33.5,1,1,0,0,0,33,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.activated_mc}]},31).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,67.2);


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

	// Layer_1
	this.image_mc = new lib.Symbol22();
	this.image_mc.name = "image_mc";
	this.image_mc.setTransform(33,33.5,1,1,0,0,0,33,33.5);

	this.timeline.addTween(cjs.Tween.get(this.image_mc).wait(1));

	// Layer_2
	this.bounds_mc = new lib.Symbol21();
	this.bounds_mc.name = "bounds_mc";
	this.bounds_mc.setTransform(33.85,33.1,1.9411,1.1616,0,0,0,42,42.1);
	this.bounds_mc.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.bounds_mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-47.6,-15.8,163,97.6), null);


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

	// Layer_2
	this.instance = new lib.CURSOR_DRAG_DOWN_1();
	this.instance.setTransform(20,26.4,2,2,0,0,0,8,8);
	this.instance.alpha = 0.7891;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).wait(1).to({alpha:1},0).wait(6).to({alpha:0.7891},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({alpha:1},0).wait(10).to({alpha:0.7891},0).to({_off:true},1).wait(10));

	// Layer_1
	this.instance_1 = new lib.CURSOR_DRAG_UP_1();
	this.instance_1.setTransform(15.9,16.5,2,2,0,0,0,8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({alpha:0.5},0).to({_off:true},1).wait(6).to({_off:false},0).wait(1).to({alpha:1},0).wait(7).to({alpha:0.5},0).to({_off:true},1).wait(10).to({_off:false},0).wait(1).to({alpha:1},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,30.5,33.6);


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
	this.instance = new lib.Symbol9();
	this.instance.setTransform(20.25,27,1,1,0,0,0,18.7,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:14.7,regY:16.3,x:16.2,y:16.1},0).wait(1).to({x:16.15},0).wait(1).to({x:16.05},0).wait(1).to({x:15.95},0).wait(1).to({x:15.85,y:16.15},0).wait(1).to({x:15.7},0).wait(1).to({x:15.55,y:16.2},0).wait(1).to({x:15.35,y:16.25},0).wait(1).to({x:15.1,y:16.3},0).wait(1).to({x:14.85,y:16.4},0).wait(1).to({x:14.6,y:16.6},0).wait(1).to({x:14.3,y:16.8},0).wait(1).to({x:13.95,y:17.05},0).wait(1).to({x:13.6,y:17.4},0).wait(1).to({x:13.3,y:17.8},0).wait(1).to({x:13,y:18.3},0).wait(1).to({x:12.8,y:18.9},0).wait(1).to({x:12.65,y:19.6},0).wait(1).to({y:20.4},0).wait(1).to({x:12.8,y:21.15},0).wait(1).to({x:13.1,y:21.95},0).wait(1).to({x:13.65,y:22.75},0).wait(1).to({x:14.35,y:23.35},0).wait(1).to({x:15.1,y:23.8},0).wait(1).to({x:16.05,y:24.05},0).wait(1).to({x:17},0).wait(1).to({x:17.9,y:23.9},0).wait(1).to({x:18.7,y:23.55},0).wait(1).to({x:19.35,y:23},0).wait(1).to({x:19.9,y:22.4},0).wait(1).to({x:20.3,y:21.8},0).wait(1).to({x:20.55,y:21.1},0).wait(1).to({x:20.65,y:20.4},0).wait(1).to({y:19.75},0).wait(1).to({x:20.6,y:19.15},0).wait(1).to({x:20.45,y:18.6},0).wait(1).to({x:20.2,y:18.1},0).wait(1).to({x:19.9,y:17.65},0).wait(1).to({x:19.6,y:17.3},0).wait(1).to({x:19.25,y:17},0).wait(1).to({x:18.95,y:16.75},0).wait(1).to({x:18.7,y:16.6},0).wait(1).to({x:18.5,y:16.5},0).wait(1).to({x:18.35,y:16.4},0).wait(1).to({x:18.2,y:16.35},0).wait(1).to({x:18.05,y:16.3},0).wait(1).to({x:17.95},0).wait(1).to({x:17.85,y:16.25},0).wait(1).to({x:17.75},0).wait(1).to({x:17.65,y:16.2},0).wait(1).to({x:17.6},0).wait(1).to({x:17.5,y:16.15},0).wait(1).to({x:17.45},0).wait(1).to({x:17.4},0).wait(1).to({x:17.35},0).wait(1).to({x:17.3},0).wait(2).to({x:17.25,y:16.1},0).wait(1).to({x:17.2},0).wait(2).to({x:17.15},0).wait(2).to({x:17.1},0).wait(6).to({regX:18.7,regY:27.2,x:21.1,y:27},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.knife();
	this.instance_1.setTransform(-119.95,13.9,0.6666,0.6666,-35.2398);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-70.3,183.5,175.2);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {over:9,out:18};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(10).call(this.frame_17).wait(8).call(this.frame_25).wait(9));

	// Layer_4
	this.instance = new lib.Symbol5();
	this.instance.setTransform(32.4,11.1,1,1,0,0,0,32.4,11.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({alpha:0.0188},0).wait(1).to({alpha:0.0883},0).wait(1).to({alpha:0.2369},0).wait(1).to({alpha:0.484},0).wait(1).to({alpha:0.7423},0).wait(1).to({alpha:0.9042},0).wait(1).to({alpha:0.9797},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9812},0).wait(1).to({alpha:0.9117},0).wait(1).to({alpha:0.7631},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.2577},0).wait(1).to({alpha:0.0958},0).wait(1).to({alpha:0.0203},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjUBvQguAAggggQghghAAguIAAAAQAAgtAhghQAgggAuAAIGpAAQAuAAAgAgQAhAhAAAtIAAAAQAAAughAhQggAgguAAg");
	this.shape.setTransform(32.375,11.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.8,22.3);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {on:20,off:30};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
		
		stage.enableMouseOver();
		//stage.cursor = "pointer"; // THIS LINE BREAKS CODE: this.on("rollover", mouseover_event, this);
		//when used, and if only this 'button' intersects with bitmapt it still works but trows errors into browser console
		// you need to use 'clean' shape (not cantaining bitmaps) for addEventListener rollover detection
		
		
		var current_state = false;
		
		
		this.click_area_mc.addEventListener('mouseover', over.bind(this));
		
		function over() {
			this.back_mc.gotoAndPlay('over');
		}
		
		this.click_area_mc.addEventListener('mouseout', out.bind(this));
		
		function out() {
			this.back_mc.gotoAndPlay('out');
		}
		
		
		this.click_area_mc.addEventListener("click", click.bind(this));
		
		function click() {
			if (this.current_state) {
				this.gotoAndPlay('off');
				this.current_state = false;
			} else {
				this.gotoAndPlay('on');
				this.current_state = true;
			}
			this.parent.check_state(this.parent);
		}
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(11).call(this.frame_29).wait(9).call(this.frame_38).wait(12));

	// Layer_8
	this.click_area_mc = new lib.Symbol4();
	this.click_area_mc.name = "click_area_mc";
	this.click_area_mc.setTransform(33,11,1.1554,1.274,0,0,0,37,14.5);
	this.click_area_mc.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.click_area_mc).wait(50));

	// Symbol_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(11.85,10.95,0.7927,0.7927,0,0,0,10.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({regY:10.2,x:13.2,y:10.9},0).wait(1).to({x:18.05},0).wait(1).to({x:28.15},0).wait(1).to({x:39.5},0).wait(1).to({x:47.3},0).wait(1).to({x:50.95},0).wait(1).to({x:52},0).wait(1).to({x:52.45},0).wait(1).to({regY:10.3,x:52.6,y:10.95},0).wait(1).to({regY:10.2,x:51.2,y:10.9},0).wait(1).to({x:46.35},0).wait(1).to({x:36.25},0).wait(1).to({x:24.9},0).wait(1).to({x:17.1},0).wait(1).to({x:13.45},0).wait(1).to({x:12.4},0).wait(1).to({x:11.95},0).wait(1).to({regY:10.3,x:11.85,y:10.95},0).wait(12));

	// Symbol_3
	this.instance_1 = new lib.Symbol3copy();
	this.instance_1.setTransform(32.4,11.1,1,1,0,0,0,32.4,11.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(1).to({alpha:0.0342},0).wait(1).to({alpha:0.1525},0).wait(1).to({alpha:0.4006},0).wait(1).to({alpha:0.6789},0).wait(1).to({alpha:0.8704},0).wait(1).to({alpha:0.9596},0).wait(1).to({alpha:0.9858},0).wait(1).to({alpha:0.9969},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9658},0).wait(1).to({alpha:0.8475},0).wait(1).to({alpha:0.5994},0).wait(1).to({alpha:0.3211},0).wait(1).to({alpha:0.1296},0).wait(1).to({alpha:0.0404},0).wait(1).to({alpha:0.0142},0).wait(1).to({alpha:0.0031},0).wait(1).to({alpha:0},0).wait(12));

	// Symbol_3
	this.back_mc = new lib.Symbol3();
	this.back_mc.name = "back_mc";
	this.back_mc.setTransform(32.4,11.1,1,1,0,0,0,32.4,11.1);

	this.timeline.addTween(cjs.Tween.get(this.back_mc).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-7.4,85.5,37.2);


(lib.Symbol8copy3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol24();
	this.instance.setTransform(55.5,17.8,0.7123,0.6733,0,0,0,56,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8copy3, new cjs.Rectangle(13.7,8.9,83.89999999999999,17.5), null);


(lib.Symbol5copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"over":32,"out":64};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
		
		stage.enableMouseOver();
		//stage.cursor = "pointer";
		
		
		canvas.addEventListener('mouseover', over.bind(this));
		
		function over() {
			this.gotoAndPlay('over');
		}
		
		canvas.addEventListener('mouseout', out.bind(this));
		
		function out() {
			this.gotoAndPlay('out');
		}
	}
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}
	this.frame_73 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(27).call(this.frame_54).wait(19).call(this.frame_73).wait(19));

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAHAEIgwAGAAqB0IgsAiAAOh5Ig0gc");
	this.shape.setTransform(9.4,19.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AgJiPIgLgGAgHAIIgPACAAXCPIgJAH");
	this.shape_1.setTransform(7.25,18.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},4).to({state:[]},6).to({state:[{t:this.shape}]},20).to({state:[{t:this.shape_1}]},4).to({state:[]},6).wait(44));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AgEALIAvgHAgKCAIAzAWAgrhsIArgp");
	this.shape_2.setTransform(101.55,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AgXiQIAFgFAARAGIAHgCAAMCSIAKAE");
	this.shape_3.setTransform(103.1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},8).to({state:[{t:this.shape_3}]},4).to({state:[]},6).to({state:[{t:this.shape_2}]},20).to({state:[{t:this.shape_3}]},4).to({state:[]},6).wait(44));

	// Layer_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkQCEQghAAgWgXQgYgXAAghIAAgRQAAghAYgWQAWgXAhAAIKqAAQAgAAAXAXQAXAWAAAhIAAARQAAAhgXAXQgXAXggAAg");
	mask.setTransform(48.7917,13.1698);

	// Symbol_7
	this.instance = new lib.Symbol7copy();
	this.instance.setTransform(80.9,1,1,1,0,0,0,13.6,3.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).wait(1).to({regX:2.9,regY:4.5,x:70.2,y:1.95},0).wait(1).to({y:2.75},0).wait(1).to({y:5.4},0).wait(1).to({y:11.75},0).wait(1).to({y:14.5},0).wait(1).to({y:16.1},0).wait(1).to({y:16.7},0).wait(1).to({y:17},0).wait(1).to({y:17.2},0).wait(1).to({y:17.35},0).wait(1).to({y:17.45},0).wait(1).to({y:17.55},0).wait(1).to({y:17.6},0).wait(1).to({y:17.65},0).wait(1).to({regX:13.6,regY:3.8,x:80.9,y:17},0).wait(14).to({regX:2.9,regY:4.5,x:70.2,y:17.7,alpha:0.9812},0).wait(1).to({alpha:0.9117},0).wait(1).to({alpha:0.7631},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.2577},0).wait(1).to({alpha:0.0958},0).wait(1).to({alpha:0.0203},0).wait(1).to({regX:13.6,regY:3.8,x:80.9,y:17,alpha:0},0).to({_off:true},1).wait(19));

	// Symbol_6
	this.instance_1 = new lib.Symbol6copy();
	this.instance_1.setTransform(40.7,1,1,1,0,0,0,20.9,3.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(1).to({regX:21.4,regY:4.5,x:41.2,y:1.95},0).wait(1).to({y:2.75},0).wait(1).to({y:5.4},0).wait(1).to({y:11.75},0).wait(1).to({y:14.5},0).wait(1).to({y:16.1},0).wait(1).to({y:16.7},0).wait(1).to({y:17},0).wait(1).to({y:17.2},0).wait(1).to({y:17.35},0).wait(1).to({y:17.45},0).wait(1).to({y:17.55},0).wait(1).to({y:17.6},0).wait(1).to({y:17.65},0).wait(1).to({regX:20.9,regY:3.8,x:40.7,y:17},0).wait(16).to({regX:21.4,regY:4.5,x:41.2,y:17.7,alpha:0.9812},0).wait(1).to({alpha:0.9117},0).wait(1).to({alpha:0.7631},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.2577},0).wait(1).to({alpha:0.0958},0).wait(1).to({alpha:0.0203},0).wait(1).to({regX:20.9,regY:3.8,x:40.7,y:17,alpha:0},0).to({_off:true},1).wait(19));

	// Symbol_7
	this.instance_2 = new lib.Symbol7copy_1();
	this.instance_2.setTransform(80.9,17,1,1,0,0,0,13.6,3.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(5).to({_off:false,y:1.8,alpha:0},0).wait(1).to({regX:2.9,regY:4.5,x:70.2,y:2.65,alpha:0.0084},0).wait(1).to({y:3,alpha:0.0321},0).wait(1).to({y:3.85,alpha:0.0863},0).wait(1).to({y:6,alpha:0.2328},0).wait(1).to({y:10.95,alpha:0.5573},0).wait(1).to({y:13.55,alpha:0.7303},0).wait(1).to({y:15.1,alpha:0.8304},0).wait(1).to({y:16.15,alpha:0.9},0).wait(1).to({y:16.65,alpha:0.9316},0).wait(1).to({y:16.9,alpha:0.9481},0).wait(1).to({y:17.05,alpha:0.9599},0).wait(1).to({y:17.2,alpha:0.9689},0).wait(1).to({y:17.3,alpha:0.9763},0).wait(1).to({y:17.4,alpha:0.9823},0).wait(1).to({y:17.5,alpha:0.9872},0).wait(1).to({y:17.55,alpha:0.9913},0).wait(1).to({y:17.6,alpha:0.9946},0).wait(1).to({y:17.65,alpha:0.9973},0).wait(1).to({alpha:0.9991},0).wait(1).to({regX:13.6,regY:3.8,x:80.9,y:17,alpha:1},0).wait(9).to({regX:2.9,regY:4.5,x:70.2,y:18},0).wait(1).to({y:19.25},0).wait(1).to({y:21.95},0).wait(1).to({y:26.4},0).wait(1).to({y:31.05},0).wait(1).to({y:33.95},0).wait(1).to({y:35.3},0).wait(1).to({regX:13.6,regY:3.8,x:80.9,y:35},0).to({_off:true},1).wait(21).to({_off:false,y:17},0).wait(28));

	// Symbol_6
	this.instance_3 = new lib.Symbol6_1();
	this.instance_3.setTransform(40.7,17,1,1,0,0,0,20.9,3.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3).to({_off:false,y:1.8,alpha:0},0).wait(1).to({regX:21.4,regY:4.5,x:41.2,y:2.65,alpha:0.0092},0).wait(1).to({y:3.05,alpha:0.0359},0).wait(1).to({y:4.05,alpha:0.1001},0).wait(1).to({y:6.95,alpha:0.2953},0).wait(1).to({y:11.85,alpha:0.6155},0).wait(1).to({y:14.15,alpha:0.7667},0).wait(1).to({y:15.55,alpha:0.8586},0).wait(1).to({y:16.4,alpha:0.9173},0).wait(1).to({y:16.75,alpha:0.9403},0).wait(1).to({y:17,alpha:0.9547},0).wait(1).to({y:17.15,alpha:0.9654},0).wait(1).to({y:17.3,alpha:0.9737},0).wait(1).to({y:17.4,alpha:0.9805},0).wait(1).to({y:17.45,alpha:0.986},0).wait(1).to({y:17.55,alpha:0.9905},0).wait(1).to({y:17.6,alpha:0.9942},0).wait(1).to({y:17.65,alpha:0.997},0).wait(1).to({alpha:0.9991},0).wait(1).to({regX:20.9,regY:3.8,x:40.7,y:17,alpha:1},0).wait(10).to({regX:21.4,regY:4.5,x:41.2,y:18},0).wait(1).to({y:19.25},0).wait(1).to({y:21.95},0).wait(1).to({y:26.4},0).wait(1).to({y:31.05},0).wait(1).to({y:33.95},0).wait(1).to({y:35.3},0).wait(1).to({regX:20.9,regY:3.8,x:40.7,y:35},0).to({_off:true},1).wait(23).to({_off:false,y:17},0).wait(28));

	// Symbol_8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_2 = new cjs.Graphics().p("ADIBgQgFAAgDgDQgEgEAAgEIAAgDQAAgFAEgDQADgEAFAAIBkAAQAFAAAEAEQADADAAAFIAAADQAAAEgDAEQgEADgFAAg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AC1BiQgFAAgEgEQgFgFAAgGIAAgDQAAgGAFgEQAEgFAFAAIB8AAQAGAAAEAFQAEAEAAAGIAAADQAAAGgEAFQgEAEgGAAg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ABtBoQgLAAgHgHQgHgIAAgLIAAgGQAAgLAHgIQAHgIALAAIDVAAQAKAAAHAIQAHAIAAALIAAAGQAAALgHAIQgHAHgKAAg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AgxB3QgUAAgNgQQgOgPAAgXIAAgLQAAgXAOgPQANgQAUAAIGXAAQAUAAAOAQQANAPAAAXIAAALQAAAXgNAPQgOAQgUAAg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjZCFQgdAAgUgXQgVgYAAghIAAgTQAAghAVgXQAUgXAdAAIJmAAQAdAAAVAXQAVAXAAAhIAAATQAAAhgVAYQgVAXgdAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AkoCNQgiAAgYgcQgYgbAAgoIAAgVQAAgmAYgbQAYgcAiAAILIAAQAhAAAZAcQAXAbAAAmIAAAVQAAAogXAbQgZAcghAAg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ak8COQgjAAgYgcQgZgdAAgoIAAgWQAAgoAZgcQAYgdAjABILgAAQAjgBAZAdQAZAcAAAoIAAAWQAAAogZAdQgZAcgjAAg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ak7COQgjAAgZgcQgZgdAAgoIAAgWQAAgnAZgdQAZgcAjAAILfAAQAjAAAZAcQAYAdAAAnIAAAWQAAAogYAdQgZAcgjAAg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ak6CNQgiAAgZgcQgZgcAAgoIAAgVQAAgoAZgcQAZgcAiAAILeAAQAiAAAZAcQAZAcAAAoIAAAVQAAAogZAcQgZAcgiAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Ak2CNQgiAAgZgcQgZgcAAgnIAAgVQAAgnAZgbQAZgcAiAAILZAAQAiAAAZAcQAYAbAAAnIAAAVQAAAngYAcQgZAcgiAAg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AkwCLQgiAAgYgbQgYgbAAgmIAAgVQAAglAYgbQAYgbAiAAILRAAQAjAAAYAbQAYAbAAAlIAAAVQAAAmgYAbQgYAbgjAAg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AkmCJQgiAAgYgaQgYgZAAglIAAgUQAAgkAYgZQAYgaAiAAILFAAQAiAAAYAaQAYAZAAAkIAAAUQAAAlgYAZQgYAagiAAg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AkdCHQghAAgYgZQgXgYAAgjIAAgTQAAgiAXgZQAYgYAhAAIK6AAQAhAAAYAYQAXAZAAAiIAAATQAAAjgXAYQgYAZghAAg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AkWCFQghAAgXgXQgXgYAAgiIAAgSQAAgiAXgXQAXgXAhAAIKyAAQAgAAAYAXQAXAXAAAiIAAASQAAAigXAYQgYAXggAAg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AkSCEQghAAgXgXQgXgXAAghIAAgSQAAghAXgWQAXgYAhAAIKtAAQAgAAAXAYQAXAWAAAhIAAASQAAAhgXAXQgXAXggAAg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AkQCEQghAAgWgXQgYgXAAghIAAgRQAAghAYgWQAWgXAhAAIKqAAQAhAAAXAXQAXAWAAAhIAAARQAAAhgXAXQgXAXghAAg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AkQCEQghAAgWgXQgYgXAAghIAAgRQAAghAYgWQAWgXAhAAIKqAAQAgAAAXAXQAXAWAAAhIAAARQAAAhgXAXQgXAXggAAg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AkQCEQghAAgWgXQgYgXAAghIAAgRQAAghAYgWQAWgXAhAAIKqAAQAgAAAXAXQAXAWAAAhIAAARQAAAhgXAXQgXAXggAAg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AkSCEQggAAgXgXQgXgXAAghIAAgSQAAghAXgWQAXgXAgAAIKsAAQAgAAAYAXQAWAWAAAhIAAASQAAAhgWAXQgYAXggAAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AkWCGQghAAgXgYQgXgYAAgiIAAgTQAAghAXgYQAXgYAhAAIKxAAQAhAAAXAYQAXAYAAAhIAAATQAAAigXAYQgXAYghAAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AkeCIQghAAgXgZQgYgaAAgjIAAgUQAAgjAYgZQAXgZAhAAIK6AAQAiAAAXAZQAYAZAAAjIAAAUQAAAjgYAaQgXAZgiAAg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AkpCLQghAAgYgbQgYgbAAgmIAAgVQAAglAYgbQAYgbAhAAILIAAQAhAAAZAbQAXAbAAAlIAAAVQAAAmgXAbQgZAbghAAg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Ak1CQQgjAAgYgdQgZgeAAgpIAAgXQAAgpAZgdQAYgdAjAAILYAAQAiAAAZAdQAYAdAAApIAAAXQAAApgYAeQgZAdgiAAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AksCNQgiAAgYgcQgZgbAAgoIAAgVQAAgnAZgcQAYgbAiAAILNAAQAiAAAYAbQAYAcAAAnIAAAVQAAAogYAbQgYAcgiAAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AkkCLQgiAAgYgbQgYgaAAgmIAAgUQAAglAYgaQAYgbAiAAILDAAQAiAAAYAbQAYAaAAAlIAAAUQAAAmgYAaQgYAbgiAAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AkeCJQghAAgXgaQgYgZAAgkIAAgUQAAgjAYgZQAXgaAhAAIK8AAQAhAAAYAaQAXAZAAAjIAAAUQAAAkgXAZQgYAaghAAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AkYCHQghAAgYgYQgXgZAAgjIAAgTQAAghAXgZQAYgYAhAAIK1AAQAhAAAXAYQAXAZAAAhIAAATQAAAjgXAZQgXAYghAAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AkUCGQghAAgXgYQgXgYAAgiIAAgSQAAgiAXgXQAXgXAhAAIKwAAQAhAAAXAXQAXAXAAAiIAAASQAAAigXAYQgXAYghAAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AkRCFQghAAgXgXQgXgYAAghIAAgSQAAghAXgWQAXgXAhgBIKsAAQAhABAXAXQAXAWAAAhIAAASQAAAhgXAYQgXAXghAAg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AkQCEQggAAgXgXQgXgXAAggIAAgSQAAghAXgWQAXgXAgAAIKrAAQAgAAAYAXQAWAWAAAhIAAASQAAAggWAXQgYAXggAAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AkQCEQghAAgWgXQgYgXAAghIAAgRQAAghAYgWQAWgXAhAAIKqAAQAgAAAXAXQAXAWAAAhIAAARQAAAhgXAXQgXAXggAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_1_graphics_2,x:31.2031,y:9.6192}).wait(1).to({graphics:mask_1_graphics_3,x:31.8815,y:9.7816}).wait(1).to({graphics:mask_1_graphics_4,x:34.6021,y:10.4327}).wait(1).to({graphics:mask_1_graphics_5,x:40.5259,y:11.8503}).wait(1).to({graphics:mask_1_graphics_6,x:46.7665,y:13.3437}).wait(1).to({graphics:mask_1_graphics_7,x:49.7332,y:14.0537}).wait(1).to({graphics:mask_1_graphics_8,x:50.4661,y:14.198}).wait(1).to({graphics:mask_1_graphics_9,x:50.4471,y:14.186}).wait(1).to({graphics:mask_1_graphics_10,x:50.3802,y:14.1437}).wait(1).to({graphics:mask_1_graphics_11,x:50.2447,y:14.0579}).wait(1).to({graphics:mask_1_graphics_12,x:50.013,y:13.9112}).wait(1).to({graphics:mask_1_graphics_13,x:49.68,y:13.7004}).wait(1).to({graphics:mask_1_graphics_14,x:49.334,y:13.4813}).wait(1).to({graphics:mask_1_graphics_15,x:49.0825,y:13.3222}).wait(1).to({graphics:mask_1_graphics_16,x:48.9347,y:13.2286}).wait(1).to({graphics:mask_1_graphics_17,x:48.8622,y:13.1827}).wait(1).to({graphics:mask_1_graphics_18,x:48.7917,y:13.1698}).wait(14).to({graphics:mask_1_graphics_32,x:48.7917,y:13.1698}).wait(1).to({graphics:mask_1_graphics_33,x:48.8443,y:13.2159}).wait(1).to({graphics:mask_1_graphics_34,x:49.0022,y:13.3542}).wait(1).to({graphics:mask_1_graphics_35,x:49.2653,y:13.5848}).wait(1).to({graphics:mask_1_graphics_36,x:49.6336,y:13.9076}).wait(1).to({graphics:mask_1_graphics_37,x:50.2406,y:14.3866}).wait(1).to({graphics:mask_1_graphics_38,x:49.9303,y:14.1131}).wait(1).to({graphics:mask_1_graphics_39,x:49.6614,y:13.8761}).wait(1).to({graphics:mask_1_graphics_40,x:49.4339,y:13.6755}).wait(1).to({graphics:mask_1_graphics_41,x:49.2477,y:13.5115}).wait(1).to({graphics:mask_1_graphics_42,x:49.1029,y:13.3838}).wait(1).to({graphics:mask_1_graphics_43,x:48.9995,y:13.2927}).wait(1).to({graphics:mask_1_graphics_44,x:48.9374,y:13.238}).wait(1).to({graphics:mask_1_graphics_45,x:48.7917,y:13.1698}).wait(47));

	// Layer_12
	this.instance_4 = new lib.Symbol16copy();
	this.instance_4.setTransform(56.3,18,1,1,0,0,0,56.3,18);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).wait(1).to({regX:58.3,regY:16.6,x:58.3,y:16.6,alpha:0.0117},0).wait(1).to({alpha:0.0529},0).wait(1).to({alpha:0.1363},0).wait(1).to({alpha:0.2789},0).wait(1).to({alpha:0.484},0).wait(1).to({alpha:0.697},0).wait(1).to({alpha:0.8518},0).wait(1).to({alpha:0.9427},0).wait(1).to({alpha:0.9874},0).wait(1).to({regX:56.3,regY:18,x:56.3,y:18,alpha:1},0).wait(23).to({regX:58.3,regY:16.6,x:58.3,y:16.6,alpha:0.9812},0).wait(1).to({alpha:0.9117},0).wait(1).to({alpha:0.7631},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.2577},0).wait(1).to({alpha:0.0958},0).wait(1).to({alpha:0.0203},0).wait(1).to({regX:56.3,regY:18,x:56.3,y:18,alpha:0},0).to({_off:true},1).wait(19));

	// Symbol_8
	this.instance_5 = new lib.Symbol8copy3();
	this.instance_5.setTransform(56.3,18,1,1,0,0,0,56.3,18);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(1).to({_off:false,regY:17.9,scaleX:1.2798,scaleY:1.6161,y:17.9},0).to({_off:true},40).wait(22).to({_off:false,regY:18,scaleX:1,scaleY:1,y:18},0).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,106.9,36.1);


(lib.cursor_mccopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {CURSOR_DRAG_UP:10,CURSOR_DRAG_DOWN:31};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(66));

	// CURSOR_DRAG_DOWN
	this.instance = new lib.CURSOR_DRAG_DOWNcopy();
	this.instance.setTransform(9,13.05,2,2,0,0,0,6.5,5.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).wait(35));

	// CURSOR_DRAG_UP
	this.instance_1 = new lib.CURSOR_DRAG_UPcopy();
	this.instance_1.setTransform(8,8,2,2,0,0,0,8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},31).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,32,32.1);


(lib.cursor_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"CURSOR_DRAG_UP":10,"CURSOR_DRAG_DOWN":31};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(66));

	// CURSOR_DRAG_DOWN
	this.instance = new lib.CURSOR_DRAG_DOWN();
	this.instance.setTransform(8.5,10.5,1,1,0,0,0,6.5,5.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).wait(35));

	// CURSOR_DRAG_UP
	this.instance_1 = new lib.CURSOR_DRAG_UP();
	this.instance_1.setTransform(8,8,1,1,0,0,0,8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},31).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.star_002_round = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.star_002();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:384.4873},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,-49.1,99,99);


(lib.star_002_appear_hide_30_once = function(mode,startPosition,loop,reversed) {
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
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1));

	// Layer_2
	this.podl_mc = new lib.star_002_round();
	this.podl_mc.name = "podl_mc";

	this.timeline.addTween(cjs.Tween.get(this.podl_mc).to({_off:true},1).wait(30));

	// Layer_1
	this.instance = new lib.star_002_round();
	this.instance.setTransform(-0.05,-0.05,0.1799,0.1799);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:0},8,cjs.Ease.get(-1)).to({scaleX:0.1799,scaleY:0.1799,x:-0.05,y:-0.05,alpha:0},20,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.9,-36.7,74.8,74.80000000000001);


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

	// timeline functions:
	this.frame_0 = function() {
		// shift on init
		if (this.init == undefined) {
			this.gotoAndPlay(1 + Math.round(Math.random()*this.totalFrames-2));
			this.init = true;
			
			
			this.activated = false;
			this.image_number = Math.round(Math.random()*3);
			
			this.item_mc.bounds_mc.on("mousedown", function(evt){
				this.item_mc.image_mc.gotoAndPlay("activated");
				this.activated = true;
			 }, this);
		
		}
	}
	this.frame_79 = function() {
		if (this.activated) {
			this.stop();
		}
		else {
			//repeat
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(1));

	// Layer_1
	this.item_mc = new lib.Symbol15();
	this.item_mc.name = "item_mc";
	this.item_mc.setTransform(33,33.5,1,1,0,0,0,33,33.5);

	this.timeline.addTween(cjs.Tween.get(this.item_mc).to({y:-356.5},38,cjs.Ease.get(1)).to({y:33.5},41,cjs.Ease.get(-1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-405.8,163,487.6);


(lib.Symbol14copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer_5
	this.instance = new lib.star_002_appear_hide_30_once();
	this.instance.setTransform(12.25,17.9,0.3163,0.3163);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:2.05,y:5.45},12,cjs.Ease.get(1)).wait(1));

	// Layer_1
	this.instance_1 = new lib.knife_1();
	this.instance_1.setTransform(73.05,55.65,0.6667,0.6667,0,0,0,109.6,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:109.5,scaleX:0.6666,scaleY:0.6666,rotation:-17.4689,x:73.1,y:55.75},0).wait(1).to({regX:109.4,regY:83.6,rotation:-21.3241,x:73.15,y:55.8},0).wait(1).to({regX:109.5,regY:83.5,rotation:-19.5838,x:73.2,y:55.7},0).wait(1).to({rotation:-5.3709,y:55.65},0).wait(1).to({rotation:-0.0718},0).wait(1).to({rotation:0.9056,y:55.7},0).wait(1).to({rotation:1.3612,y:55.75},0).wait(1).to({rotation:1.6215,y:55.7},0).wait(1).to({regX:109.7,rotation:1.7353,x:73.15,y:55.75},0).to({regX:109.6,scaleX:0.6667,scaleY:0.6667,rotation:0,x:73.05,y:55.65},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-22.7,176.5,156.79999999999998);


(lib.cursor_mc_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"CURSOR_DRAG_DOWN":5,"CURSOR_DRAG_UP":35};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop("CURSOR_DRAG_DOWN");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(66));

	// Layer_2
	this.instance_2 = new lib.Symbol14copy();
	this.instance_2.setTransform(57.9,31.25,1,1,0,0,0,73,55.6);

	this.instance_3 = new lib.knife_1();
	this.instance_3.setTransform(57.95,31.3,0.6667,0.6667,0,0,0,109.6,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_2}]},1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-24.3,146,111.3);


(lib.ALL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {success_frame:194,alt_frame:349};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* 
		------------------------------------------------------------------------
		
		Polyansky Vitaly
		
		superpolyansky@gmail.com
		polyansky.ru
		
		------------------------------------------------------------------------
		*/  
		
		// ------------------------ MAKE WHOLE *.HTML FILE NOT CLICKABLE --------
		this.not_clickable_is_active = true;
		document.getElementById("click_area").style = "cursor: default;";
		document.getElementById("click_area").setAttribute("onclick", "return false;");
		
		// ------------------------ TOUCH ENABLED ------------------------------
		createjs.Touch.enable(stage);
		// WARNING: any usage of "mousedown"\"pressmove"\"pressup" at this level breakes dragging of boxes
		
		
		var _this = this;
		
		this.total_clicks_number = 0;			
		this.targeted_clicks_number = 0;
		this.max_not_targeted_clicks = 10;		// total_clicks_number - targeted_clicks_number
		
		this.replaced_cursor_mc = this.cursor_3_mc;
		
		this.activated_items_number = 0;
		
		stage.mouseMoveOutside = true;
		stage.enableMouseOver();
		//stage.cursor = "pointer"; // THIS LINE BREAKS CODE: this.on("rollover", mouseover_event, this);
		//when used, and if only this 'button' intersects with bitmapt it still works but trows errors into browser console
		// you need to use 'clean' shape (not cantaining bitmaps) for addEventListener rollover detection
		
		// ------------------------ CHECK STATE (WHETHER TO GO THE NEXT FRAME?) ------------------------------
		this.check_state = function(_this){
			if (this.activated_items_number >=9){
				this.go_to_success_frame();
				}
			else if(this.total_clicks_number - this.targeted_clicks_number >= this.max_not_targeted_clicks) {
				this.go_to_alt_frame();
			}
			else {
				//
			}
		}
		
		
		this.go_to_success_frame = function(){
			_this.gotoAndPlay("success_frame");
			// --------- Yandex Metrika EVENT -------------------
			//ym(99478353,'reachGoal','DOLL');
			ym_debug_function("go_to_success_frame");	
		}
		
		this.go_to_alt_frame = function(){
			_this.gotoAndPlay("alt_frame");
			// --------- Yandex Metrika EVENT -------------------
			//ym(99478353,'reachGoal','DOLL');
			ym_debug_function("go_to_alt_frame");	
		}
		
		// ------------------------ REPLACED CURSOR MOVEMENT AND BEHAVIUOR ------------------------------
		canvas.addEventListener('mouseover', over.bind(this));
		function over() {
			if (this.not_clickable_is_active == true) {
				this.cursor_idle_mc.alpha = 0;
				document.getElementById("click_area").style = "cursor: none;";
				this.replaced_cursor_mc.alpha = 1;
				this.replaced_cursor_mc.gotoAndStop("CURSOR_DRAG_UP");
				stage.on("stagemousemove", function(evt) {
					this.replaced_cursor_mc.x = adjust_pixel_ratio(evt.stageX);
					this.replaced_cursor_mc.y = adjust_pixel_ratio(evt.stageY);
				}, this);
			}
		}
		
		canvas.addEventListener('mouseout', out.bind(this));
		function out() {
			if (this.not_clickable_is_active == true) {
				this.cursor_idle_mc.alpha = 1;
				document.getElementById("click_area").style = "cursor: default;"
				this.replaced_cursor_mc.alpha = 0;
			}
		}
		
		
		stage.on("stagemousedown", function(evt) {
				if (this.cursor_idle_mc.alpha != 0) {
					this.cursor_idle_mc.alpha = 0;
				}
			this.cut_mc.x = adjust_pixel_ratio(evt.stageX);
			this.cut_mc.y = adjust_pixel_ratio(evt.stageY);
			this.cut_mc.gotoAndPlay(1);
		}, this);
		
		
		
		canvas.addEventListener('mousedown', down.bind(this));
		function down() {
			if (this.not_clickable_is_active == true) {	
				//this.cut_mc.x = adjust_pixel_ratio(evt.stageX);
				//this.cut_mc.y = adjust_pixel_ratio(evt.stageY);
				//this.cut_mc.
				this.replaced_cursor_mc.gotoAndStop("CURSOR_DRAG_DOWN");
			
			}
		}
		
		canvas.addEventListener('mouseup', up.bind(this));
		function up() {
			if (this.not_clickable_is_active == true) {
				this.replaced_cursor_mc.gotoAndStop("CURSOR_DRAG_UP");
			}
		}
		
		canvas.addEventListener('mousemove', move.bind(this));
		function move() {
			if (this.not_clickable_is_active == true) {
				if (this.cursor_idle_mc.alpha != 0) {
					this.cursor_idle_mc.alpha = 0;
					document.getElementById("click_area").style = "cursor: none;";
					this.replaced_cursor_mc.alpha = 1;
					this.replaced_cursor_mc.gotoAndStop("CURSOR_DRAG_UP");
				}
			}
		}
		
		function adjust_pixel_ratio(coord) {
		    var ratio = window.devicePixelRatio || 1;
		    return coord / ratio;
		}
		
		// ------------------------ NOT TARGETED (ACCIDENTAL) CLICKS ------------------------------
		//
		// not_targeted_area_mc - movieclip area that catches not targeted (accidental) clicks
		// WARNING: not_targeted_area_mc CAN NOT BE 0% opacity ! ('mousedown' stops working)
		this.not_targeted_area_mc.addEventListener('mousedown', pressup.bind(this));
		function pressup() {
			if (this.not_clickable_is_active == true) {	
				this.total_clicks_number++;
				this.check_state(this);		
			}
		}
	}
	this.frame_1 = function() {
		// this INIT runs one first time ONLY
		if (this.init == undefined) {
			
		/*
			// ----------------- Yandex.Metrika counter -------------------------------  			
		    //
			// creating new <script>...</script> element
		    var scriptElement = document.createElement('script');
		    scriptElement.textContent = `
			`;
			scriptElement.src = "YANDEX_METRIKA_COUNTER.js"
			//adding <script>...</script> code to the main html-file
			document.body.appendChild(scriptElement);
		    //		
		 	// ------------------------------------------------------------------------  	
		*/
		/*
			// ----------------- Yandex.Metrika DEBUG FUNCTION -------------------------------  			
		    //
			// creating new <script>...</script> element
		    var scriptElement2 = document.createElement('script');
		    scriptElement2.textContent = `
				function ym_debug_function(params) {
					console.log("ym_debug_function(" + params +")");
				}	
			`;
			//adding <script>...</script> code to the main html-file
			document.body.appendChild(scriptElement2);
		    //		
		 	// ------------------------------------------------------------------------  	
			
		*/	
		
			
			// WARNING: Назначение addEventListener должно происходить на 1 frame позже чем объекты появились на Stage!
		
		/*
			this.box_1_mc.dragged_object.addEventListener('mousedown', function(){
				ym(99478353,'reachGoal','DOLL');
				ym_debug_function("ym(99478353,'reachGoal','DOLL')");
			}.bind(this));
		
			this.box_2_mc.dragged_object.addEventListener('mousedown', function(){
				ym(99478353,'reachGoal','DOG');
				ym_debug_function("ym(99478353,'reachGoal','DOG')");
			}.bind(this));
		
			this.box_3_mc.dragged_object.addEventListener('mousedown', function(){
				ym(99478353,'reachGoal','Billboard');
				ym_debug_function("ym(99478353,'reachGoal','Billboard')");
			}.bind(this));
		*/
		
		
			this.init = true;
		}
	}
	this.frame_188 = function() {
		this.stop();
	}
	this.frame_201 = function() {
		// ------------------------ RETURN WHOLE *.HTML FILE TO BE CLICKABLE AGAIN --------
		this.not_clickable_is_active = false;
		document.getElementById("click_area").style = "";
		document.getElementById("click_area").removeAttribute("onclick");
		
		// ------------------------ TOUCH DISABLED ------------------------------
		createjs.Touch.disable(stage);
		
		
		this.replaced_cursor_mc.alpha = 0;
		this.cursor_idle_mc.alpha = 0;
	}
	this.frame_307 = function() {
		this.stop();
	}
	this.frame_369 = function() {
		this.not_clickable_is_active = false;
		document.getElementById("click_area").style = "";
		document.getElementById("click_area").removeAttribute("onclick");
		
		// ------------------------ TOUCH DISABLED ------------------------------
		createjs.Touch.disable(stage);
		
		
		this.replaced_cursor_mc.alpha = 0;
		this.cursor_idle_mc.alpha = 0;
	}
	this.frame_422 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(187).call(this.frame_188).wait(13).call(this.frame_201).wait(106).call(this.frame_307).wait(62).call(this.frame_369).wait(53).call(this.frame_422).wait(59));

	// CURSOR_IDLE
	this.cursor_idle_mc = new lib.Symbol8();
	this.cursor_idle_mc.name = "cursor_idle_mc";
	this.cursor_idle_mc.setTransform(226.7,578.15,1.5,1.5,0,0,0,14.7,16.2);

	this.timeline.addTween(cjs.Tween.get(this.cursor_idle_mc).wait(19).to({x:237.7,y:548.15},0).wait(1).to({regX:-28.2,regY:17.2,x:173.3,y:547.65},0).wait(1).to({x:173.2,y:542.9},0).wait(1).to({x:173,y:533.9},0).wait(1).to({x:172.65,y:517.35},0).wait(1).to({x:171.9,y:483.8},0).wait(1).to({x:170.2,y:402.4},0).wait(1).to({x:168.4,y:317.55},0).wait(1).to({x:167.4,y:270.6},0).wait(1).to({x:166.7,y:239.35},0).wait(1).to({x:166.2,y:216.15},0).wait(1).to({x:165.85,y:198.35},0).wait(1).to({x:165.65,y:189.9},0).wait(1).to({x:165.55,y:184.65},0).wait(1).to({x:165.45,y:180.75},0).wait(1).to({x:165.4,y:177.65},0).wait(1).to({x:165.35,y:175},0).wait(1).to({x:165.3,y:172.8},0).wait(1).to({x:165.25,y:170.9},0).wait(1).to({x:165.2,y:169.25},0).wait(1).to({y:167.8},0).wait(1).to({x:165.15,y:166.55},0).wait(1).to({y:165.5},0).wait(1).to({x:165.1,y:164.55},0).wait(1).to({y:163.8},0).wait(1).to({y:163.15},0).wait(1).to({y:162.75},0).wait(1).to({regX:14.7,regY:16.2,x:229.45,y:161.05},0).to({_off:true},148).wait(287));

	// cursor_2_mc
	this.cursor_3_mc = new lib.cursor_mc_1();
	this.cursor_3_mc.name = "cursor_3_mc";
	this.cursor_3_mc.setTransform(-212.5,81.25,1.5,1.5,0,0,0,8,8.1);
	this.cursor_3_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cursor_3_mc).wait(481));

	// cursor_2_mc
	this.cursor_2_mc = new lib.cursor_mccopy();
	this.cursor_2_mc.name = "cursor_2_mc";
	this.cursor_2_mc.setTransform(-212.4,41.15,1,1,0,0,0,8,8);
	this.cursor_2_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cursor_2_mc).wait(481));

	// cursor_mc
	this.cursor_mc = new lib.cursor_mc();
	this.cursor_mc.name = "cursor_mc";
	this.cursor_mc.setTransform(-212.4,8,1,1,0,0,0,8,8);
	this.cursor_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cursor_mc).wait(481));

	// check_box
	this.checkbox_3_mc = new lib.Symbol1();
	this.checkbox_3_mc.name = "checkbox_3_mc";
	this.checkbox_3_mc.setTransform(-120,85.5,1,1,0,0,0,10.2,10.2);
	this.checkbox_3_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkbox_3_mc).wait(50).to({_off:false},0).to({_off:true},194).wait(237));

	// check_box
	this.checkbox_2_mc = new lib.Symbol1();
	this.checkbox_2_mc.name = "checkbox_2_mc";
	this.checkbox_2_mc.setTransform(-120,45.5,1,1,0,0,0,10.2,10.2);
	this.checkbox_2_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkbox_2_mc).wait(50).to({_off:false},0).to({_off:true},194).wait(237));

	// check_box
	this.checkbox_1_mc = new lib.Symbol1();
	this.checkbox_1_mc.name = "checkbox_1_mc";
	this.checkbox_1_mc.setTransform(-120,5.5,1,1,0,0,0,10.2,10.2);
	this.checkbox_1_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkbox_1_mc).wait(50).to({_off:false},0).to({_off:true},194).wait(237));

	// box (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgOcAoAQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgOcAoWQilAAh1ilQh1ikAAjoMAAAg/uQAAjoB1ikQB1ikClAAIf3AAQClAAB1CkQB2CkAADoMAAAA/uQAADoh2CkQh1ClilAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_16 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_17 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_19 = new cjs.Graphics().p("EgOcAooQilAAh1ilQh1ikAAjoMAAAg/tQAAjoB1ilQB1ikClAAIf3AAQClAAB1CkQB2ClAADoMAAAA/tQAADoh2CkQh1ClilAAg");
	var mask_graphics_20 = new cjs.Graphics().p("EgOcAokQilAAh1ikQh1ikAAjoMAAAg/nQAAjoB1ikQB1ikClAAIf3AAQClAAB1CkQB2CkAADoMAAAA/nQAADoh2CkQh1CkilAAg");
	var mask_graphics_21 = new cjs.Graphics().p("EgOcAobQilAAh1ikQh1ijAAjnMAAAg/ZQAAjnB1ikQB1ijClAAIf3AAQClAAB1CjQB2CkAADnMAAAA/ZQAADnh2CjQh1CkilAAg");
	var mask_graphics_22 = new cjs.Graphics().p("EgOcAoKQilAAh1ijQh1iiAAjlMAAAg+/QAAjlB1ijQB1iiClAAIf3AAQClAAB1CiQB2CjAADlMAAAA+/QAADlh2CiQh1CjilAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EgOcAnqQilAAh1ihQh1igAAjiMAAAg+NQAAjiB1ihQB1igClAAIf3AAQClAAB1CgQB2ChAADiMAAAA+NQAADih2CgQh1ChilAAg");
	var mask_graphics_24 = new cjs.Graphics().p("EgOcAmpQilAAh1icQh1icAAjdMAAAg8nQAAjdB1icQB1icClAAIf3AAQClAAB1CcQB2CcAADdMAAAA8nQAADdh2CcQh1CcilAAg");
	var mask_graphics_25 = new cjs.Graphics().p("EgOcAkNQilAAh1iTQh1iSAAjPMAAAg4xQAAjPB1iSQB1iTClAAIf3AAQClAAB1CTQB2CSAADPMAAAA4xQAADPh2CSQh1CTilAAg");
	var mask_graphics_26 = new cjs.Graphics().p("EgOcAkGQilAAh1iIQh1iIAAjAMAAAg0xQAAjAB1iIQB1iIClAAIf3AAQClAAB1CIQB2CIAADAMAAAA0xQAADAh2CIQh1CIilAAg");
	var mask_graphics_27 = new cjs.Graphics().p("EgOcAkGQilAAh1iDQh1iCAAi4MAAAgyjQAAi4B1iCQB1iCClAAIf3AAQClAAB1CCQB2CCAAC4MAAAAyjQAAC4h2CCQh1CDilAAg");
	var mask_graphics_28 = new cjs.Graphics().p("EgOcAkGQilAAh1h/Qh1h+AAizMAAAgxEQAAizB1h/QB1h+ClAAIf3AAQClAAB1B+QB2B/AACzMAAAAxEQAACzh2B+Qh1B/ilAAg");
	var mask_graphics_29 = new cjs.Graphics().p("EgOcAkGQilAAh1h8Qh1h7AAivMAAAgv/QAAiuB1h8QB1h8ClAAIf3AAQClAAB1B8QB2B8AACuMAAAAv/QAACvh2B7Qh1B8ilAAg");
	var mask_graphics_30 = new cjs.Graphics().p("EgOcAkGQilAAh1h6Qh1h5AAisMAAAgvIQAAisB1h6QB1h5ClAAIf3AAQClAAB1B5QB2B6AACsMAAAAvIQAACsh2B5Qh1B6ilAAg");
	var mask_graphics_31 = new cjs.Graphics().p("EgOcAkGQilAAh1h5Qh1h4AAiqMAAAguvQAAiqB1h5QB1h5ClAAIf3AAQClAAB1B5QB2B5AACqMAAAAuvQAACqh2B4Qh1B5ilAAg");
	var mask_graphics_32 = new cjs.Graphics().p("EgOcAkGQilAAh1h4Qh1h4AAipMAAAgufQAAiqB1h4QB1h4ClAAIf3AAQClAAB1B4QB2B4AACqMAAAAufQAACph2B4Qh1B4ilAAg");
	var mask_graphics_33 = new cjs.Graphics().p("EgOcAkGQilAAh1h3Qh1h4AAioMAAAguUQAAipB1h3QB1h3ClAAIf3AAQClAAB1B3QB2B3AACpMAAAAuUQAACoh2B4Qh1B3ilAAg");
	var mask_graphics_34 = new cjs.Graphics().p("EgOcAkGQilAAh1h3Qh1h3AAioMAAAguKQAAioB1h4QB1h2ClAAIf3AAQClAAB1B2QB2B4AACoMAAAAuKQAACoh2B3Qh1B3ilAAg");
	var mask_graphics_35 = new cjs.Graphics().p("EgOcAkGQilAAh1h3Qh1h2AAioMAAAguCQAAioB1h3QB1h2ClAAIf3AAQClAAB1B2QB2B3AACoMAAAAuCQAACoh2B2Qh1B3ilAAg");
	var mask_graphics_36 = new cjs.Graphics().p("EgOcAkGQilAAh1h3Qh1h2AAinMAAAgt8QAAinB1h3QB1h2ClAAIf3AAQClAAB1B2QB2B3AACnMAAAAt8QAACnh2B2Qh1B3ilAAg");
	var mask_graphics_37 = new cjs.Graphics().p("EgOcAkGQilAAh1h2Qh1h2AAinMAAAgt2QAAinB1h2QB1h2ClAAIf3AAQClAAB1B2QB2B2AACnMAAAAt2QAACnh2B2Qh1B2ilAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EgOcAkGQilAAh1h2Qh1h2AAinMAAAgtwQAAinB1h2QB1h2ClAAIf3AAQClAAB1B2QB2B2AACnMAAAAtwQAACnh2B2Qh1B2ilAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EgOcAkGQilAAh1h2Qh1h2AAimMAAAgtsQAAinB1h2QB1h2ClAAIf3AAQClAAB1B2QB2B2AACnMAAAAtsQAACmh2B2Qh1B2ilAAg");
	var mask_graphics_40 = new cjs.Graphics().p("EgOcAkGQilAAh1h2Qh1h1AAimMAAAgtpQAAimB1h2QB1h2ClAAIf3AAQClAAB1B2QB2B2AACmMAAAAtpQAACmh2B1Qh1B2ilAAg");
	var mask_graphics_41 = new cjs.Graphics().p("EgOcAkGQilAAh1h2Qh1h1AAimMAAAgtlQAAimB1h2QB1h2ClAAIf3AAQClAAB1B2QB2B2AACmMAAAAtlQAACmh2B1Qh1B2ilAAg");
	var mask_graphics_42 = new cjs.Graphics().p("EgOcAkGQilAAh1h1Qh1h2AAimMAAAgtiQAAimB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AACmMAAAAtiQAACmh2B2Qh1B1ilAAg");
	var mask_graphics_43 = new cjs.Graphics().p("EgOcAkGQilAAh1h1Qh1h2AAilMAAAgthQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAthQAAClh2B2Qh1B1ilAAg");
	var mask_graphics_44 = new cjs.Graphics().p("EgOcAkGQilAAh1h1Qh1h1AAimMAAAgteQAAimB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AACmMAAAAteQAACmh2B1Qh1B1ilAAg");
	var mask_graphics_45 = new cjs.Graphics().p("EgOcAkGQilAAh1h1Qh1h1AAimMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAACmh2B1Qh1B1ilAAg");
	var mask_graphics_46 = new cjs.Graphics().p("EgOcAkGQilAAh1h1Qh1h2AAilMAAAgtdQAAilB1h1QB1h1ClAAIf3AAQClAAB1B1QB2B1AAClMAAAAtdQAAClh2B2Qh1B1ilAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:151.5,y:-264}).wait(1).to({graphics:mask_graphics_1,x:151.5,y:-261.8314}).wait(1).to({graphics:mask_graphics_2,x:151.5,y:-251.1134}).wait(1).to({graphics:mask_graphics_3,x:151.5,y:-220.9438}).wait(1).to({graphics:mask_graphics_4,x:151.5,y:-129.2273}).wait(1).to({graphics:mask_graphics_5,x:151.5,y:21.2657}).wait(1).to({graphics:mask_graphics_6,x:151.5,y:92.3271}).wait(1).to({graphics:mask_graphics_7,x:151.5,y:135.5606}).wait(1).to({graphics:mask_graphics_8,x:151.5,y:163.1306}).wait(1).to({graphics:mask_graphics_9,x:151.5,y:173.9382}).wait(1).to({graphics:mask_graphics_10,x:151.5,y:180.7179}).wait(1).to({graphics:mask_graphics_11,x:151.5,y:185.7249}).wait(1).to({graphics:mask_graphics_12,x:151.5,y:189.6537}).wait(1).to({graphics:mask_graphics_13,x:151.5,y:192.8263}).wait(1).to({graphics:mask_graphics_14,x:151.5,y:195.4202}).wait(1).to({graphics:mask_graphics_15,x:151.5,y:197.5422}).wait(1).to({graphics:mask_graphics_16,x:151.5,y:199.2567}).wait(1).to({graphics:mask_graphics_17,x:151.5,y:200.5959}).wait(1).to({graphics:mask_graphics_18,x:151.5,y:201.5528}).wait(1).to({graphics:mask_graphics_19,x:151.5,y:201.9978}).wait(1).to({graphics:mask_graphics_20,x:151.5,y:202.3793}).wait(1).to({graphics:mask_graphics_21,x:151.5,y:203.2912}).wait(1).to({graphics:mask_graphics_22,x:151.5,y:205.0253}).wait(1).to({graphics:mask_graphics_23,x:151.5,y:208.2154}).wait(1).to({graphics:mask_graphics_24,x:151.5,y:214.6759}).wait(1).to({graphics:mask_graphics_25,x:151.5,y:230.3642}).wait(1).to({graphics:mask_graphics_26,x:151.5,y:231.0141}).wait(1).to({graphics:mask_graphics_27,x:151.5,y:231.0174}).wait(1).to({graphics:mask_graphics_28,x:151.5,y:231.0196}).wait(1).to({graphics:mask_graphics_29,x:151.5,y:231.0212}).wait(1).to({graphics:mask_graphics_30,x:151.5,y:231.0225}).wait(1).to({graphics:mask_graphics_31,x:151.5,y:231.0231}).wait(1).to({graphics:mask_graphics_32,x:151.5,y:231.0234}).wait(1).to({graphics:mask_graphics_33,x:151.5,y:231.0237}).wait(1).to({graphics:mask_graphics_34,x:151.5,y:231.0239}).wait(1).to({graphics:mask_graphics_35,x:151.5,y:231.0241}).wait(1).to({graphics:mask_graphics_36,x:151.5,y:231.0243}).wait(1).to({graphics:mask_graphics_37,x:151.5,y:231.0244}).wait(1).to({graphics:mask_graphics_38,x:151.5,y:231.0245}).wait(1).to({graphics:mask_graphics_39,x:151.5,y:231.0246}).wait(1).to({graphics:mask_graphics_40,x:151.5,y:231.0247}).wait(1).to({graphics:mask_graphics_41,x:151.5,y:231.0248}).wait(1).to({graphics:mask_graphics_42,x:151.5,y:231.0249}).wait(1).to({graphics:mask_graphics_43,x:151.5,y:231.0249}).wait(1).to({graphics:mask_graphics_44,x:151.5,y:231.025}).wait(1).to({graphics:mask_graphics_45,x:151.5,y:231.025}).wait(1).to({graphics:mask_graphics_46,x:151.5,y:231}).wait(148).to({graphics:null,x:0,y:0}).wait(287));

	// Layer_14
	this.fruit_mc = new lib.Symbol20();
	this.fruit_mc.name = "fruit_mc";
	this.fruit_mc.setTransform(224,624.5,1,1,0,0,0,33,33.5);
	this.fruit_mc._off = true;

	var maskedShapeInstanceList = [this.fruit_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fruit_mc).wait(179).to({_off:false},0).to({_off:true},15).wait(287));

	// Layer_13
	this.fruit_mc_1 = new lib.Symbol20();
	this.fruit_mc_1.name = "fruit_mc_1";
	this.fruit_mc_1.setTransform(138.5,620.95,0.8939,0.8939,0,0,0,33,33.5);
	this.fruit_mc_1._off = true;

	var maskedShapeInstanceList = [this.fruit_mc_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fruit_mc_1).wait(179).to({_off:false},0).to({_off:true},15).wait(287));

	// Layer_12
	this.fruit_mc_2 = new lib.Symbol20();
	this.fruit_mc_2.name = "fruit_mc_2";
	this.fruit_mc_2.setTransform(64,654.5,1,1,0,0,0,33,33.5);
	this.fruit_mc_2._off = true;

	var maskedShapeInstanceList = [this.fruit_mc_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fruit_mc_2).wait(179).to({_off:false},0).to({_off:true},15).wait(287));

	// Layer_11
	this.fruit_mc_3 = new lib.Symbol20();
	this.fruit_mc_3.name = "fruit_mc_3";
	this.fruit_mc_3.setTransform(221.5,627.05,0.9242,0.9242,0,0,0,33,33.5);
	this.fruit_mc_3._off = true;

	var maskedShapeInstanceList = [this.fruit_mc_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fruit_mc_3).wait(124).to({_off:false},0).to({_off:true},70).wait(287));

	// Layer_10
	this.fruit_mc_4 = new lib.Symbol20();
	this.fruit_mc_4.name = "fruit_mc_4";
	this.fruit_mc_4.setTransform(272,654.5,1,1,0,0,0,33,33.5);
	this.fruit_mc_4._off = true;

	var maskedShapeInstanceList = [this.fruit_mc_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fruit_mc_4).wait(124).to({_off:false},0).to({_off:true},70).wait(287));

	// Layer_8
	this.fruit_mc_5 = new lib.Symbol20();
	this.fruit_mc_5.name = "fruit_mc_5";
	this.fruit_mc_5.setTransform(62.85,552.3,1,1,0,0,0,33,33.5);
	this.fruit_mc_5._off = true;

	var maskedShapeInstanceList = [this.fruit_mc_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fruit_mc_5).wait(124).to({_off:false},0).to({_off:true},70).wait(287));

	// fruit_mc
	this.fruit_mc_6 = new lib.Symbol20();
	this.fruit_mc_6.name = "fruit_mc_6";
	this.fruit_mc_6.setTransform(224,654.5,1,1,0,0,0,33,33.5);
	this.fruit_mc_6._off = true;

	var maskedShapeInstanceList = [this.fruit_mc_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fruit_mc_6).wait(99).to({_off:false},0).to({_off:true},95).wait(287));

	// fruit_mc
	this.fruit_mc_7 = new lib.Symbol20();
	this.fruit_mc_7.name = "fruit_mc_7";
	this.fruit_mc_7.setTransform(208,620.45,0.8788,0.8788,0,0,0,33,33.5);
	this.fruit_mc_7._off = true;

	var maskedShapeInstanceList = [this.fruit_mc_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fruit_mc_7).wait(60).to({_off:false},0).to({_off:true},134).wait(287));

	// fruit_mc
	this.fruit_mc_8 = new lib.Symbol20();
	this.fruit_mc_8.name = "fruit_mc_8";
	this.fruit_mc_8.setTransform(114,624.5,1,1,0,0,0,33,33.5);
	this.fruit_mc_8._off = true;

	var maskedShapeInstanceList = [this.fruit_mc_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fruit_mc_8).wait(38).to({_off:false},0).to({_off:true},156).wait(287));

	// CTA
	this.instance = new lib.Symbol5copy();
	this.instance.setTransform(162.5,425.15,2.5557,2.5557,0,0,0,56.3,18.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(243).to({_off:false},0).to({_off:true},87).wait(39).to({_off:false,y:405.15},0).to({_off:true},80).wait(32));

	// text
	this.instance_1 = new lib.Symbol18copy();
	this.instance_1.setTransform(162.3,176.35,1,1,0,0,0,94.7,37.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(194).to({_off:false},0).wait(1).to({regX:95.4,regY:13.3,x:163,y:152.1,alpha:0.0033},0).wait(1).to({y:152.3,alpha:0.0102},0).wait(1).to({y:152.6,alpha:0.0219},0).wait(1).to({y:153.1,alpha:0.0406},0).wait(1).to({y:153.9,alpha:0.07},0).wait(1).to({y:155.2,alpha:0.1182},0).wait(1).to({y:157.6,alpha:0.2063},0).wait(1).to({y:162.3,alpha:0.3804},0).wait(1).to({y:167.05,alpha:0.5573},0).wait(1).to({y:170.05,alpha:0.6676},0).wait(1).to({y:172.1,alpha:0.7437},0).wait(1).to({y:173.65,alpha:0.8015},0).wait(1).to({y:174.9,alpha:0.8479},0).wait(1).to({y:175.95,alpha:0.8863},0).wait(1).to({y:176.7,alpha:0.9145},0).wait(1).to({y:177.1,alpha:0.9293},0).wait(1).to({y:177.4,alpha:0.9398},0).wait(1).to({y:177.6,alpha:0.9481},0).wait(1).to({y:177.8,alpha:0.9551},0).wait(1).to({y:177.95,alpha:0.961},0).wait(1).to({y:178.1,alpha:0.9661},0).wait(1).to({y:178.25,alpha:0.9707},0).wait(1).to({y:178.35,alpha:0.9748},0).wait(1).to({y:178.45,alpha:0.9784},0).wait(1).to({y:178.55,alpha:0.9816},0).wait(1).to({y:178.6,alpha:0.9846},0).wait(1).to({y:178.7,alpha:0.9872},0).wait(1).to({y:178.75,alpha:0.9896},0).wait(1).to({y:178.8,alpha:0.9917},0).wait(1).to({y:178.85,alpha:0.9936},0).wait(1).to({y:178.9,alpha:0.9953},0).wait(1).to({y:178.95,alpha:0.9967},0).wait(1).to({alpha:0.998},0).wait(1).to({y:179,alpha:0.999},0).wait(1).to({alpha:0.9997},0).wait(1).to({regX:94.7,regY:37.6,x:162.3,y:203.35,alpha:1},0).wait(251));

	// text
	this.instance_2 = new lib.Symbol18();
	this.instance_2.setTransform(162.3,349.35,1,1,0,0,0,94.7,37.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({regX:93.3,regY:-5,x:160.9,y:305.8,alpha:0.0051},0).wait(1).to({y:303.6,alpha:0.0173},0).wait(1).to({y:299.4,alpha:0.0406},0).wait(1).to({y:291.7,alpha:0.0834},0).wait(1).to({y:276.15,alpha:0.17},0).wait(1).to({y:238.25,alpha:0.3804},0).wait(1).to({y:198.8,alpha:0.5995},0).wait(1).to({y:176.95,alpha:0.7209},0).wait(1).to({y:162.45,alpha:0.8015},0).wait(1).to({y:151.65,alpha:0.8614},0).wait(1).to({y:143.4,alpha:0.9074},0).wait(1).to({y:139.45,alpha:0.9293},0).wait(1).to({y:137,alpha:0.9428},0).wait(1).to({y:135.2,alpha:0.9529},0).wait(1).to({y:133.75,alpha:0.961},0).wait(1).to({y:132.55,alpha:0.9677},0).wait(1).to({y:131.5,alpha:0.9735},0).wait(1).to({y:130.6,alpha:0.9784},0).wait(1).to({y:129.85,alpha:0.9827},0).wait(1).to({y:129.2,alpha:0.9864},0).wait(1).to({y:128.6,alpha:0.9896},0).wait(1).to({y:128.1,alpha:0.9924},0).wait(1).to({y:127.65,alpha:0.9948},0).wait(1).to({y:127.3,alpha:0.9967},0).wait(1).to({y:127.05,alpha:0.9983},0).wait(1).to({y:126.8,alpha:0.9995},0).wait(1).to({regX:94.7,regY:37.6,x:162.3,y:169.35,alpha:1},0).wait(149).to({regX:93.3,regY:-5,x:160.9,y:126.85,alpha:0.9967},0).wait(1).to({y:127.15,alpha:0.9898},0).wait(1).to({y:127.6,alpha:0.9781},0).wait(1).to({y:128.35,alpha:0.9594},0).wait(1).to({y:129.55,alpha:0.93},0).wait(1).to({y:131.45,alpha:0.8818},0).wait(1).to({y:135,alpha:0.7937},0).wait(1).to({y:141.95,alpha:0.6196},0).wait(1).to({y:149,alpha:0.4427},0).wait(1).to({y:153.45,alpha:0.3324},0).wait(1).to({y:156.45,alpha:0.2563},0).wait(1).to({y:158.8,alpha:0.1985},0).wait(1).to({y:160.65,alpha:0.1521},0).wait(1).to({y:162.2,alpha:0.1137},0).wait(1).to({y:163.3,alpha:0.0855},0).wait(1).to({y:163.9,alpha:0.0707},0).wait(1).to({y:164.3,alpha:0.0602},0).wait(1).to({y:164.65,alpha:0.0519},0).wait(1).to({y:164.95,alpha:0.0449},0).wait(1).to({y:165.15,alpha:0.039},0).wait(1).to({y:165.35,alpha:0.0339},0).wait(1).to({y:165.55,alpha:0.0293},0).wait(1).to({y:165.7,alpha:0.0252},0).wait(1).to({y:165.85,alpha:0.0216},0).wait(1).to({y:166,alpha:0.0184},0).wait(1).to({y:166.1,alpha:0.0154},0).wait(1).to({y:166.2,alpha:0.0128},0).wait(1).to({y:166.3,alpha:0.0104},0).wait(1).to({y:166.4,alpha:0.0083},0).wait(1).to({y:166.45,alpha:0.0064},0).wait(1).to({y:166.55,alpha:0.0047},0).wait(1).to({y:166.6,alpha:0.0033},0).wait(1).to({y:166.65,alpha:0.002},0).wait(1).to({y:166.7,alpha:0.001},0).wait(1).to({alpha:0.0003},0).wait(1).to({regX:94.7,regY:37.6,x:162.3,y:209.35,alpha:0},0).to({_off:true},1).wait(250));

	// Layer_3
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(159,-95.45);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(159,54.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(435));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(1).to({y:-94.6827},0).wait(1).to({y:-92.8487},0).wait(1).to({y:-89.3608},0).wait(1).to({y:-82.9444},0).wait(1).to({y:-69.95},0).wait(1).to({y:-38.3955},0).wait(1).to({y:-5.5186},0).wait(1).to({y:12.6793},0).wait(1).to({y:24.7759},0).wait(1).to({y:33.7652},0).wait(1).to({y:40.6675},0).wait(1).to({y:43.9448},0).wait(1).to({y:45.9673},0).wait(1).to({y:47.4819},0).wait(1).to({y:48.6977},0).wait(1).to({y:49.7093},0).wait(1).to({y:50.5687},0).wait(1).to({y:51.3081},0).wait(1).to({y:51.9489},0).wait(1).to({y:52.5058},0).wait(1).to({y:52.9893},0).wait(1).to({y:53.4068},0).wait(1).to({y:53.7632},0).wait(1).to({y:54.0609},0).wait(1).to({y:54.2993},0).wait(1).to({y:54.4716},0).to({_off:true},1).wait(435));

	// Symbol_32
	this.instance_5 = new lib.Symbol32();
	this.instance_5.setTransform(163,590.55,1,1,0,0,0,109.5,83.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(194).to({_off:false},0).wait(1).to({y:589.7},0).wait(1).to({y:588},0).wait(1).to({y:585.05},0).wait(1).to({y:580.4},0).wait(1).to({y:573},0).wait(1).to({y:560.95},0).wait(1).to({y:538.95},0).wait(1).to({y:495.45},0).wait(1).to({y:451.2},0).wait(1).to({y:423.65},0).wait(1).to({y:404.6},0).wait(1).to({y:390.15},0).wait(1).to({y:378.55},0).wait(1).to({y:368.95},0).wait(1).to({y:361.9},0).wait(1).to({y:358.2},0).wait(1).to({y:355.55},0).wait(1).to({y:353.5},0).wait(1).to({y:351.75},0).wait(1).to({y:350.3},0).wait(1).to({y:349},0).wait(1).to({y:347.85},0).wait(1).to({y:346.85},0).wait(1).to({y:345.95},0).wait(1).to({y:345.1},0).wait(1).to({y:344.4},0).wait(1).to({y:343.7},0).wait(1).to({y:343.15},0).wait(1).to({y:342.6},0).wait(1).to({y:342.1},0).wait(1).to({y:341.7},0).wait(1).to({y:341.35},0).wait(1).to({y:341.05},0).wait(1).to({y:340.8},0).wait(1).to({y:340.6},0).wait(1).to({y:340.55},0).wait(251));

	// Symbol_35
	this.instance_6 = new lib.Symbol35();
	this.instance_6.setTransform(65.05,543.1,1,1,0,0,0,51,30);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(194).to({_off:false},0).wait(1).to({regY:32.5,y:545},0).wait(1).to({y:543.75},0).wait(1).to({y:541.65},0).wait(1).to({y:538.25},0).wait(1).to({y:532.95},0).wait(1).to({y:524.3},0).wait(1).to({y:508.45},0).wait(1).to({y:477.1},0).wait(1).to({y:445.25},0).wait(1).to({y:425.4},0).wait(1).to({y:411.7},0).wait(1).to({y:401.3},0).wait(1).to({y:392.95},0).wait(1).to({y:386.05},0).wait(1).to({y:380.95},0).wait(1).to({y:378.3},0).wait(1).to({y:376.4},0).wait(1).to({y:374.9},0).wait(1).to({y:373.65},0).wait(1).to({y:372.6},0).wait(1).to({y:371.65},0).wait(1).to({y:370.85},0).wait(1).to({y:370.1},0).wait(1).to({y:369.45},0).wait(1).to({y:368.9},0).wait(1).to({y:368.35},0).wait(1).to({y:367.9},0).wait(1).to({y:367.45},0).wait(1).to({y:367.05},0).wait(1).to({y:366.7},0).wait(1).to({y:366.4},0).wait(1).to({y:366.15},0).wait(1).to({y:365.95},0).wait(1).to({y:365.75},0).wait(1).to({y:365.65},0).wait(1).to({regY:30,y:363.1},0).wait(251));

	// Symbol_34
	this.instance_7 = new lib.Symbol34();
	this.instance_7.setTransform(283,514.1,1,1,0,0,0,33,33.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(194).to({_off:false},0).wait(1).to({regY:31,y:511},0).wait(1).to({y:509.85},0).wait(1).to({y:507.85},0).wait(1).to({y:504.65},0).wait(1).to({y:499.65},0).wait(1).to({y:491.5},0).wait(1).to({y:476.5},0).wait(1).to({y:446.9},0).wait(1).to({y:416.85},0).wait(1).to({y:398.1},0).wait(1).to({y:385.15},0).wait(1).to({y:375.3},0).wait(1).to({y:367.45},0).wait(1).to({y:360.9},0).wait(1).to({y:356.1},0).wait(1).to({y:353.6},0).wait(1).to({y:351.8},0).wait(1).to({y:350.4},0).wait(1).to({y:349.2},0).wait(1).to({y:348.2},0).wait(1).to({y:347.35},0).wait(1).to({y:346.55},0).wait(1).to({y:345.85},0).wait(1).to({y:345.25},0).wait(1).to({y:344.7},0).wait(1).to({y:344.2},0).wait(1).to({y:343.75},0).wait(1).to({y:343.35},0).wait(1).to({y:343},0).wait(1).to({y:342.65},0).wait(1).to({y:342.4},0).wait(1).to({y:342.15},0).wait(1).to({y:341.9},0).wait(1).to({y:341.75},0).wait(1).to({y:341.65},0).wait(1).to({regY:33.5,y:344.1},0).wait(251));

	// Symbol_33
	this.instance_8 = new lib.Symbol33();
	this.instance_8.setTransform(214.1,583.1,1,1,0,0,0,32.5,40);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(194).to({_off:false},0).wait(1).to({regY:41,y:583.15},0).wait(1).to({y:581.25},0).wait(1).to({y:577.95},0).wait(1).to({y:572.7},0).wait(1).to({y:564.45},0).wait(1).to({y:551},0).wait(1).to({y:526.3},0).wait(1).to({y:477.55},0).wait(1).to({y:428.05},0).wait(1).to({y:397.15},0).wait(1).to({y:375.85},0).wait(1).to({y:359.65},0).wait(1).to({y:346.65},0).wait(1).to({y:335.9},0).wait(1).to({y:328},0).wait(1).to({y:323.85},0).wait(1).to({y:320.95},0).wait(1).to({y:318.6},0).wait(1).to({y:316.65},0).wait(1).to({y:315},0).wait(1).to({y:313.55},0).wait(1).to({y:312.3},0).wait(1).to({y:311.15},0).wait(1).to({y:310.15},0).wait(1).to({y:309.2},0).wait(1).to({y:308.4},0).wait(1).to({y:307.65},0).wait(1).to({y:307},0).wait(1).to({y:306.4},0).wait(1).to({y:305.85},0).wait(1).to({y:305.4},0).wait(1).to({y:305},0).wait(1).to({y:304.65},0).wait(1).to({y:304.35},0).wait(1).to({y:304.15},0).wait(1).to({regY:40,y:303.1},0).wait(251));

	// oval
	this.instance_9 = new lib.Symbol28();
	this.instance_9.setTransform(161.05,671.55,1,1,0,0,0,142,185.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(194).to({_off:false},0).wait(1).to({y:670.85},0).wait(1).to({y:669.35},0).wait(1).to({y:666.85},0).wait(1).to({y:662.9},0).wait(1).to({y:656.6},0).wait(1).to({y:646.35},0).wait(1).to({y:627.6},0).wait(1).to({y:590.5},0).wait(1).to({y:552.8},0).wait(1).to({y:529.35},0).wait(1).to({y:513.1},0).wait(1).to({y:500.8},0).wait(1).to({y:490.95},0).wait(1).to({y:482.75},0).wait(1).to({y:476.75},0).wait(1).to({y:473.6},0).wait(1).to({y:471.35},0).wait(1).to({y:469.55},0).wait(1).to({y:468.1},0).wait(1).to({y:466.85},0).wait(1).to({y:465.75},0).wait(1).to({y:464.75},0).wait(1).to({y:463.9},0).wait(1).to({y:463.15},0).wait(1).to({y:462.45},0).wait(1).to({y:461.8},0).wait(1).to({y:461.25},0).wait(1).to({y:460.75},0).wait(1).to({y:460.3},0).wait(1).to({y:459.9},0).wait(1).to({y:459.55},0).wait(1).to({y:459.2},0).wait(1).to({y:458.95},0).wait(1).to({y:458.75},0).wait(1).to({y:458.6},0).wait(1).to({y:458.55},0).wait(251));

	// oval (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_194 = new cjs.Graphics().p("EgOcAkGQilAAh1h1Qh1h2AAilMAAAgtdQAAilB1h1QB1h1ClAAIf3AAQClAAB1B1QB2B1AAClMAAAAtdQAAClh2B2Qh1B1ilAAg");
	var mask_1_graphics_195 = new cjs.Graphics().p("EgOcAkDQilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_196 = new cjs.Graphics().p("EgOcAj7QilAAh1h1Qh1h1AAimMAAAgtcQAAimB1h1QB1h1ClAAIf3AAQClAAB1B1QB2B1AACmMAAAAtcQAACmh2B1Qh1B1ilAAg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EgOcAjvQilAAh1h1Qh1h2AAilMAAAgtdQAAilB1h1QB1h1ClAAIf3AAQClAAB1B1QB2B1AAClMAAAAtdQAAClh2B2Qh1B1ilAAg");
	var mask_1_graphics_198 = new cjs.Graphics().p("EgOcAjbQilAAh1h1Qh1h1AAimMAAAgtcQAAimB1h1QB1h1ClAAIf3AAQClAAB1B1QB2B1AACmMAAAAtcQAACmh2B1Qh1B1ilAAg");
	var mask_1_graphics_199 = new cjs.Graphics().p("EgOcAi8QilAAh1h1Qh1h1AAimMAAAgtcQAAimB1h1QB1h1ClAAIf3AAQClAAB1B1QB2B1AACmMAAAAtcQAACmh2B1Qh1B1ilAAg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EgOcAiKQilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EgOcAgtQilAAh1h1Qh1h1AAimMAAAgtcQAAimB1h1QB1h1ClAAIf3AAQClAAB1B1QB2B1AACmMAAAAtcQAACmh2B1Qh1B1ilAAg");
	var mask_1_graphics_202 = new cjs.Graphics().p("Aucd3QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_203 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_204 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_205 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_206 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_207 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_208 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_209 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_210 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_211 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_212 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_213 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_214 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_215 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_216 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_217 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_218 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_219 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_220 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_221 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_222 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_223 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_224 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_225 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_226 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_227 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_228 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_229 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");
	var mask_1_graphics_230 = new cjs.Graphics().p("Aucc/QilAAh1h2Qh1h1AAilMAAAgtdQAAilB1h2QB1h1ClAAIf3AAQClAAB1B1QB2B2AAClMAAAAtdQAAClh2B1Qh1B2ilAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(194).to({graphics:mask_1_graphics_194,x:151.5,y:231}).wait(1).to({graphics:mask_1_graphics_195,x:151.5,y:230.6563}).wait(1).to({graphics:mask_1_graphics_196,x:151.5,y:229.9337}).wait(1).to({graphics:mask_1_graphics_197,x:151.5,y:228.7}).wait(1).to({graphics:mask_1_graphics_198,x:151.5,y:226.7376}).wait(1).to({graphics:mask_1_graphics_199,x:151.5,y:223.6485}).wait(1).to({graphics:mask_1_graphics_200,x:151.5,y:218.5881}).wait(1).to({graphics:mask_1_graphics_201,x:151.5,y:209.3403}).wait(1).to({graphics:mask_1_graphics_202,x:151.5,y:191.0619}).wait(1).to({graphics:mask_1_graphics_203,x:151.5,y:159.4938}).wait(1).to({graphics:mask_1_graphics_204,x:151.5,y:136.3393}).wait(1).to({graphics:mask_1_graphics_205,x:151.5,y:120.3478}).wait(1).to({graphics:mask_1_graphics_206,x:151.5,y:108.2088}).wait(1).to({graphics:mask_1_graphics_207,x:151.5,y:98.4744}).wait(1).to({graphics:mask_1_graphics_208,x:151.5,y:90.3965}).wait(1).to({graphics:mask_1_graphics_209,x:151.5,y:84.484}).wait(1).to({graphics:mask_1_graphics_210,x:151.5,y:81.3723}).wait(1).to({graphics:mask_1_graphics_211,x:151.5,y:79.1637}).wait(1).to({graphics:mask_1_graphics_212,x:151.5,y:77.416}).wait(1).to({graphics:mask_1_graphics_213,x:151.5,y:75.9623}).wait(1).to({graphics:mask_1_graphics_214,x:151.5,y:74.7182}).wait(1).to({graphics:mask_1_graphics_215,x:151.5,y:73.6338}).wait(1).to({graphics:mask_1_graphics_216,x:151.5,y:72.677}).wait(1).to({graphics:mask_1_graphics_217,x:151.5,y:71.8256}).wait(1).to({graphics:mask_1_graphics_218,x:151.5,y:71.0636}).wait(1).to({graphics:mask_1_graphics_219,x:151.5,y:70.3791}).wait(1).to({graphics:mask_1_graphics_220,x:151.5,y:69.7631}).wait(1).to({graphics:mask_1_graphics_221,x:151.5,y:69.2085}).wait(1).to({graphics:mask_1_graphics_222,x:151.5,y:68.71}).wait(1).to({graphics:mask_1_graphics_223,x:151.5,y:68.2634}).wait(1).to({graphics:mask_1_graphics_224,x:151.5,y:67.8656}).wait(1).to({graphics:mask_1_graphics_225,x:151.5,y:67.5147}).wait(1).to({graphics:mask_1_graphics_226,x:151.5,y:67.2097}).wait(1).to({graphics:mask_1_graphics_227,x:151.5,y:66.9514}).wait(1).to({graphics:mask_1_graphics_228,x:151.5,y:66.7427}).wait(1).to({graphics:mask_1_graphics_229,x:151.5,y:66.5918}).wait(1).to({graphics:mask_1_graphics_230,x:151.5,y:66.525}).wait(251));

	// oval
	this.instance_10 = new lib.Symbol28();
	this.instance_10.setTransform(161.05,276.55,1,1,0,0,0,142,185.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(194).to({_off:false},0).wait(1).to({y:276.6},0).wait(1).to({y:276.75},0).wait(1).to({y:276.95},0).wait(1).to({y:277.35},0).wait(1).to({y:277.95},0).wait(1).to({y:278.9},0).wait(1).to({y:280.65},0).wait(1).to({y:284.15},0).wait(1).to({y:287.65},0).wait(1).to({y:289.9},0).wait(1).to({y:291.4},0).wait(1).to({y:292.55},0).wait(1).to({y:293.5},0).wait(1).to({y:294.25},0).wait(1).to({y:294.8},0).wait(1).to({y:295.1},0).wait(1).to({y:295.3},0).wait(1).to({y:295.5},0).wait(1).to({y:295.65},0).wait(1).to({y:295.75},0).wait(1).to({y:295.85},0).wait(1).to({y:295.95},0).wait(1).to({y:296},0).wait(1).to({y:296.1},0).wait(1).to({y:296.15},0).wait(1).to({y:296.2},0).wait(1).to({y:296.25},0).wait(1).to({y:296.3},0).wait(1).to({y:296.35},0).wait(1).to({y:296.4},0).wait(1).to({y:296.45},0).wait(2).to({y:296.5},0).wait(3).to({y:296.55},0).wait(251));

	// Layer_17
	this.instance_11 = new lib.Symbol31();
	this.instance_11.setTransform(230.75,131.3,0.5114,0.5114,0,0,0,95.2,67);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(194).to({_off:false},0).wait(1).to({regX:95.3,x:230.8,y:131.2},0).wait(1).to({y:131.05},0).wait(1).to({y:130.85},0).wait(1).to({y:130.45},0).wait(1).to({y:129.85},0).wait(1).to({y:128.9},0).wait(1).to({y:127.15},0).wait(1).to({y:123.65},0).wait(1).to({y:120.15},0).wait(1).to({y:117.9},0).wait(1).to({y:116.4},0).wait(1).to({y:115.25},0).wait(1).to({y:114.3},0).wait(1).to({y:113.55},0).wait(1).to({y:113},0).wait(1).to({y:112.7},0).wait(1).to({y:112.5},0).wait(1).to({y:112.3},0).wait(1).to({y:112.15},0).wait(1).to({y:112.05},0).wait(1).to({y:111.95},0).wait(1).to({y:111.85},0).wait(1).to({y:111.8},0).wait(1).to({y:111.7},0).wait(1).to({y:111.65},0).wait(1).to({y:111.6},0).wait(1).to({y:111.55},0).wait(1).to({y:111.5},0).wait(1).to({y:111.45},0).wait(1).to({y:111.4},0).wait(1).to({y:111.35},0).wait(2).to({y:111.3},0).wait(3).to({regX:95.2,x:230.75},0).wait(251));

	// cut_mc
	this.cut_mc = new lib.Symbol40();
	this.cut_mc.name = "cut_mc";
	this.cut_mc.setTransform(-103.5,-72.45);

	this.timeline.addTween(cjs.Tween.get(this.cut_mc).wait(481));

	// oval
	this.instance_12 = new lib.Symbol28();
	this.instance_12.setTransform(161.05,-268.1,1,1.4018,0,0,0,142,185.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regY:185.5,y:-263.6},0).wait(1).to({y:-251.05},0).wait(1).to({y:-220.85},0).wait(1).to({y:-129.15},0).wait(1).to({y:21.35},0).wait(1).to({y:92.4},0).wait(1).to({y:135.65},0).wait(1).to({y:163.2},0).wait(1).to({y:174},0).wait(1).to({y:180.8},0).wait(1).to({y:185.8},0).wait(1).to({y:189.75},0).wait(1).to({y:192.9},0).wait(1).to({y:195.5},0).wait(1).to({y:197.6},0).wait(1).to({y:199.35},0).wait(1).to({y:200.65},0).wait(1).to({y:201.65},0).wait(1).to({regY:185.4,y:201.9},0).wait(1).to({regY:185.5,scaleY:1.3997,y:202.45},0).wait(1).to({scaleY:1.3948,y:203.35},0).wait(1).to({scaleY:1.3855,y:205.1},0).wait(1).to({scaleY:1.3683,y:208.25},0).wait(1).to({scaleY:1.3335,y:214.7},0).wait(1).to({scaleY:1.249,y:230.45},0).wait(1).to({scaleY:1.1609,y:246.7},0).wait(1).to({scaleY:1.1122,y:255.75},0).wait(1).to({scaleY:1.0798,y:261.8},0).wait(1).to({scaleY:1.0557,y:266.25},0).wait(1).to({scaleY:1.0372,y:269.7},0).wait(1).to({scaleY:1.0284,y:271.3},0).wait(1).to({scaleY:1.023,y:272.3},0).wait(1).to({scaleY:1.0189,y:273.05},0).wait(1).to({scaleY:1.0157,y:273.65},0).wait(1).to({scaleY:1.013,y:274.15},0).wait(1).to({scaleY:1.0107,y:274.6},0).wait(1).to({scaleY:1.0087,y:274.95},0).wait(1).to({scaleY:1.007,y:275.3},0).wait(1).to({scaleY:1.0055,y:275.55},0).wait(1).to({scaleY:1.0042,y:275.75},0).wait(1).to({scaleY:1.0031,y:276},0).wait(1).to({scaleY:1.0021,y:276.2},0).wait(1).to({scaleY:1.0013,y:276.35},0).wait(1).to({scaleY:1.0007,y:276.45},0).wait(1).to({scaleY:1.0002,y:276.55},0).wait(1).to({scaleY:1},0).to({_off:true},148).wait(287));

	// BACKGROUND
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(481));

	// not_targeted_area_mc
	this.not_targeted_area_mc = new lib.not_targeted_area_mc();
	this.not_targeted_area_mc.name = "not_targeted_area_mc";
	this.not_targeted_area_mc.setTransform(560,240,1,1,0,0,0,160,240);
	this.not_targeted_area_mc.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.not_targeted_area_mc).wait(481));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.1,-528,967.1,1385);


// stage content:
(lib._320480_yandex = function(mode,startPosition,loop,reversed) {
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
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		
		var border = new createjs.Shape();
		border.graphics.beginStroke("#dddddd").setStrokeStyle(2).drawRect(0, 0, lib.properties.width, lib.properties.height);
		stage.addChild(border);
		stage.addChild(border);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ALL
	this.instance = new lib.ALL();
	this.instance.setTransform(160,240,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgajgnDMA1HAAAMAAABOHMg1HAAAg");
	this.shape.setTransform(160,240);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgajAnEMAAAhOHMA1HAAAMAAABOHg");
	this.shape_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-87.1,-288,807.1,999.2);
// library properties:
lib.properties = {
	id: 'A6EDE19E22AF124B814C24110DF628EA',
	width: 320,
	height: 480,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_P_1.png", id:"index_atlas_P_1"}
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
an.compositions['A6EDE19E22AF124B814C24110DF628EA'] = {
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