import Fastify from "fastify";
import "dotenv/config";

const fastify = Fastify();

fastify.get("/", async (req, res) => {
  res.send({ status: "Em construção" });
});

const start = async () => {
  try {
    const address = await fastify.listen({
      port: Number(process.env.PORT) || 3000,
      host: process.env.HOST || "localhost",
    });
    console.log(`Server listening at ${address}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
