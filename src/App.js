import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');
  const [students, setStudents] = useState([]);

  function addStudent(event) {
    event.preventDefault();

    if (!name.trim() || !age || !major.trim()) {
      return;
    }

    setStudents([...students, { name: name.trim(), age, major: major.trim() }]);
    setName('');
    setAge('');
    setMajor('');
  }

  return (
    <main className="App">
      <h1>Student Information System</h1>
      <h5>Developed By: 101496484 || Cem Dudu || DevOps</h5>

      <form onSubmit={addStudent}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" min="1" value={age} onChange={(event) => setAge(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="major">Major:</label>
          <input id="major" type="text" value={major} onChange={(event) => setMajor(event.target.value)} required />
        </div>
        <button type="submit">Add Student</button>
      </form>

      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} - Age: {student.age} - Major: {student.major}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
