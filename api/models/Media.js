module.exports = {
  attributes: {
    title: {                            
      type: 'string',
      required: true,
      description: 'The title is how it appears on your site',
      example: 'Hello ZiniMedia Team'
    },
    thumbnail: {
      type: 'json'
    },
  }
};