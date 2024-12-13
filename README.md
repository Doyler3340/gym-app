# Gym Management App
A web application to manage gym memberships, class schedules, and user profiles.

## Features
- Membership management.
- Class times.
- Contact form submissions stored in MongoDB.

## Screenshots
![Screenshot 2024-12-13 174206](https://github.com/user-attachments/assets/3291f489-a5e5-4f2a-8bbd-ef3c44ca72b0)
![Screenshot 2024-12-13 174108](https://github.com/user-attachments/assets/317bceb6-c91b-4e7f-86c6-62f34b00716b)
![Screenshot 2024-12-13 174046](https://github.com/user-attachments/assets/ff391ff5-47cc-4a69-a019-beddb8c3a7ed)
![Screenshot 2024-12-13 172957](https://github.com/user-attachments/assets/8a7b7fd4-6eaa-4813-9061-4f35386240b8)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-Doyler3340/gym-management-app.git

2. cd gym-management-app
3. npm install
4. npm start

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
2. npm install
3. MONGO_URI=mongodb+srv://Adam3340:Adam3340@cluster.mongodb.net/Cluster0
4. node server.js

## Usage

- Navigate to `http://localhost:3000` to access the frontend.
- Explore membership plans, classes, or contact the gym through the form.

  ## API Endpoints

- **POST /api/contact**: Submits contact form data to the database.
  - Request body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "message": "This is a test message."
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Message saved successfully."
    }
    ```
## Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB
- Tailwind CSS






