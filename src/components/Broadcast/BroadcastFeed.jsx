import "./broadcast-styles.css";
import { BroadcastInfo, CreateRoomModal } from "../";
import { useState } from "react";

export const BroadcastFeed = ({ setShowBroadCast }) => {
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  return (
    <article className={`broadcast-feed`}>
      <div className={`create-room`}>
        <div className={`your-feed`}>{`Your feed`}</div>
        <button
          className={`btn btn-create-room`}
          onClick={() => setShowCreateRoomModal(true)}
        >{`New Room`}</button>
        {showCreateRoomModal && (
          <CreateRoomModal
            setShowCreateRoomModal={setShowCreateRoomModal}
            setShowBroadCast={setShowBroadCast}
          />
        )}
      </div>
      <ul className={`broadcast-list`}>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li className={`broadcast-info-container`}>
          <BroadcastInfo />
        </li>
        <li className={`broadcast-info-container`}>
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
        <li
          className={`broadcast-info-container`}
          onClick={() => setShowBroadCast(() => true)}
        >
          <BroadcastInfo />
        </li>
      </ul>
    </article>
  );
};
