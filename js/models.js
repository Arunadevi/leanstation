function PageSearchModel() {
    const subject = Subject();
    var query = '';
    var results = [];
    return {
        setQuery: function(q) {
            query = q;
            results.length = 0;
            FB.api("/search?q=" + q + "&type=page&fields=name,picture,about,category,link", function (pages) {
                if (pages && !pages.error) {
                    pages.data.forEach(function(page) {
                        FB.api("/me/likes/" + page.id , function (like) {
                            if (like.length) {
                                page.like = true;
                            }
                            results.push(page);
                            if (results.length == pages.data.length)
                                subject.notifyObservers();
                        })                      
                    }, this);
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