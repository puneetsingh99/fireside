import "./broadcast-styles.css";
import { Avatar } from "../";

export const BroadcastInfo = () => {
  return (
    <article className={`broadcast-info`}>
      <div className={`flex`}>
        <p className={`broadcast-name`}>{`Any random broadcast name`}</p>
        <p className={`total-attendees`}>
          <span className={`live-indicator`}></span>
          <span className={`number-of-attendees`}>{`134`}</span>
        </p>
      </div>
      <div className={`broadcast-participants`}>
        <div className="profile-img">
          <Avatar
            src={`https://picsum.photos/id/243/200`}
            size={`sm`}
            variant={``}
          />
          <Avatar
            src={`https://picsum.photos/id/237/200`}
            size={`sm`}
            variant={``}
          />
          <Avatar
            src={`https://picsum.photos/id/234/200`}
            size={`sm`}
            variant={``}
          />
        </div>
        <div className={`broadcast-participants__name`}>
          <p>{`Puneet, `}</p>
          <p>{`Pratik, `}</p>
          <p>{`Neelam, `}</p>
        </div>
      </div>
    </article>
  );
};
