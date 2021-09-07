import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import UserFeedbackCard from ".";
import mock from "./UserFeedbackCard.mock";

jest.mock("@/components/UserFeedbackBase", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock User" />;
    },
  };
});

jest.mock("@/utils/hooks/useIntersectionObserver", () => {
  return {
    __esModule: true,
    useIntersectionObserver: function Mock() {
      return true;
    },
  };
});

describe("<UserFeedbackSocialMedia />", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  describe("'|-html attributes general features", () => {
    describe("'className' prop features", () => {
      it("should render the className when passed", () => {
        const { container } = renderWithTheme(
          <UserFeedbackCard user={mock.user} className="myClass" />
        );

        const wrapper = container.firstElementChild;

        expect(wrapper).toHaveClass("myClass");
      });
    });
  });

  describe("'user' prop features", () => {
    it("should render the user correctly", () => {
      renderWithTheme(<UserFeedbackCard user={mock.user} />);

      expect(screen.getByTestId(/mock user/i)).toBeInTheDocument();
    });

    it("should render user message", () => {
      renderWithTheme(<UserFeedbackCard user={mock.user} />);

      expect(screen.getByText(mock.user.message)).toBeInTheDocument();
    });

    it("should render user message with html 'q' tag", () => {
      const { container } = renderWithTheme(
        <UserFeedbackCard user={mock.user} />
      );

      const tagEl = container.querySelector("q");
      expect(tagEl).toBeInTheDocument();

      expect(screen.getByText(mock.user.message).tagName).toEqual("Q");
    });
  });

  describe("'isAnimation' prop features", () => {
    it("should not render animation if not is passed", () => {
      const { container } = renderWithTheme(
        <UserFeedbackCard user={mock.user} />
      );
      const animationEl = container.firstElementChild;

      expect(animationEl).not.toHaveStyleRule("animation-duration", "0.6s");
    });

    it("should render animation when passed and intersection Observer true", () => {
      const { container } = renderWithTheme(
        <UserFeedbackCard isAnimation user={mock.user} />
      );
      const animationEl = container.firstElementChild;

      expect(animationEl).toHaveStyle({
        "animation-duration": "0.6s",
      });
    });
  });
});
