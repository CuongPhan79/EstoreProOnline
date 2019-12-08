module.exports = {
  inputs: {},
  exits: {
    success: {
      viewTemplatePath: 'backend/pages/product/index',
    },
    redirect: {
      responseType: 'redirect'
    }
  },
  fn: async function (inputs, exits) {
    let totalActive = await ProductService.count({ status: sails.config.custom.STATUS.ACTIVE });
    let totalDraft = await ProductService.count({ status: sails.config.custom.STATUS.DRAFT});
    let totalTrash = await ProductService.count({ status: sails.config.custom.STATUS.TRASH});
    let params = this.req.allParams();
    let title = params.search ? params.search : null;
    let productType = params.productType ? params.productType : null;
    let where = {
      status: sails.config.custom.STATUS.ACTIVE
    };
    if(title) {
      if (typeof title === "string" && title.length > 0) {
        where = {
          or: [
            {
              title: {
                contains: title
              },
              status: sails.config.custom.STATUS.ACTIVE
            }
          ]
        };
      }
    } else {
      if(productType)
      where = {
        status: sails.config.custom.STATUS.ACTIVE,
        productType: productType
      }
    }
    let _default = await sails.helpers.getDefaultData(this.req);
    let productObj = {};
    productObj = await ProductService.find(where);
    let productTypeObj = await ProductTypeService.find({status: sails.config.custom.STATUS.ACTIVE});
    _default.productTypeObj = productTypeObj;
    _default.totalTrash = totalTrash;
    _default.totalActive = totalActive;
    _default.totalDraft = totalDraft;
    _default.productObj = productObj;
    _default.search = title;
    for(product of productObj) {
      let imageObj = product.image.split("_");
      let type = imageObj[1].split(".");
      product.img = imageObj[0] + "_origin." + type[1];
    }
   
    sails.log.info("================================ controllers/backend/list => TYPE ================================");
    return exits.success(_default);
  }
};