declare module "packages/mods/railcraft/world/item/enchantment/$DestructionEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $DestructionEnchantment extends $Enchantment {
 "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, ...arg1: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DestructionEnchantment$Type = ($DestructionEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DestructionEnchantment_ = $DestructionEnchantment$Type;
}}
declare module "packages/mods/railcraft/api/signal/entity/$SignalControllerEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SignalController, $SignalController$Type} from "packages/mods/railcraft/api/signal/$SignalController"
import {$SignalEntity, $SignalEntity$Type} from "packages/mods/railcraft/api/signal/entity/$SignalEntity"

export interface $SignalControllerEntity extends $SignalEntity {

 "getSignalController"(): $SignalController
 "setCustomName"(arg0: $Component$Type): void
 "asBlockEntity"(): $BlockEntity
 "getCustomName"(): $Component
 "hasCustomName"(): boolean
 "getName"(): $Component
 "getDisplayName"(): $Component
}

export namespace $SignalControllerEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalControllerEntity$Type = ($SignalControllerEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalControllerEntity_ = $SignalControllerEntity$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$AbstractStrengthenedGlassBlock$Type" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $AbstractStrengthenedGlassBlock$Type extends $Enum<($AbstractStrengthenedGlassBlock$Type)> implements $StringRepresentable {
static readonly "SINGLE": $AbstractStrengthenedGlassBlock$Type
static readonly "TOP": $AbstractStrengthenedGlassBlock$Type
static readonly "CENTER": $AbstractStrengthenedGlassBlock$Type
static readonly "BOTTOM": $AbstractStrengthenedGlassBlock$Type


public static "determine"(arg0: $BlockPos$Type, arg1: $Level$Type, arg2: $Block$Type): $AbstractStrengthenedGlassBlock$Type
public static "values"(): ($AbstractStrengthenedGlassBlock$Type)[]
public static "valueOf"(arg0: string): $AbstractStrengthenedGlassBlock$Type
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStrengthenedGlassBlock$Type$Type = (("single") | ("top") | ("bottom") | ("center")) | ($AbstractStrengthenedGlassBlock$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStrengthenedGlassBlock$Type_ = $AbstractStrengthenedGlassBlock$Type$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/$ReinforcedTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$TrackBlock, $TrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/$TrackBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ReinforcedTrackBlock extends $TrackBlock {
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedTrackBlock$Type = ($ReinforcedTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedTrackBlock_ = $ReinforcedTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$GogglesItem$Aura" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $GogglesItem$Aura extends $Enum<($GogglesItem$Aura)> {
static readonly "NONE": $GogglesItem$Aura
static readonly "TRACKING": $GogglesItem$Aura
static readonly "TUNING": $GogglesItem$Aura
static readonly "SHUNTING": $GogglesItem$Aura
static readonly "SIGNALLING": $GogglesItem$Aura
static readonly "SURVEYING": $GogglesItem$Aura
static readonly "WORLDSPIKE": $GogglesItem$Aura


public static "values"(): ($GogglesItem$Aura)[]
public static "valueOf"(arg0: string): $GogglesItem$Aura
public "getDisplayName"(): $MutableComponent
public "getNext"(): $GogglesItem$Aura
get "displayName"(): $MutableComponent
get "next"(): $GogglesItem$Aura
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GogglesItem$Aura$Type = (("worldspike") | ("tuning") | ("shunting") | ("surveying") | ("none") | ("tracking") | ("signalling")) | ($GogglesItem$Aura);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GogglesItem$Aura_ = $GogglesItem$Aura$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$CokeOvenBricksBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FurnaceMultiblockBlock, $FurnaceMultiblockBlock$Type} from "packages/mods/railcraft/world/level/block/$FurnaceMultiblockBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CokeOvenBricksBlock extends $FurnaceMultiblockBlock {
static readonly "LIT": $BooleanProperty
static readonly "WINDOW": $BooleanProperty
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CokeOvenBricksBlock$Type = ($CokeOvenBricksBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CokeOvenBricksBlock_ = $CokeOvenBricksBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$SignalReceiverBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$SignalBoxBlock, $SignalBoxBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SignalBoxBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SignalReceiverBoxBlock extends $SignalBoxBlock implements $EntityBlock {
static readonly "CAP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalReceiverBoxBlock$Type = ($SignalReceiverBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalReceiverBoxBlock_ = $SignalReceiverBoxBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/manipulator/$AdvancedItemUnloaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemUnloaderBlock, $ItemUnloaderBlock$Type} from "packages/mods/railcraft/world/level/block/manipulator/$ItemUnloaderBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedItemUnloaderBlock extends $ItemUnloaderBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFacing"(arg0: $BlockState$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedItemUnloaderBlock$Type = ($AdvancedItemUnloaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedItemUnloaderBlock_ = $AdvancedItemUnloaderBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/manipulator/$AdvancedItemLoaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemLoaderBlock, $ItemLoaderBlock$Type} from "packages/mods/railcraft/world/level/block/manipulator/$ItemLoaderBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedItemLoaderBlock extends $ItemLoaderBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFacing"(arg0: $BlockState$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedItemLoaderBlock$Type = ($AdvancedItemLoaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedItemLoaderBlock_ = $AdvancedItemLoaderBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/enchantment/$SmackEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $SmackEnchantment extends $Enchantment {
 "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, ...arg1: ($EquipmentSlot$Type)[])

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
export type $SmackEnchantment$Type = ($SmackEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmackEnchantment_ = $SmackEnchantment$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/actuator/$SwitchTrackRouterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ArrowDirection, $ArrowDirection$Type} from "packages/mods/railcraft/api/track/$ArrowDirection"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$SwitchTrackActuatorBlock, $SwitchTrackActuatorBlock$Type} from "packages/mods/railcraft/world/level/block/track/actuator/$SwitchTrackActuatorBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SwitchTrackRouterBlock extends $SwitchTrackActuatorBlock implements $EntityBlock {
static readonly "RED_ARROW_DIRECTION": $EnumProperty<($ArrowDirection)>
static readonly "WHITE_ARROW_DIRECTION": $EnumProperty<($ArrowDirection)>
static readonly "SWITCHED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchTrackRouterBlock$Type = ($SwitchTrackRouterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchTrackRouterBlock_ = $SwitchTrackRouterBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/tank/$TankValveBlock" {
import {$BaseTankBlock, $BaseTankBlock$Type} from "packages/mods/railcraft/world/level/block/tank/$BaseTankBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $TankValveBlock extends $BaseTankBlock {
static readonly "AXIS": $Property<($Direction$Axis)>
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


public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankValveBlock$Type = ($TankValveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankValveBlock_ = $TankValveBlock$Type;
}}
declare module "packages/mods/railcraft/api/core/$BlockEntityLike" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

export interface $BlockEntityLike {

 "asBlockEntity"(): $BlockEntity

(): $BlockEntity
}

export namespace $BlockEntityLike {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityLike$Type = ($BlockEntityLike);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityLike_ = $BlockEntityLike$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$BufferStopTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$ReversibleOutfittedTrackBlock, $ReversibleOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$ReversibleOutfittedTrackBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BufferStopTrackBlock extends $ReversibleOutfittedTrackBlock {
static readonly "REVERSED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferStopTrackBlock$Type = ($BufferStopTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferStopTrackBlock_ = $BufferStopTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$CartDispenserBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ManipulatorBlockEntity, $ManipulatorBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ManipulatorBlockEntity"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $CartDispenserBlockEntity extends $ManipulatorBlockEntity implements $MenuProvider {
static readonly "STOP_VELOCITY": float
static readonly "PAUSE_DELAY": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $CartDispenserBlockEntity$Type): void
public "onNeighborChange"(): void
public "load"(arg0: $CompoundTag$Type): void
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "getDisplayName"(): $Component
public "setChanged"(): void
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<(T)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<(T)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<(T)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartDispenserBlockEntity$Type = ($CartDispenserBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CartDispenserBlockEntity_ = $CartDispenserBlockEntity$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$SignalBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SignalBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "propertyByDirection": $Map<($Direction), ($BooleanProperty)>
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


public "getShapeIndex"(arg0: $BlockState$Type): integer
public "connectsTo"(arg0: $BlockState$Type, arg1: boolean, arg2: $Direction$Type, arg3: $Direction$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public static "connectsToDirection"(arg0: $BlockState$Type, arg1: $Direction$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalBlock$Type = ($SignalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalBlock_ = $SignalBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$AgeDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AgeDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeDetectorBlock$Type = ($AgeDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgeDetectorBlock_ = $AgeDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$CrowbarItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Crowbar, $Crowbar$Type} from "packages/mods/railcraft/api/item/$Crowbar"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CrowbarItem extends $DiggerItem implements $Crowbar {
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

constructor(arg0: float, arg1: float, arg2: $Tier$Type, arg3: $Item$Properties$Type)

public "canLink"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $AbstractMinecart$Type): boolean
public "onLink"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $AbstractMinecart$Type): void
public "onBoost"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $AbstractMinecart$Type): void
public "canBoost"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $AbstractMinecart$Type): boolean
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onWhack"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $BlockPos$Type): void
public "canWhack"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrowbarItem$Type = ($CrowbarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrowbarItem_ = $CrowbarItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/$HighSpeedTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$TrackBlock, $TrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/$TrackBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"

export class $HighSpeedTrackBlock extends $TrackBlock {
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighSpeedTrackBlock$Type = ($HighSpeedTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighSpeedTrackBlock_ = $HighSpeedTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/worldspike/$WorldSpikeBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $WorldSpikeBlock extends $BaseEntityBlock implements $JeiSearchable {
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
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSpikeBlock$Type = ($WorldSpikeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSpikeBlock_ = $WorldSpikeBlock$Type;
}}
declare module "packages/mods/railcraft/api/charge/$ChargeBlock$Spec" {
import {$ChargeBlock$ConnectType, $ChargeBlock$ConnectType$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$ConnectType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$ChargeStorage$Spec, $ChargeStorage$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeStorage$Spec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChargeBlock$Spec extends $Record {

constructor(arg0: $ChargeBlock$ConnectType$Type, arg1: float)
constructor(connectType: $ChargeBlock$ConnectType$Type, losses: float, storageSpec: $ChargeStorage$Spec$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "make"(arg0: $Charge$Type, arg1: $ChargeBlock$ConnectType$Type, arg2: float, arg3: $ChargeStorage$Spec$Type): $Map<($Charge), ($ChargeBlock$Spec)>
public static "make"(arg0: $Charge$Type, arg1: $ChargeBlock$ConnectType$Type, arg2: float): $Map<($Charge), ($ChargeBlock$Spec)>
public "losses"(): float
public "storageSpec"(): $ChargeStorage$Spec
public "connectType"(): $ChargeBlock$ConnectType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeBlock$Spec$Type = ($ChargeBlock$Spec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeBlock$Spec_ = $ChargeBlock$Spec$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/track/$LockingTrackBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$LockingTrack, $LockingTrack$Type} from "packages/mods/railcraft/api/track/$LockingTrack"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RailcraftBlockEntity, $RailcraftBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/$RailcraftBlockEntity"
import {$LockingModeController, $LockingModeController$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$LockingModeController"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LockingTrackBlockEntity extends $RailcraftBlockEntity implements $LockingTrack {
static readonly "TRAIN_LOCKDOWN_DELAY": integer
static readonly "START_BOOST": double
static readonly "BOOST_FACTOR": double

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "onLoad"(): void
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LockingTrackBlockEntity$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "isCartLocked"(arg0: $AbstractMinecart$Type): boolean
public "setLockingModeController"(arg0: $LockingModeController$Type): void
public "minecartPassed"(arg0: $AbstractMinecart$Type): void
public "releaseCart"(): void
set "lockingModeController"(value: $LockingModeController$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockingTrackBlockEntity$Type = ($LockingTrackBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockingTrackBlockEntity_ = $LockingTrackBlockEntity$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$TrainDispenserBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$CartDispenserBlockEntity, $CartDispenserBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$CartDispenserBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$AdvancedContainer, $AdvancedContainer$Type} from "packages/mods/railcraft/util/container/$AdvancedContainer"

export class $TrainDispenserBlockEntity extends $CartDispenserBlockEntity {
static readonly "STOP_VELOCITY": float
static readonly "PAUSE_DELAY": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $TrainDispenserBlockEntity$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getInvPattern"(): $AdvancedContainer
public "getDisplayName"(): $Component
public "setChanged"(): void
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<(T)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<(T)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<(T)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "invPattern"(): $AdvancedContainer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainDispenserBlockEntity$Type = ($TrainDispenserBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrainDispenserBlockEntity_ = $TrainDispenserBlockEntity$Type;
}}
declare module "packages/mods/railcraft/api/core/$NetworkSerializable" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $NetworkSerializable {

 "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
 "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $NetworkSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkSerializable$Type = ($NetworkSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkSerializable_ = $NetworkSerializable$Type;
}}
declare module "packages/mods/railcraft/world/item/tunnelbore/$TunnelBoreItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $TunnelBoreItem extends $Item implements $JeiSearchable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TunnelBoreItem$Type = ($TunnelBoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TunnelBoreItem_ = $TunnelBoreItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$LauncherTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LauncherTrackBlock extends $PoweredOutfittedTrackBlock implements $EntityBlock {
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LauncherTrackBlock$Type = ($LauncherTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LauncherTrackBlock_ = $LauncherTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$SignalControllerBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$SignalBoxBlock, $SignalBoxBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SignalBoxBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SignalControllerBoxBlock extends $SignalBoxBlock implements $EntityBlock {
static readonly "CAP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalControllerBoxBlock$Type = ($SignalControllerBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalControllerBoxBlock_ = $SignalControllerBoxBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$GoldenTicketItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$TicketItem, $TicketItem$Type} from "packages/mods/railcraft/world/item/$TicketItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GoldenTicketItem extends $TicketItem {
static readonly "FILTER": $Predicate<($ItemStack)>
static readonly "LINE_LENGTH": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenTicketItem$Type = ($GoldenTicketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldenTicketItem_ = $GoldenTicketItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$SheepDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SheepDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SheepDetectorBlock$Type = ($SheepDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SheepDetectorBlock_ = $SheepDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$CoalCokeBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoalCokeBlockItem extends $BlockItem {
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

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
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
export type $CoalCokeBlockItem$Type = ($CoalCokeBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoalCokeBlockItem_ = $CoalCokeBlockItem$Type;
}}
declare module "packages/mods/railcraft/world/item/$PairingToolItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PairingToolItem<T, P> extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "checkAbandonPairing"<T>(arg0: $GlobalPos$Type, arg1: $Player$Type, arg2: $ServerLevel$Type, arg3: $Runnable$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getTargetPos"(arg0: $ItemStack$Type): $Optional<($GlobalPos)>
public static "clearTargetPos"(arg0: $ItemStack$Type): void
public static "setTargetPos"(arg0: $ItemStack$Type, arg1: $GlobalPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PairingToolItem$Type<T, P> = ($PairingToolItem<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PairingToolItem_<T, P> = $PairingToolItem$Type<(T), (P)>;
}}
declare module "packages/mods/railcraft/api/charge/$Charge$Access" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Charge$DamageOrigin, $Charge$DamageOrigin$Type} from "packages/mods/railcraft/api/charge/$Charge$DamageOrigin"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $Charge$Access {

 "getComparatorOutput"(): integer
 "storage"(): $Optional<(any)>
 "hasCapacity"(arg0: integer): boolean
 "removeCharge"(arg0: integer, arg1: boolean): integer
 "zap"(arg0: $Entity$Type, arg1: $Charge$DamageOrigin$Type, arg2: float): void
 "useCharge"(arg0: integer, arg1: boolean): boolean
}

export namespace $Charge$Access {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Charge$Access$Type = ($Charge$Access);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Charge$Access_ = $Charge$Access$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$BoosterTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BoosterTrackBlock extends $PoweredOutfittedTrackBlock {
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "getPowerPropagation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoosterTrackBlock$Type = ($BoosterTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoosterTrackBlock_ = $BoosterTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/$ElectricTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$TrackBlock, $TrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/$TrackBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ElectricTrackBlock extends $TrackBlock {
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricTrackBlock$Type = ($ElectricTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricTrackBlock_ = $ElectricTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$TrackRemoverCartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CartItem, $CartItem$Type} from "packages/mods/railcraft/world/item/$CartItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackRemoverCartItem extends $CartItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackRemoverCartItem$Type = ($TrackRemoverCartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackRemoverCartItem_ = $TrackRemoverCartItem$Type;
}}
declare module "packages/mods/railcraft/api/item/$Crowbar" {
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Crowbar {

 "canLink"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $AbstractMinecart$Type): boolean
 "onLink"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $AbstractMinecart$Type): void
 "onBoost"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $AbstractMinecart$Type): void
 "canBoost"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $AbstractMinecart$Type): boolean
 "onWhack"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $BlockPos$Type): void
 "canWhack"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $BlockPos$Type): boolean
}

export namespace $Crowbar {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Crowbar$Type = ($Crowbar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Crowbar_ = $Crowbar$Type;
}}
declare module "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ModifiableSlotAccessor extends $SlotAccessor {

 "drop"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($ItemStack$Type)>): void
 "clear"(): $ItemStack
 "setItem"(arg0: $ItemStack$Type): void
 "dropIfInvalid"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "extract"(): $ItemStack
 "extract"(arg0: integer, arg1: boolean): $ItemStack
 "insert"(arg0: $ItemStack$Type): $ItemStack
 "insert"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "isEmpty"(): boolean
 "matches"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "count"(): integer
 "isValid"(arg0: $ItemStack$Type): boolean
 "item"(): $ItemStack
 "is"(arg0: $Item$Type): boolean
 "isFull"(): boolean
 "maxStackSize"(): integer
 "hasItem"(): boolean
 "simulateInsert"(arg0: $ItemStack$Type): $ItemStack
 "simulateExtract"(): $ItemStack
 "simulateExtract"(arg0: integer): $ItemStack
}

export namespace $ModifiableSlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableSlotAccessor$Type = ($ModifiableSlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableSlotAccessor_ = $ModifiableSlotAccessor$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$OutfittedTrackBlock, $OutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$OutfittedTrackBlock"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredTrack, $PoweredTrack$Type} from "packages/mods/railcraft/api/track/$PoweredTrack"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $PoweredOutfittedTrackBlock extends $OutfittedTrackBlock implements $PoweredTrack {
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "setPowered"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: boolean): void
public static "isPowered"(arg0: $BlockState$Type): boolean
public "isPowered"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "getPowerPropagation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "canPropagatePowerTo"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredOutfittedTrackBlock$Type = ($PoweredOutfittedTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredOutfittedTrackBlock_ = $PoweredOutfittedTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$AnimalDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AnimalDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalDetectorBlock$Type = ($AnimalDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimalDetectorBlock_ = $AnimalDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$SwitchTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ReversibleOutfittedTrackBlock, $ReversibleOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$ReversibleOutfittedTrackBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SwitchTrackBlock extends $ReversibleOutfittedTrackBlock {
static readonly "SWITCHED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
static readonly "REVERSED": $BooleanProperty
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShapeProperty"(): $Property<($RailShape)>
public static "isSwitched"(arg0: $BlockState$Type): boolean
get "shapeProperty"(): $Property<($RailShape)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchTrackBlock$Type = ($SwitchTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchTrackBlock_ = $SwitchTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$AbstractStrengthenedGlassBlock" {
import {$AbstractStrengthenedGlassBlock$Type, $AbstractStrengthenedGlassBlock$Type$Type} from "packages/mods/railcraft/world/level/block/$AbstractStrengthenedGlassBlock$Type"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$AbstractGlassBlock, $AbstractGlassBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractGlassBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $AbstractStrengthenedGlassBlock extends $AbstractGlassBlock {
static readonly "TYPE": $Property<($AbstractStrengthenedGlassBlock$Type)>
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStrengthenedGlassBlock$Type = ($AbstractStrengthenedGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStrengthenedGlassBlock_ = $AbstractStrengthenedGlassBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$DualTokenSignalBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DualSignalBlock, $DualSignalBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$DualSignalBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $DualTokenSignalBlock extends $DualSignalBlock implements $JeiSearchable {
static readonly "SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "propertyByDirection": $Map<($Direction), ($BooleanProperty)>
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DualTokenSignalBlock$Type = ($DualTokenSignalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DualTokenSignalBlock_ = $DualTokenSignalBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/$AbandonedTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$TrackBlock, $TrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/$TrackBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $AbandonedTrackBlock extends $TrackBlock {
static readonly "GRASS": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbandonedTrackBlock$Type = ($AbandonedTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbandonedTrackBlock_ = $AbandonedTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockBlockEntity$Membership" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MultiblockPattern$Element, $MultiblockPattern$Element$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern$Element"
import {$MultiblockBlockEntity, $MultiblockBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockBlockEntity"

export class $MultiblockBlockEntity$Membership<T extends $MultiblockBlockEntity<(T), (any)>> extends $Record {

constructor(patternElement: $MultiblockPattern$Element$Type, master: T)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "master"(): T
public "patternElement"(): $MultiblockPattern$Element
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBlockEntity$Membership$Type<T> = ($MultiblockBlockEntity$Membership<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockBlockEntity$Membership_<T> = $MultiblockBlockEntity$Membership$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/level/block/charge/$BatteryBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"
import {$ChargeBlock, $ChargeBlock$Type} from "packages/mods/railcraft/world/level/block/charge/$ChargeBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ChargeBlock$Spec, $ChargeBlock$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$Spec"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BatteryBlock extends $ChargeBlock implements $EntityBlock, $JeiSearchable {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getChargeSpecs"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): $Map<($Charge), ($ChargeBlock$Spec)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryBlock$Type = ($BatteryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryBlock_ = $BatteryBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$DetectorTrackBlock$Mode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DetectorTrackBlock$Mode extends $Enum<($DetectorTrackBlock$Mode)> implements $StringRepresentable {
static readonly "BI_DIRECTIONAL": $DetectorTrackBlock$Mode
static readonly "TRAVEL": $DetectorTrackBlock$Mode
static readonly "TRAVEL_REVERSED": $DetectorTrackBlock$Mode


public static "values"(): ($DetectorTrackBlock$Mode)[]
public static "valueOf"(arg0: string): $DetectorTrackBlock$Mode
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorTrackBlock$Mode$Type = (("travel_reversed") | ("travel") | ("bi_directional")) | ($DetectorTrackBlock$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorTrackBlock$Mode_ = $DetectorTrackBlock$Mode$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$DetectorTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$OutfittedTrackBlock, $OutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$OutfittedTrackBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$DetectorTrackBlock$Mode, $DetectorTrackBlock$Mode$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$DetectorTrackBlock$Mode"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DetectorTrackBlock extends $OutfittedTrackBlock {
static readonly "POWERED": $BooleanProperty
static readonly "MODE": $EnumProperty<($DetectorTrackBlock$Mode)>
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorTrackBlock$Type = ($DetectorTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorTrackBlock_ = $DetectorTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$LocomotiveDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $LocomotiveDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocomotiveDetectorBlock$Type = ($LocomotiveDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocomotiveDetectorBlock_ = $LocomotiveDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/actuator/$SwitchTrackMotorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ArrowDirection, $ArrowDirection$Type} from "packages/mods/railcraft/api/track/$ArrowDirection"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$SwitchTrackActuatorBlock, $SwitchTrackActuatorBlock$Type} from "packages/mods/railcraft/world/level/block/track/actuator/$SwitchTrackActuatorBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SwitchTrackMotorBlock extends $SwitchTrackActuatorBlock implements $EntityBlock {
static readonly "RED_ARROW_DIRECTION": $EnumProperty<($ArrowDirection)>
static readonly "WHITE_ARROW_DIRECTION": $EnumProperty<($ArrowDirection)>
static readonly "SWITCHED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchTrackMotorBlock$Type = ($SwitchTrackMotorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchTrackMotorBlock_ = $SwitchTrackMotorBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$OutfittedTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TrackBlock, $TrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/$TrackBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $OutfittedTrackBlock extends $TrackBlock {
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "isFlexibleRail"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getShapeProperty"(): $Property<($RailShape)>
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
get "shapeProperty"(): $Property<($RailShape)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutfittedTrackBlock$Type = ($OutfittedTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutfittedTrackBlock_ = $OutfittedTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/charge/$DisposableBatteryBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BatteryBlock, $BatteryBlock$Type} from "packages/mods/railcraft/world/level/block/charge/$BatteryBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $DisposableBatteryBlock extends $BatteryBlock implements $JeiSearchable {
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

public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisposableBatteryBlock$Type = ($DisposableBatteryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisposableBatteryBlock_ = $DisposableBatteryBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$AnalogSignalControllerBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$SignalControllerBoxBlock, $SignalControllerBoxBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SignalControllerBoxBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AnalogSignalControllerBoxBlock extends $SignalControllerBoxBlock implements $EntityBlock {
static readonly "CAP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnalogSignalControllerBoxBlock$Type = ($AnalogSignalControllerBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnalogSignalControllerBoxBlock_ = $AnalogSignalControllerBoxBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$RoutingDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $RoutingDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoutingDetectorBlock$Type = ($RoutingDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoutingDetectorBlock_ = $RoutingDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/api/charge/$ChargeProtectionItem" {
import {$ChargeProtectionItem$ZapResult, $ChargeProtectionItem$ZapResult$Type} from "packages/mods/railcraft/api/charge/$ChargeProtectionItem$ZapResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ChargeProtectionItem {

 "isZapProtectionActive"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "zap"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: float): $ChargeProtectionItem$ZapResult
}

export namespace $ChargeProtectionItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeProtectionItem$Type = ($ChargeProtectionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeProtectionItem_ = $ChargeProtectionItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/multiblock/$BlockPredicate" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $BlockPredicate {

 "test"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): boolean
 "or"(arg0: $BlockPredicate$Type): $BlockPredicate
 "negate"(): $BlockPredicate
 "and"(arg0: $BlockPredicate$Type): $BlockPredicate

(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): boolean
}

export namespace $BlockPredicate {
const AIR: $BlockPredicate
function of(arg0: $Block$Type): $BlockPredicate
function of(arg0: $Supplier$Type<(any)>): $BlockPredicate
function ofTag(arg0: $TagKey$Type<($Block$Type)>): $BlockPredicate
function ofFluid(arg0: $Supplier$Type<($Fluid$Type)>): $BlockPredicate
function ofFluid(arg0: $Fluid$Type): $BlockPredicate
function ofFluidTag(arg0: $TagKey$Type<($Fluid$Type)>): $BlockPredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPredicate$Type = ($BlockPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPredicate_ = $BlockPredicate$Type;
}}
declare module "packages/mods/railcraft/util/container/$AdvancedContainer" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ModuleProvider, $ModuleProvider$Type} from "packages/mods/railcraft/world/module/$ModuleProvider"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AdvancedContainer$Listener, $AdvancedContainer$Listener$Type} from "packages/mods/railcraft/util/container/$AdvancedContainer$Listener"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $AdvancedContainer extends $SimpleContainer implements $ContainerManipulator<($ModifiableSlotAccessor)> {
readonly "items": $NonNullList<($ItemStack)>

constructor(arg0: integer)

public static "copyOf"(arg0: $Container$Type): $AdvancedContainer
public "stream"(): $Stream<($ModifiableSlotAccessor)>
public "listener"(arg0: $Container$Type): $AdvancedContainer
public "listener"(arg0: $AdvancedContainer$Listener$Type): $AdvancedContainer
public "listener"(arg0: $ModuleProvider$Type): $AdvancedContainer
public "setMaxStackSize"(arg0: integer): void
public "getMaxStackSize"(): integer
public "startOpen"(arg0: $Player$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public "fromTag"(arg0: $ListTag$Type): void
public "createTag"(): $ListTag
public "phantom"(): $AdvancedContainer
public "extract"(...arg0: ($ItemStack$Type)[]): $ItemStack
public "extract"(): $ItemStack
public "extract"(arg0: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "extract"(arg0: integer, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: boolean): $ItemStack
public "insert"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "insert"(arg0: $ItemStack$Type): $ItemStack
public "contains"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "contains"(...arg0: ($ItemStack$Type)[]): boolean
public "iterator"(): $Iterator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<($ModifiableSlotAccessor)>
public "findAll"(arg0: $Predicate$Type<($ItemStack$Type)>): $Stream<($ModifiableSlotAccessor)>
public "isFull"(): boolean
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public "countMaxItemStackSize"(): integer
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
public "calcRedstone"(): integer
public "hasEmptySlot"(): boolean
public "canFit"(arg0: $ItemStack$Type): boolean
public "findFirstExtractable"(arg0: $Predicate$Type<($ItemStack$Type)>): $Optional<($ModifiableSlotAccessor)>
public "countItems"(...arg0: ($ItemStack$Type)[]): integer
public "countItems"(arg0: $Predicate$Type<($ItemStack$Type)>): integer
public "countItems"(): integer
public "moveOneItemTo"(arg0: $ContainerManipulator$Type<(any)>): $ItemStack
public "moveOneItemTo"(arg0: $ContainerManipulator$Type<(any)>, arg1: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "moveOneItemStackTo"(arg0: $ContainerManipulator$Type<(any)>, arg1: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "moveOneItemStackTo"(arg0: $ContainerManipulator$Type<(any)>): $ItemStack
public "streamItems"(): $Stream<($ItemStack)>
public "countStacks"(arg0: $Predicate$Type<($ItemStack$Type)>): integer
public "countStacks"(): integer
public "calculateFullness"(): double
public "willAccept"(arg0: $ItemStack$Type): boolean
public "willAcceptAny"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "hasItems"(): boolean
public "hasNoItems"(): boolean
public "spliterator"(): $Spliterator<($ModifiableSlotAccessor)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
[Symbol.iterator](): IterableIterator<$ModifiableSlotAccessor>;
set "maxStackSize"(value: integer)
get "maxStackSize"(): integer
get "full"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedContainer$Type = ($AdvancedContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedContainer_ = $AdvancedContainer$Type;
}}
declare module "packages/mods/railcraft/world/level/block/manipulator/$CartDispenserBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManipulatorBlock, $ManipulatorBlock$Type} from "packages/mods/railcraft/world/level/block/manipulator/$ManipulatorBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$CartDispenserBlockEntity, $CartDispenserBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$CartDispenserBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CartDispenserBlock extends $ManipulatorBlock<($CartDispenserBlockEntity)> {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getFacing"(arg0: $BlockState$Type): $Direction
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartDispenserBlock$Type = ($CartDispenserBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CartDispenserBlock_ = $CartDispenserBlock$Type;
}}
declare module "packages/mods/railcraft/api/core/$Ownable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export interface $Ownable extends $Nameable {

 "getOwner"(): $Optional<($GameProfile)>
 "setOwner"(arg0: $GameProfile$Type): void
 "getOwnerOrThrow"(): $GameProfile
 "getCustomName"(): $Component
 "hasCustomName"(): boolean
 "getName"(): $Component
 "getDisplayName"(): $Component
}

export namespace $Ownable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ownable$Type = ($Ownable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ownable_ = $Ownable$Type;
}}
declare module "packages/mods/railcraft/world/level/block/post/$Connection" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Connection extends $Enum<($Connection)> implements $StringRepresentable {
static readonly "NONE": $Connection
static readonly "SINGLE": $Connection
static readonly "DOUBLE": $Connection


public static "values"(): ($Connection)[]
public static "valueOf"(arg0: string): $Connection
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$Type = (("single") | ("double") | ("none")) | ($Connection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Connection_ = $Connection$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$TransitionTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ReversiblePoweredOutfittedTrackBlock, $ReversiblePoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$ReversiblePoweredOutfittedTrackBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TransitionTrackBlock extends $ReversiblePoweredOutfittedTrackBlock {
static readonly "REVERSED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "getPowerPropagation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransitionTrackBlock$Type = ($TransitionTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransitionTrackBlock_ = $TransitionTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/actuator/$SwitchTrackLeverBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ArrowDirection, $ArrowDirection$Type} from "packages/mods/railcraft/api/track/$ArrowDirection"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$SwitchTrackActuatorBlock, $SwitchTrackActuatorBlock$Type} from "packages/mods/railcraft/world/level/block/track/actuator/$SwitchTrackActuatorBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SwitchTrackLeverBlock extends $SwitchTrackActuatorBlock implements $EntityBlock {
static readonly "RED_ARROW_DIRECTION": $EnumProperty<($ArrowDirection)>
static readonly "WHITE_ARROW_DIRECTION": $EnumProperty<($ArrowDirection)>
static readonly "SWITCHED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchTrackLeverBlock$Type = ($SwitchTrackLeverBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchTrackLeverBlock_ = $SwitchTrackLeverBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$TokenSignalBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$SignalBoxBlock, $SignalBoxBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SignalBoxBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TokenSignalBoxBlock extends $SignalBoxBlock implements $EntityBlock {
static readonly "CAP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TokenSignalBoxBlock$Type = ($TokenSignalBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TokenSignalBoxBlock_ = $TokenSignalBoxBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$RoutingTableBookItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
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

export class $RoutingTableBookItem extends $Item {
static readonly "FILTER": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoutingTableBookItem$Type = ($RoutingTableBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoutingTableBookItem_ = $RoutingTableBookItem$Type;
}}
declare module "packages/mods/railcraft/api/charge/$Charge$Network" {
import {$Charge$Access, $Charge$Access$Type} from "packages/mods/railcraft/api/charge/$Charge$Access"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Charge$Network {

 "access"(arg0: $BlockPos$Type): $Charge$Access
 "removeNode"(arg0: $BlockPos$Type): void
 "addNode"(arg0: $BlockPos$Type, arg1: $BlockState$Type): boolean
}

export namespace $Charge$Network {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Charge$Network$Type = ($Charge$Network);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Charge$Network_ = $Charge$Network$Type;
}}
declare module "packages/mods/railcraft/world/level/block/manipulator/$FluidUnloaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$FluidUnloaderBlockEntity, $FluidUnloaderBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$FluidUnloaderBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidManipulatorBlock, $FluidManipulatorBlock$Type} from "packages/mods/railcraft/world/level/block/manipulator/$FluidManipulatorBlock"

export class $FluidUnloaderBlock extends $FluidManipulatorBlock<($FluidUnloaderBlockEntity)> {
static readonly "POWERED": $BooleanProperty
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFacing"(arg0: $BlockState$Type): $Direction
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidUnloaderBlock$Type = ($FluidUnloaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidUnloaderBlock_ = $FluidUnloaderBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$VillagerDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $VillagerDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerDetectorBlock$Type = ($VillagerDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerDetectorBlock_ = $VillagerDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/api/signal/entity/$SignalEntity" {
import {$BlockEntityLike, $BlockEntityLike$Type} from "packages/mods/railcraft/api/core/$BlockEntityLike"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export interface $SignalEntity extends $BlockEntityLike, $Nameable {

 "setCustomName"(arg0: $Component$Type): void
 "asBlockEntity"(): $BlockEntity
 "getCustomName"(): $Component
 "hasCustomName"(): boolean
 "getName"(): $Component
 "getDisplayName"(): $Component
}

export namespace $SignalEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalEntity$Type = ($SignalEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalEntity_ = $SignalEntity$Type;
}}
declare module "packages/mods/railcraft/world/level/block/manipulator/$ItemLoaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManipulatorBlock, $ManipulatorBlock$Type} from "packages/mods/railcraft/world/level/block/manipulator/$ManipulatorBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemLoaderBlockEntity, $ItemLoaderBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ItemLoaderBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemLoaderBlock extends $ManipulatorBlock<($ItemLoaderBlockEntity)> {
static readonly "POWERED": $BooleanProperty
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFacing"(arg0: $BlockState$Type): $Direction
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLoaderBlock$Type = ($ItemLoaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLoaderBlock_ = $ItemLoaderBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/manipulator/$TrainDispenserBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManipulatorBlock, $ManipulatorBlock$Type} from "packages/mods/railcraft/world/level/block/manipulator/$ManipulatorBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TrainDispenserBlockEntity, $TrainDispenserBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$TrainDispenserBlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TrainDispenserBlock extends $ManipulatorBlock<($TrainDispenserBlockEntity)> {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getFacing"(arg0: $BlockState$Type): $Direction
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainDispenserBlock$Type = ($TrainDispenserBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrainDispenserBlock_ = $TrainDispenserBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$LogBookBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $LogBookBlock extends $HorizontalDirectionalBlock implements $EntityBlock, $JeiSearchable {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "jeiDescription"(): $Component
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogBookBlock$Type = ($LogBookBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogBookBlock_ = $LogBookBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/charge/$EmptyBatteryBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChargeBlock$Spec, $ChargeBlock$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$Spec"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"
import {$ChargeBlock, $ChargeBlock$Type} from "packages/mods/railcraft/world/level/block/charge/$ChargeBlock"

export class $EmptyBatteryBlock extends $ChargeBlock implements $JeiSearchable {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getChargeSpecs"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): $Map<($Charge), ($ChargeBlock$Spec)>
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyBatteryBlock$Type = ($EmptyBatteryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyBatteryBlock_ = $EmptyBatteryBlock$Type;
}}
declare module "packages/mods/railcraft/client/gui/widget/button/$TexturePosition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TexturePosition {

 "y"(): integer
 "width"(): integer
 "x"(): integer
 "height"(): integer
}

export namespace $TexturePosition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TexturePosition$Type = ($TexturePosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TexturePosition_ = $TexturePosition$Type;
}}
declare module "packages/mods/railcraft/world/entity/vehicle/locomotive/$Locomotive$Speed" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Locomotive$Speed extends $Enum<($Locomotive$Speed)> implements $StringRepresentable {
static readonly "SLOWEST": $Locomotive$Speed
static readonly "SLOWER": $Locomotive$Speed
static readonly "NORMAL": $Locomotive$Speed
static readonly "MAX": $Locomotive$Speed


public static "values"(): ($Locomotive$Speed)[]
public static "valueOf"(arg0: string): $Locomotive$Speed
public "getLevel"(): integer
public static "fromName"(arg0: string): $Locomotive$Speed
public "shiftDown"(): $Locomotive$Speed
public "getSerializedName"(): string
public "shiftUp"(): $Locomotive$Speed
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "level"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locomotive$Speed$Type = (("normal") | ("max") | ("slower") | ("slowest")) | ($Locomotive$Speed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locomotive$Speed_ = $Locomotive$Speed$Type;
}}
declare module "packages/mods/railcraft/world/item/$CartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MinecartFactory, $MinecartFactory$Type} from "packages/mods/railcraft/api/item/$MinecartFactory"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CartItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $MinecartFactory$Type, arg1: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getMinecartFactory"(): $MinecartFactory
get "minecartFactory"(): $MinecartFactory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartItem$Type = ($CartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CartItem_ = $CartItem$Type;
}}
declare module "packages/mods/railcraft/world/entity/$FirestoneItemEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FirestoneItemEntity extends $ItemEntity {
static readonly "LIFETIME": integer
 "age": integer
 "thrower": $UUID
 "bobOffs": float
 "lifespan": integer
 "skipPhysicRenderer": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "vehicle": $Entity
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "position": $Vec3
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "stepHeight": float
 "noPhysics": boolean
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalEntrancePos": $BlockPos
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)
constructor(arg0: $Level$Type, arg1: $Vec3$Type, arg2: $ItemStack$Type)

public "tick"(): void
public "lavaHurt"(): void
public "setRefined"(arg0: boolean): void
public "readAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "isRefined"(): boolean
set "refined"(value: boolean)
get "refined"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirestoneItemEntity$Type = ($FirestoneItemEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirestoneItemEntity_ = $FirestoneItemEntity$Type;
}}
declare module "packages/mods/railcraft/world/item/$SpikeMaulItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$TieredItem, $TieredItem$Type} from "packages/net/minecraft/world/item/$TieredItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpikeMaulItem extends $TieredItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: float, arg1: float, arg2: $Tier$Type, arg3: $Item$Properties$Type)

public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpikeMaulItem$Type = ($SpikeMaulItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpikeMaulItem_ = $SpikeMaulItem$Type;
}}
declare module "packages/mods/railcraft/api/signal/$TrackLocator$Status" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TrackLocator$Status extends $Enum<($TrackLocator$Status)> {
static readonly "VALID": $TrackLocator$Status
static readonly "INVALID": $TrackLocator$Status
static readonly "UNKNOWN": $TrackLocator$Status


public static "values"(): ($TrackLocator$Status)[]
public static "valueOf"(arg0: string): $TrackLocator$Status
public "invalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackLocator$Status$Type = (("valid") | ("invalid") | ("unknown")) | ($TrackLocator$Status);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackLocator$Status_ = $TrackLocator$Status$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$ItemLoaderBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemManipulatorBlockEntity, $ItemManipulatorBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ItemManipulatorBlockEntity"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemLoaderBlockEntity extends $ItemManipulatorBlockEntity {
static readonly "STOP_VELOCITY": float
static readonly "PAUSE_DELAY": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getDestination"(): $ContainerManipulator<(any)>
public "getSource"(): $ContainerManipulator<(any)>
public "getBufferSlot"(arg0: integer, arg1: integer, arg2: integer): $Slot
public "getDisplayName"(): $Component
public "setChanged"(): void
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<(T)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<(T)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<(T)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "destination"(): $ContainerManipulator<(any)>
get "source"(): $ContainerManipulator<(any)>
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLoaderBlockEntity$Type = ($ItemLoaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLoaderBlockEntity_ = $ItemLoaderBlockEntity$Type;
}}
declare module "packages/mods/railcraft/api/track/$TrackType$EventHandler" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $TrackType$EventHandler {

 "getRailShapeOverride"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $AbstractMinecart$Type): $Optional<($RailShape)>
 "getMaxSpeed"(arg0: $Level$Type, arg1: $AbstractMinecart$Type, arg2: $BlockPos$Type): double
 "minecartPass"(arg0: $Level$Type, arg1: $AbstractMinecart$Type, arg2: $BlockPos$Type): void
 "entityInside"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
}

export namespace $TrackType$EventHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackType$EventHandler$Type = ($TrackType$EventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackType$EventHandler_ = $TrackType$EventHandler$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$WyeTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SwitchTrackBlock, $SwitchTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$SwitchTrackBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $WyeTrackBlock extends $SwitchTrackBlock implements $EntityBlock {
static readonly "SWITCHED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
static readonly "REVERSED": $BooleanProperty
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRailDirection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): $RailShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WyeTrackBlock$Type = ($WyeTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WyeTrackBlock_ = $WyeTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/manipulator/$ItemUnloaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManipulatorBlock, $ManipulatorBlock$Type} from "packages/mods/railcraft/world/level/block/manipulator/$ManipulatorBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemUnloaderBlockEntity, $ItemUnloaderBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ItemUnloaderBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemUnloaderBlock extends $ManipulatorBlock<($ItemUnloaderBlockEntity)> {
static readonly "POWERED": $BooleanProperty
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFacing"(arg0: $BlockState$Type): $Direction
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUnloaderBlock$Type = ($ItemUnloaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUnloaderBlock_ = $ItemUnloaderBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/worldspike/$PersonalWorldSpikeBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$WorldSpikeBlock, $WorldSpikeBlock$Type} from "packages/mods/railcraft/world/level/block/worldspike/$WorldSpikeBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PersonalWorldSpikeBlock extends $WorldSpikeBlock {
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersonalWorldSpikeBlock$Type = ($PersonalWorldSpikeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PersonalWorldSpikeBlock_ = $PersonalWorldSpikeBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$LockingMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$LockingModeController, $LockingModeController$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$LockingModeController"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LockingMode$LockType, $LockingMode$LockType$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$LockingMode$LockType"
import {$LockingTrackBlockEntity, $LockingTrackBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/track/$LockingTrackBlockEntity"

export class $LockingMode extends $Enum<($LockingMode)> implements $StringRepresentable {
static readonly "LOCKDOWN": $LockingMode
static readonly "TRAIN_LOCKDOWN": $LockingMode
static readonly "HOLDING": $LockingMode
static readonly "TRAIN_HOLDING": $LockingMode
static readonly "BOARDING": $LockingMode
static readonly "BOARDING_REVERSED": $LockingMode
static readonly "TRAIN_BOARDING": $LockingMode
static readonly "TRAIN_BOARDING_REVERSED": $LockingMode


public static "values"(): ($LockingMode)[]
public static "valueOf"(arg0: string): $LockingMode
public "next"(): $LockingMode
public "create"(arg0: $LockingTrackBlockEntity$Type): $LockingModeController
public "previous"(): $LockingMode
public "getDisplayName"(): $Component
public "getSerializedName"(): string
public "getTranslationKey"(): string
public "getLockType"(): $LockingMode$LockType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "displayName"(): $Component
get "serializedName"(): string
get "translationKey"(): string
get "lockType"(): $LockingMode$LockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockingMode$Type = (("train_holding") | ("holding") | ("lockdown") | ("train_boarding") | ("train_lockdown") | ("boarding") | ("boarding_reversed") | ("train_boarding_reversed")) | ($LockingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockingMode_ = $LockingMode$Type;
}}
declare module "packages/mods/railcraft/world/level/block/steamboiler/$FireboxBlock" {
import {$SteamBoilerBlock, $SteamBoilerBlock$Type} from "packages/mods/railcraft/world/level/block/steamboiler/$SteamBoilerBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FireboxBlock extends $SteamBoilerBlock {
static readonly "LIT": $Property<(boolean)>
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

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireboxBlock$Type = ($FireboxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireboxBlock_ = $FireboxBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/tank/$IronTankGaugeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractStrengthenedGlassBlock$Type, $AbstractStrengthenedGlassBlock$Type$Type} from "packages/mods/railcraft/world/level/block/$AbstractStrengthenedGlassBlock$Type"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$TankGaugeBlock, $TankGaugeBlock$Type} from "packages/mods/railcraft/world/level/block/tank/$TankGaugeBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $IronTankGaugeBlock extends $TankGaugeBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "TYPE": $Property<($AbstractStrengthenedGlassBlock$Type)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IronTankGaugeBlock$Type = ($IronTankGaugeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IronTankGaugeBlock_ = $IronTankGaugeBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$FluidBottleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidBottleItem extends $Item {
static readonly "QUANTITY": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getFluid"(): $Fluid
get "fluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBottleItem$Type = ($FluidBottleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBottleItem_ = $FluidBottleItem$Type;
}}
declare module "packages/mods/railcraft/world/item/$FirestoneOreBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FirestoneOreBlockItem extends $BlockItem {
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

constructor(arg0: $Item$Properties$Type)

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirestoneOreBlockItem$Type = ($FirestoneOreBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirestoneOreBlockItem_ = $FirestoneOreBlockItem$Type;
}}
declare module "packages/mods/railcraft/charge/$ChargeCartStorageImpl" {
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$ChargeCartStorage, $ChargeCartStorage$Type} from "packages/mods/railcraft/api/charge/$ChargeCartStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnergyStorage, $EnergyStorage$Type} from "packages/net/minecraftforge/energy/$EnergyStorage"

export class $ChargeCartStorageImpl extends $EnergyStorage implements $ChargeCartStorage {

constructor(arg0: integer)
constructor(arg0: integer, arg1: integer)

public "tick"(arg0: $AbstractMinecart$Type): void
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "getDraw"(): double
public "getLosses"(): double
public "tickOnTrack"(arg0: $AbstractMinecart$Type, arg1: $BlockPos$Type): void
get "draw"(): double
get "losses"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeCartStorageImpl$Type = ($ChargeCartStorageImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeCartStorageImpl_ = $ChargeCartStorageImpl$Type;
}}
declare module "packages/mods/railcraft/world/level/block/manipulator/$ManipulatorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ManipulatorBlockEntity, $ManipulatorBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ManipulatorBlockEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ManipulatorBlock<T extends $ManipulatorBlockEntity> extends $BaseEntityBlock {
static readonly "POWERED": $BooleanProperty
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


public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getFacing"(arg0: $BlockState$Type): $Direction
public static "isPowered"(arg0: $BlockState$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManipulatorBlock$Type<T> = ($ManipulatorBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManipulatorBlock_<T> = $ManipulatorBlock$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/level/block/$CrusherMultiblockBlock$Type" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CrusherMultiblockBlock$Type extends $Enum<($CrusherMultiblockBlock$Type)> implements $StringRepresentable {
static readonly "NONE": $CrusherMultiblockBlock$Type
static readonly "NORTH": $CrusherMultiblockBlock$Type
static readonly "NORTH_EAST": $CrusherMultiblockBlock$Type
static readonly "NORTH_WEST": $CrusherMultiblockBlock$Type
static readonly "SOUTH": $CrusherMultiblockBlock$Type
static readonly "SOUTH_EAST": $CrusherMultiblockBlock$Type
static readonly "SOUTH_WEST": $CrusherMultiblockBlock$Type


public static "values"(): ($CrusherMultiblockBlock$Type)[]
public static "valueOf"(arg0: string): $CrusherMultiblockBlock$Type
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrusherMultiblockBlock$Type$Type = (("south_west") | ("north_east") | ("north_west") | ("south") | ("north") | ("south_east") | ("none")) | ($CrusherMultiblockBlock$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrusherMultiblockBlock$Type_ = $CrusherMultiblockBlock$Type$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$ReversiblePoweredOutfittedTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ReversiblePoweredOutfittedTrackBlock extends $PoweredOutfittedTrackBlock {
static readonly "REVERSED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public static "isReversed"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReversiblePoweredOutfittedTrackBlock$Type = ($ReversiblePoweredOutfittedTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReversiblePoweredOutfittedTrackBlock_ = $ReversiblePoweredOutfittedTrackBlock$Type;
}}
declare module "packages/mods/railcraft/api/signal/entity/$MonitoringSignalEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TrackLocator, $TrackLocator$Type} from "packages/mods/railcraft/api/signal/$TrackLocator"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SignalEntity, $SignalEntity$Type} from "packages/mods/railcraft/api/signal/entity/$SignalEntity"
import {$SignalNetwork, $SignalNetwork$Type} from "packages/mods/railcraft/api/signal/$SignalNetwork"

export interface $MonitoringSignalEntity<T> extends $SignalEntity {

 "type"(): $Class<(T)>
 "signalNetwork"(): $SignalNetwork<(T)>
 "trackLocator"(): $TrackLocator
 "setCustomName"(arg0: $Component$Type): void
 "asBlockEntity"(): $BlockEntity
 "getCustomName"(): $Component
 "hasCustomName"(): boolean
 "getName"(): $Component
 "getDisplayName"(): $Component
}

export namespace $MonitoringSignalEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonitoringSignalEntity$Type<T> = ($MonitoringSignalEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonitoringSignalEntity_<T> = $MonitoringSignalEntity$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/item/$ChargeMeterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ChargeCartStorageImpl, $ChargeCartStorageImpl$Type} from "packages/mods/railcraft/charge/$ChargeCartStorageImpl"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChargeMeterItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "sendCartStat"(arg0: $Player$Type, arg1: $Component$Type, arg2: $ChargeCartStorageImpl$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeMeterItem$Type = ($ChargeMeterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeMeterItem_ = $ChargeMeterItem$Type;
}}
declare module "packages/mods/railcraft/world/entity/vehicle/locomotive/$Locomotive$Mode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Locomotive$Mode extends $Enum<($Locomotive$Mode)> implements $StringRepresentable {
static readonly "SHUTDOWN": $Locomotive$Mode
static readonly "IDLE": $Locomotive$Mode
static readonly "RUNNING": $Locomotive$Mode


public static "values"(): ($Locomotive$Mode)[]
public static "valueOf"(arg0: string): $Locomotive$Mode
public "next"(): $Locomotive$Mode
public "previous"(): $Locomotive$Mode
public "getDisplayName"(): $Component
public static "fromName"(arg0: string): $Locomotive$Mode
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "displayName"(): $Component
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locomotive$Mode$Type = (("running") | ("idle") | ("shutdown")) | ($Locomotive$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locomotive$Mode_ = $Locomotive$Mode$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$SelfAttachableSignalBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SignalBoxBlock, $SignalBoxBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SignalBoxBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $SelfAttachableSignalBoxBlock extends $SignalBoxBlock {
static readonly "CAP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "attachesTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelfAttachableSignalBoxBlock$Type = ($SelfAttachableSignalBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelfAttachableSignalBoxBlock_ = $SelfAttachableSignalBoxBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/charge/$NickelIronBatteryBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BatteryBlock, $BatteryBlock$Type} from "packages/mods/railcraft/world/level/block/charge/$BatteryBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $NickelIronBatteryBlock extends $BatteryBlock {
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

public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NickelIronBatteryBlock$Type = ($NickelIronBatteryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NickelIronBatteryBlock_ = $NickelIronBatteryBlock$Type;
}}
declare module "packages/mods/railcraft/api/track/$PoweredTrack" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $PoweredTrack {

 "setPowered"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: boolean): void
 "isPowered"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
 "getPowerPropagation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
 "canPropagatePowerTo"(arg0: $BlockState$Type): boolean
}

export namespace $PoweredTrack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredTrack$Type = ($PoweredTrack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredTrack_ = $PoweredTrack$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/track/$CouplerTrackBlockEntity$Mode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$CouplerTrackBlockEntity, $CouplerTrackBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/track/$CouplerTrackBlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CouplerTrackBlockEntity$Mode extends $Enum<($CouplerTrackBlockEntity$Mode)> implements $StringRepresentable {
static readonly "COUPLER": $CouplerTrackBlockEntity$Mode
static readonly "DECOUPLER": $CouplerTrackBlockEntity$Mode
static readonly "AUTO_COUPLER": $CouplerTrackBlockEntity$Mode


public static "values"(): ($CouplerTrackBlockEntity$Mode)[]
public static "valueOf"(arg0: string): $CouplerTrackBlockEntity$Mode
public "next"(): $CouplerTrackBlockEntity$Mode
public "previous"(): $CouplerTrackBlockEntity$Mode
public "getDisplayName"(): $Component
public "getSerializedName"(): string
public "getTranslationKey"(): string
public "getPowerPropagation"(): integer
public "minecartPassed"(arg0: $CouplerTrackBlockEntity$Type, arg1: $AbstractMinecart$Type): void
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "displayName"(): $Component
get "serializedName"(): string
get "translationKey"(): string
get "powerPropagation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CouplerTrackBlockEntity$Mode$Type = (("auto_coupler") | ("coupler") | ("decoupler")) | ($CouplerTrackBlockEntity$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CouplerTrackBlockEntity$Mode_ = $CouplerTrackBlockEntity$Mode$Type;
}}
declare module "packages/mods/railcraft/world/item/$PressureBoilerTankBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PressureBoilerTankBlockItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureBoilerTankBlockItem$Type = ($PressureBoilerTankBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureBoilerTankBlockItem_ = $PressureBoilerTankBlockItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$BlockSignalBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SingleSignalBlock, $SingleSignalBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SingleSignalBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $BlockSignalBlock extends $SingleSignalBlock implements $JeiSearchable {
static readonly "DOWN": $BooleanProperty
static readonly "SHAPE": $VoxelShape
static readonly "POST_SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "propertyByDirection": $Map<($Direction), ($BooleanProperty)>
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalBlock$Type = ($BlockSignalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalBlock_ = $BlockSignalBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$ManualRollingMachineBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $ManualRollingMachineBlock extends $BaseEntityBlock implements $JeiSearchable {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualRollingMachineBlock$Type = ($ManualRollingMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManualRollingMachineBlock_ = $ManualRollingMachineBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/charge/$FrameBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChargeBlock$Spec, $ChargeBlock$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$Spec"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ChargeBlock, $ChargeBlock$Type} from "packages/mods/railcraft/world/level/block/charge/$ChargeBlock"

export class $FrameBlock extends $ChargeBlock implements $EntityBlock {
static readonly "POWERED": $BooleanProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getChargeSpecs"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): $Map<($Charge), ($ChargeBlock$Spec)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
declare module "packages/mods/railcraft/world/item/$SeasonsCrowbarItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Season, $Season$Type} from "packages/mods/railcraft/season/$Season"
import {$CrowbarItem, $CrowbarItem$Type} from "packages/mods/railcraft/world/item/$CrowbarItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SeasonsCrowbarItem extends $CrowbarItem {
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

constructor(arg0: $Item$Properties$Type)

public static "getSeason"(arg0: $ItemStack$Type): $Season
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeasonsCrowbarItem$Type = ($SeasonsCrowbarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeasonsCrowbarItem_ = $SeasonsCrowbarItem$Type;
}}
declare module "packages/mods/railcraft/api/charge/$ChargeStorage$Spec" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ChargeStorage$State, $ChargeStorage$State$Type} from "packages/mods/railcraft/api/charge/$ChargeStorage$State"

export class $ChargeStorage$Spec extends $Record {

constructor(initialState: $ChargeStorage$State$Type, capacity: integer, maxDraw: integer, efficiency: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "capacity"(): integer
public "efficiency"(): float
public "maxDraw"(): integer
public "initialState"(): $ChargeStorage$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeStorage$Spec$Type = ($ChargeStorage$Spec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeStorage$Spec_ = $ChargeStorage$Spec$Type;
}}
declare module "packages/mods/railcraft/world/item/crafting/$CrusherRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$CrusherRecipe, $CrusherRecipe$Type} from "packages/mods/railcraft/world/item/crafting/$CrusherRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CrusherRecipe$Serializer implements $RecipeSerializer<($CrusherRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CrusherRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CrusherRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CrusherRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CrusherRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrusherRecipe$Serializer$Type = ($CrusherRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrusherRecipe$Serializer_ = $CrusherRecipe$Serializer$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$CoalCokeBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $CoalCokeBlock extends $Block {
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

constructor(arg0: integer, arg1: integer, arg2: $BlockBehaviour$Properties$Type)

public "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoalCokeBlock$Type = ($CoalCokeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoalCokeBlock_ = $CoalCokeBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/manipulator/$FluidLoaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidLoaderBlockEntity, $FluidLoaderBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$FluidLoaderBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidManipulatorBlock, $FluidManipulatorBlock$Type} from "packages/mods/railcraft/world/level/block/manipulator/$FluidManipulatorBlock"

export class $FluidLoaderBlock extends $FluidManipulatorBlock<($FluidLoaderBlockEntity)> {
static readonly "POWERED": $BooleanProperty
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFacing"(arg0: $BlockState$Type): $Direction
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLoaderBlock$Type = ($FluidLoaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidLoaderBlock_ = $FluidLoaderBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$LockingTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$LockingMode, $LockingMode$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$LockingMode"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LockingTrackBlock extends $PoweredOutfittedTrackBlock implements $EntityBlock {
static readonly "LOCKING_MODE": $Property<($LockingMode)>
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "getLockingMode"(arg0: $BlockState$Type): $LockingMode
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockingTrackBlock$Type = ($LockingTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockingTrackBlock_ = $LockingTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/actuator/$SwitchTrackActuatorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ArrowDirection, $ArrowDirection$Type} from "packages/mods/railcraft/api/track/$ArrowDirection"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $SwitchTrackActuatorBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "RED_ARROW_DIRECTION": $EnumProperty<($ArrowDirection)>
static readonly "WHITE_ARROW_DIRECTION": $EnumProperty<($ArrowDirection)>
static readonly "SWITCHED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public static "getRedArrowDirection"(arg0: $BlockState$Type): $ArrowDirection
public static "updateArrowDirections"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ArrowDirection$Type, arg4: $ArrowDirection$Type): void
public static "getWhiteArrowDirection"(arg0: $BlockState$Type): $ArrowDirection
public static "isSwitched"(arg0: $BlockState$Type): boolean
public static "setSwitched"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: boolean): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchTrackActuatorBlock$Type = ($SwitchTrackActuatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchTrackActuatorBlock_ = $SwitchTrackActuatorBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockBlockEntity$UnresolvedMembership" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MultiblockPattern$Element, $MultiblockPattern$Element$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern$Element"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MultiblockBlockEntity$UnresolvedMembership extends $Record {

constructor(patternElement: $MultiblockPattern$Element$Type, masterPos: $BlockPos$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "patternElement"(): $MultiblockPattern$Element
public "masterPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBlockEntity$UnresolvedMembership$Type = ($MultiblockBlockEntity$UnresolvedMembership);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockBlockEntity$UnresolvedMembership_ = $MultiblockBlockEntity$UnresolvedMembership$Type;
}}
declare module "packages/mods/railcraft/world/level/material/$CreosoteFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$CreosoteFluid, $CreosoteFluid$Type} from "packages/mods/railcraft/world/level/material/$CreosoteFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $CreosoteFluid$Source extends $CreosoteFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreosoteFluid$Source$Type = ($CreosoteFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreosoteFluid$Source_ = $CreosoteFluid$Source$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/$HighSpeedElectricTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$TrackBlock, $TrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/$TrackBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"

export class $HighSpeedElectricTrackBlock extends $TrackBlock {
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighSpeedElectricTrackBlock$Type = ($HighSpeedElectricTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighSpeedElectricTrackBlock_ = $HighSpeedElectricTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$FurnaceMultiblockBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$MultiblockBlock, $MultiblockBlock$Type} from "packages/mods/railcraft/world/level/block/$MultiblockBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FurnaceMultiblockBlock extends $MultiblockBlock {
static readonly "LIT": $BooleanProperty
static readonly "WINDOW": $BooleanProperty
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

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceMultiblockBlock$Type = ($FurnaceMultiblockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnaceMultiblockBlock_ = $FurnaceMultiblockBlock$Type;
}}
declare module "packages/mods/railcraft/season/$Season" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Season extends $Enum<($Season)> implements $StringRepresentable {
static readonly "DEFAULT": $Season
static readonly "HALLOWEEN": $Season
static readonly "CHRISTMAS": $Season
static readonly "NONE": $Season


public static "values"(): ($Season)[]
public static "valueOf"(arg0: string): $Season
public "getDisplayName"(): $Component
public static "fromName"(arg0: string): $Season
public "getNext"(): $Season
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "displayName"(): $Component
get "next"(): $Season
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Season$Type = (("default") | ("halloween") | ("none") | ("christmas")) | ($Season);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Season_ = $Season$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$ItemUnloaderBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemManipulatorBlockEntity, $ItemManipulatorBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ItemManipulatorBlockEntity"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ManipulatorBlockEntity$RedstoneMode, $ManipulatorBlockEntity$RedstoneMode$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ManipulatorBlockEntity$RedstoneMode"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemUnloaderBlockEntity extends $ItemManipulatorBlockEntity {
static readonly "STOP_VELOCITY": float
static readonly "PAUSE_DELAY": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getDestination"(): $ContainerManipulator<(any)>
public "getSource"(): $ContainerManipulator<(any)>
public "getSupportedRedstoneModes"(): $Set<($ManipulatorBlockEntity$RedstoneMode)>
public "canHandleCart"(arg0: $AbstractMinecart$Type): boolean
public "getBufferSlot"(arg0: integer, arg1: integer, arg2: integer): $Slot
public "getDisplayName"(): $Component
public "setChanged"(): void
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<(T)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<(T)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<(T)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "destination"(): $ContainerManipulator<(any)>
get "source"(): $ContainerManipulator<(any)>
get "supportedRedstoneModes"(): $Set<($ManipulatorBlockEntity$RedstoneMode)>
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUnloaderBlockEntity$Type = ($ItemUnloaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUnloaderBlockEntity_ = $ItemUnloaderBlockEntity$Type;
}}
declare module "packages/mods/railcraft/world/item/tunnelbore/$BronzeTunnelBoreHeadItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$TunnelBoreHeadItem, $TunnelBoreHeadItem$Type} from "packages/mods/railcraft/world/item/tunnelbore/$TunnelBoreHeadItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BronzeTunnelBoreHeadItem extends $TunnelBoreHeadItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getTextureLocation"(): $ResourceLocation
public "getDigModifier"(): double
get "textureLocation"(): $ResourceLocation
get "digModifier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BronzeTunnelBoreHeadItem$Type = ($BronzeTunnelBoreHeadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BronzeTunnelBoreHeadItem_ = $BronzeTunnelBoreHeadItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/steamboiler/$SolidFueledFireboxBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$FireboxBlock, $FireboxBlock$Type} from "packages/mods/railcraft/world/level/block/steamboiler/$FireboxBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SteamBoilerBlockEntity, $SteamBoilerBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/steamboiler/$SteamBoilerBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SolidFueledFireboxBlock extends $FireboxBlock {
static readonly "LIT": $Property<(boolean)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $SteamBoilerBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidFueledFireboxBlock$Type = ($SolidFueledFireboxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolidFueledFireboxBlock_ = $SolidFueledFireboxBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$OverallsItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ChargeProtectionItem, $ChargeProtectionItem$Type} from "packages/mods/railcraft/api/charge/$ChargeProtectionItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ChargeProtectionItem$ZapResult, $ChargeProtectionItem$ZapResult$Type} from "packages/mods/railcraft/api/charge/$ChargeProtectionItem$ZapResult"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OverallsItem extends $ArmorItem implements $ChargeProtectionItem {
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

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isZapProtectionActive"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "zap"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: float): $ChargeProtectionItem$ZapResult
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverallsItem$Type = ($OverallsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverallsItem_ = $OverallsItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/tank/$TankBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TankModule, $TankModule$Type} from "packages/mods/railcraft/world/module/$TankModule"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MultiblockBlockEntity, $MultiblockBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MultiblockPattern, $MultiblockPattern$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $TankBlockEntity extends $MultiblockBlockEntity<($TankBlockEntity), (void)> {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Collection$Type<($MultiblockPattern$Type<(void)>)>)

public "getModule"(): $TankModule
public "use"(arg0: $ServerPlayer$Type, arg1: $InteractionHand$Type): $InteractionResult
public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getRenderBoundingBox"(): $AABB
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getMaxZ"(): integer
public "getMaxX"(): integer
public "getDisplayName"(): $Component
public "getMaxY"(): integer
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "isStillValid"(arg0: $Player$Type): boolean
get "module"(): $TankModule
get "renderBoundingBox"(): $AABB
get "maxZ"(): integer
get "maxX"(): integer
get "displayName"(): $Component
get "maxY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankBlockEntity$Type = ($TankBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankBlockEntity_ = $TankBlockEntity$Type;
}}
declare module "packages/mods/railcraft/world/item/$TurbineRotorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TurbineRotorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "isDamageable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurbineRotorItem$Type = ($TurbineRotorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurbineRotorItem_ = $TurbineRotorItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/charge/$ChargeBlock" {
import {$ChargeBlock as $ChargeBlock$0, $ChargeBlock$Type as $ChargeBlock$0$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock"
import {$Charge$Access, $Charge$Access$Type} from "packages/mods/railcraft/api/charge/$Charge$Access"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ChargeBlock$Spec, $ChargeBlock$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$Spec"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChargeBlock extends $Block implements $ChargeBlock$0 {
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

public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "deregisterNode"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
public "registerNode"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): void
public "getMeterAccess"(arg0: $Charge$Type, arg1: $BlockState$Type, arg2: $ServerLevel$Type, arg3: $BlockPos$Type): $Charge$Access
public "getChargeSpecs"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): $Map<($Charge), ($ChargeBlock$Spec)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeBlock$Type = ($ChargeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeBlock_ = $ChargeBlock$Type;
}}
declare module "packages/mods/railcraft/api/container/manipulator/$SlotAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $SlotAccessor {

 "extract"(): $ItemStack
 "extract"(arg0: integer, arg1: boolean): $ItemStack
 "insert"(arg0: $ItemStack$Type): $ItemStack
 "insert"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "isEmpty"(): boolean
 "matches"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "count"(): integer
 "isValid"(arg0: $ItemStack$Type): boolean
 "item"(): $ItemStack
 "is"(arg0: $Item$Type): boolean
 "isFull"(): boolean
 "maxStackSize"(): integer
 "hasItem"(): boolean
 "simulateInsert"(arg0: $ItemStack$Type): $ItemStack
 "simulateExtract"(): $ItemStack
 "simulateExtract"(arg0: integer): $ItemStack
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
declare module "packages/mods/railcraft/api/track/$TypedTrack" {
import {$TrackType, $TrackType$Type} from "packages/mods/railcraft/api/track/$TrackType"

export interface $TypedTrack {

 "getTrackType"(): $TrackType

(): $TrackType
}

export namespace $TypedTrack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedTrack$Type = ($TypedTrack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedTrack_ = $TypedTrack$Type;
}}
declare module "packages/mods/railcraft/world/module/$BaseModule" {
import {$Module, $Module$Type} from "packages/mods/railcraft/world/module/$Module"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModuleProvider, $ModuleProvider$Type} from "packages/mods/railcraft/world/module/$ModuleProvider"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $BaseModule<T extends $ModuleProvider> implements $Module {

constructor(arg0: T)

public "getProvider"(): T
public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "serverTick"(): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
get "provider"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseModule$Type<T> = ($BaseModule<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseModule_<T> = $BaseModule$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$SignalBlockRelayBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$SignalBoxBlock, $SignalBoxBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SignalBoxBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SignalBlockRelayBoxBlock extends $SignalBoxBlock implements $EntityBlock {
static readonly "CAP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalBlockRelayBoxBlock$Type = ($SignalBlockRelayBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalBlockRelayBoxBlock_ = $SignalBlockRelayBoxBlock$Type;
}}
declare module "packages/mods/railcraft/api/item/$SpikeMaulTarget" {
import {$List, $List$Type} from "packages/java/util/$List"

export interface $SpikeMaulTarget {

 "getSpikeMaulVariants"(): $List<(any)>

(): $List<(any)>
}

export namespace $SpikeMaulTarget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpikeMaulTarget$Type = ($SpikeMaulTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpikeMaulTarget_ = $SpikeMaulTarget$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$SteamOvenBlock$Type" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SteamOvenBlock$Type extends $Enum<($SteamOvenBlock$Type)> implements $StringRepresentable {
static readonly "DOOR_TOP_LEFT": $SteamOvenBlock$Type
static readonly "DOOR_TOP_RIGHT": $SteamOvenBlock$Type
static readonly "DOOR_BOTTOM_LEFT": $SteamOvenBlock$Type
static readonly "DOOR_BOTTOM_RIGHT": $SteamOvenBlock$Type
static readonly "DEFAULT": $SteamOvenBlock$Type


public static "values"(): ($SteamOvenBlock$Type)[]
public static "valueOf"(arg0: string): $SteamOvenBlock$Type
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamOvenBlock$Type$Type = (("door_top_left") | ("default") | ("door_top_right") | ("door_bottom_left") | ("door_bottom_right")) | ($SteamOvenBlock$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamOvenBlock$Type_ = $SteamOvenBlock$Type$Type;
}}
declare module "packages/mods/railcraft/api/signal/$SignalNetwork" {
import {$SignalAspect, $SignalAspect$Type} from "packages/mods/railcraft/api/signal/$SignalAspect"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $SignalNetwork<T> {

 "refresh"(): void
 "stream"(): $Stream<(T)>
 "destroy"(): void
 "aspect"(): $SignalAspect
 "isPeer"(arg0: $BlockPos$Type): boolean
 "peerCount"(): integer
 "isLinking"(): boolean
 "peerAt"(arg0: $BlockPos$Type): $Optional<(T)>
 "peers"(): $Collection<($BlockPos)>
 "hasPeers"(): boolean
 "startLinking"(): void
 "stopLinking"(): void
 "addPeer"(arg0: T): boolean
 "removePeer"(arg0: $BlockPos$Type): boolean
}

export namespace $SignalNetwork {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalNetwork$Type<T> = ($SignalNetwork<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalNetwork_<T> = $SignalNetwork$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/level/block/steamboiler/$FluidFueledFireboxBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$FireboxBlock, $FireboxBlock$Type} from "packages/mods/railcraft/world/level/block/steamboiler/$FireboxBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SteamBoilerBlockEntity, $SteamBoilerBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/steamboiler/$SteamBoilerBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidFueledFireboxBlock extends $FireboxBlock {
static readonly "LIT": $Property<(boolean)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $SteamBoilerBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFueledFireboxBlock$Type = ($FluidFueledFireboxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFueledFireboxBlock_ = $FluidFueledFireboxBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$CrusherMultiblockBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ChargeBlock, $ChargeBlock$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$MultiblockBlock, $MultiblockBlock$Type} from "packages/mods/railcraft/world/level/block/$MultiblockBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Charge$Access, $Charge$Access$Type} from "packages/mods/railcraft/api/charge/$Charge$Access"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$CrusherMultiblockBlock$Type, $CrusherMultiblockBlock$Type$Type} from "packages/mods/railcraft/world/level/block/$CrusherMultiblockBlock$Type"
import {$ChargeBlock$Spec, $ChargeBlock$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$Spec"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CrusherMultiblockBlock extends $MultiblockBlock implements $ChargeBlock {
static readonly "TYPE": $Property<($CrusherMultiblockBlock$Type)>
static readonly "ROTATED": $Property<(boolean)>
static readonly "OUTPUT": $Property<(boolean)>
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getChargeSpecs"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): $Map<($Charge), ($ChargeBlock$Spec)>
public "deregisterNode"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
public "registerNode"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): void
public "getMeterAccess"(arg0: $Charge$Type, arg1: $BlockState$Type, arg2: $ServerLevel$Type, arg3: $BlockPos$Type): $Charge$Access
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrusherMultiblockBlock$Type = ($CrusherMultiblockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrusherMultiblockBlock_ = $CrusherMultiblockBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/material/$StandardTank" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $StandardTank extends $FluidTank {


public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "filter"(arg0: $Supplier$Type<(any)>): $StandardTank
public "filter"(arg0: $TagKey$Type<($Fluid$Type)>): $StandardTank
public "filter"(arg0: $Fluid$Type): $StandardTank
public "setFluid"(arg0: $FluidStack$Type): void
public "getTooltip"(): $List<($Component)>
public "isFull"(): boolean
public static "ofCapacity"(arg0: integer): $StandardTank
public "getFluidType"(): $Fluid
public "changeCallback"(arg0: $Runnable$Type): $StandardTank
public "internalFill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "setValidator"(arg0: $Predicate$Type<($FluidStack$Type)>): $StandardTank
public "getRemainingSpace"(): integer
public "internalDrain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "internalDrain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "disableDrain"(): $StandardTank
public "disableFill"(): $StandardTank
public "fillProcessor"(arg0: $BiFunction$Type<($FluidStack$Type), ($IFluidHandler$FluidAction$Type), ($FluidStack$Type)>): $StandardTank
public "fillProcessor"(arg0: $Function$Type<($FluidStack$Type), ($FluidStack$Type)>): $StandardTank
public static "ofBuckets"(arg0: integer): $StandardTank
set "fluid"(value: $FluidStack$Type)
get "tooltip"(): $List<($Component)>
get "full"(): boolean
get "fluidType"(): $Fluid
set "validator"(value: $Predicate$Type<($FluidStack$Type)>)
get "remainingSpace"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardTank$Type = ($StandardTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StandardTank_ = $StandardTank$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$FluidLoaderBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FluidManipulatorBlockEntity, $FluidManipulatorBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$FluidManipulatorBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $FluidLoaderBlockEntity extends $FluidManipulatorBlockEntity {
static readonly "STOP_VELOCITY": float
static readonly "PAUSE_DELAY": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "getRenderBoundingBox"(): $AABB
public "load"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "clearRemoved"(): void
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "findCart"(): $Optional<($AbstractMinecart)>
public "getPipeLength"(arg0: float): float
public "getDisplayName"(): $Component
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "getMaxStackSize"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "clearContent"(): void
public static "tryClear"(arg0: any): void
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<(T)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<(T)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<(T)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
get "renderBoundingBox"(): $AABB
get "displayName"(): $Component
get "maxStackSize"(): integer
get "containerSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLoaderBlockEntity$Type = ($FluidLoaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidLoaderBlockEntity_ = $FluidLoaderBlockEntity$Type;
}}
declare module "packages/mods/railcraft/world/module/$Module" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NetworkSerializable, $NetworkSerializable$Type} from "packages/mods/railcraft/api/core/$NetworkSerializable"
import {$ModuleProvider, $ModuleProvider$Type} from "packages/mods/railcraft/world/module/$ModuleProvider"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export interface $Module extends $NetworkSerializable, $INBTSerializable<($CompoundTag)> {

 "getProvider"(): $ModuleProvider
 "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
 "serverTick"(): void
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $Module {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Module$Type = ($Module);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Module_ = $Module$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$LocomotiveTrackBlock" {
import {$Locomotive$Mode, $Locomotive$Mode$Type} from "packages/mods/railcraft/world/entity/vehicle/locomotive/$Locomotive$Mode"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LocomotiveTrackBlock extends $PoweredOutfittedTrackBlock {
static readonly "LOCOMOTIVE_MODE": $Property<($Locomotive$Mode)>
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public static "getMode"(arg0: $BlockState$Type): $Locomotive$Mode
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "getPowerPropagation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocomotiveTrackBlock$Type = ($LocomotiveTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocomotiveTrackBlock_ = $LocomotiveTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/material/$CreosoteFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$CreosoteFluid, $CreosoteFluid$Type} from "packages/mods/railcraft/world/level/material/$CreosoteFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $CreosoteFluid$Flowing extends $CreosoteFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreosoteFluid$Flowing$Type = ($CreosoteFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreosoteFluid$Flowing_ = $CreosoteFluid$Flowing$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/$ForceTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$TrackBlock, $TrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/$TrackBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ForceTrackBlock extends $TrackBlock implements $EntityBlock {
static readonly "COLOR": $EnumProperty<($DyeColor)>
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "isFlexibleRail"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getRailMaxSpeed"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): float
public "canMakeSlopes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShapeProperty"(): $Property<($RailShape)>
public "updateDir"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "shapeProperty"(): $Property<($RailShape)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForceTrackBlock$Type = ($ForceTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForceTrackBlock_ = $ForceTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$EmptyDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EmptyDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyDetectorBlock$Type = ($EmptyDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyDetectorBlock_ = $EmptyDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$TokenSignalBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SingleSignalBlock, $SingleSignalBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SingleSignalBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $TokenSignalBlock extends $SingleSignalBlock implements $JeiSearchable {
static readonly "DOWN": $BooleanProperty
static readonly "SHAPE": $VoxelShape
static readonly "POST_SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "propertyByDirection": $Map<($Direction), ($BooleanProperty)>
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TokenSignalBlock$Type = ($TokenSignalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TokenSignalBlock_ = $TokenSignalBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$CreosoteLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CreosoteLiquidBlock extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

public "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreosoteLiquidBlock$Type = ($CreosoteLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreosoteLiquidBlock_ = $CreosoteLiquidBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$ActivatorTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ActivatorTrackBlock extends $PoweredOutfittedTrackBlock {
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "getPowerPropagation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActivatorTrackBlock$Type = ($ActivatorTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActivatorTrackBlock_ = $ActivatorTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/material/$CreosoteFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $CreosoteFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
public static "createFluidType"(): $FluidType
public "getFluidType"(): $FluidType
public "m_5486_"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Fluid$Type, arg4: $Direction$Type): boolean
public "getFlow"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): $Vec3
public "getBucket"(): $Item
public "isSame"(arg0: $Fluid$Type): boolean
public "getTickDelay"(arg0: $LevelReader$Type): integer
public "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
get "flowing"(): $Fluid
get "source"(): $Fluid
get "fluidType"(): $FluidType
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreosoteFluid$Type = ($CreosoteFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreosoteFluid_ = $CreosoteFluid$Type;
}}
declare module "packages/mods/railcraft/api/signal/$TrackLocator" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TrackLocator$Status, $TrackLocator$Status$Type} from "packages/mods/railcraft/api/signal/$TrackLocator$Status"

export class $TrackLocator {

constructor(arg0: $Supplier$Type<($Level$Type)>, arg1: $BlockPos$Type)

public "trackPos"(): $BlockPos
public "trackStatus"(): $TrackLocator$Status
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackLocator$Type = ($TrackLocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackLocator_ = $TrackLocator$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$DistantSignalBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SingleSignalBlock, $SingleSignalBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SingleSignalBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $DistantSignalBlock extends $SingleSignalBlock implements $JeiSearchable {
static readonly "DOWN": $BooleanProperty
static readonly "SHAPE": $VoxelShape
static readonly "POST_SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "propertyByDirection": $Map<($Direction), ($BooleanProperty)>
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistantSignalBlock$Type = ($DistantSignalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistantSignalBlock_ = $DistantSignalBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$ItemDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ItemDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDetectorBlock$Type = ($ItemDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDetectorBlock_ = $ItemDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$ForceTrackEmitterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ChargeBlock, $ChargeBlock$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Charge$Access, $Charge$Access$Type} from "packages/mods/railcraft/api/charge/$Charge$Access"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ChargeBlock$Spec, $ChargeBlock$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$Spec"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForceTrackEmitterBlock extends $BaseEntityBlock implements $ChargeBlock {
static readonly "DEFAULT_COLOR": $DyeColor
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public static "getFacing"(arg0: $BlockState$Type): $Direction
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getChargeSpecs"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): $Map<($Charge), ($ChargeBlock$Spec)>
public "deregisterNode"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
public "registerNode"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): void
public "getMeterAccess"(arg0: $Charge$Type, arg1: $BlockState$Type, arg2: $ServerLevel$Type, arg3: $BlockPos$Type): $Charge$Access
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForceTrackEmitterBlock$Type = ($ForceTrackEmitterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForceTrackEmitterBlock_ = $ForceTrackEmitterBlock$Type;
}}
declare module "packages/mods/railcraft/api/track/$LockingTrack" {
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"

export interface $LockingTrack {

 "isCartLocked"(arg0: $AbstractMinecart$Type): boolean
 "releaseCart"(): void
}

export namespace $LockingTrack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockingTrack$Type = ($LockingTrack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockingTrack_ = $LockingTrack$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$LockingModeController" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export interface $LockingModeController extends $INBTSerializable<($CompoundTag)> {

 "passed"(arg0: $AbstractMinecart$Type): void
 "locked"(arg0: $AbstractMinecart$Type): void
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "released"(arg0: $AbstractMinecart$Type): void
}

export namespace $LockingModeController {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockingModeController$Type = ($LockingModeController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockingModeController_ = $LockingModeController$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$AdvancedDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedDetectorBlock$Type = ($AdvancedDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedDetectorBlock_ = $AdvancedDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$FluidManipulatorBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ManipulatorBlockEntity, $ManipulatorBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ManipulatorBlockEntity"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TankManager, $TankManager$Type} from "packages/mods/railcraft/world/level/material/$TankManager"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$AdvancedContainer, $AdvancedContainer$Type} from "packages/mods/railcraft/util/container/$AdvancedContainer"

export class $FluidManipulatorBlockEntity extends $ManipulatorBlockEntity implements $WorldlyContainer, $MenuProvider {
static readonly "STOP_VELOCITY": float
static readonly "PAUSE_DELAY": integer


public "use"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "load"(arg0: $CompoundTag$Type): void
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "getTankManager"(): $TankManager
public "canHandleCart"(arg0: $AbstractMinecart$Type): boolean
public "getFluidFilter"(): $AdvancedContainer
public "getFilterFluid"(): $Optional<($FluidStack)>
public "getFluidHandled"(): $FluidStack
public "getDisplayName"(): $Component
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "getMaxStackSize"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "clearContent"(): void
public static "tryClear"(arg0: any): void
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<(T)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<(T)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<(T)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
get "tankManager"(): $TankManager
get "fluidFilter"(): $AdvancedContainer
get "filterFluid"(): $Optional<($FluidStack)>
get "fluidHandled"(): $FluidStack
get "displayName"(): $Component
get "maxStackSize"(): integer
get "containerSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidManipulatorBlockEntity$Type = ($FluidManipulatorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidManipulatorBlockEntity_ = $FluidManipulatorBlockEntity$Type;
}}
declare module "packages/mods/railcraft/api/carts/$TunnelBoreHead" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $TunnelBoreHead {

 "getTextureLocation"(): $ResourceLocation
 "getDigModifier"(): double
}

export namespace $TunnelBoreHead {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TunnelBoreHead$Type = ($TunnelBoreHead);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TunnelBoreHead_ = $TunnelBoreHead$Type;
}}
declare module "packages/mods/railcraft/world/item/tunnelbore/$TunnelBoreHeadItem" {
import {$TieredItem, $TieredItem$Type} from "packages/net/minecraft/world/item/$TieredItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$TunnelBoreHead, $TunnelBoreHead$Type} from "packages/mods/railcraft/api/carts/$TunnelBoreHead"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TunnelBoreHeadItem extends $TieredItem implements $TunnelBoreHead {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: $Item$Properties$Type)

public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getTextureLocation"(): $ResourceLocation
public "getDigModifier"(): double
get "textureLocation"(): $ResourceLocation
get "digModifier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TunnelBoreHeadItem$Type = ($TunnelBoreHeadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TunnelBoreHeadItem_ = $TunnelBoreHeadItem$Type;
}}
declare module "packages/mods/railcraft/world/item/$CoalCokeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoalCokeItem extends $Item {
static readonly "BURN_TIME": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoalCokeItem$Type = ($CoalCokeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoalCokeItem_ = $CoalCokeItem$Type;
}}
declare module "packages/mods/railcraft/world/item/$CrackedFirestoneItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RefinedFirestoneItem, $RefinedFirestoneItem$Type} from "packages/mods/railcraft/world/item/$RefinedFirestoneItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CrackedFirestoneItem extends $RefinedFirestoneItem {
static readonly "CHARGES": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public static "getItemEmpty"(): $ItemStack
get "itemEmpty"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrackedFirestoneItem$Type = ($CrackedFirestoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrackedFirestoneItem_ = $CrackedFirestoneItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$LockingMode$LockType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LockingMode$LockType extends $Enum<($LockingMode$LockType)> {
static readonly "CART": $LockingMode$LockType
static readonly "TRAIN": $LockingMode$LockType


public static "values"(): ($LockingMode$LockType)[]
public static "valueOf"(arg0: string): $LockingMode$LockType
public "isCart"(): boolean
public "isTrain"(): boolean
get "cart"(): boolean
get "train"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockingMode$LockType$Type = (("cart") | ("train")) | ($LockingMode$LockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockingMode$LockType_ = $LockingMode$LockType$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$DumpingTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DumpingTrackBlock extends $PoweredOutfittedTrackBlock implements $EntityBlock {
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getMaxSupportedDistance"(): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "maxSupportedDistance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DumpingTrackBlock$Type = ($DumpingTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DumpingTrackBlock_ = $DumpingTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$TrackKitItem$Properties" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $TrackKitItem$Properties extends $Item$Properties {

constructor()

public "setAllowedOnSlopes"(arg0: boolean): $TrackKitItem$Properties
public "addOutfittedBlock"(arg0: $RegistryObject$Type<(any)>, arg1: $Supplier$Type<(any)>): $TrackKitItem$Properties
public "addOutfittedBlock"(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(any)>): $TrackKitItem$Properties
set "allowedOnSlopes"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackKitItem$Properties$Type = ($TrackKitItem$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackKitItem$Properties_ = $TrackKitItem$Properties$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/$ElevatorTrackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ElevatorTrackBlock extends $Block {
static readonly "ELEVATOR_TIMER": byte
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "FALL_DOWN_CORRECTION": double
static readonly "RIDE_VELOCITY": double
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "getPowered"(arg0: $BlockState$Type): boolean
public static "getPowered"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElevatorTrackBlock$Type = ($ElevatorTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElevatorTrackBlock_ = $ElevatorTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$SignalBoxBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CrossCollisionBlock, $CrossCollisionBlock$Type} from "packages/net/minecraft/world/level/block/$CrossCollisionBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $SignalBoxBlock extends $CrossCollisionBlock {
static readonly "CAP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "isConnected"(arg0: $BlockState$Type, arg1: $Direction$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public static "isAspectEmitter"(arg0: $BlockState$Type): boolean
public static "isAspectReceiver"(arg0: $BlockState$Type): boolean
public "attachesTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalBoxBlock$Type = ($SignalBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalBoxBlock_ = $SignalBoxBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/tank/$SteelTankGaugeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractStrengthenedGlassBlock$Type, $AbstractStrengthenedGlassBlock$Type$Type} from "packages/mods/railcraft/world/level/block/$AbstractStrengthenedGlassBlock$Type"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$TankGaugeBlock, $TankGaugeBlock$Type} from "packages/mods/railcraft/world/level/block/tank/$TankGaugeBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SteelTankGaugeBlock extends $TankGaugeBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "TYPE": $Property<($AbstractStrengthenedGlassBlock$Type)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteelTankGaugeBlock$Type = ($SteelTankGaugeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteelTankGaugeBlock_ = $SteelTankGaugeBlock$Type;
}}
declare module "packages/mods/railcraft/api/track/$TrackType" {
import {$BaseRailBlock, $BaseRailBlock$Type} from "packages/net/minecraft/world/level/block/$BaseRailBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TrackType$EventHandler, $TrackType$EventHandler$Type} from "packages/mods/railcraft/api/track/$TrackType$EventHandler"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $TrackType {

constructor(arg0: $Supplier$Type<(any)>, arg1: $List$Type<($Supplier$Type<(any)>)>, arg2: boolean, arg3: boolean, arg4: integer, arg5: $TrackType$EventHandler$Type)

public "getItemStack"(): $ItemStack
public "getItemStack"(arg0: integer): $ItemStack
public "getSpikeMaulVariants"(): $List<($Supplier<(any)>)>
public "getMaxSupportDistance"(): integer
public "isHighSpeed"(): boolean
public "getFlexBlock"(): $BaseRailBlock
public "getEventHandler"(): $TrackType$EventHandler
public "isElectric"(): boolean
get "itemStack"(): $ItemStack
get "spikeMaulVariants"(): $List<($Supplier<(any)>)>
get "maxSupportDistance"(): integer
get "highSpeed"(): boolean
get "flexBlock"(): $BaseRailBlock
get "eventHandler"(): $TrackType$EventHandler
get "electric"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackType$Type = ($TrackType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackType_ = $TrackType$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$ItemManipulatorBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ManipulatorBlockEntity$TransferMode, $ManipulatorBlockEntity$TransferMode$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ManipulatorBlockEntity$TransferMode"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ManipulatorBlockEntity, $ManipulatorBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ManipulatorBlockEntity"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$AdvancedContainer, $AdvancedContainer$Type} from "packages/mods/railcraft/util/container/$AdvancedContainer"

export class $ItemManipulatorBlockEntity extends $ManipulatorBlockEntity implements $MenuProvider {
static readonly "STOP_VELOCITY": float
static readonly "PAUSE_DELAY": integer


public "getDestination"(): $ContainerManipulator<(any)>
public "getSource"(): $ContainerManipulator<(any)>
public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "load"(arg0: $CompoundTag$Type): void
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "canHandleCart"(arg0: $AbstractMinecart$Type): boolean
public "getBufferSlot"(arg0: integer, arg1: integer, arg2: integer): $Slot
public "setTransferMode"(arg0: $ManipulatorBlockEntity$TransferMode$Type): void
public "getTransferMode"(): $ManipulatorBlockEntity$TransferMode
public "getItemFilters"(): $AdvancedContainer
public "getDisplayName"(): $Component
public "setChanged"(): void
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<(T)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<(T)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<(T)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "destination"(): $ContainerManipulator<(any)>
get "source"(): $ContainerManipulator<(any)>
set "transferMode"(value: $ManipulatorBlockEntity$TransferMode$Type)
get "transferMode"(): $ManipulatorBlockEntity$TransferMode
get "itemFilters"(): $AdvancedContainer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemManipulatorBlockEntity$Type = ($ItemManipulatorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemManipulatorBlockEntity_ = $ItemManipulatorBlockEntity$Type;
}}
declare module "packages/mods/railcraft/world/item/$WorldSpikeMinecartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CartItem, $CartItem$Type} from "packages/mods/railcraft/world/item/$CartItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $WorldSpikeMinecartItem extends $CartItem implements $JeiSearchable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSpikeMinecartItem$Type = ($WorldSpikeMinecartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSpikeMinecartItem_ = $WorldSpikeMinecartItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern" {
import {$MultiblockPattern$Element, $MultiblockPattern$Element$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern$Element"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MultiblockPattern$Builder, $MultiblockPattern$Builder$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern$Builder"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultiblockPattern<T> {


public "resolve"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type): $Optional<($Map<($BlockPos), ($MultiblockPattern$Element)>)>
public static "builder"<T>(arg0: integer, arg1: integer, arg2: integer): $MultiblockPattern$Builder<(T)>
public static "builder"<T>(arg0: $Vec3i$Type): $MultiblockPattern$Builder<(T)>
public "getMarker"(arg0: $BlockPos$Type): character
public "getMetadata"(): T
public "getZSize"(): integer
public "getArea"(): integer
public "getXSize"(): integer
public "getYSize"(): integer
public "getMarkerOrDefault"(arg0: $BlockPos$Type, arg1: character): character
public "rotateClockwise"(): $MultiblockPattern<(T)>
public "isValidPosition"(arg0: $BlockPos$Type): boolean
public "isWithinPattern"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): boolean
get "metadata"(): T
get "zSize"(): integer
get "area"(): integer
get "xSize"(): integer
get "ySize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPattern$Type<T> = ($MultiblockPattern<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPattern_<T> = $MultiblockPattern$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/level/block/$BlastFurnaceBricksBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FurnaceMultiblockBlock, $FurnaceMultiblockBlock$Type} from "packages/mods/railcraft/world/level/block/$FurnaceMultiblockBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlastFurnaceBricksBlock extends $FurnaceMultiblockBlock {
static readonly "LIT": $BooleanProperty
static readonly "WINDOW": $BooleanProperty
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceBricksBlock$Type = ($BlastFurnaceBricksBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastFurnaceBricksBlock_ = $BlastFurnaceBricksBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$DetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DetectorBlock extends $BaseEntityBlock {
static readonly "POWERED": $BooleanProperty
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


public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlock$Type = ($DetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorBlock_ = $DetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$SignalLabelItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SignalLabelItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalLabelItem$Type = ($SignalLabelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalLabelItem_ = $SignalLabelItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$MobDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MobDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDetectorBlock$Type = ($MobDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobDetectorBlock_ = $MobDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/tank/$IronTankWallBlock" {
import {$BaseTankBlock, $BaseTankBlock$Type} from "packages/mods/railcraft/world/level/block/tank/$BaseTankBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TankBlockEntity, $TankBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/tank/$TankBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $IronTankWallBlock extends $BaseTankBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $TankBlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IronTankWallBlock$Type = ($IronTankWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IronTankWallBlock_ = $IronTankWallBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$ReversibleOutfittedTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$OutfittedTrackBlock, $OutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$OutfittedTrackBlock"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ReversibleOutfittedTrackBlock extends $OutfittedTrackBlock {
static readonly "REVERSED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public static "getDirection"(arg0: $RailShape$Type, arg1: boolean): $Direction
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public static "getFacing"(arg0: $BlockState$Type): $Direction
public static "isReversed"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReversibleOutfittedTrackBlock$Type = ($ReversibleOutfittedTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReversibleOutfittedTrackBlock_ = $ReversibleOutfittedTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$OneWayTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ReversiblePoweredOutfittedTrackBlock, $ReversiblePoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$ReversiblePoweredOutfittedTrackBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $OneWayTrackBlock extends $ReversiblePoweredOutfittedTrackBlock {
static readonly "REVERSED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OneWayTrackBlock$Type = ($OneWayTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OneWayTrackBlock_ = $OneWayTrackBlock$Type;
}}
declare module "packages/mods/railcraft/util/container/$AdvancedContainer$Listener" {
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/$ContainerListener"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $AdvancedContainer$Listener extends $ContainerListener {

 "stillValid"(arg0: $Player$Type): boolean
 "startOpen"(arg0: $Player$Type): void
 "stopOpen"(arg0: $Player$Type): void
 "containerChanged"(arg0: $Container$Type): void

(arg0: $Player$Type): boolean
}

export namespace $AdvancedContainer$Listener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedContainer$Listener$Type = ($AdvancedContainer$Listener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedContainer$Listener_ = $AdvancedContainer$Listener$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$TurnoutTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SwitchTrackBlock, $SwitchTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$SwitchTrackBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TurnoutTrackBlock extends $SwitchTrackBlock implements $EntityBlock {
static readonly "MIRRORED": $BooleanProperty
static readonly "SWITCHED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
static readonly "REVERSED": $BooleanProperty
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public static "isMirrored"(arg0: $BlockState$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRailDirection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): $RailShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnoutTrackBlock$Type = ($TurnoutTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurnoutTrackBlock_ = $TurnoutTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/tank/$SteelTankWallBlock" {
import {$BaseTankBlock, $BaseTankBlock$Type} from "packages/mods/railcraft/world/level/block/tank/$BaseTankBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TankBlockEntity, $TankBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/tank/$TankBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SteelTankWallBlock extends $BaseTankBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $TankBlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteelTankWallBlock$Type = ($SteelTankWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteelTankWallBlock_ = $SteelTankWallBlock$Type;
}}
declare module "packages/mods/railcraft/world/module/$BlockModuleProvider" {
import {$Module, $Module$Type} from "packages/mods/railcraft/world/module/$Module"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ModuleProvider, $ModuleProvider$Type} from "packages/mods/railcraft/world/module/$ModuleProvider"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BlockModuleProvider extends $ModuleProvider {

 "blockPos"(): $BlockPos
 "dropItem"(arg0: $ItemStack$Type): void
 "findAdjacentContainers"(arg0: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
 "findAdjacentContainers"(): $ContainerManipulator<(any)>
 "level"(): $Level
 "getModule"<T extends $Module>(arg0: $Class$Type<(T)>): $Optional<(T)>
 "save"(): void
 "syncToClient"(): void
 "isStillValid"(arg0: $Player$Type): boolean
}

export namespace $BlockModuleProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModuleProvider$Type = ($BlockModuleProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModuleProvider_ = $BlockModuleProvider$Type;
}}
declare module "packages/mods/railcraft/world/level/block/post/$Column" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Column extends $Enum<($Column)> implements $StringRepresentable {
static readonly "FULL": $Column
static readonly "TOP": $Column
static readonly "SMALL": $Column
static readonly "PLATFORM": $Column


public static "values"(): ($Column)[]
public static "valueOf"(arg0: string): $Column
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Column$Type = (("small") | ("top") | ("platform") | ("full")) | ($Column);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Column_ = $Column$Type;
}}
declare module "packages/mods/railcraft/world/level/material/$SteamFluid" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $SteamFluid extends $Fluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public static "createFluidType"(): $FluidType
public "getFluidType"(): $FluidType
public "getBucket"(): $Item
public "getHeight"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getOwnHeight"(arg0: $FluidState$Type): float
public "getTickDelay"(arg0: $LevelReader$Type): integer
public "getShape"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
get "fluidType"(): $FluidType
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamFluid$Type = ($SteamFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamFluid_ = $SteamFluid$Type;
}}
declare module "packages/mods/railcraft/world/item/enchantment/$RailcraftDamageEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"

export class $RailcraftDamageEnchantment extends $Enchantment {
 "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Predicate$Type<(any)>, arg5: float, ...arg6: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getDamageBonus"(arg0: integer, arg1: $MobType$Type, arg2: $ItemStack$Type): float
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RailcraftDamageEnchantment$Type = ($RailcraftDamageEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RailcraftDamageEnchantment_ = $RailcraftDamageEnchantment$Type;
}}
declare module "packages/mods/railcraft/world/level/block/steamboiler/$SteamBoilerTankBlock$ConnectionType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SteamBoilerTankBlock$ConnectionType extends $Enum<($SteamBoilerTankBlock$ConnectionType)> implements $StringRepresentable {
static readonly "ALL": $SteamBoilerTankBlock$ConnectionType
static readonly "NONE": $SteamBoilerTankBlock$ConnectionType
static readonly "NORTH_EAST": $SteamBoilerTankBlock$ConnectionType
static readonly "SOUTH_EAST": $SteamBoilerTankBlock$ConnectionType
static readonly "SOUTH_WEST": $SteamBoilerTankBlock$ConnectionType
static readonly "NORTH_WEST": $SteamBoilerTankBlock$ConnectionType
static readonly "NORTH_SOUTH_EAST": $SteamBoilerTankBlock$ConnectionType
static readonly "SOUTH_EAST_WEST": $SteamBoilerTankBlock$ConnectionType
static readonly "NORTH_EAST_WEST": $SteamBoilerTankBlock$ConnectionType
static readonly "NORTH_SOUTH_WEST": $SteamBoilerTankBlock$ConnectionType


public static "values"(): ($SteamBoilerTankBlock$ConnectionType)[]
public static "valueOf"(arg0: string): $SteamBoilerTankBlock$ConnectionType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamBoilerTankBlock$ConnectionType$Type = (("all") | ("south_west") | ("north_east_west") | ("north_east") | ("north_west") | ("north_south_west") | ("south_east") | ("south_east_west") | ("none") | ("north_south_east")) | ($SteamBoilerTankBlock$ConnectionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamBoilerTankBlock$ConnectionType_ = $SteamBoilerTankBlock$ConnectionType$Type;
}}
declare module "packages/mods/railcraft/world/item/$SignalBlockSurveyorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MonitoringSignalEntity, $MonitoringSignalEntity$Type} from "packages/mods/railcraft/api/signal/entity/$MonitoringSignalEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PairingToolItem, $PairingToolItem$Type} from "packages/mods/railcraft/world/item/$PairingToolItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SignalBlockSurveyorItem extends $PairingToolItem<($MonitoringSignalEntity), ($MonitoringSignalEntity)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "tryLinking"<T, T2>(arg0: $MonitoringSignalEntity$Type<(T)>, arg1: $MonitoringSignalEntity$Type<(T2)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalBlockSurveyorItem$Type = ($SignalBlockSurveyorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalBlockSurveyorItem_ = $SignalBlockSurveyorItem$Type;
}}
declare module "packages/mods/railcraft/api/charge/$Charge$ZapEffectProvider" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Charge$ZapEffectProvider {

 "zapEffectPoint"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): void
 "throwSparks"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type, arg4: integer): void
 "zapEffectDeath"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): void
 "zapEffectSurface"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
}

export namespace $Charge$ZapEffectProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Charge$ZapEffectProvider$Type = ($Charge$ZapEffectProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Charge$ZapEffectProvider_ = $Charge$ZapEffectProvider$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$FeedStationBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $FeedStationBlock extends $BaseEntityBlock implements $JeiSearchable {
static readonly "POWERED": $BooleanProperty
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


public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedStationBlock$Type = ($FeedStationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedStationBlock_ = $FeedStationBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$ControlTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ReversiblePoweredOutfittedTrackBlock, $ReversiblePoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$ReversiblePoweredOutfittedTrackBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ControlTrackBlock extends $ReversiblePoweredOutfittedTrackBlock {
static readonly "REVERSED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "getPowerPropagation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlTrackBlock$Type = ($ControlTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlTrackBlock_ = $ControlTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/module/$TankModule" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StandardTank, $StandardTank$Type} from "packages/mods/railcraft/world/level/material/$StandardTank"
import {$TankBlockEntity, $TankBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/tank/$TankBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ContainerModule, $ContainerModule$Type} from "packages/mods/railcraft/world/module/$ContainerModule"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $TankModule extends $ContainerModule<($TankBlockEntity)> {
static readonly "SLOT_INPUT": integer
static readonly "SLOT_PROCESS": integer
static readonly "SLOT_OUTPUT": integer

constructor(arg0: $TankBlockEntity$Type, arg1: $StandardTank$Type)

public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "serverTick"(): void
public "getItemHandler"(): $LazyOptional<($IItemHandler)>
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getTank"(): $StandardTank
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "itemHandler"(): $LazyOptional<($IItemHandler)>
get "tank"(): $StandardTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankModule$Type = ($TankModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankModule_ = $TankModule$Type;
}}
declare module "packages/mods/railcraft/world/level/block/charge/$ZincCarbonBatteryBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DisposableBatteryBlock, $DisposableBatteryBlock$Type} from "packages/mods/railcraft/world/level/block/charge/$DisposableBatteryBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $ZincCarbonBatteryBlock extends $DisposableBatteryBlock {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZincCarbonBatteryBlock$Type = ($ZincCarbonBatteryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZincCarbonBatteryBlock_ = $ZincCarbonBatteryBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$JunctionTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$OutfittedTrackBlock, $OutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$OutfittedTrackBlock"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $JunctionTrackBlock extends $OutfittedTrackBlock {
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "getRailDirection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): $RailShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JunctionTrackBlock$Type = ($JunctionTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JunctionTrackBlock_ = $JunctionTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$SteamOvenBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SteamOvenBlock$Type, $SteamOvenBlock$Type$Type} from "packages/mods/railcraft/world/level/block/$SteamOvenBlock$Type"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$MultiblockBlock, $MultiblockBlock$Type} from "packages/mods/railcraft/world/level/block/$MultiblockBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SteamOvenBlock extends $MultiblockBlock {
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $Property<($SteamOvenBlock$Type)>
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamOvenBlock$Type = ($SteamOvenBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamOvenBlock_ = $SteamOvenBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/steamboiler/$SteamBoilerTankBlock" {
import {$SteamBoilerBlock, $SteamBoilerBlock$Type} from "packages/mods/railcraft/world/level/block/steamboiler/$SteamBoilerBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SteamBoilerTankBlock$ConnectionType, $SteamBoilerTankBlock$ConnectionType$Type} from "packages/mods/railcraft/world/level/block/steamboiler/$SteamBoilerTankBlock$ConnectionType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$SteamBoilerBlockEntity, $SteamBoilerBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/steamboiler/$SteamBoilerBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SteamBoilerTankBlock extends $SteamBoilerBlock {
static readonly "CONNECTION_TYPE": $Property<($SteamBoilerTankBlock$ConnectionType)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $SteamBoilerBlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamBoilerTankBlock$Type = ($SteamBoilerTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamBoilerTankBlock_ = $SteamBoilerTankBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$FueledFireboxBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FueledFireboxBlockItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FueledFireboxBlockItem$Type = ($FueledFireboxBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FueledFireboxBlockItem_ = $FueledFireboxBlockItem$Type;
}}
declare module "packages/mods/railcraft/world/module/$ContainerModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModuleProvider, $ModuleProvider$Type} from "packages/mods/railcraft/world/module/$ModuleProvider"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseModule, $BaseModule$Type} from "packages/mods/railcraft/world/module/$BaseModule"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ForwardingContainer, $ForwardingContainer$Type} from "packages/mods/railcraft/util/container/$ForwardingContainer"

export class $ContainerModule<T extends $ModuleProvider> extends $BaseModule<(T)> implements $ForwardingContainer {


public "container"(): $Container
public "stillValid"(arg0: $Player$Type): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "clearContent"(): void
public "isEmpty"(): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "countItem"(arg0: $Item$Type): integer
public "getHeight"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "asContainer"(): $Container
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "clear"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getSlotLimit"(slot: integer): integer
public "isMutable"(): boolean
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "setChanged"(): void
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public static "tryClear"(arg0: any): void
public "clear"(ingredient: $Ingredient$Type): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "isEmpty"(): boolean
get "empty"(): boolean
get "maxStackSize"(): integer
get "containerSize"(): integer
get "height"(): integer
get "mutable"(): boolean
get "width"(): integer
get "slots"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerModule$Type<T> = ($ContainerModule<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerModule_<T> = $ContainerModule$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/level/block/steamboiler/$SteamBoilerBlock" {
import {$MultiblockBlock, $MultiblockBlock$Type} from "packages/mods/railcraft/world/level/block/$MultiblockBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SteamBoilerBlockEntity, $SteamBoilerBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/steamboiler/$SteamBoilerBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SteamBoilerBlock extends $MultiblockBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $SteamBoilerBlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamBoilerBlock$Type = ($SteamBoilerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamBoilerBlock_ = $SteamBoilerBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$FluidUnloaderBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FluidManipulatorBlockEntity, $FluidManipulatorBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$FluidManipulatorBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidUnloaderBlockEntity extends $FluidManipulatorBlockEntity {
static readonly "STOP_VELOCITY": float
static readonly "PAUSE_DELAY": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getDisplayName"(): $Component
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "getMaxStackSize"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "clearContent"(): void
public static "tryClear"(arg0: any): void
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<(T)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<(T)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<(T)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
get "displayName"(): $Component
get "maxStackSize"(): integer
get "containerSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidUnloaderBlockEntity$Type = ($FluidUnloaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidUnloaderBlockEntity_ = $FluidUnloaderBlockEntity$Type;
}}
declare module "packages/mods/railcraft/world/item/$TrackRelayerCartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CartItem, $CartItem$Type} from "packages/mods/railcraft/world/item/$CartItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackRelayerCartItem extends $CartItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackRelayerCartItem$Type = ($TrackRelayerCartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackRelayerCartItem_ = $TrackRelayerCartItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$FirestoneBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FirestoneBlock extends $Block {
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

public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirestoneBlock$Type = ($FirestoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirestoneBlock_ = $FirestoneBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/tunnelbore/$DiamondTunnelBoreHeadItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$TunnelBoreHeadItem, $TunnelBoreHeadItem$Type} from "packages/mods/railcraft/world/item/tunnelbore/$TunnelBoreHeadItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DiamondTunnelBoreHeadItem extends $TunnelBoreHeadItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getTextureLocation"(): $ResourceLocation
public "getDigModifier"(): double
get "textureLocation"(): $ResourceLocation
get "digModifier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiamondTunnelBoreHeadItem$Type = ($DiamondTunnelBoreHeadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiamondTunnelBoreHeadItem_ = $DiamondTunnelBoreHeadItem$Type;
}}
declare module "packages/mods/railcraft/api/signal/$SignalController" {
import {$SignalAspect, $SignalAspect$Type} from "packages/mods/railcraft/api/signal/$SignalAspect"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SignalReceiverEntity, $SignalReceiverEntity$Type} from "packages/mods/railcraft/api/signal/entity/$SignalReceiverEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SignalNetwork, $SignalNetwork$Type} from "packages/mods/railcraft/api/signal/$SignalNetwork"

export interface $SignalController extends $SignalNetwork<($SignalReceiverEntity)> {

 "blockPos"(): $BlockPos
 "refresh"(): void
 "stream"(): $Stream<($SignalReceiverEntity)>
 "destroy"(): void
 "aspect"(): $SignalAspect
 "isPeer"(arg0: $BlockPos$Type): boolean
 "peerCount"(): integer
 "isLinking"(): boolean
 "peerAt"(arg0: $BlockPos$Type): $Optional<($SignalReceiverEntity)>
 "peers"(): $Collection<($BlockPos)>
 "hasPeers"(): boolean
 "startLinking"(): void
 "stopLinking"(): void
 "addPeer"(arg0: $SignalReceiverEntity$Type): boolean
 "removePeer"(arg0: $BlockPos$Type): boolean
}

export namespace $SignalController {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalController$Type = ($SignalController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalController_ = $SignalController$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/$ContainerBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RailcraftBlockEntity, $RailcraftBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/$RailcraftBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ForwardingContainer, $ForwardingContainer$Type} from "packages/mods/railcraft/util/container/$ForwardingContainer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $ContainerBlockEntity extends $RailcraftBlockEntity implements $ForwardingContainer, $ContainerManipulator<($ModifiableSlotAccessor)> {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "stream"(): $Stream<($ModifiableSlotAccessor)>
public "container"(): $Container
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "stillValid"(arg0: $Player$Type): boolean
public "load"(arg0: $CompoundTag$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "clearContent"(): void
public "isEmpty"(): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "extract"(...arg0: ($ItemStack$Type)[]): $ItemStack
public "extract"(): $ItemStack
public "extract"(arg0: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "extract"(arg0: integer, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: boolean): $ItemStack
public "insert"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "insert"(arg0: $ItemStack$Type): $ItemStack
public "contains"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "contains"(...arg0: ($ItemStack$Type)[]): boolean
public "iterator"(): $Iterator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<($ModifiableSlotAccessor)>
public "findAll"(arg0: $Predicate$Type<($ItemStack$Type)>): $Stream<($ModifiableSlotAccessor)>
public "isFull"(): boolean
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public "countMaxItemStackSize"(): integer
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
public "calcRedstone"(): integer
public "hasEmptySlot"(): boolean
public "canFit"(arg0: $ItemStack$Type): boolean
public "findFirstExtractable"(arg0: $Predicate$Type<($ItemStack$Type)>): $Optional<($ModifiableSlotAccessor)>
public "countItems"(...arg0: ($ItemStack$Type)[]): integer
public "countItems"(arg0: $Predicate$Type<($ItemStack$Type)>): integer
public "countItems"(): integer
public "moveOneItemTo"(arg0: $ContainerManipulator$Type<(any)>): $ItemStack
public "moveOneItemTo"(arg0: $ContainerManipulator$Type<(any)>, arg1: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "moveOneItemStackTo"(arg0: $ContainerManipulator$Type<(any)>, arg1: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "moveOneItemStackTo"(arg0: $ContainerManipulator$Type<(any)>): $ItemStack
public "streamItems"(): $Stream<($ItemStack)>
public "countStacks"(arg0: $Predicate$Type<($ItemStack$Type)>): integer
public "countStacks"(): integer
public "calculateFullness"(): double
public "willAccept"(arg0: $ItemStack$Type): boolean
public "willAcceptAny"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "hasItems"(): boolean
public "hasNoItems"(): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "countItem"(arg0: $Item$Type): integer
public "getHeight"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "asContainer"(): $Container
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "clear"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getSlotLimit"(slot: integer): integer
public "isMutable"(): boolean
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "setChanged"(): void
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "spliterator"(): $Spliterator<($ModifiableSlotAccessor)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public static "tryClear"(arg0: any): void
public "clear"(ingredient: $Ingredient$Type): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "isEmpty"(): boolean
[Symbol.iterator](): IterableIterator<$ModifiableSlotAccessor>;
get "maxStackSize"(): integer
get "containerSize"(): integer
get "full"(): boolean
get "height"(): integer
get "mutable"(): boolean
get "width"(): integer
get "slots"(): integer
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerBlockEntity$Type = ($ContainerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerBlockEntity_ = $ContainerBlockEntity$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$SignalCapacitorBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$SignalBoxBlock, $SignalBoxBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SignalBoxBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SignalCapacitorBoxBlock extends $SignalBoxBlock implements $EntityBlock {
static readonly "CAP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalCapacitorBoxBlock$Type = ($SignalCapacitorBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalCapacitorBoxBlock_ = $SignalCapacitorBoxBlock$Type;
}}
declare module "packages/mods/railcraft/api/item/$MinecartFactory" {
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $MinecartFactory {

 "createMinecart"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double, arg4: $ServerLevel$Type): $AbstractMinecart

(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double, arg4: $ServerLevel$Type): $AbstractMinecart
}

export namespace $MinecartFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartFactory$Type = ($MinecartFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecartFactory_ = $MinecartFactory$Type;
}}
declare module "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ContainerManipulator<T extends $SlotAccessor> extends $Iterable<(T)> {

 "extract"(...arg0: ($ItemStack$Type)[]): $ItemStack
 "extract"(): $ItemStack
 "extract"(arg0: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "extract"(arg0: integer, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: boolean): $ItemStack
 "insert"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "insert"(arg0: $ItemStack$Type): $ItemStack
 "contains"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "contains"(...arg0: ($ItemStack$Type)[]): boolean
 "iterator"(): $Iterator<(T)>
 "stream"(): $Stream<(T)>
 "findAll"(arg0: $Predicate$Type<($ItemStack$Type)>): $Stream<(T)>
 "isFull"(): boolean
 "countMaxItemStackSize"(): integer
 "calcRedstone"(): integer
 "hasEmptySlot"(): boolean
 "canFit"(arg0: $ItemStack$Type): boolean
 "findFirstExtractable"(arg0: $Predicate$Type<($ItemStack$Type)>): $Optional<(T)>
 "countItems"(...arg0: ($ItemStack$Type)[]): integer
 "countItems"(arg0: $Predicate$Type<($ItemStack$Type)>): integer
 "countItems"(): integer
 "moveOneItemTo"(arg0: $ContainerManipulator$Type<(any)>): $ItemStack
 "moveOneItemTo"(arg0: $ContainerManipulator$Type<(any)>, arg1: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "moveOneItemStackTo"(arg0: $ContainerManipulator$Type<(any)>, arg1: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "moveOneItemStackTo"(arg0: $ContainerManipulator$Type<(any)>): $ItemStack
 "streamItems"(): $Stream<($ItemStack)>
 "countStacks"(arg0: $Predicate$Type<($ItemStack$Type)>): integer
 "countStacks"(): integer
 "calculateFullness"(): double
 "willAccept"(arg0: $ItemStack$Type): boolean
 "willAcceptAny"(arg0: $List$Type<($ItemStack$Type)>): boolean
 "hasItems"(): boolean
 "hasNoItems"(): boolean
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$Type<(any)>): void

(...arg0: ($ItemStack$Type)[]): $ItemStack
}

export namespace $ContainerManipulator {
function of<T>(arg0: $Collection$Type<(any)>): $ContainerManipulator<(T)>
function of(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
function of<T>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<(T)>
function of(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
function of(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
function of(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
function empty<T>(): $ContainerManipulator<(T)>
function findAdjacent(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
function findAdjacent(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
function anyOf(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerManipulator$Type<T> = ($ContainerManipulator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerManipulator_<T> = $ContainerManipulator$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$RoutingTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $RoutingTrackBlock extends $PoweredOutfittedTrackBlock implements $EntityBlock {
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoutingTrackBlock$Type = ($RoutingTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoutingTrackBlock_ = $RoutingTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$TrackLayerCartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CartItem, $CartItem$Type} from "packages/mods/railcraft/world/item/$CartItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackLayerCartItem extends $CartItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackLayerCartItem$Type = ($TrackLayerCartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackLayerCartItem_ = $TrackLayerCartItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$DisembarkingTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DisembarkingTrackBlock extends $PoweredOutfittedTrackBlock {
static readonly "MIRRORED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public static "isMirrored"(arg0: $BlockState$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisembarkingTrackBlock$Type = ($DisembarkingTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisembarkingTrackBlock_ = $DisembarkingTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/material/$TankManager" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$StandardTank, $StandardTank$Type} from "packages/mods/railcraft/world/level/material/$StandardTank"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $TankManager implements $IFluidHandler, $INBTSerializable<($ListTag)> {
static readonly "EMPTY": $TankManager
static readonly "TANK_FILTER": $BiFunction<($BlockEntity), ($Direction), (boolean)>

constructor(...arg0: ($StandardTank$Type)[])

public "drain"(arg0: integer, arg1: integer, arg2: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "pull"(arg0: $Collection$Type<($IFluidHandler$Type)>, arg1: integer, arg2: integer): void
public "setCapacity"(arg0: integer, arg1: integer): void
public "add"(arg0: $StandardTank$Type): boolean
public "get"(arg0: integer): $StandardTank
public "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: $IFluidHandler$FluidAction$Type): integer
public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "transfer"(arg0: $Collection$Type<($IFluidHandler$Type)>, arg1: integer, arg2: $BiConsumer$Type<($IFluidHandler$Type), ($IFluidHandler$Type)>): void
public "push"(arg0: $Collection$Type<($IFluidHandler$Type)>, arg1: integer, arg2: integer): void
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTanks"(): integer
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "deserializeNBT"(arg0: $ListTag$Type): void
public "readPacketData"(arg0: $FriendlyByteBuf$Type): void
public "writePacketData"(arg0: $FriendlyByteBuf$Type): void
get "tanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankManager$Type = ($TankManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankManager_ = $TankManager$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$TrainDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TrainDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainDetectorBlock$Type = ($TrainDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrainDetectorBlock_ = $TrainDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$RefinedFirestoneItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FirestoneItem, $FirestoneItem$Type} from "packages/mods/railcraft/world/item/$FirestoneItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$FirestoneItemEntity, $FirestoneItemEntity$Type} from "packages/mods/railcraft/world/entity/$FirestoneItemEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RefinedFirestoneItem extends $FirestoneItem {
static readonly "CHARGES": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: boolean, arg1: $Item$Properties$Type)

public "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $FirestoneItemEntity
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public static "getItemEmpty"(): $ItemStack
public static "getItemCharged"(): $ItemStack
get "itemEmpty"(): $ItemStack
get "itemCharged"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefinedFirestoneItem$Type = ($RefinedFirestoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefinedFirestoneItem_ = $RefinedFirestoneItem$Type;
}}
declare module "packages/mods/railcraft/world/item/crafting/$CrusherRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$CrusherRecipe$CrusherOutput, $CrusherRecipe$CrusherOutput$Type} from "packages/mods/railcraft/world/item/crafting/$CrusherRecipe$CrusherOutput"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CrusherRecipe implements $Recipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $List$Type<($CrusherRecipe$CrusherOutput$Type)>, arg3: integer)

public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getProcessTime"(): integer
public "getProbabilityOutputs"(): $List<($CrusherRecipe$CrusherOutput)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
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
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "id"(): $ResourceLocation
get "processTime"(): integer
get "probabilityOutputs"(): $List<($CrusherRecipe$CrusherOutput)>
get "incomplete"(): boolean
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
export type $CrusherRecipe$Type = ($CrusherRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrusherRecipe_ = $CrusherRecipe$Type;
}}
declare module "packages/mods/railcraft/world/level/block/tank/$BaseTankBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MultiblockBlock, $MultiblockBlock$Type} from "packages/mods/railcraft/world/level/block/$MultiblockBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TankBlockEntity, $TankBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/tank/$TankBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseTankBlock extends $MultiblockBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $TankBlockEntity
public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseTankBlock$Type = ($BaseTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseTankBlock_ = $BaseTankBlock$Type;
}}
declare module "packages/mods/railcraft/api/charge/$ChargeProtectionItem$ZapResult" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ChargeProtectionItem$ZapResult extends $Record {

constructor(stack: $ItemStack$Type, damagePrevented: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "stack"(): $ItemStack
public "damagePrevented"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeProtectionItem$ZapResult$Type = ($ChargeProtectionItem$ZapResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeProtectionItem$ZapResult_ = $ChargeProtectionItem$ZapResult$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$ManipulatorBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$SlotAccessor, $SlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$SlotAccessor"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ManipulatorBlockEntity$RedstoneMode, $ManipulatorBlockEntity$RedstoneMode$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$ManipulatorBlockEntity$RedstoneMode"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ModifiableSlotAccessor, $ModifiableSlotAccessor$Type} from "packages/mods/railcraft/api/container/manipulator/$ModifiableSlotAccessor"
import {$ContainerBlockEntity, $ContainerBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/$ContainerBlockEntity"
import {$AdvancedContainer, $AdvancedContainer$Type} from "packages/mods/railcraft/util/container/$AdvancedContainer"

export class $ManipulatorBlockEntity extends $ContainerBlockEntity implements $MenuProvider {
static readonly "STOP_VELOCITY": float
static readonly "PAUSE_DELAY": integer

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "isPaused"(): boolean
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ManipulatorBlockEntity$Type): void
public "setRedstoneMode"(arg0: $ManipulatorBlockEntity$RedstoneMode$Type): void
public "getRedstoneMode"(): $ManipulatorBlockEntity$RedstoneMode
public "isPowered"(): boolean
public "load"(arg0: $CompoundTag$Type): void
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "getSupportedRedstoneModes"(): $Set<($ManipulatorBlockEntity$RedstoneMode)>
public "isSendCartGateAction"(): boolean
public "isAllowedRedstoneMode"(arg0: $ManipulatorBlockEntity$RedstoneMode$Type): boolean
public "findCart"(): $Optional<($AbstractMinecart)>
public "getCartFilters"(): $AdvancedContainer
public "canHandleCart"(arg0: $AbstractMinecart$Type): boolean
public "isManualMode"(): boolean
public "cartWasSent"(): void
public "getDisplayName"(): $Component
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "setChanged"(): void
public static "of"<T extends $SlotAccessor>(arg0: $Collection$Type<(any)>): $ContainerManipulator<(T)>
public static "of"(arg0: $Container$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"<T extends $SlotAccessor>(...arg0: ($ContainerManipulator$Type<(any)>)[]): $ContainerManipulator<(T)>
public static "of"(arg0: $IItemHandlerModifiable$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "of"(arg0: $IItemHandler$Type): $ContainerManipulator<($SlotAccessor)>
public static "of"(arg0: $WorldlyContainer$Type, arg1: $Direction$Type): $ContainerManipulator<($ModifiableSlotAccessor)>
public static "empty"<T extends $SlotAccessor>(): $ContainerManipulator<(T)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public static "findAdjacent"(arg0: $Level$Type, arg1: $BlockPos$Type): $ContainerManipulator<(any)>
public static "anyOf"(arg0: $Collection$Type<($ItemStack$Type)>): $Predicate<($ItemStack)>
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "paused"(): boolean
set "redstoneMode"(value: $ManipulatorBlockEntity$RedstoneMode$Type)
get "redstoneMode"(): $ManipulatorBlockEntity$RedstoneMode
get "powered"(): boolean
get "supportedRedstoneModes"(): $Set<($ManipulatorBlockEntity$RedstoneMode)>
get "sendCartGateAction"(): boolean
get "cartFilters"(): $AdvancedContainer
get "manualMode"(): boolean
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManipulatorBlockEntity$Type = ($ManipulatorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManipulatorBlockEntity_ = $ManipulatorBlockEntity$Type;
}}
declare module "packages/mods/railcraft/api/charge/$ChargeBlock" {
import {$Charge$Access, $Charge$Access$Type} from "packages/mods/railcraft/api/charge/$Charge$Access"
import {$ChargeBlock$Spec, $ChargeBlock$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$Spec"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ChargeBlock {

 "deregisterNode"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
 "registerNode"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): void
 "getMeterAccess"(arg0: $Charge$Type, arg1: $BlockState$Type, arg2: $ServerLevel$Type, arg3: $BlockPos$Type): $Charge$Access
 "getChargeSpecs"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): $Map<($Charge), ($ChargeBlock$Spec)>
}

export namespace $ChargeBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeBlock$Type = ($ChargeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeBlock_ = $ChargeBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/charge/$ZincSilverBatteryBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DisposableBatteryBlock, $DisposableBatteryBlock$Type} from "packages/mods/railcraft/world/level/block/charge/$DisposableBatteryBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $ZincSilverBatteryBlock extends $DisposableBatteryBlock {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZincSilverBatteryBlock$Type = ($ZincSilverBatteryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZincSilverBatteryBlock_ = $ZincSilverBatteryBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$DualBlockSignalBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DualSignalBlock, $DualSignalBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$DualSignalBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $DualBlockSignalBlock extends $DualSignalBlock implements $JeiSearchable {
static readonly "SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "propertyByDirection": $Map<($Direction), ($BooleanProperty)>
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DualBlockSignalBlock$Type = ($DualBlockSignalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DualBlockSignalBlock_ = $DualBlockSignalBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/post/$PostBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Column, $Column$Type} from "packages/mods/railcraft/world/level/block/post/$Column"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Connection, $Connection$Type} from "packages/mods/railcraft/world/level/block/post/$Connection"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PostBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "TOP_COLUMN_SHAPE": $VoxelShape
static readonly "MIDDLE_COLUMN_SHAPE": $VoxelShape
static readonly "FULL_COLUMN_SHAPE": $VoxelShape
static readonly "PLATFORM_SHAPE": $VoxelShape
static readonly "HORIZONTAL_CONNECTION_SHAPES": $Map<($Direction), ($VoxelShape)>
static readonly "COLUMN": $EnumProperty<($Column)>
static readonly "NORTH": $EnumProperty<($Connection)>
static readonly "SOUTH": $EnumProperty<($Connection)>
static readonly "EAST": $EnumProperty<($Connection)>
static readonly "WEST": $EnumProperty<($Connection)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "propertyByDirection": $Map<($Direction), ($EnumProperty<($Connection)>)>
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

public "getConnection"(arg0: $BlockState$Type, arg1: boolean, arg2: $Direction$Type): $Connection
public "getColumn"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Column
public "getShapeIndex"(arg0: $BlockState$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostBlock$Type = ($PostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostBlock_ = $PostBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$DualDistantSignalBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DualSignalBlock, $DualSignalBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$DualSignalBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"

export class $DualDistantSignalBlock extends $DualSignalBlock implements $JeiSearchable {
static readonly "SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "propertyByDirection": $Map<($Direction), ($BooleanProperty)>
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DualDistantSignalBlock$Type = ($DualDistantSignalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DualDistantSignalBlock_ = $DualDistantSignalBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/tunnelbore/$IronTunnelBoreHeadItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$TunnelBoreHeadItem, $TunnelBoreHeadItem$Type} from "packages/mods/railcraft/world/item/tunnelbore/$TunnelBoreHeadItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IronTunnelBoreHeadItem extends $TunnelBoreHeadItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getTextureLocation"(): $ResourceLocation
public "getDigModifier"(): double
get "textureLocation"(): $ResourceLocation
get "digModifier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IronTunnelBoreHeadItem$Type = ($IronTunnelBoreHeadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IronTunnelBoreHeadItem_ = $IronTunnelBoreHeadItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/manipulator/$FluidManipulatorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ManipulatorBlock, $ManipulatorBlock$Type} from "packages/mods/railcraft/world/level/block/manipulator/$ManipulatorBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FluidManipulatorBlockEntity, $FluidManipulatorBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/manipulator/$FluidManipulatorBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidManipulatorBlock<T extends $FluidManipulatorBlockEntity> extends $ManipulatorBlock<(T)> {
static readonly "POWERED": $BooleanProperty
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


public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidManipulatorBlock$Type<T> = ($FluidManipulatorBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidManipulatorBlock_<T> = $FluidManipulatorBlock$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/item/$SignalTunerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SignalControllerEntity, $SignalControllerEntity$Type} from "packages/mods/railcraft/api/signal/entity/$SignalControllerEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SignalReceiverEntity, $SignalReceiverEntity$Type} from "packages/mods/railcraft/api/signal/entity/$SignalReceiverEntity"
import {$PairingToolItem, $PairingToolItem$Type} from "packages/mods/railcraft/world/item/$PairingToolItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SignalTunerItem extends $PairingToolItem<($SignalControllerEntity), ($SignalReceiverEntity)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalTunerItem$Type = ($SignalTunerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalTunerItem_ = $SignalTunerItem$Type;
}}
declare module "packages/mods/railcraft/world/item/crafting/$BlastFurnaceRecipe" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"

export class $BlastFurnaceRecipe extends $AbstractCookingRecipe {
readonly "ingredient": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: float, arg4: integer, arg5: integer)

public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "getSlagOutput"(): integer
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "slagOutput"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceRecipe$Type = ($BlastFurnaceRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastFurnaceRecipe_ = $BlastFurnaceRecipe$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/steamboiler/$SteamBoilerBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiblockBlockEntity, $MultiblockBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockBlockEntity"
import {$SteamBoilerBlockEntity$Metadata, $SteamBoilerBlockEntity$Metadata$Type} from "packages/mods/railcraft/world/level/block/entity/steamboiler/$SteamBoilerBlockEntity$Metadata"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $SteamBoilerBlockEntity extends $MultiblockBlockEntity<($SteamBoilerBlockEntity), ($SteamBoilerBlockEntity$Metadata)> {
static readonly "TRANSFER_RATE": integer
static readonly "TICKS_LOW": integer
static readonly "TICKS_HIGH": integer
static readonly "STEAM_LOW": integer
static readonly "STEAM_HIGH": integer
static readonly "HEAT_LOW": float
static readonly "HEAT_HIGH": float

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "use"(arg0: $ServerPlayer$Type, arg1: $InteractionHand$Type): $InteractionResult
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $SteamBoilerBlockEntity$Type): void
public "getDisplayName"(): $Component
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamBoilerBlockEntity$Type = ($SteamBoilerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamBoilerBlockEntity_ = $SteamBoilerBlockEntity$Type;
}}
declare module "packages/mods/railcraft/world/item/$TicketItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TicketItem extends $Item {
static readonly "FILTER": $Predicate<($ItemStack)>
static readonly "LINE_LENGTH": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getDestination"(arg0: $ItemStack$Type): string
public static "getOwner"(arg0: $ItemStack$Type): $GameProfile
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setTicketData"(arg0: $ItemStack$Type, arg1: string, arg2: $GameProfile$Type): boolean
public static "copyTicket"(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketItem$Type = ($TicketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketItem_ = $TicketItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/tank/$IronTankValveBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TankBlockEntity, $TankBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/tank/$TankBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TankValveBlock, $TankValveBlock$Type} from "packages/mods/railcraft/world/level/block/tank/$TankValveBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $IronTankValveBlock extends $TankValveBlock {
static readonly "AXIS": $Property<($Direction$Axis)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $TankBlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IronTankValveBlock$Type = ($IronTankValveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IronTankValveBlock_ = $IronTankValveBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$ManipulatorBlockEntity$TransferMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TexturePosition, $TexturePosition$Type} from "packages/mods/railcraft/client/gui/widget/button/$TexturePosition"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ButtonState, $ButtonState$Type} from "packages/mods/railcraft/gui/button/$ButtonState"

export class $ManipulatorBlockEntity$TransferMode extends $Enum<($ManipulatorBlockEntity$TransferMode)> implements $ButtonState<($ManipulatorBlockEntity$TransferMode)> {
static readonly "ALL": $ManipulatorBlockEntity$TransferMode
static readonly "EXCESS": $ManipulatorBlockEntity$TransferMode
static readonly "STOCK": $ManipulatorBlockEntity$TransferMode
static readonly "TRANSFER": $ManipulatorBlockEntity$TransferMode


public static "values"(): ($ManipulatorBlockEntity$TransferMode)[]
public static "valueOf"(arg0: string): $ManipulatorBlockEntity$TransferMode
public "label"(): $Component
public "tooltip"(): $Optional<($Component)>
public "getDescriptionKey"(): string
public "getTranslationKey"(): string
public "texturePosition"(): $TexturePosition
get "descriptionKey"(): string
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManipulatorBlockEntity$TransferMode$Type = (("all") | ("transfer") | ("excess") | ("stock")) | ($ManipulatorBlockEntity$TransferMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManipulatorBlockEntity$TransferMode_ = $ManipulatorBlockEntity$TransferMode$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RailcraftBlockEntity, $RailcraftBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/$RailcraftBlockEntity"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$MultiblockPattern, $MultiblockPattern$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MultiblockPattern$Element, $MultiblockPattern$Element$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern$Element"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MultiblockBlockEntity$UnresolvedMembership, $MultiblockBlockEntity$UnresolvedMembership$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockBlockEntity$UnresolvedMembership"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MultiblockBlockEntity$Membership, $MultiblockBlockEntity$Membership$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockBlockEntity$Membership"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultiblockBlockEntity<T extends $MultiblockBlockEntity<(T), (M)>, M> extends $RailcraftBlockEntity implements $MenuProvider {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Class$Type<(T)>, arg4: $MultiblockPattern$Type<(M)>)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Class$Type<(T)>, arg4: $Collection$Type<($MultiblockPattern$Type<(M)>)>)

public "getMembers"(): $Optional<($Collection<(T)>)>
public "evaluate"(): void
public "use"(arg0: $ServerPlayer$Type, arg1: $InteractionHand$Type): $InteractionResult
public "isMaster"(): boolean
public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "getPatterns"(): $Collection<($MultiblockPattern<(M)>)>
public "resolvePattern"(): $Optional<($Pair<($MultiblockPattern<(M)>), ($Map<($BlockPos), ($MultiblockPattern$Element)>)>)>
public "enqueueEvaluation"(): void
public "streamMembers"(): $Stream<(T)>
public "isFormed"(): boolean
public "getCurrentPattern"(): $Optional<($MultiblockPattern<(M)>)>
public "load"(arg0: $CompoundTag$Type): void
public "getMasterBlockEntity"(): $Optional<(T)>
public "getUnresolvedMembership"(): $Optional<($MultiblockBlockEntity$UnresolvedMembership)>
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "getMembership"(): $Optional<($MultiblockBlockEntity$Membership<(T)>)>
public "getDisplayName"(): $Component
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
get "members"(): $Optional<($Collection<(T)>)>
get "master"(): boolean
get "patterns"(): $Collection<($MultiblockPattern<(M)>)>
get "formed"(): boolean
get "currentPattern"(): $Optional<($MultiblockPattern<(M)>)>
get "masterBlockEntity"(): $Optional<(T)>
get "unresolvedMembership"(): $Optional<($MultiblockBlockEntity$UnresolvedMembership)>
get "membership"(): $Optional<($MultiblockBlockEntity$Membership<(T)>)>
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBlockEntity$Type<T, M> = ($MultiblockBlockEntity<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockBlockEntity_<T, M> = $MultiblockBlockEntity$Type<(T), (M)>;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$DualSignalBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SignalBlock, $SignalBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SignalBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DualSignalBlock extends $SignalBlock {
static readonly "SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "propertyByDirection": $Map<($Direction), ($BooleanProperty)>
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DualSignalBlock$Type = ($DualSignalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DualSignalBlock_ = $DualSignalBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$PoweredRollingMachineBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ChargeBlock, $ChargeBlock$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$JeiSearchable, $JeiSearchable$Type} from "packages/mods/railcraft/integrations/jei/$JeiSearchable"
import {$Charge$Access, $Charge$Access$Type} from "packages/mods/railcraft/api/charge/$Charge$Access"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ChargeBlock$Spec, $ChargeBlock$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$Spec"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PoweredRollingMachineBlock extends $BaseEntityBlock implements $ChargeBlock, $JeiSearchable {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getChargeSpecs"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): $Map<($Charge), ($ChargeBlock$Spec)>
public "jeiDescription"(): $Component
public "deregisterNode"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
public "registerNode"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): void
public "getMeterAccess"(arg0: $Charge$Type, arg1: $BlockState$Type, arg2: $ServerLevel$Type, arg3: $BlockPos$Type): $Charge$Access
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredRollingMachineBlock$Type = ($PoweredRollingMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredRollingMachineBlock_ = $PoweredRollingMachineBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$PlayerDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PlayerDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorBlock$Type = ($PlayerDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDetectorBlock_ = $PlayerDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/api/charge/$ChargeBlock$ConnectType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChargeBlock$ConnectType extends $Enum<($ChargeBlock$ConnectType)> {
static readonly "BLOCK": $ChargeBlock$ConnectType
static readonly "SLAB": $ChargeBlock$ConnectType
static readonly "TRACK": $ChargeBlock$ConnectType
static readonly "WIRE": $ChargeBlock$ConnectType


public static "values"(): ($ChargeBlock$ConnectType)[]
public static "valueOf"(arg0: string): $ChargeBlock$ConnectType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeBlock$ConnectType$Type = (("wire") | ("block") | ("track") | ("slab")) | ($ChargeBlock$ConnectType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeBlock$ConnectType_ = $ChargeBlock$ConnectType$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$CouplerTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CouplerTrackBlockEntity$Mode, $CouplerTrackBlockEntity$Mode$Type} from "packages/mods/railcraft/world/level/block/entity/track/$CouplerTrackBlockEntity$Mode"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CouplerTrackBlock extends $PoweredOutfittedTrackBlock implements $EntityBlock {
static readonly "MODE": $EnumProperty<($CouplerTrackBlockEntity$Mode)>
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public static "getMode"(arg0: $BlockState$Type): $CouplerTrackBlockEntity$Mode
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getPowerPropagation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CouplerTrackBlock$Type = ($CouplerTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CouplerTrackBlock_ = $CouplerTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$TankDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TankDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankDetectorBlock$Type = ($TankDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankDetectorBlock_ = $TankDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$FirestoneItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$FirestoneItemEntity, $FirestoneItemEntity$Type} from "packages/mods/railcraft/world/entity/$FirestoneItemEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FirestoneItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: boolean, arg1: $Item$Properties$Type)

public "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $FirestoneItemEntity
public "spawnsFire"(): boolean
public static "trySpawnFire"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type, arg3: $Entity$Type): boolean
public static "spawnFire"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "createEntityItem"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $FirestoneItemEntity
public "hasCustomEntity"(arg0: $ItemStack$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirestoneItem$Type = ($FirestoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirestoneItem_ = $FirestoneItem$Type;
}}
declare module "packages/mods/railcraft/world/item/$LocomotiveItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Filter, $Filter$Type} from "packages/mods/railcraft/api/item/$Filter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CartItem, $CartItem$Type} from "packages/mods/railcraft/world/item/$CartItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$MinecartFactory, $MinecartFactory$Type} from "packages/mods/railcraft/api/item/$MinecartFactory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LocomotiveItem extends $CartItem implements $Filter {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $MinecartFactory$Type, arg1: $DyeColor$Type, arg2: $DyeColor$Type, arg3: $Item$Properties$Type)

public "matches"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "getOwner"(arg0: $ItemStack$Type): $GameProfile
public static "setItemWhistleData"(arg0: $ItemStack$Type, arg1: float): void
public static "getWhistlePitch"(arg0: $ItemStack$Type): float
public static "setOwnerData"(arg0: $ItemStack$Type, arg1: $GameProfile$Type): void
public static "getPrimaryColor"(arg0: $ItemStack$Type): $DyeColor
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setItemColorData"(arg0: $ItemStack$Type, arg1: $DyeColor$Type, arg2: $DyeColor$Type): void
public static "getSecondaryColor"(arg0: $ItemStack$Type): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocomotiveItem$Type = ($LocomotiveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocomotiveItem_ = $LocomotiveItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$MultiblockBlock" {
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
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $MultiblockBlock extends $BaseEntityBlock {
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBlock$Type = ($MultiblockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockBlock_ = $MultiblockBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/track/$CouplerTrackBlockEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CouplerTrackBlockEntity extends $BlockEntity {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CouplerTrackBlockEntity$Type = ($CouplerTrackBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CouplerTrackBlockEntity_ = $CouplerTrackBlockEntity$Type;
}}
declare module "packages/mods/railcraft/api/track/$ArrowDirection" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ArrowDirection extends $Enum<($ArrowDirection)> implements $StringRepresentable {
static readonly "NORTH": $ArrowDirection
static readonly "SOUTH": $ArrowDirection
static readonly "EAST": $ArrowDirection
static readonly "WEST": $ArrowDirection
static readonly "NORTH_SOUTH": $ArrowDirection
static readonly "EAST_WEST": $ArrowDirection


public static "values"(): ($ArrowDirection)[]
public static "valueOf"(arg0: string): $ArrowDirection
public "getSerializedName"(): string
public static "fromHorizontalDirection"(arg0: $Direction$Type): $ArrowDirection
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrowDirection$Type = (("east") | ("east_west") | ("south") | ("north") | ("west") | ("north_south")) | ($ArrowDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrowDirection_ = $ArrowDirection$Type;
}}
declare module "packages/mods/railcraft/world/item/crafting/$CrusherRecipe$CrusherOutput" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CrusherRecipe$CrusherOutput extends $Record {

constructor(output: $Ingredient$Type, quantity: integer, probability: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "output"(): $Ingredient
public "quantity"(): integer
public "probability"(): double
public "getOutput"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrusherRecipe$CrusherOutput$Type = ($CrusherRecipe$CrusherOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrusherRecipe$CrusherOutput_ = $CrusherRecipe$CrusherOutput$Type;
}}
declare module "packages/mods/railcraft/world/item/crafting/$RollingRecipe$Serializer" {
import {$RollingRecipe, $RollingRecipe$Type} from "packages/mods/railcraft/world/item/crafting/$RollingRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RollingRecipe$Serializer implements $RecipeSerializer<($RollingRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RollingRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RollingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RollingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RollingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollingRecipe$Serializer$Type = ($RollingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollingRecipe$Serializer_ = $RollingRecipe$Serializer$Type;
}}
declare module "packages/mods/railcraft/api/charge/$Charge$DamageOrigin" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Charge$DamageOrigin extends $Enum<($Charge$DamageOrigin)> {
static readonly "BLOCK": $Charge$DamageOrigin
static readonly "TRACK": $Charge$DamageOrigin


public static "values"(): ($Charge$DamageOrigin)[]
public static "valueOf"(arg0: string): $Charge$DamageOrigin
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Charge$DamageOrigin$Type = (("block") | ("track")) | ($Charge$DamageOrigin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Charge$DamageOrigin_ = $Charge$DamageOrigin$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$RitualBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $RitualBlock extends $BaseEntityBlock {
static readonly "CRACKED": $BooleanProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualBlock$Type = ($RitualBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualBlock_ = $RitualBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern$Element" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MultiblockPattern$Element extends $Record {

constructor(relativePos: $BlockPos$Type, marker: character)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "marker"(): character
public "relativePos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPattern$Element$Type = ($MultiblockPattern$Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPattern$Element_ = $MultiblockPattern$Element$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern$Builder" {
import {$CharList, $CharList$Type} from "packages/it/unimi/dsi/fastutil/chars/$CharList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$BlockPredicate"
import {$MultiblockPattern, $MultiblockPattern$Type} from "packages/mods/railcraft/world/level/block/entity/multiblock/$MultiblockPattern"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $MultiblockPattern$Builder<T> {


public "metadata"(arg0: T): $MultiblockPattern$Builder<(T)>
public "layer"(arg0: $List$Type<($CharList$Type)>): $MultiblockPattern$Builder<(T)>
public "build"(): $MultiblockPattern<(T)>
public "pattern"(arg0: $Collection$Type<($List$Type<($CharList$Type)>)>): $MultiblockPattern$Builder<(T)>
public "predicate"(arg0: character, arg1: $BlockPredicate$Type): $MultiblockPattern$Builder<(T)>
public "entityCheckBounds"(arg0: $AABB$Type): $MultiblockPattern$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPattern$Builder$Type<T> = ($MultiblockPattern$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPattern$Builder_<T> = $MultiblockPattern$Builder$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/level/block/$WaterTankSiding" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$MultiblockBlock, $MultiblockBlock$Type} from "packages/mods/railcraft/world/level/block/$MultiblockBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WaterTankSiding extends $MultiblockBlock {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterTankSiding$Type = ($WaterTankSiding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterTankSiding_ = $WaterTankSiding$Type;
}}
declare module "packages/mods/railcraft/world/item/crafting/$BlastFurnaceRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$BlastFurnaceRecipe, $BlastFurnaceRecipe$Type} from "packages/mods/railcraft/world/item/crafting/$BlastFurnaceRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BlastFurnaceRecipe$Serializer implements $RecipeSerializer<($BlastFurnaceRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BlastFurnaceRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BlastFurnaceRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BlastFurnaceRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BlastFurnaceRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceRecipe$Serializer$Type = ($BlastFurnaceRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastFurnaceRecipe$Serializer_ = $BlastFurnaceRecipe$Serializer$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/steamboiler/$SteamBoilerBlockEntity$Metadata" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $SteamBoilerBlockEntity$Metadata extends $Record {

constructor(tanks: integer, ticksPerCycle: integer, maxTemperature: float, steamCapacityPerTank: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "tanks"(): integer
public "ticksPerCycle"(): integer
public "steamCapacityPerTank"(): integer
public "maxTemperature"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamBoilerBlockEntity$Metadata$Type = ($SteamBoilerBlockEntity$Metadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamBoilerBlockEntity$Metadata_ = $SteamBoilerBlockEntity$Metadata$Type;
}}
declare module "packages/mods/railcraft/world/item/crafting/$RollingRecipe" {
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
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $RollingRecipe implements $Recipe<($CraftingContainer)> {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: integer)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getHeight"(): integer
public "getWidth"(): integer
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getProcessTime"(): integer
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
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
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "id"(): $ResourceLocation
get "processTime"(): integer
get "incomplete"(): boolean
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
export type $RollingRecipe$Type = ($RollingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollingRecipe_ = $RollingRecipe$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$SignalSequencerBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SelfAttachableSignalBoxBlock, $SelfAttachableSignalBoxBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SelfAttachableSignalBoxBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SignalSequencerBoxBlock extends $SelfAttachableSignalBoxBlock implements $EntityBlock {
static readonly "CAP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalSequencerBoxBlock$Type = ($SignalSequencerBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalSequencerBoxBlock_ = $SignalSequencerBoxBlock$Type;
}}
declare module "packages/mods/railcraft/gui/button/$ButtonState" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TexturePosition, $TexturePosition$Type} from "packages/mods/railcraft/client/gui/widget/button/$TexturePosition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $ButtonState<T extends $ButtonState<(T)>> {

 "next"(): T
 "label"(): $Component
 "tooltip"(): $Optional<($Component)>
 "texturePosition"(): $TexturePosition
}

export namespace $ButtonState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonState$Type<T> = ($ButtonState<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonState_<T> = $ButtonState$Type<(T)>;
}}
declare module "packages/mods/railcraft/world/item/tunnelbore/$SteelTunnelBoreHeadItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$TunnelBoreHeadItem, $TunnelBoreHeadItem$Type} from "packages/mods/railcraft/world/item/tunnelbore/$TunnelBoreHeadItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SteelTunnelBoreHeadItem extends $TunnelBoreHeadItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getTextureLocation"(): $ResourceLocation
public "getDigModifier"(): double
get "textureLocation"(): $ResourceLocation
get "digModifier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteelTunnelBoreHeadItem$Type = ($SteelTunnelBoreHeadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteelTunnelBoreHeadItem_ = $SteelTunnelBoreHeadItem$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$SignalInterlockBoxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SelfAttachableSignalBoxBlock, $SelfAttachableSignalBoxBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SelfAttachableSignalBoxBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SignalInterlockBoxBlock extends $SelfAttachableSignalBoxBlock implements $EntityBlock {
static readonly "CAP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalInterlockBoxBlock$Type = ($SignalInterlockBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalInterlockBoxBlock_ = $SignalInterlockBoxBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/$GogglesItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$GogglesItem$Aura, $GogglesItem$Aura$Type} from "packages/mods/railcraft/world/item/$GogglesItem$Aura"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GogglesItem extends $ArmorItem {
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

constructor(arg0: $Item$Properties$Type)

public static "incrementAura"(arg0: $ItemStack$Type): $GogglesItem$Aura
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getAura"(arg0: $ItemStack$Type): $GogglesItem$Aura
public static "isGoggleAuraActive"(arg0: $GogglesItem$Aura$Type): boolean
public static "changeAuraByKey"(arg0: $LocalPlayer$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GogglesItem$Type = ($GogglesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GogglesItem_ = $GogglesItem$Type;
}}
declare module "packages/mods/railcraft/api/item/$Filter" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $Filter {

 "matches"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}

export namespace $Filter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Filter$Type = ($Filter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Filter_ = $Filter$Type;
}}
declare module "packages/mods/railcraft/world/level/block/charge/$NickelZincBatteryBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BatteryBlock, $BatteryBlock$Type} from "packages/mods/railcraft/world/level/block/charge/$BatteryBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $NickelZincBatteryBlock extends $BatteryBlock {
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

public "jeiDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NickelZincBatteryBlock$Type = ($NickelZincBatteryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NickelZincBatteryBlock_ = $NickelZincBatteryBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$SteamTurbineBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ChargeBlock, $ChargeBlock$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock"
import {$SteamTurbineBlock$Type, $SteamTurbineBlock$Type$Type} from "packages/mods/railcraft/world/level/block/$SteamTurbineBlock$Type"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$MultiblockBlock, $MultiblockBlock$Type} from "packages/mods/railcraft/world/level/block/$MultiblockBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Charge$Access, $Charge$Access$Type} from "packages/mods/railcraft/api/charge/$Charge$Access"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ChargeBlock$Spec, $ChargeBlock$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$Spec"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SteamTurbineBlock extends $MultiblockBlock implements $ChargeBlock {
static readonly "TYPE": $Property<($SteamTurbineBlock$Type)>
static readonly "ROTATED": $Property<(boolean)>
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

public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getChargeSpecs"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): $Map<($Charge), ($ChargeBlock$Spec)>
public "deregisterNode"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
public "registerNode"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): void
public "getMeterAccess"(arg0: $Charge$Type, arg1: $BlockState$Type, arg2: $ServerLevel$Type, arg3: $BlockPos$Type): $Charge$Access
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamTurbineBlock$Type = ($SteamTurbineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamTurbineBlock_ = $SteamTurbineBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$EmbarkingTrackBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EmbarkingTrackBlock extends $PoweredOutfittedTrackBlock {
static readonly "TELEPORT_PARTICLES": short
static readonly "MIN_RADIUS": integer
static readonly "MAX_RADIUS": integer
static readonly "excludedEntities": $Set<($EntityType<(any)>)>
static readonly "RADIUS": $IntegerProperty
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public static "setRadius"(arg0: $BlockState$Type, arg1: integer): $BlockState
public static "getRadius"(arg0: $BlockState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmbarkingTrackBlock$Type = ($EmbarkingTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmbarkingTrackBlock_ = $EmbarkingTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$CrushedObsidian" {
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CrushedObsidian extends $Block {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrushedObsidian$Type = ($CrushedObsidian);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrushedObsidian_ = $CrushedObsidian$Type;
}}
declare module "packages/mods/railcraft/world/level/block/signal/$SingleSignalBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SignalBlock, $SignalBlock$Type} from "packages/mods/railcraft/world/level/block/signal/$SignalBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SingleSignalBlock extends $SignalBlock {
static readonly "DOWN": $BooleanProperty
static readonly "SHAPE": $VoxelShape
static readonly "POST_SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "propertyByDirection": $Map<($Direction), ($BooleanProperty)>
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleSignalBlock$Type = ($SingleSignalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleSignalBlock_ = $SingleSignalBlock$Type;
}}
declare module "packages/mods/railcraft/api/signal/$SignalReceiver" {
import {$SignalAspect, $SignalAspect$Type} from "packages/mods/railcraft/api/signal/$SignalAspect"
import {$SignalController, $SignalController$Type} from "packages/mods/railcraft/api/signal/$SignalController"

export interface $SignalReceiver {

 "refresh"(): void
 "destroy"(): void
 "receiveSignalAspect"(arg0: $SignalController$Type, arg1: $SignalAspect$Type): void
 "linked"(arg0: $SignalController$Type): void
 "unlinked"(arg0: $SignalController$Type): void
}

export namespace $SignalReceiver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalReceiver$Type = ($SignalReceiver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalReceiver_ = $SignalReceiver$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$GatedTrackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ReversiblePoweredOutfittedTrackBlock, $ReversiblePoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$ReversiblePoweredOutfittedTrackBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $GatedTrackBlock extends $ReversiblePoweredOutfittedTrackBlock {
static readonly "OPEN": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
static readonly "ONE_WAY": $BooleanProperty
static readonly "REVERSED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public static "isOpen"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public static "isOneWay"(arg0: $BlockState$Type): boolean
public "getPowerPropagation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "crowbarWhack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatedTrackBlock$Type = ($GatedTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatedTrackBlock_ = $GatedTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/crafting/$CokeOvenRecipe" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"

export class $CokeOvenRecipe extends $AbstractCookingRecipe {
readonly "ingredient": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: float, arg4: integer, arg5: integer)

public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "getCreosote"(): $FluidStack
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "creosote"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CokeOvenRecipe$Type = ($CokeOvenRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CokeOvenRecipe_ = $CokeOvenRecipe$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$ThrottleTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Locomotive$Speed, $Locomotive$Speed$Type} from "packages/mods/railcraft/world/entity/vehicle/locomotive/$Locomotive$Speed"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ThrottleTrackBlock extends $PoweredOutfittedTrackBlock {
static readonly "LOCOMOTIVE_SPEED": $Property<($Locomotive$Speed)>
static readonly "REVERSE": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public static "isReverse"(arg0: $BlockState$Type): boolean
public static "getSpeedMode"(arg0: $BlockState$Type): $Locomotive$Speed
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThrottleTrackBlock$Type = ($ThrottleTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThrottleTrackBlock_ = $ThrottleTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/tank/$TankGaugeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractStrengthenedGlassBlock, $AbstractStrengthenedGlassBlock$Type} from "packages/mods/railcraft/world/level/block/$AbstractStrengthenedGlassBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractStrengthenedGlassBlock$Type, $AbstractStrengthenedGlassBlock$Type$Type} from "packages/mods/railcraft/world/level/block/$AbstractStrengthenedGlassBlock$Type"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TankGaugeBlock extends $AbstractStrengthenedGlassBlock implements $EntityBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "TYPE": $Property<($AbstractStrengthenedGlassBlock$Type)>
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

public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankGaugeBlock$Type = ($TankGaugeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankGaugeBlock_ = $TankGaugeBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/$RailcraftBlockEntity" {
import {$Module, $Module$Type} from "packages/mods/railcraft/world/module/$Module"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ContainerManipulator, $ContainerManipulator$Type} from "packages/mods/railcraft/api/container/manipulator/$ContainerManipulator"
import {$BlockEntityLike, $BlockEntityLike$Type} from "packages/mods/railcraft/api/core/$BlockEntityLike"
import {$Ownable, $Ownable$Type} from "packages/mods/railcraft/api/core/$Ownable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NetworkSerializable, $NetworkSerializable$Type} from "packages/mods/railcraft/api/core/$NetworkSerializable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockModuleProvider, $BlockModuleProvider$Type} from "packages/mods/railcraft/world/module/$BlockModuleProvider"

export class $RailcraftBlockEntity extends $BlockEntity implements $NetworkSerializable, $Ownable, $BlockEntityLike, $BlockModuleProvider {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "level"(): $Level
public "getY"(): integer
public "getModule"<T extends $Module>(arg0: $Class$Type<(T)>): $Optional<(T)>
public "save"(): void
public "getOwner"(): $Optional<($GameProfile)>
public "setOwner"(arg0: $GameProfile$Type): void
public "syncToClient"(): void
public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "getCustomName"(): $Component
public "getX"(): integer
public "getZ"(): integer
public "hasCustomName"(): boolean
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "blockPos"(): $BlockPos
public "getName"(): $Component
public "getDisplayName"(): $Component
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "asBlockEntity"(): $BlockEntity
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "isOwner"(arg0: $GameProfile$Type): boolean
public "isOwnerOrOperator"(arg0: $GameProfile$Type): boolean
public "isStillValid"(arg0: $Player$Type): boolean
public static "isStillValid"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "getOwnerOrThrow"(): $GameProfile
public "dropItem"(arg0: $ItemStack$Type): void
public "findAdjacentContainers"(arg0: $Predicate$Type<($BlockEntity$Type)>): $ContainerManipulator<(any)>
public "findAdjacentContainers"(): $ContainerManipulator<(any)>
get "y"(): integer
get "owner"(): $Optional<($GameProfile)>
set "owner"(value: $GameProfile$Type)
get "customName"(): $Component
get "x"(): integer
get "z"(): integer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "name"(): $Component
get "displayName"(): $Component
get "updateTag"(): $CompoundTag
get "ownerOrThrow"(): $GameProfile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RailcraftBlockEntity$Type = ($RailcraftBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RailcraftBlockEntity_ = $RailcraftBlockEntity$Type;
}}
declare module "packages/mods/railcraft/util/container/$ForwardingContainer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export interface $ForwardingContainer extends $Container {

 "container"(): $Container
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "clearContent"(): void
 "isEmpty"(): boolean
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
 "getMaxStackSize"(): integer
 "startOpen"(arg0: $Player$Type): void
 "stillValid"(arg0: $Player$Type): boolean
 "stopOpen"(arg0: $Player$Type): void
 "setItem"(arg0: integer, arg1: $ItemStack$Type): void
 "setChanged"(): void
 "getContainerSize"(): integer
 "getItem"(arg0: integer): $ItemStack
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $Container
 "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "countItem"(arg0: $Item$Type): integer
 "getHeight"(): integer
 "asContainer"(): $Container
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "clear"(): void
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "getSlotLimit"(slot: integer): integer
 "isMutable"(): boolean
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "setChanged"(): void
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "clear"(ingredient: $Ingredient$Type): void
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "count"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "isEmpty"(): boolean
}

export namespace $ForwardingContainer {
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingContainer$Type = ($ForwardingContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingContainer_ = $ForwardingContainer$Type;
}}
declare module "packages/mods/railcraft/api/charge/$ChargeCartStorage" {
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ChargeCartStorage extends $IEnergyStorage {

 "tick"(arg0: $AbstractMinecart$Type): void
 "getDraw"(): double
 "getLosses"(): double
 "tickOnTrack"(arg0: $AbstractMinecart$Type, arg1: $BlockPos$Type): void
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "canReceive"(): boolean
 "getMaxEnergyStored"(): integer
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "getEnergyStored"(): integer
 "canExtract"(): boolean
}

export namespace $ChargeCartStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeCartStorage$Type = ($ChargeCartStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeCartStorage_ = $ChargeCartStorage$Type;
}}
declare module "packages/mods/railcraft/world/item/$TrackUndercutterCartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CartItem, $CartItem$Type} from "packages/mods/railcraft/world/item/$CartItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackUndercutterCartItem extends $CartItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackUndercutterCartItem$Type = ($TrackUndercutterCartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackUndercutterCartItem_ = $TrackUndercutterCartItem$Type;
}}
declare module "packages/mods/railcraft/integrations/jei/$JeiSearchable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $JeiSearchable {

 "jeiDescription"(): $Component

(): $Component
}

export namespace $JeiSearchable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JeiSearchable$Type = ($JeiSearchable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JeiSearchable_ = $JeiSearchable$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/$StrapIronTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$TrackBlock, $TrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/$TrackBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"

export class $StrapIronTrackBlock extends $TrackBlock {
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrapIronTrackBlock$Type = ($StrapIronTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StrapIronTrackBlock_ = $StrapIronTrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$StrengthenedGlassBlock" {
import {$AbstractStrengthenedGlassBlock, $AbstractStrengthenedGlassBlock$Type} from "packages/mods/railcraft/world/level/block/$AbstractStrengthenedGlassBlock"
import {$AbstractStrengthenedGlassBlock$Type, $AbstractStrengthenedGlassBlock$Type$Type} from "packages/mods/railcraft/world/level/block/$AbstractStrengthenedGlassBlock$Type"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $StrengthenedGlassBlock extends $AbstractStrengthenedGlassBlock {
static readonly "TYPE": $Property<($AbstractStrengthenedGlassBlock$Type)>
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrengthenedGlassBlock$Type = ($StrengthenedGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StrengthenedGlassBlock_ = $StrengthenedGlassBlock$Type;
}}
declare module "packages/mods/railcraft/world/item/crafting/$CokeOvenRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$CokeOvenRecipe, $CokeOvenRecipe$Type} from "packages/mods/railcraft/world/item/crafting/$CokeOvenRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CokeOvenRecipe$Serializer implements $RecipeSerializer<($CokeOvenRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CokeOvenRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CokeOvenRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CokeOvenRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CokeOvenRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CokeOvenRecipe$Serializer$Type = ($CokeOvenRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CokeOvenRecipe$Serializer_ = $CokeOvenRecipe$Serializer$Type;
}}
declare module "packages/mods/railcraft/world/effect/$CreosoteEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $CreosoteEffect extends $MobEffect {


public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreosoteEffect$Type = ($CreosoteEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreosoteEffect_ = $CreosoteEffect$Type;
}}
declare module "packages/mods/railcraft/world/level/block/$SteamTurbineBlock$Type" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SteamTurbineBlock$Type extends $Enum<($SteamTurbineBlock$Type)> implements $StringRepresentable {
static readonly "TOP_LEFT": $SteamTurbineBlock$Type
static readonly "TOP_RIGHT": $SteamTurbineBlock$Type
static readonly "BOTTOM_LEFT": $SteamTurbineBlock$Type
static readonly "BOTTOM_RIGHT": $SteamTurbineBlock$Type
static readonly "WINDOW": $SteamTurbineBlock$Type
static readonly "NONE": $SteamTurbineBlock$Type


public "toString"(): string
public static "values"(): ($SteamTurbineBlock$Type)[]
public static "valueOf"(arg0: string): $SteamTurbineBlock$Type
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamTurbineBlock$Type$Type = (("top_right") | ("top_left") | ("bottom_right") | ("bottom_left") | ("window") | ("none")) | ($SteamTurbineBlock$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteamTurbineBlock$Type_ = $SteamTurbineBlock$Type$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/$TrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ChargeBlock, $ChargeBlock$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock"
import {$TypedTrack, $TypedTrack$Type} from "packages/mods/railcraft/api/track/$TypedTrack"
import {$BaseRailBlock, $BaseRailBlock$Type} from "packages/net/minecraft/world/level/block/$BaseRailBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$TrackType, $TrackType$Type} from "packages/mods/railcraft/api/track/$TrackType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpikeMaulTarget, $SpikeMaulTarget$Type} from "packages/mods/railcraft/api/item/$SpikeMaulTarget"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$Charge$Access, $Charge$Access$Type} from "packages/mods/railcraft/api/charge/$Charge$Access"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Charge, $Charge$Type} from "packages/mods/railcraft/api/charge/$Charge"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ChargeBlock$Spec, $ChargeBlock$Spec$Type} from "packages/mods/railcraft/api/charge/$ChargeBlock$Spec"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackBlock extends $BaseRailBlock implements $TypedTrack, $ChargeBlock, $SpikeMaulTarget {
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "getTrackType"(): $TrackType
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public static "getRailShapeRaw"(arg0: $BlockState$Type): $RailShape
public "getRailMaxSpeed"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): float
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "canMakeSlopes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getShapeProperty"(): $Property<($RailShape)>
public "getRailDirection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): $RailShape
public "updateDir"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): $BlockState
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getMaxSupportedDistance"(): integer
public "getSpikeMaulVariants"(): $List<(any)>
public "getChargeSpecs"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): $Map<($Charge), ($ChargeBlock$Spec)>
public "deregisterNode"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
public "registerNode"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): void
public "getMeterAccess"(arg0: $Charge$Type, arg1: $BlockState$Type, arg2: $ServerLevel$Type, arg3: $BlockPos$Type): $Charge$Access
get "trackType"(): $TrackType
get "shapeProperty"(): $Property<($RailShape)>
get "maxSupportedDistance"(): integer
get "spikeMaulVariants"(): $List<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBlock$Type = ($TrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackBlock_ = $TrackBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/track/outfitted/$WhistleTrackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$PoweredOutfittedTrackBlock, $PoweredOutfittedTrackBlock$Type} from "packages/mods/railcraft/world/level/block/track/outfitted/$PoweredOutfittedTrackBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WhistleTrackBlock extends $PoweredOutfittedTrackBlock {
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($RailShape)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhistleTrackBlock$Type = ($WhistleTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhistleTrackBlock_ = $WhistleTrackBlock$Type;
}}
declare module "packages/mods/railcraft/api/signal/entity/$SignalReceiverEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SignalEntity, $SignalEntity$Type} from "packages/mods/railcraft/api/signal/entity/$SignalEntity"
import {$SignalReceiver, $SignalReceiver$Type} from "packages/mods/railcraft/api/signal/$SignalReceiver"

export interface $SignalReceiverEntity extends $SignalEntity {

 "getSignalReceiver"(): $SignalReceiver
 "setCustomName"(arg0: $Component$Type): void
 "asBlockEntity"(): $BlockEntity
 "getCustomName"(): $Component
 "hasCustomName"(): boolean
 "getName"(): $Component
 "getDisplayName"(): $Component
}

export namespace $SignalReceiverEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalReceiverEntity$Type = ($SignalReceiverEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalReceiverEntity_ = $SignalReceiverEntity$Type;
}}
declare module "packages/mods/railcraft/api/charge/$Charge" {
import {$Charge$Provider, $Charge$Provider$Type} from "packages/mods/railcraft/api/charge/$Charge$Provider"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Charge$Network, $Charge$Network$Type} from "packages/mods/railcraft/api/charge/$Charge$Network"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Charge$ZapEffectProvider, $Charge$ZapEffectProvider$Type} from "packages/mods/railcraft/api/charge/$Charge$ZapEffectProvider"

export class $Charge extends $Enum<($Charge)> implements $StringRepresentable {
static readonly "distribution": $Charge


public "toString"(): string
public static "values"(): ($Charge)[]
public static "valueOf"(arg0: string): $Charge
public "network"(arg0: $ServerLevel$Type): $Charge$Network
public static "_setZapEffectProvider"(arg0: $Charge$ZapEffectProvider$Type): void
public "_setProvider"(arg0: $Charge$Provider$Type): void
public "getSerializedName"(): string
public static "zapEffectProvider"(): $Charge$ZapEffectProvider
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Charge$Type = (("distribution")) | ($Charge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Charge_ = $Charge$Type;
}}
declare module "packages/mods/railcraft/world/item/$TrackKitItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$TrackKitItem$Properties, $TrackKitItem$Properties$Type} from "packages/mods/railcraft/world/item/$TrackKitItem$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackKitItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $TrackKitItem$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackKitItem$Type = ($TrackKitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackKitItem_ = $TrackKitItem$Type;
}}
declare module "packages/mods/railcraft/world/module/$ModuleProvider" {
import {$Module, $Module$Type} from "packages/mods/railcraft/world/module/$Module"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ModuleProvider {

 "level"(): $Level
 "getModule"<T extends $Module>(arg0: $Class$Type<(T)>): $Optional<(T)>
 "save"(): void
 "syncToClient"(): void
 "dropItem"(arg0: $ItemStack$Type): void
 "isStillValid"(arg0: $Player$Type): boolean
}

export namespace $ModuleProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleProvider$Type = ($ModuleProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleProvider_ = $ModuleProvider$Type;
}}
declare module "packages/mods/railcraft/world/level/block/detector/$AnyDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DetectorBlock, $DetectorBlock$Type} from "packages/mods/railcraft/world/level/block/detector/$DetectorBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AnyDetectorBlock extends $DetectorBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnyDetectorBlock$Type = ($AnyDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnyDetectorBlock_ = $AnyDetectorBlock$Type;
}}
declare module "packages/mods/railcraft/world/level/block/tank/$SteelTankValveBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TankBlockEntity, $TankBlockEntity$Type} from "packages/mods/railcraft/world/level/block/entity/tank/$TankBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TankValveBlock, $TankValveBlock$Type} from "packages/mods/railcraft/world/level/block/tank/$TankValveBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SteelTankValveBlock extends $TankValveBlock {
static readonly "AXIS": $Property<($Direction$Axis)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $TankBlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteelTankValveBlock$Type = ($SteelTankValveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteelTankValveBlock_ = $SteelTankValveBlock$Type;
}}
declare module "packages/mods/railcraft/api/signal/$SignalAspect" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $SignalAspect extends $Enum<($SignalAspect)> implements $StringRepresentable {
static readonly "GREEN": $SignalAspect
static readonly "BLINK_YELLOW": $SignalAspect
static readonly "YELLOW": $SignalAspect
static readonly "BLINK_RED": $SignalAspect
static readonly "RED": $SignalAspect
static readonly "OFF": $SignalAspect


public static "values"(): ($SignalAspect)[]
public static "valueOf"(arg0: string): $SignalAspect
public "next"(): $SignalAspect
public "previous"(): $SignalAspect
public "getDisplayName"(): $MutableComponent
public "color"(): integer
public static "fromName"(arg0: string): $Optional<($SignalAspect)>
public "getSerializedName"(): string
public "getBlockLight"(): integer
public "getDisplayNameWithColor"(): $MutableComponent
public "getLampLight"(): integer
public static "getBlinkState"(): boolean
public "isOffState"(): boolean
public "isBlinkAspect"(): boolean
public "getDisplayAspect"(): $SignalAspect
public static "tickBlinkState"(): void
public static "mostRestrictive"(arg0: $SignalAspect$Type, arg1: $SignalAspect$Type): $SignalAspect
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "displayName"(): $MutableComponent
get "serializedName"(): string
get "blockLight"(): integer
get "displayNameWithColor"(): $MutableComponent
get "lampLight"(): integer
get "blinkState"(): boolean
get "offState"(): boolean
get "blinkAspect"(): boolean
get "displayAspect"(): $SignalAspect
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalAspect$Type = (("red") | ("green") | ("yellow") | ("blink_yellow") | ("blink_red") | ("off")) | ($SignalAspect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignalAspect_ = $SignalAspect$Type;
}}
declare module "packages/mods/railcraft/world/level/block/entity/manipulator/$ManipulatorBlockEntity$RedstoneMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TexturePosition, $TexturePosition$Type} from "packages/mods/railcraft/client/gui/widget/button/$TexturePosition"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ButtonState, $ButtonState$Type} from "packages/mods/railcraft/gui/button/$ButtonState"

export class $ManipulatorBlockEntity$RedstoneMode extends $Enum<($ManipulatorBlockEntity$RedstoneMode)> implements $ButtonState<($ManipulatorBlockEntity$RedstoneMode)> {
static readonly "COMPLETE": $ManipulatorBlockEntity$RedstoneMode
static readonly "IMMEDIATE": $ManipulatorBlockEntity$RedstoneMode
static readonly "MANUAL": $ManipulatorBlockEntity$RedstoneMode
static readonly "PARTIAL": $ManipulatorBlockEntity$RedstoneMode


public static "values"(): ($ManipulatorBlockEntity$RedstoneMode)[]
public static "valueOf"(arg0: string): $ManipulatorBlockEntity$RedstoneMode
public "label"(): $Component
public "tooltip"(): $Optional<($Component)>
public "getDescriptionKey"(): string
public "getTranslationKey"(): string
public "texturePosition"(): $TexturePosition
get "descriptionKey"(): string
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManipulatorBlockEntity$RedstoneMode$Type = (("immediate") | ("complete") | ("manual") | ("partial")) | ($ManipulatorBlockEntity$RedstoneMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManipulatorBlockEntity$RedstoneMode_ = $ManipulatorBlockEntity$RedstoneMode$Type;
}}
declare module "packages/mods/railcraft/api/charge/$Charge$Provider" {
import {$Charge$Network, $Charge$Network$Type} from "packages/mods/railcraft/api/charge/$Charge$Network"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"

export interface $Charge$Provider {

 "network"(arg0: $ServerLevel$Type): $Charge$Network

(arg0: $ServerLevel$Type): $Charge$Network
}

export namespace $Charge$Provider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Charge$Provider$Type = ($Charge$Provider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Charge$Provider_ = $Charge$Provider$Type;
}}
declare module "packages/mods/railcraft/api/charge/$ChargeStorage$State" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChargeStorage$State extends $Enum<($ChargeStorage$State)> {
static readonly "INFINITE": $ChargeStorage$State
static readonly "SOURCE": $ChargeStorage$State
static readonly "RECHARGEABLE": $ChargeStorage$State
static readonly "DISPOSABLE": $ChargeStorage$State
static readonly "DISABLED": $ChargeStorage$State


public static "values"(): ($ChargeStorage$State)[]
public static "valueOf"(arg0: string): $ChargeStorage$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeStorage$State$Type = (("rechargeable") | ("infinite") | ("disabled") | ("source") | ("disposable")) | ($ChargeStorage$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeStorage$State_ = $ChargeStorage$State$Type;
}}
