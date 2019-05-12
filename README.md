# savings-calculator
A code-free, customizable savings calculator generator for marketers who do not know HTML, CSS, or JavaScript. Built with React.

Marketers can preload the calculator with custom values for their rates/fees/prices. The calculators will then prompt prospects to enter their current pricing values, process those values, and display whether and how much customers can save.

The app currently generates calculators for simple percent and dollar comparisons. It also displays the HTML, CSS, and JavaScript that marketers will add to their websites to display their calculators. The next step is to refactor and add new functions/features.

Current to-dos include:

- Replacing global variables in the JS with objects to avoid polluting the DOM
- Refactoring for more reusable components (eliminating as much of the percent/dollar fork as possible)
- Adding more advanced algorithms for savings calculations

Long-term plans include: 

- Adding easy-to-use interface for customizing calculator styles
- Adding a backend for users to store and modify their created calculators
- Adding a machine learning API that can read a customer's submitted .pdf (such as a monthly statement) and pull values directly from the doc