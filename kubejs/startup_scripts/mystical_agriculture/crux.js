StartupEvents.registry('block', event => {
    
    event.create('nether_banana_crux')
    	.displayName('Nether Banana Crux')
        .textureAll('coco:block/nether_banana_crux')
        .mapColor('color_light_blue')
        .stoneSoundType()
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_stone_tool')
    
    event.create('warden_crux')
        .displayName('Warden Crux')
        .textureAll('coco:block/warden_crux')
        .mapColor('color_black')
        .stoneSoundType()
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_stone_tool')
    
})

StartupEvents.registry('item', event => {

    event.create('nether_banana_botany_crux')
    	.displayName('Nether Banana Botany Crux')
        .maxStackSize(64)
        .texture('coco:item/botany_crux/nether_banana_botany_crux')

    event.create('nether_star_botany_crux')
    	.displayName('Nether Star Botany Crux')
        .maxStackSize(64)
        .texture('coco:item/botany_crux/nether_star_botany_crux')
    
    event.create('warden_botany_crux')
    	.displayName('Warden Botany Crux')
        .maxStackSize(64)
        .texture('coco:item/botany_crux/warden_botany_crux')
    
    event.create('dragon_egg_botany_crux')
    	.displayName('Dragon Egg Botany Crux')
        .maxStackSize(64)
        .texture('coco:item/botany_crux/dragon_egg_botany_crux')

    event.create('nitro_crystal_botany_crux')
    	.displayName('Nitro Crystal Botany Crux')
        .maxStackSize(64)
        .texture('coco:item/botany_crux/nitro_crystal_botany_crux')
    
})