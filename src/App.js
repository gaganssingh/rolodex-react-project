import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList.component";
import SearchBox from "./components/search-box/SearchBox.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      images: [],
      searchTerm: "",
    };
  }

  async componentDidMount() {
    try {
      // Fetch users
      const userData = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const users = await userData.json();

      // Fetch images
      const imageData = await fetch(`https://randomuser.me/api/?results=10`);
      const data = await imageData.json();
      const images = data.results.map((d) => d.picture.large);

      // Set State
      this.setState((prevState) => ({ users, images }));
    } catch (error) {
      console.error(error);
    }
  }

  onSearchChange = (e) =>
    this.setState((prevState) => ({ searchTerm: e.target.value }));

  render() {
    const { users, searchTerm, images } = this.state;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="app-title">Contact List</h1>
        <SearchBox
          className="users-search-bar"
          placeholder="Search Users"
          onChangeHandler={this.onSearchChange}
        />
        <CardList users={filteredUsers} images={images} />
      </div>
    );
  }
}

export default App;
