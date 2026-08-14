import { useState } from "react";

function AddMarks({ student, marksData, setMarksData, setPage }) {

  const [semester, setSemester] = useState("sem1");

  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");

  let s1 = "";
  let s2 = "";
  let s3 = "";

  if (semester === "sem1") {
    s1 = "C Programming";
    s2 = "Mathematics";
    s3 = "Physics";
  }

  if (semester === "sem2") {
    s1 = "Java";
    s2 = "DBMS";
    s3 = "Python";
  }

  if (semester === "sem3") {
    s1 = "React";
    s2 = "Operating System";
    s3 = "Computer Network";
  }

  function saveMarks() {

    const subjects = [
      { subject: s1, marks: Number(m1), credits: 4 },
      { subject: s2, marks: Number(m2), credits: 4 },
      { subject: s3, marks: Number(m3), credits: 3 }
    ];

    setMarksData({
      ...marksData,
      [semester]: subjects
    });

    alert("Marks Saved");
  }

  return (
    <div>

      <h2>Add Marks</h2>

      <p>Name: {student.name}</p>

      <label>Semester: </label>

      <select
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      >
        <option value="sem1">Sem 1</option>
        <option value="sem2">Sem 2</option>
        <option value="sem3">Sem 3</option>
      </select>

      <br /><br />

      <label>{s1}</label><br />
      <input
        type="number"
        value={m1}
        onChange={(e) => setM1(e.target.value)}
      />

      <br /><br />

      <label>{s2}</label><br />
      <input
        type="number"
        value={m2}
        onChange={(e) => setM2(e.target.value)}
      />

      <br /><br />

      <label>{s3}</label><br />
      <input
        type="number"
        value={m3}
        onChange={(e) => setM3(e.target.value)}
      />

      <br /><br />

      <button onClick={saveMarks}>Save</button>

      <button onClick={() => setPage("search")}>Back</button>

    </div>
  );
}

export default AddMarks;