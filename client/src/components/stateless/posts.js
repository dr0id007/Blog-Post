import React, { useEffect, useState } from "react";
import { FetchFeed } from "../api/fetch";
import Card from "./card";

const Posts = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dat = async () => {
      const res = await FetchFeed();
      console.log(res);
      setData(res);
    };
    dat();
  }, []);

  return (
    <div>
      {data === []
        ? "...loading.."
        : data.map(item => <Card key={item._id} data={item} />)}
    </div>
  );
};

export default Posts;
