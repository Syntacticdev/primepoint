import Link from "next/link";
import Image from "next/image";
import React from "react";

const RelatedPostCard = () => {
  return (
    <div className=" relatedPost_card_wrapper border-2 bg-white  border-blue-200 rounded-md m-auto mb-10 w-4/5 p-5 hover:cursor-pointer hover:border-gray-600  ">
      <div className="thumbnail">
        <Image
          src="/images/thumbnail.png"
          width={100}
          height={70}
          layout="responsive"
          alt="post_show_thumbnail"
        />
        <h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
          molestias?
        </h4>
      </div>
    </div>
  );
};

export default RelatedPostCard;
