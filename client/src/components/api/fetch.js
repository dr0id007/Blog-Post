import Axios from "axios";

export const FetchFeed = async data => {
  console.log("insert called..");
  const result = await Axios.get("http://127.0.0.1:4000/feed")
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.log(err));
  return result;
};

export const AddPost = async (caption, desc, url) => {
  console.log("add post called..");
  const result = await Axios.post("http://127.0.0.1:4000/add", {
    caption,
    desc,
    url
  })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.log(err));
  return result;
};

export const EditPost = async (id, caption, desc, url) => {
  console.log("post called..");
  const result = await Axios.post("http://127.0.0.1:4000/edit", {
    id,
    caption,
    desc,
    url
  })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.log(err));
  return result;
};

export const DeletePost = async id => {
  console.log("delete called..");
  const result = await Axios.post("http://127.0.0.1:4000/delete", {
    id
  })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.log(err));
  return result;
};
