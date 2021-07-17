import React, { useEffect, useState } from "react";
import "./Dashboard.scss";

export default function Dashboard(props) {
  const [active, setActive] = useState({});
  const { data, id } = props;

  useEffect(() => {

  }, []);

  return (
    <div className="dashboard">
      Test
    </div>
  );
}
