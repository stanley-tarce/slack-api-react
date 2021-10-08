
import './App.css';
import Login from './Components/Login/Login'
import MainDashboard from './Components/Main Dashboard/MainDashboard';
import Signup from './Components/Sign-Up/Signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainHooks from './Components/Main Dashboard/Hooks/MainHooks';
import ErrorHandlingContainer from './Components/Main Dashboard/Modals/ErrorHandlingContainer/ErrorHandlingContainer';
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

    openNewChannelModal,
    openNewChannelLists,
    toast,
    feedback,
    outcome,
    openChannelListMembers,
    channelListSearch,
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
    setUserData,
    setOpenNewChannelLists,

    newChannelListSearch,
    setNewChannelListSearch,

    setOpenNewChannelModal,
    setToast,
    setFeedback,
    setOutcome,
    setOpenChannelListMembers,
    setChannelListSearch
  } = MainHooks()

  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login
                header={header}
                setHeader={setHeader}
                setToast={setToast}
                setFeedback={setFeedback}
                setOutcome={setOutcome}
                toast={toast}
              />

            </Route>
            <Route path="/signup">
              <Signup
                setToast={setToast}
                setOutcome={setOutcome}
                toast={toast}
                setFeedback={setFeedback}
              />
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
                setOpenLogoutModal={setOpenLogoutModal}
                openLogoutModal={openLogoutModal}
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
                newChannelListSearch={newChannelListSearch}
                setNewChannelListSearch={setNewChannelListSearch}
                setToast={setToast}
                setFeedback={setFeedback}
                setOutcome={setOutcome}
                openChannelListMembers={openChannelListMembers}
                setOpenChannelListMembers={setOpenChannelListMembers}
                channelListSearch={channelListSearch}
                setChannelListSearch={setChannelListSearch}
              />
            </Route>
          </Switch>
        </div>
      </Router>
      {toast && <ErrorHandlingContainer
        feedback={feedback}
        outcome={outcome}
        setFeedback={setFeedback} />}
    </>
  );
}

export default App;
