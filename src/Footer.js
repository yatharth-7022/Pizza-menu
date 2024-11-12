function Footer() {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const openingHours = hours >= openHour && hours <= closeHour;
  return (
    <footer className="footer">
      {openingHours ? (
        <div className="order">
          <p>We are currently open :)</p>
          <button className="btn">Order online</button>
        </div>
      ) : (
        <p>We are open until 10 pm :( Come visit us then !</p>
      )}
    </footer>
  );
}

export default Footer;
