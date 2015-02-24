var game =
{
	isDebug: true,
	stage: new PIXI.Stage(0x000000),
	renderer: null,
	
	init: function()
	{
		var ow = $('#window_overview .window_content').width();
		var oh = $('#window_overview .window_content').height();
		
		this.renderer = PIXI.autoDetectRenderer(ow, oh, 
		{ 
			antialias: true 
		});
		
		$('#window_overview .window_content').append(this.renderer.view);
	},
	
	animate: function() 
	{
        requestAnimFrame(game.animate);
		
		game.update();
		game.draw();
		
        game.renderer.render(game.stage);
    },
	
	update: function()
	{
		virtualwindow.update();
		internet.update();
	},
	
	draw: function()
	{
		internet.draw();
	}
	
};