ServerEvents.recipes(event => {
    event.remove({ id: 'createutilities:shaped/gearcube' })
    event.remove({ id: 'createutilities:shaped/void_chest' })
    event.shaped(
    Item.of('createutilities:gearcube', 1), // arg 1: output
    [
      'ABC',
      'BDB', // arg 2: the shape (array of strings)
      'CBA'
    ],
    {
      A: 'create:brass_casing',
      B: 'create:cogwheel',  //arg 3: the mapping object
      C: 'create:precision_mechanism',
      D: 'minecraft:dragon_egg'
    }
  )
    
    	// Rose Quartz
    
    event.remove({ id: 'create:crafting/materials/rose_quartz' })
    
    event.shapeless(
    	'create:rose_quartz',
        [
            '#forge:gems/quartz',
            '8x #forge:dusts/redstone'
        ]
    ).id('create:rose_quartz_manual_only')
    
    event.recipes.createMixing(
        'create:rose_quartz',
        [
            '#forge:gems/quartz',
            '4x #forge:dusts/redstone'
        ]
    )
    
		// Rose Quartz -- Mekanism

    event.remove({ id:'createaddition:compat/mekanism/rose_quartz_metallurgic_infusing' })

    event.custom({
        'type': 'mekanism:metallurgic_infusing',
        'itemInput': {
            'ingredient': {
                'tag': 'forge:gems/quartz'
            }
        },
        'chemicalInput': {
            'tag': 'mekanism:redstone',
            'amount': 40
        },
        'output': {
            'item': 'create:rose_quartz'
        },
        'conditions':
        [{
            'type': 'forge:mod_loaded',
            'modid': 'mekanism'
        }]
    })
    
  })