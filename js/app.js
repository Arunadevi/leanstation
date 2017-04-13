const searchModel = PageSearchModel(),
      searchView = PageSearchView(searchModel),
      searchCtrl = PageSearchCtrl(searchView, searchModel);
searchModel.register(searchView, searchCtrl);

const favModel = FavoritesModel(),
      favView = FavoritesView(favModel),
      favCtrl = FavoritesCtrl(favView, favModel);
favModel.register(favView, favCtrl); 
