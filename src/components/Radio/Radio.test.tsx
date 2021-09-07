import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import theme from "@/styles/themes/main.theme";

import Radio from ".";

describe("<Radio />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'className' prop features", () => {
      it("should render with className when passed", () => {
        const { container } = renderWithTheme(<Radio className="myClass" />);

        expect(container.firstElementChild).toHaveClass("myClass");
        expect(container.firstElementChild?.className).toContain("myClass");
      });
    });
    describe("'value' prop features", () => {
      it("should not render an radio 'value' if not passed", () => {
        renderWithTheme(<Radio />);

        const radio = screen.getByRole("radio");

        expect(radio).not.toHaveAttribute("value");
        expect(radio.getAttribute("value")).toEqual(null);
      });

      it("should render radio 'value' when passed", () => {
        renderWithTheme(<Radio value="something" />);

        const radio = screen.getByRole("radio");

        expect(radio).toHaveAttribute("value", "something");
        expect(radio.getAttribute("value")).toEqual("something");
      });
    });

    describe("'name' prop features", () => {
      it("should not render an 'name' if not passed", () => {
        renderWithTheme(<Radio />);

        const radio = screen.getByRole("radio");

        expect(radio).not.toHaveAttribute("name");
        expect(radio.getAttribute("name")).toEqual(null);
      });

      it("should render radio 'name' when passed", () => {
        renderWithTheme(<Radio name="something" />);

        const radio = screen.getByRole("radio");

        expect(radio).toHaveAttribute("name", "something");
        expect(radio.getAttribute("name")).toEqual("something");
      });
    });

    describe("'checked' prop features", () => {
      it("should not render an checked radio if not passed", () => {
        renderWithTheme(<Radio />);

        const radio = screen.getByRole("radio");
        expect(radio).not.toBeChecked();

        const radioIsCheckedFalse = screen.getByRole("radio", {
          checked: false,
        });
        expect(radioIsCheckedFalse).toBeInTheDocument();
      });

      it("should render checked radio when passed", () => {
        renderWithTheme(<Radio checked />);

        const radio = screen.getByRole("radio");
        expect(radio).toBeChecked();

        const radioIsCheckedTrue = screen.getByRole("radio", { checked: true });
        expect(radioIsCheckedTrue).toBeInTheDocument();
      });
    });

    describe("disabled prop features", () => {
      it("should not render an behavior disabled if not is passed", () => {
        renderWithTheme(<Radio />);

        const radio = screen.getByRole("radio");

        expect(radio).not.toBeDisabled();
        expect(radio).not.toHaveStyle({
          cursor: "not-allowed",
        });
      });

      it("should render an behavior disabled when passed", () => {
        renderWithTheme(<Radio disabled />);

        const radio = screen.getByRole("radio");

        expect(radio).toBeDisabled();
        expect(radio).toHaveStyle({
          cursor: "not-allowed",
        });
        expect(radio).toHaveStyleRule(
          "background",
          theme.palette.notify.disabled.main,
          {
            modifier: "::before",
          }
        );
      });
    });

    describe("accessibility in radio", () => {
      it("should render with focus when tab is pressed", () => {
        renderWithTheme(<Radio />);

        expect(document.body).toHaveFocus();

        userEvent.tab();
        const radio = screen.getByRole("radio");
        expect(document.body).not.toHaveFocus();
        expect(radio).toHaveFocus();
      });
    });
  });

  describe("'onValue' prop features", () => {
    it("should not dispatch onValue if onChange event not happen", () => {
      const myFunction = jest.fn();

      renderWithTheme(<Radio onValue={myFunction} />);

      expect(myFunction).not.toHaveBeenCalled();
    });

    it("should dispatch onValue if onChange event happen", async () => {
      const myFunction = jest.fn();

      renderWithTheme(<Radio onValue={myFunction} value="something" />);

      const radio = screen.getByRole("radio");
      userEvent.click(radio);

      await waitFor(() => {
        expect(myFunction).toHaveBeenCalled();
        expect(myFunction).toHaveBeenCalledTimes(1);
      });
      expect(myFunction).toHaveBeenCalledWith("something");
    });
  });

  describe("'label' prop features", () => {
    it("should not render an label if nothing is passed", () => {
      const { container } = renderWithTheme(<Radio />);

      const label = container.querySelector("label");
      expect(label).not.toBeInTheDocument();

      expect(
        screen.queryByRole("radio", { name: undefined })
      ).toBeInTheDocument();
    });

    it("should check if there is a label element", () => {
      const { container } = renderWithTheme(
        <Radio label={{ text: "label" }} />
      );

      const label = container.querySelector("label");
      expect(label).toBeInTheDocument();
      expect(label?.tagName).toEqual("LABEL");
    });

    it("should render label when passed", () => {
      renderWithTheme(<Radio label={{ text: "something" }} />);

      expect(screen.getByText("something")).toBeInTheDocument();
    });

    it("should render an label with input conection", () => {
      renderWithTheme(
        <Radio label={{ text: "something", htmlFor: "label" }} />
      );

      const label = screen.getByText("something");
      expect(label).toHaveAttribute("for", "label");

      const radio = screen.getByRole("radio");
      expect(radio).toHaveAttribute("id", "label");

      expect(
        screen.getByRole("radio", { name: /something/ })
      ).toBeInTheDocument();
      expect(screen.getByLabelText("something").tagName).toEqual("INPUT");
    });
  });

  describe("'color' prop features", () => {
    it("should render radio color 'primary' by default", () => {
      renderWithTheme(<Radio />);

      expect(screen.getByRole("radio")).toHaveStyle({
        border: `0.2rem solid ${theme.palette.radio.primary.main}`,
      });
    });

    it("should render radio color 'secondary' when passed", () => {
      renderWithTheme(<Radio color="secondary" />);

      expect(screen.getByRole("radio")).toHaveStyle({
        border: `0.2rem solid ${theme.palette.radio.secondary.main}`,
      });
    });
  });
});
