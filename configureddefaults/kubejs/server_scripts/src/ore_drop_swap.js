LootJS.modifiers(event => {
    event.addBlockLootModifier('#forge:ores').modifyLoot('#forge:raw_materials', item => {
        const replacement = AlmostUnified.getReplacementForItem(item);
        if (replacement.isEmpty()) {
            return item;
        }
        replacement.setCount(item.getCount());
        return replacement;
    });

    event.addBlockLootModifier('railcraft:nickel_ore').modifyLoot('railcraft:nickel_raw', item => {
        return 'thisorethat:raw_nickel'
    })
    event.addBlockLootModifier('railcraft:deepslate_nickel_ore').modifyLoot('railcraft:nickel_raw', item => {
        return 'thisorethat:raw_nickel'
    })
    event.addBlockLootModifier('railcraft:sulfur_ore').modifyLoot('railcraft:sulfur_dust', item => {
        return 'thisorethat:sulfur_dust'
    })
    event.addBlockLootModifier('railcraft:deepslate_sulfur_ore').modifyLoot('railcraft:sulfur_dust', item => {
        return 'thisorethat:sulfur_dust'
    })
});