# EcoStay AI
An eco-friendly accommodation platform with AI-powered recommendations.

---

## How to run the project locally

### Prerequisites
- Node.js (for frontend)
- Python 3.8+ (for FastAPI backend)
- pip (Python package manager)

---

## Option 1: FastAPI Backend (Recommended)

### FastAPI Backend Setup
1. Navigate to FastAPI backend folder: `cd backend-fastapi`
2. Create a virtual environment (optional but recommended):
   - Windows: `python -m venv venv && venv\Scripts\activate`
   - macOS/Linux: `python3 -m venv venv && source venv/bin/activate`
3. Install dependencies: `pip install -r requirements.txt`
4. Create .env file (copy from .env.example): `cp .env.example .env`
5. Run development server: `python main.py` (or `uvicorn main:app --reload`)
6. Server will be running on http://localhost:8000

### FastAPI API Documentation
FastAPI automatically generates interactive docs! Visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

### Frontend Setup
1. Open a new terminal in project root
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Frontend will be running on http://localhost:3001

---

## Option 2: Express.js Backend (Original)

### Express Backend Setup
1. Navigate to backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create .env file (copy from .env.example): `cp .env.example .env`
4. Run development server: `npm run dev`
5. Server will be running on http://localhost:5000

### Express API Documentation
- Swagger UI: http://localhost:5000/api-docs

---

## API Endpoints (Both Backends)

- `GET /` - Welcome message
- `GET /api/stays` - List all eco-stays
- `GET /api/stays/{id}` - Get a single eco-stay by ID
- `POST /api/stays` - Create a new eco-stay
- `PUT /api/stays/{id}` - Update an eco-stay
- `DELETE /api/stays/{id}` - Delete an eco-stay
- `GET /api/stays/search?q=query` - Search eco-stays
