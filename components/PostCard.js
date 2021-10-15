import Link from "next/link";
import Image from "next/image";
import { createClient } from "contentful";
import * as GO from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { useEffect } from "react";
export async function getStaticProps() {
  const client = createClient({
    space: "7gnjvnxxtd47",
    accessToken: "OgOY8SWvI0PrBtCWYquQ123DehJCO1S6XcHedTPMtrY",
  });
  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      data: res.items,
    },
  };
}

// export async function getStaticProps() {
//   const client = createClient({
//     space: "7gnjvnxxtd47",
//     accessToken: "OgOY8SWvI0PrBtCWYquQ123DehJCO1S6XcHedTPMtrY",
//   });

//   const res = await client.getEntries({ content_type: "recipe" });

//   return {
//     props: {
//       reviews: res.items,
//     },
//   };
// }
const PostCard = () => {
  return (
    <div className="post flex border-[#ccc] py-4 ">
      <div className="count_box px-4 xl:px-10 flex justify-center items-center ">
        <h5 className="count font-bold text-blue-400">
          5 <BiLike />{" "}
        </h5>
      </div>

      <div className="post_view">
        <Link href="/post/[id]">
          <a>
            <h3 className="post_title overflow-hidden font-bold text-gray-800 overflow-ellipsis hover:text-yellow-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </a>
        </Link>
        <div className="flex">
          <div className="flex mr-4">
            <GO.GoComment style={{ height: "20px", width: "20px" }} />
            <span className="comment_count pl-1  text-xs">2</span>
          </div>
          {/* <span className="seperator text-2xl px-1">.</span> */}
          <div className="published_time px-1 underline text-xs flex">
            <span>Posted</span>
            <span className="mx-1 capitalize font-bold italic">2hrs ago</span>
          </div>
          <span className="author px-1  text-xs">
            by{" "}
            <span className="underline capitalize font-bold italic ">
              syntactic teams
            </span>
          </span>
        </div>
      </div>
      {/* <div className="thumb_wrap mx-4 border-r-2 border-l-2  border-gray-200 px-2">
        <Image
          src="/images/saving.jpg"
          alt="Post thumbanail"
          width={70}
          height={50}
          style={{ borderRadius: "50%" }}
          className="post_thumb "
        />
      </div> */}
    </div>
  );
};

export default PostCard;
