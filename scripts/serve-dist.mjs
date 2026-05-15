import { createReadStream, existsSync } from "node:fs";
import { appendFileSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../dist", import.meta.url)));
const port = Number(process.env.PORT || 4173);
const logFile = resolve(fileURLToPath(new URL("../server.log", import.meta.url)));

function log(message) {
  appendFileSync(logFile, `[${new Date().toISOString()}] ${message}\n`);
}

process.on("uncaughtException", (error) => {
  log(`uncaughtException: ${error.stack || error.message}`);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  log(`unhandledRejection: ${error?.stack || error}`);
  process.exit(1);
});

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requested = normalize(join(root, cleanPath));
  if (!requested.startsWith(root)) return null;
  if (existsSync(requested)) return requested;
  return join(root, "index.html");
}

const server = createServer(async (request, response) => {
  const file = resolveFile(request.url || "/");
  if (!file) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const fileStat = await stat(file);
    const finalFile = fileStat.isDirectory() ? join(file, "index.html") : file;
    response.writeHead(200, {
      "Content-Type": types[extname(finalFile)] || "application/octet-stream",
    });
    createReadStream(finalFile).pipe(response);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  const message = `BNS-SAMPROFF site available at http://127.0.0.1:${port}`;
  log(message);
  if (process.stdout.writable) console.log(message);
});

server.on("close", () => log("server closed"));
setInterval(() => {}, 60 * 60 * 1000);
