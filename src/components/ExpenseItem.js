/*
    This component represents an individual expense item within the expense list.

    - Imports React, useContext hook, and TiDelete icon from react-icons/ti library.
    - Accesses the dispatch function from the AppContext to perform state updates.
    - Defines handleDeleteExpense function to dispatch DELETE_EXPENSE action when deleting an expense.
    - Defines increaseAllocation function to dispatch ADD_EXPENSE action when increasing the allocation.
    - Renders the expense item's name, cost, and buttons for increasing allocation and deleting the expense.

    Props:
    - name: Name of the expense item.
    - cost: Cost of the expense item.
    - id: Unique identifier for the expense item.

    Note: The component assumes that the parent component provides props for name, cost, and id.
*/

import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    // Access the dispatch function from the application context
    const { dispatch } = useContext(AppContext);

    // Function to handle deleting an expense
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    // Function to increase the allocation for an expense
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    // Render the expense item details and action buttons
    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><button onClick={event => increaseAllocation(props.name)}>+</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
