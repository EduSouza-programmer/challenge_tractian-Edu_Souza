import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import PerceptualCard from ".";
import mock from "./PerceptualCard.mock";

describe("<PerceptualCard />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <PerceptualCard className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'perceptual' prop features", () => {
    it("should render perceptual correctly", () => {
      renderWithTheme(<PerceptualCard {...mock} />);

      expect(
        screen.getByRole("heading", { name: mock.perceptual })
      ).toBeInTheDocument();
    });

    it("should render perceptual with html h3 tag", () => {
      const { container } = renderWithTheme(<PerceptualCard {...mock} />);

      const tagEl = container.querySelector("h3");
      expect(tagEl).toBeInTheDocument();

      expect(
        screen.getByRole("heading", { name: mock.perceptual }).tagName
      ).toEqual("H3");
    });
  });

  describe("'message' prop features", () => {
    it("should render message correctly", () => {
      renderWithTheme(<PerceptualCard {...mock} />);

      expect(screen.getByText(mock.message)).toBeInTheDocument();
    });

    it("should render message with html p tag", () => {
      const { container } = renderWithTheme(<PerceptualCard {...mock} />);

      const tagEl = container.querySelector("p");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByText(mock.message).tagName).toEqual("P");
    });
  });
});
