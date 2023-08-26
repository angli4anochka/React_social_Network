import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Friends from'./components/Friends/Friends';
import Profile from './components/Profile/Profile';

console.log()

const App = (props) => {
  return (
    <Router>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className = 'app-wrapper-content'>
    
      <Routes>
      <Route exact path="/Dialogs" element={<Dialogs state={props.state.messagesPage} />}/>
      <Route exact path="/Profile" element={<Profile state = {props.state.profilePage} />} />
      <Route exact path="/Friends" element={<Friends state = {props.state.friends} />} />
    </Routes>
      </div>
    </div>
    </Router>
  );
}


export default App;
