from fastapi import status
from fastapi.testclient import TestClient
from main import app
import uuid

client = TestClient(app)


def test_create_client():
    id = str(uuid.uuid4())
    response = client.post(
        "/clients",
        json={
            "id": id,
            "first_name": "yazid",
            "last_name": "bougrine",
            "birth_date": "2023-07-15",
        },
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json() <= 5


def test_create_client_missing_param():
    id = str(uuid.uuid4())
    response = client.post(
        "/clients", json={"id": id, "first_name": "test2", "last_name": "test2"}
    )
    assert response.status_code == status.HTTP_422_UNPROCESSABLE_ENTITY
