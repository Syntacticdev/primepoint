import Link from "next/link";

const SidebarCard = ({ tag }) => {
  return (
    <div className="sidebarcard my-4 mr-2 py-2  bg-white border- ">
      <Link href="/reactjs">
        <a className=" text-purple-900 font-medium text-xs p-2">
          <span>Jane</span> tweets 100 days of coding {tag} @newbies
        </a>
      </Link>
    </div>
  );
};

export default SidebarCard;
