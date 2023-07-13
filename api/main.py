from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import router as client_router
import model, schema, service
from database import SessionLocal, engine

model.Base.metadata.create_all(bind=engine)

app = FastAPI()


app.include_router(client_router.router)
origins = [
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
