import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import CardFeature from ".";
import mock from "./CardFeature.mock";

describe("<CardFeature />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <CardFeature className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'imageIcon' prop features", () => {
    it("should render imageIcon correctly", () => {
      renderWithTheme(<CardFeature {...mock} />);

      expect(screen.getByAltText(mock.imageIcon.alt)).toBeInTheDocument();
    });
  });

  describe("'title' prop features", () => {
    it("should render title correctly", () => {
      renderWithTheme(<CardFeature {...mock} />);

      expect(
        screen.getByRole("heading", { name: mock.title })
      ).toBeInTheDocument();
    });

    it("should render title with html h3 tag", () => {
      const { container } = renderWithTheme(<CardFeature {...mock} />);

      const tagEl = container.querySelector("h3");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByRole("heading", { name: mock.title }).tagName).toEqual(
        "H3"
      );
    });
  });

  describe("'description' prop features", () => {
    it("should render description correctly", () => {
      renderWithTheme(<CardFeature {...mock} />);

      expect(screen.getByText(mock.description)).toBeInTheDocument();
    });

    it("should render description with html p tag", () => {
      const { container } = renderWithTheme(<CardFeature {...mock} />);

      const tagEl = container.querySelector("p");

      expect(tagEl).toBeInTheDocument();

      expect(screen.getByText(mock.description).tagName).toEqual("P");
    });
  });
});
