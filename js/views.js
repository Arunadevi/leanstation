function PageSearchView(model) {
    const DOM = {
        input: $('#search-query'),
        button: $('#search'),
        results: $('#results')
    },
    templateFnc = Handlebars.compile($('#pagesearch-template').html());

    function getData() {
        function isFavourite(elem) {
            return elem.like === true ? 'checked': '';
        }
        return model.getResults().map(function(elem, index) {
            return {
                about: elem.about,
                category: elem.category,
                id: elem.id,
                isFav: isFavourite(elem),
                link: elem.link,
                name: elem.name,
                picture: elem.picture
            };
        });
    }
    return {
        getDOM: function() {
            return DOM;
        },
        notify: function() {
            const html = templateFnc({ view_list: getData() });
            DOM.results.html(html);
            FB.XFBML.parse();
         }
    };
}

function FavoritesView(model) {
    const DOM = {
        tab: $('#tabname-2'),
        favorites: $('#favorites')
    },
    templateFnc = Handlebars.compile($('#favorites-template').html());

    function getData() {
        return model.getResults().map(function(elem, index) {
            return {
                about: elem.about,
                category: elem.category,
                id: elem.id,
                link: elem.link,
                name: elem.name,
                picture: elem.picture
            };
        });
    }
    return {
        getDOM: function() {
            return DOM;
        },
        notify: function() {
            const html = templateFnc({ view_list: getData() });
            DOM.favorites.html(html);
         }
    };
}

