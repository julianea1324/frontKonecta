import React from "react";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { AppRouter } from "./router/AppRouter";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";
import './App.scss'

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="main container">
        <AppRouter />
      </div>
      <Footer />
    </Provider>
  );
};
