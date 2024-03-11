import React, { useState } from 'react';

export default function SubjectPlanner() {
    const [subjects, setSubjects] = useState([]);
    const [subjectInput, setSubjectInput] = useState('');
    const [numberInput, setNumberInput] = useState(2);

    const handleSubjectChange = (event) => {
        setSubjectInput(event.target.value);
    };
    

    const handleHours = (event) => {
        setNumberInput(parseInt(event.target.value));
    };

    const handleAddSubject = () => {
        if (subjectInput.trim() !== '') {
            setSubjects([...subjects, { name: subjectInput, hours: numberInput }]);
            setSubjectInput('');
            setNumberInput(2);
        }
    };

    const handleIncrementHours = (index) => {
        const updatedSubjects = [...subjects];
        updatedSubjects[index].hours++;
        setSubjects(updatedSubjects);
    };

    const handleDecrementHours = (index) => {
        const updatedSubjects = [...subjects];
        updatedSubjects[index].hours--;
        setSubjects(updatedSubjects);
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
                    <input type="number" value={numberInput} onChange={handleHours} />
                </div>
                <div>
                    <button onClick={handleAddSubject}>ADD</button>
                </div>
            </div>
            <div>
                <h2>Subject List</h2>
                <ul>
                    {subjects.map((subject, index) => (
                        <li key={index}>
                            {subject.name} - {subject.hours} hours
                            <button onClick={() => handleIncrementHours(index)}>+</button>
                            <button onClick={() => handleDecrementHours(index)}>-</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
