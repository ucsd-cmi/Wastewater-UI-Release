import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import SearchBox from "./SearchBox";

const storyExport = {
  title: "SearchBox",
  component: SearchBox,
};
export default storyExport;

const Template: Story<ComponentProps<typeof SearchBox>> = (args) => (
    <SearchBox {...args} />
);
  
export const Default = Template.bind({});
Default.args = {};
