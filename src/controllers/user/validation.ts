export default Object.freeze({
  create: {
      name: {
          exists: true,
          string: true,
          in: ['body'],
          errorMessage: 'Name is required',
          isLength: {
              errorMessage: 'Character should be 1',
              options: { min: 3 },

          },
      },
  },
  delete: {
      name: {
          exists: true,
          in: ['body'],
          errorMessage: 'Name is required',
          isLength: {
              errorMessage: 'Character should be 1',
              options: { min: 3 },
          }
      }
  },
  get: {},
  update: {
      name: {
          exists: true,
          in: ['body'],
          errorMessage: 'Name is required',
      }
  }

});
