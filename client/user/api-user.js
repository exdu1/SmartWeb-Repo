const create = async (user) => {
  try {
    let response = await fetch('/api/users/', {
      method: 'POST',
      heades: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch(err) {
    console.log(err);
  };
};

export {create};