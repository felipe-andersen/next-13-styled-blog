import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import {
  Chip,
  ContentWrapper,
  DateTime,
  Description,
  Flex,
  StyledBlogCard,
  ThumbnailWrapper,
  Title,
} from "./BlogCard.styled";

const BlogCard: React.FC<{ blog: IBlog }> = ({ blog }) => {
  return (
    <Link href={`/${blog.slug}-blogpost-${blog.id}`} passHref>
      <StyledBlogCard>
        <ThumbnailWrapper>
          <div className="image-container">
            <Image
              src={blog.yoast_head_json.og_image[0]?.url}
              alt={blog.slug}
              height={400}
              width={400}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "left",
              }}
            />
          </div>
        </ThumbnailWrapper>
        <ContentWrapper>
          <Flex>
            <Chip>{blog.type}</Chip>
            <DateTime>{format(new Date(blog.date), "MMM. dd, yyyy")}</DateTime>
          </Flex>
          <Title dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
          <Description
            dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
          ></Description>
        </ContentWrapper>
      </StyledBlogCard>
    </Link>
  );
};

export default BlogCard;
