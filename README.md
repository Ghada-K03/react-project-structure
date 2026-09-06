## Assignment 2 - Reusable Components in React

This assignment demonstrates the concept of reusable components in React using props and children.

### Components

#### Button

A reusable Button component that accepts:

- `text` - The text displayed on the button.
- `onClick` - Function to handle click events.
- `variant` - Button style (`primary`, `secondary`, or `danger`).
- `disabled` - Optional boolean to disable the button.

The Button component is used multiple times with different props.

#### Card

A reusable Card component that accepts:

- `title` - Card title.
- `description` - Card description.
- `image` - Optional image URL.
- `children` - Allows nested content inside the card.

The Card component is used multiple times with different data, and the `children` prop is demonstrated by placing a Button inside a Card.

#### Table

A reusable Table component that accepts:

- `columns` - Array of column headers.
- `data` - Array of objects representing table rows.
- `striped` - Optional boolean for striped rows.

The Table component displays a list of students.

### Assignment 2 Structure

```text
src/
└── assignment2/
    ├── Assignment2.jsx
    ├── Assignment2.css
    ├── Button.jsx
    ├── Card.jsx
    └── Table.jsx
```

### Concepts Demonstrated

- Reusable React components
- Props
- Children prop
- Conditional rendering
- Rendering lists using `map()`
- Event handling
- Component styling
