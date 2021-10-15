import Link from "next/link";
import React from "react";
import RelatedPostCard from "./RelatedPostCard";

const RelatedPost = () => {
  let c = <RelatedPostCard />;

  return (
    <div>
      <h1 className=" italic m-4 ">RELATED POST</h1>
      <div className="related_post_wrapper ">
        {Array(3)
          .fill(<RelatedPostCard />)
          .map((card) => {
            return (
              <div key={Math.random()}>
                <Link href="/post/[id]">
                  <a>{card}</a>
                </Link>
                ;
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RelatedPost;
