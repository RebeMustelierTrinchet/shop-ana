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

import { PersistGate } from 'redux-persist/integration/react';
import Product from './pages/product/product';
import ProductDetail from './pages/productDetails/productDetails';
import Contact from './pages/contact/contact';
import Catalog from './pages/catalog/catalog';
import Admin from './pages/admin/admin';
import Login from './pages/login/login';
import PrivateRoute from './component/privateRoute/privateRoute';
import AddProduct from './pages/admin/add-product';
import EditProduct from './pages/admin/edit';
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/catalogo" element={<Catalog />} />
            <Route exact path="/mi-carrito" element={<Product />} />
            <Route exact path="/contacto" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
            
            <Route
              path="/admin/add-product"
              element={
                <PrivateRoute>
                  <AddProduct />
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </PersistGate>
  </Provider>
);

reportWebVitals();
