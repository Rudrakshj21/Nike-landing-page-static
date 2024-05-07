function Navigation() {
  return (
    <nav>
      <div className="brand-wrapper">
        <img src="./images/brand_logo.png" alt="Nike" />
      </div>
      <div className="menu-wrapper">
        <ul className="menu">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      </div>
      <div className="login">
        <button>Login</button>
      </div>
    </nav>
  );
}
export default Navigation;
