declare module "packages/mcjty/rftoolsdim/modules/dimlets/data/$DimletKey" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DimletType, $DimletType$Type} from "packages/mcjty/rftoolsdim/modules/dimlets/data/$DimletType"

export class $DimletKey extends $Record implements $Comparable<($DimletKey)> {

constructor(type: $DimletType$Type, key: string)

public "type"(): $DimletType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "toBytes"(arg0: $FriendlyByteBuf$Type): void
public "compareTo"(arg0: $DimletKey$Type): integer
public "key"(): string
public static "create"(arg0: $FriendlyByteBuf$Type): $DimletKey
public static "create"(arg0: string): $DimletKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletKey$Type = ($DimletKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimletKey_ = $DimletKey$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimlets/recipes/$DimletCycleRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$DigitCycleRecipe, $DigitCycleRecipe$Type} from "packages/mcjty/rftoolsdim/modules/dimlets/recipes/$DigitCycleRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DimletCycleRecipeSerializer implements $RecipeSerializer<($DigitCycleRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $DigitCycleRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $DigitCycleRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $DigitCycleRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $DigitCycleRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletCycleRecipeSerializer$Type = ($DimletCycleRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimletCycleRecipeSerializer_ = $DimletCycleRecipeSerializer$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimlets/recipes/$DimletRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DimletRecipe, $DimletRecipe$Type} from "packages/mcjty/rftoolsdim/modules/dimlets/recipes/$DimletRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DimletRecipeSerializer implements $RecipeSerializer<($DimletRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $DimletRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $DimletRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $DimletRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $DimletRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletRecipeSerializer$Type = ($DimletRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimletRecipeSerializer_ = $DimletRecipeSerializer$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/various/blocks/$ActivityProbeBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ActivityProbeBlock extends $Block {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActivityProbeBlock$Type = ($ActivityProbeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActivityProbeBlock_ = $ActivityProbeBlock$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimensionbuilder/items/$DimensionMonitorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $DimensionMonitorItem extends $Item implements $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionMonitorItem$Type = ($DimensionMonitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionMonitorItem_ = $DimensionMonitorItem$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimensionbuilder/items/$PhasedFieldGenerator" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEnergyItem, $IEnergyItem$Type} from "packages/mcjty/lib/varia/$IEnergyItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $PhasedFieldGenerator extends $Item implements $IEnergyItem, $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "extractEnergyL"(arg0: $ItemStack$Type, arg1: long, arg2: boolean): long
public "getEnergyStoredL"(arg0: $ItemStack$Type): long
public "receiveEnergyL"(arg0: $ItemStack$Type, arg1: long, arg2: boolean): long
public static "checkValidPhasedFieldGenerator"(arg0: $Player$Type, arg1: boolean, arg2: integer): boolean
public "getMaxEnergyStoredL"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
public "getMaxEnergyStored"(arg0: $ItemStack$Type): integer
public "receiveEnergy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
public "getEnergyStored"(arg0: $ItemStack$Type): integer
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhasedFieldGenerator$Type = ($PhasedFieldGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhasedFieldGenerator_ = $PhasedFieldGenerator$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimlets/recipes/$DigitCycleRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$AbstractRecipeAdaptor, $AbstractRecipeAdaptor$Type} from "packages/mcjty/lib/crafting/$AbstractRecipeAdaptor"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $DigitCycleRecipe extends $AbstractRecipeAdaptor {

constructor(arg0: $ShapedRecipe$Type, arg1: string, arg2: string)

public "getInput"(): string
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "category"(): $CraftingBookCategory
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOutput"(): string
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "input"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "output"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitCycleRecipe$Type = ($DigitCycleRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DigitCycleRecipe_ = $DigitCycleRecipe$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/knowledge/items/$LostKnowledgeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DimletKey, $DimletKey$Type} from "packages/mcjty/rftoolsdim/modules/dimlets/data/$DimletKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$KnowledgeKey, $KnowledgeKey$Type} from "packages/mcjty/rftoolsdim/modules/knowledge/data/$KnowledgeKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$DimletRarity, $DimletRarity$Type} from "packages/mcjty/rftoolsdim/modules/dimlets/data/$DimletRarity"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $LostKnowledgeItem extends $Item implements $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $DimletRarity$Type)

public "getRarity"(): $DimletRarity
public static "createLostKnowledge"(arg0: $Level$Type, arg1: $DimletKey$Type): $ItemStack
public static "createRandomLostKnowledge"(arg0: $Level$Type, arg1: $DimletRarity$Type, arg2: $RandomSource$Type): $ItemStack
public static "getKnowledgeKey"(arg0: $ItemStack$Type): $KnowledgeKey
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "createUnresearchedLostKnowledge"(arg0: $DimletRarity$Type): $ItemStack
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "rarity"(): $DimletRarity
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LostKnowledgeItem$Type = ($LostKnowledgeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LostKnowledgeItem_ = $LostKnowledgeItem$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimensionbuilder/items/$EmptyDimensionTab" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EmptyDimensionTab extends $Item {
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
export type $EmptyDimensionTab$Type = ($EmptyDimensionTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyDimensionTab_ = $EmptyDimensionTab$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimlets/data/$DimletType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DimletType extends $Enum<($DimletType)> {
static readonly "TERRAIN": $DimletType
static readonly "ATTRIBUTE": $DimletType
static readonly "BIOME_CONTROLLER": $DimletType
static readonly "BIOME_CATEGORY": $DimletType
static readonly "BIOME": $DimletType
static readonly "FEATURE": $DimletType
static readonly "STRUCTURE": $DimletType
static readonly "TIME": $DimletType
static readonly "TAG": $DimletType
static readonly "BLOCK": $DimletType
static readonly "DIGIT": $DimletType
static readonly "ADMIN": $DimletType
static readonly "FLUID": $DimletType
static readonly "SKY": $DimletType


public static "values"(): ($DimletType)[]
public static "valueOf"(arg0: string): $DimletType
public "getShortName"(): string
public static "byName"(arg0: string): $DimletType
public "usesKnowledgeSystem"(): boolean
get "shortName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletType$Type = (("sky") | ("biome_controller") | ("admin") | ("structure") | ("biome_category") | ("feature") | ("biome") | ("block") | ("fluid") | ("attribute") | ("time") | ("tag") | ("terrain") | ("digit")) | ($DimletType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimletType_ = $DimletType$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/knowledge/data/$DimletPattern" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $DimletPattern extends $Record {
static readonly "PATTERN_DIM": integer

constructor(pattern: (string)[])

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "count"(arg0: character): integer
public "pattern"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletPattern$Type = ($DimletPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimletPattern_ = $DimletPattern$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/knowledge/data/$KnowledgeSet" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $KnowledgeSet extends $Enum<($KnowledgeSet)> {
static readonly "SET1": $KnowledgeSet
static readonly "SET2": $KnowledgeSet
static readonly "SET3": $KnowledgeSet
static readonly "SET4": $KnowledgeSet
static readonly "SET5": $KnowledgeSet
static readonly "SET6": $KnowledgeSet


public static "values"(): ($KnowledgeSet)[]
public static "valueOf"(arg0: string): $KnowledgeSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnowledgeSet$Type = (("set6") | ("set3") | ("set2") | ("set5") | ("set4") | ("set1")) | ($KnowledgeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnowledgeSet_ = $KnowledgeSet$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimlets/items/$PartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $PartItem extends $Item implements $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartItem$Type = ($PartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartItem_ = $PartItem$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimensionbuilder/items/$RealizedDimensionTab" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
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

export class $RealizedDimensionTab extends $Item {
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealizedDimensionTab$Type = ($RealizedDimensionTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealizedDimensionTab_ = $RealizedDimensionTab$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimlets/items/$DimletItem" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ITooltipExtras, $ITooltipExtras$Type} from "packages/mcjty/lib/tooltips/$ITooltipExtras"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DimletPattern, $DimletPattern$Type} from "packages/mcjty/rftoolsdim/modules/knowledge/data/$DimletPattern"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseItem, $BaseItem$Type} from "packages/mcjty/lib/items/$BaseItem"
import {$DimletType, $DimletType$Type} from "packages/mcjty/rftoolsdim/modules/dimlets/data/$DimletType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $DimletItem extends $BaseItem implements $ITooltipSettings, $ITooltipExtras {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $DimletType$Type, arg1: boolean)

public static "getType"(arg0: $ItemStack$Type): $DimletType
public "getType"(): $DimletType
public "getItems"(arg0: $ItemStack$Type): $List<($Pair<($ItemStack), (integer)>)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "addPatternItems"(arg0: $DimletPattern$Type, arg1: $List$Type<($Pair$Type<($ItemStack$Type), (integer)>)>): void
public static "isReadyDimlet"(arg0: $ItemStack$Type): boolean
public static "isEmptyDimlet"(arg0: $ItemStack$Type): boolean
public "getItemsForTab"(): $List<($ItemStack)>
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "type"(): $DimletType
get "itemsForTab"(): $List<($ItemStack)>
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletItem$Type = ($DimletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimletItem_ = $DimletItem$Type;
}}
declare module "packages/mcjty/rftoolsdim/dimension/features/$RFTFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
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

export class $RFTFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "RFTFEATURE_ID": $ResourceLocation
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

constructor(arg0: $Codec$Type<($NoneFeatureConfiguration$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RFTFeature$Type = ($RFTFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RFTFeature_ = $RFTFeature$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimlets/data/$DimletRarity" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DimletRarity extends $Enum<($DimletRarity)> {
static readonly "COMMON": $DimletRarity
static readonly "UNCOMMON": $DimletRarity
static readonly "RARE": $DimletRarity
static readonly "LEGENDARY": $DimletRarity


public static "values"(): ($DimletRarity)[]
public static "valueOf"(arg0: string): $DimletRarity
public "getShortName"(): string
public static "byName"(arg0: string): $DimletRarity
get "shortName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletRarity$Type = (("uncommon") | ("common") | ("legendary") | ("rare")) | ($DimletRarity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimletRarity_ = $DimletRarity$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/knowledge/data/$KnowledgeKey" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$KnowledgeSet, $KnowledgeSet$Type} from "packages/mcjty/rftoolsdim/modules/knowledge/data/$KnowledgeSet"
import {$DimletType, $DimletType$Type} from "packages/mcjty/rftoolsdim/modules/dimlets/data/$DimletType"
import {$DimletRarity, $DimletRarity$Type} from "packages/mcjty/rftoolsdim/modules/dimlets/data/$DimletRarity"

export class $KnowledgeKey extends $Record {

constructor(type: $DimletType$Type, rarity: $DimletRarity$Type, set: $KnowledgeSet$Type)

public "type"(): $DimletType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "set"(): $KnowledgeSet
public static "create"(arg0: string): $KnowledgeKey
public "serialize"(): string
public "rarity"(): $DimletRarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnowledgeKey$Type = ($KnowledgeKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnowledgeKey_ = $KnowledgeKey$Type;
}}
declare module "packages/mcjty/rftoolsdim/modules/dimlets/recipes/$DimletRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$AbstractRecipeAdaptor, $AbstractRecipeAdaptor$Type} from "packages/mcjty/lib/crafting/$AbstractRecipeAdaptor"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$DimletKey, $DimletKey$Type} from "packages/mcjty/rftoolsdim/modules/dimlets/data/$DimletKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $DimletRecipe extends $AbstractRecipeAdaptor {

constructor(arg0: $ShapedRecipe$Type, arg1: $DimletKey$Type)

public "getKey"(): $DimletKey
public "getSerializer"(): $RecipeSerializer<(any)>
public "category"(): $CraftingBookCategory
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "key"(): $DimletKey
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletRecipe$Type = ($DimletRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimletRecipe_ = $DimletRecipe$Type;
}}
