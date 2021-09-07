import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import theme from "@/styles/themes/main.theme";

import Icon from ".";
import { IconProps } from "./Icon.types";

const propsRequired = {
  listOfChoices: "Favorite",
} as IconProps;

describe("<Icon />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        renderWithTheme(<Icon className="myClass" {...propsRequired} />);

        expect(screen.getByRole("img").parentElement?.className).toContain(
          "myClass"
        );
      });
    });

    describe("'onClick' prop features", () => {
      it("should render dispacht function when click happen", () => {
        const myOnClick = jest.fn();
        renderWithTheme(<Icon onClick={myOnClick} {...propsRequired} />);

        expect(myOnClick).not.toHaveBeenCalled();

        const icon = screen.getByRole("img");
        userEvent.click(icon);

        expect(myOnClick).toHaveBeenCalled();
        expect(myOnClick).toHaveBeenCalledTimes(1);
      });
    });

    describe("'aria-label' prop features", () => {
      it("should not render aria-label if not passed", () => {
        renderWithTheme(<Icon {...propsRequired} />);

        const icon = screen.getByRole("img");

        expect(icon).not.toHaveAttribute("aria-label");
        expect(icon.getAttribute("aria-label")).toEqual(null);
      });

      it("should render aria-label when passed", () => {
        renderWithTheme(
          <Icon aria-label="any definitions" {...propsRequired} />
        );

        const icon = screen.getByRole("img");

        expect(icon).toHaveAttribute("aria-label", "any definitions");
        expect(icon.getAttribute("aria-label")).toEqual("any definitions");
      });
    });
  });

  describe("'listOfChoices' prop features", () => {
    it("should render an icon when passed", () => {
      renderWithTheme(<Icon {...propsRequired} />);

      expect(
        screen.getByRole("img", { name: /favorite/i })
      ).toBeInTheDocument();
    });
  });

  describe("'size' prop features", () => {
    it("should render an icon with the size 'small' as the default", () => {
      renderWithTheme(<Icon {...propsRequired} />);
      expect(screen.getByRole("img")).toHaveStyle({
        width: theme.models.icon.size.small,
      });
    });
    it("should render an icon with size 'xsmall' when passed", () => {
      renderWithTheme(<Icon size="xsmall" {...propsRequired} />);
      expect(screen.getByRole("img")).toHaveStyle({
        width: theme.models.icon.size.xsmall,
      });
    });
    it("should render an icon with size 'xxsmall' when passed", () => {
      renderWithTheme(<Icon size="xxsmall" {...propsRequired} />);
      expect(screen.getByRole("img")).toHaveStyle({
        width: theme.models.icon.size.xxsmall,
      });
    });
    it("should render an icon with size 'medium' when passed", () => {
      renderWithTheme(<Icon size="medium" {...propsRequired} />);
      expect(screen.getByRole("img")).toHaveStyle({
        width: theme.models.icon.size.medium,
      });
    });
    it("should render an icon with size 'large' when passed", () => {
      renderWithTheme(<Icon size="large" {...propsRequired} />);
      expect(screen.getByRole("img")).toHaveStyle({
        width: theme.models.icon.size.large,
      });
    });
  });

  describe("'color' prop features", () => {
    it("should render the icon color 'white' by default", () => {
      renderWithTheme(<Icon {...propsRequired} />);
      expect(screen.getByRole("img").parentElement).toHaveStyle({
        color: theme.palette.icon.white.main,
      });
    });
    it("should render icon color 'black' when passed", () => {
      renderWithTheme(<Icon color="black" {...propsRequired} />);
      expect(screen.getByRole("img").parentElement).toHaveStyle({
        color: theme.palette.icon.black.main,
      });
    });
    it("should render icon color 'blue' when passed", () => {
      renderWithTheme(<Icon color="blue" {...propsRequired} />);
      expect(screen.getByRole("img").parentElement).toHaveStyle({
        color: theme.palette.icon.blue.main,
      });
    });
    it("should render icon color 'pink' when passed", () => {
      renderWithTheme(<Icon color="pink" {...propsRequired} />);
      expect(screen.getByRole("img").parentElement).toHaveStyle({
        color: theme.palette.icon.pink.main,
      });
    });
  });

  describe("'position' prop features", () => {
    it("should not render a position if not passed", () => {
      renderWithTheme(<Icon {...propsRequired} />);

      expect(screen.getByRole("img").parentElement).not.toHaveStyleRule(
        "margin-right",
        theme.spacings.xxsmall
      );
    });

    it("should render icon position left when passed", () => {
      renderWithTheme(<Icon position="left" {...propsRequired} />);

      expect(screen.getByRole("img").parentElement).toHaveStyle({
        order: 0,
      });
      expect(screen.getByRole("img").parentElement).toHaveStyleRule(
        "margin-right",
        theme.spacings.xxsmall
      );
    });
    it("should render icon position right when passed", () => {
      renderWithTheme(<Icon position="right" {...propsRequired} />);

      expect(screen.getByRole("img").parentElement).toHaveStyle({
        order: 1,
      });
      expect(screen.getByRole("img").parentElement).toHaveStyleRule(
        "margin-left",
        theme.spacings.xxsmall
      );
    });
  });

  describe("'disabled' prop features", () => {
    it("should not render the icon disabled if not is passed", () => {
      renderWithTheme(<Icon {...propsRequired} />);

      expect(screen.getByRole("img").parentElement).not.toHaveStyle({
        color: theme.palette.notify.disabled.main,
        cursor: "not-allowed",
      });
    });
    it("should render icon disabled when passed", () => {
      renderWithTheme(<Icon disabled {...propsRequired} />);

      expect(screen.getByRole("img").parentElement).toHaveStyle({
        color: theme.palette.notify.disabled.main,
        cursor: "not-allowed",
      });
    });
  });

  describe("'notify' prop features", () => {
    it("should not render the icon notify if not is passed", () => {
      renderWithTheme(<Icon {...propsRequired} />);

      expect(screen.getByRole("img").parentElement).not.toHaveStyle({
        color: theme.palette.notify.error.main,
      });
    });

    it("should render icon notify 'success' when passed", () => {
      renderWithTheme(
        <Icon notify={{ success: "my success" }} {...propsRequired} />
      );

      expect(screen.getByRole("img").parentElement).toHaveStyle({
        color: theme.palette.notify.success.main,
      });
    });
    it("should render icon notify 'warning' when passed", () => {
      renderWithTheme(
        <Icon notify={{ warning: "my warning" }} {...propsRequired} />
      );

      expect(screen.getByRole("img").parentElement).toHaveStyle({
        color: theme.palette.notify.warning.main,
      });
    });
    it("should render icon notify 'warning' when passed", () => {
      renderWithTheme(
        <Icon notify={{ error: "my warning" }} {...propsRequired} />
      );

      expect(screen.getByRole("img").parentElement).toHaveStyle({
        color: theme.palette.notify.error.main,
      });
    });
  });
});
