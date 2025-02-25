import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

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
      <div className="transaction-history">
        <TransactionHistory items={transactions} />{" "}
        {/* Здесь передаем данные как пропс */}
      </div>
    </div>
  );
};

export default App;

