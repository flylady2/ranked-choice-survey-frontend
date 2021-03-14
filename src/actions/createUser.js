

export function createUser(data) {
  //debugger;
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/signup',{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)

    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        localStorage.setItem('jwt_token', data.jwt)
        dispatch({
            type: 'CREATE_USER',
            payload: data.user
      })
        //dispatch(loginUser(data.user))
      }
    })

  }
}
