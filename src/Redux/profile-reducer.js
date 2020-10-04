const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const ADD_POST = 'ADD-POST';

let initialState = {
        postsData : [
            {likeCout:"57", dislikeCout:"12", date:"31.08.2020", message:"Наконец я начал учить реакт"},
            {likeCout:"10432", dislikeCout:"1", date:"22.06.2000", message:"Толя кусок тупого дерьма"}
        ],
        newPostText: ""
}

const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            let newElementItem = {
                id: "5",
                message: state.newPostText,
                likeCout: "80",
                dislikeCout: "1",
                date: "Нету ее"
            }
            state.postsData.push(newElementItem);
            state.newPostText = "";
            return state;
        case CHANGE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostCreator = () => ({type: ADD_POST});
export const onPostChangeCreator = (text) => ({type: CHANGE_NEW_POST , newText: text});
export default profileReducer;

