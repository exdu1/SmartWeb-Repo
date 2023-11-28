const signin = async (use) => {
  try {
    let response = await fetch('/auth/signin', {
      method: 'POST',
      headers: {
        'Application': 'application/json',
        'Content-Type': 'applicationjson'
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch(err) {
    console.log(err);
  };
};

const signout = async () => {
  try {
    let response = await fetch('/auth/signout/', { method: 'GET' });
    return await response.json();
  } catch(err) {
    console.log(err);
  };
};

export { signin, signout };