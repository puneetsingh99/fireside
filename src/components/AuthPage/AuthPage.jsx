import "./auth-page-styles.css";
import { Navbar, Footer } from "../";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const AuthPage = () => {
  return (
    <div className={`auth-page`}>
      <Navbar showSearchbar={false} showProfile={false} />
      <div className={`auth-container`}>
        <Login />
        {/* <Signup /> */}
      </div>
      <Footer />
    </div>
  );
};
