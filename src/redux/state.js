let state = {
    profilePage: {
      posts: [
        { id: 1, message: "How are you?", likesCount: 0 },
        { id: 2, message: " my first postIts", likesCount: 12 },
        { id: 3, message: "I did it!", likesCount: 33 },
      ],
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
    },
  
    friends: [
      { name: "Andrew", id: 1 },
      { name: "Sasha", id: 2 },
      { name: "Sveta", id: 3 },
    ],
  };
  
  export default state;