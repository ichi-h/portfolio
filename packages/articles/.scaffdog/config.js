export default {
  files: ["*"],
  helpers: [
    (registry) => {
      registry.set("currentDate", () => new Date().toISOString());
    },
  ],
};
