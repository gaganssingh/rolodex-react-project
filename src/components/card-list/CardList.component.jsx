import Card from "../card/Card.component";
import "./CardList.styles.css";

const CardList = ({ images, users }) => {
  return (
    <div className="card-list">
      {users.map((user) => (
        <Card key={user.id} user={user} imgSrc={images[user.id - 1]} />
      ))}
    </div>
  );
};

export default CardList;
