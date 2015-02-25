var events = 
{
	bindEvents: function()
	{
		var that = this;
		
		$(document).on('click', '#new_game', this.window.settings.newgame);
		$(document).on('click', '#save_game', this.window.settings.savegame);
		$(document).on('click', '#load_game', this.window.settings.loadgame); 
		$(document).on('click', '#graphics_low', this.window.settings.lowgraphics); 
		$(document).on('click', '#graphics_high', this.window.settings.highgraphics);
		
		$(document).on('click', '#server_list .server_buy_button', function() { that.window.server.buy($(this).data('serverid')); });
		$(document).on('click', '#server_list .server_sell_button', function() { that.window.server.sell($(this).data('serverid')); });
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
		},
		server:
		{
			buy: function(serverid)
			{
				events.eventDefaults('Server buy');
				console.log(serverid);
				
				var server =
				{
					serverid: serverid,
					
					graphics: new PIXI.Graphics(),
					
					position:
					{
						x: 0,
						y: 0
					},
					
					radius: 25,
					color: 0xd35400,
					name: 'Server',
					
					isMoving: false,
					
					software:
					[
					
					],
					
					text: new PIXI.Text(name,
					{
						font: '12pt Tahoma',
						fill: '#ECF0F1',
						align: 'center'
					}),
					
					init: function()
					{
						var that = this;
						
						game.stage.addChild(this.graphics);
						game.stage.addChild(this.text);
						this.position.x = chance.integer({ min: 25, max: game.renderer.width - 25 });
						this.position.y = chance.integer({ min: 25, max: game.renderer.height - 25 });
						this.graphics.interactive = true;
						
						this.graphics.mousedown = function(data)
						{
							console.log(data);
							
							$('#server_information').empty();
							var s = utility.serverById(that.serverid);
								
							$('#server_information').append(
							'<tr><td class = "servername"><b>' + s.name + '</b></td></tr>' +
							'<tr><td>CPU: ' + s.cpu + '</td></tr>' +
							'<tr><td>GPU: ' + s.gpu + '</td></tr>' +
							'<tr><td>MEM: ' + s.mem + '</td></tr>' + 
							'<tr><td class = "serverlast">CORES: ' + s.cores + '</td></tr>'
							);
							
							game.isMoving = true;
							game.selectedObject = that;
							
							
						}
						
						/*setInterval(function()
						{
							
							var ddos = 
							{
								dead: false,
								
								graphics: new PIXI.Graphics(),
								
								position:
								{
									x: 0,
									y: 0
								},
								
								radius: 5,
								color: 0xd35400,
								
								init: function()
								{
									game.stage.addChild(this.graphics);
									this.position.x = that.position.x;
									this.position.y = that.position.y;
									
								},
								
								draw: function()
								{
									if(!this.dead)
									{
										this.graphics.clear();
										this.graphics.lineStyle(2, 0xECF0F1, 1);
										this.graphics.beginFill(this.color, 1);
										this.graphics.drawCircle(this.position.x, this.position.y, this.radius);
										this.graphics.endFill();
									}
								},
								
								update: function()
								{
									if(!this.dead)
									{
										var d = utility.math.dir(this.position, internet.position);
										this.position.x += Math.cos(d * Math.PI / 180) * 1;
										this.position.y += Math.sin(d * Math.PI / 180) * 1;
										
										if(utility.math.dist(this.position, internet.position) < internet.radius)
										{
											this.dead = true;
											internet.color = 0xe74c3c;
											
											setTimeout(function()
											{
												internet.color = 0x3498db;
											}, 1);
											
											this.graphics.clear();
											this.graphics.removeStageReference();
											
										}
									}
								}
							};
							ddos.init();
							that.ddosList.push(ddos);
						}, 450);*/
						
						var viriLine = 
						{
								dead: false,
								
								graphics: new PIXI.Graphics(),
								dataBall: new PIXI.Graphics(),
								
								position:
								{
									x: 0,
									y: 0
								},
								
								radius: 5,
								color: 0xd35400,
								
								bezStart: 
								{
									x: null,
									y: null
								},
								bezControl: 
								{
									x: null,
									y: null
								},
								bezEnd: 
								{
									x: null,
									y: null
								},
								
								init: function()
								{
									game.stage.addChild(this.graphics);
									game.stage.addChild(this.dataBall);
									
									this.position.x = that.position.x;
									this.position.y = that.position.y;
									
									var ip = internet.position;
									
									var d = utility.math.dir(this.position, ip);
									
									var dr = utility.math.dir(this.position, 
									{
										x: ip.x + 500,
										y: ip.y - 500
									});
									
									var di = utility.math.dist(this.position, ip);
									
									this.bezStart.x = this.position.x + Math.cos(d * Math.PI / 180) * this.radius * 5;
									this.bezStart.y = this.position.y + Math.sin(d * Math.PI / 180) * this.radius * 5;
									
									this.bezControl.x = this.position.x + Math.cos(dr * Math.PI / 180) * di / 2;
									this.bezControl.y = this.position.y + Math.sin(dr * Math.PI / 180) * di / 2;
									
									this.bezEnd.x = internet.position.x - Math.cos(d * Math.PI / 180) * internet.radius;
									this.bezEnd.x = internet.position.y - Math.sin(d * Math.PI / 180) * internet.radius;
									
									this.graphics.clear();
									this.graphics.lineStyle(2, 0x0074D9, 1);
									
									this.graphics.moveTo(this.bezStart.x, this.bezStart.y);
									this.graphics.quadraticCurveTo(this.bezControl.x, this.bezControl.y, this.bezEnd.x, this.bezEnd.y);
									
								},
								
								draw: function()
								{
									if(!this.dead)
									{
										this.position.x = that.position.x;
									this.position.y = that.position.y;
									
									var ip = internet.position;
									
									var d = utility.math.dir(this.position, ip);
									
									var dr = utility.math.dir(this.position, 
									{
										x: ip.x + 500,
										y: ip.y - 500
									});
									
									var di = utility.math.dist(this.position, ip);
									
									this.bezStart.x = this.position.x + Math.cos(d * Math.PI / 180) * this.radius * 5;
									this.bezStart.y = this.position.y + Math.sin(d * Math.PI / 180) * this.radius * 5;
									
									this.bezControl.x = this.position.x + Math.cos(dr * Math.PI / 180) * di / 2;
									this.bezControl.y = this.position.y + Math.sin(dr * Math.PI / 180) * di / 2;
									
									this.bezEnd.x = internet.position.x - Math.cos(d * Math.PI / 180) * internet.radius;
									this.bezEnd.y = internet.position.y - Math.sin(d * Math.PI / 180) * internet.radius;
									
									this.graphics.clear();
									this.graphics.lineStyle(2, 0x0074D9, 1);
									
									this.graphics.moveTo(this.bezStart.x, this.bezStart.y);
									this.graphics.quadraticCurveTo(this.bezControl.x, this.bezControl.y, this.bezEnd.x, this.bezEnd.y);
									}
								},
								
								t: 0,
								
								update: function()
								{
									var point = utility.math.pointInBezier(this.t, this.bezStart, this.bezControl, this.bezEnd);
									this.dataBall.clear();
									this.dataBall.lineStyle(2, 0xFFFFFF, 1);
									this.dataBall.beginFill(0xFFFFFF, 1);
									this.dataBall.drawCircle(point.x, point.y, 5);
									this.dataBall.endFill();
									
									this.t += 0.01;
								}
							
						};
						
						viriLine.init();
						that.ddosList.push(viriLine);
					},
					
					draw: function()
					{
						this.graphics.clear();
						this.graphics.lineStyle(2, 0xECF0F1, 1);
						this.graphics.beginFill(this.color, 1);
						this.graphics.drawCircle(this.position.x, this.position.y, this.radius);
						this.graphics.endFill();
						
						this.text.setText(this.name);
						this.text.x = this.position.x - this.text.width / 2;
						this.text.y = this.position.y - this.text.height / 2;	

						for(var ddos in this.ddosList)
						{
							this.ddosList[ddos].draw();
						}
					},
					
					ddosList: [],
					malwareList: [],

					update: function()
					{
						for(var ddos in this.ddosList)
						{
							this.ddosList[ddos].update();
							
							if(this.ddosList[ddos].dead)
							{
								this.ddosList[ddos] = null;
								this.ddosList.splice(this.ddosList[ddos], 1);
							}
						}
					}
				};
				
				server.init();
				
				storage.playerData.server.push(server);
			},
			sell: function(serverid)
			{
				events.eventDefaults('Server sell');
				console.log(serverid);
			}
		}
	}
};