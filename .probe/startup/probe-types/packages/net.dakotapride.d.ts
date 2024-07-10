declare module "packages/net/dakotapride/createframed/block/$TintedGlassPaneBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$GlassPaneBlock, $GlassPaneBlock$Type} from "packages/com/simibubi/create/content/decoration/palettes/$GlassPaneBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $TintedGlassPaneBlock extends $GlassPaneBlock {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TintedGlassPaneBlock$Type = ($TintedGlassPaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TintedGlassPaneBlock_ = $TintedGlassPaneBlock$Type;
}}
declare module "packages/net/dakotapride/createframed/block/$TintedConnectedGlassPaneBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ConnectedGlassPaneBlock, $ConnectedGlassPaneBlock$Type} from "packages/com/simibubi/create/content/decoration/palettes/$ConnectedGlassPaneBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $TintedConnectedGlassPaneBlock extends $ConnectedGlassPaneBlock {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TintedConnectedGlassPaneBlock$Type = ($TintedConnectedGlassPaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TintedConnectedGlassPaneBlock_ = $TintedConnectedGlassPaneBlock$Type;
}}
declare module "packages/net/dakotapride/createframed/block/door/$FramedGlassSlidingDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SlidingDoorBlock, $SlidingDoorBlock$Type} from "packages/com/simibubi/create/content/decoration/slidingDoor/$SlidingDoorBlock"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $FramedGlassSlidingDoorBlock extends $SlidingDoorBlock {
static readonly "TRAIN_SET_TYPE": $Supplier<($BlockSetType)>
static readonly "GLASS_SET_TYPE": $Supplier<($BlockSetType)>
static readonly "VISIBLE": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedGlassSlidingDoorBlock$Type = ($FramedGlassSlidingDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedGlassSlidingDoorBlock_ = $FramedGlassSlidingDoorBlock$Type;
}}
declare module "packages/net/dakotapride/createframed/block/$TintedConnectedGlassBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ConnectedGlassBlock, $ConnectedGlassBlock$Type} from "packages/com/simibubi/create/content/decoration/palettes/$ConnectedGlassBlock"

export class $TintedConnectedGlassBlock extends $ConnectedGlassBlock {
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

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TintedConnectedGlassBlock$Type = ($TintedConnectedGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TintedConnectedGlassBlock_ = $TintedConnectedGlassBlock$Type;
}}
declare module "packages/net/dakotapride/createframed/block/door/$TintedFramedGlassSlidingDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FramedGlassSlidingDoorBlock, $FramedGlassSlidingDoorBlock$Type} from "packages/net/dakotapride/createframed/block/door/$FramedGlassSlidingDoorBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $TintedFramedGlassSlidingDoorBlock extends $FramedGlassSlidingDoorBlock {
static readonly "TRAIN_SET_TYPE": $Supplier<($BlockSetType)>
static readonly "GLASS_SET_TYPE": $Supplier<($BlockSetType)>
static readonly "VISIBLE": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TintedFramedGlassSlidingDoorBlock$Type = ($TintedFramedGlassSlidingDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TintedFramedGlassSlidingDoorBlock_ = $TintedFramedGlassSlidingDoorBlock$Type;
}}
declare module "packages/net/dakotapride/createframed/block/$TintedFramedGlassTrapdoorBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$TrainTrapdoorBlock, $TrainTrapdoorBlock$Type} from "packages/com/simibubi/create/content/decoration/$TrainTrapdoorBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $TintedFramedGlassTrapdoorBlock extends $TrainTrapdoorBlock {
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
readonly "type": $BlockSetType
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TintedFramedGlassTrapdoorBlock$Type = ($TintedFramedGlassTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TintedFramedGlassTrapdoorBlock_ = $TintedFramedGlassTrapdoorBlock$Type;
}}
