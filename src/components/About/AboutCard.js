import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple get-hacked" style={{ color: "#123524"}}>Saahil dutta, </span>
            from <span className="purple get-hacked"> USA </span>
            <br />I am a 9th grader in KCD.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight className="inline-block"/> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight className="inline-block"/> Eating different types of food
            </li>
            {/* <li className="about-activity">
              <ImPointRight className="inline-block"/> Traveling
            </li> */}
            <li className="about-activity">
              <ImPointRight className="inline-block"/> Swimming
            </li>
          </ul>

          <p  className="get-hacked hover:text-fuchsia-600 ease-linear duration-700 text-fuchsia-500 first-letter:font-2xl">
            "It has become appallingly obvious that our technology has exceeded
            our humanity."{" "}
          </p>  
          <footer className="blockquote-footer get-hacked">
            Albert Einstein
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
