import './App.css'
import Clock from './clock/Clock'
import CommentList from './comment/CommentList'
import Login from './login/Login'

function App() {
  return (
    <div className="App">
      <Clock />
      <Login />
      <CommentList />
    </div>
  )
}

export default App
