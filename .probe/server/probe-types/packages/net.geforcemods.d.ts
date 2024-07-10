declare module "packages/net/geforcemods/securitycraft/items/$TaserItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TaserItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: boolean)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaserItem$Type = ($TaserItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaserItem_ = $TaserItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$BouncingBettyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ExplosiveBlock, $ExplosiveBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/mines/$ExplosiveBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $BouncingBettyBlock extends $ExplosiveBlock implements $SimpleWaterloggedBlock {
static readonly "DEACTIVATED": $BooleanProperty
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

public "isActive"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "explode"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "defuseMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "isDefusable"(): boolean
public "activateMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "defusable"(): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BouncingBettyBlock$Type = ($BouncingBettyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BouncingBettyBlock_ = $BouncingBettyBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseReinforcedBlock extends $OwnableBlock implements $IReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>)

public "getVanillaBlock"(): $Block
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "isConduitFrame"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): boolean
public "onTreeGrow"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg3: $RandomSource$Type, arg4: $BlockPos$Type, arg5: $TreeConfiguration$Type): boolean
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseReinforcedBlock$Type = ($BaseReinforcedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseReinforcedBlock_ = $BaseReinforcedBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$IMSBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $IMSBlock extends $OwnableBlock implements $SimpleWaterloggedBlock {
static readonly "MINES": $IntegerProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
export type $IMSBlock$Type = ($IMSBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMSBlock_ = $IMSBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedLanternBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ReinforcedLanternBlock extends $BaseReinforcedBlock {
static readonly "HANGING": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedLanternBlock$Type = ($ReinforcedLanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedLanternBlock_ = $ReinforcedLanternBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blockentities/$RiftStabilizerBlockEntity$TeleportationType" {
import {$EntityTeleportEvent, $EntityTeleportEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityTeleportEvent"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RiftStabilizerBlockEntity$TeleportationType extends $Enum<($RiftStabilizerBlockEntity$TeleportationType)> {
static readonly "CHORUS_FRUIT": $RiftStabilizerBlockEntity$TeleportationType
static readonly "ENDER_PEARL": $RiftStabilizerBlockEntity$TeleportationType
static readonly "ENDERMAN": $RiftStabilizerBlockEntity$TeleportationType
static readonly "SHULKER": $RiftStabilizerBlockEntity$TeleportationType
static readonly "MODDED": $RiftStabilizerBlockEntity$TeleportationType
readonly "label": string


public "toString"(): string
public static "values"(): ($RiftStabilizerBlockEntity$TeleportationType)[]
public static "valueOf"(arg0: string): $RiftStabilizerBlockEntity$TeleportationType
public static "getTypeFromEvent"(arg0: $EntityTeleportEvent$Type): $RiftStabilizerBlockEntity$TeleportationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RiftStabilizerBlockEntity$TeleportationType$Type = (("shulker") | ("ender_pearl") | ("chorus_fruit") | ("modded") | ("enderman")) | ($RiftStabilizerBlockEntity$TeleportationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RiftStabilizerBlockEntity$TeleportationType_ = $RiftStabilizerBlockEntity$TeleportationType$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$DeepslateMineBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BaseFullMineBlock, $BaseFullMineBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/mines/$BaseFullMineBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $DeepslateMineBlock extends $BaseFullMineBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeepslateMineBlock$Type = ($DeepslateMineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeepslateMineBlock_ = $DeepslateMineBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/misc/$ModuleType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ModuleItem, $ModuleItem$Type} from "packages/net/geforcemods/securitycraft/items/$ModuleItem"

export class $ModuleType extends $Enum<($ModuleType)> {
static readonly "REDSTONE": $ModuleType
static readonly "ALLOWLIST": $ModuleType
static readonly "DENYLIST": $ModuleType
static readonly "HARMING": $ModuleType
static readonly "SMART": $ModuleType
static readonly "STORAGE": $ModuleType
static readonly "DISGUISE": $ModuleType
static readonly "SPEED": $ModuleType


public static "values"(): ($ModuleType)[]
public static "valueOf"(arg0: string): $ModuleType
public "getItem"(): $ModuleItem
public "getTranslationKey"(): string
get "item"(): $ModuleItem
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleType$Type = (("allowlist") | ("denylist") | ("harming") | ("storage") | ("disguise") | ("redstone") | ("smart") | ("speed")) | ($ModuleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleType_ = $ModuleType$Type;
}}
declare module "packages/net/geforcemods/securitycraft/compat/$IOverlayDisplay" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IOverlayDisplay {

 "shouldShowSCInfo"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
 "getDisplayStack"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $ItemStack
}

export namespace $IOverlayDisplay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverlayDisplay$Type = ($IOverlayDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOverlayDisplay_ = $IOverlayDisplay$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blockentities/$AbstractKeypadFurnaceBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractFurnaceBlockEntity, $AbstractFurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$AbstractFurnaceBlockEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICustomizable, $ICustomizable$Type} from "packages/net/geforcemods/securitycraft/api/$ICustomizable"
import {$ILockable, $ILockable$Type} from "packages/net/geforcemods/securitycraft/api/$ILockable"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IOwnable, $IOwnable$Type} from "packages/net/geforcemods/securitycraft/api/$IOwnable"
import {$IModuleInventory, $IModuleInventory$Type} from "packages/net/geforcemods/securitycraft/api/$IModuleInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ContainerData, $ContainerData$Type} from "packages/net/minecraft/world/inventory/$ContainerData"
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPasscodeProtected, $IPasscodeProtected$Type} from "packages/net/geforcemods/securitycraft/api/$IPasscodeProtected"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Option, $Option$Type} from "packages/net/geforcemods/securitycraft/api/$Option"
import {$OwnableEntity, $OwnableEntity$Type} from "packages/net/minecraft/world/entity/$OwnableEntity"
import {$Owner, $Owner$Type} from "packages/net/geforcemods/securitycraft/api/$Owner"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$RecipeManager$CachedCheck, $RecipeManager$CachedCheck$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager$CachedCheck"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractKeypadFurnaceBlockEntity extends $AbstractFurnaceBlockEntity implements $IPasscodeProtected, $MenuProvider, $IOwnable, $IModuleInventory, $ICustomizable, $ILockable {
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


public "getOwner"(): $Owner
public "setOwner"(arg0: string, arg1: string): void
public "activate"(arg0: $Player$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "recheckOpen"(): void
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $AbstractKeypadFurnaceBlockEntity$Type): void
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getCooldownEnd"(): long
public "isOnCooldown"(): boolean
public "reviveCaps"(): void
public "invalidateCaps"(): void
public "getItem"(arg0: integer): $ItemStack
public "isDisabled"(): boolean
public "getInventory"(): $NonNullList<($ItemStack)>
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "setRemoved"(): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "getModelData"(): $ModelData
public "isModuleEnabled"(arg0: $ModuleType$Type): boolean
public "getSaltKey"(): $UUID
public "customOptions"(): ($Option<(any)>)[]
public "myPos"(): $BlockPos
public "myLevel"(): $Level
public "toggleModuleState"(arg0: $ModuleType$Type, arg1: boolean): void
public "shouldAttemptCodebreak"(arg0: $Player$Type): boolean
public "getPasscode"(): (byte)[]
public "setPasscode"(arg0: (byte)[]): void
public "setSaltKey"(arg0: $UUID$Type): void
public "acceptedModules"(): ($ModuleType)[]
public "enableHack"(): boolean
public "onModuleRemoved"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
public "onModuleInserted"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
public "sendsDenylistMessage"(): boolean
public "sendsAllowlistMessage"(): boolean
public "getFurnaceData"(): $ContainerData
public "startCooldown"(): void
public "loadSaltKey"(arg0: $CompoundTag$Type): void
public "loadPasscode"(arg0: $CompoundTag$Type): void
public "useCodebreaker"(arg0: $Player$Type): void
public "getSalt"(): (byte)[]
public "verifyPasscodeSet"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $IOwnable$Type, arg3: $Player$Type): boolean
public "openPasscodeGUI"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
public "openSetPasscodeScreen"(arg0: $ServerPlayer$Type, arg1: $BlockPos$Type): void
public "onIncorrectPasscodeEntered"(arg0: $Player$Type, arg1: string): void
public "hashAndSetPasscode"(arg0: string, arg1: (byte)[]): void
public "hashAndSetPasscode"(arg0: string): void
public "getDisplayName"(): $Component
public "isOwnedBy"(arg0: $Entity$Type): boolean
public "isOwnedBy"(arg0: $Owner$Type): boolean
public "onValidate"(): void
public "ignoresOwner"(): boolean
public "onOwnerChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $Owner$Type, arg5: $Owner$Type): void
public "needsValidation"(): boolean
public "allowsOwnableEntity"(arg0: $OwnableEntity$Type): boolean
public "getModule"(arg0: $ModuleType$Type): $ItemStack
public "getSlots"(): integer
public "writeModuleInventory"(arg0: $CompoundTag$Type): $CompoundTag
public "getMaxNumberOfModules"(): integer
public "readModuleInventory"(arg0: $CompoundTag$Type): $NonNullList<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "isDenied"(arg0: $Entity$Type): boolean
public "dropAllModules"(): void
public "isAllowed"(arg0: $Entity$Type): boolean
public "isAllowed"(arg0: string): boolean
public "getModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
public static "getBaseModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
/**
 * 
 * @deprecated
 */
public "hasModule"(arg0: $ModuleType$Type): boolean
public "readModuleStates"(arg0: $CompoundTag$Type): $Map<($ModuleType), (boolean)>
public "writeModuleStates"(arg0: $CompoundTag$Type): $CompoundTag
public "insertModule"(arg0: $ItemStack$Type, arg1: boolean): void
public "getInsertedModules"(): $List<($ModuleType)>
public "fixSlotId"(arg0: integer): integer
public "getModuleInSlot"(arg0: integer): $ItemStack
public "shouldDropModules"(): boolean
public "acceptsModule"(arg0: $ModuleType$Type): boolean
public "removeModule"(arg0: $ModuleType$Type, arg1: boolean): void
public "onOptionChanged"<T>(arg0: $Option$Type<(T)>): void
public "readOptions"(arg0: $CompoundTag$Type): void
public "writeOptions"(arg0: $CompoundTag$Type): $CompoundTag
public "isLocked"(): boolean
public "getThisBlockEntity"(): $BlockEntity
public "disableInteractionWhenLocked"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "handleCodebreaking"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getSlotLimit"(i: integer): integer
public "isMutable"(): boolean
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "owner"(): $Owner
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "cooldownEnd"(): long
get "onCooldown"(): boolean
get "disabled"(): boolean
get "inventory"(): $NonNullList<($ItemStack)>
get "updateTag"(): $CompoundTag
get "modelData"(): $ModelData
get "saltKey"(): $UUID
get "passcode"(): (byte)[]
set "passcode"(value: (byte)[])
set "saltKey"(value: $UUID$Type)
get "furnaceData"(): $ContainerData
get "salt"(): (byte)[]
get "displayName"(): $Component
get "slots"(): integer
get "maxNumberOfModules"(): integer
get "insertedModules"(): $List<($ModuleType)>
get "locked"(): boolean
get "thisBlockEntity"(): $BlockEntity
get "mutable"(): boolean
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractKeypadFurnaceBlockEntity$Type = ($AbstractKeypadFurnaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractKeypadFurnaceBlockEntity_ = $AbstractKeypadFurnaceBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$ProtectoBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ProtectoBlock extends $DisguisableBlock {
static readonly "ACTIVATED": $BooleanProperty
static readonly "SHAPE": $VoxelShape
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtectoBlock$Type = ($ProtectoBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProtectoBlock_ = $ProtectoBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$FrameBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $FrameBlock extends $OwnableBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
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
export type $FrameBlock$Type = ($FrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameBlock_ = $FrameBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeypadBlastFurnaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$AbstractKeypadFurnaceBlock, $AbstractKeypadFurnaceBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$AbstractKeypadFurnaceBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $KeypadBlastFurnaceBlock extends $AbstractKeypadFurnaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypadBlastFurnaceBlock$Type = ($KeypadBlastFurnaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypadBlastFurnaceBlock_ = $KeypadBlastFurnaceBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedFenceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$FenceBlock, $FenceBlock$Type} from "packages/net/minecraft/world/level/block/$FenceBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ReinforcedFenceBlock extends $FenceBlock implements $IReinforcedBlock, $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedFenceBlock$Type = ($ReinforcedFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedFenceBlock_ = $ReinforcedFenceBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/commands/$LowercasedEnumArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $LowercasedEnumArgument<T extends $Enum<(T)>> implements $ArgumentType<(T)> {


public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
public static "enumArgument"<R extends $Enum<(R)>>(arg0: $Class$Type<(R)>): $LowercasedEnumArgument<(R)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LowercasedEnumArgument$Type<T> = ($LowercasedEnumArgument<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LowercasedEnumArgument_<T> = $LowercasedEnumArgument$Type<(T)>;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedCarpetBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReinforcedCarpetBlock extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedCarpetBlock$Type = ($ReinforcedCarpetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedCarpetBlock_ = $ReinforcedCarpetBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$KeypadChestItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KeypadChestItem extends $BlockItem {
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

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypadChestItem$Type = ($KeypadChestItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypadChestItem_ = $KeypadChestItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedObserverBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReinforcedObserverBlock extends $DisguisableBlock implements $IReinforcedBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedObserverBlock$Type = ($ReinforcedObserverBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedObserverBlock_ = $ReinforcedObserverBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/util/$IBlockMine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockMine {

}

export namespace $IBlockMine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockMine$Type = ($IBlockMine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockMine_ = $IBlockMine$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$PortableRadarBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $PortableRadarBlock extends $OwnableBlock implements $SimpleWaterloggedBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "togglePowerOutput"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: boolean): void
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
export type $PortableRadarBlock$Type = ($PortableRadarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableRadarBlock_ = $PortableRadarBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedObsidianBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ReinforcedObsidianBlock extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "isPortalFrame"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedObsidianBlock$Type = ($ReinforcedObsidianBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedObsidianBlock_ = $ReinforcedObsidianBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$TrophySystemBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TrophySystemBlock extends $DisguisableBlock {
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrophySystemBlock$Type = ($TrophySystemBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrophySystemBlock_ = $TrophySystemBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$OwnableFenceGateBlock" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $OwnableFenceGateBlock extends $FenceGateBlock implements $EntityBlock {
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $SoundEvent$Type, arg2: $SoundEvent$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwnableFenceGateBlock$Type = ($OwnableFenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwnableFenceGateBlock_ = $OwnableFenceGateBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$SentryItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SentryItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SentryItem$Type = ($SentryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SentryItem_ = $SentryItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedPistonHeadBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$PistonHeadBlock, $PistonHeadBlock$Type} from "packages/net/minecraft/world/level/block/piston/$PistonHeadBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$PistonType, $PistonType$Type} from "packages/net/minecraft/world/level/block/state/properties/$PistonType"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReinforcedPistonHeadBlock extends $PistonHeadBlock implements $EntityBlock, $IReinforcedBlock {
static readonly "TYPE": $EnumProperty<($PistonType)>
static readonly "SHORT": $BooleanProperty
static readonly "PLATFORM": float
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

public "isFittingBase"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedPistonHeadBlock$Type = ($ReinforcedPistonHeadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedPistonHeadBlock_ = $ReinforcedPistonHeadBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$FurnaceMineBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BaseFullMineBlock, $BaseFullMineBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/mines/$BaseFullMineBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FurnaceMineBlock extends $BaseFullMineBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "explodesWhenInteractedWith"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceMineBlock$Type = ($FurnaceMineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnaceMineBlock_ = $FurnaceMineBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/misc/$PageGroup" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $PageGroup extends $Enum<($PageGroup)> {
static readonly "NONE": $PageGroup
static readonly "REINFORCED": $PageGroup
static readonly "BLOCK_MINES": $PageGroup
static readonly "BUTTONS": $PageGroup
static readonly "PRESSURE_PLATES": $PageGroup
static readonly "FURNACE_MINES": $PageGroup
static readonly "KEYCARDS": $PageGroup
static readonly "SECRET_SIGNS": $PageGroup
static readonly "SECRET_HANGING_SIGNS": $PageGroup
static readonly "BLOCK_REINFORCERS": $PageGroup
static readonly "DISPLAY_CASES": $PageGroup
static readonly "FENCE_GATES": $PageGroup
static readonly "SECURITY_SEA_BOATS": $PageGroup


public static "values"(): ($PageGroup)[]
public static "valueOf"(arg0: string): $PageGroup
public "getTitle"(): string
public "setItems"(arg0: $Ingredient$Type): void
public "getSpecialInfoKey"(): string
public "getItems"(): $Ingredient
public "hasRecipeGrid"(): boolean
get "title"(): string
set "items"(value: $Ingredient$Type)
get "specialInfoKey"(): string
get "items"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PageGroup$Type = (("buttons") | ("block_reinforcers") | ("fence_gates") | ("furnace_mines") | ("keycards") | ("none") | ("secret_hanging_signs") | ("reinforced") | ("display_cases") | ("secret_signs") | ("security_sea_boats") | ("pressure_plates") | ("block_mines")) | ($PageGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageGroup_ = $PageGroup$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$LaserBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"

export class $LaserBlock extends $DisguisableBlock {
static readonly "POWERED": $BooleanProperty
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

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "destroyAdjacentLasers"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): void
public "setLaser"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Player$Type): void
public "setLaser"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserBlock$Type = ($LaserBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaserBlock_ = $LaserBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedGlazedTerracottaBlock" {
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReinforcedGlazedTerracottaBlock extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedGlazedTerracottaBlock$Type = ($ReinforcedGlazedTerracottaBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedGlazedTerracottaBlock_ = $ReinforcedGlazedTerracottaBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$Option" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Option$EntityDataWrappedOption, $Option$EntityDataWrappedOption$Type} from "packages/net/geforcemods/securitycraft/api/$Option$EntityDataWrappedOption"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"

export class $Option<T> {


public "getName"(): string
public "get"(): T
public "toString"(): string
public "load"(arg0: $CompoundTag$Type): void
public "getKey"(arg0: string): string
public "save"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type, arg1: T): void
public "setValue"(arg0: T): void
public "copy"(arg0: $Option$Type<(any)>): void
public "getDefaultValue"(): T
public "getMin"(): T
public "getMax"(): T
public "toggle"(): void
public "wrapForEntityData"(arg0: $EntityDataAccessor$Type<(T)>, arg1: $Supplier$Type<($SynchedEntityData$Type)>): $Option$EntityDataWrappedOption<(T)>
public "getDescriptionKey"(arg0: string): string
public "getIncrement"(): T
public "getDefaultInfo"(): $Component
public "isSlider"(): boolean
public "getValueText"(): $Component
get "name"(): string
set "value"(value: T)
get "defaultValue"(): T
get "min"(): T
get "max"(): T
get "increment"(): T
get "defaultInfo"(): $Component
get "slider"(): boolean
get "valueText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Option$Type<T> = ($Option<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Option_<T> = $Option$Type<(T)>;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedSnowyDirtBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SnowyDirtBlock, $SnowyDirtBlock$Type} from "packages/net/minecraft/world/level/block/$SnowyDirtBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ReinforcedSnowyDirtBlock extends $SnowyDirtBlock implements $IReinforcedBlock, $EntityBlock {
static readonly "SNOWY": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "onTreeGrow"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg3: $RandomSource$Type, arg4: $BlockPos$Type, arg5: $TreeConfiguration$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedSnowyDirtBlock$Type = ($ReinforcedSnowyDirtBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedSnowyDirtBlock_ = $ReinforcedSnowyDirtBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blockentities/$DisplayCaseBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ITickingBlockEntity, $ITickingBlockEntity$Type} from "packages/net/geforcemods/securitycraft/util/$ITickingBlockEntity"
import {$IPasscodeProtected, $IPasscodeProtected$Type} from "packages/net/geforcemods/securitycraft/api/$IPasscodeProtected"
import {$ILockable, $ILockable$Type} from "packages/net/geforcemods/securitycraft/api/$ILockable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Option, $Option$Type} from "packages/net/geforcemods/securitycraft/api/$Option"
import {$IOwnable, $IOwnable$Type} from "packages/net/geforcemods/securitycraft/api/$IOwnable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CustomizableBlockEntity, $CustomizableBlockEntity$Type} from "packages/net/geforcemods/securitycraft/api/$CustomizableBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"

export class $DisplayCaseBlockEntity extends $CustomizableBlockEntity implements $ITickingBlockEntity, $IPasscodeProtected, $ILockable {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isOpen"(): boolean
public "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getOpenness"(arg0: float): float
public "forceOpen"(arg0: boolean): void
public "activate"(arg0: $Player$Type): void
public "getRenderBoundingBox"(): $AABB
public "getCooldownEnd"(): long
public "isOnCooldown"(): boolean
public "isDisabled"(): boolean
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "setOpen"(arg0: boolean): void
public "getSaltKey"(): $UUID
public "setDisplayedStack"(arg0: $ItemStack$Type): void
public "getDisplayedStack"(): $ItemStack
public "customOptions"(): ($Option<(any)>)[]
public "shouldAttemptCodebreak"(arg0: $Player$Type): boolean
public "getPasscode"(): (byte)[]
public "setPasscode"(arg0: (byte)[]): void
public "setSaltKey"(arg0: $UUID$Type): void
public "acceptedModules"(): ($ModuleType)[]
public "sendsDenylistMessage"(): boolean
public "sendsAllowlistMessage"(): boolean
public "startCooldown"(): void
public "loadSaltKey"(arg0: $CompoundTag$Type): void
public "loadPasscode"(arg0: $CompoundTag$Type): void
public "useCodebreaker"(arg0: $Player$Type): void
public "getSalt"(): (byte)[]
public "verifyPasscodeSet"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $IOwnable$Type, arg3: $Player$Type): boolean
public "openPasscodeGUI"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
public "openSetPasscodeScreen"(arg0: $ServerPlayer$Type, arg1: $BlockPos$Type): void
public "onIncorrectPasscodeEntered"(arg0: $Player$Type, arg1: string): void
public "hashAndSetPasscode"(arg0: string, arg1: (byte)[]): void
public "hashAndSetPasscode"(arg0: string): void
public "isLocked"(): boolean
public "getThisBlockEntity"(): $BlockEntity
public "disableInteractionWhenLocked"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "handleCodebreaking"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public static "getBaseModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
get "open"(): boolean
get "renderBoundingBox"(): $AABB
get "cooldownEnd"(): long
get "onCooldown"(): boolean
get "disabled"(): boolean
set "open"(value: boolean)
get "saltKey"(): $UUID
set "displayedStack"(value: $ItemStack$Type)
get "displayedStack"(): $ItemStack
get "passcode"(): (byte)[]
set "passcode"(value: (byte)[])
set "saltKey"(value: $UUID$Type)
get "salt"(): (byte)[]
get "locked"(): boolean
get "thisBlockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayCaseBlockEntity$Type = ($DisplayCaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayCaseBlockEntity_ = $DisplayCaseBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$SentryRemoteAccessToolItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
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
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SentryRemoteAccessToolItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getNextAvailableSlot"(arg0: $ItemStack$Type): integer
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "isSentryAdded"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): boolean
public static "hasSentryAdded"(arg0: $CompoundTag$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SentryRemoteAccessToolItem$Type = ($SentryRemoteAccessToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SentryRemoteAccessToolItem_ = $SentryRemoteAccessToolItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/particle/$InterfaceHighlightParticleOptions" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$DustParticleOptionsBase, $DustParticleOptionsBase$Type} from "packages/net/minecraft/core/particles/$DustParticleOptionsBase"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $InterfaceHighlightParticleOptions extends $DustParticleOptionsBase {
static readonly "CODEC": $Codec<($InterfaceHighlightParticleOptions)>
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($InterfaceHighlightParticleOptions)>
static readonly "MIN_SCALE": float
static readonly "MAX_SCALE": float

constructor(arg0: $Vector3f$Type, arg1: $Vector3f$Type, arg2: float)

public "getDirection"(): $Vector3f
public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getType"(): $ParticleType<($InterfaceHighlightParticleOptions)>
get "direction"(): $Vector3f
get "type"(): $ParticleType<($InterfaceHighlightParticleOptions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceHighlightParticleOptions$Type = ($InterfaceHighlightParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceHighlightParticleOptions_ = $InterfaceHighlightParticleOptions$Type;
}}
declare module "packages/net/geforcemods/securitycraft/util/$ITickingBlockEntity" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITickingBlockEntity {

 "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
}

export namespace $ITickingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickingBlockEntity$Type = ($ITickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickingBlockEntity_ = $ITickingBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedChainBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ReinforcedRotatedPillarBlock, $ReinforcedRotatedPillarBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedRotatedPillarBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ReinforcedChainBlock extends $ReinforcedRotatedPillarBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedChainBlock$Type = ($ReinforcedChainBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedChainBlock_ = $ReinforcedChainBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$DisplayCaseBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$DisplayCaseBlockEntity, $DisplayCaseBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$DisplayCaseBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DisplayCaseBlock extends $OwnableBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "ATTACH_FACE": $EnumProperty<($AttachFace)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FLOOR": $VoxelShape
static readonly "CEILING": $VoxelShape
static readonly "WALL_N": $VoxelShape
static readonly "WALL_E": $VoxelShape
static readonly "WALL_S": $VoxelShape
static readonly "WALL_W": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "activate"(arg0: $DisplayCaseBlockEntity$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
export type $DisplayCaseBlock$Type = ($DisplayCaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayCaseBlock_ = $DisplayCaseBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$IExplosive" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IExplosive {

 "isActive"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "explode"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "defuseMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "isDefusable"(): boolean
 "activateMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
}

export namespace $IExplosive {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExplosive$Type = ($IExplosive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExplosive_ = $IExplosive$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$BriefcaseItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BriefcaseItem extends $Item implements $DyeableLeatherItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "isOwnedBy"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public static "getOwnerName"(arg0: $ItemStack$Type): string
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "checkPasscode"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: string, arg3: string, arg4: $CompoundTag$Type): void
public static "hashAndSetPasscode"(arg0: $CompoundTag$Type, arg1: string, arg2: $Consumer$Type<((byte)[])>): void
public static "getOwnerUUID"(arg0: $ItemStack$Type): string
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "getColor"(arg0: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BriefcaseItem$Type = ($BriefcaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BriefcaseItem_ = $BriefcaseItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseIronTrapDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $BaseIronTrapDoorBlock extends $TrapDoorBlock implements $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockSetType$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "m_57527_"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseIronTrapDoorBlock$Type = ($BaseIronTrapDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseIronTrapDoorBlock_ = $BaseIronTrapDoorBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeypadDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SpecialDoorBlock, $SpecialDoorBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$SpecialDoorBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $KeypadDoorBlock extends $SpecialDoorBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockSetType$Type)

public "activate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: integer): void
public "getDoorItem"(): $Item
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "doorItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypadDoorBlock$Type = ($KeypadDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypadDoorBlock_ = $KeypadDoorBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedHopperBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$HopperBlock, $HopperBlock$Type} from "packages/net/minecraft/world/level/block/$HopperBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ReinforcedHopperBlock extends $HopperBlock implements $IReinforcedBlock {
static readonly "FACING": $DirectionProperty
static readonly "ENABLED": $BooleanProperty
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

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedHopperBlock$Type = ($ReinforcedHopperBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedHopperBlock_ = $ReinforcedHopperBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedChiseledBookshelfBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChiseledBookShelfBlock, $ChiseledBookShelfBlock$Type} from "packages/net/minecraft/world/level/block/$ChiseledBookShelfBlock"

export class $ReinforcedChiseledBookshelfBlock extends $ChiseledBookShelfBlock implements $IReinforcedBlock {
static readonly "BOOKS_PER_ROW": integer
static readonly "SLOT_OCCUPIED_PROPERTIES": $List<($BooleanProperty)>
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

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedChiseledBookshelfBlock$Type = ($ReinforcedChiseledBookshelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedChiseledBookshelfBlock_ = $ReinforcedChiseledBookshelfBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$NamedBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$INameSetter, $INameSetter$Type} from "packages/net/geforcemods/securitycraft/api/$INameSetter"
import {$OwnableBlockEntity, $OwnableBlockEntity$Type} from "packages/net/geforcemods/securitycraft/api/$OwnableBlockEntity"

export class $NamedBlockEntity extends $OwnableBlockEntity implements $INameSetter {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCustomName"(): $Component
public "hasCustomName"(): boolean
public "getDefaultName"(): $Component
public "getName"(): $Component
public "setCustomName"(arg0: $Component$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getDisplayName"(): $Component
get "customName"(): $Component
get "defaultName"(): $Component
get "name"(): $Component
set "customName"(value: $Component$Type)
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedBlockEntity$Type = ($NamedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedBlockEntity_ = $NamedBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$ExplosiveBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IExplosive, $IExplosive$Type} from "packages/net/geforcemods/securitycraft/api/$IExplosive"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ExplosiveBlock extends $OwnableBlock implements $IExplosive {
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
public "isDefusable"(): boolean
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "explodesWhenInteractedWith"(): boolean
public "isActive"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "explode"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "defuseMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "activateMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
get "defusable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosiveBlock$Type = ($ExplosiveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosiveBlock_ = $ExplosiveBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/fluids/$FakeLavaFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FakeLavaFluid, $FakeLavaFluid$Type} from "packages/net/geforcemods/securitycraft/fluids/$FakeLavaFluid"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FakeLavaFluid$Source extends $FakeLavaFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeLavaFluid$Source$Type = ($FakeLavaFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeLavaFluid$Source_ = $FakeLavaFluid$Source$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedLayeredCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LayeredCauldronBlock, $LayeredCauldronBlock$Type} from "packages/net/minecraft/world/level/block/$LayeredCauldronBlock"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReinforcedLayeredCauldronBlock extends $LayeredCauldronBlock implements $IReinforcedBlock, $EntityBlock {
static readonly "MIN_FILL_LEVEL": integer
static readonly "MAX_FILL_LEVEL": integer
static readonly "LEVEL": $IntegerProperty
static readonly "RAIN": $Predicate<($Biome$Precipitation)>
static readonly "SNOW": $Predicate<($Biome$Precipitation)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Predicate$Type<($Biome$Precipitation$Type)>, arg2: $Map$Type<($Item$Type), ($CauldronInteraction$Type)>, arg3: $Block$Type)

public "getVanillaBlock"(): $Block
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "lowerFillLevel"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedLayeredCauldronBlock$Type = ($ReinforcedLayeredCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedLayeredCauldronBlock_ = $ReinforcedLayeredCauldronBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedCauldronBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AbstractCauldronBlock, $AbstractCauldronBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractCauldronBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReinforcedCauldronBlock extends $AbstractCauldronBlock implements $IReinforcedBlock, $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Map$Type<($Item$Type), ($CauldronInteraction$Type)>)

public static "updateBlockState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public static "updateBlockState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockEntity$Type): void
public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "handlePrecipitation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Biome$Precipitation$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isFull"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedCauldronBlock$Type = ($ReinforcedCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedCauldronBlock_ = $ReinforcedCauldronBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$IModuleInventory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModuleInventory extends $IItemHandlerModifiable {

 "getModule"(arg0: $ModuleType$Type): $ItemStack
 "getSlots"(): integer
 "writeModuleInventory"(arg0: $CompoundTag$Type): $CompoundTag
 "getMaxNumberOfModules"(): integer
 "readModuleInventory"(arg0: $CompoundTag$Type): $NonNullList<($ItemStack)>
 "getSlotLimit"(arg0: integer): integer
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "getInventory"(): $NonNullList<($ItemStack)>
 "isModuleEnabled"(arg0: $ModuleType$Type): boolean
 "isDenied"(arg0: $Entity$Type): boolean
 "dropAllModules"(): void
 "isAllowed"(arg0: $Entity$Type): boolean
 "isAllowed"(arg0: string): boolean
 "getModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
/**
 * 
 * @deprecated
 */
 "hasModule"(arg0: $ModuleType$Type): boolean
 "myPos"(): $BlockPos
 "readModuleStates"(arg0: $CompoundTag$Type): $Map<($ModuleType), (boolean)>
 "myLevel"(): $Level
 "toggleModuleState"(arg0: $ModuleType$Type, arg1: boolean): void
 "writeModuleStates"(arg0: $CompoundTag$Type): $CompoundTag
 "insertModule"(arg0: $ItemStack$Type, arg1: boolean): void
 "getInsertedModules"(): $List<($ModuleType)>
 "acceptedModules"(): ($ModuleType)[]
 "fixSlotId"(arg0: integer): integer
 "enableHack"(): boolean
 "getModuleInSlot"(arg0: integer): $ItemStack
 "onModuleRemoved"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
 "onModuleInserted"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
 "shouldDropModules"(): boolean
 "acceptsModule"(arg0: $ModuleType$Type): boolean
 "removeModule"(arg0: $ModuleType$Type, arg1: boolean): void
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $IItemHandler
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "getSlotLimit"(i: integer): integer
 "isMutable"(): boolean
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "getHeight"(): integer
 "asContainer"(): $Container
 "clear"(ingredient: $Ingredient$Type): void
 "clear"(): void
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "setChanged"(): void
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "count"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "isEmpty"(): boolean
}

export namespace $IModuleInventory {
function getBaseModuleDescriptionId(arg0: string, arg1: $ModuleType$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleInventory$Type = ($IModuleInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleInventory_ = $IModuleInventory$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$IPasscodeProtected" {
import {$IOwnable, $IOwnable$Type} from "packages/net/geforcemods/securitycraft/api/$IOwnable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICodebreakable, $ICodebreakable$Type} from "packages/net/geforcemods/securitycraft/api/$ICodebreakable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPasscodeProtected extends $ICodebreakable {

 "loadSaltKey"(arg0: $CompoundTag$Type): void
 "loadPasscode"(arg0: $CompoundTag$Type): void
 "useCodebreaker"(arg0: $Player$Type): void
 "activate"(arg0: $Player$Type): void
 "getSalt"(): (byte)[]
 "getCooldownEnd"(): long
 "isOnCooldown"(): boolean
 "verifyPasscodeSet"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $IOwnable$Type, arg3: $Player$Type): boolean
 "getSaltKey"(): $UUID
 "openPasscodeGUI"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
 "openSetPasscodeScreen"(arg0: $ServerPlayer$Type, arg1: $BlockPos$Type): void
 "shouldAttemptCodebreak"(arg0: $Player$Type): boolean
 "onIncorrectPasscodeEntered"(arg0: $Player$Type, arg1: string): void
 "getPasscode"(): (byte)[]
 "setPasscode"(arg0: (byte)[]): void
 "setSaltKey"(arg0: $UUID$Type): void
 "hashAndSetPasscode"(arg0: string, arg1: (byte)[]): void
 "hashAndSetPasscode"(arg0: string): void
 "startCooldown"(): void
 "handleCodebreaking"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
}

export namespace $IPasscodeProtected {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPasscodeProtected$Type = ($IPasscodeProtected);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPasscodeProtected_ = $IPasscodeProtected$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedStainedGlassBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BeaconBeamBlock, $BeaconBeamBlock$Type} from "packages/net/minecraft/world/level/block/$BeaconBeamBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$ReinforcedGlassBlock, $ReinforcedGlassBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedGlassBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReinforcedStainedGlassBlock extends $ReinforcedGlassBlock implements $BeaconBeamBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $DyeColor$Type, arg2: $Block$Type)

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getColor"(): $DyeColor
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedStainedGlassBlock$Type = ($ReinforcedStainedGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedStainedGlassBlock_ = $ReinforcedStainedGlassBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$FallingBlockMineBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Fallable, $Fallable$Type} from "packages/net/minecraft/world/level/block/$Fallable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BaseFullMineBlock, $BaseFullMineBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/mines/$BaseFullMineBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FallingBlockMineBlock extends $BaseFullMineBlock implements $Fallable {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getFallDamageSource"(arg0: $Entity$Type): $DamageSource
public "onBrokenAfterFall"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FallingBlockEntity$Type): void
public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingBlockMineBlock$Type = ($FallingBlockMineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallingBlockMineBlock_ = $FallingBlockMineBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedNyliumBlock" {
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReinforcedNyliumBlock extends $BaseReinforcedBlock implements $BonemealableBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedNyliumBlock$Type = ($ReinforcedNyliumBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedNyliumBlock_ = $ReinforcedNyliumBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blockentities/$DisguisableBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$IModuleInventory, $IModuleInventory$Type} from "packages/net/geforcemods/securitycraft/api/$IModuleInventory"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$CustomizableBlockEntity, $CustomizableBlockEntity$Type} from "packages/net/geforcemods/securitycraft/api/$CustomizableBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Option, $Option$Type} from "packages/net/geforcemods/securitycraft/api/$Option"
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"

export class $DisguisableBlockEntity extends $CustomizableBlockEntity {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public static "onDisguiseModuleRemoved"(arg0: $BlockEntity$Type, arg1: $ItemStack$Type, arg2: boolean): void
public static "onDisguiseModuleInserted"(arg0: $BlockEntity$Type, arg1: $ItemStack$Type, arg2: boolean): void
public "setRemoved"(): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public static "getModelData"(arg0: $BlockEntity$Type): $ModelData
public "getModelData"(): $ModelData
public "customOptions"(): ($Option<(any)>)[]
public static "onHandleUpdateTag"<T extends ($BlockEntity) & ($IModuleInventory)>(arg0: T): void
public static "onSetRemoved"(arg0: $BlockEntity$Type): void
public "acceptedModules"(): ($ModuleType)[]
public "onModuleRemoved"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
public "onModuleInserted"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
public static "getBaseModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisguisableBlockEntity$Type = ($DisguisableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisguisableBlockEntity_ = $DisguisableBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedGrassBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$GrassBlock, $GrassBlock$Type} from "packages/net/minecraft/world/level/block/$GrassBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ReinforcedGrassBlock extends $GrassBlock implements $IReinforcedBlock, $EntityBlock {
static readonly "SNOWY": $BooleanProperty
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

public "getVanillaBlock"(): $Block
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "onTreeGrow"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg3: $RandomSource$Type, arg4: $BlockPos$Type, arg5: $TreeConfiguration$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedGrassBlock$Type = ($ReinforcedGrassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedGrassBlock_ = $ReinforcedGrassBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$FloorTrapBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SometimesVisibleBlock, $SometimesVisibleBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$SometimesVisibleBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FloorTrapBlock extends $SometimesVisibleBlock {
static readonly "INVISIBLE": $BooleanProperty
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

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getCollisionShapeWhenInvisible"(): $VoxelShape
get "collisionShapeWhenInvisible"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloorTrapBlock$Type = ($FloorTrapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloorTrapBlock_ = $FloorTrapBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$CustomizableBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ICustomizable, $ICustomizable$Type} from "packages/net/geforcemods/securitycraft/api/$ICustomizable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Option, $Option$Type} from "packages/net/geforcemods/securitycraft/api/$Option"
import {$NamedBlockEntity, $NamedBlockEntity$Type} from "packages/net/geforcemods/securitycraft/api/$NamedBlockEntity"
import {$IModuleInventory, $IModuleInventory$Type} from "packages/net/geforcemods/securitycraft/api/$IModuleInventory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomizableBlockEntity extends $NamedBlockEntity implements $IModuleInventory, $ICustomizable {


public "getInventory"(): $NonNullList<($ItemStack)>
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "isModuleEnabled"(arg0: $ModuleType$Type): boolean
public "myPos"(): $BlockPos
public "myLevel"(): $Level
public "toggleModuleState"(arg0: $ModuleType$Type, arg1: boolean): void
public "getModule"(arg0: $ModuleType$Type): $ItemStack
public "getSlots"(): integer
public "writeModuleInventory"(arg0: $CompoundTag$Type): $CompoundTag
public "getMaxNumberOfModules"(): integer
public "readModuleInventory"(arg0: $CompoundTag$Type): $NonNullList<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "isDenied"(arg0: $Entity$Type): boolean
public "dropAllModules"(): void
public "isAllowed"(arg0: $Entity$Type): boolean
public "isAllowed"(arg0: string): boolean
public "getModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
public static "getBaseModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
/**
 * 
 * @deprecated
 */
public "hasModule"(arg0: $ModuleType$Type): boolean
public "readModuleStates"(arg0: $CompoundTag$Type): $Map<($ModuleType), (boolean)>
public "writeModuleStates"(arg0: $CompoundTag$Type): $CompoundTag
public "insertModule"(arg0: $ItemStack$Type, arg1: boolean): void
public "getInsertedModules"(): $List<($ModuleType)>
public "acceptedModules"(): ($ModuleType)[]
public "fixSlotId"(arg0: integer): integer
public "enableHack"(): boolean
public "getModuleInSlot"(arg0: integer): $ItemStack
public "onModuleRemoved"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
public "onModuleInserted"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
public "shouldDropModules"(): boolean
public "acceptsModule"(arg0: $ModuleType$Type): boolean
public "removeModule"(arg0: $ModuleType$Type, arg1: boolean): void
public "onOptionChanged"<T>(arg0: $Option$Type<(T)>): void
public "customOptions"(): ($Option<(any)>)[]
public "readOptions"(arg0: $CompoundTag$Type): void
public "writeOptions"(arg0: $CompoundTag$Type): $CompoundTag
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getSlotLimit"(i: integer): integer
public "isMutable"(): boolean
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "getHeight"(): integer
public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$Type): void
public "clear"(): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "setChanged"(): void
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "isEmpty"(): boolean
get "inventory"(): $NonNullList<($ItemStack)>
get "slots"(): integer
get "maxNumberOfModules"(): integer
get "insertedModules"(): $List<($ModuleType)>
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableBlockEntity$Type = ($CustomizableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableBlockEntity_ = $CustomizableBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedDirtPathBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ReinforcedDirtPathBlock extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedDirtPathBlock$Type = ($ReinforcedDirtPathBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedDirtPathBlock_ = $ReinforcedDirtPathBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ReinforcedWallBlock extends $WallBlock implements $IReinforcedBlock, $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedWallBlock$Type = ($ReinforcedWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedWallBlock_ = $ReinforcedWallBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/util/$IBlockPocket" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockPocket {

}

export namespace $IBlockPocket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockPocket$Type = ($IBlockPocket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockPocket_ = $IBlockPocket$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedIronBarsBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ReinforcedPaneBlock, $ReinforcedPaneBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedPaneBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ReinforcedIronBarsBlock extends $ReinforcedPaneBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedIronBarsBlock$Type = ($ReinforcedIronBarsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedIronBarsBlock_ = $ReinforcedIronBarsBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$SometimesVisibleBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SometimesVisibleBlock extends $DisguisableBlock {
static readonly "INVISIBLE": $BooleanProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getCollisionShapeWhenInvisible"(): $VoxelShape
get "collisionShapeWhenInvisible"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SometimesVisibleBlock$Type = ($SometimesVisibleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SometimesVisibleBlock_ = $SometimesVisibleBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IReinforcedBlock {

 "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
 "getVanillaBlock"(): $Block
 "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
}

export namespace $IReinforcedBlock {
const VANILLA_TO_SECURITYCRAFT: $Map<($Block), ($Block)>
const SECURITYCRAFT_TO_VANILLA: $Map<($Block), ($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReinforcedBlock$Type = ($IReinforcedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReinforcedBlock_ = $IReinforcedBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$WireCuttersItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WireCuttersItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireCuttersItem$Type = ($WireCuttersItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireCuttersItem_ = $WireCuttersItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedPressurePlateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PressurePlateBlock, $PressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PressurePlateBlock$Sensitivity, $PressurePlateBlock$Sensitivity$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock$Sensitivity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$AllowlistOnlyBlockEntity, $AllowlistOnlyBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$AllowlistOnlyBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ReinforcedPressurePlateBlock extends $PressurePlateBlock implements $IReinforcedBlock, $EntityBlock {
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

constructor(arg0: $PressurePlateBlock$Sensitivity$Type, arg1: $BlockBehaviour$Properties$Type, arg2: $Block$Type, arg3: $BlockSetType$Type)

public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "isAllowedToPress"(arg0: $AllowlistOnlyBlockEntity$Type, arg1: $Player$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedPressurePlateBlock$Type = ($ReinforcedPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedPressurePlateBlock_ = $ReinforcedPressurePlateBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$ScannerTrapDoorBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseIronTrapDoorBlock, $BaseIronTrapDoorBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseIronTrapDoorBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $ScannerTrapDoorBlock extends $BaseIronTrapDoorBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockSetType$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScannerTrapDoorBlock$Type = ($ScannerTrapDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScannerTrapDoorBlock_ = $ScannerTrapDoorBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$ICodebreakable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export interface $ICodebreakable {

 "useCodebreaker"(arg0: $Player$Type): void
 "handleCodebreaking"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
 "shouldAttemptCodebreak"(arg0: $Player$Type): boolean
}

export namespace $ICodebreakable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICodebreakable$Type = ($ICodebreakable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICodebreakable_ = $ICodebreakable$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $OwnableBlock extends $BaseEntityBlock {
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
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwnableBlock$Type = ($OwnableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwnableBlock_ = $OwnableBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedRootedDirtBlock" {
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReinforcedRootedDirtBlock extends $BaseReinforcedBlock implements $BonemealableBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedRootedDirtBlock$Type = ($ReinforcedRootedDirtBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedRootedDirtBlock_ = $ReinforcedRootedDirtBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedIronTrapDoorBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseIronTrapDoorBlock, $BaseIronTrapDoorBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseIronTrapDoorBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $ReinforcedIronTrapDoorBlock extends $BaseIronTrapDoorBlock implements $IReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockSetType$Type)

public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getVanillaBlock"(): $Block
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedIronTrapDoorBlock$Type = ($ReinforcedIronTrapDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedIronTrapDoorBlock_ = $ReinforcedIronTrapDoorBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedRotatedPillarBlock" {
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ReinforcedRotatedPillarBlock extends $BaseReinforcedBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedRotatedPillarBlock$Type = ($ReinforcedRotatedPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedRotatedPillarBlock_ = $ReinforcedRotatedPillarBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedStainedGlassPaneBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$ReinforcedPaneBlock, $ReinforcedPaneBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedPaneBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BeaconBeamBlock, $BeaconBeamBlock$Type} from "packages/net/minecraft/world/level/block/$BeaconBeamBlock"

export class $ReinforcedStainedGlassPaneBlock extends $ReinforcedPaneBlock implements $BeaconBeamBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $DyeColor$Type, arg2: $Block$Type)

public "getColor"(): $DyeColor
public "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedStainedGlassPaneBlock$Type = ($ReinforcedStainedGlassPaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedStainedGlassPaneBlock_ = $ReinforcedStainedGlassPaneBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/particle/$InterfaceHighlightParticleType" {
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$InterfaceHighlightParticleOptions, $InterfaceHighlightParticleOptions$Type} from "packages/net/geforcemods/securitycraft/particle/$InterfaceHighlightParticleOptions"

export class $InterfaceHighlightParticleType extends $ParticleType<($InterfaceHighlightParticleOptions)> {

constructor(arg0: boolean)

public "codec"(): $Codec<($InterfaceHighlightParticleOptions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceHighlightParticleType$Type = ($InterfaceHighlightParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceHighlightParticleType_ = $InterfaceHighlightParticleType$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$KeycardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KeycardItem extends $Item {
static readonly "LIMITED_INFO": $Component
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "getLevel"(): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "level"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeycardItem$Type = ($KeycardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeycardItem_ = $KeycardItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeypadBarrelBlock$LidFacing" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $KeypadBarrelBlock$LidFacing extends $Enum<($KeypadBarrelBlock$LidFacing)> implements $StringRepresentable {
static readonly "UP": $KeypadBarrelBlock$LidFacing
static readonly "SIDEWAYS": $KeypadBarrelBlock$LidFacing
static readonly "DOWN": $KeypadBarrelBlock$LidFacing


public static "values"(): ($KeypadBarrelBlock$LidFacing)[]
public static "valueOf"(arg0: string): $KeypadBarrelBlock$LidFacing
public "getSerializedName"(): string
public static "fromDirection"(arg0: $Direction$Type): $KeypadBarrelBlock$LidFacing
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypadBarrelBlock$LidFacing$Type = (("up") | ("sideways") | ("down")) | ($KeypadBarrelBlock$LidFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypadBarrelBlock$LidFacing_ = $KeypadBarrelBlock$LidFacing$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$SCManualItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SCManualPage, $SCManualPage$Type} from "packages/net/geforcemods/securitycraft/misc/$SCManualPage"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SCManualItem extends $Item {
static readonly "PAGES": $List<($SCManualPage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SCManualItem$Type = ($SCManualItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SCManualItem_ = $SCManualItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$ElectrifiedIronFenceBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $ElectrifiedIronFenceBlock extends $OwnableBlock {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
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

public "connectsTo"(arg0: $BlockState$Type, arg1: boolean, arg2: $Direction$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "hurtOrConvertEntity"(arg0: $Block$Type, arg1: $BlockState$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrifiedIronFenceBlock$Type = ($ElectrifiedIronFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrifiedIronFenceBlock_ = $ElectrifiedIronFenceBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/fluids/$FakeWaterFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$FakeWaterFluid, $FakeWaterFluid$Type} from "packages/net/geforcemods/securitycraft/fluids/$FakeWaterFluid"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FakeWaterFluid$Flowing extends $FakeWaterFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeWaterFluid$Flowing$Type = ($FakeWaterFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeWaterFluid$Flowing_ = $FakeWaterFluid$Flowing$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$FakeLavaBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FakeLavaBlock extends $LiquidBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(any)>)

public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeLavaBlock$Type = ($FakeLavaBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeLavaBlock_ = $FakeLavaBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedTintedGlassBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ReinforcedGlassBlock, $ReinforcedGlassBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedGlassBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ReinforcedTintedGlassBlock extends $ReinforcedGlassBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedTintedGlassBlock$Type = ($ReinforcedTintedGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedTintedGlassBlock_ = $ReinforcedTintedGlassBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedLeverBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$AllowlistOnlyBlockEntity, $AllowlistOnlyBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$AllowlistOnlyBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$LeverBlock, $LeverBlock$Type} from "packages/net/minecraft/world/level/block/$LeverBlock"

export class $ReinforcedLeverBlock extends $LeverBlock implements $IReinforcedBlock, $EntityBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isAllowedToPress"(arg0: $AllowlistOnlyBlockEntity$Type, arg1: $Player$Type): boolean
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedLeverBlock$Type = ($ReinforcedLeverBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedLeverBlock_ = $ReinforcedLeverBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeypadFurnaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$AbstractKeypadFurnaceBlock, $AbstractKeypadFurnaceBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$AbstractKeypadFurnaceBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $KeypadFurnaceBlock extends $AbstractKeypadFurnaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypadFurnaceBlock$Type = ($KeypadFurnaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypadFurnaceBlock_ = $KeypadFurnaceBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$BlockChangeDetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"

export class $BlockChangeDetectorBlock extends $DisguisableBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "SHAPE": $VoxelShape
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockChangeDetectorBlock$Type = ($BlockChangeDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockChangeDetectorBlock_ = $BlockChangeDetectorBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedMovingPistonBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$MovingPistonBlock, $MovingPistonBlock$Type} from "packages/net/minecraft/world/level/block/piston/$MovingPistonBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PistonType, $PistonType$Type} from "packages/net/minecraft/world/level/block/state/properties/$PistonType"

export class $ReinforcedMovingPistonBlock extends $MovingPistonBlock {
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($PistonType)>
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

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "newMovingBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $BlockState$Type, arg3: $CompoundTag$Type, arg4: $Direction$Type, arg5: boolean, arg6: boolean): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedMovingPistonBlock$Type = ($ReinforcedMovingPistonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedMovingPistonBlock_ = $ReinforcedMovingPistonBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/fluids/$FakeWaterFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $FakeWaterFluid extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>


public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
public "m_6719_"(arg0: $LevelReader$Type): integer
public "m_6713_"(arg0: $LevelReader$Type): integer
public "m_7792_"(): $ParticleOptions
public "m_5486_"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Fluid$Type, arg4: $Direction$Type): boolean
public "getBucket"(): $Item
public "m_213811_"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type, arg3: $RandomSource$Type): void
public "isSame"(arg0: $Fluid$Type): boolean
public "getTickDelay"(arg0: $LevelReader$Type): integer
public "m_5804_"(arg0: $FluidState$Type): $BlockState
public "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
get "flowing"(): $Fluid
get "source"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeWaterFluid$Type = ($FakeWaterFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeWaterFluid_ = $FakeWaterFluid$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HolderGetter, $HolderGetter$Type} from "packages/net/minecraft/core/$HolderGetter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IOverlayDisplay, $IOverlayDisplay$Type} from "packages/net/geforcemods/securitycraft/compat/$IOverlayDisplay"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $DisguisableBlock extends $OwnableBlock implements $IOverlayDisplay, $SimpleWaterloggedBlock {
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


public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public static "isSuffocating"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "shouldShowSCInfo"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
public "getDisguisedStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ItemStack
public "getDisplayStack"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $ItemStack
public static "getDisguisedBlockStateFromStack"(arg0: $Level$Type, arg1: $ItemStack$Type): $Optional<($BlockState)>
public static "getDisguisedBlockStateFromStack"(arg0: $HolderGetter$Type<($Block$Type)>, arg1: $ItemStack$Type): $Optional<($BlockState)>
public static "getDisguisedBlockState"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $Optional<($BlockState)>
public static "getDisguisedStateOrDefault"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $BlockState
public static "isNormalCube"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
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
export type $DisguisableBlock$Type = ($DisguisableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisguisableBlock_ = $DisguisableBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedDoorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $ReinforcedDoorBlock extends $OwnableBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getSeed"(arg0: $BlockState$Type, arg1: $BlockPos$Type): long
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onNeighborChanged"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "setDoorState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedDoorBlock$Type = ($ReinforcedDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedDoorBlock_ = $ReinforcedDoorBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedRotatedCrystalQuartzPillar" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ReinforcedRotatedPillarBlock, $ReinforcedRotatedPillarBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedRotatedPillarBlock"
import {$IBlockPocket, $IBlockPocket$Type} from "packages/net/geforcemods/securitycraft/util/$IBlockPocket"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReinforcedRotatedCrystalQuartzPillar extends $ReinforcedRotatedPillarBlock implements $IBlockPocket {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedRotatedCrystalQuartzPillar$Type = ($ReinforcedRotatedCrystalQuartzPillar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedRotatedCrystalQuartzPillar_ = $ReinforcedRotatedCrystalQuartzPillar$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$DisplayCaseItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DisplayCaseItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: boolean)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayCaseItem$Type = ($DisplayCaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayCaseItem_ = $DisplayCaseItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/misc/$OwnerDataSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Owner, $Owner$Type} from "packages/net/geforcemods/securitycraft/api/$Owner"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"

export class $OwnerDataSerializer implements $EntityDataSerializer<($Owner)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $Owner$Type): void
public "read"(arg0: $FriendlyByteBuf$Type): $Owner
public "copy"(arg0: $Owner$Type): $Owner
public "createAccessor"(arg0: integer): $EntityDataAccessor<($Owner)>
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($Owner$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($Owner$Type)>): $EntityDataSerializer<($Owner)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($Owner$Type)>): $EntityDataSerializer<($Owner)>
public static "simpleId"<T>(arg0: $IdMap$Type<($Owner$Type)>): $EntityDataSerializer<($Owner)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($Owner$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($Owner$Type)>): $EntityDataSerializer<($Optional<($Owner)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwnerDataSerializer$Type = ($OwnerDataSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwnerDataSerializer_ = $OwnerDataSerializer$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$UniversalBlockModifierItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UniversalBlockModifierItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalBlockModifierItem$Type = ($UniversalBlockModifierItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalBlockModifierItem_ = $UniversalBlockModifierItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$MineBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ExplosiveBlock, $ExplosiveBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/mines/$ExplosiveBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $MineBlock extends $ExplosiveBlock implements $SimpleWaterloggedBlock {
static readonly "DEACTIVATED": $BooleanProperty
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

public "isActive"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "explode"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "defuseMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "isDefusable"(): boolean
public "activateMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "defusable"(): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineBlock$Type = ($MineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MineBlock_ = $MineBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blockentities/$AllowlistOnlyBlockEntity" {
import {$CustomizableBlockEntity, $CustomizableBlockEntity$Type} from "packages/net/geforcemods/securitycraft/api/$CustomizableBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Option, $Option$Type} from "packages/net/geforcemods/securitycraft/api/$Option"
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"

export class $AllowlistOnlyBlockEntity extends $CustomizableBlockEntity {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "customOptions"(): ($Option<(any)>)[]
public "getModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
public "acceptedModules"(): ($ModuleType)[]
public static "getBaseModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllowlistOnlyBlockEntity$Type = ($AllowlistOnlyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllowlistOnlyBlockEntity_ = $AllowlistOnlyBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$INameSetter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export interface $INameSetter extends $Nameable {

 "setCustomName"(arg0: $Component$Type): void
 "getCustomName"(): $Component
 "hasCustomName"(): boolean
 "getName"(): $Component
 "getDisplayName"(): $Component
}

export namespace $INameSetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INameSetter$Type = ($INameSetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INameSetter_ = $INameSetter$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedLavaCauldronBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ReinforcedCauldronBlock, $ReinforcedCauldronBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedCauldronBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ReinforcedLavaCauldronBlock extends $ReinforcedCauldronBlock {
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

public "getVanillaBlock"(): $Block
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "isFull"(arg0: $BlockState$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedLavaCauldronBlock$Type = ($ReinforcedLavaCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedLavaCauldronBlock_ = $ReinforcedLavaCauldronBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedPaneBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IronBarsBlock, $IronBarsBlock$Type} from "packages/net/minecraft/world/level/block/$IronBarsBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ReinforcedPaneBlock extends $IronBarsBlock implements $IReinforcedBlock, $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedPaneBlock$Type = ($ReinforcedPaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedPaneBlock_ = $ReinforcedPaneBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$BrushableMineBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBlockMine, $IBlockMine$Type} from "packages/net/geforcemods/securitycraft/util/$IBlockMine"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$FallingBlockMineBlock, $FallingBlockMineBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/mines/$FallingBlockMineBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BrushableMineBlock extends $FallingBlockMineBlock implements $IBlockMine {
static readonly "DUSTED": $IntegerProperty
static readonly "SAFE": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "isActive"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "onBrokenAfterFall"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FallingBlockEntity$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "defuseMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "isDefusable"(): boolean
public "activateMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTurnsInto"(): $Block
get "defusable"(): boolean
get "turnsInto"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrushableMineBlock$Type = ($BrushableMineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrushableMineBlock_ = $BrushableMineBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedLadderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$LadderBlock, $LadderBlock$Type} from "packages/net/minecraft/world/level/block/$LadderBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReinforcedLadderBlock extends $LadderBlock implements $IReinforcedBlock, $EntityBlock {
static readonly "FACING": $DirectionProperty
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

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedLadderBlock$Type = ($ReinforcedLadderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedLadderBlock_ = $ReinforcedLadderBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$RiftStabilizerBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$RiftStabilizerBlockEntity, $RiftStabilizerBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$RiftStabilizerBlockEntity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"

export class $RiftStabilizerBlock extends $DisguisableBlock {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "POWERED": $BooleanProperty
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

public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "getConnectedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $RiftStabilizerBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RiftStabilizerBlock$Type = ($RiftStabilizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RiftStabilizerBlock_ = $RiftStabilizerBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedDropperBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ReinforcedDispenserBlock, $ReinforcedDispenserBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedDispenserBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReinforcedDropperBlock extends $ReinforcedDispenserBlock {
static readonly "FACING": $DirectionProperty
static readonly "TRIGGERED": $BooleanProperty
static "DISPENSER_REGISTRY": $Map<($Item), ($DispenseItemBehavior)>
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

public "getVanillaBlock"(): $Block
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDispenseMethod"(arg0: $ItemStack$Type): $DispenseItemBehavior
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedDropperBlock$Type = ($ReinforcedDropperBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedDropperBlock_ = $ReinforcedDropperBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$AbstractKeypadFurnaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractKeypadFurnaceBlockEntity, $AbstractKeypadFurnaceBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$AbstractKeypadFurnaceBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"

export class $AbstractKeypadFurnaceBlock extends $DisguisableBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "LIT": $BooleanProperty
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


public "activate"(arg0: $AbstractKeypadFurnaceBlockEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractKeypadFurnaceBlock$Type = ($AbstractKeypadFurnaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractKeypadFurnaceBlock_ = $AbstractKeypadFurnaceBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedMud" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"

export class $ReinforcedMud extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedMud$Type = ($ReinforcedMud);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedMud_ = $ReinforcedMud$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$ElectrifiedIronFenceGateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$OwnableFenceGateBlock, $OwnableFenceGateBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableFenceGateBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ElectrifiedIronFenceGateBlock extends $OwnableFenceGateBlock {
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
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
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrifiedIronFenceGateBlock$Type = ($ElectrifiedIronFenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrifiedIronFenceGateBlock_ = $ElectrifiedIronFenceGateBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/fluids/$FakeLavaFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FakeLavaFluid, $FakeLavaFluid$Type} from "packages/net/geforcemods/securitycraft/fluids/$FakeLavaFluid"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FakeLavaFluid$Flowing extends $FakeLavaFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeLavaFluid$Flowing$Type = ($FakeLavaFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeLavaFluid$Flowing_ = $FakeLavaFluid$Flowing$Type;
}}
declare module "packages/net/geforcemods/securitycraft/fluids/$FakeWaterFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$FakeWaterFluid, $FakeWaterFluid$Type} from "packages/net/geforcemods/securitycraft/fluids/$FakeWaterFluid"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FakeWaterFluid$Source extends $FakeWaterFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeWaterFluid$Source$Type = ($FakeWaterFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeWaterFluid$Source_ = $FakeWaterFluid$Source$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$ClaymoreBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ExplosiveBlock, $ExplosiveBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/mines/$ExplosiveBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $ClaymoreBlock extends $ExplosiveBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "DEACTIVATED": $BooleanProperty
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

public "isActive"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "explode"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "defuseMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "activateMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "explodesWhenInteractedWith"(): boolean
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
export type $ClaymoreBlock$Type = ($ClaymoreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClaymoreBlock_ = $ClaymoreBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/util/$IToggleableEntries" {
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IToggleableEntries<T> {

 "setFilter"(arg0: T, arg1: boolean): void
 "getFilter"(arg0: T): boolean
 "getDefaultTypeName"(): string
 "toggleFilter"(arg0: T): void
 "getDefaultType"(): T
 "getFilters"(): $Map<(T), (boolean)>
 "getComparatorOutputFunction"(): $ToIntFunction<(T)>
}

export namespace $IToggleableEntries {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IToggleableEntries$Type<T> = ($IToggleableEntries<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IToggleableEntries_<T> = $IToggleableEntries$Type<(T)>;
}}
declare module "packages/net/geforcemods/securitycraft/api/$ILockable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILockable {

 "isLocked"(): boolean
 "getThisBlockEntity"(): $BlockEntity
 "disableInteractionWhenLocked"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
}

export namespace $ILockable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILockable$Type = ($ILockable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILockable_ = $ILockable$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$UniversalKeyChangerItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UniversalKeyChangerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalKeyChangerItem$Type = ($UniversalKeyChangerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalKeyChangerItem_ = $UniversalKeyChangerItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$SecretWallSignBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WallSignBlock, $WallSignBlock$Type} from "packages/net/minecraft/world/level/block/$WallSignBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SecretWallSignBlock extends $WallSignBlock {
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecretWallSignBlock$Type = ($SecretWallSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecretWallSignBlock_ = $SecretWallSignBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$CodebreakerItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CodebreakerItem extends $Item {
static readonly "STATE_PROPERTY": $ResourceLocation
static readonly "WORKING": string
static readonly "LAST_USED_TIME": string
static readonly "WAS_SUCCESSFUL": string
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
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "wasRecentlyUsed"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodebreakerItem$Type = ($CodebreakerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodebreakerItem_ = $CodebreakerItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$OwnableBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$OwnableEntity, $OwnableEntity$Type} from "packages/net/minecraft/world/entity/$OwnableEntity"
import {$IOwnable, $IOwnable$Type} from "packages/net/geforcemods/securitycraft/api/$IOwnable"
import {$Owner, $Owner$Type} from "packages/net/geforcemods/securitycraft/api/$Owner"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $OwnableBlockEntity extends $BlockEntity implements $IOwnable {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getOwner"(): $Owner
public "setOwner"(arg0: string, arg1: string): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "isOwnedBy"(arg0: $Entity$Type): boolean
public "isOwnedBy"(arg0: $Owner$Type): boolean
public "onValidate"(): void
public "ignoresOwner"(): boolean
public "onOwnerChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $Owner$Type, arg5: $Owner$Type): void
public "needsValidation"(): boolean
public "allowsOwnableEntity"(arg0: $OwnableEntity$Type): boolean
get "owner"(): $Owner
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwnableBlockEntity$Type = ($OwnableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwnableBlockEntity_ = $OwnableBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedButtonBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$AllowlistOnlyBlockEntity, $AllowlistOnlyBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$AllowlistOnlyBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$ButtonBlock, $ButtonBlock$Type} from "packages/net/minecraft/world/level/block/$ButtonBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $ReinforcedButtonBlock extends $ButtonBlock implements $IReinforcedBlock, $EntityBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type, arg2: $BlockSetType$Type, arg3: integer, arg4: boolean)

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isAllowedToPress"(arg0: $AllowlistOnlyBlockEntity$Type, arg1: $Player$Type): boolean
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedButtonBlock$Type = ($ReinforcedButtonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedButtonBlock_ = $ReinforcedButtonBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedFallingBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Fallable, $Fallable$Type} from "packages/net/minecraft/world/level/block/$Fallable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ReinforcedFallingBlock extends $BaseReinforcedBlock implements $Fallable {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getFallDamageSource"(arg0: $Entity$Type): $DamageSource
public "onBrokenAfterFall"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FallingBlockEntity$Type): void
public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedFallingBlock$Type = ($ReinforcedFallingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedFallingBlock_ = $ReinforcedFallingBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/misc/$ModuleStatesSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModuleStatesSerializer implements $EntityDataSerializer<($Map<($ModuleType), (boolean)>)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $Map$Type<($ModuleType$Type), (boolean)>): void
public "read"(arg0: $FriendlyByteBuf$Type): $Map<($ModuleType), (boolean)>
public "copy"(arg0: $Map$Type<($ModuleType$Type), (boolean)>): $Map<($ModuleType), (boolean)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($Map<($ModuleType), (boolean)>)>
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($Map$Type<($ModuleType$Type), (boolean)>)>, arg1: $FriendlyByteBuf$Reader$Type<($Map$Type<($ModuleType$Type), (boolean)>)>): $EntityDataSerializer<($Map<($ModuleType), (boolean)>)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($Map$Type<($ModuleType$Type), (boolean)>)>): $EntityDataSerializer<($Map<($ModuleType), (boolean)>)>
public static "simpleId"<T>(arg0: $IdMap$Type<($Map$Type<($ModuleType$Type), (boolean)>)>): $EntityDataSerializer<($Map<($ModuleType), (boolean)>)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($Map$Type<($ModuleType$Type), (boolean)>)>, arg1: $FriendlyByteBuf$Reader$Type<($Map$Type<($ModuleType$Type), (boolean)>)>): $EntityDataSerializer<($Optional<($Map<($ModuleType), (boolean)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleStatesSerializer$Type = ($ModuleStatesSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleStatesSerializer_ = $ModuleStatesSerializer$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$BlockPocketBlock" {
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBlockPocket, $IBlockPocket$Type} from "packages/net/geforcemods/securitycraft/util/$IBlockPocket"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockPocketBlock extends $BaseReinforcedBlock implements $IBlockPocket {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPocketBlock$Type = ($BlockPocketBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPocketBlock_ = $BlockPocketBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedCryingObsidianBlock" {
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ReinforcedCryingObsidianBlock extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedCryingObsidianBlock$Type = ($ReinforcedCryingObsidianBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedCryingObsidianBlock_ = $ReinforcedCryingObsidianBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedPistonBaseBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PistonBaseBlock, $PistonBaseBlock$Type} from "packages/net/minecraft/world/level/block/piston/$PistonBaseBlock"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReinforcedPistonBaseBlock extends $PistonBaseBlock implements $IReinforcedBlock, $EntityBlock {
static readonly "EXTENDED": $BooleanProperty
static readonly "TRIGGER_EXTEND": integer
static readonly "TRIGGER_CONTRACT": integer
static readonly "TRIGGER_DROP": integer
static readonly "PLATFORM_THICKNESS": float
readonly "isSticky": boolean
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

constructor(arg0: boolean, arg1: $BlockBehaviour$Properties$Type)

public "checkIfExtend"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "isPushable"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: boolean, arg6: $Direction$Type): boolean
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedPistonBaseBlock$Type = ($ReinforcedPistonBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedPistonBaseBlock_ = $ReinforcedPistonBaseBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$FakeLiquidBucketItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FakeLiquidBucketItem extends $BucketItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeLiquidBucketItem$Type = ($FakeLiquidBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeLiquidBucketItem_ = $FakeLiquidBucketItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$SecretCeilingHangingSignBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CeilingHangingSignBlock, $CeilingHangingSignBlock$Type} from "packages/net/minecraft/world/level/block/$CeilingHangingSignBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SecretCeilingHangingSignBlock extends $CeilingHangingSignBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "ATTACHED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecretCeilingHangingSignBlock$Type = ($SecretCeilingHangingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecretCeilingHangingSignBlock_ = $SecretCeilingHangingSignBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedEndRodBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$EndRodBlock, $EndRodBlock$Type} from "packages/net/minecraft/world/level/block/$EndRodBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReinforcedEndRodBlock extends $EndRodBlock implements $EntityBlock, $IReinforcedBlock {
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

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedEndRodBlock$Type = ($ReinforcedEndRodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedEndRodBlock_ = $ReinforcedEndRodBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$Owner" {
import {$IOwnable, $IOwnable$Type} from "packages/net/geforcemods/securitycraft/api/$IOwnable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Owner {

constructor(arg0: string, arg1: string)
constructor(arg0: string, arg1: string, arg2: boolean)
constructor()
constructor(arg0: $Entity$Type)
constructor(arg0: $Player$Type)

public "getName"(): string
/**
 * 
 * @deprecated
 */
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type, arg1: boolean): void
public "copy"(): $Owner
public "set"(arg0: string, arg1: string): void
public "owns"(...arg0: ($IOwnable$Type)[]): boolean
public static "fromCompound"(arg0: $CompoundTag$Type): $Owner
public "isValidated"(): boolean
public static "getSerializer"(): $EntityDataSerializer<($Owner)>
public "setOwnerName"(arg0: string): void
public "setValidated"(arg0: boolean): void
public "getUUID"(): string
public "setOwnerUUID"(arg0: string): void
get "name"(): string
get "validated"(): boolean
get "serializer"(): $EntityDataSerializer<($Owner)>
set "ownerName"(value: string)
set "validated"(value: boolean)
get "uUID"(): string
set "ownerUUID"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Owner$Type = ($Owner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Owner_ = $Owner$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$SecurityCameraBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SecurityCameraBlock extends $OwnableBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "BEING_VIEWED": $BooleanProperty
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

public "mountCamera"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
export type $SecurityCameraBlock$Type = ($SecurityCameraBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecurityCameraBlock_ = $SecurityCameraBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$SecretStandingSignBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$StandingSignBlock, $StandingSignBlock$Type} from "packages/net/minecraft/world/level/block/$StandingSignBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SecretStandingSignBlock extends $StandingSignBlock {
static readonly "ROTATION": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)

public "getDescriptionId"(): string
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecretStandingSignBlock$Type = ($SecretStandingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecretStandingSignBlock_ = $SecretStandingSignBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$InventoryScannerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InventoryScannerBlockEntity, $InventoryScannerBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$InventoryScannerBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$OwnableBlockEntity, $OwnableBlockEntity$Type} from "packages/net/geforcemods/securitycraft/api/$OwnableBlockEntity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"

export class $InventoryScannerBlock extends $DisguisableBlock {
static readonly "FACING": $DirectionProperty
static readonly "HORIZONTAL": $BooleanProperty
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "checkAndPlaceAppropriately"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: boolean): void
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "getConnectedInventoryScanner"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Consumer$Type<($OwnableBlockEntity$Type)>): $InventoryScannerBlockEntity
public static "getConnectedInventoryScanner"(arg0: $Level$Type, arg1: $BlockPos$Type): $InventoryScannerBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryScannerBlock$Type = ($InventoryScannerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryScannerBlock_ = $InventoryScannerBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$KeycardHolderItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KeycardHolderItem extends $Item {
static readonly "COUNT_PROPERTY": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "getCardCount"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeycardHolderItem$Type = ($KeycardHolderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeycardHolderItem_ = $KeycardHolderItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedAmethystBlock" {
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ReinforcedAmethystBlock extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "onProjectileHit"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockHitResult$Type, arg3: $Projectile$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedAmethystBlock$Type = ($ReinforcedAmethystBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedAmethystBlock_ = $ReinforcedAmethystBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedSlabBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $ReinforcedSlabBlock extends $BaseReinforcedBlock implements $SimpleWaterloggedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>)

public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedSlabBlock$Type = ($ReinforcedSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedSlabBlock_ = $ReinforcedSlabBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$HorizontalReinforcedIronBars" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $HorizontalReinforcedIronBars extends $BaseReinforcedBlock implements $SimpleWaterloggedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
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
export type $HorizontalReinforcedIronBars$Type = ($HorizontalReinforcedIronBars);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalReinforcedIronBars_ = $HorizontalReinforcedIronBars$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedLecternBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$LecternBlock, $LecternBlock$Type} from "packages/net/minecraft/world/level/block/$LecternBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReinforcedLecternBlock extends $LecternBlock implements $IReinforcedBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "HAS_BOOK": $BooleanProperty
static readonly "SHAPE_BASE": $VoxelShape
static readonly "SHAPE_POST": $VoxelShape
static readonly "SHAPE_COMMON": $VoxelShape
static readonly "SHAPE_TOP_PLATE": $VoxelShape
static readonly "SHAPE_COLLISION": $VoxelShape
static readonly "SHAPE_WEST": $VoxelShape
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_EAST": $VoxelShape
static readonly "SHAPE_SOUTH": $VoxelShape
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

public "openScreen"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedLecternBlock$Type = ($ReinforcedLecternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedLecternBlock_ = $ReinforcedLecternBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$SonicSecuritySystemItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SonicSecuritySystemItem extends $BlockItem {
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

public static "stackTagToBlockPosSet"(arg0: $CompoundTag$Type): $Set<($BlockPos)>
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "isAdded"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type): boolean
public static "removeLinkedBlock"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type): void
public static "addLinkedBlock"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public static "hasLinkedBlock"(arg0: $CompoundTag$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SonicSecuritySystemItem$Type = ($SonicSecuritySystemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SonicSecuritySystemItem_ = $SonicSecuritySystemItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeypadTrapDoorBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseIronTrapDoorBlock, $BaseIronTrapDoorBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseIronTrapDoorBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $KeypadTrapDoorBlock extends $BaseIronTrapDoorBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockSetType$Type)

public "activate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypadTrapDoorBlock$Type = ($KeypadTrapDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypadTrapDoorBlock_ = $KeypadTrapDoorBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$SonicSecuritySystemBlock" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SonicSecuritySystemBlock extends $OwnableBlock implements $SimpleWaterloggedBlock {
static readonly "POWERED": $BooleanProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "isNormalCube"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
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
export type $SonicSecuritySystemBlock$Type = ($SonicSecuritySystemBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SonicSecuritySystemBlock_ = $SonicSecuritySystemBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blockentities/$InventoryScannerBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ILockable, $ILockable$Type} from "packages/net/geforcemods/securitycraft/api/$ILockable"
import {$LensContainer, $LensContainer$Type} from "packages/net/geforcemods/securitycraft/inventory/$LensContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/$ContainerListener"
import {$ITickingBlockEntity, $ITickingBlockEntity$Type} from "packages/net/geforcemods/securitycraft/util/$ITickingBlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Option, $Option$Type} from "packages/net/geforcemods/securitycraft/api/$Option"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Owner, $Owner$Type} from "packages/net/geforcemods/securitycraft/api/$Owner"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DisguisableBlockEntity, $DisguisableBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$DisguisableBlockEntity"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"

export class $InventoryScannerBlockEntity extends $DisguisableBlockEntity implements $Container, $MenuProvider, $ITickingBlockEntity, $ILockable, $ContainerListener {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getContents"(): $NonNullList<($ItemStack)>
public "getStackInSlotCopy"(arg0: integer): $ItemStack
public "setSolidifyField"(arg0: boolean): void
public "setSignalLength"(arg0: integer): void
public "setIgnoresOwner"(arg0: boolean): void
public "isHorizontal"(): boolean
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "clearContent"(): void
public "isEmpty"(): boolean
public "onOptionChanged"<T>(arg0: $Option$Type<(T)>): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "containerChanged"(arg0: $Container$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public "startOpen"(arg0: $Player$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$Type): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "reviveCaps"(): void
public "invalidateCaps"(): void
public "getLensContainer"(): $LensContainer
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getDisplayName"(): $Component
public "isDisabled"(): boolean
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "customOptions"(): ($Option<(any)>)[]
public "ignoresOwner"(): boolean
public "onOwnerChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $Owner$Type, arg5: $Owner$Type): void
public "isConsideredInvisible"(arg0: $LivingEntity$Type): boolean
public "getAllProhibitedItems"(): $List<($ItemStack)>
public "setDisabled"(arg0: boolean): void
public "setHorizontal"(arg0: boolean): void
public "isProvidingPower"(): boolean
public "getExtractionHandler"(): $LazyOptional<($IItemHandler)>
public "wantsToProvidePower"(): boolean
public "togglePowerOutput"(): void
public "doesFieldSolidify"(): boolean
public "addItemToStorage"(arg0: $ItemStack$Type): $ItemStack
public "acceptedModules"(): ($ModuleType)[]
public "enableHack"(): boolean
public "onModuleRemoved"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
public "onModuleInserted"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
public "shouldDropModules"(): boolean
public "setContents"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
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
public "setChanged"(): void
public "isLocked"(): boolean
public "getThisBlockEntity"(): $BlockEntity
public "disableInteractionWhenLocked"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public static "tryClear"(arg0: any): void
public static "getBaseModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
get "contents"(): $NonNullList<($ItemStack)>
set "solidifyField"(value: boolean)
set "signalLength"(value: integer)
get "horizontal"(): boolean
get "empty"(): boolean
get "maxStackSize"(): integer
get "lensContainer"(): $LensContainer
get "containerSize"(): integer
get "displayName"(): $Component
get "disabled"(): boolean
get "allProhibitedItems"(): $List<($ItemStack)>
set "disabled"(value: boolean)
set "horizontal"(value: boolean)
get "providingPower"(): boolean
get "extractionHandler"(): $LazyOptional<($IItemHandler)>
set "contents"(value: $NonNullList$Type<($ItemStack$Type)>)
get "height"(): integer
get "mutable"(): boolean
get "width"(): integer
get "slots"(): integer
get "locked"(): boolean
get "thisBlockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryScannerBlockEntity$Type = ($InventoryScannerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryScannerBlockEntity_ = $InventoryScannerBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$CageTrapBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CageTrapBlock extends $DisguisableBlock {
static readonly "DEACTIVATED": $BooleanProperty
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CageTrapBlock$Type = ($CageTrapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CageTrapBlock_ = $CageTrapBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$CameraMonitorItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CameraMonitorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getNumberOfCamerasBound"(arg0: $CompoundTag$Type): integer
public static "getTagNameFromPosition"(arg0: $CompoundTag$Type, arg1: $GlobalPos$Type): string
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "hasCameraAdded"(arg0: $CompoundTag$Type): boolean
public static "getCameraPositions"(arg0: $CompoundTag$Type): $List<($GlobalPos)>
public static "isCameraAdded"(arg0: $CompoundTag$Type, arg1: $GlobalPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraMonitorItem$Type = ($CameraMonitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraMonitorItem_ = $CameraMonitorItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedRedstoneLampBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ReinforcedRedstoneLampBlock extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedRedstoneLampBlock$Type = ($ReinforcedRedstoneLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedRedstoneLampBlock_ = $ReinforcedRedstoneLampBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$SecretWallHangingSignBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WallHangingSignBlock, $WallHangingSignBlock$Type} from "packages/net/minecraft/world/level/block/$WallHangingSignBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SecretWallHangingSignBlock extends $WallHangingSignBlock {
static readonly "FACING": $DirectionProperty
static readonly "PLANK_NORTHSOUTH": $VoxelShape
static readonly "PLANK_EASTWEST": $VoxelShape
static readonly "SHAPE_NORTHSOUTH": $VoxelShape
static readonly "SHAPE_EASTWEST": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecretWallHangingSignBlock$Type = ($SecretWallHangingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecretWallHangingSignBlock_ = $SecretWallHangingSignBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$UniversalBlockRemoverItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UniversalBlockRemoverItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalBlockRemoverItem$Type = ($UniversalBlockRemoverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalBlockRemoverItem_ = $UniversalBlockRemoverItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blockentities/$RiftStabilizerBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITickingBlockEntity, $ITickingBlockEntity$Type} from "packages/net/geforcemods/securitycraft/util/$ITickingBlockEntity"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$IToggleableEntries, $IToggleableEntries$Type} from "packages/net/geforcemods/securitycraft/util/$IToggleableEntries"
import {$ILockable, $ILockable$Type} from "packages/net/geforcemods/securitycraft/api/$ILockable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RiftStabilizerBlockEntity$TeleportationType, $RiftStabilizerBlockEntity$TeleportationType$Type} from "packages/net/geforcemods/securitycraft/blockentities/$RiftStabilizerBlockEntity$TeleportationType"
import {$Option, $Option$Type} from "packages/net/geforcemods/securitycraft/api/$Option"
import {$Owner, $Owner$Type} from "packages/net/geforcemods/securitycraft/api/$Owner"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DisguisableBlockEntity, $DisguisableBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$DisguisableBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RiftStabilizerBlockEntity extends $DisguisableBlockEntity implements $ITickingBlockEntity, $ILockable, $IToggleableEntries<($RiftStabilizerBlockEntity$TeleportationType)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getRange"(): integer
public "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "setFilter"(arg0: $RiftStabilizerBlockEntity$TeleportationType$Type, arg1: boolean): void
public "getFilter"(arg0: $RiftStabilizerBlockEntity$TeleportationType$Type): boolean
public "setSignalLength"(arg0: integer): void
public "setIgnoresOwner"(arg0: boolean): void
public "getFilters"(): $Map<($RiftStabilizerBlockEntity$TeleportationType), (boolean)>
public "onOptionChanged"<T>(arg0: $Option$Type<(T)>): void
public "setRange"(arg0: integer): void
public "isDisabled"(): boolean
public "setLastTeleport"(arg0: double, arg1: $RiftStabilizerBlockEntity$TeleportationType$Type): void
public "setCustomName"(arg0: $Component$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "customOptions"(): ($Option<(any)>)[]
public "getSignalLength"(): integer
public "ignoresOwner"(): boolean
public "onOwnerChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $Owner$Type, arg5: $Owner$Type): void
public "setDisabled"(arg0: boolean): void
public "acceptedModules"(): ($ModuleType)[]
public "onModuleRemoved"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
public "onModuleInserted"(arg0: $ItemStack$Type, arg1: $ModuleType$Type, arg2: boolean): void
public "getLastTeleportDistance"(): double
public "getComparatorOutputFunction"(): $ToIntFunction<($RiftStabilizerBlockEntity$TeleportationType)>
public "getLastTeleportationType"(): $RiftStabilizerBlockEntity$TeleportationType
public "isLocked"(): boolean
public "getThisBlockEntity"(): $BlockEntity
public "disableInteractionWhenLocked"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "getDefaultTypeName"(): string
public "toggleFilter"(arg0: $RiftStabilizerBlockEntity$TeleportationType$Type): void
public static "getBaseModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
get "range"(): integer
set "signalLength"(value: integer)
get "filters"(): $Map<($RiftStabilizerBlockEntity$TeleportationType), (boolean)>
set "range"(value: integer)
get "disabled"(): boolean
set "customName"(value: $Component$Type)
get "signalLength"(): integer
set "disabled"(value: boolean)
get "lastTeleportDistance"(): double
get "comparatorOutputFunction"(): $ToIntFunction<($RiftStabilizerBlockEntity$TeleportationType)>
get "lastTeleportationType"(): $RiftStabilizerBlockEntity$TeleportationType
get "locked"(): boolean
get "thisBlockEntity"(): $BlockEntity
get "defaultTypeName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RiftStabilizerBlockEntity$Type = ($RiftStabilizerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RiftStabilizerBlockEntity_ = $RiftStabilizerBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$SpecialDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SpecialDoorBlock extends $DoorBlock implements $EntityBlock {
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


public "getDoorItem"(): $Item
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "doorItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialDoorBlock$Type = ($SpecialDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialDoorBlock_ = $SpecialDoorBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$LensItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LensItem extends $Item implements $DyeableLeatherItem {
static readonly "COLOR_PROPERTY": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getDescriptionId"(arg0: $ItemStack$Type): string
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "getColor"(arg0: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LensItem$Type = ($LensItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LensItem_ = $LensItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedCobwebBlock" {
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ReinforcedCobwebBlock extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedCobwebBlock$Type = ($ReinforcedCobwebBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedCobwebBlock_ = $ReinforcedCobwebBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/fluids/$FakeLavaFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $FakeLavaFluid extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>


public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
public "m_6719_"(arg0: $LevelReader$Type): integer
public "m_6713_"(arg0: $LevelReader$Type): integer
public "m_6886_"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type, arg3: $FluidState$Type): integer
public "m_7792_"(): $ParticleOptions
public "m_5486_"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Fluid$Type, arg4: $Direction$Type): boolean
public "m_213812_"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type, arg3: $RandomSource$Type): void
public "getBucket"(): $Item
public "m_213811_"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type, arg3: $RandomSource$Type): void
public "isSame"(arg0: $Fluid$Type): boolean
public "getTickDelay"(arg0: $LevelReader$Type): integer
public "m_5804_"(arg0: $FluidState$Type): $BlockState
public "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
get "flowing"(): $Fluid
get "source"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeLavaFluid$Type = ($FakeLavaFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeLavaFluid_ = $FakeLavaFluid$Type;
}}
declare module "packages/net/geforcemods/securitycraft/misc/$SCManualPage" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$PageGroup, $PageGroup$Type} from "packages/net/geforcemods/securitycraft/misc/$PageGroup"

export class $SCManualPage extends $Record {

constructor(item: $Item$Type, group: $PageGroup$Type, title: $Component$Type, helpInfo: $Component$Type, designedBy: string, hasRecipeDescription: boolean)

public "group"(): $PageGroup
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "item"(): $Item
public "title"(): $Component
public "hasRecipeDescription"(): boolean
public "designedBy"(): string
public "getInWorldObject"(): any
public "helpInfo"(): $Component
get "inWorldObject"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SCManualPage$Type = ($SCManualPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SCManualPage_ = $SCManualPage$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$PanicButtonBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$ButtonBlock, $ButtonBlock$Type} from "packages/net/minecraft/world/level/block/$ButtonBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $PanicButtonBlock extends $ButtonBlock implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockSetType$Type, arg2: integer, arg3: boolean)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
export type $PanicButtonBlock$Type = ($PanicButtonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PanicButtonBlock_ = $PanicButtonBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$MotionActivatedLightBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $MotionActivatedLightBlock extends $OwnableBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
export type $MotionActivatedLightBlock$Type = ($MotionActivatedLightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MotionActivatedLightBlock_ = $MotionActivatedLightBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/commands/$LowercasedEnumArgument$Info$Template" {
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$LowercasedEnumArgument, $LowercasedEnumArgument$Type} from "packages/net/geforcemods/securitycraft/commands/$LowercasedEnumArgument"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $LowercasedEnumArgument$Info$Template implements $ArgumentTypeInfo$Template<($LowercasedEnumArgument<(T)>)> {


public "instantiate"(arg0: $CommandBuildContext$Type): $LowercasedEnumArgument<(T)>
public "type"(): $ArgumentTypeInfo<($LowercasedEnumArgument<(T)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LowercasedEnumArgument$Info$Template$Type = ($LowercasedEnumArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LowercasedEnumArgument$Info$Template_ = $LowercasedEnumArgument$Info$Template$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blockentities/$KeycardReaderBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ILockable, $ILockable$Type} from "packages/net/geforcemods/securitycraft/api/$ILockable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICodebreakable, $ICodebreakable$Type} from "packages/net/geforcemods/securitycraft/api/$ICodebreakable"
import {$Option, $Option$Type} from "packages/net/geforcemods/securitycraft/api/$Option"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DisguisableBlockEntity, $DisguisableBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$DisguisableBlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"

export class $KeycardReaderBlockEntity extends $DisguisableBlockEntity implements $MenuProvider, $ILockable, $ICodebreakable {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getSignature"(): integer
public "useCodebreaker"(arg0: $Player$Type): void
public "getAcceptedLevels"(): (boolean)[]
public "setAcceptedLevels"(arg0: (boolean)[]): void
public "setSignature"(arg0: integer): void
public "insertCard"(arg0: $ItemStack$Type, arg1: $Player$Type): $MutableComponent
public "activate"(): void
public "onOptionChanged"<T>(arg0: $Option$Type<(T)>): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getDisplayName"(): $Component
public "isDisabled"(): boolean
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "customOptions"(): ($Option<(any)>)[]
public "getSignalLength"(): integer
public "shouldAttemptCodebreak"(arg0: $Player$Type): boolean
public "acceptedModules"(): ($ModuleType)[]
public "sendsDenylistMessage"(): boolean
public "onRightClickWithActionItem"(arg0: $ItemStack$Type, arg1: $InteractionHand$Type, arg2: $Player$Type, arg3: boolean, arg4: boolean): $InteractionResult
public "isLocked"(): boolean
public "getThisBlockEntity"(): $BlockEntity
public "disableInteractionWhenLocked"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "handleCodebreaking"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public static "getBaseModuleDescriptionId"(arg0: string, arg1: $ModuleType$Type): string
get "signature"(): integer
get "acceptedLevels"(): (boolean)[]
set "acceptedLevels"(value: (boolean)[])
set "signature"(value: integer)
get "displayName"(): $Component
get "disabled"(): boolean
get "signalLength"(): integer
get "locked"(): boolean
get "thisBlockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeycardReaderBlockEntity$Type = ($KeycardReaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeycardReaderBlockEntity_ = $KeycardReaderBlockEntity$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$ModuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
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
import {$ModuleType, $ModuleType$Type} from "packages/net/geforcemods/securitycraft/misc/$ModuleType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModuleItem extends $Item {
static readonly "MAX_PLAYERS": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $ModuleType$Type, arg2: boolean)
constructor(arg0: $Item$Properties$Type, arg1: $ModuleType$Type, arg2: boolean, arg3: boolean)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getBlockAddon"(arg0: $ItemStack$Type): $Block
public static "doesModuleHaveTeamOf"(arg0: $ItemStack$Type, arg1: string, arg2: $Level$Type): boolean
public static "getPlayersFromModule"(arg0: $ItemStack$Type): $List<(string)>
public "getModuleType"(): $ModuleType
public "canBeCustomized"(): boolean
get "moduleType"(): $ModuleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleItem$Type = ($ModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleItem_ = $ModuleItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedFenceGateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$OwnableFenceGateBlock, $OwnableFenceGateBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableFenceGateBlock"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReinforcedFenceGateBlock extends $OwnableFenceGateBlock implements $IReinforcedBlock {
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type, arg2: $Block$Type)

public "getVanillaBlock"(): $Block
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedFenceGateBlock$Type = ($ReinforcedFenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedFenceGateBlock_ = $ReinforcedFenceGateBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$BlockPocketWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IBlockPocket, $IBlockPocket$Type} from "packages/net/geforcemods/securitycraft/util/$IBlockPocket"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockPocketWallBlock extends $OwnableBlock implements $IBlockPocket {
static readonly "SEE_THROUGH": $BooleanProperty
static readonly "SOLID": $BooleanProperty
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
public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "causesSuffocation"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPocketWallBlock$Type = ($BlockPocketWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPocketWallBlock_ = $BlockPocketWallBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$UniversalBlockReinforcerItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UniversalBlockReinforcerItem extends $Item {
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
public static "convertBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $ItemStack$Type, arg3: $BlockPos$Type, arg4: $Player$Type): boolean
public static "isReinforcing"(arg0: $ItemStack$Type): boolean
public static "maybeRemoveMending"(arg0: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalBlockReinforcerItem$Type = ($UniversalBlockReinforcerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalBlockReinforcerItem_ = $UniversalBlockReinforcerItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedDispenserBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IReinforcedBlock, $IReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/api/$IReinforcedBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$DispenserBlock, $DispenserBlock$Type} from "packages/net/minecraft/world/level/block/$DispenserBlock"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReinforcedDispenserBlock extends $DispenserBlock implements $IReinforcedBlock {
static readonly "FACING": $DirectionProperty
static readonly "TRIGGERED": $BooleanProperty
static "DISPENSER_REGISTRY": $Map<($Item), ($DispenseItemBehavior)>
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

public "getVanillaBlock"(): $Block
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "convertToVanilla"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public "convertToReinforced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
get "vanillaBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedDispenserBlock$Type = ($ReinforcedDispenserBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedDispenserBlock_ = $ReinforcedDispenserBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeypadChestBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ChestType, $ChestType$Type} from "packages/net/minecraft/world/level/block/state/properties/$ChestType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ChestBlock, $ChestBlock$Type} from "packages/net/minecraft/world/level/block/$ChestBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $KeypadChestBlock extends $ChestBlock {
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "EVENT_SET_OPEN_COUNT": integer
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

public "activate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "candidatePartnerFacing"(arg0: $BlockPlaceContext$Type, arg1: $Direction$Type): $Direction
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public static "isBlocked"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypadChestBlock$Type = ($KeypadChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypadChestBlock_ = $KeypadChestBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedRedstoneBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ReinforcedRedstoneBlock extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedRedstoneBlock$Type = ($ReinforcedRedstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedRedstoneBlock_ = $ReinforcedRedstoneBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$BlockPocketManagerBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPocketManagerBlock extends $OwnableBlock {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPocketManagerBlock$Type = ($BlockPocketManagerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPocketManagerBlock_ = $BlockPocketManagerBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeycardReaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$KeycardReaderBlockEntity, $KeycardReaderBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$KeycardReaderBlockEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"

export class $KeycardReaderBlock extends $DisguisableBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
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

public static "use"<BE extends $KeycardReaderBlockEntity>(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BiConsumer$Type<($ItemStack$Type), (BE)>): $InteractionResult
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeycardReaderBlock$Type = ($KeycardReaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeycardReaderBlock_ = $KeycardReaderBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/inventory/$LensContainer" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $LensContainer extends $SimpleContainer {
readonly "items": $NonNullList<($ItemStack)>

constructor(arg0: integer)

public "setItemExclusively"(arg0: integer, arg1: $ItemStack$Type): void
public "canAddItem"(arg0: $ItemStack$Type): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "maxStackSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LensContainer$Type = ($LensContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LensContainer_ = $LensContainer$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$PortableTunePlayerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
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

export class $PortableTunePlayerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableTunePlayerItem$Type = ($PortableTunePlayerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableTunePlayerItem_ = $PortableTunePlayerItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeypadSmokerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$AbstractKeypadFurnaceBlock, $AbstractKeypadFurnaceBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$AbstractKeypadFurnaceBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $KeypadSmokerBlock extends $AbstractKeypadFurnaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypadSmokerBlock$Type = ($KeypadSmokerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypadSmokerBlock_ = $KeypadSmokerBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/commands/$LowercasedEnumArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$LowercasedEnumArgument$Info$Template, $LowercasedEnumArgument$Info$Template$Type} from "packages/net/geforcemods/securitycraft/commands/$LowercasedEnumArgument$Info$Template"
import {$LowercasedEnumArgument, $LowercasedEnumArgument$Type} from "packages/net/geforcemods/securitycraft/commands/$LowercasedEnumArgument"

export class $LowercasedEnumArgument$Info<T extends $Enum<(T)>> implements $ArgumentTypeInfo<($LowercasedEnumArgument<(T)>), ($LowercasedEnumArgument$Info$Template<>)> {

constructor()

public "unpack"(arg0: $LowercasedEnumArgument$Type<(T)>): $LowercasedEnumArgument$Info$Template<>
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $LowercasedEnumArgument$Info$Template<>
public "serializeToJson"(arg0: $LowercasedEnumArgument$Info$Template$Type<>, arg1: $JsonObject$Type): void
public "serializeToNetwork"(arg0: $LowercasedEnumArgument$Info$Template$Type<>, arg1: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LowercasedEnumArgument$Info$Type<T> = ($LowercasedEnumArgument$Info<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LowercasedEnumArgument$Info_<T> = $LowercasedEnumArgument$Info$Type<(T)>;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeyPanelBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractPanelBlock, $AbstractPanelBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$AbstractPanelBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $KeyPanelBlock extends $AbstractPanelBlock {
static readonly "FLOOR_NS": $VoxelShape
static readonly "FLOOR_EW": $VoxelShape
static readonly "CEILING_NS": $VoxelShape
static readonly "CEILING_EW": $VoxelShape
static readonly "WALL_N": $VoxelShape
static readonly "WALL_E": $VoxelShape
static readonly "WALL_S": $VoxelShape
static readonly "WALL_W": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPanelBlock$Type = ($KeyPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyPanelBlock_ = $KeyPanelBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$AdminToolItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AdminToolItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdminToolItem$Type = ($AdminToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdminToolItem_ = $AdminToolItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/misc/$ItemStackListSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"

export class $ItemStackListSerializer implements $EntityDataSerializer<($NonNullList<($ItemStack)>)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $NonNullList$Type<($ItemStack$Type)>): void
public "read"(arg0: $FriendlyByteBuf$Type): $NonNullList<($ItemStack)>
public "copy"(arg0: $NonNullList$Type<($ItemStack$Type)>): $NonNullList<($ItemStack)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($NonNullList<($ItemStack)>)>
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($NonNullList$Type<($ItemStack$Type)>)>, arg1: $FriendlyByteBuf$Reader$Type<($NonNullList$Type<($ItemStack$Type)>)>): $EntityDataSerializer<($NonNullList<($ItemStack)>)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($NonNullList$Type<($ItemStack$Type)>)>): $EntityDataSerializer<($NonNullList<($ItemStack)>)>
public static "simpleId"<T>(arg0: $IdMap$Type<($NonNullList$Type<($ItemStack$Type)>)>): $EntityDataSerializer<($NonNullList<($ItemStack)>)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($NonNullList$Type<($ItemStack$Type)>)>, arg1: $FriendlyByteBuf$Reader$Type<($NonNullList$Type<($ItemStack$Type)>)>): $EntityDataSerializer<($Optional<($NonNullList<($ItemStack)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackListSerializer$Type = ($ItemStackListSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackListSerializer_ = $ItemStackListSerializer$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedStairsBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
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
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"

export class $ReinforcedStairsBlock extends $BaseReinforcedBlock implements $SimpleWaterloggedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Block$Type)>)

public static "isBlockStairs"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
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
export type $ReinforcedStairsBlock$Type = ($ReinforcedStairsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedStairsBlock_ = $ReinforcedStairsBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$BaseFullMineBlock" {
import {$ExplosiveBlock, $ExplosiveBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/mines/$ExplosiveBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$IBlockMine, $IBlockMine$Type} from "packages/net/geforcemods/securitycraft/util/$IBlockMine"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$IOverlayDisplay, $IOverlayDisplay$Type} from "packages/net/geforcemods/securitycraft/compat/$IOverlayDisplay"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BaseFullMineBlock extends $ExplosiveBlock implements $IOverlayDisplay, $IBlockMine {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "isActive"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "dropFromExplosion"(arg0: $Explosion$Type): boolean
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "explode"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "shouldShowSCInfo"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
public "defuseMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "isDefusable"(): boolean
public "activateMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getDisplayStack"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $ItemStack
public "explodesWhenInteractedWith"(): boolean
public "getBlockDisguisedAs"(): $Block
get "defusable"(): boolean
get "blockDisguisedAs"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFullMineBlock$Type = ($BaseFullMineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseFullMineBlock_ = $BaseFullMineBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$TrackMineBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$RailBlock, $RailBlock$Type} from "packages/net/minecraft/world/level/block/$RailBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IExplosive, $IExplosive$Type} from "packages/net/geforcemods/securitycraft/api/$IExplosive"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TrackMineBlock extends $RailBlock implements $IExplosive, $EntityBlock {
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

public "isActive"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "explode"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "defuseMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "isDefusable"(): boolean
public "activateMine"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "defusable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackMineBlock$Type = ($TrackMineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackMineBlock_ = $TrackMineBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeycardLockBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractPanelBlock, $AbstractPanelBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$AbstractPanelBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $KeycardLockBlock extends $AbstractPanelBlock {
static readonly "FLOOR_NS": $VoxelShape
static readonly "FLOOR_EW": $VoxelShape
static readonly "CEILING_NS": $VoxelShape
static readonly "CEILING_EW": $VoxelShape
static readonly "WALL_N": $VoxelShape
static readonly "WALL_E": $VoxelShape
static readonly "WALL_S": $VoxelShape
static readonly "WALL_W": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeycardLockBlock$Type = ($KeycardLockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeycardLockBlock_ = $KeycardLockBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$AbstractPanelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $AbstractPanelBlock extends $OwnableBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
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


public "activate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public static "canAttach"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
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
export type $AbstractPanelBlock$Type = ($AbstractPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPanelBlock_ = $AbstractPanelBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$AlarmBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $AlarmBlock extends $OwnableBlock implements $SimpleWaterloggedBlock {
static readonly "LIT": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
export type $AlarmBlock$Type = ($AlarmBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlarmBlock_ = $AlarmBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$ICustomizable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Option, $Option$Type} from "packages/net/geforcemods/securitycraft/api/$Option"

export interface $ICustomizable {

 "onOptionChanged"<T>(arg0: $Option$Type<(T)>): void
 "customOptions"(): ($Option<(any)>)[]
 "readOptions"(arg0: $CompoundTag$Type): void
 "writeOptions"(arg0: $CompoundTag$Type): $CompoundTag

(arg0: $Option$Type<(T)>): void
}

export namespace $ICustomizable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomizable$Type = ($ICustomizable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomizable_ = $ICustomizable$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/reinforced/$ReinforcedGlassBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BaseReinforcedBlock, $BaseReinforcedBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/reinforced/$BaseReinforcedBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ReinforcedGlassBlock extends $BaseReinforcedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedGlassBlock$Type = ($ReinforcedGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedGlassBlock_ = $ReinforcedGlassBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$ProjectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"

export class $ProjectorBlock extends $DisguisableBlock {
static readonly "FACING": $DirectionProperty
static readonly "HANGING": $BooleanProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectorBlock$Type = ($ProjectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectorBlock_ = $ProjectorBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$LaserFieldBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IOverlayDisplay, $IOverlayDisplay$Type} from "packages/net/geforcemods/securitycraft/compat/$IOverlayDisplay"

export class $LaserFieldBlock extends $OwnableBlock implements $IOverlayDisplay, $SimpleWaterloggedBlock {
static readonly "BOUNDTYPE": $IntegerProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "shouldShowSCInfo"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getDisplayStack"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $ItemStack
public "getPotentiallyWaterloggedState"(arg0: integer, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockState
public static "getFieldDirection"(arg0: $BlockState$Type): $Direction
public static "getBoundType"(arg0: $Direction$Type): integer
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
export type $LaserFieldBlock$Type = ($LaserFieldBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaserFieldBlock_ = $LaserFieldBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/mines/$RedstoneOreMineBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BaseFullMineBlock, $BaseFullMineBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/mines/$BaseFullMineBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RedstoneOreMineBlock extends $BaseFullMineBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Block$Type)

public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneOreMineBlock$Type = ($RedstoneOreMineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneOreMineBlock_ = $RedstoneOreMineBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$FakeWaterBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FakeWaterBlock extends $LiquidBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(any)>)

public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeWaterBlock$Type = ($FakeWaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeWaterBlock_ = $FakeWaterBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$SecureRedstoneInterfaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SecureRedstoneInterfaceBlock extends $DisguisableBlock {
static readonly "SENDER": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecureRedstoneInterfaceBlock$Type = ($SecureRedstoneInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecureRedstoneInterfaceBlock_ = $SecureRedstoneInterfaceBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$UsernameLoggerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $UsernameLoggerBlock extends $DisguisableBlock {
static readonly "FACING": $DirectionProperty
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
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UsernameLoggerBlock$Type = ($UsernameLoggerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UsernameLoggerBlock_ = $UsernameLoggerBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$KeyPanelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KeyPanelItem extends $BlockItem {
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
export type $KeyPanelItem$Type = ($KeyPanelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyPanelItem_ = $KeyPanelItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$UniversalOwnerChangerItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UniversalOwnerChangerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalOwnerChangerItem$Type = ($UniversalOwnerChangerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalOwnerChangerItem_ = $UniversalOwnerChangerItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeypadBarrelBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$KeypadBarrelBlock$LidFacing, $KeypadBarrelBlock$LidFacing$Type} from "packages/net/geforcemods/securitycraft/blocks/$KeypadBarrelBlock$LidFacing"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $KeypadBarrelBlock extends $DisguisableBlock {
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "LID_FACING": $EnumProperty<($KeypadBarrelBlock$LidFacing)>
static readonly "OPEN": $BooleanProperty
static readonly "FROG": $BooleanProperty
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

public "activate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypadBarrelBlock$Type = ($KeypadBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypadBarrelBlock_ = $KeypadBarrelBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$Option$EntityDataWrappedOption" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$Option, $Option$Type} from "packages/net/geforcemods/securitycraft/api/$Option"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"

export class $Option$EntityDataWrappedOption<T> extends $Option<(T)> {

constructor(arg0: $Option$Type<(T)>, arg1: $EntityDataAccessor$Type<(T)>, arg2: $Supplier$Type<($SynchedEntityData$Type)>)

public "getWrapped"(): $Option<(T)>
public "getName"(): string
public "get"(): T
public "toString"(): string
public "load"(arg0: $CompoundTag$Type): void
public "getKey"(arg0: string): string
public "save"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type, arg1: T): void
public "setValue"(arg0: T): void
public "copy"(arg0: $Option$Type<(any)>): void
public "getDefaultValue"(): T
public "getMin"(): T
public "getMax"(): T
public "toggle"(): void
public "getEntityDataKey"(): $EntityDataAccessor<(T)>
public "getDescriptionKey"(arg0: string): string
public "getIncrement"(): T
public "getDefaultInfo"(): $Component
public "isSlider"(): boolean
public "getValueText"(): $Component
get "wrapped"(): $Option<(T)>
get "name"(): string
set "value"(value: T)
get "defaultValue"(): T
get "min"(): T
get "max"(): T
get "entityDataKey"(): $EntityDataAccessor<(T)>
get "increment"(): T
get "defaultInfo"(): $Component
get "slider"(): boolean
get "valueText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Option$EntityDataWrappedOption$Type<T> = ($Option$EntityDataWrappedOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Option$EntityDataWrappedOption_<T> = $Option$EntityDataWrappedOption$Type<(T)>;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$ScannerDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SpecialDoorBlock, $SpecialDoorBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$SpecialDoorBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $ScannerDoorBlock extends $SpecialDoorBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockSetType$Type)

public "getDoorItem"(): $Item
public static "getFacingAxis"(arg0: $BlockState$Type): $Direction$Axis
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "doorItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScannerDoorBlock$Type = ($ScannerDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScannerDoorBlock_ = $ScannerDoorBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$RetinalScannerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $RetinalScannerBlock extends $DisguisableBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RetinalScannerBlock$Type = ($RetinalScannerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RetinalScannerBlock_ = $RetinalScannerBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$MineRemoteAccessToolItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
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
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MineRemoteAccessToolItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getNextAvailableSlot"(arg0: $ItemStack$Type): integer
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "isMineAdded"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): boolean
public static "hasMineAdded"(arg0: $CompoundTag$Type): boolean
public static "removeMine"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineRemoteAccessToolItem$Type = ($MineRemoteAccessToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MineRemoteAccessToolItem_ = $MineRemoteAccessToolItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/api/$IOwnable" {
import {$OwnableEntity, $OwnableEntity$Type} from "packages/net/minecraft/world/entity/$OwnableEntity"
import {$Owner, $Owner$Type} from "packages/net/geforcemods/securitycraft/api/$Owner"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IOwnable {

 "getOwner"(): $Owner
 "setOwner"(arg0: string, arg1: string): void
 "isOwnedBy"(arg0: $Entity$Type): boolean
 "isOwnedBy"(arg0: $Owner$Type): boolean
 "onValidate"(): void
 "ignoresOwner"(): boolean
 "onOwnerChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $Owner$Type, arg5: $Owner$Type): void
 "needsValidation"(): boolean
 "allowsOwnableEntity"(arg0: $OwnableEntity$Type): boolean
}

export namespace $IOwnable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnable$Type = ($IOwnable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnable_ = $IOwnable$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$KeypadBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DisguisableBlock, $DisguisableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$DisguisableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $KeypadBlock extends $DisguisableBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
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

public "activate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeypadBlock$Type = ($KeypadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeypadBlock_ = $KeypadBlock$Type;
}}
declare module "packages/net/geforcemods/securitycraft/items/$SecuritySeaBoatItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Boat$Type, $Boat$Type$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat$Type"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BoatItem, $BoatItem$Type} from "packages/net/minecraft/world/item/$BoatItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SecuritySeaBoatItem extends $BoatItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Boat$Type$Type, arg1: $Item$Properties$Type)

public "getBoat"(arg0: $Level$Type, arg1: $HitResult$Type): $Boat
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecuritySeaBoatItem$Type = ($SecuritySeaBoatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecuritySeaBoatItem_ = $SecuritySeaBoatItem$Type;
}}
declare module "packages/net/geforcemods/securitycraft/blocks/$InventoryScannerFieldBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InventoryScannerBlockEntity, $InventoryScannerBlockEntity$Type} from "packages/net/geforcemods/securitycraft/blockentities/$InventoryScannerBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$OwnableBlock, $OwnableBlock$Type} from "packages/net/geforcemods/securitycraft/blocks/$OwnableBlock"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IOverlayDisplay, $IOverlayDisplay$Type} from "packages/net/geforcemods/securitycraft/compat/$IOverlayDisplay"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $InventoryScannerFieldBlock extends $OwnableBlock implements $IOverlayDisplay, $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "HORIZONTAL": $BooleanProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "shouldShowSCInfo"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getDisplayStack"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $ItemStack
public static "checkInventory"(arg0: $Player$Type, arg1: $InventoryScannerBlockEntity$Type, arg2: $List$Type<($ItemStack$Type)>, arg3: boolean): boolean
public static "areItemStacksEqual"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "checkItemEntity"(arg0: $ItemEntity$Type, arg1: $InventoryScannerBlockEntity$Type, arg2: $List$Type<($ItemStack$Type)>, arg3: boolean): boolean
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
export type $InventoryScannerFieldBlock$Type = ($InventoryScannerFieldBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryScannerFieldBlock_ = $InventoryScannerFieldBlock$Type;
}}
