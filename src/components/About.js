import { Link } from "react-router-dom";

export default function About() {
  return(
    <div className="main">
      <h1>Our Philosophy</h1>
      <p>Planning an event can be overwhelming from venue to menu, the to-do list seems endless. At GameWinner, we're here to make guest list management the least of your worries. Focusing on fantasy football, we take care of invitations and RSVPs, so you can focus on the excitement of the game and camaraderie. Let's team up and make your event a touchdown! <b>GameWinner</b>.</p>
      <p>
        <b>GameWinner</b> GameWinner redefines event planning with a seamless, all-in-one solution for creating, managing, and sharing your fantasy football gatherings. Say goodbye to complexity our platform is designed for simplicity and user-friendliness. No phone numbers or emails required. With GameWinner, organizing an exceptional fantasy football event becomes effortless, allowing you to focus on what you excel at: curating the ultimate game day experience.
      </p>
      <p>
        If you insist on creating an account and giving your email, phone, address, and credit card information, then <b>GameWinner</b> is <span style={{textDecoration: "underline"}}>not</span> for you. But if you like to keeps things simple, you'll fit right in!
      </p>
      <p>
        What are you waiting for? Click the button below and let's get your next event scheduled with <b>GameWinner</b>.
      </p>
      <Link to={"/create-event"}>
          <button className="returnHomeWrapper specialButton" style={{marginTop: "2rem"}}>
            Create New Event
          </button>
      </Link>
    </div>
  )
}