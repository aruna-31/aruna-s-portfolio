from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os
from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = "portfolio_data.json"

@app.get("/api/content")
def get_content():
    if not os.path.exists(DATA_FILE):
        return {"error": "Data file not found"}
    with open(DATA_FILE, "r") as f:
        return json.load(f)

@app.post("/api/content")
def update_content(data: Dict[str, Any]):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=2)
    return {"status": "success", "data": data}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
