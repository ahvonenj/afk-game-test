var events = 
{
	bindEvents: function()
	{
		$(document).on('click', '#new_game', this.window.settings.newgame);
		$(document).on('click', '#save_game', this.window.settings.savegame);
		$(document).on('click', '#load_game', this.window.settings.loadgame); 
		$(document).on('click', '#graphics_low', this.window.settings.lowgraphics); 
		$(document).on('click', '#graphics_high', this.window.settings.highgraphics);
	},
	
	eventDefaults: function(name)
	{
		console.log('Func(): ' + name);
	},
	
	window:
	{
		settings:
		{
			newgame: function()
			{
				events.eventDefaults('New game');
			},
			savegame: function()
			{
				events.eventDefaults('Save game');
			},
			loadgame: function()
			{
				events.eventDefaults('Load game');
			},
			lowgraphics: function()
			{
				events.eventDefaults('Low graphics');
				
				$('.window').each(function()
				{
					$(this).css('box-shadow', 'none');
					$(this).css('-webkit-box-shadow', 'none');
					$(this).css('-moz-box-shadow', 'none');
					
					$(this).css('opacity', '1');
					$(this).css('filter', 'alpha(opacity=100)');
				});
				
				$('.window_shortcut').each(function()
				{
					$(this).css('box-shadow', 'none');
					$(this).css('-webkit-box-shadow', 'none');
					$(this).css('-moz-box-shadow', 'none');
					
					$(this).css('opacity', '1');
					$(this).css('filter', 'alpha(opacity=100)');
				});
			},
			highgraphics: function()
			{
				events.eventDefaults('High graphics');
				
				$('.window').each(function()
				{
					$(this).css('box-shadow', '10px 10px 19px -6px rgba(0,0,0,0.75)');
					$(this).css('-webkit-box-shadow', '10px 10px 19px -6px rgba(0,0,0,0.75)');
					$(this).css('-moz-box-shadow', '10px 10px 19px -6px rgba(0,0,0,0.75)');
					
					$(this).css('opacity', '0.9');
					$(this).css('filter', 'alpha(opacity=90)');
				});
				
				$('.window_shortcut').each(function()
				{
					$(this).css('box-shadow', '10px 10px 19px -6px rgba(0,0,0,0.75)');
					$(this).css('-webkit-box-shadow', '10px 10px 19px -6px rgba(0,0,0,0.75)');
					$(this).css('-moz-box-shadow', '10px 10px 19px -6px rgba(0,0,0,0.75)');
					
					$(this).css('opacity', '0.9');
					$(this).css('filter', 'alpha(opacity=90)');
				});
			}
		}
	}
};