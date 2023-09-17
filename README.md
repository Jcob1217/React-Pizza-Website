Pizza Ordering App
Overview
Pizza ordering web application built with React, and Tailwind CSS. The application allows users to customize and add pizzas to their cart, choose quantities for each item, and track their cart contents. Users can complete orders by providing their contact information, including phone number and address. Additionally, there is an option to prioritize orders by paying extra, which adds them to a priority queue for faster processing. Project does not include payment processing.

Features
Add pizzas to the cart and select the quantity for each item.
Keep track of the items currently in the cart.
Place an order by completing a form that includes phone number and address information. Geolocation can also be used to determine the address.
Prioritize orders by paying extra, which adds them to a priority queue for quicker processing.
Tech Features
The application utilizes a backend service to fetch and post data, maintaining a remote state.
Remote state management is achieved using React Router's data loading feature ("render as you fetch"), with router actions to post data to a remote API.
Global UI state is managed using Redux Toolkit, which divides the global state into slices.
Styling is implemented using Tailwind CSS with a responsive design approach.
