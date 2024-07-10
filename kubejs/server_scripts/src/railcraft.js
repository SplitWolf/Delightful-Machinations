ServerEvents.recipes(event => {
    event.remove({ id: 'railcraft:brass_ingot_crafted_with_ingots' })
    event.remove({ id: 'railcraft:bronze_ingot_crafted_with_ingots' })
    event.remove({ id: 'railcraft:bushing_gear_brass' })

    event.remove({id: 'railcraft:steel_helmet' })
    event.remove({id: 'railcraft:steel_boots' })
    event.remove({id: 'railcraft:steel_leggings' })
    event.remove({id: 'railcraft:steel_chestplate' })
    event.remove({id: 'railcraft:steel_ingot'})
    
    // Tin and Copper dust to Bronze
    event.remove({ id: 'railcraft:iron_tank_wall'})

    event.shaped('4x railcraft:white_iron_tank_wall',
      [
        ' P ',
        'P P',
        ' P '
      ], 
      {
        P: '#forge:plates/iron'
      }
    )
})