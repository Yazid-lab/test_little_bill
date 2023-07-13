from fastapi import FastAPI
from pydantic import BaseModel
import datetime
from fastapi.middleware.cors import CORSMiddleware


class Client(BaseModel):
    first_name: str
    last_name: str
    birth_date: datetime.date

app = FastAPI()


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/client")
async def create_client(client: Client):
    return client
