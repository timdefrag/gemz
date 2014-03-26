
module.exports.routes = {

  'GET /': { view: 'index' },

  'GET /gallery/:tag': { controller: 'gallery', action: 'itemList' },
  'GET /item/:id/:slug': { controller: 'gallery', action: 'itemDetail' }

  
};
