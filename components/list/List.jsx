import { PropTypes as PT } from "prop-types";

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

List.propTypes = {
  posts: PT.arrayOf(
    PT.shape({
      id: PT.number.isRequired,
      user: PT.string.isRequired,
      title: PT.string.isRequired,
      body: PT.string.isRequired,
    })
  ).isRequired,
};

export default List;
