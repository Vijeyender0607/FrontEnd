import prasath from '../../assets/img/team/prasath.png'
import yogesh from '../../assets/img/team/yogesh.png'
import vijey from '../../assets/img/team/vijey.png'
export default function Team(){
    return (
        <section id="team">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="team-member"><img className="rounded-circle mx-auto" src={prasath} />
                        <h4>Prasath</h4>
                        <p className="text-muted">Developer</p>
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member"><img className="rounded-circle mx-auto" src={yogesh} />
                        <h4>Yogesh</h4>
                        <p className="text-muted">Developer</p>
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member"><img className="rounded-circle mx-auto" src={vijey} />
                        <h4>Vijeyender</h4>
                        <p className="text-muted">Developer</p>
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}