declare module "packages/me/duquee/createutilities/blocks/voidtypes/battery/$VoidBatteryTileEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoidBattery, $VoidBattery$Type} from "packages/me/duquee/createutilities/blocks/voidtypes/battery/$VoidBattery"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VoidBatteryTileEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "createLink"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getBattery"(): $VoidBattery
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "battery"(): $VoidBattery
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidBatteryTileEntity$Type = ($VoidBatteryTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidBatteryTileEntity_ = $VoidBatteryTileEntity$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/voidtypes/tank/$VoidTankBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$VoidTankTileEntity, $VoidTankTileEntity$Type} from "packages/me/duquee/createutilities/blocks/voidtypes/tank/$VoidTankTileEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $VoidTankBlock extends $Block implements $IWrenchable, $IBE<($VoidTankTileEntity)> {
static readonly "CLOSED": $BooleanProperty
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

public "getBlockEntityClass"(): $Class<($VoidTankTileEntity)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($VoidTankTileEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($VoidTankTileEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($VoidTankTileEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VoidTankTileEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($VoidTankTileEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidTankBlock$Type = ($VoidTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidTankBlock_ = $VoidTankBlock$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/voidtypes/battery/$VoidBatteryBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoidBatteryTileEntity, $VoidBatteryTileEntity$Type} from "packages/me/duquee/createutilities/blocks/voidtypes/battery/$VoidBatteryTileEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $VoidBatteryBlock extends $HorizontalDirectionalBlock implements $IWrenchable, $IBE<($VoidBatteryTileEntity)> {
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

public "getBlockEntityClass"(): $Class<($VoidBatteryTileEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($VoidBatteryTileEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($VoidBatteryTileEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($VoidBatteryTileEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VoidBatteryTileEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($VoidBatteryTileEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidBatteryBlock$Type = ($VoidBatteryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidBatteryBlock_ = $VoidBatteryBlock$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/lgearbox/$LShapedGearboxBlock" {
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$GearboxBlockEntity, $GearboxBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/gearbox/$GearboxBlockEntity"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ITransformableBlock, $ITransformableBlock$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LShapedGearboxBlock extends $KineticBlock implements $IBE<($GearboxBlockEntity)>, $ITransformableBlock {
static readonly "FACING_1": $DirectionProperty
static readonly "FACING_2": $DirectionProperty
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

public "transform"(arg0: $BlockState$Type, arg1: $StructureTransform$Type): $BlockState
public static "rotate"(arg0: $Direction$Type, arg1: $Direction$Axis$Type, arg2: $Rotation$Type): $Direction
public static "hasShaftTowards"(arg0: $BlockState$Type, arg1: $Direction$Type): boolean
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "getBlockEntityClass"(): $Class<($GearboxBlockEntity)>
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public static "getRotation"(arg0: $Direction$Type): $Rotation
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<($GearboxBlockEntity)>
public static "getAbsolute"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getRelative"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getInverse"(arg0: $Rotation$Type): $Rotation
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($GearboxBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($GearboxBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($GearboxBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $GearboxBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($GearboxBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($GearboxBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LShapedGearboxBlock$Type = ($LShapedGearboxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LShapedGearboxBlock_ = $LShapedGearboxBlock$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/gearcube/$GearcubeBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$GearboxBlockEntity, $GearboxBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/gearbox/$GearboxBlockEntity"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $GearcubeBlock extends $KineticBlock implements $IBE<($GearboxBlockEntity)> {
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

public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityClass"(): $Class<($GearboxBlockEntity)>
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntityType"(): $BlockEntityType<($GearboxBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($GearboxBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($GearboxBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($GearboxBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $GearboxBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($GearboxBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($GearboxBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearcubeBlock$Type = ($GearcubeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearcubeBlock_ = $GearcubeBlock$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/voidtypes/chest/$VoidChestTileEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$VoidChestInventory, $VoidChestInventory$Type} from "packages/me/duquee/createutilities/blocks/voidtypes/chest/$VoidChestInventory"

export class $VoidChestTileEntity extends $SmartBlockEntity implements $MenuProvider {
 "lid": $LerpedFloat

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "createLink"(): void
public "tick"(): void
public "isClosed"(): boolean
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "getDisplayName"(): $Component
public "getItemStorage"(): $VoidChestInventory
get "closed"(): boolean
get "displayName"(): $Component
get "itemStorage"(): $VoidChestInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidChestTileEntity$Type = ($VoidChestTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidChestTileEntity_ = $VoidChestTileEntity$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/voidtypes/tank/$VoidTankTileEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VoidTankTileEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "createLink"(): void
public "isClosed"(): boolean
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getFluidStorage"(): $FluidTank
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "closed"(): boolean
get "fluidStorage"(): $FluidTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidTankTileEntity$Type = ($VoidTankTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidTankTileEntity_ = $VoidTankTileEntity$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/voidtypes/chest/$VoidChestBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$VoidChestTileEntity, $VoidChestTileEntity$Type} from "packages/me/duquee/createutilities/blocks/voidtypes/chest/$VoidChestTileEntity"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $VoidChestBlock extends $HorizontalDirectionalBlock implements $IWrenchable, $SimpleWaterloggedBlock, $IBE<($VoidChestTileEntity)> {
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

public "getBlockEntityClass"(): $Class<($VoidChestTileEntity)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($VoidChestTileEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($VoidChestTileEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($VoidChestTileEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VoidChestTileEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "blockEntityClass"(): $Class<($VoidChestTileEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidChestBlock$Type = ($VoidChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidChestBlock_ = $VoidChestBlock$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/voidtypes/motor/$VoidMotorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$VoidMotorTileEntity, $VoidMotorTileEntity$Type} from "packages/me/duquee/createutilities/blocks/voidtypes/motor/$VoidMotorTileEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalKineticBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $VoidMotorBlock extends $DirectionalKineticBlock implements $SimpleWaterloggedBlock, $IBE<($VoidMotorTileEntity)> {
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

public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityClass"(): $Class<($VoidMotorTileEntity)>
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($VoidMotorTileEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($VoidMotorTileEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($VoidMotorTileEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VoidMotorTileEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "blockEntityClass"(): $Class<($VoidMotorTileEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidMotorBlock$Type = ($VoidMotorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidMotorBlock_ = $VoidMotorBlock$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/voidtypes/chest/$VoidChestInventory" {
import {$VoidMotorNetworkHandler$NetworkKey, $VoidMotorNetworkHandler$NetworkKey$Type} from "packages/me/duquee/createutilities/blocks/voidtypes/motor/$VoidMotorNetworkHandler$NetworkKey"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"

export class $VoidChestInventory extends $ItemStackHandler {

constructor(arg0: $VoidMotorNetworkHandler$NetworkKey$Type)

public "isEmpty"(): boolean
public "getKey"(): $VoidMotorNetworkHandler$NetworkKey
get "empty"(): boolean
get "key"(): $VoidMotorNetworkHandler$NetworkKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidChestInventory$Type = ($VoidChestInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidChestInventory_ = $VoidChestInventory$Type;
}}
declare module "packages/me/duquee/createutilities/mixins/$SceneBuilderAccessor" {
import {$PonderScene, $PonderScene$Type} from "packages/com/simibubi/create/foundation/ponder/$PonderScene"

export interface $SceneBuilderAccessor {

 "getScene"(): $PonderScene

(): $PonderScene
}

export namespace $SceneBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneBuilderAccessor$Type = ($SceneBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneBuilderAccessor_ = $SceneBuilderAccessor$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/voidtypes/motor/$VoidMotorNetworkHandler$NetworkKey" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RedstoneLinkNetworkHandler$Frequency, $RedstoneLinkNetworkHandler$Frequency$Type} from "packages/com/simibubi/create/content/redstone/link/$RedstoneLinkNetworkHandler$Frequency"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"

export class $VoidMotorNetworkHandler$NetworkKey {
readonly "owner": $GameProfile
readonly "frequencies": $Couple<($RedstoneLinkNetworkHandler$Frequency)>

constructor(arg0: $GameProfile$Type, arg1: $RedstoneLinkNetworkHandler$Frequency$Type, arg2: $RedstoneLinkNetworkHandler$Frequency$Type)

public static "fromString"(arg0: string): $VoidMotorNetworkHandler$NetworkKey
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "fromBuffer"(arg0: $FriendlyByteBuf$Type): $VoidMotorNetworkHandler$NetworkKey
public "serialize"(): $CompoundTag
public static "deserialize"(arg0: $CompoundTag$Type): $VoidMotorNetworkHandler$NetworkKey
public "writeToBuffer"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidMotorNetworkHandler$NetworkKey$Type = ($VoidMotorNetworkHandler$NetworkKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidMotorNetworkHandler$NetworkKey_ = $VoidMotorNetworkHandler$NetworkKey$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/voidtypes/motor/$VoidMotorTileEntity" {
import {$IRotate, $IRotate$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VoidMotorTileEntity extends $KineticBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "createLink"(): void
public "propagateRotationTo"(arg0: $KineticBlockEntity$Type, arg1: $BlockState$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: boolean, arg5: boolean): float
public "addPropagationLocations"(arg0: $IRotate$Type, arg1: $BlockState$Type, arg2: $List$Type<($BlockPos$Type)>): $List<($BlockPos)>
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "onConnectToVoidNetwork"(): void
public "onDisconnectFromVoidNetwork"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidMotorTileEntity$Type = ($VoidMotorTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidMotorTileEntity_ = $VoidMotorTileEntity$Type;
}}
declare module "packages/me/duquee/createutilities/blocks/voidtypes/battery/$VoidBattery" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$VoidMotorNetworkHandler$NetworkKey, $VoidMotorNetworkHandler$NetworkKey$Type} from "packages/me/duquee/createutilities/blocks/voidtypes/motor/$VoidMotorNetworkHandler$NetworkKey"
import {$EnergyStorage, $EnergyStorage$Type} from "packages/net/minecraftforge/energy/$EnergyStorage"

export class $VoidBattery extends $EnergyStorage {

constructor(arg0: $VoidMotorNetworkHandler$NetworkKey$Type)

public "isEmpty"(): boolean
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "deserializeNBT"(arg0: $CompoundTag$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidBattery$Type = ($VoidBattery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidBattery_ = $VoidBattery$Type;
}}
