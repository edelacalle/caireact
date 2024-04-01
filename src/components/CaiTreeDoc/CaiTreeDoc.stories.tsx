import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CaiTreeDoc from "./CaiTreeDoc";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/CaiTreeDoc",
  component: CaiTreeDoc,
} as ComponentMeta<typeof CaiTreeDoc>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CaiTreeDoc> = (args) => <CaiTreeDoc {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Save",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Cliquea",
};