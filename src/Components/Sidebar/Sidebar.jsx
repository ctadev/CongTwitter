import React, { useEffect, useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SidebarItems from "./SidebarItems";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreOutlinedIcon from "@mui/icons-material/MoreOutlined";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import "./sidebar.scss";

function Sidebar() {
  const useWindowSize = () => {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setSize(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  };

  const width = useWindowSize();

  if (width > 1100) {
    return (
      <div className="sidebar-container">
        <div className="fixed-container">
          <div className="twitter-icon">
            <TwitterIcon />
          </div>
          <SidebarItems text="Home" Icon={HomeIcon} />
          <SidebarItems text="Explore" Icon={TagIcon} />
          <SidebarItems text="Notifications" Icon={NotificationsOutlinedIcon} />
          <SidebarItems text="Messages" Icon={MailOutlineIcon} />
          <SidebarItems text="Bookmarks" Icon={BookmarksOutlinedIcon} />
          <SidebarItems text="Lists" Icon={FeaturedPlayListOutlinedIcon} />
          <SidebarItems text="Profile" Icon={PermIdentityOutlinedIcon} />
          <SidebarItems text="More" Icon={MoreOutlinedIcon} />
          <button>Tweet</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-container">
        <div className="fixed-container">
          <div className="twitter-icon">
            <TwitterIcon />
          </div>
          <SidebarItems text="Home" Icon={HomeIcon} />
          <SidebarItems text="Explore" Icon={TagIcon} />
          <SidebarItems text="Notifications" Icon={NotificationsOutlinedIcon} />
          <SidebarItems text="Messages" Icon={MailOutlineIcon} />
          <SidebarItems text="Bookmarks" Icon={BookmarksOutlinedIcon} />
          <SidebarItems text="Lists" Icon={FeaturedPlayListOutlinedIcon} />
          <SidebarItems text="Profile" Icon={PermIdentityOutlinedIcon} />
          <SidebarItems text="More" Icon={MoreOutlinedIcon} />
          <button>
            <HistoryEduIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
