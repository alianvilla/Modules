import "./globalConfig.mjs";

console.log("Application is running...");

console.log("Global configuration:", globalThis.config);

async function loadConfig() {
  try {
    const { setDarkTheme, setLightTheme } = await import("./theme.mjs");
    const currentHour = new Date().getHours();
    if (currentHour < 18 && currentHour > 7) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  } catch (error) {
    throw new Error("Failed to load configuration");
  }
}

loadConfig();
