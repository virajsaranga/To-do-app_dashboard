import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import MainLayout from "./pages/MainLayout";
import "./styles/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Header />
            <SubHeader />
            <Routes>
              <Route path="/" element={<MainLayout />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
