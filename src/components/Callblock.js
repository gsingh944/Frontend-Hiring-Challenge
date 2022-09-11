import React from 'react';
import "../css/block.css"
import { FiArrowUp,FiArrowDown, FiPhoneIncoming,FiPhoneOutgoing } from "react-icons/fi";
import Dialog from 'react-dialog'



function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


const CallBlock = (props) => {

  return (
    <div className='block-cont' style={{display: "flex", alignItems: "center", background: "white", boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",justifyContent: "space-between", cursor: "pointer",borderBottom: props.callType === "missed" ? "2px solid #ff3300" : props.callType === "answered" ? "2px solid #29a329": "2px solid #ffa31a"}}>
        <div style={{display: "flex", alignItems: "center"}}>
        <div style={{marginRight: 20, alignItems: "center", justifyContent: "center", textAlign: "center"}}>
        {props.direction === "outbound" ? <FiPhoneOutgoing size={20} color="#ff3300"/> : <FiPhoneIncoming size={20} color="#ff9900" />}
        {/* <p style={{color: "white",marginTop: 5, backgroundColor: props.callType === "missed" ? "#ffd6cc" : props.callType === "answered" ? "#c2f0c2": "#ffe0b3",color: props.callType === "missed" ? "#ff3300" : props.callType === "answered" ? "#29a329": "#ffa31a", borderRadius: "1000px", padding: 2}}>{props.callType === "missed" ? "M" : props.callType === "answered" ? "A": "V"}</p> */}
        </div>
     <div style={{textOverflow: "ellipsis"}}>
     <p  style={{color: "#4a4a4a",fontWeight: "bolder"}}>{isNaN(props.from[0]) ? props.from : "+ " + props.from}</p>
     <p style={{marginTop: "5px", color: "grey",overflow: "hiddden", textOverflow: "ellipsis", fontSize: 13}}>{props.to} {props.via ? "(via " + props.via + " )" : null}</p>

     </div>
        </div>
     <div style= {{float: "right",textAlign: "center"}}>
      <p style={{color: "grey"}}>{formatAMPM(new Date(props.createdAt))}</p>
      <p style={{color: "grey", color: "#33be23", opacity: 4,marginTop: 5}}>{props.duration}s</p>
     </div>
     
    </div>
  );
};

export default CallBlock;
