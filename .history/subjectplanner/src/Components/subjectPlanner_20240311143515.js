import React, { useState } from 'react';

export default function SubjectPlanner() {
    const arr = [
      
        {
            "name": "",
            "Hours":""
        }
  ];
    const [subjectInput, setSubjectInput] = useState('Subject');
    const [NumberInput, setNumberInput] = useState(2);

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
              <div>
              <input value={} />
              </div>
      </div>
    </div>
  );
}
