import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-box">
      <div className="nav-bar">
        <div>
          <span>
            <img
              src={require("./image/logo.png")}
              width="200px"
              alt="emblem-logo"
              style={{padding:"3px",marginLeft:"50px"}}
            />
          </span>
        </div>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <span  className="nav-span">|</span>
            <Link to="/review">
              <li>Review</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="text-center bg-white" >
        <h1 className="heading">CoWin Registration Portal</h1>
     
       
      </div>
    </div>
  );
};
