import React from "react";
const SortableStudents = (props) => {
  const [students, SetStudents] = React.useState(["Zahid", "Noman", "Hassan"]);
  const handleSort = () => {
    let dummyStudents = [...students];
    dummyStudents.sort();
    SetStudents(dummyStudents);
  };
  return (
    <div>
      <button onClick={handleSort}>Sort</button>
      <ul>
        {students.map((s) => (
          <li>{s}</li>
        ))}
        {/* <li>{students[0]}</li>
        <li>{students[1]}</li>
        <li>{students[2]}</li> */}
      </ul>
    </div>
  );
};

export default SortableStudents;
