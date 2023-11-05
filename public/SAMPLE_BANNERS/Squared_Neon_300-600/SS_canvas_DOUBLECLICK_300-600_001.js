(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/BRICK_300600.jpg", id:"BRICK_300600"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.BRICK_300600 = function() {
	this.initialize(img.BRICK_300600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(1,1,1).p("EAXcgu3MAAABdvMgu3AAAMAAAhdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-301,302,602);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(1,1,1).p("EAXcgu3MAAABdvMgu3AAAMAAAhdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-301,302,602);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABFQgDgFAAgIIAAhgIgLgBQgHgBgEgFQgEgEAAgHQABgGAEgEQAEgFAHAAIAZAAQAIAAAFAFQAFAFAAAHQABA4gBA4QAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(3,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.1,14.9);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKDvQgLgIgEgFQgPgRgVAKIgQAGQgKACgFgCQgGgCgEgJIgJgSQgHgSgUAAIgWgBQgPgCgBgPIgCgZQAAgQgOgGIgUgJQgKgFgCgGQgDgGAEgKIAGgRQAIgSgOgOIgPgQQgJgMAJgKIAQgSQAMgMgGgQIgIgYQgEgNAMgHIAWgLQARgHAAgRIABgXQAAgQAQgCQAJgBAGAAQAdADAIgcIAFgJQAFgKAGgDQAGgCAKADIATAHQAQAHANgNIARgQQALgJALAJIARAQQANANARgHIAPgGQANgFAHADQAHADAFAMIAHAPQAGARAUAAIAVABQAJABAEAEQAFAFAAAKIABAXQAAAPAOAGIAQAHQAOAGADAHQADAHgGAOIgGAQQgFAPAKALIAPAQQAHAIAAAFQABAGgHAIIgNAOQgPANAJATIAHAVQAEAOgMAGIgXALQgQAHAAARIgBAXQgBAQgQACIgXABQgTAAgGARIgLAWQgFAKgLAAIgWgIQgWgLgQATIgOAMQgGAEgFAAQgEAAgGgEgAAAiKQg5AAgpApQgoApAAA4QAAA6ApAoQApApA4AAQA5ABApgpQApgpAAg6QAAg4gpgpQgpgpg4AAIgBAAg");
	this.shape.setTransform(24.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.8,48.8);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcBnIhTiQQAUgCAWgWQAFgFAHACQAKAFALADQAeAIAOgbIAMgWQACgEAFgCQAGgBAEAFIBIB+QAHAMgOAAIhHgCQgJgBgEAHIggA/QgEAGgDAAQgEAAgDgFg");
	this.shape.setTransform(11.2,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.5,21.8);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANBjIgfg8QgDgHgIAAIhHADQgIAAgCgDQgCgDAEgIIBHh7QADgFAJAAQAFAAADAGQAHAQAFAIQAOAYAdgHIAXgIQAGgDAEAFIAHAHQAQAPASADIhSCNQgBACgIAGQgGgFgCgEg");
	this.shape.setTransform(11.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.4,21.7);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAxQgOgOAAgXIAAgXQAAgXANgOQAOgOAUAAQAXAAAMALQAMAKgBASIAAABIgXAAQAAgKgGgGQgGgFgKAAQgKAAgHAIQgHAKAAAOIAAAXQAAAOAHAJQAIAJAJAAQAJAAAFgCQAGgCACgCIAAgYIgXAAIAAgQIAwAAIAAAuQgGAHgLAHQgLAFgTAAQgUAAgOgOg");
	this.shape.setTransform(70.9,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZA9IgwhRIgBAAIAABRIgYAAIAAh5IAYAAIAwBRIABAAIAAhRIAYAAIAAB5g");
	this.shape_1.setTransform(59,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLA9IAAh5IAXAAIAAB5g");
	this.shape_2.setTransform(50.4,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZA9IgwhRIgBAAIAABRIgYAAIAAh5IAYAAIAwBRIABAAIAAhRIAYAAIAAB5g");
	this.shape_3.setTransform(41.7,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZA9IgwhRIgBAAIAABRIgYAAIAAh5IAYAAIAwBRIABAAIAAhRIAYAAIAAB5g");
	this.shape_4.setTransform(29.5,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA9IAAh5IAXAAIAAB5g");
	this.shape_5.setTransform(20.9,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXA9IgXhPIAAAAIgVBPIgXAAIgdh5IAZAAIARBSIAAAAIAXhSIASAAIAWBSIAAAAIARhSIAZAAIgdB5g");
	this.shape_6.setTransform(10.6,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,2,77.9,24.9);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguA9IAAh5IArAAQAVAAAOAOQAPAPAAAWIAAATQAAAXgPAOQgOAOgVAAgAgVAqIASAAQAKAAAIgJQAHgJAAgOIAAgTQAAgOgHgJQgIgJgKAAIgSAAg");
	this.shape.setTransform(65.4,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVA9QgDgCgBgHIgBgMIAAgJQAAgJgFgFQgFgFgIAAIgTAAIAAAxIgZAAIAAh5IArAAQATAAAMAKQAMAJAAARQAAAKgFAHQgFAHgKACQALADAFAIQAEAHAAALIAAAJIACALQABAGAEACIAAACgAgVgFIARAAQAJAAAFgFQAFgEAAgJQAAgIgFgFQgFgFgIAAIgSAAg");
	this.shape_1.setTransform(54.3,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcA9IgJgaIgmAAIgIAaIgaAAIAqh5IAXAAIAqB5gAgMAPIAZAAIgNgpIAAAAg");
	this.shape_2.setTransform(42.9,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA9IgXhPIAAAAIgVBPIgXAAIgdh5IAZAAIARBSIAAAAIAXhSIASAAIAWBSIAAAAIARhSIAZAAIgdB5g");
	this.shape_3.setTransform(29.7,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcA9IgJgaIgmAAIgIAaIgaAAIAqh5IAXAAIAqB5gAgMAPIAZAAIgNgpIAAAAg");
	this.shape_4.setTransform(16.6,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,2,64.2,24.9);


(lib.Symbol21copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#277E46").s().p("ArtEqQgSAAgNgNQgMgMAAgSIAAn9QAAgSAMgMQANgNASAAIXbAAQASAAANANQAMAMAAASIAAH9QAAASgMAMQgNANgSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-29.8,158.7,59.7);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjA0QgOgMABgQIAAgBIAWAAQAAAMAJAGQAIAFAJAAQANAAAHgFQAGgFAAgIQAAgHgFgFQgGgFgPgDQgVgFgMgHQgMgIAAgOQAAgQANgLQANgKATAAQAVAAANALQANAMAAAPIAAABIgWAAQAAgIgHgHQgHgHgLAAQgKAAgGAGQgGAFAAAIQAAAHAFAEQAFAEAOAEQAXAEAMAHQAMAJAAAPQAAAQgNALQgOAKgWAAQgVAAgOgMg");
	this.shape.setTransform(73.9,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBKQgMgQAAgbIAAgDQAAgcAMgSQANgTAXAAQAJAAAJAEQAIAEAGAIIAAhFIAXAAIAACyIgRAAIgEgQQgGAJgJAFQgJAFgKAAQgXAAgNgRgAgVgFQgIAMAAAVIAAADQAAASAIAMQAIALAOAAQAKAAAHgEQAHgFAEgIIAAg5QgEgHgHgFQgHgEgKAAQgOAAgIANg");
	this.shape_1.setTransform(60.6,34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBUIgPgsIg9AAIgPAsIgXAAIA8inIASAAIA7CngAgYAVIAxAAIgZhGIAAAAg");
	this.shape_2.setTransform(46.7,35.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAvQgPgRAAgcIAAgDQAAgbAQgSQAPgRAUAAQAZAAANAPQAMAQAAAaIAAAKIhNAAIgBAAQAAATAJAMQAIALAPAAQALAAAJgDQAJgDAGgGIAJAPQgHAGgLAFQgLAEgPAAQgZAAgPgRgAgQgkQgIAJgCAOIAAABIA3AAIAAgCQAAgOgHgJQgHgJgOAAQgKAAgHAKg");
	this.shape_3.setTransform(27.3,37.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBaIAAiyIAVAAIAACyg");
	this.shape_4.setTransform(18,34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBWQgLgDgIgEIAEgSQAGAEAKACQAJACAJAAQAPAAAHgHQAIgIAAgQIAAgOQgGAIgJAEQgJAEgJAAQgXAAgMgQQgNgRAAgZIAAgCQAAgeANgTQAMgSAYAAQAJAAAJAEQAJAFAHAJIACgQIASAAIAAB7QAAAYgOANQgOANgYAAQgJAAgKgCgAgVg3QgIANAAAWIAAACQAAASAIAKQAIAMAOAAQAKAAAHgFQAHgFAFgIIAAg4QgFgIgHgEQgHgFgKAAQgOAAgIAOg");
	this.shape_5.setTransform(8.1,39.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAuQgPgRAAgcIAAgBQAAgcAOgRQAPgSAZAAQAaAAAOARQAPASAAAcIAAABQAAAcgPARQgOASgaAAQgYAAgPgSgAgXggQgJANAAATIAAABQAAAUAJAMQAIANAPAAQAQAAAJgNQAIgMAAgUIAAgBQAAgTgIgNQgJgOgQAAQgPAAgIAOg");
	this.shape_6.setTransform(-5.1,37.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAuQgQgRAAgcIAAgBQABgcAPgRQAOgSAZAAQAaAAAPARQAPASAAAcIAAABQAAAcgPARQgPASgaAAQgYAAgPgSgAgXggQgJANABATIAAABQgBAUAJAMQAIANAPAAQAQAAAIgNQAJgMAAgUIAAgBQAAgTgJgNQgIgOgQAAQgPAAgIAOg");
	this.shape_7.setTransform(-18.6,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrBCQgTgSAAgfIAAghQAAgeATgUQASgTAbAAQAcAAAQAPQAQAPAAAXIAAABIgWAAQAAgQgKgKQgKgKgSAAQgRAAgMAPQgMAOAAAWIAAAhQAAAWANAPQAMAOARAAQAPAAAJgDQAJgFAEgFIAAglIgmAAIAAgSIA9AAIAAA9QgGAJgPAIQgPAIgYAAQgbAAgTgUg");
	this.shape_8.setTransform(-33.6,35.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeA/IAAh7IAVAAIACATQAGgLAFgEQAIgGAKAAIAFAAIADABIgCAVIgMAAQgJgBgGAFQgFAEgDAIIAABXg");
	this.shape_9.setTransform(-50.7,37.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAuQgPgRAAgcIAAgBQAAgcAOgRQAPgSAZAAQAZAAAPARQAQASgBAcIAAABQABAcgQARQgPASgZAAQgYAAgPgSgAgXggQgJANAAATIAAABQAAAUAJAMQAIANAPAAQAQAAAJgNQAIgMAAgUIAAgBQAAgTgIgNQgJgOgQAAQgPAAgIAOg");
	this.shape_10.setTransform(-62.2,37.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBbIAAhqIgUAAIAAgRIAUAAIAAgQQAAgUAKgLQAJgLATAAIAHABIAJACIgDARIgEgBIgGAAQgKAAgGAGQgEAGAAALIAAAQIAWAAIAAARIgWAAIAABqg");
	this.shape_11.setTransform(-72.2,34.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbA/IAAhMQAAgRgGgHQgHgGgNgBQgJAAgHAFQgHADgFAIIAABbIgWAAIAAh7IAUAAIACASQAGgJAJgFQAKgGAKAAQAUAAALALQALAMAAAZIAABNg");
	this.shape_12.setTransform(57,12.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnAuQgQgRAAgcIAAgBQABgcAPgRQAPgSAYAAQAZAAAQARQAPASAAAcIAAABQAAAcgPARQgQASgZAAQgYAAgPgSgAgXggQgIANAAATIAAABQAAAUAIAMQAIANAPAAQAQAAAIgNQAJgMAAgUIAAgBQAAgTgJgNQgIgOgQAAQgPAAgIAOg");
	this.shape_13.setTransform(43.6,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKBaIAAh7IAVAAIAAB7gAgKhCIAAgWIAVAAIAAAWg");
	this.shape_14.setTransform(33.9,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEBGQgIgJAAgRIAAhKIgUAAIAAgRIAUAAIAAgeIAUAAIAAAeIAYAAIAAARIgYAAIAABKQAAAIAEAEQAEADAGAAIAEAAIAEgBIADAPQgCADgFABIgKABQgOAAgGgIg");
	this.shape_15.setTransform(26.9,11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoA2QgLgKAAgRQAAgSAPgJQAOgJAXAAIAZAAIAAgNQAAgLgHgGQgGgHgNAAQgJAAgHAGQgGAGAAAHIgWABIAAgBQgBgOAOgLQANgLAUAAQAVAAANAKQANALAAAUIAAA7IAAANIADAMIgYAAIgBgKIgBgJQgGAJgLAGQgJAGgLAAQgTAAgKgKgAgTALQgJAHAAAJQAAAIAFAFQAGAFAKAAQAKAAAKgGQAKgHADgIIAAgUIgaAAQgLAAgIAHg");
	this.shape_16.setTransform(16.4,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABAA/IAAhJQAAgTgHgHQgGgIgNAAQgLABgIAHQgHAJgBAMIAAAAIAABOIgVAAIAAhJQAAgRgGgJQgHgHgMgBQgLAAgGAFQgHAEgEAHIAABbIgWAAIAAh7IAUAAIACAQQAGgIAJgFQAKgFAMAAQANAAAJAGQAGAFAFAMQAGgLAKgGQAJgGANAAQATAAALANQALANAAAbIAABIg");
	this.shape_17.setTransform(-0.4,12.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnAuQgPgRAAgcIAAgBQgBgcAQgRQAPgSAYAAQAaAAAPARQAOASAAAcIAAABQAAAcgOARQgPASgaAAQgYAAgPgSgAgXggQgJANAAATIAAABQAAAUAJAMQAIANAPAAQAQAAAJgNQAIgMAAgUIAAgBQAAgTgIgNQgJgOgQAAQgPAAgIAOg");
	this.shape_18.setTransform(-17.4,12.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEBGQgIgJAAgRIAAhKIgUAAIAAgRIAUAAIAAgeIAUAAIAAAeIAYAAIAAARIgYAAIAABKQAAAIAEAEQAEADAGAAIAEAAIAEgBIADAPQgCADgFABIgKABQgOAAgGgIg");
	this.shape_19.setTransform(-28.2,11.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmAyQgLgNAAgbIAAhIIAXAAIAABIQAAAUAFAHQAGAIANAAQAKAAAIgFQAIgFAEgJIAAhYIAWAAIAAB7IgUAAIgBgTQgGAKgKAGQgJAFgKAAQgUAAgMgNg");
	this.shape_20.setTransform(-38.9,12.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAuBUIgPgsIg9AAIgPAsIgXAAIA8inIASAAIA7CngAgYAVIAxAAIgZhGIAAAAg");
	this.shape_21.setTransform(-53,10.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnBKQgMgQAAgbIAAgDQAAgcAMgSQANgTAXAAQAJAAAJAEQAIAEAGAIIAAhFIAXAAIAACyIgRAAIgEgQQgGAJgJAFQgJAFgKAAQgXAAgNgRgAgVgFQgIAMAAAVIAAADQAAASAIAMQAIALAOAAQAKAAAHgEQAHgFAEgIIAAg5QgEgHgHgFQgHgEgKAAQgOAAgIANg");
	this.shape_22.setTransform(45.4,-15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAbA/IAAhNQAAgQgGgHQgHgHgNABQgJAAgHADQgHAEgFAIIAABbIgWAAIAAh7IAUAAIACATQAGgKAJgGQAKgFAKAAQAUAAALAMQALAMAAAYIAABNg");
	this.shape_23.setTransform(32.2,-12.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoA2QgLgKAAgRQAAgSAPgJQAOgJAXAAIAZAAIAAgNQAAgLgHgGQgGgHgNAAQgJAAgHAGQgGAGAAAHIgWABIAAgBQgBgOAOgLQANgLAUAAQAVAAANAKQANALAAAUIAAA7IAAANIADAMIgYAAIgBgKIgBgJQgGAJgLAGQgJAGgLAAQgTAAgKgKgAgTALQgJAHAAAJQAAAIAFAFQAGAFAKAAQAKAAAKgGQAKgHADgIIAAgUIgaAAQgLAAgIAHg");
	this.shape_24.setTransform(18.9,-12.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEBGQgIgJAAgRIAAhKIgUAAIAAgRIAUAAIAAgeIAUAAIAAAeIAYAAIAAARIgYAAIAABKQAAAIAEAEQAEADAGAAIAEAAIAEgBIADAPQgCADgFABIgKABQgOAAgGgIg");
	this.shape_25.setTransform(2.6,-13.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKBZIAAh7IAVAAIAAB7gAgKhBIAAgYIAVAAIAAAYg");
	this.shape_26.setTransform(-4.3,-15.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnBKQgMgQAAgbIAAgDQAAgcAMgSQANgTAXAAQAJAAAJAEQAIAEAGAIIAAhFIAXAAIAACyIgRAAIgEgQQgGAJgJAFQgJAFgKAAQgXAAgNgRgAgVgFQgIAMAAAVIAAADQAAASAIAMQAIALAOAAQAKAAAHgEQAHgFAEgIIAAg5QgEgHgHgFQgHgEgKAAQgOAAgIANg");
	this.shape_27.setTransform(-14.3,-15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgmAyQgLgNAAgbIAAhIIAXAAIAABIQAAAUAFAHQAGAIANAAQAKAAAIgFQAIgFAEgJIAAhYIAWAAIAAB7IgUAAIgBgTQgGAKgKAGQgJAFgKAAQgUAAgMgNg");
	this.shape_28.setTransform(-27.5,-12.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAuBTIgPgrIg9AAIgPArIgXAAIA8ilIASAAIA7ClgAgYAVIAxAAIgZhGIAAAAg");
	this.shape_29.setTransform(-41.7,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.9,-29.7,159.1,80.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 24
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBNIAAiZIAgAAIAACBIBCAAIAAAYg");
	this.shape.setTransform(43.5,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBNIgLgiIgwAAIgKAiIggAAIA0iZIAdAAIA0CZgAgQATIAhAAIgRg0IAAAAg");
	this.shape_1.setTransform(30.2,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBNIAAiZIAdAAIAACZg");
	this.shape_2.setTransform(20.1,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbBNQgEgEgCgHIgBgQIAAgLQAAgLgGgGQgGgHgKAAIgZAAIAAA+IgfAAIAAiZIA2AAQAYAAAPANQAPAMAAAVQAAAMgGAJQgHAIgMADQAOAFAGAJQAGAJAAAOIAAAMQAAAGACAHQABAHAFAEIAAACgAgbgHIAWAAQALAAAHgFQAGgGAAgLQAAgKgGgGQgHgHgKAAIgXAAg");
	this.shape_3.setTransform(10.4,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBNIAAiBIgsAAIAAgYIB0AAIAAAYIgsAAIAACBg");
	this.shape_4.setTransform(-3.1,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwBNIAAiZIBhAAIAAAYIhCAAIAAAnIA3AAIAAAWIg3AAIAAAsIBCAAIAAAYg");
	this.shape_5.setTransform(-20.4,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBNIAAiZIBhAAIAAAYIhCAAIAAAnIA3AAIAAAWIg3AAIAAAsIBCAAIAAAYg");
	this.shape_6.setTransform(-32.5,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbBNQgEgEgCgHIgBgQIAAgLQAAgLgGgGQgGgHgKAAIgZAAIAAA+IgfAAIAAiZIA2AAQAYAAAPANQAPAMAAAVQAAAMgGAJQgHAIgMADQAOAFAGAJQAGAJAAAOIAAAMQAAAGACAHQABAHAFAEIAAACgAgbgHIAWAAQALAAAHgFQAGgGAAgLQAAgKgGgGQgHgHgKAAIgXAAg");
	this.shape_7.setTransform(-45.3,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBNIAAiZIBjAAIAAAYIhEAAIAAArIA5AAIAAAWIg5AAIAABAg");
	this.shape_8.setTransform(-58.2,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbBNQgEgEgCgHIgBgQIAAgLQAAgLgGgGQgGgHgKAAIgZAAIAAA+IgfAAIAAiZIA2AAQAYAAAPANQAPAMAAAVQAAAMgGAJQgHAIgMADQAOAFAGAJQAGAJAAAOIAAAMQAAAGACAHQABAHAFAEIAAACgAgbgHIAWAAQALAAAHgFQAGgGAAgLQAAgKgGgGQgHgHgKAAIgXAAg");
	this.shape_9.setTransform(56.5,-13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrA/QgRgOgBgbIAAhjIAgAAIAABjQAAAQAIAIQAIAIANAAQAOAAAIgIQAJgIAAgQIAAhjIAeAAIAABjQAAAbgRAOQgRAPgbAAQgaAAgRgPg");
	this.shape_10.setTransform(41.7,-12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtA8QgSgSAAgcIAAgaQAAgdASgSQASgTAbAAQAcAAASATQASASAAAdIAAAaQAAAcgSATQgSASgcAAQgbAAgSgTgAgXgqQgJAMAAASIAAAaQAAASAJALQAIAMAPAAQAPAAAJgMQAJgLAAgSIAAgaQAAgSgJgMQgJgMgPAAQgPAAgIAMg");
	this.shape_11.setTransform(26.8,-13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBNIAAg4Ig0hhIAiAAIAgBIIAAAAIAhhIIAjAAIg2BjIAAA2g");
	this.shape_12.setTransform(12.5,-13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPBNIAAiBIgrAAIAAgYIB0AAIAAAYIgsAAIAACBg");
	this.shape_13.setTransform(-6,-13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAbBNQgEgEgCgHIgBgQIAAgLQAAgLgGgGQgGgHgKAAIgZAAIAAA+IgfAAIAAiZIA2AAQAYAAAPANQAPAMAAAVQAAAMgGAJQgHAIgMADQAOAFAGAJQAGAJAAAOIAAAMQAAAGACAHQABAHAFAEIAAACgAgbgHIAWAAQALAAAHgFQAGgGAAgLQAAgKgGgGQgHgHgKAAIgXAAg");
	this.shape_14.setTransform(-18.8,-13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAjBNIgLgiIgwAAIgKAiIggAAIA0iZIAdAAIA0CZgAgQATIAhAAIgRg0IAAAAg");
	this.shape_15.setTransform(-33,-13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPBNIAAiBIgqAAIAAgYIB0AAIAAAYIgsAAIAACBg");
	this.shape_16.setTransform(-46.1,-13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgnBDQgSgNAAgYIABgBIAeAAQAAAOAIAGQAIAHALAAQANAAAGgGQAHgFAAgJQAAgIgGgGQgHgFgOgFQgagIgOgJQgNgLAAgTQAAgTAPgMQAQgMAWAAQAZAAAQANQAQANgBAVIAAABIgeAAQAAgMgHgGQgHgGgMAAQgKAAgGAFQgHAGAAAIQAAAIAHAFQAHAFAPAGQAZAHANAKQAOALAAATQAAAUgQAMQgPALgaAAQgWAAgSgMg");
	this.shape_17.setTransform(-59.1,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// <Clip Group>_2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglAmQAAgKAHgFIAjgXIgjgWQgHgEAAgLQAAgPALAAQAEAAAGAEIAwAkQAGAEAAAIQAAAJgGAEIAAAAIgwAkQgGAEgEAAIgBAAQgKAAAAgPg");
	this.shape_18.setTransform(57.7,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	// Layer 23
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#1EA43A","#115E21"],[0.894,1],0.1,-30.2,0.1,30.2).s().p("ArtEqQgSAAgNgNQgMgMAAgSIAAn9QAAgSAMgMQANgNASAAIXbAAQASAAANANQAMAMAAASIAAH9QAAASgMAMQgNANgSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-29.8,158.7,59.7);


(lib.Symbol14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AAABMIhLhMIAAhLIA1A1IAAAtIAtAAIA1A1g");
	this.shape.setTransform(-1.9,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC00CC").s().p("AglgkIBLAAIAABJg");
	this.shape_1.setTransform(6.2,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AglAmIAAhLIBLBLg");
	this.shape_2.setTransform(-5.7,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCCC").s().p("AAcAcIAAg4Ig4AAIgygyIBRAAIBMBMIAABRg");
	this.shape_3.setTransform(2,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AA3BhIg1g1IArAAIAAgiIA0AzIAAAkgAhgg2IAAgqIAjAAIAzAyIghAAIAAAtg");
	this.shape_4.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19.5,19.5);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjBkIAAjHIDHAAIAAAGIhNAAIhRAAIgjAAIAAAqIAABJIAABOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A65DBC").s().p("AglgkIBLAAIAABJg");
	this.shape_1.setTransform(6.2,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52A6D9").s().p("AAcAcIAAg4Ig4AAIgygyIBRAAIBMBMIAABRg");
	this.shape_2.setTransform(2,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3D35C").s().p("AA3BhIg1g1IArAAIAAgiIA0AzIAAAkgAhgg2IAAgqIAjAAIAzAyIghAAIAAAtg");
	this.shape_3.setTransform(0.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6BCE72").s().p("AAABMIhLhMIAAhLIA1A1IAAAtIAtAAIA1A1g");
	this.shape_4.setTransform(-1.9,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D95258").s().p("AglAmIAAhLIBLBLg");
	this.shape_5.setTransform(-5.7,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A700FF").s().p("AhcCuICAiuIh/itIAfgVICZC6IAAAOIiaC9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-19.5,18.8,39);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3FA9F5").ss(2,1).p("AmSAoIMlhP");
	this.shape.setTransform(-1.5,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3FA9F5").ss(2,1).p("AmSAoIMlhP");
	this.shape_1.setTransform(1.5,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-8.5,85.7,17);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.BRICK_300600();
	this.instance.setTransform(600,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.BRICK_300600();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu3Au4MAAAhdvMBdvAAAMAAABdvg");
	this.shape.setTransform(300,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah0B1IAAjpIDpAAIAADpgAg2A3IBtAAIAAhuIhtAAg");
	mask.setTransform(11.7,11.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A60A3").s().p("AguguIBdAAIAABcg");
	this.shape.setTransform(18.8,4.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.1,0,9.4,9.4);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah0B1IAAjpIDpAAIAADpgAg2A3IBtAAIAAhuIhtAAg");
	mask.setTransform(11.7,11.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD155").s().p("AAHA2Ig8g8IAvAAIAAgvIA8A8IAAAvg");
	this.shape.setTransform(18.1,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCD155").s().p("Ag1gGIAAgvIAvAAIA8A8IgvAAIAAAvg");
	this.shape_1.setTransform(5.4,5.4);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.5,23.5);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	mask.setTransform(150,125);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2ACCF2").s().p("AqaFcQgXgNgRgXQgPgYgJgfQgIghgDghQgDgiABgiQACgoAEgaIgBgBIgBgBIgOABQgMABgMgFQgRgHgNgNQgNgOgJgSQgIgTgEgYQgBgQABgWQACgSAFgYQAFgTAJgQQAJgPANgFIAFgBIABAAIAEACIADAEIABADQAAABABABQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCAAIgCAAIgEABQgJAEgGALQgFAJgEAQQgEAOgBAPQgBAQABANQADASAIATQAHARANANQAMANAPAEQAJAEAKAAQAGAAAKgDIACgBQAFgYAJgiQAKgfAOggQAOghARgcQARgdAXgZQAYgZAZgQQAdgSAegFQAIgBAIgBQALAAAJAEQATAFAOAPQAJAIAJANIAPAaIAKAdQAEANADAPQACARgBANQgBAOgEALQgEAMgIAIQgIAJgLAEQgJADgKABIgCAAQgKAAgKgFQgLgFgHgJQgHgJgDgOQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAIAAAAIgCABQgKARgMAPQgNAQgSASQgTATgSAOQgWAQgUALIgBACQgFAggEAvQgCAqAEAlIACAMIABALQABASAEAPQAEAPAJAPQAJAQALAJQAMAKAOAFQAKACAKAAIAQgBQARgFAQgLQAPgKAPgQQAQgSAJgMQAPgZALgZQAMgYAMgdIAihdIAGgXQAGgVAKgYQAKgWAOgUQAPgUAPgMQAPgMAUgEIALgBQAJAAAIADQANAGAKAJQAKALAGAMQAGANACAOQABASgCAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgEACIgBAAIgEgBIAAgOQgCgLgDgHQgEgLgFgGQgHgJgHgCQgFgEgHAAIgGABQgNADgLAMQgLANgJARQgIAPgHAYQgGAOgFAYIgGAmQgCAUABAIIACALIAEALQADAEAFADQADABAEABIAEgBQAMgCAKgOQAKgMAJgUQAIgQAHgVIAKghIACgIQABgIgCgFQAAgDACgBQAFgEAEAAIAJgBQANAAAHAFQAJAGADAJQADAIgBAOIAAAaIACAiQABAIACAEQACAFAEACIABAAQAEAAADgFIAOgaIANggQAHgQAFgRIANgmIABgHIADg8QACgeAEgVQAEgaAHgXQAGgYAJgSQAIgRAMgNQAMgMAPgCIAEgBQAFAAAFADQAFAGAEAFQAFAHACAJIAEAQQADAYgGAYQgGAbgKAXQgJAagNAXQgQAZgNASIAAABIAABPIACAQQAEATAHAJQAGAKAKAAIAEAAQAPgEAKgPQAMgQAJgWQAJgVAHgWIAMgoIABgFIAAg4QABgUAEgpQADgcAHghQAFgcAKgaQAKgZANgPQAMgPASgEIAEAAQAFAAAFADQAHAGAEAHQAEAFAFAMIAEASQADAZgGAbQgFAZgLAeQgJAYgPAbQgPAbgOATIgBACIgBA5QAAAQACAPIACAQIAFARQACAIAEAGQAEAGAGADIAIACIAEAAQAMgDALgMQALgNAHgOQAHgLAIgXIAYhYIAGg8IABAAIgCgRQAAgCAEgCIAGgCIACAAQAOADAIAEQAIAFABAKIABAKIgGBOIAAAkIABAhIAAAIIACAHQACALAEAGQAEAIAHAAIABAAQAGgCAFgHQAGgHAFgJQAFgKAGgQIAchUIABgBIAAgCIADg2QABgTgCgLIgCgKIgEgKIAAgDQgBgDADgCIAIgDIALgCQAGAAAEACQAIACAGAHQAEAEAEAJQACAIABAJQACAKgBAJIAAASIgBAJIAAAHQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIABAAIACAAIAag/QAGgPAKgQQAIgOALgJQALgKANgCIAIgCIAIACQAHACADAEQAFAGACAHQADAGABALQACAUgDAZQgEAjgDAQIgGAvQgCAXABAQIAEARQACAFACACQADADADAAIABAAQAGgBAHgMQAGgJAHgPIANgiIAUhEQAGgWAKgZQAKgWANgTQAOgTAQgNQAQgMAUgFIAKgBQAKAAAHADQANAFAKAKQALAJAGAPQAGANABAPIABAJIgBAKIgDABIgFACIgFgBIABgOQgCgLgDgIQgEgKgFgHQgGgHgIgEQgFgDgHAAIgGAAQgOADgLANQgKAMgJARQgKAWgFARQgGARgFAYQgFAVgBAQQgCARABALIACALIAEALQADAEAEADQADACAEAAIAFAAQAKgCAJgLQAJgJAIgQQAHgNAHgSIAKghIACgKIABgKIAAgDIgBgEIgDgIIgBgDIgBgDQAAgDADgCIAIgDIAOgCIAFABQAIAAAGAEQAGAEAEAEQADAFADAIIAGBPQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAIABAAQAHgJAJgRIAjhiIAAgDIADAAQABAAABgGIABAAQACAAAEAFIgNArQgIAagIAUQgHASgMAXQgLATgJAJIgBABQAAAjgCArQgCAkgFAoQgFAmgJAgQgJAigLAWQgMAYgSAOQgQAOgXACIgDAAQgSAAgMgMQgPgPgEgYQgCgMAAgMQACggALgfQAKgfAOgcQAOgbASgaQAPgUAXgdIABgBIAChOQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgBAAIgCABQgHASgIAOQgIARgLANQgJAMgNAKQgMAKgNACIgMABQgGAAgFgCQgJgBgIgIQgHgHgEgJQgFgMgBgKIgBgFQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgBAAIgBAAIgFANQgJATgGALQgJAOgJAJQgJAIgKACIgMAAIgIAAQgKgCgEgFQgGgFgEgHQgEgJgCgKIgBgFIAAgEQgCgPACgQIASiFQADgQgBgHQAAgIgFAAIgBAAQgHACgIAIQgHAKgHAMQgGAKgIASIggBSIAAABIgEAKIAAABQgCAOgBAVQgBAVACAPIABAKIAEANIAGANIgBACQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBABIgJABQgHAAgFgCQgIgEgHgHQgGgIgDgGQgEgMgCgJIAAgDIAAgLIAAgPIAAgJIgBgDIgBAAIgBABQgHAIgGATIgEALQgDAJgLAQIgFAIQgJAPgJALQgJAJgKACIgJAAIgLgBQgJgDgGgHQgGgIgEgKQgEgJgDgOIgCgIIgCgcQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAIAAAAIgCABIgMAlQgIAUgKARQgKAUgLAKQgMALgOADIgMABQgKAAgIgDQgMgGgJgLQgKgLgFgPQgGgQgDgOIgCgPIgCAAIgCAAIgOAoQgJAXgJAPQgIAQgOANQgKAMgOACIgMACQgIgBgJgDQgKgEgKgLQgIgIgGgQQgFgNgDgQIgCgJIgBgSQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgJAZIgMAfQgFAOgHANQgHAOgHAHQgEAGgKAHQgJAFgJACIgFABQgJgBgFgFQgJgHgFgMQgGgMgDgMIgDgWIAAgDQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIAAgBQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAIgPAiQgIASgLANQgJANgNAKQgMAJgPAEIgLABIgMgCQgKgDgGgGQgHgIgFgJQgFgOgBgIIgCgKQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAgBIgBAAIgCABIgiBXQgPAhgKAQQgQAbgSAUQgVAXgXAQQgZARgXAJQgYAKgZABIgJABQgcgBgWgKgALHgIQgVAWgSAdQgSAegMAdIgHAVIgHAcQgDAPgBAOQgBARACAKQABAKAGAGQAFAEAHAAIAFgBQAIgDAHgHQAHgIAFgKQAJgSAFgSQAGgZADgSIAHguIAJhQIgBgCIgBAAgAoEj/QgVAKgQAWQgRAXgOAgQgPAjgJAjQgLAlgHAnIABACIABABIABAAIAmgZQATgOARgQQASgRAMgSQANgSAJgYQACgDACgBIADgBIABABQABAAAAAAQAAAAABABQAAAAAAABQAAAAABABIAAAFIAAAPQACAMAEALQAFAKAHAIQAHAIAJACIAJABIAKgBQALgGAEgQQAEgPgDgTQgCgMgFgTQgEgOgHgPQgGgNgKgOQgJgNgKgHQgLgJgLgDIgKgCQgHABgHACgAgSj8QgGAOgHAZQgGAXgEAhQgFAkgCAiQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIABAAIABgBQAHgIAKgQQAJgQAKgXQAJgVAEgYQAGgZgCgUIgEgTQgCgFgCgDQgBgDgDAAIgBAAQgHACgGAPgACXlMQgHAAgHARQgGANgGAcQgGAbgFAiQgFApgBAkIABACIABAAIABgBIAkhFIALgfQAFgTACgOQADgQgBgPIgCgMQAAgFgDgFQgBgGgDgDQgDgDgDAAg");
	this.shape.setTransform(102,51.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2ACCF2").s().p("AgNAYQgGgFgDgOIABgJQABgHACgEQACgFADgDQADgDAFgBIADAAIAEABQAFACAFAFIAHALIADAIQACALgIAHQgHAIgJACIgCAAQgFAAgGgEg");
	this.shape_1.setTransform(127.9,25.7);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.7,15.9,168.7,71.8);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	mask.setTransform(150,125);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9D00").s().p("AgwCLIAAgGQAHgCAHgFQAFgGAAgPIAAjUQAAgOgFgGQgFgEgJgCIAAgGIBOAAIAAD0QAAAPAEAGQAGAFAKACIAAAGg");
	this.shape.setTransform(255,51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9D00").s().p("AgrCLIAAgGQAAgBAFgDIAJgDQAFgGABgPIAAjUQgBgOgFgGIgJgEQgFgBAAgBIAAgGIBDAAIAAD0QABAPAFAGQAFAFAKACIAAAGg");
	this.shape_1.setTransform(243.5,51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9D00").s().p("AAZBZQgFgHgBgKIgCgDIgBAAIgCACQgQAQgVAHQgMAFgNAAQgRAAgNgLQgOgJAAgWQAAgcAagPQAcgQA1gPQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAAgeQAAgWgIgIQgIgKgTAAQgLAAgJAEQgIAFAAAIIABAGIAFAHQACACACAFIACAHQAAALgHAFQgHAHgJAAQgMgBgHgGQgHgGAAgNQAAgWAVgNQAWgNAgAAQAfAAAXAMQAVANAAAlIAABjQAAAEAFAGQADAEAFAAQAEAAADgCIAEgCIADADQgKAMgOAGQgJAEgKAAQgRAAgIgKgAgOADQgXAQAAAZQAAAPAHAHQAHAJAJAAQAMgBAHgGIALgMIAAgCIAAg+IgCAAQgPAEgNAHg");
	this.shape_2.setTransform(227.4,55.5);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218,37,42,28.4);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgdB5QgPgEgOgHQgOgGgJgKQgIgIgBgMQAAgEADgHQAEgHAGgFQAGgFAJAAQAMAAAKAGIAUAKQAKAGANAAQAPAAAFgEQAGgFAAgKQgBgIgLgGQgLgGgPgGQgRgGgQgIQgRgJgLgMQgLgOgBgWQAAgXAMgQQALgRATgKQAUgJAYAAQAMAAAOACQAOADAMAGQANAFAIAKQAHAIABAMQgBALgHAJQgHAIgMABQgGAAgJgFIgVgJQgLgEgLgBQgHAAgGAFQgGADgBAKQABAJALAGQAJAGARAGQAQAFARAKQARAHALANQALAOABAVQgBAWgLASQgLARgVAKQgUAJgbABQgNAAgQgEg");
	this.shape_1.setTransform(243.8,121.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgzClQgUgKgOgSQgOgRgHgWQgIgVAAgYQAAgYAHgWQAGgVANgSQANgTAUgLQATgLAaAAQAPAAAQAGQAQAGANALIAAhYQAAgRAJgJQAJgKAOAAQAPAAAIAKQAJAJABARIAAESQgBARgJAKQgIAJgPAAQgNAAgIgHQgIgHgDgMQgKAOgQAIQgQAHgPAAQgZAAgTgKgAgbgDQgLAIgGAPQgFAPAAAQQAAAPAFAPQAGAPALAKQALAKAQAAQARAAALgKQALgLAGgPQAFgPAAgRQAAgQgFgOQgGgPgLgHQgMgJgQgBQgQABgLAKg");
	this.shape_2.setTransform(222.6,116.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("ABXCdQgHgHgEgKIgNgqIh7AAIgNApQgEALgIAHQgHAGgOAAQgOAAgKgJQgIgIgBgOIABgJIACgGIBbjyQAFgQANgKQAMgLAPAAQATAAALAKQAMAKAGARIBYDyIADAKIABAHQAAANgJAIQgJAIgNAAQgOAAgIgGgAArAkIgriAIAAAAIgpCAIBUAAg");
	this.shape_3.setTransform(197.6,117.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("Ag5BsQgcgQgPgcQgOgcAAgkQAAgfAOgdQAPgcAagRQAagSAhAAQAagBAVALQAWALAPARQAPASAJAUQAHAVAAAUQABANgHAHQgHAHgPAAIiIAAQADAQAIAKQAKALANAFQAMAFAOAAQAQAAANgHQAOgGALgHQAKgFAJgBQALABAHAHQAIAJAAALQAAAKgJAKQgKAJgQAJQgPAHgTAFQgSAFgTAAQgigBgbgQgAAzgUQgDgWgNgOQgNgNgWAAQgVAAgNAOQgNAOgDAVIBlAAIAAAAg");
	this.shape_4.setTransform(162.5,121.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgWCkQgIgKgBgQIAAkTQABgQAIgKQAJgJANgBQAOABAJAJQAJAKAAAQIAAETQAAAQgJAKQgJAKgOAAQgNAAgJgKg");
	this.shape_5.setTransform(147.1,116.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgjCoQgQgDgSgFQgRgGgMgJQgLgKgBgNQAAgGAEgHQAEgGAGgFQAGgEAGAAQALAAALAFIAaAKQAPAFASAAQAWAAAPgNQAQgNAAgZIAAgPIgBAAQgKAPgQAHQgRAIgUAAQgiAAgWgSQgWgRgLgcQgLgaAAghQAAghANgcQANgdAYgSQAYgRAhgBQAPAAAQAIQAQAHAKAPQADgNAIgHQAIgHANAAQAPAAAIAKQAJAKABAQIAAC5QgBAngPAaQgQAZgcAOQgcANgjAAQgKAAgRgDgAgbhkQgLAKgGAOQgFAPAAAQQAAARAFAPQAGANALAKQALAJAQAAQAQAAAMgKQALgJAGgMQAFgPAAgQQAAgQgFgQQgGgPgLgKQgLgKgRgBQgQABgLAKg");
	this.shape_6.setTransform(130.4,125.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("Ag7BrQgagRgPgcQgOgcAAgiQAAgfAPgdQAOgcAagRQAagSAhAAQAiAAAaASQAaARAPAcQAOAdAAAfQAAAigOAcQgOAcgaARQgaARgjABQghgBgagRgAgbg2QgMAKgFAPQgGAPAAAOQAAAQAGAOQAFAQAMAJQALAKAQAAQARAAALgKQAMgJAFgQQAGgOAAgQQAAgOgGgPQgFgPgLgKQgMgKgRgBQgQABgLAKg");
	this.shape_7.setTransform(107.1,121.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("Ag7BrQgagRgPgcQgOgcAAgiQAAgfAPgdQAOgcAagRQAagSAhAAQAiAAAaASQAaARAPAcQAOAdAAAfQAAAigOAcQgOAcgaARQgaARgjABQghgBgagRgAgbg2QgMAKgFAPQgGAPAAAOQAAAQAGAOQAFAQAMAJQALAKAQAAQARAAALgKQAMgJAFgQQAGgOAAgQQAAgOgGgPQgFgPgLgKQgMgKgRgBQgQABgLAKg");
	this.shape_8.setTransform(83.8,121.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AhLCPQgjgWgTglQgTgmgBguQABguATglQATglAjgWQAjgVArgBQAjABAcAJQAcAJAQAOQARAOAAAQQAAAPgIAIQgIAJgMAAQgLAAgIgFIgSgLQgJgHgOgFQgNgFgXAAQgaABgSAOQgTAOgKAYQgJAXAAAaQAAAbAJAXQAKAYASAOQATAOAaABQATAAARgHQASgHALgQQALgQABgZIguAAQgOAAgJgJQgIgIgBgPQABgMAJgIQAJgIANAAIBMAAQAWAAAJALQAJAKAAAUQAAAsgSAiQgRAigiAUQggATguABQgrgBgjgVg");
	this.shape_9.setTransform(57.2,117.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.1,88,217.2,62.5);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	mask_1.setTransform(150,125);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51FF00").s().p("AqAGVQgYAAgUgUQgUgVgDgaQgDgoAtg2QAEgEgDgHQgDgGgGABIgCAAQgQAAgbgZQgegjgEgqQgFg0AuhKQAug3A3gEIAIgBQApAAAfApQASAdABAXIACANQABASgDAqQgBAGAGAEIAFABQAEAAACgCQARgMAagcIABgBQAXgcAMgFQAGgDAAgGQgBhdBZgwQAbgIAHAAIAHgBIAHAAQAlAAAMAlQADAHAAAEIABAFQAGBFiJAgQgIABgEAFQgDADAAAGQAEAoAYANQAYASAmAAIAPgBQAxgEA2hIIABgCIAgg1QAHgDAAgGQALhLBMgoQAbgIAFAAIAHgBIAHAAQAkAAANAlIADALIAAAFQAHBHiHAfQgKABgDAFQgCAEAAADQADApAZANQAYASAkgBIAOAAQAygEA2hJIAhg3IAFgBQAHgDAAgHIABhTQAGhvAQhKQAPgvAQgTQAQgTAVgEIABAAQAZACAOAJQAOAOACAZQAEAygoB7QgCAFAEAEQADAEAFAAIAAAAIAFAAQAdAAAQAhQAFAMABANQAEAvguAlQgEADAAAEQAAAFADADQAJAIAFAVIACAqQAAAFADACQADACADAAIABAAIAMAAQAjgDAkhQQAGgMAGgWIAGgIIACgFQAIgfAigjQAfgZAcgDIAGAAQAiAAAYAhQAEAMACAKQAFA4hjAsQgHACABAHIAAABQABAFADADQAkAaAhAOIAEABIAFgBQArgYArghIABgBQAhghAGgOQAFgEAJgDIACAAQAKAAAIALIADAKQAAAYg/A1QgVARgiAUQgFADAAAGIAAABIADAGQAUAXACAeQACAYgNAaQgfAtg9AFIgTACQgaAAgbgOQgfgTgCgiQgEgvBPgtQAGgEgBgGIAAgBQAAgFgFgCQgpgZgWgZQgCgCgFAAIgBAAQgFAAgDAEIgOAZQgkA3g0AFIgHAAQgeAAgRgYIgGgTIgBgvQgBgFgFgDQgMgHgOgBIgPABQgIACgBAHQgHBFACAWQgHAOgMACQgKAAgHgHQgDgDgDgIQgCgUAAgcQAAgHgHgCIgDgBQgFAAgDAEIgbAjQg0Awg4AFIgOABQguAAgqggQgTgNgKgYQgCgEgGgBIgBAAQgFgBgDAFQgUAagMAPQg0Awg4AFIgOABQgxAAgpggQgRgMgKgWQgDgEgFgBIgBAAQgFAAgDACIgKAKIAAABQgjAng3AjQgEAEgBADQgPBpgVAsQghA/guAFgApJDmQhSBDADAkIAAACIAAACQAGAaASAAIACAAIADgBQATgBAQgeQAQgeAPg9QABgIgGgDQgCgBgDAAQgEAAgCACgAJDBwQgiAOglAbIgBABQgTAUABAMIABAEQALATApAAIAKAAQAugEANgnIABgCQABgFgBgHIAAgFQgCgSgWgQQgCgCgEAAgAq3A7QgRAnACAaIABAHQAEAmAmAQQAGADAGgBIADAAQAugEAjhCIABgBQAUg0gBgUQgGg8gyAAIgHAAQgrAEgmBHgAljgWQgCADAAADIAAABQABAFAEACIAFACIADAAQAsgOATgOQATgNgBgQIAAgCQgCgLgPAAIgDAAQgpAEgfAygAhBgvQgDADABADIAAABQABAGAEABQACACADAAIADAAQArgOASgNQATgOgBgQIAAgCQgFgLgMAAIgDAAQgoAEgeAygAIahwQgOAAgZAZQgRARgFAYQgBAGAEAEQADACAEAAIAEgBQAogTASgPQASgPgCgOIAAgCQgBgGgGgDQgMgDgFAAIgCAAgADwg4QgCAEADAFQADADAFAAIAGgBQA5gcgDgcIgBgOQgBgLgLAAIgDAAQghADgUBDgAEHllQgPALgPBCQgIAtgEAuIAAADQABAEACACQAEADADAAIACAAQAHgBABgGQAph5gDgmIgBgGQgBgGgEgCIgFgBQgDAAgCABg");
	this.shape_2.setTransform(103.3,193.7);

	this.shape_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.9,153.2,150.8,81.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AgFAGIAAgJIBWiIIASAPIhJB9IBJB9IgSAOgAhiAGIAAgJIBXiIIAQAPIhHB9IBHB9IgQAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-14,19.9,28.2);


(lib.PARTICLES_bounds_podlcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,204,0.298)").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.PARTICLES_bounds_podlcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,204,0.298)").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.PARTICLES_bounds_podl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,204,0.298)").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_72 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72).call(this.frame_72).wait(36));

	// Symbol 33
	this.instance = new lib.Symbol33();
	this.instance.setTransform(23.7,25.1,1,1,0,0,0,3.1,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(5).to({_off:false,scaleX:0.69,scaleY:0.69,x:24,y:27.3,alpha:0},0).to({scaleX:0.81,scaleY:0.81,x:23.9,y:26.4,alpha:1},5,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,x:23.7,y:25.5},6,cjs.Ease.get(0.8)).to({scaleX:1,scaleY:1,y:25.1},20,cjs.Ease.get(1)).to({_off:true},67).wait(4));

	// Symbol 32
	this.instance_1 = new lib.Symbol32();
	this.instance_1.setTransform(24.4,24.4,1,1,0,0,0,24.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,regY:24.3,scaleX:0.69,scaleY:0.69,rotation:-103.5,x:24.3,y:26.8,alpha:0},0).to({scaleX:0.8,scaleY:0.8,rotation:-70,x:24.4,y:25.9,alpha:1},5,cjs.Ease.get(-1)).to({regX:24.3,scaleX:0.94,scaleY:0.94,rotation:-32.6,y:24.8},6,cjs.Ease.get(0.8)).to({regX:24.4,regY:24.4,scaleX:1,scaleY:1,rotation:0,y:24.4},20,cjs.Ease.get(1)).to({_off:true},67).wait(8));

	// Symbol 32 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqII5IAAxxIURAAIAARxgAgXDrQAEAGAMAJQALAJANgJQALgJAEgFQASgVAZANIAZAIQALAAAGgLIAMgYQAHgTAWAAIAZgCQASgCABgSIABgZQAAgTASgIIAZgMQAOgHgFgPIgIgYQgJgVAQgPIAPgOQAHgJAAgGQAAgIgIgJIgRgSQgLgMAGgQIAGgTQAHgPgEgIQgDgHgPgHIgSgIQgQgHAAgRIgBgaQAAgLgFgFQgFgFgKgBIgYAAQgWAAgHgUIgHgQQgGgOgIgDQgHgDgPAFIgRAHQgSAHgPgOIgTgRQgNgKgMAKIgTARQgOAOgTgHIgUgIQgMgEgHADQgGADgGALIgFALQgJAfghgDQgGgBgKACQgSACAAASIgBAZQAAATgTAIIgZAMQgNAIAEAPQADAKAGAQQAHASgNANIgSAUQgLANALAOIAQAQQAQAQgJAUIgHATQgEALADAHQADAGAKAGIAXAKQAQAHAAARIACAcQABARAQACIAaACQAVgBAJAUQAFANAEAIQAFAKAGACQAHADAKgDIASgHQAJgEAHAAQAOAAALAMg");
	var mask_graphics_2 = new cjs.Graphics().p("AnilUIL1i3IDQNgIr1C3gAg7ClIAMAPQAHAHAJgFIAQgKQALgIAJAHIARAIQAKAFAHgJIAKgOQAIgMAOACIAOACQAIABAEgDQAEgDACgIIAEgRQACgMALgDIATgFQAKgEgBgLIgDgRQgDgPAMgIIAMgKQAFgFABgEQABgFgEgHIgHgKQgLgMAKgPQADgEAEgJQAEgKgIgHIgMgIQgRgJAFgSIABgSQgCgIgIgDIgSgDQgOgCgDgOIgFgRQgFgLgMABIgRAEQgMADgJgLIgMgPQgHgIgJAGIgMAJQgNAKgNgJIgMgHQgIgEgEACQgFABgFAHIgJAOQgHAJgLgBIgOgCQgLgBgEADQgFAEgCALIgDANQgCAMgLACIgRAFQgHACgDAFQgCADABAIIADAPQADAPgLAIIgKAHQgIAHgBAFQgBAGAGAIIAHALQAIAJgHAMIgJAPQgEALAJAHIAOAKQAMAHgCAOIgCAPQAAAIADAEQADAEAIACIAIACQAWABADAWIADALQAFAMAMgDIARgDIAFgBQAJAAAHAJg");
	var mask_graphics_3 = new cjs.Graphics().p("AneliIL/imIC+NrIr/CmgAg/ClIALAPQAHAIAKgGIAQgKQALgHAJAHIAQAJQALAFAIgJIAJgNQAJgNAOADIAOACQAIABAEgDQAFgDACgIIAEgRQACgLALgDIATgFQALgEgBgLIgCgRQgEgPANgIIAMgKQAGgFABgEQAAgFgDgGIgHgLQgLgNAKgOQAEgEAEgJQAEgLgIgHIgMgIQgQgJAFgSIACgTQgCgIgIgCIgSgEQgOgDgDgOIgFgRQgEgLgNABIgRADQgNADgHgLIgMgPQgHgJgKAGIgMAJQgNAJgNgJIgMgHQgIgEgEABQgFABgFAHIgKAOQgHAKgLgCIgOgCQgLgCgFADQgEAEgDALIgDANQgCAMgLACIgRAFQgIACgDAEQgCAEAAAHIAEAQQADAPgMAHIgKAIQgJAGgBAFQgBAGAGAJIAHAKQAIAKgIAMIgJAPQgFALAJAHIAPAKQALAIgCAOIgCAPQgBAIADAEQADAEAIADIAIABQAWACADAXIADAKQAEAMAMgCIARgDIAFgBQAKAAAHAKg");
	var mask_graphics_4 = new cjs.Graphics().p("AnNmLIMZhyICCOJIsZBygAgJCvIAOALQAKAGAIgJIALgNQAKgNAOAEIAOADQAJACAEgDQAEgCADgIIAFgRQADgMANgBIATgEQALgDAAgMIgBgRQgDgQAOgHIANgJQAGgFABgEQABgFgDgHIgGgMQgKgPALgMQAEgDAFgKQAFgKgHgHIgMgKQgQgKAGgTIAEgSQgCgIgIgDIgSgGQgOgDgCgPIgEgSQgDgMgNABIgSACQgNABgHgLIgLgQQgGgJgKAFIgQAHQgMAJgMgKIgMgIQgHgFgFABQgFABgGAGIgLAOQgHAJgMgCIgNgDQgMgDgFADQgFADgDALIgEAOQgDALgMACIgSADQgHACgDAEQgDADAAAIIACAQQACAQgNAHIgKAGQgJAGgCAGQgBAFAFAKIAGALQAHAMgIAKIgKAPQgGAKAIAIIAOAMQAMAJgDANIgEAPQgBAJACAEQADAFAIACIAIADQAXADABAXIACALQAEANAMgCIASgBQANgCAIAMIAKAQQAHAJAKgFIASgJQAFgDAFAAQAGAAAGAEg");
	var mask_graphics_5 = new cjs.Graphics().p("AmpnNIM7gVIAYOwIs7AVgAgfCzIAPAMQAKAIAIgIIANgMQALgMAOAGIAOAFQAJACAEgCQAFgCAEgIIAHgQQAFgMANgBIAUgBQAMgCABgMIABgSQgBgQAPgGIAPgIQAHgDABgFQACgEgCgIIgFgNQgJgRANgNQAFgDAGgJQAHgIgHgJIgLgLQgPgMAIgSIAGgTQAAgIgIgFIgSgIQgOgFgBgPIgBgTQgCgMgNgBIgTgBQgNABgGgNIgKgSQgFgKgLAEIgRAGQgPAHgMgLIgJgLQgHgFgFAAQgFABgHAFIgNANQgIAJgMgEIgOgFQgLgEgFACQgGADgFALIgFANQgFAMgMAAIgTABQgIABgEAEQgDADgBAIIAAARQABAQgOAFIgMAGQgKAFgCAFQgCAGAEAKIAFANQAGANgKALIgNAOQgHAIAIAJIANAOQALAKgFAOIgGAPQgCAJACAEQACAFAIAEIAIAEQAXAGgCAYIABALQACANANAAIATABQAOgBAGAOIAJASQAGAJALgDIATgHQAEgCAFAAQAHAAAGAGg");
	var mask_graphics_6 = new cjs.Graphics().p("AnwGtICJvRINYB4IiJPRgAg+CzIANAPQAJAKALgHIAPgKQAOgKAMAIIAOAIQAIAEAFgCQAFgBAGgHIAKgQQAHgMANACIAVACQANAAADgMIAEgSQACgRAQgEIARgFQAHgDADgEQACgFgBgIIgDgOQgGgTARgLQAFgDAIgIQAIgJgGgKIgJgNQgNgOAMgRIAJgSQABgJgIgGIgRgLQgNgIACgQIABgTQAAgNgNgEIgTgDQgOgCgEgOIgHgVQgEgLgMACIgSAEQgRAFgKgOIgKgNQgGgHgFAAQgGgBgHAFIgOALQgKAIgMgHIgNgHQgLgGgGACQgGABgHALIgIANQgHALgMgCIgUgCQgIgBgFAEQgEADgCAHIgDASQgCAQgPAEIgNAEQgMADgDAFQgDAFACAMIAEAOQAEAOgNAKIgPAMQgJAJAGAMIALAQQAKAKgIANIgIAPQgEAIABAGQACAFAIAGIAHAEQAXALgGAYQgBAFAAAHQAAAOANACIATAEQAPACAEAPIAGAUQAEALAMgCIAVgEIAGgBQAKAAAHAJg");
	var mask_graphics_7 = new cjs.Graphics().p("ApfFNIFlvTINaE6IllPTgAgaDCIAMALQAHAGAGgBQAEAAAHgGIAOgOQAKgLANAFIAVAHQANADAHgMIAIgSQAFgRASgBIASgBQAJgBADgEQAEgEABgJIgBgPQgCgVAUgIQAFgCAKgGQALgHgEgMIgGgQQgKgTAQgPIANgPQADgJgGgHIgQgQQgMgLAGgQIAGgUQADgNgNgGIgTgIQgOgFgBgQIgDgWQgBgNgNAAIgUgBQgSABgHgQIgIgPQgFgJgFgBQgGgCgJADIgSAIQgMAFgLgJIgKgKQgKgJgGABQgHAAgKAKIgLALQgJAKgNgFIgTgGQgJgDgFADQgFACgEAIIgHARQgGARgRAAIgOABQgMAAgEAGQgFAEAAAMIABAQQAAAPgPAHIgSAKQgLAHADANIAIATQAHAPgKAMIgMAOQgGAHAAAEQAAAGAHAHIAHAHQAVAQgMAXQgCAFgBAIQgDAOANAFIATAIQAOAFABARIACAWQACAMANABIAWAAQAQAAAGAOIAKATQAHALAOgEIASgHQAGgDAGAAQAJAAAIAHg");
	var mask_graphics_8 = new cjs.Graphics().p("AqwDkIIpusIM4HlIopOsgAhADCIALAOQAGAHAGABQAGABAJgFIARgMQAKgJAMAHIAVALQANAGAJgLIAMgRQAIgQATACIATACQAJAAAEgDQAEgDADgJIADgQQACgWAVgEQAGgBAMgFQAMgFgCgNIgDgRQgHgWATgNIARgOQAFgJgFgJIgNgRQgLgNAJgQIAKgTQAGgNgNgJIgSgMQgNgIACgQIACgXQAAgOgNgCIgUgFQgTgCgEgSIgFgRQgEgKgFgCQgGgDgJABIgUAFQgOADgJgLIgLgNQgJgLgGgBQgHgBgMAJIgLAJQgMAIgMgHIgTgKQgIgEgGABQgGABgFAIIgLAQQgJAQgRgDIgPgCQgNgBgFAEQgFAEgDANIgCAQQgDAQgQAEIgVAHQgNAFACAOIAEAVQAEARgNAKIgOAMQgIAHgBAGQgBAGAGAJIAGAIQASASgQAWQgDAFgDAHQgGAOANAIIARAMQAPAIgDARIgCAXQAAANANADIAXAFQAQACAEAQIAHAVQAFANAOgCIAUgEIAIgBQANAAAIALg");
	var mask_graphics_9 = new cjs.Graphics().p("ArlB9ILLtsIMAJzIrLNsgAgQDOIASAOQAMAIALgKIAPgQQALgPATAFIATAFQAJACAFgCQAFgDAEgJIAFgQQAGgWAWgBQAHAAAMgDQAOgEAAgNIgBgSQgEgYAWgKIAUgMQAGgIgEgKIgKgVQgJgQAMgMIANgSQAIgNgLgLIgRgPQgMgKAEgRIAGgXQADgOgNgFIgVgHQgTgGgBgTIgDgSQgCgKgFgEQgFgEgKAAIgWACQgOABgIgNIgJgPQgHgMgHgCQgHgCgNAGIgPAIQgNAHgKgKIgRgNQgIgGgGABQgGAAgHAHIgNAPQgMAPgRgGIgPgEQgNgDgGADQgHADgEANIgFAQQgFAQgSACIgWADQgOAEgBAOIACAXQABASgPAIIgQAKQgJAFgCAGQgCAHAEAJIAFAKQAQAXgUAUQgEAFgEAFQgJANAMAKIAQAPQAOALgGARIgFAXQgCANAMAGIAXAIQAQAFACAQIAEAXQACAPAQAAIAVgBQATgCAJARIAJAPQAFAJAGACQAGACAKgEIATgKQAGgDAGAAQAHAAAGAGg");
	var mask_graphics_10 = new cjs.Graphics().p("AsEAiINHskILCLhItHMkgAgqDQIASARQAMAKAMgJIAPgPQAOgNASAHIATAIQAJADAGgCQAFgDAFgIIAHgPQAJgWAXABQAGACANgCQAPgCACgOIACgTQgCgYAYgHIAVgKQAIgIgDgKIgHgYQgHgQANgOIAQgRQAKgKgKgMIgQgSQgLgMAHgQIAIgXQAFgOgNgGIgTgLQgUgHABgUIABgTQgBgLgFgEQgFgFgKgBIgWgBQgPgBgHgOIgHgQQgFgOgHgDQgHgDgOAFIgRAGQgOAFgKgLIgRgPQgHgHgFgBQgGAAgHAGIgQAOQgOAOgRgJIgOgGQgNgFgHADQgHADgGAMIgHAPQgHAQgSAAIgXABQgPABgDAPIgBAXQgBATgQAGIgSAIQgKAFgDAGQgDAGAEALIADAKQANAagXASQgEADgGAHQgKANALAMIAPAPQAMAMgHARIgJAXQgEANAMAHIAWAMQAQAHAAARIABAYQABAPAPACIAWACQAUAAAHATIAHAQQAEAKAGADQAGACALgDIAVgHQAFgCAEAAQAJAAAHAIg");
	var mask_graphics_11 = new cjs.Graphics().p("AsVgmIOjrjIKIMwIujLjgAg/DPIARATQALALANgHIATgOQANgMASAJIASAKQAJAEAGgCQAGgCAGgIIAJgPQAKgVAYAEQAGACAOgBQAPAAADgOIAEgTQABgZAYgFIAXgJQAJgGgCgLIgGgZQgFgRAPgNIARgPQAMgMgJgNIgOgSQgLgNAJgQIALgXQAGgNgNgIIgSgMQgTgKADgUIACgTQAAgLgEgFQgFgGgLgBIgWgEQgPgCgFgPIgGgRQgEgPgHgDQgHgEgOAEIgSAEQgPAEgJgMIgQgSQgGgHgHgBQgGgBgIAFIgPANQgQAMgQgJIgPgIQgMgGgHACQgHACgIAMIgIAPQgJAPgTgCIgYgBQgPAAgEAPIgEAXQgCATgRAFIgTAGQgLAEgDAGQgDAGACALIACAKQALAcgZAQQgFADgGAHQgLAMAJANIAOATQALAMgJAQIgLAXQgFANALAIIAWAOQAPAIgCASIgBAYQgBAQAQAEIAWADQAUACAFAUIAGARQADALAGADQAGADALgCIAWgFIAIgBQAKAAAHAJg");
	var mask_graphics_12 = new cjs.Graphics().p("AschaIPfqvIJaNkIvfKvgAhNDNIAQAVQAKAMANgHIAVgMQAQgMAPALIASALQAJAEAGgBQAGgBAHgIIAKgPQAMgVAXAGQAHACANABQAQAAAEgOIAFgTQACgZAagEIAXgHQAJgGgBgLIgEgZQgEgSAQgMIATgOQAMgLgIgPIgNgSQgKgOAKgQIAMgWQAHgNgMgJIgSgOQgSgLAEgUIADgTQABgMgEgFQgEgFgLgDIgWgFQgPgDgEgQIgFgRQgDgQgHgDQgHgFgPADIgSADQgPADgJgMIgOgTQgHgJgGgBQgGgBgJAEIgSAMQgPAMgQgLIgOgJQgMgHgHACQgIABgIAMIgKAOQgKAQgTgEIgXgDQgQgBgFAPIgFAXQgEATgRAEIgUAFQgLAEgEAFQgEAGACALIACALQAJAdgbAPQgFADgGAGQgNALAJAOIANAUQAKAPgKAOIgNAWQgGANALAJIAVAPQAPAKgDARIgDAZQgCAQAQAFIAWAFQAUAEAEATIAFATQADAKAFAEQAGAEALgCIAXgDIAGgBQALAAAIAKg");
	var mask_graphics_13 = new cjs.Graphics().p("Aseh4IP/qQII+OBIv/KQgAAGDcIASALQAJAFAGAAQAGgCAHgHIALgPQANgUAXAGQAGADAOABQAPAAAFgNIAGgTQADgZAagDIAYgGQAJgGAAgMIgDgZQgEgTARgKIATgPQAMgKgHgPIgMgVQgKgMALgQIANgWQAIgNgMgJIgSgPQgSgMAFgUIAEgTQABgLgEgFQgEgGgKgEIgWgFQgQgEgDgQIgEgSQgDgPgHgEQgGgFgPADIgTACQgQADgIgOIgOgTQgGgJgGgBQgGgCgJAEIgTAMQgQALgPgMIgOgJQgMgIgHACQgIABgJALIgKAPQgKAPgTgFIgYgEQgQgBgFAPIgGAXQgFATgSADIgUAFQgLADgEAFQgEAGABALIACALQAIAegbANQgGADgHAGQgMALAIAPIAMAUQAKAPgLAQIgOAUQgGANALAJIAUARQAPAKgEARIgEAZQgCAQAPAFIAWAGQAVAFADAUIAEASQACALAGAEQAGAEALgBIAXgDQAQgDAJAOIAPAVQAKANAOgHIAUgLQAJgGAIAAQAJAAAGAGg");
	var mask_graphics_14 = new cjs.Graphics().p("AscilIQppaIIQOlIwpJagAgEDdQAIAJAHAEQAJAFAGAAQAGgBAIgHIALgOQAOgUAXAHQAHADANACQAQACAGgOIAGgSQAFgZAagCIAYgEQAKgGAAgLIgCgaQgCgTARgKIAUgNQANgKgGgPIgLgWQgJgPALgNIAPgWQAIgMgLgKIgRgQQgSgNAHgUIAEgTQACgLgDgFQgEgHgKgDIgWgHQgQgFgCgQIgDgSQgCgQgGgFQgHgEgPABIgTABQgQACgHgOIgNgUQgGgJgGgCQgGgCgKAEIgTALQgSAKgNgNIgNgKQgMgJgIACQgHAAgKALIgLAOQgLAPgTgGIgYgFQgPgCgHAOIgHAXQgFATgTADIgUADQgMACgEAFQgEAGAAALIABAMQAHAegcAMQgGACgHAGQgOAKAIAPIALAVQAJAQgMAQIgPATQgHAMAKALIAUARQAOALgFASIgFAYQgDAQAPAGIAWAIQAUAFACAVIADASQACALAFAFQAGAEALAAIAXgCQARgCAIAOIAOAWQAJANAPgFIAVgLQAIgEAIAAQAJAAAJAGg");
	var mask_graphics_15 = new cjs.Graphics().p("AsXjQIROokIHhPFIxOIkgAgQDeQAKAJAGAFQAHAGAGgBQAHAAAHgHIANgNQAPgUAXAJQAGADAOADQAPADAHgOIAHgSQAHgZAaAAIAYgEQAKgFABgLIAAgaQgCgTASgJIAVgMQAOgKgGgPIgKgXQgIgPAMgNIAQgVQAJgMgLgKIgQgRQgRgOAHgUIAGgTQADgLgEgFQgDgHgKgEIgWgIQgPgGgCgQIgCgTQgBgQgGgEQgGgGgQABIgTAAQgQABgHgOIgMgVQgFgJgGgDQgGgCgJAEIgVAJQgSAJgPgNIgLgLQgLgJgHABQgIAAgKAKIgMAOQgNAOgSgHIgXgGQgQgDgHAOIgJAXQgGASgTACIgVACQgLABgFAGQgEAFAAAMIAAALQAFAegdALQgGACgHAGQgPAJAHAQIAKAWQAIAQgMAPIgQAUQgIAKAKALIASATQAOAMgGARIgGAZQgEAPAPAHIAVAJQAUAGABAVIACATQACALAFAFQAFAEALABIAYgBQAQgBAIAPIANAXQAIANAPgFIAWgJQAIgEAHAAQAKAAAJAIg");
	var mask_graphics_16 = new cjs.Graphics().p("AsQj5IRvnvIGyPiIxvHvgAgbDeQAJAKAHAFQAIAGAEAAQAHAAAIgHIANgMQAQgTAXAKQAGAEANADQAQADAHgNIAIgSQAIgZAaACIAZgDQALgEABgMIABgaQgBgTATgIIAVgLQAPgJgGgQIgJgXQgHgQANgOIARgSQAKgMgKgLIgQgSQgQgPAIgTIAHgTQADgLgDgGQgDgGgKgFIgWgJQgPgHAAgQIgCgTQAAgQgGgFQgGgGgPAAIgTAAQgQAAgHgPIgLgWQgEgJgHgDQgFgDgKAEIgVAIQgTAIgOgOIgMgLQgLgKgGAAQgHAAgLAKIgNANQgNANgSgHIgXgIQgQgDgIANIgKAXQgHASgTABIgVABQgMABgEAFQgFAFgBAMIAAALQADAfgdAJQgGACgIAFQgPAJAHAQIAIAWQAIASgOAOIgRATQgJAMAKAKIASATQANANgHARIgIAYQgEAQAOAIIAVAJQAUAIAAAVIABATQABALAFAFQAFAFAMABIAXAAQARAAAGAPIANAYQAHAOAPgEIAXgIQAHgEAHAAQALAAAJAJg");
	var mask_graphics_17 = new cjs.Graphics().p("AsHkfISKm8IGFP7IyKG8gAgmDeQAJAKAHAFQAHAHAHAAQAGAAAHgGIANgMQASgSAWALQAGAEANAEQAQAEAHgNIAKgRQAJgZAaADIAZgCQALgEACgLIACgaQAAgUATgHIAWgKQAPgIgFgRIgHgXQgHgRAOgNIASgTQAKgKgKgLIgPgTQgPgPAJgUIAIgSQAEgLgDgGQgDgHgKgFIgVgLQgPgHAAgQIAAgTQAAgQgFgFQgGgGgQgBIgTgCQgQAAgGgPIgKgXQgEgKgGgDQgGgDgKADIgVAIQgTAHgOgPIgMgMQgKgKgIAAQgGgBgLAKIgNAMQgOANgSgIIgXgJQgPgFgJAOIgLAWQgIASgTAAIgVAAQgMAAgFAFQgFAFgBAMIgBALQACAfgeAIQgGACgIAFQgQAIAGAQIAIAXQAGASgOANIgSATQgJALAJAMQAGAJALAKQAMANgHARIgJAYQgFAPAOAJIAVALQATAIgBAVIAAAUQABALAEAFQAFAFAMACIAXABQARABAGAPIALAZQAHAOAPgDIAXgHQAHgDAGAAQAMAAAJAKg");
	var mask_graphics_18 = new cjs.Graphics().p("Ar+lDISjmKIFaQRIyjGKgAgwDdQAJAKAGAGQAIAHAGABQAGAAAJgGIANgLQASgRAVAMQAGAEAOAFQAPAEAIgMQAIgMACgGQAKgYAaAEIAaAAQALgEACgLIADgaQABgUAUgGIAXgKQAPgHgEgRIgHgYQgFgRAOgMIATgTQAKgLgJgKIgOgTQgPgRAKgSIAJgTQAEgLgCgGQgDgHgKgGIgUgLQgPgIABgQIAAgTQABgQgFgGQgFgGgQgCIgTgCQgQgBgGgQIgIgXQgEgKgGgDQgGgDgKACIgWAHQgUAGgMgPIgMgNQgKgLgIAAQgHgBgKAJIgOAMQgOAMgSgJIgXgKQgPgFgJANIgMAWQgJASgTgCIgVAAQgMAAgGAEQgFAFgCAMIgBALQABAfgfAHQgGACgIAEQgQAHAFARIAGAXQAGASgPANIgTASQgJAMAIAMQAGAJAKAMQAMAMgIARIgKAYQgGAPAOAJIAUAMQATAJgBAVIgBAUQAAALAEAFQAFAGALABIAYADQARACAFAPIAKAZQAHAPAPgDIAYgGQAGgCAFAAQANAAAJALg");
	var mask_graphics_19 = new cjs.Graphics().p("ArzlkIS4laIEvQjIy4FagAg5DcQAIALAGAGQAHAHAHABQAGABAJgGIAOgLQASgRAVAOQAGAEANAFQAPAFAJgMIALgRQALgYAaAFIAaABQALgDADgLIAEgaQACgUAUgGIAXgIQAQgHgEgRIgFgYQgFgRAOgMIAUgSQALgLgIgNIgOgRQgOgSALgSIAJgSQAFgLgCgGQgCgHgKgGIgUgMQgPgJACgRIABgSQACgRgFgGQgGgGgPgCIgTgDQgRgCgEgQIgIgXQgDgLgHgDQgFgEgKACIgWAGQgUAGgMgQIgLgOQgKgLgIAAQgIgCgMAJIgMALQgPAMgSgKIgWgLQgPgGgKANIgNAWQgKARgTgCIgVgCQgMAAgFAEQgGAFgCALIgCAMQAAAfgfAGQgHABgIAEQgQAHAEARIAGAXQAFATgQAMIgUARQgKALAIANQAGAJAKANQALANgJAQIgLAXQgHAPAOAKIAUANQATAKgDAVIgCAUQAAALAEAGQAFAFALACIAYAEQAQACAFAQIAJAaQAGAPAQgCIAYgFQAFgCAFAAQANAAAKAMg");
	var mask_graphics_20 = new cjs.Graphics().p("AromCITJktIEIQyIzJEtgAhCDaQAIALAGAHQAHAIAGABQAHAAAJgFIAPgKQASgQAVAOQAFAFANAFQAPAGAKgMQAIgLADgFQAMgYAaAGIAaACQALgDADgLIAGgaQACgUAUgFIAYgHQAQgGgDgSIgEgYQgFgRAPgMIAVgRQAMgLgIgNIgNgSQgOgSAMgSIAKgRQAFgLgCgGQgCgIgJgGIgUgNQgOgJACgRIACgTQACgQgFgGQgFgHgPgDIgTgDQgRgDgDgQIgHgYQgEgKgFgEQgGgEgKACIgWAFQgVAFgLgRIgLgOQgJgMgIAAQgIgCgMAIIgPALQgOALgRgKIgWgMQgPgGgKAMIgOAVQgKARgTgDIgWgCQgMgBgFAEQgGAEgDAMIgCALQgCAggfAEQgHABgIAEQgRAGAEARIAFAYQAEATgQAMIgUAQQgLALAIANQAFAJAJAOQALAPgJAOIgNAXQgHAOAOALIATANQASALgDAVIgCAUQgBALAEAGQAEAGALADIAYAEQARADAEAQIAIAaQAFAQAQgCIAYgEIAKgBQAOAAAJAMg");
	var mask_graphics_21 = new cjs.Graphics().p("ArdmeITZkCIDiQ/IzZECgAhKDZQAHALAGAHQAHAIAGABQAHABAJgFIAQgKQASgPAVAPQAFAFANAGQAPAGAKgLQAIgLAEgGQANgXAaAHIAZADQAMgCADgMIAHgaQADgTAUgEIAYgHQAQgGgCgRIgEgZQgDgRAPgLIAWgRQAMgKgIgNIgMgUQgNgSAMgRIALgSQAGgKgCgGQgCgIgJgHIgUgOQgNgJACgRIADgTQADgQgFgGQgFgHgPgDIgTgFQgQgDgEgQIgGgZQgDgKgFgEQgGgEgKABIgXAEQgUAFgLgSIgKgOQgJgMgIgBQgIgCgMAIIgQAKQgOALgRgLIgVgNQgPgHgLANIgOAUQgLARgUgEIgVgDQgMgBgGAEQgGAEgDALIgCAMQgDAfggAEQgGAAgJAEQgRAFADASIAEAYQAEATgRALIgVAQQgLAKAHAOQAFAJAJAOQALAQgLANIgNAXQgHAOANALIATAOQASAMgEAVIgDAUQgCALAEAGQAEAGALADIAYAGQARADADAQIAHAbQAFAQAQgCIAYgDIAJgBQAPAAAJAOg");
	var mask_graphics_22 = new cjs.Graphics().p("ArRm3ITkjbIC/RKIzkDbgAAPDnQAFAFANAHQAPAHAKgLQAJgLAEgFQAOgXAZAHIAaAEQALgCAEgLIAIgaQAEgTAUgEIAZgGQAQgFgCgRIgDgZQgDgSAQgLIAWgQQANgJgIgOIgLgVQgNgRANgRIAMgRQAGgLgCgGQgBgIgJgHIgUgOQgNgKADgRIAEgTQADgQgFgGQgEgHgQgEIgSgFQgRgEgDgRIgFgYQgCgLgGgEQgFgEgLABIgWADQgVAEgLgSIgJgOQgJgNgIgBQgHgCgNAHIgQAKQgRAKgOgLIgVgOQgPgHgLAMIgQATQgLARgTgEIgVgEQgMgCgGAEQgGAEgEALIgDAMQgEAfggADQgGAAgJADQgRAGACARIAEAYQADATgRALIgWAPQgMAKAHAOQAFAKAIAOQAKAQgKAPIgOAUQgIAPAMALIATAPQASAMgFAVIgEAUQgCALAEAGQAEAGALAEIAXAGQARAEADARIAGAaQAFAQAQAAIAYgDQAVgEAMASQAHAMAFAGQAHAJAGABQAGABAKgEIAQgJQALgIAJAAQAJAAAKAIg");
	var mask_graphics_23 = new cjs.Graphics().p("ArGnOITvi1ICeRSIzvC1gAAIDoQAFAGANAHQAOAHALgLQAKgKADgGQAPgWAZAIIAaAFQALgCAFgLIAIgZQAEgUAVgDIAZgFQAQgFAAgRIgDgZQgDgSARgKIAXgQQAMgJgHgOIgLgWQgMgRAOgRIAMgRQAGgKgBgGQgCgIgIgIIgTgPQgNgKADgRIAEgSQAEgRgEgGQgFgHgPgFIgTgFQgQgFgCgQIgFgZQgCgLgGgEQgFgEgKAAIgXADQgVADgKgSIgJgPQgIgMgIgCQgIgCgNAHIgQAJQgRAKgOgMIgVgPQgOgIgMAMIgQAUQgMAQgTgFIgVgEQgMgDgHAEQgGAEgEALIgDALQgFAgggABQgGABgJADQgRAEABASIADAYQADATgSALIgWAPQgMAJAGAOQAFAKAIAOQAJARgLAPIgOAUQgJAOAMAMIATAPQARANgFAVIgFATQgCAMAEAGQADAGALAEIAYAHQAQAEADARIAFAbQAEAQAQAAIAZgCQAVgDALASQAHAMAFAHQAGAIAHACQAGACAKgFIAQgJQAKgGAKAAQALAAAIAIg");
	var mask_graphics_24 = new cjs.Graphics().p("Aq8njIT4iTICBRaIz4CTgAACDpQAFAGAMAHQAPAIALgLQAKgKADgFQAQgWAZAJIAaAFQALgBAFgLIAJgaQAFgTAUgDIAZgEQARgEAAgSIgCgZQgCgSAQgKIAYgPQAMgJgGgOIgLgWQgLgUAOgOIAMgRQAHgKgBgGQgBgIgJgIIgSgPQgNgLAEgRIAEgSQAFgRgEgGQgFgIgPgEIgTgHQgQgEgCgRIgEgZQgBgLgGgEQgFgEgKAAIgXACQgWACgJgSIgJgPQgIgNgIgCQgHgCgOAGIgQAJQgRAJgQgMIgSgPQgPgIgMALIgQATQgNAQgTgFIgVgFQgMgDgGAEQgGADgFAMIgDALQgGAfggABQgHAAgJADQgRAEABASIACAYQACATgRAKIgXAPQgMAJAGAOQAEAKAHAPQAJAQgLAPIgPAUQgJAOAMAMIASAQQARANgGAVIgFATQgDAMAEAGQADAGALAEIAXAIQARAFACARIAFAbQADAQAQABIAZgBQAVgDALASQAGAMAGAHQAGAJAGACQAGACAKgEIARgJQAKgGAJAAQALAAAJAJg");
	var mask_graphics_25 = new cjs.Graphics().p("Aqyn1IT+h1IBnRgIz+B1gAgCDqQADAFANAIQAOAIALgKQAKgKAEgFQAQgWAZAKIAZAGQAMgBAFgLIAJgaQAGgTAVgCIAZgEQARgEAAgRIgBgaQgCgSARgJIAYgPQANgIgHgOIgJgXQgMgUAPgOIANgQQAHgKgBgHQgBgIgJgIIgSgQQgMgLAEgQIAFgTQAFgQgEgHQgEgHgQgGIgSgGQgQgFgCgRIgDgZQgBgLgGgEQgFgFgKAAIgXABQgWACgJgSIgIgQQgIgNgIgCQgHgCgOAGIgQAJQgSAIgPgNIgTgPQgOgJgMALIgRATQgNAQgTgGIgVgGQgMgCgGADQgHADgEAMIgEALQgHAfggAAQgHAAgJADQgRADABASIABAZQACATgSAJIgXAOQgNAJAGAPQAEAKAHAPQAJARgMAOIgQAVQgJAMALANIASAQQARAOgHAVIgFATQgDALADAHQAEAGALAEIAXAJQAQAFACARIAEAbQADARAQABIAZgBQAWgDAKATQAGANAFAHQAGAJAGACQAGACAKgEIARgIQAKgGAJAAQAMAAAKAKg");
	var mask_graphics_26 = new cjs.Graphics().p("AqooFIUDhaIBORlI0DBagAgHDqQAFAGAKAIQAOAJAMgLQAKgJAEgGQAQgVAaAKIAZAHQAMgBAFgLIAKgZQAGgTAVgCIAZgDQARgEAAgRIAAgaQgCgSASgJIAYgOQANgIgGgPIgKgWQgKgVAPgOIANgQQAHgKgBgGQgBgIgIgIIgSgRQgMgLAFgQIAFgTQAFgQgEgHQgEgIgPgFIgSgHQgQgGgBgQIgDgaQgBgLgGgEQgEgFgLAAIgXABQgWABgIgTIgJgPQgHgNgIgDQgHgCgOAGIgRAIQgRAIgQgNIgSgQQgOgJgMALIgSASQgNAQgTgGIgVgGQgMgDgGADQgHADgEALIgFALQgHAggggBQgHAAgJACQgSADABASIABAZQABATgSAJIgYAOQgMAIAFAPQAEAKAHAPQAIASgMAOIgQAVQgKALALANIASARQAQAOgHAVIgGATQgDALAEAHQADAGALAFIAXAJQAQAFABASIAEAbQADAQAQACIAZAAQAVgDAKAUQAGAMAFAIQAFAJAHACQAGACAKgEIARgIQAKgFAIAAQAMAAALAKg");
	var mask_graphics_27 = new cjs.Graphics().p("AqgoTIUHhCIA6RpI0HBCgAgLDrQAFAFAKAJQANAIAMgKQALgJAEgFQARgWAZALIAZAHQAMAAAFgLIALgZQAGgTAVgBIAZgDQARgDABgSIAAgaQgBgSARgJIAZgNQANgIgGgPIgJgXQgKgUAPgQIAOgOQAHgKgBgGQAAgIgIgIIgSgRQgMgMAFgQIAGgTQAFgQgEgHQgDgHgQgGIgSgIQgQgFgBgRIgCgZQgBgMgFgEQgFgFgLgBIgXABQgVABgJgTIgIgQQgHgNgHgCQgIgDgOAFIgRAIQgSAIgPgNIgTgQQgMgKgNALIgSASQgOAPgSgGIgVgHQgMgDgHADQgGADgFAMIgFAKQgHAgghgCQgGAAgKACQgRADAAASIAAAZQABATgSAJIgYANQgNAIAFAPQAEALAHAPQAIARgNAOIgRAVQgKANAMAMIARAQQAQAPgHAVIgHATQgDALADAHQADAGALAFIAXAJQAQAGABARIADAcQADARAQABIAZAAQAWgBAJATQAFANAFAHQAGAJAGADQAGACALgEIARgHQAJgFAJAAQAMAAALALg");
	var mask_graphics_28 = new cjs.Graphics().p("AqZoeIUKguIApRrI0KAugAgPDrQAFAGAKAIQANAJAMgKQALgJAEgFQARgVAZALIAaAHQALAAAGgLIALgZQAGgTAVgBIAagCQARgDABgSIAAgZQAAgTARgIIAZgNQANgIgFgPIgJgXQgKgVAQgPIANgOQAIgJgBgHQAAgIgIgIIgSgSQgMgLAGgRIAGgSQAFgQgDgHQgEgIgPgGIgSgIQgQgGAAgQIgCgaQgBgLgGgFQgEgFgLAAIgXAAQgWABgIgTIgIgQQgGgOgIgCQgHgEgPAGIgRAIQgSAIgPgOIgTgRQgMgJgNAKIgSASQgOAPgSgHIgVgHQgMgDgHADQgGADgFALIgFALQgIAfghgCQgGAAgKACQgRADAAASIgBAZQABATgTAIIgYANQgNAIAFAPQAEALAGAPQAIARgNAOIgRAVQgKANALALIARASQAQAPgIAUIgGATQgEALADAHQADAGALAGIAXAJQAQAGABASIACAbQADARAQACIAZAAQAVgBAJAUQAGAMAFAIQAFAJAGADQAGACALgDIARgIQAJgEAJAAQAMAAALALg");
	var mask_graphics_29 = new cjs.Graphics().p("AqTonIUNgeIAaRtI0NAegAgSDrQAFAGAMAIQALAKAMgKQALgJAEgFQASgVAZALIAZAIQALAAAGgLIALgZQAHgTAVAAIAagCQARgDABgSIABgZQgBgTASgIIAZgNQAOgHgGgPIgIgXQgKgVAQgQIAOgNQAHgKAAgGQAAgIgIgJIgRgRQgMgMAFgRIAHgSQAFgQgDgHQgEgIgPgGIgSgIQgQgGAAgRIgCgaQAAgLgGgFQgEgFgLAAIgXAAQgWAAgHgTIgIgQQgHgOgHgDQgIgDgOAGIgRAHQgSAIgPgOIgTgRQgMgKgNALIgTARQgOAPgSgHIgVgHQgMgEgGADQgHADgFALIgFALQgJAfgggCQgHgBgJACQgSADAAASIgBAZQABATgTAIIgYANQgNAIAEAPQADAKAHAQQAHARgNAOIgRAUQgKANALAMIAQASQAQAPgIAUIgHATQgDALADAHQADAHAKAFIAXAKQAQAGABARIACAcQACARAQACIAZABQAWgBAJAUQAFAMAFAIQAFAJAGADQAGACALgDIARgHQAJgFAIAAQANAAALAMg");
	var mask_graphics_30 = new cjs.Graphics().p("AqOouIUOgRIAPRuI0OARgAgUDrQAEAGAMAJQAMAJAMgKQALgJAEgFQASgVAYAMIAaAIQALAAAGgKIAMgZQAHgTAVAAIAZgCQASgDABgSIABgZQAAgTARgIIAZgMQAOgIgFgPIgIgXQgKgVAQgPIAOgNQAIgKgBgHQAAgIgIgIIgRgSQgMgMAGgQIAHgTQAGgPgEgIQgDgHgPgHIgSgIQgQgHAAgQIgBgaQgBgLgFgFQgFgFgKgBIgYAAQgWAAgHgTIgHgQQgHgOgIgDQgHgDgOAFIgRAIQgTAHgOgOIgUgRQgNgKgLAKIgTASQgOAOgTgHIgVgHQgLgEgHADQgHADgFALIgFALQgJAfgggDQgHgBgJACQgSADgBASIAAAZQAAATgTAIIgYAMQgOAIAFAPQADALAGAPQAIASgNANIgSAVQgKANAKAMIARARQAQAQgJAUIgHATQgDALADAHQACAGALAGIAXAKQAQAGAAASIACAcQACAQAQACIAZACQAWgBAIAUQAGAMAEAIQAFAKAHACQAGACAKgCIASgHQAJgFAIAAQANAAALAMg");
	var mask_graphics_31 = new cjs.Graphics().p("AqKozIUPgIIAGRvI0PAIgAgWDrQAFAGALAJQAMAJAMgJQALgJAEgFQASgVAZAMIAZAIQAMAAAGgKIALgZQAHgTAWAAIAZgCQARgCACgSIABgaQAAgSASgIIAZgMQAOgIgFgPIgIgXQgKgVAQgPIAOgOQAIgJAAgHQAAgIgIgIIgRgSQgMgMAGgRIAHgSQAGgQgEgHQgDgIgPgGIgSgJQgQgGAAgRIgBgaQgBgLgFgFQgEgFgLgBIgXAAQgWAAgHgUIgIgQQgGgOgIgCQgHgEgOAGIgSAHQgSAHgOgOIgUgRQgNgKgLAKIgTARQgPAPgSgHIgVgIQgLgEgHADQgHADgFALIgFALQgKAfgggDQgHgBgJACQgSACAAASIgBAZQAAAUgTAIIgZALQgNAIAFAPQACALAHAPQAHASgNAOIgSAUQgKANAKAOIAQAPQAQAQgIAUIgHATQgEALADAHQADAHAKAFIAXALQAQAGAAARIACAcQABARARACIAZACQAVgBAJAUQAFANAFAIQAFAJAGADQAGACAKgDIASgHQAJgEAIAAQANAAALAMg");
	var mask_graphics_32 = new cjs.Graphics().p("AqIo3IUQgBIABRwI0QABgAgXDrQAEAGAMAJQAMAJAMgJQALgJAEgFQASgVAZANIAZAIQAMAAAGgLIALgYQAIgTAVAAIAagCQARgCABgSIACgaQAAgSARgIIAZgMQAOgIgFgPIgHgXQgKgVAQgPIAPgOQAHgJAAgHQAAgHgIgJIgRgSQgLgMAGgRIAGgSQAGgQgDgHQgDgIgPgGIgSgJQgQgGAAgRIgBgaQgBgLgFgFQgEgFgLgBIgXgBQgWAAgHgTIgHgQQgHgOgHgDQgIgDgOAFIgRAHQgTAHgOgOIgTgRQgOgKgLAKIgTARQgPAOgSgHIgVgIQgLgDgHACQgHADgFALIgFALQgKAfgggDQgHgBgJACQgSACgBASIgBAZQAAAUgTAIIgYALQgOAIAFAPQADALAGAPQAHASgNAOIgSAUQgLANALAOIAQAPQAQAQgIAUIgIATQgEALADAHQADAHALAFIAWALQAQAGAAASIACAcQACAQAQACIAZACQAWAAAIAUQAFAMAFAIQAFAKAGACQAGADAKgDIASgHQAJgEAIAAQANAAALAMg");
	var mask_graphics_33 = new cjs.Graphics().p("AqII5IAAxxIURAAIAARxgAgXDrQAEAGAMAJQALAJANgJQALgJAEgFQASgVAZANIAZAIQALAAAGgLIAMgYQAHgTAWAAIAZgCQASgCABgSIABgZQAAgTASgIIAZgMQAOgHgFgPIgIgYQgJgVAQgPIAPgOQAHgJAAgGQAAgIgIgJIgRgSQgLgMAGgQIAGgTQAHgPgEgIQgDgHgPgHIgSgIQgQgHAAgRIgBgaQAAgLgFgFQgFgFgKgBIgYAAQgWAAgHgUIgHgQQgGgOgIgDQgHgDgPAFIgRAHQgSAHgPgOIgTgRQgNgKgMAKIgTARQgOAOgTgHIgUgIQgMgEgHADQgGADgGALIgFALQgJAfghgDQgGgBgKACQgSACAAASIgBAZQAAATgTAIIgZAMQgNAIAEAPQADAKAGAQQAHASgNANIgSAUQgLANALAOIAQAQQAQAQgJAUIgHATQgEALADAHQADAGAKAGIAXAKQAQAHAAARIACAcQABARAQACIAaACQAVgBAJAUQAFANAEAIQAFAKAGACQAHADAKgDIASgHQAJgEAHAAQAOAAALAMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:24,y:26.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:25.5,y:26.7}).wait(1).to({graphics:mask_graphics_3,x:25.5,y:26.7}).wait(1).to({graphics:mask_graphics_4,x:25.6,y:26.7}).wait(1).to({graphics:mask_graphics_5,x:25.6,y:26.6}).wait(1).to({graphics:mask_graphics_6,x:25.7,y:26.6}).wait(1).to({graphics:mask_graphics_7,x:25.6,y:26.6}).wait(1).to({graphics:mask_graphics_8,x:25.5,y:26.5}).wait(1).to({graphics:mask_graphics_9,x:25.3,y:26.5}).wait(1).to({graphics:mask_graphics_10,x:25.2,y:26.5}).wait(1).to({graphics:mask_graphics_11,x:25.1,y:26.4}).wait(1).to({graphics:mask_graphics_12,x:25,y:26.4}).wait(1).to({graphics:mask_graphics_13,x:25.2,y:26.3}).wait(1).to({graphics:mask_graphics_14,x:25.1,y:26.3}).wait(1).to({graphics:mask_graphics_15,x:25,y:26.3}).wait(1).to({graphics:mask_graphics_16,x:24.9,y:26.3}).wait(1).to({graphics:mask_graphics_17,x:24.9,y:26.3}).wait(1).to({graphics:mask_graphics_18,x:24.8,y:26.3}).wait(1).to({graphics:mask_graphics_19,x:24.7,y:26.3}).wait(1).to({graphics:mask_graphics_20,x:24.7,y:26.3}).wait(1).to({graphics:mask_graphics_21,x:24.6,y:26.3}).wait(1).to({graphics:mask_graphics_22,x:24.5,y:26.3}).wait(1).to({graphics:mask_graphics_23,x:24.5,y:26.2}).wait(1).to({graphics:mask_graphics_24,x:24.4,y:26.2}).wait(1).to({graphics:mask_graphics_25,x:24.4,y:26.2}).wait(1).to({graphics:mask_graphics_26,x:24.4,y:26.2}).wait(1).to({graphics:mask_graphics_27,x:24.3,y:26.2}).wait(1).to({graphics:mask_graphics_28,x:24.3,y:26.2}).wait(1).to({graphics:mask_graphics_29,x:24.3,y:26.2}).wait(1).to({graphics:mask_graphics_30,x:24.3,y:26.2}).wait(1).to({graphics:mask_graphics_31,x:24.2,y:26.2}).wait(1).to({graphics:mask_graphics_32,x:24.2,y:26.2}).wait(1).to({graphics:mask_graphics_33,x:24,y:26.1}).wait(75));

	// Symbol 31
	this.instance_2 = new lib.Symbol31();
	this.instance_2.setTransform(35.7,55.6,1,1,0,0,0,11.2,10.9);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(10).to({_off:false,scaleX:0.69,scaleY:0.69,x:25.3,y:36},0).to({scaleX:0.83,scaleY:0.83,x:30,y:44.7},6,cjs.Ease.get(-1)).to({regX:11.3,scaleX:0.97,scaleY:0.97,x:34.7,y:53.5},6,cjs.Ease.get(0.8)).to({regX:11.2,scaleX:1,scaleY:1,x:35.7,y:55.6},16,cjs.Ease.get(1)).to({_off:true},48).wait(21));

	// Symbol 30
	this.instance_3 = new lib.Symbol30();
	this.instance_3.setTransform(13,55.6,1,1,0,0,0,11.2,10.9);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(4).to({_off:false,scaleX:0.69,scaleY:0.69,x:21.7,y:36},0).to({scaleX:0.83,scaleY:0.83,x:17.8,y:44.7},6,cjs.Ease.get(-1)).to({regX:11.3,scaleX:0.97,scaleY:0.97,x:14,y:53.5},6,cjs.Ease.get(0.8)).to({regX:11.2,scaleX:1,scaleY:1,x:13,y:55.6},16,cjs.Ease.get(1)).to({_off:true},54).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.8,66.5);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(23));

	// Symbol 29
	this.instance = new lib.Symbol29();
	this.instance.setTransform(95.9,33.2,1,1,0,0,0,24.4,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,scaleX:0.78,scaleY:0.78},0).to({scaleX:0.88,scaleY:0.88},6,cjs.Ease.get(-1)).to({scaleX:0.98,scaleY:0.98},6,cjs.Ease.get(0.8)).to({scaleX:1,scaleY:1},14,cjs.Ease.get(1)).wait(37));

	// Symbol 28
	this.instance_1 = new lib.Symbol28();
	this.instance_1.setTransform(162,42.5,1,1,0,0,0,44,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,x:152,alpha:0},0).to({x:156.6,alpha:0.48},6,cjs.Ease.get(-1)).to({x:161.1,alpha:1},6,cjs.Ease.get(0.8)).to({x:162},14,cjs.Ease.get(1)).wait(37));

	// Symbol 27
	this.instance_2 = new lib.Symbol27();
	this.instance_2.setTransform(36.8,42.5,1,1,0,0,0,36.8,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,x:46.8,alpha:0},0).to({x:42.3,alpha:0.48},6,cjs.Ease.get(-1)).to({x:37.7,alpha:1},6,cjs.Ease.get(0.8)).to({x:36.8},14,cjs.Ease.get(1)).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-30.8,187.9,113.8);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 16
	this.instance = new lib.Symbol16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-29.8,158.7,59.7);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(23));

	// Layer 1
	this.instance = new lib.Symbol17();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,scaleX:0.92,scaleY:0.92,alpha:0},0).to({scaleX:0.95,scaleY:0.95,alpha:0.461},5,cjs.Ease.get(-1)).to({scaleX:0.97,scaleY:0.97,alpha:1},5,cjs.Ease.get(0.8)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.9,-29.7,159.1,80.4);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(9));

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.setTransform(4.5,-13.3,1.163,1.163,0,0,0,102.7,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-74.7,218.6,132.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1_1();
	this.instance.setTransform(1.1,5.7,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.9,-31.4,217.2,62.5);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// squared-colour-LOGO-2018-07-03.svg
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6595A").s().p("AgtAvIAAhdIBbBdg");
	this.shape_3.setTransform(258.8,32.3,0.801,0.801);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#77BC7E").s().p("AAABdIhchdIAAhcIA9A9IAAA/IA/AAIA+A9g");
	this.shape_4.setTransform(262.6,28.5,0.801,0.801);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(264.5,26.7,0.801,0.801,0,0,0,11.8,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#49AADC").s().p("AAgAfIAAg+Ig/AAIg9g+IBcAAIBdBdIAABeg");
	this.shape_5.setTransform(266.3,24.8,0.801,0.801);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(264.5,26.7,0.801,0.801,0,0,0,11.8,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYEXQgyABgqgbQgrgdgVguQgYg2ACg5QgCg5AYgyQAUguArgbQArgbAyABQAngBAkATQAiASATAhIABjQIBiAAIAAInIhiAAIAAhBQgTAigiASQgjATglAAIgEAAgAArDBQAUgJAOgSIABAAQAbghAAhAQAAhAgbgfQgOgSgUgJQgVgJgWABQgUgBgVAJQgUAJgOARQgcAhAAA9QAABAAcAiQANASAVAKQAUAJAVgBQAWABAUgJg");
	this.shape_6.setTransform(238.7,58.4,0.801,0.801);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiBCaQg5g4AAhiQgBg3Aag0QAYgvAugbQAvgcA0ABQBTAAAwA2QAwA2AABeIAAANIkUAAQADBAAeAfQAdAfA3AAQBGAAA1grIAdBEQgfAZgoANQgpANgsAAQhhAAg4g3gABkgsQgCgogagdQgagagkADQgjgCgcAZQgcAdgEAoIC5AAIAAAAg");
	this.shape_7.setTransform(204,64,0.801,0.801);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah8DOIAAkfQAAg8gGg2IBdAAIAIBHQANgmAhgWQAigVAoAAQAVAAATAGIgBBbQgZgKgbAAQgzAAgbAeQgbAiACAsIAADYg");
	this.shape_8.setTransform(178.3,63.8,0.801,0.801);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXDRQg0ABgqgbQgqgbgVgtQgYg2ACg4QgBg4AYg0QAUguArgdQApgbAzABQAogBAlAUQAiARASAjIAAg9IBiAAIAAGRIhiAAIAAhBQgSAhgiATQgjATglAAIgEAAgAgoh6QgUAJgOASQgcAjAAA9QAAA/AcAhQAOASAVAIQAUAJAVgBQAWABAUgJQAUgJAOgSQAbghAAg/QAAg8gbgkQgOgSgUgJQgVgJgWABIgCAAQgVAAgSAJg");
	this.shape_9.setTransform(145.6,64,0.801,0.801);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiDMQiPAAAAimIAAjxIBgAAIAADyQAAAtARAUQASAVAjAAQAoABAageQAcgigCgrIAAjeIBhAAIAAGRIheAAIAAg/QgSAhggASQgfASghAAIgEAAg");
	this.shape_10.setTransform(110.1,64.4,0.801,0.801);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABkEkIAAjpQgSAggiASQglASgmgBQgyABgsgaQgpgagWgvQgXgyABg5QgBg5AYg1QAVgvAqgcQAqgcAzABQApgBAnAWQAkAUARAmIAHhFIBeAAQgHA6AAA4IAAHLgAgrjNQgVAKgOARQgbAkAAA/QABA/AaAfQAPARAVAJQAUAIAWgBQAUABAVgJQAUgJAOgRQAcgggBg/QAAg+gbgkQgOgRgVgJQgUgJgVABIgEAAQgUAAgSAIg");
	this.shape_11.setTransform(73.2,70.7,0.801,0.801);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AipCeIAchGQBDAxBPgBQAdABAagNQAJgFAGgJQAFgJAAgLQABgSgPgLQgUgNgagGIhBgPQhugYAAhWQAAgjAVgeQAXgfAjgNQAqgSArACQAqgBApAOQAnAMAfAaIgeBDQg2grhGgBQgbgCgZAOQgTAMAAAYQAAAQALAMQATANAVAEIBDAPQA8AOAbAaQAeAggDAqQABAagMAYQgLAXgWAPQgtAhhNAAQhqAAhCgzg");
	this.shape_12.setTransform(39.6,64,0.801,0.801);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,17.3,247.8,76.8);


(lib.Symbol93copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol8();
	this.instance.setTransform(98,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(88.7,12.6,18.8,39);


(lib.Symbol93copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.setTransform(94.2,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.4,22.7,85.7,17);


(lib.Symbol93copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol5();
	this.instance.setTransform(94.9,33.1,1,1,0,0,0,1.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-4,217.2,62.5);


(lib.Symbol93copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(94.5,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84.5,18.1,19.9,28.2);


(lib.Symbol6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.ClipGroup_4();
	this.instance_2.setTransform(46.7,-68.7,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.3,-193.7,300,250);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(-89,73.8,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239,-51.2,300,250);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(48.1,73.3,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-51.7,300,250);


(lib.PARTICLES_DOTS_CENTERexplosioncopy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.podl_mc.visible = false;
	}
	this.frame_1 = function() {
		var max_elements_number = 5;							// максимально разрешенное количество элементов на поле
		var max_speed_x = 0;									// максимальная скорость по _x
		var min_speed_x = 0;									// минимальная скорость по _x
		var max_speed_y = 30;									// максимальная скорость по _y
		var min_speed_y = 25;									// минимальная скорость по _y
		var particle_size = 2;
		var max_scale = 1;										// максимальный масштаб элемента (_xscale = 0..100)
		var min_scale = 0.2;									// минимальный масштаб элемента (_xscale = 0..100) (значение 100 = "размер все время постоянный")
		var particle_color_1 = "#66ff00";
		var particle_color_2 = "#ffff00";
		var particle_color_3 = "#00FFff";
		var avg_rotation_change = 2;							// СРЕДНЕЕ изменение поворота ("градусов за 1 кадр") (значение 0 = "нет вращения")
		var avg_alpha_change = -0.04;							// СРЕДНЕЕ изменение прозрачности
		var trace_inteval_time = 0;								// период вывода trace (0 = "не выводить ничего")
		var trace_inteval_id;
		var active_width;										// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)
		var active_height;										// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
		var created_elements_number = 0;						// количество созданных элементов (с самого начала работы)
		var live_elements_number = 0;							// текущее количество элементов на поле
		var skipped = 0;
		var _this = this;
		var gravity_y = 2;
		
		main();
		this.stop();
		
		function main() {
			_this.podl_mc.visible = false;
			active_width = Math.round(_this.podl_mc.nominalBounds.width * _this.podl_mc.scaleX);	// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)		
			active_height = Math.round(_this.podl_mc.nominalBounds.height * _this.podl_mc.scaleY);	// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
			init();												// начальное создание элементов
		}
		
		// функция начального создания заданного количества элементов 
		function init() {
			for (var i = 0; i < max_elements_number; i++) {
				add_element(true);								// добавление нового элемента
			}				
		}
		
		function add_element(initial_adding) {					// initial_adding = начальное ли это добавление
			var element_x;										// начальное положение по _x
			var element_y;										// начальное положение по _y
			var element_speed_x;								// скорость по _x
			var element_speed_y;								// скорость по _y
			var element_scale;									// масштаб (_xscale)
			var sign = Math.floor(Math.random() * 2) * 2 - 1;	// случаный знак = 1 или -1
			var element_rotation_speed;
			var element_alpha_change;
			var element_color;
		
		
			element_x = active_width / 2; 
			element_y = active_height / 2; 
		
			var speed = min_speed_y + Math.random() * (max_speed_y - min_speed_y); 
			var angle = Math.floor(Math.random() * 360);
			
			element_speed_x = speed * Math.cos(angle);
			element_speed_y = speed * Math.sin(angle) / 2;
			
			
			element_scale = min_scale + Math.random() * (max_scale - min_scale); 
			element_rotation_speed = avg_rotation_change * (Math.random() * 0.8 + 0.4) * sign;
			element_alpha = 1;
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
			
		
			create_element(element_x, element_y, element_speed_x, element_speed_y, element_scale, element_rotation_speed, element_alpha, element_alpha_change, element_color);
		}
		
		
		function create_element(element_x, 
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
			var coof = 1; 										//как вариант: var coof = element_scale / 100 * 2;
			
			
			new_name = "element_" + created_elements_number + "_mc";
		
			obj_mc = new createjs.Shape();
			obj_mc.graphics.beginFill(element_color);
			obj_mc.graphics.drawCircle(10, 10, particle_size);
			_this.addChild(obj_mc);	
		
			obj_mc.name = new_name;
			
			obj_mc.x = element_x;								// начальное положение по _x
			obj_mc.y = element_y;								// начальное положение по _y
			obj_mc.new_x = obj_mc.x;								
			obj_mc.new_y = obj_mc.y;								
			
			obj_mc.speed_x = element_speed_x * coof;			// скорость по _x
			obj_mc.speed_y = element_speed_y * coof;			// скорость по _y
			obj_mc.scaleX = obj_mc.scaleY = element_scale;		// масштаб
			obj_mc.rotation_speed = element_rotation_speed * coof;		// скорость вращения элемента со случаным знаком
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
		
			var slow_coof = 0.85;
			this.speed_x *= slow_coof;
			this.speed_y *= slow_coof;
			
			this.new_x += this.speed_x;
			this.new_y += this.speed_y + gravity_y;
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
			
			// проверка на удаление по достижению _alpha = 0 
			if (avg_alpha_change < 0) {
				if (this.alpha <=0) {
					kill = true;
				}
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
				//add_element(false);									// добавление нового элемента
				if (live_elements_number == 0) {
					_this.parent.removeChild(_this);
				}
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// PODL_MC
	this.podl_mc = new lib.PARTICLES_bounds_podlcopy3();
	this.podl_mc.setTransform(120,120,1,0.6,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.podl_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,240);


(lib.PARTICLES_DOTS_CENTERexplosioncopy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.podl_mc.visible = false;
	}
	this.frame_1 = function() {
		var max_elements_number = 5;							// максимально разрешенное количество элементов на поле
		var max_speed_x = 0;									// максимальная скорость по _x
		var min_speed_x = 0;									// минимальная скорость по _x
		var max_speed_y = 20;									// максимальная скорость по _y
		var min_speed_y = 10;									// минимальная скорость по _y
		var particle_size = 2;
		var max_scale = 1;										// максимальный масштаб элемента (_xscale = 0..100)
		var min_scale = 0.2;									// минимальный масштаб элемента (_xscale = 0..100) (значение 100 = "размер все время постоянный")
		var particle_color_1 = "#66ff00";
		var particle_color_2 = "#CCff00";
		var particle_color_3 = "#33FF00";
		var avg_rotation_change = 2;							// СРЕДНЕЕ изменение поворота ("градусов за 1 кадр") (значение 0 = "нет вращения")
		var avg_alpha_change = -0.04;							// СРЕДНЕЕ изменение прозрачности
		var trace_inteval_time = 0;								// период вывода trace (0 = "не выводить ничего")
		var trace_inteval_id;
		var active_width;										// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)
		var active_height;										// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
		var created_elements_number = 0;						// количество созданных элементов (с самого начала работы)
		var live_elements_number = 0;							// текущее количество элементов на поле
		var skipped = 0;
		var _this = this;
		var gravity_y = 2;
		
		main();
		this.stop();
		
		function main() {
			_this.podl_mc.visible = false;
			active_width = Math.round(_this.podl_mc.nominalBounds.width * _this.podl_mc.scaleX);	// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)		
			active_height = Math.round(_this.podl_mc.nominalBounds.height * _this.podl_mc.scaleY);	// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
			init();												// начальное создание элементов
		}
		
		// функция начального создания заданного количества элементов 
		function init() {
			for (var i = 0; i < max_elements_number; i++) {
				add_element(true);								// добавление нового элемента
			}				
		}
		
		function add_element(initial_adding) {					// initial_adding = начальное ли это добавление
			var element_x;										// начальное положение по _x
			var element_y;										// начальное положение по _y
			var element_speed_x;								// скорость по _x
			var element_speed_y;								// скорость по _y
			var element_scale;									// масштаб (_xscale)
			var sign = Math.floor(Math.random() * 2) * 2 - 1;	// случаный знак = 1 или -1
			var element_rotation_speed;
			var element_alpha_change;
			var element_color;
		
		
			element_x = active_width / 2; 
			element_y = active_height / 2; 
		
			var speed = min_speed_y + Math.random() * (max_speed_y - min_speed_y); 
			var angle = Math.floor(Math.random() * 360);
			
			element_speed_x = speed * Math.cos(angle);
			element_speed_y = speed * Math.sin(angle) / 2;
			
			
			element_scale = min_scale + Math.random() * (max_scale - min_scale); 
			element_rotation_speed = avg_rotation_change * (Math.random() * 0.8 + 0.4) * sign;
			element_alpha = 1;
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
			
		
			create_element(element_x, element_y, element_speed_x, element_speed_y, element_scale, element_rotation_speed, element_alpha, element_alpha_change, element_color);
		}
		
		
		function create_element(element_x, 
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
			var coof = 1; 										//как вариант: var coof = element_scale / 100 * 2;
			
			
			new_name = "element_" + created_elements_number + "_mc";
		
			obj_mc = new createjs.Shape();
			obj_mc.graphics.beginFill(element_color);
			obj_mc.graphics.drawCircle(10, 10, particle_size);
			_this.addChild(obj_mc);	
		
			obj_mc.name = new_name;
			
			obj_mc.x = element_x;								// начальное положение по _x
			obj_mc.y = element_y;								// начальное положение по _y
			obj_mc.new_x = obj_mc.x;								
			obj_mc.new_y = obj_mc.y;								
			
			obj_mc.speed_x = element_speed_x * coof;			// скорость по _x
			obj_mc.speed_y = element_speed_y * coof;			// скорость по _y
			obj_mc.scaleX = obj_mc.scaleY = element_scale;		// масштаб
			obj_mc.rotation_speed = element_rotation_speed * coof;		// скорость вращения элемента со случаным знаком
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
		
			var slow_coof = 0.85;
			this.speed_x *= slow_coof;
			this.speed_y *= slow_coof;
			
			this.new_x += this.speed_x;
			this.new_y += this.speed_y + gravity_y;
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
			
			// проверка на удаление по достижению _alpha = 0 
			if (avg_alpha_change < 0) {
				if (this.alpha <=0) {
					kill = true;
				}
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
				//add_element(false);									// добавление нового элемента
				if (live_elements_number == 0) {
					_this.parent.removeChild(_this);
				}
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// PODL_MC
	this.podl_mc = new lib.PARTICLES_bounds_podlcopy3();
	this.podl_mc.setTransform(120,120,1,0.6,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.podl_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,240);


(lib.PARTICLES_DOTS_CENTERexplosioncopy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.podl_mc.visible = false;
	}
	this.frame_1 = function() {
		var max_elements_number = 5;							// максимально разрешенное количество элементов на поле
		var max_speed_x = 0;									// максимальная скорость по _x
		var min_speed_x = 0;									// минимальная скорость по _x
		var max_speed_y = 30;									// максимальная скорость по _y
		var min_speed_y = 5;									// минимальная скорость по _y
		var particle_size = 2;
		var max_scale = 1;										// максимальный масштаб элемента (_xscale = 0..100)
		var min_scale = 0.2;									// минимальный масштаб элемента (_xscale = 0..100) (значение 100 = "размер все время постоянный")
		var particle_color_1 = "#ffffff";
		var particle_color_2 = "#ffffff";
		var particle_color_3 = "#ffffff";
		var avg_rotation_change = 2;							// СРЕДНЕЕ изменение поворота ("градусов за 1 кадр") (значение 0 = "нет вращения")
		var avg_alpha_change = -0.04;							// СРЕДНЕЕ изменение прозрачности
		var trace_inteval_time = 0;								// период вывода trace (0 = "не выводить ничего")
		var trace_inteval_id;
		var active_width;										// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)
		var active_height;										// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
		var created_elements_number = 0;						// количество созданных элементов (с самого начала работы)
		var live_elements_number = 0;							// текущее количество элементов на поле
		var skipped = 0;
		var _this = this;
		var gravity_y = 2;
		
		main();
		this.stop();
		
		function main() {
			_this.podl_mc.visible = false;
			active_width = Math.round(_this.podl_mc.nominalBounds.width * _this.podl_mc.scaleX);	// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)		
			active_height = Math.round(_this.podl_mc.nominalBounds.height * _this.podl_mc.scaleY);	// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
			init();												// начальное создание элементов
		}
		
		// функция начального создания заданного количества элементов 
		function init() {
			for (var i = 0; i < max_elements_number; i++) {
				add_element(true);								// добавление нового элемента
			}				
		}
		
		function add_element(initial_adding) {					// initial_adding = начальное ли это добавление
			var element_x;										// начальное положение по _x
			var element_y;										// начальное положение по _y
			var element_speed_x;								// скорость по _x
			var element_speed_y;								// скорость по _y
			var element_scale;									// масштаб (_xscale)
			var sign = Math.floor(Math.random() * 2) * 2 - 1;	// случаный знак = 1 или -1
			var element_rotation_speed;
			var element_alpha_change;
			var element_color;
		
		
			element_x = active_width / 2; 
			element_y = active_height / 2; 
		
			var speed = min_speed_y + Math.random() * (max_speed_y - min_speed_y); 
			var angle = Math.floor(Math.random() * 360);
			
			element_speed_x = speed * Math.cos(angle);
			element_speed_y = speed * Math.sin(angle) / 2;
			
			
			element_scale = min_scale + Math.random() * (max_scale - min_scale); 
			element_rotation_speed = avg_rotation_change * (Math.random() * 0.8 + 0.4) * sign;
			element_alpha = 1;
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
			
		
			create_element(element_x, element_y, element_speed_x, element_speed_y, element_scale, element_rotation_speed, element_alpha, element_alpha_change, element_color);
		}
		
		
		function create_element(element_x, 
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
			var coof = 1; 										//как вариант: var coof = element_scale / 100 * 2;
			
			
			new_name = "element_" + created_elements_number + "_mc";
		
			obj_mc = new createjs.Shape();
			obj_mc.graphics.beginFill(element_color);
			obj_mc.graphics.drawCircle(10, 10, particle_size);
			_this.addChild(obj_mc);	
		
			obj_mc.name = new_name;
			
			obj_mc.x = element_x;								// начальное положение по _x
			obj_mc.y = element_y;								// начальное положение по _y
			obj_mc.new_x = obj_mc.x;								
			obj_mc.new_y = obj_mc.y;								
			
			obj_mc.speed_x = element_speed_x * coof;			// скорость по _x
			obj_mc.speed_y = element_speed_y * coof;			// скорость по _y
			obj_mc.scaleX = obj_mc.scaleY = element_scale;		// масштаб
			obj_mc.rotation_speed = element_rotation_speed * coof;		// скорость вращения элемента со случаным знаком
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
		
			var slow_coof = 0.85;
			this.speed_x *= slow_coof;
			this.speed_y *= slow_coof;
			
			this.new_x += this.speed_x;
			this.new_y += this.speed_y + gravity_y;
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
			
			// проверка на удаление по достижению _alpha = 0 
			if (avg_alpha_change < 0) {
				if (this.alpha <=0) {
					kill = true;
				}
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
				//add_element(false);									// добавление нового элемента
				if (live_elements_number == 0) {
					_this.parent.removeChild(_this);
				}
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// PODL_MC
	this.podl_mc = new lib.PARTICLES_bounds_podlcopy2();
	this.podl_mc.setTransform(120,120,1,0.6,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.podl_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,240);


(lib.PARTICLES_DOTS_CENTERexplosioncopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.podl_mc.visible = false;
	}
	this.frame_1 = function() {
		var max_elements_number = 5;							// максимально разрешенное количество элементов на поле
		var max_speed_x = 0;									// максимальная скорость по _x
		var min_speed_x = 0;									// минимальная скорость по _x
		var max_speed_y = 20;									// максимальная скорость по _y
		var min_speed_y = 10;									// минимальная скорость по _y
		var particle_size = 2;
		var max_scale = 1;										// максимальный масштаб элемента (_xscale = 0..100)
		var min_scale = 0.2;									// минимальный масштаб элемента (_xscale = 0..100) (значение 100 = "размер все время постоянный")
		var particle_color_1 = "#00ffff";
		var particle_color_2 = "#00ffff";
		var particle_color_3 = "#66ffff";
		var avg_rotation_change = 2;							// СРЕДНЕЕ изменение поворота ("градусов за 1 кадр") (значение 0 = "нет вращения")
		var avg_alpha_change = -0.04;							// СРЕДНЕЕ изменение прозрачности
		var trace_inteval_time = 0;								// период вывода trace (0 = "не выводить ничего")
		var trace_inteval_id;
		var active_width;										// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)
		var active_height;										// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
		var created_elements_number = 0;						// количество созданных элементов (с самого начала работы)
		var live_elements_number = 0;							// текущее количество элементов на поле
		var skipped = 0;
		var _this = this;
		var gravity_y = 2;
		
		this.stop();
		main();
		
		function main() {
			_this.podl_mc.visible = false;
			active_width = Math.round(_this.podl_mc.nominalBounds.width * _this.podl_mc.scaleX);	// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)		
			active_height = Math.round(_this.podl_mc.nominalBounds.height * _this.podl_mc.scaleY);	// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
			init();												// начальное создание элементов
		
		}
		
		// функция начального создания заданного количества элементов 
		function init() {
			for (var i = 0; i < max_elements_number; i++) {
				add_element(true);								// добавление нового элемента
			}				
		}
		
		function add_element(initial_adding) {					// initial_adding = начальное ли это добавление
			var element_x;										// начальное положение по _x
			var element_y;										// начальное положение по _y
			var element_speed_x;								// скорость по _x
			var element_speed_y;								// скорость по _y
			var element_scale;									// масштаб (_xscale)
			var sign = Math.floor(Math.random() * 2) * 2 - 1;	// случаный знак = 1 или -1
			var element_rotation_speed;
			var element_alpha_change;
			var element_color;
		
		
			element_x = active_width / 2; 
			element_y = active_height / 2; 
		
			var speed = min_speed_y + Math.random() * (max_speed_y - min_speed_y); 
			var angle = Math.floor(Math.random() * 360);
			
			element_speed_x = speed * Math.cos(angle);
			element_speed_y = speed * Math.sin(angle) / 2;
			
			
			element_scale = min_scale + Math.random() * (max_scale - min_scale); 
			element_rotation_speed = avg_rotation_change * (Math.random() * 0.8 + 0.4) * sign;
			element_alpha = 1;
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
			
		
			create_element(element_x, element_y, element_speed_x, element_speed_y, element_scale, element_rotation_speed, element_alpha, element_alpha_change, element_color);
		}
		
		
		function create_element(element_x, 
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
			var coof = 1; 										//как вариант: var coof = element_scale / 100 * 2;
			
			
			new_name = "element_" + created_elements_number + "_mc";
		
			obj_mc = new createjs.Shape();
			obj_mc.graphics.beginFill(element_color);
			obj_mc.graphics.drawCircle(10, 10, particle_size);
			_this.addChild(obj_mc);	
		
			obj_mc.name = new_name;
			
			obj_mc.x = element_x;								// начальное положение по _x
			obj_mc.y = element_y;								// начальное положение по _y
			obj_mc.new_x = obj_mc.x;								
			obj_mc.new_y = obj_mc.y;								
			
			obj_mc.speed_x = element_speed_x * coof;			// скорость по _x
			obj_mc.speed_y = element_speed_y * coof;			// скорость по _y
			obj_mc.scaleX = obj_mc.scaleY = element_scale;		// масштаб
			obj_mc.rotation_speed = element_rotation_speed * coof;		// скорость вращения элемента со случаным знаком
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
		
			var slow_coof = 0.85;
			this.speed_x *= slow_coof;
			this.speed_y *= slow_coof;
			
			this.new_x += this.speed_x;
			this.new_y += this.speed_y + gravity_y;
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
			
			// проверка на удаление по достижению _alpha = 0 
			if (avg_alpha_change < 0) {
				if (this.alpha <=0) {
					kill = true;
				}
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
				//add_element(false);									// добавление нового элемента
				if (live_elements_number == 0) {
					_this.parent.removeChild(_this);
				}
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// PODL_MC
	this.podl_mc = new lib.PARTICLES_bounds_podl();
	this.podl_mc.setTransform(193,193,1.608,0.965,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.podl_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385.9,385.9);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 14
	this.instance = new lib.Symbol14();
	this.instance.setTransform(238.7,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// <Clip Group>
	this.instance_1 = new lib.ClipGroup_5();
	this.instance_1.setTransform(124,109.2,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 14
	this.instance_2 = new lib.Symbol14copy();
	this.instance_2.setTransform(238.7,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.7,78.2);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(13));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsYEqIAApTIYxAAIAAJTg");
	var mask_graphics_2 = new cjs.Graphics().p("AnHASIgxgkIPxAAIgwAkg");
	var mask_graphics_3 = new cjs.Graphics().p("AoYBbIgri1ISHAAIgqC1g");
	var mask_graphics_4 = new cjs.Graphics().p("ApcCYIglkwIUDABIglEvg");
	var mask_graphics_5 = new cjs.Graphics().p("AqTDKIghmTIVpABIggGSg");
	var mask_graphics_6 = new cjs.Graphics().p("Aq9DwIgdnfIW1ABIgdHeg");
	var mask_graphics_7 = new cjs.Graphics().p("AraEKIgboTIXrABIgaISg");
	var mask_graphics_8 = new cjs.Graphics().p("ArrEZIgZoxIYJACIgZIvg");
	var mask_graphics_9 = new cjs.Graphics().p("ArxEbIgWo1IYPABIgWI0g");
	var mask_graphics_10 = new cjs.Graphics().p("Ar2EdIgUo5IYVABIgTI4g");
	var mask_graphics_11 = new cjs.Graphics().p("Ar8EfIgQo9IYZABIgQI8g");
	var mask_graphics_12 = new cjs.Graphics().p("AsBEhIgNpBIYdABIgNJAg");
	var mask_graphics_13 = new cjs.Graphics().p("AsFEjIgKpFIYfABIgKJEg");
	var mask_graphics_14 = new cjs.Graphics().p("AsJEkIgIpHIYjAAIgHJHg");
	var mask_graphics_15 = new cjs.Graphics().p("AsNEmIgGpLIYnABIgGJKg");
	var mask_graphics_16 = new cjs.Graphics().p("AsPEnIgGpNIYrAAIgGJNg");
	var mask_graphics_17 = new cjs.Graphics().p("AsSEnIgEpOIYtAAIgDJOg");
	var mask_graphics_18 = new cjs.Graphics().p("AsVEpIgCpQIYuAAIgBJQg");
	var mask_graphics_19 = new cjs.Graphics().p("AsWEpIgBpRIYvAAIgBJRg");
	var mask_graphics_20 = new cjs.Graphics().p("AsXEpIAApRIYvAAIAAJRg");
	var mask_graphics_21 = new cjs.Graphics().p("AsYEqIAApTIYxAAIAAJTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:0,y:-1.7}).wait(1).to({graphics:mask_graphics_3,x:0,y:-1.6}).wait(1).to({graphics:mask_graphics_4,x:0,y:-1.6}).wait(1).to({graphics:mask_graphics_5,x:0,y:-1.5}).wait(1).to({graphics:mask_graphics_6,x:0,y:-1.5}).wait(1).to({graphics:mask_graphics_7,x:0,y:-1.5}).wait(1).to({graphics:mask_graphics_8,x:0,y:-1.5}).wait(1).to({graphics:mask_graphics_9,x:0,y:-1.3}).wait(1).to({graphics:mask_graphics_10,x:0,y:-1.1}).wait(1).to({graphics:mask_graphics_11,x:0,y:-0.9}).wait(1).to({graphics:mask_graphics_12,x:0,y:-0.7}).wait(1).to({graphics:mask_graphics_13,x:0,y:-0.6}).wait(1).to({graphics:mask_graphics_14,x:0,y:-0.5}).wait(1).to({graphics:mask_graphics_15,x:0,y:-0.3}).wait(1).to({graphics:mask_graphics_16,x:0,y:-0.2}).wait(1).to({graphics:mask_graphics_17,x:0,y:-0.1}).wait(1).to({graphics:mask_graphics_18,x:0,y:-0.1}).wait(1).to({graphics:mask_graphics_19,x:0,y:0}).wait(1).to({graphics:mask_graphics_20,x:0,y:0}).wait(1).to({graphics:mask_graphics_21,x:0,y:0}).wait(41));

	// Layer 1
	this.instance = new lib.Symbol21();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,scaleX:0.64,scaleY:0.04,y:-0.8},0).to({scaleX:0.98,scaleY:0.89,y:0},6,cjs.Ease.get(0.8)).to({scaleX:1,scaleY:1},14,cjs.Ease.get(1)).wait(40));

	// Layer 4
	this.instance_1 = new lib.Symbol21copy();
	this.instance_1.setTransform(0,-2.3,0.638,0.043);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.31, 0.31, 0.31, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-81,-32,163,64);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:0.98,scaleY:0.89,y:-1.2},6,cjs.Ease.get(0.8)).to({scaleX:1,scaleY:1,y:0},14,cjs.Ease.get(1)).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-29.8,158.7,59.7);


(lib.Symbol98copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy6();
	this.instance.setTransform(0,-49.5,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.ColorFilter(0.17, 0.17, 0.17, 1, 211.65, 211.65, 211.65, 0)];
	this.instance.cache(87,11,23,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-68.7,18.8,39);


(lib.Symbol98copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy5();
	this.instance.setTransform(0,-49.5,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.ColorFilter(0.17, 0.17, 0.17, 1, 211.65, 211.65, 211.65, 0)];
	this.instance.cache(49,21,90,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-58.5,85.7,17);


(lib.Symbol98copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy3();
	this.instance.setTransform(0,-49.5,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.ColorFilter(0.17, 0.17, 0.17, 1, 211.65, 211.65, 211.65, 0)];
	this.instance.cache(-19,-6,221,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.4,-85.3,217.2,62.5);


(lib.Symbol98copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy2();
	this.instance.setTransform(0,-49.5,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.ColorFilter(0.17, 0.17, 0.17, 1, 211.65, 211.65, 211.65, 0)];
	this.instance.cache(83,16,24,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-63.2,19.9,28.2);


(lib.Symbol96copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy6();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 3)];
	this.instance.cache(87,11,23,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-46.1,76,96);


(lib.Symbol96copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy5();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(10, 10, 3)];
	this.instance.cache(49,21,90,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-23,116,49);


(lib.Symbol96copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy3();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 3)];
	this.instance.cache(-19,-6,221,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.4,-62.7,274,119);


(lib.Symbol96copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy2();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 3)];
	this.instance.cache(83,16,24,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-40.6,77,85);


(lib.Symbol95copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy6();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 3)];
	this.instance.cache(87,11,23,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-23.1,30,50);


(lib.Symbol95copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy5();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 3)];
	this.instance.cache(49,21,90,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.9,-13,96,29);


(lib.Symbol95copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy3();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 3)];
	this.instance.cache(-19,-6,221,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.4,-39.7,228,73);


(lib.Symbol95copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy2();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 3)];
	this.instance.cache(83,16,24,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-17.6,31,39);


(lib.Symbol94copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol95copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol95copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol95copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol95copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol95copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol95copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-23.1,30,50);


(lib.Symbol94copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol95copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol95copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol95copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol95copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol95copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol95copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.9,-13,96,29);


(lib.Symbol94copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol95copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol95copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol95copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol95copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol95copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol95copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.4,-39.7,228,73);


(lib.Symbol94copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol95copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol95copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol95copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol95copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol95copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol95copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-17.6,31,39);


(lib.Symbol93copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol24();
	this.instance.setTransform(98.5,39.3,1,1,0,0,0,124.3,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-15.3,248.7,78.2);


(lib.Symbol93copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol6_1();
	this.instance.setTransform(146,-41,1,1,0,0,0,46.7,-68.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-166,300,250);


(lib.Symbol93copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(6.9,103.1,1,1,0,0,0,-89,73.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.1,-21.9,300,250);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(143.1,107.2,1,1,0,0,0,48.1,73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-17.8,300,250);


(lib.Symbol100copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol94copy6();
	this.instance.setTransform(0,-49.5);
	this.instance.alpha = 0.648;
	this.instance.cache(-12,-25,34,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-72.7,30,51);


(lib.Symbol100copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol94copy5();
	this.instance.setTransform(0,-49.5);
	this.instance.alpha = 0.648;
	this.instance.cache(-49,-15,100,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.9,-62.5,96,29);


(lib.Symbol100copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol94copy3();
	this.instance.setTransform(0,-49.5);
	this.instance.alpha = 0.648;
	this.instance.cache(-117,-42,232,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.4,-89.3,228,75);


(lib.Symbol100copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol94copy2();
	this.instance.setTransform(0,-49.5);
	this.instance.alpha = 0.648;
	this.instance.cache(-16,-20,35,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-67.2,31,40);


(lib.Symbol99copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol98copy6();
	this.instance.cache(-8,-71,23,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-68.7,18.8,39);


(lib.Symbol99copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol98copy5();
	this.instance.cache(-45,-60,90,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-58.5,85.7,17);


(lib.Symbol99copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol98copy3();
	this.instance.cache(-113,-87,221,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.4,-85.3,217.2,62.5);


(lib.Symbol99copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol98copy2();
	this.instance.cache(-12,-65,24,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-63.2,19.9,28.2);


(lib.Symbol98copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy7();
	this.instance.setTransform(0,-49.5,1,1,0,0,0,94.3,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.1,-96.5,248.7,78.2);


(lib.Symbol98copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy4();
	this.instance.setTransform(0,-49.5,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.ColorFilter(0.17, 0.17, 0.17, 1, 211.65, 211.65, 211.65, 0)];
	this.instance.cache(-6,-168,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.3,-247.2,300,250);


(lib.Symbol98copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy();
	this.instance.setTransform(0,-49.5,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.ColorFilter(0.17, 0.17, 0.17, 1, 211.65, 211.65, 211.65, 0)];
	this.instance.cache(-145,-24,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.4,-103.1,300,250);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93();
	this.instance.setTransform(0,-49.5,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.ColorFilter(0.17, 0.17, 0.17, 1, 211.65, 211.65, 211.65, 0)];
	this.instance.cache(-9,-20,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.3,-99.1,300,250);


(lib.Symbol97copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol96copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol96copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol96copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 2
	this.instance_3 = new lib.Symbol96copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 1
	this.instance_4 = new lib.Symbol96copy6();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-46.1,76,96);


(lib.Symbol97copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol96copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol96copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol96copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 2
	this.instance_3 = new lib.Symbol96copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 1
	this.instance_4 = new lib.Symbol96copy5();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-23,116,49);


(lib.Symbol97copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol96copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol96copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.4,-62.7,274,119);


(lib.Symbol97copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol96copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol96copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol96copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 2
	this.instance_3 = new lib.Symbol96copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 1
	this.instance_4 = new lib.Symbol96copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-40.6,77,85);


(lib.Symbol96copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy7();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(10, 10, 3)];
	this.instance.cache(-28,-17,253,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.1,-61,280,110);


(lib.Symbol96copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy4();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(15, 15, 3)];
	this.instance.cache(-6,-168,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.3,-218.7,345,295);


(lib.Symbol96copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 3)];
	this.instance.cache(-145,-24,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-80.6,357,307);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(15, 15, 3)];
	this.instance.cache(-9,-20,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.3,-70.5,345,295);


(lib.Symbol95copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy4();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 3)];
	this.instance.cache(-6,-168,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.3,-201.7,311,261);


(lib.Symbol95copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93copy();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 3)];
	this.instance.cache(-145,-24,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.4,-57.6,311,261);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol93();
	this.instance.setTransform(0,0,1,1,0,0,0,94.3,31.7);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 3)];
	this.instance.cache(-9,-20,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-53.5,311,261);


(lib.Symbol94copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol95copy4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol95copy4();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol95copy4();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol95copy4();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol95copy4();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol95copy4();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.3,-201.7,311,261);


(lib.Symbol94copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol95copy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol95copy();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol95copy();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol95copy();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol95copy();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol95copy();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.4,-57.6,311,261);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol95();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol95();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol95();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol95();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol95();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol95();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-53.5,311,261);


(lib.Symbol101copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol97copy6();
	this.instance.setTransform(0,-49.5);
	this.instance.compositeOperation = "lighter";
	this.instance.cache(-35,-48,80,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-95.7,76,97);


(lib.Symbol101copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol97copy5();
	this.instance.setTransform(0,-49.5);
	this.instance.compositeOperation = "lighter";
	this.instance.cache(-59,-25,120,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-72.5,116,49);


(lib.Symbol101copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol97copy3();
	this.instance.setTransform(0,-49.5);
	this.instance.compositeOperation = "lighter";
	this.instance.cache(-140,-65,278,123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.4,-112.3,274,121);


(lib.Symbol101copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol97copy2();
	this.instance.setTransform(0,-49.5);
	this.instance.compositeOperation = "lighter";
	this.instance.cache(-39,-43,81,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-90.2,77,86);


(lib.Symbol100copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol94copy4();
	this.instance.setTransform(0,-49.5);
	this.instance.alpha = 0.648;
	this.instance.cache(-104,-204,315,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.3,-251.2,311,261);


(lib.Symbol100copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol94copy();
	this.instance.setTransform(0,-49.5);
	this.instance.alpha = 0.648;
	this.instance.cache(-243,-60,315,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.4,-107.1,311,261);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol94();
	this.instance.setTransform(0,-49.5);
	this.instance.alpha = 0.648;
	this.instance.cache(-107,-55,315,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-103.1,311,261);


(lib.Symbol99copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol98copy7();
	this.instance.cache(-122,-98,253,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.1,-96.5,248.7,78.2);


(lib.Symbol99copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol98copy4();
	this.instance.cache(-100,-249,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.3,-247.2,300,250);


(lib.Symbol99copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol98copy();
	this.instance.cache(-239,-105,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.4,-103.1,300,250);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol98();
	this.instance.cache(-103,-101,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.3,-99.1,300,250);


(lib.Symbol97copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol96copy7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.1,-61,280,110);


(lib.Symbol97copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol96copy4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol96copy4();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol96copy4();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.3,-218.7,345,295);


(lib.Symbol97copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol96copy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol96copy();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol96copy();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-80.6,357,307);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol96();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol96();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol96();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.3,-70.5,345,295);


(lib.Symbol102copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_77 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(77).call(this.frame_77).wait(3));

	// main
	this.instance = new lib.Symbol99copy6();
	this.instance.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:1},2,cjs.Ease.get(-1)).to({alpha:0.102},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(8).to({alpha:0.102},5,cjs.Ease.get(1)).wait(6).to({alpha:1},4,cjs.Ease.get(-1)).wait(19).to({alpha:0.102},5,cjs.Ease.get(1)).wait(6).to({alpha:1},4,cjs.Ease.get(-1)).wait(5));

	// contour
	this.instance_1 = new lib.Symbol100copy6();
	this.instance_1.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:1},2,cjs.Ease.get(-1)).to({alpha:0.102},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(8).to({alpha:0.102},5,cjs.Ease.get(1)).wait(6).to({alpha:1},4,cjs.Ease.get(-1)).wait(19).to({alpha:0.102},5,cjs.Ease.get(1)).wait(6).to({alpha:1},4,cjs.Ease.get(-1)).wait(5));

	// backlight
	this.instance_2 = new lib.Symbol101copy6();
	this.instance_2.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:0.34},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.609},2).to({alpha:1},2).wait(8).to({alpha:0},5,cjs.Ease.get(1)).wait(6).to({alpha:1},4,cjs.Ease.get(-1)).wait(19).to({alpha:0},5,cjs.Ease.get(1)).wait(6).to({alpha:1},4,cjs.Ease.get(-1)).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.1,14.9,76,97);


(lib.Symbol102copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(15));

	// main
	this.instance = new lib.Symbol99copy5();
	this.instance.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0.059},0).to({alpha:1},8).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(17));

	// contour
	this.instance_1 = new lib.Symbol100copy5();
	this.instance_1.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,alpha:0.109},0).to({alpha:1},8).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(17));

	// backlight
	this.instance_2 = new lib.Symbol101copy5();
	this.instance_2.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:1},8).wait(1).to({alpha:0.609},2).to({alpha:1},2).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91.8,38,118,49);


(lib.Symbol102copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_61 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(61).call(this.frame_61).wait(6));

	// Layer 4
	this.snow_mc = new lib.PARTICLES_DOTS_CENTERexplosioncopy6();
	this.snow_mc.setTransform(157,0,0.637,0.637);
	this.snow_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.snow_mc).wait(6).to({_off:false},0).to({_off:true},54).wait(7));

	// main
	this.instance = new lib.Symbol99copy3();
	this.instance.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0.059},0).wait(2).to({alpha:0},0).to({alpha:1},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(13).to({alpha:0.641},2).to({alpha:1},2).wait(30));

	// contour
	this.instance_1 = new lib.Symbol100copy3();
	this.instance_1.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,alpha:0.109},0).wait(2).to({alpha:0},0).to({alpha:1},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(13).to({alpha:0.641},2).to({alpha:1},2).wait(30));

	// backlight
	this.instance_2 = new lib.Symbol101copy3();
	this.instance_2.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).wait(2).to({alpha:0.34},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.609},2).to({alpha:1},2).wait(13).to({alpha:0.609},2).to({alpha:1},2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.3,-1.7,275,120);


(lib.Symbol102copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(20));

	// main
	this.instance = new lib.Symbol99copy2();
	this.instance.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0.059},0).wait(1).to({alpha:0},0).to({alpha:1},6,cjs.Ease.get(-1)).to({alpha:0.059},3).to({alpha:1},3).wait(9).to({alpha:0.641},2).to({alpha:0.371},4).to({alpha:1},3).wait(21));

	// contour
	this.instance_1 = new lib.Symbol100copy2();
	this.instance_1.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,alpha:0.109},0).wait(1).to({alpha:0},0).to({alpha:1},6,cjs.Ease.get(-1)).to({alpha:0.109},3).to({alpha:1},3).wait(9).to({alpha:0.641},2).to({alpha:0.371},4).to({alpha:1},3).wait(21));

	// backlight
	this.instance_2 = new lib.Symbol101copy2();
	this.instance_2.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).wait(1).to({alpha:1},6,cjs.Ease.get(-1)).to({alpha:0},3).to({alpha:1},3).wait(9).to({alpha:0.609},2).to({alpha:0.371},4).to({alpha:1},3).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111.9,20.4,78,86);


(lib.Symbol101copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol97copy7();
	this.instance.setTransform(0,-49.5);
	this.instance.compositeOperation = "lighter";
	this.instance.cache(-136,-63,284,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.1,-110.5,280,110);


(lib.Symbol101copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol97copy4();
	this.instance.setTransform(0,-49.5);
	this.instance.compositeOperation = "lighter";
	this.instance.cache(-121,-221,349,299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.3,-268.2,345,295);


(lib.Symbol101copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol97copy();
	this.instance.setTransform(0,-49.5);
	this.instance.compositeOperation = "lighter";
	this.instance.cache(-266,-83,361,311);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-130.1,357,307);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol97();
	this.instance.setTransform(0,-49.5);
	this.instance.compositeOperation = "lighter";
	this.instance.cache(-124,-72,349,299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.3,-120.1,345,295);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(19));

	// Symbol 102 copy 6
	this.instance = new lib.Symbol102copy6();
	this.instance.setTransform(-126.4,-61.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(10).to({_off:false},0).wait(50));

	// Symbol 102 copy 6
	this.instance_1 = new lib.Symbol102copy6();
	this.instance_1.setTransform(-142.4,-61.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(7).to({_off:false},0).wait(53));

	// Symbol 102 copy 6
	this.instance_2 = new lib.Symbol102copy6();
	this.instance_2.setTransform(-161.4,-61.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(4).to({_off:false},0).wait(56));

	// Symbol 102 copy 6
	this.instance_3 = new lib.Symbol102copy6();
	this.instance_3.setTransform(-178.4,-61.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1).to({_off:false},0).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.3,-46.5,129,96);


(lib.Symbol102copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(19));

	// Layer 3
	this.snow_mc = new lib.PARTICLES_DOTS_CENTERexplosioncopy9();
	this.snow_mc.setTransform(185.2,-58.2,0.637,0.637);
	this.snow_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.snow_mc).wait(4).to({_off:false},0).to({_off:true},37).wait(19));

	// main
	this.instance = new lib.Symbol99copy7();
	this.instance.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:1},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(13).to({alpha:0.641},2).to({alpha:1},2).wait(25));

	// backlight
	this.instance_1 = new lib.Symbol101copy7();
	this.instance_1.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:0.34},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.609},2).to({alpha:1},2).wait(13).to({alpha:0.609},2).to({alpha:1},2).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.6,0,281,110);


(lib.Symbol102copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(5));

	// Layer 4
	this.snow_mc = new lib.PARTICLES_DOTS_CENTERexplosioncopy7();
	this.snow_mc.setTransform(94,-9,0.637,0.637);
	this.snow_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.snow_mc).wait(24).to({_off:false},0).to({_off:true},47).wait(5));

	// main
	this.instance = new lib.Symbol99copy4();
	this.instance.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0.059},0).wait(1).to({alpha:0},0).to({alpha:1},3,cjs.Ease.get(-1)).to({alpha:0.059},6,cjs.Ease.get(1)).wait(10).to({alpha:0},0).to({alpha:1},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(13).to({alpha:0.641},2).to({alpha:1},2).wait(21));

	// contour
	this.instance_1 = new lib.Symbol100copy4();
	this.instance_1.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,alpha:0.109},0).wait(1).to({alpha:0},0).to({alpha:1},3,cjs.Ease.get(-1)).to({alpha:0.109},6,cjs.Ease.get(1)).wait(10).to({alpha:0},0).to({alpha:1},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(13).to({alpha:0.641},2).to({alpha:1},2).wait(21));

	// backlight
	this.instance_2 = new lib.Symbol101copy4();
	this.instance_2.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).wait(1).to({alpha:0.32},3,cjs.Ease.get(-1)).to({alpha:0},6,cjs.Ease.get(1)).wait(10).to({alpha:0.34},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.609},2).to({alpha:1},2).wait(13).to({alpha:0.609},2).to({alpha:1},2).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.4,-157.7,346,295);


(lib.Symbol102copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(85).call(this.frame_85).wait(56));

	// main
	this.instance = new lib.Symbol99copy();
	this.instance.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0.059},0).wait(1).to({alpha:1},10).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(53).to({alpha:0.641},2).to({alpha:1},2).to({_off:true},21).wait(45));

	// contour
	this.instance_1 = new lib.Symbol100copy();
	this.instance_1.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,alpha:0.109},0).wait(1).to({alpha:1},10).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(53).to({alpha:0.641},2).to({alpha:1},2).to({_off:true},21).wait(45));

	// backlight
	this.instance_2 = new lib.Symbol101copy();
	this.instance_2.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).wait(1).to({alpha:1},10).wait(1).to({alpha:0.609},2).to({alpha:1},2).wait(53).to({alpha:0.352},2).to({alpha:1},2).to({_off:true},21).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.7,-19.6,357,308);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_246 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(246).call(this.frame_246).wait(6));

	// Layer 2
	this.snow_mc = new lib.PARTICLES_DOTS_CENTERexplosioncopy();
	this.snow_mc.setTransform(-36,-29,0.637,0.637);
	this.snow_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.snow_mc).wait(192).to({_off:false},0).to({_off:true},54).wait(6));

	// Layer 4
	this.snow_mc_1 = new lib.PARTICLES_DOTS_CENTERexplosioncopy();
	this.snow_mc_1.setTransform(50,-57,0.637,0.637);
	this.snow_mc_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.snow_mc_1).wait(24).to({_off:false},0).to({_off:true},54).wait(174));

	// main
	this.instance = new lib.Symbol99();
	this.instance.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0.059},0).wait(1).to({alpha:0},0).to({alpha:1},3,cjs.Ease.get(-1)).to({alpha:0.059},6,cjs.Ease.get(1)).wait(10).to({alpha:0},0).to({alpha:1},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(13).to({alpha:0.641},2).to({alpha:1},2).wait(197));

	// contour
	this.instance_1 = new lib.Symbol100();
	this.instance_1.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,alpha:0.109},0).wait(1).to({alpha:0},0).to({alpha:1},3,cjs.Ease.get(-1)).to({alpha:0.109},6,cjs.Ease.get(1)).wait(10).to({alpha:0},0).to({alpha:1},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.641},2).to({alpha:1},2).wait(13).to({alpha:0.641},2).to({alpha:1},2).wait(197));

	// backlight
	this.instance_2 = new lib.Symbol101();
	this.instance_2.setTransform(148.7,110.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).wait(1).to({alpha:0.32},3,cjs.Ease.get(-1)).to({alpha:0},6,cjs.Ease.get(1)).wait(10).to({alpha:0.34},2,cjs.Ease.get(-1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1).to({alpha:0.609},2).to({alpha:1},2).wait(13).to({alpha:0.609},2).to({alpha:1},2).wait(197));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.4,-9.5,346,296);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(17));

	// Layer 2
	this.instance = new lib.Symbol99copy7();
	this.instance.setTransform(-4.2,58.8);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance.cache(-122,-98,253,82);

	this.instance_1 = new lib.Symbol102copy7();
	this.instance_1.setTransform(-152.9,-51.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},23).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.3,-37.7,248.7,78.2);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(16));

	// Symbol 102 copy 2
	this.instance = new lib.Symbol102copy2();
	this.instance.setTransform(187.3,-59.8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(21).to({_off:false},0).wait(33));

	// Symbol 102 copy 2
	this.instance_1 = new lib.Symbol102copy2();
	this.instance_1.setTransform(-184.7,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},33).wait(9));

	// Symbol 102 copy
	this.instance_2 = new lib.Symbol102copy();
	this.instance_2.setTransform(-150.2,-60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},41).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.9,-79.7,357,307);


(lib._TEMPLATE_all_300600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop 2 times":322});

	// timeline functions:
	this.frame_322 = function() {
		if (this.loop_times == undefined) {
			this.loop_times = 1;
		}
		else {
			this.loop_times++;
			if (this.loop_times == 2) {
				this.stop();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(322).call(this.frame_322).wait(32));

	// BORDER
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(1,1,1).p("EAXcgu3MAAABdvMgu3AAAMAAAhdvg");
	this.shape.setTransform(150,300);

	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(150,300);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},323).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(323).to({_off:false},0).to({startPosition:0},15,cjs.Ease.get(-1)).to({_off:true},15,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol22();
	this.instance_2.setTransform(150.4,484.5,1.173,1.173);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(214).to({_off:false},0).wait(109).to({x:300.4},15,cjs.Ease.get(-1)).to({x:450.4},15,cjs.Ease.get(1)).wait(1));

	// Symbol 17
	this.instance_3 = new lib.Symbol20();
	this.instance_3.setTransform(151.5,355.6,1.173,1.173);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).wait(134).to({x:301.6},15,cjs.Ease.get(-1)).to({x:451.5},15,cjs.Ease.get(1)).wait(1));

	// Symbol 16
	this.instance_4 = new lib.Symbol18();
	this.instance_4.setTransform(150.7,246.9,1.173,1.173);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(153).to({_off:false},0).wait(170).to({x:300.7},15,cjs.Ease.get(-1)).to({x:450.7},15,cjs.Ease.get(1)).wait(1));

	// Symbol 15
	this.instance_5 = new lib.Symbol15();
	this.instance_5.setTransform(432.5,197,1,1,0,0,0,-0.3,71.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115).to({_off:false},0).to({x:286.9},13,cjs.Ease.get(-1)).to({x:152.5},12,cjs.Ease.get(1)).wait(183).to({x:302.5},15,cjs.Ease.get(-1)).to({x:452.5},15,cjs.Ease.get(1)).wait(1));

	// >>
	this.instance_6 = new lib.Symbol98copy6();
	this.instance_6.setTransform(194.4,578.6,1.643,1.643);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance_6.cache(-8,-71,23,43);

	this.instance_7 = new lib.Symbol98copy6();
	this.instance_7.setTransform(168.1,578.6,1.643,1.643);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance_7.cache(-8,-71,23,43);

	this.instance_8 = new lib.Symbol98copy6();
	this.instance_8.setTransform(136.9,578.6,1.643,1.643);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance_8.cache(-8,-71,23,43);

	this.instance_9 = new lib.Symbol98copy6();
	this.instance_9.setTransform(109,578.6,1.643,1.643);
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance_9.cache(-8,-71,23,43);

	this.instance_10 = new lib.Symbol13();
	this.instance_10.setTransform(40.3,487.7,1.643,1.643,0,0,0,-71.5,-6.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_10}]},32).to({state:[{t:this.instance_10}]},82).to({state:[{t:this.instance_10}]},13).to({state:[{t:this.instance_10}]},12).to({state:[]},1).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(33).to({_off:false},0).wait(82).to({x:-115.7},13,cjs.Ease.get(-1)).to({x:-259.7},12,cjs.Ease.get(1)).to({_off:true},1).wait(213));

	// =
	this.instance_11 = new lib.Symbol98copy5();
	this.instance_11.setTransform(147.8,451.9,1.228,1.228);
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance_11.cache(-45,-60,90,21);

	this.instance_12 = new lib.Symbol102copy5();
	this.instance_12.setTransform(-34.9,316.1,1.228,1.228);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},42).to({state:[{t:this.instance_12}]},72).to({state:[{t:this.instance_12}]},13).to({state:[{t:this.instance_12}]},12).to({state:[]},1).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(43).to({_off:false},0).wait(72).to({x:-190.9},13,cjs.Ease.get(-1)).to({x:-334.9},12,cjs.Ease.get(1)).to({_off:true},1).wait(213));

	// GEEKS
	this.instance_13 = new lib.Symbol98copy4();
	this.instance_13.setTransform(147.8,422.7,1.228,1.228);
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance_13.cache(-100,-249,304,254);

	this.instance_14 = new lib.Symbol102copy4();
	this.instance_14.setTransform(-34.9,286.9,1.228,1.228);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},24).to({state:[{t:this.instance_14}]},90).to({state:[{t:this.instance_14}]},13).to({state:[{t:this.instance_14}]},12).to({state:[]},1).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25).to({_off:false},0).wait(90).to({x:-190.9},13,cjs.Ease.get(-1)).to({x:-334.9},12,cjs.Ease.get(1)).to({_off:true},1).wait(213));

	// AWORDS
	this.instance_15 = new lib.Symbol99copy3();
	this.instance_15.setTransform(155.3,326.3,1.228,1.228);
	this.instance_15.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance_15.cache(-113,-87,221,67);

	this.instance_16 = new lib.Symbol102copy3();
	this.instance_16.setTransform(-27.3,190.5,1.228,1.228);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},13).to({state:[{t:this.instance_16}]},101).to({state:[{t:this.instance_16}]},13).to({state:[{t:this.instance_16}]},12).to({state:[]},1).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({_off:false},0).wait(101).to({x:-183.3},13,cjs.Ease.get(-1)).to({x:-327.3},12,cjs.Ease.get(1)).to({_off:true},1).wait(213));

	// ALL
	this.instance_17 = new lib.Symbol99copy2();
	this.instance_17.setTransform(233.9,255.9,1.228,1.228,0,0,180);
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance_17.cache(-12,-65,24,32);

	this.instance_18 = new lib.Symbol99copy2();
	this.instance_18.setTransform(142.2,255.9,1.228,1.228);
	this.instance_18.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance_18.cache(-12,-65,24,32);

	this.instance_19 = new lib.Symbol99copy();
	this.instance_19.setTransform(184.6,255.5,1.228,1.228);
	this.instance_19.filters = [new cjs.ColorFilter(0, 0, 0, 1, 25, 25, 25, 0)];
	this.instance_19.cache(-239,-105,304,254);

	this.instance_20 = new lib.Symbol12();
	this.instance_20.setTransform(153.2,277.4,1.228,1.228,0,0,0,-27.1,68.3);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]},1).to({state:[{t:this.instance_20}]},6).to({state:[{t:this.instance_20}]},108).to({state:[{t:this.instance_20}]},13).to({state:[{t:this.instance_20}]},12).to({state:[]},1).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(7).to({_off:false},0).wait(108).to({x:-2.8},13,cjs.Ease.get(-1)).to({x:-146.8},12,cjs.Ease.get(1)).to({_off:true},1).wait(213));

	// CALLING
	this.instance_21 = new lib.Symbol102();
	this.instance_21.setTransform(-64.7,35.9,1.441,1.441);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(114).to({x:-220.7,y:36},13,cjs.Ease.get(-1)).to({x:-364.7,y:35.9},12,cjs.Ease.get(1)).to({_off:true},1).wait(213));

	// Layer 3
	this.instance_22 = new lib.Symbol6();
	this.instance_22.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(115).to({x:-6},13,cjs.Ease.get(-1)).to({x:-150},12,cjs.Ease.get(1)).wait(183).to({x:0},15,cjs.Ease.get(-1)).to({x:150},15,cjs.Ease.get(1)).wait(1));

	// BACKGROUND
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(354));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,601,602);


// stage content:
(lib.SS_canvas_DOUBLECLICK_300600_001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// удаление отступа + белый фон
		document.body.style.margin="0px";
		document.body.style.background = "#ffffff";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// ALL
	this.instance = new lib._TEMPLATE_all_300600();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,299.5,600.5,601);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;