const validateMatch = (regex) => {
  return function(value) {
    const test = regex.test(value)

    if (test) {
      return { valid: true, message: ''}
    } else {
      return { valid: false, message: `${value} doesn't match ${regex}` }
    }
  }
}

export default validateMatch
