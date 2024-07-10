declare module "packages/com/blakebr0/cucumber/item/tool/$BasePaxelItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BasePaxelItem extends $DiggerItem {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type)
constructor(arg0: $Tier$Type, arg1: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePaxelItem$Type = ($BasePaxelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePaxelItem_ = $BasePaxelItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/api/crafting/$ITableRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ITableRecipe extends $Recipe<($Container)> {

 "getTier"(): integer
 "hasRequiredTier"(): boolean
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $ITableRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITableRecipe$Type = ($ITableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITableRecipe_ = $ITableRecipe$Type;
}}
declare module "packages/com/blakebr0/pickletweaks/feature/crafting/$GridRepairRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$GridRepairRecipe, $GridRepairRecipe$Type} from "packages/com/blakebr0/pickletweaks/feature/crafting/$GridRepairRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $GridRepairRecipe$Serializer implements $RecipeSerializer<($GridRepairRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $GridRepairRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $GridRepairRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $GridRepairRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $GridRepairRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridRepairRecipe$Serializer$Type = ($GridRepairRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridRepairRecipe$Serializer_ = $GridRepairRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crop/$ICropTierProvider" {
import {$CropTier, $CropTier$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTier"

export interface $ICropTierProvider {

 "getTier"(): $CropTier

(): $CropTier
}

export namespace $ICropTierProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICropTierProvider$Type = ($ICropTierProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICropTierProvider_ = $ICropTierProvider$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceSwordItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BaseSwordItem, $BaseSwordItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseSwordItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceSwordItem extends $BaseSwordItem implements $ITinkerable {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceSwordItem$Type = ($EssenceSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceSwordItem_ = $EssenceSwordItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/tinkering/$IElementalItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IElementalItem {

}

export namespace $IElementalItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElementalItem$Type = ($IElementalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IElementalItem_ = $IElementalItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$UltimateSingularityRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$UltimateSingularityRecipe, $UltimateSingularityRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$UltimateSingularityRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $UltimateSingularityRecipe$Serializer implements $RecipeSerializer<($UltimateSingularityRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $UltimateSingularityRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $UltimateSingularityRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $UltimateSingularityRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $UltimateSingularityRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateSingularityRecipe$Serializer$Type = ($UltimateSingularityRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimateSingularityRecipe$Serializer_ = $UltimateSingularityRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/pickletweaks/feature/block/$ColoredCobblestoneBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IColored, $IColored$Type} from "packages/com/blakebr0/cucumber/iface/$IColored"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"

export class $ColoredCobblestoneBlock extends $BaseBlock implements $IColored {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer)

public "getColor"(arg0: integer): integer
public "getColor"(arg0: integer, arg1: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredCobblestoneBlock$Type = ($ColoredCobblestoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredCobblestoneBlock_ = $ColoredCobblestoneBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crafting/$IAwakeningRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IAwakeningRecipe extends $Recipe<($Container)> {

 "hasRequiredEssences"(arg0: $List$Type<($ItemStack$Type)>): boolean
 "getEssences"(): $NonNullList<($ItemStack)>
 "getMissingEssences"(arg0: $List$Type<($ItemStack$Type)>): $Map<($ItemStack), (integer)>
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $IAwakeningRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAwakeningRecipe$Type = ($IAwakeningRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAwakeningRecipe_ = $IAwakeningRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BaseScytheItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BaseScytheItem extends $SwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer)
constructor(arg0: $Tier$Type, arg1: integer, arg2: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public "getAttackDamage"(): float
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getAttackSpeed"(): float
get "attackDamage"(): float
get "attackSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseScytheItem$Type = ($BaseScytheItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseScytheItem_ = $BaseScytheItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessTableRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapelessTableRecipe, $ShapelessTableRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessTableRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessTableRecipe$Serializer implements $RecipeSerializer<($ShapelessTableRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessTableRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessTableRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessTableRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessTableRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTableRecipe$Serializer$Type = ($ShapelessTableRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessTableRecipe$Serializer_ = $ShapelessTableRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$PedestalBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PedestalBlock extends $BaseTileEntityBlock {
static readonly "PEDESTAL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PedestalBlock$Type = ($PedestalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PedestalBlock_ = $PedestalBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferDamageRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedTransferDamageRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean, arg8: boolean)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferDamageRecipe$Type = ($ShapedTransferDamageRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTransferDamageRecipe_ = $ShapedTransferDamageRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BaseHoeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseHoeItem extends $HoeItem {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Tier$Type, arg1: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Tier$Type)

public "getAttackDamage"(): float
public "getAttackSpeed"(): float
get "attackDamage"(): float
get "attackSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseHoeItem$Type = ($BaseHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseHoeItem_ = $BaseHoeItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagradditions/item/$EssenceCoalItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceCoalItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer)

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceCoalItem$Type = ($EssenceCoalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceCoalItem_ = $EssenceCoalItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/armor/$EssenceHelmetItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$BaseArmorItem, $BaseArmorItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseArmorItem"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceHelmetItem extends $BaseArmorItem implements $ITinkerable {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ArmorMaterial$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceHelmetItem$Type = ($EssenceHelmetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceHelmetItem_ = $EssenceHelmetItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock$Tertium" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$EssenceFurnaceBlock, $EssenceFurnaceBlock$Type} from "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EssenceFurnaceBlock$Tertium extends $EssenceFurnaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceFurnaceBlock$Tertium$Type = ($EssenceFurnaceBlock$Tertium);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceFurnaceBlock$Tertium_ = $EssenceFurnaceBlock$Tertium$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$MysticalSeedsItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICropProvider, $ICropProvider$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$ICropProvider"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Crop, $Crop$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$Crop"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MysticalSeedsItem extends $ItemNameBlockItem implements $ICropProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Crop$Type)

public "getDescriptionId"(): string
public "getCrop"(): $Crop
public "getDescription"(): $Component
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "descriptionId"(): string
get "crop"(): $Crop
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MysticalSeedsItem$Type = ($MysticalSeedsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MysticalSeedsItem_ = $MysticalSeedsItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedFluxCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$IFluxCrafterRecipe, $IFluxCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$IFluxCrafterRecipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapedFluxCrafterRecipe implements $ISpecialRecipe, $IFluxCrafterRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: integer)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: integer, arg6: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getHeight"(): integer
public "getWidth"(): integer
public "getPowerRate"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getPowerRequired"(): integer
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "height"(): integer
get "width"(): integer
get "powerRate"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "id"(): $ResourceLocation
get "powerRequired"(): integer
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedFluxCrafterRecipe$Type = ($ShapedFluxCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedFluxCrafterRecipe_ = $ShapedFluxCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/ironjetpacks/item/$ComponentItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IColored, $IColored$Type} from "packages/com/blakebr0/cucumber/iface/$IColored"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ComponentItem extends $BaseItem implements $IColored {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: string)

public "getColor"(arg0: integer, arg1: $ItemStack$Type): integer
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "getName"(arg0: $ItemStack$Type): $Component
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "getColor"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentItem$Type = ($ComponentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentItem_ = $ComponentItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BasePickaxeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BasePickaxeItem extends $PickaxeItem {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Tier$Type, arg1: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Tier$Type)

public "getAttackDamage"(): float
public "getAttackSpeed"(): float
get "attackDamage"(): float
get "attackSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePickaxeItem$Type = ($BasePickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePickaxeItem_ = $BasePickaxeItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$MysticalFertilizerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MysticalFertilizerItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public static "applyFertilizer"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MysticalFertilizerItem$Type = ($MysticalFertilizerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MysticalFertilizerItem_ = $MysticalFertilizerItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/tinkering/$IAugmentProvider" {
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"

export interface $IAugmentProvider {

 "getAugment"(): $Augment

(): $Augment
}

export namespace $IAugmentProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAugmentProvider$Type = ($IAugmentProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAugmentProvider_ = $IAugmentProvider$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$AugmentItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IAugmentProvider, $IAugmentProvider$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$IAugmentProvider"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AugmentItem extends $BaseItem implements $IAugmentProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Augment$Type)

public "getDescription"(): $Component
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getAugment"(): $Augment
get "description"(): $Component
get "augment"(): $Augment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AugmentItem$Type = ($AugmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AugmentItem_ = $AugmentItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagradditions/item/$EssencePaxelItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasePaxelItem, $BasePaxelItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BasePaxelItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssencePaxelItem extends $BasePaxelItem implements $ITinkerable {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssencePaxelItem$Type = ($EssencePaxelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssencePaxelItem_ = $EssencePaxelItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferDamageRecipe$Serializer" {
import {$ShapedTransferDamageRecipe, $ShapedTransferDamageRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferDamageRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedTransferDamageRecipe$Serializer implements $RecipeSerializer<($ShapedTransferDamageRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedTransferDamageRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedTransferDamageRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedTransferDamageRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedTransferDamageRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferDamageRecipe$Serializer$Type = ($ShapedTransferDamageRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTransferDamageRecipe$Serializer_ = $ShapedTransferDamageRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$EssenceWateringCanItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WateringCanItem, $WateringCanItem$Type} from "packages/com/blakebr0/mysticalagriculture/item/$WateringCanItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EssenceWateringCanItem extends $WateringCanItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer, arg1: double, arg2: $ChatFormatting$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceWateringCanItem$Type = ($EssenceWateringCanItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceWateringCanItem_ = $EssenceWateringCanItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/util/$FurnaceTier" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EssenceFurnaceTileEntity, $EssenceFurnaceTileEntity$Type} from "packages/com/blakebr0/mysticalagriculture/tileentity/$EssenceFurnaceTileEntity"

export class $FurnaceTier extends $Enum<($FurnaceTier)> {
static readonly "INFERIUM": $FurnaceTier
static readonly "PRUDENTIUM": $FurnaceTier
static readonly "TERTIUM": $FurnaceTier
static readonly "IMPERIUM": $FurnaceTier
static readonly "SUPREMIUM": $FurnaceTier
static readonly "AWAKENED_SUPREMIUM": $FurnaceTier


public "getName"(): string
public static "values"(): ($FurnaceTier)[]
public static "valueOf"(arg0: string): $FurnaceTier
public "getCookTimeMultiplier"(): double
public "getBurnTimeMultiplier"(): double
public "createTileEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $EssenceFurnaceTileEntity
get "name"(): string
get "cookTimeMultiplier"(): double
get "burnTimeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceTier$Type = (("awakened_supremium") | ("prudentium") | ("tertium") | ("inferium") | ("supremium") | ("imperium")) | ($FurnaceTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnaceTier_ = $FurnaceTier$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceStaffItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$IElementalItem, $IElementalItem$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$IElementalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"

export class $EssenceStaffItem extends $BaseItem implements $ITinkerable, $IElementalItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer, arg1: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceStaffItem$Type = ($EssenceStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceStaffItem_ = $EssenceStaffItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$SouliumSpawnerRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$ISouliumSpawnerRecipe, $ISouliumSpawnerRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/api/crafting/$ISouliumSpawnerRecipe"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$WeightedRandomList, $WeightedRandomList$Type} from "packages/net/minecraft/util/random/$WeightedRandomList"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$Type} from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SouliumSpawnerRecipe implements $ISpecialRecipe, $ISouliumSpawnerRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: $WeightedRandomList$Type<($WeightedEntry$Wrapper$Type<($EntityType$Type<(any)>)>)>)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getInputCount"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getEntityTypes"(): $WeightedRandomList<($WeightedEntry$Wrapper<($EntityType<(any)>)>)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRandomEntityType"(arg0: $RandomSource$Type): $Optional<($WeightedEntry$Wrapper<($EntityType<(any)>)>)>
public "getId"(): $ResourceLocation
public "getFirstEntityType"(): $EntityType<(any)>
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "inputCount"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "entityTypes"(): $WeightedRandomList<($WeightedEntry$Wrapper<($EntityType<(any)>)>)>
get "id"(): $ResourceLocation
get "firstEntityType"(): $EntityType<(any)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SouliumSpawnerRecipe$Type = ($SouliumSpawnerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SouliumSpawnerRecipe_ = $SouliumSpawnerRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagradditions/item/$WitheringSoulItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WitheringSoulItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitheringSoulItem$Type = ($WitheringSoulItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitheringSoulItem_ = $WitheringSoulItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/block/$BaseStairsBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BaseStairsBlock extends $StairBlock {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Supplier$Type<($BlockState$Type)>, arg1: $SoundType$Type, arg2: float, arg3: float, arg4: boolean)
constructor(arg0: $Supplier$Type<($BlockState$Type)>, arg1: $SoundType$Type, arg2: float, arg3: float)
constructor(arg0: $Supplier$Type<($BlockState$Type)>, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $Block$Type, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $Block$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseStairsBlock$Type = ($BaseStairsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseStairsBlock_ = $BaseStairsBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$ReprocessorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReprocessorBlock extends $BaseTileEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "RUNNING": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReprocessorBlock$Type = ($ReprocessorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReprocessorBlock_ = $ReprocessorBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$InfusionCrystalItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BaseReusableItem, $BaseReusableItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseReusableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InfusionCrystalItem extends $BaseReusableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "isBarVisible"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusionCrystalItem$Type = ($InfusionCrystalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfusionCrystalItem_ = $InfusionCrystalItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crop/$Crop" {
import {$CropType, $CropType$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LazyIngredient, $LazyIngredient$Type} from "packages/com/blakebr0/mysticalagriculture/api/lib/$LazyIngredient"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$CropTier, $CropTier$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTier"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$CropRecipes, $CropRecipes$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropRecipes"
import {$CropTextures, $CropTextures$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTextures"

export class $Crop {

constructor(arg0: $ResourceLocation$Type, arg1: $CropTier$Type, arg2: $CropType$Type, arg3: $CropTextures$Type, arg4: integer, arg5: $LazyIngredient$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $CropTier$Type, arg2: $CropType$Type, arg3: $LazyIngredient$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $CropTier$Type, arg2: $CropType$Type, arg3: integer, arg4: $LazyIngredient$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $CropTier$Type, arg2: $CropType$Type, arg3: $CropTextures$Type, arg4: $LazyIngredient$Type)

public "setType"(arg0: $CropType$Type): $Crop
public "getName"(): string
public "getId"(): $ResourceLocation
public "getType"(): $CropType
public "isEnabled"(): boolean
public "getDisplayName"(): $Component
public "setColor"(arg0: integer): $Crop
public "getModId"(): string
public "getRequiredBiomes"(): $Set<($ResourceLocation)>
public "getEssenceItem"(): $Item
public "getCruxBlock"(): $Block
public "getSecondaryChance"(arg0: $Block$Type): double
public "setEnabled"(arg0: boolean): $Crop
public "setRespectsEffectiveFarmland"(arg0: boolean): $Crop
public "getCraftingMaterial"(): $Ingredient
public "getBaseSecondaryChance"(): double
public "respectsEffectiveFarmland"(): boolean
public "shouldRegisterEssenceItem"(): boolean
public "shouldRegisterCropBlock"(): boolean
public "shouldRegisterSeedsItem"(): boolean
public "setCraftingMaterial"(arg0: $LazyIngredient$Type): $Crop
public "setBaseSecondaryChance"(arg0: double): $Crop
public "hasEffect"(arg0: $ItemStack$Type): boolean
public "getTextures"(): $CropTextures
public "getTier"(): $CropTier
public "getSeedsItem"(): $ItemNameBlockItem
public "setDisplayName"(arg0: $Component$Type): $Crop
public "getLazyIngredient"(): $LazyIngredient
public "isFlowerColored"(): boolean
public "getCropBlock"(): $CropBlock
public "isEssenceColored"(): boolean
public "isSeedColored"(): boolean
public "getEssenceColor"(): integer
public "getFlowerColor"(): integer
public "getSeedColor"(): integer
public "getNameWithSuffix"(arg0: string): string
public "setEssenceColor"(arg0: integer): $Crop
public "setCropBlock"(arg0: $Supplier$Type<(any)>): $Crop
public "setCropBlock"(arg0: $Supplier$Type<(any)>, arg1: boolean): $Crop
public "setFlowerColor"(arg0: integer): $Crop
public "setEssenceItem"(arg0: $Supplier$Type<(any)>): $Crop
public "setEssenceItem"(arg0: $Supplier$Type<(any)>, arg1: boolean): $Crop
public "setSeedsItem"(arg0: $Supplier$Type<(any)>, arg1: boolean): $Crop
public "setSeedsItem"(arg0: $Supplier$Type<(any)>): $Crop
public "setSeedColor"(arg0: integer): $Crop
public "setHasEffect"(arg0: boolean): $Crop
public "getRecipeConfig"(): $CropRecipes
public "addRequiredBiome"(arg0: $ResourceLocation$Type): $Crop
public "setCruxBlock"(arg0: $Supplier$Type<(any)>): $Crop
public "setTier"(arg0: $CropTier$Type): $Crop
set "type"(value: $CropType$Type)
get "name"(): string
get "id"(): $ResourceLocation
get "type"(): $CropType
get "enabled"(): boolean
get "displayName"(): $Component
set "color"(value: integer)
get "modId"(): string
get "requiredBiomes"(): $Set<($ResourceLocation)>
get "essenceItem"(): $Item
get "cruxBlock"(): $Block
set "enabled"(value: boolean)
get "craftingMaterial"(): $Ingredient
get "baseSecondaryChance"(): double
set "craftingMaterial"(value: $LazyIngredient$Type)
set "baseSecondaryChance"(value: double)
get "textures"(): $CropTextures
get "tier"(): $CropTier
get "seedsItem"(): $ItemNameBlockItem
set "displayName"(value: $Component$Type)
get "lazyIngredient"(): $LazyIngredient
get "flowerColored"(): boolean
get "cropBlock"(): $CropBlock
get "essenceColored"(): boolean
get "seedColored"(): boolean
get "essenceColor"(): integer
get "flowerColor"(): integer
get "seedColor"(): integer
set "essenceColor"(value: integer)
set "cropBlock"(value: $Supplier$Type<(any)>)
set "flowerColor"(value: integer)
set "essenceItem"(value: $Supplier$Type<(any)>)
set "seedsItem"(value: $Supplier$Type<(any)>)
set "seedColor"(value: integer)
get "recipeConfig"(): $CropRecipes
set "cruxBlock"(value: $Supplier$Type<(any)>)
set "tier"(value: $CropTier$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Crop$Type = ($Crop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Crop_ = $Crop$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$InfusionAltarBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InfusionAltarBlock extends $BaseTileEntityBlock {
static readonly "ALTAR_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusionAltarBlock$Type = ($InfusionAltarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfusionAltarBlock_ = $InfusionAltarBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/farmland/$IEssenceFarmland" {
import {$CropTier, $CropTier$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTier"

export interface $IEssenceFarmland {

 "getTier"(): $CropTier

(): $CropTier
}

export namespace $IEssenceFarmland {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEssenceFarmland$Type = ($IEssenceFarmland);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEssenceFarmland_ = $IEssenceFarmland$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crop/$CropType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CropType {
static readonly "RESOURCE": $CropType
static readonly "MOB": $CropType

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type)

public "getName"(): string
public "getId"(): $ResourceLocation
public "getModId"(): string
public "getStemModel"(): $ResourceLocation
public "setCraftingSeed"(arg0: $Supplier$Type<(any)>): $CropType
public "getCraftingSeed"(): $Item
get "name"(): string
get "id"(): $ResourceLocation
get "modId"(): string
get "stemModel"(): $ResourceLocation
set "craftingSeed"(value: $Supplier$Type<(any)>)
get "craftingSeed"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropType$Type = ($CropType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropType_ = $CropType$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceSickleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$BaseSickleItem, $BaseSickleItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseSickleItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceSickleItem extends $BaseSickleItem implements $ITinkerable {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: $ChatFormatting$Type, arg3: integer, arg4: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceSickleItem$Type = ($EssenceSickleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceSickleItem_ = $EssenceSickleItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$AwakeningRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$IAwakeningRecipe, $IAwakeningRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/api/crafting/$IAwakeningRecipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AwakeningRecipe implements $ISpecialRecipe, $IAwakeningRecipe {
static readonly "RECIPE_SIZE": integer

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $NonNullList$Type<($ItemStack$Type)>, arg3: $ItemStack$Type, arg4: boolean)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getId"(): $ResourceLocation
public "getEssences"(): $NonNullList<($ItemStack)>
public "getMissingEssences"(arg0: $List$Type<($ItemStack$Type)>): $Map<($ItemStack), (integer)>
public "setTransformer"(arg0: $BiFunction$Type<(integer), ($ItemStack$Type), ($ItemStack$Type)>): void
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "hasRequiredEssences"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "id"(): $ResourceLocation
get "essences"(): $NonNullList<($ItemStack)>
set "transformer"(value: $BiFunction$Type<(integer), ($ItemStack$Type), ($ItemStack$Type)>)
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AwakeningRecipe$Type = ($AwakeningRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AwakeningRecipe_ = $AwakeningRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/soul/$ISoulSiphoningItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ISoulSiphoningItem {

 "getSiphonAmount"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): double

(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): double
}

export namespace $ISoulSiphoningItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoulSiphoningItem$Type = ($ISoulSiphoningItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoulSiphoningItem_ = $ISoulSiphoningItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$SoulExtractorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SoulExtractorBlock extends $BaseTileEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "RUNNING": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulExtractorBlock$Type = ($SoulExtractorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulExtractorBlock_ = $SoulExtractorBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapelessTagRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapelessTagRecipe, $ShapelessTagRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapelessTagRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessTagRecipe$Serializer implements $RecipeSerializer<($ShapelessTagRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessTagRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessTagRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessTagRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessTagRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTagRecipe$Serializer$Type = ($ShapelessTagRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessTagRecipe$Serializer_ = $ShapelessTagRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/world/feature/$SoulstoneFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $SoulstoneFeature extends $Feature<($OreConfiguration)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $Codec$Type<($OreConfiguration$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($OreConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulstoneFeature$Type = ($SoulstoneFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulstoneFeature_ = $SoulstoneFeature$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$AutoFluxCrafterBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AutoFluxCrafterBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoFluxCrafterBlock$Type = ($AutoFluxCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoFluxCrafterBlock_ = $AutoFluxCrafterBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$TheUltimateBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TheUltimateBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheUltimateBlock$Type = ($TheUltimateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TheUltimateBlock_ = $TheUltimateBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crop/$ICropProvider" {
import {$Crop, $Crop$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$Crop"

export interface $ICropProvider {

 "getCrop"(): $Crop

(): $Crop
}

export namespace $ICropProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICropProvider$Type = ($ICropProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICropProvider_ = $ICropProvider$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crafting/$IInfusionRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IInfusionRecipe extends $Recipe<($Container)> {

 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $IInfusionRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInfusionRecipe$Type = ($IInfusionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInfusionRecipe_ = $IInfusionRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTagRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ShapedTagRecipe, $ShapedTagRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTagRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedTagRecipe$Serializer implements $RecipeSerializer<($ShapedTagRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedTagRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedTagRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedTagRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedTagRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTagRecipe$Serializer$Type = ($ShapedTagRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTagRecipe$Serializer_ = $ShapedTagRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/cucumber/util/$TriFunction" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export interface $TriFunction<A, B, C, R> {

 "apply"(arg0: A, arg1: B, arg2: C): R
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $TriFunction<(A), (B), (C), (V)>

(arg0: A, arg1: B, arg2: C): R
}

export namespace $TriFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$Type<A, B, C, R> = ($TriFunction<(A), (B), (C), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriFunction_<A, B, C, R> = $TriFunction$Type<(A), (B), (C), (R)>;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CompressorRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CompressorRecipe, $CompressorRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CompressorRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CompressorRecipe$Serializer implements $RecipeSerializer<($CompressorRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CompressorRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CompressorRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CompressorRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CompressorRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorRecipe$Serializer$Type = ($CompressorRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressorRecipe$Serializer_ = $CompressorRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/ironjetpacks/item/$JetpackItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseArmorItem, $BaseArmorItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseArmorItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IColored, $IColored$Type} from "packages/com/blakebr0/cucumber/iface/$IColored"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JetpackItem extends $BaseArmorItem implements $IColored, $DyeableLeatherItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getColor"(arg0: integer, arg1: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "getColor"(arg0: $ItemStack$Type): integer
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "getColor"(arg0: integer): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackItem$Type = ($JetpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JetpackItem_ = $JetpackItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BaseFishingRodItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemPropertyFunction, $ItemPropertyFunction$Type} from "packages/net/minecraft/client/renderer/item/$ItemPropertyFunction"
import {$FishingRodItem, $FishingRodItem$Type} from "packages/net/minecraft/world/item/$FishingRodItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseFishingRodItem extends $FishingRodItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public static "getCastPropertyGetter"(): $ItemPropertyFunction
get "castPropertyGetter"(): $ItemPropertyFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFishingRodItem$Type = ($BaseFishingRodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseFishingRodItem_ = $BaseFishingRodItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$SoulJarEmptyRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SoulJarEmptyRecipe, $SoulJarEmptyRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$SoulJarEmptyRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SoulJarEmptyRecipe$Serializer implements $RecipeSerializer<($SoulJarEmptyRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SoulJarEmptyRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SoulJarEmptyRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SoulJarEmptyRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SoulJarEmptyRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulJarEmptyRecipe$Serializer$Type = ($SoulJarEmptyRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulJarEmptyRecipe$Serializer_ = $SoulJarEmptyRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$SoulJarItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemPropertyFunction, $ItemPropertyFunction$Type} from "packages/net/minecraft/client/renderer/item/$ItemPropertyFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulJarItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getFillPropertyGetter"(): $ItemPropertyFunction
get "fillPropertyGetter"(): $ItemPropertyFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulJarItem$Type = ($SoulJarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulJarItem_ = $SoulJarItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedTableRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ShapedTableRecipe, $ShapedTableRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedTableRecipe"

export class $ShapedTableRecipe$Serializer implements $RecipeSerializer<($ShapedTableRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedTableRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedTableRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedTableRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedTableRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTableRecipe$Serializer$Type = ($ShapedTableRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTableRecipe$Serializer_ = $ShapedTableRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$WitherproofGlassBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseGlassBlock, $BaseGlassBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseGlassBlock"

export class $WitherproofGlassBlock extends $BaseGlassBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "dropFromExplosion"(arg0: $Explosion$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitherproofGlassBlock$Type = ($WitherproofGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitherproofGlassBlock_ = $WitherproofGlassBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/api/crafting/$ICombinationRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ICombinationRecipe extends $Recipe<($Container)> {

 "getPowerCost"(): integer
 "getPowerRate"(): integer
 "getInputsList"(): $List<($Component)>
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $ICombinationRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICombinationRecipe$Type = ($ICombinationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICombinationRecipe_ = $ICombinationRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BaseTileEntityBlock extends $BaseBlock implements $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $SoundType$Type, arg1: float, arg2: float, arg3: boolean)
constructor(arg0: $SoundType$Type, arg1: float, arg2: float)
constructor(arg0: $Function$Type<($BlockBehaviour$Properties$Type), ($BlockBehaviour$Properties$Type)>)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseTileEntityBlock$Type = ($BaseTileEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseTileEntityBlock_ = $BaseTileEntityBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BaseSwordItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseSwordItem extends $SwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Tier$Type, arg1: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Tier$Type)

public "getDamage"(): float
public "getAttackSpeed"(): float
get "damage"(): float
get "attackSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSwordItem$Type = ($BaseSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseSwordItem_ = $BaseSwordItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$BasicTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BasicTableBlock extends $BaseTileEntityBlock {
static readonly "BASIC_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicTableBlock$Type = ($BasicTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicTableBlock_ = $BasicTableBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CombinationRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ICombinationRecipe, $ICombinationRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$ICombinationRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CombinationRecipe implements $ISpecialRecipe, $ICombinationRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getPowerCost"(): integer
public "getPowerRate"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getInputsList"(): $List<($Component)>
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "powerCost"(): integer
get "powerRate"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "id"(): $ResourceLocation
get "inputsList"(): $List<($Component)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinationRecipe$Type = ($CombinationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombinationRecipe_ = $CombinationRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTagRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapedNoMirrorRecipe, $ShapedNoMirrorRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedNoMirrorRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$OutputResolver$Item, $OutputResolver$Item$Type} from "packages/com/blakebr0/cucumber/crafting/$OutputResolver$Item"

export class $ShapedTagRecipe extends $ShapedNoMirrorRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $OutputResolver$Item$Type, arg7: boolean)
constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: string, arg7: integer, arg8: boolean)

public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTagRecipe$Type = ($ShapedTagRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTagRecipe_ = $ShapedTagRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$WitherproofBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"

export class $WitherproofBlock extends $BaseBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "dropFromExplosion"(arg0: $Explosion$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitherproofBlock$Type = ($WitherproofBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitherproofBlock_ = $WitherproofBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$GrowthAcceleratorBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $GrowthAcceleratorBlock extends $BaseBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer, arg1: $ChatFormatting$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowthAcceleratorBlock$Type = ($GrowthAcceleratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowthAcceleratorBlock_ = $GrowthAcceleratorBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$AdvancedAutoTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AdvancedAutoTableBlock extends $BaseTileEntityBlock {
static readonly "ADVANCED_AUTO_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedAutoTableBlock$Type = ($AdvancedAutoTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedAutoTableBlock_ = $AdvancedAutoTableBlock$Type;
}}
declare module "packages/com/blakebr0/ironjetpacks/crafting/recipe/$JetpackUpgradeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$JetpackUpgradeRecipe, $JetpackUpgradeRecipe$Type} from "packages/com/blakebr0/ironjetpacks/crafting/recipe/$JetpackUpgradeRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $JetpackUpgradeRecipe$Serializer implements $RecipeSerializer<($JetpackUpgradeRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $JetpackUpgradeRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $JetpackUpgradeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $JetpackUpgradeRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $JetpackUpgradeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackUpgradeRecipe$Serializer$Type = ($JetpackUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JetpackUpgradeRecipe$Serializer_ = $JetpackUpgradeRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/pickletweaks/feature/item/$EmeraldAppleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EmeraldAppleItem extends $BaseItem {
static readonly "FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmeraldAppleItem$Type = ($EmeraldAppleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmeraldAppleItem_ = $EmeraldAppleItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/farmland/$IFarmlandConverter" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IFarmlandConverter {

 "getConvertedFarmland"(): $Block

(): $Block
}

export namespace $IFarmlandConverter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFarmlandConverter$Type = ($IFarmlandConverter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFarmlandConverter_ = $IFarmlandConverter$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crafting/$IReprocessorRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IReprocessorRecipe extends $Recipe<($Container)> {

 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $IReprocessorRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReprocessorRecipe$Type = ($IReprocessorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReprocessorRecipe_ = $IReprocessorRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$EnchanterBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EnchanterBlock extends $BaseTileEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "ENCHANTER_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterBlock$Type = ($EnchanterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterBlock_ = $EnchanterBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/armor/$EssenceChestplateItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$BaseArmorItem, $BaseArmorItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseArmorItem"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceChestplateItem extends $BaseArmorItem implements $ITinkerable {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ArmorMaterial$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceChestplateItem$Type = ($EssenceChestplateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceChestplateItem_ = $EssenceChestplateItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BaseShearsItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ShearsItem, $ShearsItem$Type} from "packages/net/minecraft/world/item/$ShearsItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseShearsItem extends $ShearsItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseShearsItem$Type = ($BaseShearsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseShearsItem_ = $BaseShearsItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceHoeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BaseHoeItem, $BaseHoeItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseHoeItem"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceHoeItem extends $BaseHoeItem implements $ITinkerable {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceHoeItem$Type = ($EssenceHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceHoeItem_ = $EssenceHoeItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTextures" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CropTextures {
static readonly "FLOWER_INGOT_BLANK": $ResourceLocation
static readonly "FLOWER_ROCK_BLANK": $ResourceLocation
static readonly "FLOWER_DUST_BLANK": $ResourceLocation
static readonly "FLOWER_FACE_BLANK": $ResourceLocation
static readonly "ESSENCE_INGOT_BLANK": $ResourceLocation
static readonly "ESSENCE_ROCK_BLANK": $ResourceLocation
static readonly "ESSENCE_DUST_BLANK": $ResourceLocation
static readonly "ESSENCE_GEM_BLANK": $ResourceLocation
static readonly "ESSENCE_TALL_GEM_BLANK": $ResourceLocation
static readonly "ESSENCE_DIAMOND_BLANK": $ResourceLocation
static readonly "ESSENCE_QUARTZ_BLANK": $ResourceLocation
static readonly "ESSENCE_FLAME_BLANK": $ResourceLocation
static readonly "ESSENCE_ROD_BLANK": $ResourceLocation
static readonly "SEED_BLANK": $ResourceLocation
static readonly "INGOT_CROP_TEXTURES": $CropTextures
static readonly "ROCK_CROP_TEXTURES": $CropTextures
static readonly "DUST_CROP_TEXTURES": $CropTextures
static readonly "GEM_CROP_TEXTURES": $CropTextures
static readonly "ELEMENTAL_CROP_TEXTURES": $CropTextures

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type)
constructor()

public "init"(arg0: $ResourceLocation$Type): $CropTextures
public "getFlowerTexture"(): $ResourceLocation
public "getEssenceTexture"(): $ResourceLocation
public "getSeedTexture"(): $ResourceLocation
public "setFlowerTexture"(arg0: $ResourceLocation$Type): $CropTextures
public "setEssenceTexture"(arg0: $ResourceLocation$Type): $CropTextures
public "setSeedTexture"(arg0: $ResourceLocation$Type): $CropTextures
get "flowerTexture"(): $ResourceLocation
get "essenceTexture"(): $ResourceLocation
get "seedTexture"(): $ResourceLocation
set "flowerTexture"(value: $ResourceLocation$Type)
set "essenceTexture"(value: $ResourceLocation$Type)
set "seedTexture"(value: $ResourceLocation$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropTextures$Type = ($CropTextures);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropTextures_ = $CropTextures$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$AwakeningAltarBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AwakeningAltarBlock extends $BaseTileEntityBlock {
static readonly "ALTAR_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AwakeningAltarBlock$Type = ($AwakeningAltarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AwakeningAltarBlock_ = $AwakeningAltarBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$ExperienceCapsuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemPropertyFunction, $ItemPropertyFunction$Type} from "packages/net/minecraft/client/renderer/item/$ItemPropertyFunction"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExperienceCapsuleItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getFillPropertyGetter"(): $ItemPropertyFunction
get "fillPropertyGetter"(): $ItemPropertyFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceCapsuleItem$Type = ($ExperienceCapsuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceCapsuleItem_ = $ExperienceCapsuleItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/iface/$IColored" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IColored {

 "getColor"(arg0: integer): integer
 "getColor"(arg0: integer, arg1: $ItemStack$Type): integer
}

export namespace $IColored {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColored$Type = ($IColored);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColored_ = $IColored$Type;
}}
declare module "packages/com/blakebr0/pickletweaks/feature/item/$MagnetItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MagnetItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetItem$Type = ($MagnetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetItem_ = $MagnetItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crop/$CropRecipes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CropRecipes {

constructor()
constructor(arg0: boolean, arg1: boolean, arg2: boolean)

public "isSeedInfusionRecipeEnabled"(): boolean
public "setSeedReprocessorRecipeEnabled"(arg0: boolean): $CropRecipes
public "isSeedReprocessorRecipeEnabled"(): boolean
public "setSeedCraftingRecipeEnabled"(arg0: boolean): $CropRecipes
public "setSeedInfusionRecipeEnabled"(arg0: boolean): $CropRecipes
public "isSeedCraftingRecipeEnabled"(): boolean
get "seedInfusionRecipeEnabled"(): boolean
set "seedReprocessorRecipeEnabled"(value: boolean)
get "seedReprocessorRecipeEnabled"(): boolean
set "seedCraftingRecipeEnabled"(value: boolean)
set "seedInfusionRecipeEnabled"(value: boolean)
get "seedCraftingRecipeEnabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropRecipes$Type = ($CropRecipes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropRecipes_ = $CropRecipes$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/$BaseBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Block$Type)
constructor(arg0: $Block$Type, arg1: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$Type = ($BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem_ = $BaseBlockItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/api/crafting/$IEnderCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IEnderCrafterRecipe extends $Recipe<($Container)> {

 "getCraftingTime"(): integer
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $IEnderCrafterRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnderCrafterRecipe$Type = ($IEnderCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnderCrafterRecipe_ = $IEnderCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/iface/$ICustomBow" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICustomBow {

 "getDrawSpeedMulti"(arg0: $ItemStack$Type): float
 "getBonusDamage"(arg0: $ItemStack$Type): float
 "hasFOVChange"(): boolean

(arg0: $Player$Type): $ItemStack
}

export namespace $ICustomBow {
function findAmmo(arg0: $Player$Type): $ItemStack
function isArrow(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomBow$Type = ($ICustomBow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomBow_ = $ICustomBow$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$CraftingCoreBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CraftingCoreBlock extends $BaseTileEntityBlock {
static readonly "CRAFTING_CORE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingCoreBlock$Type = ($CraftingCoreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingCoreBlock_ = $CraftingCoreBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CombinationRecipe$Serializer" {
import {$CombinationRecipe, $CombinationRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CombinationRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CombinationRecipe$Serializer implements $RecipeSerializer<($CombinationRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CombinationRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CombinationRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CombinationRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CombinationRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinationRecipe$Serializer$Type = ($CombinationRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombinationRecipe$Serializer_ = $CombinationRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapelessTagRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$OutputResolver$Item, $OutputResolver$Item$Type} from "packages/com/blakebr0/cucumber/crafting/$OutputResolver$Item"

export class $ShapelessTagRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $OutputResolver$Item$Type)
constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: string, arg5: integer)

public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTagRecipe$Type = ($ShapelessTagRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessTagRecipe_ = $ShapelessTagRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$EnderCrafterBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnderCrafterBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderCrafterBlock$Type = ($EnderCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderCrafterBlock_ = $EnderCrafterBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/api/crafting/$IFluxCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IFluxCrafterRecipe extends $Recipe<($Container)> {

 "getPowerRate"(): integer
 "getPowerRequired"(): integer
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $IFluxCrafterRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluxCrafterRecipe$Type = ($IFluxCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluxCrafterRecipe_ = $IFluxCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock$Supremium" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$EssenceFurnaceBlock, $EssenceFurnaceBlock$Type} from "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EssenceFurnaceBlock$Supremium extends $EssenceFurnaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceFurnaceBlock$Supremium$Type = ($EssenceFurnaceBlock$Supremium);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceFurnaceBlock$Supremium_ = $EssenceFurnaceBlock$Supremium$Type;
}}
declare module "packages/com/blakebr0/pickletweaks/feature/item/$CoalPieceItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoalPieceItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoalPieceItem$Type = ($CoalPieceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoalPieceItem_ = $CoalPieceItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$EnderAlternatorBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EnderAlternatorBlock extends $BaseBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderAlternatorBlock$Type = ($EnderAlternatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderAlternatorBlock_ = $EnderAlternatorBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$FarmlandTillRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$FarmlandTillRecipe, $FarmlandTillRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$FarmlandTillRecipe"

export class $FarmlandTillRecipe$Serializer implements $RecipeSerializer<($FarmlandTillRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $FarmlandTillRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $FarmlandTillRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $FarmlandTillRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $FarmlandTillRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmlandTillRecipe$Serializer$Type = ($FarmlandTillRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmlandTillRecipe$Serializer_ = $FarmlandTillRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable" {
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"

export interface $ITinkerable {

 "canApplyAugment"(arg0: $Augment$Type): boolean
 "getAugmentSlots"(): integer
 "getTinkerableTier"(): integer
 "getAugmentTypes"(): $EnumSet<($AugmentType)>
}

export namespace $ITinkerable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITinkerable$Type = ($ITinkerable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITinkerable_ = $ITinkerable$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BaseAxeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseAxeItem extends $AxeItem {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Tier$Type, arg1: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Tier$Type)

public "getAttackDamage"(): float
public "getAttackSpeed"(): float
get "attackDamage"(): float
get "attackSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseAxeItem$Type = ($BaseAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseAxeItem_ = $BaseAxeItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceScytheItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BaseScytheItem, $BaseScytheItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseScytheItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceScytheItem extends $BaseScytheItem implements $ITinkerable {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: $ChatFormatting$Type, arg3: integer, arg4: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceScytheItem$Type = ($EssenceScytheItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceScytheItem_ = $EssenceScytheItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$EssenceItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICropTierProvider, $ICropTierProvider$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$ICropTierProvider"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CropTier, $CropTier$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IFarmlandConverter, $IFarmlandConverter$Type} from "packages/com/blakebr0/mysticalagriculture/api/farmland/$IFarmlandConverter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceItem extends $BaseItem implements $IFarmlandConverter, $ICropTierProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $CropTier$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getTier"(): $CropTier
public "getConvertedFarmland"(): $Block
get "tier"(): $CropTier
get "convertedFarmland"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceItem$Type = ($EssenceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceItem_ = $EssenceItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessFluxCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$IFluxCrafterRecipe, $IFluxCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$IFluxCrafterRecipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapelessFluxCrafterRecipe implements $ISpecialRecipe, $IFluxCrafterRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer, arg4: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getPowerRate"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getPowerRequired"(): integer
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "powerRate"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "id"(): $ResourceLocation
get "powerRequired"(): integer
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessFluxCrafterRecipe$Type = ($ShapelessFluxCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessFluxCrafterRecipe_ = $ShapelessFluxCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$EssenceVesselBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EssenceVesselBlock extends $BaseTileEntityBlock {
static readonly "VESSEL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceVesselBlock$Type = ($EssenceVesselBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceVesselBlock_ = $EssenceVesselBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagradditions/item/$EssenceCoalBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BaseBlockItem, $BaseBlockItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseBlockItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceCoalBlockItem extends $BaseBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Block$Type, arg1: integer)

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceCoalBlockItem$Type = ($EssenceCoalBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceCoalBlockItem_ = $EssenceCoalBlockItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$WateringCanItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseWateringCanItem, $BaseWateringCanItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseWateringCanItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WateringCanItem extends $BaseWateringCanItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer, arg1: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WateringCanItem$Type = ($WateringCanItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WateringCanItem_ = $WateringCanItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$SouliumSpawnerRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$SouliumSpawnerRecipe, $SouliumSpawnerRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$SouliumSpawnerRecipe"

export class $SouliumSpawnerRecipe$Serializer implements $RecipeSerializer<($SouliumSpawnerRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SouliumSpawnerRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SouliumSpawnerRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SouliumSpawnerRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SouliumSpawnerRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SouliumSpawnerRecipe$Serializer$Type = ($SouliumSpawnerRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SouliumSpawnerRecipe$Serializer_ = $SouliumSpawnerRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/pickletweaks/feature/block/$SmoothGlowstoneBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"

export class $SmoothGlowstoneBlock extends $BaseBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmoothGlowstoneBlock$Type = ($SmoothGlowstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmoothGlowstoneBlock_ = $SmoothGlowstoneBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceFishingRodItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BaseFishingRodItem, $BaseFishingRodItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseFishingRodItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceFishingRodItem extends $BaseFishingRodItem implements $ITinkerable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceFishingRodItem$Type = ($EssenceFishingRodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceFishingRodItem_ = $EssenceFishingRodItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedTableRecipe" {
import {$TriFunction, $TriFunction$Type} from "packages/com/blakebr0/cucumber/util/$TriFunction"
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ITableRecipe, $ITableRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$ITableRecipe"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapedTableRecipe implements $ISpecialRecipe, $ITableRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getHeight"(): integer
public "getWidth"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getTier"(): integer
public "getId"(): $ResourceLocation
public "hasRequiredTier"(): boolean
public "setTransformer"(arg0: $TriFunction$Type<(integer), (integer), ($ItemStack$Type), ($ItemStack$Type)>): void
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "height"(): integer
get "width"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "tier"(): integer
get "id"(): $ResourceLocation
set "transformer"(value: $TriFunction$Type<(integer), (integer), ($ItemStack$Type), ($ItemStack$Type)>)
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTableRecipe$Type = ($ShapedTableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTableRecipe_ = $ShapedTableRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/soul/$MobSoulType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MobSoulType {

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: double, arg3: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $Set$Type<($ResourceLocation$Type)>, arg2: string, arg3: double, arg4: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: string, arg3: double, arg4: integer)

public "getName"(): string
public "getId"(): $ResourceLocation
public "isEnabled"(): boolean
public "setColor"(arg0: integer): $MobSoulType
public "getModId"(): string
public "setEnabled"(arg0: boolean): $MobSoulType
public "getEntityIds"(): $Set<($ResourceLocation)>
public "getColor"(): integer
public "getSoulRequirement"(): double
public "setEntityDisplayName"(arg0: $Component$Type): $MobSoulType
public "setSoulRequirement"(arg0: double): $MobSoulType
public "isEntityApplicable"(arg0: $LivingEntity$Type): boolean
public "getEntityDisplayName"(): $Component
get "name"(): string
get "id"(): $ResourceLocation
get "enabled"(): boolean
set "color"(value: integer)
get "modId"(): string
set "enabled"(value: boolean)
get "entityIds"(): $Set<($ResourceLocation)>
get "color"(): integer
get "soulRequirement"(): double
set "entityDisplayName"(value: $Component$Type)
set "soulRequirement"(value: double)
get "entityDisplayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSoulType$Type = ($MobSoulType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSoulType_ = $MobSoulType$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/enchantment/$SoulSiphonerEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $SoulSiphonerEnchant extends $Enchantment {
 "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulSiphonerEnchant$Type = ($SoulSiphonerEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulSiphonerEnchant_ = $SoulSiphonerEnchant$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$InfusedFarmlandBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$IEssenceFarmland, $IEssenceFarmland$Type} from "packages/com/blakebr0/mysticalagriculture/api/farmland/$IEssenceFarmland"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FarmBlock, $FarmBlock$Type} from "packages/net/minecraft/world/level/block/$FarmBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IColored, $IColored$Type} from "packages/com/blakebr0/cucumber/iface/$IColored"
import {$CropTier, $CropTier$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTier"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $InfusedFarmlandBlock extends $FarmBlock implements $IColored, $IEssenceFarmland {
static readonly "FARMLANDS": $List<($InfusedFarmlandBlock)>
static readonly "MOISTURE": $IntegerProperty
static readonly "MAX_MOISTURE": integer
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $CropTier$Type)

public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "getColor"(arg0: integer): integer
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "isFertile"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getTier"(): $CropTier
public "getColor"(arg0: integer, arg1: $ItemStack$Type): integer
get "tier"(): $CropTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusedFarmlandBlock$Type = ($InfusedFarmlandBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfusedFarmlandBlock_ = $InfusedFarmlandBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/lib/$LazyIngredient" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Ingredient$Value, $Ingredient$Value$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient$Value"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $LazyIngredient {
static readonly "EMPTY": $LazyIngredient


public "getId"(): string
public static "item"(arg0: string): $LazyIngredient
public static "item"(arg0: string, arg1: $CompoundTag$Type): $LazyIngredient
public static "tag"(arg0: string): $LazyIngredient
public "isTag"(): boolean
public "isItem"(): boolean
public "getIngredient"(): $Ingredient
public "createValue"(): $Ingredient$Value
get "id"(): string
get "ingredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyIngredient$Type = ($LazyIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyIngredient_ = $LazyIngredient$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/util/$MobSoulUtils" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobSoulType, $MobSoulType$Type} from "packages/com/blakebr0/mysticalagriculture/api/soul/$MobSoulType"

export class $MobSoulUtils {

constructor()

public static "getType"(arg0: $ItemStack$Type): $MobSoulType
public static "makeTag"(arg0: $MobSoulType$Type, arg1: double): $CompoundTag
public static "makeTag"(arg0: $MobSoulType$Type): $CompoundTag
public static "getSouls"(arg0: $ItemStack$Type): double
public static "isJarFull"(arg0: $ItemStack$Type): boolean
public static "getFilledSoulJar"(arg0: $MobSoulType$Type, arg1: $Item$Type): $ItemStack
public static "canAddTypeToJar"(arg0: $ItemStack$Type, arg1: $MobSoulType$Type): boolean
public static "addSoulsToJar"(arg0: $ItemStack$Type, arg1: $MobSoulType$Type, arg2: double): double
public static "getSoulJar"(arg0: $MobSoulType$Type, arg1: double, arg2: $Item$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSoulUtils$Type = ($MobSoulUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSoulUtils_ = $MobSoulUtils$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/$BaseItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()
constructor(arg0: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$Type = ($BaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem_ = $BaseItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$MysticalCropBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$ICropProvider, $ICropProvider$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$ICropProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Crop, $Crop$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$Crop"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MysticalCropBlock extends $CropBlock implements $ICropProvider {
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Crop$Type)

public "getDescriptionId"(): string
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCrop"(): $Crop
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "descriptionId"(): string
get "crop"(): $Crop
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MysticalCropBlock$Type = ($MysticalCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MysticalCropBlock_ = $MysticalCropBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock$Prudentium" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$EssenceFurnaceBlock, $EssenceFurnaceBlock$Type} from "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EssenceFurnaceBlock$Prudentium extends $EssenceFurnaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceFurnaceBlock$Prudentium$Type = ($EssenceFurnaceBlock$Prudentium);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceFurnaceBlock$Prudentium_ = $EssenceFurnaceBlock$Prudentium$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferNBTRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedTransferNBTRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean, arg8: integer)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferNBTRecipe$Type = ($ShapedTransferNBTRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTransferNBTRecipe_ = $ShapedTransferNBTRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessTableRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ITableRecipe, $ITableRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$ITableRecipe"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapelessTableRecipe implements $ISpecialRecipe, $ITableRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getTier"(): integer
public "getId"(): $ResourceLocation
public "hasRequiredTier"(): boolean
public "setTransformer"(arg0: $BiFunction$Type<(integer), ($ItemStack$Type), ($ItemStack$Type)>): void
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "tier"(): integer
get "id"(): $ResourceLocation
set "transformer"(value: $BiFunction$Type<(integer), ($ItemStack$Type), ($ItemStack$Type)>)
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTableRecipe$Type = ($ShapelessTableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessTableRecipe_ = $ShapelessTableRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BaseBowItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICustomBow, $ICustomBow$Type} from "packages/com/blakebr0/cucumber/iface/$ICustomBow"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BowItem, $BowItem$Type} from "packages/net/minecraft/world/item/$BowItem"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ItemPropertyFunction, $ItemPropertyFunction$Type} from "packages/net/minecraft/client/renderer/item/$ItemPropertyFunction"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseBowItem extends $BowItem implements $ICustomBow {
static readonly "MAX_DRAW_DURATION": integer
static readonly "DEFAULT_RANGE": integer
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public "hasFOVChange"(): boolean
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public static "getPullingPropertyGetter"(): $ItemPropertyFunction
public static "getPullPropertyGetter"(): $ItemPropertyFunction
/**
 * 
 * @deprecated
 */
public static "findAmmo"(arg0: $Player$Type): $ItemStack
public "getDrawSpeedMulti"(arg0: $ItemStack$Type): float
public "getBonusDamage"(arg0: $ItemStack$Type): float
/**
 * 
 * @deprecated
 */
public static "isArrow"(arg0: $ItemStack$Type): boolean
get "pullingPropertyGetter"(): $ItemPropertyFunction
get "pullPropertyGetter"(): $ItemPropertyFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBowItem$Type = ($BaseBowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBowItem_ = $BaseBowItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$FrameBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"

export class $FrameBlock extends $BaseBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameBlock$Type = ($FrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameBlock_ = $FrameBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$FluxAlternatorBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FluxAlternatorBlock extends $BaseTileEntityBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluxAlternatorBlock$Type = ($FluxAlternatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluxAlternatorBlock_ = $FluxAlternatorBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BaseCrossbowItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICustomBow, $ICustomBow$Type} from "packages/com/blakebr0/cucumber/iface/$ICustomBow"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemPropertyFunction, $ItemPropertyFunction$Type} from "packages/net/minecraft/client/renderer/item/$ItemPropertyFunction"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CrossbowItem, $CrossbowItem$Type} from "packages/net/minecraft/world/item/$CrossbowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseCrossbowItem extends $CrossbowItem implements $ICustomBow {
static readonly "DEFAULT_RANGE": integer
 "startSoundPlayed": boolean
 "midLoadSoundPlayed": boolean
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public static "performShooting"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public "hasFOVChange"(): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public static "getPullingPropertyGetter"(): $ItemPropertyFunction
public static "getPullPropertyGetter"(): $ItemPropertyFunction
public static "getChargedPropertyGetter"(): $ItemPropertyFunction
public static "getFireworkPropertyGetter"(): $ItemPropertyFunction
/**
 * 
 * @deprecated
 */
public static "findAmmo"(arg0: $Player$Type): $ItemStack
public "getDrawSpeedMulti"(arg0: $ItemStack$Type): float
public "getBonusDamage"(arg0: $ItemStack$Type): float
/**
 * 
 * @deprecated
 */
public static "isArrow"(arg0: $ItemStack$Type): boolean
get "pullingPropertyGetter"(): $ItemPropertyFunction
get "pullPropertyGetter"(): $ItemPropertyFunction
get "chargedPropertyGetter"(): $ItemPropertyFunction
get "fireworkPropertyGetter"(): $ItemPropertyFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseCrossbowItem$Type = ($BaseCrossbowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseCrossbowItem_ = $BaseCrossbowItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ISpecialRecipe extends $Recipe<($Container)> {

 "matches"(arg0: $IItemHandler$Type): boolean
 "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
 "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $ISpecialRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialRecipe$Type = ($ISpecialRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpecialRecipe_ = $ISpecialRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceBowItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseBowItem, $BaseBowItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseBowItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceBowItem extends $BaseBowItem implements $ITinkerable {
static readonly "MAX_DRAW_DURATION": integer
static readonly "DEFAULT_RANGE": integer
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: integer, arg3: float, arg4: float)

public "getAugmentSlots"(): integer
public "getDrawSpeedMulti"(arg0: $ItemStack$Type): float
public "getBonusDamage"(arg0: $ItemStack$Type): float
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
/**
 * 
 * @deprecated
 */
public static "findAmmo"(arg0: $Player$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public static "isArrow"(arg0: $ItemStack$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBowItem$Type = ($EssenceBowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBowItem_ = $EssenceBowItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/$BaseReusableItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseReusableItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer, arg1: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: integer, arg1: boolean, arg2: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: integer)
constructor(arg0: boolean, arg1: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseReusableItem$Type = ($BaseReusableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseReusableItem_ = $BaseReusableItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$EliteAutoTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EliteAutoTableBlock extends $BaseTileEntityBlock {
static readonly "ELITE_AUTO_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EliteAutoTableBlock$Type = ($EliteAutoTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EliteAutoTableBlock_ = $EliteAutoTableBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceShearsItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseShearsItem, $BaseShearsItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseShearsItem"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceShearsItem extends $BaseShearsItem implements $ITinkerable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceShearsItem$Type = ($EssenceShearsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceShearsItem_ = $EssenceShearsItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceAxeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BaseAxeItem, $BaseAxeItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseAxeItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceAxeItem extends $BaseAxeItem implements $ITinkerable {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceAxeItem$Type = ($EssenceAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceAxeItem_ = $EssenceAxeItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$FarmlandTillRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $FarmlandTillRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>)

public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmlandTillRecipe$Type = ($FarmlandTillRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmlandTillRecipe_ = $FarmlandTillRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/$OutputResolver$Item" {
import {$OutputResolver, $OutputResolver$Type} from "packages/com/blakebr0/cucumber/crafting/$OutputResolver"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $OutputResolver$Item implements $OutputResolver {

constructor(arg0: $ItemStack$Type)

public "resolve"(): $ItemStack
public static "create"(arg0: $FriendlyByteBuf$Type): $OutputResolver$Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputResolver$Item$Type = ($OutputResolver$Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputResolver$Item_ = $OutputResolver$Item$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/registry/$ICropRegistry" {
import {$CropType, $CropType$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CropTier, $CropTier$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTier"
import {$Crop, $Crop$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$Crop"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICropRegistry {

 "register"(arg0: $Crop$Type): void
 "registerType"(arg0: $CropType$Type): void
 "getCropByName"(arg0: string): $Crop
 "getTiers"(): $List<($CropTier)>
 "registerTier"(arg0: $CropTier$Type): void
 "getTypes"(): $List<($CropType)>
 "getCrops"(): $List<($Crop)>
 "getTierById"(arg0: $ResourceLocation$Type): $CropTier
 "getCropById"(arg0: $ResourceLocation$Type): $Crop
 "getTypeById"(arg0: $ResourceLocation$Type): $CropType
}

export namespace $ICropRegistry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICropRegistry$Type = ($ICropRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICropRegistry_ = $ICropRegistry$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock$Inferium" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$EssenceFurnaceBlock, $EssenceFurnaceBlock$Type} from "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EssenceFurnaceBlock$Inferium extends $EssenceFurnaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceFurnaceBlock$Inferium$Type = ($EssenceFurnaceBlock$Inferium);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceFurnaceBlock$Inferium_ = $EssenceFurnaceBlock$Inferium$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$MasterInfusionCrystalItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BaseReusableItem, $BaseReusableItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseReusableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MasterInfusionCrystalItem extends $BaseReusableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MasterInfusionCrystalItem$Type = ($MasterInfusionCrystalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MasterInfusionCrystalItem_ = $MasterInfusionCrystalItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$CompressorRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$ICompressorRecipe, $ICompressorRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$ICompressorRecipe"

export class $CompressorRecipe implements $ISpecialRecipe, $ICompressorRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer, arg4: $Ingredient$Type, arg5: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: integer, arg4: $Ingredient$Type, arg5: integer, arg6: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getInputCount"(): integer
public "getPowerCost"(): integer
public "getPowerRate"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getCatalyst"(): $Ingredient
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "inputCount"(): integer
get "powerCost"(): integer
get "powerRate"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "id"(): $ResourceLocation
get "catalyst"(): $Ingredient
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorRecipe$Type = ($CompressorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressorRecipe_ = $CompressorRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagradditions/item/$CreativeEssenceItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CreativeEssenceItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEssenceItem$Type = ($CreativeEssenceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeEssenceItem_ = $CreativeEssenceItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crafting/$ISouliumSpawnerRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$WeightedRandomList, $WeightedRandomList$Type} from "packages/net/minecraft/util/random/$WeightedRandomList"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$Type} from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ISouliumSpawnerRecipe extends $Recipe<($Container)> {

 "getInputCount"(): integer
 "getEntityTypes"(): $WeightedRandomList<($WeightedEntry$Wrapper<($EntityType<(any)>)>)>
 "getRandomEntityType"(arg0: $RandomSource$Type): $Optional<($WeightedEntry$Wrapper<($EntityType<(any)>)>)>
 "getFirstEntityType"(): $EntityType<(any)>
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $ISouliumSpawnerRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISouliumSpawnerRecipe$Type = ($ISouliumSpawnerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISouliumSpawnerRecipe_ = $ISouliumSpawnerRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$SouliumSpawnerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SouliumSpawnerBlock extends $BaseTileEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "RUNNING": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SouliumSpawnerBlock$Type = ($SouliumSpawnerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SouliumSpawnerBlock_ = $SouliumSpawnerBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/enchantment/$MysticalEnlightenmentEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $MysticalEnlightenmentEnchantment extends $Enchantment {
 "category": $EnchantmentCategory

constructor()

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MysticalEnlightenmentEnchantment$Type = ($MysticalEnlightenmentEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MysticalEnlightenmentEnchantment_ = $MysticalEnlightenmentEnchantment$Type;
}}
declare module "packages/com/blakebr0/mysticalagradditions/item/$EssenceAppleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EssenceAppleTier, $EssenceAppleTier$Type} from "packages/com/blakebr0/mysticalagradditions/util/$EssenceAppleTier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceAppleItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $EssenceAppleTier$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceAppleItem$Type = ($EssenceAppleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceAppleItem_ = $EssenceAppleItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagradditions/util/$EssenceAppleTier" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EssenceAppleTier extends $Enum<($EssenceAppleTier)> {
static readonly "INFERIUM": $EssenceAppleTier
static readonly "PRUDENTIUM": $EssenceAppleTier
static readonly "TERTIUM": $EssenceAppleTier
static readonly "IMPERIUM": $EssenceAppleTier
static readonly "SUPREMIUM": $EssenceAppleTier
static readonly "INSANIUM": $EssenceAppleTier


public static "values"(): ($EssenceAppleTier)[]
public static "valueOf"(arg0: string): $EssenceAppleTier
public "getTooltip"(): $List<($Component)>
public "getHunger"(): integer
public "getSaturation"(): float
public "onFoodEaten"(arg0: $LivingEntity$Type): void
get "tooltip"(): $List<($Component)>
get "hunger"(): integer
get "saturation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceAppleTier$Type = (("prudentium") | ("insanium") | ("tertium") | ("inferium") | ("supremium") | ("imperium")) | ($EssenceAppleTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceAppleTier_ = $EssenceAppleTier$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/armor/$EssenceBootsItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$BaseArmorItem, $BaseArmorItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseArmorItem"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceBootsItem extends $BaseArmorItem implements $ITinkerable {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ArmorMaterial$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBootsItem$Type = ($EssenceBootsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBootsItem_ = $EssenceBootsItem$Type;
}}
declare module "packages/com/blakebr0/pickletweaks/feature/item/$WateringCanItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseWateringCanItem, $BaseWateringCanItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseWateringCanItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WateringCanItem extends $BaseWateringCanItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer, arg1: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WateringCanItem$Type = ($WateringCanItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WateringCanItem_ = $WateringCanItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crafting/$IEnchanterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IEnchanterRecipe extends $Recipe<($Container)> {

 "getIngredientCounts"(): $List<(integer)>
 "getEnchantment"(): $Enchantment
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $IEnchanterRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnchanterRecipe$Type = ($IEnchanterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnchanterRecipe_ = $IEnchanterRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AugmentType extends $Enum<($AugmentType)> {
static readonly "TOOL": $AugmentType
static readonly "WEAPON": $AugmentType
static readonly "ARMOR": $AugmentType
static readonly "STAFF": $AugmentType
static readonly "SWORD": $AugmentType
static readonly "PICKAXE": $AugmentType
static readonly "SHOVEL": $AugmentType
static readonly "AXE": $AugmentType
static readonly "HOE": $AugmentType
static readonly "BOW": $AugmentType
static readonly "CROSSBOW": $AugmentType
static readonly "SHEARS": $AugmentType
static readonly "FISHING_ROD": $AugmentType
static readonly "SICKLE": $AugmentType
static readonly "SCYTHE": $AugmentType
static readonly "HELMET": $AugmentType
static readonly "CHESTPLATE": $AugmentType
static readonly "LEGGINGS": $AugmentType
static readonly "BOOTS": $AugmentType


public "getName"(): string
public static "values"(): ($AugmentType)[]
public static "valueOf"(arg0: string): $AugmentType
public "getDisplayName"(): $Component
public static "fromName"(arg0: string): $AugmentType
get "name"(): string
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AugmentType$Type = (("fishing_rod") | ("scythe") | ("crossbow") | ("sickle") | ("pickaxe") | ("shovel") | ("staff") | ("bow") | ("tool") | ("axe") | ("weapon") | ("sword") | ("armor") | ("chestplate") | ("shears") | ("helmet") | ("boots") | ("leggings") | ("hoe")) | ($AugmentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AugmentType_ = $AugmentType$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$ReprocessorRecipe$Serializer" {
import {$ReprocessorRecipe, $ReprocessorRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$ReprocessorRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ReprocessorRecipe$Serializer implements $RecipeSerializer<($ReprocessorRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ReprocessorRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ReprocessorRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ReprocessorRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ReprocessorRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReprocessorRecipe$Serializer$Type = ($ReprocessorRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReprocessorRecipe$Serializer_ = $ReprocessorRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/pickletweaks/feature/item/$NightVisionGogglesItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BaseArmorItem, $BaseArmorItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseArmorItem"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NightVisionGogglesItem extends $BaseArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ArmorMaterial$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NightVisionGogglesItem$Type = ($NightVisionGogglesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NightVisionGogglesItem_ = $NightVisionGogglesItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/$OutputResolver" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$OutputResolver$Item, $OutputResolver$Item$Type} from "packages/com/blakebr0/cucumber/crafting/$OutputResolver$Item"

export interface $OutputResolver {

 "resolve"(): $ItemStack

(): $ItemStack
}

export namespace $OutputResolver {
function create(arg0: $FriendlyByteBuf$Type): $OutputResolver$Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputResolver$Type = ($OutputResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputResolver_ = $OutputResolver$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$MachineUpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$MachineUpgradeTier, $MachineUpgradeTier$Type} from "packages/com/blakebr0/mysticalagriculture/util/$MachineUpgradeTier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineUpgradeItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $MachineUpgradeTier$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTier"(): $MachineUpgradeTier
get "tier"(): $MachineUpgradeTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineUpgradeItem$Type = ($MachineUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineUpgradeItem_ = $MachineUpgradeItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BaseShovelItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseShovelItem extends $ShovelItem {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Tier$Type, arg1: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)
constructor(arg0: $Tier$Type)

public "getAttackDamage"(): float
public "getAttackSpeed"(): float
get "attackDamage"(): float
get "attackSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseShovelItem$Type = ($BaseShovelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseShovelItem_ = $BaseShovelItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$FertilizedEssenceItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FertilizedEssenceItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public static "applyFertilizer"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FertilizedEssenceItem$Type = ($FertilizedEssenceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FertilizedEssenceItem_ = $FertilizedEssenceItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/util/$MachineUpgradeTier" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $MachineUpgradeTier extends $Enum<($MachineUpgradeTier)> {
static readonly "INFERIUM": $MachineUpgradeTier
static readonly "PRUDENTIUM": $MachineUpgradeTier
static readonly "TERTIUM": $MachineUpgradeTier
static readonly "IMPERIUM": $MachineUpgradeTier
static readonly "SUPREMIUM": $MachineUpgradeTier
static readonly "AWAKENED_SUPREMIUM": $MachineUpgradeTier


public static "values"(): ($MachineUpgradeTier)[]
public static "valueOf"(arg0: string): $MachineUpgradeTier
public "getValue"(): integer
public "getAddedRange"(): integer
public "getTextColor"(): $ChatFormatting
public "getOperationTimeMultiplier"(): double
public "getFuelCapacityMultiplier"(): double
public "getFuelUsageMultiplier"(): double
get "value"(): integer
get "addedRange"(): integer
get "textColor"(): $ChatFormatting
get "operationTimeMultiplier"(): double
get "fuelCapacityMultiplier"(): double
get "fuelUsageMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineUpgradeTier$Type = (("awakened_supremium") | ("prudentium") | ("tertium") | ("inferium") | ("supremium") | ("imperium")) | ($MachineUpgradeTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineUpgradeTier_ = $MachineUpgradeTier$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/$BaseArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseArmorItem extends $ArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type)
constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseArmorItem$Type = ($BaseArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseArmorItem_ = $BaseArmorItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferNBTRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapedTransferNBTRecipe, $ShapedTransferNBTRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedTransferNBTRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedTransferNBTRecipe$Serializer implements $RecipeSerializer<($ShapedTransferNBTRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedTransferNBTRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedTransferNBTRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedTransferNBTRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedTransferNBTRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferNBTRecipe$Serializer$Type = ($ShapedTransferNBTRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTransferNBTRecipe$Serializer_ = $ShapedTransferNBTRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$ReprocessorRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$IReprocessorRecipe, $IReprocessorRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/api/crafting/$IReprocessorRecipe"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ReprocessorRecipe implements $ISpecialRecipe, $IReprocessorRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReprocessorRecipe$Type = ($ReprocessorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReprocessorRecipe_ = $ReprocessorRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/item/$HandheldTableItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HandheldTableItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandheldTableItem$Type = ($HandheldTableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandheldTableItem_ = $HandheldTableItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/item/$UltimateSingularityItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UltimateSingularityItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateSingularityItem$Type = ($UltimateSingularityItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimateSingularityItem_ = $UltimateSingularityItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessFluxCrafterRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ShapelessFluxCrafterRecipe, $ShapelessFluxCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessFluxCrafterRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessFluxCrafterRecipe$Serializer implements $RecipeSerializer<($ShapelessFluxCrafterRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessFluxCrafterRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessFluxCrafterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessFluxCrafterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessFluxCrafterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessFluxCrafterRecipe$Serializer$Type = ($ShapelessFluxCrafterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessFluxCrafterRecipe$Serializer_ = $ShapelessFluxCrafterRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTier" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $CropTier {
static readonly "ELEMENTAL": $CropTier
static readonly "ONE": $CropTier
static readonly "TWO": $CropTier
static readonly "THREE": $CropTier
static readonly "FOUR": $CropTier
static readonly "FIVE": $CropTier

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $ChatFormatting$Type)

public "getName"(): string
public "getValue"(): integer
public "getId"(): $ResourceLocation
public "getDisplayName"(): $MutableComponent
public "getModId"(): string
public "getEssence"(): $Item
public "getColor"(): integer
public "isEffectiveFarmland"(arg0: $Block$Type): boolean
public "hasSecondarySeedDrop"(): boolean
public "getBaseSecondaryChance"(): double
public "setBaseSecondaryChance"(arg0: double): $CropTier
public "isFertilizable"(): boolean
public "getFarmland"(): $Block
public "setEssence"(arg0: $Supplier$Type<(any)>): $CropTier
public "setFarmland"(arg0: $Supplier$Type<(any)>): $CropTier
public "setDisplayName"(arg0: $MutableComponent$Type): $CropTier
public "setSecondarySeedDrop"(arg0: boolean): $CropTier
public "getTextColor"(): $ChatFormatting
public "setFertilizable"(arg0: boolean): $CropTier
get "name"(): string
get "value"(): integer
get "id"(): $ResourceLocation
get "displayName"(): $MutableComponent
get "modId"(): string
get "essence"(): $Item
get "color"(): integer
get "baseSecondaryChance"(): double
set "baseSecondaryChance"(value: double)
get "fertilizable"(): boolean
get "farmland"(): $Block
set "essence"(value: $Supplier$Type<(any)>)
set "farmland"(value: $Supplier$Type<(any)>)
set "displayName"(value: $MutableComponent$Type)
set "secondarySeedDrop"(value: boolean)
get "textColor"(): $ChatFormatting
set "fertilizable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropTier$Type = ($CropTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropTier_ = $CropTier$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/$BaseShinyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseShinyItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()
constructor(arg0: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseShinyItem$Type = ($BaseShinyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseShinyItem_ = $BaseShinyItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$UltimateTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $UltimateTableBlock extends $BaseTileEntityBlock {
static readonly "ULTIMATE_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateTableBlock$Type = ($UltimateTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimateTableBlock_ = $UltimateTableBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$InfusionRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$InfusionRecipe, $InfusionRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$InfusionRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $InfusionRecipe$Serializer implements $RecipeSerializer<($InfusionRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $InfusionRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $InfusionRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $InfusionRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $InfusionRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusionRecipe$Serializer$Type = ($InfusionRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfusionRecipe$Serializer_ = $InfusionRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessEnderCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$IEnderCrafterRecipe, $IEnderCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$IEnderCrafterRecipe"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapelessEnderCrafterRecipe implements $ISpecialRecipe, $IEnderCrafterRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getCraftingTime"(): integer
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "id"(): $ResourceLocation
get "craftingTime"(): integer
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessEnderCrafterRecipe$Type = ($ShapelessEnderCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessEnderCrafterRecipe_ = $ShapelessEnderCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedEnderCrafterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$IEnderCrafterRecipe, $IEnderCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/api/crafting/$IEnderCrafterRecipe"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapedEnderCrafterRecipe implements $ISpecialRecipe, $IEnderCrafterRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: integer)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getHeight"(): integer
public "getWidth"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getCraftingTime"(): integer
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "height"(): integer
get "width"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "id"(): $ResourceLocation
get "craftingTime"(): integer
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedEnderCrafterRecipe$Type = ($ShapedEnderCrafterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedEnderCrafterRecipe_ = $ShapedEnderCrafterRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock$AwakenedSupremium" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$EssenceFurnaceBlock, $EssenceFurnaceBlock$Type} from "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EssenceFurnaceBlock$AwakenedSupremium extends $EssenceFurnaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceFurnaceBlock$AwakenedSupremium$Type = ($EssenceFurnaceBlock$AwakenedSupremium);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceFurnaceBlock$AwakenedSupremium_ = $EssenceFurnaceBlock$AwakenedSupremium$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$InfusionPedestalBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InfusionPedestalBlock extends $BaseTileEntityBlock {
static readonly "PEDESTAL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusionPedestalBlock$Type = ($InfusionPedestalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfusionPedestalBlock_ = $InfusionPedestalBlock$Type;
}}
declare module "packages/com/blakebr0/ironjetpacks/crafting/recipe/$JetpackUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $JetpackUpgradeRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type, arg6: boolean)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackUpgradeRecipe$Type = ($JetpackUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JetpackUpgradeRecipe_ = $JetpackUpgradeRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$SouliumDaggerItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ISoulSiphoningItem, $ISoulSiphoningItem$Type} from "packages/com/blakebr0/mysticalagriculture/api/soul/$ISoulSiphoningItem"
import {$BaseSwordItem, $BaseSwordItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseSwordItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SouliumDaggerItem$DaggerType, $SouliumDaggerItem$DaggerType$Type} from "packages/com/blakebr0/mysticalagriculture/item/$SouliumDaggerItem$DaggerType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SouliumDaggerItem extends $BaseSwordItem implements $ISoulSiphoningItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: $SouliumDaggerItem$DaggerType$Type)

public "getSiphonAmount"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): double
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SouliumDaggerItem$Type = ($SouliumDaggerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SouliumDaggerItem_ = $SouliumDaggerItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$AdvancedTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AdvancedTableBlock extends $BaseTileEntityBlock {
static readonly "ADVANCED_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedTableBlock$Type = ($AdvancedTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedTableBlock_ = $AdvancedTableBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/block/$BaseOreBlock" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseBlock"

export class $BaseOreBlock extends $BaseBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Function$Type<($BlockBehaviour$Properties$Type), ($BlockBehaviour$Properties$Type)>, arg1: integer, arg2: integer)
constructor(arg0: $SoundType$Type, arg1: float, arg2: float, arg3: integer, arg4: integer)

public "getExpDrop"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseOreBlock$Type = ($BaseOreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseOreBlock_ = $BaseOreBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$InfusionRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$IInfusionRecipe, $IInfusionRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/api/crafting/$IInfusionRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $InfusionRecipe implements $ISpecialRecipe, $IInfusionRecipe {
static readonly "RECIPE_SIZE": integer

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: boolean)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getId"(): $ResourceLocation
public "setTransformer"(arg0: $BiFunction$Type<(integer), ($ItemStack$Type), ($ItemStack$Type)>): void
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "id"(): $ResourceLocation
set "transformer"(value: $BiFunction$Type<(integer), ($ItemStack$Type), ($ItemStack$Type)>)
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusionRecipe$Type = ($InfusionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfusionRecipe_ = $InfusionRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$AwakeningPedestalBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AwakeningPedestalBlock extends $BaseTileEntityBlock {
static readonly "PEDESTAL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AwakeningPedestalBlock$Type = ($AwakeningPedestalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AwakeningPedestalBlock_ = $AwakeningPedestalBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/item/$RecipeMakerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RecipeMakerItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeMakerItem$Type = ($RecipeMakerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeMakerItem_ = $RecipeMakerItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$MysticalEssenceItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICropProvider, $ICropProvider$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$ICropProvider"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Crop, $Crop$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$Crop"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MysticalEssenceItem extends $BaseItem implements $ICropProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Crop$Type)

public "getDescriptionId"(): string
public "getCrop"(): $Crop
public "getDescription"(): $Component
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
get "descriptionId"(): string
get "crop"(): $Crop
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MysticalEssenceItem$Type = ($MysticalEssenceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MysticalEssenceItem_ = $MysticalEssenceItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$ExperienceDropletItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExperienceDropletItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceDropletItem$Type = ($ExperienceDropletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceDropletItem_ = $ExperienceDropletItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/item/$SingularityItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IColored, $IColored$Type} from "packages/com/blakebr0/cucumber/iface/$IColored"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SingularityItem extends $BaseItem implements $IColored {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getColor"(arg0: integer, arg1: $ItemStack$Type): integer
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getColor"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingularityItem$Type = ($SingularityItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingularityItem_ = $SingularityItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$EnchanterRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$EnchanterRecipe, $EnchanterRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$EnchanterRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $EnchanterRecipe$Serializer implements $RecipeSerializer<($EnchanterRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $EnchanterRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $EnchanterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $EnchanterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $EnchanterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$Serializer$Type = ($EnchanterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterRecipe$Serializer_ = $EnchanterRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedNoMirrorRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapedNoMirrorRecipe, $ShapedNoMirrorRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedNoMirrorRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedNoMirrorRecipe$Serializer implements $RecipeSerializer<($ShapedNoMirrorRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedNoMirrorRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedNoMirrorRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedNoMirrorRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedNoMirrorRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedNoMirrorRecipe$Serializer$Type = ($ShapedNoMirrorRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedNoMirrorRecipe$Serializer_ = $ShapedNoMirrorRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$CompressorBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $CompressorBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorBlock$Type = ($CompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressorBlock_ = $CompressorBlock$Type;
}}
declare module "packages/com/blakebr0/pickletweaks/feature/item/$DiamondAppleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DiamondAppleItem extends $BaseItem {
static readonly "FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiamondAppleItem$Type = ($DiamondAppleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiamondAppleItem_ = $DiamondAppleItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/block/$BaseBlock" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BaseBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Function$Type<($BlockBehaviour$Properties$Type), ($BlockBehaviour$Properties$Type)>)
constructor(arg0: $SoundType$Type, arg1: float, arg2: float)
constructor(arg0: $SoundType$Type, arg1: float, arg2: float, arg3: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlock$Type = ($BaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlock_ = $BaseBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/tool/$BaseSickleItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseSickleItem extends $DiggerItem {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer)
constructor(arg0: $Tier$Type, arg1: integer, arg2: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getAttackDamage"(): float
public "getAttackSpeed"(): float
get "attackDamage"(): float
get "attackSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSickleItem$Type = ($BaseSickleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseSickleItem_ = $BaseSickleItem$Type;
}}
declare module "packages/com/blakebr0/cucumber/block/$BaseGlassBlock" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$GlassBlock, $GlassBlock$Type} from "packages/net/minecraft/world/level/block/$GlassBlock"

export class $BaseGlassBlock extends $GlassBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $SoundType$Type, arg1: float, arg2: float, arg3: boolean)
constructor(arg0: $SoundType$Type, arg1: float, arg2: float)
constructor(arg0: $Function$Type<($BlockBehaviour$Properties$Type), ($BlockBehaviour$Properties$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseGlassBlock$Type = ($BaseGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseGlassBlock_ = $BaseGlassBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$UltimateSingularityRecipe" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ShapelessTableRecipe, $ShapelessTableRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessTableRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $UltimateSingularityRecipe extends $ShapelessTableRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type)

public static "invalidate"(): void
public "matches"(arg0: $IItemHandler$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateSingularityRecipe$Type = ($UltimateSingularityRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimateSingularityRecipe_ = $UltimateSingularityRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AbstractFurnaceBlock, $AbstractFurnaceBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractFurnaceBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FurnaceTier, $FurnaceTier$Type} from "packages/com/blakebr0/mysticalagriculture/util/$FurnaceTier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EssenceFurnaceBlock extends $AbstractFurnaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $FurnaceTier$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceFurnaceBlock$Type = ($EssenceFurnaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceFurnaceBlock_ = $EssenceFurnaceBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$BasicAutoTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BasicAutoTableBlock extends $BaseTileEntityBlock {
static readonly "BASIC_AUTO_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicAutoTableBlock$Type = ($BasicAutoTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicAutoTableBlock_ = $BasicAutoTableBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$SouliumDaggerItem$DaggerType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SouliumDaggerItem$DaggerType extends $Enum<($SouliumDaggerItem$DaggerType)> {
static readonly "BASIC": $SouliumDaggerItem$DaggerType
static readonly "PASSIVE": $SouliumDaggerItem$DaggerType
static readonly "HOSTILE": $SouliumDaggerItem$DaggerType
static readonly "CREATIVE": $SouliumDaggerItem$DaggerType


public static "values"(): ($SouliumDaggerItem$DaggerType)[]
public static "valueOf"(arg0: string): $SouliumDaggerItem$DaggerType
public "getSiphonAmount"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): double
public "getDamage"(): integer
public "getDurability"(): integer
get "damage"(): integer
get "durability"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SouliumDaggerItem$DaggerType$Type = (("hostile") | ("basic") | ("passive") | ("creative")) | ($SouliumDaggerItem$DaggerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SouliumDaggerItem$DaggerType_ = $SouliumDaggerItem$DaggerType$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceShovelItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$BaseShovelItem, $BaseShovelItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseShovelItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceShovelItem extends $BaseShovelItem implements $ITinkerable {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceShovelItem$Type = ($EssenceShovelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceShovelItem_ = $EssenceShovelItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/lib/$AbilityCache" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"

export class $AbilityCache {

constructor()

public "add"(arg0: $Augment$Type, arg1: $Player$Type, arg2: $Runnable$Type): void
public "add"(arg0: string, arg1: $Player$Type, arg2: $Runnable$Type): void
public "remove"(arg0: $Augment$Type, arg1: $Player$Type): void
public "remove"(arg0: string, arg1: $Player$Type): void
public "isCached"(arg0: string, arg1: $Player$Type): boolean
public "isCached"(arg0: $Augment$Type, arg1: $Player$Type): boolean
public "getCachedAbilities"(arg0: $Player$Type): $Set<(string)>
public "removeQuietly"(arg0: $Augment$Type, arg1: $Player$Type): void
public "removeQuietly"(arg0: string, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityCache$Type = ($AbilityCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityCache_ = $AbilityCache$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$EliteTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EliteTableBlock extends $BaseTileEntityBlock {
static readonly "ELITE_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EliteTableBlock$Type = ($EliteTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EliteTableBlock_ = $EliteTableBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$SoulJarEmptyRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SoulJarEmptyRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>)

public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulJarEmptyRecipe$Type = ($SoulJarEmptyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulJarEmptyRecipe_ = $SoulJarEmptyRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessEnderCrafterRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapelessEnderCrafterRecipe, $ShapelessEnderCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapelessEnderCrafterRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessEnderCrafterRecipe$Serializer implements $RecipeSerializer<($ShapelessEnderCrafterRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessEnderCrafterRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessEnderCrafterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessEnderCrafterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessEnderCrafterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessEnderCrafterRecipe$Serializer$Type = ($ShapelessEnderCrafterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessEnderCrafterRecipe$Serializer_ = $ShapelessEnderCrafterRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedFluxCrafterRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapedFluxCrafterRecipe, $ShapedFluxCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedFluxCrafterRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedFluxCrafterRecipe$Serializer implements $RecipeSerializer<($ShapedFluxCrafterRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedFluxCrafterRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedFluxCrafterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedFluxCrafterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedFluxCrafterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedFluxCrafterRecipe$Serializer$Type = ($ShapedFluxCrafterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedFluxCrafterRecipe$Serializer_ = $ShapedFluxCrafterRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/armor/$EssenceLeggingsItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$BaseArmorItem, $BaseArmorItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseArmorItem"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceLeggingsItem extends $BaseArmorItem implements $ITinkerable {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ArmorMaterial$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceLeggingsItem$Type = ($EssenceLeggingsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceLeggingsItem_ = $EssenceLeggingsItem$Type;
}}
declare module "packages/com/blakebr0/pickletweaks/feature/crafting/$GridRepairRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GridRepairRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridRepairRecipe$Type = ($GridRepairRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridRepairRecipe_ = $GridRepairRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$EnchanterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IEnchanterRecipe, $IEnchanterRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/api/crafting/$IEnchanterRecipe"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $EnchanterRecipe implements $ISpecialRecipe, $IEnchanterRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $List$Type<(integer)>, arg3: $Enchantment$Type)

public "matches"(arg0: $IItemHandler$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getIngredientCounts"(): $List<(integer)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "getEnchantment"(): $Enchantment
public "getId"(): $ResourceLocation
public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "ingredientCounts"(): $List<(integer)>
get "enchantment"(): $Enchantment
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$Type = ($EnchanterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchanterRecipe_ = $EnchanterRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$TinkeringTableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TinkeringTableBlock extends $BaseTileEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TinkeringTableBlock$Type = ($TinkeringTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TinkeringTableBlock_ = $TinkeringTableBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$AbilityCache, $AbilityCache$Type} from "packages/com/blakebr0/mysticalagriculture/api/lib/$AbilityCache"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Augment {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: $EnumSet$Type<($AugmentType$Type)>, arg3: integer, arg4: integer)

public "getName"(): string
public "getId"(): $ResourceLocation
public "isEnabled"(): boolean
public "getDisplayName"(): $MutableComponent
public "getItem"(): $Item
public "onRightClick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): boolean
public "getModId"(): string
public "setEnabled"(arg0: boolean): $Augment
public "onItemUse"(arg0: $UseOnContext$Type): boolean
public "getSetBonusDisplayText"(): $MutableComponent
public "getDescriptionDisplayText"(): $MutableComponent
public "getPrimaryColor"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "onBlockDestroyed"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hasEffect"(): boolean
public "onPlayerFall"(arg0: $Level$Type, arg1: $Player$Type, arg2: $LivingFallEvent$Type): void
public "getTier"(): integer
public "onPlayerTick"(arg0: $Level$Type, arg1: $Player$Type, arg2: $AbilityCache$Type): void
public "onRightClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): boolean
/**
 * 
 * @deprecated
 */
public "addToolAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $EquipmentSlot$Type, arg2: $ItemStack$Type): void
public "getNameWithSuffix"(arg0: string): string
public "setPrimaryColor"(arg0: integer): $Augment
public "hasSetBonus"(): boolean
public "setSecondaryColor"(arg0: integer): $Augment
public "getSecondaryColor"(): integer
/**
 * 
 * @deprecated
 */
public "addArmorAttributeModifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg1: $EquipmentSlot$Type, arg2: $ItemStack$Type): void
get "name"(): string
get "id"(): $ResourceLocation
get "enabled"(): boolean
get "displayName"(): $MutableComponent
get "item"(): $Item
get "modId"(): string
set "enabled"(value: boolean)
get "setBonusDisplayText"(): $MutableComponent
get "descriptionDisplayText"(): $MutableComponent
get "primaryColor"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
get "tier"(): integer
set "primaryColor"(value: integer)
set "secondaryColor"(value: integer)
get "secondaryColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Augment$Type = ($Augment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Augment_ = $Augment$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$FluxCrafterBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluxCrafterBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluxCrafterBlock$Type = ($FluxCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluxCrafterBlock_ = $FluxCrafterBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$SoulExtractionRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SoulExtractionRecipe, $SoulExtractionRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$SoulExtractionRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SoulExtractionRecipe$Serializer implements $RecipeSerializer<($SoulExtractionRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SoulExtractionRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SoulExtractionRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SoulExtractionRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SoulExtractionRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulExtractionRecipe$Serializer$Type = ($SoulExtractionRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulExtractionRecipe$Serializer_ = $SoulExtractionRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/cucumber/item/$BaseWateringCanItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseWateringCanItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer, arg1: double)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public static "stopPlayingSound"(arg0: $Player$Type): void
public static "startPlayingSound"(arg0: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseWateringCanItem$Type = ($BaseWateringCanItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseWateringCanItem_ = $BaseWateringCanItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssenceCrossbowItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseCrossbowItem, $BaseCrossbowItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BaseCrossbowItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceCrossbowItem extends $BaseCrossbowItem implements $ITinkerable {
static readonly "DEFAULT_RANGE": integer
 "startSoundPlayed": boolean
 "midLoadSoundPlayed": boolean
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: integer, arg3: float, arg4: float)

public "getAugmentSlots"(): integer
public "getDrawSpeedMulti"(arg0: $ItemStack$Type): float
public "getBonusDamage"(arg0: $ItemStack$Type): float
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
/**
 * 
 * @deprecated
 */
public static "findAmmo"(arg0: $Player$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public static "isArrow"(arg0: $ItemStack$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceCrossbowItem$Type = ($EssenceCrossbowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceCrossbowItem_ = $EssenceCrossbowItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$AutoEnderCrafterBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AutoEnderCrafterBlock extends $BaseTileEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoEnderCrafterBlock$Type = ($AutoEnderCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoEnderCrafterBlock_ = $AutoEnderCrafterBlock$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedEnderCrafterRecipe$Serializer" {
import {$ShapedEnderCrafterRecipe, $ShapedEnderCrafterRecipe$Type} from "packages/com/blakebr0/extendedcrafting/crafting/recipe/$ShapedEnderCrafterRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedEnderCrafterRecipe$Serializer implements $RecipeSerializer<($ShapedEnderCrafterRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedEnderCrafterRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedEnderCrafterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedEnderCrafterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedEnderCrafterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedEnderCrafterRecipe$Serializer$Type = ($ShapedEnderCrafterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedEnderCrafterRecipe$Serializer_ = $ShapedEnderCrafterRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/cucumber/crafting/recipe/$ShapedNoMirrorRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedNoMirrorRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean)

public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedNoMirrorRecipe$Type = ($ShapedNoMirrorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedNoMirrorRecipe_ = $ShapedNoMirrorRecipe$Type;
}}
declare module "packages/com/blakebr0/cucumber/iface/$IFluidHolder" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFluidHolder {

 "drain"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): $FluidStack
 "getCapacity"(arg0: $ItemStack$Type): integer
 "fill"(arg0: $ItemStack$Type, arg1: $FluidStack$Type, arg2: boolean): integer
 "getFluid"(arg0: $ItemStack$Type): $FluidStack
}

export namespace $IFluidHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHolder$Type = ($IFluidHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHolder_ = $IFluidHolder$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/$WandItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WandItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandItem$Type = ($WandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandItem_ = $WandItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$InferiumCropBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MysticalCropBlock, $MysticalCropBlock$Type} from "packages/com/blakebr0/mysticalagriculture/block/$MysticalCropBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Crop, $Crop$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$Crop"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $InferiumCropBlock extends $MysticalCropBlock {
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Crop$Type)

public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InferiumCropBlock$Type = ($InferiumCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InferiumCropBlock_ = $InferiumCropBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$AwakeningRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AwakeningRecipe, $AwakeningRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$AwakeningRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AwakeningRecipe$Serializer implements $RecipeSerializer<($AwakeningRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $AwakeningRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $AwakeningRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $AwakeningRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $AwakeningRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AwakeningRecipe$Serializer$Type = ($AwakeningRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AwakeningRecipe$Serializer_ = $AwakeningRecipe$Serializer$Type;
}}
declare module "packages/com/blakebr0/mysticalagradditions/block/$InfusedFarmlandBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$IEssenceFarmland, $IEssenceFarmland$Type} from "packages/com/blakebr0/mysticalagriculture/api/farmland/$IEssenceFarmland"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FarmBlock, $FarmBlock$Type} from "packages/net/minecraft/world/level/block/$FarmBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IColored, $IColored$Type} from "packages/com/blakebr0/cucumber/iface/$IColored"
import {$CropTier, $CropTier$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTier"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $InfusedFarmlandBlock extends $FarmBlock implements $IColored, $IEssenceFarmland {
static readonly "FARMLANDS": $List<($InfusedFarmlandBlock)>
static readonly "MOISTURE": $IntegerProperty
static readonly "MAX_MOISTURE": integer
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $CropTier$Type)

public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "getColor"(arg0: integer): integer
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "isFertile"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getTier"(): $CropTier
public "getColor"(arg0: integer, arg1: $ItemStack$Type): integer
get "tier"(): $CropTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusedFarmlandBlock$Type = ($InfusedFarmlandBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfusedFarmlandBlock_ = $InfusedFarmlandBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagradditions/item/$EssenceItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICropTierProvider, $ICropTierProvider$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$ICropTierProvider"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CropTier, $CropTier$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropTier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IFarmlandConverter, $IFarmlandConverter$Type} from "packages/com/blakebr0/mysticalagriculture/api/farmland/$IFarmlandConverter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssenceItem extends $BaseItem implements $IFarmlandConverter, $ICropTierProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $CropTier$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getTier"(): $CropTier
public "getConvertedFarmland"(): $Block
get "tier"(): $CropTier
get "convertedFarmland"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceItem$Type = ($EssenceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceItem_ = $EssenceItem$Type;
}}
declare module "packages/com/blakebr0/morebuckets/item/$MoreBucketItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem, $BaseItem$Type} from "packages/com/blakebr0/cucumber/item/$BaseItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IFluidHolder, $IFluidHolder$Type} from "packages/com/blakebr0/cucumber/iface/$IFluidHolder"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Bucket, $Bucket$Type} from "packages/com/blakebr0/morebuckets/bucket/$Bucket"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MoreBucketItem extends $BaseItem implements $IFluidHolder {
static readonly "BUCKETS": $List<($MoreBucketItem)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Bucket$Type)

public "drain"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): $FluidStack
public "getCapacity"(arg0: $ItemStack$Type): integer
public "fill"(arg0: $ItemStack$Type, arg1: $FluidStack$Type, arg2: boolean): integer
public "isEnabled"(): boolean
public "getSpaceLeft"(arg0: $ItemStack$Type): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getFluid"(arg0: $ItemStack$Type): $FluidStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getBarColor"(arg0: $ItemStack$Type): integer
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoreBucketItem$Type = ($MoreBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoreBucketItem_ = $MoreBucketItem$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/registry/$IMobSoulTypeRegistry" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobSoulType, $MobSoulType$Type} from "packages/com/blakebr0/mysticalagriculture/api/soul/$MobSoulType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IMobSoulTypeRegistry {

 "register"(arg0: $MobSoulType$Type): void
 "getMobSoulTypeByEntity"(arg0: $LivingEntity$Type): $MobSoulType
 "getUsedEntityIds"(): $Set<($ResourceLocation)>
 "addEntityTo"(arg0: $MobSoulType$Type, arg1: $ResourceLocation$Type): boolean
 "removeEntityFrom"(arg0: $MobSoulType$Type, arg1: $ResourceLocation$Type): boolean
 "getMobSoulTypes"(): $List<($MobSoulType)>
 "getMobSoulTypeById"(arg0: $ResourceLocation$Type): $MobSoulType
}

export namespace $IMobSoulTypeRegistry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMobSoulTypeRegistry$Type = ($IMobSoulTypeRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMobSoulTypeRegistry_ = $IMobSoulTypeRegistry$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/crafting/recipe/$SoulExtractionRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ISpecialRecipe, $ISpecialRecipe$Type} from "packages/com/blakebr0/cucumber/crafting/$ISpecialRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulExtractionRecipe, $ISoulExtractionRecipe$Type} from "packages/com/blakebr0/mysticalagriculture/api/crafting/$ISoulExtractionRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$MobSoulType, $MobSoulType$Type} from "packages/com/blakebr0/mysticalagriculture/api/soul/$MobSoulType"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SoulExtractionRecipe implements $ISpecialRecipe, $ISoulExtractionRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $MobSoulType$Type, arg3: double)

public "matches"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getSouls"(): double
public "assemble"(arg0: $IItemHandler$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getMobSoulType"(): $MobSoulType
public "matches"(arg0: $IItemHandler$Type): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $IItemHandler$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "souls"(): double
get "id"(): $ResourceLocation
get "mobSoulType"(): $MobSoulType
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulExtractionRecipe$Type = ($SoulExtractionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulExtractionRecipe_ = $SoulExtractionRecipe$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/api/crafting/$ICompressorRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ICompressorRecipe extends $Recipe<($Container)> {

 "getInputCount"(): integer
 "getPowerCost"(): integer
 "getPowerRate"(): integer
 "getCatalyst"(): $Ingredient
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $ICompressorRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICompressorRecipe$Type = ($ICompressorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICompressorRecipe_ = $ICompressorRecipe$Type;
}}
declare module "packages/com/blakebr0/morebuckets/bucket/$Bucket" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $Bucket {

constructor(arg0: string, arg1: integer)
constructor(arg0: string, arg1: integer, arg2: $Supplier$Type<(boolean)>)

public "getCapacity"(): integer
public "isEnabled"(): boolean
public "getBuckets"(): integer
public "initConfigValues"(arg0: $ForgeConfigSpec$Builder$Type): void
get "capacity"(): integer
get "enabled"(): boolean
get "buckets"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bucket$Type = ($Bucket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bucket_ = $Bucket$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/api/crafting/$ISoulExtractionRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$MobSoulType, $MobSoulType$Type} from "packages/com/blakebr0/mysticalagriculture/api/soul/$MobSoulType"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ISoulExtractionRecipe extends $Recipe<($Container)> {

 "getSouls"(): double
 "getMobSoulType"(): $MobSoulType
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getSchema"(): $RecipeSchema
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getGroup"(): string
 "getType"(): $ResourceLocation
 "getMod"(): string
}

export namespace $ISoulExtractionRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoulExtractionRecipe$Type = ($ISoulExtractionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoulExtractionRecipe_ = $ISoulExtractionRecipe$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock$Imperium" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$EssenceFurnaceBlock, $EssenceFurnaceBlock$Type} from "packages/com/blakebr0/mysticalagriculture/block/$EssenceFurnaceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EssenceFurnaceBlock$Imperium extends $EssenceFurnaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceFurnaceBlock$Imperium$Type = ($EssenceFurnaceBlock$Imperium);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceFurnaceBlock$Imperium_ = $EssenceFurnaceBlock$Imperium$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/item/tool/$EssencePickaxeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AugmentType, $AugmentType$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$AugmentType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$BasePickaxeItem, $BasePickaxeItem$Type} from "packages/com/blakebr0/cucumber/item/tool/$BasePickaxeItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Augment, $Augment$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$Augment"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITinkerable, $ITinkerable$Type} from "packages/com/blakebr0/mysticalagriculture/api/tinkering/$ITinkerable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EssencePickaxeItem extends $BasePickaxeItem implements $ITinkerable {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: integer, arg2: integer)

public "getAugmentSlots"(): integer
public "getTinkerableTier"(): integer
public "getAugmentTypes"(): $EnumSet<($AugmentType)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "canApplyAugment"(arg0: $Augment$Type): boolean
get "augmentSlots"(): integer
get "tinkerableTier"(): integer
get "augmentTypes"(): $EnumSet<($AugmentType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssencePickaxeItem$Type = ($EssencePickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssencePickaxeItem_ = $EssencePickaxeItem$Type;
}}
declare module "packages/com/blakebr0/extendedcrafting/block/$UltimateAutoTableBlock" {
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $UltimateAutoTableBlock extends $BaseTileEntityBlock {
static readonly "ULTIMATE_AUTO_TABLE_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateAutoTableBlock$Type = ($UltimateAutoTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UltimateAutoTableBlock_ = $UltimateAutoTableBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/block/$HarvesterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BaseTileEntityBlock, $BaseTileEntityBlock$Type} from "packages/com/blakebr0/cucumber/block/$BaseTileEntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $HarvesterBlock extends $BaseTileEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "RUNNING": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvesterBlock$Type = ($HarvesterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HarvesterBlock_ = $HarvesterBlock$Type;
}}
declare module "packages/com/blakebr0/cucumber/block/$BaseWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"

export class $BaseWallBlock extends $WallBlock {
static readonly "UP": $BooleanProperty
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $SoundType$Type, arg1: float, arg2: float, arg3: boolean)
constructor(arg0: $SoundType$Type, arg1: float, arg2: float)
constructor(arg0: $BlockBehaviour$Properties$Type)
constructor(arg0: $Block$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseWallBlock$Type = ($BaseWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseWallBlock_ = $BaseWallBlock$Type;
}}
declare module "packages/com/blakebr0/mysticalagriculture/tileentity/$EssenceFurnaceTileEntity" {
import {$AbstractFurnaceBlockEntity, $AbstractFurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$AbstractFurnaceBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FurnaceTier, $FurnaceTier$Type} from "packages/com/blakebr0/mysticalagriculture/util/$FurnaceTier"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RecipeManager$CachedCheck, $RecipeManager$CachedCheck$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager$CachedCheck"

export class $EssenceFurnaceTileEntity extends $AbstractFurnaceBlockEntity {
static readonly "DATA_LIT_TIME": integer
static readonly "DATA_LIT_DURATION": integer
static readonly "DATA_COOKING_PROGRESS": integer
static readonly "DATA_COOKING_TOTAL_TIME": integer
static readonly "NUM_DATA_VALUES": integer
static readonly "BURN_TIME_STANDARD": integer
static readonly "BURN_COOL_SPEED": integer
 "litTime": integer
 "litDuration": integer
 "cookingProgress": integer
 "cookingTotalTime": integer
readonly "quickCheck": $RecipeManager$CachedCheck<($Container), (any)>
 "lockKey": $LockCode

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $EssenceFurnaceTileEntity$Type): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "getTier"(): $FurnaceTier
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "tier"(): $FurnaceTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceFurnaceTileEntity$Type = ($EssenceFurnaceTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceFurnaceTileEntity_ = $EssenceFurnaceTileEntity$Type;
}}
declare module "packages/com/blakebr0/cucumber/block/$BaseSlabBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"

export class $BaseSlabBlock extends $SlabBlock {
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $SoundType$Type, arg1: float, arg2: float, arg3: boolean)
constructor(arg0: $SoundType$Type, arg1: float, arg2: float)
constructor(arg0: $BlockBehaviour$Properties$Type)
constructor(arg0: $Block$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSlabBlock$Type = ($BaseSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseSlabBlock_ = $BaseSlabBlock$Type;
}}
