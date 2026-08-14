function SubjectRow({ subject, marks, credits }) {

  let grade = "";

  if (marks >= 90) grade = "A+";
  else if (marks >= 80) grade = "A";
  else if (marks >= 70) grade = "B+";
  else if (marks >= 60) grade = "B";
  else grade = "C";

  return (
    <tr>
      <td>{subject}</td>
      <td>{marks}</td>
      <td>{credits}</td>
      <td>{grade}</td>
    </tr>
  );
}

export default SubjectRow;