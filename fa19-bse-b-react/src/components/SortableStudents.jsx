import React from "react";
const SortableStudents = () => {
  const [students, setStudents] = React.useState(["Zaid", "Lareb", "Adil"]);
  const sortStudents = () => {
    let dummyStudents = [...students];
    dummyStudents.sort();
    setStudents(dummyStudents);
  };
  React.useEffect(() => {
    console.log("Im Mounting");
  }, []);
  React.useEffect(() => {
    console.log("effect will be called on each render");
  });
  //   console.log("Hello B Section");
  return (
    <div>
      <button onClick={sortStudents}>Sort </button>
      <ul>
        {students.map((s) => (
          <li>{s}</li>
        ))}
      </ul>
    </div>
  );
};
export default SortableStudents;
