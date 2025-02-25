// import React from 'react';
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList";
import userData from "./userData.json";
import friends from "./friends.json";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="profile">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div className="friend-list">
        <FriendList friends={friends} />
      </div>
    </div>
  );
};

export default App;
