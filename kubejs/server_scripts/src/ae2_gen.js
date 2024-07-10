ServerEvents.recipes(event => { 
    function replace_recipe(old_id, recipe) {
            event.custom(recipe).id(old_id)
    }

	replace_recipe("ae2:inscriber/calculation_processor",{
  "type": "ae2:inscriber",
  "ingredients": {
    "bottom": {
      "item": "ae2:printed_silicon"
    },
    "middle": {
      "item": "minecraft:redstone"
    },
    "top": {
      "item": "ae2:printed_calculation_processor"
    }
  },
  "mode": "press",
  "result": {
    "item": "ae2:calculation_processor"
  }
})
	replace_recipe("ae2:inscriber/calculation_processor_press",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "minecraft:iron_block"
    },
    "top": {
      "item": "ae2:calculation_processor_press"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:calculation_processor_press"
  }
})
	replace_recipe("ae2:inscriber/calculation_processor_print",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "ae2:certus_quartz_crystal"
    },
    "top": {
      "item": "ae2:calculation_processor_press"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:printed_calculation_processor"
  }
})
	replace_recipe("ae2:inscriber/certus_quartz_dust",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "tag": "forge:gems/certus_quartz"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:certus_quartz_dust"
  }
})
	replace_recipe("ae2:inscriber/ender_dust",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "minecraft:ender_pearl"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:ender_dust"
  }
})
	replace_recipe("ae2:inscriber/engineering_processor",{
  "type": "ae2:inscriber",
  "ingredients": {
    "bottom": {
      "item": "ae2:printed_silicon"
    },
    "middle": {
      "item": "minecraft:redstone"
    },
    "top": {
      "item": "ae2:printed_engineering_processor"
    }
  },
  "mode": "press",
  "result": {
    "item": "ae2:engineering_processor"
  }
})
	replace_recipe("ae2:inscriber/engineering_processor_press",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "minecraft:iron_block"
    },
    "top": {
      "item": "ae2:engineering_processor_press"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:engineering_processor_press"
  }
})
	replace_recipe("ae2:inscriber/engineering_processor_print",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "tag": "forge:gems/diamond"
    },
    "top": {
      "item": "ae2:engineering_processor_press"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:printed_engineering_processor"
  }
})
	replace_recipe("ae2:inscriber/fluix_dust",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "tag": "forge:gems/fluix"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:fluix_dust"
  }
})
	replace_recipe("ae2:inscriber/inscribers",{
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "a": {
      "tag": "forge:ingots/iron"
    },
    "b": {
      "item": "minecraft:sticky_piston"
    },
    "c": {
      "tag": "forge:ingots/copper"
    }
  },
  "pattern": [
    "aba",
    "c a",
    "aba"
  ],
  "result": {
    "item": "ae2:inscriber"
  },
  "show_notification": true
})
	replace_recipe("ae2:inscriber/logic_processor",{
  "type": "ae2:inscriber",
  "ingredients": {
    "bottom": {
      "item": "ae2:printed_silicon"
    },
    "middle": {
      "item": "minecraft:redstone"
    },
    "top": {
      "item": "ae2:printed_logic_processor"
    }
  },
  "mode": "press",
  "result": {
    "item": "ae2:logic_processor"
  }
})
	replace_recipe("ae2:inscriber/logic_processor_press",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "minecraft:iron_block"
    },
    "top": {
      "item": "ae2:logic_processor_press"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:logic_processor_press"
  }
})
	replace_recipe("ae2:inscriber/logic_processor_print",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "tag": "forge:ingots/gold"
    },
    "top": {
      "item": "ae2:logic_processor_press"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:printed_logic_processor"
  }
})
	replace_recipe("ae2:inscriber/silicon_press",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "minecraft:iron_block"
    },
    "top": {
      "item": "ae2:silicon_press"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:silicon_press"
  }
})
	replace_recipe("ae2:inscriber/silicon_print",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "tag": "forge:silicon"
    },
    "top": {
      "item": "ae2:silicon_press"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:printed_silicon"
  }
})
	replace_recipe("ae2:inscriber/sky_stone_dust",{
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "ae2:sky_stone_block"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "ae2:sky_dust"
  }
})

})