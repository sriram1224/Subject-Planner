import React, { useState } from 'react';

export default function SubjectPlanner() {
    const [subject, setSubject] = useState([]);
    const [subjectInput, setSubjectInput] = useState('');
    const [NumberInput, setNumberInput] = useState(2);

    const handleSubjectChange = (event) => {
        setSubjectInput(event.target.value);
    };

    const handleHours = (event) => {
        setNumberInput(parseInt(event.target.value));
    };

    function clicked() {
        if (subjectInput.trim() !== '') {
            setSubject([...subject, { name: subjectInput, Hours: NumberInput }]);
            setSubjectInput('');
            setNumberInput(2);
        }
    }

   function increase(index) {
  setSubject((prevState) => {
    const newarr = [...prevState];
    newarr[index].Hours += 1; // Change here
    return newarr;
  });
}

function decrease(index) {
  setSubject((prevState) => {
    const newarr = [...prevState];
    newarr[index].Hours -= 1; // Change here
    return newarr;
  });
}

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
                    <input type="number" value={NumberInput} onChange={handleHours} />
                </div>
                <div>
                    <button onClick={clicked}>ADD</button>
                </div>
            </div>
            <div>
                <ul>
                    {subject.map((subject, index) => (
                        <li key={index}>
                            <p>{subject.name}</p>
                            <input type="number" value={subject.Hours} readOnly />
                            <button onClick={() => increase(index)}>+</button>
                            <button onClick={() => decrease(index)}>-</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
