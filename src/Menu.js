import Pizza from "./Pizza";
import pizzaData from "./data";
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dished to choose from, all from
        our stone oven, all organic, all delicious
      </p>
      <ul className="pizzas">
        {pizzaData.map((data, key) => (
          <Pizza
            pizzaName={data.name}
            ingredients={data.ingredients}
            pizzaPhoto={data.photoName}
            price={data.price}
            soldOut={data.soldOut}
          />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
