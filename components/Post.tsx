import axios from "axios";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

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
      <div className="postpage h-screen text-white overflow-y-scroll p-20">
        <p className="text-6xl">{post.title}</p>
        <p className="text-2xl">Author : {post.author}</p>
        <p className="text-2xl">Points : {post.points}</p>
        <div className="py-10">
          <p className="text-3xl underline">Comments</p>
          {post.children?.map(
            (comment: { id: number; text: string; author: string }) => (
              <div key={comment.id} className="py-4 border-b border-gray-700">
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
      <div className="h-screen text-white p-20">
        <p className="text-6xl">Loading...</p>
      </div>
    );
};
