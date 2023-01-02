// Get Recipe
//step 1; if you need crafting table remove "//"

// JsMacros.waitForEvent("OpenScreen");
//const recp = recp.craft()
var inv = Player.openInventory();
const recps = inv.getCraftableRecipes();
// step 2. log it to check
Chat.log(recps);
// step 3. loop to find the right one
for (const recps of recp) {
if (recp.getId() == "Minecraft:oak_planks") {
  //if (recp.getId() == "Minecraft:oak_door") {
    // select it
    recp.craft(true);
  }
}
//step 4. move the output of crafting into inv
//inv.quick(0);
