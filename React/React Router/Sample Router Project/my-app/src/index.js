import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import Profile from './components/Profile';

// Using Route
// const Root = () => {
//     return (
//         <BrowserRouter>
//             <div>
//                 <Route path="/" exact>
//                     <App />
//                 </Route>
//                 <Route path="/users">
//                     <Users />
//                 </Route>
//                 <Route path="/users/:userId">
//                     <Profile />
//                 </Route>
//             </div>
//         </BrowserRouter>
//     );
// };

const Root = () => {
    const handleClick = () => {
        console.log('Thanks for clicking');
    }

    return (
      <BrowserRouter>
        <div>
          <Link to="/">App</Link>
          <Link to="/users">Users</Link>
          <Link to="/users/1">Andrew's Profile</Link>
          <Link to="/" onClick={handleClick}>App with Click Handler</Link>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/users/:userId">
            <Profile />
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
