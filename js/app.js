var url = window.location.href;
var pwa = 'https://castorena43.github.io/sw.js';

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        pwa = '/sw.js';
    }
navigator.serviceWorker.register(pwa);
}