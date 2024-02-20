/*
    This component calculates and displays the total expenses incurred so far.

    - Imports React and useContext hook to access the AppContext.
    - Retrieves the expenses array from the context.
    - Uses the reduce function to calculate the total cost of all expenses.
    - Renders the total expenses in a Bootstrap alert component.

    Note: The component assumes that the AppProvider wraps its usage to provide the AppContext.
*/

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    // Access the expenses array from the application context
    const { expenses } = useContext(AppContext);

    // Calculate the total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    // Render the total expenses in a Bootstrap alert
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
