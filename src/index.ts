import Artcatalog from './core/index';

const readme = require("../README.md");
const container = document.getElementById("container");
container.innerHTML = readme;

// target 
new Artcatalog({
    el: '#container',
    target: '#nav',
}).render();

// position 
new Artcatalog({
    el: '#container',
    position: {
        right: '100px'
    }
}).render();
