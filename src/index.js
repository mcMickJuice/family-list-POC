import React from 'react'
import { render } from 'react-dom'
import { Button } from 'material-ui'
import ListManager from './ListManager'
import { Provider } from 'react-redux'
import UserLogin from './UserLogin'
import createStore from './redux/createStore'

const store = createStore()

const App = () => (
  <Provider store={store}>
    <div>
      <UserLogin />

      <ListManager />
    </div>
  </Provider>
)

render(<App />, document.getElementById('root'))
