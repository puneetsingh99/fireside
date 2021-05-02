import "./room-styles.css";
import { CrossSvg } from "../../assets";

export const NewRoom = ({ setShowCreateRoomModal, setShowBroadCast }) => {
  return (
    <article
      className={`auth-form room-form`}
      onClick={(e) => e.stopPropagation()}
    >
      <p
        className={`cancel-modal`}
        onClick={() => setShowCreateRoomModal(() => false)}
      >
        <CrossSvg />
      </p>
      <h1 className={`form-title new-room-form-title`}> {`New Room`} </h1>
      <p className={`form-subtitle`}>
        {`Fill the following details to start a new room`}
      </p>
      <div className={`input-text-container`}>
        <input
          type="text"
          name="room-name"
          id="room-name"
          placeholder="Room name"
          className={`text-input`}
        />

        <textarea
          name="room-desc"
          id="room-desc"
          placeholder="Room description"
          className={`text-input text-input-room-desc`}
        />
      </div>

      <div className={`create-room-buttons`}>
        <button
          className={`btn btn-create-room`}
          onClick={() => {
            setShowBroadCast(true);
          }}
        >{`New Room`}</button>
        <button
          className={`btn btn-create-room btn-cancel-room`}
          onClick={() => setShowCreateRoomModal(() => false)}
        >
          {`Cancel`}
        </button>
      </div>
    </article>
  );
};
