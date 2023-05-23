import React, { useEffect, useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import SignIn from './components/SignIn';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Navigate } from 'react-router-dom'
import useUserActions from './hooks/useUserActions';
import SignUp from './components/SignUp';
import { Request } from './components/Request';
import CreatePost from './components/CreatePost/CreatePost';
import PageWasNotFound from './components/PageWasNotFound';
import { ChatTest } from './components/Chat/ChatTest';
import io from 'socket.io-client'
import ScrollSetup from './components/ScrollSetup';
import Analytics from './components/Analytics/Analytics';
import AnalyticsPost from './components/Analytics/AnalyticsPost';
import history from './history';
import EditProfile from './components/Profile/EditProfile';
import AdminPanel from './components/AdminPanel/AdminPanel';

function App() {
  const [socket, setSocket]: any = useState()
  const { loading, user } = useTypedSelector(state => state.user)
  const { userData } = useUserActions()

  useEffect(() => {
    setSocket(io("http://localhost:9000", { reconnectionDelayMax: 10000,secure: false, transports: ['websocket', 'polling'],}))

    let login = JSON.parse(localStorage.getItem('user') || '{}')
    if(login[0] !== undefined && Object.keys(user).length > 0){
      userData(login[0].username, login[0].password)
    }
  }, [])

  useEffect(() => {
    socket?.on('receive_message_notification', (data: any) => {
      console.log(data)
   })
  }, [socket])

  const ProtectedComponent = () => {
    if (Object.keys(user).length === 0)
      return <Navigate to='/signin' />
    return <PostList socket={socket} byWhat={{type: 'DEFAULT'}}></PostList>
  }

  const ProtectedSign = () => {
    if (Object.keys(user).length !== 0)
      return <Navigate to='/' />
    return <SignIn></SignIn>
  }

  if (loading) {
    return <h1>Loading App</h1>
  }

  function setAtTop(atTop: boolean) {
    console.log(atTop)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ProtectedComponent />}></Route>
          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path='/analytics' element={<Analytics />}></Route>
          <Route path='/analytics/posts/:id' element={<AnalyticsPost />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
          <Route path='/edit/:id' element={<CreatePost />}></Route>
          <Route path='/editprofile' element={<EditProfile />}></Route>
          <Route path='/category/:id' element={<Profile />}></Route>
          <Route path='/content/:id' element={<PostList byWhat={{type: 'BY_POST_ID'}} />}></Route>
          <Route path='/search/:name' element={<PostList byWhat={{type: 'BY_DESCRIPTION'}} />}></Route>
          <Route path='/createpost' element={<CreatePost />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/signin' element={<ProtectedSign />}></Route>
          <Route path='/chat' element={<ChatTest socket={socket} />}></Route>
          <Route path='/request' element={<Request />}></Route>
          <Route path='/scroll' element={<ScrollSetup setAtTop={setAtTop} />}></Route>
          <Route path='*' element={<PageWasNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
