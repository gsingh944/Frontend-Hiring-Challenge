import React, {useEffect,useState} from 'react';
import axios from "../Axios"
import CallBlock from '../components/Callblock';
import "../css/block.css"

const Archived = () => {

    const [calls, setCalls] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/activities')
            .then(res => {
                //set only archived calls
                setCalls(res.data.filter(call => call.is_archived === true));
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleClick = (event,id) => {
        console.log(event.detail);
        switch (event.detail) {
          case 2: {
            axios.post(`/activities/${id}`, {is_archived: false}).then(res => {
              alert("Call Unarchived");
              axios.get('/activities')
              .then(res => {
                setCalls(res.data.filter(call => call.is_archived === true));
                setLoading(false);
              })
              .catch(err => {
                  console.log(err);
              })
            }).catch(err => console.log(err));
            
            break;
          }
          default: {
            break;
          }
        }
      };


  return (
    <div className='continer' style={{overflow: "hidden"}}>
        {calls.sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).map((call, index) => {
            if(index === 0){
                return (
                    <div key={call.id} onClick={(e)=>handleClick(e,call.id)}>
                        <p style={{textAlign: "center", marginTop: 30, color: "grey"}}>{new Date(call.created_at).toDateString()}</p>
                        <CallBlock from={call.from} createdAt={call.created_at} direction={call.direction} to={call.to} via={call.via} duration={call.duration} isArchived={call.is_archived} callType={call.call_type} />
                    </div>
                )
            }
            if(new Date(calls[index - 1].created_at).toDateString() !== new Date(call.created_at).toDateString()){
                return (
                    <div key={call.id} onClick={(e)=>handleClick(e,call.id)}>
                        <p style={{textAlign: "center", marginTop: 30, color: "grey"}}>{new Date(call.created_at).toDateString()}</p>
                        <CallBlock from={call.from} createdAt={call.created_at} direction={call.direction} to={call.to} via={call.via} duration={call.duration} isArchived={call.is_archived} callType={call.call_type} />
                    </div>
                )
            }
            return <div onClick={(e)=>handleClick(e,call.id)}><CallBlock key={call.id} from={call.from} createdAt={call.created_at} direction={call.direction} to={call.to} via={call.via} duration={call.duration} isArchived={call.is_archived} callType={call.call_type} /></div>
        })}

{calls.length === 0 && !loading ? <p style={{textAlign: "center", marginTop: 30, color: "green"}}>No archived calls</p> : null}

    </div>
  );
};

export default Archived;
