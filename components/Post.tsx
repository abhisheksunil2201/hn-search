import axios from "axios";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import logo from "./logo.png";
import { Grid } from "react-loader-spinner";

interface IPostProps {
  id: string;
}

interface IPost {
  title: string;
  author: string;
  points: number;
  children: [];
}

export const Post = ({ id }: IPostProps) => {
  console.log(id);

  const [post, setPost] = useState<Partial<IPost>>({});
  useEffect(() => {
    id &&
      axios
        .get(`http://hn.algolia.com/api/v1/items/${id}`)
        .then((post) => setPost(post.data as IPost))
        .catch((err) => console.log(err));
  }, [id]);

  if (post.title) {
    return (
      <div className="postpage h-screen flex flex-col text-white overflow-y-scroll p-20">
        <Image
          className="pt-10 pb-40 self-center"
          src={logo}
          width="500"
          alt=""
        />
        <p className="text-5xl text-green-600">{post.title}</p>
        <p className="text-2xl pt-10 text-gray-500">Author : {post.author}</p>
        <p className="text-2xl text-gray-500">Points : {post.points}</p>
        <div className="py-10">
          <p className="text-3xl text-green-600">Comments</p>
          {post.children?.map(
            (comment: { id: number; text: string; author: string }) => (
              <div
                key={comment.id}
                className="py-4 border-b text-gray-300 border-gray-700"
              >
                {typeof comment.text === "string" &&
                  parse(comment?.text.toString())}
                -{comment.author}
              </div>
            )
          )}
        </div>
      </div>
    );
  } else
    return (
      <div className="h-screen text-white p-20 flex flex-col items-center">
        <Image className="p-10" src={logo} width="500" alt="" />
        <Grid
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
};
