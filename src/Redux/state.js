const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
export let store = {
    _callSubscriber() {},
    _state:{
        messagePage: {
            dialogsData : [
                {id:"1", name:"Глеб" , src: "https://archilab.online/images/1/123.jpg"},
                {id:"2", name:"Вася" , src: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"},
                {id:"3", name:"Ваня" , src: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"},
                {id:"4", name:"Михаил" , src: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"},
                {id:"5", name:"Камат" , src: "https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg"},
                {id:"6", name:"Анатолий" , src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRltvBEVwZUC1nI-q-4QnueJjvDFPOrHqBWig&usqp=CAU"}
            ],
            messageData : [
                {id: "1" , name:"Првиет меня зовут Глеб"},
                {id: "2" , name:"Ну ты можешь пойти нахуй"},
                {id: "3" , name:"Толя мне похуй на тебя"}
            ],
            newMessageText: "",
        },
        profilePage: {
            postsData : [
                {likeCout:"57", dislikeCout:"12", date:"31.08.2020", message:"Наконец я начал учить реакт"},
                {likeCout:"10432", dislikeCout:"1", date:"22.06.2000", message:"Толя кусок тупого дерьма"}
            ],
            newPostText: ""
        },
        sidebar: {
            friendsData: [
                {id:"1", name:"Глеб" , src: "https://archilab.online/images/1/123.jpg"},
                {id:"2", name:"Вася" , src: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"},
                {id:"3", name:"Ваня" , src: "https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"}
            ]
        }
    },
    subscriber(observer){
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action){
        debugger;
        if(action.type === ADD_POST){
            if (this._state.messagePage.newMessageText === ''){
                alert("Введите сообщение");
            }
            else{
                let newElementItem = {
                    id: "5",
                    message: this._state.profilePage.newPostText,
                    likeCout: "80",
                    dislikeCout: "1",
                    date: "Нету ее"
                }
                this._state.profilePage.postsData.push(newElementItem);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state);
            }
        } else if(action.type === CHANGE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === ADD_MESSAGE){
            if (this._state.messagePage.newMessageText === ''){
                alert("Введите сообщение");
            }
            else{
                let newElementMessage = {
                    id: '1',
                    name: this._state.messagePage.newMessageText,
                }
                this._state.messagePage.messageData.push(newElementMessage);
                this._state.messagePage.newMessageText = "";
                this._callSubscriber(this._state);
            }
        } else if(action.type === CHANGE_NEW_MESSAGE){
            this._state.messagePage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: CHANGE_NEW_POST , newText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeNewMessageActionCreator = (text) => ({type: CHANGE_NEW_MESSAGE , newText: text});

window.store = store;