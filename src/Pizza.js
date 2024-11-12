function Pizza({ pizzaName, ingredients, pizzaPhoto, price, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={pizzaPhoto} alt="" />
      <div className="pizza">
        <h3>{pizzaName}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </li>
  );
}

export default Pizza;
