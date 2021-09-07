import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import SectionHero from ".";
import mock from "./SectionHero.mock";

jest.mock("@/components/Cta", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="my button" />;
    },
  };
});

describe("<SectionHero />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <SectionHero className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'logo' prop features", () => {
    it("should render logo correctly", () => {
      renderWithTheme(<SectionHero {...mock} />);
      expect(screen.getByAltText(mock.logo.alt!)).toBeInTheDocument();
    });
  });

  describe("'image' prop features", () => {
    it("should render image correctly", () => {
      renderWithTheme(<SectionHero {...mock} />);
      expect(screen.getByAltText(mock.image.alt!)).toBeInTheDocument();
    });
  });

  describe("'title' prop features", () => {
    it("should render title correctly", () => {
      renderWithTheme(<SectionHero {...mock} />);
      expect(
        screen.getByRole("heading", { name: mock.title })
      ).toBeInTheDocument();
    });
    it("should render title with html h2 tag", () => {
      const { container } = renderWithTheme(<SectionHero {...mock} />);

      const tagEl = container.querySelector("h2");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByRole("heading", { name: mock.title }).tagName).toEqual(
        "H2"
      );
    });
  });

  describe("'caption' prop features", () => {
    it("should render caption correctly", () => {
      renderWithTheme(<SectionHero {...mock} />);
      expect(
        screen.getByRole("heading", { name: mock.caption })
      ).toBeInTheDocument();
    });

    it("should render caption with html h3 tag", () => {
      const { container } = renderWithTheme(<SectionHero {...mock} />);

      const tagEl = container.querySelector("h3");
      expect(tagEl).toBeInTheDocument();

      expect(
        screen.getByRole("heading", { name: mock.caption }).tagName
      ).toEqual("H3");
    });
  });

  describe("'message' prop features", () => {
    it("should render message correcty", () => {
      renderWithTheme(<SectionHero {...mock} />);

      expect(screen.getByText(mock.message)).toBeInTheDocument();
    });

    it("should render message with html p tag", () => {
      const { container } = renderWithTheme(<SectionHero {...mock} />);

      const tagEl = container.querySelector("p");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByText(mock.message).tagName).toEqual("P");
    });
  });

  describe("'isAnimation' prop features", () => {
    it("should not render animation if not passed", () => {
      renderWithTheme(<SectionHero {...mock} />);

      const animEl = screen.getByAltText(mock.logo.alt!).parentElement;

      expect(animEl).not.toHaveStyleRule("animation-duration", "0.6s");
    });

    it("should render with animation when is passed", () => {
      renderWithTheme(<SectionHero {...mock} isAnimation />);

      const animEl = screen.getByAltText(mock.logo.alt!).parentElement;

      expect(animEl).toHaveStyleRule("animation-duration", "0.6s");
    });
  });

  describe("'mocks and elements' check if you are being called or in the document", () => {
    it("should render button called correctly", () => {
      renderWithTheme(<SectionHero {...mock} />);

      expect(screen.getByTestId("my button")).toBeInTheDocument();
    });
    it("should render ImageHero correctly", () => {
      renderWithTheme(<SectionHero {...mock} />);

      expect(screen.getAllByRole("img")[1]).toBeInTheDocument();
    });
  });
});
