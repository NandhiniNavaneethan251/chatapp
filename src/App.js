import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {

  if(!localStorage.getItem('Username')) return <LoginForm/>

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="167bf6e6-b12c-44f4-83a3-ee9882617742"
        userName={localStorage.getItem('Username')}
        userSecret={localStorage.getItem('Password')}
        renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        onNewMessage = {()=>new Audio('https://chat-engine-assets.s3.amazon.aws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
