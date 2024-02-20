/*
    This component calculates and displays the remaining budget based on expenses.

    - Imports React and useContext hook to access the AppContext.
    - Retrieves the expenses array and budget value from the context.
    - Uses the reduce function to calculate the total cost of all expenses.
    - Determines the alert type based on whether the total expenses exceed the budget.
    - Renders the remaining budget in a Bootstrap alert component.

    Note: The component assumes that the AppProvider wraps its usage to provide the AppContext.
*/

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    // Access the expenses array and budget value from the application context
    const { expenses, budget } = useContext(AppContext);

    // Calculate the total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    // Determine the alert type based on whether the total expenses exceed the budget
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    // Render the remaining budget in a Bootstrap alert
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
