import "../BroadcastAttendance/broadcast-attendance-styles.css";
import "./profile-styles.css";
import { Avatar } from "../";
import profilepic from "../../assets/avatars/profile.jpg";
import { SavedBroadcast } from "../Broadcast/SavedBroadcast";

export const ProfileDetails = () => {
  return (
    <section>
      <article className={`profile-detail`}>
        <div className={`profile-data`}>
          <Avatar size={`xl`} src={profilepic} variant={"typing"} />
          <div className={`user-details`}>
            <p className={`user-name`}>{`Puneet Singh`}</p>
            <div className="stats">
              <p className={`followers`}>
                <span className={`follower-count`}> 150 </span> {`followers`}
              </p>
              <p className={`following`}>
                <span className={`following-count`}> 0 </span> {`following`}
              </p>
            </div>
          </div>
        </div>
        <div className="user-bio">
          <p>{`Bio: 👋 I am Puneet, an aspiring Fullstack Web Dev currently learning MERN stack at neogCamp.`}</p>
        </div>
      </article>

      <article className={`saved-broadcast-detail`}>
        <div className="saved-broadcasts">
          <p>{`Saved Broadcasts`}</p>
          <p className="no-of-saved-broadcasts">{18}</p>
        </div>
        <div className={`saved-broadcast-list-container`}>
          <ul className={`saved-broadcast-list`}>
            <li>
              {/* it will take broadcast id */}
              <SavedBroadcast />
            </li>
            <li>
              <SavedBroadcast />
            </li>
            <li>
              <SavedBroadcast />
            </li>
            <li>
              <SavedBroadcast />
            </li>
            <li>
              <SavedBroadcast />
            </li>
            <li>
              <SavedBroadcast />
            </li>
            <li>
              <SavedBroadcast />
            </li>
            <li>
              <SavedBroadcast />
            </li>
            <li>
              <SavedBroadcast />
            </li>
          </ul>
        </div>
        <div className={`scroll-padding`}></div>
      </article>
    </section>
  );
};
