const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const ADD_POST = 'ADD-POST';

const profileReducer = (state,action) => {
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

