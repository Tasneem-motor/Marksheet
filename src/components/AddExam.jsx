
import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddExam({ students, setStudents }) {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [showExam, setShowExam] = useState(false);

  const [sem, setSem] = useState("");
  const [subject, setSubject] = useState("");
  const [credits, setCredits] = useState("");
  const [internal, setInternal] = useState("");
  const [endSem, setEndSem] = useState("");

  function searchStudent() {
    const s = students.find((student) => student.id === Number(studentId));
    setStudent(s);
  }

  function getGrade(total) {
    if (total >= 90) return "A+";
    if (total >= 80) return "A";
    if (total >= 70) return "B+";
    if (total >= 60) return "B";
    if (total >= 50) return "C";
    return "D";
  }

  function addSubject() {
    const total = Number(internal) + Number(endSem);

    const newSubject = {
      sem,
      subject,
      credits,
      internal,
      endSem,
      grade: getGrade(total)
    };

    student.exam.push(newSubject);
    setStudents(students.slice());

    setSem("");
    setSubject("");
    setCredits("");
    setInternal("");
    setEndSem("");
  }

  return (
    <div className="page-card">
      <div className="page-header">
        <div>
          <h1 className="page-title">Exam Entry Workspace</h1>
          <p className="page-subtitle">Search a student and record semester subject marks.</p>
        </div>
        <div className="badge">Exam</div>
      </div>

      <div className="grid-2">
        <div className="field">
          <label>Student ID</label>
          <input
            type="number"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter student ID"
          />
        </div>
      </div>

      <div className="actions">
        <button className="btn btn-primary" onClick={searchStudent}>
          Find Student
        </button>
        <Link className="nav-link" to="/result">View Result Page</Link>
      </div>

      {student && (
        <>
          <div className="info-grid">
            <div className="info-card">
              <div className="label">Student Name</div>
              <div className="value">{student.name}</div>
            </div>
            <div className="info-card">
              <div className="label">Student ID</div>
              <div className="value">{student.id}</div>
            </div>
            <div className="info-card">
              <div className="label">Program</div>
              <div className="value">{student.program}</div>
            </div>
            <div className="info-card">
              <div className="label">Roll Number</div>
              <div className="value">{student.roll}</div>
            </div>
          </div>

          <div className="section">
            <div className="actions">
              <button className="btn btn-secondary" onClick={() => setShowExam(true)}>
                Add Subject Marks
              </button>
            </div>

            {showExam && (
              <>
                <h3>Add Semester Subject</h3>

                <div className="grid-2">
                  <div className="field">
                    <label>Semester</label>
                    <input value={sem} onChange={(e) => setSem(e.target.value)} placeholder="Semester number" />
                  </div>

                  <div className="field">
                    <label>Subject Name</label>
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
                  </div>

                  <div className="field">
                    <label>Credits</label>
                    <input type="number" value={credits} onChange={(e) => setCredits(e.target.value)} placeholder="Credits" />
                  </div>

                  <div className="field">
                    <label>Internal Marks</label>
                    <input type="number" value={internal} onChange={(e) => setInternal(e.target.value)} placeholder="Internal" />
                  </div>

                  <div className="field">
                    <label>End Semester Marks</label>
                    <input type="number" value={endSem} onChange={(e) => setEndSem(e.target.value)} placeholder="End semester" />
                  </div>
                </div>

                <div className="actions">
                  <button className="btn btn-primary" onClick={addSubject}>
                    Save Subject
                  </button>
                </div>

                <div className="section">
                  <h3>Recorded Subjects</h3>

                  <div className="subject-list">
                    {student.exam.map((exam, index) => (
                      <div className="subject-card" key={index}>
                        <h4>{exam.subject}</h4>
                        <div className="subject-meta">
                          <div className="meta-item">
                            <span>Semester</span>
                            {exam.sem}
                          </div>
                          <div className="meta-item">
                            <span>Credits</span>
                            {exam.credits}
                          </div>
                          <div className="meta-item">
                            <span>Internal</span>
                            {exam.internal}
                          </div>
                          <div className="meta-item">
                            <span>End Sem</span>
                            {exam.endSem}
                          </div>
                          <div className="meta-item">
                            <span>Total</span>
                            {Number(exam.internal) + Number(exam.endSem)}
                          </div>
                          <div className="meta-item">
                            <span>Grade</span>
                            {exam.grade}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="actions">
                    <Link to="/result">
                      <button className="btn btn-secondary">Generate Result</button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {studentId && !student && (
        <div className="message">Student not found. Please check the entered ID.</div>
      )}
    </div>
  );
}

export default AddExam;
