import "./broadcast-attendance-styles.css";
import { AttendeesList } from "../";

export const BroadcastAttendance = () => {
  return (
    <article className={`broadcast broadcast-attendance`}>
      <div className={`attendance-details`}>
        <p>{`Attendance`}</p>
        <p className="total-attendees">
          <span className={`live-indicator`}></span>
          {153}
        </p>
      </div>
      <div className="broadcasters">
        <div className={`attendance-details attendance-details-broadcasters`}>
          <p>{`Broadcasters`}</p>
          <p className="total-attendees total-attendees-broadcasters">{14}</p>
        </div>
        <AttendeesList />
      </div>
      <div className="audiences">
        <div className={`attendance-details attendance-details-broadcasters`}>
          <p>{`Audience`}</p>
          <p className="total-attendees total-attendees-broadcasters">{100}</p>
        </div>
        <AttendeesList />
      </div>
      <div className={`attendance-list`}></div>
    </article>
  );
};
