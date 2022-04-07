import "./Card.styles.css";

const Card = ({ user, imgSrc }) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Card;
