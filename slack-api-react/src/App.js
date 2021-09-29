
import './App.css';
import UserListModal from './Components/Main Dashboard/Modals/UserListModal/UserListModal'
import InviteUserChannel from './Components/Main Dashboard/Modals/InviteUserChannel/InviteUserChannel';
import Login from './Components/Login/Login'
import MessageInput from './Components/Main Dashboard/MessageInput/MessageInput';
import MessageContainer from './Components/Main Dashboard/MessageContainer/MessageContainer';
import MainBody from './Components/Main Dashboard/MainBody/MainBody';
import MainDashboard from './Components/Main Dashboard/MainDashboard';

function App() {
  return (
    <div className="App">
      <MainDashboard />
    </div>
  );
}

export default App;
