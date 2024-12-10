import image1 from '../../assets/img/pexels-photo-12903299.jpeg'
import image2 from '../../assets/img/image2.png'
import image3 from '../../assets/img/image3.jpg'
import image4 from '../../assets/img/image4.png'
export default function About(){
    return(
        <section id="about">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="text-uppercase">Learning STeps</h2>
                <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <ul className="list-group timeline">
                    <li className="list-group-item">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" alt="Smiling man and woman exchanging a handshake in a modern office environment." src={image1} /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Basic Java and JavaScript</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" alt="teacher, presentation, education" src={image2} /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Intro Spring Boot FrameWork</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" alt="business, success, money" src={image3} /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Intro to React FrameWork</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" alt="coming soon, launching, launch" src={image4} /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Dev + Ops = Devops</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item timeline-inverted">
                        <div className="timeline-image">
                            <h4>Be Part<br /> Of Our<br /> Story!</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
    )
}