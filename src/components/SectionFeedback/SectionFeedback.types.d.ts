import { HtmlHTMLAttributes } from "react";

import { UserFeedbackCardProps } from "@/components/UserFeedbackCard/UserFeedbackCard.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type SectionFeedbackProps = {
  title: string;
  userFeedbackCards: UserFeedbackCardProps[];
} & Attributes;
