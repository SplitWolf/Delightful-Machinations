ServerEvents.recipes(event => {
  event.remove({id: 'silentgear:cord_blueprint'})
  event.remove({id: 'silentgear:bracelet_blueprint_alt'})
  event.remove({id: 'silentgear:ring_blueprint_alt'})
  event.remove({id: 'silentgear:grip_blueprint'})

  event.remove({id: 'silentgear:bronze_ingot'})
})