import React from "react";
import Card from "react-bootstrap/Card";
import { VscDebugBreakpointFunctionUnverified as TriangleIcon } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pietro Girotto </span>
            from <span className="purple">Bern, Switzerland.</span>
            <br />
            I am currently working as a <span className="purple">Machine Learning Engineer</span> at 
            <b className="purple"> Swisscom</b>, where I focus on ML/DevOps pipelines, AI agent development, and large-scale deployments.
            <br />
            I recently completed my Master's Degree in Computer Engineering at the University of Padua, 
            specializing in Artificial Intelligence, with a thesis on LLM fine-tuning and reinforcement learning alignment. 
            I graduated <span className="purple">with honors (110/110 cum laude)</span>.
            <br />
            Before that, I earned my Bachelor's Degree in Computer Engineering, also with honors, and worked as an 
            <b className="purple"> Automation Specialist Intern</b> at <b className="purple">Uber</b> in Krakow, 
            where I developed end-to-end automation solutions in Python and SQL.
            <br />
            <br />
            In my free time, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <TriangleIcon /> Trekking
            </li>
            <li className="about-activity">
              <TriangleIcon /> Ambulance Volunteering
            </li>
            <li className="about-activity">
              <TriangleIcon /> Mountaineering
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
