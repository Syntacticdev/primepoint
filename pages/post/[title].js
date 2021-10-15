import Image from "next/image";
import RelatedPost from "../../components/RelatedPost";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Post = () => {
  return (
    <div className="post_preview box_container single_post_wrapper gap-10 ">
      <div className="post_wrapper bg-white ">
        <div className=" post_head title preview_title pl-6  pr-2  py-2 preview_title relative ">
          <h1 className="font-bold text-xl ">
            <span className="font-bold italic  ">Title: </span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing.</span>
          </h1>
          <div className="tag font-extralight italic ">
            <span>Soccer </span>
            <span>Transfer News </span>
            <span>EPL</span>
          </div>
        </div>
        <div className="post_body p-6">
          <div className="border-2 my-8 border-gray-400 py-8 rounded-md ">
            <Image
              src="/images/thumbnail.png"
              width={1000}
              height={500}
              layout="responsive"
              alt="Post thumbnail"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            laborum molestiae laboriosam necessitatibus quos illum a cumque nam
            nihil. Minus animi eligendi fugiat mollitia reiciendis tenetur
            possimus inventore sit minima, nulla libero natus voluptas ipsa
            ducimus excepturi laboriosam nam, esse voluptatem ea nesciunt
            asperiores repellendus incidunt porro! Non sequi, ratione labore
            laboriosam, cupiditate temporibus consectetur pariatur beatae odio
            quaerat fugit unde? Fugiat est, veniam odit vel fuga voluptatum id
            omnis cum aperiam velit dolorum voluptas rem ex inventore dolores
            beatae modi molestias fugit labore. Aspernatur maiores animi
            molestiae quis soluta nihil id officiis impedit deleniti dolore,
            mollitia quisquam totam, nemo quasi temporibus ipsam cumque sed, cum
            nesciunt dolores. Quae ea quis pariatur similique quam deserunt
            voluptas a sequi officiis maiores necessitatibus vero minima eaque
            magni amet accusantium sunt, esse possimus rerum temporibus
            doloremque molestiae? Quia repudiandae quam error dolores natus aut
            fugit dicta, excepturi illo fugiat illum in incidunt dolore,
            nesciunt distinctio, tempore id sequi dolorum officia maiores hic
            qui cum. Iste in amet ut aspernatur totam neque maiores molestiae
            nostrum est. Quod tempora id molestias! Saepe reprehenderit
            blanditiis sunt. Dolorem, dignissimos consequuntur dolor dolorum
            modi eius molestiae praesentium tempore, consequatur quisquam magni,
            voluptas voluptatem ea animi inventore sit fugiat rem? Deleniti
            suscipit quo architecto inventore natus facilis dolorem, quia
            corrupti pariatur quidem quod dicta modi dolor ipsam. Enim autem
            molestias corporis! Accusantium culpa dicta vitae maxime, voluptas
            ab tempora natus aut fugit facilis odit nam, eligendi quas
            voluptatem suscipit excepturi debitis expedita cumque fugiat officia
            repellat eum! Reprehenderit beatae in maxime et consectetur
            exercitationem commodi facilis repellat neque quibusdam eos quos
            vero qui molestias facere temporibus labore sit quasi fugit, vel
            nihil! Qui doloremque dicta nulla voluptates debitis architecto
            optio tempore eaque dolores ipsa vel labore voluptatibus ab aliquid
            placeat accusantium, consequatur nobis omnis, nemo quidem. Ipsam,
            incidunt porro!
          </p>
        </div>
        <div className="share_container">
          <FacebookShareButton
            url="thistat.dev"
            quote="You are doing Well"
            hashtag="#Detts"
          >
            <FacebookIcon className="h-8 w-8 " name="Fave" />
          </FacebookShareButton>
          <TwitterShareButton>
            <TwitterIcon className=" h-8 w-8 " />
          </TwitterShareButton>
          <WhatsappShareButton>
            <WhatsappIcon className=" h-8 w-8 " />
          </WhatsappShareButton>
          <EmailShareButton>
            <EmailIcon className=" h-8 w-8 " />
          </EmailShareButton>
        </div>
      </div>
      <RelatedPost />
    </div>
  );
};

export default Post;
