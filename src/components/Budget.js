/*
    This component displays the current budget by accessing the budget value from the application context.

    - Uses the useContext hook to access the AppContext and retrieve the budget value.
    - Renders the budget value inside an alert component with a secondary color.
*/

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // Access the budget value from the application context
    const { budget } = useContext(AppContext);

    // Render the budget value inside an alert component
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};

export default Budget;
