process.env.NODE_ENV = "production";

const nextCli = require.resolve("next/dist/bin/next");
process.argv = [process.argv[0], nextCli, "build"];
require(nextCli);
