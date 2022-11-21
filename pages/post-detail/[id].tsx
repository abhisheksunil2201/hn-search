import { useRouter } from "next/router";
import React from "react";
import { Post } from "../../components/Post";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router?.query;
  return (
    <div className="w-full flex flex-col items-center h-full bg-background-200">
      <Post id={id as string} />
    </div>
  );
};

export default PostDetail;
