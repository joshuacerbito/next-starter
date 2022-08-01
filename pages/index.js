import { List } from "../components/list";

export default function Home({ posts }) {
  return (
    <main>
      <h1 className="m-10 text-3xl font-bold underline">FSL 2022</h1>
      <List posts={posts} />
    </main>
  );
}

export async function getStaticProps() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  const postsWithUser = posts.map((post) => ({
    ...post,
    user: users.find(({ id }) => post.userId === id).name,
  }));

  return {
    props: {
      posts: postsWithUser,
    },
  };
}
