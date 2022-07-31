const List = ({ posts }) => {
  return (
    <section className="m-10 grid grid-cols-3 gap-10">
      {posts.map(({ id, user, title, body }) => (
        <article key={`post-${id}`}>
          <h1 className="block mb-2">
            <span className="capitalize font-bold">{title}</span> by{" "}
            <em>{user}</em>
          </h1>
          <div>{body}</div>
        </article>
      ))}
    </section>
  );
};

export default List;
