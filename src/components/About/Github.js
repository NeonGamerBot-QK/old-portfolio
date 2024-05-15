import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import config from "../../config/config.json";
function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {/* <GitHubCalendar
        username={config.github_username}
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}
      {/* svg from git, updated every 3 hours */}
      <img src="https://raw.githubusercontent.com/NeonGamerBot-QK/NeonGamerBot-QK/output/github-contribution-grid-snake.svg" />
    </Row>
  );
}

export default Github;
