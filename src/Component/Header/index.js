import "./headerstyle.css";
import coin from "../../Assets/images/header/coin.jpg";
import diamond from "../../Assets/images/header/diamond.jpg";
import activity from "../../Assets/images/header/activity.jpg";
import tournament from "../../Assets/images/header/tournament.png";
import { MdShop } from "react-icons/md";
import { GiMechanicGarage } from "react-icons/gi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AiTwotoneSetting } from "react-icons/ai";
import Shop from "../Shop";

const Header = () => {
  return (
    <div className="header">
      <div className="coin-point nav-item">
        <img src={coin} />
        <p>10 0000</p>
      </div>
      <div className="diamond-point nav-item">
        <img src={diamond} />
        <p>199</p>
      </div>
      <div className="activity-point nav-item">
        <img src={activity} />
        <p>1000</p>
      </div>
      <Link to="/Shop">
        <div className="shop nav-item">
          <MdShop />
        </div>
      </Link>
      <Link to="/Garage">
        <div className="garage nav-item">
          <GiMechanicGarage />
        </div>
      </Link>
      <div className="tournament nav-item">
        <img src={tournament} />
      </div>
      <div className="setting nav-item">
        <AiTwotoneSetting />
      </div>
    </div>
  );
};

export default Header;
