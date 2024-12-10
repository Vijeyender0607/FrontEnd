import { useNavigate } from "react-router-dom";

export function Header(props) {
  const navigate = useNavigate();
  return <>
   <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark" id="mainNav">
        <div className="container"><a className="navbar-brand" href="#page-top">Max IT Solutions</a><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto text-uppercase">
                    <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                    <li className="nav-item" />
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
     </>;
}
