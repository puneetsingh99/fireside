import "./room-styles.css";
import { NewRoom } from "../";

export const CreateRoomModal = ({
  setShowCreateRoomModal,
  setShowBroadCast
}) => {
  return (
    <div
      className={`modal-container`}
      onClick={() => {
        setShowCreateRoomModal(() => false);
      }}
    >
      <div className={`modal`}>
        <NewRoom
          setShowCreateRoomModal={setShowCreateRoomModal}
          setShowBroadCast={setShowBroadCast}
        />
      </div>
    </div>
  );
};
