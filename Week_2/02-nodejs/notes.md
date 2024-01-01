# req.query vs req.params
The main difference between `req.query` and `req.params` in Express.js (Node.js framework) lies in how they retrieve information from a request and where they are located:

### req.query:

- Location: Appended to the URL after a question mark `(?)`.
- Format: Key-value pairs separated by ampersands `(&)`.
- Example: `http://localhost:3000/users?id=123&name=John` (accessing 'id' and 'name' with req.query)

Use cases:
1. Filtering data (e.g., searching products by category on an e-commerce site)
2. Pagination (e.g., specifying page number on a list)
3. Sorting data (e.g., ordering products by price)
4. Providing optional parameters

### req.params:

- Location: Defined in the route path enclosed in colons `(:)`.
- Format: Named segments in the path.
- Example: `http://localhost:3000/users/:id`  (accessing user ID with req.params.id)

Use cases:
1. Identifying specific resources (e.g., fetching a specific user by ID)
2. Defining dynamic routes based on resource identifiers
