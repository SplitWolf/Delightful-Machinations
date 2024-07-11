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