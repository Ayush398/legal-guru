import './Home.css';
import ResponsiveAppBar from './navbar';
import Landingpage from './landingpage';
function Home() {
    return(
        <div className="Home">
            < ResponsiveAppBar/>
            < Landingpage />
        </div>
    ); 
}

export default Home;