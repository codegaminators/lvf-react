import HeaderComp from "./components/Header";

const App = () => {
  return (
    <div>
      <div className="banner" style={{ background: `url("/images/pic6.png")` }}>
        <div className="overlay">
          <div className="container">
            <HeaderComp />
            <div className="banner-wrapper">
              <div className="text-center">
                <h1>
                  WELCOME TO <br /> LOVE VISION FOUNDATION
                </h1>
                <button className="btn btn-grad mt-4">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
