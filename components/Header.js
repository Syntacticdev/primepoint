import Link from "next/link";
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  const [isAuth, setisAuth] = useState(false);
  return (
    <div className="header z-10 fixed top-0 text-white w-full  m-0 overflow-hidden">
      <nav className="flex justify-between align-middle  py-5 px-8 xl:px-44  bg-black  ">
        <Link href="/">
          <a className="logo  text-2xl font-bold ">PRIME</a>
        </Link>

        <div className="flex ">
          <ul className="action ">
            <li className="inline-block hover:underline hover:transition transition-opacity ">
              <Link href="/user/login">
                <a>
                  <AiOutlineLogin style={{ height: "30px", width: "30px" }} />
                </a>
              </Link>
              {/* <span> / </span>
              <Link href="/user/register">
                <AiOutlineLogin />
              </Link> */}
            </li>
            {isAuth && (
              <li className="inline-block mx-3 py-1 px-2 rounded bg-blue-400 text-white hover:bg-yellow-300">
                <Link href="/post/new">
                  <a>New Post</a>
                </Link>
              </li>
            )}
          </ul>
          {/* <input
            type="text"
            placeholder="Search"
            className="ml-3 px-2 rounded text-sm"
          /> */}
        </div>
      </nav>

      <ul className="nav2 bg-purple-400 text-white py-2 px-4 flex justify-center  xl:px-44 sm:px-10 xl:justify-start">
        <li>
          <Link href="/top">
            <a>Top</a>
          </Link>
        </li>
        <li>
          <Link href="/top">
            <a>Recent</a>
          </Link>
        </li>
        <li>
          <Link href="/top">
            <a>Starred</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/top">
            <a>Sponsored Post</a>
          </Link>
        </li> */}
        <li>
          <Link href="/user/profile">
            <a>Profile</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
