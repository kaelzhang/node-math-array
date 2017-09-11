import {
  error,
  orderAware
} from './utils'


const div = (a, b) => {
  if (b === 0) {
    error('divide by zero')
  }

  return a / b
}

export default (a, b) => orderAware(a, b, div)
