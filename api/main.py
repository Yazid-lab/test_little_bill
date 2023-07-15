from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import router as client_router
import model
from database import engine

model.Base.metadata.create_all(bind=engine)

app = FastAPI()


app.include_router(client_router.router)
origins = ["http://localhost", "http://localhost:3000", "http://127.0.0.1"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
