import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import Root from './Root.jsx';
import configureStore from './store/configureStore'
import "./styles/styles.css";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const renderApp = Root => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Root history={history} />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );
}

renderApp(Root);

if (module.hot) {
  module.hot.accept('./Root.jsx', () => {
    renderApp(Root);
  });
}



