import { renderWithTheme } from "@/utils/tests/tests.helpers";

import theme from "@/styles/themes/main.theme";
import { Container } from ".";

describe("<Container />", () => {
  it("should render with correctly grid", () => {
    const { container } = renderWithTheme(
      <Container>
        <span>My content</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      "max-width",
      theme.gridLayout.container
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  max-width: 130rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(3.2rem / 2);
  padding-right: calc(3.2rem / 2);
}

@media print {

}

<div
  class="c0"
>
  <span>
    My content
  </span>
</div>
`);
  });
});
