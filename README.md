hacklivet
=========

web skeleton for hacklivet.no

Lives as a parasite in the html5 bones wordpress theme.

Before installing:
You need a new version of node,
and grunt-cli.

Installation instructions:

After cloning the repository on the root of the html5 bones wordpress theme,
run "npm install" from the command line.
After that run "grunt".

These two commands will fetch package dependencies,
compile the necesarry css, and lint the javascript source.

After doing this make a copy of config.js.example, rename it to config.js
and change the baseUrl to the path of your source relative to the
path on your webserver. Often this will be '/wp-content/themes/html5blank-master/hacklivet/src/scripts/lib'.

Copy your stuff to your server and add
references to styles.css in your front page header file, 
and article-styles.css to your single article header file.

At the bottom of the page add a reference to your require.js file, and config.js file.
Often this will look like this:
<script data-main="<?php echo get_template_directory_uri(); ?>/hack/src/scripts/config" 
src="<?php echo get_template_directory_uri(); ?>/hack/src/scripts/lib/require.js"></script>


