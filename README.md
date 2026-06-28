# EcoStay AI
An eco-friendly accommodation platform with AI-powered recommendations.

## How to run the project locally

### Prerequisites
- Node.js installed on your machine

### Backend Setup
1. Navigate to backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create .env file (copy from .env.example): `cp .env.example .env` (or create manually)
4. Run development server: `npm run dev`
5. Server will be running on http://localhost:5000

### Frontend Setup
1. Open a new terminal in the project root
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Frontend will be running on http://localhost:3000

## API Documentation (Swagger UI)
Once the backend server is running, you can access the interactive API documentation at:
- http://localhost:5000/api-docs

From Swagger UI, you can:
- View all API endpoints
- Test endpoints directly in your browser
- See request/response examples
- Download API schema

## API Endpoints

- `GET /` - Welcome message
- `GET /api/stays` - List all eco-stays
- `GET /api/stays/:id` - Get a single eco-stay by ID
- `POST /api/stays` - Create a new eco-stay
- `PUT /api/stays/:id` - Update an eco-stay
- `DELETE /api/stays/:id` - Delete an eco-stay
- `GET /api/stays/search?q=query` - Search eco-stays
