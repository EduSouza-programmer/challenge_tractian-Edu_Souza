import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type Logo = {
  src: string;
  alt?: string;
  dataBlur?: string;
};

type Image = Logo;

export type SectionHeroProps = {
  logo: Logo;
  image: Image;
  title: string;
  caption: string;
  message: string;
  isAnimation?: boolean;
} & Attributes;

export type ContainerProps = Pick<SectionHeroProps, "title">;

export type ImageHeroProps = Pick<SectionHeroProps, "isAnimation">;

export type WrapperLogoProps = Pick<SectionHeroProps, "isAnimation">;
