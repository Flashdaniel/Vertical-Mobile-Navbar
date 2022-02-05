import "./styles.css";

export default function App() {
  function handleClick(e) {
    const link = document.getElementById("myLinks");

    if (link.style.display === "block") {
      link.style.display = "none";
    } else {
      link.style.display = "block";
    }
  }

  return (
    <div className="mobile-container">
      <div className="topnav">
        <a href="#logo" className="active">
          Logo
        </a>
        <div id="myLinks">
          <a href="#home">Home</a>
          <a href="#home">About</a>
          <a href="#home">News</a>
          <a href="#home">Contact</a>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={handleClick}>
          <i class="fa fa-bars"></i>
        </a>
      </div>

      <div style={{ paddingLeft: "16px" }}>
        <h3>Vertical Mobile Navbar</h3>
        <p>
          This example demonstrates how a navigation menu on a mobile/smart
          phone could look like.
        </p>
        <p>
          Click on the hamburger menu (three bars) in the top right corner, to
          toggle the menu.
        </p>
      </div>
    </div>
  );
}
