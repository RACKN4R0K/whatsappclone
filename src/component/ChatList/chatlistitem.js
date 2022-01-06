import React from "react";
import "./chatlistitem.css";

function chatlistitem({onclick, active, data}) {
  return (
    <div className={`chatlistitem ${active?'active':''}`} onClick={onclick}>
      <img
        className="chatlistitem-avatar"
        src={data.Image}
        alt=""
      ></img>
      <div className="chatlistitem-lines">
        <div className="chatlistitem-line">
          <div className="chatlistitem-name">{data.title}</div>
          <div className="chatlistitem-date">19:00</div>
        </div>
        <div className="chatlistitem-line">
          <div className="chatlistitem-lastMsg">
            <p>Opa, tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default chatlistitem;
