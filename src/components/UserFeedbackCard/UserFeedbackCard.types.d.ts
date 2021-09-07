import { HtmlHTMLAttributes } from "react";
import { UserFeedbackBaseProps } from "@/components/UserFeedbackBase/UserFeedbackBase.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type Message = {
  message: string;
};

export type UserFeedbackCardProps = {
  user: UserFeedbackBaseProps<Message>;
  isAnimation?: boolean;
} & Attributes;

export type WrapperProps = { delay: string } & Pick<
  UserFeedbackCardProps,
  "isAnimation"
>;
