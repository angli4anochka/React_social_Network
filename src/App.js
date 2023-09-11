import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Friends from'./components/Friends/Friends';
import Profile from './components/Profile/Profile';
import { addPost, updateNewPostText, addTextMessage, updateTextMessage} from "./redux/state";



const App = (props) => {
  return (
    <Router>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className = 'app-wrapper-content'>
    
      <Routes>
      <Route exact path="/Dialogs" element={<Dialogs state = {props.state.messagesPage} dispatch = {props.dispatch} />}/>
      <Route exact path="/Profile" element={<Profile state = {props.state.profilePage}
      dispatch = {props.dispatch}/>} />
      <Route exact path="/Friends" element={<Friends state = {props.state.friends} />} />
    </Routes>
      </div>
    </div>
    </Router >
  );
}


export default App;
