import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";
import { mediaQueries } from "@/utils/theme/theme.helpers";

import theme from "@/styles/themes/main.theme";

import CardHowWork from ".";
import mock from "./CardHowWork.mock";

describe("<CardHowWork />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <CardHowWork className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'title' prop features", () => {
    it("should render title correctly", () => {
      renderWithTheme(<CardHowWork {...mock} />);

      expect(
        screen.getByRole("heading", { name: mock.title })
      ).toBeInTheDocument();
    });

    it("should render title with html h3 tag", () => {
      const { container } = renderWithTheme(<CardHowWork {...mock} />);

      const tagEl = container.querySelector("h3");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByRole("heading", { name: mock.title }).tagName).toEqual(
        "H3"
      );
    });
  });

  describe("'description' prop features", () => {
    it("should render description correctly", () => {
      renderWithTheme(<CardHowWork {...mock} />);

      expect(screen.getByText(mock.description)).toBeInTheDocument();
    });

    it("should render description with html p tag", () => {
      const { container } = renderWithTheme(<CardHowWork {...mock} />);

      const tagEl = container.querySelector("p");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByText(mock.description).tagName).toEqual("P");
    });
  });

  describe("'image' prop features", () => {
    it("should render image correctly", () => {
      renderWithTheme(<CardHowWork {...mock} />);

      expect(screen.getByAltText(mock.image.alt)).toBeInTheDocument();
    });

    it("should render image position left when passed", () => {
      renderWithTheme(
        <CardHowWork {...mock} image={{ ...mock.image, position: "left" }} />
      );

      const content = screen.getByRole("heading", {
        name: mock.title,
      }).parentElement;

      expect(content).toHaveStyleRule("order", "0", {
        media: `(min-width: ${mediaQueries[990]})`,
      });
    });

    it("should render image position right when passed", () => {
      renderWithTheme(
        <CardHowWork {...mock} image={{ ...mock.image, position: "right" }} />
      );

      const content = screen.getByRole("heading", {
        name: mock.title,
      }).parentElement;

      expect(content).toHaveStyleRule("order", "-1", {
        media: `(min-width: ${mediaQueries[990]})`,
      });
    });
  });

  describe("'cardColor' prop features", () => {
    it("should render cardColor white when passed", () => {
      const { container } = renderWithTheme(
        <CardHowWork {...mock} cardColor="white" />
      );

      const wrapper = container.firstElementChild;

      expect(wrapper).toHaveStyle({
        "background-color": `${theme.palette.page.background.white.main}`,
      });
    });

    it("should render cardColor white when passed", () => {
      const { container } = renderWithTheme(
        <CardHowWork {...mock} cardColor="blue" />
      );

      const wrapper = container.firstElementChild;

      expect(wrapper).toHaveStyle({
        "background-color": `linear-gradient(to right, #2563eb, #1e3a8a)`,
      });
    });
  });
});
