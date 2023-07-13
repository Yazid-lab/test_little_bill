from sqlalchemy.orm import Session
import model, schema


def create_client(db: Session, client: schema.Client):
    db_client = model.Client(
        id=client.id,
        first_name=client.first_name,
        last_name=client.last_name,
        birth_date=client.birth_date,
    )
    db.add(db_client)
    db.commit()
    db.refresh(db_client)
    return db_client
