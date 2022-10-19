import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './components/Users';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact>
                    <App />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
