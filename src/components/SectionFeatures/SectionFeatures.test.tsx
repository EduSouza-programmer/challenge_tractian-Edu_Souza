import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import SectionFeatures from ".";
import mock from "./SectionFeatures.mock";

describe("<SectionFeatures />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <SectionFeatures className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'description' prop features", () => {
    it("should render description correctly", () => {
      renderWithTheme(<SectionFeatures {...mock} />);

      expect(screen.getByText(mock.description)).toBeInTheDocument();
    });

    it("should render description with html p tag", () => {
      const { container } = renderWithTheme(<SectionFeatures {...mock} />);

      const tagEl = container.querySelector("p");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByText(mock.description).tagName).toEqual("P");
    });
  });

  describe("'cardFeatures' prop features", () => {
    it("should render cardFeatures correctly", () => {
      renderWithTheme(<SectionFeatures {...mock} />);

      expect(screen.getAllByRole("img").length).toEqual(4);
    });
  });
});
