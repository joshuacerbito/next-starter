import React from "react";
import { List } from "../list";
import posts from "../../__mocks__/postsMock";
import users from "../../__mocks__/usersMock";

const postsWithUser = posts.map((post) => ({
  ...post,
  user: users.find(({ id }) => post.userId === id).name,
}));

//👇 We create a “template” of how args map to rendering
const Template = (args) => <List {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { posts: postsWithUser };

export default {
  title: "Components/List",
  component: List,
};
