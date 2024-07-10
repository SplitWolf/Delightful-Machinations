
ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:bread'  })
    event.remove({ id: "forge:bread"})

    event.shaped('16x minecraft:stick', [// arg 1: output
    'L  ', 
    'L  ', // arg 2: the shape (array of strings)
    '   '  
  ], {
    L: '#minecraft:logs', 
  })
    
    event.shaped('minecraft:saddle', [
        'LLL',
        'LCL',
        ' I '
    ], {
    	L: 'minecraft:leather',
        C: 'minecraft:chain',
        I: 'minecraft:iron_ingot'
    })
    
    event.shaped('minecraft:name_tag', [
        ' I ',
        ' P ',
        ' B '
    ], {
    	I: 'minecraft:iron_ingot',
        P: 'minecraft:paper',
        B: 'minecraft:writable_book'
    })
    
    event.shaped('4x minecraft:chest', [
        'LLL',
        'L L',
        'LLL'
    ], {
    	L: '#minecraft:logs'
    })

    //--// BEGIN HORSE ARMOR
    
    event.shaped('minecraft:iron_horse_armor', [
        'ILI',
        'III',
        'I I'
    ], {
    	L: 'minecraft:leather',
        I: 'minecraft:iron_ingot'
    })
    
    event.shaped('minecraft:golden_horse_armor', [
        'GLG',
        'GGG',
        'G G'
    ], {
    	L: 'minecraft:leather',
        G: 'minecraft:gold_ingot'
    })
    
    event.shaped('minecraft:diamond_horse_armor', [
        'DLD',
        'DDD',
        'D D'
    ], {
    	L: 'minecraft:leather',
        D: 'minecraft:diamond'
    })
    
    //oo// END HORSE ARMOR
        
    //--// BEGIN TRAPDOORS
    

    function replaceWoodTrapdoorRecipe(old_id, wood_type) {
        event.remove({ id: old_id})
        event.shaped('6x '+ old_id, [
            'WWW',
            'WWW',
            '   '
        ], {
            W: wood_type
        })
    }

    replaceWoodTrapdoorRecipe('minecraft:oak_trapdoor','minecraft:oak_planks')
	replaceWoodTrapdoorRecipe('minecraft:spruce_trapdoor','minecraft:spruce_planks')
    replaceWoodTrapdoorRecipe('minecraft:birch_trapdoor','minecraft:birch_planks')
    replaceWoodTrapdoorRecipe('minecraft:jungle_trapdoor','minecraft:jungle_planks')
    replaceWoodTrapdoorRecipe('minecraft:acacia_trapdoor','minecraft:acacia_planks')
    replaceWoodTrapdoorRecipe('minecraft:dark_oak_trapdoor','minecraft:dark_oak_planks')
    replaceWoodTrapdoorRecipe('minecraft:mangrove_trapdoor','minecraft:mangrove_planks')
    replaceWoodTrapdoorRecipe('minecraft:cherry_trapdoor','minecraft:cherry_planks')
    replaceWoodTrapdoorRecipe('minecraft:bamboo_trapdoor','minecraft:bamboo_planks')
    replaceWoodTrapdoorRecipe('minecraft:crimson_trapdoor','minecraft:crimson_planks')
    replaceWoodTrapdoorRecipe('minecraft:warped_trapdoor','minecraft:warped_planks')
    event.remove({ id: 'minecraft:iron_trapdoor' })
    
    event.shaped('2x minecraft:iron_trapdoor', [
        'II ',
        'II ',
        '   '
    ], {
    	I: 'minecraft:iron_ingot'
    })
    
    //oo// END TRAPDOORS
    

    event.shapeless(
    	'4x minecraft:calcite',
        [
            'minecraft:cobblestone',
            'minecraft:bone_block'
        ]
    )
    
    event.shapeless(
    	'2x minecraft:tuff',
        [
            'minecraft:cobblestone',
            'minecraft:basalt'
        ]
    )

    
})
