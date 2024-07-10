ServerEvents.recipes(event => {
    event.remove({ id: 'alexscaves:uranium_from_shard'  })
    event.remove({ id: 'alexscaves:block_of_uranium'})
    event.remove({ id: 'alexscaves:uranium_from_block'})
    event.remove({ id: 'alexscaves:metal_barrel_from_iron' })
    event.shaped('alexscaves:metal_barrel', [
    ' I ',
    'IBI',
    'III'
  ], {
    I: '#forge:ingots/iron',
    B: '#forge:barrels/wooden'
  })
})
