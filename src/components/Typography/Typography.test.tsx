import { screen, waitFor } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import theme from "@/styles/themes/main.theme";

import Typography from ".";
import { TypographyProps } from "./Typography.types";

const props = {
  text: "my heading",
} as TypographyProps;

describe("<Typography />", () => {
  describe("|- html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed ", () => {
        const { container } = renderWithTheme(
          <Typography className="myClass" />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });

    describe("'onClick' prop features", () => {
      it("should not dispatch function if not event click happen ", () => {
        const myFunction = jest.fn();

        renderWithTheme(<Typography onClick={myFunction} />);

        expect(myFunction).not.toHaveBeenCalled();
      });

      it("should dispatch function when click happen", async () => {
        const myFunction = jest.fn();

        renderWithTheme(<Typography onClick={myFunction} />);

        useEvent.click(screen.getByRole("heading"));

        await waitFor(() => {
          expect(myFunction).toHaveBeenCalled();
          expect(myFunction).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe("'dangerouslySetInnerHTML' prop features", () => {
      it("should not render a dangerouslySetInnerHTML if not is passed", () => {
        const { container } = renderWithTheme(<Typography as="div" />);

        expect(container.firstElementChild).toContainHTML("");
      });

      it("should render InnerHTML when passed", () => {
        renderWithTheme(
          <Typography
            as="div"
            dangerouslySetInnerHTML={{ __html: "<button>something</button>" }}
          />
        );
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(
          screen.getByRole("button", { name: /something/i })
        ).toBeInTheDocument();
      });
    });
  });

  describe("'text' prop features", () => {
    it("should not render an text if not passed", () => {
      renderWithTheme(<Typography />);

      expect(screen.getByRole("heading")).toContainHTML("");

      expect(
        screen.queryByRole("heading", { name: undefined })
      ).toBeInTheDocument();
    });

    it("should render an text when passed", () => {
      renderWithTheme(<Typography text="My heading" />);

      expect(screen.getByText(/my heading/i)).toBeInTheDocument();

      expect(
        screen.getByRole("heading", { name: /my heading/i })
      ).toBeInTheDocument();
    });
  });

  describe("'size' prop features", () => {
    it("should not render size if not is passed", () => {
      renderWithTheme(<Typography />);

      expect(screen.getByRole("heading")).toHaveStyleRule(
        "font-size",
        undefined
      );
    });

    it("should render typography size 'medium' when passed", () => {
      renderWithTheme(<Typography size="medium" />);

      const heading = screen.getByRole("heading");

      expect(heading).toHaveStyle({
        "font-size": theme.typography.fontSizes.medium,
      });
    });

    it("should render typography size 'small' when passed", () => {
      renderWithTheme(<Typography size="small" />);

      expect(screen.getByRole("heading")).toHaveStyle({
        "font-size": theme.typography.fontSizes.small,
      });
    });

    it("should render typography size 'xsmall' when passed", () => {
      renderWithTheme(<Typography size="xsmall" />);

      expect(screen.getByRole("heading")).toHaveStyle({
        "font-size": theme.typography.fontSizes.xsmall,
      });
    });

    it("should render typography size 'xxsmall' when passed", () => {
      renderWithTheme(<Typography size="xxsmall" />);

      expect(screen.getByRole("heading")).toHaveStyle({
        "font-size": theme.typography.fontSizes.xxsmall,
      });
    });

    it("should render typography size 'large' when passed", () => {
      renderWithTheme(<Typography size="large" />);

      expect(screen.getByRole("heading")).toHaveStyle({
        "font-size": theme.typography.fontSizes.large,
      });
    });

    it("should render typography size 'xlarge' when passed", () => {
      renderWithTheme(<Typography size="xlarge" />);

      expect(screen.getByRole("heading")).toHaveStyle({
        "font-size": theme.typography.fontSizes.xlarge,
      });
    });

    it("should render typography size 'xxlarge' when passed", () => {
      renderWithTheme(<Typography size="xxlarge" />);

      expect(screen.getByRole("heading")).toHaveStyle({
        "font-size": theme.typography.fontSizes.xxlarge,
      });
    });

    it("should render typography size 'huge' when passed", () => {
      renderWithTheme(<Typography size="huge" />);

      expect(screen.getByRole("heading")).toHaveStyle({
        "font-size": theme.typography.fontSizes.huge,
      });
    });
  });

  describe("'color' prop features", () => {
    it("should render text color 'white' by default", () => {
      renderWithTheme(<Typography />);
      expect(screen.getByRole("heading")).toHaveStyle({
        color: theme.palette.text.white.main,
      });
    });

    it("should render text color 'black' when passed", () => {
      renderWithTheme(<Typography color="black" />);
      expect(screen.getByRole("heading")).toHaveStyle({
        color: theme.palette.text.black.main,
      });
    });

    it("should render text color 'blue' when passed", () => {
      renderWithTheme(<Typography color="blue" />);
      expect(screen.getByRole("heading")).toHaveStyle({
        color: theme.palette.text.blue.main,
      });
    });

    it("should render text color 'pink' when passed", () => {
      renderWithTheme(<Typography color="pink" />);
      expect(screen.getByRole("heading")).toHaveStyle({
        color: theme.palette.text.pink.main,
      });
    });

    it("should render text color 'gray' when passed", () => {
      renderWithTheme(<Typography color="gray" />);
      expect(screen.getByRole("heading")).toHaveStyle({
        color: theme.palette.text.gray.main,
      });
    });
  });

  describe("'responsive' prop features", () => {
    it("should not render responsive text if not passed", () => {
      renderWithTheme(<Typography {...props} />);

      expect(
        screen.getByRole("heading", { name: /my heading/i })
      ).not.toHaveStyle({
        "white-space": "nowrap",
      });
    });

    it("should render typography responsive size", () => {
      renderWithTheme(
        <Typography
          responsive={{ min: 12, max: 20, isNoWrapperText: true }}
          {...props}
        />
      );

      expect(screen.getByRole("heading", { name: /my heading/i })).toHaveStyle({
        "white-space": "nowrap",
      });
    });

    it("should not render responsive typography if prop size is set", () => {
      renderWithTheme(
        <Typography
          size="medium"
          responsive={{ min: 12, max: 20, isNoWrapperText: true }}
          {...props}
        />
      );

      expect(
        screen.getByRole("heading", { name: /my heading/i })
      ).not.toHaveStyle({
        "white-space": "nowrap",
      });

      expect(screen.getByRole("heading", { name: /my heading/i })).toHaveStyle({
        "font-size": theme.typography.fontSizes.medium,
      });
    });
  });

  describe("'as' prop features", () => {
    it("should not render an polimorphims if not is passed", () => {
      const { container } = renderWithTheme(<Typography />);

      const originalElement = container.querySelector("h2");
      expect(originalElement).toBeInTheDocument();
    });

    it("should render with polimorphims styled-compoment 'as'", () => {
      const { container } = renderWithTheme(<Typography as="article" />);

      const article = container.querySelector("article");
      expect(article).toBeInTheDocument();

      expect(screen.getByRole("article")).toBeInTheDocument();
      expect(screen.getByRole("article").tagName).toEqual("ARTICLE");
    });
  });

  describe("'notify' prop features", () => {
    it("should not render an behavior notify if not passed.", () => {
      renderWithTheme(<Typography />);

      const heading = screen.getByRole("heading");

      expect(heading).not.toHaveStyle({
        color: theme.palette.notify.error.main,
      });
      expect(heading).not.toHaveStyle({
        color: theme.palette.notify.warning.main,
      });
      expect(heading).not.toHaveStyle({
        color: theme.palette.notify.success.main,
      });
      expect(heading).not.toHaveStyle({
        color: theme.palette.notify.hint.main,
      });
    });

    it("should render an notify 'success' when passed.", () => {
      renderWithTheme(<Typography notify={{ success: "my success" }} />);

      expect(screen.getByRole("heading")).toHaveStyle({
        color: theme.palette.notify.success.main,
      });
    });

    it("should render an notify 'error' when passed.", () => {
      renderWithTheme(<Typography notify={{ error: "my error" }} />);

      expect(screen.getByRole("heading")).toHaveStyle({
        color: theme.palette.notify.error.main,
      });
    });

    it("should render an notify 'warning' when passed.", () => {
      renderWithTheme(<Typography notify={{ warning: "my warning" }} />);

      expect(screen.getByRole("heading")).toHaveStyle({
        color: theme.palette.notify.warning.main,
      });
    });

    it("should render an notify 'hint' when passed.", () => {
      renderWithTheme(<Typography notify={{ hint: "my hint" }} />);

      expect(screen.getByRole("heading")).toHaveStyle({
        color: theme.palette.notify.hint.main,
      });
    });
  });

  describe("'disabled' prop features", () => {
    it("should not render disabled text if nothing is passed", () => {
      renderWithTheme(<Typography />);

      expect(screen.getByRole("heading")).not.toHaveStyle({
        color: theme.palette.notify.disabled.main,
        cursor: "not-allowed",
      });
    });

    it("should render disabled text when passed", () => {
      renderWithTheme(<Typography disabled />);

      expect(screen.getByRole("heading")).toHaveStyle({
        color: theme.palette.notify.disabled.main,
        cursor: "not-allowed",
      });
    });
  });
});
