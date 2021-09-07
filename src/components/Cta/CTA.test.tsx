import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import theme from "@/styles/themes/main.theme";
import Cta from ".";
import { CtaProps } from "./CTA.types";

const props = {
  label: {
    text: "children",
  },
} as CtaProps;

describe("<Cta />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        renderWithTheme(<Cta className="anyClass" />);

        const button = screen.getByRole("button");

        expect(button).toHaveClass("anyClass");
        expect(button.className).toContain("anyClass");
      });
    });

    describe("'onClick' prop features", () => {
      it("should not dispatch function if click event not happen", () => {
        const myFunction = jest.fn();
        renderWithTheme(<Cta onClick={myFunction} />);

        expect(myFunction).not.toHaveBeenCalled();
      });

      it("should dispatch function when click happen", () => {
        const myFunction = jest.fn();

        renderWithTheme(<Cta onClick={myFunction} />);

        const button = screen.getByRole("button");
        userEvent.click(button);

        expect(myFunction).toHaveBeenCalled();
        expect(myFunction).toHaveBeenCalledTimes(1);
      });
    });

    describe("'accessibility' in button", () => {
      it("should render with focus when tab is pressed", () => {
        renderWithTheme(<Cta />);

        expect(document.body).toHaveFocus();

        userEvent.tab();

        expect(document.body).not.toHaveFocus();
        expect(screen.getByRole("button")).toHaveFocus();
      });
    });
  });

  describe("'size' prop features", () => {
    it("should render button size 'xxsmall' when passed", () => {
      renderWithTheme(<Cta size="xxsmall" />);

      expect(screen.getByRole("button")).toHaveStyle({
        padding: theme.models.button.size.xxsmall,
      });
    });

    it("should render button size 'xsmall' when passed", () => {
      renderWithTheme(<Cta size="xsmall" />);

      expect(screen.getByRole("button")).toHaveStyle({
        height: theme.models.button.height.xsmall,
        padding: theme.models.button.size.xsmall,
      });
    });

    it("should render button size 'small' when passed", () => {
      renderWithTheme(<Cta size="small" />);

      expect(screen.getByRole("button")).toHaveStyle({
        height: theme.models.button.height.small,
        padding: theme.models.button.size.small,
      });
    });

    it("should render button size 'medium' by default", () => {
      renderWithTheme(<Cta />);

      expect(screen.getByRole("button")).toHaveStyle({
        height: theme.models.button.height.medium,
        padding: theme.models.button.size.medium,
      });
    });

    it("should render button size 'large' when passed", () => {
      renderWithTheme(<Cta size="large" />);

      expect(screen.getByRole("button")).toHaveStyle({
        height: theme.models.button.height.large,
        padding: theme.models.button.size.large,
      });
    });
    it("should render button size 'xlarge' when passed", () => {
      renderWithTheme(<Cta size="xlarge" />);

      expect(screen.getByRole("button")).toHaveStyle({
        height: theme.models.button.height.xlarge,
        padding: theme.models.button.size.xlarge,
      });
    });
  });

  describe("'label' prop features", () => {
    it("should not render an label if not passed", () => {
      const { container } = renderWithTheme(<Cta />);

      const spanLabel = container.querySelector("span");
      expect(spanLabel).not.toBeInTheDocument();

      expect(
        screen.queryByRole("button", { name: undefined })
      ).toBeInTheDocument();
    });

    it("should check if there is a span element as children button", () => {
      const { container } = renderWithTheme(
        <Cta label={{ text: "children" }} />
      );

      const span = container.querySelector("span");
      expect(span).toBeInTheDocument();
      expect(span?.tagName).toEqual("SPAN");
    });

    it("should render an label when passed", () => {
      renderWithTheme(<Cta label={{ text: "children" }} />);

      expect(screen.getByText("children")).toBeInTheDocument();
    });

    it("should render the label with button conection", () => {
      renderWithTheme(<Cta label={{ text: "children" }} />);

      expect(
        screen.getByRole("button", { name: "children" })
      ).toBeInTheDocument();
    });
  });

  describe("'color' prop features", () => {
    it("should render an 'none' color by default", () => {
      renderWithTheme(<Cta />);

      expect(screen.getByRole("button")).toHaveStyleRule(
        "background-color",
        theme.palette.button.none.main
      );
    });
    it("should render button with 'primary' color when passed", () => {
      renderWithTheme(<Cta color="primary" />);

      expect(screen.getByRole("button")).toHaveStyle({
        "background-color": theme.palette.button.primary.main,
      });
    });
    it("should render button with 'secondary' color when passed", () => {
      renderWithTheme(<Cta color="secondary" />);

      expect(screen.getByRole("button")).toHaveStyle({
        "background-color": theme.palette.button.secondary.main,
      });
    });
    it("should render button with 'white' color when passed", () => {
      renderWithTheme(<Cta color="white" />);

      expect(screen.getByRole("button")).toHaveStyle({
        "background-color": theme.palette.button.white.main,
      });
    });
  });

  describe("'fullWidth' prop features", () => {
    it("should render button fullsize", () => {
      renderWithTheme(<Cta fullWidth />);

      expect(screen.getByRole("button")).toHaveStyle({
        width: "100%",
      });
    });
  });

  describe("'appearance' prop features", () => {
    it("should render the 'button' appearance by default", () => {
      renderWithTheme(<Cta />);

      expect(screen.getByRole("button")).toHaveStyle({
        "border-radius": theme.borderRadius[5],
        outline: "none",
      });
    });

    it("should render the 'none' appearance when passed", () => {
      renderWithTheme(<Cta appearance="none" />);

      expect(screen.getByRole("button")).toHaveStyle({
        "background-color": "transparent",
      });
    });

    it("should render the 'link' appearance when passed", () => {
      renderWithTheme(
        <Cta label={{ color: "blue", text: "children" }} appearance="link" />
      );

      expect(screen.getByRole("button")).toHaveStyle({
        "border-bottom": `0.1rem solid ${theme.palette.text.blue.main}`,
      });
    });
  });

  describe("'icon' prop features", () => {
    it("should not render an icon if not passed", () => {
      renderWithTheme(<Cta />);

      expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });

    it("should  render an icon when passed", () => {
      renderWithTheme(
        <Cta icon={{ listOfChoices: "AddShoppingCart", position: "right" }} />
      );

      expect(
        screen.getByRole("img", { name: /addshoppingcart/i })
      ).toBeInTheDocument();
    });
  });

  describe("'as' prop features", () => {
    it("should not render an polimorphism if not passed", () => {
      const { container } = renderWithTheme(<Cta />);

      const originalElement = container.querySelector("button");
      expect(originalElement).toBeInTheDocument();
    });

    it("should render a button as a link", () => {
      const { container } = renderWithTheme(
        <Cta as="a" href="link" {...props} />
      );

      const anchor = container.querySelector("a");
      expect(anchor).toBeInTheDocument();

      expect(
        screen.getByRole("link", { name: /children/i })
      ).toBeInTheDocument();
      expect(screen.getByRole("link").tagName).toEqual("A");
    });
  });

  describe("'disabled' prop features", () => {
    it("should not render an disabled button if nothing is passed", () => {
      renderWithTheme(<Cta />);

      const button = screen.getByRole("button");

      expect(button).not.toBeDisabled();
      expect(button).not.toHaveStyle({
        color: theme.palette.notify.disabled.main,
        cursor: "not-allowed",
      });
    });

    it("should render disabled with appearence 'button' when passed", () => {
      renderWithTheme(<Cta disabled />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
      expect(button).toHaveStyle({
        "background-color": theme.palette.notify.disabled.light,
        cursor: "not-allowed",
      });
    });

    it("should render disabled with appearence 'link' when passed", () => {
      renderWithTheme(
        <Cta
          as="a"
          href="myLink"
          appearance="link"
          disabled
          label={{ text: "MyLink", color: "white" }}
        />
      );

      expect(screen.getByRole("link")).toHaveStyle({
        "background-color": "transparent",
        cursor: "not-allowed",
      });
    });

    it("should render disabled with appearence 'none' when passed", () => {
      renderWithTheme(
        <Cta
          appearance="none"
          disabled
          label={{ text: "Buy now", color: "white" }}
        />
      );

      expect(screen.getByRole("button")).toHaveStyle({
        "background-color": "transparent",
        cursor: "not-allowed",
      });
    });
  });
});
