import { spawnSync } from "node:child_process";

const [method, ...values] = process.argv.slice(2);

function payloadFor(command, args) {
  if (command === "getSite") {
    return JSON.stringify({ site_id: args[0] });
  }

  if (command === "updateSite") {
    return JSON.stringify({
      site_id: args[0],
      body: {
        name: args[1],
      },
    });
  }

  return args[0] ?? "{}";
}

const payload = payloadFor(method, values);

if (!method) {
  console.error("Usage: node scripts/netlify-api.mjs <method> <json-payload>");
  process.exit(1);
}

const npmCli = "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js";
const result = spawnSync(
  process.execPath,
  [npmCli, "exec", "--yes", "netlify-cli@latest", "--", "api", method, "--data", payload],
  { stdio: "inherit" }
);

process.exit(result.status ?? 1);
