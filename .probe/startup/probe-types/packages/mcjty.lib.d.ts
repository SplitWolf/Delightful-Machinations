declare module "packages/mcjty/lib/varia/$NamedEnum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NamedEnum<T extends $NamedEnum<(any)>> {

 "getDescription"(): (string)[]
 "getName"(): string
}

export namespace $NamedEnum {
function getEnumByName<T>(arg0: string, arg1: (T)[]): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedEnum$Type<T> = ($NamedEnum<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedEnum_<T> = $NamedEnum$Type<(T)>;
}}
declare module "packages/mcjty/lib/crafting/$CopyNBTRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$AbstractRecipeAdaptor, $AbstractRecipeAdaptor$Type} from "packages/mcjty/lib/crafting/$AbstractRecipeAdaptor"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $CopyNBTRecipe extends $AbstractRecipeAdaptor {

constructor(arg0: $ShapedRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "category"(): $CraftingBookCategory
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyNBTRecipe$Type = ($CopyNBTRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopyNBTRecipe_ = $CopyNBTRecipe$Type;
}}
declare module "packages/mcjty/lib/blocks/$BaseBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$TOPDriver, $TOPDriver$Type} from "packages/mcjty/lib/compat/theoneprobe/$TOPDriver"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$IPartBlock, $IPartBlock$Type} from "packages/mcjty/lib/multipart/$IPartBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/mcjty/lib/builder/$BlockBuilder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ITabExpander, $ITabExpander$Type} from "packages/mcjty/lib/api/$ITabExpander"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PartSlot, $PartSlot$Type} from "packages/mcjty/lib/multipart/$PartSlot"
import {$TOPInfoProvider, $TOPInfoProvider$Type} from "packages/mcjty/lib/compat/theoneprobe/$TOPInfoProvider"
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$WailaInfoProvider, $WailaInfoProvider$Type} from "packages/mcjty/lib/compat/waila/$WailaInfoProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $BaseBlock extends $Block implements $WailaInfoProvider, $TOPInfoProvider, $IPartBlock, $ITooltipSettings, $EntityBlock, $ITabExpander {
static readonly "HORIZ_PROPERTIES": ($Property<(any)>)[]
static readonly "ROTATING_PROPERTIES": ($Property<(any)>)[]
static readonly "NONE_PROPERTIES": ($Property<(any)>)[]
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

constructor(arg0: $BlockBuilder$Type)

public static "getProperties"(arg0: $RotationType$Type): ($Property<(any)>)[]
public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "getRightDirection"(arg0: $BlockState$Type): $Direction
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "getInfused"(arg0: $ItemStack$Type): integer
public static "setInfused"(arg0: $ItemStack$Type, arg1: integer): void
public "isInfusable"(): boolean
public "handleModule"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockHitResult$Type): boolean
public "getLeftDirection"(arg0: $BlockState$Type): $Direction
public "getRotationType"(): $RotationType
public "getSlotFromState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $PartSlot
public "getProbeDriver"(): $TOPDriver
public static "runTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockEntity$Type): void
public "getFrontDirection"(arg0: $BlockState$Type): $Direction
public static "getFrontDirection"(arg0: $RotationType$Type, arg1: $BlockState$Type): $Direction
public "getManualEntry"(): $ManualEntry
public "getItemsForTab"(): $List<($ItemStack)>
public "getMaxWidth"(): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "infusable"(): boolean
get "rotationType"(): $RotationType
get "probeDriver"(): $TOPDriver
get "manualEntry"(): $ManualEntry
get "itemsForTab"(): $List<($ItemStack)>
get "maxWidth"(): integer
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
declare module "packages/mcjty/lib/varia/$Check32" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Check32 {

constructor()

public static "main"(arg0: (string)[]): void
public "add"(arg0: integer): void
public "get"(): integer
public static "test"(...arg0: (integer)[]): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Check32$Type = ($Check32);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Check32_ = $Check32$Type;
}}
declare module "packages/mcjty/lib/varia/$RLE" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RLE {

constructor()

public "add"(arg0: integer): void
public "read"(): integer
public "reset"(): void
public "getData"(): (byte)[]
public "setData"(arg0: (byte)[]): void
get "data"(): (byte)[]
set "data"(value: (byte)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RLE$Type = ($RLE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RLE_ = $RLE$Type;
}}
declare module "packages/mcjty/lib/blocks/$LogicSlabBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/mcjty/lib/builder/$BlockBuilder"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$LogicFacing, $LogicFacing$Type} from "packages/mcjty/lib/varia/$LogicFacing"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $LogicSlabBlock extends $BaseBlock {
static readonly "LOGIC_FACING": $EnumProperty<($LogicFacing)>
static readonly "BLOCK_DOWN": $VoxelShape
static readonly "BLOCK_UP": $VoxelShape
static readonly "BLOCK_NORTH": $VoxelShape
static readonly "BLOCK_SOUTH": $VoxelShape
static readonly "BLOCK_WEST": $VoxelShape
static readonly "BLOCK_EAST": $VoxelShape
static readonly "HORIZ_PROPERTIES": ($Property<(any)>)[]
static readonly "ROTATING_PROPERTIES": ($Property<(any)>)[]
static readonly "NONE_PROPERTIES": ($Property<(any)>)[]
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

constructor(arg0: $BlockBuilder$Type)

public static "rotateLeft"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "rotateRight"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getRotationType"(): $RotationType
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicSlabBlock$Type = ($LogicSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicSlabBlock_ = $LogicSlabBlock$Type;
}}
declare module "packages/mcjty/lib/api/$ITabExpander" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITabExpander {

 "getItemsForTab"(): $List<($ItemStack)>

(): $List<($ItemStack)>
}

export namespace $ITabExpander {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITabExpander$Type = ($ITabExpander);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITabExpander_ = $ITabExpander$Type;
}}
declare module "packages/mcjty/lib/builder/$InfoLine" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $InfoLine extends $Record {

constructor(translationKey: string, suffix: string, condition: $Predicate$Type<($ItemStack$Type)>, informationGetter: $Function$Type<($ItemStack$Type), (string)>, styles: ($ChatFormatting$Type)[], repeatingParameter: $Function$Type<($ItemStack$Type), ($Stream$Type<(string)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "suffix"(): string
public "informationGetter"(): $Function<($ItemStack), (string)>
public "repeatingParameter"(): $Function<($ItemStack), ($Stream<(string)>)>
public "styles"(): ($ChatFormatting)[]
public "condition"(): $Predicate<($ItemStack)>
public "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoLine$Type = ($InfoLine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoLine_ = $InfoLine$Type;
}}
declare module "packages/mcjty/lib/compat/theoneprobe/$TOPDriver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TOPDriver {

}

export namespace $TOPDriver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TOPDriver$Type = ($TOPDriver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TOPDriver_ = $TOPDriver$Type;
}}
declare module "packages/mcjty/lib/crafting/$BaseRecipe" {
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
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $BaseRecipe<C extends $Container> extends $Recipe<(C)> {

 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: C, arg1: $RegistryAccess$Type): $ItemStack
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "matches"(arg0: C, arg1: $Level$Type): boolean
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

export namespace $BaseRecipe {
function getResultItem(arg0: $Recipe$Type<(any)>, arg1: $Level$Type): $ItemStack
function assemble(arg0: $Recipe$Type<(any)>, arg1: $CraftingContainer$Type, arg2: $Level$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseRecipe$Type<C> = ($BaseRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseRecipe_<C> = $BaseRecipe$Type<(C)>;
}}
declare module "packages/mcjty/lib/container/$SlotType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SlotType extends $Enum<($SlotType)> {
static readonly "SLOT_UNKNOWN": $SlotType
static readonly "SLOT_GHOST": $SlotType
static readonly "SLOT_GHOSTOUT": $SlotType
static readonly "SLOT_GENERIC": $SlotType
static readonly "SLOT_SPECIFICITEM": $SlotType
static readonly "SLOT_PLAYERINV": $SlotType
static readonly "SLOT_PLAYERHOTBAR": $SlotType
static readonly "SLOT_CRAFTRESULT": $SlotType


public "getName"(): string
public static "values"(): ($SlotType)[]
public static "valueOf"(arg0: string): $SlotType
public static "findByName"(arg0: string): $SlotType
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotType$Type = (("slot_unknown") | ("slot_playerinv") | ("slot_ghost") | ("slot_craftresult") | ("slot_specificitem") | ("slot_ghostout") | ("slot_playerhotbar") | ("slot_generic")) | ($SlotType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotType_ = $SlotType$Type;
}}
declare module "packages/mcjty/lib/tooltips/$ITooltipSettings" {
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"

export interface $ITooltipSettings {

 "getMaxWidth"(): integer
 "getManualEntry"(): $ManualEntry
}

export namespace $ITooltipSettings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipSettings$Type = ($ITooltipSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltipSettings_ = $ITooltipSettings$Type;
}}
declare module "packages/mcjty/lib/crafting/$INBTPreservingIngredient" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $INBTPreservingIngredient {

 "getTagsToPreserve"(): $Collection<(string)>

(): $Collection<(string)>
}

export namespace $INBTPreservingIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTPreservingIngredient$Type = ($INBTPreservingIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTPreservingIngredient_ = $INBTPreservingIngredient$Type;
}}
declare module "packages/mcjty/lib/container/$SlotFactory" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$SlotDefinition, $SlotDefinition$Type} from "packages/mcjty/lib/container/$SlotDefinition"
import {$SlotType, $SlotType$Type} from "packages/mcjty/lib/container/$SlotType"

export class $SlotFactory extends $Record {

constructor(slotDefinition: $SlotDefinition$Type, inventoryName: string, index: integer, x: integer, y: integer)

public "y"(): integer
public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "getSlotType"(): $SlotType
public "slotDefinition"(): $SlotDefinition
public "inventoryName"(): string
get "slotType"(): $SlotType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotFactory$Type = ($SlotFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotFactory_ = $SlotFactory$Type;
}}
declare module "packages/mcjty/lib/container/$SlotRanges" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Range, $Range$Type} from "packages/com/google/common/collect/$Range"

export class $SlotRanges {

constructor()

public "asRanges"(): $Set<($Range<(integer)>)>
public "addSingle"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotRanges$Type = ($SlotRanges);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotRanges_ = $SlotRanges$Type;
}}
declare module "packages/mcjty/lib/typed/$TypedMap$Builder" {
import {$Key, $Key$Type} from "packages/mcjty/lib/typed/$Key"
import {$TypedMap, $TypedMap$Type} from "packages/mcjty/lib/typed/$TypedMap"

export class $TypedMap$Builder {


public "put"<V>(arg0: $Key$Type<(V)>, arg1: V): $TypedMap$Builder
public "build"(): $TypedMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedMap$Builder$Type = ($TypedMap$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedMap$Builder_ = $TypedMap$Builder$Type;
}}
declare module "packages/mcjty/lib/blockcommands/$IRunnable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GenericTileEntity, $GenericTileEntity$Type} from "packages/mcjty/lib/tileentity/$GenericTileEntity"
import {$TypedMap, $TypedMap$Type} from "packages/mcjty/lib/typed/$TypedMap"

export interface $IRunnable<TE extends $GenericTileEntity> {

 "run"(arg0: TE, arg1: $Player$Type, arg2: $TypedMap$Type): void

(arg0: TE, arg1: $Player$Type, arg2: $TypedMap$Type): void
}

export namespace $IRunnable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRunnable$Type<TE> = ($IRunnable<(TE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRunnable_<TE> = $IRunnable$Type<(TE)>;
}}
declare module "packages/mcjty/lib/compat/waila/$WailaInfoProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WailaInfoProvider {

}

export namespace $WailaInfoProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WailaInfoProvider$Type = ($WailaInfoProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WailaInfoProvider_ = $WailaInfoProvider$Type;
}}
declare module "packages/mcjty/lib/bindings/$Value" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$NamedEnum, $NamedEnum$Type} from "packages/mcjty/lib/varia/$NamedEnum"
import {$GenericTileEntity, $GenericTileEntity$Type} from "packages/mcjty/lib/tileentity/$GenericTileEntity"
import {$Key, $Key$Type} from "packages/mcjty/lib/typed/$Key"
import {$Type, $Type$Type} from "packages/mcjty/lib/typed/$Type"

export class $Value<T extends $GenericTileEntity, V> extends $Record {

constructor(key: $Key$Type<(V)>, supplier: $Function$Type<(T), (V)>, consumer: $BiConsumer$Type<(T), (V)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): $Key<(V)>
public static "create"<TT extends $GenericTileEntity, VV>(arg0: string, arg1: $Type$Type<(VV)>, arg2: $Function$Type<(TT), (VV)>, arg3: $BiConsumer$Type<(TT), (VV)>): $Value<(TT), (VV)>
public "supplier"(): $Function<(T), (V)>
public "consumer"(): $BiConsumer<(T), (V)>
public static "createEnum"<TT extends $GenericTileEntity, E extends $NamedEnum<(E)>>(arg0: string, arg1: (E)[], arg2: $Function$Type<(TT), (E)>, arg3: $BiConsumer$Type<(TT), (E)>): $Value<(TT), (string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Value$Type<T, V> = ($Value<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Value_<T, V> = $Value$Type<(T), (V)>;
}}
declare module "packages/mcjty/lib/container/$ContainerFactory" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$SlotFactory, $SlotFactory$Type} from "packages/mcjty/lib/container/$SlotFactory"
import {$SlotRanges, $SlotRanges$Type} from "packages/mcjty/lib/container/$SlotRanges"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$SlotDefinition, $SlotDefinition$Type} from "packages/mcjty/lib/container/$SlotDefinition"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$SlotType, $SlotType$Type} from "packages/mcjty/lib/container/$SlotType"

export class $ContainerFactory {
static readonly "EMPTY": $Lazy<($ContainerFactory)>
static readonly "CONTAINER_CONTAINER": string
static readonly "CONTAINER_PLAYER": string

constructor(arg0: integer)

public "slot"(arg0: $SlotDefinition$Type, arg1: integer, arg2: integer, arg3: integer): $ContainerFactory
public "slot"(arg0: $SlotDefinition$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer): $ContainerFactory
public "range"(arg0: $SlotDefinition$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $ContainerFactory
public "box"(arg0: $SlotDefinition$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): $ContainerFactory
public "box"(arg0: $SlotDefinition$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $ContainerFactory
public "box"(arg0: $SlotDefinition$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $ContainerFactory
public "box"(arg0: $SlotDefinition$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): $ContainerFactory
public "getSlots"(): $Iterable<($SlotFactory)>
public "getSlotType"(arg0: integer): $SlotType
public "playerSlots"(arg0: integer, arg1: integer): $ContainerFactory
public "isGenericSlot"(arg0: integer): boolean
public "isPlayerHotbarSlot"(arg0: integer): boolean
public "isSpecificItemSlot"(arg0: integer): boolean
public "getRanges"(arg0: $Predicate$Type<($SlotDefinition$Type)>): $SlotRanges
public "isGhostSlot"(arg0: integer): boolean
public "isGhostOutputSlot"(arg0: integer): boolean
public "isPlayerInventorySlot"(arg0: integer): boolean
public "getContainerSlots"(): integer
public "isOutputSlot"(arg0: integer): boolean
public "isInputSlot"(arg0: integer): boolean
public "getSlotDefinition"(arg0: integer): $SlotDefinition
public "isCraftResultSlot"(arg0: integer): boolean
get "slots"(): $Iterable<($SlotFactory)>
get "containerSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerFactory$Type = ($ContainerFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerFactory_ = $ContainerFactory$Type;
}}
declare module "packages/mcjty/lib/varia/$ItemStackList" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackList extends $NonNullList<($ItemStack)> {
static readonly "EMPTY": $ItemStackList

constructor(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type)

public static "create"(): $ItemStackList
public static "create"(arg0: integer): $ItemStackList
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "contains"(arg0: any): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackList$Type = ($ItemStackList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackList_ = $ItemStackList$Type;
}}
declare module "packages/mcjty/lib/crafting/$AbstractRecipeAdaptor" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IShapedRecipe, $IShapedRecipe$Type} from "packages/net/minecraftforge/common/crafting/$IShapedRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $AbstractRecipeAdaptor implements $CraftingRecipe, $IShapedRecipe<($CraftingContainer)> {

constructor(arg0: $ShapedRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getToastSymbol"(): $ItemStack
public "getRecipe"(): $ShapedRecipe
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRecipeWidth"(): integer
public "getRecipeHeight"(): integer
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getId"(): $ResourceLocation
public "category"(): $CraftingBookCategory
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
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
get "toastSymbol"(): $ItemStack
get "recipe"(): $ShapedRecipe
get "ingredients"(): $NonNullList<($Ingredient)>
get "recipeWidth"(): integer
get "recipeHeight"(): integer
get "special"(): boolean
get "id"(): $ResourceLocation
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
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
export type $AbstractRecipeAdaptor$Type = ($AbstractRecipeAdaptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRecipeAdaptor_ = $AbstractRecipeAdaptor$Type;
}}
declare module "packages/mcjty/lib/compat/theoneprobe/$TOPInfoProvider" {
import {$TOPDriver, $TOPDriver$Type} from "packages/mcjty/lib/compat/theoneprobe/$TOPDriver"

export interface $TOPInfoProvider {

 "getProbeDriver"(): $TOPDriver

(): $TOPDriver
}

export namespace $TOPInfoProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TOPInfoProvider$Type = ($TOPInfoProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TOPInfoProvider_ = $TOPInfoProvider$Type;
}}
declare module "packages/mcjty/lib/typed/$TypedMap" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Key, $Key$Type} from "packages/mcjty/lib/typed/$Key"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TypedMap$Builder, $TypedMap$Builder$Type} from "packages/mcjty/lib/typed/$TypedMap$Builder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TypedMap extends $Record {
static readonly "EMPTY": $TypedMap

constructor(map: $Map$Type<($Key$Type<(any)>), (any)>)

public "get"<V>(arg0: $Key$Type<(V)>): V
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "size"(): integer
public "map"(): $Map<($Key<(any)>), (any)>
public "getKeys"(): $Set<($Key<(any)>)>
public static "builder"(): $TypedMap$Builder
public "getOptional"<V>(arg0: $Key$Type<(V)>): $Optional<(V)>
get "keys"(): $Set<($Key<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedMap$Type = ($TypedMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedMap_ = $TypedMap$Type;
}}
declare module "packages/mcjty/lib/blocks/$RotationType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RotationType extends $Enum<($RotationType)> {
static readonly "HORIZROTATION": $RotationType
static readonly "ROTATION": $RotationType
static readonly "NONE": $RotationType


public static "values"(): ($RotationType)[]
public static "valueOf"(arg0: string): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationType$Type = (("horizrotation") | ("rotation") | ("none")) | ($RotationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationType_ = $RotationType$Type;
}}
declare module "packages/mcjty/lib/multipart/$IPartBlock" {
import {$PartSlot, $PartSlot$Type} from "packages/mcjty/lib/multipart/$PartSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPartBlock {

 "getSlotFromState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $PartSlot

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $PartSlot
}

export namespace $IPartBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartBlock$Type = ($IPartBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartBlock_ = $IPartBlock$Type;
}}
declare module "packages/mcjty/lib/tileentity/$TickingTileEntity" {
import {$GenericTileEntity, $GenericTileEntity$Type} from "packages/mcjty/lib/tileentity/$GenericTileEntity"
import {$Key, $Key$Type} from "packages/mcjty/lib/typed/$Key"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Command, $Command$Type} from "packages/mcjty/lib/blockcommands/$Command"

export class $TickingTileEntity extends $GenericTileEntity {
static readonly "VALUE_RSMODE": $Key<(integer)>
static readonly "COMMAND_SYNC_BINDING": $Command<(any)>
static readonly "CMD_RSMODE": $Command<(any)>

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingTileEntity$Type = ($TickingTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingTileEntity_ = $TickingTileEntity$Type;
}}
declare module "packages/mcjty/lib/varia/$TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<K, V, S> {

 "accept"(arg0: K, arg1: V, arg2: S): void

(arg0: K, arg1: V, arg2: S): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$Type<K, V, S> = ($TriConsumer<(K), (V), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<K, V, S> = $TriConsumer$Type<(K), (V), (S)>;
}}
declare module "packages/mcjty/lib/api/smartwrench/$SmartWrenchMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SmartWrenchMode extends $Enum<($SmartWrenchMode)> {
static readonly "MODE_WRENCH": $SmartWrenchMode
static readonly "MODE_SELECT": $SmartWrenchMode


public static "getMode"(arg0: string): $SmartWrenchMode
public "getName"(): string
public static "values"(): ($SmartWrenchMode)[]
public static "valueOf"(arg0: string): $SmartWrenchMode
public "getCode"(): string
get "name"(): string
get "code"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartWrenchMode$Type = (("mode_select") | ("mode_wrench")) | ($SmartWrenchMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartWrenchMode_ = $SmartWrenchMode$Type;
}}
declare module "packages/mcjty/lib/blockcommands/$Command" {
import {$IRunnable, $IRunnable$Type} from "packages/mcjty/lib/blockcommands/$IRunnable"
import {$ICommand, $ICommand$Type} from "packages/mcjty/lib/blockcommands/$ICommand"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GenericTileEntity, $GenericTileEntity$Type} from "packages/mcjty/lib/tileentity/$GenericTileEntity"

export class $Command<TE extends $GenericTileEntity> extends $Record implements $ICommand {

constructor(name: string, cmd: $IRunnable$Type<(TE)>)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"<E extends $GenericTileEntity>(arg0: string, arg1: $IRunnable$Type<(E)>): $Command<(E)>
public "cmd"(): $IRunnable<(TE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Command$Type<TE> = ($Command<(TE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Command_<TE> = $Command$Type<(TE)>;
}}
declare module "packages/mcjty/lib/blockcommands/$ListCommand" {
import {$ICommand, $ICommand$Type} from "packages/mcjty/lib/blockcommands/$ICommand"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IRunnableWithListResult, $IRunnableWithListResult$Type} from "packages/mcjty/lib/blockcommands/$IRunnableWithListResult"
import {$GenericTileEntity, $GenericTileEntity$Type} from "packages/mcjty/lib/tileentity/$GenericTileEntity"
import {$IRunnableWithList, $IRunnableWithList$Type} from "packages/mcjty/lib/blockcommands/$IRunnableWithList"

export class $ListCommand<TE extends $GenericTileEntity, T> extends $Record implements $ICommand {

constructor(name: string, cmd: $IRunnableWithListResult$Type<(TE), (T)>, clientCommand: $IRunnableWithList$Type<(TE), (T)>)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"<E extends $GenericTileEntity, S>(arg0: string, arg1: $IRunnableWithListResult$Type<(E), (S)>, arg2: $IRunnableWithList$Type<(E), (S)>): $ListCommand<(E), (S)>
public "cmd"(): $IRunnableWithListResult<(TE), (T)>
public "clientCommand"(): $IRunnableWithList<(TE), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListCommand$Type<TE, T> = ($ListCommand<(TE), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListCommand_<TE, T> = $ListCommand$Type<(TE), (T)>;
}}
declare module "packages/mcjty/lib/crafting/$CopyNBTRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CopyNBTRecipe, $CopyNBTRecipe$Type} from "packages/mcjty/lib/crafting/$CopyNBTRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CopyNBTRecipeSerializer implements $RecipeSerializer<($CopyNBTRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CopyNBTRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CopyNBTRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CopyNBTRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CopyNBTRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyNBTRecipeSerializer$Type = ($CopyNBTRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopyNBTRecipeSerializer_ = $CopyNBTRecipeSerializer$Type;
}}
declare module "packages/mcjty/lib/crafting/$BaseShapedRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BaseShapedRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseShapedRecipe$Type = ($BaseShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseShapedRecipe_ = $BaseShapedRecipe$Type;
}}
declare module "packages/mcjty/lib/typed/$Type" {
import {$ValueHolder, $ValueHolder$Type} from "packages/mcjty/lib/tileentity/$ValueHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$GenericTileEntity, $GenericTileEntity$Type} from "packages/mcjty/lib/tileentity/$GenericTileEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Type<V> {
static readonly "INTEGER": $Type<(integer)>
static readonly "FLOAT": $Type<(float)>
static readonly "DOUBLE": $Type<(double)>
static readonly "LONG": $Type<(long)>
static readonly "STRING": $Type<(string)>
static readonly "UUID": $Type<($UUID)>
static readonly "BOOLEAN": $Type<(boolean)>
static readonly "BLOCKPOS": $Type<($BlockPos)>
static readonly "ITEMSTACK": $Type<($ItemStack)>
static readonly "DIMENSION_TYPE": $Type<($ResourceKey<($Level)>)>
static readonly "STRING_LIST": $Type<($List<(string)>)>
static readonly "ITEMSTACK_LIST": $Type<($List<($ItemStack)>)>
static readonly "POS_LIST": $Type<($List<($BlockPos)>)>


public "toString"(): string
public "convert"(arg0: $List$Type<(any)>): $List<(V)>
public "convert"(arg0: any): V
public "getType"(): $Class<(V)>
public static "create"<V>(arg0: $Class$Type<(any)>, arg1: $BiConsumer$Type<(V), ($FriendlyByteBuf$Type)>, arg2: $Function$Type<($FriendlyByteBuf$Type), (V)>): $Type<(V)>
public static "create"<V>(arg0: $Class$Type<(any)>): $Type<(V)>
public "serialize"(arg0: $FriendlyByteBuf$Type, arg1: any): void
public "deserialize"<T extends $GenericTileEntity>(arg0: $FriendlyByteBuf$Type, arg1: $ValueHolder$Type<(T), (V)>, arg2: T): void
public "getSerializer"(): $BiConsumer<(V), ($FriendlyByteBuf)>
public "getDeserializer"(): $Function<($FriendlyByteBuf), (V)>
public "isA"(arg0: any): boolean
get "type"(): $Class<(V)>
get "serializer"(): $BiConsumer<(V), ($FriendlyByteBuf)>
get "deserializer"(): $Function<($FriendlyByteBuf), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$Type<V> = ($Type<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type_<V> = $Type$Type<(V)>;
}}
declare module "packages/mcjty/lib/tileentity/$GenericTileEntity" {
import {$IRunnable, $IRunnable$Type} from "packages/mcjty/lib/blockcommands/$IRunnable"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ValueHolder, $ValueHolder$Type} from "packages/mcjty/lib/tileentity/$ValueHolder"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Key, $Key$Type} from "packages/mcjty/lib/typed/$Key"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RedstoneMode, $RedstoneMode$Type} from "packages/mcjty/lib/varia/$RedstoneMode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TypedMap, $TypedMap$Type} from "packages/mcjty/lib/typed/$TypedMap"
import {$PartSlot, $PartSlot$Type} from "packages/mcjty/lib/multipart/$PartSlot"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Command, $Command$Type} from "packages/mcjty/lib/blockcommands/$Command"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GenericTileEntity extends $BlockEntity {
static readonly "VALUE_RSMODE": $Key<(integer)>
static readonly "COMMAND_SYNC_BINDING": $Command<(any)>
static readonly "CMD_RSMODE": $Command<(any)>

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "checkAccess"(arg0: $Player$Type): boolean
public "setOwner"(arg0: $Player$Type): boolean
public "getOwnerName"(): string
public "getDimension"(): $ResourceKey<($Level)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "onPartAdded"(arg0: $PartSlot$Type, arg1: $BlockState$Type, arg2: $BlockEntity$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getDrops"(arg0: $NonNullList$Type<($ItemStack$Type)>, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: integer): void
public "checkRedstone"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSlotChanged"(arg0: integer, arg1: $ItemStack$Type): void
public "invalidateCaps"(): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "getRSMode"(): $RedstoneMode
public "getRedstoneOutput"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getPowerLevel"(): integer
public "onBlockPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "isMachineEnabled"(): boolean
public "markDirtyQuick"(): void
public "onReplaced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): void
public "getRSModeInt"(): integer
public "setPowerInput"(arg0: integer): void
public "setRSMode"(arg0: $RedstoneMode$Type): void
public "setRSModeInt"(arg0: integer): void
public "markDirtyClient"(): void
public "getValueMap"(): $Map<(string), ($ValueHolder<(any), (any)>)>
public "clearOwner"(): void
public "getSecurityChannel"(): integer
public "rotateBlock"(arg0: $Rotation$Type): void
public "wrenchUse"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Player$Type): boolean
public "setSecurityChannel"(arg0: integer): void
public "canPlayerAccess"(arg0: $Player$Type): boolean
public "findServerCommand"(arg0: string): $IRunnable<(any)>
public "onBlockActivated"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $BlockHitResult$Type): $InteractionResult
public "loadClientDataFromNBT"(arg0: $CompoundTag$Type): void
public "saveClientDataToNBT"(arg0: $CompoundTag$Type): void
public "executeServerCommand"(arg0: string, arg1: $Player$Type, arg2: $TypedMap$Type): boolean
public "executeServerCommandList"<T>(arg0: string, arg1: $Player$Type, arg2: $TypedMap$Type, arg3: $Class$Type<(T)>): $List<(T)>
public "executeServerCommandWR"(arg0: string, arg1: $Player$Type, arg2: $TypedMap$Type): $TypedMap
public "executeClientCommand"(arg0: string, arg1: $Player$Type, arg2: $TypedMap$Type): boolean
public "handleListFromServer"<T>(arg0: string, arg1: $Player$Type, arg2: $TypedMap$Type, arg3: $List$Type<(T)>): boolean
public "getOwnerUUID"(): $UUID
set "owner"(value: $Player$Type)
get "ownerName"(): string
get "dimension"(): $ResourceKey<($Level)>
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "updateTag"(): $CompoundTag
get "rSMode"(): $RedstoneMode
get "powerLevel"(): integer
get "machineEnabled"(): boolean
get "rSModeInt"(): integer
set "powerInput"(value: integer)
set "rSMode"(value: $RedstoneMode$Type)
set "rSModeInt"(value: integer)
get "valueMap"(): $Map<(string), ($ValueHolder<(any), (any)>)>
get "securityChannel"(): integer
set "securityChannel"(value: integer)
get "ownerUUID"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericTileEntity$Type = ($GenericTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericTileEntity_ = $GenericTileEntity$Type;
}}
declare module "packages/mcjty/lib/builder/$BlockBuilder" {
import {$TOPDriver, $TOPDriver$Type} from "packages/mcjty/lib/compat/theoneprobe/$TOPDriver"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TooltipBuilder, $TooltipBuilder$Type} from "packages/mcjty/lib/builder/$TooltipBuilder"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InfoLine, $InfoLine$Type} from "packages/mcjty/lib/builder/$InfoLine"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"

export class $BlockBuilder {
static readonly "STANDARD_IRON": $BlockBehaviour$Properties

constructor()

public "getProperties"(): $BlockBehaviour$Properties
public "properties"(arg0: $BlockBehaviour$Properties$Type): $BlockBuilder
public "info"(...arg0: ($InfoLine$Type)[]): $BlockBuilder
public "infoAdvanced"(...arg0: ($InfoLine$Type)[]): $BlockBuilder
public "tileEntitySupplier"(arg0: $BlockEntityType$BlockEntitySupplier$Type<($BlockEntity$Type)>): $BlockBuilder
public "getTileEntitySupplier"(): $BlockEntityType$BlockEntitySupplier<($BlockEntity)>
public "infoShift"(...arg0: ($InfoLine$Type)[]): $BlockBuilder
public "infusable"(): $BlockBuilder
public "topDriver"(arg0: $TOPDriver$Type): $BlockBuilder
public "manualEntry"(arg0: $ManualEntry$Type): $BlockBuilder
public "isInfusable"(): boolean
public "getTopDriver"(): $TOPDriver
public "getTooltipBuilder"(): $TooltipBuilder
public "getManualEntry"(): $ManualEntry
get "tooltipBuilder"(): $TooltipBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBuilder$Type = ($BlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBuilder_ = $BlockBuilder$Type;
}}
declare module "packages/mcjty/lib/builder/$TooltipBuilder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$InfoLine, $InfoLine$Type} from "packages/mcjty/lib/builder/$InfoLine"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $TooltipBuilder {

constructor()

public static "key"(arg0: string): $InfoLine
public static "parameter"(arg0: string, arg1: $Function$Type<($ItemStack$Type), (string)>): $InfoLine
public static "parameter"(arg0: string, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: $Function$Type<($ItemStack$Type), (string)>): $InfoLine
public "isActive"(): boolean
public static "header"(): $InfoLine
public static "warning"(arg0: $Predicate$Type<($ItemStack$Type)>): $InfoLine
public static "warning"(): $InfoLine
public "info"(...arg0: ($InfoLine$Type)[]): $TooltipBuilder
public "infoAdvanced"(...arg0: ($InfoLine$Type)[]): $TooltipBuilder
public static "repeatingParameter"(arg0: string, arg1: $Function$Type<($ItemStack$Type), ($Stream$Type<(string)>)>): $InfoLine
public static "gold"(): $InfoLine
public static "gold"(arg0: $Predicate$Type<($ItemStack$Type)>): $InfoLine
public static "general"(arg0: string, arg1: $Predicate$Type<($ItemStack$Type)>, ...arg2: ($ChatFormatting$Type)[]): $InfoLine
public static "general"(arg0: string, ...arg1: ($ChatFormatting$Type)[]): $InfoLine
public "infoShift"(...arg0: ($InfoLine$Type)[]): $TooltipBuilder
public "makeTooltip"(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipBuilder$Type = ($TooltipBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipBuilder_ = $TooltipBuilder$Type;
}}
declare module "packages/mcjty/lib/multipart/$PartSlot" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PartSlot extends $Enum<($PartSlot)> {
static readonly "NONE": $PartSlot
static readonly "DOWN": $PartSlot
static readonly "UP": $PartSlot
static readonly "NORTH": $PartSlot
static readonly "SOUTH": $PartSlot
static readonly "WEST": $PartSlot
static readonly "EAST": $PartSlot
static readonly "DOWN_NW": $PartSlot
static readonly "DOWN_NE": $PartSlot
static readonly "DOWN_SW": $PartSlot
static readonly "DOWN_SE": $PartSlot
static readonly "UP_NW": $PartSlot
static readonly "UP_NE": $PartSlot
static readonly "UP_SW": $PartSlot
static readonly "UP_SE": $PartSlot
static readonly "NORTH_UW": $PartSlot
static readonly "NORTH_UE": $PartSlot
static readonly "NORTH_DW": $PartSlot
static readonly "NORTH_DE": $PartSlot
static readonly "SOUTH_UW": $PartSlot
static readonly "SOUTH_UE": $PartSlot
static readonly "SOUTH_DW": $PartSlot
static readonly "SOUTH_DE": $PartSlot
static readonly "WEST_US": $PartSlot
static readonly "WEST_UN": $PartSlot
static readonly "WEST_DS": $PartSlot
static readonly "WEST_DN": $PartSlot
static readonly "EAST_US": $PartSlot
static readonly "EAST_UN": $PartSlot
static readonly "EAST_DS": $PartSlot
static readonly "EAST_DN": $PartSlot
static readonly "DOWN_NW_BACK": $PartSlot
static readonly "DOWN_NE_BACK": $PartSlot
static readonly "DOWN_SW_BACK": $PartSlot
static readonly "DOWN_SE_BACK": $PartSlot
static readonly "UP_NW_BACK": $PartSlot
static readonly "UP_NE_BACK": $PartSlot
static readonly "UP_SW_BACK": $PartSlot
static readonly "UP_SE_BACK": $PartSlot
static readonly "NORTH_UW_BACK": $PartSlot
static readonly "NORTH_UE_BACK": $PartSlot
static readonly "NORTH_DW_BACK": $PartSlot
static readonly "NORTH_DE_BACK": $PartSlot
static readonly "SOUTH_UW_BACK": $PartSlot
static readonly "SOUTH_UE_BACK": $PartSlot
static readonly "SOUTH_DW_BACK": $PartSlot
static readonly "SOUTH_DE_BACK": $PartSlot
static readonly "WEST_US_BACK": $PartSlot
static readonly "WEST_UN_BACK": $PartSlot
static readonly "WEST_DS_BACK": $PartSlot
static readonly "WEST_DN_BACK": $PartSlot
static readonly "EAST_US_BACK": $PartSlot
static readonly "EAST_UN_BACK": $PartSlot
static readonly "EAST_DS_BACK": $PartSlot
static readonly "EAST_DN_BACK": $PartSlot
static readonly "VALUES": ($PartSlot)[]


public static "values"(): ($PartSlot)[]
public static "valueOf"(arg0: string): $PartSlot
public static "byName"(arg0: string): $PartSlot
public "getBackSlot"(): $PartSlot
get "backSlot"(): $PartSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartSlot$Type = (("south_de") | ("west_dn_back") | ("west_un_back") | ("down_ne_back") | ("east_us_back") | ("none") | ("up_ne_back") | ("down") | ("up_nw_back") | ("down_nw_back") | ("down_se") | ("west") | ("up") | ("down_nw") | ("north_uw_back") | ("north_de_back") | ("north_uw") | ("up_sw") | ("up_se_back") | ("east_un_back") | ("north_ue_back") | ("east_ds_back") | ("down_sw") | ("north_ue") | ("north_dw") | ("west_un") | ("down_se_back") | ("south_ue_back") | ("south") | ("east_us") | ("north") | ("west_us") | ("up_nw") | ("up_sw_back") | ("down_sw_back") | ("north_de") | ("south_uw_back") | ("south_de_back") | ("east") | ("up_se") | ("south_dw_back") | ("east_dn_back") | ("south_uw") | ("west_us_back") | ("east_dn") | ("down_ne") | ("north_dw_back") | ("south_dw") | ("west_dn") | ("west_ds_back") | ("west_ds") | ("south_ue") | ("east_ds") | ("east_un") | ("up_ne")) | ($PartSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartSlot_ = $PartSlot$Type;
}}
declare module "packages/mcjty/lib/container/$SlotDefinition" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$TriConsumer, $TriConsumer$Type} from "packages/mcjty/lib/varia/$TriConsumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SlotType, $SlotType$Type} from "packages/mcjty/lib/container/$SlotType"

export class $SlotDefinition {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "in"(): $SlotDefinition
public "out"(): $SlotDefinition
public "getType"(): $SlotType
public static "generic"(): $SlotDefinition
public "isInput"(): boolean
public static "craftResult"(): $SlotDefinition
public "isOutput"(): boolean
public static "specific"(arg0: $Predicate$Type<($ItemStack$Type)>): $SlotDefinition
public static "specific"(...arg0: ($ItemStack$Type)[]): $SlotDefinition
public static "specific"(...arg0: ($Item$Type)[]): $SlotDefinition
public "getOnCraft"(): $TriConsumer<($BlockEntity), ($Player), ($ItemStack)>
public "onCraft"(arg0: $TriConsumer$Type<($BlockEntity$Type), ($Player$Type), ($ItemStack$Type)>): $SlotDefinition
public "isSpecific"(): boolean
public "itemStackMatches"(arg0: $ItemStack$Type): boolean
public static "ghost"(): $SlotDefinition
public static "ghostOut"(): $SlotDefinition
get "type"(): $SlotType
get "input"(): boolean
get "output"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotDefinition$Type = ($SlotDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotDefinition_ = $SlotDefinition$Type;
}}
declare module "packages/mcjty/lib/varia/$LogicFacing" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $LogicFacing extends $Enum<($LogicFacing)> implements $StringRepresentable {
static readonly "DOWN_TONORTH": $LogicFacing
static readonly "DOWN_TOSOUTH": $LogicFacing
static readonly "DOWN_TOWEST": $LogicFacing
static readonly "DOWN_TOEAST": $LogicFacing
static readonly "UP_TONORTH": $LogicFacing
static readonly "UP_TOSOUTH": $LogicFacing
static readonly "UP_TOWEST": $LogicFacing
static readonly "UP_TOEAST": $LogicFacing
static readonly "NORTH_TOWEST": $LogicFacing
static readonly "NORTH_TOEAST": $LogicFacing
static readonly "NORTH_TOUP": $LogicFacing
static readonly "NORTH_TODOWN": $LogicFacing
static readonly "SOUTH_TOWEST": $LogicFacing
static readonly "SOUTH_TOEAST": $LogicFacing
static readonly "SOUTH_TOUP": $LogicFacing
static readonly "SOUTH_TODOWN": $LogicFacing
static readonly "WEST_TONORTH": $LogicFacing
static readonly "WEST_TOSOUTH": $LogicFacing
static readonly "WEST_TOUP": $LogicFacing
static readonly "WEST_TODOWN": $LogicFacing
static readonly "EAST_TONORTH": $LogicFacing
static readonly "EAST_TOSOUTH": $LogicFacing
static readonly "EAST_TOUP": $LogicFacing
static readonly "EAST_TODOWN": $LogicFacing
static readonly "VALUES": ($LogicFacing)[]
static readonly "DIRECTIONS": ($Direction)[]


public "toString"(): string
public static "values"(): ($LogicFacing)[]
public static "valueOf"(arg0: string): $LogicFacing
public static "rotate"(arg0: $LogicFacing$Type): $LogicFacing
public "getSide"(): $Direction
public "getSerializedName"(): string
public "getInputSide"(): $Direction
public "getRotationStep"(): integer
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "side"(): $Direction
get "serializedName"(): string
get "inputSide"(): $Direction
get "rotationStep"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicFacing$Type = (("north_towest") | ("west_tosouth") | ("east_tosouth") | ("up_toeast") | ("east_tonorth") | ("down_tonorth") | ("south_towest") | ("south_toup") | ("west_tonorth") | ("up_tonorth") | ("north_todown") | ("north_toup") | ("up_towest") | ("north_toeast") | ("west_toup") | ("west_todown") | ("down_towest") | ("up_tosouth") | ("down_toeast") | ("east_toup") | ("down_tosouth") | ("south_toeast") | ("east_todown") | ("south_todown")) | ($LogicFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicFacing_ = $LogicFacing$Type;
}}
declare module "packages/mcjty/lib/blockcommands/$IRunnableWithListResult" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GenericTileEntity, $GenericTileEntity$Type} from "packages/mcjty/lib/tileentity/$GenericTileEntity"
import {$TypedMap, $TypedMap$Type} from "packages/mcjty/lib/typed/$TypedMap"

export interface $IRunnableWithListResult<TE extends $GenericTileEntity, T> {

 "run"(arg0: TE, arg1: $Player$Type, arg2: $TypedMap$Type): $List<(T)>

(arg0: TE, arg1: $Player$Type, arg2: $TypedMap$Type): $List<(T)>
}

export namespace $IRunnableWithListResult {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRunnableWithListResult$Type<TE, T> = ($IRunnableWithListResult<(TE), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRunnableWithListResult_<TE, T> = $IRunnableWithListResult$Type<(TE), (T)>;
}}
declare module "packages/mcjty/lib/items/$BaseItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ITabExpander, $ITabExpander$Type} from "packages/mcjty/lib/api/$ITabExpander"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseItem extends $Item implements $ITabExpander {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getItemsForTab"(): $List<($ItemStack)>
get "itemsForTab"(): $List<($ItemStack)>
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
declare module "packages/mcjty/lib/api/smartwrench/$SmartWrench" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SmartWrenchMode, $SmartWrenchMode$Type} from "packages/mcjty/lib/api/smartwrench/$SmartWrenchMode"

export interface $SmartWrench {

 "getMode"(arg0: $ItemStack$Type): $SmartWrenchMode

(arg0: $ItemStack$Type): $SmartWrenchMode
}

export namespace $SmartWrench {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartWrench$Type = ($SmartWrench);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartWrench_ = $SmartWrench$Type;
}}
declare module "packages/mcjty/lib/tooltips/$ITooltipExtras" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITooltipExtras {

 "getItems"(arg0: $ItemStack$Type): $List<($Pair<($ItemStack), (integer)>)>

(arg0: $ItemStack$Type): $List<($Pair<($ItemStack), (integer)>)>
}

export namespace $ITooltipExtras {
const NOERROR: integer
const NOAMOUNT: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipExtras$Type = ($ITooltipExtras);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltipExtras_ = $ITooltipExtras$Type;
}}
declare module "packages/mcjty/lib/varia/$IEnergyItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEnergyItem {

 "extractEnergy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
 "getMaxEnergyStored"(arg0: $ItemStack$Type): integer
 "receiveEnergy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
 "getEnergyStored"(arg0: $ItemStack$Type): integer
 "extractEnergyL"(arg0: $ItemStack$Type, arg1: long, arg2: boolean): long
 "getEnergyStoredL"(arg0: $ItemStack$Type): long
 "receiveEnergyL"(arg0: $ItemStack$Type, arg1: long, arg2: boolean): long
 "getMaxEnergyStoredL"(arg0: $ItemStack$Type): long
}

export namespace $IEnergyItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyItem$Type = ($IEnergyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyItem_ = $IEnergyItem$Type;
}}
declare module "packages/mcjty/lib/gui/$ManualEntry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ManualEntry extends $Record {
static readonly "EMPTY": $ManualEntry

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type)
constructor(manual: $ResourceLocation$Type, entry: $ResourceLocation$Type, page: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "entry"(): $ResourceLocation
public "manual"(): $ResourceLocation
public "page"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualEntry$Type = ($ManualEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManualEntry_ = $ManualEntry$Type;
}}
declare module "packages/mcjty/lib/blockcommands/$IRunnableWithList" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GenericTileEntity, $GenericTileEntity$Type} from "packages/mcjty/lib/tileentity/$GenericTileEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TypedMap, $TypedMap$Type} from "packages/mcjty/lib/typed/$TypedMap"

export interface $IRunnableWithList<TE extends $GenericTileEntity, T> {

 "run"(arg0: TE, arg1: $Player$Type, arg2: $TypedMap$Type, arg3: $List$Type<(T)>): void

(arg0: TE, arg1: $Player$Type, arg2: $TypedMap$Type, arg3: $List$Type<(T)>): void
}

export namespace $IRunnableWithList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRunnableWithList$Type<TE, T> = ($IRunnableWithList<(TE), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRunnableWithList_<TE, T> = $IRunnableWithList$Type<(TE), (T)>;
}}
declare module "packages/mcjty/lib/blockcommands/$ICommand" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICommand {

 "name"(): string

(): string
}

export namespace $ICommand {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICommand$Type = ($ICommand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICommand_ = $ICommand$Type;
}}
declare module "packages/mcjty/lib/varia/$RedstoneMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RedstoneMode extends $Enum<($RedstoneMode)> {
static readonly "REDSTONE_IGNORED": $RedstoneMode
static readonly "REDSTONE_OFFREQUIRED": $RedstoneMode
static readonly "REDSTONE_ONREQUIRED": $RedstoneMode


public "getDescription"(): string
public static "getMode"(arg0: string): $RedstoneMode
public static "values"(): ($RedstoneMode)[]
public static "valueOf"(arg0: string): $RedstoneMode
get "description"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneMode$Type = (("redstone_ignored") | ("redstone_offrequired") | ("redstone_onrequired")) | ($RedstoneMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneMode_ = $RedstoneMode$Type;
}}
declare module "packages/mcjty/lib/tileentity/$ValueHolder" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GenericTileEntity, $GenericTileEntity$Type} from "packages/mcjty/lib/tileentity/$GenericTileEntity"
import {$Key, $Key$Type} from "packages/mcjty/lib/typed/$Key"

export class $ValueHolder<T extends $GenericTileEntity, V> extends $Record {

constructor(key: $Key$Type<(V)>, getter: $Function$Type<(T), (V)>, setter: $BiConsumer$Type<(T), (V)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): $Key<(V)>
public "getter"(): $Function<(T), (V)>
public "setter"(): $BiConsumer<(T), (V)>
get "ter"(): $Function<(T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueHolder$Type<T, V> = ($ValueHolder<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueHolder_<T, V> = $ValueHolder$Type<(T), (V)>;
}}
declare module "packages/mcjty/lib/typed/$Key" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Type, $Type$Type} from "packages/mcjty/lib/typed/$Type"

export class $Key<T> extends $Record {

constructor(name: string, type: $Type$Type<(T)>)

public "name"(): string
public "type"(): $Type<(T)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Key$Type<T> = ($Key<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Key_<T> = $Key$Type<(T)>;
}}
