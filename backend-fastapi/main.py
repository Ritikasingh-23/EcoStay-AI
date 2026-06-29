from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = FastAPI(title="EcoStay AI API", version="1.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for EcoStay
class EcoStay(BaseModel):
    id: Optional[int] = None
    title: str
    description: str
    location: str
    price: str

# In-memory data (same as Express backend)
eco_stays = [
    EcoStay(id=1, title="Mountain View Cabin", description="A cozy cabin in the Himalayas with solar power and organic meals.", location="Uttarakhand, India", price="$120/night"),
    EcoStay(id=2, title="Beachside Eco-Villa", description="Sustainable villa made from local materials, steps from the ocean.", location="Goa, India", price="$150/night"),
    EcoStay(id=3, title="Forest Treehouse", description="Unique treehouse stay surrounded by nature, perfect for adventure.", location="Kerala, India", price="$90/night"),
]

next_id = 4

# Welcome endpoint
@app.get("/", tags=["Root"])
async def root():
    return {
        "message": "EcoStay API is running!",
        "docs": "http://localhost:8000/docs",
        "redoc": "http://localhost:8000/redoc",
        "endpoints": [
            "GET /api/stays",
            "GET /api/stays/{id}",
            "POST /api/stays",
            "PUT /api/stays/{id}",
            "DELETE /api/stays/{id}",
            "GET /api/stays/search?q=query"
        ]
    }

# Get all stays
@app.get("/api/stays", tags=["EcoStays"], response_model=List[EcoStay])
async def get_all_stays():
    return eco_stays

# Get single stay by ID
@app.get("/api/stays/{stay_id}", tags=["EcoStays"], response_model=EcoStay)
async def get_stay(stay_id: int):
    stay = next((s for s in eco_stays if s.id == stay_id), None)
    if not stay:
        raise HTTPException(status_code=404, detail="Stay not found")
    return stay

# Create new stay
@app.post("/api/stays", tags=["EcoStays"], response_model=EcoStay, status_code=201)
async def create_stay(stay: EcoStay):
    global next_id
    new_stay = EcoStay(
        id=next_id,
        title=stay.title,
        description=stay.description,
        location=stay.location,
        price=stay.price
    )
    eco_stays.append(new_stay)
    next_id += 1
    return new_stay

# Update stay
@app.put("/api/stays/{stay_id}", tags=["EcoStays"], status_code=204)
async def update_stay(stay_id: int, updated_stay: EcoStay):
    index = next((i for i, s in enumerate(eco_stays) if s.id == stay_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Stay not found")
    eco_stays[index] = EcoStay(
        id=stay_id,
        title=updated_stay.title,
        description=updated_stay.description,
        location=updated_stay.location,
        price=updated_stay.price
    )

# Delete stay
@app.delete("/api/stays/{stay_id}", tags=["EcoStays"], status_code=204)
async def delete_stay(stay_id: int):
    global eco_stays
    initial_length = len(eco_stays)
    eco_stays = [s for s in eco_stays if s.id != stay_id]
    if len(eco_stays) == initial_length:
        raise HTTPException(status_code=404, detail="Stay not found")

# Search stays
@app.get("/api/stays/search", tags=["EcoStays"], response_model=List[EcoStay])
async def search_stays(q: Optional[str] = None):
    if not q:
        return eco_stays
    query = q.lower()
    return [
        s for s in eco_stays
        if query in s.title.lower()
        or query in s.description.lower()
        or query in s.location.lower()
    ]

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
