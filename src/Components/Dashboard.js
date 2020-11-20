import { useState, useEffect } from "react";
import axios from "axios";
import DashPun from "./DashPun";

const Dashboard = (props) => {
  const [puns, setPuns] = useState([]);

  useEffect(() => {
    const getPuns = async () => {
      try {
        const res = await axios.get("/api/puns");
        setPuns(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPuns();
  }, []);

  const editPun = async (id, content) => {
    try {
      //# id refers to pun id
      const res = await axios.put(`/api/puns/${id}`, { content });
      setPuns(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const mappedPuns = puns.map((pun, index) => {
    //# each thing returned here goes onto the mappedPuns array
    //# this function will fire once per pun
    return (
      <DashPun key={`${pun.pun_id}-${index}`} pun={pun} editPun={editPun} />
    );
  });

  //   console.log(mappedPuns);

  return (
    <div>
      <div>Dashboard</div>
      <ul style={{ listStyle: "none" }}>{mappedPuns}</ul>
    </div>
  );
};

export default Dashboard;
