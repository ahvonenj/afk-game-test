$(document).ready(function()
{
	console.log('%cInit', 'background-color: #16a085; color: #ecf0f1; font-weight: bold');
	
	String.prototype.capitaliseFirstLetter = function () 
	{
		return this.charAt(0).toUpperCase() + this.slice(1);
	}
	
	virtualwindow.initWindows();
});