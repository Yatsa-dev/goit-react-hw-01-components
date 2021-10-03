// import "./App.css";
import Profile from './components/task-1/Profile';
import Statistics from './components/task-2/Statistics';
import FriendList from './components/task-3/FriendList';
import TransactionHistory from './components/task-4/TransactionHistory';

import user from './API/user.json';
import statisticalData from './API/statistical-data.json';
import friends from './API/friends.json';
import transactions from './API/transactions.json';

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
