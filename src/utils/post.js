export async function post(resource, data) {
    const response = await fetch(`http://localhost:8080/${resource}`, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw (response);
    }

    return response;
}