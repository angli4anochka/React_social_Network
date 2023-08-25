import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = (props) => {
  return (
    <Router>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className = 'app-wrapper-content'>
    
      <Routes>
      <Route exact path="/Dialogs" element={<Dialogs dialog={props.dialogsData}  messages ={props.msg} />}/>
      <Route exact path="/Profile" element={<Profile posts = {props.posts} />} />
    </Routes>
    
      </div>
    </div>
    </Router>
  );
}


export default App;
