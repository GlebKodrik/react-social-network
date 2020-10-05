import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar
                store={props.store}
            />
            <div className="app-wrapper-content">
                <Route exact path="/" render={() => <Profile
                    store={props.store}
                />}/>
                <Route path="/profile" render={() => <Profile
                    store={props.store}
                />}/>
                <Route path="/dialogs" render={() => <DialogsContainer
                    store={props.store}
                />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/musics" render={() => <Musics/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
