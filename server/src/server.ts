import cors from "@fastify/cors";
import Fastify from "fastify";
import { appRoutes } from "./route";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 3000,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("Listening on port 3000 - HTTP Server running!");
  });
