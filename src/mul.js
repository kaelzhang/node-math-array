import {
  orderUnaware
} from './utils'


const mul = (a, b) => a * b

export default (a, b) => orderUnaware(a, b, mul, mul)
