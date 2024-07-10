StartupEvents.registry('item', event => {
    
    event.create('master_infusion_cream')
    	.displayName('Master Infusion Cream')
    	.tooltip(Text.gray('Unlimited Uses... via a mechanical mixer!'))
        .maxStackSize(64)
        .texture('coco:item/master_infusion_cream')
        .glow(true)
    
})