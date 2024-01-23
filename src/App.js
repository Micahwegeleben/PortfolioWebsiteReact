import './App.css';
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Originals/individual-styles.css';
import './Originals/nav.css';
import startGradient from './background.js';




function App() {
    React.useEffect(() => {
        startGradient()
    }, [])

  return (
      <MainContent />
  );
}


function NavBar() {
    return <nav className="navbar navbar-expand-sm navbar-dark" >
    <a href="../home/home.html" className="navbar-brand mb-0 h1 logo">
        <img className="d-inline-block align-top" src="../images/jomimi.png" wdith="60" height="30" />
        JOMIMI
    </a>
    <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="../home/home.html" className="nav-link">
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a href="../group-portfolio/group.html" className="nav-link">
                    Group
                </a>
            </li>
            <li className="nav-item dropdown">
                <a href="../individual-portfolios/individual.html" className="nav-link dropdown-toggle active"
                    id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Portfolios
                </a>
                <ul className="dropdown-menu" //style="background: rgba(105, 105, 166, 0.964)"
                    aria-labelledby="navbarDropdown">
                    <li><a href="../individual-portfolios/individual-joshua.html" className="dropdown-item">Joshua
                        </a>
                    </li>
                    <li><a href="../individual-portfolios/individual-micah.html" className="dropdown-item active">Micah
                        </a>
                    </li>
                    <li><a href="../individual-portfolios/individual-mike.html" className="dropdown-item">Michael
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
}

function MainContent() {
    return <>
    <div id="gradient"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <div className="container">
        <NavBar />
    </div>
    <header>
        <img src="../Images/portfolio-pic-micah.jpeg" alt="A picture of micah."/>
        <h1>Micah Wegeleben</h1>
    </header>
    <div className="content">
        <a href="https://github.com/Micahwegeleben" target="_blank" className ="giticon">
            <i className="fa-brands fa-github fa-2x" //style="color: #fc8805;"
            ></i>
        </a>
        <div className="section">
            <h2>About Me</h2>
            <p>•I have been going to Olympic College for 6 years.
            </p>
        </div>
        <div className="section">
            <h2>Projects</h2>
            <p><a href="micah/tictactoe.html" className="">•Tic Tac Toe</a>
            </p>
        </div>
        <div className="section">
            <h2>Experience</h2>
            <p>•Olympic College IT Help desk (2023-Present)
            </p>
        </div>
    </div>
    <Footer />
</>
}

function Footer() { 
    return <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                &copy; JOMIMI
            </div>
            <div className="col-md-6 text-end">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy Policy</a> | <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>
}
export default App;
