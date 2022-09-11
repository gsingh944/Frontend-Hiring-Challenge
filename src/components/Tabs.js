import React, {useState} from 'react';
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import Calls from '../containers/Calls';
import Archived from '../containers/Archived';
const Tabs = () => {

    const [tab, setTab] = useState(0);


  return (
    <div>
      <div className='continer' style={{display: "flex", cursor: "pointer"}}>
      <div style={{padding: 13, backgroundColor: tab === 0 ? "#e3e3e1": null}} onClick={()=> setTab(0)}>
      <p style={{}}><FiPhoneCall/> Call Activity</p>
      </div>
      <div style={{padding: 13,backgroundColor:  tab === 1 ? "#e3e3e1": null}} onClick={()=> setTab(1)}>
      <p style={{marginLeft: 0}}> <FiArchive /> Archived</p>
      </div>
      </div>
      {tab === 0 ? <Calls/> : <Archived />}
    </div>
  );
};

export default Tabs;
