var utility = 
{
	supports_html5_storage: function () 
	{
		try 
		{
			return 'localStorage' in window && window['localStorage'] !== null;
		} 
		catch (e) 
		{
			return false;
		}
	},
	
	saveGame: function()
	{
		if(this.supports_html5_storage)
		{
			
		}
		else
		{
			alert('Localstorage is not supported, please upgrade your browser.');
		}
	},
	
	loadGame: function()
	{
		if(this.supports_html5_storage)
		{
			
		}
		else
		{
			alert('Localstorage is not supported, please upgrade your browser.');
		}
	},
	
	serverById: function(id)
	{
		for(var s in server.list)
		{
			if(server.list[s].id == id)
			{
				return server.list[s];
			}	
		}
		return null;
	},
	
	math:
	{
		dist: function(a, b)
		{
			return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
		},
		dir: function(a, b)
		{
			return Math.atan2(b.y - a.y, b.x - a.x) * (180 / Math.PI);
		},
		pointInBezier: function(t, start, control, end)
		{
			var r =
			{
				x: ((1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * control.x + t * t * end.x),
				y: ((1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * control.y + t * t * end.y)
			};
			
			return r;
		}
	}
};