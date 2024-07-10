declare module "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$MoverControllerTileEntity" {
import {$Value, $Value$Type} from "packages/mcjty/lib/bindings/$Value"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GenericTileEntity, $GenericTileEntity$Type} from "packages/mcjty/lib/tileentity/$GenericTileEntity"
import {$Key, $Key$Type} from "packages/mcjty/lib/typed/$Key"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ListCommand, $ListCommand$Type} from "packages/mcjty/lib/blockcommands/$ListCommand"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Command, $Command$Type} from "packages/mcjty/lib/blockcommands/$Command"
import {$MoverTileEntity, $MoverTileEntity$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$MoverTileEntity"

export class $MoverControllerTileEntity extends $GenericTileEntity {
static readonly "MAXSCAN": integer
static readonly "VALUE_SELECTED_VEHICLE": $Value<(any), (string)>
static readonly "VALUE_OFFSET_X": $Value<(any), (integer)>
static readonly "VALUE_OFFSET_Y": $Value<(any), (integer)>
static readonly "VALUE_OFFSET_Z": $Value<(any), (integer)>
static readonly "SELECTED_NODE": $Key<($BlockPos)>
static readonly "SELECTED_VEHICLE": $Key<(string)>
static readonly "SELECTED_DESTINATION": $Key<(string)>
static readonly "CMD_SCAN": $Command<(any)>
static readonly "CMD_MOVE": $Command<(any)>
static readonly "CMD_SELECTNODE": $Command<(any)>
static readonly "CMD_GETVEHICLES": $ListCommand<(any), (any)>
static readonly "CMD_GETNODES": $ListCommand<(any), (any)>
static readonly "VALUE_RSMODE": $Key<(integer)>
static readonly "COMMAND_SYNC_BINDING": $Command<(any)>
static readonly "CMD_RSMODE": $Command<(any)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "hasEnoughPower"(): boolean
public "setupMovement"(arg0: string, arg1: string): void
public "getSelectedVehicle"(): string
public "setSelectedVehicle"(arg0: string): void
public "findVehicle"(arg0: string): $MoverTileEntity
public "getMovers"(): $List<(string)>
public static "createBlock"(): $BaseBlock
public "traverseBreadthFirst"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($MoverTileEntity$Type), (T)>): T
get "selectedVehicle"(): string
set "selectedVehicle"(value: string)
get "movers"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoverControllerTileEntity$Type = ($MoverControllerTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoverControllerTileEntity_ = $MoverControllerTileEntity$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/shield/blocks/$ShieldTemplateBlock" {
import {$ShieldTemplateBlock$TemplateColor, $ShieldTemplateBlock$TemplateColor$Type} from "packages/mcjty/rftoolsbuilder/modules/shield/blocks/$ShieldTemplateBlock$TemplateColor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $ShieldTemplateBlock extends $Block implements $ITooltipSettings {
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

constructor(arg0: $ShieldTemplateBlock$TemplateColor$Type)

public "getColor"(): $ShieldTemplateBlock$TemplateColor
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "color"(): $ShieldTemplateBlock$TemplateColor
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldTemplateBlock$Type = ($ShieldTemplateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShieldTemplateBlock_ = $ShieldTemplateBlock$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$MoverTileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Value, $Value$Type} from "packages/mcjty/lib/bindings/$Value"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ContainerFactory, $ContainerFactory$Type} from "packages/mcjty/lib/container/$ContainerFactory"
import {$Key, $Key$Type} from "packages/mcjty/lib/typed/$Key"
import {$MoverControllerTileEntity, $MoverControllerTileEntity$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$MoverControllerTileEntity"
import {$EntityMovementLogic, $EntityMovementLogic$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/logic/$EntityMovementLogic"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$TickingTileEntity, $TickingTileEntity$Type} from "packages/mcjty/lib/tileentity/$TickingTileEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Command, $Command$Type} from "packages/mcjty/lib/blockcommands/$Command"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MoverTileEntity extends $TickingTileEntity {
static readonly "SLOT_VEHICLE_CARD": integer
static readonly "CONTAINER_FACTORY": $Lazy<($ContainerFactory)>
static readonly "VALUE_CONNECTIONS": $Value<(any), (string)>
static readonly "wantUnmount": $Set<(integer)>
static readonly "VALUE_RSMODE": $Key<(integer)>
static readonly "COMMAND_SYNC_BINDING": $Command<(any)>
static readonly "CMD_RSMODE": $Command<(any)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "isAvailable"(): boolean
public "getName"(): string
public "getOffset"(): $BlockPos
public "setOffset"(arg0: integer, arg1: integer, arg2: integer): void
public "isValid"(): boolean
public "setSource"(arg0: $BlockPos$Type): void
public "canConnect"(arg0: $Direction$Type): boolean
public "getCurrentPlatform"(): string
public "getNetwork"(): $Map<($Direction), ($BlockPos)>
public "isMoving"(): boolean
public "getLogic"(): $EntityMovementLogic
public "getController"(): $MoverControllerTileEntity
public "setController"(arg0: $MoverControllerTileEntity$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "loadInfo"(arg0: $CompoundTag$Type): void
public "saveInfo"(arg0: $CompoundTag$Type): void
public "getCard"(): $ItemStack
public "setLastDestination"(arg0: $BlockPos$Type): void
public "getCursorY"(): double
public "getCursorBlock"(): $BlockPos
public "isMoverValid"(): boolean
public "setCurrentPage"(arg0: integer): void
public "getLastDestination"(): $BlockPos
public "traverseAndCollect"(): $Map<($BlockPos), ($MoverTileEntity)>
public "hasEnoughPower"(): boolean
public "getCursorX"(): double
public "traverseDepthFirst"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($MoverTileEntity$Type), (T)>): T
public "startMove"(arg0: string): void
public "clearNetwork"(): void
public "setConnectionCount"(arg0: string): void
public "hitScreenClient"(arg0: $BlockPos$Type, arg1: double, arg2: double, arg3: double, arg4: $Direction$Type, arg5: $Direction$Type, arg6: $Direction$Type): void
public "getConnectionCount"(): string
public "addConnection"(arg0: $Direction$Type, arg1: $BlockPos$Type): void
public "getCurrentPage"(): integer
public static "createBlock"(): $BaseBlock
public "loadClientDataFromNBT"(arg0: $CompoundTag$Type): void
public "saveClientDataToNBT"(arg0: $CompoundTag$Type): void
public "traverseBreadthFirst"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($MoverTileEntity$Type), (T)>): T
public "getPlatformsFromServer"(): $List<(string)>
public "traverseBreadthFirstWithPath"<T>(arg0: $BiFunction$Type<($List$Type<($BlockPos$Type)>), ($MoverTileEntity$Type), (T)>): T
public "setHighlightedMover"(arg0: string): void
public "hasDirectContectionTo"(arg0: $BlockPos$Type): boolean
public "setClientRenderInfo"(arg0: $List$Type<(string)>, arg1: string, arg2: boolean, arg3: boolean): void
public "arriveAtDestination"(): void
get "available"(): boolean
get "name"(): string
get "offset"(): $BlockPos
get "valid"(): boolean
set "source"(value: $BlockPos$Type)
get "currentPlatform"(): string
get "network"(): $Map<($Direction), ($BlockPos)>
get "moving"(): boolean
get "logic"(): $EntityMovementLogic
get "controller"(): $MoverControllerTileEntity
set "controller"(value: $MoverControllerTileEntity$Type)
get "card"(): $ItemStack
set "lastDestination"(value: $BlockPos$Type)
get "cursorY"(): double
get "cursorBlock"(): $BlockPos
get "moverValid"(): boolean
set "currentPage"(value: integer)
get "lastDestination"(): $BlockPos
get "cursorX"(): double
set "connectionCount"(value: string)
get "connectionCount"(): string
get "currentPage"(): integer
get "platformsFromServer"(): $List<(string)>
set "highlightedMover"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoverTileEntity$Type = ($MoverTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoverTileEntity_ = $MoverTileEntity$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/shapes/$ShapeOperation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ShapeOperation extends $Enum<($ShapeOperation)> {
static readonly "UNION": $ShapeOperation
static readonly "SUBTRACT": $ShapeOperation
static readonly "INTERSECT": $ShapeOperation


public "getDescription"(): string
public static "values"(): ($ShapeOperation)[]
public static "valueOf"(arg0: string): $ShapeOperation
public static "getByName"(arg0: string): $ShapeOperation
public "getCode"(): string
get "description"(): string
get "code"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeOperation$Type = (("intersect") | ("subtract") | ("union")) | ($ShapeOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeOperation_ = $ShapeOperation$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$BuilderMode" {
import {$NamedEnum, $NamedEnum$Type} from "packages/mcjty/lib/varia/$NamedEnum"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BuilderMode extends $Enum<($BuilderMode)> implements $NamedEnum<($BuilderMode)> {
static readonly "MODE_COPY": $BuilderMode
static readonly "MODE_MOVE": $BuilderMode
static readonly "MODE_SWAP": $BuilderMode
static readonly "MODE_BACK": $BuilderMode
static readonly "MODE_COLLECT": $BuilderMode


public "getDescription"(): (string)[]
public "getName"(): string
public static "values"(): ($BuilderMode)[]
public static "valueOf"(arg0: string): $BuilderMode
public static "getEnumByName"<T extends $NamedEnum<(T)>>(arg0: string, arg1: ($BuilderMode$Type)[]): $BuilderMode
get "description"(): (string)[]
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuilderMode$Type = (("mode_swap") | ("mode_move") | ("mode_back") | ("mode_copy") | ("mode_collect")) | ($BuilderMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuilderMode_ = $BuilderMode$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$MoverControlBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MoverControlBlock extends $BaseBlock {
static readonly "HORIZ_FACING": $DirectionProperty
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

constructor(arg0: integer)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getPage"(): integer
get "page"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoverControlBlock$Type = ($MoverControlBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoverControlBlock_ = $MoverControlBlock$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/items/$SuperHarvestingTool" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SuperHarvestingTool extends $DiggerItem {
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

constructor()

public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperHarvestingTool$Type = ($SuperHarvestingTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuperHarvestingTool_ = $SuperHarvestingTool$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$RotateMode" {
import {$NamedEnum, $NamedEnum$Type} from "packages/mcjty/lib/varia/$NamedEnum"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RotateMode extends $Enum<($RotateMode)> implements $NamedEnum<($RotateMode)> {
static readonly "ROTATE_0": $RotateMode
static readonly "ROTATE_90": $RotateMode
static readonly "ROTATE_180": $RotateMode
static readonly "ROTATE_270": $RotateMode


public "getDescription"(): (string)[]
public "getName"(): string
public static "values"(): ($RotateMode)[]
public static "valueOf"(arg0: string): $RotateMode
public static "getEnumByName"<T extends $NamedEnum<(T)>>(arg0: string, arg1: ($RotateMode$Type)[]): $RotateMode
get "description"(): (string)[]
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotateMode$Type = (("rotate_0") | ("rotate_270") | ("rotate_180") | ("rotate_90")) | ($RotateMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotateMode_ = $RotateMode$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/$BlockInformation" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SupportBlock$SupportStatus, $SupportBlock$SupportStatus$Type} from "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$SupportBlock$SupportStatus"

export class $BlockInformation {
static readonly "ROTATE_invalid": integer
static readonly "ROTATE_mmmm": integer
static readonly "ROTATE_mfff": integer
static readonly "INVALID": $BlockInformation
static readonly "OK": $BlockInformation
static readonly "FREE": $BlockInformation

constructor(arg0: $BlockInformation$Type, arg1: string)
constructor(arg0: $ResourceLocation$Type, arg1: $SupportBlock$SupportStatus$Type, arg2: double)
constructor(arg0: $BlockInformation$Type, arg1: $ResourceLocation$Type, arg2: $SupportBlock$SupportStatus$Type, arg3: double)
constructor(arg0: $ResourceLocation$Type, arg1: $SupportBlock$SupportStatus$Type, arg2: double, arg3: integer)

public static "getBlockInformation"(arg0: $Block$Type): $BlockInformation
public "getBlockName"(): $ResourceLocation
public "getBlockLevel"(): $SupportBlock$SupportStatus
public "getCostFactor"(): double
public "getRotateInfo"(): integer
get "blockName"(): $ResourceLocation
get "blockLevel"(): $SupportBlock$SupportStatus
get "costFactor"(): double
get "rotateInfo"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInformation$Type = ($BlockInformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInformation_ = $BlockInformation$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$MoverStatusBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $MoverStatusBlock extends $BaseBlock {
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

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoverStatusBlock$Type = ($MoverStatusBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoverStatusBlock_ = $MoverStatusBlock$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/shield/$ShieldRenderingMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ShieldRenderingMode extends $Enum<($ShieldRenderingMode)> implements $StringRepresentable {
static readonly "INVISIBLE": $ShieldRenderingMode
static readonly "SHIELD": $ShieldRenderingMode
static readonly "MIMIC": $ShieldRenderingMode
static readonly "TRANSP": $ShieldRenderingMode
static readonly "SOLID": $ShieldRenderingMode


public "getDescription"(): string
public static "getMode"(arg0: string): $ShieldRenderingMode
public static "values"(): ($ShieldRenderingMode)[]
public static "valueOf"(arg0: string): $ShieldRenderingMode
public "isTranslucent"(): boolean
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "description"(): string
get "translucent"(): boolean
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldRenderingMode$Type = (("shield") | ("solid") | ("invisible") | ("mimic") | ("transp")) | ($ShieldRenderingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShieldRenderingMode_ = $ShieldRenderingMode$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleControlScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MoverControllerTileEntity, $MoverControllerTileEntity$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$MoverControllerTileEntity"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$VehicleControlScreenModule$EmptyData, $VehicleControlScreenModule$EmptyData$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleControlScreenModule$EmptyData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VehicleControlScreenModule implements $IScreenModule<($VehicleControlScreenModule$EmptyData)> {

constructor()

public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
public static "getMoverController"(arg0: $Level$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): $Optional<($MoverControllerTileEntity)>
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleControlScreenModule$Type = ($VehicleControlScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleControlScreenModule_ = $VehicleControlScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/logic/$EntityMovementLogic" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MoverTileEntity, $MoverTileEntity$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$MoverTileEntity"

export class $EntityMovementLogic {

constructor(arg0: $MoverTileEntity$Type)

public "getDestination"(): $BlockPos
public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): void
public "getSource"(): $BlockPos
public "setSource"(arg0: $BlockPos$Type): void
public "setDestination"(arg0: $BlockPos$Type): void
public "getStarttick"(): long
public "getMovingPosition"(arg0: float, arg1: long): $Vec3
public "getTotalTicks"(): long
public "endMoveServer"(): void
public "setWaitABit"(arg0: integer): void
public "loadClientDataFromNBT"(arg0: $CompoundTag$Type): void
public "saveClientDataToNBT"(arg0: $CompoundTag$Type): void
public "clearGrabbedEntities"(): void
public "tryMoveVehicleServer"(): void
public "tryMoveVehicleClientEntities"(arg0: float): void
public "setGrabbedEntitiesClient"(arg0: $Set$Type<(integer)>): void
public "tryMoveVehicleThisPlayer"(arg0: float): $Vec3
public "syncGrabbedToClient"(): void
public "doGrab"(arg0: double, arg1: double, arg2: double): void
public "setupMovementTo"(arg0: $BlockPos$Type): void
public "getGrabTimeout"(): integer
public "setGrabTimeout"(arg0: integer): void
public "grabEntities"(): void
get "destination"(): $BlockPos
get "source"(): $BlockPos
set "source"(value: $BlockPos$Type)
set "destination"(value: $BlockPos$Type)
get "starttick"(): long
get "totalTicks"(): long
set "waitABit"(value: integer)
set "grabbedEntitiesClient"(value: $Set$Type<(integer)>)
set "upMovementTo"(value: $BlockPos$Type)
get "grabTimeout"(): integer
set "grabTimeout"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMovementLogic$Type = ($EntityMovementLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityMovementLogic_ = $EntityMovementLogic$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleControlModuleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VehicleControlScreenModule, $VehicleControlScreenModule$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleControlScreenModule"
import {$VehicleControlClientScreenModule, $VehicleControlClientScreenModule$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleControlClientScreenModule"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VehicleControlModuleItem extends $GenericModuleItem implements $INBTPreservingIngredient {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($VehicleControlClientScreenModule)>
public "getServerScreenModule"(): $Class<($VehicleControlScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getTagsToPreserve"(): $Collection<(string)>
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($VehicleControlClientScreenModule)>
get "serverScreenModule"(): $Class<($VehicleControlScreenModule)>
get "tagsToPreserve"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleControlModuleItem$Type = ($VehicleControlModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleControlModuleItem_ = $VehicleControlModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/shield/blocks/$ShieldProjectorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"

export class $ShieldProjectorBlock extends $BaseBlock implements $INBTPreservingIngredient {
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

constructor(arg0: $BlockEntityType$BlockEntitySupplier$Type<($BlockEntity$Type)>, arg1: $Supplier$Type<(integer)>)

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getTagsToPreserve"(): $Collection<(string)>
public "getRotationType"(): $RotationType
get "tagsToPreserve"(): $Collection<(string)>
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldProjectorBlock$Type = ($ShieldProjectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShieldProjectorBlock_ = $ShieldProjectorBlock$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/shapes/$ShapeRotation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ShapeRotation extends $Enum<($ShapeRotation)> {
static readonly "NONE": $ShapeRotation
static readonly "X": $ShapeRotation
static readonly "Y": $ShapeRotation
static readonly "Z": $ShapeRotation


public static "values"(): ($ShapeRotation)[]
public static "valueOf"(arg0: string): $ShapeRotation
public static "getByName"(arg0: string): $ShapeRotation
public "getCode"(): string
public "transformDimension"(arg0: $BlockPos$Type): $BlockPos
get "code"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeRotation$Type = (("x") | ("y") | ("z") | ("none")) | ($ShapeRotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeRotation_ = $ShapeRotation$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleCard" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $VehicleCard extends $Item implements $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public static "getBlocks"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): $Map<($BlockState), ($List<($BlockPos)>)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getVehicleName"(arg0: $ItemStack$Type): string
public static "convertPosToInt"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): integer
public static "storeVehicleInCard"(arg0: $ItemStack$Type, arg1: $Map$Type<($BlockState$Type), ($List$Type<(integer)>)>, arg2: string): void
public static "clearDesiredDestination"(arg0: $ItemStack$Type): void
public static "convertIntToPos"(arg0: $BlockPos$Type, arg1: integer): $BlockPos
public static "setDesiredDestination"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: string): void
public static "getDesiredDestination"(arg0: $ItemStack$Type): $BlockPos
public static "getDesiredDestinationName"(arg0: $ItemStack$Type): string
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleCard$Type = ($VehicleCard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleCard_ = $VehicleCard$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleStatusScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MoverControllerTileEntity, $MoverControllerTileEntity$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$MoverControllerTileEntity"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleDataString, $IModuleDataString$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataString"

export class $VehicleStatusScreenModule implements $IScreenModule<($IModuleDataString)> {

constructor()

public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
public static "getMoverController"(arg0: $Level$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): $Optional<($MoverControllerTileEntity)>
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleStatusScreenModule$Type = ($VehicleStatusScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleStatusScreenModule_ = $VehicleStatusScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/shapes/$Shape" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IFormula, $IFormula$Type} from "packages/mcjty/rftoolsbuilder/shapes/$IFormula"

export class $Shape extends $Enum<($Shape)> {
static readonly "SHAPE_BOX": $Shape
static readonly "SHAPE_TOPDOME": $Shape
static readonly "SHAPE_BOTTOMDOME": $Shape
static readonly "SHAPE_SPHERE": $Shape
static readonly "SHAPE_CYLINDER": $Shape
static readonly "SHAPE_CAPPEDCYLINDER": $Shape
static readonly "SHAPE_PRISM": $Shape
static readonly "SHAPE_TORUS": $Shape
static readonly "SHAPE_HEART": $Shape
static readonly "SHAPE_CONE": $Shape
static readonly "SHAPE_COMPOSITION": $Shape
static readonly "SHAPE_SCAN": $Shape


public static "getShape"(arg0: string): $Shape
public "getDescription"(): string
public static "values"(): ($Shape)[]
public static "valueOf"(arg0: string): $Shape
public "isScan"(): boolean
public "isComposition"(): boolean
public "getFormulaFactory"(): $Supplier<($IFormula)>
get "description"(): string
get "scan"(): boolean
get "composition"(): boolean
get "formulaFactory"(): $Supplier<($IFormula)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shape$Type = (("shape_cylinder") | ("shape_box") | ("shape_sphere") | ("shape_bottomdome") | ("shape_composition") | ("shape_prism") | ("shape_heart") | ("shape_cone") | ("shape_torus") | ("shape_scan") | ("shape_topdome") | ("shape_cappedcylinder")) | ($Shape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Shape_ = $Shape$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$SupportBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SupportBlock$SupportStatus, $SupportBlock$SupportStatus$Type} from "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$SupportBlock$SupportStatus"

export class $SupportBlock extends $Block {
static readonly "STATUS": $EnumProperty<($SupportBlock$SupportStatus)>
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportBlock$Type = ($SupportBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportBlock_ = $SupportBlock$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleControlScreenModule$EmptyData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"

export class $VehicleControlScreenModule$EmptyData implements $IModuleData {
static readonly "ID": string

constructor(arg0: $FriendlyByteBuf$Type)

public "getId"(): string
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleControlScreenModule$EmptyData$Type = ($VehicleControlScreenModule$EmptyData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleControlScreenModule$EmptyData_ = $VehicleControlScreenModule$EmptyData$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$BuilderTileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ContainerFactory, $ContainerFactory$Type} from "packages/mcjty/lib/container/$ContainerFactory"
import {$Key, $Key$Type} from "packages/mcjty/lib/typed/$Key"
import {$BlockInformation, $BlockInformation$Type} from "packages/mcjty/rftoolsbuilder/modules/builder/$BlockInformation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RotateMode, $RotateMode$Type} from "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$RotateMode"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IHudSupport, $IHudSupport$Type} from "packages/mcjty/rftoolsbase/api/client/$IHudSupport"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BuilderMode, $BuilderMode$Type} from "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$BuilderMode"
import {$AnchorMode, $AnchorMode$Type} from "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$AnchorMode"
import {$ListCommand, $ListCommand$Type} from "packages/mcjty/lib/blockcommands/$ListCommand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Value, $Value$Type} from "packages/mcjty/lib/bindings/$Value"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TickingTileEntity, $TickingTileEntity$Type} from "packages/mcjty/lib/tileentity/$TickingTileEntity"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Command, $Command$Type} from "packages/mcjty/lib/blockcommands/$Command"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BuilderTileEntity extends $TickingTileEntity implements $IHudSupport {
static readonly "SLOT_TAB": integer
static readonly "SLOT_FILTER": integer
static readonly "DONT_REMOVE_ME": $ResourceLocation
static readonly "DONT_REMOVE_ME_TAG": $TagKey<($Block)>
static readonly "CONTAINER_FACTORY": $Lazy<($ContainerFactory)>
static readonly "VALUE_MODE": $Value<($BuilderTileEntity), (string)>
static readonly "VALUE_ROTATE": $Value<($BuilderTileEntity), (string)>
static readonly "VALUE_ANCHOR": $Value<($BuilderTileEntity), (string)>
static readonly "VALUE_SUPPORT": $Value<(any), (boolean)>
static readonly "CMD_RESTART": $Command<(any)>
static readonly "CMD_GETHUDLOG": $ListCommand<(any), (any)>
static readonly "VALUE_RSMODE": $Key<(integer)>
static readonly "COMMAND_SYNC_BINDING": $Command<(any)>
static readonly "CMD_RSMODE": $Command<(any)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "setMode"(arg0: $BuilderMode$Type): void
public "getMode"(): $BuilderMode
public static "isEmpty"(arg0: $BlockState$Type, arg1: $Block$Type): boolean
public "suspend"(arg0: integer, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): boolean
public "getRenderBoundingBox"(): $AABB
public "getHudPos"(): $BlockPos
public "getLastUpdateTime"(): long
public "getAnchor"(): $AnchorMode
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "buildBlock"(arg0: integer, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): boolean
public "setAnchor"(arg0: $AnchorMode$Type): void
public "tickServer"(): void
public "getBlockOrientation"(): $Direction
public static "isEmptyOrReplacable"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "setScanLocationClient"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
public static "getBlockInformation"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockEntity$Type): $BlockInformation
public static "getCurrentLevelClientSide"(): integer
public "onReplaced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): void
public "setPowerInput"(arg0: integer): void
public "rotateBlock"(arg0: $Rotation$Type): void
public "getHudLog"(): $List<(string)>
public "setLastUpdateTime"(arg0: long): void
public "getClientLog"(): $List<(string)>
public "isBlockAboveAir"(): boolean
public "isHilightMode"(): boolean
public "clearSupportBlocks"(): void
public "isWaitMode"(): boolean
public "setHilightMode"(arg0: boolean): void
public "hasEntityMode"(): boolean
public "setWaitMode"(arg0: boolean): void
public "hasLoopMode"(): boolean
public "setLoopMode"(arg0: boolean): void
public "setEntityMode"(arg0: boolean): void
public "hasSupportMode"(): boolean
public "resetBox"(): void
public "getRotate"(): $RotateMode
public "setRotate"(arg0: $RotateMode$Type): void
public "setSupportMode"(arg0: boolean): void
public "quarryBlock"(arg0: integer, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): boolean
public "placeLiquidBlock"(arg0: integer, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): boolean
public "pumpBlock"(arg0: integer, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): boolean
public "silkQuarryBlock"(arg0: integer, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): boolean
public "voidBlock"(arg0: integer, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): boolean
public static "getScanLocClient"(): $Map<($BlockPos), ($Pair<(long), ($BlockPos)>)>
public "getCurrentLevel"(): integer
public static "createBlock"(): $BaseBlock
public "isSilent"(): boolean
public "setSilent"(arg0: boolean): void
set "mode"(value: $BuilderMode$Type)
get "mode"(): $BuilderMode
get "renderBoundingBox"(): $AABB
get "hudPos"(): $BlockPos
get "lastUpdateTime"(): long
get "anchor"(): $AnchorMode
set "anchor"(value: $AnchorMode$Type)
get "blockOrientation"(): $Direction
get "currentLevelClientSide"(): integer
set "powerInput"(value: integer)
get "hudLog"(): $List<(string)>
set "lastUpdateTime"(value: long)
get "clientLog"(): $List<(string)>
get "blockAboveAir"(): boolean
get "hilightMode"(): boolean
get "waitMode"(): boolean
set "hilightMode"(value: boolean)
set "waitMode"(value: boolean)
set "loopMode"(value: boolean)
set "entityMode"(value: boolean)
get "rotate"(): $RotateMode
set "rotate"(value: $RotateMode$Type)
set "supportMode"(value: boolean)
get "scanLocClient"(): $Map<($BlockPos), ($Pair<(long), ($BlockPos)>)>
get "currentLevel"(): integer
get "silent"(): boolean
set "silent"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuilderTileEntity$Type = ($BuilderTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuilderTileEntity_ = $BuilderTileEntity$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$SupportBlock$SupportStatus" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SupportBlock$SupportStatus extends $Enum<($SupportBlock$SupportStatus)> implements $StringRepresentable {
static readonly "STATUS_OK": $SupportBlock$SupportStatus
static readonly "STATUS_WARN": $SupportBlock$SupportStatus
static readonly "STATUS_ERROR": $SupportBlock$SupportStatus


public "getName"(): string
public static "values"(): ($SupportBlock$SupportStatus)[]
public static "max"(arg0: $SupportBlock$SupportStatus$Type, arg1: $SupportBlock$SupportStatus$Type): $SupportBlock$SupportStatus
public static "valueOf"(arg0: string): $SupportBlock$SupportStatus
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportBlock$SupportStatus$Type = (("status_error") | ("status_warn") | ("status_ok")) | ($SupportBlock$SupportStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportBlock$SupportStatus_ = $SupportBlock$SupportStatus$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$AnchorMode" {
import {$NamedEnum, $NamedEnum$Type} from "packages/mcjty/lib/varia/$NamedEnum"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnchorMode extends $Enum<($AnchorMode)> implements $NamedEnum<($AnchorMode)> {
static readonly "ANCHOR_SW": $AnchorMode
static readonly "ANCHOR_SE": $AnchorMode
static readonly "ANCHOR_NW": $AnchorMode
static readonly "ANCHOR_NE": $AnchorMode


public "getDescription"(): (string)[]
public "getName"(): string
public static "values"(): ($AnchorMode)[]
public static "valueOf"(arg0: string): $AnchorMode
public static "getEnumByName"<T extends $NamedEnum<(T)>>(arg0: string, arg1: ($AnchorMode$Type)[]): $AnchorMode
get "description"(): (string)[]
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnchorMode$Type = (("anchor_ne") | ("anchor_nw") | ("anchor_se") | ("anchor_sw")) | ($AnchorMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnchorMode_ = $AnchorMode$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/shield/blocks/$ShieldingBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$ShieldRenderingMode, $ShieldRenderingMode$Type} from "packages/mcjty/rftoolsbuilder/modules/shield/$ShieldRenderingMode"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ShieldingBlock extends $Block implements $EntityBlock {
static readonly "BLOCKED_ITEMS": $BooleanProperty
static readonly "BLOCKED_PASSIVE": $BooleanProperty
static readonly "BLOCKED_HOSTILE": $BooleanProperty
static readonly "BLOCKED_PLAYERS": $BooleanProperty
static readonly "DAMAGE_ITEMS": $BooleanProperty
static readonly "DAMAGE_PASSIVE": $BooleanProperty
static readonly "DAMAGE_HOSTILE": $BooleanProperty
static readonly "DAMAGE_PLAYERS": $BooleanProperty
static readonly "FLAG_OPAQUE": $BooleanProperty
static readonly "RENDER_MODE": $EnumProperty<($ShieldRenderingMode)>
static readonly "COLLISION_SHAPE": $VoxelShape
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

public static "isItem"(arg0: $Entity$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "isHostile"(arg0: $Entity$Type): boolean
public "handleDamage"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "isPassive"(arg0: $Entity$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldingBlock$Type = ($ShieldingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShieldingBlock_ = $ShieldingBlock$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/shapes/$IFormula" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Check32, $Check32$Type} from "packages/mcjty/lib/varia/$Check32"

export interface $IFormula {

 "setup"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: $CompoundTag$Type): void
 "isClear"(arg0: integer, arg1: integer, arg2: integer): boolean
 "isVisible"(arg0: integer, arg1: integer, arg2: integer): boolean
 "isBorder"(arg0: integer, arg1: integer, arg2: integer): boolean
 "correctFormula"(arg0: boolean): $IFormula
 "getCheckSumClient"(arg0: $CompoundTag$Type, arg1: $Check32$Type): void
 "getLastState"(): $BlockState
 "isCustom"(): boolean
 "isInside"(arg0: integer, arg1: integer, arg2: integer): boolean
 "isInsideSafe"(arg0: integer, arg1: integer, arg2: integer): boolean
}

export namespace $IFormula {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFormula$Type = ($IFormula);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFormula_ = $IFormula$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/shapes/$StatePalette" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $StatePalette {

constructor()

public "add"(arg0: $BlockState$Type): void
public "getPalette"(): $List<($BlockState)>
public "alloc"(arg0: $BlockState$Type, arg1: integer): integer
get "palette"(): $List<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePalette$Type = ($StatePalette);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatePalette_ = $StatePalette$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/items/$ShapeCardItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Shape, $Shape$Type} from "packages/mcjty/rftoolsbuilder/shapes/$Shape"
import {$Check32, $Check32$Type} from "packages/mcjty/lib/varia/$Check32"
import {$ShapeCardType, $ShapeCardType$Type} from "packages/mcjty/rftoolsbuilder/modules/builder/items/$ShapeCardType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RLE, $RLE$Type} from "packages/mcjty/lib/varia/$RLE"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$ShapeModifier, $ShapeModifier$Type} from "packages/mcjty/rftoolsbuilder/shapes/$ShapeModifier"
import {$StatePalette, $StatePalette$Type} from "packages/mcjty/rftoolsbuilder/shapes/$StatePalette"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFormula, $IFormula$Type} from "packages/mcjty/rftoolsbuilder/shapes/$IFormula"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $ShapeCardItem extends $Item implements $INBTPreservingIngredient, $ITooltipSettings {
static readonly "MAXIMUM_COUNT": integer
static readonly "MODE_NONE": integer
static readonly "MODE_CORNER1": integer
static readonly "MODE_CORNER2": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ShapeCardType$Type)

public static "getShape"(arg0: $CompoundTag$Type): $Shape
public static "getShape"(arg0: $ItemStack$Type): $Shape
public static "setMode"(arg0: $ItemStack$Type, arg1: integer): void
public static "getMode"(arg0: $ItemStack$Type): integer
public static "load"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): void
public static "save"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): void
public static "getType"(arg0: $ItemStack$Type): $ShapeCardType
public static "getOffset"(arg0: $ItemStack$Type): $BlockPos
public static "setOffset"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: integer): void
public static "setData"(arg0: $CompoundTag$Type, arg1: integer): void
public static "setShape"(arg0: $ItemStack$Type, arg1: $Shape$Type, arg2: boolean): void
public static "getDimension"(arg0: $ItemStack$Type): $BlockPos
public static "getDimension"(arg0: $CompoundTag$Type): $BlockPos
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setModifier"(arg0: $CompoundTag$Type, arg1: $ShapeModifier$Type): void
public static "isSolid"(arg0: $CompoundTag$Type): boolean
public static "isSolid"(arg0: $ItemStack$Type): boolean
public static "getClampedDimension"(arg0: $CompoundTag$Type, arg1: integer): $BlockPos
public static "getClampedDimension"(arg0: $ItemStack$Type, arg1: integer): $BlockPos
public "isDisabledInConfig"(): boolean
public static "setGhostMaterial"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
public "getShapeOffset"(arg0: $ItemStack$Type): string
public static "setChildren"(arg0: $ItemStack$Type, arg1: $ListTag$Type): void
public "getTagsToPreserve"(): $Collection<(string)>
public static "setCorner1"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): void
public "getShapeDimension"(arg0: $ItemStack$Type): string
public static "getCorner1"(arg0: $ItemStack$Type): $BlockPos
public static "getScanId"(arg0: $ItemStack$Type): integer
public static "getRenderPositions"(arg0: $ItemStack$Type, arg1: boolean, arg2: $RLE$Type, arg3: $StatePalette$Type, arg4: $IFormula$Type, arg5: integer): integer
public static "getScanIdRecursive"(arg0: $ItemStack$Type): integer
public static "isTagMatching"(arg0: $ItemStack$Type): boolean
public static "getLocalChecksum"(arg0: $CompoundTag$Type, arg1: $Check32$Type): void
public static "xInChunk"(arg0: integer, arg1: $ChunkPos$Type): boolean
public static "zInChunk"(arg0: integer, arg1: $ChunkPos$Type): boolean
public static "isVoiding"(arg0: $ItemStack$Type, arg1: string): boolean
public static "getDataPositions"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Shape$Type, arg3: boolean, arg4: $RLE$Type, arg5: $StatePalette$Type): integer
public static "setDimension"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: integer): void
public static "setCurrentBlock"(arg0: $ItemStack$Type, arg1: $GlobalPos$Type): void
public static "getClampedOffset"(arg0: $CompoundTag$Type, arg1: integer): $BlockPos
public static "getClampedOffset"(arg0: $ItemStack$Type, arg1: integer): $BlockPos
public static "composeFormula"(arg0: $ItemStack$Type, arg1: $IFormula$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type, arg6: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, arg7: integer, arg8: boolean, arg9: boolean, arg10: $ChunkPos$Type): void
public static "getMinCorner"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $BlockPos
public static "getMaxCorner"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $BlockPos
public static "isNormalShapeCard"(arg0: $ItemStack$Type): boolean
public static "getVoidedBlocks"(arg0: $ItemStack$Type): $Set<($Block)>
public static "createCorrectFormula"(arg0: $CompoundTag$Type): $IFormula
public static "getFormulaCheckClient"(arg0: $ItemStack$Type): integer
public static "getFormulaCheckClient"(arg0: $ItemStack$Type, arg1: $Check32$Type): void
public "getShapeDescription"(arg0: $ItemStack$Type): string
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "disabledInConfig"(): boolean
get "tagsToPreserve"(): $Collection<(string)>
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeCardItem$Type = ($ShapeCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeCardItem_ = $ShapeCardItem$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleControlClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$VehicleControlScreenModule$EmptyData, $VehicleControlScreenModule$EmptyData$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleControlScreenModule$EmptyData"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $VehicleControlClientScreenModule implements $IClientScreenModule<($VehicleControlScreenModule$EmptyData)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $VehicleControlScreenModule$EmptyData$Type, arg6: $ModuleRenderInfo$Type): void
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "getTransformMode"(): $IClientScreenModule$TransformMode
public "needsServerData"(): boolean
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "height"(): integer
get "transformMode"(): $IClientScreenModule$TransformMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleControlClientScreenModule$Type = ($VehicleControlClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleControlClientScreenModule_ = $VehicleControlClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleStatusModuleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$VehicleStatusScreenModule, $VehicleStatusScreenModule$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleStatusScreenModule"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$VehicleStatusClientScreenModule, $VehicleStatusClientScreenModule$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleStatusClientScreenModule"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VehicleStatusModuleItem extends $GenericModuleItem implements $INBTPreservingIngredient {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($VehicleStatusClientScreenModule)>
public "getServerScreenModule"(): $Class<($VehicleStatusScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getTagsToPreserve"(): $Collection<(string)>
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($VehicleStatusClientScreenModule)>
get "serverScreenModule"(): $Class<($VehicleStatusScreenModule)>
get "tagsToPreserve"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleStatusModuleItem$Type = ($VehicleStatusModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleStatusModuleItem_ = $VehicleStatusModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$InvisibleMoverBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$InvisibleMoverBlock$MoverData, $InvisibleMoverBlock$MoverData$Type} from "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$InvisibleMoverBlock$MoverData"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $InvisibleMoverBlock extends $Block implements $EntityBlock {
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

public "getData"(arg0: $BlockPos$Type): $List<($InvisibleMoverBlock$MoverData)>
public "removeData"(arg0: $BlockPos$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "registerData"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Direction$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibleMoverBlock$Type = ($InvisibleMoverBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvisibleMoverBlock_ = $InvisibleMoverBlock$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/blocks/$InvisibleMoverBlock$MoverData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InvisibleMoverBlock$MoverData extends $Record {

constructor(mover: $BlockPos$Type, controlPos: $BlockPos$Type, horizDirection: $Direction$Type, direction: $Direction$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "direction"(): $Direction
public "mover"(): $BlockPos
public "controlPos"(): $BlockPos
public "horizDirection"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibleMoverBlock$MoverData$Type = ($InvisibleMoverBlock$MoverData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvisibleMoverBlock$MoverData_ = $InvisibleMoverBlock$MoverData$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/mover/items/$VehicleStatusClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IModuleDataString, $IModuleDataString$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataString"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $VehicleStatusClientScreenModule implements $IClientScreenModule<($IModuleDataString)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $IModuleDataString$Type, arg6: $ModuleRenderInfo$Type): void
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "getTransformMode"(): $IClientScreenModule$TransformMode
public "needsServerData"(): boolean
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "height"(): integer
get "transformMode"(): $IClientScreenModule$TransformMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleStatusClientScreenModule$Type = ($VehicleStatusClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleStatusClientScreenModule_ = $VehicleStatusClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/shapes/$ShapeModifier" {
import {$ShapeRotation, $ShapeRotation$Type} from "packages/mcjty/rftoolsbuilder/shapes/$ShapeRotation"
import {$ShapeOperation, $ShapeOperation$Type} from "packages/mcjty/rftoolsbuilder/shapes/$ShapeOperation"

export class $ShapeModifier {

constructor(arg0: $ShapeOperation$Type, arg1: boolean, arg2: $ShapeRotation$Type)

public "getOperation"(): $ShapeOperation
public "getRotation"(): $ShapeRotation
public "isFlipY"(): boolean
get "operation"(): $ShapeOperation
get "rotation"(): $ShapeRotation
get "flipY"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeModifier$Type = ($ShapeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeModifier_ = $ShapeModifier$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$SpaceChamberControllerBlock" {
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $SpaceChamberControllerBlock extends $BaseBlock {
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

constructor()

public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRotationType"(): $RotationType
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpaceChamberControllerBlock$Type = ($SpaceChamberControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpaceChamberControllerBlock_ = $SpaceChamberControllerBlock$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/shield/blocks/$ShieldTemplateBlock$TemplateColor" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ShieldTemplateBlock$TemplateColor extends $Enum<($ShieldTemplateBlock$TemplateColor)> {
static readonly "BLUE": $ShieldTemplateBlock$TemplateColor
static readonly "RED": $ShieldTemplateBlock$TemplateColor
static readonly "GREEN": $ShieldTemplateBlock$TemplateColor
static readonly "YELLOW": $ShieldTemplateBlock$TemplateColor


public static "values"(): ($ShieldTemplateBlock$TemplateColor)[]
public static "valueOf"(arg0: string): $ShieldTemplateBlock$TemplateColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldTemplateBlock$TemplateColor$Type = (("red") | ("green") | ("blue") | ("yellow")) | ($ShieldTemplateBlock$TemplateColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShieldTemplateBlock$TemplateColor_ = $ShieldTemplateBlock$TemplateColor$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/items/$ShapeCardType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuilderTileEntity, $BuilderTileEntity$Type} from "packages/mcjty/rftoolsbuilder/modules/builder/blocks/$BuilderTileEntity"

export class $ShapeCardType extends $Enum<($ShapeCardType)> {
static readonly "CARD_UNKNOWN": $ShapeCardType
static readonly "CARD_SPACE": $ShapeCardType
static readonly "CARD_SHAPE": $ShapeCardType
static readonly "CARD_VOID": $ShapeCardType
static readonly "CARD_QUARRY": $ShapeCardType
static readonly "CARD_QUARRY_SILK": $ShapeCardType
static readonly "CARD_QUARRY_FORTUNE": $ShapeCardType
static readonly "CARD_QUARRY_CLEAR": $ShapeCardType
static readonly "CARD_QUARRY_CLEAR_SILK": $ShapeCardType
static readonly "CARD_QUARRY_CLEAR_FORTUNE": $ShapeCardType
static readonly "CARD_PUMP": $ShapeCardType
static readonly "CARD_PUMP_CLEAR": $ShapeCardType
static readonly "CARD_PUMP_LIQUID": $ShapeCardType


public static "values"(): ($ShapeCardType)[]
public static "valueOf"(arg0: string): $ShapeCardType
public "getResourceSuffix"(): string
public "isItem"(): boolean
public "addInformation"(arg0: $List$Type<($Component$Type)>): void
public "isQuarry"(): boolean
public "addHudLog"(arg0: $List$Type<(string)>, arg1: $IItemHandler$Type): void
public "getRfNeeded"(): integer
public "handleSingleBlock"(arg0: $BuilderTileEntity$Type, arg1: integer, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockState$Type): boolean
public "isFortune"(): boolean
public "isClearing"(): boolean
get "resourceSuffix"(): string
get "item"(): boolean
get "quarry"(): boolean
get "rfNeeded"(): integer
get "fortune"(): boolean
get "clearing"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeCardType$Type = (("card_quarry_clear_silk") | ("card_unknown") | ("card_void") | ("card_pump_clear") | ("card_quarry_fortune") | ("card_pump_liquid") | ("card_pump") | ("card_space") | ("card_shape") | ("card_quarry_silk") | ("card_quarry") | ("card_quarry_clear") | ("card_quarry_clear_fortune")) | ($ShapeCardType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeCardType_ = $ShapeCardType$Type;
}}
declare module "packages/mcjty/rftoolsbuilder/modules/builder/items/$SpaceChamberCardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
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
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $SpaceChamberCardItem extends $Item implements $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
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
export type $SpaceChamberCardItem$Type = ($SpaceChamberCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpaceChamberCardItem_ = $SpaceChamberCardItem$Type;
}}
