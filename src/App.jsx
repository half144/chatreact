import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";
import Chat from './pages/Chat/Chat'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import { useAuthetication } from './hooks/useAuthentication'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import Home from './pages/Home/Home'

const override = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

function App() {
  const { auth } = useAuthetication()
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      setLoading(false)
    } else {
      setUser(null)
      setLoading(false)
    }
  })
  if (loading) {
    return (
      <BeatLoader color="blue" cssOverride={override} />
    )
  }
  return (
    <AuthProvider value={{ user, loading }}>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <div className="container">
            <Routes>
              <Route path='/' element={user ? <Home /> : <Navigate to="login" />} />
              <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
              <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />
              <Route path='/chat/:uid' element={user ? <Chat /> : <Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
