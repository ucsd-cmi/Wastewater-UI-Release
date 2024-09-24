import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import TitleBar from "./TitleBar";
const HeaderLogo = require("@images/rtl_logo.png");

const storyExport = {
  title: "TitleBar",
  component: TitleBar,
};
export default storyExport;

const Template: Story<ComponentProps<typeof TitleBar>> = (args) => (
    <TitleBar {...args} />
);
  
export const Default = Template.bind({});
Default.args = {
  title: "Wastewater Monitoring Dashboard",
  titlebar_img_src: HeaderLogo,
  titlebar_img_alt: "Return to Learn"
};
