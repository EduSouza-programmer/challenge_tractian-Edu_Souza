/* eslint-disable import/no-unresolved */
import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import SectionHowWork from ".";
import mock from "./SectionHowWork.mock";

jest.mock("@/components/CardHowWorkSlider", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock slider" />;
    },
  };
});

jest.mock("@/components/PerceptualCard", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock perceptualCards" />;
    },
  };
});

describe("<SectionHowWork />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <SectionHowWork className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'title' prop features", () => {
    it("should render title correctly", () => {
      renderWithTheme(<SectionHowWork {...mock} />);

      expect(
        screen.getByRole("heading", { name: mock.title })
      ).toBeInTheDocument();
    });

    it("should render title html h3 tag", () => {
      const { container } = renderWithTheme(<SectionHowWork {...mock} />);

      const tagEl = container.querySelector("h3");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByRole("heading", { name: mock.title }).tagName).toEqual(
        "H3"
      );
    });
  });

  describe("'subtitle' prop features", () => {
    it("should render subtitle correctly", () => {
      renderWithTheme(<SectionHowWork {...mock} />);

      expect(
        screen.getByRole("heading", { name: mock.subtitle })
      ).toBeInTheDocument();
    });

    it("should render subtitle correctly", () => {
      const { container } = renderWithTheme(<SectionHowWork {...mock} />);

      const tagEl = container.querySelector("h4");
      expect(tagEl).toBeInTheDocument();

      expect(
        screen.getByRole("heading", { name: mock.subtitle }).tagName
      ).toEqual("H4");
    });
  });

  describe("'cardsHowWorks' prop features", () => {
    it("should render cardsHowWorks correctly", () => {
      renderWithTheme(<SectionHowWork {...mock} />);

      expect(screen.getByTestId(/mock slider/i)).toBeInTheDocument();
    });
  });

  describe("'perceptualCards' prop features", () => {
    it("should render perceptualCards correctly", () => {
      renderWithTheme(<SectionHowWork {...mock} />);

      expect(screen.getAllByTestId(/mock perceptualcards/i).length).toEqual(3);
    });
  });
});
