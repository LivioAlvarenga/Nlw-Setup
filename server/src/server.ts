import cors from "@fastify/cors";
import Fastify from "fastify";
import { prisma } from "./lib/prisma";

const app = Fastify();

app.register(cors);

app.get("/hello", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("Listening on port 3000 - HTTP Server running!");
  });
