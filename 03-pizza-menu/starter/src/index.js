import React, { StrictMode } from "react";
import "./index.css";

import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];

  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2> Our Menu </h2>

      {/* <Pizza
        name={"Pizza spinaci"}
        ingredients={"Tomato, mozarella, spinach, and ricotta cheese"}
        photoName={"pizzas/spinaci.jpg"}
        price={10}
      />

      <Pizza
        name={"Pizza Funghi"}
        ingredients={"Tomate, mushrooms"}
        price={12}
        photoName={"pizzas/funghi.jpg"}
      /> */}
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to shoose from. All
            from our stone oven, all organic, all deliciuos.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObject={pizza} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        "We're still working on our menu."
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  //   if (pizzaObject.soldOut) return null;

  return (
    <li className={pizzaObject.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>

        <span>
          {pizzaObject.soldOut ? "Sold Out" : "$" + pizzaObject.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We're currently open");
  //   } else {
  //     alert("Sorry we're closed ");
  //   }

  // isOpen && <p>Open</p> short circuit and if the first is true then render the next

  if (!openHour) {
    return (
      <p>
        We're happy to welcome you between {openHour} and {closeHour}
      </p>
    );
  }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour} and {closeHour}
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour} Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
