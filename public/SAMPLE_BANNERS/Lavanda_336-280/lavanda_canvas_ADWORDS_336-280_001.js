(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 40,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/pic1.jpg", id:"pic1"},
		{src:"images/pic2.jpg", id:"pic2"},
		{src:"images/pic3.jpg", id:"pic3"}
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



(lib.pic1 = function() {
	this.initialize(img.pic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.pic2 = function() {
	this.initialize(img.pic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.pic3 = function() {
	this.initialize(img.pic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABxCiQgIAAgDgHIgcg/IiUAAIgcA/IgDAFQgDACgEAAIgdAAQgFAAgCgDQgDgEACgEICNkzIADgEIAFgBIACAAIAEABIAEAEICMEzQACAEgDAEQgCADgFAAgAg4A2IBxAAIg5h8IAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-16.2,30.3,32.5);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/CgQgEAAgCgDQgDgCABgEIAAktQgBgDADgDQACgDAEAAIBpAAQBAAAAwAvQAuAvAABBQAABCguAvQgvAvhBAAgAhZB0IA9AAQAwAAAhghQAhghAAgyQAAgxghghQghghgwAAIg9AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-16,27.4,32.1);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABwCkIjFjqIgBAAIAADdQAAAEgCACQgDACgDABIgdAAQgEgBgCgCQgCgCgBgEIAAkyQABgDACgDQACgCAEAAIALAAIDGDjIAAjWQAAgEACgCQADgDAEAAIAdAAQADAAACADQAEACAAAEIAAEyQAAADgEADQgCACgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-16.5,26.6,33);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABxCiQgHAAgDgHIgdg/IiUAAIgbA/IgEAFQgDACgEAAIgdAAQgFAAgCgDQgDgEACgEICNkzIAEgEIAEgBIACAAIAFABIADAEICMEzQACAEgDAEQgCADgFAAgAg4A2IBxAAIg5h8IAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-16.2,30.3,32.5);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBCiIgFgBIgDgEIiLkyQgDgFADgDQACgEAFAAIAhAAQACAAADACIADADIBkDhIABAAIBljhQACgFAGAAIAgAAQAFAAADAEQACADgCAFIiNEyQgCAFgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-16.2,30.3,32.6);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABxCiQgHAAgEgHIgcg/IiUAAIgcA/QgDAHgHAAIgdAAQgFAAgCgDQgDgEACgEICNkzIADgEIAFgBIACAAIAEABIAEAEICMEzQACAEgDAEQgCADgFAAgAg4A2IBxAAIg5h8IAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-16.2,30.3,32.5);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQCgQgEAAgCgDQgDgCAAgEIAAktQAAgDADgDQACgDAEAAIAeAAQAEAAACADQADADAAADIAAELIB6AAQAEAAACADQADACAAAEIAAAZQAAAEgDACQgCADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-16,18.1,32.1);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A57DB6").s().p("AifEXQhDhCAAheQAAg/AVhCQAbhaA+hbQAigzAogzIAjgsQAGgIADAAQAGAAAAAIQAAAzAiA1QANAUA+BKQA0A+AXAwQAjBDAABRQAABehDBCQhDBDhdAAQhdAAhChDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-34.6,45.5,69.3);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBVQgFgGAAgKQAAgHACgIIAcheIgYAAIABgGIAZAAIALgnQAMgBAKgDIgNArIAjAAIgBAGIgjAAIgcBpIgCAFQAAAGADACQAEADAEAAQAHAAAEgGQAFgFAGgPIADgLIAGAAIgGARQgFAQgJAHQgHAGgNAAQgLAAgHgFg");
	this.shape.setTransform(68.7,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKA/QgCgEAAgFQAAgHAFgNIAYhJQADgIAAgFQAAgJgIAAQgLAAgNAPQgLAOgNAaQgNAXgJAfIgFATIgUAAIAghuIACgKQAAgHgGAAQgGAAgEAGQgFAGgFAPIgEAKIgFAAIAHgTQAJgbAWAAQAPAAAAAPQAAAHgGAOIgJAiQARglAOgRQAQgQATAAQAVAAAAATQAAAIgEAMIgZBLIgCAJQAAAHAGAAQAGAAAFgGQAEgGAFgPIAEgKIAFAAIgHAUQgJAagWAAQgMAAgFgHg");
	this.shape_1.setTransform(55.5,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqA9QgJgKAAgRQAAgKADgLQACgMAGgJQAGgMAHgLQAIgLAKgJQAIgIALgFQALgFAMAAQAJAAAFAEQAGAFAAAIQAAAJgGAJQgFAJgIAGQgJAHgLAGIgSAIIgUAHQgDANAAAMQAAAZASAAQAVAAARgaIAFACQgJAPgOAKQgNAKgPAAQgQAAgJgJgAAJg2QgJAJgJARQgJAQgFAQQAYgHAKgIQAJgHAGgLQAGgLgBgMIgBgKQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgIAAgKAKg");
	this.shape_2.setTransform(42.6,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoA/QgCgDAAgGQAAgHAFgNIAYhJQADgJAAgFQAAgIgGAAQgKAAgMAQQgMAQgMAcQgMAagKAlIAAgCIgBAHIgYAAIAfhqQACgIAAgFQAAgJgFAAQgKAAgMAPQgNAPgMAaQgMAXgJAgIgEARIgUAAIAghuIABgKQAAgHgFAAQgGAAgFAHQgFAGgFAOIgDAKIgFAAIAHgTQAJgbAWAAQAPAAAAAPQAAAIgGAMIgJAiQARgmAOgQQAPgPAQAAQARAAAAASQAAAIgDANIgKAhQARgnAOgQQAOgRASAAQASAAAAATQAAAJgEALIgZBLIgCAJQAAAHAGAAQAGAAAEgGQAFgGAFgPIAEgKIAFAAIgHAUQgJAagWAAQgMAAgFgHg");
	this.shape_3.setTransform(26.1,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqA9QgKgKAAgRQAAgKAEgLQADgMAFgJQAGgMAHgLQAIgLAJgJQAKgIAJgFQAMgFAMAAQAJAAAFAEQAGAFgBAIQABAJgGAJQgFAJgIAGQgIAHgMAGIgSAIIgUAHQgDANAAAMQAAAZASAAQAUAAATgaIAEACQgJAPgOAKQgNAKgPAAQgQAAgJgJgAAIg2QgIAJgJARQgJAQgEAQQAXgHAKgIQAJgHAGgLQAFgLABgMIgBgKQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgJAAgKAKg");
	this.shape_4.setTransform(10.2,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDBkQgKgEAAgJQAAgVAtgRQgKgFAAgJQAAgGADgEQACgFAJgGQAJgGAQgIQgQAAgJgGQgKgIAAgNQAAgGACgHQACgHAEgIQAFgHAGgFQAHgHAKgDQAIgEAMAAQAIAAAGABQAJgNAIgHQAJgFAJAAQALAAAAAJQAAAGgEAFQgFAEgGAAQgDAAgCgCQgCgCAAgEQAAgEADgFIgBgBQgCAAgFADQgHAFgHAMQAUAGAAAVQAAAMgHAMQgGALgMAIQgNAIgPABIgGAEIgJAEIgGAFIgFAEIgCAFQAAAEAQAEIARAFQAPAEAHAFQAHAEAAAKQAAAGgDAFQgDAHgGAGQgGAHgJAGQgJAEgLAEQgNADgPAAQgUAAgKgGgAg3BSQAAAKAHAEQAHAFALAAQAMAAAMgEQAJgFAIgHQAIgJAAgIQAAgEgDgCIgLgCIghgJQgbAOAAARgAADhHQgFAFgDAHIgGAPIgDAPIgBAJQAAARAPAAQAFAAAGgDQAGgDAEgEIAGgLQADgGABgGIACgMIAAgMQAAgQgQAAQgIgBgGAGg");
	this.shape_5.setTransform(-1.9,4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJBAQgCgEgBgFQABgGAEgPIAEgTQgMAdgLANQgNANgOAAQgMAAgHgIQgFgJAAgOQAAgMADgPQAEgOAIgOQAHgOAKgMQAJgNANgHQAJgHALAAQAIAAAEAFQAEAFABAJIAFgQQAOAAAJgDIggBxIgDAKQABAHAFAAQAMAAAIgbIAEgKIAEAAIgGATQgGAPgHAGQgJAGgIAAQgKAAgEgGgAgHgvQgNARgIAaQgJAYAAAWQABAUAIAAQAIAAAKgLQAKgLAIgTQAKgSAGgUIAFgTIAAgFQAAgLgEgGQgDgGgIAAQgLAAgKARg");
	this.shape_6.setTransform(-14.4,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKA/QgCgEAAgFQAAgHAFgNIAYhJQADgIAAgFQAAgJgIAAQgLAAgNAPQgLAOgNAaQgNAXgJAfIgFATIgUAAIAghuIACgKQAAgHgGAAQgGAAgEAGQgFAGgFAPIgEAKIgFAAIAHgTQAJgbAWAAQAPAAAAAPQAAAHgGAOIgJAiQARglAOgRQAQgQATAAQAVAAAAATQAAAIgEAMIgZBLIgCAJQAAAHAGAAQAGAAAFgGQAEgGAFgPIAEgKIAFAAIgHAUQgJAagWAAQgMAAgFgHg");
	this.shape_7.setTransform(-28.7,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAJBAQgCgEAAgFQgBgGAFgPIAFgTQgNAdgLANQgNANgOAAQgMAAgGgIQgHgJAAgOQAAgMAFgPQAEgOAHgOQAIgOAJgMQAJgNAMgHQAKgHAMAAQAGAAAFAFQAEAFACAJIADgQQAPAAAKgDIghBxIgCAKQAAAHAFAAQAMAAAJgbIACgKIAGAAIgHATQgFAPgJAGQgHAGgJAAQgKAAgEgGgAgHgvQgMARgJAaQgJAYABAWQAAAUAJAAQAHAAAKgLQAKgLAIgTQAKgSAGgUIAFgTIAAgFQAAgLgEgGQgEgGgGAAQgMAAgKARg");
	this.shape_8.setTransform(-43.3,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjBdIgSirIglCLQgCAJAAAEQAAAGAEADQAFADALAAIgCAFIgagBIgZABIACgFQANAAAFgFQAFgFAEgPIAih9IACgNQAAgGgEgCQgDgCgKAAIABgFIAXABIAXgBIAOCZIBhiYIAMAAIAhgBIgBAFIgMABIgHADQgDADgCAEIgDAMIgjB/QgCAJAAAEQAAAGAEACQAEACAKAAIgBAFIghgBIgiABIABgFIAIgBIAGgBIAFgCIADgEIADgGIACgIIAmiLIhqCog");
	this.shape_9.setTransform(-60.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-19.2,149.1,38.6);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BoQADgHACgJIAuifIABgHQAAgFgEgDQgEgCgJAAIAAgGQAaAAASgKIgfB5QAMgaAKgNQAMgMANAAQANgBAHAKQAIAJAAARQAAAJgCAMIgHAXQgFAMgGAKQgHALgIAJQgJAIgKAFQgJAFgMAAQgIAAgFgEQgGgFgDgJIgWASgAACgDQgNAVgMAiIgJAhQAHAOAMAAQAJAAAGgHQAJgHAGgLQAGgMAFgOQAGgNACgOQADgOABgLQAAgKgEgHQgDgFgGAAQgLAAgOAXg");
	this.shape.setTransform(31.2,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKA/QgCgEAAgFQAAgHAFgNIAYhJQADgIAAgFQAAgJgIAAQgLAAgNAPQgLAOgNAaQgNAXgJAfIgFATIgUAAIAghuIACgKQAAgHgGAAQgGAAgEAGQgFAGgFAPIgEAKIgFAAIAHgTQAJgbAWAAQAPAAAAAPQAAAHgGAOIgJAiQARglAOgRQAQgQATAAQAVAAAAATQAAAIgEAMIgZBLIgCAJQAAAHAGAAQAGAAAFgGQAEgGAFgPIAEgKIAFAAIgHAUQgJAagWAAQgMAAgFgHg");
	this.shape_1.setTransform(17.4,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BoQADgHACgJIAuifIABgHQAAgFgEgDQgEgCgJAAIABgGQAZAAATgKIggB5QAMgaAKgNQAMgMAOAAQAMgBAIAKQAHAJAAARQAAAJgDAMIgGAXQgFAMgGAKQgHALgIAJQgIAIgLAFQgJAFgMAAQgIAAgFgEQgHgFgCgJIgWASgAACgDQgNAVgMAiIgJAhQAGAOANAAQAJAAAGgHQAJgHAGgLQAHgMAFgOQAFgNADgOQACgOAAgLQAAgKgDgHQgDgFgGAAQgKAAgPAXg");
	this.shape_2.setTransform(2.9,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BFIAfhvIACgKQAAgHgGABQgFgBgFAHQgFAGgFAPIgDAJIgFAAIAGgTQAJgaAXAAQAPAAAAAOQAAAGgHAPIgIAgQAPgkAKgQQANgPARAAQAGAAAFADQADAFAAAGQAAAIgFAGQgFAFgHAAQgFAAgCgDQgDgCAAgFQAAgLALgGIgDgBQgOAAgRAfQgPAegQAvIgGAXg");
	this.shape_3.setTransform(-8,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBVQAAgJAFgMIAchNIACgJQAAgIgGAAQgGABgFAGQgFAHgFANIgDAIIgFAAIAGgRQAKgbAVAAQARAAAAARQAAAHgEAMIgaBOQgCAGAAAEQAAAGAGAAQAGAAACgGQAFgGAGgOIADgKIAFAAIgGATQgGAOgIAGQgHAHgKAAQgSgBAAgPgAAHhGQgEgEAAgFQAAgJAGgGQAGgFAIgBQAGAAADAFQAEADAAAGQAAAIgGAGQgGAGgHAAQgGAAgEgEg");
	this.shape_4.setTransform(-17.6,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA1BcIgfABIABgFQAOgBAEgEQAEgEABgLIAAgCIgDgrIg+AAIgUAbQgMASAAAIQAAALAUABIgCAFIgegBIgTABIABgFQAMgDAOgUIBvidIAEAAIAKCjQABAIAEAEQAEAEAEABIgBAFIgdgBgAgPARIA6AAIgEhNg");
	this.shape_5.setTransform(-32.4,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-19.2,81.7,38.6);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnAwIAAgPQAHAEAIACQAIACAGABQALAAAGgGQAGgEAAgIQAAgGgDgDQgEgEgJgHQgNgFgFgHQgFgGAAgKQAAgNAKgJQAKgIAOAAQAQAAAQAHIgFANIgGgCQgKgEgLAAQgIAAgFAEQgFAEAAAHQAAAFAEAEQADAFAJAFIAPAJQAFAEACAFQACAEAAAHQAAAPgLAIQgLAJgRAAQgRAAgNgHg");
	this.shape.setTransform(118.4,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_1.setTransform(111.8,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnAwIAAgPQAHAEAIACQAIACAGABQALAAAGgGQAGgEAAgIQAAgGgDgDQgEgEgJgHQgNgFgFgHQgFgGAAgKQAAgNAKgJQAKgIAOAAQAQAAAQAHIgFANIgGgCQgKgEgLAAQgIAAgFAEQgFAEAAAHQAAAFAEAEQADAFAJAFIAPAJQAFAEACAFQACAEAAAHQAAAPgLAIQgLAJgRAAQgRAAgNgHg");
	this.shape_2.setTransform(103.4,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAsQgLgKAAgTQAAgRAHgRQAIgQALgKQANgJAMAAQAPAAAIAHQAHAGAAAMQAAARgQALQgRAHgbAAIgEAAIAAAIQAAANAGAHQAGAHALAAIAMgBIAQgHIAAAOIgQAGQgHACgGAAQgTAAgJgLgAgHgfQgJAKgEAPIABAAQAUABAMgGQAMgGAAgLQAAgFgEgEQgEgDgHAAQgKAAgHAJg");
	this.shape_3.setTransform(94.5,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAvQgIgGAAgNQAAgGACgLIAPhAIARAAIgPBCIgCANQAAAOAPABQAIAAAIgHQAGgFAHgMQAGgKADgOIAKguIAQAAIgWBpIgOAAIACgUIgBAAQgJAMgHAFQgIAFgKAAQgMAAgHgHg");
	this.shape_4.setTransform(83.9,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwBHQgLgHAAgOQAAgJAIgIQAGgIAQgFQgHgEAAgIQAAgGAEgEQAFgEAKgFQgGgCgFgHQgEgFAAgJQAAgTAMgMQAMgMAQAAQAIAAAHACIAkAAIgCAKIgUADQADAGAAAJQAAATgLALQgLALgSAAIgHgBQgOAGAAAFQAAAEADACIAKABIAJACQASACAIAGQAHAHABAMQAAATgPAJQgOAKgYAAQgTAAgLgHgAglAiQgFAHAAAIQAAAHAGAFQAGAEANAAQARAAAJgGQAJgGABgMQgBgGgFgDQgFgEgLgBIgQgBQgLACgHAGgAgEg9QgFAEgDAHQgEAIABAIQgBAIAFAEQAFAFAGAAQAHAAAFgFQAHgDACgHQADgIAAgJQAAgHgEgEQgEgFgIAAQgHAAgFAEg");
	this.shape_5.setTransform(72.6,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7BLIAAgNQAGABAGABQAIAAAHgGQAFgEAGgKIAHgNIgQhrIAQAAIAHA1IACAUIABATIABAAIAGgRIAIgPIAfg8IASAAIhCB7QgKARgIAHQgJAGgNAAQgGAAgHgCg");
	this.shape_6.setTransform(57.6,4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_7.setTransform(50.9,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBJIAWhpIAPAAIgVBpgAAGg1QgDgCAAgFQAAgFAEgEQADgDAFAAQAIAAAAAJQAAAGgDADQgEAEgEAAQgDAAgDgDg");
	this.shape_8.setTransform(44.8,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXBMIAeiWIARAAIgfCWg");
	this.shape_9.setTransform(39.7,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoAtQgJgJABgRQgBgTAIgRQAGgSANgJQAMgKANAAQAIAAAHAFQAHAEAFAKIABAAIAGgRIANAAIgYBpIgMAAIACgUIgBAAQgPAWgUAAQgNAAgHgKgAgNggQgIAIgGAPQgEANAAAPQgBALAFAGQAEAFAJABQAKAAAHgJQAJgKAGgOQAGgMAAgPQAAgKgGgHQgFgFgJAAQgIAAgJAIg");
	this.shape_10.setTransform(31.4,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoAvQgIgGAAgNQAAgGACgLIAPhAIARAAIgPBCIgCANQAAAOAPABQAIAAAIgHQAGgFAHgMQAGgKADgOIAKguIAQAAIgWBpIgOAAIACgUIgBAAQgJAMgHAFQgJAFgJAAQgMAAgHgHg");
	this.shape_11.setTransform(19.9,2.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AABBOIAJgvIAGgVIgBAAQgJALgHAGQgJAFgJAAQgOAAgIgKQgIgJAAgPQAAgVAIgSQAGgRANgKQAMgJANAAQAJAAAHAFQAHAFAEAJIAAAAIAHgRIAMAAIggCZgAgNg3QgJAIgEAPQgGAPAAAPQAAAVASAAQAJAAAIgJQAJgKAGgMQAGgOAAgPQAAgKgFgHQgGgFgKAAQgIAAgIAIg");
	this.shape_12.setTransform(8.3,4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmA2IAXhpIANAAIgCAUIABAAQAFgKAEgEQAFgEAFgCQAFgCAHAAQAGAAAFABIgDAPIgLgBQgIAAgIAFQgIAHgEAKQgGAKgDALIgKAxg");
	this.shape_13.setTransform(-6.2,2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAsQgLgKAAgTQAAgRAHgRQAIgQAMgKQALgJANAAQAPAAAHAHQAIAGAAAMQAAARgQALQgRAHgbAAIgDAAIgBAIQAAANAGAHQAGAHALAAIAMgBIAQgHIAAAOIgQAGQgHACgGAAQgSAAgKgLgAgHgfQgIAKgFAPIABAAQAUABAMgGQAMgGAAgLQAAgFgDgEQgFgDgHAAQgKAAgHAJg");
	this.shape_14.setTransform(-15.5,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPBMIAPhEIACgLQAAgOgPgBQgIABgJAFQgFAGgHAJQgGALgDAQIgKAuIgQAAIAfiWIAQAAIgCAPIgDAPIgFAQIgEATIABAAQAJgMAHgFQAJgGAKABQAMAAAHAGQAIAIAAANIgCAOIgPBCg");
	this.shape_15.setTransform(-26.7,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwBHQgKgHgBgOQAAgJAHgIQAHgIARgFQgIgEAAgIQAAgGAEgEQAGgEAJgFQgHgCgDgHQgFgFAAgJQABgTAMgMQALgMAQAAQAIAAAHACIAlAAIgDAKIgVADQAEAGAAAJQABATgMALQgMALgRAAIgHgBQgOAGAAAFQAAAEADACIAKABIAJACQARACAJAGQAHAHABAMQAAATgPAJQgOAKgYAAQgTAAgLgHgAgkAiQgHAHAAAIQABAHAGAFQAGAEANAAQARAAAJgGQAKgGgBgMQAAgGgFgDQgFgEgLgBIgPgBQgMACgGAGgAgEg9QgFAEgDAHQgDAIgBAIQABAIAEAEQAEAFAHAAQAHAAAFgFQAHgDACgHQAEgIAAgJQAAgHgFgEQgEgFgIAAQgHAAgFAEg");
	this.shape_16.setTransform(-37.4,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWBJIAWhpIAPAAIgVBpgAAGg1QgDgCAAgFQAAgFADgEQAEgDAFAAQAIAAAAAJQAAAGgDADQgEAEgEAAQgDAAgDgDg");
	this.shape_17.setTransform(-44.3,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPBMIAPhEIACgLQAAgOgPgBQgIABgJAFQgFAGgHAJQgGALgDAQIgKAuIgQAAIAfiWIAQAAIgCAPIgEAPIgEAQIgEATIABAAQAJgMAHgFQAJgGAKABQAMAAAIAGQAGAIABANIgDAOIgOBCg");
	this.shape_18.setTransform(-53.3,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_19.setTransform(-66.5,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAsQgKgKAAgTQgBgRAIgRQAHgQANgKQAMgJAPAAQANAAANAFIgFAOQgLgFgKAAQgMAAgGAHQgKAIgFANQgEAMAAAPQgBANAHAGQAGAIAKAAQAHAAAGgCIAMgFIAAAOQgMAGgNAAQgSAAgLgLg");
	this.shape_20.setTransform(-74.5,2.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpAtQgIgJAAgRQAAgTAIgRQAGgSAMgJQANgKAMAAQAJAAAIAFQAGAEAEAKIABAAIAHgRIAMAAIgWBpIgOAAIADgUIgBAAQgPAWgUAAQgNAAgIgKgAgNggQgJAIgEAPQgGANAAAPQABALAEAGQAEAFAJABQAJAAAHgJQAKgKAGgOQAGgMAAgPQAAgKgFgHQgGgFgJAAQgIAAgJAIg");
	this.shape_21.setTransform(-84.9,2.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmA2IAWhpIAOAAIgCAUIABAAQAFgKAEgEQAFgEAFgCQAGgCAFAAQAHAAAFABIgEAPIgKgBQgIAAgIAFQgIAHgEAKQgFAKgDALIgLAxg");
	this.shape_22.setTransform(-94.2,2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_23.setTransform(-101.2,1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_24.setTransform(-107.7,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAnBHIgFguIgvAAIgXAuIgTAAIBMiNIARAAIASCNgAASgiIgXAsIAlAAIgEgbIgCgiIgIARg");
	this.shape_25.setTransform(-118.3,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.9,-15.6,249.9,31.3);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBHQgKgHgBgOQAAgJAIgIQAGgIAQgFQgHgEAAgIQAAgGAEgEQAFgEAKgFQgHgCgDgHQgFgFAAgJQABgTALgMQAMgMAQAAQAIAAAHACIAkAAIgCAKIgUADQADAGAAAJQAAATgLALQgMALgRAAIgHgBQgOAGAAAFQAAAEADACIAKABIAJACQASACAIAGQAHAHABAMQAAATgPAJQgOAKgYAAQgTAAgLgHgAgkAiQgHAHABAIQAAAHAGAFQAGAEANAAQARAAAJgGQAKgGAAgMQgBgGgFgDQgFgEgLgBIgPgBQgMACgGAGgAgEg9QgFAEgDAHQgDAIAAAIQAAAIAEAEQAFAFAGAAQAHAAAFgFQAHgDACgHQADgIABgJQgBgHgEgEQgEgFgIAAQgHAAgFAEg");
	this.shape.setTransform(115,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQA2IAOhBIACgPQAAgGgEgEQgDgDgHAAQgJAAgIAFQgHAHgGAKQgGALgEANIgKAvIgQAAIAXhpIANAAIgCAUIABAAQAKgMAGgFQAKgFAIAAQANAAAHAHQAIAHgBAMQAAAHgBALIgPA/g");
	this.shape_1.setTransform(104.2,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBJIAWhpIAPAAIgVBpgAAFg1QgCgCAAgFQAAgFAEgEQADgDAEAAQAJAAAAAJQAAAGgDADQgEAEgEAAQgEAAgDgDg");
	this.shape_2.setTransform(96.6,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_3.setTransform(91.1,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAwIAAgPQAHAEAIACQAIACAGABQALAAAGgGQAGgEAAgIQAAgGgDgDQgEgEgJgHQgNgFgFgHQgFgGAAgKQAAgNAKgJQAKgIAOAAQAQAAAQAHIgFANIgGgCQgKgEgLAAQgIAAgFAEQgFAEAAAHQAAAFAEAEQADAFAJAFIAPAJQAFAEACAFQACAEAAAHQAAAPgLAIQgLAJgRAAQgRAAgNgHg");
	this.shape_4.setTransform(82.7,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjArQgKgLAAgSQAAgRAHgQQAHgRAMgJQAMgJANAAQATABAKAKQALAMAAATQAAAQgHARQgHAQgMAIQgMAJgNAAQgTAAgLgLgAgLghQgIAIgFANQgEAMAAAOQAAANAGAHQAGAHAMAAQAIAAAIgHQAIgHAFgNQAEgNAAgQQAAgKgGgIQgGgGgLAAQgIAAgJAGg");
	this.shape_5.setTransform(73,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQBMIAOhEIACgLQAAgOgPgBQgIABgJAFQgFAGgHAJQgGALgDAQIgLAuIgPAAIAfiWIAQAAIgCAPIgEAPIgDAQIgFATIABAAQAJgMAHgFQAJgGAKABQAMAAAIAGQAGAIABANIgDAOIgOBCg");
	this.shape_6.setTransform(61.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAsQgKgKAAgTQAAgRAIgRQAGgQANgKQAMgJAMAAQAPAAAHAHQAIAGAAAMQAAARgQALQgQAHgdAAIgCAAIgBAIQAAANAGAHQAGAHALAAIAMgBIARgHIAAAOIgRAGQgHACgHAAQgRAAgLgLgAgGgfQgKAKgFAPIACAAQAUABAMgGQAMgGAAgLQAAgFgDgEQgEgDgIAAQgKAAgGAJg");
	this.shape_7.setTransform(45.9,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAsQgLgKAAgTQAAgRAHgRQAHgQAMgKQANgJAMAAQAPAAAIAHQAHAGAAAMQAAARgQALQgRAHgbAAIgEAAIAAAIQAAANAGAHQAGAHALAAIAMgBIAQgHIAAAOIgQAGQgHACgGAAQgTAAgJgLgAgHgfQgJAKgEAPIABAAQAUABAMgGQAMgGAAgLQAAgFgEgEQgEgDgHAAQgKAAgHAJg");
	this.shape_8.setTransform(36,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmA2IAWhpIAOAAIgCAUIABAAQAFgKAFgEQAEgEAFgCQAFgCAGAAQAHAAAFABIgEAPIgKgBQgJAAgHAFQgIAHgEAKQgFAKgDALIgLAxg");
	this.shape_9.setTransform(27.6,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BiIAAgOQAHACAEABQAIAAAEgHQAEgFACgMIAWhnIgSAAIABgHIAUgHIAAgKQAFgTAIgIQAIgIAPAAIAKABIAJADIgFAMQgHgCgGAAQgJgBgEAFQgFAFgCAMIgDALIAXAAIgCANIgXAAIgVBpQgEASgIAJQgIAIgMAAQgHAAgGgCg");
	this.shape_10.setTransform(20,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAHIADgNIAsAAIgDANg");
	this.shape_11.setTransform(13.6,2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAsQgKgKAAgTQAAgRAHgRQAIgQALgKQANgJAMAAQAPAAAIAHQAHAGAAAMQAAARgQALQgQAHgcAAIgEAAIAAAIQAAANAGAHQAGAHALAAIAMgBIAQgHIAAAOIgQAGQgHACgGAAQgTAAgKgLgAgHgfQgJAKgFAPIACAAQAUABAMgGQAMgGAAgLQAAgFgEgEQgEgDgHAAQgKAAgHAJg");
	this.shape_12.setTransform(5.8,2.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXBMIAfiWIAQAAIgfCWg");
	this.shape_13.setTransform(-1.4,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnAwIAAgPQAHAEAIACQAIACAGABQALAAAGgGQAGgEAAgIQAAgGgDgDQgEgEgJgHQgNgFgFgHQgFgGAAgKQAAgNAKgJQAKgIAOAAQAQAAAQAHIgFANIgGgCQgKgEgLAAQgIAAgFAEQgFAEAAAHQAAAFAEAEQADAFAJAFIAPAJQAFAEACAFQACAEAAAHQAAAPgLAIQgLAJgRAAQgRAAgNgHg");
	this.shape_14.setTransform(-8.9,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnAwIAAgPQAHAEAIACQAIACAGABQALAAAGgGQAGgEAAgIQAAgGgDgDQgEgEgJgHQgNgFgFgHQgFgGAAgKQAAgNAKgJQAKgIAOAAQAQAAAQAHIgFANIgGgCQgKgEgLAAQgIAAgFAEQgFAEAAAHQAAAFAEAEQADAFAJAFIAPAJQAFAEACAFQACAEAAAHQAAAPgLAIQgLAJgRAAQgRAAgNgHg");
	this.shape_15.setTransform(-17.4,2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpAtQgHgJAAgRQAAgTAGgRQAIgSALgJQANgKAMAAQAKAAAGAFQAIAEADAKIACAAIAGgRIANAAIgYBpIgMAAIACgUIAAAAQgQAWgTAAQgOAAgIgKgAgNggQgJAIgFAPQgEANgBAPQAAALAFAGQAFAFAIABQAKAAAGgJQAKgKAGgOQAGgMAAgPQAAgKgGgHQgFgFgJAAQgIAAgJAIg");
	this.shape_16.setTransform(-26.9,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQBMIAOhEIACgLQAAgOgOgBQgJABgIAFQgHAGgGAJQgGALgEAQIgKAuIgQAAIAhiWIAPAAIgDAPIgDAPIgDAQIgFATIABAAQAJgMAHgFQAJgGAJABQAOAAAGAGQAIAIgBANIgCAOIgOBCg");
	this.shape_17.setTransform(-38.9,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAYQAMgaAGgVIASAAIABACQgLAVgNAYg");
	this.shape_18.setTransform(-53.4,8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AguBDQgHgJAAgRQAAgWAHgRQAHgPAMgKQAMgKAPABQARgBAIAUIABAAQACgQACgLIAIgjIAQAAIggCWIgOAAIADgVIgBAAQgKANgHAEQgIAGgJAAQgOAAgIgKgAgSgLQgIAJgFAMQgFAPAAAQQAAAWARAAQAJAAAKgJQAIgKAGgNQAFgPAAgOQAAgJgFgGQgFgFgJgBQgJAAgJAIg");
	this.shape_19.setTransform(-59.5,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeAsQgKgKAAgTQAAgRAIgRQAGgQANgKQAMgJAMAAQAPAAAHAHQAIAGAAAMQAAARgQALQgQAHgdAAIgCAAIgBAIQAAANAGAHQAGAHALAAIAMgBIARgHIAAAOIgRAGQgHACgHAAQgRAAgLgLgAgGgfQgKAKgFAPIACAAQAUABAMgGQAMgGAAgLQAAgFgDgEQgEgDgIAAQgKAAgGAJg");
	this.shape_20.setTransform(-70.7,2.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_21.setTransform(-78.3,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnAwIAAgPQAHAEAIACQAIACAGABQALAAAGgGQAGgEAAgIQAAgGgDgDQgEgEgJgHQgNgFgFgHQgFgGAAgKQAAgNAKgJQAKgIAOAAQAQAAAQAHIgFANIgGgCQgKgEgLAAQgIAAgFAEQgFAEAAAHQAAAFAEAEQADAFAJAFIAPAJQAFAEACAFQACAEAAAHQAAAPgLAIQgLAJgRAAQgRAAgNgHg");
	this.shape_22.setTransform(-86.7,2.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpAvQgGgGgBgNQABgGACgLIAOhAIAQAAIgOBCIgCANQAAAOAPABQAIAAAIgHQAGgFAHgMQAGgKADgOIALguIAPAAIgWBpIgOAAIADgUIgCAAQgJAMgHAFQgIAFgKAAQgMAAgIgHg");
	this.shape_23.setTransform(-96.4,2.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmA2IAWhpIAOAAIgCAUIABAAQAFgKAFgEQAEgEAGgCQAFgCAFAAQAHAAAFABIgEAPIgJgBQgKAAgHAFQgIAHgEAKQgFAKgDALIgLAxg");
	this.shape_24.setTransform(-105.7,2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgjBHIAbh+IgoAAIADgPIBeAAIgDAPIgnAAIgaB+g");
	this.shape_25.setTransform(-113.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.3,-15.6,244.7,31.3);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7BLIAAgNQAGABAGABQAJAAAGgGQAFgEAGgKIAHgNIgQhrIAQAAIAHA1IACAUIABATIABAAIAGgRIAIgPIAfg8IASAAIhCB7QgKARgIAHQgJAGgNAAQgGAAgHgCg");
	this.shape.setTransform(124.6,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_1.setTransform(118,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBJIAWhpIAPAAIgVBpgAAGg1QgDgCAAgFQAAgFADgEQAEgDAFAAQAIAAAAAJQAAAGgDADQgEAEgEAAQgDAAgDgDg");
	this.shape_2.setTransform(111.8,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBMIAeiWIARAAIgfCWg");
	this.shape_3.setTransform(106.8,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAtQgJgJABgRQgBgTAIgRQAGgSANgJQAMgKANAAQAIAAAHAFQAHAEAFAKIABAAIAGgRIANAAIgYBpIgMAAIACgUIgBAAQgPAWgUAAQgNAAgHgKgAgNggQgIAIgGAPQgEANAAAPQgBALAFAGQAEAFAJABQAKAAAHgJQAJgKAGgOQAGgMAAgPQAAgKgGgHQgFgFgJAAQgIAAgJAIg");
	this.shape_4.setTransform(98.4,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_5.setTransform(90,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWBJIAWhpIAPAAIgVBpgAAGg1QgDgCAAgFQAAgFAEgEQACgDAGAAQAIAAAAAJQAAAGgDADQgEAEgEAAQgDAAgDgDg");
	this.shape_6.setTransform(83.8,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BOIAgiZIAOAAIgDAVIABAAQAQgXATAAQANAAAIAKQAHAJAAARQAAAVgGARQgHAQgMAJQgMAKgPAAQgHAAgIgFQgHgFgEgJIgBAAIAAAEIgBAHIgLA2gAABg2QgIAKgFANQgGAOAAAPQAAAJAFAFQAGAHAIAAQAKAAAIgJQAIgIAFgMQAGgOAAgRQAAgWgSAAQgJAAgKAJg");
	this.shape_7.setTransform(74.4,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnAwIAAgPQAHAEAIACQAIACAGABQALAAAGgGQAGgEAAgIQAAgGgDgDQgEgEgJgHQgNgFgFgHQgFgGAAgKQAAgNAKgJQAKgIAOAAQAQAAAQAHIgFANIgGgCQgKgEgLAAQgIAAgFAEQgFAEAAAHQAAAFAEAEQADAFAJAFIAPAJQAFAEACAFQACAEAAAHQAAAPgLAIQgLAJgRAAQgRAAgNgHg");
	this.shape_8.setTransform(64.9,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjArQgKgLAAgSQAAgRAHgQQAHgRAMgJQAMgJANAAQATABAKAKQALAMAAATQAAAQgHARQgHAQgMAIQgMAJgNAAQgTAAgLgLgAgLghQgIAIgFANQgEAMAAAOQAAANAGAHQAGAHAMAAQAIAAAIgHQAIgHAFgNQAEgNAAgQQAAgKgGgIQgGgGgLAAQgIAAgJAGg");
	this.shape_9.setTransform(55.2,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPBMIAPhEIACgLQAAgOgPgBQgIABgJAFQgFAGgHAJQgGALgDAQIgKAuIgQAAIAfiWIAQAAIgCAPIgDAPIgFAQIgEATIABAAQAJgMAHgFQAJgGAKABQAMAAAIAGQAHAIAAANIgCAOIgPBCg");
	this.shape_10.setTransform(43.5,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBAGIgaAiIgLgMIAegcIgkgJIAFgOIAkASIADgoIAQAEIgMAlIApgBIAAANIgngFIASAmIgQAEg");
	this.shape_11.setTransform(28.4,-2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwBAIAAgQQAQAKAQAAQARAAALgJQAKgJAAgRQAAgMgHgIQgIgFgKAAIgJAAIgOACIgIgEIAUhDIA/AAIgDAPIgxAAIgNArQAJgCAHAAQASAAALAKQAKAIAAASQAAAPgHAMQgHAMgNAGQgMAGgQAAQgTAAgNgIg");
	this.shape_12.setTransform(16.5,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPBMIAPhEIACgLQAAgOgPgBQgIABgIAFQgGAGgHAJQgGALgDAQIgKAuIgRAAIAhiWIAPAAIgDAPIgCAPIgFAQIgEATIABAAQAJgMAHgFQAJgGAKABQANAAAGAGQAIAIAAANIgCAOIgPBCg");
	this.shape_13.setTransform(-0.5,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_14.setTransform(-8.5,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBJIAWhpIAPAAIgVBpgAAGg1QgDgCAAgFQAAgFADgEQAEgDAFAAQAIAAAAAJQAAAGgDADQgEAEgEAAQgDAAgDgDg");
	this.shape_15.setTransform(-14.6,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAA1IgBg5IgBgQIAAgQIAAAAIgGALIgIATIgcA7IgUAAIgEhpIAQAAIABA4IAAAJIAAAaIAAAAQAFgMAJgUIAdg7IAQAAIADA4IAAAaIAAAEIAAAFIABAAIAIgWIAghFIARAAIgyBpg");
	this.shape_16.setTransform(-23.8,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAsQgKgKAAgTQAAgRAIgRQAGgQANgKQAMgJAMAAQAPAAAHAHQAIAGAAAMQAAARgQALQgQAHgdAAIgCAAIgBAIQAAANAGAHQAGAHALAAIAMgBIARgHIAAAOIgRAGQgHACgHAAQgRAAgLgLgAgGgfQgKAKgFAPIACAAQAUABAMgGQAMgGAAgLQAAgFgDgEQgEgDgIAAQgKAAgGAJg");
	this.shape_17.setTransform(-41.9,2.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmA2IAXhpIANAAIgCAUIABAAQAFgKAEgEQAFgEAFgCQAFgCAHAAQAGAAAFABIgDAPIgLgBQgIAAgIAFQgIAHgEAKQgGAKgDALIgKAxg");
	this.shape_18.setTransform(-50.3,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjArQgKgLAAgSQAAgRAHgQQAHgRAMgJQAMgJANAAQATABAKAKQALAMAAATQAAAQgHARQgHAQgMAIQgMAJgNAAQgTAAgLgLgAgLghQgIAIgFANQgEAMAAAOQAAANAGAHQAGAHAMAAQAIAAAIgHQAIgHAFgNQAEgNAAgQQAAgKgGgIQgGgGgLAAQgIAAgJAGg");
	this.shape_19.setTransform(-60.5,2.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAuA2IAOhBIACgPQAAgGgEgEQgDgDgHAAQgIAAgIAFQgIAGgFAKQgGALgDAMIgKAxIgPAAIAOhBIABgOQAAgHgCgEQgDgDgHAAQgJAAgHAFQgIAHgGAKQgGAMgDAMIgKAvIgQAAIAWhpIAOAAIgCAUIABAAQAIgMAJgFQAJgFAJAAQAIAAAGAHQAHAFAAAMIABAAQAIgMAKgGQAJgGAKAAQAMAAAIAHQAGAHAAAMIgCASIgOA/g");
	this.shape_20.setTransform(-75.1,2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPA2IAPhBIACgPQAAgGgDgEQgEgDgHAAQgJAAgIAFQgHAHgGAKQgGALgEANIgKAvIgQAAIAXhpIANAAIgCAUIABAAQAKgMAGgFQAJgFAJAAQANAAAHAHQAIAHgBAMQAAAHgBALIgPA/g");
	this.shape_21.setTransform(-94.8,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmA2IAWhpIAOAAIgCAUIABAAQAFgKAEgEQAFgEAFgCQAGgCAFAAQAHAAAFABIgEAPIgKgBQgIAAgIAFQgIAHgEAKQgFAKgDALIgLAxg");
	this.shape_22.setTransform(-103.6,2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgoAtQgJgJABgRQgBgTAIgRQAGgSANgJQAMgKANAAQAIAAAHAFQAHAEAFAKIABAAIAGgRIANAAIgYBpIgMAAIACgUIgBAAQgPAWgUAAQgNAAgHgKgAgNggQgIAIgGAPQgEANAAAPQgBALAFAGQAEAFAJABQAKAAAHgJQAJgKAGgOQAGgMAAgPQAAgKgGgHQgFgFgJAAQgIAAgJAIg");
	this.shape_23.setTransform(-113.5,2.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgyBHIAfiNIBGAAIgEAPIg1AAIgKAuIAyAAIgDANIgxAAIgMA0IA2AAIgEAPg");
	this.shape_24.setTransform(-123.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.8,-15.6,263.6,31.3);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAsQgLgKAAgTQAAgRAHgRQAIgQALgKQAMgJANAAQAPAAAIAHQAHAGAAAMQAAARgQALQgRAHgbAAIgEAAIAAAIQAAANAGAHQAGAHALAAIAMgBIAQgHIAAAOIgQAGQgHACgGAAQgTAAgJgLgAgHgfQgIAKgFAPIABAAQAUABAMgGQAMgGAAgLQAAgFgDgEQgFgDgHAAQgKAAgHAJg");
	this.shape.setTransform(123.9,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpAvQgGgGgBgNQAAgGADgLIAOhAIAQAAIgOBCIgCANQAAAOAPABQAIAAAIgHQAGgFAHgMQAGgKADgOIAKguIAQAAIgWBpIgOAAIACgUIgBAAQgJAMgHAFQgIAFgKAAQgMAAgIgHg");
	this.shape_1.setTransform(113.2,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXBMIAfiWIAQAAIgeCWg");
	this.shape_2.setTransform(105.1,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpAtQgHgJgBgRQABgTAGgRQAHgSAMgJQANgKAMAAQAKAAAGAFQAIAEADAKIABAAIAHgRIANAAIgYBpIgMAAIACgUIAAAAQgQAWgTAAQgOAAgIgKgAgNggQgJAIgEAPQgFANgBAPQAAALAFAGQAFAFAIABQAJAAAHgJQAKgKAGgOQAGgMAAgPQAAgKgGgHQgFgFgJAAQgIAAgJAIg");
	this.shape_3.setTransform(96.8,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA1IgNhpIARAAIAGA6IACAjIABAAIARgkIAeg5IASAAIg4Bpg");
	this.shape_4.setTransform(87.1,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BLIAAgNQAGABAGABQAIAAAHgGQAFgEAFgKIAIgNIgRhrIARAAIAHA1IACAUIABATIAAAAIAHgRIAIgPIAfg8IASAAIhCB7QgJARgJAHQgJAGgNAAQgGAAgHgCg");
	this.shape_5.setTransform(71.3,4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVA8QgGgFAAgMIABgPIANg4IgRAAIABgIIASgHIALgWIAJAAIgFAYIAbAAIgDANIgbAAIgKA5IgCAMQAAAGADADQADADAFAAQADAAAJgDIAAANIgIACIgGABQgMAAgHgGg");
	this.shape_6.setTransform(64.6,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA2IAWhpIAOAAIgCAUIABAAQAFgKAFgEQAEgEAGgCQAEgCAGAAQAHAAAFABIgEAPIgKgBQgJAAgHAFQgIAHgEAKQgFAKgDALIgLAxg");
	this.shape_7.setTransform(57.3,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAsQgKgKAAgTQAAgRAHgRQAIgQALgKQAMgJANAAQAPAAAIAHQAHAGAAAMQAAARgQALQgQAHgdAAIgDAAIAAAIQAAANAGAHQAGAHALAAIAMgBIAQgHIAAAOIgQAGQgHACgHAAQgRAAgLgLgAgGgfQgJAKgGAPIACAAQAUABAMgGQAMgGAAgLQAAgFgEgEQgDgDgIAAQgKAAgGAJg");
	this.shape_8.setTransform(48,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BOIAgiZIAOAAIgDAVIABAAQAQgXATAAQANAAAIAKQAHAJAAARQAAAVgGARQgHAQgMAJQgMAKgPAAQgHAAgIgFQgHgFgEgJIgBAAIAAAEIgBAHIgLA2gAABg2QgIAKgFANQgGAOAAAPQAAAJAFAFQAGAHAIAAQAKAAAIgJQAIgIAFgMQAGgOAAgRQAAgWgSAAQgJAAgKAJg");
	this.shape_9.setTransform(36.4,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjArQgKgLAAgSQAAgRAHgQQAHgRAMgJQAMgJANAAQATABAKAKQALAMAAATQAAAQgHARQgHAQgMAIQgMAJgNAAQgTAAgLgLgAgLghQgIAIgFANQgEAMAAAOQAAANAGAHQAGAHAMAAQAIAAAIgHQAIgHAFgNQAEgNAAgQQAAgKgGgIQgGgGgLAAQgIAAgJAGg");
	this.shape_10.setTransform(25.7,2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmA2IAWhpIAOAAIgCAUIABAAQAFgKAFgEQAEgEAFgCQAFgCAGAAQAHAAAFABIgEAPIgJgBQgKAAgHAFQgIAHgEAKQgFAKgDALIgLAxg");
	this.shape_11.setTransform(16.8,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1BOIAgiZIAOAAIgDAVIABAAQAQgXATAAQANAAAIAKQAHAJAAARQAAAVgGARQgHAQgMAJQgMAKgPAAQgHAAgIgFQgHgFgEgJIgBAAIAAAEIgBAHIgLA2gAABg2QgIAKgFANQgGAOAAAPQAAAJAFAFQAGAHAIAAQAKAAAIgJQAIgIAFgMQAGgOAAgRQAAgWgSAAQgJAAgKAJg");
	this.shape_12.setTransform(5.7,4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSBHQgHgEgDgJIgBAAIgHARIgMAAIAgiWIAQAAIgHAkIgIAdIABAAQAJgMAHgFQAJgGAJABQAOAAAIAKQAHAJAAAPQAAAVgGARQgHARgMAKQgMAKgNAAQgJAAgIgGgAgCgKQgKAKgFAMQgGAOAAAPQAAALAFAFQAGAGAKAAQAIAAAIgIQAIgIAFgPQAGgOAAgQQAAgVgSAAQgJAAgIAJg");
	this.shape_13.setTransform(-10.5,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQA2IAOhBIACgPQAAgGgEgEQgDgDgHAAQgJAAgJAFQgGAHgGAKQgGALgEANIgKAvIgQAAIAXhpIANAAIgCAUIABAAQAKgMAGgFQAKgFAIAAQANAAAIAHQAGAHAAAMQAAAHgCALIgNA/g");
	this.shape_14.setTransform(-22.1,2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSBHQgHgEgDgJIgBAAIgHARIgMAAIAgiWIAQAAIgHAkIgIAdIABAAQAJgMAHgFQAJgGAJABQAOAAAIAKQAHAJAAAPQAAAVgGARQgHARgMAKQgMAKgNAAQgJAAgIgGgAgCgKQgKAKgFAMQgGAOAAAPQAAALAFAFQAGAGAKAAQAIAAAIgIQAIgIAFgPQAGgOAAgQQAAgVgSAAQgJAAgIAJg");
	this.shape_15.setTransform(-33.6,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmA2IAWhpIAOAAIgCAUIABAAQAFgKAEgEQAFgEAFgCQAFgCAGAAQAHAAAFABIgEAPIgKgBQgJAAgHAFQgIAHgEAKQgFAKgDALIgLAxg");
	this.shape_16.setTransform(-42.5,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWBJIAWhpIAPAAIgVBpgAAFg1QgCgCAAgFQAAgFAEgEQADgDAEAAQAJAAAAAJQAAAGgDADQgEAEgEAAQgEAAgDgDg");
	this.shape_17.setTransform(-49.2,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAnBHIgFguIgvAAIgYAuIgSAAIBMiNIARAAIASCNgAASgiIgXAsIAlAAIgDgbIgDgiIgIARg");
	this.shape_18.setTransform(-58.8,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANBMIgVgzIgPALIgIAoIgQAAIAgiWIAPAAIgLA6IgKAlIAygyIATAAIgtArIAcA+g");
	this.shape_19.setTransform(-72.8,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAsQgLgKAAgTQABgRAHgRQAHgQANgKQAMgJAOAAQAOAAAMAFIgEAOQgMgFgKAAQgKAAgIAHQgJAIgEANQgGAMAAAPQABANAGAGQAHAIAJAAQAHAAAGgCIANgFIAAAOQgMAGgOAAQgSAAgLgLg");
	this.shape_20.setTransform(-82.2,2.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjArQgKgLAAgSQAAgRAHgQQAHgRAMgJQAMgJANAAQATABAKAKQALAMAAATQAAAQgHARQgHAQgMAIQgMAJgNAAQgTAAgLgLgAgLghQgIAIgFANQgEAMAAAOQAAANAGAHQAGAHAMAAQAIAAAIgHQAIgHAFgNQAEgNAAgQQAAgKgGgIQgGgGgLAAQgIAAgJAGg");
	this.shape_21.setTransform(-92.8,2.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBMIAfiWIAQAAIgeCWg");
	this.shape_22.setTransform(-100.5,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPA2IAPhBIACgPQAAgGgEgEQgDgDgIAAQgIAAgJAFQgFAHgHAKQgGALgDANIgKAvIgQAAIAWhpIAOAAIgCAUIABAAQAJgMAHgFQAIgFAKAAQAMAAAIAHQAGAHABAMQAAAHgDALIgNA/g");
	this.shape_23.setTransform(-109.6,2.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgwA+QgLgLAAgTQAAgIACgLIAThUIAQAAIgSBVQgDAKAAAIQAAAMAHAGQAIAHAOAAQAPAAAJgIQAJgJAFgTIAUhcIAQAAIgUBdQgFAZgOANQgOAMgWAAQgXAAgKgKg");
	this.shape_24.setTransform(-120.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.7,-15.6,261.4,31.3);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggA6IgDgBIAAgCIAAhtIAAgCIADgBIBBAAIACABIABACIAAAJIgBADIgCAAIgzAAIAAAjIArAAIACABIABACIAAAHIgBADIgCABIgrAAIAAAkIAzAAIACABIABACIAAAJIgBACIgCABg");
	this.shape.setTransform(49.6,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYA6IgCAAIAAgBIgWgtIgYAAIAAArIgBACIgCABIgLAAIgDgBIAAgCIAAhtIAAgCIADgBIArAAQALAAAIAFQAIAEAFAIQAFAIAAALQAAALgHAJQgHAHgLAFIAXAqQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgYAAIAcAAQAGAAAEgDQAFgDADgEQACgFABgGQgBgGgCgEQgDgFgFgCQgEgDgGAAIgcAAg");
	this.shape_1.setTransform(37.4,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggA6IgDgBIAAgCIAAhtIAAgCIADgBIBBAAIACABIABACIAAAJIgBADIgCAAIgzAAIAAAjIArAAIACABIABACIAAAHIgBADIgCABIgrAAIAAAkIAzAAIACABIABACIAAAJIgBACIgCABg");
	this.shape_2.setTransform(25.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiA6IgDgBIgBgCIAAgwIg7AAIAAAwIgBACIgDABIgLAAIgBgBIgBgCIAAhtIABgCIABgBIALAAIADABIABACIAAAvIA7AAIAAgvIABgCIADgBIAKAAIACABIABACIAABtIgBACIgCABg");
	this.shape_3.setTransform(11.8,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaA6IgCAAIgBgBIgvg3IAAA0IgBADIgDABIgKAAIgDgBIgBgDIAAhrIABgDIADgBIAKAAIADABIABADIAAAuIAtgxIACgBIABAAIANAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIguAxIAxA3QAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_4.setTransform(-6.4,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA0QgNgIgIgNQgIgOgBgRQABgPAIgOQAIgOANgIQAOgHAPgBQANABAJADQAKAEAJAIIABACIgBADIgIAHIgCABIgCgBQgGgFgHgDQgIgDgIAAQgKAAgJAGQgKAGgFAKQgGAKAAAKQAAALAGALQAFAJAKAGQAJAGAKAAQAJAAAHgDQAHgDAGgFIACgBIACABIAIAIIABACIgBACQgJAIgKAEQgLAEgLAAQgPAAgOgIg");
	this.shape_5.setTransform(-19.9,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEA6IgCgBIgBgCIAAhtIABgCIACgBIAJAAIACABIABACIAABtIgBACIgCABg");
	this.shape_6.setTransform(-29.9,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdA6IgCgBIgBgCIAAhtIABgCIACgBIAMAAIACABIABACIAABhIArAAIACABIABACIAAAJIgBACIgCABg");
	this.shape_7.setTransform(-37.5,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUA0QgNgIgIgNQgIgOgBgRQABgPAIgOQAIgOANgIQAOgHAPgBQANABAJADQAKAEAJAIIABACIgBADIgIAHIgCABIgCgBQgGgFgHgDQgIgDgIAAQgKAAgJAGQgKAGgFAKQgGAKAAAKQAAALAGALQAFAJAKAGQAJAGAKAAQAJAAAHgDQAHgDAGgFIACgBIACABIAIAIIABACIgBACQgJAIgKAEQgLAEgLAAQgPAAgOgIg");
	this.shape_8.setTransform(-50,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.6,-13.7,115.2,27.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A57DB6").s().p("AqnC0QhFgBAAhGIAAjZQAAhGBFgBIVPAAQBFABAABGIAADZQAABGhFABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-18,150,36);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFA/IgCgBIgBgDIAAg5Igqg6QgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAABAAIANAAIACABIABABIAfAuIAgguIABgBIACgBIAOAAQAAAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABIgqA6IAAA5IgBADIgDABg");
	this.shape.setTransform(42.4,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFA/IgCgBIgBgDIAAhoIgdAAIgDgBIgBgCIAAgKIABgDIADgBIBLAAIADABIABADIAAAKIgBACIgDABIgdAAIAABoIgBADIgDABg");
	this.shape_1.setTransform(31.9,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA/IgCgBIAAgBIgYgwIgaAAIAAAuIgBADIgCABIgMAAIgDgBIgBgDIAAh1IABgDIADgBIAvAAQALAAAJAGQAIAFAGAJQAFAIAAALQAAANgHAJQgIAIgMAFIAZAuQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAAAAAgAgaAAIAfAAQAGAAAFgDQAEgDAEgFQACgFAAgHQAAgGgCgEQgEgFgEgDQgFgDgGAAIgfAAg");
	this.shape_2.setTransform(20.9,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA/IgCgBIgBgDIAAh1IABgDIACgBIBGAAIADABIABADIAAAKIgBACIgDABIg2AAIAAAlIAuAAIACABIACADIAAAIIgCACIgCABIguAAIAAAnIA2AAIADABIABACIAAAKIgBADIgDABg");
	this.shape_3.setTransform(8.8,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglA/IgDgBIgBgDIAAh1IABgDIADgBIAmAAQAMABAJAFQAJAFAFAJQAGAJAAALQAAAMgGAJQgFAHgJAFQgJAGgLAAIgZAAIAAAqIgBADIgCABgAgXAAIAXAAQAHAAAFgCQAFgDADgFQADgFABgHQgBgGgDgFQgDgFgFgDQgFgCgHgBIgXAAg");
	this.shape_4.setTransform(-2.6,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA3QgPgIgJgOQgIgPAAgSQAAgQAIgPQAJgPAPgJQAOgIARgBQASABAOAIQAPAJAJAPQAIAPAAAQQAAASgIAPQgJAOgPAIQgOAJgSAAQgRAAgOgJgAgWgnQgLAGgGALQgGAKAAAMQAAANAGAKQAGALALAGQAKAGAMAAQAMAAALgGQALgGAGgLQAGgKAAgNQAAgMgGgKQgGgLgLgGQgLgGgMgBQgMABgKAGg");
	this.shape_5.setTransform(-16.8,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaA/IgCgBIgBgBIgXgwIgaAAIAAAuIgBADIgDABIgLAAIgDgBIgBgDIAAh1IABgDIADgBIAvAAQALAAAJAGQAJAFAFAJQAFAIABALQgBANgHAJQgIAIgLAFIAYAuQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAgAgaAAIAeAAQAGAAAFgDQAGgDACgFQADgFAAgHQAAgGgDgEQgCgFgGgDQgFgDgGAAIgeAAg");
	this.shape_6.setTransform(-30.6,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA/IgDgBIgBgDIAAh1IABgDIADgBIAmAAQAMABAJAFQAJAFAFAJQAGAJAAALQAAAMgGAJQgFAHgJAFQgJAGgLAAIgZAAIAAAqIgBADIgCABgAgXAAIAXAAQAHAAAFgCQAFgDADgFQADgFABgHQgBgGgDgFQgDgFgFgDQgFgCgHgBIgXAAg");
	this.shape_7.setTransform(-42.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.4,-14.7,100.9,29.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA/IgBgBIgBgBIgYgwIgaAAIAAAuIgBADIgDABIgLAAIgCgBIgBgDIAAh1IABgDIACgBIAvAAQALAAAJAGQAIAFAGAJQAFAIABALQgBANgHAJQgIAIgMAFIAaAuQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAgAgZAAIAdAAQAGAAAGgDQAEgDAEgFQADgFAAgHQAAgGgDgEQgEgFgEgDQgGgDgGAAIgdAAg");
	this.shape.setTransform(20.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA5QgLgGgHgLQgFgLAAgOIAAhKIABgDIACgBIAMAAIADABIABADIAABIQgBAKAEAHQAEAHAGAEQAHAEAIABQAIgBAIgEQAGgEAEgHQADgHAAgJIAAhJIACgDIACgBIAMAAIACABIACADIAABKQAAAOgHALQgGALgLAGQgMAGgNABQgNgBgLgGg");
	this.shape_1.setTransform(6.4,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA3QgPgIgJgOQgIgPAAgSQAAgQAIgPQAJgPAPgJQAOgIARgBQASABAOAIQAPAJAJAPQAIAPAAAQQAAASgIAPQgJAOgPAIQgOAJgSAAQgRAAgOgJgAgWgnQgLAGgGALQgGAKAAAMQAAANAGAKQAGALALAGQAKAGAMAAQAMAAALgGQALgGAGgLQAGgKAAgNQAAgMgGgKQgGgLgLgGQgLgGgMgBQgMABgKAGg");
	this.shape_2.setTransform(-8.3,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFA/IgCgBIgBgDIAAg5Igqg6QgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAABAAIANAAIACABIABABIAfAuIAgguIABgBIACgBIAOAAQAAAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABIgqA6IAAA5IgBADIgDABg");
	this.shape_3.setTransform(-21.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-14.7,57.4,29.4);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiA/IgDgBIgBgDIAAh1IABgDIADgBIBGAAIACABIABADIAAAKIgBACIgCABIg4AAIAAAqIAvAAIACABIABACIAAAIIgBADIgCABIgvAAIAAAvIgBADIgCABg");
	this.shape.setTransform(7.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfA3QgPgIgJgOQgIgPAAgSQAAgQAIgPQAJgPAPgJQAOgIARgBQASABAOAIQAPAJAJAPQAIAPAAAQQAAASgIAPQgJAOgPAIQgOAJgSAAQgRAAgOgJgAgWgnQgLAGgGALQgGAKAAAMQAAANAGAKQAGALALAGQAKAGAMAAQAMAAALgGQALgGAGgLQAGgKAAgNQAAgMgGgKQgGgLgLgGQgLgGgMgBQgMABgKAGg");
	this.shape_1.setTransform(-6.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-14.7,30.4,29.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiA/IgDgBIgBgDIAAh1IABgDIADgBIBGAAIACABIABADIAAAKIgBACIgCABIg3AAIAAAlIAuAAIACABIABADIAAAIIgBACIgCABIguAAIAAAnIA3AAIACABIABACIAAAKIgBADIgCABg");
	this.shape.setTransform(24.7,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA5QgLgGgGgLQgHgLABgOIAAhKIAAgDIADgBIAMAAIADABIABADIAABIQAAAKADAHQADAHAIAEQAGAEAIABQAJgBAGgEQAHgEAEgHQAEgHAAgJIAAhJIABgDIACgBIAMAAIADABIABADIAABKQgBAOgGALQgHALgLAGQgLAGgNABQgNgBgLgGg");
	this.shape_1.setTransform(11.6,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA/IgDgBIgBgDIAAh1IABgDIADgBIALAAIACABIACADIAABoIAuAAIADABIABACIAAAKIgBADIgDABg");
	this.shape_2.setTransform(0.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAsA/IgCgBIgCgBIgLgZIg5AAIgGANIgFAMIgCABIgCABIgMAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIA4h4IABgBIABgBIABAAIABABIACABIA3B4IAAADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAgAAWAUIgWgvIAAAAIgVAvIArAAg");
	this.shape_3.setTransform(-11.8,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABAIgBgBIgBgBIg4h4QAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAMAAIACABIABABIAnBYIAAAAIAohYIABgBIACgBIANAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIg4B4IgBABIgCABg");
	this.shape_4.setTransform(-24.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-14.7,64.9,29.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA+QgJgJAAgTQAAgKADgLQADgMAGgKQAFgMAIgLQAIgMAKgIQAJgJAKgFQAMgFAMAAQAJAAAGAEQAGAFAAAJQAAAJgGAJQgFAJgJAGQgIAHgLAGIgTAIIgVAIQgDANAAANQAAAaATAAQAVAAASgbIAEACQgIAPgPAKQgNALgQAAQgQAAgKgKgAAIg4QgIAKgJARQgKAQgFARQAZgHAKgIQAKgIAFgLQAGgLAAgNIgBgKQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgJAAgLAKg");
	this.shape.setTransform(22.2,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBGQgEgCgCgDQgBgEAAgFQAAgHAEgPIAIghQgQAmgNARQgOAQgSAAQgWAAAAgVQAAgIAEgMIAahMIACgKQAAgGgHAAQgFAAgFAGQgFAGgFAPIgEAKIgFAAIAHgUQAJgbAXAAQATAAAAAQQAAAIgEANIgaBLQgDAIAAAFQAAAJAJAAQAKAAANgOQAKgPAMgbQANgZAJgiIAEgQQAPAAAJgDIghB0IgCALQAAAGAGAAQAGAAAFgGQAFgHAFgOIADgKIAFAAIgGATQgKAcgXAAQgEAAgEgCg");
	this.shape_1.setTransform(8.5,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BGIAghxIACgLQAAgGgFAAQgHAAgEAGQgFAHgGAOIgDAKIgFAAIAHgTQAJgbAXAAQAPAAABAPQAAAGgHAPIgIAhQAOglALgQQAOgQAQAAQAIAAAEAEQAEAEAAAHQAAAIgGAGQgFAFgHAAQgFAAgDgCQgCgDAAgFQAAgMALgFIgDgBQgPAAgSAfQgPAegQAyIgFAWg");
	this.shape_2.setTransform(-3.8,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBsIgnABIABgGQAMAAAGgCQAGgCAEgGQADgFAEgKIAoiWQgVgDgOAAQgXAAgHAFQAFAGAAAJQAAAGgDAEQgEAGgGgBQgGAAgDgDQgDgEAAgGQAAgOAOgHQANgGAXAAQAQAAAcAEQAbADAPAAQAXAAAMgFQgHgHAAgJQAAgFAEgFQADgEAGAAQAGAAADAEQADADAAAGQAAALgMAIQgOAJgdAAQgLAAgQgCIgmCTQgCAIAAAGQAAAGAFADQAFADAMgBIgBAGIgogBg");
	this.shape_3.setTransform(-15.7,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-20.1,68.3,40.3);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjA/IgCgBIgBgDIAAh1IABgDIACgBIBGAAIADABIABADIAAAKIgBACIgDABIg3AAIAAAlIAvAAIACABIACADIAAAIIgCACIgCABIgvAAIAAAnIA3AAIADABIABACIAAAKIgBADIgDABg");
	this.shape.setTransform(12.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkA/IgCgBIgBgDIAAg0IhAAAIAAA0IgBADIgDABIgMAAIgCgBIgBgDIAAh1IABgDIACgBIAMAAIADABIABADIAAAyIBAAAIAAgyIABgDIACgBIAMAAIACABIABADIAAB1IgBADIgCABg");
	this.shape_1.setTransform(-1.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFA/IgCgBIgBgDIAAhoIgdAAIgDgBIgBgCIAAgKIABgDIADgBIBLAAIADABIABADIAAAKIgBACIgDABIgdAAIAABoIgBADIgDABg");
	this.shape_2.setTransform(-13.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-14.7,39.8,29.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA/IgBgBIgCgBIgXgwIgaAAIAAAuIgBADIgDABIgLAAIgCgBIgBgDIAAh1IABgDIACgBIAvAAQALAAAJAGQAIAFAGAJQAFAIABALQgBANgHAJQgHAIgMAFIAZAuQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAgAgZAAIAdAAQAGAAAGgDQAEgDADgFQAEgFAAgHQAAgGgEgEQgDgFgEgDQgGgDgGAAIgdAAg");
	this.shape.setTransform(42.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiA/IgDgBIgBgDIAAh1IABgDIADgBIBGAAIACABIABADIAAAKIgBACIgCABIg4AAIAAAlIAvAAIACABIABADIAAAIIgBACIgCABIgvAAIAAAnIA4AAIACABIABACIAAAKIgBADIgCABg");
	this.shape_1.setTransform(30,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABAIgBgBIgBgBIg4h4QAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAMAAIACABIABABIAnBYIAAAAIAohYIABgBIACgBIANAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIg4B4IgBABIgCABg");
	this.shape_2.setTransform(17.3,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfA3QgPgIgJgOQgIgPAAgSQAAgQAIgPQAJgPAPgJQAOgIARgBQASABAOAIQAPAJAJAPQAIAPAAAQQAAASgIAPQgJAOgPAIQgOAJgSAAQgRAAgOgJgAgWgnQgLAGgGALQgGAKAAAMQAAANAGAKQAGALALAGQAKAGAMAAQAMAAALgGQALgGAGgLQAGgKAAgNQAAgMgGgKQgGgLgLgGQgLgGgMgBQgMABgKAGg");
	this.shape_3.setTransform(3.1,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA3QgPgIgJgOQgJgPAAgSQAAgQAJgPQAJgPAPgJQAOgIARgBQANAAAKAEQALAFAJAIQAAAAABABQAAAAAAAAQAAAAAAABQABAAAAAAIgCADIgHAIQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCgBQgGgFgJgEQgIgDgIAAQgLAAgLAHQgKAGgGALQgFAKAAAMQAAAMAFALQAHAKAJAHQALAGALAAQAJAAAIgEQAIgDAGgFIACgBIACABIAIAIIACACIgCADQgJAJgLAEQgMAFgLgBQgRAAgOgJg");
	this.shape_4.setTransform(-11.3,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRA9QgIgDgFgDIgHgFIgCgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIACgDIADgEIADgDIADABIAFAEIAKAGQAHADAFAAQAJAAAGgFQAFgFAAgHQAAgIgHgGQgHgFgLgGIgRgHQgHgEgFgIQgEgHAAgKQAAgGACgGQACgFAFgGQAFgEAHgEQAIgDAJAAQAJABAHACQAHACAFADIAFADIACACIgBAEIgCADIgCAEQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABIgEgBIgEgDIgJgEIgKgCQgHAAgEACQgFADgCAEQgCAEABADQAAAIAFAFQAGAFAKAEIATAJQAJAFAFAHQAFAIAAAKQAAAKgFAIQgFAHgJAFQgJAEgMAAQgJAAgIgDg");
	this.shape_5.setTransform(-23.4,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFA/IgCgBIgBgDIAAh1IABgDIACgBIAKAAIADABIABADIAAB1IgBADIgDABg");
	this.shape_6.setTransform(-31.8,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxA/IgDgBIgBgDIAAh1IABgDIADgBIApAAQAQABAOAIQAOAIAJAPQAIAOAAAQQAAARgIAOQgJAPgOAIQgOAJgQAAgAgiAuIAYAAQALgBALgFQAJgGAGgLQAHgKgBgNQABgMgHgKQgGgLgJgFQgLgGgLAAIgYAAg");
	this.shape_7.setTransform(-41.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-14.7,101.3,29.4);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.gradient_radial_002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.918)","rgba(255,255,255,0.427)","rgba(255,255,255,0.212)","rgba(255,255,255,0.09)","rgba(255,255,255,0.024)","rgba(255,255,255,0)"],[0,0.161,0.447,0.647,0.8,0.898,1],0,-0.5,0,0,-0.5,51.6).s().p("AljFkQiViTAAjRQAAjPCViUQCUiVDPAAQDQAACUCVQCVCUAADPQAADRiVCTQiUCVjQAAQjPAAiUiVg");
	this.shape.setTransform(50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


(lib._light_001_podl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AAHHOIAAnHIPgAAIAAHHgAvnHOIAAnHIPpAAIAAHHgAAHACIAAnPIPgAAIAAHPgAvnACIAAnPIPpAAIAAHPg");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-46.3,200,92.5);


(lib._light_001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.941)","rgba(255,255,255,0.8)","rgba(255,255,255,0.6)","rgba(255,255,255,0.251)","rgba(255,255,255,0.09)","rgba(255,255,255,0)"],[0.361,0.447,0.569,0.675,0.808,0.898,1],0,-1,0,0,-1,94.9).s().p("AqQKRQkQkRAAmAQAAl/EQkRQERkQF/AAQGAAAEREQQEQERAAF/QAAGAkQERQkREQmAAAQl/AAkRkQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-93,186,186);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.pic1();
	this.instance_1.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(51));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au5BVIAAioIdzAAIAACog");
	mask.setTransform(0.1,-0.8);

	// Symbol 11
	this.instance = new lib.Symbol11();
	this.instance.setTransform(45,0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(6).to({_off:false,y:15},0).to({y:3},8,cjs.Ease.get(0.8)).to({y:0},18,cjs.Ease.get(1)).wait(1).to({_off:true},50).wait(6));

	// Symbol 10
	this.instance_1 = new lib.Symbol10();
	this.instance_1.setTransform(-35.2,0);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(3).to({_off:false,y:15},0).to({y:3},8,cjs.Ease.get(0.8)).to({y:0},18,cjs.Ease.get(1)).wait(1).to({_off:true},56).wait(3));

	// Symbol 9
	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(-80.2,0);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:15},1).to({y:3},8,cjs.Ease.get(0.8)).to({y:0},18,cjs.Ease.get(1)).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-9.3,190.8,17);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(24));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApmBVIAAioITMAAIAACog");
	mask.setTransform(9.7,-0.8);

	// Layer 1
	this.instance = new lib.Symbol5();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:15},1).to({y:3},8,cjs.Ease.get(0.8)).to({y:0},18,cjs.Ease.get(1)).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-9.3,101.3,17);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(41));

	// Symbol 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqnC0QhFgBAAhGIAAjZQAAhGBFgBIVPAAQBFABAABGIAADZQAABGhFABg");
	var mask_graphics_1 = new cjs.Graphics().p("AkqBPQgfAAAAgfIAAhfQAAgfAfAAIJVAAQAfAAAAAfIAABfQAAAfgfAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AkxBRQgfAAAAggIAAhhQAAggAfAAIJjAAQAfAAAAAgIAABhQAAAggfAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AlFBWQgiAAAAgiIAAhnQAAgiAiAAIKLAAQAiAAAAAiIAABnQAAAigiAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AlnBfQglAAAAglIAAhzQAAglAlAAILPAAQAlAAAAAlIAABzQAAAlglAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AmXBsQgqAAAAgqIAAiDQAAgqAqAAIMvAAQAqAAAAAqIAACDQAAAqgqAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AnUB8QgwAAAAgxIAAiVQAAgxAwAAIOpAAQAwAAAAAxIAACVQAAAxgwAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AoMCLQg2AAAAg3IAAinQAAg3A2AAIQZAAQA2AAAAA3IAACnQAAA3g2AAg");
	var mask_graphics_8 = new cjs.Graphics().p("Ao4CWQg7AAAAg6IAAi3QAAg6A7AAIRxAAQA7AAAAA6IAAC3QAAA6g7AAg");
	var mask_graphics_9 = new cjs.Graphics().p("ApaCfQg/AAAAg+IAAjBQAAg+A/AAIS1AAQA/AAAAA+IAADBQAAA+g/AAg");
	var mask_graphics_10 = new cjs.Graphics().p("ApxClQhBAAAAhAIAAjJQAAhABBAAITjAAQBBAAAABAIAADJQAABAhBAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Ap+CpQhCAAAAhCIAAjNQAAhCBCAAIT9AAQBCAAAABCIAADNQAABChCAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AqCCqQhDAAAAhCIAAjPQAAhCBDAAIUFAAQBDAAAABCIAADPQAABChDAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AqHCrQhCAAAAhDIAAjPQAAhDBCAAIUPAAQBCAAAABDIAADPQAABDhCAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AqLCsQhDAAAAhDIAAjRQAAhDBDAAIUXAAQBDAAAABDIAADRQAABDhDAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AqPCtQhDAAAAhDIAAjTQAAhDBDAAIUfAAQBDAAAABDIAADTQAABDhDAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AqSCuQhEAAAAhEIAAjTQAAhEBEAAIUlAAQBEAAAABEIAADTQAABEhEAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AqVCvQhFAAAAhEIAAjVQAAhEBFAAIUrAAQBFAAAABEIAADVQAABEhFAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AqYCwQhFAAAAhFIAAjVQAAhFBFAAIUxAAQBFAAAABFIAADVQAABFhFAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AqbCwQhFAAAAhEIAAjXQAAhEBFAAIU3AAQBFAAAABEIAADXQAABEhFAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AqdCxQhGAAAAhFIAAjXQAAhFBGAAIU7AAQBGAAAABFIAADXQAABFhGAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AqgCyQhFAAAAhGIAAjXQAAhGBFAAIVBAAQBFAAAABGIAADXQAABGhFAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AqhCyQhGAAAAhFIAAjZQAAhFBGAAIVDAAQBGAAAABFIAADZQAABFhGAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AqjCzQhGAAAAhGIAAjZQAAhGBGAAIVHAAQBGAAAABGIAADZQAABGhGAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AqkCzQhGAAAAhGIAAjZQAAhGBGAAIVJAAQBGAAAABGIAADZQAABGhGAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AqlCzQhGAAAAhGIAAjZQAAhGBGAAIVLAAQBGAAAABGIAADZQAABGhGAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AqmCzQhGAAAAhGIAAjZQAAhGBGAAIVNAAQBGAAAABGIAADZQAABGhGAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AqnC0QhFgBAAhGIAAjZQAAhGBFgBIVPAAQBFABAABGIAADZQAABGhFABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:0,y:0}).wait(1).to({graphics:mask_graphics_3,x:0,y:0}).wait(1).to({graphics:mask_graphics_4,x:0,y:0}).wait(1).to({graphics:mask_graphics_5,x:0,y:0}).wait(1).to({graphics:mask_graphics_6,x:0,y:0}).wait(1).to({graphics:mask_graphics_7,x:0,y:0}).wait(1).to({graphics:mask_graphics_8,x:0,y:0}).wait(1).to({graphics:mask_graphics_9,x:0,y:0}).wait(1).to({graphics:mask_graphics_10,x:0,y:0}).wait(1).to({graphics:mask_graphics_11,x:0,y:0}).wait(1).to({graphics:mask_graphics_12,x:0,y:0}).wait(1).to({graphics:mask_graphics_13,x:0,y:0}).wait(1).to({graphics:mask_graphics_14,x:0,y:0}).wait(1).to({graphics:mask_graphics_15,x:0,y:0}).wait(1).to({graphics:mask_graphics_16,x:0,y:0}).wait(1).to({graphics:mask_graphics_17,x:0,y:0}).wait(1).to({graphics:mask_graphics_18,x:0,y:0}).wait(1).to({graphics:mask_graphics_19,x:0,y:0}).wait(1).to({graphics:mask_graphics_20,x:0,y:0}).wait(1).to({graphics:mask_graphics_21,x:0,y:0}).wait(1).to({graphics:mask_graphics_22,x:0,y:0}).wait(1).to({graphics:mask_graphics_23,x:0,y:0}).wait(1).to({graphics:mask_graphics_24,x:0,y:0}).wait(1).to({graphics:mask_graphics_25,x:0,y:0}).wait(1).to({graphics:mask_graphics_26,x:0,y:0}).wait(2).to({graphics:mask_graphics_28,x:0,y:0}).wait(56));

	// Symbol 13
	this.instance = new lib.Symbol13();
	this.instance.setTransform(0.1,0.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.73,scaleY:1.73,alpha:0},0).to({scaleX:1.39,scaleY:1.39,x:0.2,alpha:0.5},5,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:0.1,alpha:1},5,cjs.Ease.get(0.8)).to({scaleX:1,scaleY:1},17,cjs.Ease.get(1)).wait(56));

	// Symbol 12
	this.instance_1 = new lib.Symbol12();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0},0).to({scaleX:0.69,scaleY:0.69,alpha:0.5},5,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,alpha:1},5,cjs.Ease.get(0.8)).to({scaleX:1,scaleY:1},17,cjs.Ease.get(1)).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-18,150,36);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.pic3();
	this.instance_1.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.pic2();
	this.instance_1.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(66));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AifEXQhDhCAAheQAAg/AVhCQAbhaA+hbQAigzAogzIAjgsQAGgIADAAQAGAAAAAIQAAAzAiA1QANAUA+BKQA0A+AXAwQAjBDAABRQAABehDBCQhDBDhdAAQhdAAhChDg");
	mask.setTransform(-2.2,-28.3);

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.setTransform(-2.2,-28.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.27,scaleY:0.27,y:-73.1},0).to({scaleX:0.65,scaleY:0.65,x:-2.3,y:-49.8},6,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,y:-32.2},5,cjs.Ease.get(0.8)).to({scaleX:1,scaleY:1,x:-2.2,y:-28.3},16,cjs.Ease.get(1)).to({_off:true},72).wait(5));

	// Symbol 34
	this.instance_1 = new lib.Symbol34();
	this.instance_1.setTransform(119.2,46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:196.3,alpha:0},0).to({x:157.2,alpha:0.57},6,cjs.Ease.get(-1)).to({x:127.8,alpha:1},5,cjs.Ease.get(0.8)).to({x:119.2},16,cjs.Ease.get(1)).wait(77));

	// Symbol 33
	this.instance_2 = new lib.Symbol33();
	this.instance_2.setTransform(78.8,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:130.2,alpha:0},0).to({x:104.1,alpha:0.57},6,cjs.Ease.get(-1)).to({x:84.5,alpha:1},5,cjs.Ease.get(0.8)).to({x:78.8},16,cjs.Ease.get(1)).wait(77));

	// Symbol 32
	this.instance_3 = new lib.Symbol32();
	this.instance_3.setTransform(32.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:58.2,alpha:0},0).to({x:45.1,alpha:0.57},6,cjs.Ease.get(-1)).to({x:35.3,alpha:1},5,cjs.Ease.get(0.8)).to({x:32.5},16,cjs.Ease.get(1)).wait(77));

	// Symbol 31
	this.instance_4 = new lib.Symbol31();
	this.instance_4.setTransform(-11.2,46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0},0).to({alpha:0.57},6,cjs.Ease.get(-1)).to({alpha:1},5,cjs.Ease.get(0.8)).wait(93));

	// Symbol 30
	this.instance_5 = new lib.Symbol30();
	this.instance_5.setTransform(-49.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:-75.2,alpha:0},0).to({x:-62.2,alpha:0.57},6,cjs.Ease.get(-1)).to({x:-52.4,alpha:1},5,cjs.Ease.get(0.8)).to({x:-49.5},16,cjs.Ease.get(1)).wait(77));

	// Symbol 29
	this.instance_6 = new lib.Symbol29();
	this.instance_6.setTransform(-87.8,46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:-139.2,alpha:0},0).to({x:-113.1,alpha:0.57},6,cjs.Ease.get(-1)).to({x:-93.5,alpha:1},5,cjs.Ease.get(0.8)).to({x:-87.8},16,cjs.Ease.get(1)).wait(77));

	// Symbol 28
	this.instance_7 = new lib.Symbol28();
	this.instance_7.setTransform(-125.3,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:-202.4,alpha:0},0).to({x:-163.2,alpha:0.57},6,cjs.Ease.get(-1)).to({x:-133.8,alpha:1},5,cjs.Ease.get(0.8)).to({x:-125.3},16,cjs.Ease.get(1)).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.3,-62.9,268.7,126);


(lib.star_002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAgIklggIElgfIAfklIAgElIElAfIklAgIggElg");
	this.shape.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.gradient_radial_002();
	this.instance.setTransform(-0.4,0.7,0.741,0.741,0,0,0,50.6,50.5);
	this.instance.alpha = 0.379;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.9,-36.7,74.8,74.8);


(lib._light_001_animated1601 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{repeat:1});

	// timeline functions:
	this.frame_0 = function() {
		this.podl_mc.visible = false;
	}
	this.frame_81 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(81).call(this.frame_81).wait(1));

	// Layer 2
	this.instance = new lib._light_001();
	this.instance.setTransform(-145.7,0,0.494,0.494);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({x:-145.4},0).wait(1).to({x:-144.9},0).wait(1).to({x:-144.2},0).wait(1).to({x:-143.4},0).wait(1).to({x:-142.4},0).wait(1).to({x:-141.2},0).wait(1).to({x:-139.7},0).wait(1).to({x:-138.1},0).wait(1).to({x:-136.4},0).wait(1).to({x:-134.4},0).wait(1).to({x:-132.2},0).wait(1).to({x:-129.9},0).wait(1).to({x:-127.4},0).wait(1).to({x:-124.6},0).wait(1).to({x:-121.7},0).wait(1).to({x:-118.6},0).wait(1).to({x:-115.3},0).wait(1).to({x:-111.9},0).wait(1).to({x:-108.2},0).wait(1).to({x:-104.4},0).wait(1).to({x:-100.3},0).wait(1).to({x:-96.1},0).wait(1).to({x:-91.7},0).wait(1).to({x:-87.1},0).wait(1).to({x:-82.3},0).wait(1).to({x:-77.3},0).wait(1).to({x:-72.2},0).wait(1).to({x:-66.8},0).wait(1).to({x:-61.3},0).wait(1).to({x:-55.6},0).wait(1).to({x:-49.6},0).wait(1).to({x:-43.5},0).wait(1).to({x:-37.3},0).wait(1).to({x:-30.8},0).wait(1).to({x:-24.1},0).wait(1).to({x:-17.3},0).wait(1).to({x:-10.2},0).wait(1).to({x:-3},0).wait(1).to({x:4.4},0).wait(1).to({x:11.6},0).wait(1).to({x:18.7},0).wait(1).to({x:25.5},0).wait(1).to({x:32.2},0).wait(1).to({x:38.7},0).wait(1).to({x:45},0).wait(1).to({x:51.1},0).wait(1).to({x:57},0).wait(1).to({x:62.7},0).wait(1).to({x:68.3},0).wait(1).to({x:73.6},0).wait(1).to({x:78.8},0).wait(1).to({x:83.8},0).wait(1).to({x:88.6},0).wait(1).to({x:93.2},0).wait(1).to({x:97.6},0).wait(1).to({x:101.8},0).wait(1).to({x:105.8},0).wait(1).to({x:109.7},0).wait(1).to({x:113.3},0).wait(1).to({x:116.8},0).wait(1).to({x:120.1},0).wait(1).to({x:123.2},0).wait(1).to({x:126.1},0).wait(1).to({x:128.8},0).wait(1).to({x:131.4},0).wait(1).to({x:133.7},0).wait(1).to({x:135.9},0).wait(1).to({x:137.9},0).wait(1).to({x:139.6},0).wait(1).to({x:141.2},0).wait(1).to({x:142.6},0).wait(1).to({x:143.9},0).wait(1).to({x:144.9},0).wait(1).to({x:145.7},0).wait(1).to({x:146.4},0).wait(1).to({x:146.9},0).wait(1).to({x:147.2},0).wait(1).to({x:147.3},0).to({_off:true},1).wait(1));

	// Layer 1
	this.podl_mc = new lib._light_001_podl();

	this.timeline.addTween(cjs.Tween.get(this.podl_mc).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-46.3,200,92.5);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57).call(this.frame_57).wait(75));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AybEaIAAkgMAk3AAAIAAEgg");
	mask.setTransform(0,28.2);

	// Symbol 25
	this.instance = new lib.Symbol25();
	this.instance.setTransform(41.7,39.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(22).to({_off:false,y:54.9,alpha:0},0).to({y:42.9,alpha:1},8,cjs.Ease.get(0.8)).to({y:39.9},18,cjs.Ease.get(1)).wait(83));

	// Symbol 24
	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(-75.5,39.9);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(18).to({_off:false,y:54.9,alpha:0},0).to({y:42.9,alpha:1},7,cjs.Ease.get(0.8)).to({y:39.9},18,cjs.Ease.get(1)).wait(1).to({_off:true},86).wait(1));

	// Symbol 1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(1.5,-29.4,0.623,0.623);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},101).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.3,-68.6,232.6,125.1);


(lib.star_002_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star_002();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:384.5},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.9,-36.7,74.8,74.8);


(lib.star_002_appear_hide_30_once = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.podl_mc.visible = false;
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1));

	// Layer 2
	this.podl_mc = new lib.star_002_round();

	this.timeline.addTween(cjs.Tween.get(this.podl_mc).to({_off:true},1).wait(30));

	// Layer 1
	this.instance = new lib.star_002_round();
	this.instance.setTransform(0,0,0.18,0.18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},9,cjs.Ease.get(-1)).to({scaleX:0.18,scaleY:0.18,alpha:0},20,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.9,-36.7,74.8,74.8);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(85).call(this.frame_85).wait(34));

	// Layer 9
	this.instance = new lib.star_002_appear_hide_30_once();
	this.instance.setTransform(14.8,-2.8,0.228,0.228);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).wait(43));

	// Symbol 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("AC+B0IgFAAIAAAAQgQAAgJgKIAAAAQgJgKAAgSIAAAAIAAgFIAAAAIAAgFIAAAAQAAgKADgLIAAAAQADgMAFgNIAAAAQAGgLAHgLIAAAAQAJgKAJgIIAAAAQAJgJANgFIAAAAQAMgFALgBIAAAAIAFABIAAAAIAFgBIAAAAQAKABAFAEIAAAAQAGAFAAAIIAAAAIAAAGIAAAAIAAAFIAAAAQAAAIgFAIIAAAAQgGAIgIAHIAAAAQgIAHgMAGIAAAAIgVAKIAAAAIgUAIIAAAAQgDAKAAAKIAAAAQABATANACIAAAAQATgDARgYIAAAAIADADQgGAKgJAJIAAAAIAGgEIAAAAIAGgIIAAAAIABABIAJgLIAAAAIAEADQgHAMgLAJIAAAAIgIAIIAAAAQALgHALgPIAAAAIAEADQgJAOgOALIAAAAQgPALgQAAIAAAAIgGAAgAC/AsQAMgFAHgEIAAAAIgBAAIAAAAIgSAHIAAAAIAAACgADggMQgLAKgJAPIAAAAQgFAJgEAKIAAAAQAOgGAHgFIAAAAQAKgIAGgLIAAAAQAEgHABgKIAAAAIgBgFIAAAAIAAgBIAAAAQgGADgGAGgADkgbIAJAAIAAAAIgBgDIAAAAIAAgBIAAAAIgIAEgABkB0IgGAAIAAAAQgEAAgEgCIAAAAQgDgCgCgDIAAAAQgCgEAAgFIAAAAIAAgFIAAAAIAAgFIAAAAIAAgCIAAAAIgIAMIAAAAQgPAQgRAAIAAAAIgGAAIAAAAIgEAAIAAAAQgXAAAAgVIAAAAIAAgFIAAAAIAAgFIAAAAQAAgJAEgLIAAAAIAahMIABgEIAAAAIgBgBIAAAAIgFAEIAAAAQgFAHgFANIAAAAIgDAKIgGAAIAEgKIgEAAIAGgPQgEAGgDAJIAAAAIgDAKIgGAAIAEgKIgEAAIACgHQgEAEgFAAIAAAAIgEgBIAAAAIgGABIAAAAQgEAAgDgCIAAAAQgDgDAAgDIAAAAIABgGIAAAAIgBgCIAAAAQgHAIgHALIAAAAQgSAegPA0IAAAAIgGAWIgKAAIgUAAIACgKIgCAAIAghxIABgFIAAAAIgBgBIAAAAIgFAFIAAAAQgEAHgGAMIAAAAIgDAKIgFAAIADgKIgDAAIAGgPIgIAPIAAAAIgDAKIgGAAIAEgKIgEAAIAIgSQAJgbAXAAIAAAAIAEABIAAAAIAGgBIAAAAQAPABAAAPIAAAAIgBAEIAAAAIABABIAAAAIADgEIAAAAQAOgQAQgBIAAAAIAEABIAAAAIAGgBIAAAAQAFABAFAEIAAAAQAEAEAAAHIAAAAIgBAFIAAAAIAAABIAAAAQAKgWAUAAIAAAAIAGABIAAAAIAFgBIAAAAQATABAAAQIAAAAIgBAFIAAAAIABAFIAAAAQAAAHgFAMIAAAAIgaBNIgCAHIAAAAQABADADABIAAAAQAIgDAJgKIAAAAQANgPAMgbIAAAAQAMgbAJggIAAAAIAEgQQAQAAAJgEIAAAAIgBADIALgDIAAAAIgEALIAEAAIAAAAIghB0IgCAFIAAAAIABAAIAAAAIAFgEIAAAAQAFgHAFgPIAAAAIAEgKIAFAAIgEAKIAEAAIgGARQAEgGADgLIAAAAIAEgKIAFAAIgEAKIAEAAIgHAUQgKAcgXAAIAAAAIgEAAgAAqBqIABAAIAAAAIgCAAIAAAAIABAAgAB1BpQAEgBAEgEIAAAAIADgGIAAAAQgDAFgFADIAAAAIgDADgAA9BkIgFAEIAAAAQAGgEAHgHIAAAAIAKgPIAAAAIgIAMIAAAAIgIAHIAAAAIgCADgAB1BfIABAAIAAAAIAAgBIAAAAIgBABgAA9BaIgFAEIAAAAIAEgDIAAAAIAJgNIAAAAIgIAMgAghgKIABgCIAAAAIAIgHIAAAAIAAgBIAAAAIgEADIAAAAIgFAHgAgrgKIABgCIAAAAIAJgIIAAAAIABgBIAAAAIAJgJIAAAAQgKAEgKAQgAAbgQIABgBIAAAAIAAAAIAAAAIgBABgAAVgVIgEAFIAAAAQAEgEAEgDIAAAAIADgEIAAAAQgEABgDAFgAhUgQIABgCIAAAAIAAAAIAAAAIgBACgAhbgWIgDAGIAAAAQADgFAEgCIAAAAIAEgFIAAAAQgEABgEAFgAizBvIAAABIgjgBIAAAAIgiABIAAAAIAAgBIgKABIAAAAIABgFQALgBAHgDIAAAAIAEgCIAAAAIgNABIAAAAIAAgBIgKABIAAAAIABgFQALgBAHgCIAAAAQAFgCAEgGIAAAAQAEgFADgKIAAAAIAmiMIgcgDIAAAAQgOAAgGADIAAAAIABAHIAAAAIgBAEIAAAAIABAGIAAAAQAAAGgEAFIAAAAQgDAFgHAAIAAAAIgFgBIAAAAIgFABIAAAAQgGAAgDgEIAAAAQgDgEAAgGIAAAAIABgFIAAAAIgBgFIAAAAQAAgOAOgHIAAAAQANgGAXAAIAAAAIAFAAIAAAAIAGAAIAAAAQAQAAAbADIAAAAQAZAEAPAAIAAAAQAOAAAKgDIAAAAIgCgHIAAAAIABgFIAAAAIgBgGIAAAAQABgFADgFIAAAAQADgEAHAAIAAAAIAEABIAAAAIAGgBIAAAAQAGAAADAEIAAAAQADADAAAGIAAAAIgBAFIAAAAIABAEIAAAAQAAAMgNAIIAAAAQgOAJgcAAIAAAAIgFAAIAAAAIgFAAIAAAAIgSgBIAAAAIgnCSIgCAIIAAAAQABADADACIAAAAQAFADANAAIAAAAIgBAFIgKgBIAAAAIAAABIgKgBIAAAAIADADIAAAAQAFADANAAIAAAAIgBAFIgKgBgAh8hGQATAAAKgFIAAAAIgBgBIAAAAQgLACgOAAIAAAAIgFAAIAAAAIgFAAIAAAAIgSgBIAAAAIgBADIAaACgAhWhLIABAAIAAAAIAAgBIAAAAIgBABgAi3hMIAAgDQgRgDgNAAIAAAAQgTABgFAEIAAAAIABABIAAAAIASgBIAAAAIAFAAIAAAAIAGAAIAAAAIAYABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:-11.9,y:-0.2}).wait(94));

	// Layer 7
	this.instance_1 = new lib._light_001_animated1601();
	this.instance_1.setTransform(-11.6,-0.6,0.313,0.862,-9.7);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({_off:true},85).wait(9));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AtFB8IAAj3IaLAAIAAD3g");
	mask_1.setTransform(0.5,-0.3);

	// Symbol 8
	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(51.9,4.5);

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(6).to({_off:false,y:19.5},0).to({y:7.5},8,cjs.Ease.get(0.8)).to({y:4.5},18,cjs.Ease.get(1)).wait(86));

	// Symbol 7
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(-13,0);

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3).to({_off:false,y:15},0).to({y:3},8,cjs.Ease.get(0.8)).to({y:0},18,cjs.Ease.get(1)).wait(89));

	// Symbol 6
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(-64.4,4.5);

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:19.5},1).to({y:7.5},8,cjs.Ease.get(0.8)).to({y:4.5},18,cjs.Ease.get(1)).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.3,-12.8,167.6,25);


(lib._TEMPLATE_all_80090 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":53});

	// timeline functions:
	this.frame_600 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(600).call(this.frame_600).wait(9));

	// BORDER
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(1,1,1).p("A6PC5IAA4wMA0fAAAMAAAArvMg0fAAAIAAvAg");
	this.shape.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(609));

	// LOGO
	this.instance = new lib.Symbol26();
	this.instance.setTransform(166.7,69.5,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(609));

	// pic2.jpg
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(168,140);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(581).to({_off:false},0).to({alpha:0.5},9,cjs.Ease.get(-1)).to({alpha:1},9,cjs.Ease.get(1)).wait(10));

	// CTA
	this.instance_2 = new lib.Symbol14();
	this.instance_2.setTransform(169,248);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(434).to({_off:false},0).to({_off:true},166).wait(9));

	// of your property
	this.instance_3 = new lib.Symbol17();
	this.instance_3.setTransform(169.2,208.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(359).to({_off:false},0).to({_off:true},241).wait(9));

	// the true value
	this.instance_4 = new lib.Symbol16();
	this.instance_4.setTransform(220.4,176.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(348).to({_off:false},0).to({_off:true},252).wait(9));

	// discover
	this.instance_5 = new lib.Symbol15();
	this.instance_5.setTransform(84.3,180.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(345).to({_off:false},0).to({_off:true},255).wait(9));

	// -
	this.instance_6 = new lib.Symbol23();
	this.instance_6.setTransform(169,241.6,1,1,0,0,0,-0.1,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(250).to({_off:false},0).to({y:247.6},1).to({y:244.6,alpha:0.449},5,cjs.Ease.get(-1)).to({y:240.6,alpha:1},5,cjs.Ease.get(0.8)).to({y:241.6},19,cjs.Ease.get(1)).to({regX:0,x:169.1},1).wait(48).to({y:243.6,alpha:0.5},6,cjs.Ease.get(-1)).to({y:245.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(267));

	// text1
	this.instance_7 = new lib.Symbol22();
	this.instance_7.setTransform(169,212.6,1,1,0,0,0,-0.1,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(198).to({_off:false},0).to({y:218.6},1).to({y:215.6,alpha:0.449},8,cjs.Ease.get(-1)).to({y:211.6,alpha:1},8,cjs.Ease.get(0.8)).to({y:212.6},18,cjs.Ease.get(1)).to({regX:0,x:169.1},1).wait(98).to({y:214.6,alpha:0.5},6,cjs.Ease.get(-1)).to({y:216.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(264));

	// text2
	this.instance_8 = new lib.Symbol21();
	this.instance_8.setTransform(169,241.6,1,1,0,0,0,-0.1,0);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(106).to({_off:false},0).to({y:247.6},1).to({y:244.6,alpha:0.449},5,cjs.Ease.get(-1)).to({y:240.6,alpha:1},5,cjs.Ease.get(0.8)).to({y:241.6},17,cjs.Ease.get(1)).to({regX:0,x:169.1},1).wait(46).to({y:243.6,alpha:0.5},6,cjs.Ease.get(-1)).to({y:245.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(415));

	// text1
	this.instance_9 = new lib.Symbol20();
	this.instance_9.setTransform(169,212.6,1,1,0,0,0,-0.1,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(56).to({_off:false},0).to({y:218.6},1).to({y:215.6,alpha:0.449},7,cjs.Ease.get(-1)).to({y:211.6,alpha:1},7,cjs.Ease.get(0.8)).to({y:212.6},18,cjs.Ease.get(1)).to({regX:0,x:169.1},1).wait(95).to({y:214.6,alpha:0.5},6,cjs.Ease.get(-1)).to({y:216.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(411));

	// pic3.jpg
	this.instance_10 = new lib.Symbol3();
	this.instance_10.setTransform(168,140);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(326).to({_off:false},0).to({alpha:0.5},9,cjs.Ease.get(-1)).to({alpha:1},9,cjs.Ease.get(1)).wait(265));

	// pic1.jpg
	this.instance_11 = new lib.Symbol36();
	this.instance_11.setTransform(168,140);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(179).to({_off:false},0).to({alpha:0.5},9,cjs.Ease.get(-1)).to({alpha:1},9,cjs.Ease.get(1)).wait(412));

	// pic2.jpg
	this.instance_12 = new lib.Symbol2();
	this.instance_12.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(609));

	// BACKGROUND
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("A6PV3MAAAgruMA0eAAAMAAAArug");
	this.shape_1.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(609));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,338,282);


// stage content:
(lib.lavanda_canvas_ADWORDS_336280_001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		// удаление отступа + белый фон
		
		document.body.style.margin="0px";
		document.body.style.background = "#ffffff";
		
		
		// код для баннера-НЕрастяжки НЕ на всю ширину окна\iframe (с учетом window.devicePixelRatio)
		
		var canvasWidth = canvas.width;  
		var canvasHeight = canvas.height; 
		
		canvas.width = canvasWidth * window.devicePixelRatio;  
		canvas.height = canvasHeight * window.devicePixelRatio;  
		
		canvas.style.width = canvasWidth+"px";  
		canvas.style.height = canvasHeight+"px";  
		
		stage.scaleX=stage.scaleY=window.devicePixelRatio;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// ALL
	this.instance = new lib._TEMPLATE_all_80090();
	this.instance.setTransform(168,140,1,1,0,0,0,168,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167.5,139.5,337,281);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;