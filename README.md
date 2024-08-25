
# Cars API

This REST API, built with Node.js, manages a collection of cars using CRUD operations and stores car data in memory.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need Node.js installed on your computer. Download it from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the project**:
   ```
   git clone https://github.com/adnanshafiwork/cars-api.git
   ```
2. **Navigate to the project directory**:
   ```
   cd cars-api
   ```
3. **Install dependencies**:
   ```
   npm install
   ```
4. **Run the server**:
   ```
   node server.js
   ```

### API Endpoints

- **GET /cars** - Retrieves all cars.
- **GET /cars/:id** - Retrieves a car by ID.
- **POST /cars** - Adds a new car.
- **PUT /cars/:id** - Updates an existing car by ID.
- **DELETE /cars/:id** - Deletes a car by ID.

### Testing

Test the API endpoints using tools like Postman or curl.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js

## Author

- **Adnan Shafi**

## License

This project is licensed under the MIT License - see the LICENSE file for details.

