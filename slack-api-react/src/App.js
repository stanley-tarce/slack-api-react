
import './App.css';
import Login from './Components/Login/Login'
import MainDashboard from './Components/Main Dashboard/MainDashboard';
import Signup from './Components/Sign-Up/Signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainHooks from './Components/Main Dashboard/Hooks/MainHooks';
function App() {
  const {
    userClient,
    userExpiry,
    userUid,
    userAccessToken,
    header,
    userList,

    channelList,
    // ? Change of State
    setAccessToken,
    setClient,
    setExpiry,
    setUid,
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
              setAccessToken={setAccessToken}
              setClient={setClient}
              setUid={setUid}
              setExpiry={setExpiry} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/main">
            <MainDashboard
              userClient={userClient}
              userExpiry={userExpiry}
              userUid={userUid}
              userAccessToken={userAccessToken}
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
