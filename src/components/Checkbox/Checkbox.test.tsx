import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import theme from "@/styles/themes/main.theme";

import Checkbox from ".";

describe("<Checkbox />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'checked' prop features", () => {
      it("should not render 'checked' checkbox if not passed", () => {
        renderWithTheme(<Checkbox />);

        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();

        const checkboxIsFalse = screen.getByRole("checkbox", {
          checked: false,
        });
        expect(checkboxIsFalse).toBeInTheDocument();
      });

      it("should render with 'checked' value true when passed", () => {
        renderWithTheme(<Checkbox checked />);

        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeChecked();

        const checkboxIsTrue = screen.getByRole("checkbox", {
          checked: true,
        });
        expect(checkboxIsTrue).toBeInTheDocument();
      });
    });

    describe("'className' prop features", () => {
      it("should render className when passed", () => {
        renderWithTheme(<Checkbox className="myClass" />);

        const checkbox = screen.getByRole("checkbox");

        expect(checkbox.parentElement).toHaveClass("myClass");
        expect(checkbox.parentElement?.className).toContain("myClass");
      });
    });

    describe("'disabled' prop features", () => {
      it("should not render a disabled behavior if not passed", () => {
        renderWithTheme(<Checkbox />);

        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).not.toBeDisabled();
        expect(checkbox).not.toHaveStyle({
          border: `0.2rem solid ${theme.palette.notify.disabled.main}`,
          cursor: "not-allowed",
        });
      });

      it("should render a disabled behavior when passed", () => {
        renderWithTheme(<Checkbox disabled />);

        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).toBeDisabled();

        expect(checkbox).toHaveStyle({
          border: `0.2rem solid ${theme.palette.notify.disabled.main}`,
          cursor: "not-allowed",
        });
        expect(checkbox).toHaveStyleRule(
          "background",
          theme.palette.notify.disabled.main,
          {
            modifier: ":checked",
          }
        );
      });
    });

    describe("'name' prop features", () => {
      it("should not render an checkbox name if not passed", () => {
        renderWithTheme(<Checkbox />);

        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).not.toHaveAttribute("name");
        expect(checkbox.getAttribute("name")).toEqual(null);
      });

      it("should render checkbox name when passed", () => {
        renderWithTheme(<Checkbox name="myName" />);

        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).toHaveAttribute("name", "myName");
        expect(checkbox.getAttribute("name")).toEqual("myName");
      });
    });

    describe("'value' prop features", () => {
      it("should not render an checkbox value if not passed", () => {
        renderWithTheme(<Checkbox />);

        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).not.toHaveAttribute("value");
        expect(checkbox.getAttribute("value")).toEqual(null);
      });

      it("should render checkbox value when passed", () => {
        renderWithTheme(<Checkbox value="something" />);

        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).toHaveAttribute("value", "something");
        expect(checkbox.getAttribute("value")).toEqual("something");
      });
    });

    describe("'accessibility' in checkbox", () => {
      it("should render with focus when tab is pressed", () => {
        renderWithTheme(<Checkbox />);

        expect(document.body).toHaveFocus();
        userEvent.tab();

        expect(document.body).not.toHaveFocus();
        expect(screen.getByRole("checkbox")).toHaveFocus();
      });
    });
  });

  describe("'onValue' prop features", () => {
    it("should not dispatch onValue if onChange event not happen", () => {
      const onValue = jest.fn();
      renderWithTheme(<Checkbox onValue={onValue} />);

      expect(onValue).not.toHaveBeenCalled();
    });

    it("should dispatch onValue if onChange event happen", async () => {
      const onValue = jest.fn();
      renderWithTheme(<Checkbox onValue={onValue} />);

      const checkbox = screen.getByRole("checkbox");
      userEvent.click(checkbox);

      await waitFor(() => {
        expect(onValue).toHaveBeenCalled();
        expect(onValue).toHaveBeenCalledTimes(1);
      });
      expect(onValue).toHaveBeenCalledWith(true);
    });
  });

  describe("'label' prop features", () => {
    it("should not render label if not passed", () => {
      const { container } = renderWithTheme(<Checkbox />);

      const label = container.querySelector("label");
      expect(label).not.toBeInTheDocument();

      expect(
        screen.queryByRole("checkbox", { name: undefined })
      ).toBeInTheDocument();
    });

    it("should check if there is a label element", () => {
      const { container } = renderWithTheme(
        <Checkbox label={{ text: "my label" }} />
      );

      const label = container.querySelector("label");

      expect(label).toBeInTheDocument();
      expect(label?.tagName).toEqual("LABEL");
    });

    it("should render label when passed", () => {
      renderWithTheme(<Checkbox label={{ text: "my label" }} />);

      expect(screen.getByText("my label")).toBeInTheDocument();
    });

    it("should render label when passed with input connection", () => {
      renderWithTheme(
        <Checkbox label={{ text: "my label", htmlFor: "label" }} />
      );

      const label = screen.getByText(/my label/i);
      expect(label).toHaveAttribute("for", "label");

      const checkbox = screen.getByLabelText("my label");
      expect(checkbox).toHaveAttribute("id", "label");

      expect(
        screen.getByRole("checkbox", { name: /my label/i })
      ).toBeInTheDocument();
      expect(screen.getByLabelText(/my label/i).tagName).toEqual("INPUT");
    });
  });

  describe("'color' prop features", () => {
    it("should render checkbox 'primary' by default", () => {
      renderWithTheme(<Checkbox />);

      expect(screen.getByRole("checkbox")).toHaveStyle({
        border: `0.2rem solid ${theme.palette.checkbox.primary.main}`,
      });
    });

    it("should render checkbox 'secondary' when passed", () => {
      renderWithTheme(<Checkbox color="secondary" />);

      expect(screen.getByRole("checkbox")).toHaveStyle({
        border: `0.2rem solid ${theme.palette.checkbox.secondary.dark}`,
      });
    });
  });
});
