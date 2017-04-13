const model = PageSearchModel(),
      view = PageSearchView(model),
      ctrl = PageSearchCtrl(view, model);
model.register(view, ctrl);      
