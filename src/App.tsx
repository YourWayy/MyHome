import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { getProfileDataTC } from './store/profile-reducers';
import { Routes } from './modules/routes/Routes';
import { HashRouter } from 'react-router-dom';
import { Loader } from './modules/components/Loader/Loader';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileDataTC());
  }, [dispatch]);

  return (
    <HashRouter>
      <div className="App">
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
