import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import SectionFooter from ".";
import mock from "./SectionFooter.mock";

jest.mock("@/components/TextField", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock textField" />;
    },
  };
});

jest.mock("@/components/Cta", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock buttons" />;
    },
  };
});

describe("<SectionFooter />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <SectionFooter className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'title' prop features", () => {
    it("should render title correctly", () => {
      renderWithTheme(<SectionFooter {...mock} />);

      expect(
        screen.getByRole("heading", { name: mock.title })
      ).toBeInTheDocument();
    });

    it("should render title with html h3 tag", () => {
      const { container } = renderWithTheme(<SectionFooter {...mock} />);

      const tagEl = container.querySelector("h3");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByRole("heading", { name: mock.title }).tagName).toEqual(
        "H3"
      );
    });
  });

  describe("'subtitle' prop features", () => {
    it("should render subtitle correctly", () => {
      renderWithTheme(<SectionFooter {...mock} />);

      expect(
        screen.getByRole("heading", { name: mock.subtitle })
      ).toBeInTheDocument();
    });

    it("should render subtitle with html h4 tag", () => {
      const { container } = renderWithTheme(<SectionFooter {...mock} />);

      const tagEl = container.querySelector("h4");
      expect(tagEl).toBeInTheDocument();

      expect(
        screen.getByRole("heading", { name: mock.subtitle }).tagName
      ).toEqual("H4");
    });
  });

  describe("'message' prop features", () => {
    it("should render message correctly", () => {
      renderWithTheme(<SectionFooter {...mock} />);

      expect(screen.getByText(mock.message)).toBeInTheDocument();
    });

    it("should render message with html p tag", () => {
      const { container } = renderWithTheme(<SectionFooter {...mock} />);

      const tagEl = container.querySelector("p");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByText(mock.message).tagName).toEqual("P");
    });
  });

  describe("'image' prop features", () => {
    it("should render image correctly", () => {
      renderWithTheme(<SectionFooter {...mock} />);

      expect(screen.getByAltText(mock.image.alt)).toBeInTheDocument();
    });
  });

  describe("'mocks and elements' check if you are being called or in the document", () => {
    it("should render TextField called correctly", () => {
      renderWithTheme(<SectionFooter {...mock} />);

      expect(screen.getByTestId("mock textField")).toBeInTheDocument();
    });
    it("should render Buttons correctly", () => {
      renderWithTheme(<SectionFooter {...mock} />);

      expect(screen.getAllByTestId("mock buttons").length).toEqual(2);
    });
  });
});
