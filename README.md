# React Budget App

This React application helps in managing the budget allocation for different departments within a company. It allows users to add, reduce, and view expenses for various departments.

## Components

### App.js

This component imports necessary modules and components for the Company's Budget Allocation application. It wraps the entire application with the AppProvider context provider and renders various components within a container, including Budget, Remaining, ExpenseTotal, ExpenseList, ExpenseItem, and AllocationForm.

### index.js

This file initializes the React application by rendering the main App component inside a root element. It also includes a function to measure performance in the application.

### AllocationForm.js

This component represents a form for allocating budget to different departments. It includes functionality to access the application context, manage form state, validate cost against remaining budget, and submit form data by dispatching actions to add or reduce expenses.

### Budget.js

This component displays the current budget by accessing the budget value from the application context.

### ExpenseItem.js

This component represents an individual expense item within the expense list. It accesses the dispatch function from the AppContext to perform state updates and renders the expense item's name, cost, and buttons for increasing allocation and deleting the expense.

### ExpenseList.js

This component renders the list of expenses. It accesses the expenses array from the AppContext to render each expense item as a table row.

### ExpenseTotal.js

This component calculates and displays the total expenses incurred so far. It retrieves the expenses array from the context and uses the reduce function to calculate the total cost of all expenses.

### Remaining.js

This component calculates and displays the remaining budget based on expenses. It accesses the expenses array and budget value from the application context, calculates the total expenses, and determines the alert type based on whether the total expenses exceed the budget.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## Usage

1. Open the application in your browser.
2. Use the AllocationForm to add or reduce budget allocation for different departments.
3. View the current budget, total expenses, remaining budget, and list of expenses in respective components.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any new features, enhancements, or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/spear97/React_Budget_App/blob/main/LICENSE) file for details.
