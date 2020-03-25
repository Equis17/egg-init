module.exports = {
  baseRequest: {
    id: {
      type: 'string',
      description: 'identity',
      required: true,
      example: '1',
    },
  },
  baseResponse: {
    code: { type: 'integer', required: true },
    data: { type: 'string', example: 'success' },
    errorMessage: { type: 'string', example: 'error' },
  },
};
