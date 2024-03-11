import React, { useState } from 'react'

export default function subjectPlanner() {
    const arr = [];
    const [subjectinput, setSubject] = useState("Subject");
  return (
    <div>
          <div>
              <div>
                  <h1>
                  Education Planner
                  </h1>
              </div>
              <div>
              <input value={subjectinput} />
              </div>
          </div>
    </div>
  )
}
