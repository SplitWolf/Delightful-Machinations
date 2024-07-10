ServerEvents.recipes(event => { 
    function replace_recipe(old_id, recipe) {
            event.remove({id:old_id})
            event.custom(recipe).id(old_id+"_manual_only")
    }

	replace_recipe("morered:and_2_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 4
		}
	],
	"result": 
	{
		"item": "morered:and_2_gate"
	}
}
)
	replace_recipe("morered:and_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 5
		}
	],
	"result": 
	{
		"item": "morered:and_gate"
	}
}
)
	replace_recipe("morered:bitwise_and_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"type": "morered:tag_stack",
			"tag": "forge:quarter_slabs/smooth_stone",
			"count": 2
		},
		{
			"tag": "forge:gems/quartz"
		},
		{
			"tag": "forge:dusts/redstone"
		},
		{
			"tag": "morered:bundled_network_cables"
		}
	],
	"result": 
	{
		"item": "morered:bitwise_and_gate"
	}
}
)
	replace_recipe("morered:bitwise_diode_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"type": "morered:tag_stack",
			"tag": "forge:quarter_slabs/smooth_stone",
			"count": 2
		},
		{
			"tag": "forge:gems/quartz"
		},
		{
			"tag": "forge:dusts/redstone"
		},
		{
			"tag": "morered:bundled_network_cables"
		}
	],
	"result": 
	{
		"item": "morered:bitwise_diode"
	}
}
)
	replace_recipe("morered:bitwise_not_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"type": "morered:tag_stack",
			"tag": "forge:quarter_slabs/smooth_stone",
			"count": 2
		},
		{
			"tag": "forge:gems/quartz"
		},
		{
			"tag": "forge:dusts/redstone"
		},
		{
			"tag": "morered:bundled_network_cables"
		}
	],
	"result": 
	{
		"item": "morered:bitwise_not_gate"
	}
}
)
	replace_recipe("morered:bitwise_or_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"type": "morered:tag_stack",
			"tag": "forge:quarter_slabs/smooth_stone",
			"count": 2
		},
		{
			"tag": "forge:gems/quartz"
		},
		{
			"tag": "forge:dusts/redstone"
		},
		{
			"tag": "morered:bundled_network_cables"
		}
	],
	"result": 
	{
		"item": "morered:bitwise_or_gate"
	}
}
)
	replace_recipe("morered:bitwise_xnor_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"type": "morered:tag_stack",
			"tag": "forge:quarter_slabs/smooth_stone",
			"count": 2
		},
		{
			"tag": "forge:gems/quartz"
		},
		{
			"tag": "forge:dusts/redstone"
		},
		{
			"tag": "morered:bundled_network_cables"
		}
	],
	"result": 
	{
		"item": "morered:bitwise_xnor_gate"
	}
}
)
	replace_recipe("morered:bitwise_xor_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"type": "morered:tag_stack",
			"tag": "forge:quarter_slabs/smooth_stone",
			"count": 2
		},
		{
			"tag": "forge:gems/quartz"
		},
		{
			"tag": "forge:dusts/redstone"
		},
		{
			"tag": "morered:bundled_network_cables"
		}
	],
	"result": 
	{
		"item": "morered:bitwise_xor_gate"
	}
}
)
	replace_recipe("morered:bundled_cable_post_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:ingots/iron"
		},
		{
			"tag": "morered:bundled_network_cables"
		}
	],
	"result": 
	{
		"item": "morered:bundled_cable_post"
	}
}
)
	replace_recipe("morered:bundled_cable_relay_plate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"type": "morered:tag_stack",
			"tag": "forge:quarter_slabs/smooth_stone",
			"count": 2
		},
		{
			"tag": "forge:ingots/iron"
		},
		{
			"tag": "morered:bundled_network_cables"
		}
	],
	"result": 
	{
		"item": "morered:bundled_cable_relay_plate"
	}
}
)
	replace_recipe("morered:hexidecrubrometer_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"type": "morered:tag_stack",
			"tag": "forge:quarter_slabs/smooth_stone",
			"count": 8
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 9
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:gems/quartz",
			"count": 4
		}
	],
	"result": 
	{
		"item": "morered:hexidecrubrometer"
	}
}
)
	replace_recipe("morered:latch_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 3
		}
	],
	"result": 
	{
		"item": "morered:latch"
	}
}
)
	replace_recipe("morered:multiplexer_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"tag": "forge:dusts/redstone"
		},
		{
			"tag": "forge:ingots/iron"
		}
	],
	"result": 
	{
		"item": "morered:multiplexer"
	}
}
)
	replace_recipe("morered:nand_2_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 3
		}
	],
	"result": 
	{
		"item": "morered:nand_2_gate"
	}
}
)
	replace_recipe("morered:nand_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 4
		}
	],
	"result": 
	{
		"item": "morered:nand_gate"
	}
}
)
	replace_recipe("morered:nor_gate_from_gatecrafting",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 2
		}
	],
	"result": 
	{
		"item": "morered:nor_gate"
	}
}
)
	replace_recipe("morered:not_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 2
		}
	],
	"result": 
	{
		"item": "morered:not_gate"
	}
}
)
	replace_recipe("morered:or_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 3
		}
	],
	"result": 
	{
		"item": "morered:or_gate"
	}
}
)
	replace_recipe("morered:pulse_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"tag": "forge:dusts/redstone"
		},
		{
			"tag": "forge:ingots/iron"
		}
	],
	"result": 
	{
		"item": "morered:pulse_gate"
	}
}
)
	replace_recipe("morered:redwire_post_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:ingots/iron"
		},
		{
			"tag": "forge:ingots/redstone_alloy"
		}
	],
	"result": 
	{
		"item": "morered:redwire_post"
	}
}
)
	replace_recipe("morered:redwire_post_plate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"tag": "forge:ingots/iron"
		},
		{
			"tag": "forge:ingots/redstone_alloy"
		}
	],
	"result": 
	{
		"item": "morered:redwire_post_plate"
	}
}
)
	replace_recipe("morered:redwire_post_relay_plate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"tag": "forge:ingots/iron"
		},
		{
			"tag": "forge:ingots/redstone_alloy"
		},
		{
			"tag": "forge:dusts/redstone"
		}
	],
	"result": 
	{
		"item": "morered:redwire_post_relay_plate"
	}
}
)
	replace_recipe("morered:smooth_stone_slab_from_stone_plate",{
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "##",
    "##"
  ],
  "key": {
    "#": {
      "item": "morered:stone_plate"
    }
  },
  "result": {
    "item": "minecraft:smooth_stone_slab"
  }
})
	replace_recipe("morered:xnor_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 4
		}
	],
	"result": 
	{
		"item": "morered:xnor_gate"
	}
}
)
	replace_recipe("morered:xor_gate_from_soldering",{
	"type": "morered:soldering",
	"ingredients": 
	[
		{
			"tag": "forge:quarter_slabs/smooth_stone"
		},
		{
			"type": "morered:tag_stack",
			"tag": "forge:dusts/redstone",
			"count": 4
		}
	],
	"result": 
	{
		"item": "morered:xor_gate"
	}
}
)

})