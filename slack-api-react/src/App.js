
import './App.css';
import Login from './Components/Login/Login'
import MainDashboard from './Components/Main Dashboard/MainDashboard';
import Signup from './Components/Sign-Up/Signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainHooks from './Components/Main Dashboard/Hooks/MainHooks';
import TotalUserListModal from './Components/Main Dashboard/Modals/TotalUserListModal/TotalUserListModal';
function App() {
  const {
    header,
    userList,

    channelList,
    // ? Change of State
    setHeader,
    setUserList,

    setChannelList
  } = MainHooks()
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login
              header={header}
              setHeader={setHeader} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/main">
            <MainDashboard
              header={header}
              setHeader={setHeader}
              userList={userList}
              setUserList={setUserList}
              channelList={channelList}
              setChannelList={setChannelList}
            />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
