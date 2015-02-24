var server =
{
	listServers: function()
	{
		var that = this;
		$('#server_list').empty();
		
		for(var server in that.list)
		{
			var currency = (that.list[server].currency == 'money') ? globals.moneyIndicator : globals.bitIndicator;
			
			$('#server_list').append(
			'<tr><td class = "servername"><b>' + that.list[server].name + '</b></td></tr>' +
			'<tr><td class = "serverdesc">' + that.list[server].description + '</td></tr>' +
			'<tr><td class = "servercost">Cost: ' + that.list[server].startCost + ' ' + currency + '</td></tr>' +
			'<tr><td>CPU: ' + that.list[server].cpu + '</td></tr>' +
			'<tr><td>GPU: ' + that.list[server].gpu + '</td></tr>' +
			'<tr><td>MEM: ' + that.list[server].mem + '</td></tr>' + 
			'<tr><td>CORES: ' + that.list[server].cores + '</td></tr>' +
			'<tr><td class = "serverlast"><input type = "button" class = "window_button server_buy_button" value = "BUY" data-serverid = "' + that.list[server].id + '"/>' +
			'<input type = "button" class = "window_button server_sell_button" value = "SELL" data-serverid = "' + that.list[server].id + '"/></td></tr>'
			);
		}
	},
	
	list:
	{
		'basic':
		{
			id: 'srv-0',
			name: 'Basic server',
			description: 'The most basic server that money can buy',
			startCost: 100,
			currency: 'money',
			
			costMult: 1.5,
			refundMult: 0.8,
			
			cpu: 1,
			gpu: 0,
			mem: 10,
			cores: 1,
			
			type: 'server'
		},
		'80smiracle':
		{
			id: 'srv-1',
			name: '80\'s miracle',
			description: 'Antique server from the 80\'s',
			startCost: 1000,
			currency: 'money',
			
			costMult: 1.5,
			refundMult: 0.8,
			
			cpu: 10,
			gpu: 0,
			mem: 100,
			cores: 1,
			
			type: 'server'
		}
		,
		'win95':
		{
			id: 'srv-2',
			name: 'Windows 95',
			description: 'Strictly for (D)DOS usage!',
			startCost: 2000,
			currency: 'money',
			
			costMult: 1.5,
			refundMult: 0.8,
			
			cpu: 50,
			gpu: 1,
			mem: 200,
			cores: 1,
			
			type: 'server'
		}
	}
};