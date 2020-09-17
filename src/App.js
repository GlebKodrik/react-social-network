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

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
         <Header />
         <Navbar friendsData={props.state.sidebar.friendsData}/>
         <div className="app-wrapper-content">
           <Route exact path="/" render={() => <Profile postsData={props.state.profilePage.postsData}/>}/>
           <Route path="/dialogs" render={() => <Dialogs dialogsData={props.state.messagePage.dialogsData} messageData={props.state.messagePage.messageData} dialogsImg={props.state.messagePage.dialogsImg}/>}/>
           <Route path="/profile" render={() => <Profile postsData={props.state.profilePage.postsData}/>}/>
           <Route path="/news" render={() => <News />}/>
           <Route path="/musics" render={() => <Musics />}/>
           <Route path="/settings" render={() => <Settings />}/>
         </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
