import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import theme from "@/styles/themes/main.theme";

import TextField from ".";

describe("<TextField />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'placeholder' prop features", () => {
      it("should not render an placeholder if not passed", () => {
        renderWithTheme(<TextField />);

        const textbox = screen.getByRole("textbox");

        expect(textbox).not.toHaveAttribute("placeholder");
        expect(textbox.getAttribute("placeholder")).toEqual(null);
        expect(
          screen.queryByPlaceholderText(/my placeholder/i)
        ).not.toBeInTheDocument();
      });

      it("should render with placeholder when passed", () => {
        renderWithTheme(<TextField placeholder="my placeholder" />);

        const textbox = screen.getByRole("textbox");

        expect(textbox).toHaveAttribute("placeholder", "my placeholder");

        expect(textbox.getAttribute("placeholder")).toEqual("my placeholder");

        expect(
          screen.getByPlaceholderText(/my placeholder/i)
        ).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/my placeholder/i).tagName).toEqual(
          "INPUT"
        );
      });
    });

    describe("'disabled' prop features", () => {
      it("should not render disabled behavior if not passed", () => {
        renderWithTheme(<TextField />);

        const textbox = screen.getByRole("textbox");

        expect(textbox).not.toBeDisabled();
        expect(textbox.parentElement).not.toHaveStyle({
          "background-color": theme.palette.notify.disabled.light,
        });
      });

      it("should render disabled behavior when passed", () => {
        renderWithTheme(<TextField disabled />);

        const textbox = screen.getByRole("textbox");

        expect(textbox).toBeDisabled();
        expect(textbox.parentElement).toHaveStyle({
          "background-color": theme.palette.notify.disabled.light,
        });
        expect(textbox).toHaveStyle({
          cursor: "not-allowed",
        });
      });
    });

    describe("'className' prop features", () => {
      it("should render className when passed", () => {
        const { container } = renderWithTheme(
          <TextField className="myClass" />
        );

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });

    describe("'name' prop features", () => {
      it("should not render an name if not is passed", () => {
        renderWithTheme(<TextField />);

        const textbox = screen.getByRole("textbox");

        expect(textbox).not.toHaveAttribute("name");
        expect(textbox.getAttribute("name")).toEqual(null);
      });

      it("should render textfield name when passed", () => {
        renderWithTheme(<TextField name="myName" />);

        const textbox = screen.getByRole("textbox");

        expect(textbox).toHaveAttribute("name", "myName");
        expect(textbox.getAttribute("name")).toEqual("myName");
      });
    });

    describe("'value' prop features", () => {
      it("should not render an textfield value if not is passed", () => {
        renderWithTheme(<TextField />);

        const textbox = screen.getByRole("textbox");

        expect(textbox).not.toHaveAttribute("value");
        expect(textbox.getAttribute("value")).toEqual(null);
      });

      it("should render textfield value when passed", () => {
        renderWithTheme(<TextField value="myValue" />);

        const textbox = screen.getByRole("textbox");

        expect(textbox).toHaveAttribute("value", "myValue");
        expect(textbox.getAttribute("value")).toEqual("myValue");
      });
    });

    describe("'accessibility' in textField", () => {
      it("should render with focus when tab is pressed", () => {
        renderWithTheme(<TextField />);

        expect(document.body).toHaveFocus();
        userEvent.tab();

        expect(document.body).not.toHaveFocus();
        expect(screen.getByRole("textbox")).toHaveFocus();
      });
    });
  });

  describe("'onValue' prop features", () => {
    it("should not dispatch onValue if onChange event not happen", async () => {
      const onValue = jest.fn();
      renderWithTheme(<TextField onValue={onValue} />);

      expect(onValue).not.toHaveBeenCalled();
    });

    it("should dispatch onValue when onChange event happen", async () => {
      const onValue = jest.fn();
      renderWithTheme(<TextField onValue={onValue} />);

      const input = screen.getByRole("textbox");
      const text = "my text";

      userEvent.type(input, text);

      await waitFor(() => {
        expect(input).toHaveValue(text);
        expect(onValue).toHaveBeenCalledTimes(text.length);
      });

      expect(onValue).toHaveBeenCalledWith(text);
    });
  });

  describe("'size' prop features", () => {
    it("should render size 'medium' by default", () => {
      renderWithTheme(<TextField />);

      expect(screen.getByRole("textbox")).toHaveStyle({
        padding: theme.models.textField.size.medium,
      });
    });
    it("should render size 'small' when passed", () => {
      renderWithTheme(<TextField size="small" />);

      expect(screen.getByRole("textbox")).toHaveStyle({
        padding: theme.models.textField.size.small,
      });
    });
    it("should render size 'large' when passed", () => {
      renderWithTheme(<TextField size="large" />);

      expect(screen.getByRole("textbox")).toHaveStyle({
        padding: theme.models.textField.size.large,
      });
    });
  });

  describe("'color' prop features", () => {
    it("should render color 'primary' by default", () => {
      renderWithTheme(<TextField />);

      expect(screen.getByRole("textbox").parentElement).toHaveStyle({
        "background-color": theme.palette.textField.primary.main,
      });
    });
    it("should render color 'secondary' when passed", () => {
      renderWithTheme(<TextField color="secondary" />);

      expect(screen.getByRole("textbox").parentElement).toHaveStyle({
        "background-color": theme.palette.textField.secondary.main,
      });
    });
  });

  describe("'label' prop features", () => {
    it("should not render a label if not passed", () => {
      const { container } = renderWithTheme(<TextField />);

      const label = container.querySelector("label");
      expect(label).not.toBeInTheDocument();

      expect(
        screen.queryByRole("textbox", { name: undefined })
      ).toBeInTheDocument();
    });

    it("should check if there is a label element", () => {
      const { container } = renderWithTheme(
        <TextField label={{ text: "something" }} />
      );

      const label = container.querySelector("label");
      expect(label).toBeInTheDocument();
      expect(label?.tagName).toEqual("LABEL");
    });

    it("should render an label when passed", () => {
      renderWithTheme(<TextField label={{ text: "something" }} />);

      expect(screen.getByText("something")).toBeInTheDocument();
    });

    it("should render label with input connect", () => {
      renderWithTheme(
        <TextField label={{ text: "Name", htmlFor: "myLabel" }} />
      );

      const label = screen.getByText("Name");
      expect(label).toHaveAttribute("for", "myLabel");

      const textbox = screen.getByRole("textbox");
      expect(textbox).toHaveAttribute("id", "myLabel");

      expect(
        screen.getByRole("textbox", { name: /name/i })
      ).toBeInTheDocument();
      expect(screen.getByLabelText(/name/i).tagName).toEqual("INPUT");
    });
  });

  describe("'icon' prop features", () => {
    it("should not render a icon if not passed", () => {
      renderWithTheme(<TextField />);

      expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });

    it("should render icon when passed", () => {
      renderWithTheme(<TextField icon={{ listOfChoices: "Email" }} />);

      expect(screen.getByRole("img", { name: /email/i })).toBeInTheDocument();
    });

    it("should render icon color 'gray'", () => {
      renderWithTheme(<TextField icon={{ listOfChoices: "Email" }} />);

      expect(
        screen.getByRole("img", { name: /email/i })?.parentElement
      ).toHaveStyle({
        color: theme.palette.icon.gray.main,
      });
    });
  });

  describe("'notify' prop features", () => {
    it("should not render notify if not passed", () => {
      renderWithTheme(<TextField />);

      expect(screen.getByRole("textbox").parentElement).not.toHaveStyle({
        color: theme.palette.notify.disabled.main,
        cursor: "not-allowed",
      });
    });

    it("should render an notify 'error' when passed", () => {
      renderWithTheme(
        <TextField
          label={{ text: "Name", htmlFor: "name" }}
          notify={{ error: "myError" }}
        />
      );

      expect(screen.getByText("myError")).toHaveStyle({
        "font-style": "italic",
        "font-size": theme.typography.fontSizes.xxsmall,
      });

      expect(screen.getByLabelText("Name").parentElement).toHaveStyleRule(
        "border",
        `0.1rem solid ${theme.palette.notify.error.main}`
      );
    });

    it("should render an notify 'success' when passed", () => {
      renderWithTheme(
        <TextField
          label={{ text: "Name", htmlFor: "name" }}
          notify={{ success: "mySuccess" }}
          icon={{ listOfChoices: "AddShoppingCart" }}
        />
      );

      expect(screen.getByRole("img").parentElement).toHaveStyle({
        color: theme.palette.notify.success.main,
      });

      expect(screen.getByLabelText("Name").parentElement).toHaveStyleRule(
        "border",
        `0.1rem solid ${theme.palette.notify.success.main}`
      );
    });

    it("should render an notify 'warning' when passed", () => {
      renderWithTheme(
        <TextField
          label={{ text: "Name", htmlFor: "name" }}
          notify={{ warning: "myWarning" }}
        />
      );

      expect(screen.getByText("myWarning")).toHaveStyle({
        "font-style": "italic",
        "font-size": theme.typography.fontSizes.xxsmall,
      });

      expect(screen.getByLabelText("Name").parentElement).toHaveStyleRule(
        "border",
        `0.1rem solid ${theme.palette.notify.warning.main}`
      );
    });
  });
});
