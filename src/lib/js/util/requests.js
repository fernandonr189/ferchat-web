export async function post(url, body) {
  let response = await fetch(url, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (response) => {
      return {
        status: response.status,
        content: await response.json(),
      };
    })
    .catch((error) => {
      return {
        status: -1,
        content: error,
      };
    });
  return response;
}

export async function get(url) {
  let response = await fetch(url, {
    credentials: "include",
    method: "GET",
  })
    .then(async (response) => {
      const data = await response.json().catch((err) => {
        return {
          status: response.status,
          content: null,
        };
      });

      return {
        status: response.status,
        content: data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: -1,
        content: error,
      };
    });
  return response;
}
