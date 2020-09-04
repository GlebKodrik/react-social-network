import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
         <Header />
         <Navbar />
         <div className="app-wrapper-content">
           <Route exact path="/" component={Profile}/>
           <Route path="/dialogs" component={Dialogs}/>
           <Route path="/profile" component={Profile}/>
           <Route path="/news" component={News}/>
           <Route path="/musics" component={Musics}/>
           <Route path="/settings" component={Settings}/>
         </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
