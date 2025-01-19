import BlogPostTeaser from "./components/post/Post";
//import { getAllBlogPosts } from "../lib/posts";

//const blogPosts = await getAllBlogPosts();
//
import { getPosts } from "@/lib/utils";

const blogPosts = getPosts();

//const blogPosts = {
//  blogData: [
//    {
//      slug: "Test post",
//      frontmatter: {
//        title: "testing ",
//        date: "yesterday",
//      },
//    },
//  ],
//};

export default function BlogPage() {
  return blogPosts.map((post) => (
    <BlogPostTeaser
      key={post.slug}
      slug={post.slug}
      title={post.title}
      description={post.title}
      date="today"
      readingTime="5 min"
    />
  ));
}
