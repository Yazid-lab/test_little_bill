from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schema import Client
import service
from database import SessionLocal, engine

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/clients")
async def create_client(client: Client, db: Session = Depends(get_db)):
    return service.create_client(db, client)
