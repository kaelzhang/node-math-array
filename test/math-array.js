import test from 'ava'
import {
  add,
  sub,
  mul,
  div
} from '../src'


const methods = {
  add,
  sub,
  mul,
  div
}

let u


;[
  [
    'add',
    [[1, u], [1, u], 1],
    [2,]
  ],
  [
    'sub',
    [[1, u], [1, 1], 1],
    [0,]
  ],
  [
    'div',
    [[1, u], [1, 1], 1],
    [1,]
  ],
  [
    'mul',
    [[1, u], [1, '2'], 1],
    [1,]
  ],
  [
    'add',
    [[1, 2, 3], [2, 3, 4]],
    [3, 5, 7]
  ],
  [
    'add',
    [[1], [1, 2, 3]],
    Error
  ],
  [
    'add',
    [[1, 2, 3], 1],
    [2, 3, 4]
  ],
  [
    'add',
    [1, [1, 2, 3]],
    [2, 3, 4]
  ],
  [
    'add',
    [1, 2],
    Error
  ],
  [
    'sub',
    [1, [1, 2, 3]],
    Error
  ],
  [
    'sub',
    [[1, 2, 3], 1],
    [0, 1, 2]
  ],
  [
    'sub',
    [[2, 3, 4], [1, 2, 3]],
    [1, 1, 1]
  ],
  [
    'sub',
    [1, 2],
    Error
  ],
  [
    'mul',
    [1, 2],
    Error
  ],
  [
    'mul',
    [1, [1, 2, 3]],
    [1, 2, 3]
  ],
  [
    'mul',
    [[1, 2, 3], [1, 2, 3]],
    [1, 4, 9]
  ],
  [
    'mul',
    [[1, 2, 3], 1],
    [1, 2, 3]
  ],
  [
    'div',
    [1, 2],
    Error
  ],
  [
    'div',
    [1, [1, 2, 3]],
    Error
  ],
  [
    'div',
    [[1, 2, 3], 1],
    [1, 2, 3]
  ],
  [
    'div',
    [[1, 2, 3], 0],
    Error
  ],
  [
    'div',
    [[1, 2, 3], [1, 2, 3]],
    [1, 1, 1]
  ]

].forEach(([type, args, expected]) => {

  const d = `${type}: ${JSON.stringify(args)}`

  test(d, async t => {
    let result

    try {
      result = methods[type](...args)
    } catch (e) {

      if (expected !== Error) {
        t.fail('should not fail')
        return
      }

      return
    }

    t.deepEqual(result, expected)
  })
})
