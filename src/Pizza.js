function Pizza({ pizzaName, ingredients, pizzaPhoto, price }) {
  return (
    <ul className="pizzas">
      <li className="pizza">
        <img src={pizzaPhoto} alt="" />
        <div className="pizza">
          <h3>{pizzaName}</h3>
          <p>{ingredients}</p>
          <span>{price}</span>
        </div>
      </li>
    </ul>
  );
}

export default Pizza;
