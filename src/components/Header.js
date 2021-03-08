const HeaderComp = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="navbrand d-flex">
          <img src="/images/logo-hand.svg" alt="" />
          <div className="logo-text">
            <div className="top">
              <span className="text-secondary">LOVE</span>
              <span className="text-info ml-1">VISION</span>
            </div>
            <div className="bottom text-muted">FOUNDATION</div>
          </div>
        </a>

        <ul className="nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#mission" className="nav-link">
              Mission
            </a>
          </li>
          <li className="nav-item">
            <span className="nav-link get-involved">Get Involved V</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComp;
