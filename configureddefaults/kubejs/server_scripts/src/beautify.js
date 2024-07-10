ServerEvents.recipes(event => {
    
    event.remove({ id: 'beautify:rope' })
    
	event.shaped('beautify:rope', [
    	'S  ',
    	'S  ',
    	'S  '
    ], {
    	S: '#forge:string'
    })
})