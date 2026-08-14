import { useState } from "react";

import SearchStudent from "./components/SearchStudent";
import AddMarks from "./components/AddMarks";
import Result from "./components/Result";

function App() {

  const [page, setPage] = useState("search");
  const [student, setStudent] = useState(null);
  const [marksData, setMarksData] = useState({});

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>Student Result Management System</h1>

      {page === "search" && (
        <SearchStudent
          setStudent={setStudent}
          setPage={setPage}
        />
      )}

      {student && page === "search" && (
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            marginTop: "20px",
            width: "300px"
          }}
        >

          <h3>Student Details</h3>

          <p><b>ID:</b> {student.id}</p>

          <p><b>Name:</b> {student.name}</p>

          <p><b>Roll No:</b> {student.rollNo}</p>

          <p><b>Course:</b> {student.course}</p>

          <p><b>Email:</b> {student.email}</p>

        </div>
      )}
      {page === "marks" && student && (
        <AddMarks
          student={student}
          marksData={marksData}
          setMarksData={setMarksData}
          setPage={setPage}
        />
      )}


      {page === "result" && student && (
        <Result
          student={student}
          marksData={marksData}
          setPage={setPage}
        />
      )}

    </div>
  );
}

export default App;