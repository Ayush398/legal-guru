import './Home.css';
import background  from './legalservices.jpg';

function Landingpage() {
  return (
    <div className="landingpage">
        <img src = { background } alt = "not found"/>
        <div className="landingpage-text">
            <p>Lorem ipsum dolor sit amet</p>
        </div>
    </div>
  );
}

export default Landingpage;