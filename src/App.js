import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchTerm: "",
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      this.setState((prevState) => ({ users: data }));
    } catch (error) {
      console.error(error);
    }
  }

  handleSearch = (e) =>
    this.setState((prevState) => ({ searchTerm: e.target.value }));

  render() {
    const { users, searchTerm } = this.state;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search Users"
          onChange={this.handleSearch}
        />
        {filteredUsers.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
