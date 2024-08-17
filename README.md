 Documentation of API Endpoints
1. GET / - Retrieve All Pizzas
• Description: Fetches all pizzas from the database and renders them on 
the homepage.
• Request Type: GET
• Response: HTML page listing all pizzas.
• Example Response:
HTML
<ul>
 <li>Pepperoni - Medium - $12.99</li>
 <li>Margherita - Large - $14.99</li>
</ul>
2. GET /view/
- Retrieve a Single Pizza
• Description: Fetches and displays details of a single pizza by its ID.
• Request Type: GET
• Parameters:
o id (URL parameter): The ID of the pizza to retrieve.
• Response: HTML page with the details of the specified pizza.
• Example Response:
HTML
<h1>Pepperoni</h1>
<p>Size: Medium</p>
<p>Price: $12.99</p>
3. GET /add - Render Form to Add a New Pizza
• Description: Renders a form that allows users to add a new pizza.
• Request Type: GET
• Response: HTML form for adding a new pizza.
4. POST /add - Add a New Pizza
• Description: Adds a new pizza to the database.
• Request Type: POST
• Payload Example:
JSON
{
 "name": "Pepperoni",
 "size": "medium",
 "price": 12.99
}
• Response: Redirects to the homepage after adding the pizza.
5. GET /edit/
- Render Form to Edit a Pizza
• Description: Renders a form to edit an existing pizza by ID.
• Request Type: GET
• Parameters:
o id (URL parameter): The ID of the pizza to edit.
• Response: HTML form for editing the specified pizza.
6. POST /edit/
- Update a Pizza
• Description: Updates the details of an existing pizza in the database.
• Request Type: POST
• Parameters:
o id (URL parameter): The ID of the pizza to update.
• Payload Example:
JSON
{
 "name": "Margherita",
 "size": "large",
 "price": 14.99
}
• Response: Redirects to the homepage after updating the pizza.
7. GET /delete/
- Delete a Pizza
• Description: Deletes a pizza from the database by its ID.
• Request Type: GET
• Parameters:
o id (URL parameter): The ID of the pizza to delete.
• Response: Redirects to the homepage after deleting the pizza.
Example API Requests:
1. Add a New Pizza (POST /add):
 POST /add
 Content-Type: application/json
 {
 "name": "Hawaiian",
 "size": "large",
 "price": 15.99
 }
2. Edit a Pizza (POST /edit/):
 POST /edit/
 Content-Type: application/json
 {
 " name": "Margherita",
 "size": "medium",
 "price": 12.99
 }
3. Delete a Pizza (GET /delete/):
 GET /delete/
