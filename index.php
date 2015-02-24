<!doctype html>
<html>
	<head>
		<title>Malwarix</title>
		
		<!-- CSS -->
		<link rel="stylesheet" type="text/css" href="css/lib/jquery-ui.min.css">
		<link href='http://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>
		
		<link rel="stylesheet" type="text/css" href="css/window.css">
		<link rel="stylesheet" type="text/css" href="css/index.css">
		
		<!-- JS -->
		<script type="text/javascript">
			WebFontConfig = 
			{
				google: 
				{ 
					families: [ 'Inconsolata::latin' ]
				}
			};
			
			(function() 
			{
				var wf = document.createElement('script');
				wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
				  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
				wf.type = 'text/javascript';
				wf.async = 'true';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(wf, s);
			})();
		</script>
		<script src="script/lib/jquery-2.1.3.min.js"></script>
		<script src="script/lib/jquery.dataSelector.js"></script>
		<script src="script/lib/jquery-ui.min.js"></script>
		<script src="script/lib/jquery.transit.min.js"></script>	
		<script src="script/lib/chance.min.js"></script>
		<script src="script/lib/tinycolor.js"></script>
		<script src="script/lib/pixi.js"></script>
		
		<script src="script/utility.js"></script>
		<script src="script/storage.js"></script>
		<script src="script/window.js"></script>
		
		<script src="script/overview/internet.js"></script>
		
		<script src="script/game.js"></script>
		
		<script src="script/events.js"></script>
		<script src="script/index.js"></script>		
	</head>
	<body>
		<!--<div id = "first_use_splash">
			
		</div>-->
	
		<div id = "wrapper">
			<div id = "header">
				<h1>Malwarix<span> v0.1</span></h1>
			</div>
			
			<div id = "window_shortcuts">
				
			</div>
			
			<!--<div id = "malwarix_overview">
			
			</div>-->
			
			<div id = "window_list">
			
				<div class = "window" data-title = "Hardware" id = "window_hardware">
					<div class = "window_content">
						Hardware...
					</div>
				</div>
				
				<div class = "window" data-title = "Software" id = "window_software">
					<div class = "window_content">
						Software...
					</div>
				</div>
				
				<div class = "window" data-title = "Statistics"  id = "window_stats">
					<div class = "window_content">
						Statistics...
					</div>
				</div>
				
				<div class = "window" data-title = "Settings"  id = "window_settings">
					<div class = "window_content">
						<h2>New game</h2><br/>
						<input type = "button" class = "window_button" id = "new_game" value = "New game"/></br></br>
						
						<h2>Save & Load</h2><br/>
						<input type = "textbox" class = "window_text" id = "saveload_name" placeholder = "File name" /><br/>
						<input type = "button" class = "window_button" id = "save_game" value = "Save game"/>
						<input type = "button" class = "window_button" id = "load_game" value = "Load game"/></br></br>
						
						<h2>Graphics</h2><br/>
						<input type = "button" class = "window_button" id = "graphics_low" value = "Low"/>
						<input type = "button" class = "window_button" id = "graphics_high" value = "High"/>
					</div>
				</div>
				
				<div class = "window" data-title = "Debug"  id = "window_debug">
					<div class = "window_content">
						Debug...
					</div>
				</div>
				
				<div class = "window" data-title = "Help"  id = "window_help">
					<div class = "window_content">
						<h2>New game</h2><br/>
						<p>To start a new game, find the settings window and
						press the new game button.</p></br>
						
						<h2>Saving and loading</h2><br/>
						<p>Saving and loading the game can also be found from the settings window.
						Please note that the game has an autosave feature.</p>
					</div>
				</div>
				
				<div class = "window" data-title = "Profile"  id = "window_profile">
					<div class = "window_content">
						<p>Name: <span id = "profile_name">-</span></p>
						<p>Rank: <span id = "profile_rank">-</span></p>
						<p>Bits: <span id = "profile_bits">-</span></p>
						<p>Money: <span id = "profile_money">-</span></p>
					</div>
				</div>
				
				<div class = "window" data-title = "News"  id = "window_news">
					<div class = "window_content">
						<p>[24.2] Added internet</p>
						<p>[23.2] Added shortcuts</p>
						<p>[23.2] Added virtual windows</p>
						<p>[23.2] Init</p>
					</div>
				</div>
				
				<div class = "window" data-title = "Overview" data-specialcase = "1" id = "window_overview">
					<div class = "window_content">
					
					</div>
				</div>
				
			</div>
		</div>
	</body>
</html>