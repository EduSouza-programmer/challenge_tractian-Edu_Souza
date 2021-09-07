import LandingPage from "@/templates/LandingPage";
import { LandingPageProps } from "@/templates/LandingPage/LandingPage.types";
import mock from "@/templates/LandingPage/LandingPage.mock";
import { GetStaticPropsResult } from "next";

export function getStaticProps(): GetStaticPropsResult<LandingPageProps> {
  return {
    props: {
      ...mock,
    },
  };
}

export default function Index(props: LandingPageProps) {
  return <LandingPage {...props} />;
}
