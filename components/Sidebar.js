import SearchBox from "./SearchBox";
import SidebarCard from "./SidebarCard";
import Subscribe from "./Subscribe";

const Sidebar = () => {
  return (
    <div className="sidebar xl:ml-10   ">
      <div>
        <h1 className="font-extrabold underline">NYX TWEETS</h1>
      </div>
      <div className=" max-h-screen sidebar_grid  ">
        <SearchBox />
      </div>
      <div className="mt-7 bg-white p-2">
        <Subscribe />
      </div>
    </div>
  );
};

export default Sidebar;
