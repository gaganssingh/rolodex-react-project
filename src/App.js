import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList.component";
import SearchBox from "./components/search-box/SearchBox.component";

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

  onSearchChange = (e) =>
    this.setState((prevState) => ({ searchTerm: e.target.value }));

  render() {
    const { users, searchTerm } = this.state;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          className="search-bar"
          placeholder="Search Users"
          onChangeHandler={this.onSearchChange}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
