import React from "react";
import { StyledGrid } from "./BlogGrid.styled";

const BlogGrid: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default BlogGrid;
