import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components to import
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            //Remaining component
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }        
                       
                        {
                            //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        }          

                        {
                            //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseItem />
                            </div>
                        }        


                        {
                            //AllocationForm  component
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        }       

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
