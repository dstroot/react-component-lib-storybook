import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";

// import "../src/styles.scss";

// get stories from components
const req = require.context("../components", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Global addons
// NOTE: It is important to declare "withInfo" as the first decorator
//       https://github.com/storybooks/storybook/tree/master/addons/info
addDecorator(withInfo());
addDecorator(withOptions({ name: "Geek's Log UI" }));

configure(loadStories, module);
