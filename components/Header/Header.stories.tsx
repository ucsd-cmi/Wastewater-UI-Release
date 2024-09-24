import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import Header from "./Header";
const HeaderLogo = require("@images/rtl_logo.png");

const storyExport = {
  title: "Header",
  component: Header,
};
export default storyExport;

const Template: Story<ComponentProps<typeof Header>> = (args) => (
    <Header {...args} />
  );
  
export const Default = Template.bind({});
Default.args = {
  title: "Wastewater Monitoring Dashboard",
  titlebar_img_src: HeaderLogo,
  titlebar_img_alt: "Return to Learn"
};
