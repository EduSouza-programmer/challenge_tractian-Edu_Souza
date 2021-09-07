/* eslint-disable import/no-unresolved */
import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import LandingPage from ".";
import mock from "./LandingPage.mock";

jest.mock("@/components/SectionHero", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="sectionHero mock" />;
    },
  };
});

jest.mock("@/components/SectionFeatures", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="sectionVideo mock" />;
    },
  };
});

jest.mock("@/components/SectionVideo", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="sectionFeatures mock" />;
    },
  };
});

jest.mock("@/components/SectionPerformance", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="sectionPerformance mock" />;
    },
  };
});

jest.mock("@/components/SectionHowWork", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="sectionHowWork mock" />;
    },
  };
});

jest.mock("@/components/SectionFeedback", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="sectionFeedback mock" />;
    },
  };
});

jest.mock("@/components/SectionFooter", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="sectionFooter mock" />;
    },
  };
});

describe("<LandingPage />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <LandingPage className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'sectionHero' prop features", () => {
    it("should render sectionHero correctly", () => {
      renderWithTheme(<LandingPage {...mock} />);

      expect(screen.getByTestId("sectionHero mock")).toBeInTheDocument();
    });
  });

  describe("'sectionFeatures' prop features", () => {
    it("should render sectionFeatures correctly", () => {
      renderWithTheme(<LandingPage {...mock} />);

      expect(screen.getByTestId("sectionFeatures mock")).toBeInTheDocument();
    });
  });

  describe("'sectionVideo' prop features", () => {
    it("should render sectionVideo correctly", () => {
      renderWithTheme(<LandingPage {...mock} />);

      expect(screen.getByTestId("sectionVideo mock")).toBeInTheDocument();
    });
  });

  describe("'sectionPerformance' prop features", () => {
    it("should render sectionPerformance correctly", () => {
      renderWithTheme(<LandingPage {...mock} />);

      expect(screen.getByTestId("sectionPerformance mock")).toBeInTheDocument();
    });
  });

  describe("'sectionHowWork' prop features", () => {
    it("should render sectionHowWork correctly", () => {
      renderWithTheme(<LandingPage {...mock} />);

      expect(screen.getByTestId("sectionHowWork mock")).toBeInTheDocument();
    });
  });

  describe("'sectionFeedback' prop features", () => {
    it("should render sectionFeedback correctly", () => {
      renderWithTheme(<LandingPage {...mock} />);

      expect(screen.getByTestId("sectionFeedback mock")).toBeInTheDocument();
    });
  });

  describe("'sectionFooter' prop features", () => {
    it("should render sectionFooter correctly", () => {
      renderWithTheme(<LandingPage {...mock} />);

      expect(screen.getByTestId("sectionFooter mock")).toBeInTheDocument();
    });
  });
});
