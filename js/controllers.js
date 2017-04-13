function PageSearchCtrl(view, model) {
    const DOM = view.getDOM();
    // input handler
    DOM.button.click(() => {
        model.setQuery(DOM.input.val());
    });
    DOM.input.keyup((ev) => {
        if (ev.which == 13 || ev.keyCode == 13) {
            DOM.input.blur();
        }
    });
    return {
        notify: function() {
            const that = this;
            // checkbox handlers
            DOM.results.find('.input').each(function(index) {
                $(this).click(() => {
                    that.model.favourite(index, $(this).is(':checked')); 
                });
            });
        }
    };
}