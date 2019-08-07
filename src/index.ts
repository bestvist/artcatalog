import Artcatalog from './core/artcatalog';

(function () {
    const artcatalog = new Artcatalog({
        el: '#article',
        // target: '#nav'
    })

    artcatalog.render();
})()