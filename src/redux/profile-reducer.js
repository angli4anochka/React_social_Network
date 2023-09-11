const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"


let initialState =  {
  posts: [
    { id: 1, message: "How are you?", likesCount: 0 },
    { id: 2, message: " my first postIts", likesCount: 12 },
    { id: 3, message: "I did it!", likesCount: 33 },
  ],
  newPostText: "Why React is so bad?",
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id:3,
                message: state.newPostText,
                likesCount: 1
              }
            
              state.posts.push(newPost)
              state.newPostText = ""  
              return state

              case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText
                return state
              default:
                return state
    }
     
}


export let addPostActionCreator = () => {
    return {
     type: ADD_POST
    }
  }
  
  export let updateTextAction = (text) => {
   return {
     type: UPDATE_NEW_POST_TEXT, newText: text
   }
  }
  
export default profileReducer