
ServerEvents.recipes(event => {

    // There's definitely a more clever way of doing this. Like taking a look at the recipes from mystical
    // agriculture and then extrapolating their data? Who knows -- at least not myself. Too bad!
    // -Coco

    function smartEssenceMix(name, inputAmount, outputAmount, modName, suffix) {
        event.recipes.createMixing(
            outputAmount + 'x ' + modName + ':' + name + suffix,
            [
                inputAmount + 'x ' + 'mysticalagriculture:' + name + '_essence'
            ]
        )
    }

    function simpleEssenceMix(input, output) {
        event.recipes.createMixing(
            output,
            [
                input
            ]
        )
    }

    const dataList = [

        // Vanilla Ingots
        ['iron', 8, 6, 'minecraft', '_ingot'],
        ['gold', 8, 4, 'minecraft', '_ingot'],
        ['copper', 8, 6, 'minecraft', '_ingot'],
        ['netherite', 8, 1, 'minecraft', '_ingot'],

        // Vanilla Minerals
        ['coal', 8, 12, 'minecraft', ''],
        ['amethyst', 8, 20, 'minecraft', '_shard'],
        ['redstone', 8, 12, 'minecraft', ''],
        ['lapis_lazuli', 8, 12, 'minecraft', ''],
        ['glowstone', 8, 12, 'minecraft', '_dust'],
        ['prismarine', 3, 8, 'minecraft', '_shard'],
        ['blaze', 8, 6, 'minecraft', '_rod'],
        ['ghast', 8, 2, 'minecraft', '_tear'],

        // Vanilla Blocks
        ['dirt', 8, 24, 'minecraft', ''],
        ['ice', 8, 24, 'minecraft', ''],
        ['deepslate', 8, 24, 'minecraft', ''],
        ['obsidian', 8, 8, 'minecraft', ''],

        // General Modded Ingots

        ['tin', 8, 4, 'thisorethat', '_ingot'],
        ['bronze', 8, 4, 'thisorethat', '_ingot'],
        ['zinc', 8, 4, 'thisorethat', '_ingot'],
        ['silver', 8, 4, 'thisorethat', '_ingot'],
        ['lead', 8, 4, 'thisorethat', '_ingot'],
        ['brass', 8, 4, 'thisorethat', '_ingot'],
        ['steel', 8, 3, 'thisorethat', '_ingot'],
        ['nickel', 8, 4, 'thisorethat', '_ingot'],
        ['electrum', 8, 4, 'thisorethat', '_ingot'],
        ['invar', 8, 4, 'thisorethat', '_ingot'],
        ['uranium', 8, 2, 'thisorethat', '_ingot'],
        ['platinum', 8, 2, 'thisorethat', '_ingot'],
        ['aluminum', 8, 8, 'thisorethat', '_ingot'],
        ['silicon', 3, 8, 'thisorethat', '_ingot'],
        ['graphite', 8, 5, 'bigreactors', '_ingot'],

        // General Modded Minerals
        ['sapphire', 8, 6, 'iceandfire', '_gem'],
        ['sulfur', 3, 8, 'thisorethat', '_dust'],

        // General Modded Blocks

        ['limestone', 8, 16, 'create', ''],

        // Mystical Agriculture
        ['experience', 8, 8, 'mysticalagriculture', '_droplet'],
        ['soulium', 8, 4, 'mysticalagriculture', '_dust'],

        // AE2
        ['certus_quartz', 8, 6, 'ae2', '_crystal'],
        ['fluix', 8, 6, 'ae2', '_crystal'],
        ['sky_stone', 8, 16, 'ae2', '_block'],

        // Mekanism -- Why are ingots in the format of mekanism:ingot_whatever. There was a memo, Mekanism!
        ['fluorite', 8, 8, 'mekanism', '_gem'],

        // Powah
        ['uraninite', 8, 2, 'powah', ''],

        // Big Reactors
        ['cyanite', 8, 3, 'bigreactors', '_ingot']
        
    ]

    for (let i in dataList) {
        smartEssenceMix(dataList[i][0], dataList[i][1], dataList[i][2], dataList[i][3], dataList[i][4])
    }
    
    // Vanilla

    simpleEssenceMix('8x mysticalagriculture:stone_essence', '24x minecraft:cobblestone')
    simpleEssenceMix('8x mysticalagriculture:nether_essence', '24x minecraft:netherrack')
    simpleEssenceMix('8x mysticalagriculture:nether_quartz_essence', '12x minecraft:quartz')
    simpleEssenceMix('3x mysticalagriculture:honey_essence', '6x minecraft:honeycomb')
    simpleEssenceMix('3x mysticalagriculture:pig_essence', '6x minecraft:porkchop')
    simpleEssenceMix('3x mysticalagriculture:chicken_essence', '6x minecraft:chicken')
    simpleEssenceMix('3x mysticalagriculture:cow_essence', '6x minecraft:beef')
    simpleEssenceMix('3x mysticalagriculture:sheep_essence', '6x minecraft:mutton')
    simpleEssenceMix('3x mysticalagriculture:squid_essence', '6x minecraft:ink_sac')
    simpleEssenceMix('3x mysticalagriculture:slime_essence', '8x minecraft:slime_ball')
    simpleEssenceMix('8x mysticalagriculture:turtle_essence', '4x minecraft:scute')
    simpleEssenceMix('3x mysticalagriculture:zombie_essence', '12x minecraft:rotten_flesh')
    simpleEssenceMix('8x mysticalagriculture:skeleton_essence', '12x minecraft:bone')
    simpleEssenceMix('3x mysticalagriculture:creeper_essence', '6x minecraft:gunpowder')
    simpleEssenceMix('3x mysticalagriculture:spider_essence', '8x minecraft:string')
    simpleEssenceMix('3x mysticalagriculture:rabbit_essence', '6x minecraft:rabbit')
    simpleEssenceMix('8x mysticalagriculture:end_essence', '24x minecraft:end_stone')
    simpleEssenceMix('8x mysticalagriculture:enderman_essence', '4x minecraft:ender_pearl')
    simpleEssenceMix('3x mysticalagriculture:fish_essence', '6x minecraft:salmon')

    // Powah

    simpleEssenceMix('8x mysticalagriculture:energized_steel_essence', '3x powah:steel_energized')
    simpleEssenceMix('8x mysticalagriculture:blazing_crystal_essence', '3x powah:crystal_blazing')
    event.recipes.createMixing(
        'powah:crystal_nitro',
        [
            '8x mysticalagriculture:nitro_crystal_essence',
            'minecraft:nether_star'
        ]
    )

    // Mekanism

    simpleEssenceMix('8x mysticalagriculture:osmium_essence', '4x mekanism:ingot_osmium')
    simpleEssenceMix('8x mysticalagriculture:refined_glowstone_essence', '3x mekanism:ingot_refined_glowstone')
    simpleEssenceMix('8x mysticalagriculture:refined_obsidian_essence', '2x mekanism:ingot_refined_obsidian')

})