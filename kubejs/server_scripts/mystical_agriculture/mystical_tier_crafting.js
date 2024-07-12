ServerEvents.recipes(event => {
    event.shaped("kubejs:master_infusion_cream", [
        "ESE",
        "SGS",
        "ESE"
    ], {
    	E: "mysticalagriculture:supremium_essence",
        G: "mysticalagriculture:supremium_gemstone",
        S: "minecraft:slime_ball"
    })

    event.shaped("kubejs:ludicrium_block", [
        "EEE",
        "EEE",
        "EEE"
    ], {
    	E: "kubejs:ludicrium_essence"
    })

    event.shapeless(
        "9x kubejs:ludicrium_essence",
        "kubejs:ludicrium_block"
    )

    event.shapeless(
        "4x mysticalagradditions:insanium_essence",
        "kubejs:ludicrium_essence"
    )
    
    event.shaped("kubejs:ludicrium_essence", [
        " E ",
        "EIE",
        " E "
    ], {
    	E: "mysticalagradditions:insanium_essence",
        I: "#mysticalagriculture:infusion_crystals"
    })

    event.shaped("kubejs:ludicrium_block", [
        " E ",
        "EIE",
        " E "
    ], {
    	E: "mysticalagradditions:insanium_block",
        I: "#mysticalagriculture:infusion_crystals"
    })
    
    //--// Begin Create (Mixing)

    function infusionCreamMixing(inputEssence, outputEssence) {
            // Essence
        event.recipes.createMixing(
            [
                "kubejs:master_infusion_cream",
                outputEssence + "_essence"
            ],
            [
                "kubejs:master_infusion_cream",
                "4x " + inputEssence + "_essence"
            ]
        )

            // Block
        event.recipes.createMixing(
            [
                "kubejs:master_infusion_cream",
                outputEssence + "_block"
            ],
            [
                "kubejs:master_infusion_cream",
                "4x " + inputEssence + "_block"
            ]
        )

    }

    infusionCreamMixing("mysticalagriculture:inferium", "mysticalagriculture:prudentium")
    infusionCreamMixing("mysticalagriculture:prudentium", "mysticalagriculture:tertium")
    infusionCreamMixing("mysticalagriculture:tertium", "mysticalagriculture:imperium")
    infusionCreamMixing("mysticalagriculture:imperium", "mysticalagriculture:supremium")
    infusionCreamMixing("mysticalagriculture:supremium", "mysticalagradditions:insanium")
    infusionCreamMixing("mysticalagradditions:insanium", "kubejs:ludicrium")
    
    //oo// End Create (Mixing)

})