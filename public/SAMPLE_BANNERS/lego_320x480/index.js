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
	this.shape.graphics.f("#E3000B").s().p("AouCBIAAkBIRdAAIAAEBg");
	this.shape.setTransform(55.875,12.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,111.8,25.8), null);


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
	this.shape.graphics.f("#000000").s().p("AgYC9IAAhLIBEAAIAABLgAgZBWIAAgqQAAgMAEgLQAEgMAGgJQALgTAHgNQAHgNADgJQADgJABgIIAAgRQAAgKgFgKQgFgLgMAAQgJAAgIAKQgIAKAAAXIhHgIQACgyAagcQAZgbAuAAQAzAAAWAaQAXAaAAAxIgBAYIgDATIgFAPIgHAOIgcAwQgFAGgBAJQgCAGAAAOIAAATg");
	this.shape.setTransform(170.575,37.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhcC8IAAl3IBiAAQAiAAATAMQAUALAHAcQAFARABAkIABBTIgBBQQgBAjgGARQgKAggXAMQgWAMgdAAgAgTB1IAMAAQAQAAAFgIQAFgIAAgQIAAipQAAgPgFgJQgFgIgQAAIgMAAg");
	this.shape_1.setTransform(147.275,37.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhVC8IAAl3ICrAAIAABGIhiAAIAABQIBWAAIAABFIhWAAIAABVIBiAAIAABHg");
	this.shape_2.setTransform(125.325,37.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhVC8IAAl3IBJAAIAAEwIBiAAIAABHg");
	this.shape_3.setTransform(104.975,37.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhUC8IAAhDIBZjuIhWAAIAAhGICmAAIAABBIhaDvIBaAAIAABHg");
	this.shape_4.setTransform(84,37.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhUC8IAAhDIBZjuIhWAAIAAhGICmAAIAABBIhaDvIBaAAIAABHg");
	this.shape_5.setTransform(64.55,37.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhfBeIAAkaIBKAAIAAEcQAAAMAGAGQAHAFAIAAQAJAAAGgFQAGgGAAgMIAAkcIBLAAIAAEaQAAAxgYAXQgZAXgvAAQhfAAAAhfg");
	this.shape_6.setTransform(42.675,38.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhgC8IAAl3IBZAAQAXAAATAGQATAFAOAOQAOANAHAWQAIAXAAAhQAAA6gYAfQgZAgg1AAIgRAAIAACKgAgWgUIAMAAQAHAAAGgBQAHgCAFgGQAFgGAEgKQADgKAAgQQAAgZgKgLQgKgKgQAAIgNAAg");
	this.shape_7.setTransform(20.025,37.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,189.4,75.3), null);


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
	this.shape.graphics.f("#000000").s().p("AiqEtQgdAggyASQguAQg2AAQgtAAgngQQglgPgagcQg7A8hxgDQhHgCgpgnQgogmgBg+QgChTBBikQA2iHAwhOQAyhSBdAAQBAAAAbAdQANANAFAQQADAMABAaQAmg8BDgXQAxgRBOAAQAwAAAnARQAlAQARAcQBGg9BvAAQB1AAA0A7QANAOAIASIAAgBQBLhYB+AAQBvAAAyBBQAqA1gFBXQgEBNghBgQg0Ccg/BFQhNBUh6AAQhAAAgtgaQgzgcgVg4QgoAzg5AdQg7AehCAAIgEAAQhlAAg2hCgAgFjPQgvAugvBtQgWA0gQA6QgTBHAAAsQAABEAnAkQAmAkBDAAQBeAABEhEQBBhAAVhlQAJgugKgZQgQgphCADQgqACgVAMQgYAPgMAkQgKAiAaAOQANAHAPAAQgJApgXAZQgXAYgZAAQgnAAAIgzQAHgtAghYQAhhXAVgcQAXghAeAAQAVAAADALQADAHgHATQgNAmAcAOQASAJAYgCQBQgGAMhdQAHg6gsgdQgmgahHAAQhkAAg9A8gAGJjMQgnAsgqBuQgXA5gQA8QgTBIABAxQAABEAtAfQAiAZA7ABQA7AAAqgVQA5gdAqhLQAcgzAXg+QAYhAAMg3QAShYgNgvQgWhWhvgBIgEAAQhiAAg5A+gAkkj3Qg1AcgpBRQgoBPgbBWQgfBjAABCQAAA5ApAhQAmAfA6AAQA+AAAsgYQA4geAAg6QAAgbgTgOQgSgNgigBQgogBgxANQAMgyAOgkQBAAMAlgLQAsgOAPgyQAXhQiLAUQALgcANgYIAKgTQAcACAugDQAqgCAagTQAggWAAgpQAAgegggRQgcgPgmAAQhVAAgqAWgAo5j5QgXANgSAeQguBKg0CEQg8CZACBIQABArAeAWQAaAUArABQBBACApgWQAzgbAGg+QADgbgXgOQgcgRg9ALIAlhPQA1htAXg1QAohdABgkQABgxg3AAQghAAgYAPgAGQCuQgGgIgBgMQAAgeAphyQAohwAUgaQAIgMALgFQAIgEANAAQAYABgBAdQgBAgglBoQgkBkgTAhQgKAQgIAHQgLAJgOAAQgNAAgIgIgALtkkQgMgNAAgSQAAgSAMgMQANgNASAAQASAAAMAMQANANAAASIAAAAQAAASgNANQgMAMgSAAQgSAAgNgMgALzlbQgKAKAAAOQAAAPAKAKQALAKAOAAQAOAAAKgKQALgLgBgOQABgOgLgLQgKgKgOAAQgPABgKAKgAMXksIgEgIQgDgFgDgDQgCgDgFAAIgCAAIAAATIgJAAIAAgtIAWAAQAOAAAAAMQAAALgMACIAAAAQAFABAFAKIAFAJgAMElGIAJAAQAIAAAAgGQAAgGgJAAIgIAAg");
	this.shape.setTransform(66.8071,61.6711,0.7111,0.7111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuDOEIAA8HIcHAAIgBcHgAtrNsIbWAAIAA7WI7WAAg");
	this.shape_1.setTransform(63.9995,63.9995,0.7111,0.7111);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3000B").s().p("At3N4IAA7vIbvAAIAAbvgAAaF6QB7AABdhQQAeAnA0AUQAyAUBBAAQBvAABPhBQA/g1A1hsQAUgqAXhEQAahNAGgtIAAAAQAKhPgEglQgEg/gkgxQg/hYiKAAQh0AAhNBAQhChBiEAAQhlAAhMAtQgbgXghgLQglgNgxAAQg/AAgqAJQhAANgsAlQgMgagbgNQghgQg6AAQg6AAgwAbQguAbgfAzQg2BXg2CJQhCCoADBeQACBPA2AyQA1AyBXACQBpACBEgtQA+AtBXAAQBpAABIgzQBBAzBcAAg");
	this.shape_2.setTransform(63.9995,64.0173,0.7111,0.7111);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFED00").s().p("At3N4IAA7vIbvAAIAAbvgAh5EEQA0A/BggBQA/AAA4gcQA3gbAngyIAPgSIAHAVQAWA7A4AZQAnARA0AAQB2AABJhQQA9hDAyiZQAhhgAEhKQAEhbgvgyQgvgyhgAAQh5AAhGBUIgMAOIgIgRQgIgPgLgNQgxg3hwAAQgzAAgtAPQgsAOghAcIgLAKIgIgNQgOgZgkgPQgjgPgtAAQhMAAgvAQQg/AWgjA5IgVAiIgCgpQgBgYgDgLQgEgNgKgLQgZgZg5AAQhXAAguBNQgwBMg1CGQhAChACBRQABA7AlAjQAlAiBBABQBtADA3g3IAJgKIAJAKQAYAaAjAOQAkAOArAAQA2AAAsgQQAtgQAbgeIAJgKg");
	this.shape_3.setTransform(63.9995,64.0173,0.7111,0.7111);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("At3N4IAA7vIbvAAIAAbvg");
	this.shape_4.setTransform(63.9995,64.035,0.7111,0.7111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,128,128), null);


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
	this.shape.graphics.f("#E3000B").s().p("AgUAuIAAhbIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAWIAXAAIAAARg");
	this.shape.setTransform(12.6,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3000B").s().p("AAHAuIgKgkIgDAAIAAAkIgSAAIAAhbIAWAAIAJACQAFABADADQAEAEABAFQACAFAAAHQAAAKgCAFQgDAFgFAEIANAogAgGgGIADAAIADAAIACgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgGQAAgFgCgCQgDgDgDAAIgDAAg");
	this.shape_1.setTransform(7.125,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3000B").s().p("AgWAXIAAgtQAAgMAGgGQAGgGAKAAQAMAAAGAGQAFAGAAAMIAAAtQAAAMgGAGQgGAFgLABQgWgBAAgXgAgDgcQAAABAAAAQgBAAAAABQAAABAAAAQAAABAAABIAAAvQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIADABIAEgBQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAAgvQAAgBAAgBQAAAAAAgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_2.setTransform(1.025,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3000B").s().p("AAOAuIAAgrIAAAAIgFAOIgDALIgLAAIgEgMIgEgNIgBAAIAAArIgRAAIAAhbIAQAAIAJAYIAGASIAAAAIAHgSIAJgYIAQAAIAABbg");
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
	this.shape.graphics.f("#E3000B").s().p("AAKAuIgKgbIgGgSIgBAAIAAAtIgRAAIAAhaIAPAAIAKAaIAGARIABAAIAAgrIARAAIAABag");
	this.shape.setTransform(32.375,4.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3000B").s().p("AAHAuIgKgkIgDAAIAAAkIgSAAIAAhaIAWAAIAJAAQAFACADADQAEADABAFQACAGAAAIQAAAJgCAGQgDAFgFADIANAogAgGgGIADAAIADgBIACgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgFQAAgGgCgDQgDgBgDAAIgDAAg");
	this.shape_1.setTransform(26.475,4.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3000B").s().p("AAKAuIgDgTIgMAAIgDATIgTAAIARhaIAVAAIARBagAgBgCIgCANIAHAAIgBgNIgCgTIgBAAg");
	this.shape_2.setTransform(20.325,4.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3000B").s().p("AgUAuIAAhaIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAUIAXAAIAAASg");
	this.shape_3.setTransform(15,4.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3000B").s().p("AgUAuIAAhaIASAAIAABIIAXAAIAAASg");
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


(lib.Symbol19copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAZCHIgXiBIgCAAIgYCBIg6AAIgnkMIA8AAIAPCUIACAAIAYiUIArAAIAYCXIADAAIAMiXIA8AAIgnEMg");
	this.shape.setTransform(194.375,66.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhEBFIAAiKQAAgiASgRQATgQAfAAQAjAAARAQQARARAAAiIAACKQAAAigSARQgRARgiAAQhEAAAAhEgAgKhUQgFAFAAAJIAACNQAAAJAFAEQAEADAGAAQAGAAAFgDQAEgEAAgJIAAiNQAAgJgEgFQgFgDgGAAQgGAAgEADg");
	this.shape_1.setTransform(173.275,66.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeCHIgfhPIgTgzIgCAAIAACCIg0AAIAAkMIAuAAIAfBNIASAyIACAAIAAh/IA0AAIAAEMg");
	this.shape_2.setTransform(155.425,66.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZCHIAAhuIg1ieIA4AAIAOA1IAIAtIACAAIAKgtIALg1IA4AAIg0CeIAABug");
	this.shape_3.setTransform(129.7,66.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZCHIAAjbIgqAAIAAgxICHAAIAAAxIgqAAIAADbg");
	this.shape_4.setTransform(114.725,66.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZCHIAAkMIAzAAIAAEMg");
	this.shape_5.setTransform(103.025,66.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggCHIg0kMIA6AAIARBrIAJBLIACAAIAJhKIAQhsIA5AAIgzEMg");
	this.shape_6.setTransform(89.75,66.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZCHIAAkMIAzAAIAAEMg");
	this.shape_7.setTransform(76.375,66.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZCHIAAjbIgqAAIAAgxICHAAIAAAxIgqAAIAADbg");
	this.shape_8.setTransform(64.675,66.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAcCHIgIg1IgmAAIgJA1Ig3AAIAzkMIA/AAIAzEMgAgGgJIgFApIAXAAIgFgpIgGg3IgBAAg");
	this.shape_9.setTransform(50.325,66.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag9CHIAAkMIB7AAIAAAxIhGAAIAAA6IA9AAIAAAxIg9AAIAAA9IBGAAIAAAzg");
	this.shape_10.setTransform(34.525,66.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAVCHIgghqIgKAAIAABqIg1AAIAAkMIBAAAQAQAAAOADQAOAFAKAJQAKAJAGAPQAFAQABAWQgBAcgHARQgHAQgPALIAnB1gAgVgUIAIAAQAHAAAEgCQAFgBADgDQAEgFADgGQACgGAAgKQAAgQgIgIQgHgGgLgBIgKAAg");
	this.shape_11.setTransform(18.55,66.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag0B4QgQgRAAgiIAAiHQAAgfARgUQARgTAjAAQAjAAARARQAQARAAAbIAAAFIAAADIgzAJQAAgMgFgIQgFgIgIAAQgEAAgEACIgFAGQgCACAAAFIgBAFIAACJQAAAGACAFQADAEAKAAQAHAAAFgGQAFgIAAgOIA0AIQAAAfgRAVQgSATghAAQgjAAgRgRg");
	this.shape_12.setTransform(1.275,66.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAUCHIgehqIgKAAIAABqIg1AAIAAkNIBAAAQAPAAAOAEQAOAFAKAJQALAKAFAPQAGAPgBAWQAAAbgHASQgIAQgOALIAmB1gAgUgUIAHAAQAGAAAGgCQADgBAFgDQAEgEACgHQACgGAAgKQAAgQgHgIQgIgGgLAAIgJAAg");
	this.shape_13.setTransform(188.5,27.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhEBEIAAjLIA1AAIAADMQAAAJAEAEQAFADAGAAQAGAAAFgDQAEgEAAgJIAAjMIA2AAIAADLQAAAigSARQgRARgiAAQhEAAAAhEg");
	this.shape_14.setTransform(170.475,27.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhEBFIAAiKQAAgiASgQQATgRAfAAQAjAAARARQARAQAAAiIAACKQAAAjgSAQQgRARgiAAQhEAAAAhEgAgKhTQgFADAAAKIAACNQAAAKAFADQAEAEAGAAQAGAAAFgEQAEgDAAgKIAAiNQAAgKgEgDQgFgEgGAAQgGAAgEAEg");
	this.shape_15.setTransform(153.175,27.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZCHIAAhuIg1ifIA4AAIAOA2IAIAtIACAAIAJgtIAMg2IA4AAIg0CfIAABug");
	this.shape_16.setTransform(136.55,27.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AARCHIAAhwIggAAIAABwIg1AAIAAkNIA1AAIAABrIAgAAIAAhrIA0AAIAAENg");
	this.shape_17.setTransform(111.225,27.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfCEQgNgGgJgJQgIgKgEgNQgEgMAAgPIA1gKQABAPADAIQAEAHAJAAQAGAAADgDQADgCACgEIADgLIAAgMQAAgHgBgGQgBgFgDgEQgDgEgFgDIgLgGQgUgIgMgJQgMgIgHgKQgGgKgCgKQgCgMAAgNQAAgQAEgOQAEgOAIgLQAIgKAOgGQANgFASAAQAUAAANAGQANAGAIAKQAIAKADAMQADAMAAALIg0AMIAAgLIgDgJIgFgGQgEgDgFAAQgFAAgDADQgDACgCAEQgCADAAAFIgBAJIABAJQABAFADADQADAEAGAFIAQAHQASAIALAIQALAIAGAJQAFAJACAMQACAMAAAQQAAASgDAQQgEAPgIALQgIAKgNAGQgOAGgUAAQgSAAgNgFg");
	this.shape_18.setTransform(94.225,27.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAcCHIgIg1IgmAAIgJA1Ig3AAIAzkNIA/AAIAzENgAgGgJIgFAqIAXAAIgFgqIgGg3IgBAAg");
	this.shape_19.setTransform(77.125,27.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag9CHIAAkNIB7AAIAAAzIhGAAIAAA5IA9AAIAAAxIg9AAIAAA9IBGAAIAAAzg");
	this.shape_20.setTransform(61.375,27.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag9CHIAAkNIA1AAIAADaIBGAAIAAAzg");
	this.shape_21.setTransform(46.775,27.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAeCHIgfhPIgTgzIgCAAIAACCIg0AAIAAkNIAuAAIAfBPIASAwIACAAIAAh/IA0AAIAAENg");
	this.shape_22.setTransform(29.425,27.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhEBEIAAjLIA1AAIAADMQAAAJAEAEQAFADAGAAQAGAAAFgDQAEgEAAgJIAAjMIA2AAIAADLQAAAigSARQgRARgiAAQhEAAAAhEg");
	this.shape_23.setTransform(11.475,27.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19copy, new cjs.Rectangle(-12.8,0.3,224.9,197.39999999999998), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvBsQgPgPAAgfIAAh5QAAgdARgRQAQgSAeAAQAQAAAMAFQAMAFAIAIQAIAIADAMQADAMgBANIgtAIQgBgLgEgHQgEgHgIAAQgEAAgDACQgDACgBACQgCADgBAEIAAAFIAAB7QAAAFACAEQACAFAKAAQAFAAAFgEQAFgDAAgGIAAgmIgQAAIAAgoIA/AAIAABMQAAAdgQAQQgQAQgeAAQggAAgPgQg");
	this.shape.setTransform(215.4125,64.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbB6IgchHIgQguIgDAAIAAB1IgvAAIAAjyIArAAIAbBGIARAsIABAAIAAhyIAuAAIAADyg");
	this.shape_1.setTransform(199,64.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXB6IAAjyIAvAAIAADyg");
	this.shape_2.setTransform(186.325,64.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUB6IghheIgIAXIAABHIgwAAIAAjyIAwAAIAABLIACAAIAhhLIAyAAIgyBkIA4COg");
	this.shape_3.setTransform(175.225,64.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvBsQgPgPAAgfIAAh5QAAgdAQgRQAPgSAgAAQAfAAAQAQQAPAPAAAZIAAAEIgBADIgtAIQgBgLgEgHQgEgHgIAAQgEAAgDACQgDACgBACQgCADgBAEIgBAFIAAB7QAAAFADAEQACAFAJAAQAGAAAFgGQAEgHAAgMIAwAHQgBAdgPARQgQASgeAAQggAAgPgQg");
	this.shape_4.setTransform(159.425,64.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXB6IAAjyIAvAAIAADyg");
	this.shape_5.setTransform(147.325,64.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3B6IAAjyIAwAAIAADEIA/AAIAAAug");
	this.shape_6.setTransform(137.275,64.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBsQgPgPAAgfIAAh5QAAgdAQgRQAPgSAgAAQAfAAAQAQQAPAPAAAZIAAAEIgBADIgtAIQgBgLgEgHQgEgHgIAAQgEAAgDACQgDACgBACQgCADgBAEIgBAFIAAB7QAAAFADAEQACAFAJAAQAGAAAFgGQAEgHAAgMIAwAHQgBAdgPARQgQASgeAAQggAAgPgQg");
	this.shape_7.setTransform(122.875,64.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvBsQgPgPAAgfIAAh5QAAgdAQgRQAPgSAgAAQAfAAAQAQQAPAPAAAZIAAAEIgBADIgtAIQgBgLgEgHQgEgHgIAAQgEAAgDACQgDACgBACQgCADgBAEIgBAFIAAB7QAAAFADAEQACAFAJAAQAGAAAFgGQAEgHAAgMIAwAHQgBAdgPARQgQASgeAAQggAAgPgQg");
	this.shape_8.setTransform(100.425,64.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXB6IAAjyIAvAAIAADyg");
	this.shape_9.setTransform(88.325,64.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXB6IAAjFIglAAIAAgtIB5AAIAAAtIglAAIAADFg");
	this.shape_10.setTransform(77.8,64.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag9A+IAAh8QAAgfAQgPQARgPAcAAQAgAAAPAPQAPAPAAAfIAAB8QAAAggQAOQgQAPgeABQg9AAAAg+gAgJhLQgFADAAAJIAAB/QAAAIAFAEQAEADAFAAQAGAAAEgDQAEgEAAgIIAAh/QAAgJgEgDQgEgDgGgBQgFABgEADg");
	this.shape_11.setTransform(63.725,64.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZB6IgHgwIgjAAIgHAwIgyAAIAujyIA5AAIAuDygAgFgIIgFAlIAVAAIgEglIgGgxIgBAAg");
	this.shape_12.setTransform(48.075,64.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPB6IAAhlIgcAAIAABlIgxAAIAAjyIAxAAIAABgIAcAAIAAhgIAvAAIAADyg");
	this.shape_13.setTransform(32.2,64.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBsQgPgPAAgfIAAh5QAAgdAQgRQAPgSAgAAQAfAAAQAQQAPAPAAAZIAAAEIgBADIgtAIQgBgLgEgHQgEgHgIAAQgEAAgDACQgDACgBACQgCADgBAEIgBAFIAAB7QAAAFADAEQACAFAJAAQAGAAAFgGQAEgHAAgMIAwAHQgBAdgPARQgQASgeAAQggAAgPgQg");
	this.shape_14.setTransform(17.125,64.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAbB6IgchHIgRguIgBAAIAAB1IgvAAIAAjyIApAAIAcBGIAQAsIACAAIAAhyIAvAAIAADyg");
	this.shape_15.setTransform(-6.6,64.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXB6IAAjyIAvAAIAADyg");
	this.shape_16.setTransform(-19.275,64.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXB5IAAjEIglAAIAAgtIB5AAIAAAtIgmAAIAADEg");
	this.shape_17.setTransform(195.65,29.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvBsQgPgPAAgfIAAh4QAAgdAQgSQAPgRAgAAQAfAAAQAPQAPAQAAAYIAAADIgBAEIgtAIQgBgLgEgHQgEgHgIAAQgEAAgDACQgDABgBAEQgCACgBADIgBAHIAAB6QAAAFADAFQACAEAJAAQAGAAAFgGQAEgGAAgNIAwAGQgBAdgPASQgQARgeAAQggAAgPgPg");
	this.shape_18.setTransform(182.325,29.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag3B5IAAjxIBvAAIAAAtIg/AAIAAA0IA3AAIAAAsIg3AAIAAA3IA/AAIAAAtg");
	this.shape_19.setTransform(168.125,29.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag3B5IAAjxIBvAAIAAAtIg/AAIAAA0IA3AAIAAAsIg3AAIAABkg");
	this.shape_20.setTransform(154.375,29.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AATB5IgcheIgJAAIAABeIgwAAIAAjxIA6AAQAOAAAMADQANAEAJAJQAJAIAFAOQAFAOAAATQAAAagHAPQgGAOgOAKIAjBpgAgSgSIAHAAIAKgBQADgBAEgDQADgEADgGQACgGAAgJQAAgOgHgGQgHgHgKAAIgIAAg");
	this.shape_21.setTransform(139.925,29.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag3B5IAAjxIBvAAIAAAtIg/AAIAAA0IA3AAIAAAsIg3AAIAAA3IA/AAIAAAtg");
	this.shape_22.setTransform(125.075,29.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag+B5IAAjxIA6AAQAOAAANADQAMAEAJAJQAJAIAFAOQAFAPAAAVQAAAmgQAUQgQAUgiAAIgLAAIAABZgAgOgMIAIAAQAFAAADgBQAEgBAEgFQADgDACgHQACgGAAgLQAAgQgGgGQgHgHgJAAIgJAAg");
	this.shape_23.setTransform(110.875,29.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag3B5IAAjxIBvAAIAAAtIg/AAIAAA0IA3AAIAAAsIg3AAIAAA3IA/AAIAAAtg");
	this.shape_24.setTransform(88.875,29.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATB5IgcheIgJAAIAABeIgwAAIAAjxIA6AAQAOAAAMADQANAEAJAJQAJAIAFAOQAFAOAAATQAAAagHAPQgGAOgOAKIAjBpgAgSgSIAHAAIAKgBQADgBAEgDQADgEADgGQACgGAAgJQAAgOgHgGQgHgHgKAAIgIAAg");
	this.shape_25.setTransform(74.425,29.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAZB5IgHgvIgjAAIgHAvIgyAAIAujxIA5AAIAuDxgAgFgJIgFAnIAVAAIgEgnIgGgxIgBAAg");
	this.shape_26.setTransform(58.075,29.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag9A9IAAi2IAwAAIAAC3QgBAIAFAEQAEADAFAAQAGAAAEgDQAEgEAAgIIAAi3IAwAAIAAC2QAAAfgQAPQgQAPgeAAQg9AAAAg9g");
	this.shape_27.setTransform(34.9,29.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7QAAggAQgPQARgOAcAAQAgAAAPAOQAPAPAAAgIAAB7QAAAfgQAQQgQAPgegBQg9AAAAg9gAgJhLQgFAEAAAHIAACAQAAAJAFADQAEADAFAAQAGAAAEgDQAEgDAAgJIAAiAQAAgHgEgEQgEgEgGABQgFgBgEAEg");
	this.shape_28.setTransform(19.275,29.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXB5IAAhiIgviPIAyAAIAMAwIAIApIACAAIAIgqIALgvIAyAAIgvCPIAABig");
	this.shape_29.setTransform(4.325,29.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-28.4,4.8,256,192.89999999999998), null);


(lib.Symbol13copy4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#33CC33").s().p("AANBeIHMj6IAAFTInMD7gAnYC3IAAlTIHMD6IAAFUgAnKiyIBagxIAAAfQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAhGIAAgDQAAgPgKgNQgKgNgSgKIgRgHIBDglIAAAvQAAAPALAOQAJANASAJQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIQASgJAKgNQAKgOAAgPIAAguIBCAkIgRAHQgSAKgKANQgKANAAAPIAABJQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAgfIBaAxInLD6gAgrjAQgUAFgRAIQgRAKgKANQgLANAAAPIABACIgBBHQAAAPALAOQAJANASAJQARAHAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgHQASgJAKgNQAKgOAAgPIAAhJQAAgPgKgNQgKgNgSgKQgQgIgVgFQgVgFgXAAQgXAAgVAFgAglgQQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAglhZQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgADUicQgSgEgNgHQgMgGgGgIQgHgHAAgIIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAVgFQAVgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkficQgSgEgNgHQgMgGgGgIQgGgHAAgIIgBAAIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgADUjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkfjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAglkWQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAgllfQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEg");
	this.shape.setTransform(49.875,45.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCHQIAAAAIgBAAIAAgBIgBAAIgBAAIAAAAIgBgBInlkIIgFgFQgCgDAAgEIAAlwQAAgEACgDQACgDAEgCIB6hDIAAgMQAAgPAKgOQAKgNASgJQAQgIAVgFQAVgFAXAAQAOAAANACIBpg5QAAgPALgMQAJgMARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQARAJAKAMQAKANABAOIBnA5QANgCAOAAQAXAAAVAFQAVAFAQAIQASAJAKANQAKAOAAAPIAAACIAAAKIB6BDQAEACACADQACADAAAEIAAFwQAAAEgCADIgFAFInlEIIAAAAIgBABIgBAAIgBAAIAAABIgBAAIAAAAgAANBZIAAFVIHMj7IAAlUgAnYCzIHMD7IAAlVInMj6gAnKi2IHKD5IHLj5IhagxIAAAfQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAhJQAAgPAKgOQAKgNASgJIARgHIhCgkIAAAuQAAAPgKANQgKANgSAKQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIQgSgKgJgNQgLgNAAgPIAAgvIhDAlIARAHQASAJAKANQAKAOAAAPIAAACIAABHQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAgfgACcjIQAAAHAHAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgVAFQgVAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgAlXjIIABAAQAAAHAGAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgADUk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAkfk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAhclBQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglmyQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEgAgrAEQgUgEgRgIQgSgKgJgNQgLgNAAgPIABhHIgBgCQAAgQALgNQAKgNARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQASAJAKANQAKANAAAQIAABJQAAAPgKANQgKANgSAKQgQAIgVAEQgVAEgXAAQgXAAgVgEgAhcg7QAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglisQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEg");
	this.shape_1.setTransform(49.875,46.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13copy4, new cjs.Rectangle(0,0,99.8,92.9), null);


(lib.Symbol13copy3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF6699").s().p("AANBeIHMj6IAAFTInMD7gAnYC3IAAlTIHMD6IAAFUgAnKiyIBagxIAAAfQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAhGIAAgDQAAgPgKgNQgKgNgSgKIgRgHIBDglIAAAvQAAAPALAOQAJANASAJQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIQASgJAKgNQAKgOAAgPIAAguIBCAkIgRAHQgSAKgKANQgKANAAAPIAABJQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAgfIBaAxInLD6gAgrjAQgUAFgRAIQgRAKgKANQgLANAAAPIABACIgBBHQAAAPALAOQAJANASAJQARAHAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgHQASgJAKgNQAKgOAAgPIAAhJQAAgPgKgNQgKgNgSgKQgQgIgVgFQgVgFgXAAQgXAAgVAFgAglgQQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAglhZQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgADUicQgSgEgNgHQgMgGgGgIQgHgHAAgIIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAVgFQAVgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkficQgSgEgNgHQgMgGgGgIQgGgHAAgIIgBAAIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgADUjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkfjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAglkWQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAgllfQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEg");
	this.shape.setTransform(49.875,45.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCHQIAAAAIgBAAIAAgBIgBAAIgBAAIAAAAIgBgBInlkIIgFgFQgCgDAAgEIAAlwQAAgEACgDQACgDAEgCIB6hDIAAgMQAAgPAKgOQAKgNASgJQAQgIAVgFQAVgFAXAAQAOAAANACIBpg5QAAgPALgMQAJgMARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQARAJAKAMQAKANABAOIBnA5QANgCAOAAQAXAAAVAFQAVAFAQAIQASAJAKANQAKAOAAAPIAAACIAAAKIB6BDQAEACACADQACADAAAEIAAFwQAAAEgCADIgFAFInlEIIAAAAIgBABIgBAAIgBAAIAAABIgBAAIAAAAgAANBZIAAFVIHMj7IAAlUgAnYCzIHMD7IAAlVInMj6gAnKi2IHKD5IHLj5IhagxIAAAfQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAhJQAAgPAKgOQAKgNASgJIARgHIhCgkIAAAuQAAAPgKANQgKANgSAKQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIQgSgKgJgNQgLgNAAgPIAAgvIhDAlIARAHQASAJAKANQAKAOAAAPIAAACIAABHQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAgfgACcjIQAAAHAHAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgVAFQgVAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgAlXjIIABAAQAAAHAGAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgADUk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAkfk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAhclBQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglmyQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEgAgrAEQgUgEgRgIQgSgKgJgNQgLgNAAgPIABhHIgBgCQAAgQALgNQAKgNARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQASAJAKANQAKANAAAQIAABJQAAAPgKANQgKANgSAKQgQAIgVAEQgVAEgXAAQgXAAgVgEgAhcg7QAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglisQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEg");
	this.shape_1.setTransform(49.875,46.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13copy3, new cjs.Rectangle(0,0,99.8,92.9), null);


(lib.Symbol13copy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00CCCC").s().p("AANBeIHMj6IAAFTInMD7gAnYC3IAAlTIHMD6IAAFUgAnKiyIBagxIAAAfQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAhGIAAgDQAAgPgKgNQgKgNgSgKIgRgHIBDglIAAAvQAAAPALAOQAJANASAJQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIQASgJAKgNQAKgOAAgPIAAguIBCAkIgRAHQgSAKgKANQgKANAAAPIAABJQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAgfIBaAxInLD6gAgrjAQgUAFgRAIQgRAKgKANQgLANAAAPIABACIgBBHQAAAPALAOQAJANASAJQARAHAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgHQASgJAKgNQAKgOAAgPIAAhJQAAgPgKgNQgKgNgSgKQgQgIgVgFQgVgFgXAAQgXAAgVAFgAglgQQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAglhZQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgADUicQgSgEgNgHQgMgGgGgIQgHgHAAgIIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAVgFQAVgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkficQgSgEgNgHQgMgGgGgIQgGgHAAgIIgBAAIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgADUjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkfjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAglkWQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAgllfQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEg");
	this.shape.setTransform(49.875,45.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCHQIAAAAIgBAAIAAgBIgBAAIgBAAIAAAAIgBgBInlkIIgFgFQgCgDAAgEIAAlwQAAgEACgDQACgDAEgCIB6hDIAAgMQAAgPAKgOQAKgNASgJQAQgIAVgFQAVgFAXAAQAOAAANACIBpg5QAAgPALgMQAJgMARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQARAJAKAMQAKANABAOIBnA5QANgCAOAAQAXAAAVAFQAVAFAQAIQASAJAKANQAKAOAAAPIAAACIAAAKIB6BDQAEACACADQACADAAAEIAAFwQAAAEgCADIgFAFInlEIIAAAAIgBABIgBAAIgBAAIAAABIgBAAIAAAAgAANBZIAAFVIHMj7IAAlUgAnYCzIHMD7IAAlVInMj6gAnKi2IHKD5IHLj5IhagxIAAAfQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAhJQAAgPAKgOQAKgNASgJIARgHIhCgkIAAAuQAAAPgKANQgKANgSAKQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIQgSgKgJgNQgLgNAAgPIAAgvIhDAlIARAHQASAJAKANQAKAOAAAPIAAACIAABHQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAgfgACcjIQAAAHAHAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgVAFQgVAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgAlXjIIABAAQAAAHAGAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgADUk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAkfk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAhclBQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglmyQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEgAgrAEQgUgEgRgIQgSgKgJgNQgLgNAAgPIABhHIgBgCQAAgQALgNQAKgNARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQASAJAKANQAKANAAAQIAABJQAAAPgKANQgKANgSAKQgQAIgVAEQgVAEgXAAQgXAAgVgEgAhcg7QAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglisQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEg");
	this.shape_1.setTransform(49.875,46.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13copy2, new cjs.Rectangle(0,0,99.8,92.9), null);


(lib.Symbol11copy5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFED00").s().p("AANBeIHMj6IAAFTInMD7gAnYC3IAAlTIHMD6IAAFUgAnKiyIBagxIAAAfQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAhGIAAgDQAAgPgKgNQgKgNgSgKIgRgHIBDglIAAAvQAAAPALAOQAJANASAJQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIQASgJAKgNQAKgOAAgPIAAguIBCAkIgRAHQgSAKgKANQgKANAAAPIAABJQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAgfIBaAxInLD6gAgrjAQgUAFgRAIQgRAKgKANQgLANAAAPIABACIgBBHQAAAPALAOQAJANASAJQARAHAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgHQASgJAKgNQAKgOAAgPIAAhJQAAgPgKgNQgKgNgSgKQgQgIgVgFQgVgFgXAAQgXAAgVAFgAglgQQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAglhZQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgADUicQgSgEgNgHQgMgGgGgIQgHgHAAgIIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAVgFQAVgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkficQgSgEgNgHQgMgGgGgIQgGgHAAgIIgBAAIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgADUjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkfjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAglkWQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAgllfQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEg");
	this.shape.setTransform(49.875,45.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCHQIAAAAIgBAAIAAgBIgBAAIgBAAIAAAAIgBgBInlkIIgFgFQgCgDAAgEIAAlwQAAgEACgDQACgDAEgCIB6hDIAAgMQAAgPAKgOQAKgNASgJQAQgIAVgFQAVgFAXAAQAOAAANACIBpg5QAAgPALgMQAJgMARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQARAJAKAMQAKANABAOIBnA5QANgCAOAAQAXAAAVAFQAVAFAQAIQASAJAKANQAKAOAAAPIAAACIAAAKIB6BDQAEACACADQACADAAAEIAAFwQAAAEgCADIgFAFInlEIIAAAAIgBABIgBAAIgBAAIAAABIgBAAIAAAAgAANBZIAAFVIHMj7IAAlUgAnYCzIHMD7IAAlVInMj6gAnKi2IHKD5IHLj5IhagxIAAAfQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAhJQAAgPAKgOQAKgNASgJIARgHIhCgkIAAAuQAAAPgKANQgKANgSAKQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIQgSgKgJgNQgLgNAAgPIAAgvIhDAlIARAHQASAJAKANQAKAOAAAPIAAACIAABHQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAgfgACcjIQAAAHAHAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgVAFQgVAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgAlXjIIABAAQAAAHAGAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgADUk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAkfk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAhclBQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglmyQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEgAgrAEQgUgEgRgIQgSgKgJgNQgLgNAAgPIABhHIgBgCQAAgQALgNQAKgNARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQASAJAKANQAKANAAAQIAABJQAAAPgKANQgKANgSAKQgQAIgVAEQgVAEgXAAQgXAAgVgEgAhcg7QAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglisQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEg");
	this.shape_1.setTransform(49.875,46.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11copy5, new cjs.Rectangle(0,0,99.8,92.9), null);


(lib.Symbol11copy4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFED00").s().p("AANBeIHMj6IAAFTInMD7gAnYC3IAAlTIHMD6IAAFUgAnKiyIBagxIAAAfQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAhGIAAgDQAAgPgKgNQgKgNgSgKIgRgHIBDglIAAAvQAAAPALAOQAJANASAJQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIQASgJAKgNQAKgOAAgPIAAguIBCAkIgRAHQgSAKgKANQgKANAAAPIAABJQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAgfIBaAxInLD6gAgrjAQgUAFgRAIQgRAKgKANQgLANAAAPIABACIgBBHQAAAPALAOQAJANASAJQARAHAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgHQASgJAKgNQAKgOAAgPIAAhJQAAgPgKgNQgKgNgSgKQgQgIgVgFQgVgFgXAAQgXAAgVAFgAglgQQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAglhZQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgADUicQgSgEgNgHQgMgGgGgIQgHgHAAgIIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAVgFQAVgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkficQgSgEgNgHQgMgGgGgIQgGgHAAgIIgBAAIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgADUjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkfjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAglkWQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAgllfQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEg");
	this.shape.setTransform(49.875,45.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCHQIAAAAIgBAAIAAgBIgBAAIgBAAIAAAAIgBgBInlkIIgFgFQgCgDAAgEIAAlwQAAgEACgDQACgDAEgCIB6hDIAAgMQAAgPAKgOQAKgNASgJQAQgIAVgFQAVgFAXAAQAOAAANACIBpg5QAAgPALgMQAJgMARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQARAJAKAMQAKANABAOIBnA5QANgCAOAAQAXAAAVAFQAVAFAQAIQASAJAKANQAKAOAAAPIAAACIAAAKIB6BDQAEACACADQACADAAAEIAAFwQAAAEgCADIgFAFInlEIIAAAAIgBABIgBAAIgBAAIAAABIgBAAIAAAAgAANBZIAAFVIHMj7IAAlUgAnYCzIHMD7IAAlVInMj6gAnKi2IHKD5IHLj5IhagxIAAAfQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAhJQAAgPAKgOQAKgNASgJIARgHIhCgkIAAAuQAAAPgKANQgKANgSAKQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIQgSgKgJgNQgLgNAAgPIAAgvIhDAlIARAHQASAJAKANQAKAOAAAPIAAACIAABHQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAgfgACcjIQAAAHAHAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgVAFQgVAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgAlXjIIABAAQAAAHAGAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgADUk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAkfk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAhclBQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglmyQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEgAgrAEQgUgEgRgIQgSgKgJgNQgLgNAAgPIABhHIgBgCQAAgQALgNQAKgNARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQASAJAKANQAKANAAAQIAABJQAAAPgKANQgKANgSAKQgQAIgVAEQgVAEgXAAQgXAAgVgEgAhcg7QAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglisQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEg");
	this.shape_1.setTransform(49.875,46.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11copy4, new cjs.Rectangle(0,0,99.8,92.9), null);


(lib.Symbol11copy3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFED00").s().p("AANBeIHMj6IAAFTInMD7gAnYC3IAAlTIHMD6IAAFUgAnKiyIBagxIAAAfQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAhGIAAgDQAAgPgKgNQgKgNgSgKIgRgHIBDglIAAAvQAAAPALAOQAJANASAJQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIQASgJAKgNQAKgOAAgPIAAguIBCAkIgRAHQgSAKgKANQgKANAAAPIAABJQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAgfIBaAxInLD6gAgrjAQgUAFgRAIQgRAKgKANQgLANAAAPIABACIgBBHQAAAPALAOQAJANASAJQARAHAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgHQASgJAKgNQAKgOAAgPIAAhJQAAgPgKgNQgKgNgSgKQgQgIgVgFQgVgFgXAAQgXAAgVAFgAglgQQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAglhZQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgADUicQgSgEgNgHQgMgGgGgIQgHgHAAgIIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAVgFQAVgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkficQgSgEgNgHQgMgGgGgIQgGgHAAgIIgBAAIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgADUjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkfjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAglkWQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAgllfQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEg");
	this.shape.setTransform(49.875,45.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCHQIAAAAIgBAAIAAgBIgBAAIgBAAIAAAAIgBgBInlkIIgFgFQgCgDAAgEIAAlwQAAgEACgDQACgDAEgCIB6hDIAAgMQAAgPAKgOQAKgNASgJQAQgIAVgFQAVgFAXAAQAOAAANACIBpg5QAAgPALgMQAJgMARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQARAJAKAMQAKANABAOIBnA5QANgCAOAAQAXAAAVAFQAVAFAQAIQASAJAKANQAKAOAAAPIAAACIAAAKIB6BDQAEACACADQACADAAAEIAAFwQAAAEgCADIgFAFInlEIIAAAAIgBABIgBAAIgBAAIAAABIgBAAIAAAAgAANBZIAAFVIHMj7IAAlUgAnYCzIHMD7IAAlVInMj6gAnKi2IHKD5IHLj5IhagxIAAAfQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAhJQAAgPAKgOQAKgNASgJIARgHIhCgkIAAAuQAAAPgKANQgKANgSAKQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIQgSgKgJgNQgLgNAAgPIAAgvIhDAlIARAHQASAJAKANQAKAOAAAPIAAACIAABHQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAgfgACcjIQAAAHAHAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgVAFQgVAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgAlXjIIABAAQAAAHAGAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgADUk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAkfk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAhclBQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglmyQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEgAgrAEQgUgEgRgIQgSgKgJgNQgLgNAAgPIABhHIgBgCQAAgQALgNQAKgNARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQASAJAKANQAKANAAAQIAABJQAAAPgKANQgKANgSAKQgQAIgVAEQgVAEgXAAQgXAAgVgEgAhcg7QAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglisQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEg");
	this.shape_1.setTransform(49.875,46.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11copy3, new cjs.Rectangle(0,0,99.8,92.9), null);


(lib.Symbol11copy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AANBeIHMj6IAAFTInMD7gAnYC3IAAlTIHMD6IAAFUgAnKiyIBagxIAAAfQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAhGIAAgDQAAgPgKgNQgKgNgSgKIgRgHIBDglIAAAvQAAAPALAOQAJANASAJQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIQASgJAKgNQAKgOAAgPIAAguIBCAkIgRAHQgSAKgKANQgKANAAAPIAABJQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAgfIBaAxInLD6gAgrjAQgUAFgRAIQgRAKgKANQgLANAAAPIABACIgBBHQAAAPALAOQAJANASAJQARAHAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgHQASgJAKgNQAKgOAAgPIAAhJQAAgPgKgNQgKgNgSgKQgQgIgVgFQgVgFgXAAQgXAAgVAFgAglgQQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAglhZQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgADUicQgSgEgNgHQgMgGgGgIQgHgHAAgIIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAVgFQAVgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkficQgSgEgNgHQgMgGgGgIQgGgHAAgIIgBAAIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgADUjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkfjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAglkWQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAgllfQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEg");
	this.shape.setTransform(49.875,45.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCHQIAAAAIgBAAIAAgBIgBAAIgBAAIAAAAIgBgBInlkIIgFgFQgCgDAAgEIAAlwQAAgEACgDQACgDAEgCIB6hDIAAgMQAAgPAKgOQAKgNASgJQAQgIAVgFQAVgFAXAAQAOAAANACIBpg5QAAgPALgMQAJgMARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQARAJAKAMQAKANABAOIBnA5QANgCAOAAQAXAAAVAFQAVAFAQAIQASAJAKANQAKAOAAAPIAAACIAAAKIB6BDQAEACACADQACADAAAEIAAFwQAAAEgCADIgFAFInlEIIAAAAIgBABIgBAAIgBAAIAAABIgBAAIAAAAgAANBZIAAFVIHMj7IAAlUgAnYCzIHMD7IAAlVInMj6gAnKi2IHKD5IHLj5IhagxIAAAfQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAhJQAAgPAKgOQAKgNASgJIARgHIhCgkIAAAuQAAAPgKANQgKANgSAKQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIQgSgKgJgNQgLgNAAgPIAAgvIhDAlIARAHQASAJAKANQAKAOAAAPIAAACIAABHQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAgfgACcjIQAAAHAHAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgVAFQgVAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgAlXjIIABAAQAAAHAGAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgADUk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAkfk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAhclBQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglmyQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEgAgrAEQgUgEgRgIQgSgKgJgNQgLgNAAgPIABhHIgBgCQAAgQALgNQAKgNARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQASAJAKANQAKANAAAQIAABJQAAAPgKANQgKANgSAKQgQAIgVAEQgVAEgXAAQgXAAgVgEgAhcg7QAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglisQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEg");
	this.shape_1.setTransform(49.875,46.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11copy2, new cjs.Rectangle(0,0,99.8,92.9), null);


(lib.Symbol11copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFED00").s().p("AANBeIHMj6IAAFTInMD7gAnYC3IAAlTIHMD6IAAFUgAnKiyIBagxIAAAfQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAhGIAAgDQAAgPgKgNQgKgNgSgKIgRgHIBDglIAAAvQAAAPALAOQAJANASAJQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIQASgJAKgNQAKgOAAgPIAAguIBCAkIgRAHQgSAKgKANQgKANAAAPIAABJQAAAQAKANQAKANASAJQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJQASgJAKgNQAKgNAAgQIAAgfIBaAxInLD6gAgrjAQgUAFgRAIQgRAKgKANQgLANAAAPIABACIgBBHQAAAPALAOQAJANASAJQARAHAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgHQASgJAKgNQAKgOAAgPIAAhJQAAgPgKgNQgKgNgSgKQgQgIgVgFQgVgFgXAAQgXAAgVAFgAglgQQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAglhZQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgADUicQgSgEgNgHQgMgGgGgIQgHgHAAgIIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAVgFQAVgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkficQgSgEgNgHQgMgGgGgIQgGgHAAgIIgBAAIAAgdIANAHQAQAJAVAEQAVAFAXAAQAXAAAWgFQAUgEAQgJIANgHIAAAdQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgADUjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAkfjlQgSgEgNgHQgMgGgGgIQgGgHAAgIQAAgHAGgIQAGgHAMgGQANgHASgEQASgEAUAAQAUAAASAEQASAEANAHQAMAGAGAHQAHAIAAAHQAAAIgHAHQgGAIgMAGQgNAHgSAEQgSAEgUAAQgUAAgSgEgAglkWQgRgEgOgHQgLgGgGgHQgHgHAAgIIAAgeIAMAIQARAIAUAFQAVAFAXAAQAXAAAVgFQAVgFAQgIIAMgIIAAAeQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEgAgllfQgRgEgOgHQgLgGgGgHQgHgHAAgIQAAgIAHgHQAGgHALgGQAOgHARgEQASgEAUAAQAUAAASAEQARAEAOAHQALAGAHAHQAGAHAAAIQAAAIgGAHQgHAHgLAGQgOAHgRAEQgSAEgUAAQgUAAgSgEg");
	this.shape.setTransform(49.875,45.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCHQIAAAAIgBAAIAAgBIgBAAIgBAAIAAAAIgBgBInlkIIgFgFQgCgDAAgEIAAlwQAAgEACgDQACgDAEgCIB6hDIAAgMQAAgPAKgOQAKgNASgJQAQgIAVgFQAVgFAXAAQAOAAANACIBpg5QAAgPALgMQAJgMARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQARAJAKAMQAKANABAOIBnA5QANgCAOAAQAXAAAVAFQAVAFAQAIQASAJAKANQAKAOAAAPIAAACIAAAKIB6BDQAEACACADQACADAAAEIAAFwQAAAEgCADIgFAFInlEIIAAAAIgBABIgBAAIgBAAIAAABIgBAAIAAAAgAANBZIAAFVIHMj7IAAlUgAnYCzIHMD7IAAlVInMj6gAnKi2IHKD5IHLj5IhagxIAAAfQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAhJQAAgPAKgOQAKgNASgJIARgHIhCgkIAAAuQAAAPgKANQgKANgSAKQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIQgSgKgJgNQgLgNAAgPIAAgvIhDAlIARAHQASAJAKANQAKAOAAAPIAAACIAABHQAAAPgKANQgKANgSAKQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIQgSgKgKgNQgKgNAAgPIAAgfgACcjIQAAAHAHAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgVAFQgVAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgAlXjIIABAAQAAAHAGAIQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgIAAgHIAAgeIgNAIQgQAIgUAFQgWAFgXAAQgXAAgVgFQgVgFgQgIIgNgIgADUk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAkfk4QgSAEgNAHQgMAGgGAHQgGAHAAAIQAAAIAGAHQAGAHAMAGQANAHASAEQASAEAUAAQAUAAASgEQASgEANgHQAMgGAGgHQAHgHAAgIQAAgIgHgHQgGgHgMgGQgNgHgSgEQgSgEgUAAQgUAAgSAEgAhclBQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglmyQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEgAgrAEQgUgEgRgIQgSgKgJgNQgLgNAAgPIABhHIgBgCQAAgQALgNQAKgNARgJQARgJAUgEQAVgFAXAAQAXAAAVAFQAVAEAQAJQASAJAKANQAKANAAAQIAABJQAAAPgKANQgKANgSAKQgQAIgVAEQgVAEgXAAQgXAAgVgEgAhcg7QAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHIAAgeIgMAIQgQAIgVAFQgVAEgXAAQgXAAgVgEQgUgFgRgIIgMgIgAglisQgRAEgOAHQgLAGgGAIQgHAHAAAIQAAAHAHAIQAGAHALAGQAOAHARAEQASAEAUAAQAUAAASgEQARgEAOgHQALgGAHgHQAGgIAAgHQAAgIgGgHQgHgIgLgGQgOgHgRgEQgSgEgUAAQgUAAgSAEg");
	this.shape_1.setTransform(49.875,46.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11copy, new cjs.Rectangle(0,0,99.8,92.9), null);


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
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAuIAAhbIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAWIAXAAIAAARg");
	this.shape_4.setTransform(12.6,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHAuIgKgkIgDAAIAAAkIgSAAIAAhbIAWAAIAJACQAFABADADQAEAEABAFQACAFAAAHQAAAKgCAFQgDAFgFAEIANAogAgGgGIADAAIADAAIACgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgGQAAgFgCgCQgDgDgDAAIgDAAg");
	this.shape_5.setTransform(7.125,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAXIAAgtQAAgMAGgGQAGgGAKAAQAMAAAGAGQAFAGAAAMIAAAtQAAAMgGAGQgGAFgLABQgWgBAAgXgAgDgcQAAABAAAAQgBAAAAABQAAABAAAAQAAABAAABIAAAvQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIADABIAEgBQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAAgvQAAgBAAgBQAAAAAAgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_6.setTransform(1.025,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOAuIAAgrIAAAAIgFAOIgDALIgLAAIgEgMIgEgNIgBAAIAAArIgRAAIAAhbIAQAAIAJAYIAGASIAAAAIAHgSIAJgYIAQAAIAABbg");
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAuIgKgbIgGgSIgBAAIAAAtIgRAAIAAhaIAPAAIAKAaIAGARIABAAIAAgrIARAAIAABag");
	this.shape_2.setTransform(32.375,4.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHAuIgKgkIgDAAIAAAkIgSAAIAAhaIAWAAIAJAAQAFACADADQAEADABAFQACAGAAAIQAAAJgCAGQgDAFgFADIANAogAgGgGIADAAIADgBIACgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIABgFQAAgGgCgDQgDgBgDAAIgDAAg");
	this.shape_3.setTransform(26.475,4.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKAuIgDgTIgMAAIgDATIgTAAIARhaIAVAAIARBagAgBgCIgCANIAHAAIgBgNIgCgTIgBAAg");
	this.shape_4.setTransform(20.325,4.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAuIAAhaIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAUIAXAAIAAASg");
	this.shape_5.setTransform(15,4.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAuIAAhaIASAAIAABIIAXAAIAAASg");
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


(lib.back = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/gEgX5AkhMAvzAAAMAAAhI9MgvzAAAg");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(0,0,320,480), null);


(lib.back1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E3000B").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/gEgX5AkhMAvzAAAMAAAhI9MgvzAAAg");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back1, new cjs.Rectangle(0,0,320,480), null);


(lib.back_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,320,480), null);


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

	// Layer_1
	this.instance = new lib.Symbol11copy3();
	this.instance.setTransform(45.3,42.15,0.9059,0.9059,0,0,0,50,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,90.4,84.1), null);


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
	this.instance = new lib.Symbol13copy2();
	this.instance.setTransform(49.9,46.4,1,1,3.4528,0,0,49.9,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.007,y:46.45},0).wait(1).to({rotation:1.1018},0).wait(1).to({rotation:-2.4216,y:46.4},0).wait(1).to({rotation:-4.493,x:49.95,y:46.45},0).wait(1).to({regX:49.8,regY:46.5,rotation:-4.9756,x:49.85,y:46.5},0).wait(1).to({regX:49.9,regY:46.4,rotation:-4.2313,x:49.95,y:46.35},0).wait(1).to({rotation:-0.8965,x:50},0).wait(1).to({rotation:2.645,x:49.95,y:46.4},0).wait(1).to({rotation:3.4528,x:49.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-4.1,107.39999999999999,101.1);


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

	// Layer_2
	this.instance = new lib.Symbol11copy();
	this.instance.setTransform(45.3,163.15,0.9059,0.9059,0,0,0,50,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:49.9,regY:46.4,y:162.95},0).wait(1).to({x:45.7,y:162.7},0).wait(1).to({x:46.45,y:162.3},0).wait(1).to({x:47.55,y:161.7},0).wait(1).to({x:49.05,y:160.85},0).wait(1).to({x:50.95,y:159.75},0).wait(1).to({x:53.4,y:158.4},0).wait(1).to({x:56.45,y:156.7},0).wait(1).to({x:60.1,y:154.65},0).wait(1).to({x:64.5,y:152.15},0).wait(1).to({x:69.7,y:149.25},0).wait(1).to({x:75.7,y:145.85},0).wait(1).to({x:82.55,y:142},0).wait(1).to({x:90.15,y:137.75},0).wait(1).to({x:98.15,y:133.25},0).wait(1).to({x:106.3,y:128.7},0).wait(1).to({x:114.2,y:124.25},0).wait(1).to({x:121.5,y:120.15},0).wait(1).to({x:128,y:116.5},0).wait(1).to({x:133.65,y:113.35},0).wait(1).to({x:138.45,y:110.65},0).wait(1).to({x:142.45,y:108.4},0).wait(1).to({x:145.75,y:106.55},0).wait(1).to({x:148.4,y:105.05},0).wait(1).to({x:150.5,y:103.85},0).wait(1).to({x:152.1,y:102.95},0).wait(1).to({x:153.3,y:102.3},0).wait(1).to({x:154.1,y:101.85},0).wait(1).to({x:154.55,y:101.6},0).wait(1).to({regX:50,regY:46.5,x:154.8,y:101.65},0).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol11copy();
	this.instance_1.setTransform(-68.2,103.15,0.9059,0.9059,0,0,0,50,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:49.9,regY:46.4,x:-68.15,y:103.1},0).wait(1).to({x:-67.7,y:103.35},0).wait(1).to({x:-66.95,y:103.75},0).wait(1).to({x:-65.8,y:104.3},0).wait(1).to({x:-64.3,y:105.15},0).wait(1).to({x:-62.25,y:106.2},0).wait(1).to({x:-59.75,y:107.55},0).wait(1).to({x:-56.6,y:109.2},0).wait(1).to({x:-52.8,y:111.2},0).wait(1).to({x:-48.25,y:113.6},0).wait(1).to({x:-42.85,y:116.45},0).wait(1).to({x:-36.6,y:119.75},0).wait(1).to({x:-29.5,y:123.5},0).wait(1).to({x:-21.65,y:127.65},0).wait(1).to({x:-13.35,y:132.05},0).wait(1).to({x:-4.9,y:136.55},0).wait(1).to({x:3.25,y:140.85},0).wait(1).to({x:10.85,y:144.85},0).wait(1).to({x:17.6,y:148.4},0).wait(1).to({x:23.45,y:151.5},0).wait(1).to({x:28.4,y:154.15},0).wait(1).to({x:32.55,y:156.35},0).wait(1).to({x:35.95,y:158.15},0).wait(1).to({x:38.75,y:159.6},0).wait(1).to({x:40.9,y:160.75},0).wait(1).to({x:42.6,y:161.6},0).wait(1).to({x:43.8,y:162.25},0).wait(1).to({x:44.6,y:162.7},0).wait(1).to({x:45.1,y:162.95},0).wait(1).to({regX:50,regY:46.5,x:45.3,y:163.15},0).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol11copy();
	this.instance_2.setTransform(154.8,101.65,0.9059,0.9059,0,0,0,50,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:49.9,regY:46.4,x:154.55,y:101.45,alpha:0.9989},0).wait(1).to({x:154.15,y:101.25,alpha:0.9955},0).wait(1).to({x:153.4,y:100.85,alpha:0.9895},0).wait(1).to({x:152.3,y:100.25,alpha:0.9806},0).wait(1).to({x:150.8,y:99.45,alpha:0.9684},0).wait(1).to({x:148.9,y:98.4,alpha:0.9525},0).wait(1).to({x:146.45,y:97.05,alpha:0.9324},0).wait(1).to({x:143.4,y:95.4,alpha:0.9076},0).wait(1).to({x:139.75,y:93.4,alpha:0.8775},0).wait(1).to({x:135.35,y:91.05,alpha:0.8415},0).wait(1).to({x:130.15,y:88.2,alpha:0.7989},0).wait(1).to({x:124.15,y:84.95,alpha:0.7494},0).wait(1).to({x:117.3,y:81.2,alpha:0.6932},0).wait(1).to({x:109.7,y:77.1,alpha:0.6311},0).wait(1).to({x:101.7,y:72.75,alpha:0.5652},0).wait(1).to({x:93.55,y:68.3,alpha:0.4983},0).wait(1).to({x:85.65,y:64,alpha:0.4336},0).wait(1).to({x:78.35,y:60.05,alpha:0.3738},0).wait(1).to({x:71.85,y:56.5,alpha:0.3204},0).wait(1).to({x:66.2,y:53.45,alpha:0.2741},0).wait(1).to({x:61.4,y:50.85,alpha:0.2348},0).wait(1).to({x:57.4,y:48.65,alpha:0.2019},0).wait(1).to({x:54.1,y:46.9,alpha:0.1748},0).wait(1).to({x:51.45,y:45.45,alpha:0.153},0).wait(1).to({x:49.35,y:44.3,alpha:0.1357},0).wait(1).to({x:47.75,y:43.4,alpha:0.1225},0).wait(1).to({x:46.55,y:42.8,alpha:0.1129},0).wait(1).to({x:45.75,y:42.35,alpha:0.1064},0).wait(1).to({x:45.3,y:42.1,alpha:0.1027},0).wait(1).to({regX:50,regY:46.5,y:42.15,alpha:0.1016},0).wait(1));

	// Layer_1
	this.instance_3 = new lib.Symbol11copy();
	this.instance_3.setTransform(45.3,42.15,0.9059,0.9059,0,0,0,50,46.5);
	this.instance_3.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:49.9,regY:46.4,x:45.1,y:42.1,alpha:0.1026},0).wait(1).to({x:44.65,y:42.35,alpha:0.1061},0).wait(1).to({x:43.9,y:42.75,alpha:0.1121},0).wait(1).to({x:42.75,y:43.35,alpha:0.121},0).wait(1).to({x:41.25,y:44.15,alpha:0.1332},0).wait(1).to({x:39.2,y:45.25,alpha:0.1491},0).wait(1).to({x:36.7,y:46.6,alpha:0.1691},0).wait(1).to({x:33.55,y:48.3,alpha:0.1939},0).wait(1).to({x:29.75,y:50.35,alpha:0.224},0).wait(1).to({x:25.2,y:52.8,alpha:0.2601},0).wait(1).to({x:19.8,y:55.7,alpha:0.3027},0).wait(1).to({x:13.55,y:59.05,alpha:0.3522},0).wait(1).to({x:6.45,y:62.85,alpha:0.4084},0).wait(1).to({x:-1.4,y:67.05,alpha:0.4705},0).wait(1).to({x:-9.7,y:71.55,alpha:0.5364},0).wait(1).to({x:-18.15,y:76.1,alpha:0.6033},0).wait(1).to({x:-26.3,y:80.5,alpha:0.6679},0).wait(1).to({x:-33.9,y:84.55,alpha:0.7278},0).wait(1).to({x:-40.65,y:88.15,alpha:0.7811},0).wait(1).to({x:-46.5,y:91.3,alpha:0.8274},0).wait(1).to({x:-51.45,y:94,alpha:0.8668},0).wait(1).to({x:-55.6,y:96.2,alpha:0.8997},0).wait(1).to({x:-59,y:98.05,alpha:0.9267},0).wait(1).to({x:-61.8,y:99.55,alpha:0.9486},0).wait(1).to({x:-63.95,y:100.7,alpha:0.9658},0).wait(1).to({x:-65.65,y:101.6,alpha:0.979},0).wait(1).to({x:-66.85,y:102.25,alpha:0.9887},0).wait(1).to({x:-67.65,y:102.7,alpha:0.9952},0).wait(1).to({x:-68.15,y:102.95,alpha:0.9988},0).wait(1).to({regX:50,regY:46.5,x:-68.2,y:103.15,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.4,0,671.4,232.1);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-1.2,39.4,42.6);


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


(lib.Symbol16copy_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol13copy4();
	this.instance.setTransform(49.9,46.4,1,1,3.4528,0,0,49.9,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.007,y:46.45},0).wait(1).to({rotation:1.1018},0).wait(1).to({rotation:-2.4216,y:46.4},0).wait(1).to({rotation:-4.493,x:49.95,y:46.45},0).wait(1).to({regX:49.8,regY:46.5,rotation:-4.9756,x:49.85,y:46.5},0).wait(1).to({regX:49.9,regY:46.4,rotation:-4.2313,x:49.95,y:46.35},0).wait(1).to({rotation:-0.8965,x:50},0).wait(1).to({rotation:2.645,x:49.95,y:46.4},0).wait(1).to({rotation:3.4528,x:49.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-4.1,107.39999999999999,101.1);


(lib.Symbol16_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.Symbol13copy3();
	this.instance_1.setTransform(49.9,46.4,1,1,3.4528,0,0,49.9,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:3.007,y:46.45},0).wait(1).to({rotation:1.1018},0).wait(1).to({rotation:-2.4216,y:46.4},0).wait(1).to({rotation:-4.493,x:49.95,y:46.45},0).wait(1).to({regX:49.8,regY:46.5,rotation:-4.9756,x:49.85,y:46.5},0).wait(1).to({regX:49.9,regY:46.4,rotation:-4.2313,x:49.95,y:46.35},0).wait(1).to({rotation:-0.8965,x:50},0).wait(1).to({rotation:2.645,x:49.95,y:46.4},0).wait(1).to({rotation:3.4528,x:49.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-4.1,107.39999999999999,101.1);


(lib.Symbol13_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_4 = new lib.Symbol11copy2();
	this.instance_4.setTransform(45.3,163.15,0.9059,0.9059,0,0,0,50,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:49.9,regY:46.4,y:162.95},0).wait(1).to({x:45.7,y:162.7},0).wait(1).to({x:46.45,y:162.3},0).wait(1).to({x:47.55,y:161.7},0).wait(1).to({x:49.05,y:160.85},0).wait(1).to({x:50.95,y:159.75},0).wait(1).to({x:53.4,y:158.4},0).wait(1).to({x:56.45,y:156.7},0).wait(1).to({x:60.1,y:154.65},0).wait(1).to({x:64.5,y:152.15},0).wait(1).to({x:69.7,y:149.25},0).wait(1).to({x:75.7,y:145.85},0).wait(1).to({x:82.55,y:142},0).wait(1).to({x:90.15,y:137.75},0).wait(1).to({x:98.15,y:133.25},0).wait(1).to({x:106.3,y:128.7},0).wait(1).to({x:114.2,y:124.25},0).wait(1).to({x:121.5,y:120.15},0).wait(1).to({x:128,y:116.5},0).wait(1).to({x:133.65,y:113.35},0).wait(1).to({x:138.45,y:110.65},0).wait(1).to({x:142.45,y:108.4},0).wait(1).to({x:145.75,y:106.55},0).wait(1).to({x:148.4,y:105.05},0).wait(1).to({x:150.5,y:103.85},0).wait(1).to({x:152.1,y:102.95},0).wait(1).to({x:153.3,y:102.3},0).wait(1).to({x:154.1,y:101.85},0).wait(1).to({x:154.55,y:101.6},0).wait(1).to({regX:50,regY:46.5,x:154.8,y:101.65},0).wait(1));

	// Layer_4
	this.instance_5 = new lib.Symbol11copy2();
	this.instance_5.setTransform(-68.2,103.15,0.9059,0.9059,0,0,0,50,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:49.9,regY:46.4,x:-68.15,y:103.1},0).wait(1).to({x:-67.7,y:103.35},0).wait(1).to({x:-66.95,y:103.75},0).wait(1).to({x:-65.8,y:104.3},0).wait(1).to({x:-64.3,y:105.15},0).wait(1).to({x:-62.25,y:106.2},0).wait(1).to({x:-59.75,y:107.55},0).wait(1).to({x:-56.6,y:109.2},0).wait(1).to({x:-52.8,y:111.2},0).wait(1).to({x:-48.25,y:113.6},0).wait(1).to({x:-42.85,y:116.45},0).wait(1).to({x:-36.6,y:119.75},0).wait(1).to({x:-29.5,y:123.5},0).wait(1).to({x:-21.65,y:127.65},0).wait(1).to({x:-13.35,y:132.05},0).wait(1).to({x:-4.9,y:136.55},0).wait(1).to({x:3.25,y:140.85},0).wait(1).to({x:10.85,y:144.85},0).wait(1).to({x:17.6,y:148.4},0).wait(1).to({x:23.45,y:151.5},0).wait(1).to({x:28.4,y:154.15},0).wait(1).to({x:32.55,y:156.35},0).wait(1).to({x:35.95,y:158.15},0).wait(1).to({x:38.75,y:159.6},0).wait(1).to({x:40.9,y:160.75},0).wait(1).to({x:42.6,y:161.6},0).wait(1).to({x:43.8,y:162.25},0).wait(1).to({x:44.6,y:162.7},0).wait(1).to({x:45.1,y:162.95},0).wait(1).to({regX:50,regY:46.5,x:45.3,y:163.15},0).wait(1));

	// Layer_3
	this.instance_6 = new lib.Symbol11copy2();
	this.instance_6.setTransform(154.8,101.65,0.9059,0.9059,0,0,0,50,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:49.9,regY:46.4,x:154.55,y:101.45,alpha:0.9991},0).wait(1).to({x:154.15,y:101.25,alpha:0.9962},0).wait(1).to({x:153.4,y:100.85,alpha:0.9912},0).wait(1).to({x:152.3,y:100.25,alpha:0.9838},0).wait(1).to({x:150.8,y:99.45,alpha:0.9736},0).wait(1).to({x:148.9,y:98.4,alpha:0.9603},0).wait(1).to({x:146.45,y:97.05,alpha:0.9436},0).wait(1).to({x:143.4,y:95.4,alpha:0.9229},0).wait(1).to({x:139.75,y:93.4,alpha:0.8978},0).wait(1).to({x:135.35,y:91.05,alpha:0.8677},0).wait(1).to({x:130.15,y:88.2,alpha:0.8321},0).wait(1).to({x:124.15,y:84.95,alpha:0.7908},0).wait(1).to({x:117.3,y:81.2,alpha:0.7439},0).wait(1).to({x:109.7,y:77.1,alpha:0.692},0).wait(1).to({x:101.7,y:72.75,alpha:0.637},0).wait(1).to({x:93.55,y:68.3,alpha:0.5812},0).wait(1).to({x:85.65,y:64,alpha:0.5272},0).wait(1).to({x:78.35,y:60.05,alpha:0.4773},0).wait(1).to({x:71.85,y:56.5,alpha:0.4327},0).wait(1).to({x:66.2,y:53.45,alpha:0.394},0).wait(1).to({x:61.4,y:50.85,alpha:0.3612},0).wait(1).to({x:57.4,y:48.65,alpha:0.3337},0).wait(1).to({x:54.1,y:46.9,alpha:0.3112},0).wait(1).to({x:51.45,y:45.45,alpha:0.2929},0).wait(1).to({x:49.35,y:44.3,alpha:0.2785},0).wait(1).to({x:47.75,y:43.4,alpha:0.2675},0).wait(1).to({x:46.55,y:42.8,alpha:0.2595},0).wait(1).to({x:45.75,y:42.35,alpha:0.254},0).wait(1).to({x:45.3,y:42.1,alpha:0.251},0).wait(1).to({regX:50,regY:46.5,y:42.15,alpha:0.25},0).wait(1));

	// Layer_1
	this.instance_7 = new lib.Symbol11copy2();
	this.instance_7.setTransform(45.3,42.15,0.9059,0.9059,0,0,0,50,46.5);
	this.instance_7.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:49.9,regY:46.4,x:45.1,y:42.1,alpha:0.2509},0).wait(1).to({x:44.65,y:42.35,alpha:0.2538},0).wait(1).to({x:43.9,y:42.75,alpha:0.2588},0).wait(1).to({x:42.75,y:43.35,alpha:0.2662},0).wait(1).to({x:41.25,y:44.15,alpha:0.2764},0).wait(1).to({x:39.2,y:45.25,alpha:0.2897},0).wait(1).to({x:36.7,y:46.6,alpha:0.3064},0).wait(1).to({x:33.55,y:48.3,alpha:0.3271},0).wait(1).to({x:29.75,y:50.35,alpha:0.3522},0).wait(1).to({x:25.2,y:52.8,alpha:0.3823},0).wait(1).to({x:19.8,y:55.7,alpha:0.4179},0).wait(1).to({x:13.55,y:59.05,alpha:0.4592},0).wait(1).to({x:6.45,y:62.85,alpha:0.5061},0).wait(1).to({x:-1.4,y:67.05,alpha:0.558},0).wait(1).to({x:-9.7,y:71.55,alpha:0.613},0).wait(1).to({x:-18.15,y:76.1,alpha:0.6688},0).wait(1).to({x:-26.3,y:80.5,alpha:0.7228},0).wait(1).to({x:-33.9,y:84.55,alpha:0.7727},0).wait(1).to({x:-40.65,y:88.15,alpha:0.8173},0).wait(1).to({x:-46.5,y:91.3,alpha:0.856},0).wait(1).to({x:-51.45,y:94,alpha:0.8888},0).wait(1).to({x:-55.6,y:96.2,alpha:0.9163},0).wait(1).to({x:-59,y:98.05,alpha:0.9388},0).wait(1).to({x:-61.8,y:99.55,alpha:0.9571},0).wait(1).to({x:-63.95,y:100.7,alpha:0.9715},0).wait(1).to({x:-65.65,y:101.6,alpha:0.9825},0).wait(1).to({x:-66.85,y:102.25,alpha:0.9905},0).wait(1).to({x:-67.65,y:102.7,alpha:0.996},0).wait(1).to({x:-68.15,y:102.95,alpha:0.999},0).wait(1).to({regX:50,regY:46.5,x:-68.2,y:103.15,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.4,0,671.4,232.1);


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

}).prototype = getMCSymbolPrototype(lib.Symbol8copy3, new cjs.Rectangle(15.6,8.9,79.60000000000001,17.4), null);


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
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAOh5Ig0gcAAqB0IgsAiAAHAEIgwAG");
	this.shape.setTransform(9.4,19.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AAXCPIgJAHAgHAIIgPACAgJiPIgLgG");
	this.shape_1.setTransform(7.25,18.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},4).to({state:[]},6).to({state:[{t:this.shape}]},20).to({state:[{t:this.shape_1}]},4).to({state:[]},6).wait(44));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AgrhsIArgpAgKCAIAzAWAgEALIAvgH");
	this.shape_2.setTransform(101.55,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AAMCSIAKAEAARAGIAHgCAgXiQIAFgF");
	this.shape_3.setTransform(103.1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},8).to({state:[{t:this.shape_3}]},4).to({state:[]},6).to({state:[{t:this.shape_2}]},20).to({state:[{t:this.shape_3}]},4).to({state:[]},6).wait(44));

	// Layer_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak/CDIAAisIMbAAIAACsg");
	mask.setTransform(47.5987,13.1193);

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
	var mask_1_graphics_2 = new cjs.Graphics().p("ADBBgIAAgZIB1AAIAAAZg");
	var mask_1_graphics_3 = new cjs.Graphics().p("ACtBiIAAghICQAAIAAAhg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ABeBoIAAg7ID4AAIAAA7g");
	var mask_1_graphics_5 = new cjs.Graphics().p("AhNB2IAAh1IHbAAIAAB1g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AkDCFIAAiyILMAAIAACyg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AlZCMIAAjPIM+AAIAADPg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AluCNIAAjWINaAAIAADWg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AluCNIAAjWINaAAIAADWg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AlsCNIAAjUINXAAIAADUg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AloCMIAAjRINSAAIAADRg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AlhCLIAAjLINJAAIAADLg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AlXCIIAAjCIM7AAIAADCg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AlNCGIAAi5IMuAAIAAC5g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AlGCFIAAizIMlAAIAACzg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AlBCEIAAivIMeAAIAACvg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Ak/CDIAAitIMcAAIAACtg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ak/CDIAAisIMbAAIAACsg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Ak/CDIAAisIMbAAIAACsg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AlBCEIAAivIMdAAIAACvg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AlGCFIAAi0IMkAAIAAC0g");
	var mask_1_graphics_35 = new cjs.Graphics().p("AlOCHIAAi9IMuAAIAAC9g");
	var mask_1_graphics_36 = new cjs.Graphics().p("AlaCKIAAjLIM+AAIAADLg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AlnCPIAAjcINRAAIAADcg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AldCNIAAjSINEAAIAADSg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AlVCKIAAjHIM5AAIAADHg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AlOCIIAAi/IMwAAIAAC/g");
	var mask_1_graphics_41 = new cjs.Graphics().p("AlICHIAAi5IMoAAIAAC5g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AlECFIAAizIMjAAIAACzg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AlACEIAAivIMeAAIAACvg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Ak+CEIAAitIMbAAIAACtg");
	var mask_1_graphics_45 = new cjs.Graphics().p("Ak/CDIAAisIMbAAIAACsg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_1_graphics_2,x:31.0269,y:9.6118}).wait(1).to({graphics:mask_1_graphics_3,x:31.6662,y:9.7722}).wait(1).to({graphics:mask_1_graphics_4,x:34.2298,y:10.4155}).wait(1).to({graphics:mask_1_graphics_5,x:39.8117,y:11.8161}).wait(1).to({graphics:mask_1_graphics_6,x:45.6922,y:13.2916}).wait(1).to({graphics:mask_1_graphics_7,x:48.4877,y:13.9931}).wait(1).to({graphics:mask_1_graphics_8,x:49.1783,y:14.1354}).wait(1).to({graphics:mask_1_graphics_9,x:49.1604,y:14.1235}).wait(1).to({graphics:mask_1_graphics_10,x:49.0974,y:14.0816}).wait(1).to({graphics:mask_1_graphics_11,x:48.9698,y:13.9969}).wait(1).to({graphics:mask_1_graphics_12,x:48.7516,y:13.8519}).wait(1).to({graphics:mask_1_graphics_13,x:48.438,y:13.6436}).wait(1).to({graphics:mask_1_graphics_14,x:48.1122,y:13.4272}).wait(1).to({graphics:mask_1_graphics_15,x:47.8754,y:13.2699}).wait(1).to({graphics:mask_1_graphics_16,x:47.7362,y:13.1774}).wait(1).to({graphics:mask_1_graphics_17,x:47.6679,y:13.1321}).wait(1).to({graphics:mask_1_graphics_18,x:47.5987,y:13.1193}).wait(14).to({graphics:mask_1_graphics_32,x:47.5987,y:13.1193}).wait(1).to({graphics:mask_1_graphics_33,x:47.6481,y:13.1648}).wait(1).to({graphics:mask_1_graphics_34,x:47.7962,y:13.3015}).wait(1).to({graphics:mask_1_graphics_35,x:48.0432,y:13.5292}).wait(1).to({graphics:mask_1_graphics_36,x:48.3889,y:13.8481}).wait(1).to({graphics:mask_1_graphics_37,x:48.9669,y:14.322}).wait(1).to({graphics:mask_1_graphics_38,x:48.6755,y:14.0518}).wait(1).to({graphics:mask_1_graphics_39,x:48.423,y:13.8177}).wait(1).to({graphics:mask_1_graphics_40,x:48.2093,y:13.6195}).wait(1).to({graphics:mask_1_graphics_41,x:48.0345,y:13.4574}).wait(1).to({graphics:mask_1_graphics_42,x:47.8985,y:13.3314}).wait(1).to({graphics:mask_1_graphics_43,x:47.8014,y:13.2413}).wait(1).to({graphics:mask_1_graphics_44,x:47.7431,y:13.1873}).wait(1).to({graphics:mask_1_graphics_45,x:47.5987,y:13.1193}).wait(47));

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


(lib.Symbol1copy10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {normal:0,dragged:9,destination_reached_intro_animation:64,destination_reached_outro_animation:107,destination_reached_mouseup:154};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_93 = function() {
		this.stop();
	}
	this.frame_137 = function() {
		this.stop();
	}
	this.frame_177 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(93).call(this.frame_93).wait(44).call(this.frame_137).wait(40).call(this.frame_177).wait(15));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAej/Ihug8ABXD0IhdBIAAPAIIhlAN");
	this.shape.setTransform(-58.425,8.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AgTkvIgXgMAgQARIghAEAAyEuIgTAO");
	this.shape_1.setTransform(-62.2,8.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},167).to({state:[{t:this.shape_1}]},4).to({state:[]},6).wait(15));

	// Layer_11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AgKAXIBlgNAhajkIBbhWAgVENIBsAu");
	this.shape_2.setTransform(57.925,-6.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AAjAMIAPgCAgxkxIAKgJAAYEyIAWAJ");
	this.shape_3.setTransform(62.025,-6.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},167).to({state:[{t:this.shape_3}]},4).to({state:[]},6).wait(15));

	// Layer_1
	this.instance = new lib.Symbol16copy_1();
	this.instance.setTransform(0.15,4.35,1,1,0,0,0,49.9,46.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({_off:true},30).wait(98));

	// BOX
	this.instance_1 = new lib.Symbol13copy4();
	this.instance_1.setTransform(0.15,4.35,1,1,0,0,0,49.9,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({alpha:0},0).wait(30).to({alpha:1},0).wait(60).to({scaleY:0.8826,y:9.85},0).to({regX:49.8,scaleY:1,rotation:-175.7533,y:-89.85},6,cjs.Ease.get(1)).to({regX:49.9,rotation:-354.5346,y:4.45},7,cjs.Ease.get(-1)).to({rotation:-360,y:-2.9},3,cjs.Ease.get(1)).to({y:4.35},3,cjs.Ease.get(-1)).to({_off:true},16).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.1,-251.9,519.8,491);


(lib.Symbol1copy8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"normal":0,"dragged":9,"destination_reached_intro_animation":64,"destination_reached_outro_animation":107,"destination_reached_mouseup":154};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_93 = function() {
		this.stop();
	}
	this.frame_137 = function() {
		this.stop();
	}
	this.frame_177 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(93).call(this.frame_93).wait(44).call(this.frame_137).wait(40).call(this.frame_177).wait(23));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAej/Ihug8ABXD0IhdBIAAPAIIhlAN");
	this.shape.setTransform(-58.425,8.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AgTkvIgXgMAgQARIghAEAAyEuIgTAO");
	this.shape_1.setTransform(-62.2,8.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},167).to({state:[{t:this.shape_1}]},4).to({state:[]},6).wait(23));

	// Layer_11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AgKAXIBlgNAhajkIBbhWAgVENIBsAu");
	this.shape_2.setTransform(57.925,-6.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AAjAMIAPgCAgxkxIAKgJAAYEyIAWAJ");
	this.shape_3.setTransform(62.025,-6.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},167).to({state:[{t:this.shape_3}]},4).to({state:[]},6).wait(23));

	// Layer_1
	this.instance = new lib.Symbol16_1();
	this.instance.setTransform(0.15,4.35,1,1,0,0,0,49.9,46.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({_off:true},30).wait(106));

	// BOX
	this.instance_1 = new lib.Symbol13copy3();
	this.instance_1.setTransform(0.15,4.35,1,1,0,0,0,49.9,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({alpha:0},0).wait(30).to({alpha:1},0).wait(60).to({scaleY:0.8826,y:9.85},0).to({regX:49.8,scaleY:1,rotation:-175.7533,y:-89.85},6,cjs.Ease.get(1)).to({regX:49.9,rotation:-354.5346,y:4.45},7,cjs.Ease.get(-1)).to({rotation:-360,y:-2.9},3,cjs.Ease.get(1)).to({y:4.35},3,cjs.Ease.get(-1)).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.1,-251.9,519.8,491);


(lib.Symbol1copy6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"normal":0,"dragged":9,"destination_reached_intro_animation":64,"destination_reached_outro_animation":107,"destination_reached_mouseup":154};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_93 = function() {
		this.stop();
	}
	this.frame_137 = function() {
		this.stop();
	}
	this.frame_177 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(93).call(this.frame_93).wait(44).call(this.frame_137).wait(40).call(this.frame_177).wait(15));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAej/Ihug8AAPAIIhlANABXD0IhdBI");
	this.shape.setTransform(-58.425,8.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AgTkvIgXgMAAyEuIgTAOAgQARIghAE");
	this.shape_1.setTransform(-62.2,8.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},167).to({state:[{t:this.shape_1}]},4).to({state:[]},6).wait(15));

	// Layer_11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AhajkIBbhWAgKAXIBlgNAgVENIBsAu");
	this.shape_2.setTransform(57.925,-6.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AgxkxIAKgJAAjAMIAPgCAAYEyIAWAJ");
	this.shape_3.setTransform(62.025,-6.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},167).to({state:[{t:this.shape_3}]},4).to({state:[]},6).wait(15));

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(0.15,4.35,1,1,0,0,0,49.9,46.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({_off:true},30).wait(98));

	// BOX
	this.instance_1 = new lib.Symbol13copy2();
	this.instance_1.setTransform(0.15,4.35,1,1,0,0,0,49.9,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({alpha:0},0).wait(30).to({alpha:1},0).wait(60).to({scaleY:0.8826,y:9.85},0).to({regX:49.8,scaleY:1,rotation:-175.7533,y:-89.85},6,cjs.Ease.get(1)).to({regX:49.9,rotation:-354.5346,y:4.45},7,cjs.Ease.get(-1)).to({rotation:-360,y:-2.9},3,cjs.Ease.get(1)).to({y:4.35},3,cjs.Ease.get(-1)).to({_off:true},16).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.1,-251.9,519.8,491);


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


(lib.cursor_mc_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_2 = new lib.CURSOR_DRAG_DOWN_1();
	this.instance_2.setTransform(9,13.05,2,2,0,0,0,6.5,5.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).wait(35));

	// CURSOR_DRAG_UP
	this.instance_3 = new lib.CURSOR_DRAG_UP_1();
	this.instance_3.setTransform(8,8,2,2,0,0,0,8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},31).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-9,30.5,33.7);


(lib.Symbol8copy9 = function(mode,startPosition,loop,reversed) {
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
		var _this = this;
		this.current_state = false;
		
		// Movieclip, который таскается
		var dragged_object = this.box_mc;
		
		this.dragged_object = dragged_object; //временный костыль чтобы к dragged_object можно было обратиться с верхнего уровня и назначить addEventListener, можно улучшить просто отредактировав все использования в коде ниже (добавить 'this.') 
		
		// Movieclip, который обозначает конечное положение
		var destination_object = this.box_destination_mc;
		
		// порог "точности" конечного положения 
		var destination_reached_treshold = 50;
		
		// возвращать ли таскаемый объект в исходное положение
		var snap_to_original_position = true; 
		
		var tween_time_succeed = 100;
		var tween_time_failed = 400;
		
		
		stage.mouseMoveOutside = true;
		stage.enableMouseOver(1);
		dragged_object.original_x = dragged_object.x;
		dragged_object.original_y = dragged_object.y;
		dragged_object.destination_x = destination_object.x;
		dragged_object.destination_y = destination_object.y;
		dragged_object.state = "normal";
		
		/*
		Во время перетаскивания объекта для того, чтобы движение было более плавным
		выполняется stage.update(). Без него на 24fps действиельно движение рывками.
		Но каждый вызов stage.update() вызывает tick() в createjs.Ticker и АНИМАЦИЯ
		других, даже не связанных с перетаскиванием элементов - очень сильно ускоряется.
		Чтобы сделать "ускорение анимации" не таким значительным используется
		коэффициент trottle_stage_update_ratio. То есть stage.update() вызывается 
		в N раз реже.
		*/
		var trottle_stage_update_ratio = 1; 
		var trottle_stage_update_counter = 0;
		
		// вывод данных, можно исключить
		trace(dragged_object.original_x);
		trace(dragged_object.original_y);
		
		function destination_reached(current_x, current_y) {
			var distance_x = Math.abs(dragged_object.destination_x - current_x);
			var distance_y = Math.abs(dragged_object.destination_y - current_y);
			if ((distance_x < destination_reached_treshold) && (distance_y < destination_reached_treshold)) {
				return true;
			}
			return false;	
		}
		
		dragged_object.on("mousedown", function(evt){
			_this.parent.targeted_clicks_number++;
		 }, this);
		
		
		dragged_object.on("pressmove", function(evt){
			if (this.parent.replaced_cursor_mc.alpha == 0) {
				this.parent.cursor_idle_mc.alpha = 0;
			}
			
			var adjusted_coords = get_adjusted_coords(evt);
		
			evt.currentTarget.x = adjusted_coords.x;
			evt.currentTarget.y = adjusted_coords.y;
			// вывод данных, можно исключить	
			//exportRoot.current_coordinates_txt.text = "pressmove: \t\t\t\t\t\t\t\t\t\t" + evt.stageX + " " + evt.stageY;
			if (destination_reached(adjusted_coords.x, adjusted_coords.y)) {
				if ((dragged_object.state == "dragged") || (dragged_object.state == "normal")) {
					dragged_object.state = "destination_reached";
					dragged_object.gotoAndPlay("destination_reached_intro_animation");
				}
			}
			else {
				_this.current_state = false; // object NOT in destination position
				if (dragged_object.state == "normal") {
					dragged_object.state = "dragged";
					dragged_object.gotoAndStop("dragged");
				}
				if (dragged_object.state == "destination_reached") {
					dragged_object.state = "dragged";
					dragged_object.gotoAndPlay("destination_reached_outro_animation");
				}
			}
		/*
			trottle_stage_update_counter++;
			if (trottle_stage_update_counter == trottle_stage_update_ratio) {
				trottle_stage_update_counter = 0;
				stage.update(evt);
			}
		*/
		 }, this);
		 
		
		dragged_object.on("pressup", function(evt){
		
			var adjusted_coords = get_adjusted_coords(evt);
			
			if (this.parent.replaced_cursor_mc.alpha == 0) {
				this.parent.cursor_idle_mc.alpha = 1;
			}
			
			if (destination_reached(adjusted_coords.x, adjusted_coords.y)) {
				dragged_object.state = "normal";
				dragged_object.gotoAndPlay("destination_reached_mouseup");
				_this.current_state = true; // object IS in destination position
				_this.parent.check_state(_this.parent);
				my_tween(dragged_object, dragged_object.destination_x, dragged_object.destination_y, tween_time_succeed);
		
				// --------- Yandex Metrika EVENT -------------------
				//ym(99478353,'reachGoal','DOLL');
				ym_debug_function("BOX destination_reached_mouseup");	
			}	
			else {
				dragged_object.state = "normal";
				dragged_object.gotoAndStop("normal");
				if (snap_to_original_position) {
					my_tween(dragged_object, dragged_object.original_x, dragged_object.original_y, tween_time_failed);
				}
				else {
					// do nothing
				}
			}
		 }, this);
		
		
		function my_tween(target, to_x, to_y, time) {
			createjs.Tween.get(target, {override:true})
				 .to({x:to_x, y:to_y}, time, createjs.Ease.quintInOut)
				 .call(handleComplete)
				 .addEventListener("change", handleChange);
			function handleComplete() {
				//Tween complete
				trace("Tween complete");
			}		
			function handleChange() {
				//Tween changed
			}	
		}
		
		
		// ---------------------- COORDINATES CONVERTION -----------------------------------
		function get_adjusted_coords(event) {
		    var ratio = window.devicePixelRatio || 1;
		
			var pt = _this.globalToLocal(stage.mouseX, stage.mouseY);
			var pt_stageX = pt.x;
			var pt_stageY = pt.y;
		
		    return {
		        x: pt_stageX,
		        y: pt_stageY
			};
		}
		
		
		 // ---------------------- TRACE (WAS USED FOR DEBUG) -----------------------------------
		 function trace(text) {
			 //exportRoot.trace_txt.text += "\n" + text;
		 }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// box_mc
	this.box_mc = new lib.Symbol1copy10();
	this.box_mc.name = "box_mc";
	this.box_mc.setTransform(82.6,365.8,0.9064,0.9064);

	this.timeline.addTween(cjs.Tween.get(this.box_mc).wait(1));

	// box_destination_mc
	this.box_destination_mc = new lib.Symbol1copy10();
	this.box_destination_mc.name = "box_destination_mc";
	this.box_destination_mc.setTransform(-93.4,262.05,0.9064,0.9064);
	this.box_destination_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.box_destination_mc).wait(1));

	// GUIDE
	this.instance = new lib.Symbol11copy5();
	this.instance.setTransform(-93.15,297.45,0.9059,0.9059,0,0,0,50,46.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8copy9, new cjs.Rectangle(-148.7,137.1,276.6,274.70000000000005), null);


(lib.Symbol8copy8 = function(mode,startPosition,loop,reversed) {
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
		var _this = this;
		this.current_state = false;
		
		// Movieclip, который таскается
		var dragged_object = this.box_mc;
		
		this.dragged_object = dragged_object; //временный костыль чтобы к dragged_object можно было обратиться с верхнего уровня и назначить addEventListener, можно улучшить просто отредактировав все использования в коде ниже (добавить 'this.') 
		
		// Movieclip, который обозначает конечное положение
		var destination_object = this.box_destination_mc;
		
		// порог "точности" конечного положения 
		var destination_reached_treshold = 50;
		
		// возвращать ли таскаемый объект в исходное положение
		var snap_to_original_position = true; 
		
		var tween_time_succeed = 100;
		var tween_time_failed = 400;
		
		
		stage.mouseMoveOutside = true;
		stage.enableMouseOver(1);
		dragged_object.original_x = dragged_object.x;
		dragged_object.original_y = dragged_object.y;
		dragged_object.destination_x = destination_object.x;
		dragged_object.destination_y = destination_object.y;
		dragged_object.state = "normal";
		
		/*
		Во время перетаскивания объекта для того, чтобы движение было более плавным
		выполняется stage.update(). Без него на 24fps действиельно движение рывками.
		Но каждый вызов stage.update() вызывает tick() в createjs.Ticker и АНИМАЦИЯ
		других, даже не связанных с перетаскиванием элементов - очень сильно ускоряется.
		Чтобы сделать "ускорение анимации" не таким значительным используется
		коэффициент trottle_stage_update_ratio. То есть stage.update() вызывается 
		в N раз реже.
		*/
		var trottle_stage_update_ratio = 1; 
		var trottle_stage_update_counter = 0;
		
		// вывод данных, можно исключить
		trace(dragged_object.original_x);
		trace(dragged_object.original_y);
		
		function destination_reached(current_x, current_y) {
			var distance_x = Math.abs(dragged_object.destination_x - current_x);
			var distance_y = Math.abs(dragged_object.destination_y - current_y);
			if ((distance_x < destination_reached_treshold) && (distance_y < destination_reached_treshold)) {
				return true;
			}
			return false;	
		}
		
		dragged_object.on("mousedown", function(evt){
			_this.parent.targeted_clicks_number++;
		 }, this);
		
		
		dragged_object.on("pressmove", function(evt){
			if (this.parent.replaced_cursor_mc.alpha == 0) {
				this.parent.cursor_idle_mc.alpha = 0;
			}
			
			var adjusted_coords = get_adjusted_coords(evt);
		
			evt.currentTarget.x = adjusted_coords.x;
			evt.currentTarget.y = adjusted_coords.y;
			// вывод данных, можно исключить	
			//exportRoot.current_coordinates_txt.text = "pressmove: \t\t\t\t\t\t\t\t\t\t" + evt.stageX + " " + evt.stageY;
			if (destination_reached(adjusted_coords.x, adjusted_coords.y)) {
				if ((dragged_object.state == "dragged") || (dragged_object.state == "normal")) {
					dragged_object.state = "destination_reached";
					dragged_object.gotoAndPlay("destination_reached_intro_animation");
				}
			}
			else {
				_this.current_state = false; // object NOT in destination position
				if (dragged_object.state == "normal") {
					dragged_object.state = "dragged";
					dragged_object.gotoAndStop("dragged");
				}
				if (dragged_object.state == "destination_reached") {
					dragged_object.state = "dragged";
					dragged_object.gotoAndPlay("destination_reached_outro_animation");
				}
			}
		/*
			trottle_stage_update_counter++;
			if (trottle_stage_update_counter == trottle_stage_update_ratio) {
				trottle_stage_update_counter = 0;
				stage.update(evt);
			}
		*/
		 }, this);
		 
		
		dragged_object.on("pressup", function(evt){
		
			var adjusted_coords = get_adjusted_coords(evt);
			
			if (this.parent.replaced_cursor_mc.alpha == 0) {
				this.parent.cursor_idle_mc.alpha = 1;
			}
			
			if (destination_reached(adjusted_coords.x, adjusted_coords.y)) {
				dragged_object.state = "normal";
				dragged_object.gotoAndPlay("destination_reached_mouseup");
				_this.current_state = true; // object IS in destination position
				_this.parent.check_state(_this.parent);
				my_tween(dragged_object, dragged_object.destination_x, dragged_object.destination_y, tween_time_succeed);
		
				// --------- Yandex Metrika EVENT -------------------
				//ym(99478353,'reachGoal','DOLL');
				ym_debug_function("BOX destination_reached_mouseup");	
			}	
			else {
				dragged_object.state = "normal";
				dragged_object.gotoAndStop("normal");
				if (snap_to_original_position) {
					my_tween(dragged_object, dragged_object.original_x, dragged_object.original_y, tween_time_failed);
				}
				else {
					// do nothing
				}
			}
		 }, this);
		
		
		function my_tween(target, to_x, to_y, time) {
			createjs.Tween.get(target, {override:true})
				 .to({x:to_x, y:to_y}, time, createjs.Ease.quintInOut)
				 .call(handleComplete)
				 .addEventListener("change", handleChange);
			function handleComplete() {
				//Tween complete
				trace("Tween complete");
			}		
			function handleChange() {
				//Tween changed
			}	
		}
		
		
		// ---------------------- COORDINATES CONVERTION -----------------------------------
		function get_adjusted_coords(event) {
		    var ratio = window.devicePixelRatio || 1;
		
			var pt = _this.globalToLocal(stage.mouseX, stage.mouseY);
			var pt_stageX = pt.x;
			var pt_stageY = pt.y;
		
		    return {
		        x: pt_stageX,
		        y: pt_stageY
			};
		}
		
		
		 // ---------------------- TRACE (WAS USED FOR DEBUG) -----------------------------------
		 function trace(text) {
			 //exportRoot.trace_txt.text += "\n" + text;
		 }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// box_mc
	this.box_mc = new lib.Symbol1copy8();
	this.box_mc.name = "box_mc";
	this.box_mc.setTransform(82.6,365.8,0.9064,0.9064);

	this.timeline.addTween(cjs.Tween.get(this.box_mc).wait(1));

	// box_destination_mc
	this.box_destination_mc = new lib.Symbol1copy8();
	this.box_destination_mc.name = "box_destination_mc";
	this.box_destination_mc.setTransform(170.6,228.55,0.9064,0.9064);
	this.box_destination_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.box_destination_mc).wait(1));

	// GUIDE
	this.instance = new lib.Symbol11copy4();
	this.instance.setTransform(170.85,263.95,0.9059,0.9059,0,0,0,50,46.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8copy8, new cjs.Rectangle(37.5,171.8,188.4,240), null);


(lib.Symbol8copy7 = function(mode,startPosition,loop,reversed) {
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
		var _this = this;
		this.current_state = false;
		
		// Movieclip, который таскается
		var dragged_object = this.box_mc;
		
		this.dragged_object = dragged_object; //временный костыль чтобы к dragged_object можно было обратиться с верхнего уровня и назначить addEventListener, можно улучшить просто отредактировав все использования в коде ниже (добавить 'this.') 
		
		// Movieclip, который обозначает конечное положение
		var destination_object = this.box_destination_mc;
		
		// порог "точности" конечного положения 
		var destination_reached_treshold = 50;
		
		// возвращать ли таскаемый объект в исходное положение
		var snap_to_original_position = true; 
		
		var tween_time_succeed = 100;
		var tween_time_failed = 400;
		
		
		stage.mouseMoveOutside = true;
		stage.enableMouseOver(1);
		dragged_object.original_x = dragged_object.x;
		dragged_object.original_y = dragged_object.y;
		dragged_object.destination_x = destination_object.x;
		dragged_object.destination_y = destination_object.y;
		dragged_object.state = "normal";
		
		/*
		Во время перетаскивания объекта для того, чтобы движение было более плавным
		выполняется stage.update(). Без него на 24fps действиельно движение рывками.
		Но каждый вызов stage.update() вызывает tick() в createjs.Ticker и АНИМАЦИЯ
		других, даже не связанных с перетаскиванием элементов - очень сильно ускоряется.
		Чтобы сделать "ускорение анимации" не таким значительным используется
		коэффициент trottle_stage_update_ratio. То есть stage.update() вызывается 
		в N раз реже.
		*/
		var trottle_stage_update_ratio = 1; 
		var trottle_stage_update_counter = 0;
		
		// вывод данных, можно исключить
		trace(dragged_object.original_x);
		trace(dragged_object.original_y);
		
		function destination_reached(current_x, current_y) {
			var distance_x = Math.abs(dragged_object.destination_x - current_x);
			var distance_y = Math.abs(dragged_object.destination_y - current_y);
			if ((distance_x < destination_reached_treshold) && (distance_y < destination_reached_treshold)) {
				return true;
			}
			return false;	
		}
		
		dragged_object.on("mousedown", function(evt){
			_this.parent.targeted_clicks_number++;
		 }, this);
		
		
		dragged_object.on("pressmove", function(evt){
			if (this.parent.replaced_cursor_mc.alpha == 0) {
				this.parent.cursor_idle_mc.alpha = 0;
			}
			
			var adjusted_coords = get_adjusted_coords(evt);
		
			evt.currentTarget.x = adjusted_coords.x;
			evt.currentTarget.y = adjusted_coords.y;
			// вывод данных, можно исключить	
			//exportRoot.current_coordinates_txt.text = "pressmove: \t\t\t\t\t\t\t\t\t\t" + evt.stageX + " " + evt.stageY;
			if (destination_reached(adjusted_coords.x, adjusted_coords.y)) {
				if ((dragged_object.state == "dragged") || (dragged_object.state == "normal")) {
					dragged_object.state = "destination_reached";
					dragged_object.gotoAndPlay("destination_reached_intro_animation");
				}
			}
			else {
				_this.current_state = false; // object NOT in destination position
				if (dragged_object.state == "normal") {
					dragged_object.state = "dragged";
					dragged_object.gotoAndStop("dragged");
				}
				if (dragged_object.state == "destination_reached") {
					dragged_object.state = "dragged";
					dragged_object.gotoAndPlay("destination_reached_outro_animation");
				}
			}
		/*
			trottle_stage_update_counter++;
			if (trottle_stage_update_counter == trottle_stage_update_ratio) {
				trottle_stage_update_counter = 0;
				stage.update(evt);
			}
		*/
		 }, this);
		 
		
		dragged_object.on("pressup", function(evt){
		
			var adjusted_coords = get_adjusted_coords(evt);
			
			if (this.parent.replaced_cursor_mc.alpha == 0) {
				this.parent.cursor_idle_mc.alpha = 1;
			}
			
			if (destination_reached(adjusted_coords.x, adjusted_coords.y)) {
				dragged_object.state = "normal";
				dragged_object.gotoAndPlay("destination_reached_mouseup");
				_this.current_state = true; // object IS in destination position
				_this.parent.check_state(_this.parent);
				my_tween(dragged_object, dragged_object.destination_x, dragged_object.destination_y, tween_time_succeed);
		
				// --------- Yandex Metrika EVENT -------------------
				//ym(99478353,'reachGoal','DOLL');
				ym_debug_function("BOX destination_reached_mouseup");	
			}	
			else {
				dragged_object.state = "normal";
				dragged_object.gotoAndStop("normal");
				if (snap_to_original_position) {
					my_tween(dragged_object, dragged_object.original_x, dragged_object.original_y, tween_time_failed);
				}
				else {
					// do nothing
				}
			}
		 }, this);
		
		
		function my_tween(target, to_x, to_y, time) {
			createjs.Tween.get(target, {override:true})
				 .to({x:to_x, y:to_y}, time, createjs.Ease.quintInOut)
				 .call(handleComplete)
				 .addEventListener("change", handleChange);
			function handleComplete() {
				//Tween complete
				trace("Tween complete");
			}		
			function handleChange() {
				//Tween changed
			}	
		}
		
		
		// ---------------------- COORDINATES CONVERTION -----------------------------------
		function get_adjusted_coords(event) {
		    var ratio = window.devicePixelRatio || 1;
		
			var pt = _this.globalToLocal(stage.mouseX, stage.mouseY);
			var pt_stageX = pt.x;
			var pt_stageY = pt.y;
		
		    return {
		        x: pt_stageX,
		        y: pt_stageY
			};
		}
		
		
		 // ---------------------- TRACE (WAS USED FOR DEBUG) -----------------------------------
		 function trace(text) {
			 //exportRoot.trace_txt.text += "\n" + text;
		 }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// box_mc
	this.box_mc = new lib.Symbol1copy6();
	this.box_mc.name = "box_mc";
	this.box_mc.setTransform(82.6,365.8,0.9064,0.9064);

	this.timeline.addTween(cjs.Tween.get(this.box_mc).wait(1));

	// box_destination_mc
	this.box_destination_mc = new lib.Symbol1copy6();
	this.box_destination_mc.name = "box_destination_mc";
	this.box_destination_mc.setTransform(170.6,261.05,0.9064,0.9064);
	this.box_destination_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.box_destination_mc).wait(1));

	// GUIDE
	this.instance = new lib.Symbol11copy3();
	this.instance.setTransform(170.85,296.45,0.9059,0.9059,0,0,0,50,46.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8copy7, new cjs.Rectangle(37.5,136.1,188.4,275.70000000000005), null);


(lib.ALL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {success_frame:108,alt_frame:251};
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
		
		stage.mouseMoveOutside = true;
		stage.enableMouseOver();
		//stage.cursor = "pointer"; // THIS LINE BREAKS CODE: this.on("rollover", mouseover_event, this);
		//when used, and if only this 'button' intersects with bitmapt it still works but trows errors into browser console
		// you need to use 'clean' shape (not cantaining bitmaps) for addEventListener rollover detection
		
		// ------------------------ CHECK STATE (WHETHER TO GO THE NEXT FRAME?) ------------------------------
		this.check_state = function(_this){
			if ((_this.box_1_mc.current_state == true) && 
				(_this.box_2_mc.current_state == true) && 
				(_this.box_3_mc.current_state == true)) {
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
		
		canvas.addEventListener('mousedown', down.bind(this));
		function down() {
			if (this.not_clickable_is_active == true) {	
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
		
		
		
			this.init = true;
		}
	}
	this.frame_102 = function() {
		this.stop();
	}
	this.frame_115 = function() {
		// ------------------------ RETURN WHOLE *.HTML FILE TO BE CLICKABLE AGAIN --------
		this.not_clickable_is_active = false;
		document.getElementById("click_area").style = "";
		document.getElementById("click_area").removeAttribute("onclick");
		
		// ------------------------ TOUCH DISABLED ------------------------------
		createjs.Touch.disable(stage);
		
		
		this.replaced_cursor_mc.alpha = 0;
		this.cursor_idle_mc.alpha = 0;
	}
	this.frame_209 = function() {
		this.stop();
	}
	this.frame_271 = function() {
		this.not_clickable_is_active = false;
		document.getElementById("click_area").style = "";
		document.getElementById("click_area").removeAttribute("onclick");
		
		// ------------------------ TOUCH DISABLED ------------------------------
		createjs.Touch.disable(stage);
		
		
		this.replaced_cursor_mc.alpha = 0;
		this.cursor_idle_mc.alpha = 0;
	}
	this.frame_324 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(101).call(this.frame_102).wait(13).call(this.frame_115).wait(94).call(this.frame_209).wait(62).call(this.frame_271).wait(53).call(this.frame_324).wait(59));

	// CURSOR_IDLE
	this.cursor_idle_mc = new lib.Symbol8();
	this.cursor_idle_mc.name = "cursor_idle_mc";
	this.cursor_idle_mc.setTransform(-40.8,-48.1,1.5,1.5,0,0,0,14.7,16.2);

	this.timeline.addTween(cjs.Tween.get(this.cursor_idle_mc).wait(49).to({x:88.05,y:514.05},0).to({x:157.05,y:393},12,cjs.Ease.quintOut).wait(322));

	// cursor_2_mc
	this.cursor_3_mc = new lib.cursor_mc_1();
	this.cursor_3_mc.name = "cursor_3_mc";
	this.cursor_3_mc.setTransform(-32.5,81.25,1.5,1.5,0,0,0,8,8.1);
	this.cursor_3_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cursor_3_mc).wait(383));

	// cursor_2_mc
	this.cursor_2_mc = new lib.cursor_mccopy();
	this.cursor_2_mc.name = "cursor_2_mc";
	this.cursor_2_mc.setTransform(-32.4,41.15,1,1,0,0,0,8,8);
	this.cursor_2_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cursor_2_mc).wait(383));

	// cursor_mc
	this.cursor_mc = new lib.cursor_mc();
	this.cursor_mc.name = "cursor_mc";
	this.cursor_mc.setTransform(-32.4,8,1,1,0,0,0,8,8);
	this.cursor_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cursor_mc).wait(383));

	// check_box
	this.checkbox_3_mc = new lib.Symbol1();
	this.checkbox_3_mc.name = "checkbox_3_mc";
	this.checkbox_3_mc.setTransform(-120,85.5,1,1,0,0,0,10.2,10.2);
	this.checkbox_3_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkbox_3_mc).wait(36).to({_off:false},0).to({_off:true},110).wait(237));

	// check_box
	this.checkbox_2_mc = new lib.Symbol1();
	this.checkbox_2_mc.name = "checkbox_2_mc";
	this.checkbox_2_mc.setTransform(-120,45.5,1,1,0,0,0,10.2,10.2);
	this.checkbox_2_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkbox_2_mc).wait(36).to({_off:false},0).to({_off:true},110).wait(237));

	// check_box
	this.checkbox_1_mc = new lib.Symbol1();
	this.checkbox_1_mc.name = "checkbox_1_mc";
	this.checkbox_1_mc.setTransform(-120,5.5,1,1,0,0,0,10.2,10.2);
	this.checkbox_1_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkbox_1_mc).wait(36).to({_off:false},0).to({_off:true},110).wait(237));

	// box
	this.box_2_mc = new lib.Symbol8copy7();
	this.box_2_mc.name = "box_2_mc";
	this.box_2_mc.setTransform(371.4,189,0.8875,0.8875);
	this.box_2_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.box_2_mc).wait(5).to({alpha:1},0).wait(1).to({regX:126.6,regY:275.2,x:409.25,y:386.75},0).wait(1).to({x:360.1,y:356.1},0).wait(1).to({x:327.8,y:336},0).wait(1).to({x:304.5,y:321.45},0).wait(1).to({x:286.3,y:310.1},0).wait(1).to({x:271.3,y:300.75},0).wait(1).to({x:258.5,y:292.8},0).wait(1).to({x:247.25,y:285.75},0).wait(1).to({x:238.7,y:280.45},0).wait(1).to({x:232.2,y:276.4},0).wait(1).to({x:226.35,y:272.75},0).wait(1).to({x:221.25,y:269.55},0).wait(1).to({x:216.95,y:266.85},0).wait(1).to({x:213.6,y:264.8},0).wait(1).to({x:211.3,y:263.35},0).wait(1).to({x:209.7,y:262.35},0).wait(1).to({x:208.35,y:261.5},0).wait(1).to({x:207.2,y:260.8},0).wait(1).to({x:206.15,y:260.15},0).wait(1).to({x:205.3,y:259.6},0).wait(1).to({x:204.5,y:259.1},0).wait(1).to({x:203.75,y:258.65},0).wait(1).to({x:203.15,y:258.25},0).wait(1).to({x:202.55,y:257.9},0).wait(1).to({x:202.05,y:257.6},0).wait(1).to({x:201.6,y:257.3},0).wait(1).to({x:201.2,y:257.05},0).wait(1).to({x:200.85,y:256.85},0).wait(1).to({x:200.55,y:256.65},0).wait(1).to({x:200.3,y:256.5},0).wait(1).to({x:200.1,y:256.35},0).wait(1).to({x:199.9,y:256.25},0).wait(1).to({x:199.75,y:256.15},0).wait(1).to({x:199.65,y:256.1},0).wait(1).to({regX:0,regY:0,x:87.3,y:11.9},0).wait(90).to({x:167.3},15,cjs.Ease.quintIn).to({_off:true},1).wait(237));

	// box
	this.box_3_mc = new lib.Symbol8copy9();
	this.box_3_mc.name = "box_3_mc";
	this.box_3_mc.setTransform(304.45,107.95,0.8875,0.8875);
	this.box_3_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.box_3_mc).wait(5).to({alpha:1},0).wait(1).to({regX:-5.4,regY:275.7,x:263.15,y:327.4},0).wait(1).to({x:239.1,y:310.8},0).wait(1).to({x:223.3,y:299.85},0).wait(1).to({x:211.9,y:292},0).wait(1).to({x:203,y:285.8},0).wait(1).to({x:195.65,y:280.75},0).wait(1).to({x:189.4,y:276.45},0).wait(1).to({x:183.9,y:272.65},0).wait(1).to({x:179.7,y:269.75},0).wait(1).to({x:176.5,y:267.55},0).wait(1).to({x:173.65,y:265.55},0).wait(1).to({x:171.15,y:263.85},0).wait(1).to({x:169.05,y:262.4},0).wait(1).to({x:167.4,y:261.25},0).wait(1).to({x:166.3,y:260.45},0).wait(1).to({x:165.5,y:259.95},0).wait(1).to({x:164.85,y:259.5},0).wait(1).to({x:164.3,y:259.1},0).wait(1).to({x:163.8,y:258.75},0).wait(1).to({x:163.35,y:258.45},0).wait(1).to({x:162.95,y:258.15},0).wait(1).to({x:162.6,y:257.95},0).wait(1).to({x:162.3,y:257.7},0).wait(1).to({x:162,y:257.5},0).wait(1).to({x:161.75,y:257.35},0).wait(1).to({x:161.55,y:257.2},0).wait(1).to({x:161.35,y:257.05},0).wait(1).to({x:161.2,y:256.95},0).wait(1).to({x:161.05,y:256.85},0).wait(1).to({x:160.9,y:256.75},0).wait(1).to({x:160.8,y:256.7},0).wait(1).to({x:160.7,y:256.6},0).wait(1).to({x:160.65,y:256.55},0).wait(1).to({x:160.6},0).wait(1).to({regX:0,regY:0,x:165.4,y:11.9},0).wait(90).to({x:85.4},15,cjs.Ease.quintIn).to({_off:true},1).wait(237));

	// box
	this.box_1_mc = new lib.Symbol8copy8();
	this.box_1_mc.name = "box_1_mc";
	this.box_1_mc.setTransform(-145.8,96.5,0.8875,0.8875);
	this.box_1_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.box_1_mc).wait(14).to({alpha:1},0).wait(1).to({regX:126.6,regY:258.9,x:21.05,y:296.5},0).wait(1).to({x:50.4,y:280.5},0).wait(1).to({x:68.35,y:270.7},0).wait(1).to({x:81.2,y:263.65},0).wait(1).to({x:91.3,y:258.15},0).wait(1).to({x:99.3,y:253.8},0).wait(1).to({x:104.5,y:250.95},0).wait(1).to({x:108.9,y:248.55},0).wait(1).to({x:112.35,y:246.65},0).wait(1).to({x:114.7,y:245.35},0).wait(1).to({x:116.05,y:244.6},0).wait(1).to({x:117.1,y:244.05},0).wait(1).to({x:117.95,y:243.6},0).wait(1).to({x:118.65,y:243.2},0).wait(1).to({x:119.2,y:242.9},0).wait(1).to({x:119.7,y:242.6},0).wait(1).to({x:120.15,y:242.4},0).wait(1).to({x:120.5,y:242.2},0).wait(1).to({x:120.8,y:242},0).wait(1).to({x:121.05,y:241.9},0).wait(1).to({x:121.25,y:241.8},0).wait(1).to({x:121.4,y:241.7},0).wait(1).to({x:121.5,y:241.65},0).wait(1).to({regX:0,regY:0,x:9.2,y:11.9},0).wait(107).to({_off:true},1).wait(237));

	// static_detail
	this.instance = new lib.Symbol17();
	this.instance.setTransform(160.55,155.75,0.8875,0.8875,0,0,0,45.2,42.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({y:245.75,alpha:1},8,cjs.Ease.get(-1)).to({y:241.75},3,cjs.Ease.get(0.74)).to({y:245.75},3,cjs.Ease.get(-1)).wait(105).to({_off:true},1).wait(237));

	// static_detail
	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(371.7,191.95,0.8875,0.8875,0,0,0,45.2,42.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({x:324.9,y:221.45},0).wait(1).to({x:299.7,y:237.35},0).wait(1).to({x:284.3,y:247.1},0).wait(1).to({x:273.3,y:254.05},0).wait(1).to({x:264.6,y:259.55},0).wait(1).to({x:257.75,y:263.85},0).wait(1).to({x:253.3,y:266.65},0).wait(1).to({x:249.5,y:269.05},0).wait(1).to({x:246.5,y:270.95},0).wait(1).to({x:244.5,y:272.25},0).wait(1).to({x:243.3,y:272.95},0).wait(1).to({x:242.45,y:273.5},0).wait(1).to({x:241.7,y:274},0).wait(1).to({x:241.1,y:274.35},0).wait(1).to({x:240.6,y:274.65},0).wait(1).to({x:240.2,y:274.95},0).wait(1).to({x:239.8,y:275.15},0).wait(1).to({x:239.5,y:275.35},0).wait(1).to({x:239.25,y:275.55},0).wait(1).to({x:239.05,y:275.65},0).wait(1).to({x:238.85,y:275.75},0).wait(1).to({x:238.75,y:275.85},0).wait(1).to({x:238.65,y:275.9},0).wait(1).to({y:275.95},0).wait(92).to({x:318.65},15,cjs.Ease.quintIn).to({_off:true},1).wait(237));

	// static_detail
	this.instance_2 = new lib.Symbol17();
	this.instance_2.setTransform(-42.35,193.95,0.8875,0.8875,0,0,0,45.2,42.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(1).to({x:-9.6,y:215.4},0).wait(1).to({x:12,y:229.6},0).wait(1).to({x:26.15,y:238.9},0).wait(1).to({x:36.4,y:245.65},0).wait(1).to({x:44.35,y:250.9},0).wait(1).to({x:50.95,y:255.25},0).wait(1).to({x:56.55,y:258.95},0).wait(1).to({x:61.5,y:262.15},0).wait(1).to({x:65.25,y:264.65},0).wait(1).to({x:68.1,y:266.5},0).wait(1).to({x:70.7,y:268.2},0).wait(1).to({x:72.95,y:269.7},0).wait(1).to({x:74.8,y:270.95},0).wait(1).to({x:76.3,y:271.9},0).wait(1).to({x:77.3,y:272.55},0).wait(1).to({x:78,y:273},0).wait(1).to({x:78.6,y:273.4},0).wait(1).to({x:79.1,y:273.75},0).wait(1).to({x:79.55,y:274.05},0).wait(1).to({x:79.95,y:274.3},0).wait(1).to({x:80.3,y:274.5},0).wait(1).to({x:80.6,y:274.75},0).wait(1).to({x:80.9,y:274.9},0).wait(1).to({x:81.15,y:275.05},0).wait(1).to({x:81.35,y:275.2},0).wait(1).to({x:81.55,y:275.35},0).wait(1).to({x:81.7,y:275.45},0).wait(1).to({x:81.9,y:275.55},0).wait(1).to({x:82,y:275.65},0).wait(1).to({x:82.15,y:275.75},0).wait(1).to({x:82.25,y:275.8},0).wait(1).to({x:82.3,y:275.85},0).wait(1).to({x:82.35,y:275.9},0).wait(1).to({x:82.4},0).wait(1).to({x:82.45,y:275.95},0).wait(90).to({x:2.45},15,cjs.Ease.quintIn).to({_off:true},1).wait(237));

	// static_detail
	this.instance_3 = new lib.Symbol17();
	this.instance_3.setTransform(-86.45,116.9,0.8875,0.8875,0,0,0,45.2,42.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({x:-21.65,y:158.55},0).wait(1).to({x:21.05,y:186.1},0).wait(1).to({x:49.05,y:204.15},0).wait(1).to({x:69.35,y:217.2},0).wait(1).to({x:85.2,y:227.4},0).wait(1).to({x:98.2,y:235.8},0).wait(1).to({x:109.35,y:242.95},0).wait(1).to({x:119.1,y:249.25},0).wait(1).to({x:126.55,y:254.05},0).wait(1).to({x:132.2,y:257.7},0).wait(1).to({x:137.3,y:260.95},0).wait(1).to({x:141.75,y:263.85},0).wait(1).to({x:145.45,y:266.25},0).wait(1).to({x:148.35,y:268.1},0).wait(1).to({x:150.35,y:269.4},0).wait(1).to({x:151.75,y:270.3},0).wait(1).to({x:152.95,y:271.05},0).wait(1).to({x:153.95,y:271.7},0).wait(1).to({x:154.85,y:272.25},0).wait(1).to({x:155.6,y:272.75},0).wait(1).to({x:156.3,y:273.2},0).wait(1).to({x:156.9,y:273.6},0).wait(1).to({x:157.45,y:273.95},0).wait(1).to({x:157.95,y:274.3},0).wait(1).to({x:158.4,y:274.55},0).wait(1).to({x:158.8,y:274.8},0).wait(1).to({x:159.15,y:275.05},0).wait(1).to({x:159.45,y:275.25},0).wait(1).to({x:159.7,y:275.4},0).wait(1).to({x:159.95,y:275.55},0).wait(1).to({x:160.15,y:275.65},0).wait(1).to({x:160.3,y:275.75},0).wait(1).to({x:160.4,y:275.85},0).wait(1).to({x:160.5,y:275.9},0).wait(1).to({x:160.55,y:275.95},0).wait(105).to({_off:true},1).wait(237));

	// LEGO_LOGO
	this.instance_4 = new lib.Symbol12();
	this.instance_4.setTransform(159.6,81.2,0.7345,0.7345,0,0,0,64.2,64.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(383));

	// CTA
	this.instance_5 = new lib.Symbol5copy();
	this.instance_5.setTransform(162.5,405.15,2.5557,2.5557,0,0,0,56.3,18.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160).to({_off:false},0).to({_off:true},72).wait(39).to({_off:false},0).to({_off:true},80).wait(32));

	// text
	this.instance_6 = new lib.Symbol19copy();
	this.instance_6.setTransform(159.5,298.95,1,1,0,0,0,99.5,105);
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol19();
	this.instance_7.setTransform(159.5,288.95,1,1,0,0,0,99.5,105);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(146).to({_off:false},0).wait(1).to({regX:100.5,regY:46.9,x:160.5,y:222.8},0).wait(1).to({y:210.75},0).wait(1).to({y:203.45},0).wait(1).to({y:198.65},0).wait(1).to({y:195.2},0).wait(1).to({y:192.65},0).wait(1).to({y:190.7},0).wait(1).to({y:189.15},0).wait(1).to({y:187.9},0).wait(1).to({y:186.85},0).wait(1).to({y:186},0).wait(1).to({y:185.3},0).wait(1).to({y:184.75},0).wait(1).to({y:184.25},0).wait(1).to({y:183.9},0).wait(1).to({y:183.55},0).wait(1).to({y:183.3},0).wait(1).to({y:183.1},0).wait(1).to({y:182.95},0).wait(1).to({y:182.85},0).wait(1).to({y:182.7},0).wait(1).to({y:182.6},0).wait(1).to({y:182.5},0).wait(1).to({y:182.4},0).wait(1).to({y:182.3},0).wait(1).to({y:182.2},0).wait(1).to({y:182.1},0).wait(1).to({y:182},0).wait(1).to({y:181.9},0).wait(1).to({y:181.8},0).wait(1).to({y:181.7},0).wait(1).to({y:181.6},0).wait(1).to({y:181.5},0).wait(1).to({y:181.4},0).wait(1).to({y:181.35},0).wait(1).to({y:181.25},0).wait(1).to({y:181.15},0).wait(1).to({y:181.1},0).wait(1).to({y:181.05},0).wait(1).to({y:180.95},0).wait(1).to({y:180.9},0).wait(1).to({y:180.85},0).wait(2).to({regX:99.5,regY:105,x:159.5,y:238.95},0).to({_off:true},42).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(255).to({_off:false},0).wait(1).to({regX:100,regY:46.8,x:160,y:215.4},0).wait(1).to({y:205.3},0).wait(1).to({y:199.25},0).wait(1).to({y:195.25},0).wait(1).to({y:192.45},0).wait(1).to({y:190.35},0).wait(1).to({y:188.75},0).wait(1).to({y:187.45},0).wait(1).to({y:186.4},0).wait(1).to({y:185.6},0).wait(1).to({y:184.9},0).wait(1).to({y:184.35},0).wait(1).to({y:183.85},0).wait(1).to({y:183.5},0).wait(1).to({y:183.2},0).wait(1).to({y:182.9},0).wait(1).to({y:182.7},0).wait(1).to({y:182.55},0).wait(1).to({y:182.45},0).wait(1).to({y:182.35},0).wait(1).to({y:182.25},0).wait(1).to({y:182.15},0).wait(1).to({y:182.05},0).wait(1).to({y:182},0).wait(1).to({y:181.9},0).wait(1).to({y:181.8},0).wait(1).to({y:181.7},0).wait(1).to({y:181.65},0).wait(1).to({y:181.55},0).wait(1).to({y:181.45},0).wait(1).to({y:181.4},0).wait(1).to({y:181.3},0).wait(1).to({y:181.25},0).wait(1).to({y:181.15},0).wait(1).to({y:181.1},0).wait(1).to({y:181.05},0).wait(1).to({y:180.95},0).wait(1).to({y:180.9},0).wait(1).to({y:180.85},0).wait(1).to({y:180.8},0).wait(1).to({y:180.75},0).wait(2).to({regX:99.5,regY:105,x:159.5,y:238.95},0).to({_off:true},53).wait(32));

	// Layer_4
	this.instance_8 = new lib.Symbol13();
	this.instance_8.setTransform(158.1,272.65,6.0305,6.0305,0,0,0,43.2,102.6);
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol13_1();
	this.instance_9.setTransform(158,272.65,5.9527,5.9527,0,0,0,43.2,102.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(146).to({_off:false},0).wait(1).to({scaleX:4.4527,scaleY:4.4527,x:158.25,y:272.75},0).wait(1).to({scaleX:3.398,scaleY:3.398,x:158.3},0).wait(1).to({scaleX:2.7581,scaleY:2.7581,x:158.35,y:272.8},0).wait(1).to({scaleX:2.3373,scaleY:2.3373,y:272.7},0).wait(1).to({scaleX:2.0389,scaleY:2.0389,x:158.45,y:272.75},0).wait(1).to({scaleX:1.8161,scaleY:1.8161,x:158.4},0).wait(1).to({scaleX:1.6438,scaleY:1.6438,x:158.45},0).wait(1).to({scaleX:1.5072,scaleY:1.5072},0).wait(1).to({scaleX:1.3972,scaleY:1.3972},0).wait(1).to({scaleX:1.3075,scaleY:1.3075,x:158.5},0).wait(1).to({scaleX:1.2337,scaleY:1.2337,x:158.45},0).wait(1).to({scaleX:1.1728,scaleY:1.1728},0).wait(1).to({scaleX:1.1225,scaleY:1.1225,x:158.5,y:272.7},0).wait(1).to({scaleX:1.0809,scaleY:1.0809,y:272.75},0).wait(1).to({scaleX:1.0468,scaleY:1.0468,x:158.45},0).wait(1).to({scaleX:1.0189,scaleY:1.0189},0).wait(1).to({scaleX:0.9964,scaleY:0.9964,x:158.5},0).wait(1).to({scaleX:0.9786,scaleY:0.9786},0).wait(1).to({scaleX:0.9649,scaleY:0.9649},0).wait(1).to({scaleX:0.9546,scaleY:0.9546},0).wait(1).to({scaleX:0.9449,scaleY:0.9449},0).wait(1).to({scaleX:0.9353,scaleY:0.9353},0).wait(1).to({scaleX:0.9258,scaleY:0.9258},0).wait(1).to({scaleX:0.9164,scaleY:0.9164,y:272.7},0).wait(1).to({scaleX:0.9072,scaleY:0.9072},0).wait(1).to({scaleX:0.898,scaleY:0.898,y:272.75},0).wait(1).to({scaleX:0.8891,scaleY:0.8891,y:272.7},0).wait(1).to({scaleX:0.8802,scaleY:0.8802,y:272.75},0).wait(1).to({scaleX:0.8716,scaleY:0.8716,y:272.7},0).wait(1).to({scaleX:0.863,scaleY:0.863,y:272.75},0).wait(1).to({scaleX:0.8547,scaleY:0.8547},0).wait(1).to({scaleX:0.8466,scaleY:0.8466},0).wait(1).to({scaleX:0.8386,scaleY:0.8386},0).wait(1).to({scaleX:0.8309,scaleY:0.8309},0).wait(1).to({scaleX:0.8235,scaleY:0.8235},0).wait(1).to({scaleX:0.8163,scaleY:0.8163},0).wait(1).to({scaleX:0.8095,scaleY:0.8095},0).wait(1).to({scaleX:0.8031,scaleY:0.8031},0).wait(1).to({scaleX:0.7971,scaleY:0.7971},0).wait(1).to({scaleX:0.7917,scaleY:0.7917,y:272.7},0).wait(1).to({scaleX:0.7869,scaleY:0.7869,y:272.75},0).wait(1).to({scaleX:0.7829,scaleY:0.7829},0).wait(1).to({scaleX:0.7802,scaleY:0.7802},0).wait(1).to({regX:43.3,regY:102.7,scaleX:0.779,scaleY:0.779,x:158.55,y:272.8},0).to({_off:true},42).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(255).to({_off:false},0).wait(1).to({scaleX:4.3677,scaleY:4.3677,x:157.95,y:272.5},0).wait(1).to({scaleX:3.3228,scaleY:3.3228,x:157.85,y:272.3},0).wait(1).to({scaleX:2.6944,scaleY:2.6944,x:157.8,y:272.25},0).wait(1).to({scaleX:2.2827,scaleY:2.2827,x:157.75,y:272.15},0).wait(1).to({scaleX:1.9915,scaleY:1.9915,y:272.1},0).wait(1).to({scaleX:1.7745,scaleY:1.7745,x:157.7,y:272.05},0).wait(1).to({scaleX:1.607,scaleY:1.607},0).wait(1).to({scaleX:1.4745,scaleY:1.4745},0).wait(1).to({scaleX:1.368,scaleY:1.368,y:272},0).wait(1).to({scaleX:1.2815,scaleY:1.2815,y:272.05},0).wait(1).to({scaleX:1.2105,scaleY:1.2105,y:272},0).wait(1).to({scaleX:1.1522,scaleY:1.1522},0).wait(1).to({scaleX:1.1042,scaleY:1.1042},0).wait(1).to({scaleX:1.0648,scaleY:1.0648},0).wait(1).to({scaleX:1.0326,scaleY:1.0326},0).wait(1).to({scaleX:1.0065,scaleY:1.0065,y:271.95},0).wait(1).to({scaleX:0.9858,scaleY:0.9858,y:272},0).wait(1).to({scaleX:0.9696,scaleY:0.9696},0).wait(1).to({scaleX:0.9574,scaleY:0.9574,x:157.65},0).wait(1).to({scaleX:0.9475,scaleY:0.9475,x:157.7,y:271.95},0).wait(1).to({scaleX:0.9378,scaleY:0.9378,x:157.65},0).wait(1).to({scaleX:0.9282,scaleY:0.9282,x:157.7,y:272},0).wait(1).to({scaleX:0.9187,scaleY:0.9187,y:271.95},0).wait(1).to({scaleX:0.9093,scaleY:0.9093},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.8909,scaleY:0.8909},0).wait(1).to({scaleX:0.882,scaleY:0.882,x:157.65},0).wait(1).to({scaleX:0.8732,scaleY:0.8732},0).wait(1).to({scaleX:0.8645,scaleY:0.8645,x:157.7},0).wait(1).to({scaleX:0.8561,scaleY:0.8561},0).wait(1).to({scaleX:0.8478,scaleY:0.8478,x:157.65},0).wait(1).to({scaleX:0.8397,scaleY:0.8397,x:157.7},0).wait(1).to({scaleX:0.8319,scaleY:0.8319},0).wait(1).to({scaleX:0.8243,scaleY:0.8243,x:157.65},0).wait(1).to({scaleX:0.8171,scaleY:0.8171},0).wait(1).to({scaleX:0.8101,scaleY:0.8101},0).wait(1).to({scaleX:0.8036,scaleY:0.8036},0).wait(1).to({scaleX:0.7975,scaleY:0.7975,y:271.9},0).wait(1).to({scaleX:0.792,scaleY:0.792,y:271.95},0).wait(1).to({scaleX:0.7871,scaleY:0.7871},0).wait(1).to({scaleX:0.783,scaleY:0.783,x:157.7},0).wait(1).to({scaleX:0.7802,scaleY:0.7802,x:157.65},0).wait(1).to({regX:43.3,regY:102.7,scaleX:0.779,scaleY:0.779,x:157.75,y:272},0).to({_off:true},53).wait(32));

	// text
	this.instance_10 = new lib.Symbol18();
	this.instance_10.setTransform(162.3,179.35,1,1,0,0,0,94.7,37.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(49).to({_off:false},0).wait(1).to({regX:95.3,regY:37.9,x:162.9,y:176.8},0).wait(1).to({y:174.8},0).wait(1).to({y:173.6},0).wait(1).to({y:172.75},0).wait(1).to({y:172.2},0).wait(1).to({y:171.75},0).wait(1).to({y:171.4},0).wait(1).to({y:171.15},0).wait(1).to({y:170.9},0).wait(1).to({y:170.75},0).wait(1).to({y:170.6},0).wait(1).to({y:170.45},0).wait(1).to({y:170.35},0).wait(1).to({y:170.25},0).wait(1).to({y:170.2},0).wait(1).to({y:170.15},0).wait(1).to({y:170.1},0).wait(1).to({y:170.05},0).wait(1).to({y:170},0).wait(2).to({y:169.95},0).wait(3).to({y:169.9},0).wait(3).to({y:169.85},0).wait(3).to({y:169.8},0).wait(3).to({y:169.75},0).wait(4).to({y:169.7},0).wait(4).to({y:169.65},0).wait(6).to({regX:94.7,regY:37.6,x:162.3,y:169.35},0).to({_off:true},50).wait(237));

	// GUIDE_FRAME_GREEN
	this.instance_11 = new lib.back();
	this.instance_11.setTransform(160,240,1,1,0,0,0,160,240);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.back_1();
	this.instance_12.setTransform(160,240,1,1,0,0,0,160,240);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(137).to({_off:false},0).wait(1).to({alpha:0.0028},0).wait(1).to({alpha:0.0117},0).wait(1).to({alpha:0.0279},0).wait(1).to({alpha:0.0529},0).wait(1).to({alpha:0.0883},0).wait(1).to({alpha:0.1363},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.2789},0).wait(1).to({alpha:0.3754},0).wait(1).to({alpha:0.484},0).wait(1).to({alpha:0.5949},0).wait(1).to({alpha:0.697},0).wait(1).to({alpha:0.7832},0).wait(1).to({alpha:0.8518},0).wait(1).to({alpha:0.9042},0).wait(1).to({alpha:0.9427},0).wait(1).to({alpha:0.9698},0).wait(1).to({alpha:0.9874},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:1},0).to({_off:true},75).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(251).to({_off:false},0).wait(1).to({alpha:0.0352},0).wait(1).to({alpha:0.1765},0).wait(1).to({alpha:0.484},0).wait(1).to({alpha:0.8079},0).wait(1).to({alpha:0.9619},0).wait(1).to({alpha:1},0).wait(126));

	// GUIDE_FRAME_RED
	this.instance_13 = new lib.back1();
	this.instance_13.setTransform(160,240,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(383));

	// BACKGROUND
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFED00").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(383));

	// not_targeted_area_mc
	this.not_targeted_area_mc = new lib.not_targeted_area_mc();
	this.not_targeted_area_mc.name = "not_targeted_area_mc";
	this.not_targeted_area_mc.setTransform(160,240,1,1,0,0,0,160,240);
	this.not_targeted_area_mc.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.not_targeted_area_mc).wait(383));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-786.8,-346,1889.7,1236.9);


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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ALL
	this.instance = new lib.ALL();
	this.instance.setTransform(160,240,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(47.6,166.5,515.4,388);
// library properties:
lib.properties = {
	id: 'A6EDE19E22AF124B814C24110DF628EA',
	width: 320,
	height: 480,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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