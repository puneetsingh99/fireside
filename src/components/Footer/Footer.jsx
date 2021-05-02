import { GithubSvg, InstagramSvg, TwitterSvg, LinkedinSvg } from "../../assets";
import "./footer-styles.css";

export const Footer = () => {
  return (
    <div className={`footer`}>
      <a href="https://twitter.com/puneetsingh1999">
        <TwitterSvg />
      </a>
      <a href={"https://www.linkedin.com/in/puneet-singh-7b6990199/"}>
        <LinkedinSvg />
      </a>
      <a href={"https://github.com/puneetsingh99/space-ui/"}>
        <GithubSvg />
      </a>
      <a href={"https://www.instagram.com/thelastspacetraveller/"}>
        <InstagramSvg />
      </a>
    </div>
  );
};
