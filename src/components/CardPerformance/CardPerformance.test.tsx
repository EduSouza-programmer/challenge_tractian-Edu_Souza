import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";
import { mediaQueries } from "@/utils/theme/theme.helpers";

import CardPerformance from ".";
import mock from "./CardPerformance.mock";

describe("<CardPerformance />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <CardPerformance className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'title' prop features", () => {
    it("should render title correctly", () => {
      renderWithTheme(<CardPerformance {...mock} />);

      expect(
        screen.getByRole("heading", { name: mock.title })
      ).toBeInTheDocument();
    });

    it("should render title with html h3 tag", () => {
      const { container } = renderWithTheme(<CardPerformance {...mock} />);

      const tagEl = container.querySelector("h3");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByRole("heading", { name: mock.title }).tagName).toEqual(
        "H3"
      );
    });
  });

  describe("'description' prop features", () => {
    it("should render description correctly", () => {
      renderWithTheme(<CardPerformance {...mock} />);

      expect(screen.getByText(mock.description)).toBeInTheDocument();
    });
  });

  describe("'image' prop features", () => {
    it("should render image correctly", () => {
      renderWithTheme(<CardPerformance {...mock} />);

      expect(screen.getByAltText(mock.image.alt)).toBeInTheDocument();
    });

    it("should render image right position when passed", () => {
      renderWithTheme(
        <CardPerformance
          {...mock}
          image={{ ...mock.image, position: "right" }}
        />
      );

      const wrapperImage = screen.getByRole("img").parentElement;
      expect(wrapperImage).toHaveStyleRule("order", "0", {
        media: `(min-width: ${mediaQueries[900]})`,
      });
    });

    it("should render image left position when passed", () => {
      renderWithTheme(
        <CardPerformance
          {...mock}
          image={{ ...mock.image, position: "left" }}
        />
      );

      const wrapperImage = screen.getByRole("img").parentElement;
      expect(wrapperImage).toHaveStyleRule("order", "-1", {
        media: `(min-width: ${mediaQueries[900]})`,
      });
    });
  });
});
