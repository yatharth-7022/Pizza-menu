import Pizza from "./Pizza";
import pizzaData from "./data";
function Menu() {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <Pizza
        pizzaName="Pizza Spinaci"
        ingredients="Tomatoes,Jalapino,Mozarella"
        pizzaPhoto="pizzas\spinaci.jpg"
        price="10"
      />
      <Pizza
        pizzaName="Pizza Margherita"
        ingredients="Tomato and mozarella"
        pizzaPhoto="pizzas/margherita.jpg"
        price="10"
      />
      <Pizza
        pizzaName="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        pizzaPhoto="pizzas\focaccia.jpg"
        price={6}
      />
      <Pizza
        pizzaName="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        pizzaPhoto="pizzas/funghi.jpg"
        price={12}
      />
      <Pizza
        pizzaName="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        pizzaPhoto="pizzas/salamino.jpg"
        price={15}
      />
      <Pizza
        pizzaName="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        pizzaPhoto="pizzas/prosciutto.jpg"
        price={18}
      />
    </div>
  );
}

export default Menu;
