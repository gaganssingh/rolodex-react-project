import { Component } from "react";

export class CardList extends Component {
  render() {
    return (
      <>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))}
      </>
    );
  }
}

export default CardList;
