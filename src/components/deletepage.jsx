import React, { useContext, useState } from "react";
import { Newcontext } from "../App";
import { useNavigate, useParams } from "react-router-dom";

function Deletepage() {
  const navigate = useNavigate();
  const [data, setdata] = useContext(Newcontext);
  const { user } = useParams();
  const viewdata = data[user];

  const handledelete = (user) => {
    
    const updated = [...data];
    updated.splice(user, 1);
    setdata(updated);
    navigate(-1);
  };
  const back = () => {
    navigate("/");
  };
  return (
    <div>
      <h2 style={{ color: "black", fontWeight: "bold", fontStyle: "revert" }}>
        Are you want to delete?
      </h2>

      <button
        onClick={back}
        style={{
          marginLeft: "80px",
          marginTop: "30px",
          width: "80px",
          borderRadius: "30px",
          backgroundColor: "lightblue",
        }}
      >
        cancel
      </button>
      <button
        onClick={() => handledelete(user)}
        style={{
          marginLeft: "20px",
          marginTop: "30px",
          width: "80px",
          borderRadius: "30px",
          backgroundColor: "lightblue",
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Deletepage;
