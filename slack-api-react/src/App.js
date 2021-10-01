
import './App.css';
import Login from './Components/Login/Login'
import MainDashboard from './Components/Main Dashboard/MainDashboard';
import Signup from './Components/Sign-Up/Signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainHooks from './Components/Main Dashboard/Hooks/MainHooks';
function App() {
  const {
    header,
    userList,

    channelList,

    openUserListModal,
    headerBarSearch,
    openUserDataModal,
    userDetails,
    // ? Change of State
    setHeader,
    setUserList,

    setChannelList,

    setOpenUserListModal,
    setHeaderBarSearch,
    setOpenUserDataModal,
    setUserDetails
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
              openUserListModal={openUserListModal}
              setOpenUserListModal={setOpenUserListModal}
              headerBarSearch={headerBarSearch}
              setHeaderBarSearch={setHeaderBarSearch}
              setOpenUserDataModal={setOpenUserDataModal}
              openUserDataModal={openUserDataModal}
              userDetails={userDetails}
              setUserDetails={setUserDetails}
            />
          </Route>
        </Switch>
      </div>
    </Router>
    // <TotalUserListModal />
  );
}

export default App;
