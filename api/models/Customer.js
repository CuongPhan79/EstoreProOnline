module.exports = {
    attributes: {
      firstName: {
        type: 'string',
        required: true
      },
      lastName: {
        type: 'string',
        required: true
      },
      gender: {
        type: 'number',
      },
      emailAddress: {
        type: 'string',
        required: true,
        unique: true,
        isEmail: true,
        maxLength: 200,
        description: 'The email address for this customer.',
        example: 'example@zinimedia.com'
      },
      phone: {
        type: 'string',
        maxLength: 11,
        required: true,
        unique: true
      },
      birthday: {
        type: 'string',
        example: 'YYYY-MM-DD'
      },
      password: {
        type: 'string',
        description:
          'Securely hashed representation of the user\'s login password.',
        protect: true,
        example: '2$28a8eabna301089103-13948134nad'
      },
      address: {
        type: 'string',
        description: 'The User address',
        example: 'abc street, ward 5, Ho Chi Minh City'
      },
      orders: {
        collection: 'order',
        via: 'buyer'
      }
    }
  };
  