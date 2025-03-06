import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Layout from './pages/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import { Provider } from 'react-redux';
import { store,persistor  } from './redux/store';
import Cart from './pages/my_cart/my_cart';

import { PersistGate } from 'redux-persist/integration/react';
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/mi-carrito" element={<Cart />} />
          </Routes>
        </Layout>
      </Router>
    </PersistGate>
  </Provider>
);

reportWebVitals();
