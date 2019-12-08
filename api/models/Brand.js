module.exports = {
    attributes: {
      title: {
        type: 'string',
        required: true
      },
      description: {
        type: 'string',
      },
      status: {
        type: 'number',
        isIn: [sails.config.custom.STATUS.TRASH, sails.config.custom.STATUS.DRAFT, sails.config.custom.STATUS.ACTIVE],
        defaultsTo: sails.config.custom.STATUS.DRAFT
      },
      products: {
        collection: 'product',
        via: 'brand'
      }
    }
  };
  