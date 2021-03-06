module.exports = () => {
  const date = new Date();
  const site = require("./site.json");
  currentYear = date.getFullYear();
  return {
    built_at: new Date().toLocaleString('en-US', {timeZone: 'CST'}),
    environment: process.env.CONTEXT || "development",
    site_url: process.env.URL || site.url,
    copyright: (firstYear = currentYear) => {
      if (firstYear === currentYear) {
        return `&copy; ${currentYear}`;
      }
      return `&copy; ${firstYear}-${currentYear}`;
    }
  };
};
