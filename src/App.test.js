import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { fireEvent, render, screen } from '@testing-library/react'

import { data as mockData } from 'reducers/carriers.spec'

import App from 'App'

const mockStore = configureStore()

const reducer = (status, state) => ({ carriers: { status, state } })

const successProps = reducer('success', mockData)

const app = store => (
  <Provider store={store}>
    <App />
  </Provider>
)

test('ensure carriers render', () => {
  const store = mockStore(successProps)
  render(app(store))
  expect(screen.getByText(/Allstate/i)).toBeTruthy()
})
