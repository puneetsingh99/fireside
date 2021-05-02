import "./room-styles.css";

export const RoomDetails = () => {
  return (
    <div className={`room-details`}>
      <h1 className={`room-name`}>{`Discussing React Js hooks`}</h1>
      <p className={`room-author`}>
        <span className={`with`}>{`with `}</span>
        {`Puneet`}
      </p>
    </div>
  );
};
