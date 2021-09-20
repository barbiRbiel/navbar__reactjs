import './NavBar.css'
import icon from '../img/logo.png';


function Navbar() {
    return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src = {icon} className="navbar--icon"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Mis Compras</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Carrito</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;