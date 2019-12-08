module.exports = {
  attributes: {
    title: {
      type: 'string',
      required: true
    },
    code: {
      type: 'string',
      required: true,
      unique: true
    },
    status: {
      type: 'number',
      isIn: [sails.config.custom.STATUS.TRASH, sails.config.custom.STATUS.DRAFT, sails.config.custom.STATUS.ACTIVE],
      defaultsTo: sails.config.custom.STATUS.DRAFT
    },
    entryPrice: {
      type: 'number'
    },
    price: {
      type: 'number'
    },
    description: {
      type: 'string',
    },
    number: {
      type: 'number',
      defaultsTo: 0
    },
    image: {
      type: 'string',
      defaultsTo: ''
    },
    brand: {
      model: 'brand'
    },
    productType: {
      model: 'producttype'
    }
  }
};
  