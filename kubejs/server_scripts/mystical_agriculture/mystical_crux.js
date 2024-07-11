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

})