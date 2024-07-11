JEIEvents.hideItems(event => {
    event.hide(/ae2:facade/)
    event.hide(/chiselsandbits:block_bit/)
    event.hide(/mekanism:creative_chemical_tank/)
    event.hide(/mekanism:creative_fluid_tank/)
})

JEIEvents.addItems(event => {
    event.add(Item.of("ae2:facade", "{item:'minecraft:stone'}"))
    event.add(Item.of("mekanism:creative_chemical_tank"))
    event.add(Item.of("mekanism:creative_fluid_tank"))
})