// import "./App.css";
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from 'components/Container/Container';

import user from './API/user.json';
import statisticalData from './API/statistical-data.json';
import friends from './API/friends.json';
import transactions from './API/transactions.json';

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
