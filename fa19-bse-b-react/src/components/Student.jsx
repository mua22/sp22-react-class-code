import React from "react";

const Student = (props) => {
  console.log(props);
  const { cgpa, name } = props;
  return (
    <div className="p-4 bg-primary m-2">
      <h3
        style={{
          border: "2px solid",
          borderColor: cgpa > 2.8 ? "green" : "red",
        }}
      >
        Hello {props.name}
      </h3>
      <p>{cgpa > 2.8 ? "You Are Pass" : "You are fail"}</p>
    </div>
  );
};

export default Student;
