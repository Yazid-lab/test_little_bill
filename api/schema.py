from pydantic import BaseModel
import datetime


class Client(BaseModel):
    id: str
    first_name: str
    last_name: str
    birth_date: datetime.date
