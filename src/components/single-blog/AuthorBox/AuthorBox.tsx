import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import { StyledAuthorBox } from "./AuthorBox.styled";

export const AuthorBox: React.FC<{ data: IBlog }> = ({ data }) => {
  return (
    <StyledAuthorBox>
      <div className="avatar">
        <Image
          src="/images/user-profile.png"
          alt="Avatar"
          width={48}
          height={48}
          style={{
            height: "3rem",
            width: "3rem",
            position: "absolute",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div>
        <h3 className="name">{data.yoast_head_json?.author}</h3>
        <p className="date">{format(new Date(data.date), "MMMM dd, yyyy")}</p>
      </div>
    </StyledAuthorBox>
  );
};
