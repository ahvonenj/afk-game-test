var virtualwindow = 
{
	currentId: 0,
	windows: [],
	windowPadding: 
	{
		x: 150,
		y: 300
	},
	shortcutPadding: 
	{
		x: 100,
		y: 100
	},
	windowPaddingIncrement: 
	{
		x: 50,
		y: 50
	},
	shortcutPaddingIncrement: 
	{
		x: 80,
		y: 0
	},
	
	initWindows: function()
	{
		var that = this;
		
		$('#window_list').children('div').each(function()
		{
			console.log($(this).data('title'));

			$(this).css('top', that.windowPadding.y + 'px');
			$(this).css('left', that.windowPadding.x + 'px');			
			
			$(this).prepend('<div class = "window_titlebar">\
							<div class = "window_titlebar_close">X</div>\
							<div class = "window_titlebar_title">\\\\ ' + $(this).data('title') + '</div>\
							</div>')
			
			var w = {};
			
			$(this).data('vwid', 'vw-' + that.currentId);
			//$(this).attr('id', 'vw-' + that.currentId);
			
			that.currentId++;
			
			w.element = $(this);
			
			
			
			$(this).draggable(
			{
				handle: '.window_titlebar' ,
				containment: '#wrapper',
				grid: [ 5, 5 ],
				scroll: false,
				stack: ".window",
				drag: function(event, ui) 
				{
					if(game.isDebug)
					{
						var t = $(this).data('title');
						var x = $(this).offset().left;
						var y = $(this).offset().top;
						$(this).find('.window_titlebar_title').text('\\\\ ' + t + ' (x: ' + x + ', y: ' + y + ')')
					}
				}
			});
			
			$(this).resizable(
			{
				minWidth: 350,
				minHeight: 350
			});
			
			var shortcutText = $(this).data('title').substr(0, 2).capitaliseFirstLetter();
			var shortcutColor = tinycolor.random().toHexString();
							
			$('#window_shortcuts').append('<div class = "window_shortcut"\
							style = "background-color: ' + shortcutColor + '; \
							top: ' + that.shortcutPadding.y + 'px; \
							left: ' + that.shortcutPadding.x + 'px;"\
							data-linkedto = "' + $(this).attr('id') + '">'
							+ shortcutText + '</div>');
		
			if(typeof $(this).data('specialcase') != 'undefined' || $(this).data('specialcase') == true)
			{
				switch($(this).data('specialcase'))
				{
					case 1:
						$(this).css('left', '');
						$(this).css('right', '15px');
						$(this).css('top', '15px');	
						break;
					default:
						break;
				}
			}
			
			that.windows.push(w);
			
			that.windowPadding.x += that.windowPaddingIncrement.x;
			that.windowPadding.y += that.windowPaddingIncrement.y;
			that.shortcutPadding.x += that.shortcutPaddingIncrement.x;
			that.shortcutPadding.y += that.shortcutPaddingIncrement.y;
		});
		
		$(document).on('click', '.window_titlebar_close', function()
		{
			$(this).parents('.window').fadeOut();
		});
		
		$('.window_shortcut').draggable(
		{
			delay: 100,
			containment: '#wrapper',
			grid: [ 5, 5 ],
			scroll: false,
			stack: ".window_shortcut"
		});
		
		$(document).on('click', '.window_shortcut', function()
		{
			console.log($(this).data('linkedto'));
			$('#' + $(this).data('linkedto')).fadeIn();
			
			var x = ($(this).width() / 2);
			var y = ($(this).height() / 2);
			
			$(this).css(
			{
				transformOrigin: x + 'px ' + y + 'px'
			});
			
			$(this).transition(
			{
				scale: 0.95,
				duration: 50
			}, function()
			{
				$(this).transition(
				{
					scale: 1,
					duration: 50
				});
			});
		});
		
		/*$(document).on('click', '.window_shortcut', function()
		{
			$(this).parents('.window').fadeOut();
		});*/
		
		for(var i = 0; i < that.windows.length; i++)
		{
			console.log($(that.windows[i].element).data('vwid'));
		}
	}
};