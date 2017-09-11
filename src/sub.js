import {
  orderAware
} from './utils'


const sub = (a, b) => a - b

export default (a, b) => orderAware(a, b, sub)
