module.exports = compose

function compose (middleware) {
  if (!Array.isArray(middleware)) {
    throw new TypeError('Middleware stack must be an array!')
  }
  for (const fn of middleware) {
    if (typeof fn !== 'function') { throw new TypeError('Middleware must be composed of functions!') }
  }

  return function (context, next) {
    return dispatch(0)

    function dispatch (i) {
      let fn = middleware[i]

      if (i === middleware.length) {
        fn = next
      }

      if (!fn) {
        return Promise.resolve()
      }

      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
}
