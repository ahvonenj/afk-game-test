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
	}
};