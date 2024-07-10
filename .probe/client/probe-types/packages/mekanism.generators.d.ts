declare module "packages/mekanism/generators/common/tile/turbine/$TileEntityTurbineRotor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Chunk3D, $Chunk3D$Type} from "packages/mekanism/api/$Chunk3D"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TileEntityInternalMultiblock, $TileEntityInternalMultiblock$Type} from "packages/mekanism/common/tile/prefab/$TileEntityInternalMultiblock"
import {$Coord4D, $Coord4D$Type} from "packages/mekanism/api/$Coord4D"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IGasTank, $IGasTank$Type} from "packages/mekanism/api/chemical/gas/$IGasTank"

export class $TileEntityTurbineRotor extends $TileEntityInternalMultiblock implements $Clearable {
 "blades": integer
 "rotationLower": float
 "rotationUpper": float
readonly "playersUsing": $Set<($Player)>
 "ticker": integer

constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public "getPosition"(): integer
public "clearContent"(): void
public "getRenderBoundingBox"(): $AABB
public "blockRemoved"(): void
public "onNeighborChange"(block: $Block$Type, neighborPos: $BlockPos$Type): void
public "m_183515_"(nbtTags: $CompoundTag$Type): void
public "load"(nbt: $CompoundTag$Type): void
public "handleUpdateTag"(tag: $CompoundTag$Type): void
public "updateRotors"(): void
public "addBlade"(checkBelow: boolean): boolean
public "removeBlade"(): boolean
public "getReducedUpdateTag"(): $CompoundTag
public "getHousedBlades"(): integer
public static "tryClear"(arg0: any): void
public static "calculateRadiationScale"(tanks: $List$Type<($IGasTank$Type)>): float
public "getTilePos"(): $BlockPos
public "getTileCoord"(): $Coord4D
public "getTileChunk"(): $Chunk3D
public "getTileWorld"(): $Level
get "position"(): integer
get "renderBoundingBox"(): $AABB
get "reducedUpdateTag"(): $CompoundTag
get "housedBlades"(): integer
get "tilePos"(): $BlockPos
get "tileCoord"(): $Coord4D
get "tileChunk"(): $Chunk3D
get "tileWorld"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityTurbineRotor$Type = ($TileEntityTurbineRotor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityTurbineRotor_ = $TileEntityTurbineRotor$Type;
}}
declare module "packages/mekanism/generators/common/tile/fusion/$TileEntityFusionReactorBlock" {
import {$MultiblockManager, $MultiblockManager$Type} from "packages/mekanism/common/lib/multiblock/$MultiblockManager"
import {$TileEntityMultiblock, $TileEntityMultiblock$Type} from "packages/mekanism/common/tile/prefab/$TileEntityMultiblock"
import {$MekanismContainer, $MekanismContainer$Type} from "packages/mekanism/common/inventory/container/$MekanismContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Chunk3D, $Chunk3D$Type} from "packages/mekanism/api/$Chunk3D"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Coord4D, $Coord4D$Type} from "packages/mekanism/api/$Coord4D"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IBlockProvider, $IBlockProvider$Type} from "packages/mekanism/api/providers/$IBlockProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IGasTank, $IGasTank$Type} from "packages/mekanism/api/chemical/gas/$IGasTank"
import {$FusionReactorMultiblockData, $FusionReactorMultiblockData$Type} from "packages/mekanism/generators/common/content/fusion/$FusionReactorMultiblockData"

export class $TileEntityFusionReactorBlock extends $TileEntityMultiblock<($FusionReactorMultiblockData)> {
readonly "playersUsing": $Set<($Player)>
 "ticker": integer

constructor(pos: $BlockPos$Type, state: $BlockState$Type)
constructor(blockProvider: $IBlockProvider$Type, pos: $BlockPos$Type, state: $BlockState$Type)

public "getManager"(): $MultiblockManager<($FusionReactorMultiblockData)>
public "canBeMaster"(): boolean
public "addContainerTrackers"(container: $MekanismContainer$Type): void
public "setInjectionRateFromPacket"(rate: integer): void
public static "calculateRadiationScale"(tanks: $List$Type<($IGasTank$Type)>): float
public "getTilePos"(): $BlockPos
public "getTileCoord"(): $Coord4D
public "getTileChunk"(): $Chunk3D
public "getTileWorld"(): $Level
get "manager"(): $MultiblockManager<($FusionReactorMultiblockData)>
set "injectionRateFromPacket"(value: integer)
get "tilePos"(): $BlockPos
get "tileCoord"(): $Coord4D
get "tileChunk"(): $Chunk3D
get "tileWorld"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityFusionReactorBlock$Type = ($TileEntityFusionReactorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityFusionReactorBlock_ = $TileEntityFusionReactorBlock$Type;
}}
declare module "packages/mekanism/generators/common/item/$ItemHohlraum" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/mekanism/common/item/$CapabilityItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CreativeTabDeferredRegister$ICustomCreativeTabContents, $CreativeTabDeferredRegister$ICustomCreativeTabContents$Type} from "packages/mekanism/common/registration/impl/$CreativeTabDeferredRegister$ICustomCreativeTabContents"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemHohlraum extends $CapabilityItem implements $CreativeTabDeferredRegister$ICustomCreativeTabContents {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "addItems"(tabOutput: $CreativeModeTab$Output$Type): void
public "addDefault"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHohlraum$Type = ($ItemHohlraum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHohlraum_ = $ItemHohlraum$Type;
}}
declare module "packages/mekanism/generators/common/tile/fusion/$TileEntityLaserFocusMatrix" {
import {$ILaserReceptor, $ILaserReceptor$Type} from "packages/mekanism/api/lasers/$ILaserReceptor"
import {$TileEntityFusionReactorBlock, $TileEntityFusionReactorBlock$Type} from "packages/mekanism/generators/common/tile/fusion/$TileEntityFusionReactorBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Chunk3D, $Chunk3D$Type} from "packages/mekanism/api/$Chunk3D"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Coord4D, $Coord4D$Type} from "packages/mekanism/api/$Coord4D"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"
import {$IGasTank, $IGasTank$Type} from "packages/mekanism/api/chemical/gas/$IGasTank"

export class $TileEntityLaserFocusMatrix extends $TileEntityFusionReactorBlock implements $ILaserReceptor {
readonly "playersUsing": $Set<($Player)>
 "ticker": integer

constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public "onRightClick"(player: $Player$Type): $InteractionResult
public "receiveLaserEnergy"(energy: $FloatingLong$Type): void
public "canLasersDig"(): boolean
public static "calculateRadiationScale"(tanks: $List$Type<($IGasTank$Type)>): float
public "getTilePos"(): $BlockPos
public "getTileCoord"(): $Coord4D
public "getTileChunk"(): $Chunk3D
public "getTileWorld"(): $Level
get "tilePos"(): $BlockPos
get "tileCoord"(): $Coord4D
get "tileChunk"(): $Chunk3D
get "tileWorld"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityLaserFocusMatrix$Type = ($TileEntityLaserFocusMatrix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityLaserFocusMatrix_ = $TileEntityLaserFocusMatrix$Type;
}}
declare module "packages/mekanism/generators/common/item/generator/$ItemBlockWindGenerator" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockTile, $BlockTile$Type} from "packages/mekanism/common/block/prefab/$BlockTile"
import {$ItemBlockMachine, $ItemBlockMachine$Type} from "packages/mekanism/common/item/block/machine/$ItemBlockMachine"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockWindGenerator extends $ItemBlockMachine {
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

constructor(block: $BlockTile$Type<(any), (any)>)

public "initializeClient"(consumer: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockWindGenerator$Type = ($ItemBlockWindGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockWindGenerator_ = $ItemBlockWindGenerator$Type;
}}
declare module "packages/mekanism/generators/common/block/turbine/$BlockTurbineRotor" {
import {$TileEntityTurbineRotor, $TileEntityTurbineRotor$Type} from "packages/mekanism/generators/common/tile/turbine/$TileEntityTurbineRotor"
import {$BlockTile$BlockTileModel, $BlockTile$BlockTileModel$Type} from "packages/mekanism/common/block/prefab/$BlockTile$BlockTileModel"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockTypeTile, $BlockTypeTile$Type} from "packages/mekanism/common/content/blocktype/$BlockTypeTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockTurbineRotor extends $BlockTile$BlockTileModel<($TileEntityTurbineRotor), ($BlockTypeTile<($TileEntityTurbineRotor)>)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
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

/**
 * 
 * @deprecated
 */
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTurbineRotor$Type = ($BlockTurbineRotor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTurbineRotor_ = $BlockTurbineRotor$Type;
}}
declare module "packages/mekanism/generators/common/item/$ItemTurbineBlade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTurbineBlade extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "doesSneakBypassUse"(stack: $ItemStack$Type, world: $LevelReader$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTurbineBlade$Type = ($ItemTurbineBlade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTurbineBlade_ = $ItemTurbineBlade$Type;
}}
declare module "packages/mekanism/generators/common/block/fusion/$BlockLaserFocusMatrix" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockBasicMultiblock, $BlockBasicMultiblock$Type} from "packages/mekanism/common/block/prefab/$BlockBasicMultiblock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TileEntityLaserFocusMatrix, $TileEntityLaserFocusMatrix$Type} from "packages/mekanism/generators/common/tile/fusion/$TileEntityLaserFocusMatrix"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockLaserFocusMatrix extends $BlockBasicMultiblock<($TileEntityLaserFocusMatrix)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
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

/**
 * 
 * @deprecated
 */
public "getVisualShape"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, ctx: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
public "skipRendering"(state: $BlockState$Type, adjacentBlockState: $BlockState$Type, side: $Direction$Type): boolean
/**
 * 
 * @deprecated
 */
public "getShadeBrightness"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type): float
public "shouldDisplayFluidOverlay"(state: $BlockState$Type, world: $BlockAndTintGetter$Type, pos: $BlockPos$Type, fluidState: $FluidState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLaserFocusMatrix$Type = ($BlockLaserFocusMatrix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLaserFocusMatrix_ = $BlockLaserFocusMatrix$Type;
}}
declare module "packages/mekanism/generators/common/content/fusion/$FusionReactorMultiblockData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TileEntityFusionReactorBlock, $TileEntityFusionReactorBlock$Type} from "packages/mekanism/generators/common/tile/fusion/$TileEntityFusionReactorBlock"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HeatAPI$HeatTransfer, $HeatAPI$HeatTransfer$Type} from "packages/mekanism/api/heat/$HeatAPI$HeatTransfer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEnergyContainer, $IEnergyContainer$Type} from "packages/mekanism/api/energy/$IEnergyContainer"
import {$IValveHandler$ValveData, $IValveHandler$ValveData$Type} from "packages/mekanism/common/lib/multiblock/$IValveHandler$ValveData"
import {$IHeatCapacitor, $IHeatCapacitor$Type} from "packages/mekanism/api/heat/$IHeatCapacitor"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"
import {$MultiblockData, $MultiblockData$Type} from "packages/mekanism/common/lib/multiblock/$MultiblockData"
import {$IGasTank, $IGasTank$Type} from "packages/mekanism/api/chemical/gas/$IGasTank"
import {$IExtendedFluidTank, $IExtendedFluidTank$Type} from "packages/mekanism/api/fluid/$IExtendedFluidTank"

export class $FusionReactorMultiblockData extends $MultiblockData {
static readonly "HEAT_TAB": string
static readonly "FUEL_TAB": string
static readonly "STATS_TAB": string
static readonly "MAX_INJECTION": integer
 "energyContainer": $IEnergyContainer
 "heatCapacitor": $IHeatCapacitor
 "waterTank": $IExtendedFluidTank
 "steamTank": $IGasTank
 "lastEnvironmentLoss": double
 "lastTransferLoss": double
 "deuteriumTank": $IGasTank
 "tritiumTank": $IGasTank
 "fuelTank": $IGasTank
 "plasmaTemperature": double
 "locations": $Set<($BlockPos)>
 "internalLocations": $Set<($BlockPos)>
 "valves": $Set<($IValveHandler$ValveData)>
 "inventoryID": $UUID
 "hasMaster": boolean
 "renderLocation": $BlockPos
 "recheckStructure": boolean

constructor(tile: $TileEntityFusionReactorBlock$Type)

public "tick"(world: $Level$Type): boolean
public "getPassiveGeneration"(active: boolean, current: boolean): $FloatingLong
public "getIgnitionTemperature"(active: boolean): double
public "isBurning"(): boolean
public "simulate"(): $HeatAPI$HeatTransfer
public "writeUpdateTag"(tag: $CompoundTag$Type): void
public "onCreated"(world: $Level$Type): void
public "readUpdateTag"(tag: $CompoundTag$Type): void
public "addTemperatureFromEnergyInput"(energyAdded: $FloatingLong$Type): void
public "getMinInjectionRate"(active: boolean): integer
public "getMaxPlasmaTemperature"(active: boolean): double
public "getMaxCasingTemperature"(active: boolean): double
public "setInjectionRate"(rate: integer): void
public "getInjectionRate"(): integer
public "setBurning"(burn: boolean): void
public "updateTemperatures"(): void
public "getMaxSteam"(): long
public "getMaxWater"(): integer
public "getPlasmaTemp"(): double
public "setLastPlasmaTemp"(temp: double): void
public "getLastPlasmaTemp"(): double
public "getLastCaseTemp"(): double
public "setPlasmaTemp"(temp: double): void
public "getCaseTemp"(): double
public "getSteamPerTick"(current: boolean): long
get "burning"(): boolean
set "injectionRate"(value: integer)
get "injectionRate"(): integer
set "burning"(value: boolean)
get "maxSteam"(): long
get "maxWater"(): integer
get "plasmaTemp"(): double
set "lastPlasmaTemp"(value: double)
get "lastPlasmaTemp"(): double
get "lastCaseTemp"(): double
set "plasmaTemp"(value: double)
get "caseTemp"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionReactorMultiblockData$Type = ($FusionReactorMultiblockData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusionReactorMultiblockData_ = $FusionReactorMultiblockData$Type;
}}
