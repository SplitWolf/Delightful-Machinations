declare module "packages/commoble/morered/wires/$ColoredCableBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PoweredWireBlock, $PoweredWireBlock$Type} from "packages/commoble/morered/wires/$PoweredWireBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LoadingCache, $LoadingCache$Type} from "packages/com/google/common/cache/$LoadingCache"

export class $ColoredCableBlock extends $PoweredWireBlock {
static readonly "NODE_SHAPES_DUNSWE": ($VoxelShape)[]
static readonly "RAYTRACE_BACKBOARDS": ($VoxelShape)[]
static readonly "LINE_SHAPES": ($VoxelShape)[]
static readonly "SHAPES_BY_STATE_INDEX": ($VoxelShape)[]
static readonly "VOXEL_CACHE": $LoadingCache<(long), ($VoxelShape)>
static readonly "DOWN": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "INTERIOR_FACES": ($BooleanProperty)[]
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $DyeColor$Type)

public "canConnectToAdjacentWireOrCable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type, arg5: $Direction$Type, arg6: $Direction$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getDyeColor"(): $DyeColor
get "dyeColor"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredCableBlock$Type = ($ColoredCableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredCableBlock_ = $ColoredCableBlock$Type;
}}
declare module "packages/commoble/morered/plate_blocks/$LatchBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RedstonePlateBlock, $RedstonePlateBlock$Type} from "packages/commoble/morered/plate_blocks/$RedstonePlateBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$InputSide, $InputSide$Type} from "packages/commoble/morered/plate_blocks/$InputSide"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $LatchBlock extends $RedstonePlateBlock {
static readonly "ATTACHMENT_DIRECTION": $DirectionProperty
static readonly "ROTATION": $IntegerProperty
static readonly "INPUT_A": $BooleanProperty
static readonly "INPUT_C": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "INPUT_SIDES": ($InputSide)[]
static readonly "OUTPUT_STRENGTH": integer
static readonly "TICK_DELAY": integer
static readonly "SHAPES_BY_DIRECTION": ($VoxelShape)[]
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
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
/**
 * 
 * @deprecated
 */
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getInputSides"(): ($InputSide)[]
public "getOutputSides"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $EnumSet<($Direction)>
get "inputSides"(): ($InputSide)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LatchBlock$Type = ($LatchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LatchBlock_ = $LatchBlock$Type;
}}
declare module "packages/commoble/morered/wire_post/$WirePostBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$AbstractPoweredWirePostBlock, $AbstractPoweredWirePostBlock$Type} from "packages/commoble/morered/wire_post/$AbstractPoweredWirePostBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $WirePostBlock extends $AbstractPoweredWirePostBlock {
static readonly "POWER": $IntegerProperty
static readonly "NO_DIRECTIONS": $EnumSet<($Direction)>
static readonly "DIRECTION_OF_ATTACHMENT": $DirectionProperty
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Function$Type<($BlockState$Type), ($EnumSet$Type<($Direction$Type)>)>)

public static "getRedstoneConnectionDirections"(arg0: $BlockState$Type): $EnumSet<($Direction)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirePostBlock$Type = ($WirePostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirePostBlock_ = $WirePostBlock$Type;
}}
declare module "packages/commoble/morered/plate_blocks/$LogicFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LogicFunction {

 "apply"(arg0: boolean, arg1: boolean, arg2: boolean): boolean

(arg0: boolean, arg1: boolean, arg2: boolean): boolean
}

export namespace $LogicFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicFunction$Type = ($LogicFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicFunction_ = $LogicFunction$Type;
}}
declare module "packages/commoble/morered/wire_post/$AbstractChanneledCablePostBlock" {
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractPostBlock, $AbstractPostBlock$Type} from "packages/commoble/morered/wire_post/$AbstractPostBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractChanneledCablePostBlock extends $AbstractPostBlock {
static readonly "DIRECTION_OF_ATTACHMENT": $DirectionProperty
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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

/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChanneledCablePostBlock$Type = ($AbstractChanneledCablePostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractChanneledCablePostBlock_ = $AbstractChanneledCablePostBlock$Type;
}}
declare module "packages/commoble/morered/plate_blocks/$PlateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PlateBlock extends $Block {
static readonly "ATTACHMENT_DIRECTION": $DirectionProperty
static readonly "ROTATION": $IntegerProperty
static readonly "SHAPES_BY_DIRECTION": ($VoxelShape)[]
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
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlateBlock$Type = ($PlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlateBlock_ = $PlateBlock$Type;
}}
declare module "packages/commoble/morered/wires/$RedAlloyWireBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$LoadingCache, $LoadingCache$Type} from "packages/com/google/common/cache/$LoadingCache"
import {$PoweredWireBlock, $PoweredWireBlock$Type} from "packages/commoble/morered/wires/$PoweredWireBlock"

export class $RedAlloyWireBlock extends $PoweredWireBlock {
static readonly "NODE_SHAPES_DUNSWE": ($VoxelShape)[]
static readonly "RAYTRACE_BACKBOARDS": ($VoxelShape)[]
static readonly "LINE_SHAPES": ($VoxelShape)[]
static readonly "SHAPES_BY_STATE_INDEX": ($VoxelShape)[]
static readonly "VOXEL_CACHE": $LoadingCache<(long), ($VoxelShape)>
static readonly "DOWN": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "INTERIOR_FACES": ($BooleanProperty)[]
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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
export type $RedAlloyWireBlock$Type = ($RedAlloyWireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedAlloyWireBlock_ = $RedAlloyWireBlock$Type;
}}
declare module "packages/commoble/morered/wire_post/$BundledCablePostBlock" {
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$AbstractChanneledCablePostBlock, $AbstractChanneledCablePostBlock$Type} from "packages/commoble/morered/wire_post/$AbstractChanneledCablePostBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BundledCablePostBlock extends $AbstractChanneledCablePostBlock implements $EntityBlock {
static readonly "DIRECTION_OF_ATTACHMENT": $DirectionProperty
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundledCablePostBlock$Type = ($BundledCablePostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BundledCablePostBlock_ = $BundledCablePostBlock$Type;
}}
declare module "packages/commoble/morered/wire_post/$AbstractPoweredWirePostBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$AbstractPostBlock, $AbstractPostBlock$Type} from "packages/commoble/morered/wire_post/$AbstractPostBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractPoweredWirePostBlock extends $AbstractPostBlock implements $EntityBlock {
static readonly "POWER": $IntegerProperty
static readonly "NO_DIRECTIONS": $EnumSet<($Direction)>
static readonly "DIRECTION_OF_ATTACHMENT": $DirectionProperty
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Function$Type<($BlockState$Type), ($EnumSet$Type<($Direction$Type)>)>)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "notifyNeighbors"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
/**
 * 
 * @deprecated
 */
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
/**
 * 
 * @deprecated
 */
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getConnectableDirections"(arg0: $BlockState$Type): $EnumSet<($Direction)>
public "getNeighborPower"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): integer
public "getConnectionPower"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): integer
public "getNewPower"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPoweredWirePostBlock$Type = ($AbstractPoweredWirePostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPoweredWirePostBlock_ = $AbstractPoweredWirePostBlock$Type;
}}
declare module "packages/commoble/morered/wires/$WireBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WireBlockItem extends $BlockItem {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireBlockItem$Type = ($WireBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireBlockItem_ = $WireBlockItem$Type;
}}
declare module "packages/commoble/morered/bitwise_logic/$SingleInputBitwiseLogicPlateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ChanneledPowerSupplier, $ChanneledPowerSupplier$Type} from "packages/commoble/morered/api/$ChanneledPowerSupplier"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LogicFunction, $LogicFunction$Type} from "packages/commoble/morered/plate_blocks/$LogicFunction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BitwiseLogicPlateBlock, $BitwiseLogicPlateBlock$Type} from "packages/commoble/morered/bitwise_logic/$BitwiseLogicPlateBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SingleInputBitwiseLogicPlateBlock extends $BitwiseLogicPlateBlock {
static readonly "TICK_DELAY": integer
static readonly "DOUBLE_PLATE_SHAPES_BY_DIRECTION": ($VoxelShape)[]
static readonly "NO_POWER_SUPPLIER": $ChanneledPowerSupplier
static readonly "ATTACHMENT_DIRECTION": $DirectionProperty
static readonly "ROTATION": $IntegerProperty
static readonly "SHAPES_BY_DIRECTION": ($VoxelShape)[]
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $LogicFunction$Type)

public "canConnectToAdjacentCable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type, arg5: $Direction$Type, arg6: $Direction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleInputBitwiseLogicPlateBlock$Type = ($SingleInputBitwiseLogicPlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleInputBitwiseLogicPlateBlock_ = $SingleInputBitwiseLogicPlateBlock$Type;
}}
declare module "packages/commoble/morered/wire_post/$WireSpoolItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WireSpoolItem extends $Item {
static readonly "LAST_POST_POS": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $TagKey$Type<($Block$Type)>)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "shouldRemoveConnection"(arg0: $BlockPos$Type, arg1: $Level$Type, arg2: $Entity$Type): boolean
public static "breakPendingConnection"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Entity$Type, arg3: $Level$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireSpoolItem$Type = ($WireSpoolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireSpoolItem_ = $WireSpoolItem$Type;
}}
declare module "packages/commoble/morered/plate_blocks/$RedstonePlateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$InputSide, $InputSide$Type} from "packages/commoble/morered/plate_blocks/$InputSide"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PlateBlock, $PlateBlock$Type} from "packages/commoble/morered/plate_blocks/$PlateBlock"

export class $RedstonePlateBlock extends $PlateBlock {
static readonly "OUTPUT_STRENGTH": integer
static readonly "TICK_DELAY": integer
static readonly "ATTACHMENT_DIRECTION": $DirectionProperty
static readonly "ROTATION": $IntegerProperty
static readonly "SHAPES_BY_DIRECTION": ($VoxelShape)[]
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
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "notifyNeighbors"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
/**
 * 
 * @deprecated
 */
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getInputSides"(): ($InputSide)[]
public "hasInputPower"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
public "getOutputSides"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $EnumSet<($Direction)>
get "inputSides"(): ($InputSide)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstonePlateBlock$Type = ($RedstonePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstonePlateBlock_ = $RedstonePlateBlock$Type;
}}
declare module "packages/commoble/morered/api/$ChanneledPowerSupplier" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ChanneledPowerSupplier {

 "getPowerOnChannel"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: integer): integer

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: integer): integer
}

export namespace $ChanneledPowerSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChanneledPowerSupplier$Type = ($ChanneledPowerSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChanneledPowerSupplier_ = $ChanneledPowerSupplier$Type;
}}
declare module "packages/commoble/morered/soldering/$SolderingTableBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SolderingTableBlock extends $Block {
static readonly "SHAPE": $VoxelShape
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolderingTableBlock$Type = ($SolderingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolderingTableBlock_ = $SolderingTableBlock$Type;
}}
declare module "packages/commoble/morered/bitwise_logic/$BitwiseLogicPlateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$ChanneledPowerSupplier, $ChanneledPowerSupplier$Type} from "packages/commoble/morered/api/$ChanneledPowerSupplier"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PlateBlock, $PlateBlock$Type} from "packages/commoble/morered/plate_blocks/$PlateBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BitwiseLogicPlateBlock extends $PlateBlock implements $EntityBlock {
static readonly "TICK_DELAY": integer
static readonly "DOUBLE_PLATE_SHAPES_BY_DIRECTION": ($VoxelShape)[]
static readonly "NO_POWER_SUPPLIER": $ChanneledPowerSupplier
static readonly "ATTACHMENT_DIRECTION": $DirectionProperty
static readonly "ROTATION": $IntegerProperty
static readonly "SHAPES_BY_DIRECTION": ($VoxelShape)[]
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

public "canConnectToAdjacentCable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type, arg5: $Direction$Type, arg6: $Direction$Type): boolean
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
/**
 * 
 * @deprecated
 */
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BitwiseLogicPlateBlock$Type = ($BitwiseLogicPlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BitwiseLogicPlateBlock_ = $BitwiseLogicPlateBlock$Type;
}}
declare module "packages/commoble/morered/wire_post/$BundledCableRelayPlateBlock" {
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractChanneledCablePostBlock, $AbstractChanneledCablePostBlock$Type} from "packages/commoble/morered/wire_post/$AbstractChanneledCablePostBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BundledCableRelayPlateBlock extends $AbstractChanneledCablePostBlock implements $EntityBlock {
static readonly "DIRECTION_OF_ATTACHMENT": $DirectionProperty
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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

public "canConnectToAdjacentCable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type, arg5: $Direction$Type, arg6: $Direction$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundledCableRelayPlateBlock$Type = ($BundledCableRelayPlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BundledCableRelayPlateBlock_ = $BundledCableRelayPlateBlock$Type;
}}
declare module "packages/commoble/morered/wire_post/$AbstractPostBlock" {
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractPostBlock extends $Block {
static readonly "DIRECTION_OF_ATTACHMENT": $DirectionProperty
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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
/**
 * 
 * @deprecated
 */
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "updatePostSet"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BiConsumer$Type<($Set$Type<($BlockPos$Type)>), ($BlockPos$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPostBlock$Type = ($AbstractPostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPostBlock_ = $AbstractPostBlock$Type;
}}
declare module "packages/commoble/morered/wires/$AbstractWireBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$LoadingCache, $LoadingCache$Type} from "packages/com/google/common/cache/$LoadingCache"

export class $AbstractWireBlock extends $Block {
static readonly "DOWN": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "INTERIOR_FACES": ($BooleanProperty)[]
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: ($VoxelShape$Type)[], arg2: ($VoxelShape$Type)[], arg3: $LoadingCache$Type<(long), ($VoxelShape$Type)>, arg4: boolean)

public static "canWireConnectToAdjacentWireOrCable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type, arg5: $Direction$Type, arg6: $Direction$Type): boolean
public static "getShapeIndex"(arg0: $BlockState$Type): integer
public "destroyClickedSegment"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $Direction$Type, arg5: boolean): void
public static "makeVoxelShapes"(arg0: ($VoxelShape$Type)[], arg1: ($VoxelShape$Type)[]): ($VoxelShape)[]
public static "getLineShape"(arg0: ($VoxelShape$Type)[], arg1: integer, arg2: integer): $VoxelShape
public "isEmptyWireBlock"(arg0: $BlockState$Type): boolean
public static "makeVoxelCache"(arg0: ($VoxelShape$Type)[], arg1: ($VoxelShape$Type)[]): $LoadingCache<(long), ($VoxelShape)>
public "getWireCount"(arg0: $BlockState$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getCachedExpandedShapeVoxel"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $VoxelShape
public "getExpandedShapeIndex"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): long
public static "makeExpandedShapeForIndex"(arg0: ($VoxelShape$Type)[], arg1: ($VoxelShape$Type)[], arg2: long): $VoxelShape
public "getInteriorFaceToBreak"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $BlockHitResult$Type, arg4: float): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWireBlock$Type = ($AbstractWireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractWireBlock_ = $AbstractWireBlock$Type;
}}
declare module "packages/commoble/morered/$HexidecrubrometerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $HexidecrubrometerBlock extends $Block {
static readonly "POWER": $IntegerProperty
static readonly "READING_FACE": $EnumProperty<($AttachFace)>
static readonly "ROTATION": $EnumProperty<($Direction)>
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
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public static "getInputValue"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): integer
public static "getInputValue"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public static "getReadingDirection"(arg0: $BlockState$Type): $Direction
public static "getReadingDirection"(arg0: $AttachFace$Type, arg1: $Direction$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HexidecrubrometerBlock$Type = ($HexidecrubrometerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HexidecrubrometerBlock_ = $HexidecrubrometerBlock$Type;
}}
declare module "packages/commoble/morered/wires/$PoweredWireBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AbstractWireBlock, $AbstractWireBlock$Type} from "packages/commoble/morered/wires/$AbstractWireBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LoadingCache, $LoadingCache$Type} from "packages/com/google/common/cache/$LoadingCache"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PoweredWireBlock extends $AbstractWireBlock implements $EntityBlock {
static readonly "DOWN": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "INTERIOR_FACES": ($BooleanProperty)[]
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: ($VoxelShape$Type)[], arg2: ($VoxelShape$Type)[], arg3: $LoadingCache$Type<(long), ($VoxelShape$Type)>, arg4: boolean)

public "getExpandedPower"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type, arg5: $Direction$Type, arg6: $Direction$Type): integer
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredWireBlock$Type = ($PoweredWireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredWireBlock_ = $PoweredWireBlock$Type;
}}
declare module "packages/commoble/morered/bitwise_logic/$TwoInputBitwiseLogicPlateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ChanneledPowerSupplier, $ChanneledPowerSupplier$Type} from "packages/commoble/morered/api/$ChanneledPowerSupplier"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LogicFunction, $LogicFunction$Type} from "packages/commoble/morered/plate_blocks/$LogicFunction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BitwiseLogicPlateBlock, $BitwiseLogicPlateBlock$Type} from "packages/commoble/morered/bitwise_logic/$BitwiseLogicPlateBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TwoInputBitwiseLogicPlateBlock extends $BitwiseLogicPlateBlock {
static readonly "TICK_DELAY": integer
static readonly "DOUBLE_PLATE_SHAPES_BY_DIRECTION": ($VoxelShape)[]
static readonly "NO_POWER_SUPPLIER": $ChanneledPowerSupplier
static readonly "ATTACHMENT_DIRECTION": $DirectionProperty
static readonly "ROTATION": $IntegerProperty
static readonly "SHAPES_BY_DIRECTION": ($VoxelShape)[]
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $LogicFunction$Type)

public "canConnectToAdjacentCable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type, arg5: $Direction$Type, arg6: $Direction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwoInputBitwiseLogicPlateBlock$Type = ($TwoInputBitwiseLogicPlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwoInputBitwiseLogicPlateBlock_ = $TwoInputBitwiseLogicPlateBlock$Type;
}}
declare module "packages/commoble/morered/plate_blocks/$InputSide" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InputSide extends $Enum<($InputSide)> {
static readonly "A": $InputSide
static readonly "B": $InputSide
static readonly "C": $InputSide
readonly "property": $BooleanProperty
readonly "rotationsFromOutput": integer


public static "values"(): ($InputSide)[]
public static "valueOf"(arg0: string): $InputSide
public "isBlockReceivingPower"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputSide$Type = (("a") | ("b") | ("c")) | ($InputSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputSide_ = $InputSide$Type;
}}
declare module "packages/commoble/morered/wires/$BundledCableBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractWireBlock, $AbstractWireBlock$Type} from "packages/commoble/morered/wires/$AbstractWireBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LoadingCache, $LoadingCache$Type} from "packages/com/google/common/cache/$LoadingCache"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BundledCableBlock extends $AbstractWireBlock implements $EntityBlock {
static readonly "NODE_SHAPES_DUNSWE": ($VoxelShape)[]
static readonly "RAYTRACE_BACKBOARDS": ($VoxelShape)[]
static readonly "LINE_SHAPES": ($VoxelShape)[]
static readonly "SHAPES_BY_STATE_INDEX": ($VoxelShape)[]
static readonly "VOXEL_CACHE": $LoadingCache<(long), ($VoxelShape)>
static readonly "DOWN": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "INTERIOR_FACES": ($BooleanProperty)[]
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundledCableBlock$Type = ($BundledCableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BundledCableBlock_ = $BundledCableBlock$Type;
}}
declare module "packages/commoble/morered/mixin/$MultiPlayerGameModeAccess" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $MultiPlayerGameModeAccess {

 "callSameDestroyTarget"(arg0: $BlockPos$Type): boolean
 "setDestroyDelay"(arg0: integer): void
 "setDestroyProgress"(arg0: float): void
 "getDestroyBlockPos"(): $BlockPos
 "setIsDestroying"(arg0: boolean): void
 "setDestroyTicks"(arg0: float): void
}

export namespace $MultiPlayerGameModeAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPlayerGameModeAccess$Type = ($MultiPlayerGameModeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPlayerGameModeAccess_ = $MultiPlayerGameModeAccess$Type;
}}
declare module "packages/commoble/morered/soldering/$SolderingRecipeSerializer" {
import {$ShapelessRecipe$Serializer, $ShapelessRecipe$Serializer$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SolderingRecipeSerializer extends $ShapelessRecipe$Serializer {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolderingRecipeSerializer$Type = ($SolderingRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolderingRecipeSerializer_ = $SolderingRecipeSerializer$Type;
}}
declare module "packages/commoble/morered/wire_post/$WirePostPlateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$OctahedralGroup, $OctahedralGroup$Type} from "packages/com/mojang/math/$OctahedralGroup"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$AbstractPoweredWirePostBlock, $AbstractPoweredWirePostBlock$Type} from "packages/commoble/morered/wire_post/$AbstractPoweredWirePostBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $WirePostPlateBlock extends $AbstractPoweredWirePostBlock {
static readonly "POWER": $IntegerProperty
static readonly "NO_DIRECTIONS": $EnumSet<($Direction)>
static readonly "DIRECTION_OF_ATTACHMENT": $DirectionProperty
static readonly "TRANSFORM": $EnumProperty<($OctahedralGroup)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Function$Type<($BlockState$Type), ($EnumSet$Type<($Direction$Type)>)>)

public static "getRedstoneConnectionDirectionsForEmptyPlate"(arg0: $BlockState$Type): $EnumSet<($Direction)>
public static "getRedstoneConnectionDirectionsForRelayPlate"(arg0: $BlockState$Type): $EnumSet<($Direction)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirePostPlateBlock$Type = ($WirePostPlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirePostPlateBlock_ = $WirePostPlateBlock$Type;
}}
declare module "packages/commoble/morered/plate_blocks/$PulseGateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RedstonePlateBlock, $RedstonePlateBlock$Type} from "packages/commoble/morered/plate_blocks/$RedstonePlateBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$InputSide, $InputSide$Type} from "packages/commoble/morered/plate_blocks/$InputSide"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PulseGateBlock extends $RedstonePlateBlock {
static readonly "INPUT_B": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "INPUT_SIDES": ($InputSide)[]
static readonly "PULSE_DURATION": integer
static readonly "OUTPUT_STRENGTH": integer
static readonly "TICK_DELAY": integer
static readonly "ATTACHMENT_DIRECTION": $DirectionProperty
static readonly "ROTATION": $IntegerProperty
static readonly "SHAPES_BY_DIRECTION": ($VoxelShape)[]
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
/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getInputSides"(): ($InputSide)[]
public "getOutputSides"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $EnumSet<($Direction)>
get "inputSides"(): ($InputSide)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PulseGateBlock$Type = ($PulseGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PulseGateBlock_ = $PulseGateBlock$Type;
}}
