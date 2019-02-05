import React from "react";
import { storiesOf } from "@storybook/react";

// addons for this specific component
import { action, configureActions } from "@storybook/addon-actions";
// https://www.npmjs.com/package/@storybook/addon-actions
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
// https://github.com/storybooks/storybook/tree/master/addons/knobs

// component
import { Button } from "@storybook/react/demo";
const stories = storiesOf("Button", module);

// add knobs decorator
stories.addDecorator(withKnobs);

// stories
stories.add(
  "with text",
  () => (
    <Button onClick={action("clicked")}>
      {text("Label", "Hello Storybook")}
    </Button>
  ),
  {
    info: {
      text: `
              description or documentation about my component, supports markdown
              ~~~js
              <Button>Click Here</Button>
              ~~~
            `
    }
  }
);
