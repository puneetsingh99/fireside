import { Avatar } from "../";

export const RequestToJoinCard = () => {
  return (
    <article className={`req-to-join-card`}>
      <div className="req-to-join-card-author-picture">
        <Avatar src={`https://picsum.photos/seed/picsum/200`} size={`l`} />
      </div>
      <div className="message-details">
        <p className="req-to-join-author-name">{`Puneet Singh`}</p>
      </div>
      <div className="button-container">
        <button className={`btn btn-small btn-deny`}>{`Deny`}</button>
        <button className={`btn btn-small btn-allow`}>{`Allow`}</button>
      </div>
    </article>
  );
};
