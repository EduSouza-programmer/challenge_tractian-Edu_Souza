import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import SectionPerformance from ".";
import mock from "./SectionPerformance.mock";

describe("<SectionPerformance />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <SectionPerformance className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'cardPerformances' prop features", () => {
    it("should render cardPerformances correctly", () => {
      renderWithTheme(<SectionPerformance {...mock} />);

      expect(screen.getAllByRole("img").length).toEqual(3);
    });
  });
});
