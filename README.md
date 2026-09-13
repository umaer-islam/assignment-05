# Dev Stack Builder

A modern React application that helps developers explore technologies and build their ideal development stack. Browse through curated tools, compare options, and create a personalized stack for your next project.

## Used Technologies

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build
- **CSS** - Styling
- **React Toastify** - Notifications

## Key Features

1. **Technology Browser** - Explore 12 technologies with details, ratings, and categories
2. **Stack Builder** - Add technologies to your personal stack with duplicate prevention
3. **Real-time Notifications** - Get instant feedback with toast messages for every action

---

## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML like code inside JavaScript. It makes it easier to create and understand the UI of a React component.

### 2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component. State is used to store data that can change inside a component.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` is used to store and update changing data in React. I used it to store the technologies selected by the user for their stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` runs code after a component renders. I used it to fetch the technology data from the JSON file when the Technologies component loads.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the `key` to identify each item in a list. It helps React know which item was changed, added, or removed.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different content based on a condition. I used it in the stack to show the empty stack message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using props. A child can send something back by calling a function that the parent passes to it through props.