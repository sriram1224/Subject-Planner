import React, { useState } from 'react';
import './style.css'

export default function SubjectPlanner() {
    const [subject, setSubject] = useState([]);
    const [subjectInput, setSubjectInput] = useState('');
    const [NumberInput, setNumberInput] = useState(1);

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
    setSubject(prevState => {
        const newarr = [...prevState];
        newarr[index] = { ...newarr[index], Hours: newarr[index].Hours + 1 };
        return newarr;
    });
}

function decrease(index) {
    setSubject(prevState => {
        const newarr = [...prevState];
        newarr[index] = { ...newarr[index], Hours: newarr[index].Hours - 1 };
        return newarr;
    });
}

    return (
        <div>
            <div>
                <div className='heading'>
                    <h1>Education Planner</h1>
                </div>
                <div className="subject-input">
                    <h2>:Subjects</h2><input value={subjectInput} onChange={handleSubjectChange} />
                </div>
                <div className='number-input'>
                  <h2>:Hours</h2>  <input type="number" value={NumberInput} onChange={handleHours} /> 
                </div>
                <div className='button'>
                    <button onClick={clicked}>ADD</button>
                </div>
            </div>
            <div className='list-container'>
                <ul >
                    {subject.map((subject, index) => (
                        <li className='list' key={index}>
                            <p>{subject.name}</p>
                            <button onClick={() => increase(index)}>+</button>
                            <input type="number" value={subject.Hours} readOnly />
                            
                            <button onClick={() => decrease(index)}>-</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
