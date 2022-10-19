# React Hooks

Hooks are simply functions that let you 'hook' into React features. Hooks listen for changes in order to trigger a response.

## Why Hooks?
React originally used Class Components and lifecycle methods. Function Components only rendered UI. 
- Complex class components became difficult to understand
- Difficult to reuse logic between components
- Class components were too confusing

From this point, hooks began to be used.

## Basic Hooks
- useState: allows access to data and persists this data through re-rendering component.
- useEffect: allows component to handle async behavior or any behavior that has side effects.
- useContext: llows the sharing of data throughout the entire application.

## Hook Rules
- ONLY call hooks from function components; hooks CANNOT be used inside class components
- Do NOT call hooks inside loops, conditions or nested funcions
- Hooks must aleays be called in the same order
- useEffect hook MUST return a callback function
- Don't use async before the useEffect callback function

### State
A render or re-render is when the functional component is invoked. There is two kinda of state:
1. Component or local state
2. Global State (React Context, Redux)

### State Hooks
What does calling useState do? It declares a “state variable”. This is a way to “preserve” some values between the function calls (for a function component, that means rerenders). Normally, variables “disappear” when the function exits, but state variables are preserved by React.

What do you pass to useState as an argument? The only argument to the useState() hook is the initial state. You can keep a number, a string, an object, an array, etc. - whatever you need. (If you want to store two different values in state, you would call useState() twice.)

What does useState return? It returns a pair of values: the current state, and a function that updates it. This is why developers typically write const [count, setCount] = useState().

        const [ title, setTitle ] = useState(); // First index: current state, second index: updater function

### Effect Hooks
What does calling useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (referred to as "the effect"), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

Why is useEffect called inside a component? Placing useEffect inside the component allows you to access any state variable or prop right from the effect. You don’t need a special API to read it — it’s already in the function scope.

Does useEffect run after every render? Yes! By default, useEffect runs both after the first render and after every update (rerender). React guarantees the DOM has been updated by the time it runs the effects. It is possible to run your effect only when certain variables change (using the second argument).

What do you pass to useEffect as an argument? The first and only required argument is the function to call. Many times, however, you'll also want to include the second argument which is an array of variables that the function depends on. This optimises performance by rerunning the effect only when necessary.

What does useEffect return? Nothing itself. However, if your function has an async aspect, you will want to have it return a way to cancel the asynchronous task. (More on this later.)

### When to use useEffect Hook
1. Data fetching
2. Handling subscriptions
3. Timers
4. Directly changing the DOM
5. Updating based on state or props