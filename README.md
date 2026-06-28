# EcoStay AI
An eco-friendly accommodation platform with AI-powered recommendations.

## How to run backend locally

1. Navigate to backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create .env file (copy from .env.example): `cp .env.example .env` (or create manually)
4. Run development server: `npm run dev`
5. Server will be running on http://localhost:5000

## API Endpoints

- `GET /api/stays` - List all eco-stays
- `GET /api/stays/:id` - Get a single eco-stay by ID
- `POST /api/stays` - Create a new eco-stay
- `PUT /api/stays/:id` - Update an eco-stay
- `DELETE /api/stays/:id` - Delete an eco-stay
- `GET /api/stays/search?q=query` - Search eco-stays
