
import './App.css';
import Login from './Components/Login/Login'
import MainDashboard from './Components/Main Dashboard/MainDashboard';
import Signup from './Components/Sign-Up/Signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainHooks from './Components/Main Dashboard/Hooks/MainHooks';
import Logoutmodal from './Components/LogOut/Logoutmodal';



function App() {
  const {
    header,
    userList,
    userMessageList,
    channelList,

    openUserListModal,
    headerBarSearch,
    openUserDataModal,
    userDetails,
    openChannelListModal,
    channelData,
    userData,
    openLogoutModal,


    mode,
    createMessageContainer,
    message,

    // ? Change of State
    setHeader,
    setUserList,

    setChannelList,

    setOpenUserListModal,
    setHeaderBarSearch,
    setOpenUserDataModal,
    setUserDetails,
    setOpenChannelListModal,
    setOpenLogoutModal,
    setChannelData,
    setCreateMessageContainer,
    setMode,
    setMessage,
    redirectToChannel,
    setRedirectToChannel,
    setUserMessageList,
    setUserData

  } = MainHooks()

  return (
    
    <Logoutmodal />
  );
}

export default App;
