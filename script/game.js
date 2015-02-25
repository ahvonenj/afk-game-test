var game =
{
	isDebug: true,
	stage: new PIXI.Stage(0x000000),
	renderer: null,
	
	selectedObject: null,
	isMoving: false,
	
	init: function()
	{
		var that = this;
		
		var ow = $('#window_overview .window_content').width();
		var oh = $('#window_overview .window_content').height();
		
		this.renderer = PIXI.autoDetectRenderer(ow, oh, 
		{ 
			antialias: true 
		});
		
		$('#window_overview .window_content').append(this.renderer.view);
		
		this.stage.mouseup = function(data)
		{
			that.isMoving = false;
		};
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
		
		for(var i = 0; i < storage.playerData.server.length; i++)
		{
			var s = storage.playerData.server[i];
			
			s.update();
		}
		
		if(this.isMoving)
		{
			this.selectedObject.position.x = this.stage.getMousePosition().x;
			this.selectedObject.position.y = this.stage.getMousePosition().y;
		}
		
		console.log(this.stage.getMousePosition().x);
	},
	
	draw: function()
	{
		internet.draw();
		
		for(var i = 0; i < storage.playerData.server.length; i++)
		{
			var s = storage.playerData.server[i];
			
			s.draw();
		}
	}
	
};