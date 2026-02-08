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
          <h6>
            Call us today 777 000 0000 or <a href="">Email Us</a>
          </h6>
        </div>
        <div className="pup">
          <a href="">BOOK A CONSULTATION</a>
        </div>
      </div>
      <div className="third">
        <div className="sofa">
          <img src="/images/pillow.webp" alt="none" />
        </div>
        <div className="text">
          <h2>Vibrant Patterns</h2>
          <p>
            Elit ut aliquam purus sit amet luctus venenatis. Ridiculus mus
            mauris vitae ultricies leo integer malesuada. Massa enim nec dui
            nunc mattis enim. Sagittis vitae et leo duis ut. Lacus suspendisse
            faucibus interdum.
          </p>
          <a href="">Learn More</a>
        </div>
        <div className="circle"></div>
        <div className="rectangle"></div>
      </div>
      <div className="purple new">
        <div className="what">
          <h2>What I Do.</h2>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus .
            Phasellus sed efficitur dolor, et ultricies sapien.
          </p>
        </div>
        <div className="interior">
          <h4>01. Interior</h4>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="design">
          <h4>02. Design</h4>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
        <div className="fur">
          <h4>03. Furniture</h4>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
      </div>
      <section className="fourth">
        <div className="fcontainer">
          <h2>Construction and renovation projects</h2>
          <p>
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <a href="">Learn More</a>
        </div>
      </section>
    </>
  );
}

export default App;
