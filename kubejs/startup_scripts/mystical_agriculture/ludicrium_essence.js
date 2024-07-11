StartupEvents.registry('item', event => {
    
    event.create('ludicrium_essence')
    	.displayName('Ludicrium Essence')
    	.tooltip(Text.gray('Buckle this!'))
        .maxStackSize(64)
        .texture('coco:item/ludicrium_essence')
    
})

StartupEvents.registry('block', event => {
    
    event.create('ludicrium_block')
    	.displayName('Ludicrium Block')
        .textureAll('coco:block/ludicrium_block')
        .mapColor('color_pink')
        .stoneSoundType()
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:storage_blocks")
        .tagBlock("forge:storage_blocks/ludicrium_essence")
    
})