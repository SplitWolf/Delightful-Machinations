const farmlandClass = Java.loadClass(
  "com.blakebr0.mysticalagriculture.block.InfusedFarmlandBlock"
);
const cropTeirClass = Java.loadClass(
  "com.blakebr0.mysticalagriculture.api.crop.CropTier"
);
const chatFormat = Java.loadClass("net.minecraft.ChatFormatting");
const ResourceLocation = Java.loadClass(
  "net.minecraft.resources.ResourceLocation"
);
const Blocks = Java.loadClass("net.minecraft.world.level.block.Blocks");
const Items = Java.loadClass("net.minecraft.world.item.Items");

// let blud = farmlandClass(
//   cropTeirClass(
//     new ResourceLocation("mysticalagriculture", "7"),
//     7,
//     0xffffff,
//     chatFormat.WHITE
//   )
//     .setFarmland(() => {
//       return Blocks.FARMLAND;
//     })
//     .setEssence(() => {
//       return Items.FARMLAND;
//     })
// );
StartupEvents.registry("block", (event) => {
  
});
