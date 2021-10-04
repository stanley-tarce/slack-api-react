
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
    userMessageList,
    channelList,

    openUserListModal,
    headerBarSearch,
    openUserDataModal,
    userDetails,
    openChannelListModal,
    channelData,
    userData,


    mode,
    createMessageContainer,
    message,

    openNewChannelModal,
    openNewChannelLists,
    // ? Change of State
    setHeader,
    setUserList,

    setChannelList,

    setOpenUserListModal,
    setHeaderBarSearch,
    setOpenUserDataModal,
    setUserDetails,
    setOpenChannelListModal,
    setChannelData,
    setCreateMessageContainer,
    setMode,
    setMessage,
    redirectToChannel,
    setRedirectToChannel,
    setUserMessageList,
    setUserData,
    setOpenNewChannelLists,

    setOpenNewChannelModal
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
              openChannelListModal={openChannelListModal}
              setOpenChannelListModal={setOpenChannelListModal}
              channelData={channelData}
              setChannelData={setChannelData}
              mode={mode}
              createMessageContainer={createMessageContainer}
              setCreateMessageContainer={setCreateMessageContainer}
              setMode={setMode}
              message={message}
              setMessage={setMessage}
              redirectToChannel={redirectToChannel}
              setRedirectToChannel={setRedirectToChannel}
              userMessageList={userMessageList}
              setUserMessageList={setUserMessageList}
              setUserData={setUserData}
              userData={userData}
              openNewChannelModal={openNewChannelModal}
              setOpenNewChannelModal={setOpenNewChannelModal}
              openNewChannelLists={openNewChannelLists}
              setOpenNewChannelLists={setOpenNewChannelLists}
            />
          </Route>
        </Switch>
      </div>
    </Router>
    // <TitleBarUser />
  );
}

export default App;
