
import React from 'react'
import MyNavbar from './components/my-navbar/MyNavbar';
import MyCarousel from "./components/my-carousel/MyCarousel";
import MessageTitle from './components/title-message/titleMessage'

function App() {
  return (
    <div>
        <MyNavbar />
        <MyCarousel />
        <MessageTitle />
    </div>
  );
}

export default App;
