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
		
		<script src="script/utility.js"></script>
		<script src="script/storage.js"></script>
		<script src="script/window.js"></script>
		<script src="script/game.js"></script>
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
						Settings...
					</div>
				</div>
				
				<div class = "window" data-title = "Overview" data-specialcase = "1" id = "window_overview">
					<div class = "window_content">
						The game...
					</div>
				</div>
				
			</div>
		</div>
	</body>
</html>