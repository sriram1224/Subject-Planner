import React, { useState } from 'react';

export default function SubjectPlanner() {
  const arr = [];
  const [subjectInput, setSubjectInput] = useState('Subject');

  const handleSubjectChange = (event) => {
    setSubjectInput(event.target.value);
  };

  return (
    <div>
      <div>
        <div>
          <h1>Education Planner</h1>
        </div>
        <div>
          <input value={subjectInput} onChange={handleSubjectChange} />
        </div>
      </div>
    </div>
  );
}