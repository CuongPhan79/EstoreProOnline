module.exports = {
    attributes: {
      name: {
        type: 'string',
        required: true
      },
      email: {
        type: 'string',
        required: true,
        unique:  true,
        isEmail: true,
        maxLength: 200,
      },
      phone: {
        type: 'string',
        maxLength: 11,
        required: true,
        unique: true
      },
      address: {
        type: 'string',
        description: 'The User address',
        example: 'abc street, ward 5, Ho Chi Minh City'
      },
      imports: {
        collection: 'import',
        via: 'supplier'
      }
    }
  };
  