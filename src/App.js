import { useEffect, useState } from "react";
import CardList from "./components/card-list/CardList.component";
import SearchBox from "./components/search-box/SearchBox.component";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      // Fetch users
      const userData = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const users = await userData.json();
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchImages = async () => {
    // Fetch images
    const imageData = await fetch(`https://randomuser.me/api/?results=10`);
    const data = await imageData.json();
    const images = data.results.map((d) => d.picture.large);
    setImages(images);
  };

  useEffect(() => {
    setLoading(true);
    fetchUsers();
    fetchImages();
    setLoading(false);
  }, []);

  const onSearchChange = (e) => setSearchTerm(e.target.value.trim());

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="app-title">Contact List</h1>
      <SearchBox
        className="users-search-bar"
        placeholder="Search Users"
        onChangeHandler={onSearchChange}
      />
      {loading && <div class="loader">Loading...</div>}
      <CardList users={filteredUsers} images={images} />
    </div>
  );
};

export default App;
