import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/tests.helpers";

import theme from "@/styles/themes/main.theme";

import UserFeedbackBase from ".";
import mock from "./UserFeedbackBase.mock";

describe("<UserFeedbackBase />", () => {
  describe("|-html attributes general features-|", () => {
    describe("'classname' prop features", () => {
      it("should render classname when passed", () => {
        const { container } = renderWithTheme(
          <UserFeedbackBase className="myclass" />
        );

        const wrapper = container.firstElementChild;

        expect(wrapper).toHaveClass("myclass");
      });
    });
  });

  describe("'image' prop features", () => {
    it("should render user image default is not is passed", () => {
      renderWithTheme(<UserFeedbackBase />);

      expect(screen.queryByRole("img")).toBeInTheDocument();
    });

    it("should render user image when is passed", () => {
      renderWithTheme(<UserFeedbackBase image={{ src: mock.image!.src }} />);

      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("should render alternative text correctly", () => {
      renderWithTheme(
        <UserFeedbackBase
          image={{ src: mock.image!.src, alt: mock.image?.alt }}
        />
      );

      expect(screen.getByAltText(mock.image!.alt!)).toBeInTheDocument();
    });
  });

  describe("'size' prop features", () => {
    it("should render size 'small' as by default", () => {
      const { container } = renderWithTheme(<UserFeedbackBase />);

      const wrapperImage = container.firstElementChild?.firstChild;

      expect(wrapperImage).toHaveStyle({
        width: "4.2rem",
        height: "4.2rem",
      });
    });

    it("should render size 'xsmall' when passed", () => {
      const { container } = renderWithTheme(<UserFeedbackBase size="xsmall" />);

      const wrapperImage = container.firstElementChild?.firstChild;

      expect(wrapperImage).toHaveStyle({
        width: "3.6rem",
        height: "3.6rem",
      });
    });

    it("should render size 'medium' when passed", () => {
      const { container } = renderWithTheme(<UserFeedbackBase size="medium" />);

      const wrapperImage = container.firstElementChild?.firstChild;

      expect(wrapperImage).toHaveStyle({
        width: "6.4rem",
        height: "6.4rem",
      });
    });

    it("should render size 'large' when passed", () => {
      const { container } = renderWithTheme(<UserFeedbackBase size="large" />);

      const wrapperImage = container.firstElementChild?.firstChild;

      expect(wrapperImage).toHaveStyle({
        width: "8.6rem",
        height: "8.6rem",
      });
    });
  });

  describe("'borderColor' prop features", () => {
    it("should render border color 'white' by default", () => {
      const { container } = renderWithTheme(<UserFeedbackBase />);

      const wrapperImage = container.firstElementChild?.firstChild;

      expect(wrapperImage).toHaveStyleRule(
        "border-color",
        theme.palette.page.white.main
      );
    });

    it("should render border color 'blue' when passed", () => {
      const { container } = renderWithTheme(
        <UserFeedbackBase borderColor="blue" />
      );

      const wrapperImage = container.firstElementChild?.firstChild;

      expect(wrapperImage).toHaveStyleRule(
        "border-color",
        theme.palette.page.primary.main
      );
    });
  });

  describe("'name' prop features", () => {
    it("should render user name 'desconhecido' if not is passed", () => {
      renderWithTheme(<UserFeedbackBase />);

      const nameEl = screen.getByRole("heading", { name: /desconhecido/i });
      expect(nameEl).toBeInTheDocument();
    });

    it("should render user name when is passed", () => {
      renderWithTheme(<UserFeedbackBase name={mock.name} />);

      const nameEl = screen.getByRole("heading", { name: mock.name });
      expect(nameEl).toBeInTheDocument();
    });

    it("should render user name with the html h3 tag", () => {
      const { container } = renderWithTheme(<UserFeedbackBase />);

      const queryNameEl = container.querySelector("h3");
      expect(queryNameEl).toBeInTheDocument();

      const nameEl = screen.getByRole("heading", { name: /desconhecido/i });
      expect(nameEl.tagName).toEqual("H3");
    });
  });

  describe("'professional' prop features", () => {
    it("should not render user region if not is passed", () => {
      const { container } = renderWithTheme(<UserFeedbackBase />);

      const spanEl = container.querySelector("span");
      expect(spanEl).not.toBeInTheDocument();
    });
    it("should  render user region when is passed", () => {
      renderWithTheme(
        <UserFeedbackBase
          professional={{
            office: mock.professional!.office,
            industry: mock.professional!.industry,
          }}
        />
      );

      const element = screen.getByText(
        `${mock.professional?.office} • ${mock.professional?.industry}`
      );
      expect(element).toBeInTheDocument();
    });

    it("should render user region with the html span tag", () => {
      const { container } = renderWithTheme(
        <UserFeedbackBase
          professional={{
            office: mock.professional!.office,
            industry: mock.professional!.industry,
          }}
        />
      );

      const spanEl = container.querySelector("span");
      expect(spanEl).toBeInTheDocument();

      expect(
        screen.getByText(
          `${mock.professional?.office} • ${mock.professional?.industry}`
        ).tagName
      ).toEqual("SPAN");
    });
  });

  describe("'color' prop features", () => {
    it("should render text color 'white' by default", () => {
      renderWithTheme(
        <UserFeedbackBase
          professional={{
            office: mock.professional!.office,
            industry: mock.professional!.industry,
          }}
        />
      );

      const userName = screen.getByRole("heading");
      expect(userName).toHaveStyle({
        color: theme.palette.text.white.main,
      });

      const userRegion = screen.getByText(
        `${mock.professional?.office} • ${mock.professional?.industry}`
      );
      expect(userRegion).toHaveStyle({
        color: theme.palette.text.white.main,
      });
    });

    it("should render text color 'blue' when passed", () => {
      renderWithTheme(
        <UserFeedbackBase
          color="blue"
          professional={{
            office: mock.professional!.office,
            industry: mock.professional!.industry,
          }}
        />
      );

      const userName = screen.getByRole("heading");
      expect(userName).toHaveStyle({
        color: theme.palette.text.blue.dark,
      });

      const userRegion = screen.getByText(
        `${mock.professional?.office} • ${mock.professional?.industry}`
      );
      expect(userRegion).toHaveStyle({
        color: theme.palette.text.blue.dark,
      });
    });
  });
});
