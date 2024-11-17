import { fetching, success, fail } from 'actions/carriers'
import reducer, { struct } from 'reducers/carriers'

export const data = [
  'Allstate',
  'National General',
  'Progressive',
  'Seneca'
]

test('ensure reducer initial state when provided undefined input', () => {
  expect(reducer(undefined, {})).toEqual(struct)
})

test('ensure reducer state is updated properly when receiving payload', () => {
  expect(reducer(struct, success(data)))
    .toEqual({
      status: 'success',
      state: data
    })
})

test('ensure reducer status is properly updated', () => {
  expect(reducer(struct, fetching()))
    .toEqual({
      status: 'loading',
      state: []
    })
  expect(reducer(struct, fail([])))
    .toEqual({
      status: 'fail',
      state: []
    })
})
