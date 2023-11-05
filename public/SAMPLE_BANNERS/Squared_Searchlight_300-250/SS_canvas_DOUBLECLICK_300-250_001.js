(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 40,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/export_165908.png", id:"export_165908"}
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



(lib.export_165908 = function() {
	this.initialize(img.export_165908);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,70);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9FBDCC","rgba(159,189,204,0)"],[0,1],0,233.5,0,-233.4).s().p("EgBngi0IDOgqMgBnBG9g");
	this.shape.setTransform(10.4,227.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.8,454.3);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.export_165908();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,70);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(159,189,204,0.302)").s().p("AsRmIIYjAAIsSMQg");
	this.shape.setTransform(78.6,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.2,78.6);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9FBDCC","#9FBDCC"],[0,1],0,36.8,0,-36.7).s().p("AvQEgQjNg9hmhJQg+gtgXgzIgIgUQgFgTAAgTQAAioGVh3QGVh3I7AAQI8AAGVB3QGVB3AACoQAAATgGATIgEAPIgzBGQhgBbj4BKQmVB3o8AAQo7AAmVh3g");
	this.shape.setTransform(138.3,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.5,81.5);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#98B3C4","#394850","#172227"],[0,0.255,0.753],0,125,0,-125).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


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
	this.shape.setTransform(73.9,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBKQgMgQAAgbIAAgDQAAgcAMgSQANgTAXAAQAJAAAJAEQAIAEAGAIIAAhFIAXAAIAACyIgRAAIgEgQQgGAJgJAFQgJAFgKAAQgXAAgNgRgAgVgFQgIAMAAAVIAAADQAAASAIAMQAIALAOAAQAKAAAHgEQAHgFAEgIIAAg5QgEgHgHgFQgHgEgKAAQgOAAgIANg");
	this.shape_1.setTransform(60.6,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBTIgPgrIg9AAIgPArIgXAAIA8imIASAAIA7CmgAgYAVIAxAAIgZhGIAAAAg");
	this.shape_2.setTransform(46.7,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAvQgPgRAAgcIAAgDQAAgbAQgSQAPgRAUAAQAZAAANAPQAMAQAAAaIAAAKIhNAAIgBAAQAAATAJAMQAIALAPAAQALAAAJgDQAJgDAGgGIAJAPQgHAGgLAFQgLAEgPAAQgZAAgPgRgAgQgkQgIAJgCAOIAAABIA3AAIAAgCQAAgOgHgJQgHgJgOAAQgKAAgHAKg");
	this.shape_3.setTransform(27.3,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBZIAAiyIAVAAIAACyg");
	this.shape_4.setTransform(18,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBWQgLgDgIgEIAEgSQAGAEAKACQAJACAJAAQAPAAAHgHQAIgIAAgQIAAgOQgGAIgJAEQgJAEgJAAQgXAAgMgQQgNgRAAgZIAAgCQAAgeANgTQAMgSAYAAQAJAAAJAEQAJAFAHAJIACgQIASAAIAAB7QAAAYgOANQgOANgYAAQgJAAgKgCgAgVg3QgIANAAAWIAAACQAAASAIAKQAIAMAOAAQAKAAAHgFQAHgFAFgIIAAg4QgFgIgHgEQgHgFgKAAQgOAAgIAOg");
	this.shape_5.setTransform(8.1,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAuQgPgRAAgcIAAgBQAAgcAOgRQAPgSAZAAQAaAAAOARQAPASAAAcIAAABQAAAcgPARQgOASgaAAQgYAAgPgSgAgXggQgJANAAATIAAABQAAAUAJAMQAIANAPAAQAQAAAJgNQAIgMAAgUIAAgBQAAgTgIgNQgJgOgQAAQgPAAgIAOg");
	this.shape_6.setTransform(-5.1,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAuQgQgRAAgcIAAgBQABgcAPgRQAOgSAZAAQAaAAAPARQAPASAAAcIAAABQAAAcgPARQgPASgaAAQgYAAgPgSgAgXggQgJANABATIAAABQgBAUAJAMQAIANAPAAQAQAAAIgNQAJgMAAgUIAAgBQAAgTgJgNQgIgOgQAAQgPAAgIAOg");
	this.shape_7.setTransform(-18.6,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrBCQgTgTAAgeIAAghQAAgeATgUQASgTAbAAQAcAAAQAPQAQAPAAAXIAAAAIgWAAQAAgOgKgLQgKgKgSAAQgRAAgMAPQgMAOAAAWIAAAhQAAAWANAPQAMAOARAAQAPAAAJgEQAJgDAEgGIAAglIgmAAIAAgSIA9AAIAAA9QgGAJgPAIQgPAIgYAAQgbAAgTgUg");
	this.shape_8.setTransform(-33.6,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeA/IAAh7IAVAAIACATQAGgLAFgFQAIgFAKAAIAFABIADAAIgCAVIgMAAQgJAAgGAEQgFAEgDAIIAABXg");
	this.shape_9.setTransform(-50.7,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAuQgPgRAAgcIAAgBQAAgcAOgRQAPgSAZAAQAZAAAPARQAQASgBAcIAAABQABAcgQARQgPASgZAAQgYAAgPgSgAgXggQgJANAAATIAAABQAAAUAJAMQAIANAPAAQAQAAAJgNQAIgMAAgUIAAgBQAAgTgIgNQgJgOgQAAQgPAAgIAOg");
	this.shape_10.setTransform(-62.2,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBbIAAhqIgUAAIAAgRIAUAAIAAgQQAAgUAKgLQAJgLATAAIAHABIAJACIgDARIgEgBIgGAAQgKAAgGAGQgEAGAAALIAAAQIAWAAIAAARIgWAAIAABqg");
	this.shape_11.setTransform(-72.2,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbA/IAAhNQAAgQgGgHQgHgGgNgBQgJAAgHAEQgHAFgFAIIAABaIgWAAIAAh7IAUAAIACASQAGgJAJgFQAKgGAKAAQAUAAALALQALAMAAAZIAABNg");
	this.shape_12.setTransform(98.2,-10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnAuQgPgRAAgcIAAgBQgBgcAQgRQAPgSAYAAQAaAAAPARQAOASAAAcIAAABQAAAcgOARQgPASgaAAQgYAAgPgSgAgXggQgJANAAATIAAABQAAAUAJAMQAIANAPAAQAQAAAJgNQAIgMAAgUIAAgBQAAgTgIgNQgJgOgQAAQgPAAgIAOg");
	this.shape_13.setTransform(84.7,-10.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKBaIAAh7IAVAAIAAB7gAgKhCIAAgWIAVAAIAAAWg");
	this.shape_14.setTransform(75,-13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEBGQgIgJAAgRIAAhKIgUAAIAAgRIAUAAIAAgeIAUAAIAAAeIAYAAIAAARIgYAAIAABKQAAAIAEAEQAEADAGAAIAEAAIAEgBIADAPQgCADgFABIgKABQgOAAgGgIg");
	this.shape_15.setTransform(68,-11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoA2QgLgKAAgRQAAgSAPgJQAOgJAXAAIAZAAIAAgNQAAgLgHgGQgGgHgNAAQgJAAgHAGQgGAGAAAHIgWABIAAgBQgBgOAOgLQANgLAUAAQAVAAANAKQANALAAAUIAAA7IAAANIADAMIgYAAIgBgKIgBgJQgGAJgLAGQgJAGgLAAQgTAAgKgKgAgTALQgJAHAAAJQAAAIAFAFQAGAFAKAAQAKAAAKgGQAKgHADgIIAAgUIgaAAQgLAAgIAHg");
	this.shape_16.setTransform(57.5,-10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABAA/IAAhJQAAgSgHgIQgGgHgNgBQgLAAgIAJQgHAHgBANIAAAAIAABOIgVAAIAAhJQAAgSgGgHQgHgJgMAAQgLAAgGAEQgHAFgEAIIAABaIgWAAIAAh7IAUAAIACAQQAGgJAJgEQAKgFAMAAQANAAAJAGQAGAFAFAMQAGgLAKgGQAJgGANAAQATAAALANQALANAAAbIAABIg");
	this.shape_17.setTransform(40.7,-10.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnAuQgPgRAAgcIAAgBQAAgcAOgRQAPgSAZAAQAaAAAOARQAPASABAcIAAABQgBAcgPARQgOASgaAAQgYAAgPgSgAgXggQgJANAAATIAAABQAAAUAJAMQAIANAPAAQAQAAAJgNQAIgMAAgUIAAgBQAAgTgIgNQgJgOgQAAQgPAAgIAOg");
	this.shape_18.setTransform(23.7,-10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEBGQgIgJAAgRIAAhKIgUAAIAAgRIAUAAIAAgeIAUAAIAAAeIAYAAIAAARIgYAAIAABKQAAAIAEAEQAEADAGAAIAEAAIAEgBIADAPQgCADgFABIgKABQgOAAgGgIg");
	this.shape_19.setTransform(12.9,-11.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmAyQgLgNAAgbIAAhIIAXAAIAABIQAAAUAFAHQAGAIANAAQAKAAAIgFQAIgFAEgJIAAhYIAWAAIAAB7IgUAAIgBgTQgGAKgKAGQgJAFgKAAQgUAAgMgNg");
	this.shape_20.setTransform(2.2,-10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAuBUIgPgsIg9AAIgPAsIgXAAIA8imIASAAIA7CmgAgYAVIAxAAIgZhGIAAAAg");
	this.shape_21.setTransform(-11.9,-12.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgzBIQgPgNAAgUQAAgPAIgKQAIgLARgJQgJgLgFgJQgEgJAAgKQAAgTALgKQALgLAUAAQAQAAAMALQALAKAAAPQAAALgGAJQgGAHgMAKIgKAJIAlAtQAEgIADgJQADgJAAgKIAUAAQAAAPgEANQgFANgIAKIAVAaIAAABIgbAAIgKgNQgJAIgLADQgKAEgLAAQgZAAgPgOgAgaAKQgKAIgEAHQgDAIAAAGQAAAMAIAJQAIAIAQAAQAIAAAGgCQAIgDAHgGIgngygAgXg9QgFAHAAAJQAAAHADAHQADAGAGAHIAQgKQAEgEADgFQACgGAAgGQAAgHgFgGQgEgFgJAAQgJAAgFAGg");
	this.shape_22.setTransform(-32.5,-12.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEBGQgIgJAAgRIAAhKIgUAAIAAgRIAUAAIAAgeIAUAAIAAAeIAYAAIAAARIgYAAIAABKQAAAIAEAEQAEADAGAAIAEAAIAEgBIADAPQgCADgFABIgKABQgOAAgGgIg");
	this.shape_23.setTransform(-49.9,-11.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKBaIAAh7IAVAAIAAB7gAgKhCIAAgWIAVAAIAAAWg");
	this.shape_24.setTransform(-56.8,-13);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnBKQgMgQAAgbIAAgDQAAgcAMgSQANgTAXAAQAJAAAJAEQAIAEAGAIIAAhFIAXAAIAACyIgRAAIgEgQQgGAJgJAFQgJAFgKAAQgXAAgNgRgAgVgFQgIAMAAAVIAAADQAAASAIAMQAIALAOAAQAKAAAHgEQAHgFAEgIIAAg5QgEgHgHgFQgHgEgKAAQgOAAgIANg");
	this.shape_25.setTransform(-66.8,-12.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgmAyQgLgNAAgbIAAhIIAXAAIAABIQAAAUAFAHQAGAIANAAQAKAAAIgFQAIgFAEgJIAAhYIAWAAIAAB7IgUAAIgBgTQgGAKgKAGQgJAFgKAAQgUAAgMgNg");
	this.shape_26.setTransform(-80,-10.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAuBUIgPgsIg9AAIgPAsIgXAAIA8imIASAAIA7CmgAgYAVIAxAAIgZhGIAAAAg");
	this.shape_27.setTransform(-94.2,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.8,-27.6,209,55.6);


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


(lib.Symbol61copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(159,189,204,0.302)").s().p("AsRmIIYjAAIsSMQg");
	this.shape.setTransform(78.6,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.2,78.6);


(lib.Symbol61copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(159,189,204,0.302)").s().p("AsRmIIYjAAIsSMQg");
	this.shape.setTransform(78.6,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.2,78.6);


(lib.Symbol61copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(159,189,204,0.302)").s().p("AsRmIIYjAAIsSMQg");
	this.shape.setTransform(78.6,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.2,78.6);


(lib.Symbol61_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(159,189,204,0.302)").s().p("AsRmIIYjAAIsSMQg");
	this.shape_1.setTransform(78.6,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.2,78.6);


(lib.Symbol54copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9FBDCC","#9FBDCC"],[0,1],0,36.8,0,-36.7).s().p("AvQEgQjNg9hmhJQg+gtgXgzIgIgUQgFgTAAgTQAAioGVh3QGVh3I7AAQI8AAGVB3QGVB3AACoQAAATgGATIgEAPIgzBGQhgBbj4BKQmVB3o8AAQo7AAmVh3g");
	this.shape.setTransform(138.3,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.5,81.5);


(lib.Symbol54copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9FBDCC","#9FBDCC"],[0,1],0,36.8,0,-36.7).s().p("AvQEgQjNg9hmhJQg+gtgXgzIgIgUQgFgTAAgTQAAioGVh3QGVh3I7AAQI8AAGVB3QGVB3AACoQAAATgGATIgEAPIgzBGQhgBbj4BKQmVB3o8AAQo7AAmVh3g");
	this.shape.setTransform(138.3,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.5,81.5);


(lib.Symbol54copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9FBDCC","#9FBDCC"],[0,1],0,36.8,0,-36.7).s().p("AvQEgQjNg9hmhJQg+gtgXgzIgIgUQgFgTAAgTQAAioGVh3QGVh3I7AAQI8AAGVB3QGVB3AACoQAAATgGATIgEAPIgzBGQhgBbj4BKQmVB3o8AAQo7AAmVh3g");
	this.shape.setTransform(138.3,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.5,81.5);


(lib.Symbol54_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9FBDCC","#9FBDCC"],[0,1],0,36.8,0,-36.7).s().p("AvQEgQjNg9hmhJQg+gtgXgzIgIgUQgFgTAAgTQAAioGVh3QGVh3I7AAQI8AAGVB3QGVB3AACoQAAATgGATIgEAPIgzBGQhgBbj4BKQmVB3o8AAQo7AAmVh3g");
	this.shape_1.setTransform(138.3,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.5,81.5);


(lib.PARTICLES_bounds_podlcopy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,204,0.298)").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol65();
	this.instance.setTransform(10.4,227.2,1,1,0,0,0,10.4,227.2);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.8,454.3);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(29));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_2 = new cjs.Graphics().p("AIaFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I9AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo9AAmUh4g");
	var mask_graphics_3 = new cjs.Graphics().p("AHgFQQjOg8hlhJQg/gugXgyIgHgUQgFgTAAgUQAAinGVh3QGVh3I8AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo8AAmVh4g");
	var mask_graphics_4 = new cjs.Graphics().p("AExFQQjNg8hkhJQg+gugWgyIgIgUQgFgTgBgUQAAinGTh3QGWh3I8AAQI9AAGUB3QGVB3AACnQABAUgGATIgFAPIgyBGQhgBbj5BJQmUB4o9AAQo8AAmWh4g");
	var mask_graphics_5 = new cjs.Graphics().p("AAQFQQjMg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGTh3QGUh3I9AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo9AAmUh4g");
	var mask_graphics_6 = new cjs.Graphics().p("AmEFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGSh3I9AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo9AAmSh4g");
	var mask_graphics_7 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_8 = new cjs.Graphics().p("AvQFQQjOg8hlhJQg/gugWgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_9 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_10 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_11 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_12 = new cjs.Graphics().p("AvSFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I8AAQI7AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o7AAQo8AAmVh4g");
	var mask_graphics_13 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_14 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgFAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_15 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_16 = new cjs.Graphics().p("AvQFQQjOg8hlhJQg/gugWgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_17 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_18 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_19 = new cjs.Graphics().p("AtbFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_20 = new cjs.Graphics().p("AsqFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_21 = new cjs.Graphics().p("AsuFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_22 = new cjs.Graphics().p("As3FQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_23 = new cjs.Graphics().p("AtHFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_24 = new cjs.Graphics().p("AtcFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhgBbj4BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_25 = new cjs.Graphics().p("AtyFQQjOg8hlhJQg/gugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgFAPIgyBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_26 = new cjs.Graphics().p("AuCFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_27 = new cjs.Graphics().p("AuLFQQjOg8hlhJQg/gugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgFAPIgyBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_28 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:144.8,y:45.6}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:289.8,y:45.6}).wait(1).to({graphics:mask_graphics_3,x:284,y:45.6}).wait(1).to({graphics:mask_graphics_4,x:266.6,y:45.6}).wait(1).to({graphics:mask_graphics_5,x:237.6,y:45.6}).wait(1).to({graphics:mask_graphics_6,x:197,y:45.6}).wait(1).to({graphics:mask_graphics_7,x:144.8,y:45.6}).wait(1).to({graphics:mask_graphics_8,x:47,y:45.6}).wait(1).to({graphics:mask_graphics_9,x:-34.2,y:45.6}).wait(1).to({graphics:mask_graphics_10,x:-92.2,y:45.6}).wait(1).to({graphics:mask_graphics_11,x:-127,y:45.6}).wait(1).to({graphics:mask_graphics_12,x:-138.4,y:45.6}).wait(1).to({graphics:mask_graphics_13,x:-129,y:45.6}).wait(1).to({graphics:mask_graphics_14,x:-99.9,y:45.6}).wait(1).to({graphics:mask_graphics_15,x:-51.5,y:45.6}).wait(1).to({graphics:mask_graphics_16,x:16.4,y:45.6}).wait(1).to({graphics:mask_graphics_17,x:84.2,y:45.6}).wait(1).to({graphics:mask_graphics_18,x:132.6,y:45.6}).wait(1).to({graphics:mask_graphics_19,x:150,y:45.6}).wait(1).to({graphics:mask_graphics_20,x:154.8,y:45.6}).wait(1).to({graphics:mask_graphics_21,x:154.5,y:45.6}).wait(1).to({graphics:mask_graphics_22,x:153.6,y:45.6}).wait(1).to({graphics:mask_graphics_23,x:152,y:45.6}).wait(1).to({graphics:mask_graphics_24,x:149.8,y:45.6}).wait(1).to({graphics:mask_graphics_25,x:147.6,y:45.6}).wait(1).to({graphics:mask_graphics_26,x:146.1,y:45.6}).wait(1).to({graphics:mask_graphics_27,x:145.1,y:45.6}).wait(1).to({graphics:mask_graphics_28,x:144.8,y:45.6}).wait(43));

	// LOGO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(23,34,39,0.925)").s().p("AhiB7QgUgJgHgSQgGgSAKgaQAJgZATgQQASgOAVgIQAUgIAegHIAcgJQALgEAIgFQAJgGADgJQADgIgFgFQgGgEgMAAQgQAAgYAHQgaAIgZAMIgFg1QAZgNAegIQAdgIAbAAQAfAAAUAJQAUAKAFASQAGASgJAYQgKAZgSAPQgSANgUAIQgVAHgcAIIgdAIQgLADgJAGQgIAGgEAJQgEAKAHAGQAGAFAPAAQAUAAAegLQAegLAagRIAGA1QgfATgjALQgiALggAAQgdAAgUgJg");
	this.shape.setTransform(44.7,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(23,34,39,0.925)").s().p("Ag0CAQgpAAgagQQgZgQgGgeQgGgdAOglQAPgkAcgdQAdgdAlgRQAjgQAoAAIBvAAIhjD/gAgPg/QgTAKgQAQQgPARgJAUQgIAWACAQQACARAMAKQALAJAUAAIArAAIA4iSIgqAAQgUAAgRAJg");
	this.shape_1.setTransform(71.3,49.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(23,34,39,0.925)").s().p("ABKCAIgBguIhsAAIgjAuIhIAAIDNj/IBFAAIALD/gAACAfIBHAAIAAhZg");
	this.shape_2.setTransform(92.5,49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(23,34,39,0.925)").s().p("AiXCAIAVg2ICIAAIATgwIh4AAIAUgzIB4AAIATgwIiFAAIAVg2IDIAAIhjD/g");
	this.shape_3.setTransform(129.8,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(23,34,39,0.925)").s().p("AiICAIAWg5IBtAAIBLjGIBDAAIhjD/g");
	this.shape_4.setTransform(150.9,49.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(23,34,39,0.925)").s().p("AhnB7QgbgKgPgPIAohkIA6AAIgaBBQAUAMATAAQAVAAATgKQAUgKARgRQAQgSAIgUQAIgUgDgSQgDgRgMgKQgNgKgUAAQgSAAgTAIQgVAIgTANIgUgvQAagRAhgLQAfgKAcAAQAoAAAaARQAZARAHAeQAHAfgOAkQgPAlgeAeQgdAegmASQgkARgnAAQgbAAgZgJg");
	this.shape_5.setTransform(174,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(23,34,39,0.925)").s().p("AhyByQgZgRgGgeQgGgfAOgkQAOglAegeQAdgeAmgRQAlgRAoAAQAnAAAYARQAaARAGAeQAGAegOAlQgPAkgdAfQgeAegnASQgkARgnAAQgnAAgZgSgAgJhBQgUAKgQASQgPARgJAUQgHAUACARQADASALAKQAMAKAUAAQASAAASgKQAVgKAPgSQARgRAJgUQAIgUgDgRQgEgSgMgKQgNgKgSAAQgUAAgRAKg");
	this.shape_6.setTransform(202.3,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(23,34,39,0.925)").s().p("AhyByQgZgRgGgeQgHgfAPgkQAPglAdgeQAegeAlgRQAlgRAoAAQAnAAAYARQAZARAHAeQAHAegPAlQgOAkgeAfQgeAegnASQgkARgnAAQgnAAgZgSgAgJhBQgUAKgQASQgQARgHAUQgJAUADARQADASAMAKQALAKATAAQATAAASgKQAVgKAPgSQASgRAHgUQAJgUgDgRQgEgSgMgKQgMgKgTAAQgTAAgSAKg");
	this.shape_7.setTransform(230.7,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(23,34,39,0.925)").s().p("AhnB7QgbgKgPgPIAohkIA6AAIgaBBQAUAMATAAQAVAAATgKQAUgKARgRQAQgSAIgUQAIgUgDgSQgDgRgMgKQgNgKgUAAQgSAAgTAIQgVAIgTANIgUgvQAagRAhgLQAfgKAcAAQAoAAAaARQAZARAHAeQAHAfgOAkQgPAlgeAeQgdAegmASQgkARgnAAQgbAAgZgJg");
	this.shape_8.setTransform(257.2,50);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(23,34,39,0.922)").s().p("AhiB7QgUgJgHgSQgGgSAKgaQAJgZATgQQASgOAVgIQAUgIAegHIAcgJQALgEAIgFQAJgGADgJQADgIgFgFQgGgEgMAAQgQAAgYAHQgaAIgZAMIgFg1QAZgNAegIQAdgIAbAAQAfAAAUAJQAUAKAFASQAGASgJAYQgKAZgSAPQgSANgUAIQgVAHgcAIIgdAIQgLADgJAGQgIAGgEAJQgEAKAHAGQAGAFAPAAQAUAAAegLQAegLAagRIAGA1QgfATgjALQgiALggAAQgdAAgUgJg");
	this.shape_9.setTransform(44.7,49.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(23,34,39,0.922)").s().p("Ag0CAQgpAAgagQQgZgQgGgeQgGgdAOglQAPgkAcgdQAdgdAlgRQAjgQAoAAIBvAAIhjD/gAgPg/QgTAKgQAQQgPARgJAUQgIAWACAQQACARAMAKQALAJAUAAIArAAIA4iSIgqAAQgUAAgRAJg");
	this.shape_10.setTransform(71.3,49.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(23,34,39,0.922)").s().p("ABKCAIgBguIhsAAIgjAuIhIAAIDNj/IBFAAIALD/gAACAfIBHAAIAAhZg");
	this.shape_11.setTransform(92.5,49.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(23,34,39,0.922)").s().p("AiXCAIAVg2ICIAAIATgwIh4AAIAUgzIB4AAIATgwIiFAAIAVg2IDIAAIhjD/g");
	this.shape_12.setTransform(129.8,49.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(23,34,39,0.922)").s().p("AiICAIAWg5IBtAAIBLjGIBDAAIhjD/g");
	this.shape_13.setTransform(150.9,49.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(23,34,39,0.922)").s().p("AhnB7QgbgKgPgPIAohkIA6AAIgaBBQAUAMATAAQAVAAATgKQAUgKARgRQAQgSAIgUQAIgUgDgSQgDgRgMgKQgNgKgUAAQgSAAgTAIQgVAIgTANIgUgvQAagRAhgLQAfgKAcAAQAoAAAaARQAZARAHAeQAHAfgOAkQgPAlgeAeQgdAegmASQgkARgnAAQgbAAgZgJg");
	this.shape_14.setTransform(174,50);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(23,34,39,0.922)").s().p("AhyByQgZgRgGgeQgGgfAOgkQAOglAegeQAdgeAmgRQAlgRAoAAQAnAAAYARQAaARAGAeQAGAegOAlQgPAkgdAfQgeAegnASQgkARgnAAQgnAAgZgSgAgJhBQgUAKgQASQgPARgJAUQgHAUACARQADASALAKQAMAKAUAAQASAAASgKQAVgKAPgSQARgRAJgUQAIgUgDgRQgEgSgMgKQgNgKgSAAQgUAAgRAKg");
	this.shape_15.setTransform(202.3,50);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(23,34,39,0.922)").s().p("AhyByQgZgRgGgeQgHgfAPgkQAPglAdgeQAegeAlgRQAlgRAoAAQAnAAAYARQAZARAHAeQAHAegPAlQgOAkgeAfQgeAegnASQgkARgnAAQgnAAgZgSgAgJhBQgUAKgQASQgQARgHAUQgJAUADARQADASAMAKQALAKATAAQATAAASgKQAVgKAPgSQASgRAHgUQAJgUgDgRQgEgSgMgKQgMgKgTAAQgTAAgSAKg");
	this.shape_16.setTransform(230.7,50);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(23,34,39,0.922)").s().p("AhnB7QgbgKgPgPIAohkIA6AAIgaBBQAUAMATAAQAVAAATgKQAUgKARgRQAQgSAIgUQAIgUgDgSQgDgRgMgKQgNgKgUAAQgSAAgTAIQgVAIgTANIgUgvQAagRAhgLQAfgKAcAAQAoAAAaARQAZARAHAeQAHAfgOAkQgPAlgeAeQgdAegmASQgkARgnAAQgbAAgZgJg");
	this.shape_17.setTransform(257.2,50);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(69));

	// top light
	this.instance = new lib.Symbol54();
	this.instance.setTransform(151.4,50.6,1,1,0,0,0,138.3,40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,x:441.4},0).to({x:151.4},5,cjs.Ease.get(-1)).to({x:-138.6},5,cjs.Ease.get(1)).to({x:16.4},4,cjs.Ease.get(-1)).to({x:171.4},4,cjs.Ease.get(1)).to({x:161.4},4,cjs.Ease.get(-1)).to({x:151.4},4,cjs.Ease.get(1)).wait(43));

	// bottom light MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Eg1SAU8MAAAgp3MBqkAAAMAAAAp3g");
	var mask_1_graphics_2 = new cjs.Graphics().p("Eg1SAU8MAAAgp3MBqkAAAMAAAAp3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:97.1,y:186.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_2,x:97.1,y:186.1}).wait(69));

	// bottom light
	this.instance_1 = new lib.Symbol61();
	this.instance_1.setTransform(151.6,241.9,4.255,5.753,-0.4,0,0,78.5,78.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,scaleX:1.54,rotation:52.5,x:151.7},0).to({scaleX:4.26,rotation:-0.4,x:151.6},5,cjs.Ease.get(-1)).to({scaleX:1.54,rotation:-53,y:242},5,cjs.Ease.get(1)).to({scaleX:3.04,rotation:-28.8,x:151.9,y:241.8},4,cjs.Ease.get(-1)).to({scaleX:4.26,rotation:3.8,x:151.5,y:241.9},4,cjs.Ease.get(1)).to({rotation:2.1,x:151.6},4,cjs.Ease.get(-1)).to({rotation:-0.4},4,cjs.Ease.get(1)).wait(43));

	// bottom light (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_2 = new cjs.Graphics().p("AWk8/IXEeDMhDlAb8g");
	var mask_2_graphics_3 = new cjs.Graphics().p("ATq+TIZ2fOMhDWAdZg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EAKPghzMAi4AhxMhCjAh2g");
	var mask_2_graphics_5 = new cjs.Graphics().p("EgHWgl+MAzkAiJMhAwAp0g");
	var mask_2_graphics_6 = new cjs.Graphics().p("EgiBgn5MBMQAZzMg8wA2Ag");
	var mask_2_graphics_7 = new cjs.Graphics().p("Eg0Pgi0MBofgAqMgz0BG9g");
	var mask_2_graphics_8 = new cjs.Graphics().p("Egl+gNVMBL9gaqMgOnBP+g");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgglgDQMAzMgiqMAN/BL1g");
	var mask_2_graphics_10 = new cjs.Graphics().p("EghbAAaMAiggiDMAgXBDTg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EghzABVIZi/cMAqFA8Pg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Egh5ABcIWw+OMAtDA5lg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Egh5ABmIY//aMAq0A7pg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Egh2ABtMAgHgiYMAjmBBXg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EghuAAmMAtOglKMAWPBJJg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EghYgD7MBBcgkBMABVBP5g");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgqdgRrMBU7gWAMgYwBPXg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EgwYgduMBgxgHUMgrEBKFg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EgzSgkGMBmlADOMg1fBE/g");
	var mask_2_graphics_20 = new cjs.Graphics().p("Eg0Hgk+MBoPAG/Mg41BC+g");
	var mask_2_graphics_21 = new cjs.Graphics().p("Eg0Igk8MBoRAG0Mg4uBDFg");
	var mask_2_graphics_22 = new cjs.Graphics().p("Eg0JgkzMBoTAGNMg4VBDag");
	var mask_2_graphics_23 = new cjs.Graphics().p("Eg0LgkkMBoXAFNMg3rBD8g");
	var mask_2_graphics_24 = new cjs.Graphics().p("Eg0NgkPMBobADzMg2xBEsg");
	var mask_2_graphics_25 = new cjs.Graphics().p("Eg0OgjxMBodAB2Mg1dBFtg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Eg0PgjbMBofAAdMg0iBGag");
	var mask_2_graphics_27 = new cjs.Graphics().p("Eg0PgjBMBofgAZMg0ABG1g");
	var mask_2_graphics_28 = new cjs.Graphics().p("Eg0Pgi0MBofgAqMgz0BG9g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_2_graphics_2,x:292,y:56.8}).wait(1).to({graphics:mask_2_graphics_3,x:291.3,y:48.4}).wait(1).to({graphics:mask_2_graphics_4,x:288.8,y:26}).wait(1).to({graphics:mask_2_graphics_5,x:283.1,y:-0.6}).wait(1).to({graphics:mask_2_graphics_6,x:270.3,y:-12.7}).wait(1).to({graphics:mask_2_graphics_7,x:149.1,y:15.3}).wait(1).to({graphics:mask_2_graphics_8,x:2.4,y:-13.6}).wait(1).to({graphics:mask_2_graphics_9,x:-56.6,y:-0.4}).wait(1).to({graphics:mask_2_graphics_10,x:-62,y:26.8}).wait(1).to({graphics:mask_2_graphics_11,x:-64.3,y:49.5}).wait(1).to({graphics:mask_2_graphics_12,x:-64.9,y:57.8}).wait(1).to({graphics:mask_2_graphics_13,x:-64.8,y:51.2}).wait(1).to({graphics:mask_2_graphics_14,x:-64.5,y:32.8}).wait(1).to({graphics:mask_2_graphics_15,x:-63.7,y:7.9}).wait(1).to({graphics:mask_2_graphics_16,x:-61.3,y:-13.6}).wait(1).to({graphics:mask_2_graphics_17,x:38.9,y:-11.8}).wait(1).to({graphics:mask_2_graphics_18,x:118.3,y:5.2}).wait(1).to({graphics:mask_2_graphics_19,x:166.5,y:11.3}).wait(1).to({graphics:mask_2_graphics_20,x:182.2,y:5.7}).wait(1).to({graphics:mask_2_graphics_21,x:181.3,y:6}).wait(1).to({graphics:mask_2_graphics_22,x:178.7,y:6.9}).wait(1).to({graphics:mask_2_graphics_23,x:174.4,y:8.3}).wait(1).to({graphics:mask_2_graphics_24,x:168.4,y:10.4}).wait(1).to({graphics:mask_2_graphics_25,x:159.9,y:13.4}).wait(1).to({graphics:mask_2_graphics_26,x:153.9,y:15.6}).wait(1).to({graphics:mask_2_graphics_27,x:150.3,y:15.7}).wait(1).to({graphics:mask_2_graphics_28,x:149.1,y:15.3}).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.3,9.8,623.5,234.8);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol63();
	this.instance.setTransform(300,0,1,1,0,0,180,150,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol63();
	this.instance_1.setTransform(0,0,1,1,0,0,0,150,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-35,600,70);


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
p.nominalBounds = new cjs.Rectangle(-102.8,-27.6,209,55.6);


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
	this.instance.setTransform(4.5,-10.6,1,1,0,0,0,102.7,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.2,-63.3,187.9,113.8);


(lib.Symbol62copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(29));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_2 = new cjs.Graphics().p("AvSFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I8AAQI7AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o7AAQo8AAmVh4g");
	var mask_graphics_3 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_4 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgFAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_5 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_6 = new cjs.Graphics().p("AvQFQQjOg8hlhJQg/gugWgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_7 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_8 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_9 = new cjs.Graphics().p("AtbFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_10 = new cjs.Graphics().p("AsqFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_11 = new cjs.Graphics().p("AsuFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_12 = new cjs.Graphics().p("As3FQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_13 = new cjs.Graphics().p("AtHFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_14 = new cjs.Graphics().p("AtcFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhgBbj4BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_15 = new cjs.Graphics().p("AtyFQQjOg8hlhJQg/gugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgFAPIgyBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_16 = new cjs.Graphics().p("AuCFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_17 = new cjs.Graphics().p("AuLFQQjOg8hlhJQg/gugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgFAPIgyBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_18 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:144.8,y:45.6}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:-138.4,y:45.6}).wait(1).to({graphics:mask_graphics_3,x:-129,y:45.6}).wait(1).to({graphics:mask_graphics_4,x:-99.9,y:45.6}).wait(1).to({graphics:mask_graphics_5,x:-51.5,y:45.6}).wait(1).to({graphics:mask_graphics_6,x:16.4,y:45.6}).wait(1).to({graphics:mask_graphics_7,x:84.2,y:45.6}).wait(1).to({graphics:mask_graphics_8,x:132.6,y:45.6}).wait(1).to({graphics:mask_graphics_9,x:150,y:45.6}).wait(1).to({graphics:mask_graphics_10,x:154.8,y:45.6}).wait(1).to({graphics:mask_graphics_11,x:154.5,y:45.6}).wait(1).to({graphics:mask_graphics_12,x:153.6,y:45.6}).wait(1).to({graphics:mask_graphics_13,x:152,y:45.6}).wait(1).to({graphics:mask_graphics_14,x:149.8,y:45.6}).wait(1).to({graphics:mask_graphics_15,x:147.6,y:45.6}).wait(1).to({graphics:mask_graphics_16,x:146.1,y:45.6}).wait(1).to({graphics:mask_graphics_17,x:145.1,y:45.6}).wait(1).to({graphics:mask_graphics_18,x:144.8,y:45.6}).wait(43));

	// LOGO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(23,34,39,0.933)").s().p("AhiDJQgtgMgegVIAjhOQAeATAjALQAiAKAjAAQAhAAATgKQASgKABgRQgBgQgQgKQgSgKgsgKQg7gMghgSQghgRgNgVQgOgYAAghQAAgmAWgfQAWgfAngRQAngRAxAAQAtAAArAMQAqANAXAVIghBOQgcgUgegKQgfgKgeAAQgcAAgSALQgTALAAAUQABAKAGAHQAHAHARAHQARAHAiAHQA5ANAgARQAgAPAOAXQAOAYAAAgQAAA9gwAjQgvAihUAAQgvAAgugMg");
	this.shape.setTransform(224.5,48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(23,34,39,0.933)").s().p("ABJDQIili9IAAC9IhuAAIAAmfIBuAAIAAC0ICgi0ICBAAIi4DGIC+DZg");
	this.shape_1.setTransform(189.1,49);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(23,34,39,0.933)").s().p("AiTDQIAAmfIEnAAIAABUIi8AAIAABPICwAAIAABSIiwAAIAABWIC8AAIAABUg");
	this.shape_2.setTransform(149.7,49);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(23,34,39,0.933)").s().p("AiTDQIAAmfIEnAAIAABUIi8AAIAABPICwAAIAABSIiwAAIAABWIC8AAIAABUg");
	this.shape_3.setTransform(115.8,49);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(23,34,39,0.933)").s().p("AhVC8QgygagcgwQgagxAAhBQAAg/AagxQAcgwAxgaQAygaA/AAQAtAAAoALQAoAMAZAVIgiBOQgdgTgbgJQgagIgfAAQg1AAgbAfQgcAgAAA/QAABCAdAgQAcAgA5AAQAcAAAbgGIAAhNIhJAAIAAhIICsAAIAADPQghAPgqAIQgoAIgsAAQhCAAgygZg");
	this.shape_4.setTransform(76.4,48.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(23,34,39,0.929)").s().p("AhiDJQgtgMgegVIAjhOQAeATAjALQAiAKAjAAQAhAAATgKQASgKABgRQgBgQgQgKQgSgKgsgKQg7gMghgSQghgRgNgVQgOgYAAghQAAgmAWgfQAWgfAngRQAngRAxAAQAtAAArAMQAqANAXAVIghBOQgcgUgegKQgfgKgeAAQgcAAgSALQgTALAAAUQABAKAGAHQAHAHARAHQARAHAiAHQA5ANAgARQAgAPAOAXQAOAYAAAgQAAA9gwAjQgvAihUAAQgvAAgugMg");
	this.shape_5.setTransform(224.5,48.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(23,34,39,0.929)").s().p("ABJDQIili9IAAC9IhuAAIAAmfIBuAAIAAC0ICgi0ICBAAIi4DGIC+DZg");
	this.shape_6.setTransform(189.1,49);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(23,34,39,0.929)").s().p("AiTDQIAAmfIEnAAIAABUIi8AAIAABPICwAAIAABSIiwAAIAABWIC8AAIAABUg");
	this.shape_7.setTransform(149.7,49);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(23,34,39,0.929)").s().p("AiTDQIAAmfIEnAAIAABUIi8AAIAABPICwAAIAABSIiwAAIAABWIC8AAIAABUg");
	this.shape_8.setTransform(115.8,49);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(23,34,39,0.929)").s().p("AhVC8QgygagcgwQgagxAAhBQAAg/AagxQAcgwAxgaQAygaA/AAQAtAAAoALQAoAMAZAVIgiBOQgdgTgbgJQgagIgfAAQg1AAgbAfQgcAgAAA/QAABCAdAgQAcAgA5AAQAcAAAbgGIAAhNIhJAAIAAhIICsAAIAADPQghAPgqAIQgoAIgsAAQhCAAgygZg");
	this.shape_9.setTransform(76.4,48.9);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(59));

	// top light
	this.instance = new lib.Symbol54copy3();
	this.instance.setTransform(151.4,50.6,1,1,0,0,0,138.3,40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,x:-138.6,alpha:0},0).to({x:16.4,alpha:0.5},4,cjs.Ease.get(-1)).to({x:171.4,alpha:1},4,cjs.Ease.get(1)).to({x:161.4},4,cjs.Ease.get(-1)).to({x:151.4},4,cjs.Ease.get(1)).wait(43));

	// bottom light MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Eg1SAU8MAAAgp3MBqkAAAMAAAAp3g");
	var mask_1_graphics_2 = new cjs.Graphics().p("Eg1SAU8MAAAgp3MBqkAAAMAAAAp3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:97.1,y:186.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_2,x:97.1,y:186.1}).wait(59));

	// bottom light
	this.instance_1 = new lib.Symbol61copy3();
	this.instance_1.setTransform(151.6,241.9,4.255,5.753,-0.4,0,0,78.5,78.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,scaleX:1.54,rotation:-53,y:242,alpha:0},0).to({scaleX:3.04,rotation:-28.8,x:151.9,y:241.8,alpha:0.5},4,cjs.Ease.get(-1)).to({scaleX:4.26,rotation:3.8,x:151.5,y:241.9,alpha:1},4,cjs.Ease.get(1)).to({rotation:2.1,x:151.6},4,cjs.Ease.get(-1)).to({rotation:-0.4},4,cjs.Ease.get(1)).wait(43));

	// bottom light (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_2 = new cjs.Graphics().p("Egh5ABcIWw+OMAtDA5lg");
	var mask_2_graphics_3 = new cjs.Graphics().p("Egh5ABmIY//aMAq0A7pg");
	var mask_2_graphics_4 = new cjs.Graphics().p("Egh2ABtMAgHgiYMAjmBBXg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EghuAAmMAtOglKMAWPBJJg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EghYgD7MBBcgkBMABVBP5g");
	var mask_2_graphics_7 = new cjs.Graphics().p("EgqdgRrMBU7gWAMgYwBPXg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EgwYgduMBgxgHUMgrEBKFg");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgzSgkGMBmlADOMg1fBE/g");
	var mask_2_graphics_10 = new cjs.Graphics().p("Eg0Hgk+MBoPAG/Mg41BC+g");
	var mask_2_graphics_11 = new cjs.Graphics().p("Eg0Igk8MBoRAG0Mg4uBDFg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Eg0JgkzMBoTAGNMg4VBDag");
	var mask_2_graphics_13 = new cjs.Graphics().p("Eg0LgkkMBoXAFNMg3rBD8g");
	var mask_2_graphics_14 = new cjs.Graphics().p("Eg0NgkPMBobADzMg2xBEsg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Eg0OgjxMBodAB2Mg1dBFtg");
	var mask_2_graphics_16 = new cjs.Graphics().p("Eg0PgjbMBofAAdMg0iBGag");
	var mask_2_graphics_17 = new cjs.Graphics().p("Eg0PgjBMBofgAZMg0ABG1g");
	var mask_2_graphics_18 = new cjs.Graphics().p("Eg0Pgi0MBofgAqMgz0BG9g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_2_graphics_2,x:-64.9,y:57.8}).wait(1).to({graphics:mask_2_graphics_3,x:-64.8,y:51.2}).wait(1).to({graphics:mask_2_graphics_4,x:-64.5,y:32.8}).wait(1).to({graphics:mask_2_graphics_5,x:-63.7,y:7.9}).wait(1).to({graphics:mask_2_graphics_6,x:-61.3,y:-13.6}).wait(1).to({graphics:mask_2_graphics_7,x:38.9,y:-11.8}).wait(1).to({graphics:mask_2_graphics_8,x:118.3,y:5.2}).wait(1).to({graphics:mask_2_graphics_9,x:166.5,y:11.3}).wait(1).to({graphics:mask_2_graphics_10,x:182.2,y:5.7}).wait(1).to({graphics:mask_2_graphics_11,x:181.3,y:6}).wait(1).to({graphics:mask_2_graphics_12,x:178.7,y:6.9}).wait(1).to({graphics:mask_2_graphics_13,x:174.4,y:8.3}).wait(1).to({graphics:mask_2_graphics_14,x:168.4,y:10.4}).wait(1).to({graphics:mask_2_graphics_15,x:159.9,y:13.4}).wait(1).to({graphics:mask_2_graphics_16,x:153.9,y:15.6}).wait(1).to({graphics:mask_2_graphics_17,x:150.3,y:15.7}).wait(1).to({graphics:mask_2_graphics_18,x:149.1,y:15.3}).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.3,9.8,623.5,234.8);


(lib.Symbol62copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_83 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(83).call(this.frame_83).wait(29));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_2 = new cjs.Graphics().p("AIaFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I9AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo9AAmUh4g");
	var mask_graphics_3 = new cjs.Graphics().p("AHgFQQjOg8hlhJQg/gugXgyIgHgUQgFgTAAgUQAAinGVh3QGVh3I8AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo8AAmVh4g");
	var mask_graphics_4 = new cjs.Graphics().p("AExFQQjNg8hkhJQg+gugWgyIgIgUQgFgTgBgUQAAinGTh3QGWh3I8AAQI9AAGUB3QGVB3AACnQABAUgGATIgFAPIgyBGQhgBbj5BJQmUB4o9AAQo8AAmWh4g");
	var mask_graphics_5 = new cjs.Graphics().p("AAQFQQjMg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGTh3QGUh3I9AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo9AAmUh4g");
	var mask_graphics_6 = new cjs.Graphics().p("AmEFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGSh3I9AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo9AAmSh4g");
	var mask_graphics_7 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_8 = new cjs.Graphics().p("AvQFQQjOg8hlhJQg/gugWgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_9 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_10 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_11 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_12 = new cjs.Graphics().p("AvSFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I8AAQI7AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o7AAQo8AAmVh4g");
	var mask_graphics_13 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_14 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgFAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_15 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_16 = new cjs.Graphics().p("AvQFQQjOg8hlhJQg/gugWgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_17 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_18 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_19 = new cjs.Graphics().p("AtbFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_20 = new cjs.Graphics().p("AsqFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_21 = new cjs.Graphics().p("AsuFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_22 = new cjs.Graphics().p("As3FQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_23 = new cjs.Graphics().p("AtHFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_24 = new cjs.Graphics().p("AtcFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhgBbj4BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_25 = new cjs.Graphics().p("AtyFQQjOg8hlhJQg/gugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgFAPIgyBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_26 = new cjs.Graphics().p("AuCFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_27 = new cjs.Graphics().p("AuLFQQjOg8hlhJQg/gugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgFAPIgyBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_28 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:144.8,y:45.6}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:289.8,y:45.6}).wait(1).to({graphics:mask_graphics_3,x:284,y:45.6}).wait(1).to({graphics:mask_graphics_4,x:266.6,y:45.6}).wait(1).to({graphics:mask_graphics_5,x:237.6,y:45.6}).wait(1).to({graphics:mask_graphics_6,x:197,y:45.6}).wait(1).to({graphics:mask_graphics_7,x:144.8,y:45.6}).wait(1).to({graphics:mask_graphics_8,x:47,y:45.6}).wait(1).to({graphics:mask_graphics_9,x:-34.2,y:45.6}).wait(1).to({graphics:mask_graphics_10,x:-92.2,y:45.6}).wait(1).to({graphics:mask_graphics_11,x:-127,y:45.6}).wait(1).to({graphics:mask_graphics_12,x:-138.4,y:45.6}).wait(1).to({graphics:mask_graphics_13,x:-129,y:45.6}).wait(1).to({graphics:mask_graphics_14,x:-99.9,y:45.6}).wait(1).to({graphics:mask_graphics_15,x:-51.5,y:45.6}).wait(1).to({graphics:mask_graphics_16,x:16.4,y:45.6}).wait(1).to({graphics:mask_graphics_17,x:84.2,y:45.6}).wait(1).to({graphics:mask_graphics_18,x:132.6,y:45.6}).wait(1).to({graphics:mask_graphics_19,x:150,y:45.6}).wait(1).to({graphics:mask_graphics_20,x:154.8,y:45.6}).wait(1).to({graphics:mask_graphics_21,x:154.5,y:45.6}).wait(1).to({graphics:mask_graphics_22,x:153.6,y:45.6}).wait(1).to({graphics:mask_graphics_23,x:152,y:45.6}).wait(1).to({graphics:mask_graphics_24,x:149.8,y:45.6}).wait(1).to({graphics:mask_graphics_25,x:147.6,y:45.6}).wait(1).to({graphics:mask_graphics_26,x:146.1,y:45.6}).wait(1).to({graphics:mask_graphics_27,x:145.1,y:45.6}).wait(1).to({graphics:mask_graphics_28,x:144.8,y:45.6}).wait(84));

	// LOGO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(23,34,39,0.937)").s().p("AAnD7Immn1ICFAAIFLGKIDVAAIBaBrg");
	this.shape.setTransform(197.7,46.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(23,34,39,0.937)").s().p("AAnD7Immn1ICFAAIFLGKIDVAAIBaBrg");
	this.shape_1.setTransform(156.8,46.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(23,34,39,0.937)").s().p("AD7D7IiEhoIjdAAIArBoIiEAAIi9n1IBnAAIKSH1gAiPAvICJAAIjKicg");
	this.shape_2.setTransform(119.7,46.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(23,34,39,0.933)").s().p("AAnD7Immn1ICFAAIFLGKIDVAAIBaBrg");
	this.shape_3.setTransform(197.7,46.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(23,34,39,0.933)").s().p("AAnD7Immn1ICFAAIFLGKIDVAAIBaBrg");
	this.shape_4.setTransform(156.8,46.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(23,34,39,0.933)").s().p("AD7D7IiEhoIjdAAIArBoIiEAAIi9n1IBnAAIKSH1gAiPAvICJAAIjKicg");
	this.shape_5.setTransform(119.7,46.1);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},99).wait(11));

	// top light
	this.instance = new lib.Symbol54copy2();
	this.instance.setTransform(151.4,50.6,1,1,0,0,0,138.3,40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,x:441.4},0).to({x:151.4},5,cjs.Ease.get(-1)).to({x:-138.6},5,cjs.Ease.get(1)).to({x:16.4},4,cjs.Ease.get(-1)).to({x:171.4},4,cjs.Ease.get(1)).to({x:161.4},4,cjs.Ease.get(-1)).to({x:151.4},4,cjs.Ease.get(1)).wait(16).to({x:174},8,cjs.Ease.get(-1)).to({x:196.6},8,cjs.Ease.get(1)).to({x:174},8,cjs.Ease.get(-1)).to({x:151.4},8,cjs.Ease.get(1)).to({_off:true},31).wait(5));

	// bottom light MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Eg1SAU8MAAAgp3MBqkAAAMAAAAp3g");
	var mask_1_graphics_2 = new cjs.Graphics().p("Eg1SAU8MAAAgp3MBqkAAAMAAAAp3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:97.1,y:186.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_2,x:97.1,y:186.1}).wait(110));

	// bottom light
	this.instance_1 = new lib.Symbol61copy2();
	this.instance_1.setTransform(151.6,241.9,4.255,5.753,-0.4,0,0,78.5,78.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,scaleX:1.54,rotation:52.5,x:151.7},0).to({scaleX:4.26,rotation:-0.4,x:151.6},5,cjs.Ease.get(-1)).to({scaleX:1.54,rotation:-53,y:242},5,cjs.Ease.get(1)).to({scaleX:3.04,rotation:-28.8,x:151.9,y:241.8},4,cjs.Ease.get(-1)).to({scaleX:4.26,rotation:3.8,x:151.5,y:241.9},4,cjs.Ease.get(1)).to({rotation:2.1,x:151.6},4,cjs.Ease.get(-1)).to({rotation:-0.4},4,cjs.Ease.get(1)).wait(16).to({rotation:-0.4},0).to({scaleX:4.25,scaleY:5.75,rotation:4.1},8,cjs.Ease.get(-1)).to({scaleX:4.26,scaleY:5.75,rotation:8.8},8,cjs.Ease.get(1)).to({scaleX:4.25,scaleY:5.75,rotation:4.1},8,cjs.Ease.get(-1)).to({scaleX:4.26,scaleY:5.75,rotation:-0.4},8,cjs.Ease.get(1)).to({_off:true},31).wait(5));

	// bottom light (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_2 = new cjs.Graphics().p("AWk8/IXEeDMhDlAb8g");
	var mask_2_graphics_3 = new cjs.Graphics().p("ATq+TIZ2fOMhDWAdZg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EAKPghzMAi4AhxMhCjAh2g");
	var mask_2_graphics_5 = new cjs.Graphics().p("EgHWgl+MAzkAiJMhAwAp0g");
	var mask_2_graphics_6 = new cjs.Graphics().p("EgiBgn5MBMQAZzMg8wA2Ag");
	var mask_2_graphics_7 = new cjs.Graphics().p("Eg0Pgi0MBofgAqMgz0BG9g");
	var mask_2_graphics_8 = new cjs.Graphics().p("Egl+gNVMBL9gaqMgOnBP+g");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgglgDQMAzMgiqMAN/BL1g");
	var mask_2_graphics_10 = new cjs.Graphics().p("EghbAAaMAiggiDMAgXBDTg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EghzABVIZi/cMAqFA8Pg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Egh5ABcIWw+OMAtDA5lg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Egh5ABmIY//aMAq0A7pg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Egh2ABtMAgHgiYMAjmBBXg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EghuAAmMAtOglKMAWPBJJg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EghYgD7MBBcgkBMABVBP5g");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgqdgRrMBU7gWAMgYwBPXg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EgwYgduMBgxgHUMgrEBKFg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EgzSgkGMBmlADOMg1fBE/g");
	var mask_2_graphics_20 = new cjs.Graphics().p("Eg0Hgk+MBoPAG/Mg41BC+g");
	var mask_2_graphics_21 = new cjs.Graphics().p("Eg0Igk8MBoRAG0Mg4uBDFg");
	var mask_2_graphics_22 = new cjs.Graphics().p("Eg0JgkzMBoTAGNMg4VBDag");
	var mask_2_graphics_23 = new cjs.Graphics().p("Eg0LgkkMBoXAFNMg3rBD8g");
	var mask_2_graphics_24 = new cjs.Graphics().p("Eg0NgkPMBobADzMg2xBEsg");
	var mask_2_graphics_25 = new cjs.Graphics().p("Eg0OgjxMBodAB2Mg1dBFtg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Eg0PgjbMBofAAdMg0iBGag");
	var mask_2_graphics_27 = new cjs.Graphics().p("Eg0PgjBMBofgAZMg0ABG1g");
	var mask_2_graphics_28 = new cjs.Graphics().p("Eg0Pgi0MBofgAqMgz0BG9g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_2_graphics_2,x:292,y:56.8}).wait(1).to({graphics:mask_2_graphics_3,x:291.3,y:48.4}).wait(1).to({graphics:mask_2_graphics_4,x:288.8,y:26}).wait(1).to({graphics:mask_2_graphics_5,x:283.1,y:-0.6}).wait(1).to({graphics:mask_2_graphics_6,x:270.3,y:-12.7}).wait(1).to({graphics:mask_2_graphics_7,x:149.1,y:15.3}).wait(1).to({graphics:mask_2_graphics_8,x:2.4,y:-13.6}).wait(1).to({graphics:mask_2_graphics_9,x:-56.6,y:-0.4}).wait(1).to({graphics:mask_2_graphics_10,x:-62,y:26.8}).wait(1).to({graphics:mask_2_graphics_11,x:-64.3,y:49.5}).wait(1).to({graphics:mask_2_graphics_12,x:-64.9,y:57.8}).wait(1).to({graphics:mask_2_graphics_13,x:-64.8,y:51.2}).wait(1).to({graphics:mask_2_graphics_14,x:-64.5,y:32.8}).wait(1).to({graphics:mask_2_graphics_15,x:-63.7,y:7.9}).wait(1).to({graphics:mask_2_graphics_16,x:-61.3,y:-13.6}).wait(1).to({graphics:mask_2_graphics_17,x:38.9,y:-11.8}).wait(1).to({graphics:mask_2_graphics_18,x:118.3,y:5.2}).wait(1).to({graphics:mask_2_graphics_19,x:166.5,y:11.3}).wait(1).to({graphics:mask_2_graphics_20,x:182.2,y:5.7}).wait(1).to({graphics:mask_2_graphics_21,x:181.3,y:6}).wait(1).to({graphics:mask_2_graphics_22,x:178.7,y:6.9}).wait(1).to({graphics:mask_2_graphics_23,x:174.4,y:8.3}).wait(1).to({graphics:mask_2_graphics_24,x:168.4,y:10.4}).wait(1).to({graphics:mask_2_graphics_25,x:159.9,y:13.4}).wait(1).to({graphics:mask_2_graphics_26,x:153.9,y:15.6}).wait(1).to({graphics:mask_2_graphics_27,x:150.3,y:15.7}).wait(1).to({graphics:mask_2_graphics_28,x:149.1,y:15.3}).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.3,9.8,623.5,234.8);


(lib.Symbol62copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(29));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_2 = new cjs.Graphics().p("AIaFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I9AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo9AAmUh4g");
	var mask_graphics_3 = new cjs.Graphics().p("AHgFQQjOg8hlhJQg/gugXgyIgHgUQgFgTAAgUQAAinGVh3QGVh3I8AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo8AAmVh4g");
	var mask_graphics_4 = new cjs.Graphics().p("AExFQQjNg8hkhJQg+gugWgyIgIgUQgFgTgBgUQAAinGTh3QGWh3I8AAQI9AAGUB3QGVB3AACnQABAUgGATIgFAPIgyBGQhgBbj5BJQmUB4o9AAQo8AAmWh4g");
	var mask_graphics_5 = new cjs.Graphics().p("AAQFQQjMg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGTh3QGUh3I9AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo9AAmUh4g");
	var mask_graphics_6 = new cjs.Graphics().p("AmEFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGSh3I9AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo9AAmSh4g");
	var mask_graphics_7 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_8 = new cjs.Graphics().p("AvQFQQjOg8hlhJQg/gugWgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_9 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_10 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_11 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_12 = new cjs.Graphics().p("AvSFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I8AAQI7AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o7AAQo8AAmVh4g");
	var mask_graphics_13 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_14 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgFAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_15 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_16 = new cjs.Graphics().p("AvQFQQjOg8hlhJQg/gugWgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_17 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_18 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_19 = new cjs.Graphics().p("AtbFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_20 = new cjs.Graphics().p("AsqFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_21 = new cjs.Graphics().p("AsuFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_22 = new cjs.Graphics().p("As3FQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_23 = new cjs.Graphics().p("AtHFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_graphics_24 = new cjs.Graphics().p("AtcFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhgBbj4BJQmWB4o8AAQo7AAmUh4g");
	var mask_graphics_25 = new cjs.Graphics().p("AtyFQQjOg8hlhJQg/gugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgFAPIgyBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_26 = new cjs.Graphics().p("AuCFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_27 = new cjs.Graphics().p("AuLFQQjOg8hlhJQg/gugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgFAPIgyBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_graphics_28 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:144.8,y:45.6}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:289.8,y:45.6}).wait(1).to({graphics:mask_graphics_3,x:284,y:45.6}).wait(1).to({graphics:mask_graphics_4,x:266.6,y:45.6}).wait(1).to({graphics:mask_graphics_5,x:237.6,y:45.6}).wait(1).to({graphics:mask_graphics_6,x:197,y:45.6}).wait(1).to({graphics:mask_graphics_7,x:144.8,y:45.6}).wait(1).to({graphics:mask_graphics_8,x:47,y:45.6}).wait(1).to({graphics:mask_graphics_9,x:-34.2,y:45.6}).wait(1).to({graphics:mask_graphics_10,x:-92.2,y:45.6}).wait(1).to({graphics:mask_graphics_11,x:-127,y:45.6}).wait(1).to({graphics:mask_graphics_12,x:-138.4,y:45.6}).wait(1).to({graphics:mask_graphics_13,x:-129,y:45.6}).wait(1).to({graphics:mask_graphics_14,x:-99.9,y:45.6}).wait(1).to({graphics:mask_graphics_15,x:-51.5,y:45.6}).wait(1).to({graphics:mask_graphics_16,x:16.4,y:45.6}).wait(1).to({graphics:mask_graphics_17,x:84.2,y:45.6}).wait(1).to({graphics:mask_graphics_18,x:132.6,y:45.6}).wait(1).to({graphics:mask_graphics_19,x:150,y:45.6}).wait(1).to({graphics:mask_graphics_20,x:154.8,y:45.6}).wait(1).to({graphics:mask_graphics_21,x:154.5,y:45.6}).wait(1).to({graphics:mask_graphics_22,x:153.6,y:45.6}).wait(1).to({graphics:mask_graphics_23,x:152,y:45.6}).wait(1).to({graphics:mask_graphics_24,x:149.8,y:45.6}).wait(1).to({graphics:mask_graphics_25,x:147.6,y:45.6}).wait(1).to({graphics:mask_graphics_26,x:146.1,y:45.6}).wait(1).to({graphics:mask_graphics_27,x:145.1,y:45.6}).wait(1).to({graphics:mask_graphics_28,x:144.8,y:45.6}).wait(43));

	// LOGO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(23,34,39,0.929)").s().p("AjVCYQgYgVAJgnQAKgnArg1QAqgzA1gnQA2gnA3gVQA4gWA1ABQAlgBAZAKQAZAJAHASIhPA+QgLgPgQgHQgQgGgZAAQgtgBgoAaQgrAZgqAzQgrA1ACAaQACAbAwgBQAWABAagGIAwg+Ig4AAIAug6ICLAAIiICnQgjANgnAGQgnAHgjgBQg3AAgXgUg");
	this.shape.setTransform(235.5,47.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(23,34,39,0.929)").s().p("AgxCoIAAi9IiaC9IhSAAIEPlPIA/AAIAAC8ICZi8IBUAAIkPFPg");
	this.shape_1.setTransform(198.7,47.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(23,34,39,0.929)").s().p("AizCoIEOlPIBZAAIkOFPg");
	this.shape_2.setTransform(174.3,47.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(23,34,39,0.929)").s().p("AizCoIEOlPIBZAAIjUEHICNAAIg6BIg");
	this.shape_3.setTransform(148,47.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(23,34,39,0.929)").s().p("AizCoIEOlPIBZAAIjUEHICNAAIg6BIg");
	this.shape_4.setTransform(121.8,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(23,34,39,0.929)").s().p("AAwCoIAbhFIiUAAIhWBFIhZAAIGrlPIBGAAIhxFPgAAIAgIBcAAIAnhpg");
	this.shape_5.setTransform(89.3,47.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(23,34,39,0.929)").s().p("AjSCXQgWgWALgnQAKgnAqgzQApgyA1gnQA0gnA2gWQA5gVA1AAQAhgBAXAKQAXALAFAQIhOBAQgRgegsAAQgpAAgqAaQgpAZgpAyQgpAzABAaQABAaApAAQAsAAA/gfIgYBAQgfARgnAJQgnAKghAAQg1AAgVgVg");
	this.shape_6.setTransform(67,47.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(23,34,39,0.925)").s().p("AjVCYQgYgVAJgnQAKgnArg1QAqgzA1gnQA2gnA3gVQA4gWA1ABQAlgBAZAKQAZAJAHASIhPA+QgLgPgQgHQgQgGgZAAQgtgBgoAaQgrAZgqAzQgrA1ACAaQACAbAwgBQAWABAagGIAwg+Ig4AAIAug6ICLAAIiICnQgjANgnAGQgnAHgjgBQg3AAgXgUg");
	this.shape_7.setTransform(235.5,47.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(23,34,39,0.925)").s().p("AgxCoIAAi9IiaC9IhSAAIEPlPIA/AAIAAC8ICZi8IBUAAIkPFPg");
	this.shape_8.setTransform(198.7,47.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(23,34,39,0.925)").s().p("AizCoIEOlPIBZAAIkOFPg");
	this.shape_9.setTransform(174.3,47.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(23,34,39,0.925)").s().p("AizCoIEOlPIBZAAIjUEHICNAAIg6BIg");
	this.shape_10.setTransform(148,47.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(23,34,39,0.925)").s().p("AizCoIEOlPIBZAAIjUEHICNAAIg6BIg");
	this.shape_11.setTransform(121.8,47.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(23,34,39,0.925)").s().p("AAwCoIAbhFIiUAAIhWBFIhZAAIGrlPIBGAAIhxFPgAAIAgIBcAAIAnhpg");
	this.shape_12.setTransform(89.3,47.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(23,34,39,0.925)").s().p("AjSCXQgWgWALgnQAKgnAqgzQApgyA1gnQA0gnA2gWQA5gVA1AAQAhgBAXAKQAXALAFAQIhOBAQgRgegsAAQgpAAgqAaQgpAZgpAyQgpAzABAaQABAaApAAQAsAAA/gfIgYBAQgfARgnAJQgnAKghAAQg1AAgVgVg");
	this.shape_13.setTransform(67,47.9);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(69));

	// top light
	this.instance = new lib.Symbol54copy();
	this.instance.setTransform(151.4,50.6,1,1,0,0,0,138.3,40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,x:441.4,alpha:0},0).to({x:151.4,alpha:1},5,cjs.Ease.get(-1)).to({x:-138.6},5,cjs.Ease.get(1)).to({x:16.4},4,cjs.Ease.get(-1)).to({x:171.4},4,cjs.Ease.get(1)).to({x:161.4},4,cjs.Ease.get(-1)).to({x:151.4},4,cjs.Ease.get(1)).wait(43));

	// bottom light MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Eg1SAU8MAAAgp3MBqkAAAMAAAAp3g");
	var mask_1_graphics_2 = new cjs.Graphics().p("Eg1SAU8MAAAgp3MBqkAAAMAAAAp3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:97.1,y:186.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_2,x:97.1,y:186.1}).wait(69));

	// bottom light
	this.instance_1 = new lib.Symbol61copy();
	this.instance_1.setTransform(151.6,241.9,4.255,5.753,-0.4,0,0,78.5,78.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,scaleX:1.54,rotation:52.5,x:151.7,alpha:0},0).to({scaleX:4.26,rotation:-0.4,x:151.6,alpha:0.52},5,cjs.Ease.get(-1)).to({scaleX:1.54,rotation:-53,y:242,alpha:1},5,cjs.Ease.get(1)).to({scaleX:3.04,rotation:-28.8,x:151.9,y:241.8},4,cjs.Ease.get(-1)).to({scaleX:4.26,rotation:3.8,x:151.5,y:241.9},4,cjs.Ease.get(1)).to({rotation:2.1,x:151.6},4,cjs.Ease.get(-1)).to({rotation:-0.4},4,cjs.Ease.get(1)).wait(43));

	// bottom light (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_2 = new cjs.Graphics().p("AWk8/IXEeDMhDlAb8g");
	var mask_2_graphics_3 = new cjs.Graphics().p("ATq+TIZ2fOMhDWAdZg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EAKPghzMAi4AhxMhCjAh2g");
	var mask_2_graphics_5 = new cjs.Graphics().p("EgHWgl+MAzkAiJMhAwAp0g");
	var mask_2_graphics_6 = new cjs.Graphics().p("EgiBgn5MBMQAZzMg8wA2Ag");
	var mask_2_graphics_7 = new cjs.Graphics().p("Eg0Pgi0MBofgAqMgz0BG9g");
	var mask_2_graphics_8 = new cjs.Graphics().p("Egl+gNVMBL9gaqMgOnBP+g");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgglgDQMAzMgiqMAN/BL1g");
	var mask_2_graphics_10 = new cjs.Graphics().p("EghbAAaMAiggiDMAgXBDTg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EghzABVIZi/cMAqFA8Pg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Egh5ABcIWw+OMAtDA5lg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Egh5ABmIY//aMAq0A7pg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Egh2ABtMAgHgiYMAjmBBXg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EghuAAmMAtOglKMAWPBJJg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EghYgD7MBBcgkBMABVBP5g");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgqdgRrMBU7gWAMgYwBPXg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EgwYgduMBgxgHUMgrEBKFg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EgzSgkGMBmlADOMg1fBE/g");
	var mask_2_graphics_20 = new cjs.Graphics().p("Eg0Hgk+MBoPAG/Mg41BC+g");
	var mask_2_graphics_21 = new cjs.Graphics().p("Eg0Igk8MBoRAG0Mg4uBDFg");
	var mask_2_graphics_22 = new cjs.Graphics().p("Eg0JgkzMBoTAGNMg4VBDag");
	var mask_2_graphics_23 = new cjs.Graphics().p("Eg0LgkkMBoXAFNMg3rBD8g");
	var mask_2_graphics_24 = new cjs.Graphics().p("Eg0NgkPMBobADzMg2xBEsg");
	var mask_2_graphics_25 = new cjs.Graphics().p("Eg0OgjxMBodAB2Mg1dBFtg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Eg0PgjbMBofAAdMg0iBGag");
	var mask_2_graphics_27 = new cjs.Graphics().p("Eg0PgjBMBofgAZMg0ABG1g");
	var mask_2_graphics_28 = new cjs.Graphics().p("Eg0Pgi0MBofgAqMgz0BG9g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_2_graphics_2,x:292,y:56.8}).wait(1).to({graphics:mask_2_graphics_3,x:291.3,y:48.4}).wait(1).to({graphics:mask_2_graphics_4,x:288.8,y:26}).wait(1).to({graphics:mask_2_graphics_5,x:283.1,y:-0.6}).wait(1).to({graphics:mask_2_graphics_6,x:270.3,y:-12.7}).wait(1).to({graphics:mask_2_graphics_7,x:149.1,y:15.3}).wait(1).to({graphics:mask_2_graphics_8,x:2.4,y:-13.6}).wait(1).to({graphics:mask_2_graphics_9,x:-56.6,y:-0.4}).wait(1).to({graphics:mask_2_graphics_10,x:-62,y:26.8}).wait(1).to({graphics:mask_2_graphics_11,x:-64.3,y:49.5}).wait(1).to({graphics:mask_2_graphics_12,x:-64.9,y:57.8}).wait(1).to({graphics:mask_2_graphics_13,x:-64.8,y:51.2}).wait(1).to({graphics:mask_2_graphics_14,x:-64.5,y:32.8}).wait(1).to({graphics:mask_2_graphics_15,x:-63.7,y:7.9}).wait(1).to({graphics:mask_2_graphics_16,x:-61.3,y:-13.6}).wait(1).to({graphics:mask_2_graphics_17,x:38.9,y:-11.8}).wait(1).to({graphics:mask_2_graphics_18,x:118.3,y:5.2}).wait(1).to({graphics:mask_2_graphics_19,x:166.5,y:11.3}).wait(1).to({graphics:mask_2_graphics_20,x:182.2,y:5.7}).wait(1).to({graphics:mask_2_graphics_21,x:181.3,y:6}).wait(1).to({graphics:mask_2_graphics_22,x:178.7,y:6.9}).wait(1).to({graphics:mask_2_graphics_23,x:174.4,y:8.3}).wait(1).to({graphics:mask_2_graphics_24,x:168.4,y:10.4}).wait(1).to({graphics:mask_2_graphics_25,x:159.9,y:13.4}).wait(1).to({graphics:mask_2_graphics_26,x:153.9,y:15.6}).wait(1).to({graphics:mask_2_graphics_27,x:150.3,y:15.7}).wait(1).to({graphics:mask_2_graphics_28,x:149.1,y:15.3}).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.3,9.8,623.5,234.8);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// squared-colour-LOGO-2018-07-03.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6595A").s().p("AgtAvIAAhdIBbBdg");
	this.shape.setTransform(233.2,15.8,0.801,0.801);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#77BC7E").s().p("AAABdIhchdIAAhcIA9A9IAAA/IA/AAIA+A9g");
	this.shape_1.setTransform(237,12.1,0.801,0.801);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(238.9,10.3,0.801,0.801,0,0,0,11.8,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#49AADC").s().p("AAgAfIAAg+Ig/AAIg9g+IBcAAIBdBdIAABeg");
	this.shape_2.setTransform(240.7,8.3,0.801,0.801);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(238.9,10.3,0.801,0.801,0,0,0,11.8,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4949").s().p("AgYEXQgyABgqgbQgrgdgVguQgYg2ACg5QgCg5AYgyQAUguArgbQArgbAyABQAngBAkATQAiASATAhIABjQIBiAAIAAInIhiAAIAAhBQgTAigiASQgjATglAAIgEAAgAArDBQAUgJAOgSIABAAQAbghAAhAQAAhAgbgfQgOgSgUgJQgVgJgWABQgUgBgVAJQgUAJgOARQgcAhAAA9QAABAAcAiQANASAVAKQAUAJAVgBQAWABAUgJg");
	this.shape_3.setTransform(213.2,42,0.801,0.801);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4949").s().p("AiBCaQg5g4AAhiQgBg3Aag0QAYgvAugbQAvgcA0ABQBTAAAwA2QAwA2AABeIAAANIkUAAQADBAAeAfQAdAfA3AAQBGAAA1grIAdBEQgfAZgoANQgpANgsAAQhhAAg4g3gABkgsQgCgogagdQgagagkADQgjgCgcAZQgcAdgEAoIC5AAIAAAAg");
	this.shape_4.setTransform(178.5,47.5,0.801,0.801);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4949").s().p("Ah8DOIAAkfQAAg8gGg2IBdAAIAIBHQANgmAhgWQAigVAoAAQAVAAATAGIgBBbQgZgKgbAAQgzAAgbAeQgbAiACAsIAADYg");
	this.shape_5.setTransform(152.7,47.4,0.801,0.801);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4949").s().p("AgXDRQg0ABgqgbQgqgbgVgtQgYg2ACg4QgBg4AYg0QAUguArgdQApgbAzABQAogBAlAUQAiARASAjIAAg9IBiAAIAAGRIhiAAIAAhBQgSAhgiATQgjATglAAIgEAAgAgoh6QgUAJgOASQgcAjAAA9QAAA/AcAhQAOASAVAIQAUAJAVgBQAWABAUgJQAUgJAOgSQAbghAAg/QAAg8gbgkQgOgSgUgJQgVgJgWABIgCAAQgVAAgSAJg");
	this.shape_6.setTransform(120.1,47.6,0.801,0.801);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4949").s().p("AgiDMQiPAAAAimIAAjxIBgAAIAADyQAAAtARAUQASAVAjAAQAoABAageQAcgigCgrIAAjeIBhAAIAAGRIheAAIAAg/QgSAhggASQgfASghAAIgEAAg");
	this.shape_7.setTransform(84.5,48,0.801,0.801);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4949").s().p("ABkEkIAAjpQgSAggiASQglASgmgBQgyABgsgaQgpgagWgvQgXgyABg5QgBg5AYg1QAVgvAqgcQAqgcAzABQApgBAnAWQAkAUARAmIAHhFIBeAAQgHA6AAA4IAAHLgAgrjNQgVAKgOARQgbAkAAA/QABA/AaAfQAPARAVAJQAUAIAWgBQAUABAVgJQAUgJAOgRQAcgggBg/QAAg+gbgkQgOgRgVgJQgUgJgVABIgEAAQgUAAgSAIg");
	this.shape_8.setTransform(47.7,54.2,0.801,0.801);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4949").s().p("AipCeIAchGQBDAxBPgBQAdABAagNQAJgFAGgJQAFgJAAgLQABgSgPgLQgUgNgagGIhBgPQhugYAAhWQAAgjAVgeQAXgfAjgNQAqgSArACQAqgBApAOQAnAMAfAaIgeBDQg2grhGgBQgbgCgZAOQgTAMAAAYQAAAQALAMQATANAVAEIBDAPQA8AOAbAaQAeAggDAqQABAagMAYQgLAXgWAPQgtAhhNAAQhqAAhCgzg");
	this.shape_9.setTransform(14.1,47.6,0.801,0.801);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.7,77.6);


(lib.PARTICLES_DOTS_FADE_INcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var max_elements_number = 50;							// максимально разрешенное количество элементов на поле
		var max_speed_x = -0.5;									// максимальная скорость по _x
		var min_speed_x = -0.5;									// минимальная скорость по _x
		var max_speed_y = 1;									// максимальная скорость по _y
		var min_speed_y = 0.5;									// минимальная скорость по _y
		var max_scale = 1;										// максимальный масштаб элемента (_xscale = 0..100)
		var min_scale = 0.2;									// минимальный масштаб элемента (_xscale = 0..100) (значение 100 = "размер все время постоянный")
		var avg_rotation_change = 0;							// СРЕДНЕЕ изменение поворота ("градусов за 1 кадр") (значение 0 = "нет вращения")
		var avg_alpha_change = 0.01;							// СРЕДНЕЕ изменение прозрачности
		var trace_inteval_time = 0;								// период вывода trace (0 = "не выводить ничего")
		var trace_inteval_id;
		var active_width;										// ширина поля, на котором генерируется движение элементов (определяется по podl_mc)
		var active_height;										// высота поля, на котором генерируется движение элементов (определяется по podl_mc)
		var created_elements_number = 0;						// количество созданных элементов (с самого начала работы)
		var live_elements_number = 0;							// текущее количество элементов на поле
		var skipped = 0;
		var _this = this;
		
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
			if (avg_alpha_change <= 0) {
				element_alpha = 1 + (element_y / element_speed_y * avg_alpha_change) * 0.8;
			}
			else {
				element_alpha = 0 + (element_y / element_speed_y * avg_alpha_change) * 0.8;
			}
			element_alpha_change = avg_alpha_change * (Math.random() * 0.8 + 0.4);
			
			// создание нового элемента (начальное положение = в любом месте поля)
			create_element(element_x, element_y, element_speed_x, element_speed_y, element_scale, element_rotation_speed, element_alpha, element_alpha_change);
		}
		
		
		function create_element(element_x, 
								element_y, 
								element_speed_x, 
								element_speed_y, 
								element_scale, 
								element_rotation_speed,
								element_alpha,
								element_alpha_change) {
			var new_name;										// имя нового элеента	
			var obj_mc;											// созданный новый элемент
			var coof = 1; 										//как вариант: var coof = element_scale / 100 * 2;
			
			
			new_name = "element_" + created_elements_number + "_mc";
		
			obj_mc = new createjs.Shape();
			obj_mc.graphics.beginFill(createjs.Graphics.getRGB(255,255,255));
			obj_mc.graphics.drawCircle(20,20,1);
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
				add_element(false);									// добавление нового элемента
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// PODL_MC
	this.podl_mc = new lib.PARTICLES_bounds_podlcopy8();
	this.podl_mc.setTransform(150,48,1.25,0.24,0,0,0,120,200.1);

	this.timeline.addTween(cjs.Tween.get(this.podl_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.1,96);


(lib.Symbol66copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_78 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(78).call(this.frame_78).wait(78));

	// Layer 1
	this.instance = new lib.Symbol64();
	this.instance.setTransform(191.1,240.6,1,0.612,0.3,0,0,10.4,454.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,regX:10.5,rotation:58.2,alpha:0},0).to({regX:10.4,regY:454.2,rotation:-7.6,alpha:1},17,cjs.Ease.get(-1)).to({regY:454.3,rotation:-69.8},16,cjs.Ease.get(1)).to({rotation:0.3},17,cjs.Ease.get(-1)).to({regX:10.5,rotation:58.2,alpha:0},14,cjs.Ease.get(1)).wait(1).to({_off:true},30).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(180.7,-37.7,22.2,278.4);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_142 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(142).call(this.frame_142).wait(78));

	// Layer 1
	this.instance = new lib.Symbol64();
	this.instance.setTransform(191.1,240.6,1,0.612,0.3,0,0,10.4,454.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,regX:10.5,rotation:58.2,alpha:0},0).to({regX:10.4,regY:454.2,rotation:-7.6,alpha:1},17,cjs.Ease.get(-1)).to({regY:454.3,rotation:-69.8},16,cjs.Ease.get(1)).to({rotation:0.3},17,cjs.Ease.get(-1)).to({regX:10.5,rotation:58.2,alpha:0},14,cjs.Ease.get(1)).to({regX:10.4,regY:454.2,rotation:-7.6,alpha:1},17,cjs.Ease.get(-1)).to({regY:454.3,rotation:-69.8},16,cjs.Ease.get(1)).to({rotation:0.3,alpha:0.5},17,cjs.Ease.get(-1)).to({regX:10.5,rotation:58.2,alpha:0},14,cjs.Ease.get(1)).to({_off:true},31).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(180.7,-37.7,22.2,278.4);


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


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(0,16.9,1,1,0,0,0,124.3,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.8,-36.9,247.8,76.8);


(lib.Symbol62_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(29));

	// Layer 1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_3_graphics_2 = new cjs.Graphics().p("AIaFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I9AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo9AAmUh4g");
	var mask_3_graphics_3 = new cjs.Graphics().p("AHgFQQjOg8hlhJQg/gugXgyIgHgUQgFgTAAgUQAAinGVh3QGVh3I8AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo8AAmVh4g");
	var mask_3_graphics_4 = new cjs.Graphics().p("AExFQQjNg8hkhJQg+gugWgyIgIgUQgFgTgBgUQAAinGTh3QGWh3I8AAQI9AAGUB3QGVB3AACnQABAUgGATIgFAPIgyBGQhgBbj5BJQmUB4o9AAQo8AAmWh4g");
	var mask_3_graphics_5 = new cjs.Graphics().p("AAQFQQjMg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGTh3QGUh3I9AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo9AAmUh4g");
	var mask_3_graphics_6 = new cjs.Graphics().p("AmEFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGSh3I9AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo9AAmSh4g");
	var mask_3_graphics_7 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_3_graphics_8 = new cjs.Graphics().p("AvQFQQjOg8hlhJQg/gugWgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_9 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_10 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_11 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_12 = new cjs.Graphics().p("AvSFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I8AAQI7AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o7AAQo8AAmVh4g");
	var mask_3_graphics_13 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_14 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgFAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_15 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_16 = new cjs.Graphics().p("AvQFQQjOg8hlhJQg/gugWgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_17 = new cjs.Graphics().p("AvQFQQjNg8hmhJQg+gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgGAPIgxBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_18 = new cjs.Graphics().p("AvQFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_19 = new cjs.Graphics().p("AtbFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_20 = new cjs.Graphics().p("AsqFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");
	var mask_3_graphics_21 = new cjs.Graphics().p("AsuFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_22 = new cjs.Graphics().p("As3FQQjNg8hmhJQg+gugXgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_3_graphics_23 = new cjs.Graphics().p("AtHFQQjNg8hlhJQg/gugXgyIgHgUQgGgTAAgUQAAinGVh3QGVh3I7AAQI8AAGVB3QGVB3AACnQAAAUgFATIgFAPIgyBGQhhBbj4BJQmVB4o8AAQo7AAmVh4g");
	var mask_3_graphics_24 = new cjs.Graphics().p("AtcFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhgBbj4BJQmWB4o8AAQo7AAmUh4g");
	var mask_3_graphics_25 = new cjs.Graphics().p("AtyFQQjOg8hlhJQg/gugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgFAPIgyBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_3_graphics_26 = new cjs.Graphics().p("AuCFQQjOg8hkhJQhAgugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgEAPIgzBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_3_graphics_27 = new cjs.Graphics().p("AuLFQQjOg8hlhJQg/gugWgyIgIgUQgFgTAAgUQAAinGVh3QGVh3I6AAQI9AAGVB3QGVB3AACnQAAAUgGATIgFAPIgyBGQhgBbj4BJQmVB4o9AAQo6AAmVh4g");
	var mask_3_graphics_28 = new cjs.Graphics().p("AuOFQQjOg8hlhJQg/gugXgyIgHgUQgGgTABgUQAAinGVh3QGUh3I7AAQI8AAGWB3QGVB3AACnQgBAUgFATIgFAPIgyBGQhhBbj3BJQmWB4o8AAQo7AAmUh4g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:144.8,y:45.6}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_2,x:289.8,y:45.6}).wait(1).to({graphics:mask_3_graphics_3,x:284,y:45.6}).wait(1).to({graphics:mask_3_graphics_4,x:266.6,y:45.6}).wait(1).to({graphics:mask_3_graphics_5,x:237.6,y:45.6}).wait(1).to({graphics:mask_3_graphics_6,x:197,y:45.6}).wait(1).to({graphics:mask_3_graphics_7,x:144.8,y:45.6}).wait(1).to({graphics:mask_3_graphics_8,x:47,y:45.6}).wait(1).to({graphics:mask_3_graphics_9,x:-34.2,y:45.6}).wait(1).to({graphics:mask_3_graphics_10,x:-92.2,y:45.6}).wait(1).to({graphics:mask_3_graphics_11,x:-127,y:45.6}).wait(1).to({graphics:mask_3_graphics_12,x:-138.4,y:45.6}).wait(1).to({graphics:mask_3_graphics_13,x:-129,y:45.6}).wait(1).to({graphics:mask_3_graphics_14,x:-99.9,y:45.6}).wait(1).to({graphics:mask_3_graphics_15,x:-51.5,y:45.6}).wait(1).to({graphics:mask_3_graphics_16,x:16.4,y:45.6}).wait(1).to({graphics:mask_3_graphics_17,x:84.2,y:45.6}).wait(1).to({graphics:mask_3_graphics_18,x:132.6,y:45.6}).wait(1).to({graphics:mask_3_graphics_19,x:150,y:45.6}).wait(1).to({graphics:mask_3_graphics_20,x:154.8,y:45.6}).wait(1).to({graphics:mask_3_graphics_21,x:154.5,y:45.6}).wait(1).to({graphics:mask_3_graphics_22,x:153.6,y:45.6}).wait(1).to({graphics:mask_3_graphics_23,x:152,y:45.6}).wait(1).to({graphics:mask_3_graphics_24,x:149.8,y:45.6}).wait(1).to({graphics:mask_3_graphics_25,x:147.6,y:45.6}).wait(1).to({graphics:mask_3_graphics_26,x:146.1,y:45.6}).wait(1).to({graphics:mask_3_graphics_27,x:145.1,y:45.6}).wait(1).to({graphics:mask_3_graphics_28,x:144.8,y:45.6}).wait(43));

	// LOGO
	this.instance_2 = new lib.Symbol44();
	this.instance_2.setTransform(150.8,62.4,0.739,0.739,0,0,0,0,16.8);

	this.instance_2.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false},0).wait(69));

	// top light
	this.instance_3 = new lib.Symbol54_1();
	this.instance_3.setTransform(151.4,50.6,1,1,0,0,0,138.3,40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1).to({_off:false,x:441.4},0).to({x:151.4},5,cjs.Ease.get(-1)).to({x:-138.6},5,cjs.Ease.get(1)).to({x:16.4},4,cjs.Ease.get(-1)).to({x:171.4},4,cjs.Ease.get(1)).to({x:161.4},4,cjs.Ease.get(-1)).to({x:151.4},4,cjs.Ease.get(1)).wait(43));

	// bottom light MASK (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("Eg1SAU8MAAAgp3MBqkAAAMAAAAp3g");
	var mask_4_graphics_2 = new cjs.Graphics().p("Eg1SAU8MAAAgp3MBqkAAAMAAAAp3g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:97.1,y:186.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_2,x:97.1,y:186.1}).wait(69));

	// bottom light
	this.instance_4 = new lib.Symbol61_1();
	this.instance_4.setTransform(151.6,241.9,4.255,5.753,-0.4,0,0,78.5,78.5);

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(1).to({_off:false,scaleX:1.54,rotation:52.5,x:151.7},0).to({scaleX:4.26,rotation:-0.4,x:151.6},5,cjs.Ease.get(-1)).to({scaleX:1.54,rotation:-53,y:242},5,cjs.Ease.get(1)).to({scaleX:3.04,rotation:-28.8,x:151.9,y:241.8},4,cjs.Ease.get(-1)).to({scaleX:4.26,rotation:3.8,x:151.5,y:241.9},4,cjs.Ease.get(1)).to({rotation:2.1,x:151.6},4,cjs.Ease.get(-1)).to({rotation:-0.4},4,cjs.Ease.get(1)).wait(43));

	// bottom light (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_2 = new cjs.Graphics().p("AWk8/IXEeDMhDlAb8g");
	var mask_5_graphics_3 = new cjs.Graphics().p("ATq+TIZ2fOMhDWAdZg");
	var mask_5_graphics_4 = new cjs.Graphics().p("EAKPghzMAi4AhxMhCjAh2g");
	var mask_5_graphics_5 = new cjs.Graphics().p("EgHWgl+MAzkAiJMhAwAp0g");
	var mask_5_graphics_6 = new cjs.Graphics().p("EgiBgn5MBMQAZzMg8wA2Ag");
	var mask_5_graphics_7 = new cjs.Graphics().p("Eg0Pgi0MBofgAqMgz0BG9g");
	var mask_5_graphics_8 = new cjs.Graphics().p("Egl+gNVMBL9gaqMgOnBP+g");
	var mask_5_graphics_9 = new cjs.Graphics().p("EgglgDQMAzMgiqMAN/BL1g");
	var mask_5_graphics_10 = new cjs.Graphics().p("EghbAAaMAiggiDMAgXBDTg");
	var mask_5_graphics_11 = new cjs.Graphics().p("EghzABVIZi/cMAqFA8Pg");
	var mask_5_graphics_12 = new cjs.Graphics().p("Egh5ABcIWw+OMAtDA5lg");
	var mask_5_graphics_13 = new cjs.Graphics().p("Egh5ABmIY//aMAq0A7pg");
	var mask_5_graphics_14 = new cjs.Graphics().p("Egh2ABtMAgHgiYMAjmBBXg");
	var mask_5_graphics_15 = new cjs.Graphics().p("EghuAAmMAtOglKMAWPBJJg");
	var mask_5_graphics_16 = new cjs.Graphics().p("EghYgD7MBBcgkBMABVBP5g");
	var mask_5_graphics_17 = new cjs.Graphics().p("EgqdgRrMBU7gWAMgYwBPXg");
	var mask_5_graphics_18 = new cjs.Graphics().p("EgwYgduMBgxgHUMgrEBKFg");
	var mask_5_graphics_19 = new cjs.Graphics().p("EgzSgkGMBmlADOMg1fBE/g");
	var mask_5_graphics_20 = new cjs.Graphics().p("Eg0Hgk+MBoPAG/Mg41BC+g");
	var mask_5_graphics_21 = new cjs.Graphics().p("Eg0Igk8MBoRAG0Mg4uBDFg");
	var mask_5_graphics_22 = new cjs.Graphics().p("Eg0JgkzMBoTAGNMg4VBDag");
	var mask_5_graphics_23 = new cjs.Graphics().p("Eg0LgkkMBoXAFNMg3rBD8g");
	var mask_5_graphics_24 = new cjs.Graphics().p("Eg0NgkPMBobADzMg2xBEsg");
	var mask_5_graphics_25 = new cjs.Graphics().p("Eg0OgjxMBodAB2Mg1dBFtg");
	var mask_5_graphics_26 = new cjs.Graphics().p("Eg0PgjbMBofAAdMg0iBGag");
	var mask_5_graphics_27 = new cjs.Graphics().p("Eg0PgjBMBofgAZMg0ABG1g");
	var mask_5_graphics_28 = new cjs.Graphics().p("Eg0Pgi0MBofgAqMgz0BG9g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_5_graphics_2,x:292,y:56.8}).wait(1).to({graphics:mask_5_graphics_3,x:291.3,y:48.4}).wait(1).to({graphics:mask_5_graphics_4,x:288.8,y:26}).wait(1).to({graphics:mask_5_graphics_5,x:283.1,y:-0.6}).wait(1).to({graphics:mask_5_graphics_6,x:270.3,y:-12.7}).wait(1).to({graphics:mask_5_graphics_7,x:149.1,y:15.3}).wait(1).to({graphics:mask_5_graphics_8,x:2.4,y:-13.6}).wait(1).to({graphics:mask_5_graphics_9,x:-56.6,y:-0.4}).wait(1).to({graphics:mask_5_graphics_10,x:-62,y:26.8}).wait(1).to({graphics:mask_5_graphics_11,x:-64.3,y:49.5}).wait(1).to({graphics:mask_5_graphics_12,x:-64.9,y:57.8}).wait(1).to({graphics:mask_5_graphics_13,x:-64.8,y:51.2}).wait(1).to({graphics:mask_5_graphics_14,x:-64.5,y:32.8}).wait(1).to({graphics:mask_5_graphics_15,x:-63.7,y:7.9}).wait(1).to({graphics:mask_5_graphics_16,x:-61.3,y:-13.6}).wait(1).to({graphics:mask_5_graphics_17,x:38.9,y:-11.8}).wait(1).to({graphics:mask_5_graphics_18,x:118.3,y:5.2}).wait(1).to({graphics:mask_5_graphics_19,x:166.5,y:11.3}).wait(1).to({graphics:mask_5_graphics_20,x:182.2,y:5.7}).wait(1).to({graphics:mask_5_graphics_21,x:181.3,y:6}).wait(1).to({graphics:mask_5_graphics_22,x:178.7,y:6.9}).wait(1).to({graphics:mask_5_graphics_23,x:174.4,y:8.3}).wait(1).to({graphics:mask_5_graphics_24,x:168.4,y:10.4}).wait(1).to({graphics:mask_5_graphics_25,x:159.9,y:13.4}).wait(1).to({graphics:mask_5_graphics_26,x:153.9,y:15.6}).wait(1).to({graphics:mask_5_graphics_27,x:150.3,y:15.7}).wait(1).to({graphics:mask_5_graphics_28,x:149.1,y:15.3}).wait(43));

	// RAIN
	this.instance_5 = new lib.PARTICLES_DOTS_FADE_INcopy();
	this.instance_5.setTransform(122.7,332.6,1,1,0,0,0,120,200);
	this.instance_5._off = true;

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.3,9.8,623.5,234.8);


(lib._TEMPLATE_all_300250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop 2 times":388});

	// timeline functions:
	this.frame_388 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(388).call(this.frame_388).wait(30));

	// BORDER
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(1,1,1).p("AXczhMAAAAnDMgu3AAAMAAAgnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(418));

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.setTransform(149.9,113.5,0.923,0.923);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(272).to({_off:false},0).wait(117).to({x:299.9},14,cjs.Ease.get(-1)).to({x:449.9},14,cjs.Ease.get(1)).wait(1));

	// Symbol 16
	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(149.5,113.5,0.856,0.856);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(162).to({_off:false},0).wait(102).to({scaleX:0.78,scaleY:0.78,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// Symbol 17
	this.instance_2 = new lib.Symbol20();
	this.instance_2.setTransform(150.2,175.6,0.903,0.903);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(197).to({_off:false},0).wait(192).to({x:300.2},14,cjs.Ease.get(-1)).to({x:450.2},14,cjs.Ease.get(1)).wait(1));

	// export_16-59-08.png
	this.instance_3 = new lib.Symbol41();
	this.instance_3.setTransform(150,216);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({x:-5.1},15,cjs.Ease.get(-0.96)).to({x:-150},14,cjs.Ease.get(1)).wait(251).to({x:0},14,cjs.Ease.get(-1)).to({x:150},14,cjs.Ease.get(1)).wait(1));

	// Layer 21
	this.instance_4 = new lib.Symbol66copy();
	this.instance_4.setTransform(151,247.9,0.673,0.673,0,0,0,191.8,238.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(126).to({_off:false},0).wait(292));

	// Layer 20
	this.instance_5 = new lib.Symbol66copy();
	this.instance_5.setTransform(-6.5,41.9,1,1,0,0,0,32.5,32.5);
	this.instance_5.alpha = 0.5;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(133).to({_off:false},0).wait(285));

	// Layer 10
	this.instance_6 = new lib.Symbol62_1();
	this.instance_6.setTransform(80,101,1,1,0,0,0,80,101);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(133).to({_off:false},0).wait(256).to({x:230},14,cjs.Ease.get(-1)).to({x:380},14,cjs.Ease.get(1)).wait(1));

	// Layer 18
	this.instance_7 = new lib.Symbol66();
	this.instance_7.setTransform(33.5,41.9,1,1,0,0,0,32.5,32.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({_off:true},131).wait(282));

	// Layer 12
	this.instance_8 = new lib.Symbol62copy();
	this.instance_8.setTransform(77.9,100,0.501,1.149,0,-29.5,0,79.9,101);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).wait(104).to({scaleY:1.15,skewX:-29.4,x:-77.3},15,cjs.Ease.get(-0.96)).to({scaleY:1.15,skewX:-29.5,x:-222.1},14,cjs.Ease.get(1)).to({_off:true},1).wait(279));

	// Layer 13
	this.instance_9 = new lib.Symbol62copy2();
	this.instance_9.setTransform(177.8,101.2,0.427,0.805,0,35.5,0,79.8,101.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(95).to({scaleY:0.8,skewX:35.4,x:22.7},15,cjs.Ease.get(-0.96)).to({scaleY:0.81,skewX:35.5,x:-122.2},14,cjs.Ease.get(1)).to({_off:true},1).wait(279));

	// Layer 11
	this.instance_10 = new lib.Symbol62();
	this.instance_10.setTransform(118.9,149.2,0.55,0.616,0,28,180,80.2,101.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).wait(79).to({regX:80.3,regY:101.1,scaleY:0.62,skewX:27.8,x:-36.3},15,cjs.Ease.get(-1)).to({regX:80.2,regY:101.2,scaleY:0.62,skewX:28,x:-181.1},14,cjs.Ease.get(1)).to({_off:true},1).wait(279));

	// Layer 16
	this.instance_11 = new lib.Symbol62copy3();
	this.instance_11.setTransform(196.1,163.7,0.407,0.487,0,8.6,0,79.9,101);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(48).to({_off:false},0).wait(61).to({skewX:8.5,x:41},15,cjs.Ease.get(-1)).to({skewX:8.6,x:-103.9},14,cjs.Ease.get(1)).to({_off:true},1).wait(279));

	// BACKGROUND
	this.instance_12 = new lib.Symbol42();
	this.instance_12.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(418));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,601,252);


// stage content:
(lib.SS_canvas_DOUBLECLICK_300250_001 = function(mode,startPosition,loop) {
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
	this.instance = new lib._TEMPLATE_all_300250();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,600.5,251.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;