import "./message-styles.css";
import { Avatar } from "../";
import profilepic from "../../assets/avatars/profile.jpg";

export const Message = (props) => {
  const { message, author, isAReply, replyingTo } = props;

  return (
    <div className={`message-width`}>
      <article className={`message-container`}>
        <div className="author-picture">
          <Avatar src={profilepic} size={`m`} />
        </div>

        <div className="message-details">
          <p className="author-name">{author}</p>
          <p className="message">{message}</p>
        </div>
      </article>
    </div>
  );
};
