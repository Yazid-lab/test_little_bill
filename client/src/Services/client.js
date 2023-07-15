function generateRandomId() {
  const length = 8; // Specify the desired length of the random ID

  let randomId = "";

  while (randomId.length < length) {
    randomId += Math.random().toString(36).substring(2);
  }

  // Trim the random ID to the desired length
  randomId = randomId.substring(0, length);

  return randomId;
}

async function createClient(clientData) {
  const response = await fetch("http://127.0.0.1:8000/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: generateRandomId(),
      ...clientData,
    }),
  });
  const data = await response.json();
  return data;
}
export default createClient;
