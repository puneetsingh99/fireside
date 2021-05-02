import { LogoSvg } from "../../assets";
import "./navbar-styles.css";
import { Searchbar, Profile } from "../";

export const Navbar = ({ showSearchbar, showProfile }) => {
  return (
    <div className={`navbar-container`}>
      <div className={`navbar-items`}>
        <div className={`branding`}>
          <p className={`brand-logo`}>
            <LogoSvg />
          </p>
          <h1 className={`brand-name`}>{`Fireside`}</h1>
        </div>
        <div>{showSearchbar && <Searchbar />}</div>
        <div className={`profile-container`}>{showProfile && <Profile />}</div>
      </div>
    </div>
  );
};
