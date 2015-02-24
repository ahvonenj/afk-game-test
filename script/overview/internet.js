var internet = 
{
	graphics: new PIXI.Graphics(),
	
	position:
	{
		x: 300,
		y: 300
	},
	
	radius: 50,
	color: 0x3498db,
	
	init: function()
	{
		game.stage.addChild(this.graphics);
	},
	
	draw: function()
	{
		this.graphics.clear();
		this.graphics.lineStyle(2, 0xECF0F1, 1);
		this.graphics.beginFill(this.color, 1);
		this.graphics.drawCircle(this.position.x, this.position.y, this.radius);
		this.graphics.endFill();
		
		console.log(this.position.x + ', ' + this.position.y);
	},
	
	c: 0,
	
	update: function()
	{
		this.position.x = 300 + Math.sin(this.c * 1) * 100;
		this.position.y = 300 + Math.cos(this.c * 1) * 100;
		
		this.c += 0.1;
	}
};