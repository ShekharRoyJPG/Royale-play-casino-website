import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Testimonials", icon: <CommentRoundedIcon /> },
    { text: "Contact", icon: <PhoneRoundedIcon /> },
  ];

  const colors = {
    main: "#7e1cc4",
    secondary: "#E024E0",
    accent: "#F8F4FB",
    dark: "#3F3D56",
  };

  return (
    <nav
      style={{
        backgroundColor: colors.accent,
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "0 5vw",
        }}
      >
        <span
          style={{
            fontSize: "2rem", // Adjust font size based on needs (can also use viewport units like 5vw)
            fontWeight: "bold",
            whiteSpace: "nowrap", // Prevents text from wrapping to the next line
            textOverflow: "ellipsis", // Ensures text doesn't overflow
            overflow: "hidden",
          }}
        >
          Royale Play Casino
        </span>
      </div>

      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          flex: "2",
          justifyContent: "flex-end",
        }}
      >
        <a href="#" style={{ color: colors.dark, textDecoration: "none" }}>
          Home
        </a>
        <a href="#" style={{ color: colors.dark, textDecoration: "none" }}>
          About
        </a>
        <a href="#" style={{ color: colors.dark, textDecoration: "none" }}>
          Testimonials
        </a>
        <a href="#" style={{ color: colors.dark, textDecoration: "none" }}>
          Contact
        </a>
        <BsCart2 style={{ fontSize: "1.5rem", color: colors.secondary }} />
        <button
          style={{
            backgroundColor: colors.main,
            color: colors.accent,
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
         Download Now
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => setOpenMenu(true)}
      >
        <HiOutlineBars3 style={{ fontSize: "1.5rem", color: colors.dark }} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
          style={{
            width: "250px",
            backgroundColor: colors.accent,
            height: "100%",
          }}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{ color: colors.main }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    style={{ color: colors.dark }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider style={{ backgroundColor: colors.secondary }} />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
