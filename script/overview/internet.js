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
		console.log('asd');
		this.graphics.clear();
		this.graphics.lineStyle(2, 0xECF0F1, 1);
		this.graphics.beginFill(this.color, 1);
		this.graphics.drawCircle(this.position.x, this.position.y, this.radius);
		this.graphics.endFill();
		
		console.log(this.position.x + ', ' + this.position.y);
	},
	
	update: function()
	{
		//this.position.x += 1;
		//this.position.y += 1;
	}
}