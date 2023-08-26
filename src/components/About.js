import { Link } from "react-router-dom";

export default function About() {
  return(
    <div className="main">
      <h1>Our Philosophy</h1>
      <p>As avid football enthusiasts, we deeply empathize with the immense challenges of organizing an event from handpicking the ideal stadium to curating a delectable game-day menu and coordinating spirited decorations, the to-do list appears boundless. From our perspective, crafting an effortlessly smooth experience for your guest list should stand as the final item on your event prep checklist. This is precisely the driving force behind our initiative: to present a remedy where guest list management seamlessly integrates into your football event planning, leaving you free to focus on creating an extraordinary game-day extravaganza.<b>Game Winner</b>.</p>
      <p>
        <b>Game Winner</b> We've established an effortless avenue for shaping, managing, and circulating your fantasy football event strategies all encapsulated within a solitary, cohesive platform. The essence of Game winner resonates with the ideals of simplicity and user-centric design. Its intuitive nature is fashioned to the extent that divulging your phone number or email address isn't a prerequisite. By eliminating superfluous hurdles, Game Winner bestows upon you the ability to channel your energy into your forte crafting an extraordinary fantasy football experience that mirrors your prowess and unwavering commitment.
      </p>
      <p>
        If you insist on creating an account and giving your email, phone, address, and credit card information, then <b>Game Winner</b> is <span style={{textDecoration: "underline"}}>not</span> for you. But if you like to keeps things simple, you'll fit right in!
      </p>
      <p>
        What are you waiting for? Click the button below and let's get your next event scheduled with <b>Game Winner</b>.
      </p>
      <Link to={"/create-event"}>
          <button className="returnHomeWrapper specialButton" style={{marginTop: "2rem"}}>
            Create New Event
          </button>
      </Link>
    </div>
  )
}