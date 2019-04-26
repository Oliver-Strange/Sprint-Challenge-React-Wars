# Answers

1.  What is React JS and what problems does it try and solve?

    React is a JavaScript library that makes interactive UI much easier to design than working in the DOM alone. React enables applications to be broken down into individual components, which allows the components to be used in multiple places. React is also reactive in that it will update and change data displayed when the user changes/updates data. 

1.  What does it mean to _think_ in react?

    Thinking in React is the concept of breaking down an app idea into individual components, understanding the hierarchy of the components, designing those components to be reuseable, designing the minimal UI state, and deciding where the state data will live.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Class/Stateful components act as a template for for Funtional/Presentational components to fill in. Class/Stateful components also hold the state/data of the app while Funtional/Presentational components change that state/data. 

1.  Describe state.

    State is the heart of every React component, it holds the data that is passed to other components through props. Any time the state is set it will re-render the app.  

1.  Describe props.

    Props are the way for components to reference state data. Props are passed to children components so they have access to higher state/data. Props are immutable and only access state. 