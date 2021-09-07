import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import SectionVideo from ".";
import mock from "./SectionVideo.mock";

describe("<SectionVideo />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <SectionVideo className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'title' prop features", () => {
    it("should render title correctly", () => {
      renderWithTheme(<SectionVideo {...mock} />);

      expect(
        screen.getByRole("heading", { name: mock.title })
      ).toBeInTheDocument();
    });

    it("should render title with html h3 tag", () => {
      const { container } = renderWithTheme(<SectionVideo {...mock} />);

      const tagEl = container.querySelector("h3");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByRole("heading", { name: mock.title }).tagName).toEqual(
        "H3"
      );
    });
  });

  describe("'backgroundImage' prop features", () => {
    it("should render backgroundImage correctly", () => {
      renderWithTheme(<SectionVideo {...mock} />);

      expect(screen.getByAltText(mock.backgroundImage.alt)).toBeInTheDocument();
    });
  });

  describe("'embedURL' prop features", () => {
    it("should render embedURL correctly", () => {
      const { container } = renderWithTheme(<SectionVideo {...mock} />);

      const iframeEl = container.querySelector("iframe");
      expect(iframeEl).toBeInTheDocument();
      expect(iframeEl).toBeTruthy();
    });

    it("should render iframe with src correctly", () => {
      const { container } = renderWithTheme(<SectionVideo {...mock} />);

      const iframeEl = container.querySelector("iframe");
      expect(iframeEl).toHaveAttribute(
        "src",
        `${mock.embedURL}?autoplay=1&mute=1&loop=5&playlist=_6NLhkPMo9w&modestbranding=1&autohide=1&showinfo=0&controls=0`
      );
    });
  });
});
