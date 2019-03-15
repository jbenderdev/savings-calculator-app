# savings-calculator
A code-free, customizable savings calculator for marketers who do not know JavaScript. Built with React.

Marketers can preload the calculator with custom values for their rates/fees/prices. The calculators will then prompt prospects to enter their current pricing values and indicate whether and how much customers can save.

The app currently generates calculators for simple percent and dollar comparisons. It also displays the HTML and CSS that marketers will add to their websites to display their calculators. The next step is either to compile the calculator code to vanilla JS or display stateful React component code in the frontend so that marketers can simply copy and paste the JavaScript into their websites.

Current to-dos include:

- Determining whether to display stateful vanilla JS or React components in step 4
- Refactoring for more reusable components (eliminating as much of the percent/dollar fork as possible)
- Adding animations upon render OR changing state management so that components don't all appear simultaneously

Long-term plans include: 

- Adding more advanced algorithms for savings calculations
- Adding easy-to-use interface for customizing calculator styles
- Adding a backend for users to store and modify their created calculators
- Adding a machine learning API that can read a customer's submitted .pdf (such as a monthly statement) and pull values directly from the doc