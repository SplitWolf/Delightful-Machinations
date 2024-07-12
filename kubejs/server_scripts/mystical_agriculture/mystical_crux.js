ServerEvents.recipes(event => {
    event.remove({id:"mysticalagradditions:nether_star_crux"})
    event.remove({id:"mysticalagradditions:dragon_egg_crux"})
    event.remove({id:"mysticalagradditions:nitro_crystal_crux"})

    function cruxShaped(essence, vertical, horizontal, outputCrux) {
        event.shaped(outputCrux, [
            "EVE",
            "HDH",
            "EVE"
        ], {
            E: essence,
            V: vertical,
            H: horizontal,
            D: "minecraft:diamond_block"
        })
    }

    cruxShaped("kubejs:ludicrium_essence", "minecraft:nether_star", "mysticalagradditions:withering_soul", "mysticalagradditions:nether_star_crux")
    cruxShaped("kubejs:ludicrium_essence", "mysticalagradditions:dragon_scale", "mysticalagradditions:dragon_scale", "mysticalagradditions:dragon_egg_crux")
    cruxShaped("kubejs:ludicrium_essence", "powah:crystal_nitro", "powah:capacitor_nitro", "mysticalagradditions:nitro_crystal_crux")
    cruxShaped("kubejs:ludicrium_essence", "silentgear:nether_banana", "silentgear:nether_banana", "kubejs:nether_banana_crux")
    cruxShaped("kubejs:ludicrium_essence", "minecraft:sculk_sensor", "minecraft:sculk_catalyst", "kubejs:warden_crux")

    function botanyCruxShaped(mod, cruxName) {
        event.shaped("kubejs:" + cruxName + "_botany_crux", [
            " I ",
            " V ",
            " P "
        ], {
            V: mod + ":" + cruxName + "_crux",
            I: "mysticalagradditions:insanium_farmland",
            P: "minecraft:flower_pot"
        })
    }

    botanyCruxShaped("kubejs", "nether_banana")
    botanyCruxShaped("mysticalagradditions", "nether_star")
    botanyCruxShaped("kubejs", "warden")
    botanyCruxShaped("mysticalagradditions", "dragon_egg")
    botanyCruxShaped("mysticalagradditions", "nitro_crystal")
})