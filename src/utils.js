export const error = (
  message,
  // code
) => {
  const e = new Error(message)

  // if (code) {
  //   e.code = code
  // }

  throw e
}


const manipulate2Array = (a, b, mutator) => {
  if (a.length !== b.length) {
    error('the length of arrays not match')
  }

  return a.map((x, i) => mutator(x, b[i]))
}


const manipulateArray = (a, b, mutator) => {
  return a.map(x => mutator(x, b))
}


const isArray = (a, b) => [a, b].map(Array.isArray)


export const orderUnaware = (a, b, mutator, mutatorReverse) => {
  const [A, B] = isArray(a, b)

  return A
    ? B
      ? manipulate2Array(a, b, mutator)
      : manipulateArray(a, b, mutator)
    : B
      ? manipulateArray(b, a, mutatorReverse)
      : error('at least one array is required')
}


export const orderAware = (a, b, mutator) => {
  const [A, B] = isArray(a, b)

  return A
    ? B
      ? manipulate2Array(a, b, mutator)
      : manipulateArray(a, b, mutator)
    : error('the first argument must be an array')
}
