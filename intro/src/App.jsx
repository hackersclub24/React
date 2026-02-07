// import { ReactComponent as boxImage } from "public/images/download.png";
function App() {
  return (
    <>
    <main
      className="container"
      // style={{
      //   backgroundColor: "blue"

      // }}
    >
      <nav className="navbar">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="menubar">
          <img src="/menu.svg" alt="" />
        </div>
      </nav>
      <section className="hero">
        <div className="box1 box"><img  className = "boxLogo1" src="/images/download.png" alt="" />
        <h2>Graphic Design</h2>
        <p>More</p>
        </div>
        <div className="box2 box"></div>
        <div className="box3 box"></div>
        <div className="box4 box"></div>
      </section>

    </main>
    <section className="nextPage">

    </section>
    </>
  );
}

export default App;
