from sqlalchemy import String, Date, Column
from database import Base


class Client(Base):
    __tablename__  = "clients"
    id = Column(String, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    birth_date = Column(Date)
