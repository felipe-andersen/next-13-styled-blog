import { Chip, DateTime } from "@/components/home/BlogCard/BlogCard.styled";
import React from "react";
import { Section } from "../page.styled";
import {
  AuthorContainer,
  ContentWrapper,
  Flex,
  Heading,
  ThumbnailWrapper,
  Title,
} from "./page.styled";
import { format } from "date-fns";
import { readingTime } from "@/utils/readingTime";
import Image from "next/image";
import SocialShare from "@/components/single-blog/SocialShareContainer";
import HtmlParser from "@/components/global/HtmlParser";
import { Metadata } from "next";
import AuthorBox from "@/components/single-blog/AuthorBox";
import BlogGrid from "@/components/home/BlogGrid";
import BlogCard from "@/components/home/BlogCard";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const [_, id] = params.slug.split("-blogpost-");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts/${id}`
  );
  const data: IBlog = await response.json();
  return {
    title: data.yoast_head_json?.title,
    description: data.yoast_head_json?.og_description,
    publisher: data.yoast_head_json?.author,
    openGraph: {
      title: data.yoast_head_json?.title,
      description: data.yoast_head_json?.og_description,
      publisher: data.yoast_head_json?.author,
      images: data.yoast_head_json?.og_image?.map((item) => item.url),
    },
  } as Metadata;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const [_, id] = params.slug.split("-blogpost-");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts/${id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data: IBlog = await response.json();

  const similarBlogResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts`
  );
  let similarBlogs: IBlog[] = (await similarBlogResponse.json()) || [];
  similarBlogs = similarBlogs
    .filter((blog) => blog.id !== parseInt(id))
    .slice(0, 2);

  return (
    <main>
      <Section>
        <Flex>
          <Chip>{data.type}</Chip>
          <span>•</span>
          <DateTime>
            {readingTime(data.content?.rendered || "")} min read
          </DateTime>
        </Flex>
        <Title>{data.title?.rendered}</Title>
        <AuthorContainer>
          <AuthorBox data={data} />
          <SocialShare />
        </AuthorContainer>
        <ThumbnailWrapper>
          <div className="image-container">
            <Image
              src={data.yoast_head_json.og_image[0]?.url}
              alt={data.slug}
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
          <HtmlParser content={data.content.rendered} />
        </ContentWrapper>
        <br />
        <Heading>Similar blogs</Heading>
        <BlogGrid>
          {similarBlogs.map((blog) => (
            <BlogCard blog={blog} key={blog.slug} />
          ))}
        </BlogGrid>
      </Section>
    </main>
  );
}
