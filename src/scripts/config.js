/** Rename this to config.js and change baseUrl path **/

requirejs.config({
    baseUrl : '/hacklivetditt/wp-content/themes/hacklivet/hack/src/scripts/lib',
    paths : {
      hacklife : '../hacklife',
      jquery  : 'jquery-2.0.3',
      fitvids  : 'jquery.fitvids.require',
      
    }
});

requirejs(['hacklife/main']);
