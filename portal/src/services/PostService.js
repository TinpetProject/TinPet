const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
// headers.append("Origin", "http://localhost:3000");

async function getPostComment(postID, token) {
  headers.append("authorization", `Bearer ${token}`,)
  const data = await fetch(`http://localhost:8888/post/${postID}/comment`, {
    method: "GET",
    // body: JSON.stringify(params),
    headers: headers,
  });
  if (!!data && data.status === 200) {
    const retval = await data.json();
    return { code: data.status, data: retval.data };
  } else {
    // alert("Error! " + data.message);
    return { code: data.status, data: undefined };
  }
}

async function getPostByUserID(userID, token) {
  headers.append("authorization", `Bearer ${token}`);
  const data = await fetch(`http://localhost:8888/post/${userID}`, {
    method: "GET",
    // body: JSON.stringify(params),
    headers: headers,
  });
  if (!!data && data.status === 200) {
    const retval = await data.json();
    return { code: data.status, data: retval.data };
  } else {
    // alert("Error! " + data.message);
    return { code: data.status, data: undefined };
  }
}

async function newComment(userID ,postID, content, token) {
  headers.append("authorization", `Bearer ${token}`);
  const values = {'content': content, 'userID': userID}
  const data = await fetch(`http://localhost:8888/post/${postID}/comment`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(values),
  });
  // console.log(data);
  if (!!data && data.status === 200) {
    const retval = await data.json();
    return { code: data.status, data: retval.data };
  } else {
    // alert("Error! " + data.message);
    return { code: data.status, data: undefined };
  }
}

export default Object.freeze({
  getPostComment,
  getPostByUserID,
  newComment,
});

