import React, { useState } from "react";
import { Avatar, Tooltip } from "@mui/material";

const AvatarWithHover = ({ name, avatarSrc }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Tooltip title={name} open={isHovered}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Avatar
          alt={name}
          src={avatarSrc}
          className="customGrid"
          sx={{ bgcolor: "blanchedalmond", width: 45, height: 45 }}
        />
      </div>
    </Tooltip>
  );
};

export default AvatarWithHover;
