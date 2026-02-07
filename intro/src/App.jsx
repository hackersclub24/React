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
          <div className="box1 box">
            <img className="boxLogo1" src="/images/download.png" alt="" />
            <h2>Graphic Design</h2>
            <p>More</p>
          </div>
          <div className="box2 box">
            <img className="boxLogo1" src="/images/box2img.png" alt="" />
            <h2>Web Design</h2>
            <p>More</p>
          </div>
          <div className="box3 box">
            <img className="boxLogo1" src="/images/box3img.png" alt="" />
            <h2>software</h2>
            <p>More</p>
          </div>
          <div className="box4 box">
            <img className="boxLogo1" src="/images/box4img.png" alt="" />
            <h2>Application</h2>
            <p>More</p>
          </div>
        </section>
      </main>
      <section className="nextPage">
        <div className="content">
          <div className="2019 nextbox">
            <h1>2019</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="2020 nextbox">
            <h1>2020</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="2021 nextbox">
            <h1>2021</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="2022 nextbox">
            <h1>2022</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="women">
          <img src="/images/woman-new-min.png" alt="hi" />
        </div>
      </section>
      <div className="purple ">
        <div className="phone sec">
          <img src="/images/phone-vibrate-svgrepo-com.svg" alt="" />
        </div>
        <div className="contactUs ">
          <h3>Contact Us Today!</h3>
          <h6>Call us today 777 000 0000 or <a href="">Email Us</a></h6>
        </div>
        <div className="pup">
          <a href="">BOOK A CONSULTATION</a>
        </div>
      </div>
      <div className="third">
      </div>
    </>
  );
}

export default App;
