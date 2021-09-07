import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import SectionFeedback from ".";
import mock from "./SectionFeedback.mock";

jest.mock("@/components/UserFeedbackCard", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock userFeedbackCards" />;
    },
  };
});

describe("<SocialFeedbackSession />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render className when passed", () => {
        const { container } = renderWithTheme(
          <SectionFeedback {...mock} className="myClass" />
        );

        const tagEl = container.firstElementChild;

        expect(tagEl).toHaveClass("myClass");
      });
    });
  });

  describe("'title' prop features", () => {
    it("should render title correctly", () => {
      renderWithTheme(<SectionFeedback {...mock} />);

      expect(
        screen.getByRole("heading", { name: mock.title })
      ).toBeInTheDocument();
    });

    it("should render title correctly", () => {
      const { container } = renderWithTheme(<SectionFeedback {...mock} />);

      const tagEl = container.querySelector("h3");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByRole("heading", { name: mock.title }).tagName).toEqual(
        "H3"
      );
    });
  });

  describe("'userFeedbackCards' prop features", () => {
    it("should render userFeedbackCards correctly", () => {
      renderWithTheme(<SectionFeedback {...mock} />);

      const socialComments = screen.getAllByTestId(/mock userfeedbackcards/i);

      expect(socialComments.length).toBe(6);
    });
  });
});
