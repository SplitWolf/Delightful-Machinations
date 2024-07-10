ServerEvents.recipes(event => {
    event.remove({ id: 'bigreactors:misc/book/erguide' })
    event.remove({ id: 'bigreactors:crafting/yellorium_nugget_to_ingot'})
    event.remove({ id: 'bigreactors:crafting/yellorium_ingot_to_nugget'})
    event.remove({ id: 'bigreactors:crafting/yellorium_storage_to_component'})
    event.remove({ id: 'bigreactors:crafting/yellorium_component_to_storage'})
    event.remove({ id: 'mysticalagriculture:essence/extremereactors2/yellorium_ingot'})
    event.remove({ id: 'bigreactors:reactor/basic/fuelrod_ingots_yellorium' })
    event.remove({ id: 'bigreactors:reactor/reinforced/fuelrod_ingots_yellorium' })
    event.remove({ id: 'bigreactors:reactor/basic/controller_ingots_yellorium' })
    event.remove({ id: 'bigreactors:reactor/reinforced/controller_ingots_yellorium' })
    event.replaceInput({ input: 'bigreactors:yellorium_ingot'},
    'bigreactors:yellorium_ingot',
    '#forge:ingots/uranium'
    )
})