import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routes/App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-gonf6ysh.us.auth0.com"
    clientId="vLYBJVhpRwmL86MbveaArcYfBbSqyM3N"
    authorizationParams={{
      redirect_uri: `http://localhost:3000/Verificacion`  
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
