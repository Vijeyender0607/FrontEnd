import image1 from '../../assets/img/portfolio/1-thumbnail.jpg'
import image2 from '../../assets/img/portfolio/2-thumbnail.jpg'
import image3 from '../../assets/img/portfolio/3-thumbnail.jpg'
import image4 from '../../assets/img/portfolio/4-thumbnail.jpg'
import image5 from '../../assets/img/portfolio/5-thumbnail.jpg'
import image6 from '../../assets/img/portfolio/6-thumbnail.jpg'
export default function Portfolio(){
    return (
        <section  id="portfolio">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="text-uppercase section-heading">Portfolio</h2>
                <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal1" data-bs-toggle="modal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                    </div><img className="img-fluid" src={image1} />
                </a>
                <div className="portfolio-caption">
                    <h4>Mineral Water Supply Chennai</h4>
                    <p className="text-muted">Water</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal2" data-bs-toggle="modal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                    </div><img className="img-fluid" src={image2} />
                </a>
                <div className="portfolio-caption">
                    <h4>Max Crackers World Chennai</h4>
                    <p className="text-muted">Crackers</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal3" data-bs-toggle="modal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                    </div><img className="img-fluid" src={image3} />
                </a>
                <div className="portfolio-caption">
                    <h4>Max Finance Limited Chennai</h4>
                    <p className="text-muted">Finance</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal4" data-bs-toggle="modal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                    </div><img className="img-fluid" src={image4} />
                </a>
                <div className="portfolio-caption">
                    <h4>Max Super Market Chennai</h4>
                    <p className="text-muted">Shopping</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal5" data-bs-toggle="modal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                    </div><img className="img-fluid" src={image5} />
                </a>
                <div className="portfolio-caption">
                    <h4>Max IT Career Guidance Center Chennai</h4>
                    <p className="text-muted">IT Consultation</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal6" data-bs-toggle="modal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                    </div><img className="img-fluid" src={image6} />
                </a>
                <div className="portfolio-caption">
                    <h4>Max Sports League Chennai</h4>
                    <p className="text-muted">Sports</p>
                </div>
            </div>
        </div>
    </div>
</section>
    );
}