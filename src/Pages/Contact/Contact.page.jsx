import mapImage from '../../assets/img/map-image.png'
export default function Contact(){
    return (
        <section id="contact" style={{
            backgroundImage : `url(${mapImage})`
        }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-uppercase section-heading">Contact Us</h2>
                    <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form id="contactForm" name="contactForm">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3"><input className="form-control" type="text" id="name" placeholder="Your Name *" required="" /><small className="form-text text-danger flex-grow-1 lead" /></div>
                                <div className="form-group mb-3"><input className="form-control" type="email" id="email" placeholder="Your Email *" required="" /><small className="form-text text-danger lead" /></div>
                                <div className="form-group mb-3"><input className="form-control" type="tel" placeholder="Your Phone *" required="" /><small className="form-text text-danger lead" /></div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3"><textarea
                                    className="form-control"
                                    id="message"
                                    placeholder="Your Message *"
                                    required="" /><small className="form-text text-danger lead" /></div>
                            </div>
                            <div className="w-100" />
                            <div className="col-lg-12 text-center">
                                <div id="success" /><button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
} 