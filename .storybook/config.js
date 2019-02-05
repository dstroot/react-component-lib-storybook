import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";

// bootstrap styles
import "../scss/main.scss";

// Get stories from components.
const req = require.context("../components", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Global addons
// NOTE: It is important to declare "withInfo" as the first decorator
//       https://github.com/storybooks/storybook/tree/master/addons/info
addDecorator(withInfo());
addDecorator(withOptions({ name: "Our Library" }));

configure(loadStories, module);
