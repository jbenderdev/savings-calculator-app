# savings-calculator
A customizable savings calculator for marketing purposes. Built with React.

Marketers will be able to preload the calculator with custom values for their rates/fees/prices and prompt prospects to enter their current pricing values. The calculator then indicates whether and how much can be saved.

Current functionality generates entry wizards and calculators by mapping arrays of components upon user-initiated state change. I'm now working on lifting up state to properly pass data from wizards to calculators. This is a step that in all honesty would be more easily achieved by adding Redux, but I want this tool to showcase my knowledge of basic React.

Long-term plan is to develop a backend for users to store and modify their created calculators. I may also be interested in adding a machine learning API that can read a customer's submitted .pdf (such as a monthly statement) and pull values directly from that.
