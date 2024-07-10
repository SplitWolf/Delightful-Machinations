ServerEvents.recipes(event => {
    event.remove({id:'mysticalagradditions:end_prosperity_shard_smelted'})
    event.remove({id:'mysticalagradditions:nether_prosperity_shard_smelted'})
    event.remove({id:'mysticalagradditions:end_inferium_smelted'})
    event.remove({id:'mysticalagradditions:nether_inferium_smelted'})
    
    //--// Begin KubeJS
	
    event.shaped('kubejs:master_infusion_cream', [
        'ESE',
        'SGS',
        'ESE'
    ], {
    	E: 'mysticalagriculture:supremium_essence',
        G: 'mysticalagriculture:supremium_gemstone',
        S: 'minecraft:slime_ball'
    })
    
    //oo// End KubeJS
    
    //--// Begin Create (Mixing)
    
    	// Essence
    
    event.recipes.createMixing(
        [
            'kubejs:master_infusion_cream',
            'mysticalagriculture:prudentium_essence'
        ],
        [
            'kubejs:master_infusion_cream',
            '4x mysticalagriculture:inferium_essence'
        ]
    )
    
    event.recipes.createMixing(
        [
            'kubejs:master_infusion_cream',
            'mysticalagriculture:tertium_essence'
        ],
        [
            'kubejs:master_infusion_cream',
            '4x mysticalagriculture:prudentium_essence'
        ]
    )
    
    event.recipes.createMixing(
        [
            'kubejs:master_infusion_cream',
            'mysticalagriculture:imperium_essence'
        ],
        [
            'kubejs:master_infusion_cream',
            '4x mysticalagriculture:tertium_essence'
        ]
    )
    
    event.recipes.createMixing(
        [
            'kubejs:master_infusion_cream',
            'mysticalagriculture:supremium_essence'
        ],
        [
            'kubejs:master_infusion_cream',
            '4x mysticalagriculture:imperium_essence'
        ]
    )
    
    event.recipes.createMixing(
        [
            'kubejs:master_infusion_cream',
            'mysticalagradditions:insanium_essence'
        ],
        [
            'kubejs:master_infusion_cream',
            '4x mysticalagriculture:supremium_essence'
        ]
    )
    
    	// Blocks
    
    event.recipes.createMixing(
        [
            'kubejs:master_infusion_cream',
            'mysticalagriculture:prudentium_block'
        ],
        [
            'kubejs:master_infusion_cream',
            '4x mysticalagriculture:inferium_block'
        ]
    )
    
    event.recipes.createMixing(
        [
            'kubejs:master_infusion_cream',
            'mysticalagriculture:tertium_block'
        ],
        [
            'kubejs:master_infusion_cream',
            '4x mysticalagriculture:prudentium_block'
        ]
    )
    
    event.recipes.createMixing(
        [
            'kubejs:master_infusion_cream',
            'mysticalagriculture:imperium_block'
        ],
        [
            'kubejs:master_infusion_cream',
            '4x mysticalagriculture:tertium_block'
        ]
    )
    
    event.recipes.createMixing(
        [
            'kubejs:master_infusion_cream',
            'mysticalagriculture:supremium_block'
        ],
        [
            'kubejs:master_infusion_cream',
            '4x mysticalagriculture:imperium_block'
        ]
    )
    
    event.recipes.createMixing(
        [
            'kubejs:master_infusion_cream',
            'mysticalagradditions:insanium_block'
        ],
        [
            'kubejs:master_infusion_cream',
            '4x mysticalagriculture:supremium_block'
        ]
    )
    
    //oo// End Create (Mixing)
    event.shaped('minecraft:netherite_scrap', [
        ' N ',
        '   ',
        ' N '
    ], {
    	N: 'mysticalagriculture:netherite_essence'
    })
})