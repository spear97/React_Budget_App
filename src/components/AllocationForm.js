/*
    This component represents a form for allocating budget to different departments.
    It includes the following functionality:

    1. Accesses the application context using useContext to get the dispatch function and remaining budget.

    2. Manages form state using useState for name, cost, and action.

    3. Validates the entered cost against the remaining budget and displays an alert if it exceeds the remaining funds.

    4. Submits the form data by dispatching actions to add or reduce expenses based on the selected action.

    5. Renders a form with dropdowns for selecting department and action, an input for entering cost, and a submit button.
*/

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    // 1. Access the application context to get dispatch and remaining budget
    const { dispatch, remaining } = useContext(AppContext);

    // 2. Manage form state
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    // 3. Handle form submission
    const submitEvent = () => {
        // Validate cost against remaining budget
        if (cost > remaining) {
            alert("The value cannot exceed remaining funds £" + remaining);
            setCost("");
            return;
        }

        // Prepare expense object
        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        // Dispatch action based on selected action
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    // 4. Render the allocation form
    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    {/* Dropdown for selecting department */}
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>

                    {/* Dropdown for selecting allocation action */}
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    {/* Input field for entering cost */}
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem', size: 10 }}
                        onChange={(event) => setCost(event.target.value)}
                    />

                    {/* Submit button */}
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
