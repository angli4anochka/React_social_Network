import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "How are you?", likesCount: 0 },
        { id: 2, message: " my first postIts", likesCount: 12 },
        { id: 3, message: "I did it!", likesCount: 33 },
      ],
      newPostText: "Why React is so bad?",
    },
  
    messagesPage: {
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
    },

  
    friends: [
      { name: "Andrew", id: 1 },
      { name: "Sasha", id: 2 },
      { name: "Sveta", id: 3 },
    ],
  },
  _callSubscriber() {
    console.log("state was changed")
  },

  getState() {
    return this._state
  },


dispatch (action) {
   this._state.profilePage = profileReducer(this._state.profilePage, action)
   this._state.dialogsData = dialogsReducer(this._state.messagesPage, action )
   this._callSubscriber(this._state)
},



subscribe (observer) {
  this._callSubscriber = observer
},
}


window.store = store;
export default store;
