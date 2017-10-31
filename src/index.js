import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'

import App from 'components/App'

import './reset.css'
import './index.css'

const history = createHistory({ basename: '/dailyui' })
const initialState = {}
const store = configureStore(initialState, history)

render(
	<Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker()
