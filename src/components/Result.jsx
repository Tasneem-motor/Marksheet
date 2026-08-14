import { useState } from "react";

function Result({ student, marksData, setPage }) {

  const [semester, setSemester] = useState("sem1");

  const subjects = marksData[semester] || [];

  let totalMarks = 0;
  let totalCredits = 0;
  let totalPoints = 0;

  function grade(marks) {
    if (marks >= 80) return "A";
    else if (marks >= 70) return "B";
    else if (marks >= 60) return "C";
    else return "D";
  }

  function point(marks) {
    if (marks >= 80) return 9;
    else if (marks >= 70) return 8;
    else if (marks >= 60) return 7;
    else return 6;
  }

  for (let i = 0; i < subjects.length; i++) {
    totalMarks = totalMarks + subjects[i].marks;
    totalCredits = totalCredits + subjects[i].credits;
    totalPoints = totalPoints + point(subjects[i].marks) * subjects[i].credits;
  }

  let sgpa = 0;

  if (totalCredits > 0) {
    sgpa = (totalPoints / totalCredits).toFixed(2);
  }

  return (
    <div>

      <h2>Result</h2>

      <p>Name: {student.name}</p>
      <p>Roll No: {student.rollNo}</p>

      <label>Semester:</label>

      <select
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      >
        <option value="sem1">Sem 1</option>
        <option value="sem2">Sem 2</option>
        <option value="sem3">Sem 3</option>
      </select>

      <br /><br />

      <table border="1">

        <tr>
          <th>Subject</th>
          <th>Marks</th>
          <th>Credits</th>
          <th>Grade</th>
        </tr>

        {subjects.map((s, index) => (
          <tr key={index}>
            <td>{s.subject}</td>
            <td>{s.marks}</td>
            <td>{s.credits}</td>
            <td>{grade(s.marks)}</td>
          </tr>
        ))}

      </table>

      <br />

      <p>Total Marks: {totalMarks}</p>

      <p>SGPA: {sgpa}</p>

      <button onClick={() => setPage("search")}>Back</button>

    </div>
  );
}

export default Result;