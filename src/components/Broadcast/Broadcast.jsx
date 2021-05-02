import "./broadcast-styles.css";
import { RoomDetails, Chat, ControlPanel } from "../";

export const Broadcast = ({ setShowBroadCast }) => {
  return (
    <article className={`broadcast`}>
      <RoomDetails />
      <Chat />
      <ControlPanel setShowBroadCast={setShowBroadCast} />
    </article>
  );
};
