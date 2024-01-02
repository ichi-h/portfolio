import { SwaggerUIBundle } from "swagger-ui-dist";
import "swagger-ui-dist/swagger-ui.css";

(async () => {
  const service = import.meta.env.VITE_SERVICE || "";
  const openapi = (await import(`../../../schemas/${service}/openapi.yaml`))
    .default;

  SwaggerUIBundle({
    url: openapi,
    dom_id: "#app",
  });
})();
