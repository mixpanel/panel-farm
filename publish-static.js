const ghpages = require(`gh-pages`);
ghpages.publish(`build`, err => err && console.error(err));
