import './App.css';
import login from './component/login';
import username from './component/username';
import password from './component/password';
import SignIn from './SignIn';

function App() {
  return (
    <div className = "App">
        {/* <div> {login()} </div>
        <div> {username()} </div>
        <div> {password()} </div>
        <div> {button()} </div> */
        <div> {SignIn()} </div>}
        
      </div>
  );
}

export default App;