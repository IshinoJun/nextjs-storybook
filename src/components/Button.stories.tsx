import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

export const Default = (): JSX.Element => <Button text="test" />;
