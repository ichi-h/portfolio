import { SwaggerUIBundle } from "swagger-ui-dist";
import "swagger-ui-dist/swagger-ui.css";

import openapi from "../../../schemas/works/openapi.yaml";

SwaggerUIBundle({
  url: openapi,
  dom_id: "#app",
});
