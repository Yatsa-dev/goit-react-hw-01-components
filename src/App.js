// import "./App.css";
import Profile from './components/Profile';
import user from './API/user.json';
function App() {
  return (
    <div>
      <Profile
        image={user.avatar}
        title={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}

export default App;
