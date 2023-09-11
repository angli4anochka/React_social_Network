const ADD_TEXT_MESSAGE = "ADD-TEXT-MESSAGE"
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE"

let initialState = {
  dialogsData: [
    { id: 1, name: "Alina" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Rwx" },
    { id: 4, name: "Max" },
    { id: 5, name: "Andrew" },
    { id: 6, name: "Ailvia" },
  ],

  msg: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hola" },
    { id: 3, message: "Ni Hao" },
    { id: 4, message: "Guten Tak" },
    { id: 5, message: "Why Tak" },
  ],

  textAreaText: "I will go crazy soon",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TEXT_MESSAGE:
            let newPost = {
                id:3,
                message: state.textAreaText,
              }
              state.msg.push(newPost)
              state.textAreaText = ""
              return state

        case UPDATE_TEXT_MESSAGE:
            state.textAreaText = action.newText
            return state

        default:
                return state
      }
    }


    export let addPostMessage = () => {
        return {
          type: ADD_TEXT_MESSAGE
        }
      }
      
      export let updateTextMessage = (text) => {
        return {
          type: UPDATE_TEXT_MESSAGE, newText: text
        }
       }

   export default dialogsReducer