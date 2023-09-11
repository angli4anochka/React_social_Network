import store, { subscribe } from './redux/state';
import App from './App';
import ReactDOM from 'react-dom/client'
import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}> {/* Wrap your App with Provider */}
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </React.StrictMode>
  )
}

rerenderEntireTree(store.getState)
store.subscribe(rerenderEntireTree)