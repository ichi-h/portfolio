const date = new Date().toISOString();

export default {
  files: ["*"],
  helpers: [
    (registry) => {
      registry.set("currentDate", () => date);
    },
  ],
};
