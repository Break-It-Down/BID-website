import * as React from "react";
import { Link } from "gatsby";
import "../styles/upcomingEvents.css";
import Groups from "../content/groupInfo";
import Group from "../components/group";

const hosts = Groups.filter((group) => group.host && group.active);

const Hosts = () => (
  <div id="hosts" className="wrapper">
    <h2>
      <strong>2027 {hosts.length == 1 ? "Host" : "Hosts"}</strong>
    </h2>
    <div className="row aln-center" style={{ margin: "0px auto 40px auto" }}>
      {hosts.map((group, index) => (
        <div key={group.id || index} className="gtr-250">
          <Group group={group} />
        </div>
      ))}
    </div>
  </div>
);

export default Hosts;
