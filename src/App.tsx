import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Navigate } from 'react-router-dom'
import useUserActions from './hooks/useUserActions';
import { userData } from './store/action-creator/user';
import SignUp from './components/SignUp';
import { Chat } from './components/Chat/Chat';
import { Request } from './components/Request';
import CreatePost from './components/CreatePost/CreatePost';

function App() {
  const { error, loading, user } = useTypedSelector(state => state.user)
  const { userData } = useUserActions()

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem('user') || '{}')
    if(login[0] !== undefined && Object.keys(user).length > 0){
      userData(login[0].username, login[0].password)
    }
  }, [])

  const ProtectedComponent = () => {
    if (Object.keys(user).length === 0)
      return <Navigate to='/signin' />
    return <PostList byWhat={{type: 'DEFAULT'}}></PostList>
  }

  const ProtectedSign = () => {
    if (Object.keys(user).length !== 0)
      return <Navigate to='/' />
    return <SignIn></SignIn>
  }

  if (loading) {
    return <h1>Loading App</h1>
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ProtectedComponent></ProtectedComponent>}></Route>
          <Route path='/profile/:id' element={<Profile></Profile>}></Route>
          <Route path='/category/:id' element={<Profile></Profile>}></Route>
          <Route path='/content/:id' element={<PostList byWhat={{type: 'BY_POST_ID'}}></PostList>}></Route>
          <Route path='/search/:name' element={<PostList byWhat={{type: 'BY_DESCRIPTION'}}></PostList>}></Route>
          <Route path='/createpost' element={<CreatePost></CreatePost>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/signin' element={<ProtectedSign></ProtectedSign>}></Route>
          <Route path='/chat' element={<Chat></Chat>}></Route>
          <Route path='/request' element={<Request></Request>}></Route>
          <Route path='*' element={<PostList></PostList>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
