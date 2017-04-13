function PageSearchCtrl(view, model) {
    const DOM = view.getDOM();
    // input handler
    DOM.button.click(() => {
        model.setQuery(DOM.input.val());
    });
    DOM.input.keyup((ev) => {
        if (ev.which == 13 || ev.keyCode == 13) {
           model.setQuery(DOM.input.val());
        }
    });
    return {
        notify: function () {

        }
    }
}

function FavoritesCtrl(view, model) {
    const DOM = view.getDOM();
    // input handler
    DOM.tab.click(() => {
        model.setResults();
    });
    return {
        notify: function () {
            
        }
    }
}