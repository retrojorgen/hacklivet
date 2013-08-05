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

After running grunt you should have a new folder called distro.
This folder contains all your css and javascripts compiled.

* Include these files in your wordpress footer.php like this.
<script src="<?php echo get_template_directory_uri(); ?>/hack/distro/js/require.minified.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/hack/distro/js/hacklife.js"></script>


