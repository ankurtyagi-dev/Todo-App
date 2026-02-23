# Todo App

A simple REST API for managing todos built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete todos
- MongoDB for data storage
- Express.js for routing
- Input validation

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Environment**: dotenv for configuration

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Todo-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   DATABASE_URL=mongodb://localhost:27017/todoapp
   PORT=4000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. For production:
   ```bash
   npm start
   ```

The server will start on the port specified in `.env` (default: 4000).

## API Endpoints

### Base URL: `http://localhost:4000/api/v1`

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/`               | Home page                |
| POST   | `/createTodo`     | Create a new todo        |
| GET    | `/getTodos`       | Get all todos            |
| GET    | `/getTodos/:id`   | Get a specific todo by ID|
| PUT    | `/updateTodo/:id` | Update a todo by ID      |
| DELETE | `/deleteTodo/:id` | Delete a todo by ID      |

### Request/Response Examples

#### Create Todo
```bash
POST /api/v1/createTodo
Content-Type: application/json

{
  "title": "Sample Todo",
  "description": "This is a sample todo item"
}
```

#### Get All Todos
```bash
GET /api/v1/getTodos
```

#### Update Todo
```bash
PUT /api/v1/updateTodo/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated description"
}
```

## Todo Model

```javascript
{
  title: String (required, max 50 chars),
  description: String (required, max 50 chars),
  createdAt: Date (default: now),
  updatedAt: Date (default: now)
}
```

## Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the ISC License.