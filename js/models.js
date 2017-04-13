function PageSearchModel() {
    const subject = SearchSubject();
    var query = '';
    var results = [];
    return {
        setQuery: function(q) {
            query = q;
            results.length = 0;
            FB.api("/search?q=" + q + "&type=page&fields=name,picture,about,category,link", function (pages) {
                if (pages && !pages.error) {
                    results = results.concat(pages.data);
                    subject.notifyObservers();
                }   
            });
        },

        getResults: function() {
            return results;
        },
        register: function(...args) {
            subject.removeAll();
            args.forEach(elem => {
                subject.add(elem);
            });
        }
    };
}

function FavoritesModel() {
    const subject = FavoritesSubject();
    var results = [];
    
    return {
        setResults: function () {
            FB.api("/me/likes?fields=name,picture,about,category",function (response) {
                results = response.data;
                subject.notifyObservers();
            })
        },
        getResults: function() {
            return results;
        },
        register: function(...args) {
            subject.removeAll();
            args.forEach(elem => {
                subject.add(elem);
            });
        }
    };
}