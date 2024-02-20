/*
    This component imports necessary modules and components for the Company's Budget Allocation application.
    It imports React and Bootstrap CSS.
    It also imports components from specific directories such as AppContext, Budget, ExpenseTotal, ExpenseList, AllocationForm, and Remaining.
    Inside the App component, it wraps the entire application with AppProvider context provider.
    It then renders various components within a container, including Budget, Remaining, ExpenseTotal, ExpenseList, ExpenseItem, and AllocationForm.
*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components to import
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {/* Budget component */}
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    {/* Remaining component */}
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    {/* ExpenseTotal component */}
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    {/* ExpenseList component */}
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                    {/* AllocationForm component */}
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
