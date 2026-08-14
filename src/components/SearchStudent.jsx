import { useState } from "react";
import students from "../data";

function SearchStudent({ setStudent, setPage }) {

  const [id, setId] = useState("");

  function searchStudent() {
    const found = students.find((s) => s.id === id);

    if (found) {
      setStudent(found);
    } else {
      alert("Student not found");
    }
  }

  return (
    <div>

      <h2>Search Student</h2>

      <input
        type="text"
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={searchStudent}>Search</button>

      <br /><br />

      <button onClick={() => setPage("marks")}>Add Marks</button>

      <button onClick={() => setPage("result")}>Display Result</button>

    </div>
  );
}

export default SearchStudent;