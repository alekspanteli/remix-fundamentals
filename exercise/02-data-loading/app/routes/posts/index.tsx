import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPostListItems } from "~/models/post.server";

export const loader = async () => {
  const posts = await getPostListItems();
  return json({ posts });
  // return json({ posts: posts.map((p) => ({ slug: p.slug, title: p.title })) });
};

export default function Posts() {
  const { posts } = useLoaderData();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {/* @ts-expect-error we'll deal with this in extra credit */}
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
