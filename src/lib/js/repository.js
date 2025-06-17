export async function request(url, body, method) {
  let response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (response) => {
      return {
        status: response.status,
        data: await response.json(),
      };
    })
    .catch((error) => {
      return {
        status: -1,
        data: error,
      };
    });
  return response;
}
