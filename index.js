const fs = require("fs").promises;

const iconsSizePlaceholder = /%{{icon_size}}%/g;
const timePlaceholder = /%{{greeting}}%/g;

const date = new Date();
let hours = date.getHours();
let greetingTime =
  hours < 12
    ? "🌞Good Morning🌞"
    : hours <= 18 && hours >= 12
    ? "☀Good Afternoon!☀"
    : "🌕Good Evening!🌕";

const iconSize = "21px";
(async () => {
  const markdownTemplate = await fs.readFile("./README.md.tpl", {
    encoding: "utf-8",
  });
  // Change icon size to all icons
  const newMarkdown = markdownTemplate
    .replace(iconsSizePlaceholder, iconSize)
    .replace(timePlaceholder, greetingTime);

  // Add changes into readme
  await fs.writeFile("./README.md", newMarkdown);
})();
