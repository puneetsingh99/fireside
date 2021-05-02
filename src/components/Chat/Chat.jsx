import "./chat-styles.css";
import { Message } from "../";
import { ReplyMessage } from "../Message/ReplyMessage";

export const Chat = () => {
  return (
    <div className={`chat`}>
      <div className={`chat-window`}>
        <ul className={`chat-messages`}>
          <li>
            <Message author={`Puneet`} message={`How are you? consectetur`} />
          </li>
          <li>
            <Message
              author={`Puneet`}
              message={`How are you?Lorem ipsum dolor sit amet consectetur sit amet consectetursit amet consectetursit amet consectetur`}
            />
          </li>
          <li>
            <ReplyMessage
              author={`Puneet`}
              message={`amet consectetursit amet consectetur`}
            />
          </li>
          <li>
            <Message author={`Puneet`} message={`amet consectetursit `} />
          </li>
          <li>
            <Message author={`Puneet`} message={`amet consectetursit amet`} />
          </li>
          <li>
            <Message author={`Puneet`} message={`amet amet consectetur`} />
          </li>
          <li>
            <Message
              author={`Puneet`}
              message={`amet consectetursit amet consectetur`}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
