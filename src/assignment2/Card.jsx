function Card({ title, description, image, children }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}

      <h2>{title}</h2>

      <p>{description}</p>

      {children}
    </div>
  );
}

export default Card;
