Hooks.once("ready", () => {
  // If combat tab already exists, do nothing
  if (ui.sidebar.tabs.combat) return;

  console.warn("Combat tab missing — restoring manually (restore-combat-tracker).");

  // Register the combat tab if it doesn't exist
  ui.sidebar.registerTab("combat", {
    id: "combat",
    icon: "fas fa-swords",
    title: "Combat"
  });

  // Re-render sidebar to show it
  ui.sidebar.render(true);
});