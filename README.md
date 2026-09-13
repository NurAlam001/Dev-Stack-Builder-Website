Answer 1
JSX is like writing HTML inside JavaScript. It makes React code easier to read and lets us build UI with a mix of HTML and JS.

Answer 2
Props are data passed from parent to child. They don’t change inside the child. State is data inside a component that can change when the user interacts.

Answer3
useState lets a component remember values and update them. In this project, we used it to keep track of the selected technologies in the stack.

Answer4
We used it to show a loading state before showing the JSON data.

Answer5
Each item in a list needs a unique key so React can know which item changed, added, or removed. This makes rendering faster and avoids bugs.

Answer6
Conditional rendering means showing different UI depending on data. Example: when the stack is empty, we show “No technologies selected yet.

Answer7
Parent to Child: pass data using props.
Child to Parent: call a function given by the parent (like onClick) to send something back.

