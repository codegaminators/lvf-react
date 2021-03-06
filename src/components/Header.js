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
          <li className="nav-item dropdown">
            <span className="nav-link get-involved ">
              Get Involved <i className="fas fa-chevron-down"></i>
            </span>

            <ul className="nav flex-column dropdown-menu ">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Join LVF
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Partnership
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Donation
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComp;
