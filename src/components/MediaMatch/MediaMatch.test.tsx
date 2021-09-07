import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import MediaMatch from ".";

describe("<MediaMatch />", () => {
  let desktopHeading: Element;
  let mobileHeading: Element;

  beforeEach(() => {
    renderWithTheme(
      <>
        <MediaMatch greaterThan="769">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="769">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    );

    desktopHeading = screen.getByTestId("desktop");
    mobileHeading = screen.getByTestId("mobile");
  });

  it("should be hidden if no media query is passed", () => {
    expect(desktopHeading.parentElement).toHaveStyleRule("display", "none");
    expect(mobileHeading.parentElement).toHaveStyleRule("display", "none");
  });

  it("should show or hide based on the media passed", () => {
    expect(desktopHeading.parentElement).toHaveStyleRule("display", "block", {
      media: "(min-width: 769px)",
    });
    expect(mobileHeading.parentElement).toHaveStyleRule("display", "block", {
      media: "(max-width: 769px)",
    });
  });
});
