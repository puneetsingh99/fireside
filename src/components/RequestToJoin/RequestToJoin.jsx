import "./request-to-join.css";
import { RequestToJoinCard } from "../";

export const RequestToJoin = () => {
  return (
    <article className={`request-to-join`}>
      <div className={`request-to-join-header`}>
        <p>{`Join Requests`}</p>
        <p className="total-attendees">{5}</p>
      </div>
      <div className={`request-to-join-list-container`}>
        <ul className={`request-to-join-list`}>
          <li>
            <RequestToJoinCard />
          </li>

          <li>
            <RequestToJoinCard />
          </li>
          <li>
            <RequestToJoinCard />
          </li>
          <li>
            <RequestToJoinCard />
          </li>
          <li>
            <RequestToJoinCard />
          </li>
          <li>
            <RequestToJoinCard />
          </li>
          <li>
            <RequestToJoinCard />
          </li>
          <li>
            <RequestToJoinCard />
          </li>
          <li>
            <RequestToJoinCard />
          </li>
          <li>
            <RequestToJoinCard />
          </li>
        </ul>
      </div>
      <div className={`scroll-padding-manager`}></div>
    </article>
  );
};
