/** Rename this to config.js and change baseUrl path **/

requirejs.config({
    baseUrl : '../scripts/lib',
    paths : {
      hacklife : '../hacklife',
      jquery  : '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
      fitvids  : 'jquery.fitvids.require'
    }
});

requirejs(['hacklife/main']);
