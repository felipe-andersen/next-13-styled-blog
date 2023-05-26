import BlogCard from "@/components/home/BlogCard";
import BlogGrid from "@/components/home/BlogGrid";
import { Heading, Section } from "./page.styled";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts`
  );
  const data: IBlog[] = (await response.json()) || [];

  return (
    <main>
      <Section>
        <Heading>Our Blogs</Heading>
        <BlogGrid>
          {data && data.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
        </BlogGrid>
      </Section>
    </main>
  );
}
