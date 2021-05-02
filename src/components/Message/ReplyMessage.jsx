import "./message-styles.css";
import { Avatar } from "../";

export const ReplyMessage = ({ author, message }) => {
  return (
    <div className={`message-width`}>
      <article className={`message-container`}>
        <div className="author-picture">
          <Avatar src={`https://picsum.photos/seed/picsum/200`} size={`m`} />
        </div>

        <div className="message-details">
          <p className="author-name">{author}</p>
          <p className="message">{"Replying to this message"}</p>
        </div>
      </article>
      <article className={`message-container`}>
        <div className="author-picture">
          <Avatar src={`https://picsum.photos/seed/picsum/200`} size={`m`} />
        </div>

        <div className="message-details">
          <p className="author-name">{author}</p>
          <p className="message">{message}</p>
        </div>
      </article>
    </div>
  );
};
