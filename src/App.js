import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';


const App = (props) => {
  return (
      <div className="app-wrapper">
         <Header />
         <Navbar 
         friendsData={props.state.sidebar.friendsData}
         />
         <div className="app-wrapper-content">
           <Route exact path="/" render={() => <Profile 
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
            />}/>
           <Route path="/profile" render={() => <Profile 
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
            />}/>
           <Route path="/dialogs" render={() => <Dialogs
               messagePage={props.state.messagePage}
               dispatch={props.dispatch}
            />}/>
           <Route path="/news" render={() => <News />}/>
           <Route path="/musics" render={() => <Musics />}/>
           <Route path="/settings" render={() => <Settings />}/>
         </div>
      </div>
  );
}

export default App;
