import { Hono } from "hono";

import routes from "./routes";

const app = new Hono();

app.route("/", routes);

export default app;
