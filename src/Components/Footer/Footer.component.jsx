import { useNavigate } from "react-router-dom";

export default function Footer(){
    const navigate = useNavigate();
    return (
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4"><span className="copyright">Copyright&nbsp;© Max 2024</span></div>
                <div className="col-md-4">
                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li className="list-inline-item"><a href="" onClick={()=> navigate("/privacyPolicy")}>Privacy Policy and Terms of Use</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
}