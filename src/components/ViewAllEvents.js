import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ViewAllEvents(props) {
  const [input, setInput] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (isAdmin) {
        try {
          const response = await fetch(props.url + "/api/events");
          const data = await response.json();
          setCurrentEvents(data);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        } catch (error) {
          console.error(error);
        }
      }
    }

    if (isAdmin) {
      setIsLoading(true);
      fetchData();
    }
  }, [isAdmin, props.url]);

  useEffect(() => {
    async function fetchData() {
      if (isAuthorized) {
        try {
          const response = await fetch(props.url + "/api/events/" + input);
          const data = await response.json();
          setCurrentEvents(data);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        } catch (error) {
          console.error(error);
        }
      }
    }

    if (isAuthorized) {
      setIsLoading(true);
      fetchData();
    }
  }, [isAuthorized, input, props.url]);

  function checkInput(input) {
    if (input === process.env.REACT_APP_NOT_SECRET_CODE) {
      setIsLoading(true);
      setIsAdmin(true);
      // undo blur background effect
      document.body.style.overflowY = "inherit";
      document.getElementsByClassName("cardLineGroup")[0].style.filter = "none";
      document.getElementsByClassName("cardLineGroup")[0].style.pointerEvents = "auto";
    }

    if (props.allEventIds.indexOf(input) > -1) {
      setIsLoading(true);
      setIsAuthorized(true);
      // undo blur background effect
      document.body.style.overflowY = "inherit";
      document.getElementsByClassName("cardLineGroup")[0].style.filter = "none";
      document.getElementsByClassName("cardLineGroup")[0].style.pointerEvents = "auto";
    }
  }

  function blurBackground() {
    document.body.style.overflow = "hidden";
    document.getElementsByClassName("cardLineGroup")[0].style.filter = "blur(3px)";
    document.getElementsByClassName("cardLineGroup")[0].style.pointerEvents = "none";
  }

  useEffect(() => {
    blurBackground();
  }, []);

  useEffect(() => {
    checkInput(input);
  }, [input]);
  

  return (
    <div className="main main__ViewCurrentEvents card">
      <h1>{props.allEventIds.length} Events in progress</h1>
      {isAuthorized ? <h2>Here is your event!</h2> : null}
      {isLoading && (isAdmin || isAuthorized) ? <div id="loading"></div> : (
        <div className="cardLineGroup">
          {currentEvents.map(event => (
            <div key={event.eventId} className="cardLine">
              <span className="cardLineTitle">
                {event.eventId} - {event.eventName} on {event.eventDate} by {event.eventOrganizer}
              </span>
              <Link to={"/view-eventId=" + event.eventId}>
                <button className="goToButton">Go to event</button>
              </Link>
            </div>
          ))}
        </div>
      )}
      {!isAdmin && !isAuthorized ? (
        <div className="authorizeViewAllEvents">
          <h2 style={{color: "white", padding: "0 3rem", marginTop: "8rem", marginBottom: "-3rem", textAlign: 'center'}}>Enter Event ID to view a specific event or the Secret Key to view all events.</h2>
          <input style={{borderBottom: '2px solid white'}} type="password" onChange={(e)=> setInput(e.target.value)} placeholder="Secret Key or Event Id"/>
        </div>
      ) : null}
    </div>
  );
}
