ServerEvents.recipes(event => {
    const {awakening,enchanter,infusion,reprocessor,soul_extraction,soulium_spawner} = event.recipes.mysticalagriculture;

    function mobInfusion(mob, soulAmount, tieredEssence) {
        infusion(
            "mysticalagriculture:" + mob + "_seeds",
            "mysticalagriculture:soulium_seed_base",
            [
                Item.of("mysticalagriculture:soul_jar", "{Type:'mysticalcustomization:" + mob + "', Souls:" + soulAmount + "}").strongNBT(),
                tieredEssence,
                Item.of("mysticalagriculture:soul_jar", "{Type:'mysticalcustomization:" + mob + "', Souls:" + soulAmount + "}").strongNBT(),
                tieredEssence,
                Item.of("mysticalagriculture:soul_jar", "{Type:'mysticalcustomization:" + mob + "', Souls:" + soulAmount + "}").strongNBT(),
                tieredEssence,
                Item.of("mysticalagriculture:soul_jar", "{Type:'mysticalcustomization:" + mob + "', Souls:" + soulAmount + "}").strongNBT(),
                tieredEssence
            ]
        )
    }

    mobInfusion("phantom", 4.0, "mysticalagriculture:tertium_essence")
    mobInfusion("warden", 1.0, "kubejs:ludicrium_essence")
    mobInfusion("shulker", 4.0, "mysticalagriculture:imperium_essence")

    awakening(
        "minecraft:warden_spawn_egg",
        "minecraft:egg",
        [
            Item.of("mysticalagriculture:warden_essence", 16),
            Item.of("mysticalagriculture:warden_essence", 16),
            Item.of("mysticalagriculture:warden_essence", 16),
            Item.of("mysticalagriculture:warden_essence", 16)
        ],
        [
            "kubejs:ludicrium_block",
            "kubejs:ludicrium_block",
            "kubejs:ludicrium_block",
            "kubejs:ludicrium_block"
        ]
    )

})