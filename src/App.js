import './App.css';
import Header from './Components/Header/Header';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Header isLogin={isLogin} />
      <Routes>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/auth'} element={<Auth setIsLogin={setIsLogin} />} />
      </Routes>

    </div>

  );
}

export default App;

