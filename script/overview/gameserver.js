var gameserver =
{
	graphics: new PIXI.Graphics(),
	
	position:
	{
		x: 0,
		y: 0
	},
	
	radius: 25,
	color: 0xd35400,
	name: '',
	
	text: new PIXI.Text(this.name,
	{
		font: '12pt Tahoma',
		fill: '#ECF0F1',
		align: 'center'
	}),
	
	init: function()
	{
		game.stage.addChild(this.graphics);
		game.stage.addChild(this.text);
		this.position.x = chance.integer({ min: 25, max: game.renderer.width - 25 });
		this.position.y = chance.integer({ min: 25, max: game.renderer.height - 25 });
		
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
	},
	
	c: 0,
	
	update: function()
	{
		this.position.x = 300 + Math.sin(this.c * 0.2) * 100;
		this.position.y = 300 + Math.cos(this.c * 0.2) * 100;
		
		this.c += 0.1;
	}
};