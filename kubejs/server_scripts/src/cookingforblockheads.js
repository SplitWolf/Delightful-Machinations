ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!
  
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    event.remove({id: 'cookingforblockheads:spice_rack'})
  
    event.shaped('cookingforblockheads:spice_rack',
      [
        'WW ',
        '   ',
        '   '
      ], 
      {
        W: '#minecraft:wooden_slabs'
      }
    ).id('cookingforblockheads:spice_rack')

})