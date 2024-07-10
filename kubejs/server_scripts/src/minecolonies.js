ServerEvents.recipes(event => {
    function campfireSlowReplace(id, output, input) {
        event.remove({id: id})
        event.campfireCooking(output, input).xp(0.35).cookingTime(600).id(id)
    }

    campfireSlowReplace('minecolonies:baked_bread_campfire_cooking', '1x minecraft:bread', 'minecolonies:bread_dough')
    campfireSlowReplace('minecolonies:baked_cake_campfire_cooking',  '1x minecraft:cake', 'minecolonies:cake_batter' )
    campfireSlowReplace('minecolonies:baked_cookies_campfire_cooking', '1x minecraft:cookie', 'minecolonies:cookie_dough')
    campfireSlowReplace('minecolonies:baked_pumpkin_pie_campfire_cooking','1x minecraft:pumpkin_pie','minecolonies:raw_pumpkin_pie')
})