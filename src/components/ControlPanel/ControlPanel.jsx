import "./controlpanel-styles.css";
import { ShareSvg, RequestSvg, SaveSvg } from "../../assets";

export const ControlPanel = ({ setShowBroadCast }) => {
  return (
    <div className={`control-panel`}>
      <div className="control-panel-actions">
        <div className="control-panel-menu-bar">
          <div className="control-panel-menu" title={`Share this broadcast`}>
            <ShareSvg />
          </div>
          <div className="control-panel-menu" title={`Request to type`}>
            <RequestSvg />
          </div>
          <div className="control-panel-menu" title={`Save this broadcast`}>
            <SaveSvg />
          </div>
        </div>
        <button
          className="btn btn-leave"
          onClick={() => setShowBroadCast(false)}
        >{`Leave`}</button>
      </div>
    </div>
  );
};
