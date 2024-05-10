  import logo from './logo.svg';
  import './App.css';
  import { Route ,Routes } from 'react-router-dom';
  import Home  from './pages/Home.jsx'
  import Login from './pages/Login.jsx';
  import Register from './pages/Register.jsx';
  import PostDetails from './pages/PostDetails.jsx'
  import Blogs from './pages/Blogs.jsx'
  import CreatePost from './pages/CreatePost.jsx'
  import Editpost from './pages/Editpost.jsx'

  function App() {
    return (
      <>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/write' element={<CreatePost/>}></Route>
        <Route exact path='/Post/post/:id' element={<PostDetails/>}></Route>
        <Route exact path='/edit/:id' element={<Editpost/>}></Route>
        <Route exact path='/blogs/:id' element={<Blogs/>}></Route>

        
      </Routes>
      </>
    );
  }

  export default App;
