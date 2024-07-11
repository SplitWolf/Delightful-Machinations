ServerEvents.recipes(event => {
    event.remove({id:"mysticalagradditions:end_prosperity_shard_smelted"})
    event.remove({id:"mysticalagradditions:nether_prosperity_shard_smelted"})
    event.remove({id:"mysticalagradditions:end_inferium_smelted"})
    event.remove({id:"mysticalagradditions:nether_inferium_smelted"})
    event.remove({id:"botanypots:industrialagriculture/crop/phantom"})
    event.remove({id:"botanypots:industrialagriculture/crop/shulker"})
    
    function donutShaped(input, output) {
        event.shaped(output, [
            "OOO",
            "O O",
            "OOO"
        ], {
            O: input
        })
    }

        // Vanilla

    donutShaped("mysticalagriculture:phantom_essence", "2x minecraft:phantom_membrane")
    donutShaped("mysticalagriculture:shulker_essence", "minecraft:shulker_shell")
    donutShaped("mysticalagriculture:warden_essence", "8x minecraft:sculk")
        
    event.shaped("minecraft:netherite_scrap", [
        " N ",
        "   ",
        " N "
    ], {
        N: "mysticalagriculture:netherite_essence"
    })

    event.shaped("minecraft:elytra", [
        "FRF",
        "P P",
        "P P"
    ], {
        P: "mysticalagriculture:phantom_essence",
        F: "minecraft:chorus_fruit",
        R: "minecraft:end_rod"
    })

    event.shaped("4x minecraft:sculk_vein", [
        "   ",
        "   ",
        "WWW"
    ], {
        W: "mysticalagriculture:warden_essence"
    })

    event.shaped("minecraft:sculk_catalyst", [
        "WWW",
        "WEW",
        "WWW"
    ], {
        W: "mysticalagriculture:warden_essence",
        E: "minecraft:experience_bottle"
    })

    event.shaped("minecraft:sculk_shrieker", [
        " W ",
        "W W",
        "WWW"
    ], {
        W: "mysticalagriculture:warden_essence"
    })

    event.shaped("minecraft:sculk_sensor", [
        "   ",
        " N ",
        "WWW"
    ], {
        W: "mysticalagriculture:warden_essence",
        N: "minecraft:note_block"
    })

    event.shaped("minecraft:echo_shard", [
        "W  ",
        " A ",
        "  W"
    ], {
        W: "mysticalagriculture:warden_essence",
        A: "minecraft:amethyst_shard"
    })

    event.shaped("minecraft:reinforced_deepslate", [
        "OWO",
        "WDW",
        "OWO"
    ], {
        W: "mysticalagriculture:warden_essence",
        O: "minecraft:obsidian",
        D: "minecraft:deepslate"
    })
    
        // Silent Gear

    donutShaped("mysticalagriculture:bort_essence", "2x silentgear:bort")
    donutShaped("mysticalagriculture:blaze_gold_essence", "3x silentgear:blaze_gold_ingot")
    donutShaped("mysticalagriculture:crimson_iron_essence", "4x silentgear:crimson_iron_ingot")
    donutShaped("mysticalagriculture:crimson_steel_essence", "2x silentgear:crimson_steel_ingot")
    donutShaped("mysticalagriculture:azure_silver_essence", "4x silentgear:azure_silver_ingot")
    donutShaped("mysticalagriculture:azure_electrum_essence", "2x silentgear:azure_electrum_ingot")
    donutShaped("mysticalagriculture:tyrian_steel_essence", "silentgear:tyrian_steel_ingot")
    donutShaped("mysticalagriculture:nether_banana_essence", "8x silentgear:nether_banana")

    event.shaped("2x silentgear:netherwood_sapling", [
        " N ",
        " B ",
        " W "
    ], {
    	N: "mysticalagriculture:nature_essence",
        B: "mysticalagriculture:nether_banana_essence",
        W: "mysticalagriculture:wood_essence"
    })

    event.shaped("8x silentgear:netherwood_log", [
        " W ",
        " B ",
        " W "
    ], {
        B: "mysticalagriculture:nether_banana_essence",
        W: "mysticalagriculture:wood_essence"
    })


})