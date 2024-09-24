import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import HeaderNotes from "./HeaderNotes";

const storyExport = {
  title: "HeaderNotes",
  component: HeaderNotes,
};
export default storyExport;

const Template: Story<ComponentProps<typeof HeaderNotes>> = (args) => (
    <HeaderNotes {...args} />
);
  
export const Default = Template.bind({});
Default.args = {};
