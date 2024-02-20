/*
    This component renders the list of expenses.

    - Imports React, useContext hook, and ExpenseItem component.
    - Accesses the expenses array from the AppContext to render each expense item.
    - Renders a table with columns for department name, allocated budget, and action buttons.
    - Maps through the expenses array and renders an ExpenseItem component for each expense.

    Note: The component assumes that the parent component provides the expenses array via context.

    Props: None
*/

import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    // Access the expenses array from the application context
    const { expenses } = useContext(AppContext);
    
    // Render the list of expenses as a table
    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {/* Map through the expenses array and render each ExpenseItem */}
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
