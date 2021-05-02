import {
  Navbar,
  BroadcastFeed,
  CreateRoomModal,
  Broadcast,
  BroadcastAttendance,
  ProfileDetails,
  RequestToJoin
} from "../";
import { useState } from "react";
import "./dashboard-styles.css";
import { PeopleSvg, RequestSvg } from "../../assets";

export const Dashboard = () => {
  const [showBraodCast, setShowBroadCast] = useState(false);

  return (
    <div className={`main-app-container`}>
      <nav className={`nav-container`}>
        <Navbar showSearchbar={true} showProfile={true} />
      </nav>
      {/* for mobile devices */}
      {window.innerWidth < 641 && (
        <div className="control-panel-menu-bar mobile-nav-menu-bar">
          <div
            className="control-panel-menu mob-nav-item req-to-type"
            title={`Request to type`}
          >
            <RequestSvg />
            <div className={`notification-badge`}>{5}</div>
          </div>
          <div
            className="control-panel-menu mob-nav-item"
            title={`attendance this broadcast`}
          >
            <PeopleSvg />
          </div>
        </div>
      )}

      <main className={`dashboard`}>
        <section className={`dashboard__left-section`}>
          {showBraodCast && <BroadcastAttendance />}
        </section>
        <section className={`dashboard__mid-section`}>
          {showBraodCast ? (
            <Broadcast setShowBroadCast={setShowBroadCast} />
          ) : (
            <BroadcastFeed setShowBroadCast={setShowBroadCast} />
          )}
        </section>
        <section className={`dashboard__right-section`}>
          {showBraodCast ? <RequestToJoin /> : <ProfileDetails />}
        </section>
      </main>
    </div>
  );
};
