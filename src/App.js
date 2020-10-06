import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from './components/Navbar/NavbarContainer';


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer
           
            />
            <div className="app-wrapper-content">
                <Route exact path="/" render={() => <Profile  />}/>
                <Route path="/profile" render={() => <Profile
        
                />}/>
                <Route path="/dialogs" render={() => <DialogsContainer
                    
                />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/musics" render={() => <Musics/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
