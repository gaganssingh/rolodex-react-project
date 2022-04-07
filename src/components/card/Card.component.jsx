import { Component } from "react";
import "./Card.styles.css";

export class Card extends Component {
  render() {
    const { user, imgSrc } = this.props;
    return (
      <div className="card-container">
        <img src={imgSrc} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  }
}

export default Card;
