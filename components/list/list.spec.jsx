import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { List } from "./";

describe("Components/List", () => {
  const posts = [
    {
      id: 1,
      user: "Amelia Pond",
      userId: 1,
      title: "The Girl Who Waited",
      body: "I'm a kissagram!",
    },
    {
      id: 2,
      user: "Clara Oswald",
      userId: 2,
      title: "The Impossible Girl",
      body: "I'm not a dalek!",
    },
  ];

  it("renders the right amount of articles", () => {
    render(<List posts={posts} />);
    const articles = screen.getAllByRole("article");

    expect(articles.length).toBe(2);
  });

  it("renders titles properly (concatenates post title and user's name", () => {
    render(<List posts={posts} />);
    const headings = screen.getAllByRole("heading");
    headings.forEach((heading, index) => {
      const { title, user } = posts[index];
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe(`${title} by ${user}`);
    });
  });
});
