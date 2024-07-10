
ServerEvents.recipes(event => {
    event.remove({ id: 'bloodmagic:smelting/ingot_copper'  })
    event.remove({ id: 'bloodmagic:smelting/ingot_gold'  })
    event.remove({ id: 'bloodmagic:smelting/ingot_iron'  })
    event.remove({ id: 'bloodmagic:smelting/blasting_ingot_copper'})
    event.remove({ id: 'bloodmagic:smelting/blasting_ingot_gold'  })
    event.remove({ id: 'bloodmagic:smelting/blasting_ingot_iron'  })
})
