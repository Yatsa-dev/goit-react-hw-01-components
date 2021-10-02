// import "./App.css";
import Profile from './components/task-1/Profile';
import Statistics from './components/task-2/Statistics';
import user from './API/user.json';
import statisticalData from './API/statistical-data.json';
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
    </div>
  );
}

export default App;
