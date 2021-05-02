import "./profile-styles.css";
import { Avatar } from "../";
import profilepic from "../../assets/avatars/profile.jpg";

export const Profile = () => {
  return <Avatar size={`l`} src={profilepic} variant={"typing"} />;
};
