import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import VariantTable from "./VariantTable";

const storyExport = {
  title: "VariantTable",
  component: VariantTable,
};
export default storyExport;

const Template: Story<ComponentProps<typeof VariantTable>> = (args) => (
  <VariantTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  latestAvailableDate: new Date(),
};