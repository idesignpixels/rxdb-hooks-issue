import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '@babel/polyfill';
import './index.css';
import { Provider } from 'rxdb-hooks';
import initialize from './initialize';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Root = () => {
  const [db, setDb] = useState();

  useEffect(() => {
    // RxDB instantiation can be asynchronous
    initialize().then((dbb => {
      window.db = dbb;
      setDb(dbb);
    }));
  }, []);

  // Until db becomes available, consumer hooks that
  // depend on it will still work, absorbing the delay
  // by setting their state to isFetching:true
  return (
    <Provider db={db}>
      <App />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Root />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
