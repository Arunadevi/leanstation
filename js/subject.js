function SearchSubject() {
    const observers = [];
    return {    
        add: function(item) {
            observers.push(item);
        },
        removeAll: function() {
            observers.length = 0;
        },
        notifyObservers() {
            observers.forEach(elem => {
                elem.notify();
            });
        }
    };
}

function FavoritesSubject() {
    const observers = [];
    return {    
        add: function(item) {
            observers.push(item);
        },
        removeAll: function() {
            observers.length = 0;
        },
        notifyObservers() {
            observers.forEach(elem => {
                elem.notify();
            });
        }
    };
}