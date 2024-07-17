ServerEvents.recipes(event => {
    event.remove({ id: 'mekanism:rails' })

    function mekanismCrushing(input, output, outputAmount) {
        event.custom({
          'type': 'mekanism:crushing',

          'input': {
            'ingredient': {
              'tag': input
            }
          },

          'output': {
            'item': output,
            'count': outputAmount
          },

          'conditions': [{
              'type': 'forge:mod_loaded',
              'modid': 'mekanism'
          }]

        })
    }
    
    // Silent Gear crushing recipes

    mekanismCrushing("forge:ingots/blaze_gold", "silentgear:blaze_gold_dust", 1)
    mekanismCrushing("forge:ingots/crimson_iron", "silentgear:crimson_iron_dust", 1)
    mekanismCrushing("forge:ingots/crimson_steel", "silentgear:crimson_steel_dust", 1)
    mekanismCrushing("forge:ingots/azure_silver", "silentgear:azure_silver_dust", 1)
    mekanismCrushing("forge:ingots/azure_electrum", "silentgear:azure_electrum_dust", 1)
    mekanismCrushing("forge:ingots/tyrian_steel", "silentgear:tyrian_steel_dust", 1)

  })