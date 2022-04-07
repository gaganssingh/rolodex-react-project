import { Component } from "react";
import Card from "../card/Card.component";
import "./CardList.styles.css";

export class CardList extends Component {
  render() {
    const { users, images } = this.props;

    return (
      <div className="card-list">
        {users.map((user) => (
          <Card key={user.id} user={user} imgSrc={images[user.id - 1]} />
        ))}
      </div>
    );
  }
}

export default CardList;
