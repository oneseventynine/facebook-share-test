import logo from './logo.svg';
import './App.css';
import { FacebookShareButton } from 'react-share';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    let meta = document.createElement('meta');
    meta.setAttribute("property", "og:image");
    meta.content = "https://avatarin-web-data-avatarindash-dev.s3-ap-northeast-1.amazonaws.com/avatarin-files/images/cover/exp-cover_1609737216964.png";
    document.getElementsByTagName('head')[0].appendChild(meta);

    meta = document.createElement('meta');
    meta.setAttribute("property", "og:image:secure_url");
    meta.content = "https://avatarin-web-data-avatarindash-dev.s3-ap-northeast-1.amazonaws.com/avatarin-files/images/cover/exp-cover_1609737216964.png";
    document.getElementsByTagName('head')[0].appendChild(meta);
    
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FacebookShareButton url={window.location.href}  quote="hello there test share">
        <button
          style={{color: "red", height: "100px", fontSize: "4rem"}}
        >
          Click Me
        </button>
        </FacebookShareButton>
      </header>
    </div>
  );
}

export default App;
