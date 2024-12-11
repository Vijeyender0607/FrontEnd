import headerimage from '../../assets/img/header-bg.jpg';
import About from '../About/About.page';
import Contact from '../Contact/Contact.page';
import Portfolio from '../Portfolio/Portfolio.page';
import Services from '../Services/Services.page';
import Team from '../Team/Team.page';
export default function MaxHome(){
    return(
        <>
        <header className="masthead" style={{ backgroundImage :`url(${headerimage})` }}>
        <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in"><span>Welcome To Our Development Team</span></div>
                <div className="intro-heading text-uppercase"><span>It's Nice To Meet You</span></div><a className="btn btn-primary btn-xl text-uppercase" role="button" href="#services">Tell mE more</a>
            </div>
        </div>
    </header>
    <Services />
    <Portfolio />
    <About />
    <Team />
    <Contact />
    </>
    )
}