import { defineComputeConfig } from "@prisma/compute-sdk/config";

export default defineComputeConfig({
  app: {
    name: "task-manager",
    framework: "nuxt",
    env: ".env",
  },
});
