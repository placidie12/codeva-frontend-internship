import axios from 'axios';
import {useState}from 'react';


function App() {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchUser = async () => {
    if (!username) {
      alert("Please enter a username");
      return;

    }
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      setError("User not found");
    } finally {
      setLoading(false);
    }
  };
  return (

  <div>
      <h1>GitHub User Finder</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={searchUser}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
    <div>
          <img src={user.avatar_url} alt={user.name} width="150" />

         <h2>{user.name}</h2>
         <p>{user.bio}</p>

         <p>Followers: {user.followers}</p>
         <p>Following: {user.following}</p>

          <p>Public Repositories: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            Visit Github Profile
          </a>

          

    </div>
      )}
  </div>
  
);
}

export default App;
