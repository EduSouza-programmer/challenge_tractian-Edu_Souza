/* eslint-disable import/no-unresolved */
import "match-media-mock";

import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import CardHowWorkSlider from ".";
import mock from "./CardHowWorkSlider.mock";

jest.mock("@/components/CardHowWork", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock cardHowWork" />;
    },
  };
});

describe("<CardHowWorkSlider />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(
          <CardHowWorkSlider className="myClass" {...mock} />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
  });

  describe("'cardsHowWorks' prop features", () => {
    it("should render cardsHowWorks correctly", () => {
      renderWithTheme(<CardHowWorkSlider {...mock} />);

      const cards = screen.getAllByTestId(/mock cardhowwork/i);
      expect(cards.length).toEqual(9);
    });
  });
});
