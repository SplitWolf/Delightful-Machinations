declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$ITurbineReader" {
import {$IMachineReader, $IMachineReader$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/$IMachineReader"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$VentSetting, $VentSetting$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$VentSetting"
import {$IFluidContainer, $IFluidContainer$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$IFluidContainer"
import {$IMultiblockTurbineVariant, $IMultiblockTurbineVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/variant/$IMultiblockTurbineVariant"

export interface $ITurbineReader extends $IMachineReader {

 "getCapacity"(): integer
 "getVariant"(): $IMultiblockTurbineVariant
 "getFluidConsumedLastTick"(): integer
 "isAssembledAndActive"(): boolean
 "getVentSetting"(): $VentSetting
 "getRotorMass"(): integer
 "getMaxIntakeRate"(): integer
 "getRotorSpeed"(): float
 "isInductorEngaged"(): boolean
 "getMaxRotorSpeed"(): float
 "getRotorBladesCount"(): integer
 "getRotorEfficiencyLastTick"(): float
 "getMaxIntakeRateHardLimit"(): integer
 "getEnergyGeneratedLastTick"(): double
 "getCoolantAmount"(): integer
 "getVaporAmount"(): integer
 "getEnergyStoredPercentage"(): double
 "getFluidContainer"(): $IFluidContainer
 "isMachineActive"(): boolean
 "getWorld"(): $Level
}

export namespace $ITurbineReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITurbineReader$Type = ($ITurbineReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITurbineReader_ = $ITurbineReader$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/api/reactor/$IHeatEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHeatEntity {

 "getThermalConductivity"(): double
 "getHeat"(): double
}

export namespace $IHeatEntity {
const AMBIENT_HEAT: float
const CONDUCTIVITY_AIR: float
const CONDUCTIVITY_RUBBER: float
const CONDUCTIVITY_WATER: float
const CONDUCTIVITY_STONE: float
const CONDUCTIVITY_GLASS: float
const CONDUCTIVITY_IRON: float
const CONDUCTIVITY_COPPER: float
const CONDUCTIVITY_SILVER: float
const CONDUCTIVITY_GOLD: float
const CONDUCTIVITY_EMERALD: float
const CONDUCTIVITY_DIAMOND: float
const CONDUCTIVITY_GRAPHENE: float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHeatEntity$Type = ($IHeatEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHeatEntity_ = $IHeatEntity$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IReactorEnvironment" {
import {$IHeat, $IHeat$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IHeat"
import {$IRadiationModerator, $IRadiationModerator$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/radiation/$IRadiationModerator"
import {$ReactorPartType, $ReactorPartType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$ReactorPartType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IIrradiationSource, $IIrradiationSource$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IIrradiationSource"

export interface $IReactorEnvironment {

 "getPartsCount"(arg0: $ReactorPartType$Type): integer
 "getFuelToReactorHeatTransferCoefficient"(): float
 "getReactorToCoolantSystemHeatTransferCoefficient"(): float
 "refuel"(): void
 "getNextIrradiationSource"(): $IIrradiationSource
 "getReactorHeatLossCoefficient"(): float
 "getReactorVolume"(): integer
 "getReactorHeat"(): $IHeat
 "ejectWaste"(arg0: boolean): void
 "isSimulator"(): boolean
 "getModerator"(arg0: $BlockPos$Type): $IRadiationModerator
}

export namespace $IReactorEnvironment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReactorEnvironment$Type = ($IReactorEnvironment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReactorEnvironment_ = $IReactorEnvironment$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IMultiblockPartType extends $StringRepresentable {

 "getTranslationKey"(): string
 "createTileEntity"(arg0: $BlockState$Type, arg1: $BlockPos$Type): $BlockEntity
 "getByteHashCode"(): byte
 "getNameForId"(): string
 "getSerializedName"(): string
}

export namespace $IMultiblockPartType {
function fromEnum<E>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
function fromEnumWithMapping<E>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
function keys(arg0: ($StringRepresentable$Type)[]): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockPartType$Type = ($IMultiblockPartType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockPartType_ = $IMultiblockPartType$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/network/$AbstractModTileMessage" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractModMessage, $AbstractModMessage$Type} from "packages/it/zerono/mods/zerocore/lib/network/$AbstractModMessage"

export class $AbstractModTileMessage extends $AbstractModMessage {


public "getDimension"(): $Optional<($ResourceKey<($Level)>)>
public "processMessage"(arg0: $NetworkEvent$Context$Type): void
public "encodeTo"(arg0: $FriendlyByteBuf$Type): void
public "getTileEntityPosition"(): $BlockPos
get "dimension"(): $Optional<($ResourceKey<($Level)>)>
get "tileEntityPosition"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractModTileMessage$Type = ($AbstractModTileMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractModTileMessage_ = $AbstractModTileMessage$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/part/$TurbineRotorBearingBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$GenericDeviceBlock, $GenericDeviceBlock$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/$GenericDeviceBlock"
import {$TurbineRotorBearingEntity, $TurbineRotorBearingEntity$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/part/$TurbineRotorBearingEntity"
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TurbinePartType, $TurbinePartType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$TurbinePartType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockTurbine, $MultiblockTurbine$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$MultiblockTurbine"

export class $TurbineRotorBearingBlock extends $GenericDeviceBlock<($MultiblockTurbine), ($TurbinePartType)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockPartBlock$MultiblockPartProperties$Type<($TurbinePartType$Type)>)

public "animateTick"(arg0: $TurbineRotorBearingEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurbineRotorBearingBlock$Type = ($TurbineRotorBearingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurbineRotorBearingBlock_ = $TurbineRotorBearingBlock$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$IMultiblockValidator" {
import {$ValidationError, $ValidationError$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$ValidationError"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IMultiblockValidator {

 "getLastError"(): $Optional<($ValidationError)>
 "setLastError"(arg0: $BlockPos$Type, arg1: string, ...arg2: (any)[]): void
 "setLastError"(arg0: string, ...arg1: (any)[]): void
 "setLastError"(arg0: $ValidationError$Type): void
 "hasLastError"(): boolean
 "isLastErrorEmpty"(): boolean
}

export namespace $IMultiblockValidator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockValidator$Type = ($IMultiblockValidator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockValidator_ = $IMultiblockValidator$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/$AbstractMultiblockPart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IDebuggable, $IDebuggable$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebuggable"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$IMultiblockPart, $IMultiblockPart$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockPart"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IDebugMessages, $IDebugMessages$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebugMessages"
import {$AbstractModBlockEntity, $AbstractModBlockEntity$Type} from "packages/it/zerono/mods/zerocore/lib/block/$AbstractModBlockEntity"

export class $AbstractMultiblockPart<Controller extends $IMultiblockController<(Controller)>> extends $AbstractModBlockEntity implements $IMultiblockPart<(Controller)>, $IDebuggable {
/**
 * 
 * @deprecated
 */
readonly "DataUpdate": $IEvent<($Runnable)>

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getWorldPosition"(): $BlockPos
public "isConnected"(): boolean
public "getMultiblockController"(): $Optional<(Controller)>
public "becomeMultiblockSaveDelegate"(): void
public "hasMultiblockSaveData"(): boolean
public "forfeitMultiblockSaveDelegate"(): void
public "forMultiblockSaveData"(arg0: $Consumer$Type<($CompoundTag$Type)>): void
public "isMachineDisassembled"(): boolean
public "mapMultiblockSaveData"<T>(arg0: $Function$Type<($CompoundTag$Type), (T)>, arg1: T): T
public "listenForControllerDataUpdates"(): void
public "getMultiblockSaveData"(): $Optional<($CompoundTag)>
public "getNeighboringParts"(): $List<($IMultiblockPart<(Controller)>)>
public "isMultiblockSaveDelegate"(): boolean
public "executeOnController"(arg0: $Consumer$Type<(Controller)>): void
public "onMultiblockDataAssimilated"(): void
public "unlistenForControllerDataUpdates"(): void
public "getWorldPositionHash"(): long
public "testOnController"(arg0: $Predicate$Type<(Controller)>): boolean
public "mapPartWorld"<T>(arg0: $Function$Type<($Level$Type), (T)>, arg1: T): T
public "isMachineAssembled"(): boolean
public "forPartWorld"(arg0: $Consumer$Type<($Level$Type)>): void
public "getPartWorld"(): $Optional<($Level)>
public "evalOnController"<R>(arg0: $Function$Type<(Controller), (R)>, arg1: R): R
public "isPartInvalid"(): boolean
public "getPartWorldOrFail"(): $Level
public "isMachinePaused"(): boolean
public "onAttached"(arg0: Controller): void
public "onDetached"(arg0: Controller): void
public "attachToNeighbors"(arg0: $Function$Type<($IMultiblockPart$Type<(Controller)>), ($Set$Type<(Controller)>)>): $Set<(Controller)>
public "setVisited"(): void
public "isNotVisited"(): boolean
public "onOrphaned"(arg0: Controller, arg1: integer, arg2: integer): void
public "onAssimilated"(arg0: Controller): void
public "setUnvisited"(): void
public "assertDetached"(): void
public "isVisited"(): boolean
public "setRemoved"(): void
public "clearRemoved"(): void
public "onChunkUnloaded"(): void
public "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
public "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
public "getDebugMessages"(arg0: $LogicalSide$Type, arg1: $IDebugMessages$Type): void
public "onPostMachineAssembled"(arg0: Controller): void
public "onMachineDeactivated"(): void
public "onPreMachineAssembled"(arg0: Controller): void
public "onPostMachineBroken"(): void
public static "getDefaultBlockProperties"(): $BlockBehaviour$Properties
/**
 * 
 * @deprecated
 */
public "attachToNeighbors"(): $Set<(Controller)>
public "isConnectedTo"(arg0: Controller): boolean
public "onMachineActivated"(): void
public "createController"(): Controller
public "getCurrentWorld"(): $Level
public "onPreMachineBroken"(): void
public "getControllerType"(): $Class<(Controller)>
get "worldPosition"(): $BlockPos
get "connected"(): boolean
get "multiblockController"(): $Optional<(Controller)>
get "machineDisassembled"(): boolean
get "multiblockSaveData"(): $Optional<($CompoundTag)>
get "neighboringParts"(): $List<($IMultiblockPart<(Controller)>)>
get "multiblockSaveDelegate"(): boolean
get "worldPositionHash"(): long
get "machineAssembled"(): boolean
get "partWorld"(): $Optional<($Level)>
get "partInvalid"(): boolean
get "partWorldOrFail"(): $Level
get "machinePaused"(): boolean
get "notVisited"(): boolean
get "visited"(): boolean
get "defaultBlockProperties"(): $BlockBehaviour$Properties
get "currentWorld"(): $Level
get "controllerType"(): $Class<(Controller)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMultiblockPart$Type<Controller> = ($AbstractMultiblockPart<(Controller)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMultiblockPart_<Controller> = $AbstractMultiblockPart$Type<(Controller)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$ReactorFuelRodBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$MultiblockReactor, $MultiblockReactor$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$MultiblockReactor"
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$INeverCauseRenderingSkip, $INeverCauseRenderingSkip$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/$INeverCauseRenderingSkip"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ReactorPartType, $ReactorPartType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$ReactorPartType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockPartBlock, $MultiblockPartBlock$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock"

export class $ReactorFuelRodBlock extends $MultiblockPartBlock<($MultiblockReactor), ($ReactorPartType)> implements $INeverCauseRenderingSkip {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockPartBlock$MultiblockPartProperties$Type<($ReactorPartType$Type)>)

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "isNormalCube"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "causesSuffocation"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorFuelRodBlock$Type = ($ReactorFuelRodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorFuelRodBlock_ = $ReactorFuelRodBlock$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IIrradiationSource" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IIrradiationSource {

 "getWorldPosition"(): $BlockPos
 "isLinked"(): boolean
 "getIrradiationDirections"(): ($Direction)[]
 "getControlRodInsertionRatio"(): byte
}

export namespace $IIrradiationSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIrradiationSource$Type = ($IIrradiationSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIrradiationSource_ = $IIrradiationSource$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/stack/$IStackHolder" {
import {$ObjIntConsumer, $ObjIntConsumer$Type} from "packages/java/util/function/$ObjIntConsumer"
import {$IStackHolder$ChangeType, $IStackHolder$ChangeType$Type} from "packages/it/zerono/mods/zerocore/lib/data/stack/$IStackHolder$ChangeType"
import {$Int2IntFunction, $Int2IntFunction$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IStackHolder<Holder extends $IStackHolder<(Holder), (Stack)>, Stack> {

 "isEmpty"(arg0: integer): boolean
 "getFreeSpace"(arg0: integer): integer
 "setOnContentsChangedListener"(arg0: $ObjIntConsumer$Type<($IStackHolder$ChangeType$Type)>): Holder
 "setMaxCapacity"(arg0: $Int2IntFunction$Type): void
 "setMaxCapacity"(arg0: integer): void
 "isStackValid"(arg0: integer, arg1: Stack): boolean
 "setOnLoadListener"(arg0: $Runnable$Type): Holder
 "getMaxCapacity"(arg0: integer): integer
 "getAmount"(arg0: integer): integer
}

export namespace $IStackHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackHolder$Type<Holder, Stack> = ($IStackHolder<(Holder), (Stack)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackHolder_<Holder, Stack> = $IStackHolder$Type<(Holder), (Stack)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$ReactorPartType" {
import {$IMultiblockVariant, $IMultiblockVariant$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockVariant"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$MultiblockReactor, $MultiblockReactor$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$MultiblockReactor"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$MultiblockPartTypeProperties, $MultiblockPartTypeProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartTypeProperties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IMultiblockPartType2, $IMultiblockPartType2$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType2"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockPartBlock, $MultiblockPartBlock$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock"

export class $ReactorPartType extends $Enum<($ReactorPartType)> implements $IMultiblockPartType2<($MultiblockReactor), ($ReactorPartType)> {
static readonly "Casing": $ReactorPartType
static readonly "Glass": $ReactorPartType
static readonly "Controller": $ReactorPartType
static readonly "FuelRod": $ReactorPartType
static readonly "ControlRod": $ReactorPartType
static readonly "SolidAccessPort": $ReactorPartType
static readonly "FluidAccessPort": $ReactorPartType
static readonly "ActiveFluidPortForge": $ReactorPartType
static readonly "PassiveFluidPortForge": $ReactorPartType
static readonly "PassiveFluidPortMekanism": $ReactorPartType
static readonly "CreativeWaterGenerator": $ReactorPartType
static readonly "ActivePowerTapFE": $ReactorPartType
static readonly "PassivePowerTapFE": $ReactorPartType
static readonly "ComputerPort": $ReactorPartType
static readonly "RedstonePort": $ReactorPartType
static readonly "ChargingPortFE": $ReactorPartType


public static "values"(): ($ReactorPartType)[]
public static "valueOf"(arg0: string): $ReactorPartType
public "getSerializedName"(): string
public "getPartTypeProperties"(): $MultiblockPartTypeProperties<($MultiblockReactor), ($ReactorPartType)>
public "getTranslationKey"(): string
public "createTileEntity"(arg0: $BlockState$Type, arg1: $BlockPos$Type): $BlockEntity
public "createBlock"(arg0: $IMultiblockVariant$Type): $MultiblockPartBlock<($MultiblockReactor), ($ReactorPartType)>
public "createBlock"(): $MultiblockPartBlock<($MultiblockReactor), ($ReactorPartType)>
public "getByteHashCode"(): byte
public "getNameForId"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "partTypeProperties"(): $MultiblockPartTypeProperties<($MultiblockReactor), ($ReactorPartType)>
get "translationKey"(): string
get "byteHashCode"(): byte
get "nameForId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorPartType$Type = (("glass") | ("controller") | ("fluidaccessport") | ("activepowertapfe") | ("passivefluidportmekanism") | ("chargingportfe") | ("redstoneport") | ("passivepowertapfe") | ("casing") | ("controlrod") | ("fuelrod") | ("activefluidportforge") | ("passivefluidportforge") | ("creativewatergenerator") | ("solidaccessport") | ("computerport")) | ($ReactorPartType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorPartType_ = $ReactorPartType$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/network/$INetworkTileEntitySyncProvider" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export interface $INetworkTileEntitySyncProvider {

 "sendUpdates"(): void
 "enlistForUpdates"(arg0: $ServerPlayer$Type, arg1: boolean): void
 "delistFromUpdates"(arg0: $ServerPlayer$Type): void
}

export namespace $INetworkTileEntitySyncProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkTileEntitySyncProvider$Type = ($INetworkTileEntitySyncProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkTileEntitySyncProvider_ = $INetworkTileEntitySyncProvider$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/serializer/$TwoToOneRecipeSerializer" {
import {$IRecipeResult, $IRecipeResult$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/result/$IRecipeResult"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$IRecipeIngredient, $IRecipeIngredient$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/ingredient/$IRecipeIngredient"
import {$AbstractTwoToOneRecipe$IRecipeFactory, $AbstractTwoToOneRecipe$IRecipeFactory$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$AbstractTwoToOneRecipe$IRecipeFactory"
import {$AbstractTwoToOneRecipe, $AbstractTwoToOneRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$AbstractTwoToOneRecipe"

export class $TwoToOneRecipeSerializer<Ingredient1, Ingredient2, Result, RecipeIngredient1 extends $IRecipeIngredient<(Ingredient1)>, RecipeIngredient2 extends $IRecipeIngredient<(Ingredient2)>, RecipeResult extends $IRecipeResult<(Result)>, Recipe extends $AbstractTwoToOneRecipe<(Ingredient1), (Ingredient2), (Result), (RecipeIngredient1), (RecipeIngredient2), (RecipeResult)>> implements $RecipeSerializer<(Recipe)> {

constructor(arg0: $AbstractTwoToOneRecipe$IRecipeFactory$Type<(Ingredient1), (Ingredient2), (Result), (RecipeIngredient1), (RecipeIngredient2), (RecipeResult), (Recipe)>, arg1: $Function$Type<($JsonElement$Type), (RecipeIngredient1)>, arg2: $Function$Type<($FriendlyByteBuf$Type), (RecipeIngredient1)>, arg3: $Function$Type<($JsonElement$Type), (RecipeIngredient2)>, arg4: $Function$Type<($FriendlyByteBuf$Type), (RecipeIngredient2)>, arg5: $Function$Type<($JsonElement$Type), (RecipeResult)>, arg6: $Function$Type<($FriendlyByteBuf$Type), (RecipeResult)>, arg7: $IntFunction$Type<(string)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): Recipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): Recipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: Recipe): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): Recipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwoToOneRecipeSerializer$Type<Ingredient1, Ingredient2, Result, RecipeIngredient1, RecipeIngredient2, RecipeResult, Recipe> = ($TwoToOneRecipeSerializer<(Ingredient1), (Ingredient2), (Result), (RecipeIngredient1), (RecipeIngredient2), (RecipeResult), (Recipe)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwoToOneRecipeSerializer_<Ingredient1, Ingredient2, Result, RecipeIngredient1, RecipeIngredient2, RecipeResult, Recipe> = $TwoToOneRecipeSerializer$Type<(Ingredient1), (Ingredient2), (Result), (RecipeIngredient1), (RecipeIngredient2), (RecipeResult), (Recipe)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/part/$AbstractTurbineEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartPosition, $PartPosition$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$PartPosition"
import {$IMultiblockValidator, $IMultiblockValidator$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$IMultiblockValidator"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMultiblockTurbineVariant, $IMultiblockTurbineVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/variant/$IMultiblockTurbineVariant"
import {$IMultiblockVariantProvider, $IMultiblockVariantProvider$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockVariantProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IMultiblockPartTypeProvider, $IMultiblockPartTypeProvider$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartTypeProvider"
import {$AbstractMultiblockEntity, $AbstractMultiblockEntity$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/$AbstractMultiblockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TurbinePartType, $TurbinePartType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$TurbinePartType"
import {$MultiblockTurbine, $MultiblockTurbine$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$MultiblockTurbine"

export class $AbstractTurbineEntity extends $AbstractMultiblockEntity<($MultiblockTurbine)> implements $IMultiblockPartTypeProvider<($MultiblockTurbine), ($TurbinePartType)>, $IMultiblockVariantProvider<($IMultiblockTurbineVariant)> {
/**
 * 
 * @deprecated
 */
readonly "DataUpdate": $IEvent<($Runnable)>

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onMachineDeactivated"(): void
public "onMachineActivated"(): void
public "createController"(): $MultiblockTurbine
public "isGoodForPosition"(arg0: $PartPosition$Type, arg1: $IMultiblockValidator$Type): boolean
public "getPartDisplayName"(): $Component
public "getControllerType"(): $Class<($MultiblockTurbine)>
public "getPartTypeOrDefault"(arg0: $TurbinePartType$Type): $TurbinePartType
public "getBlockType"(): $Block
public "isTypeOfPart"(arg0: $TurbinePartType$Type): boolean
public "getPartType"(): $Optional<($TurbinePartType)>
public "getMultiblockVariant"(): $Optional<($IMultiblockTurbineVariant)>
public static "getDefaultBlockProperties"(): $BlockBehaviour$Properties
get "partDisplayName"(): $Component
get "controllerType"(): $Class<($MultiblockTurbine)>
get "blockType"(): $Block
get "partType"(): $Optional<($TurbinePartType)>
get "multiblockVariant"(): $Optional<($IMultiblockTurbineVariant)>
get "defaultBlockProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTurbineEntity$Type = ($AbstractTurbineEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTurbineEntity_ = $AbstractTurbineEntity$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$ValidationError" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDebuggable, $IDebuggable$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebuggable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IDebugMessages, $IDebugMessages$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebugMessages"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $ValidationError implements $IDebuggable {
static readonly "VALIDATION_ERROR_TOO_FEW_PARTS": $ValidationError
static readonly "VALIDATION_ERROR_NOT_CONNECTED": $ValidationError

constructor(arg0: $BlockPos$Type, arg1: string, ...arg2: (any)[])

public "getPosition"(): $BlockPos
public "getChatMessage"(): $Component
public "getDebugMessages"(arg0: $LogicalSide$Type, arg1: $IDebugMessages$Type): void
get "position"(): $BlockPos
get "chatMessage"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationError$Type = ($ValidationError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValidationError_ = $ValidationError$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/item/inventory/$EmptyVanillaInventory" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $EmptyVanillaInventory implements $Container {
static readonly "INSTANCE": $EmptyVanillaInventory


public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "clearContent"(): void
public "isEmpty"(): boolean
public "stillValid"(arg0: $Player$Type): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "countItem"(arg0: $Item$Type): integer
public "stopOpen"(arg0: $Player$Type): void
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
get "containerSize"(): integer
get "maxStackSize"(): integer
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
export type $EmptyVanillaInventory$Type = ($EmptyVanillaInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyVanillaInventory_ = $EmptyVanillaInventory$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/energy/$IEnergySystemAware" {
import {$EnergySystem, $EnergySystem$Type} from "packages/it/zerono/mods/zerocore/lib/energy/$EnergySystem"

export interface $IEnergySystemAware {

 "getEnergySystem"(): $EnergySystem

(): $EnergySystem
}

export namespace $IEnergySystemAware {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergySystemAware$Type = ($IEnergySystemAware);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergySystemAware_ = $IEnergySystemAware$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartTypeProperties" {
import {$IMultiblockVariant, $IMultiblockVariant$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockVariant"
import {$NonNullFunction, $NonNullFunction$Type} from "packages/net/minecraftforge/common/util/$NonNullFunction"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IMultiblockPartType, $IMultiblockPartType$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockPartBlock, $MultiblockPartBlock$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock"

export class $MultiblockPartTypeProperties<Controller extends $IMultiblockController<(Controller)>, PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType)> {

constructor(arg0: $NonNullSupplier$Type<($NonNullSupplier$Type<($BlockEntityType$Type<(any)>)>)>, arg1: $NonNullFunction$Type<($MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>), ($MultiblockPartBlock$Type<(Controller), (PartType)>)>, arg2: string, arg3: $NonNullFunction$Type<($BlockBehaviour$Properties$Type), ($BlockBehaviour$Properties$Type)>)
constructor(arg0: $NonNullSupplier$Type<($NonNullSupplier$Type<($BlockEntityType$Type<(any)>)>)>, arg1: $NonNullFunction$Type<($MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>), ($MultiblockPartBlock$Type<(Controller), (PartType)>)>, arg2: string, arg3: $NonNullFunction$Type<($BlockBehaviour$Properties$Type), ($BlockBehaviour$Properties$Type)>, arg4: $NonNullFunction$Type<($MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>), ($MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>)>)

public "getTranslationKey"(): string
public "createTileEntity"(arg0: $BlockState$Type, arg1: $BlockPos$Type): $BlockEntity
public "createBlock"(arg0: PartType, arg1: $IMultiblockVariant$Type): $MultiblockPartBlock<(Controller), (PartType)>
public "createBlock"(arg0: PartType): $MultiblockPartBlock<(Controller), (PartType)>
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPartTypeProperties$Type<Controller, PartType> = ($MultiblockPartTypeProperties<(Controller), (PartType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPartTypeProperties_<Controller, PartType> = $MultiblockPartTypeProperties$Type<(Controller), (PartType)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CuboidBoundingBox, $CuboidBoundingBox$Type} from "packages/it/zerono/mods/zerocore/lib/data/geometry/$CuboidBoundingBox"
import {$IMultiblockValidator, $IMultiblockValidator$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$IMultiblockValidator"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$NeighboringPositions, $NeighboringPositions$Type} from "packages/it/zerono/mods/zerocore/lib/world/$NeighboringPositions"
import {$IPartStorage, $IPartStorage$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/storage/$IPartStorage"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$IMultiblockPart, $IMultiblockPart$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockPart"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ValidationError, $ValidationError$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$ValidationError"
import {$ISyncableEntity, $ISyncableEntity$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity"
import {$IMultiblockMachine, $IMultiblockMachine$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockMachine"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/it/zerono/mods/zerocore/lib/item/inventory/$ItemStackHolder"

export interface $IMultiblockController<Controller extends $IMultiblockController<(Controller)>> extends $IMultiblockMachine, $IMultiblockValidator, $ISyncableEntity, $Comparable<(Controller)> {

 "isEmpty"(): boolean
 "unlistenForDataUpdate"(arg0: $Runnable$Type): void
 "syncFromSaveDelegate"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
 "listenForDataUpdate"(arg0: $Runnable$Type): $Runnable
 "shouldConsumeController"(arg0: Controller): boolean
 "isDisassembled"(): boolean
 "isPaused"(): boolean
 "attachPart"(arg0: $IMultiblockPart$Type<(Controller)>): void
 "getPartsCount"(): integer
 "detachPart"(arg0: $IMultiblockPart$Type<(Controller)>, arg1: boolean): void
 "isControllerCompatible"(arg0: Controller): boolean
 "checkIfMachineIsWhole"(): void
 "updateMultiblockEntity"(): void
 "assimilateController"(arg0: Controller): void
 "forceStructureUpdate"(arg0: $Level$Type): void
 "checkForDisconnections"(): $IPartStorage<(Controller)>
 "isPartCompatible"(arg0: $IMultiblockPart$Type<(Controller)>): boolean
 "isAssembled"(): boolean
 "isSameController"(arg0: Controller): boolean
 "containsPart"(arg0: $IMultiblockPart$Type<(Controller)>): boolean
 "containsPartsAt"(arg0: $NeighboringPositions$Type): boolean
 "containsPartsAt"(arg0: ($BlockPos$Type)[]): boolean
 "detachAll"(): $IPartStorage<(Controller)>
 "recalculateCoords"(): void
/**
 * 
 * @deprecated
 */
 "detachAllParts"(): $Set<($IMultiblockPart<(Controller)>)>
/**
 * 
 * @deprecated
 */
 "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
 "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>, arg1: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): void
 "getReferenceCoord"(): $Optional<($BlockPos)>
 "getBoundingBox"(): $CuboidBoundingBox
 "getWorld"(): $Level
/**
 * 
 * @deprecated
 */
 "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg3: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): T
/**
 * 
 * @deprecated
 */
 "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T): T
 "forReferenceCoordinates"(arg0: $Consumer$Type<($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
 "getMinimumCoord"(): $Optional<($BlockPos)>
 "getLastError"(): $Optional<($ValidationError)>
 "setLastError"(arg0: $BlockPos$Type, arg1: string, ...arg2: (any)[]): void
 "setLastError"(arg0: string, ...arg1: (any)[]): void
 "setLastError"(arg0: $ValidationError$Type): void
 "hasLastError"(): boolean
 "isLastErrorEmpty"(): boolean
 "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
 "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
 "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
 "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $NonNullConsumer$Type<($CompoundTag$Type)>): void
 "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
 "syncChildDataEntityFrom"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): boolean
 "syncBooleanElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: boolean): void
 "syncChildDataEntityTo"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): void
 "syncBooleanElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $BooleanConsumer$Type): void
 "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $CompoundTag$Type): void
 "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
 "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
 "compareTo"(arg0: Controller): integer
}

export namespace $IMultiblockController {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockController$Type<Controller> = ($IMultiblockController<(Controller)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockController_<Controller> = $IMultiblockController$Type<(Controller)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/fluid/$ReactantFluidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Reactants, $Reactants$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$Reactants"
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
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ReactantFluidBlock extends $LiquidBlock {
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

constructor(arg0: $Reactants$Type, arg1: $Supplier$Type<(any)>)

public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactantFluidBlock$Type = ($ReactantFluidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactantFluidBlock_ = $ReactantFluidBlock$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/api/reactor/radiation/$IrradiationData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $IrradiationData {
 "fuelUsage": float
 "environmentEnergyAbsorption": double
 "fuelEnergyAbsorption": double
 "fuelAbsorbedRadiation": float

constructor()

public "getEnvironmentHeatChange"(arg0: integer): double
public "getFuelHeatChange"(arg0: integer): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IrradiationData$Type = ($IrradiationData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IrradiationData_ = $IrradiationData$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/$ModRecipeType" {
import {$ModRecipe, $ModRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$ModRecipe"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$NonNullFunction, $NonNullFunction$Type} from "packages/net/minecraftforge/common/util/$NonNullFunction"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ModRecipeType<Recipe extends $ModRecipe> implements $RecipeType<(Recipe)> {


public static "invalidate"(): void
public "toString"(): string
public "contains"(arg0: $Predicate$Type<(Recipe)>): boolean
public "stream"(): $Stream<(Recipe)>
public static "create"<Recipe extends $ModRecipe>(arg0: $ResourceLocation$Type): $ModRecipeType<(Recipe)>
public "findFirst"(arg0: $Predicate$Type<(Recipe)>): $Optional<(Recipe)>
public "getRecipes"<R extends Recipe>(arg0: $Predicate$Type<(Recipe)>, arg1: $NonNullFunction$Type<(Recipe), (R)>): $List<(R)>
public "getRecipes"(): $List<(Recipe)>
public "getRecipes"(arg0: $Predicate$Type<(Recipe)>): $List<(Recipe)>
public static "onRegisterRecipes"<Recipe extends $ModRecipe>(arg0: $BiConsumer$Type<($ResourceLocation$Type), ($RecipeType$Type<(any)>)>): void
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(Recipe)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(Recipe)>
get "recipes"(): $List<(Recipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModRecipeType$Type<Recipe> = ($ModRecipeType<(Recipe)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModRecipeType_<Recipe> = $ModRecipeType$Type<(Recipe)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/rotor/$RotorComponentType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RotorComponentType extends $Enum<($RotorComponentType)> {
static readonly "Shaft": $RotorComponentType
static readonly "Blade": $RotorComponentType
static readonly "CandidateCoil": $RotorComponentType
static readonly "Ignore": $RotorComponentType


public static "values"(): ($RotorComponentType)[]
public static "valueOf"(arg0: string): $RotorComponentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotorComponentType$Type = (("candidatecoil") | ("ignore") | ("shaft") | ("blade")) | ($RotorComponentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotorComponentType_ = $RotorComponentType$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IFuelContainer" {
import {$Reactant, $Reactant$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$Reactant"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FuelProperties, $FuelProperties$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$FuelProperties"

export interface $IFuelContainer {

 "setCapacity"(arg0: integer): void
 "isEmpty"(): boolean
 "getFuel"(): $Optional<($Reactant)>
 "getFuelProperties"(): $FuelProperties
 "getFuelAmount"(): integer
 "getWasteAmount"(): integer
 "getFuelReactivity"(): float
 "getWaste"(): $Optional<($Reactant)>
 "onIrradiation"(arg0: float): void
}

export namespace $IFuelContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFuelContainer$Type = ($IFuelContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFuelContainer_ = $IFuelContainer$Type;
}}
declare module "packages/it/zerono/mods/zerocore/base/multiblock/part/io/$IOPortBlock" {
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$INeighborChangeListener$Notifier, $INeighborChangeListener$Notifier$Type} from "packages/it/zerono/mods/zerocore/lib/block/$INeighborChangeListener$Notifier"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IMultiblockPartType, $IMultiblockPartType$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$GenericDeviceBlock, $GenericDeviceBlock$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/$GenericDeviceBlock"
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $IOPortBlock<Controller extends $IMultiblockController<(Controller)>, PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType)> extends $GenericDeviceBlock<(Controller), (PartType)> implements $INeighborChangeListener$Notifier {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOPortBlock$Type<Controller, PartType> = ($IOPortBlock<(Controller), (PartType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOPortBlock_<Controller, PartType> = $IOPortBlock$Type<(Controller), (PartType)>;
}}
declare module "packages/it/zerono/mods/extremereactors/api/coolant/$Vapor" {
import {$Colour, $Colour$Type} from "packages/it/zerono/mods/zerocore/lib/data/gfx/$Colour"
import {$AbstractNamedValue, $AbstractNamedValue$Type} from "packages/it/zerono/mods/extremereactors/api/internal/$AbstractNamedValue"

export class $Vapor extends $AbstractNamedValue {
static readonly "EMPTY": $Vapor


public "equals"(arg0: any): boolean
public "copy"(): $Vapor
public "getColour"(): $Colour
public "getFluidEnergyDensity"(): float
get "colour"(): $Colour
get "fluidEnergyDensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vapor$Type = ($Vapor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vapor_ = $Vapor$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/variant/$IMultiblockTurbineVariant" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WideAmount, $WideAmount$Type} from "packages/it/zerono/mods/zerocore/lib/data/$WideAmount"
import {$IMultiblockGeneratorVariant, $IMultiblockGeneratorVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/variant/$IMultiblockGeneratorVariant"

export interface $IMultiblockTurbineVariant extends $IMultiblockGeneratorVariant {

 "getRadiationAttenuation"(): float
 "getResidualRadiationAttenuation"(): float
 "getRotorShaftMass"(): integer
 "getRotorBladeMass"(): integer
 "getMaxRotorSpeed"(): float
 "getBaseFluidPerBlade"(): integer
 "getMaxPermittedFlow"(): integer
 "getRotorDragCoefficient"(): float
 "getEnergyGenerationEfficiency"(): float
 "getPartEnergyCapacity"(): integer
 "getMaxEnergyExtractionRate"(): $WideAmount
 "getVaporGenerationEfficiency"(): float
 "getMaxFluidCapacity"(): integer
 "getPartFluidCapacity"(): integer
 "getChargerMaxRate"(): double
 "getMinimumPartsCount"(): integer
 "getMaximumYSize"(): integer
 "getMaximumXSize"(): integer
 "getMaximumZSize"(): integer
 "getName"(): string
 "getId"(): integer
 "getDefaultBlockProperties"(): $BlockBehaviour$Properties
 "getTranslationKey"(): string
 "getBlockProperties"(): $BlockBehaviour$Properties
}

export namespace $IMultiblockTurbineVariant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockTurbineVariant$Type = ($IMultiblockTurbineVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockTurbineVariant_ = $IMultiblockTurbineVariant$Type;
}}
declare module "packages/it/zerono/mods/zerocore/base/multiblock/part/$GenericDeviceBlock" {
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IMultiblockPartType, $IMultiblockPartType$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$MultiblockPartBlock, $MultiblockPartBlock$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock"

export class $GenericDeviceBlock<Controller extends $IMultiblockController<(Controller)>, PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType)> extends $MultiblockPartBlock<(Controller), (PartType)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>)

public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericDeviceBlock$Type<Controller, PartType> = ($GenericDeviceBlock<(Controller), (PartType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericDeviceBlock_<Controller, PartType> = $GenericDeviceBlock$Type<(Controller), (PartType)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/variant/$TurbineVariant" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WideAmount, $WideAmount$Type} from "packages/it/zerono/mods/zerocore/lib/data/$WideAmount"
import {$TurbinePartType, $TurbinePartType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$TurbinePartType"
import {$IMultiblockTurbineVariant, $IMultiblockTurbineVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/variant/$IMultiblockTurbineVariant"

export class $TurbineVariant extends $Enum<($TurbineVariant)> implements $IMultiblockTurbineVariant {
static readonly "Basic": $TurbineVariant
static readonly "Reinforced": $TurbineVariant


public "getName"(): string
public static "values"(): ($TurbineVariant)[]
public static "valueOf"(arg0: string): $TurbineVariant
public "getId"(): integer
public static "from"(arg0: $IMultiblockTurbineVariant$Type): $TurbineVariant
public "getTranslationKey"(): string
public "getEnergyGenerationEfficiency"(): float
public "getPartEnergyCapacity"(): integer
public "getMaxEnergyExtractionRate"(): $WideAmount
public "getRadiationAttenuation"(): float
public "getMinimumPartsCount"(): integer
public "getVaporGenerationEfficiency"(): float
public "getMaxFluidCapacity"(): integer
public "getResidualRadiationAttenuation"(): float
public "getPartFluidCapacity"(): integer
public "getMaximumYSize"(): integer
public "getMaximumXSize"(): integer
public "getChargerMaxRate"(): double
public "isPartCompatible"(arg0: $TurbinePartType$Type): boolean
public "getMaximumZSize"(): integer
public "getBlockProperties"(): $BlockBehaviour$Properties
public "getRotorShaftMass"(): integer
public "getRotorBladeMass"(): integer
public "getMaxRotorSpeed"(): float
public "getBaseFluidPerBlade"(): integer
public "getMaxPermittedFlow"(): integer
public "getRotorDragCoefficient"(): float
public "getDefaultBlockProperties"(): $BlockBehaviour$Properties
get "name"(): string
get "id"(): integer
get "translationKey"(): string
get "energyGenerationEfficiency"(): float
get "partEnergyCapacity"(): integer
get "maxEnergyExtractionRate"(): $WideAmount
get "radiationAttenuation"(): float
get "minimumPartsCount"(): integer
get "vaporGenerationEfficiency"(): float
get "maxFluidCapacity"(): integer
get "residualRadiationAttenuation"(): float
get "partFluidCapacity"(): integer
get "maximumYSize"(): integer
get "maximumXSize"(): integer
get "chargerMaxRate"(): double
get "maximumZSize"(): integer
get "blockProperties"(): $BlockBehaviour$Properties
get "rotorShaftMass"(): integer
get "rotorBladeMass"(): integer
get "maxRotorSpeed"(): float
get "baseFluidPerBlade"(): integer
get "maxPermittedFlow"(): integer
get "rotorDragCoefficient"(): float
get "defaultBlockProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurbineVariant$Type = (("basic") | ("reinforced")) | ($TurbineVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurbineVariant_ = $TurbineVariant$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ISyncableEntity$SyncReason extends $Enum<($ISyncableEntity$SyncReason)> {
static readonly "FullSync": $ISyncableEntity$SyncReason
static readonly "NetworkUpdate": $ISyncableEntity$SyncReason


public static "values"(): ($ISyncableEntity$SyncReason)[]
public static "valueOf"(arg0: string): $ISyncableEntity$SyncReason
public "isFullSync"(): boolean
public "isNetworkUpdate"(): boolean
get "fullSync"(): boolean
get "networkUpdate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncableEntity$SyncReason$Type = (("networkupdate") | ("fullsync")) | ($ISyncableEntity$SyncReason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncableEntity$SyncReason_ = $ISyncableEntity$SyncReason$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/stack/$OperationMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export class $OperationMode extends $Enum<($OperationMode)> {
static readonly "Execute": $OperationMode
static readonly "Simulate": $OperationMode


public static "values"(): ($OperationMode)[]
public static "valueOf"(arg0: string): $OperationMode
public "execute"(): boolean
public static "from"(arg0: boolean): $OperationMode
public static "from"(arg0: $IFluidHandler$FluidAction$Type): $OperationMode
public "simulate"(): boolean
public "toFluidAction"(): $IFluidHandler$FluidAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationMode$Type = (("execute") | ("simulate")) | ($OperationMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperationMode_ = $OperationMode$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/variant/$IMultiblockGeneratorVariant" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WideAmount, $WideAmount$Type} from "packages/it/zerono/mods/zerocore/lib/data/$WideAmount"
import {$IMultiblockDimensionVariant, $IMultiblockDimensionVariant$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockDimensionVariant"

export interface $IMultiblockGeneratorVariant extends $IMultiblockDimensionVariant {

 "getEnergyGenerationEfficiency"(): float
 "getPartEnergyCapacity"(): integer
 "getMaxEnergyExtractionRate"(): $WideAmount
 "getVaporGenerationEfficiency"(): float
 "getMaxFluidCapacity"(): integer
 "getPartFluidCapacity"(): integer
 "getChargerMaxRate"(): double
 "getMinimumPartsCount"(): integer
 "getMaximumYSize"(): integer
 "getMaximumXSize"(): integer
 "getMaximumZSize"(): integer
 "getName"(): string
 "getId"(): integer
 "getDefaultBlockProperties"(): $BlockBehaviour$Properties
 "getTranslationKey"(): string
 "getBlockProperties"(): $BlockBehaviour$Properties
}

export namespace $IMultiblockGeneratorVariant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockGeneratorVariant$Type = ($IMultiblockGeneratorVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockGeneratorVariant_ = $IMultiblockGeneratorVariant$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/$AbstractModBlockEntity" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IDebugMessages, $IDebugMessages$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebugMessages"
import {$IDebuggable, $IDebuggable$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebuggable"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ISyncableEntity, $ISyncableEntity$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/it/zerono/mods/zerocore/lib/item/inventory/$ItemStackHolder"
import {$IBlockStateUpdater, $IBlockStateUpdater$Type} from "packages/it/zerono/mods/zerocore/lib/block/$IBlockStateUpdater"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"

export class $AbstractModBlockEntity extends $BlockEntity implements $IBlockStateUpdater, $ISyncableEntity, $IDebuggable {
/**
 * 
 * @deprecated
 */
readonly "DataUpdate": $IEvent<($Runnable)>

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "updateBlockState"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockEntity$Type, arg4: integer): void
public "getBlockType"(): $Block
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleCommand"(arg0: $LogicalSide$Type, arg1: string, arg2: $CompoundTag$Type): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "canOpenGui"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "openGui"(arg0: $ServerPlayer$Type, arg1: $Consumer$Type<($FriendlyByteBuf$Type)>): boolean
public "openGui"(arg0: $ServerPlayer$Type): boolean
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "callOnLogicalServer"(arg0: $Consumer$Type<($Level$Type)>): void
public "callOnLogicalServer"<T>(arg0: $Supplier$Type<(T)>, arg1: $Supplier$Type<(T)>): T
public "callOnLogicalServer"(arg0: $LongSupplier$Type, arg1: long): long
public "callOnLogicalServer"(arg0: $BooleanSupplier$Type): boolean
public "callOnLogicalServer"(arg0: $IntSupplier$Type, arg1: integer): integer
public "callOnLogicalServer"(arg0: $DoubleSupplier$Type, arg1: double): double
public "callOnLogicalServer"(arg0: $Runnable$Type): void
public "callOnLogicalClient"(arg0: $Consumer$Type<($Level$Type)>): void
public "callOnLogicalClient"<T>(arg0: $Supplier$Type<(T)>, arg1: $Supplier$Type<(T)>): T
public "callOnLogicalClient"(arg0: $BooleanSupplier$Type): boolean
public "callOnLogicalClient"(arg0: $IntSupplier$Type, arg1: integer): integer
public "callOnLogicalClient"(arg0: $Runnable$Type): void
public "callOnLogicalClient"(arg0: $DoubleSupplier$Type, arg1: double): double
public "callOnLogicalClient"(arg0: $LongSupplier$Type, arg1: long): long
public "callOnLogicalSide"(arg0: $Runnable$Type, arg1: $Runnable$Type): void
public "callOnLogicalSide"(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type, arg2: $IntSupplier$Type): integer
public "callOnLogicalSide"(arg0: $BooleanSupplier$Type, arg1: $BooleanSupplier$Type): boolean
public "callOnLogicalSide"<T>(arg0: $Supplier$Type<(T)>, arg1: $Supplier$Type<(T)>, arg2: $Supplier$Type<(T)>): T
public "callOnLogicalSide"(arg0: $LongSupplier$Type, arg1: $LongSupplier$Type, arg2: $LongSupplier$Type): long
public "callOnLogicalSide"(arg0: $DoubleSupplier$Type, arg1: $DoubleSupplier$Type, arg2: $DoubleSupplier$Type): double
public "buildUpdatedState"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockEntity$Type): $BlockState
public "notifyBlockUpdate"(arg0: $BlockState$Type, arg1: $BlockState$Type): void
public "notifyBlockUpdate"(): void
public static "notifyBlockUpdate"<T extends $AbstractModBlockEntity>(arg0: $Collection$Type<(T)>): void
public static "notifyBlockUpdate"<T extends $AbstractModBlockEntity>(arg0: $Stream$Type<(T)>): void
public "markChunkDirty"(): void
public "sendCommandToPlayer"(arg0: $ServerPlayer$Type, arg1: string): void
public "sendCommandToPlayer"(arg0: $ServerPlayer$Type, arg1: string, arg2: $CompoundTag$Type): void
public "callNeighborBlockChange"(): void
/**
 * 
 * @deprecated
 */
public "callNeighborTileChange"(): void
public "notifyTileEntityUpdate"(): void
public "markForRenderUpdate"(): void
public "requestClientRenderUpdate"(): void
public static "getGuiClientBlockEntity"<T extends $AbstractModBlockEntity>(arg0: $FriendlyByteBuf$Type): T
public "sendCommandToServer"(arg0: string): void
public "sendCommandToServer"(arg0: string, arg1: $CompoundTag$Type): void
public "getDebugMessages"(arg0: $LogicalSide$Type, arg1: $IDebugMessages$Type): void
public "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
public "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $NonNullConsumer$Type<($CompoundTag$Type)>): void
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
public "syncChildDataEntityFrom"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): boolean
public "syncBooleanElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: boolean): void
public "syncChildDataEntityTo"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): void
public "syncBooleanElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $BooleanConsumer$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $CompoundTag$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
get "blockType"(): $Block
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractModBlockEntity$Type = ($AbstractModBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractModBlockEntity_ = $AbstractModBlockEntity$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$AbstractReactorEntity" {
import {$RadiationPacket, $RadiationPacket$Type} from "packages/it/zerono/mods/extremereactors/api/radiation/$RadiationPacket"
import {$UpdateClientsFuelRodsLayout, $UpdateClientsFuelRodsLayout$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/network/$UpdateClientsFuelRodsLayout"
import {$MultiblockReactor, $MultiblockReactor$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$MultiblockReactor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHeatEntity, $IHeatEntity$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$IHeatEntity"
import {$PartPosition, $PartPosition$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$PartPosition"
import {$IMultiblockValidator, $IMultiblockValidator$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$IMultiblockValidator"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ReactorPartType, $ReactorPartType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$ReactorPartType"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IRadiationModerator, $IRadiationModerator$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/radiation/$IRadiationModerator"
import {$IrradiationData, $IrradiationData$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/radiation/$IrradiationData"
import {$IMultiblockVariantProvider, $IMultiblockVariantProvider$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockVariantProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IMultiblockPartTypeProvider, $IMultiblockPartTypeProvider$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartTypeProvider"
import {$AbstractMultiblockEntity, $AbstractMultiblockEntity$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/$AbstractMultiblockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMultiblockReactorVariant, $IMultiblockReactorVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/variant/$IMultiblockReactorVariant"

export class $AbstractReactorEntity extends $AbstractMultiblockEntity<($MultiblockReactor)> implements $IHeatEntity, $IRadiationModerator, $IMultiblockPartTypeProvider<($MultiblockReactor), ($ReactorPartType)>, $IMultiblockVariantProvider<($IMultiblockReactorVariant)> {
/**
 * 
 * @deprecated
 */
readonly "DataUpdate": $IEvent<($Runnable)>

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onMachineDeactivated"(): void
public "onUpdateClientsFuelRodsLayout"(arg0: $UpdateClientsFuelRodsLayout$Type): void
public "getThermalConductivity"(): double
public "onMachineActivated"(): void
public "isGoodForPosition"(arg0: $PartPosition$Type, arg1: $IMultiblockValidator$Type): boolean
public "getPartDisplayName"(): $Component
public "moderateRadiation"(arg0: $IrradiationData$Type, arg1: $RadiationPacket$Type): void
public "getControllerType"(): $Class<($MultiblockReactor)>
public "getHeat"(): double
public "getPartTypeOrDefault"(arg0: $ReactorPartType$Type): $ReactorPartType
public "getBlockType"(): $Block
public "isTypeOfPart"(arg0: $ReactorPartType$Type): boolean
public "getPartType"(): $Optional<($ReactorPartType)>
public "getMultiblockVariant"(): $Optional<($IMultiblockReactorVariant)>
public static "getDefaultBlockProperties"(): $BlockBehaviour$Properties
get "thermalConductivity"(): double
get "partDisplayName"(): $Component
get "controllerType"(): $Class<($MultiblockReactor)>
get "heat"(): double
get "blockType"(): $Block
get "partType"(): $Optional<($ReactorPartType)>
get "multiblockVariant"(): $Optional<($IMultiblockReactorVariant)>
get "defaultBlockProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReactorEntity$Type = ($AbstractReactorEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractReactorEntity_ = $AbstractReactorEntity$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/$IDebugMessages" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$IDebuggable, $IDebuggable$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebuggable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export interface $IDebugMessages {

 "add"(arg0: $LogicalSide$Type, arg1: $IDebuggable$Type, arg2: string): void
 "add"<T>(arg0: T, arg1: $BiConsumer$Type<($IDebugMessages$Type), (T)>, arg2: string, ...arg3: (any)[]): void
 "add"(arg0: $LogicalSide$Type, arg1: $IDebuggable$Type, arg2: string, ...arg3: (any)[]): void
 "add"<T>(arg0: T, arg1: $BiConsumer$Type<($IDebugMessages$Type), (T)>, arg2: string): void
 "add"<T>(arg0: T, arg1: $BiConsumer$Type<($IDebugMessages$Type), (T)>, arg2: $Component$Type): void
 "add"(arg0: $LogicalSide$Type, arg1: $IDebuggable$Type, arg2: $Component$Type): void
 "add"(arg0: $Component$Type): void
 "add"(arg0: string, ...arg1: (any)[]): void
 "addUnlocalized"(arg0: string): void
 "addUnlocalized"(arg0: string, ...arg1: (any)[]): void
}

export namespace $IDebugMessages {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDebugMessages$Type = ($IDebugMessages);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDebugMessages_ = $IDebugMessages$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/network/$AbstractModMessage" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IModMessage, $IModMessage$Type} from "packages/it/zerono/mods/zerocore/lib/network/$IModMessage"

export class $AbstractModMessage implements $IModMessage {

constructor(arg0: $FriendlyByteBuf$Type)

public "processMessage"(arg0: $NetworkEvent$Context$Type): void
public "encodeTo"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractModMessage$Type = ($AbstractModMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractModMessage_ = $AbstractModMessage$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/$ModBlock$IStackStorableTooltipBuilder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ModBlock$IStackStorableTooltipBuilder {

 "build"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $BlockGetter$Type, arg3: $NonNullConsumer$Type<($Component$Type)>, arg4: boolean): void

(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $BlockGetter$Type, arg3: $NonNullConsumer$Type<($Component$Type)>, arg4: boolean): void
}

export namespace $ModBlock$IStackStorableTooltipBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlock$IStackStorableTooltipBuilder$Type = ($ModBlock$IStackStorableTooltipBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlock$IStackStorableTooltipBuilder_ = $ModBlock$IStackStorableTooltipBuilder$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/api/reactor/$Reactant" {
import {$ReactantType, $ReactantType$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$ReactantType"
import {$Colour, $Colour$Type} from "packages/it/zerono/mods/zerocore/lib/data/gfx/$Colour"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AbstractNamedValue, $AbstractNamedValue$Type} from "packages/it/zerono/mods/extremereactors/api/internal/$AbstractNamedValue"
import {$FuelProperties, $FuelProperties$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$FuelProperties"

export class $Reactant extends $AbstractNamedValue implements $Predicate<($ReactantType)> {


public "equals"(arg0: any): boolean
public "test"(arg0: $ReactantType$Type): boolean
public "copy"(): $Reactant
public "getType"(): $ReactantType
public "getColour"(): $Colour
public "getMinimumSolidSourceAmount"(): integer
public "getMinimumFluidSourceAmount"(): integer
public "getFuelData"(): $FuelProperties
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ReactantType)>
public "negate"(): $Predicate<($ReactantType)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ReactantType)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ReactantType)>
public static "isEqual"<T>(arg0: any): $Predicate<($ReactantType)>
get "type"(): $ReactantType
get "colour"(): $Colour
get "minimumSolidSourceAmount"(): integer
get "minimumFluidSourceAmount"(): integer
get "fuelData"(): $FuelProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reactant$Type = ($Reactant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reactant_ = $Reactant$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/api/radiation/$RadiationPacket" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RadiationPacket {
 "hardness": float
 "intensity": float

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadiationPacket$Type = ($RadiationPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadiationPacket_ = $RadiationPacket$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$ReactorRedstonePortBlock" {
import {$MultiblockReactor, $MultiblockReactor$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$MultiblockReactor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INeighborChangeListener$Notifier, $INeighborChangeListener$Notifier$Type} from "packages/it/zerono/mods/zerocore/lib/block/$INeighborChangeListener$Notifier"
import {$ReactorPartType, $ReactorPartType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$ReactorPartType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$GenericDeviceBlock, $GenericDeviceBlock$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/$GenericDeviceBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReactorRedstonePortBlock extends $GenericDeviceBlock<($MultiblockReactor), ($ReactorPartType)> implements $INeighborChangeListener$Notifier {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockPartBlock$MultiblockPartProperties$Type<($ReactorPartType$Type)>)

public "isSignalSource"(arg0: $BlockState$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorRedstonePortBlock$Type = ($ReactorRedstonePortBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorRedstonePortBlock_ = $ReactorRedstonePortBlock$Type;
}}
declare module "packages/it/zerono/mods/zerocore/base/multiblock/$AbstractMultiblockController" {
import {$AbstractCuboidMultiblockController, $AbstractCuboidMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$AbstractCuboidMultiblockController"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$IMultiblockDimensionVariant, $IMultiblockDimensionVariant$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockDimensionVariant"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $AbstractMultiblockController<Controller extends $AbstractCuboidMultiblockController<(Controller)>, V extends $IMultiblockDimensionVariant> extends $AbstractCuboidMultiblockController<(Controller)> {
readonly "DataUpdated": $IEvent<($Runnable)>


public "getVariant"(): V
public "isInteriorInvisible"(): boolean
public "isInteriorVisible"(): boolean
get "variant"(): V
get "interiorInvisible"(): boolean
get "interiorVisible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMultiblockController$Type<Controller, V> = ($AbstractMultiblockController<(Controller), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMultiblockController_<Controller, V> = $AbstractMultiblockController$Type<(Controller), (V)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$FuelRodsLayout" {
import {$IFuelContainer, $IFuelContainer$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IFuelContainer"
import {$ReactorFuelRodEntity, $ReactorFuelRodEntity$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$ReactorFuelRodEntity"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Direction$Plane, $Direction$Plane$Type} from "packages/net/minecraft/core/$Direction$Plane"
import {$IntSet, $IntSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $FuelRodsLayout {
static readonly "EMPTY": $FuelRodsLayout

constructor(arg0: $Direction$Type, arg1: integer)

public "isEmpty"(): boolean
public "reset"(): void
public "isNotEmpty"(): boolean
public "getAxis"(): $Direction$Axis
public "getOrientation"(): $Direction$Plane
public "updateFuelData"(arg0: $IFuelContainer$Type, arg1: integer): $IntSet
public "getRodLength"(): integer
public "updateFuelRodsOcclusion"(arg0: $Level$Type, arg1: $Iterable$Type<($ReactorFuelRodEntity$Type)>, arg2: boolean): void
public "getRadiateDirections"(): ($Direction)[]
public "getFuelRodModelData"(arg0: integer, arg1: boolean): $ModelData
get "empty"(): boolean
get "notEmpty"(): boolean
get "axis"(): $Direction$Axis
get "orientation"(): $Direction$Plane
get "rodLength"(): integer
get "radiateDirections"(): ($Direction)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelRodsLayout$Type = ($FuelRodsLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelRodsLayout_ = $FuelRodsLayout$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$WasteEjectionSetting" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WasteEjectionSetting extends $Enum<($WasteEjectionSetting)> {
static readonly "Automatic": $WasteEjectionSetting
static readonly "Manual": $WasteEjectionSetting


public static "values"(): ($WasteEjectionSetting)[]
public static "valueOf"(arg0: string): $WasteEjectionSetting
public static "write"(arg0: $CompoundTag$Type, arg1: string, arg2: $WasteEjectionSetting$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$Type, arg1: string, arg2: $WasteEjectionSetting$Type): $WasteEjectionSetting
public "isAutomatic"(): boolean
public "isManual"(): boolean
get "automatic"(): boolean
get "manual"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WasteEjectionSetting$Type = (("automatic") | ("manual")) | ($WasteEjectionSetting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WasteEjectionSetting_ = $WasteEjectionSetting$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IReactorReader" {
import {$EnergySystem, $EnergySystem$Type} from "packages/it/zerono/mods/zerocore/lib/energy/$EnergySystem"
import {$OperationalMode, $OperationalMode$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$OperationalMode"
import {$Stats, $Stats$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$Stats"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FuelRodsLayout, $FuelRodsLayout$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$FuelRodsLayout"
import {$FuelProperties, $FuelProperties$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$FuelProperties"
import {$Reactant, $Reactant$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$Reactant"
import {$IMachineReader, $IMachineReader$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/$IMachineReader"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WideAmount, $WideAmount$Type} from "packages/it/zerono/mods/zerocore/lib/data/$WideAmount"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMultiblockReactorVariant, $IMultiblockReactorVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/variant/$IMultiblockReactorVariant"
import {$WasteEjectionSetting, $WasteEjectionSetting$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$WasteEjectionSetting"

export interface $IReactorReader extends $IMachineReader {

 "getCapacity"(): integer
 "getCapacity"(arg0: $EnergySystem$Type): $WideAmount
 "getVariant"(): $IMultiblockReactorVariant
 "getFuelHeatValue"(): $DoubleSupplier
 "getFuelFertility"(): float
 "getFuel"(): $Optional<($Reactant)>
 "getFuelProperties"(): $FuelProperties
 "getFuelAmount"(): integer
 "getWasteAmount"(): integer
 "getFuelRodsCount"(): integer
 "getWaste"(): $Optional<($Reactant)>
 "getCoolantAmount"(): integer
 "getVaporAmount"(): integer
 "getPowerTapsCount"(): integer
 "getFuelRodsLayout"(): $FuelRodsLayout
 "getEnergyStoredPercentage"(): double
 "getWasteEjectionMode"(): $WasteEjectionSetting
 "getReactorHeatValue"(): $DoubleSupplier
 "getControlRodLocations"(): $List<($BlockPos)>
 "getControlRodsCount"(): integer
 "getUiStats"(): $Stats
 "getOperationalMode"(): $OperationalMode
 "isMachineActive"(): boolean
 "getWorld"(): $Level
}

export namespace $IReactorReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReactorReader$Type = ($IReactorReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReactorReader_ = $IReactorReader$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/$ISerializableRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ISerializableRecipe {

 "serializeTo"(arg0: $FriendlyByteBuf$Type): void
 "serializeTo"(): $JsonElement
}

export namespace $ISerializableRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISerializableRecipe$Type = ($ISerializableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISerializableRecipe_ = $ISerializableRecipe$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockPart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IMultiblockPart<Controller extends $IMultiblockController<(Controller)>> {

 "getWorldPosition"(): $BlockPos
 "isConnected"(): boolean
 "getMultiblockController"(): $Optional<(Controller)>
 "becomeMultiblockSaveDelegate"(): void
 "hasMultiblockSaveData"(): boolean
 "forfeitMultiblockSaveDelegate"(): void
 "onPostMachineAssembled"(arg0: Controller): void
 "onMachineDeactivated"(): void
 "forMultiblockSaveData"(arg0: $Consumer$Type<($CompoundTag$Type)>): void
 "onPreMachineAssembled"(arg0: Controller): void
 "isMachineDisassembled"(): boolean
 "onPostMachineBroken"(): void
 "mapMultiblockSaveData"<T>(arg0: $Function$Type<($CompoundTag$Type), (T)>, arg1: T): T
 "listenForControllerDataUpdates"(): void
 "getMultiblockSaveData"(): $Optional<($CompoundTag)>
 "getNeighboringParts"(): $List<($IMultiblockPart<(Controller)>)>
 "isMultiblockSaveDelegate"(): boolean
 "executeOnController"(arg0: $Consumer$Type<(Controller)>): void
 "onMultiblockDataAssimilated"(): void
 "getWorldPositionHash"(): long
 "testOnController"(arg0: $Predicate$Type<(Controller)>): boolean
 "mapPartWorld"<T>(arg0: $Function$Type<($Level$Type), (T)>, arg1: T): T
 "isMachineAssembled"(): boolean
 "forPartWorld"(arg0: $Consumer$Type<($Level$Type)>): void
/**
 * 
 * @deprecated
 */
 "getPartWorld"(): $Optional<($Level)>
 "evalOnController"<R>(arg0: $Function$Type<(Controller), (R)>, arg1: R): R
 "isPartInvalid"(): boolean
 "isMachinePaused"(): boolean
 "onAttached"(arg0: Controller): void
 "onDetached"(arg0: Controller): void
 "attachToNeighbors"(arg0: $Function$Type<($IMultiblockPart$Type<(Controller)>), ($Set$Type<(Controller)>)>): $Set<(Controller)>
/**
 * 
 * @deprecated
 */
 "attachToNeighbors"(): $Set<(Controller)>
 "setVisited"(): void
 "isNotVisited"(): boolean
 "onOrphaned"(arg0: Controller, arg1: integer, arg2: integer): void
 "onAssimilated"(arg0: Controller): void
 "setUnvisited"(): void
 "assertDetached"(): void
 "isConnectedTo"(arg0: Controller): boolean
 "onMachineActivated"(): void
 "createController"(): Controller
 "getCurrentWorld"(): $Level
 "onPreMachineBroken"(): void
 "isVisited"(): boolean
 "getControllerType"(): $Class<(Controller)>
}

export namespace $IMultiblockPart {
function getDefaultBlockProperties(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockPart$Type<Controller> = ($IMultiblockPart<(Controller)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockPart_<Controller> = $IMultiblockPart$Type<(Controller)>;
}}
declare module "packages/it/zerono/mods/zerocore/internal/gamecontent/debugtool/$DebugToolItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DebugToolItem$ITestCallback, $DebugToolItem$ITestCallback$Type} from "packages/it/zerono/mods/zerocore/internal/gamecontent/debugtool/$DebugToolItem$ITestCallback"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/it/zerono/mods/zerocore/lib/item/$ModItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DebugToolItem extends $ModItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setTestCallback"(arg0: $DebugToolItem$ITestCallback$Type): void
set "testCallback"(value: $DebugToolItem$ITestCallback$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugToolItem$Type = ($DebugToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugToolItem_ = $DebugToolItem$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/$AbstractTwoToOneRecipe$IRecipeFactory" {
import {$IRecipeResult, $IRecipeResult$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/result/$IRecipeResult"
import {$IRecipeIngredient, $IRecipeIngredient$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/ingredient/$IRecipeIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractTwoToOneRecipe, $AbstractTwoToOneRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$AbstractTwoToOneRecipe"

export interface $AbstractTwoToOneRecipe$IRecipeFactory<Ingredient1, Ingredient2, Result, RecipeIngredient1 extends $IRecipeIngredient<(Ingredient1)>, RecipeIngredient2 extends $IRecipeIngredient<(Ingredient2)>, RecipeResult extends $IRecipeResult<(Result)>, Recipe extends $AbstractTwoToOneRecipe<(Ingredient1), (Ingredient2), (Result), (RecipeIngredient1), (RecipeIngredient2), (RecipeResult)>> {

 "create"(arg0: $ResourceLocation$Type, arg1: RecipeIngredient1, arg2: RecipeIngredient2, arg3: RecipeResult): Recipe

(arg0: $ResourceLocation$Type, arg1: RecipeIngredient1, arg2: RecipeIngredient2, arg3: RecipeResult): Recipe
}

export namespace $AbstractTwoToOneRecipe$IRecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTwoToOneRecipe$IRecipeFactory$Type<Ingredient1, Ingredient2, Result, RecipeIngredient1, RecipeIngredient2, RecipeResult, Recipe> = ($AbstractTwoToOneRecipe$IRecipeFactory<(Ingredient1), (Ingredient2), (Result), (RecipeIngredient1), (RecipeIngredient2), (RecipeResult), (Recipe)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTwoToOneRecipe$IRecipeFactory_<Ingredient1, Ingredient2, Result, RecipeIngredient1, RecipeIngredient2, RecipeResult, Recipe> = $AbstractTwoToOneRecipe$IRecipeFactory$Type<(Ingredient1), (Ingredient2), (Result), (RecipeIngredient1), (RecipeIngredient2), (RecipeResult), (Recipe)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/serializer/$OneToOneRecipeSerializer" {
import {$IRecipeResult, $IRecipeResult$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/result/$IRecipeResult"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$AbstractOneToOneRecipe$IRecipeFactory, $AbstractOneToOneRecipe$IRecipeFactory$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$AbstractOneToOneRecipe$IRecipeFactory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$AbstractOneToOneRecipe, $AbstractOneToOneRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$AbstractOneToOneRecipe"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IRecipeIngredient, $IRecipeIngredient$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/ingredient/$IRecipeIngredient"

export class $OneToOneRecipeSerializer<Ingredient, Result, RecipeIngredient extends $IRecipeIngredient<(Ingredient)>, RecipeResult extends $IRecipeResult<(Result)>, Recipe extends $AbstractOneToOneRecipe<(Ingredient), (Result), (RecipeIngredient), (RecipeResult)>> implements $RecipeSerializer<(Recipe)> {

constructor(arg0: $AbstractOneToOneRecipe$IRecipeFactory$Type<(Ingredient), (Result), (RecipeIngredient), (RecipeResult), (Recipe)>, arg1: $Function$Type<($JsonElement$Type), (RecipeIngredient)>, arg2: $Function$Type<($FriendlyByteBuf$Type), (RecipeIngredient)>, arg3: $Function$Type<($JsonElement$Type), (RecipeResult)>, arg4: $Function$Type<($FriendlyByteBuf$Type), (RecipeResult)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): Recipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): Recipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: Recipe): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): Recipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OneToOneRecipeSerializer$Type<Ingredient, Result, RecipeIngredient, RecipeResult, Recipe> = ($OneToOneRecipeSerializer<(Ingredient), (Result), (RecipeIngredient), (RecipeResult), (Recipe)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OneToOneRecipeSerializer_<Ingredient, Result, RecipeIngredient, RecipeResult, Recipe> = $OneToOneRecipeSerializer$Type<(Ingredient), (Result), (RecipeIngredient), (RecipeResult), (Recipe)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IHeat" {
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"

export interface $IHeat extends $DoubleSupplier {

 "add"(arg0: double): void
 "set"(arg0: double): void
 "resetIfNegative"(): void
 "getAsDouble"(): double
}

export namespace $IHeat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHeat$Type = ($IHeat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHeat_ = $IHeat$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/property/$BlockFacingsProperty" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BlockFacingsProperty extends $Enum<($BlockFacingsProperty)> implements $StringRepresentable {
static readonly "None": $BlockFacingsProperty
static readonly "All": $BlockFacingsProperty
static readonly "Face_D": $BlockFacingsProperty
static readonly "Face_E": $BlockFacingsProperty
static readonly "Face_N": $BlockFacingsProperty
static readonly "Face_S": $BlockFacingsProperty
static readonly "Face_U": $BlockFacingsProperty
static readonly "Face_W": $BlockFacingsProperty
static readonly "Angle_DE": $BlockFacingsProperty
static readonly "Angle_DN": $BlockFacingsProperty
static readonly "Angle_DS": $BlockFacingsProperty
static readonly "Angle_DW": $BlockFacingsProperty
static readonly "Angle_EN": $BlockFacingsProperty
static readonly "Angle_ES": $BlockFacingsProperty
static readonly "Angle_EU": $BlockFacingsProperty
static readonly "Angle_NU": $BlockFacingsProperty
static readonly "Angle_NW": $BlockFacingsProperty
static readonly "Angle_SU": $BlockFacingsProperty
static readonly "Angle_SW": $BlockFacingsProperty
static readonly "Angle_UW": $BlockFacingsProperty
static readonly "Opposite_DU": $BlockFacingsProperty
static readonly "Opposite_EW": $BlockFacingsProperty
static readonly "Opposite_NS": $BlockFacingsProperty
static readonly "CShape_DEU": $BlockFacingsProperty
static readonly "CShape_DEW": $BlockFacingsProperty
static readonly "CShape_DNS": $BlockFacingsProperty
static readonly "CShape_DNU": $BlockFacingsProperty
static readonly "CShape_DSU": $BlockFacingsProperty
static readonly "CShape_DUW": $BlockFacingsProperty
static readonly "CShape_ENS": $BlockFacingsProperty
static readonly "CShape_ENW": $BlockFacingsProperty
static readonly "CShape_ESW": $BlockFacingsProperty
static readonly "CShape_EUW": $BlockFacingsProperty
static readonly "CShape_NSU": $BlockFacingsProperty
static readonly "CShape_NSW": $BlockFacingsProperty
static readonly "Corner_DEN": $BlockFacingsProperty
static readonly "Corner_DES": $BlockFacingsProperty
static readonly "Corner_DNW": $BlockFacingsProperty
static readonly "Corner_DSW": $BlockFacingsProperty
static readonly "Corner_ENU": $BlockFacingsProperty
static readonly "Corner_ESU": $BlockFacingsProperty
static readonly "Corner_NUW": $BlockFacingsProperty
static readonly "Corner_SUW": $BlockFacingsProperty
static readonly "Misc_DENS": $BlockFacingsProperty
static readonly "Misc_DENU": $BlockFacingsProperty
static readonly "Misc_DENW": $BlockFacingsProperty
static readonly "Misc_DESU": $BlockFacingsProperty
static readonly "Misc_DESW": $BlockFacingsProperty
static readonly "Misc_DNSW": $BlockFacingsProperty
static readonly "Misc_DNUW": $BlockFacingsProperty
static readonly "Misc_DSUW": $BlockFacingsProperty
static readonly "Misc_ENSU": $BlockFacingsProperty
static readonly "Misc_ENUW": $BlockFacingsProperty
static readonly "Misc_ESUW": $BlockFacingsProperty
static readonly "Misc_NSUW": $BlockFacingsProperty
static readonly "Pipe_DEUW": $BlockFacingsProperty
static readonly "Pipe_DNSU": $BlockFacingsProperty
static readonly "Pipe_ENSW": $BlockFacingsProperty
static readonly "PipeEnd_DENSU": $BlockFacingsProperty
static readonly "PipeEnd_DENSW": $BlockFacingsProperty
static readonly "PipeEnd_DENUW": $BlockFacingsProperty
static readonly "PipeEnd_DESUW": $BlockFacingsProperty
static readonly "PipeEnd_DNSUW": $BlockFacingsProperty
static readonly "PipeEnd_ENSUW": $BlockFacingsProperty
static readonly "FACINGS": $EnumProperty<($BlockFacingsProperty)>
static readonly "ALL_AND_NONE": $EnumSet<($BlockFacingsProperty)>
static readonly "FACES": $EnumSet<($BlockFacingsProperty)>
static readonly "ANGLES": $EnumSet<($BlockFacingsProperty)>
static readonly "OPPOSITES": $EnumSet<($BlockFacingsProperty)>
static readonly "CSHAPES": $EnumSet<($BlockFacingsProperty)>
static readonly "CORNERS": $EnumSet<($BlockFacingsProperty)>
static readonly "MISCELLANEA": $EnumSet<($BlockFacingsProperty)>
static readonly "PIPES": $EnumSet<($BlockFacingsProperty)>
static readonly "PIPEENDS": $EnumSet<($BlockFacingsProperty)>


public static "values"(): ($BlockFacingsProperty)[]
public static "valueOf"(arg0: string): $BlockFacingsProperty
public "getHash"(): byte
public "getSerializedName"(): string
public "asVariantString"(arg0: $EnumProperty$Type<($BlockFacingsProperty$Type)>): string
public "asVariantString"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "hash"(): byte
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFacingsProperty$Type = (("face_u") | ("pipeend_dnsuw") | ("face_s") | ("opposite_ew") | ("face_w") | ("misc_esuw") | ("cshape_nsw") | ("none") | ("corner_esu") | ("face_e") | ("angle_nu") | ("cshape_euw") | ("corner_enu") | ("face_d") | ("cshape_dsu") | ("opposite_ns") | ("pipe_dnsu") | ("angle_nw") | ("cshape_nsu") | ("pipe_deuw") | ("face_n") | ("all") | ("misc_dsuw") | ("misc_dnsw") | ("pipeend_denuw") | ("angle_uw") | ("corner_den") | ("corner_nuw") | ("angle_en") | ("angle_es") | ("misc_denw") | ("corner_des") | ("misc_enuw") | ("cshape_dnu") | ("misc_dens") | ("cshape_dns") | ("angle_eu") | ("misc_denu") | ("cshape_dew") | ("cshape_deu") | ("corner_dsw") | ("angle_de") | ("corner_dnw") | ("misc_desu") | ("cshape_duw") | ("misc_nsuw") | ("angle_dn") | ("pipeend_desuw") | ("angle_ds") | ("misc_dnuw") | ("angle_dw") | ("misc_desw") | ("cshape_esw") | ("opposite_du") | ("pipeend_densu") | ("pipeend_densw") | ("angle_su") | ("angle_sw") | ("pipe_ensw") | ("corner_suw") | ("cshape_enw") | ("misc_ensu") | ("pipeend_ensuw") | ("cshape_ens")) | ($BlockFacingsProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFacingsProperty_ = $BlockFacingsProperty$Type;
}}
declare module "packages/it/zerono/mods/zerocore/base/multiblock/part/$INeverCauseRenderingSkip" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INeverCauseRenderingSkip {

}

export namespace $INeverCauseRenderingSkip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INeverCauseRenderingSkip$Type = ($INeverCauseRenderingSkip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INeverCauseRenderingSkip_ = $INeverCauseRenderingSkip$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/energy/$IWideEnergyStorage2" {
import {$IEnergySystemAware, $IEnergySystemAware$Type} from "packages/it/zerono/mods/zerocore/lib/energy/$IEnergySystemAware"
import {$EnergySystem, $EnergySystem$Type} from "packages/it/zerono/mods/zerocore/lib/energy/$EnergySystem"
import {$WideAmount, $WideAmount$Type} from "packages/it/zerono/mods/zerocore/lib/data/$WideAmount"
import {$OperationMode, $OperationMode$Type} from "packages/it/zerono/mods/zerocore/lib/data/stack/$OperationMode"

export interface $IWideEnergyStorage2 extends $IEnergySystemAware {

 "getCapacity"(arg0: $EnergySystem$Type): $WideAmount
 "getFreeSpace"(arg0: $EnergySystem$Type): $WideAmount
 "extractEnergy"(arg0: $EnergySystem$Type, arg1: $WideAmount$Type, arg2: $OperationMode$Type): $WideAmount
 "getEnergyStored"(arg0: $EnergySystem$Type): $WideAmount
 "canInsert"(): boolean
 "insertEnergy"(arg0: $EnergySystem$Type, arg1: $WideAmount$Type, arg2: $OperationMode$Type): $WideAmount
 "canExtract"(): boolean
 "setEnergyStored"(arg0: $WideAmount$Type, arg1: $EnergySystem$Type): void
 "getEnergySystem"(): $EnergySystem
}

export namespace $IWideEnergyStorage2 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWideEnergyStorage2$Type = ($IWideEnergyStorage2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWideEnergyStorage2_ = $IWideEnergyStorage2$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$AbstractCuboidMultiblockController" {
import {$AbstractMultiblockController, $AbstractMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$AbstractMultiblockController"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $AbstractCuboidMultiblockController<Controller extends $AbstractCuboidMultiblockController<(Controller)>> extends $AbstractMultiblockController<(Controller)> {
readonly "DataUpdated": $IEvent<($Runnable)>


public "forceStructureUpdate"(arg0: $Level$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCuboidMultiblockController$Type<Controller> = ($AbstractCuboidMultiblockController<(Controller)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCuboidMultiblockController_<Controller> = $AbstractCuboidMultiblockController$Type<(Controller)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IReactorWriter" {
import {$IActivableMachine, $IActivableMachine$Type} from "packages/it/zerono/mods/zerocore/lib/$IActivableMachine"
import {$EnergySystem, $EnergySystem$Type} from "packages/it/zerono/mods/zerocore/lib/energy/$EnergySystem"
import {$OperationalMode, $OperationalMode$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$OperationalMode"
import {$IReactorReader, $IReactorReader$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IReactorReader"
import {$Stats, $Stats$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$Stats"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FuelRodsLayout, $FuelRodsLayout$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$FuelRodsLayout"
import {$FuelProperties, $FuelProperties$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$FuelProperties"
import {$Reactant, $Reactant$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$Reactant"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WideAmount, $WideAmount$Type} from "packages/it/zerono/mods/zerocore/lib/data/$WideAmount"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WasteEjectionSetting, $WasteEjectionSetting$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$WasteEjectionSetting"
import {$IMultiblockReactorVariant, $IMultiblockReactorVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/variant/$IMultiblockReactorVariant"

export interface $IReactorWriter extends $IReactorReader, $IActivableMachine {

 "ejectFuel"(): void
 "ejectFuel"(arg0: boolean, arg1: $BlockPos$Type): void
 "ejectFuel"(arg0: boolean): void
 "setControlRodsInsertionRatio"(arg0: integer): void
 "setWasteEjectionMode"(arg0: $WasteEjectionSetting$Type): void
 "changeControlRodsInsertionRatio"(arg0: integer): void
 "ejectWaste"(arg0: boolean, arg1: $BlockPos$Type): void
 "ejectWaste"(arg0: boolean): void
 "ejectWaste"(): void
 "getCapacity"(): integer
 "getCapacity"(arg0: $EnergySystem$Type): $WideAmount
 "getVariant"(): $IMultiblockReactorVariant
 "getFuelHeatValue"(): $DoubleSupplier
 "getFuelFertility"(): float
 "getFuel"(): $Optional<($Reactant)>
 "getFuelProperties"(): $FuelProperties
 "getFuelAmount"(): integer
 "getWasteAmount"(): integer
 "getFuelRodsCount"(): integer
 "getWaste"(): $Optional<($Reactant)>
 "getCoolantAmount"(): integer
 "getVaporAmount"(): integer
 "getPowerTapsCount"(): integer
 "getFuelRodsLayout"(): $FuelRodsLayout
 "getEnergyStoredPercentage"(): double
 "getWasteEjectionMode"(): $WasteEjectionSetting
 "getReactorHeatValue"(): $DoubleSupplier
 "getControlRodLocations"(): $List<($BlockPos)>
 "getControlRodsCount"(): integer
 "getUiStats"(): $Stats
 "getOperationalMode"(): $OperationalMode
 "isMachineActive"(): boolean
 "setMachineActive"(arg0: boolean): void
 "toggleMachineActive"(): void
 "getWorld"(): $Level
}

export namespace $IReactorWriter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReactorWriter$Type = ($IReactorWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReactorWriter_ = $IReactorWriter$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$TurbinePartType" {
import {$IMultiblockVariant, $IMultiblockVariant$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockVariant"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$MultiblockPartTypeProperties, $MultiblockPartTypeProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartTypeProperties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IMultiblockPartType2, $IMultiblockPartType2$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType2"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockPartBlock, $MultiblockPartBlock$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock"
import {$MultiblockTurbine, $MultiblockTurbine$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$MultiblockTurbine"

export class $TurbinePartType extends $Enum<($TurbinePartType)> implements $IMultiblockPartType2<($MultiblockTurbine), ($TurbinePartType)> {
static readonly "Casing": $TurbinePartType
static readonly "Glass": $TurbinePartType
static readonly "Controller": $TurbinePartType
static readonly "RotorBearing": $TurbinePartType
static readonly "RotorShaft": $TurbinePartType
static readonly "RotorBlade": $TurbinePartType
static readonly "ActiveFluidPortForge": $TurbinePartType
static readonly "PassiveFluidPortForge": $TurbinePartType
static readonly "CreativeSteamGenerator": $TurbinePartType
static readonly "ActivePowerTapFE": $TurbinePartType
static readonly "PassivePowerTapFE": $TurbinePartType
static readonly "ComputerPort": $TurbinePartType
static readonly "ChargingPortFE": $TurbinePartType
static readonly "RedstonePort": $TurbinePartType


public static "values"(): ($TurbinePartType)[]
public static "valueOf"(arg0: string): $TurbinePartType
public "getSerializedName"(): string
public "getPartTypeProperties"(): $MultiblockPartTypeProperties<($MultiblockTurbine), ($TurbinePartType)>
public "getTranslationKey"(): string
public "createTileEntity"(arg0: $BlockState$Type, arg1: $BlockPos$Type): $BlockEntity
public "createBlock"(arg0: $IMultiblockVariant$Type): $MultiblockPartBlock<($MultiblockTurbine), ($TurbinePartType)>
public "createBlock"(): $MultiblockPartBlock<($MultiblockTurbine), ($TurbinePartType)>
public "getByteHashCode"(): byte
public "getNameForId"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "partTypeProperties"(): $MultiblockPartTypeProperties<($MultiblockTurbine), ($TurbinePartType)>
get "translationKey"(): string
get "byteHashCode"(): byte
get "nameForId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurbinePartType$Type = (("glass") | ("controller") | ("rotorblade") | ("activepowertapfe") | ("chargingportfe") | ("rotorshaft") | ("redstoneport") | ("passivepowertapfe") | ("casing") | ("rotorbearing") | ("activefluidportforge") | ("passivefluidportforge") | ("creativesteamgenerator") | ("computerport")) | ($TurbinePartType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurbinePartType_ = $TurbinePartType$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/variant/$IMultiblockReactorVariant" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WideAmount, $WideAmount$Type} from "packages/it/zerono/mods/zerocore/lib/data/$WideAmount"
import {$IMultiblockGeneratorVariant, $IMultiblockGeneratorVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/variant/$IMultiblockGeneratorVariant"

export interface $IMultiblockReactorVariant extends $IMultiblockGeneratorVariant {

 "getSolidFuelConversionEfficiency"(): float
 "solidSourceAmountToReactantAmount"(arg0: integer): integer
 "getRadiationAttenuation"(): float
 "reactantAmountToFluidSourceAmount"(arg0: integer): integer
 "reactantAmountToSolidSourceAmount"(arg0: integer): integer
 "getFluidFuelConversionEfficiency"(): float
 "fluidSourceAmountToReactantAmount"(arg0: integer): integer
 "getResidualRadiationAttenuation"(): float
 "getEnergyGenerationEfficiency"(): float
 "getPartEnergyCapacity"(): integer
 "getMaxEnergyExtractionRate"(): $WideAmount
 "getVaporGenerationEfficiency"(): float
 "getMaxFluidCapacity"(): integer
 "getPartFluidCapacity"(): integer
 "getChargerMaxRate"(): double
 "getMinimumPartsCount"(): integer
 "getMaximumYSize"(): integer
 "getMaximumXSize"(): integer
 "getMaximumZSize"(): integer
 "getName"(): string
 "getId"(): integer
 "getDefaultBlockProperties"(): $BlockBehaviour$Properties
 "getTranslationKey"(): string
 "getBlockProperties"(): $BlockBehaviour$Properties
}

export namespace $IMultiblockReactorVariant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockReactorVariant$Type = ($IMultiblockReactorVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockReactorVariant_ = $IMultiblockReactorVariant$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$PartPosition$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PartPosition$Type extends $Enum<($PartPosition$Type)> {
static readonly "Unknown": $PartPosition$Type
static readonly "Interior": $PartPosition$Type
static readonly "Frame": $PartPosition$Type
static readonly "Face": $PartPosition$Type


public static "values"(): ($PartPosition$Type)[]
public static "valueOf"(arg0: string): $PartPosition$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartPosition$Type$Type = (("face") | ("unknown") | ("interior") | ("frame")) | ($PartPosition$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartPosition$Type_ = $PartPosition$Type$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/stack/$AbstractStackHolder" {
import {$ObjIntConsumer, $ObjIntConsumer$Type} from "packages/java/util/function/$ObjIntConsumer"
import {$IStackHolder$ChangeType, $IStackHolder$ChangeType$Type} from "packages/it/zerono/mods/zerocore/lib/data/stack/$IStackHolder$ChangeType"
import {$Int2IntFunction, $Int2IntFunction$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import {$IStackHolder, $IStackHolder$Type} from "packages/it/zerono/mods/zerocore/lib/data/stack/$IStackHolder"

export class $AbstractStackHolder<Holder extends $AbstractStackHolder<(Holder), (Stack)>, Stack> implements $IStackHolder<(Holder), (Stack)> {


public "setOnContentsChangedListener"(arg0: $ObjIntConsumer$Type<($IStackHolder$ChangeType$Type)>): Holder
public "setMaxCapacity"(arg0: $Int2IntFunction$Type): void
public "isStackValid"(arg0: integer, arg1: Stack): boolean
public "getMaxCapacity"(arg0: integer): integer
public "isEmpty"(arg0: integer): boolean
public "getFreeSpace"(arg0: integer): integer
public "setMaxCapacity"(arg0: integer): void
public "getAmount"(arg0: integer): integer
set "onContentsChangedListener"(value: $ObjIntConsumer$Type<($IStackHolder$ChangeType$Type)>)
set "maxCapacity"(value: $Int2IntFunction$Type)
set "maxCapacity"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStackHolder$Type<Holder, Stack> = ($AbstractStackHolder<(Holder), (Stack)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStackHolder_<Holder, Stack> = $AbstractStackHolder$Type<(Holder), (Stack)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/geometry/$CuboidBoundingBox" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$NonNullFunction, $NonNullFunction$Type} from "packages/net/minecraftforge/common/util/$NonNullFunction"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $CuboidBoundingBox implements $Iterable<($BlockPos)> {
static readonly "EMPTY": $CuboidBoundingBox

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)
constructor(arg0: $Vec3i$Type, arg1: $Vec3i$Type)
constructor()

public "add"(arg0: $BlockPos$Type): $CuboidBoundingBox
public "remove"(arg0: $BlockPos$Type): $CuboidBoundingBox
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLength"(arg0: $Direction$Axis$Type): integer
public "isEmpty"(): boolean
public "contains"(arg0: $Vec3i$Type): boolean
public "contains"(arg0: integer, arg1: integer, arg2: integer): boolean
public "iterator"(): $Iterator<($BlockPos)>
public "map"<R>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (R)>, arg1: $NonNullFunction$Type<($BlockPos$Type), ($BlockPos$Type)>, arg2: $NonNullFunction$Type<($BlockPos$Type), ($BlockPos$Type)>): R
public "map"<R>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (R)>): R
public "accept"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>, arg1: $NonNullFunction$Type<($BlockPos$Type), ($BlockPos$Type)>, arg2: $NonNullFunction$Type<($BlockPos$Type), ($BlockPos$Type)>): void
public "accept"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>): void
public "combine"(arg0: $CuboidBoundingBox$Type): $CuboidBoundingBox
public "getMin"(): $BlockPos
public "getMax"(): $BlockPos
public "getMinZ"(): integer
public "getMinX"(): integer
public "getMaxZ"(): integer
public "getMaxX"(): integer
public "getMinY"(): integer
public "getMaxY"(): integer
public "getVolume"(): integer
public "getCenter"(): $BlockPos
public "commonVertices"(arg0: $Vec3i$Type): integer
public "getInternalVolume"(): integer
public "getAABB"(): $AABB
public "getLengthZ"(): integer
public "getLengthY"(): integer
public "getLengthX"(): integer
public "spliterator"(): $Spliterator<($BlockPos)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$BlockPos>;
get "empty"(): boolean
get "min"(): $BlockPos
get "max"(): $BlockPos
get "minZ"(): integer
get "minX"(): integer
get "maxZ"(): integer
get "maxX"(): integer
get "minY"(): integer
get "maxY"(): integer
get "volume"(): integer
get "center"(): $BlockPos
get "internalVolume"(): integer
get "aABB"(): $AABB
get "lengthZ"(): integer
get "lengthY"(): integer
get "lengthX"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuboidBoundingBox$Type = ($CuboidBoundingBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuboidBoundingBox_ = $CuboidBoundingBox$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType2" {
import {$IMultiblockVariant, $IMultiblockVariant$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockVariant"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$IMultiblockPartType, $IMultiblockPartType$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MultiblockPartTypeProperties, $MultiblockPartTypeProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartTypeProperties"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockPartBlock, $MultiblockPartBlock$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock"

export interface $IMultiblockPartType2<Controller extends $IMultiblockController<(Controller)>, PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType2<(Controller), (PartType)>)> extends $IMultiblockPartType {

 "getTranslationKey"(): string
 "createTileEntity"(arg0: $BlockState$Type, arg1: $BlockPos$Type): $BlockEntity
 "createBlock"(arg0: $IMultiblockVariant$Type): $MultiblockPartBlock<(Controller), (PartType)>
 "createBlock"(): $MultiblockPartBlock<(Controller), (PartType)>
 "getPartTypeProperties"(): $MultiblockPartTypeProperties<(Controller), (PartType)>
 "getByteHashCode"(): byte
 "getNameForId"(): string
 "getSerializedName"(): string
}

export namespace $IMultiblockPartType2 {
function fromEnum<E>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
function fromEnumWithMapping<E>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
function keys(arg0: ($StringRepresentable$Type)[]): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockPartType2$Type<Controller, PartType> = ($IMultiblockPartType2<(Controller), (PartType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockPartType2_<Controller, PartType> = $IMultiblockPartType2$Type<(Controller), (PartType)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/rotor/$RotorShaftState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RotorShaftState extends $Enum<($RotorShaftState)> implements $StringRepresentable {
static readonly "HIDDEN": $RotorShaftState
static readonly "Y_NOBLADES": $RotorShaftState
static readonly "Y_X": $RotorShaftState
static readonly "Y_Z": $RotorShaftState
static readonly "Y_XZ": $RotorShaftState
static readonly "X_NOBLADES": $RotorShaftState
static readonly "X_Y": $RotorShaftState
static readonly "X_Z": $RotorShaftState
static readonly "X_YZ": $RotorShaftState
static readonly "Z_NOBLADES": $RotorShaftState
static readonly "Z_Y": $RotorShaftState
static readonly "Z_X": $RotorShaftState
static readonly "Z_XY": $RotorShaftState
static "VALUES": ($RotorShaftState)[]


public "toString"(): string
public static "values"(): ($RotorShaftState)[]
public static "valueOf"(arg0: string): $RotorShaftState
public static "getDefault"(): $RotorShaftState
public "getSerializedName"(): string
public "getAxis"(): $Direction$Axis
public static "getBladesDirections"(arg0: $Direction$Axis$Type): ($Direction)[]
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "default"(): $RotorShaftState
get "serializedName"(): string
get "axis"(): $Direction$Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotorShaftState$Type = (("x_noblades") | ("hidden") | ("y_noblades") | ("y_xz") | ("x_yz") | ("x_z") | ("z_x") | ("y_x") | ("x_y") | ("y_z") | ("z_noblades") | ("z_y") | ("z_xy")) | ($RotorShaftState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotorShaftState_ = $RotorShaftState$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartTypeProvider" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$IMultiblockPartType, $IMultiblockPartType$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IMultiblockPartTypeProvider<Controller extends $IMultiblockController<(Controller)>, PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType)> {

 "getPartTypeOrDefault"(arg0: PartType): PartType
 "getBlockType"(): $Block
 "isTypeOfPart"(arg0: PartType): boolean
 "getPartType"(): $Optional<(PartType)>

(arg0: PartType): PartType
}

export namespace $IMultiblockPartTypeProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockPartTypeProvider$Type<Controller, PartType> = ($IMultiblockPartTypeProvider<(Controller), (PartType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockPartTypeProvider_<Controller, PartType> = $IMultiblockPartTypeProvider$Type<(Controller), (PartType)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/$ModBlock$ExtendedProperties" {
import {$ModBlock$IStackStorableTooltipBuilder, $ModBlock$IStackStorableTooltipBuilder$Type} from "packages/it/zerono/mods/zerocore/lib/block/$ModBlock$IStackStorableTooltipBuilder"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export class $ModBlock$ExtendedProperties<T extends $ModBlock$ExtendedProperties<(T)>> {

constructor()

public "setAsStackStorable"(arg0: $ModBlock$IStackStorableTooltipBuilder$Type): T
public "setAsStackStorable"(arg0: boolean): T
public "setBlockProperties"(arg0: $BlockBehaviour$Properties$Type): T
set "asStackStorable"(value: $ModBlock$IStackStorableTooltipBuilder$Type)
set "asStackStorable"(value: boolean)
set "blockProperties"(value: $BlockBehaviour$Properties$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlock$ExtendedProperties$Type<T> = ($ModBlock$ExtendedProperties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlock$ExtendedProperties_<T> = $ModBlock$ExtendedProperties$Type<(T)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/item/$ModItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getNameForTranslation"(arg0: $Item$Type): $Component
public "createItemStack"(arg0: integer): $ItemStack
public "createItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModItem$Type = ($ModItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModItem_ = $ModItem$Type;
}}
declare module "packages/it/zerono/mods/zerocore/internal/gamecontent/debugtool/$DebugToolItem$ITestCallback" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $DebugToolItem$ITestCallback {

 "runTest"(arg0: integer, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type): void

(arg0: integer, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type): void
}

export namespace $DebugToolItem$ITestCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugToolItem$ITestCallback$Type = ($DebugToolItem$ITestCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugToolItem$ITestCallback_ = $DebugToolItem$ITestCallback$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/energy/$EnergySystem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$WideAmount, $WideAmount$Type} from "packages/it/zerono/mods/zerocore/lib/data/$WideAmount"

export class $EnergySystem extends $Enum<($EnergySystem)> {
static readonly "ForgeEnergy": $EnergySystem
static readonly "RedstoneFlux": $EnergySystem
static readonly "Tesla": $EnergySystem
static readonly "EnergyUnit": $EnergySystem
static readonly "MinecraftJoules": $EnergySystem
static readonly "Joules": $EnergySystem
static readonly "GalacticraftJoules": $EnergySystem
static readonly "REFERENCE": $EnergySystem


public "toString"(): string
public static "values"(): ($EnergySystem)[]
public static "valueOf"(arg0: string): $EnergySystem
public static "write"(arg0: $CompoundTag$Type, arg1: string, arg2: $EnergySystem$Type): void
public static "read"(arg0: $CompoundTag$Type, arg1: string, arg2: $EnergySystem$Type): $EnergySystem
public "getFullName"(): string
public "convertTo"(arg0: $EnergySystem$Type, arg1: $WideAmount$Type): $WideAmount
public "convertTo"(arg0: $EnergySystem$Type, arg1: double): double
public "getUnit"(): string
public "asHumanReadableNumber"(arg0: double): string
public "getConversionRatio"(): double
get "fullName"(): string
get "unit"(): string
get "conversionRatio"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergySystem$Type = (("tesla") | ("forgeenergy") | ("redstoneflux") | ("energyunit") | ("minecraftjoules") | ("joules") | ("galacticraftjoules")) | ($EnergySystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergySystem_ = $EnergySystem$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$VentSetting" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $VentSetting extends $Enum<($VentSetting)> implements $Predicate<($VentSetting)> {
static readonly "VentOverflow": $VentSetting
static readonly "VentAll": $VentSetting
static readonly "DoNotVent": $VentSetting


public static "values"(): ($VentSetting)[]
public "test"(arg0: $VentSetting$Type): boolean
public static "valueOf"(arg0: string): $VentSetting
public static "getDefault"(): $VentSetting
public "isVentAll"(): boolean
public "isDoNotVent"(): boolean
public "isVentOverflow"(): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($VentSetting)>
public "negate"(): $Predicate<($VentSetting)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($VentSetting)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($VentSetting)>
public static "isEqual"<T>(arg0: any): $Predicate<($VentSetting)>
get "default"(): $VentSetting
get "ventAll"(): boolean
get "doNotVent"(): boolean
get "ventOverflow"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VentSetting$Type = (("ventall") | ("donotvent") | ("ventoverflow")) | ($VentSetting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VentSetting_ = $VentSetting$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/api/coolant/$Coolant" {
import {$Colour, $Colour$Type} from "packages/it/zerono/mods/zerocore/lib/data/gfx/$Colour"
import {$AbstractNamedValue, $AbstractNamedValue$Type} from "packages/it/zerono/mods/extremereactors/api/internal/$AbstractNamedValue"

export class $Coolant extends $AbstractNamedValue {
static readonly "EMPTY": $Coolant


public "equals"(arg0: any): boolean
public "copy"(): $Coolant
public "getBoilingPoint"(): float
public "getColour"(): $Colour
public "getEnthalpyOfVaporization"(): float
get "boilingPoint"(): float
get "colour"(): $Colour
get "enthalpyOfVaporization"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Coolant$Type = ($Coolant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Coolant_ = $Coolant$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IReactorMachine" {
import {$IActivableMachine, $IActivableMachine$Type} from "packages/it/zerono/mods/zerocore/lib/$IActivableMachine"
import {$CuboidBoundingBox, $CuboidBoundingBox$Type} from "packages/it/zerono/mods/zerocore/lib/data/geometry/$CuboidBoundingBox"
import {$OperationalMode, $OperationalMode$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$OperationalMode"
import {$Stats, $Stats$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$Stats"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFluidContainer, $IFluidContainer$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$IFluidContainer"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$IHeat, $IHeat$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IHeat"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$IFuelContainer, $IFuelContainer$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IFuelContainer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IMultiblockMachine, $IMultiblockMachine$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockMachine"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IReactorEnvironment, $IReactorEnvironment$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IReactorEnvironment"
import {$IMultiblockReactorVariant, $IMultiblockReactorVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/variant/$IMultiblockReactorVariant"

export interface $IReactorMachine extends $IMultiblockMachine, $IActivableMachine {

 "getEnvironment"(): $IReactorEnvironment
 "getVariant"(): $IMultiblockReactorVariant
 "performRefuelingCycle"(): boolean
 "getFuelContainer"(): $IFuelContainer
 "getFluidContainer"(): $IFluidContainer
 "getUiStats"(): $Stats
 "getOperationalMode"(): $OperationalMode
 "getFuelHeat"(): $IHeat
 "performInputCycle"(): boolean
 "performOutputCycle"(): void
/**
 * 
 * @deprecated
 */
 "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
 "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>, arg1: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): void
 "getReferenceCoord"(): $Optional<($BlockPos)>
 "getBoundingBox"(): $CuboidBoundingBox
 "getWorld"(): $Level
/**
 * 
 * @deprecated
 */
 "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg3: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): T
/**
 * 
 * @deprecated
 */
 "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T): T
 "forReferenceCoordinates"(arg0: $Consumer$Type<($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
 "getMinimumCoord"(): $Optional<($BlockPos)>
 "isMachineActive"(): boolean
 "setMachineActive"(arg0: boolean): void
 "toggleMachineActive"(): void
}

export namespace $IReactorMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReactorMachine$Type = ($IReactorMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReactorMachine_ = $IReactorMachine$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$ITurbineEnvironment" {
import {$CoilMaterial, $CoilMaterial$Type} from "packages/it/zerono/mods/extremereactors/api/turbine/$CoilMaterial"
import {$RotorComponentType, $RotorComponentType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/rotor/$RotorComponentType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITurbineEnvironment {

 "getCoilBlock"(arg0: $BlockPos$Type): $Optional<($CoilMaterial)>
 "getRotorComponentTypeAt"(arg0: $BlockPos$Type): $RotorComponentType
 "isSimulator"(): boolean
}

export namespace $ITurbineEnvironment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITurbineEnvironment$Type = ($ITurbineEnvironment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITurbineEnvironment_ = $ITurbineEnvironment$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$ITurbineMachine" {
import {$IActivableMachine, $IActivableMachine$Type} from "packages/it/zerono/mods/zerocore/lib/$IActivableMachine"
import {$CuboidBoundingBox, $CuboidBoundingBox$Type} from "packages/it/zerono/mods/zerocore/lib/data/geometry/$CuboidBoundingBox"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFluidContainer, $IFluidContainer$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$IFluidContainer"
import {$IMultiblockTurbineVariant, $IMultiblockTurbineVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/variant/$IMultiblockTurbineVariant"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IMultiblockMachine, $IMultiblockMachine$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockMachine"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITurbineEnvironment, $ITurbineEnvironment$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$ITurbineEnvironment"

export interface $ITurbineMachine extends $IMultiblockMachine, $IActivableMachine {

 "getEnvironment"(): $ITurbineEnvironment
 "getVariant"(): $IMultiblockTurbineVariant
 "getFluidContainer"(): $IFluidContainer
 "performInputCycle"(): void
 "performOutputCycle"(): void
/**
 * 
 * @deprecated
 */
 "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
 "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>, arg1: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): void
 "getReferenceCoord"(): $Optional<($BlockPos)>
 "getBoundingBox"(): $CuboidBoundingBox
 "getWorld"(): $Level
/**
 * 
 * @deprecated
 */
 "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg3: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): T
/**
 * 
 * @deprecated
 */
 "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T): T
 "forReferenceCoordinates"(arg0: $Consumer$Type<($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
 "getMinimumCoord"(): $Optional<($BlockPos)>
 "isMachineActive"(): boolean
 "setMachineActive"(arg0: boolean): void
 "toggleMachineActive"(): void
}

export namespace $ITurbineMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITurbineMachine$Type = ($ITurbineMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITurbineMachine_ = $ITurbineMachine$Type;
}}
declare module "packages/it/zerono/mods/zerocore/base/multiblock/part/$AbstractMultiblockEntity" {
import {$AbstractCuboidMultiblockController, $AbstractCuboidMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$AbstractCuboidMultiblockController"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$AbstractCuboidMultiblockPart, $AbstractCuboidMultiblockPart$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$AbstractCuboidMultiblockPart"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $AbstractMultiblockEntity<Controller extends $AbstractCuboidMultiblockController<(Controller)>> extends $AbstractCuboidMultiblockPart<(Controller)> {
/**
 * 
 * @deprecated
 */
readonly "DataUpdate": $IEvent<($Runnable)>

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onPostMachineAssembled"(arg0: Controller): void
public "onPostMachineBroken"(): void
public "getModelData"(): $ModelData
public "markForRenderUpdate"(): void
public static "getDefaultBlockProperties"(): $BlockBehaviour$Properties
get "modelData"(): $ModelData
get "defaultBlockProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMultiblockEntity$Type<Controller> = ($AbstractMultiblockEntity<(Controller)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMultiblockEntity_<Controller> = $AbstractMultiblockEntity$Type<(Controller)>;
}}
declare module "packages/it/zerono/mods/extremereactors/api/reactor/$ReactantType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ReactantType extends $Enum<($ReactantType)> {
static readonly "Fuel": $ReactantType
static readonly "Waste": $ReactantType


public static "values"(): ($ReactantType)[]
public static "valueOf"(arg0: string): $ReactantType
public "getDefaultColour"(): integer
public "isWaste"(): boolean
public "isFuel"(): boolean
get "defaultColour"(): integer
get "waste"(): boolean
get "fuel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactantType$Type = (("waste") | ("fuel")) | ($ReactantType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactantType_ = $ReactantType$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$ITurbineWriter" {
import {$IActivableMachine, $IActivableMachine$Type} from "packages/it/zerono/mods/zerocore/lib/$IActivableMachine"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$VentSetting, $VentSetting$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$VentSetting"
import {$IFluidContainer, $IFluidContainer$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$IFluidContainer"
import {$ITurbineReader, $ITurbineReader$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$ITurbineReader"
import {$IMultiblockTurbineVariant, $IMultiblockTurbineVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/variant/$IMultiblockTurbineVariant"

export interface $ITurbineWriter extends $ITurbineReader, $IActivableMachine {

 "setInductorEngaged"(arg0: boolean): void
 "setVentSetting"(arg0: $VentSetting$Type): void
 "setMaxIntakeRate"(arg0: integer): void
 "setMaxIntakeRatePercentage"(arg0: integer): void
 "changeMaxIntakeRate"(arg0: integer): void
 "getCapacity"(): integer
 "getVariant"(): $IMultiblockTurbineVariant
 "getFluidConsumedLastTick"(): integer
 "isAssembledAndActive"(): boolean
 "getVentSetting"(): $VentSetting
 "getRotorMass"(): integer
 "getMaxIntakeRate"(): integer
 "getRotorSpeed"(): float
 "isInductorEngaged"(): boolean
 "getMaxRotorSpeed"(): float
 "getRotorBladesCount"(): integer
 "getRotorEfficiencyLastTick"(): float
 "getMaxIntakeRateHardLimit"(): integer
 "getEnergyGeneratedLastTick"(): double
 "getCoolantAmount"(): integer
 "getVaporAmount"(): integer
 "getEnergyStoredPercentage"(): double
 "getFluidContainer"(): $IFluidContainer
 "isMachineActive"(): boolean
 "setMachineActive"(arg0: boolean): void
 "toggleMachineActive"(): void
 "getWorld"(): $Level
}

export namespace $ITurbineWriter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITurbineWriter$Type = ($ITurbineWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITurbineWriter_ = $ITurbineWriter$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/network/$IModMessage" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $IModMessage {

 "processMessage"(arg0: $NetworkEvent$Context$Type): void
 "encodeTo"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IModMessage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModMessage$Type = ($IModMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModMessage_ = $IModMessage$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/$IMachineReader" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IMachineReader {

 "isMachineActive"(): boolean
 "getWorld"(): $Level
}

export namespace $IMachineReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineReader$Type = ($IMachineReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMachineReader_ = $IMachineReader$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/client/render/rotor/$RotorDescriptor" {
import {$RotorDescriptor$Builder, $RotorDescriptor$Builder$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/client/render/rotor/$RotorDescriptor$Builder"
import {$TurbineVariant, $TurbineVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/variant/$TurbineVariant"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"

export class $RotorDescriptor implements $NonNullConsumer<($PoseStack)> {


public "accept"(arg0: $PoseStack$Type): void
public static "builder"(arg0: $TurbineVariant$Type, arg1: $Direction$Type, arg2: integer): $RotorDescriptor$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotorDescriptor$Type = ($RotorDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotorDescriptor_ = $RotorDescriptor$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$OperationalMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $OperationalMode extends $Enum<($OperationalMode)> {
static readonly "Active": $OperationalMode
static readonly "Passive": $OperationalMode


public static "values"(): ($OperationalMode)[]
public static "valueOf"(arg0: string): $OperationalMode
public "isActive"(): boolean
public "isPassive"(): boolean
get "active"(): boolean
get "passive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationalMode$Type = (("active") | ("passive")) | ($OperationalMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperationalMode_ = $OperationalMode$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/api/reactor/radiation/$IRadiationModerator" {
import {$RadiationPacket, $RadiationPacket$Type} from "packages/it/zerono/mods/extremereactors/api/radiation/$RadiationPacket"
import {$IrradiationData, $IrradiationData$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/radiation/$IrradiationData"

export interface $IRadiationModerator {

 "moderateRadiation"(arg0: $IrradiationData$Type, arg1: $RadiationPacket$Type): void

(arg0: $IrradiationData$Type, arg1: $RadiationPacket$Type): void
}

export namespace $IRadiationModerator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRadiationModerator$Type = ($IRadiationModerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRadiationModerator_ = $IRadiationModerator$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/part/$PassiveFluidPortBlock" {
import {$IOPortBlock, $IOPortBlock$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/io/$IOPortBlock"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IMultiblockPartType, $IMultiblockPartType$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PassiveFluidPortBlock<Controller extends $IMultiblockController<(Controller)>, PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType)> extends $IOPortBlock<(Controller), (PartType)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PassiveFluidPortBlock$Type<Controller, PartType> = ($PassiveFluidPortBlock<(Controller), (PartType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PassiveFluidPortBlock_<Controller, PartType> = $PassiveFluidPortBlock$Type<(Controller), (PartType)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/$ModOreBlock" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ModBlock, $ModBlock$Type} from "packages/it/zerono/mods/zerocore/lib/block/$ModBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ModOreBlock extends $ModBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: integer, arg2: integer)

public "getExpDrop"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModOreBlock$Type = ($ModOreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModOreBlock_ = $ModOreBlock$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockVariantProvider" {
import {$IMultiblockVariant, $IMultiblockVariant$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockVariant"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IMultiblockVariantProvider<V extends $IMultiblockVariant> {

 "getMultiblockVariant"(): $Optional<(V)>
 "getBlockType"(): $Block

(): $Optional<(V)>
}

export namespace $IMultiblockVariantProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockVariantProvider$Type<V> = ($IMultiblockVariantProvider<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockVariantProvider_<V> = $IMultiblockVariantProvider$Type<(V)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/$WideAmount" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $WideAmount extends number implements $Comparable<($WideAmount)> {
static readonly "MAX_VALUE": $WideAmount
static readonly "ZERO": $WideAmount
static readonly "ONE": $WideAmount


public "add"(arg0: $WideAmount$Type): $WideAmount
public "add"(arg0: long): $WideAmount
public "add"(arg0: double): $WideAmount
public "equals"(arg0: $WideAmount$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(arg0: integer): string
public "toString"(): string
public "hashCode"(): integer
public static "min"(arg0: $WideAmount$Type, arg1: $WideAmount$Type): $WideAmount
public static "max"(arg0: $WideAmount$Type, arg1: $WideAmount$Type): $WideAmount
public "compareTo"(arg0: $WideAmount$Type): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "copy"(): $WideAmount
public "set"(arg0: $WideAmount$Type): $WideAmount
public "multiply"(arg0: $WideAmount$Type): $WideAmount
public "multiply"(arg0: long): $WideAmount
public "multiply"(arg0: double): $WideAmount
public static "parse"(arg0: string): $WideAmount
public "subtract"(arg0: double): $WideAmount
public "subtract"(arg0: $WideAmount$Type): $WideAmount
public "subtract"(arg0: long): $WideAmount
public "divide"(arg0: double): $WideAmount
public "divide"(arg0: $WideAmount$Type): $WideAmount
public "divide"(arg0: long): $WideAmount
public "isZero"(): boolean
public static "from"(arg0: $CompoundTag$Type): $WideAmount
public static "from"(arg0: $FriendlyByteBuf$Type): $WideAmount
public static "from"(arg0: $JsonObject$Type): $WideAmount
public static "from"(arg0: long, arg1: short): $WideAmount
public static "from"(arg0: long): $WideAmount
public static "from"(arg0: double): $WideAmount
public "greaterThan"(arg0: $WideAmount$Type): boolean
public "toImmutable"(): $WideAmount
public static "asImmutable"(arg0: long, arg1: short): $WideAmount
public static "asImmutable"(arg0: double): $WideAmount
public static "asImmutable"(arg0: long): $WideAmount
public static "clamp"(arg0: $WideAmount$Type, arg1: $WideAmount$Type, arg2: $WideAmount$Type): $WideAmount
public "percentage"(arg0: $WideAmount$Type): double
public "divideToSignedLong"(arg0: $WideAmount$Type): long
public "getDecimalPart"(): short
public "getIntegerPart"(): long
public "divideToUnsignedLong"(arg0: $WideAmount$Type): long
public "smallerOrEqual"(arg0: $WideAmount$Type): boolean
public "greaterOrEqual"(arg0: $WideAmount$Type): boolean
public "divideToInt"(arg0: $WideAmount$Type): integer
public "smallerThan"(arg0: $WideAmount$Type): boolean
public "serializeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "serializeTo"(arg0: $JsonObject$Type): $JsonObject
public "serializeTo"(arg0: $FriendlyByteBuf$Type): void
get "zero"(): boolean
get "decimalPart"(): short
get "integerPart"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideAmount$Type = ($WideAmount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WideAmount_ = $WideAmount$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/$ModBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ModBlock$ExtendedProperties, $ModBlock$ExtendedProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/$ModBlock$ExtendedProperties"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IBlockStateUpdater, $IBlockStateUpdater$Type} from "packages/it/zerono/mods/zerocore/lib/block/$IBlockStateUpdater"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"

export class $ModBlock extends $Block implements $IBlockStateUpdater {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

/**
 * 
 * @deprecated
 */
constructor(arg0: $BlockBehaviour$Properties$Type)
constructor(arg0: $ModBlock$ExtendedProperties$Type<(any)>)

public static "createProperties"(arg0: $MapColor$Type, arg1: $SoundType$Type, arg2: float): $BlockBehaviour$Properties
public static "createProperties"(arg0: $MapColor$Type, arg1: $SoundType$Type, arg2: float, arg3: float, arg4: boolean): $BlockBehaviour$Properties
public "updateBlockState"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockEntity$Type, arg4: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "createBlockItem"(arg0: $Item$Properties$Type): $BlockItem
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "callOnLogicalServer"(arg0: $Level$Type, arg1: $IntSupplier$Type, arg2: integer): integer
public "callOnLogicalServer"(arg0: $Level$Type, arg1: $LongSupplier$Type, arg2: long): long
public "callOnLogicalServer"(arg0: $Level$Type, arg1: $DoubleSupplier$Type, arg2: double): double
public "callOnLogicalServer"(arg0: $Level$Type, arg1: $Runnable$Type): void
public "callOnLogicalServer"(arg0: $Level$Type, arg1: $Consumer$Type<($Level$Type)>): void
public "callOnLogicalServer"<T>(arg0: $Level$Type, arg1: $Supplier$Type<(T)>, arg2: $Supplier$Type<(T)>): T
public "callOnLogicalServer"(arg0: $Level$Type, arg1: $BooleanSupplier$Type): boolean
public "callOnLogicalClient"(arg0: $Level$Type, arg1: $LongSupplier$Type, arg2: long): long
public "callOnLogicalClient"(arg0: $Level$Type, arg1: $IntSupplier$Type, arg2: integer): integer
public "callOnLogicalClient"(arg0: $Level$Type, arg1: $DoubleSupplier$Type, arg2: double): double
public "callOnLogicalClient"<T>(arg0: $Level$Type, arg1: $Supplier$Type<(T)>, arg2: $Supplier$Type<(T)>): T
public "callOnLogicalClient"(arg0: $Level$Type, arg1: $Consumer$Type<($Level$Type)>): void
public "callOnLogicalClient"(arg0: $Level$Type, arg1: $Runnable$Type): void
public "callOnLogicalClient"(arg0: $Level$Type, arg1: $BooleanSupplier$Type): boolean
public "callOnLogicalSide"<T>(arg0: $Level$Type, arg1: $Supplier$Type<(T)>, arg2: $Supplier$Type<(T)>): T
public "callOnLogicalSide"(arg0: $Level$Type, arg1: $BooleanSupplier$Type, arg2: $BooleanSupplier$Type): boolean
public "callOnLogicalSide"(arg0: $Level$Type, arg1: $Runnable$Type, arg2: $Runnable$Type): void
public "callOnLogicalSide"(arg0: $Level$Type, arg1: $DoubleSupplier$Type, arg2: $DoubleSupplier$Type): double
public "callOnLogicalSide"(arg0: $Level$Type, arg1: $LongSupplier$Type, arg2: $LongSupplier$Type): long
public "callOnLogicalSide"(arg0: $Level$Type, arg1: $IntSupplier$Type, arg2: $IntSupplier$Type): integer
public static "getNameForTranslation"(arg0: $Block$Type): $Component
public static "lightValueFrom"(arg0: float): integer
public "buildUpdatedState"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockEntity$Type): $BlockState
public "createItemStack"(arg0: integer): $ItemStack
public "createItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlock$Type = ($ModBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBlock_ = $ModBlock$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/$INeighborChangeListener$Notifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INeighborChangeListener$Notifier {

}

export namespace $INeighborChangeListener$Notifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INeighborChangeListener$Notifier$Type = ($INeighborChangeListener$Notifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INeighborChangeListener$Notifier_ = $INeighborChangeListener$Notifier$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockDimensionVariant" {
import {$IMultiblockVariant, $IMultiblockVariant$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockVariant"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export interface $IMultiblockDimensionVariant extends $IMultiblockVariant {

 "getMinimumPartsCount"(): integer
 "getMaximumYSize"(): integer
 "getMaximumXSize"(): integer
 "getMaximumZSize"(): integer
 "getName"(): string
 "getId"(): integer
 "getDefaultBlockProperties"(): $BlockBehaviour$Properties
 "getTranslationKey"(): string
 "getBlockProperties"(): $BlockBehaviour$Properties
}

export namespace $IMultiblockDimensionVariant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockDimensionVariant$Type = ($IMultiblockDimensionVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockDimensionVariant_ = $IMultiblockDimensionVariant$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/part/$TurbineRedstonePortBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INeighborChangeListener$Notifier, $INeighborChangeListener$Notifier$Type} from "packages/it/zerono/mods/zerocore/lib/block/$INeighborChangeListener$Notifier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$GenericDeviceBlock, $GenericDeviceBlock$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/$GenericDeviceBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TurbinePartType, $TurbinePartType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$TurbinePartType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockTurbine, $MultiblockTurbine$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$MultiblockTurbine"

export class $TurbineRedstonePortBlock extends $GenericDeviceBlock<($MultiblockTurbine), ($TurbinePartType)> implements $INeighborChangeListener$Notifier {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockPartBlock$MultiblockPartProperties$Type<($TurbinePartType$Type)>)

public "isSignalSource"(arg0: $BlockState$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurbineRedstonePortBlock$Type = ($TurbineRedstonePortBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurbineRedstonePortBlock_ = $TurbineRedstonePortBlock$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/ingredient/$IRecipeIngredient" {
import {$ISerializableRecipe, $ISerializableRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$ISerializableRecipe"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $IRecipeIngredient<T> extends $ISerializableRecipe, $Predicate<(T)> {

 "isEmpty"(): boolean
 "isCompatible"(arg0: T): boolean
 "isCompatible"(...arg0: (T)[]): boolean
 "asVanillaIngredients"(): $List<($Ingredient)>
 "getAmount"(arg0: T): long
 "testIgnoreAmount"(arg0: T): boolean
 "getMatchFrom"(arg0: T): T
 "getMatchingElements"(): $List<(T)>
 "serializeTo"(arg0: $FriendlyByteBuf$Type): void
 "serializeTo"(): $JsonElement
 "test"(arg0: T): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
 "negate"(): $Predicate<(T)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
}

export namespace $IRecipeIngredient {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
function isEqual<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeIngredient$Type<T> = ($IRecipeIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeIngredient_<T> = $IRecipeIngredient$Type<(T)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/part/$PowerTapBlock" {
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$INeighborChangeListener$Notifier, $INeighborChangeListener$Notifier$Type} from "packages/it/zerono/mods/zerocore/lib/block/$INeighborChangeListener$Notifier"
import {$IMultiblockPartType, $IMultiblockPartType$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$GenericDeviceBlock, $GenericDeviceBlock$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/$GenericDeviceBlock"

export class $PowerTapBlock<Controller extends $IMultiblockController<(Controller)>, PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType)> extends $GenericDeviceBlock<(Controller), (PartType)> implements $INeighborChangeListener$Notifier {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerTapBlock$Type<Controller, PartType> = ($PowerTapBlock<(Controller), (PartType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowerTapBlock_<Controller, PartType> = $PowerTapBlock$Type<(Controller), (PartType)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/rotor/$RotorBladeState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$RotorShaftState, $RotorShaftState$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/rotor/$RotorShaftState"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RotorBladeState extends $Enum<($RotorBladeState)> implements $StringRepresentable {
static readonly "HIDDEN": $RotorBladeState
static readonly "Y_X_POS": $RotorBladeState
static readonly "Y_X_NEG": $RotorBladeState
static readonly "Y_Z_POS": $RotorBladeState
static readonly "Y_Z_NEG": $RotorBladeState
static readonly "X_Y_POS": $RotorBladeState
static readonly "X_Y_NEG": $RotorBladeState
static readonly "X_Z_POS": $RotorBladeState
static readonly "X_Z_NEG": $RotorBladeState
static readonly "Z_Y_POS": $RotorBladeState
static readonly "Z_Y_NEG": $RotorBladeState
static readonly "Z_X_POS": $RotorBladeState
static readonly "Z_X_NEG": $RotorBladeState
static "VALUES": ($RotorBladeState)[]


public "toString"(): string
public static "values"(): ($RotorBladeState)[]
public static "valueOf"(arg0: string): $RotorBladeState
public static "getDefault"(): $RotorBladeState
public static "from"(arg0: $RotorShaftState$Type, arg1: $Direction$Type): $RotorBladeState
public static "from"(arg0: string): $RotorBladeState
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "default"(): $RotorBladeState
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotorBladeState$Type = (("z_y_pos") | ("hidden") | ("x_z_pos") | ("x_z_neg") | ("z_y_neg") | ("y_x_pos") | ("z_x_pos") | ("y_x_neg") | ("y_z_neg") | ("z_x_neg") | ("x_y_pos") | ("y_z_pos") | ("x_y_neg")) | ($RotorBladeState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotorBladeState_ = $RotorBladeState$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/client/render/rotor/$ShaftSection" {
import {$ShaftSection$Builder, $ShaftSection$Builder$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/client/render/rotor/$ShaftSection$Builder"
import {$RotorShaftState, $RotorShaftState$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/rotor/$RotorShaftState"

export class $ShaftSection {


public static "builder"(arg0: $RotorShaftState$Type): $ShaftSection$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaftSection$Type = ($ShaftSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaftSection_ = $ShaftSection$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/gfx/$Colour" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"

export class $Colour {
static readonly "WHITE": $Colour
static readonly "BLACK": $Colour
readonly "R": byte
readonly "G": byte
readonly "B": byte
readonly "A": byte

constructor(arg0: $Colour$Type)
constructor(arg0: $DyeColor$Type, arg1: integer)
constructor(arg0: $DyeColor$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor(arg0: double, arg1: double, arg2: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $DyeColor$Type, arg1: integer): $Colour
public static "from"(arg0: $DyeColor$Type): $Colour
public static "from"(arg0: $Colour$Type): $Colour
public static "toFloat"(arg0: byte): float
public static "RGBA"(arg0: double, arg1: double, arg2: double, arg3: double): integer
public static "RGBA"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public static "RGBA"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): integer
public static "RGB"(arg0: byte, arg1: byte, arg2: byte): integer
public static "RGB"(arg0: double, arg1: double, arg2: double): integer
public static "RGB"(arg0: integer, arg1: integer, arg2: integer): integer
public "glRed"(): float
public "toRGB"(): integer
public "toHexARGB"(): string
public static "fromHexARGB"(arg0: string): $Colour
public "toHexRGBA"(): string
public "glBlue"(): float
public static "ARGB"(arg0: double, arg1: double, arg2: double, arg3: double): integer
public static "ARGB"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): integer
public static "ARGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public static "fromHexRGBA"(arg0: string): $Colour
public "glAlpha"(): float
public "toRGBA"(): integer
public "toHexRGB"(): string
public static "fromHexRGB"(arg0: string): $Colour
public "toARGB"(): integer
public "glGreen"(): float
public static "rgbBlue"(arg0: integer): integer
public static "fromRGB"(arg0: integer): $Colour
public static "fromRGBA"(arg0: integer): $Colour
public static "rgbRed"(arg0: integer): integer
public static "rgbGreen"(arg0: integer): integer
public static "fromARGB"(arg0: integer): $Colour
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Colour$Type = ($Colour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Colour_ = $Colour$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/fluid/$ReactorFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Reactants, $Reactants$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$Reactants"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $ReactorFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>


public static "of"(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $Rarity$Type): $ReactorFluidType
public static "of"(arg0: $Reactants$Type): $ReactorFluidType
public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorFluidType$Type = ($ReactorFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorFluidType_ = $ReactorFluidType$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockVariant" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export interface $IMultiblockVariant {

 "getName"(): string
 "getId"(): integer
 "getDefaultBlockProperties"(): $BlockBehaviour$Properties
 "getTranslationKey"(): string
 "getBlockProperties"(): $BlockBehaviour$Properties
}

export namespace $IMultiblockVariant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockVariant$Type = ($IMultiblockVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockVariant_ = $IMultiblockVariant$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/$ModRecipe" {
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
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$EmptyVanillaInventory, $EmptyVanillaInventory$Type} from "packages/it/zerono/mods/zerocore/lib/item/inventory/$EmptyVanillaInventory"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ModRecipe implements $Recipe<($EmptyVanillaInventory)> {


public "matches"(arg0: $EmptyVanillaInventory$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "assemble"(arg0: $EmptyVanillaInventory$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getRemainingItems"(arg0: $EmptyVanillaInventory$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
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
get "special"(): boolean
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
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
export type $ModRecipe$Type = ($ModRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModRecipe_ = $ModRecipe$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$ReactorFuelRodEntity" {
import {$RadiationPacket, $RadiationPacket$Type} from "packages/it/zerono/mods/extremereactors/api/radiation/$RadiationPacket"
import {$AbstractReactorEntity, $AbstractReactorEntity$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$AbstractReactorEntity"
import {$IHeatEntity, $IHeatEntity$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$IHeatEntity"
import {$PartPosition, $PartPosition$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$PartPosition"
import {$IMultiblockValidator, $IMultiblockValidator$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$IMultiblockValidator"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ReactorControlRodEntity, $ReactorControlRodEntity$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$ReactorControlRodEntity"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$FuelRodsLayout, $FuelRodsLayout$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$FuelRodsLayout"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IIrradiationSource, $IIrradiationSource$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IIrradiationSource"
import {$IRadiationModerator, $IRadiationModerator$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/radiation/$IRadiationModerator"
import {$IrradiationData, $IrradiationData$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/radiation/$IrradiationData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReactorFuelRodEntity extends $AbstractReactorEntity implements $IRadiationModerator, $IHeatEntity, $IIrradiationSource {
static readonly "FUEL_CAPACITY_PER_FUEL_ROD": integer
/**
 * 
 * @deprecated
 */
readonly "DataUpdate": $IEvent<($Runnable)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "isOccluded"(): boolean
public "getThermalConductivity"(): double
public "isGoodForPosition"(arg0: $PartPosition$Type, arg1: $IMultiblockValidator$Type): boolean
public "moderateRadiation"(arg0: $IrradiationData$Type, arg1: $RadiationPacket$Type): void
public "isLinked"(): boolean
public "getFuelRodsLayout"(): $FuelRodsLayout
public "getFuelRodIndex"(): integer
public "setOccluded"(arg0: boolean): void
public "linkToControlRod"(arg0: $ReactorControlRodEntity$Type, arg1: integer): void
public "getFuelRodsLayoutForRendering"(): $FuelRodsLayout
public "getHeatTransferRate"(): double
public "getIrradiationDirections"(): ($Direction)[]
public "getControlRodInsertionRatio"(): byte
public "getHeat"(): double
public "getWorldPosition"(): $BlockPos
public "getBlockType"(): $Block
public static "getDefaultBlockProperties"(): $BlockBehaviour$Properties
get "occluded"(): boolean
get "thermalConductivity"(): double
get "linked"(): boolean
get "fuelRodsLayout"(): $FuelRodsLayout
get "fuelRodIndex"(): integer
set "occluded"(value: boolean)
get "fuelRodsLayoutForRendering"(): $FuelRodsLayout
get "heatTransferRate"(): double
get "irradiationDirections"(): ($Direction)[]
get "controlRodInsertionRatio"(): byte
get "heat"(): double
get "worldPosition"(): $BlockPos
get "blockType"(): $Block
get "defaultBlockProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorFuelRodEntity$Type = ($ReactorFuelRodEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorFuelRodEntity_ = $ReactorFuelRodEntity$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$Reactants" {
import {$ReactantType, $ReactantType$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$ReactantType"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Reactants extends $Enum<($Reactants)> implements $NonNullConsumer<($LivingEntity)> {
static readonly "Yellorium": $Reactants
static readonly "Cyanite": $Reactants
static readonly "Blutonium": $Reactants
static readonly "Magentite": $Reactants
static readonly "Verderium": $Reactants
static readonly "Rossinite": $Reactants


public static "values"(): ($Reactants)[]
public static "valueOf"(arg0: string): $Reactants
public "accept"(arg0: $LivingEntity$Type): void
public "getType"(): $ReactantType
public "getRarity"(): $Rarity
public "getFluidName"(): string
public "getTagName"(): string
public "getFluidLightLevel"(): integer
public "getFluidFlowingName"(): string
public "getColour"(): integer
public "getBlockName"(): string
public "getFluidSourceName"(): string
public "getDustName"(): string
public "getBucketName"(): string
public "getLangKey"(): string
public "getNuggetName"(): string
public "getIngotName"(): string
public "getReactantName"(): string
public "getFluidDensity"(): integer
get "type"(): $ReactantType
get "rarity"(): $Rarity
get "fluidName"(): string
get "tagName"(): string
get "fluidLightLevel"(): integer
get "fluidFlowingName"(): string
get "colour"(): integer
get "blockName"(): string
get "fluidSourceName"(): string
get "dustName"(): string
get "bucketName"(): string
get "langKey"(): string
get "nuggetName"(): string
get "ingotName"(): string
get "reactantName"(): string
get "fluidDensity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reactants$Type = (("verderium") | ("blutonium") | ("magentite") | ("rossinite") | ("cyanite") | ("yellorium")) | ($Reactants);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reactants_ = $Reactants$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/api/reactor/$FuelProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FuelProperties {
static readonly "DEFAULT": $FuelProperties
static readonly "INVALID": $FuelProperties


public "setHardnessDivisor"(arg0: float): void
public "setFuelUnitsPerFissionEvent"(arg0: float): void
public "getFuelUnitsPerFissionEvent"(): float
public "setFissionEventsPerFuelUnit"(arg0: float): void
public "setAbsorptionCoefficient"(arg0: float): void
public "getFissionEventsPerFuelUnit"(): float
public "setModerationFactor"(arg0: float): void
public "getHardnessDivisor"(): float
public "getAbsorptionCoefficient"(): float
public "getModerationFactor"(): float
set "hardnessDivisor"(value: float)
set "fuelUnitsPerFissionEvent"(value: float)
get "fuelUnitsPerFissionEvent"(): float
set "fissionEventsPerFuelUnit"(value: float)
set "absorptionCoefficient"(value: float)
get "fissionEventsPerFuelUnit"(): float
set "moderationFactor"(value: float)
get "hardnessDivisor"(): float
get "absorptionCoefficient"(): float
get "moderationFactor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelProperties$Type = ($FuelProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelProperties_ = $FuelProperties$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/api/internal/$AbstractNamedValue" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $AbstractNamedValue {


public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getTranslationKey"(): string
public "getTranslatedName"(): $Component
get "name"(): string
get "translationKey"(): string
get "translatedName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNamedValue$Type = ($AbstractNamedValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNamedValue_ = $AbstractNamedValue$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/$AbstractOneToOneRecipe$IRecipeFactory" {
import {$AbstractOneToOneRecipe, $AbstractOneToOneRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$AbstractOneToOneRecipe"
import {$IRecipeResult, $IRecipeResult$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/result/$IRecipeResult"
import {$IRecipeIngredient, $IRecipeIngredient$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/ingredient/$IRecipeIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $AbstractOneToOneRecipe$IRecipeFactory<Ingredient, Result, RecipeIngredient extends $IRecipeIngredient<(Ingredient)>, RecipeResult extends $IRecipeResult<(Result)>, Recipe extends $AbstractOneToOneRecipe<(Ingredient), (Result), (RecipeIngredient), (RecipeResult)>> {

 "create"(arg0: $ResourceLocation$Type, arg1: RecipeIngredient, arg2: RecipeResult): Recipe

(arg0: $ResourceLocation$Type, arg1: RecipeIngredient, arg2: RecipeResult): Recipe
}

export namespace $AbstractOneToOneRecipe$IRecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractOneToOneRecipe$IRecipeFactory$Type<Ingredient, Result, RecipeIngredient, RecipeResult, Recipe> = ($AbstractOneToOneRecipe$IRecipeFactory<(Ingredient), (Result), (RecipeIngredient), (RecipeResult), (Recipe)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractOneToOneRecipe$IRecipeFactory_<Ingredient, Result, RecipeIngredient, RecipeResult, Recipe> = $AbstractOneToOneRecipe$IRecipeFactory$Type<(Ingredient), (Result), (RecipeIngredient), (RecipeResult), (Recipe)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/part/$TurbineRotorBearingEntity" {
import {$PartPosition, $PartPosition$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$PartPosition"
import {$IMultiblockValidator, $IMultiblockValidator$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$IMultiblockValidator"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$RotorDescriptor, $RotorDescriptor$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/client/render/rotor/$RotorDescriptor"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$AbstractTurbineEntity, $AbstractTurbineEntity$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/part/$AbstractTurbineEntity"
import {$MultiblockTurbine, $MultiblockTurbine$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$MultiblockTurbine"

export class $TurbineRotorBearingEntity extends $AbstractTurbineEntity {
/**
 * 
 * @deprecated
 */
readonly "DataUpdate": $IEvent<($Runnable)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onPostMachineAssembled"(arg0: $MultiblockTurbine$Type): void
public "onPostMachineBroken"(): void
public "getRenderBoundingBox"(): $AABB
public "isGoodForPosition"(arg0: $PartPosition$Type, arg1: $IMultiblockValidator$Type): boolean
public "getRotorDirection"(): $Direction
public "setRotorAngle"(arg0: float): void
public "getRotorAngle"(): float
public "getRotorDescriptor"(): $RotorDescriptor
public "isTurbineInteriorInvisible"(): boolean
public "getBlockType"(): $Block
public static "getDefaultBlockProperties"(): $BlockBehaviour$Properties
get "renderBoundingBox"(): $AABB
get "rotorDirection"(): $Direction
set "rotorAngle"(value: float)
get "rotorAngle"(): float
get "rotorDescriptor"(): $RotorDescriptor
get "turbineInteriorInvisible"(): boolean
get "blockType"(): $Block
get "defaultBlockProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurbineRotorBearingEntity$Type = ($TurbineRotorBearingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurbineRotorBearingEntity_ = $TurbineRotorBearingEntity$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/client/render/rotor/$RotorDescriptor$Builder" {
import {$ShaftSection$Builder, $ShaftSection$Builder$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/client/render/rotor/$ShaftSection$Builder"
import {$RotorShaftState, $RotorShaftState$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/rotor/$RotorShaftState"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"
import {$RotorDescriptor, $RotorDescriptor$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/client/render/rotor/$RotorDescriptor"

export class $RotorDescriptor$Builder {


public "build"(): $RotorDescriptor
public "section"(arg0: $RotorShaftState$Type, arg1: $NonNullConsumer$Type<($ShaftSection$Builder$Type)>): $RotorDescriptor$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotorDescriptor$Builder$Type = ($RotorDescriptor$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotorDescriptor$Builder_ = $RotorDescriptor$Builder$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/item/inventory/$ItemStackHolder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$IDebuggable, $IDebuggable$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebuggable"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$AbstractStackHolder, $AbstractStackHolder$Type} from "packages/it/zerono/mods/zerocore/lib/data/stack/$AbstractStackHolder"
import {$IStackHolderAccess, $IStackHolderAccess$Type} from "packages/it/zerono/mods/zerocore/lib/data/stack/$IStackHolderAccess"
import {$ISyncableEntity, $ISyncableEntity$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IDebugMessages, $IDebugMessages$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebugMessages"

export class $ItemStackHolder extends $AbstractStackHolder<($ItemStackHolder), ($ItemStack)> implements $IStackHolderAccess<($ItemStackHolder), ($ItemStack)>, $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<($CompoundTag)>, $ISyncableEntity, $IDebuggable {

constructor(arg0: $NonNullList$Type<($ItemStack$Type)>, arg1: $BiPredicate$Type<(integer), ($ItemStack$Type)>)
constructor(arg0: $NonNullList$Type<($ItemStack$Type)>)
constructor(arg0: integer, arg1: $BiPredicate$Type<(integer), ($ItemStack$Type)>)
constructor(arg0: integer)

public "isEmpty"(arg0: integer): boolean
public "setSize"(arg0: integer): void
public "getSlots"(): integer
public "getSlotLimit"(arg0: integer): integer
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "setStackAt"(arg0: integer, arg1: $ItemStack$Type): void
public "getAmount"(arg0: integer): integer
public "getStackAt"(arg0: integer): $ItemStack
public "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
public "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
public "getDebugMessages"(arg0: $LogicalSide$Type, arg1: $IDebugMessages$Type): void
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
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $NonNullConsumer$Type<($CompoundTag$Type)>): void
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
public "syncChildDataEntityFrom"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): boolean
public "syncBooleanElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: boolean): void
public "syncChildDataEntityTo"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): void
public "syncBooleanElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $BooleanConsumer$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $CompoundTag$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
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
set "size"(value: integer)
get "slots"(): integer
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
export type $ItemStackHolder$Type = ($ItemStackHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackHolder_ = $ItemStackHolder$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/it/zerono/mods/zerocore/lib/item/inventory/$ItemStackHolder"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"

export interface $ISyncableEntity {

 "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
 "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
 "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
 "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $NonNullConsumer$Type<($CompoundTag$Type)>): void
 "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
 "syncChildDataEntityFrom"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): boolean
 "syncBooleanElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: boolean): void
 "syncChildDataEntityTo"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): void
 "syncBooleanElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $BooleanConsumer$Type): void
 "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $CompoundTag$Type): void
 "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
 "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
}

export namespace $ISyncableEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncableEntity$Type = ($ISyncableEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncableEntity_ = $ISyncableEntity$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/$AbstractTwoToOneRecipe" {
import {$IRecipeResult, $IRecipeResult$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/result/$IRecipeResult"
import {$ISerializableRecipe, $ISerializableRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$ISerializableRecipe"
import {$ModRecipe, $ModRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$ModRecipe"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IRecipeIngredient, $IRecipeIngredient$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/ingredient/$IRecipeIngredient"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $AbstractTwoToOneRecipe<Ingredient1, Ingredient2, Result, RecipeIngredient1 extends $IRecipeIngredient<(Ingredient1)>, RecipeIngredient2 extends $IRecipeIngredient<(Ingredient2)>, RecipeResult extends $IRecipeResult<(Result)>> extends $ModRecipe implements $BiPredicate<(Ingredient1), (Ingredient2)>, $ISerializableRecipe {


public "test"(arg0: Ingredient1, arg1: Ingredient2): boolean
public "getResult"(): RecipeResult
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getIngredient2"(): RecipeIngredient2
public "serializeTo"(arg0: $FriendlyByteBuf$Type): void
public "serializeTo"(): $JsonElement
public "getIngredient1"(): RecipeIngredient1
public "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<(Ingredient1), (Ingredient2)>
public "negate"(): $BiPredicate<(Ingredient1), (Ingredient2)>
public "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<(Ingredient1), (Ingredient2)>
get "result"(): RecipeResult
get "ingredients"(): $NonNullList<($Ingredient)>
get "ingredient2"(): RecipeIngredient2
get "ingredient1"(): RecipeIngredient1
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTwoToOneRecipe$Type<Ingredient1, Ingredient2, Result, RecipeIngredient1, RecipeIngredient2, RecipeResult> = ($AbstractTwoToOneRecipe<(Ingredient1), (Ingredient2), (Result), (RecipeIngredient1), (RecipeIngredient2), (RecipeResult)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTwoToOneRecipe_<Ingredient1, Ingredient2, Result, RecipeIngredient1, RecipeIngredient2, RecipeResult> = $AbstractTwoToOneRecipe$Type<(Ingredient1), (Ingredient2), (Result), (RecipeIngredient1), (RecipeIngredient2), (RecipeResult)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$AbstractCuboidMultiblockPart" {
import {$AbstractCuboidMultiblockController, $AbstractCuboidMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$AbstractCuboidMultiblockController"
import {$PartPosition, $PartPosition$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$PartPosition"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IMultiblockValidator, $IMultiblockValidator$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$IMultiblockValidator"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$AbstractMultiblockPart, $AbstractMultiblockPart$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$AbstractMultiblockPart"
import {$BlockFacings, $BlockFacings$Type} from "packages/it/zerono/mods/zerocore/lib/block/$BlockFacings"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractCuboidMultiblockPart<Controller extends $AbstractCuboidMultiblockController<(Controller)>> extends $AbstractMultiblockPart<(Controller)> {
/**
 * 
 * @deprecated
 */
readonly "DataUpdate": $IEvent<($Runnable)>

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onPostMachineAssembled"(arg0: Controller): void
public "onPreMachineAssembled"(arg0: Controller): void
public "onPostMachineBroken"(): void
public "getOutwardFacingFromWorldPosition"(arg0: $Direction$Type): $Direction
public "getOutwardFacingFromWorldPosition"(): $Optional<($Direction)>
public "notifyOutwardNeighborsOfStateChange"(): void
public "isGoodForPosition"(arg0: $PartPosition$Type, arg1: $IMultiblockValidator$Type): boolean
public "getOutwardFacings"(): $BlockFacings
public "getPartPosition"(): $PartPosition
public "onPreMachineBroken"(): void
public "getOutwardDirection"(): $Optional<($Direction)>
public static "getDefaultBlockProperties"(): $BlockBehaviour$Properties
get "outwardFacingFromWorldPosition"(): $Optional<($Direction)>
get "outwardFacings"(): $BlockFacings
get "partPosition"(): $PartPosition
get "outwardDirection"(): $Optional<($Direction)>
get "defaultBlockProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCuboidMultiblockPart$Type<Controller> = ($AbstractCuboidMultiblockPart<(Controller)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCuboidMultiblockPart_<Controller> = $AbstractCuboidMultiblockPart$Type<(Controller)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/stack/$IStackHolder$ChangeType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IStackHolder$ChangeType extends $Enum<($IStackHolder$ChangeType)> {
static readonly "Added": $IStackHolder$ChangeType
static readonly "Grown": $IStackHolder$ChangeType
static readonly "Replaced": $IStackHolder$ChangeType
static readonly "Removed": $IStackHolder$ChangeType
static readonly "Shrunk": $IStackHolder$ChangeType


public static "values"(): ($IStackHolder$ChangeType)[]
public static "valueOf"(arg0: string): $IStackHolder$ChangeType
public "fullChange"(): boolean
public "amountChange"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackHolder$ChangeType$Type = (("removed") | ("added") | ("replaced") | ("shrunk") | ("grown")) | ($IStackHolder$ChangeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackHolder$ChangeType_ = $IStackHolder$ChangeType$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/$AbstractMultiblockController" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$CuboidBoundingBox, $CuboidBoundingBox$Type} from "packages/it/zerono/mods/zerocore/lib/data/geometry/$CuboidBoundingBox"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$IMultiblockValidator, $IMultiblockValidator$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$IMultiblockValidator"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$INetworkTileEntitySyncProvider, $INetworkTileEntitySyncProvider$Type} from "packages/it/zerono/mods/zerocore/lib/network/$INetworkTileEntitySyncProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$NeighboringPositions, $NeighboringPositions$Type} from "packages/it/zerono/mods/zerocore/lib/world/$NeighboringPositions"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$IPartStorage, $IPartStorage$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/storage/$IPartStorage"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$INestedSyncableEntity, $INestedSyncableEntity$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$INestedSyncableEntity"
import {$IMultiblockPart, $IMultiblockPart$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockPart"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ValidationError, $ValidationError$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$ValidationError"
import {$ISyncableEntity, $ISyncableEntity$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/it/zerono/mods/zerocore/lib/item/inventory/$ItemStackHolder"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"

export class $AbstractMultiblockController<Controller extends $AbstractMultiblockController<(Controller)>> implements $IMultiblockController<(Controller)>, $IMultiblockValidator, $INestedSyncableEntity, $INetworkTileEntitySyncProvider {
readonly "DataUpdated": $IEvent<($Runnable)>


public "toString"(): string
public "compareTo"(arg0: Controller): integer
public "isEmpty"(): boolean
public "getLastError"(): $Optional<($ValidationError)>
/**
 * 
 * @deprecated
 */
public "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
public "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>, arg1: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): void
public "unlistenForDataUpdate"(arg0: $Runnable$Type): void
public "syncFromSaveDelegate"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
public "listenForDataUpdate"(arg0: $Runnable$Type): $Runnable
public "shouldConsumeController"(arg0: Controller): boolean
public "setLastError"(arg0: $BlockPos$Type, arg1: string, ...arg2: (any)[]): void
public "setLastError"(arg0: $ValidationError$Type): void
public "setLastError"(arg0: string, ...arg1: (any)[]): void
public "isDisassembled"(): boolean
public "isPaused"(): boolean
public "attachPart"(arg0: $IMultiblockPart$Type<(Controller)>): void
public "getPartsCount"(): integer
public "detachPart"(arg0: $IMultiblockPart$Type<(Controller)>, arg1: boolean): void
public "getReferenceCoord"(): $Optional<($BlockPos)>
public "getBoundingBox"(): $CuboidBoundingBox
public "sendUpdates"(): void
public "hasLastError"(): boolean
public "getWorld"(): $Level
public "calledByLogicalServer"(): boolean
public "callOnLogicalServer"(arg0: $LongSupplier$Type, arg1: long): long
public "callOnLogicalServer"(arg0: $DoubleSupplier$Type, arg1: double): double
public "callOnLogicalServer"(arg0: $Runnable$Type): void
public "callOnLogicalServer"(arg0: $IntSupplier$Type, arg1: integer): integer
public "callOnLogicalServer"<T>(arg0: $Supplier$Type<(T)>, arg1: $Supplier$Type<(T)>): T
public "callOnLogicalServer"(arg0: $BooleanSupplier$Type): boolean
public "callOnLogicalClient"<T>(arg0: $Supplier$Type<(T)>, arg1: $Supplier$Type<(T)>): T
public "callOnLogicalClient"(arg0: $IntSupplier$Type, arg1: integer): integer
public "callOnLogicalClient"(arg0: $BooleanSupplier$Type): boolean
public "callOnLogicalClient"(arg0: $LongSupplier$Type, arg1: long): long
public "callOnLogicalClient"(arg0: $DoubleSupplier$Type, arg1: double): double
public "callOnLogicalClient"(arg0: $Runnable$Type): void
public "calledByLogicalClient"(): boolean
public "checkIfMachineIsWhole"(): void
public "updateMultiblockEntity"(): void
/**
 * 
 * @deprecated
 */
public "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg3: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): T
/**
 * 
 * @deprecated
 */
public "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T): T
public "assimilateController"(arg0: Controller): void
public "forceStructureUpdate"(arg0: $Level$Type): void
public "checkForDisconnections"(): $IPartStorage<(Controller)>
public "getNestedSyncableEntity"(): $Optional<($ISyncableEntity)>
public "callOnLogicalSide"(arg0: $LongSupplier$Type, arg1: $LongSupplier$Type): long
public "callOnLogicalSide"(arg0: $DoubleSupplier$Type, arg1: $DoubleSupplier$Type): double
public "callOnLogicalSide"(arg0: $Runnable$Type, arg1: $Runnable$Type): void
public "callOnLogicalSide"(arg0: $BooleanSupplier$Type, arg1: $BooleanSupplier$Type): boolean
public "callOnLogicalSide"<T>(arg0: $Supplier$Type<(T)>, arg1: $Supplier$Type<(T)>): T
public "callOnLogicalSide"(arg0: $IntSupplier$Type, arg1: $IntSupplier$Type): integer
public "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
public "isAssembled"(): boolean
public "containsPart"(arg0: $IMultiblockPart$Type<(Controller)>): boolean
public "containsPartsAt"(arg0: $NeighboringPositions$Type): boolean
public "containsPartsAt"(arg0: ($BlockPos$Type)[]): boolean
public "isLastErrorEmpty"(): boolean
public "detachAll"(): $IPartStorage<(Controller)>
public "recalculateCoords"(): void
/**
 * 
 * @deprecated
 */
public "getMinimumCoord"(): $Optional<($BlockPos)>
public "enlistForUpdates"(arg0: $ServerPlayer$Type, arg1: boolean): void
public "delistFromUpdates"(arg0: $ServerPlayer$Type): void
public "isControllerCompatible"(arg0: Controller): boolean
public "isPartCompatible"(arg0: $IMultiblockPart$Type<(Controller)>): boolean
public "isSameController"(arg0: Controller): boolean
/**
 * 
 * @deprecated
 */
public "detachAllParts"(): $Set<($IMultiblockPart<(Controller)>)>
public "forReferenceCoordinates"(arg0: $Consumer$Type<($BlockPos$Type)>): void
public "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $NonNullConsumer$Type<($CompoundTag$Type)>): void
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
public "syncChildDataEntityFrom"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): boolean
public "syncBooleanElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: boolean): void
public "syncChildDataEntityTo"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): void
public "syncBooleanElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $BooleanConsumer$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $CompoundTag$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
get "empty"(): boolean
get "lastError"(): $Optional<($ValidationError)>
set "lastError"(value: $ValidationError$Type)
get "disassembled"(): boolean
get "paused"(): boolean
get "partsCount"(): integer
get "referenceCoord"(): $Optional<($BlockPos)>
get "boundingBox"(): $CuboidBoundingBox
get "world"(): $Level
get "nestedSyncableEntity"(): $Optional<($ISyncableEntity)>
get "assembled"(): boolean
get "lastErrorEmpty"(): boolean
get "minimumCoord"(): $Optional<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMultiblockController$Type<Controller> = ($AbstractMultiblockController<(Controller)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMultiblockController_<Controller> = $AbstractMultiblockController$Type<(Controller)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/network/$UpdateClientsFuelRodsLayout" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractReactorEntity, $AbstractReactorEntity$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$AbstractReactorEntity"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ISyncableEntity, $ISyncableEntity$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity"
import {$AbstractModTileMessage, $AbstractModTileMessage$Type} from "packages/it/zerono/mods/zerocore/lib/network/$AbstractModTileMessage"

export class $UpdateClientsFuelRodsLayout extends $AbstractModTileMessage {

constructor(arg0: $AbstractReactorEntity$Type, arg1: $ISyncableEntity$Type)
constructor(arg0: $FriendlyByteBuf$Type)

public "encodeTo"(arg0: $FriendlyByteBuf$Type): void
public "getFuelContainerData"(): $CompoundTag
get "fuelContainerData"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateClientsFuelRodsLayout$Type = ($UpdateClientsFuelRodsLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateClientsFuelRodsLayout_ = $UpdateClientsFuelRodsLayout$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/storage/$IPartStorage" {
import {$CuboidBoundingBox, $CuboidBoundingBox$Type} from "packages/it/zerono/mods/zerocore/lib/data/geometry/$CuboidBoundingBox"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IMultiblockPart, $IMultiblockPart$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockPart"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$NeighboringPositions, $NeighboringPositions$Type} from "packages/it/zerono/mods/zerocore/lib/world/$NeighboringPositions"

export interface $IPartStorage<Controller extends $IMultiblockController<(Controller)>> extends $Iterable<($IMultiblockPart<(Controller)>)> {

 "remove"(arg0: $IMultiblockPart$Type<(Controller)>): void
 "get"(arg0: $BlockPos$Type): $IMultiblockPart<(Controller)>
 "get"(arg0: long): $IMultiblockPart<(Controller)>
 "get"(arg0: $NeighboringPositions$Type, arg1: $List$Type<($IMultiblockPart$Type<(Controller)>)>): void
 "clear"(): void
 "isEmpty"(): boolean
 "contains"(arg0: $IMultiblockPart$Type<(Controller)>): boolean
 "contains"(arg0: (long)[]): boolean
 "contains"(arg0: $NeighboringPositions$Type): boolean
 "contains"(arg0: ($BlockPos$Type)[]): boolean
 "size"(): integer
 "stream"(): $Stream<($IMultiblockPart<(Controller)>)>
 "addAll"(arg0: $IPartStorage$Type<(Controller)>): void
 "forEach"(arg0: $Consumer$Type<($IMultiblockPart$Type<(Controller)>)>, arg1: $Predicate$Type<($IMultiblockPart$Type<(Controller)>)>): void
 "removeAll"(arg0: $Collection$Type<($IMultiblockPart$Type<(Controller)>)>): void
 "parallelStream"(): $Stream<($IMultiblockPart<(Controller)>)>
 "getFirst"(): $IMultiblockPart<(Controller)>
 "boundingBox"(): $CuboidBoundingBox
 "unmodifiable"(): $Collection<($IMultiblockPart<(Controller)>)>
 "forEachNotVisitedPart"(arg0: $Consumer$Type<($IMultiblockPart$Type<(Controller)>)>): void
 "addOrReplace"(arg0: $IMultiblockPart$Type<(Controller)>): void
 "forEachValidPart"(arg0: $Consumer$Type<($IMultiblockPart$Type<(Controller)>)>): void
 "iterator"(): $Iterator<($IMultiblockPart<(Controller)>)>
 "spliterator"(): $Spliterator<($IMultiblockPart<(Controller)>)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IPartStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartStorage$Type<Controller> = ($IPartStorage<(Controller)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartStorage_<Controller> = $IPartStorage$Type<(Controller)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$ReactorControlRodEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractReactorEntity, $AbstractReactorEntity$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$AbstractReactorEntity"
import {$PartPosition, $PartPosition$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$PartPosition"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IMultiblockValidator, $IMultiblockValidator$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/validation/$IMultiblockValidator"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$FuelRodsLayout, $FuelRodsLayout$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$FuelRodsLayout"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $ReactorControlRodEntity extends $AbstractReactorEntity implements $MenuProvider {
static "COMMAND_SET_NAME": string
static "COMMAND_SET_INSERTION": string
/**
 * 
 * @deprecated
 */
readonly "DataUpdate": $IEvent<($Runnable)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getName"(): string
public static "setName"(arg0: $ReactorControlRodEntity$Type, arg1: string): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "isGoodForPosition"(arg0: $PartPosition$Type, arg1: $IMultiblockValidator$Type): boolean
public "canOpenGui"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "getDisplayName"(): $Component
public "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
public "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
public "getFuelRodsLayout"(): $FuelRodsLayout
public static "setInsertionRatio"(arg0: $ReactorControlRodEntity$Type, arg1: integer): void
public static "setInsertionRatio"(arg0: $Collection$Type<($ReactorControlRodEntity$Type)>, arg1: integer): void
public "linkToFuelRods"(arg0: integer): void
public "getInsertionRatio"(): byte
public static "changeInsertionRatio"(arg0: $Collection$Type<($ReactorControlRodEntity$Type)>, arg1: integer): void
public static "changeInsertionRatio"(arg0: $ReactorControlRodEntity$Type, arg1: integer): void
public "getInsertionPercentage"(): float
public "getBlockType"(): $Block
public static "getDefaultBlockProperties"(): $BlockBehaviour$Properties
get "name"(): string
get "displayName"(): $Component
get "fuelRodsLayout"(): $FuelRodsLayout
get "insertionRatio"(): byte
get "insertionPercentage"(): float
get "blockType"(): $Block
get "defaultBlockProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorControlRodEntity$Type = ($ReactorControlRodEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorControlRodEntity_ = $ReactorControlRodEntity$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/result/$IRecipeResult" {
import {$ISerializableRecipe, $ISerializableRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$ISerializableRecipe"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IRecipeResult<T> extends $ISerializableRecipe {

 "isEmpty"(): boolean
 "getId"(): $ResourceLocation
 "getResult"(): T
 "getAmount"(): long
 "serializeTo"(arg0: $FriendlyByteBuf$Type): void
 "serializeTo"(): $JsonElement
}

export namespace $IRecipeResult {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeResult$Type<T> = ($IRecipeResult<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeResult_<T> = $IRecipeResult$Type<(T)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/$IoDirection" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IDebuggable, $IDebuggable$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebuggable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IDebugMessages, $IDebugMessages$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebugMessages"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $IoDirection extends $Enum<($IoDirection)> implements $IDebuggable {
static readonly "Input": $IoDirection
static readonly "Output": $IoDirection


public static "values"(): ($IoDirection)[]
public static "valueOf"(arg0: string): $IoDirection
public static "write"(arg0: $CompoundTag$Type, arg1: string, arg2: $IoDirection$Type): void
public static "read"(arg0: $CompoundTag$Type, arg1: string, arg2: $IoDirection$Type): $IoDirection
public static "from"(arg0: boolean): $IoDirection
public "isInput"(): boolean
public "opposite"(): $IoDirection
public "isOutput"(): boolean
public "getDebugMessages"(arg0: $LogicalSide$Type, arg1: $IDebugMessages$Type): void
get "input"(): boolean
get "output"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IoDirection$Type = (("output") | ("input")) | ($IoDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IoDirection_ = $IoDirection$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/recipe/$AbstractOneToOneRecipe" {
import {$IRecipeResult, $IRecipeResult$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/result/$IRecipeResult"
import {$ISerializableRecipe, $ISerializableRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$ISerializableRecipe"
import {$ModRecipe, $ModRecipe$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/$ModRecipe"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IRecipeIngredient, $IRecipeIngredient$Type} from "packages/it/zerono/mods/zerocore/lib/recipe/ingredient/$IRecipeIngredient"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $AbstractOneToOneRecipe<Ingredient, Result, RecipeIngredient extends $IRecipeIngredient<(Ingredient)>, RecipeResult extends $IRecipeResult<(Result)>> extends $ModRecipe implements $Predicate<(Ingredient)>, $ISerializableRecipe {


public "test"(arg0: Ingredient): boolean
public "getResult"(): RecipeResult
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getIngredient"(): RecipeIngredient
public "serializeTo"(arg0: $FriendlyByteBuf$Type): void
public "serializeTo"(): $JsonElement
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(Ingredient)>
public "negate"(): $Predicate<(Ingredient)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(Ingredient)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(Ingredient)>
public static "isEqual"<T>(arg0: any): $Predicate<(Ingredient)>
get "result"(): RecipeResult
get "ingredients"(): $NonNullList<($Ingredient)>
get "ingredient"(): RecipeIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractOneToOneRecipe$Type<Ingredient, Result, RecipeIngredient, RecipeResult> = ($AbstractOneToOneRecipe<(Ingredient), (Result), (RecipeIngredient), (RecipeResult)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractOneToOneRecipe_<Ingredient, Result, RecipeIngredient, RecipeResult> = $AbstractOneToOneRecipe$Type<(Ingredient), (Result), (RecipeIngredient), (RecipeResult)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$PartPosition" {
import {$AbstractCuboidMultiblockController, $AbstractCuboidMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$AbstractCuboidMultiblockController"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PartPosition$Type, $PartPosition$Type$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/cuboid/$PartPosition$Type"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PartPosition extends $Enum<($PartPosition)> implements $StringRepresentable {
static readonly "Unknown": $PartPosition
static readonly "Interior": $PartPosition
static readonly "FrameCorner": $PartPosition
static readonly "FrameEastWest": $PartPosition
static readonly "FrameSouthNorth": $PartPosition
static readonly "FrameUpDown": $PartPosition
static readonly "TopFace": $PartPosition
static readonly "BottomFace": $PartPosition
static readonly "NorthFace": $PartPosition
static readonly "SouthFace": $PartPosition
static readonly "EastFace": $PartPosition
static readonly "WestFace": $PartPosition


public static "values"(): ($PartPosition)[]
public static "valueOf"(arg0: string): $PartPosition
public "getType"(): $PartPosition$Type
public static "createProperty"(arg0: string): $EnumProperty<($PartPosition)>
public "getDirection"(): $Optional<($Direction)>
public "isFrame"(): boolean
public "getSerializedName"(): string
public "isVerticalFace"(): boolean
public "isFace"(): boolean
public static "positionIn"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $PartPosition
/**
 * 
 * @deprecated
 */
public static "positionIn"<Controller extends $AbstractCuboidMultiblockController<(Controller)>>(arg0: Controller, arg1: $BlockPos$Type): $PartPosition
public "isHorizontalFace"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "type"(): $PartPosition$Type
get "direction"(): $Optional<($Direction)>
get "frame"(): boolean
get "serializedName"(): string
get "verticalFace"(): boolean
get "face"(): boolean
get "horizontalFace"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartPosition$Type = (("framesouthnorth") | ("topface") | ("bottomface") | ("eastface") | ("framecorner") | ("frameupdown") | ("westface") | ("frameeastwest") | ("northface") | ("southface") | ("unknown") | ("interior")) | ($PartPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartPosition_ = $PartPosition$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/client/render/rotor/$ShaftSection$Builder" {
import {$ShaftSection, $ShaftSection$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/client/render/rotor/$ShaftSection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$RotorBladeState, $RotorBladeState$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/rotor/$RotorBladeState"

export class $ShaftSection$Builder {


public "build"(): $ShaftSection
public "addBlade"(arg0: $RotorBladeState$Type, arg1: short, arg2: $Direction$Type): $ShaftSection$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaftSection$Builder$Type = ($ShaftSection$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaftSection$Builder_ = $ShaftSection$Builder$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties" {
import {$IMultiblockVariant, $IMultiblockVariant$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockVariant"
import {$ModBlock$ExtendedProperties, $ModBlock$ExtendedProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/$ModBlock$ExtendedProperties"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IMultiblockPartType, $IMultiblockPartType$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType"

export class $MultiblockPartBlock$MultiblockPartProperties<PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType)> extends $ModBlock$ExtendedProperties<($MultiblockPartBlock$MultiblockPartProperties<(PartType)>)> {


public static "create"<PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType)>(arg0: PartType, arg1: $BlockBehaviour$Properties$Type): $MultiblockPartBlock$MultiblockPartProperties<(PartType)>
public "variant"(arg0: $IMultiblockVariant$Type): $MultiblockPartBlock$MultiblockPartProperties<(PartType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPartBlock$MultiblockPartProperties$Type<PartType> = ($MultiblockPartBlock$MultiblockPartProperties<(PartType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPartBlock$MultiblockPartProperties_<PartType> = $MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>;
}}
declare module "packages/it/zerono/mods/extremereactors/api/turbine/$CoilMaterial" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CoilMaterial {
static readonly "STANDARD_EXTRACTIONRATE": float


public "getEfficiency"(): float
public "setEfficiency"(arg0: float): void
public "setBonus"(arg0: float): void
public "getBonus"(): float
public "getEnergyExtractionRate"(): float
public "setEnergyExtractionRate"(arg0: float): void
get "efficiency"(): float
set "efficiency"(value: float)
set "bonus"(value: float)
get "bonus"(): float
get "energyExtractionRate"(): float
set "energyExtractionRate"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoilMaterial$Type = ($CoilMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoilMaterial_ = $CoilMaterial$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$AbstractGeneratorMultiblockController" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EnergySystem, $EnergySystem$Type} from "packages/it/zerono/mods/zerocore/lib/energy/$EnergySystem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$OperationMode, $OperationMode$Type} from "packages/it/zerono/mods/zerocore/lib/data/stack/$OperationMode"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IWideEnergyStorage2, $IWideEnergyStorage2$Type} from "packages/it/zerono/mods/zerocore/lib/energy/$IWideEnergyStorage2"
import {$AbstractMultiblockController, $AbstractMultiblockController$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/$AbstractMultiblockController"
import {$IoDirection, $IoDirection$Type} from "packages/it/zerono/mods/zerocore/lib/data/$IoDirection"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WideAmount, $WideAmount$Type} from "packages/it/zerono/mods/zerocore/lib/data/$WideAmount"
import {$IMultiblockGeneratorVariant, $IMultiblockGeneratorVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/variant/$IMultiblockGeneratorVariant"

export class $AbstractGeneratorMultiblockController<Controller extends $AbstractGeneratorMultiblockController<(Controller), (V)>, V extends $IMultiblockGeneratorVariant> extends $AbstractMultiblockController<(Controller), (V)> implements $IWideEnergyStorage2 {
readonly "DataUpdated": $IEvent<($Runnable)>

constructor(arg0: $Level$Type)

public "getCapacity"(arg0: $EnergySystem$Type): $WideAmount
public "extractEnergy"(arg0: $EnergySystem$Type, arg1: $WideAmount$Type, arg2: $OperationMode$Type): $WideAmount
public "getEnergyStored"(arg0: $EnergySystem$Type): $WideAmount
public "getFluidHandler"(arg0: $IoDirection$Type): $Optional<($IFluidHandler)>
public "insertEnergy"(arg0: $EnergySystem$Type, arg1: $WideAmount$Type, arg2: $OperationMode$Type): $WideAmount
public "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
public "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
public "getOutputEnergySystem"(): $EnergySystem
public "getEnergyStoredPercentage"(): double
public "getEnergySystem"(): $EnergySystem
public "getLiquidHandler"(): $Optional<($IFluidHandler)>
public "getGasHandler"(): $Optional<($IFluidHandler)>
public "getFreeSpace"(arg0: $EnergySystem$Type): $WideAmount
public "canInsert"(): boolean
public "canExtract"(): boolean
public "setEnergyStored"(arg0: $WideAmount$Type, arg1: $EnergySystem$Type): void
get "outputEnergySystem"(): $EnergySystem
get "energyStoredPercentage"(): double
get "energySystem"(): $EnergySystem
get "liquidHandler"(): $Optional<($IFluidHandler)>
get "gasHandler"(): $Optional<($IFluidHandler)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGeneratorMultiblockController$Type<Controller, V> = ($AbstractGeneratorMultiblockController<(Controller), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGeneratorMultiblockController_<Controller, V> = $AbstractGeneratorMultiblockController$Type<(Controller), (V)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/nbt/$INestedSyncableEntity" {
import {$ISyncableEntity, $ISyncableEntity$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $INestedSyncableEntity {

 "getNestedSyncableEntity"(): $Optional<($ISyncableEntity)>

(): $Optional<($ISyncableEntity)>
}

export namespace $INestedSyncableEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INestedSyncableEntity$Type = ($INestedSyncableEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INestedSyncableEntity_ = $INestedSyncableEntity$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/$IBlockStateUpdater" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBlockStateUpdater {

 "updateBlockState"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockEntity$Type, arg4: integer): void
 "buildUpdatedState"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockEntity$Type): $BlockState
}

export namespace $IBlockStateUpdater {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockStateUpdater$Type = ($IBlockStateUpdater);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockStateUpdater_ = $IBlockStateUpdater$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/data/stack/$IStackHolderAccess" {
import {$ObjIntConsumer, $ObjIntConsumer$Type} from "packages/java/util/function/$ObjIntConsumer"
import {$IStackHolder$ChangeType, $IStackHolder$ChangeType$Type} from "packages/it/zerono/mods/zerocore/lib/data/stack/$IStackHolder$ChangeType"
import {$Int2IntFunction, $Int2IntFunction$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import {$IStackHolder, $IStackHolder$Type} from "packages/it/zerono/mods/zerocore/lib/data/stack/$IStackHolder"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IStackHolderAccess<Holder extends $IStackHolderAccess<(Holder), (Stack)>, Stack> extends $IStackHolder<(Holder), (Stack)> {

 "setStackAt"(arg0: integer, arg1: Stack): void
 "getStackAt"(arg0: integer): Stack
 "isEmpty"(arg0: integer): boolean
 "getFreeSpace"(arg0: integer): integer
 "setOnContentsChangedListener"(arg0: $ObjIntConsumer$Type<($IStackHolder$ChangeType$Type)>): Holder
 "setMaxCapacity"(arg0: $Int2IntFunction$Type): void
 "setMaxCapacity"(arg0: integer): void
 "isStackValid"(arg0: integer, arg1: Stack): boolean
 "setOnLoadListener"(arg0: $Runnable$Type): Holder
 "getMaxCapacity"(arg0: integer): integer
 "getAmount"(arg0: integer): integer
}

export namespace $IStackHolderAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackHolderAccess$Type<Holder, Stack> = ($IStackHolderAccess<(Holder), (Stack)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackHolderAccess_<Holder, Stack> = $IStackHolderAccess$Type<(Holder), (Stack)>;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$MultiblockTurbine" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CuboidBoundingBox, $CuboidBoundingBox$Type} from "packages/it/zerono/mods/zerocore/lib/data/geometry/$CuboidBoundingBox"
import {$AbstractGeneratorMultiblockController, $AbstractGeneratorMultiblockController$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$AbstractGeneratorMultiblockController"
import {$ITurbineWriter, $ITurbineWriter$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$ITurbineWriter"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IMultiblockTurbineVariant, $IMultiblockTurbineVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/variant/$IMultiblockTurbineVariant"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IoDirection, $IoDirection$Type} from "packages/it/zerono/mods/zerocore/lib/data/$IoDirection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IDebugMessages, $IDebugMessages$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebugMessages"
import {$CoilMaterial, $CoilMaterial$Type} from "packages/it/zerono/mods/extremereactors/api/turbine/$CoilMaterial"
import {$ITurbineMachine, $ITurbineMachine$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$ITurbineMachine"
import {$IDebuggable, $IDebuggable$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebuggable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$VentSetting, $VentSetting$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$VentSetting"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$IFluidContainer, $IFluidContainer$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$IFluidContainer"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$IMultiblockPart, $IMultiblockPart$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockPart"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$RotorComponentType, $RotorComponentType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/rotor/$RotorComponentType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITurbineEnvironment, $ITurbineEnvironment$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/turbine/$ITurbineEnvironment"

export class $MultiblockTurbine extends $AbstractGeneratorMultiblockController<($MultiblockTurbine), ($IMultiblockTurbineVariant)> implements $ITurbineMachine, $ITurbineEnvironment, $ITurbineWriter, $IDebuggable {
readonly "DataUpdated": $IEvent<($Runnable)>

constructor(arg0: $Level$Type, arg1: $IMultiblockTurbineVariant$Type)

public "getCapacity"(): integer
public "getEnvironment"(): $ITurbineEnvironment
public "reset"(): void
public "getFluidConsumedLastTick"(): integer
public "isAssembledAndActive"(): boolean
public "isMachineActive"(): boolean
public "setMachineActive"(arg0: boolean): void
public "getFluidHandler"(arg0: $IoDirection$Type): $Optional<($IFluidHandler)>
public "isPartCompatible"(arg0: $IMultiblockPart$Type<($MultiblockTurbine$Type)>): boolean
public "setInductorEngaged"(arg0: boolean): void
public "setVentSetting"(arg0: $VentSetting$Type): void
public "setMaxIntakeRate"(arg0: integer): void
public "getVentSetting"(): $VentSetting
public "getRotorMass"(): integer
public "getMaxIntakeRate"(): integer
public "getRotorSpeed"(): float
public "isInductorEngaged"(): boolean
public "getCoilBlock"(arg0: $BlockPos$Type): $Optional<($CoilMaterial)>
public "getMaxRotorSpeed"(): float
public "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
public "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
public "setMaxIntakeRatePercentage"(arg0: integer): void
public "getRotorBladesCount"(): integer
public "getRotorEfficiencyLastTick"(): float
public "getMaxIntakeRateHardLimit"(): integer
public "changeMaxIntakeRate"(arg0: integer): void
public "getRotorComponentTypeAt"(arg0: $BlockPos$Type): $RotorComponentType
public "getEnergyGeneratedLastTick"(): double
public "getCoolantAmount"(): integer
public "getVaporAmount"(): integer
public "getDebugMessages"(arg0: $LogicalSide$Type, arg1: $IDebugMessages$Type): void
public "getLiquidHandler"(): $Optional<($IFluidHandler)>
public "getGasHandler"(): $Optional<($IFluidHandler)>
public "getFluidContainer"(): $IFluidContainer
public "onFluidPortChanged"(): void
public "performInputCycle"(): void
public "performOutputCycle"(): void
public "isSimulator"(): boolean
/**
 * 
 * @deprecated
 */
public "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
public "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>, arg1: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): void
public "getReferenceCoord"(): $Optional<($BlockPos)>
public "getBoundingBox"(): $CuboidBoundingBox
public "getWorld"(): $Level
/**
 * 
 * @deprecated
 */
public "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg3: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): T
/**
 * 
 * @deprecated
 */
public "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T): T
/**
 * 
 * @deprecated
 */
public "getMinimumCoord"(): $Optional<($BlockPos)>
public "toggleMachineActive"(): void
get "capacity"(): integer
get "environment"(): $ITurbineEnvironment
get "fluidConsumedLastTick"(): integer
get "assembledAndActive"(): boolean
get "machineActive"(): boolean
set "machineActive"(value: boolean)
set "inductorEngaged"(value: boolean)
set "ventSetting"(value: $VentSetting$Type)
set "maxIntakeRate"(value: integer)
get "ventSetting"(): $VentSetting
get "rotorMass"(): integer
get "maxIntakeRate"(): integer
get "rotorSpeed"(): float
get "inductorEngaged"(): boolean
get "maxRotorSpeed"(): float
set "maxIntakeRatePercentage"(value: integer)
get "rotorBladesCount"(): integer
get "rotorEfficiencyLastTick"(): float
get "maxIntakeRateHardLimit"(): integer
get "energyGeneratedLastTick"(): double
get "coolantAmount"(): integer
get "vaporAmount"(): integer
get "liquidHandler"(): $Optional<($IFluidHandler)>
get "gasHandler"(): $Optional<($IFluidHandler)>
get "fluidContainer"(): $IFluidContainer
get "simulator"(): boolean
get "referenceCoord"(): $Optional<($BlockPos)>
get "boundingBox"(): $CuboidBoundingBox
get "world"(): $Level
get "minimumCoord"(): $Optional<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockTurbine$Type = ($MultiblockTurbine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockTurbine_ = $MultiblockTurbine$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock" {
import {$IMultiblockVariant, $IMultiblockVariant$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/variant/$IMultiblockVariant"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IMultiblockPartType, $IMultiblockPartType$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ModBlock, $ModBlock$Type} from "packages/it/zerono/mods/zerocore/lib/block/$ModBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $MultiblockPartBlock<Controller extends $IMultiblockController<(Controller)>, PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType)> extends $ModBlock implements $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>)

public "getMultiblockVariant"(): $Optional<($IMultiblockVariant)>
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getPartType"(): PartType
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "multiblockVariant"(): $Optional<($IMultiblockVariant)>
get "partType"(): PartType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPartBlock$Type<Controller, PartType> = ($MultiblockPartBlock<(Controller), (PartType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPartBlock_<Controller, PartType> = $MultiblockPartBlock$Type<(Controller), (PartType)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockMachine" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CuboidBoundingBox, $CuboidBoundingBox$Type} from "packages/it/zerono/mods/zerocore/lib/data/geometry/$CuboidBoundingBox"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export interface $IMultiblockMachine {

/**
 * 
 * @deprecated
 */
 "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
 "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>, arg1: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): void
 "getReferenceCoord"(): $Optional<($BlockPos)>
 "getBoundingBox"(): $CuboidBoundingBox
 "getWorld"(): $Level
/**
 * 
 * @deprecated
 */
 "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg3: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): T
/**
 * 
 * @deprecated
 */
 "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T): T
 "forReferenceCoordinates"(arg0: $Consumer$Type<($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
 "getMinimumCoord"(): $Optional<($BlockPos)>
}

export namespace $IMultiblockMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockMachine$Type = ($IMultiblockMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockMachine_ = $IMultiblockMachine$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/block/$BlockFacings" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Direction$Plane, $Direction$Plane$Type} from "packages/net/minecraft/core/$Direction$Plane"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockFacingsProperty, $BlockFacingsProperty$Type} from "packages/it/zerono/mods/zerocore/lib/block/property/$BlockFacingsProperty"

export class $BlockFacings {
static readonly "NONE": $BlockFacings
static readonly "ALL": $BlockFacings
static readonly "DOWN": $BlockFacings
static readonly "UP": $BlockFacings
static readonly "NORTH": $BlockFacings
static readonly "SOUTH": $BlockFacings
static readonly "WEST": $BlockFacings
static readonly "EAST": $BlockFacings
static readonly "VERTICAL": $BlockFacings
static readonly "HORIZONTAL": $BlockFacings
static readonly "AXIS_X": $BlockFacings
static readonly "AXIS_Y": $BlockFacings
static readonly "AXIS_Z": $BlockFacings
static readonly "FACING_DOWN": $BooleanProperty
static readonly "FACING_UP": $BooleanProperty
static readonly "FACING_WEST": $BooleanProperty
static readonly "FACING_EAST": $BooleanProperty
static readonly "FACING_NORTH": $BooleanProperty
static readonly "FACING_SOUTH": $BooleanProperty


public "up"(): boolean
public "value"(): byte
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "stream"(): $Stream<($Direction)>
public "isSet"(arg0: $Direction$Type): boolean
public "set"(arg0: $Direction$Type, arg1: boolean): $BlockFacings
public static "computeHash"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): byte
public static "from"(arg0: $Direction$Plane$Type): $BlockFacings
public static "from"(arg0: $Direction$Axis$Type): $BlockFacings
public static "from"(arg0: (boolean)[]): $BlockFacings
public static "from"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): $BlockFacings
public static "from"(...arg0: ($Direction$Type)[]): $BlockFacings
public "down"(): boolean
public "all"(): boolean
public "north"(): boolean
public "south"(): boolean
public "east"(): boolean
public "west"(): boolean
public "some"(): boolean
public "any"(): boolean
public "none"(): boolean
public "one"(): boolean
public "countFacesIf"(arg0: boolean): integer
public "firstIf"(arg0: boolean): $Optional<($Direction)>
public "ifNotSet"(arg0: $Direction$Type, arg1: $Runnable$Type): void
public "ifNotSet"(arg0: $Direction$Type, arg1: $Consumer$Type<($Direction$Type)>): void
public "ifSet"(arg0: $Direction$Type, arg1: $Runnable$Type): void
public "ifSet"(arg0: $Direction$Type, arg1: $Consumer$Type<($Direction$Type)>): void
public "toBlockState"(arg0: $BlockState$Type): $BlockState
public "offsetBlockPos"(arg0: $BlockPos$Type): $BlockPos
public "toProperty"(): $BlockFacingsProperty
public "except"(arg0: $Direction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFacings$Type = ($BlockFacings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFacings_ = $BlockFacings$Type;
}}
declare module "packages/it/zerono/mods/zerocore/base/multiblock/part/$GlassBlock" {
import {$IMultiblockController, $IMultiblockController$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockController"
import {$INeverCauseRenderingSkip, $INeverCauseRenderingSkip$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/$INeverCauseRenderingSkip"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IMultiblockPartType, $IMultiblockPartType$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$IMultiblockPartType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$GenericDeviceBlock, $GenericDeviceBlock$Type} from "packages/it/zerono/mods/zerocore/base/multiblock/part/$GenericDeviceBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$MultiblockPartBlock$MultiblockPartProperties, $MultiblockPartBlock$MultiblockPartProperties$Type} from "packages/it/zerono/mods/zerocore/lib/block/multiblock/$MultiblockPartBlock$MultiblockPartProperties"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GlassBlock<Controller extends $IMultiblockController<(Controller)>, PartType extends ($Enum<(PartType)>) & ($IMultiblockPartType)> extends $GenericDeviceBlock<(Controller), (PartType)> implements $INeverCauseRenderingSkip {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockPartBlock$MultiblockPartProperties$Type<(PartType)>)

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public static "addGlassProperties"(arg0: $BlockBehaviour$Properties$Type): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassBlock$Type<Controller, PartType> = ($GlassBlock<(Controller), (PartType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassBlock_<Controller, PartType> = $GlassBlock$Type<(Controller), (PartType)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/world/$NeighboringPositions" {
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $NeighboringPositions {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: ($Direction$Type)[])
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $BlockPos$Type, arg1: ($Direction$Type)[])
constructor()
constructor(arg0: ($Direction$Type)[])
constructor(arg0: $BlockPos$Type)

public "get"(arg0: integer): $BlockPos
public "size"(): integer
public "getHash"(arg0: integer): long
public "setTo"(arg0: integer, arg1: integer, arg2: integer): void
public "setTo"(arg0: $BlockPos$Type): void
public "getHashStream"(): $LongStream
set "to"(value: $BlockPos$Type)
get "hashStream"(): $LongStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeighboringPositions$Type = ($NeighboringPositions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeighboringPositions_ = $NeighboringPositions$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/$IActivableMachine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IActivableMachine {

 "isMachineActive"(): boolean
 "setMachineActive"(arg0: boolean): void
 "toggleMachineActive"(): void
}

export namespace $IActivableMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IActivableMachine$Type = ($IActivableMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IActivableMachine_ = $IActivableMachine$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$FluidType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FluidType extends $Enum<($FluidType)> {
static readonly "Gas": $FluidType
static readonly "Liquid": $FluidType


public static "values"(): ($FluidType)[]
public static "valueOf"(arg0: string): $FluidType
public "isLiquid"(): boolean
public "isGas"(): boolean
get "liquid"(): boolean
get "gas"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$Type = (("liquid") | ("gas")) | ($FluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType_ = $FluidType$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$Stats" {
import {$IFuelContainer, $IFuelContainer$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IFuelContainer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ISyncableEntity, $ISyncableEntity$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/it/zerono/mods/zerocore/lib/item/inventory/$ItemStackHolder"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"

export class $Stats implements $ISyncableEntity {

constructor(arg0: $IFuelContainer$Type)

public "toString"(): string
public "getFuelRichness"(): float
public "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
public "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
public "getFuelConsumedLastTick"(): float
public "getAmountGeneratedLastTick"(): double
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $NonNullConsumer$Type<($CompoundTag$Type)>): void
public "syncDataElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
public "syncChildDataEntityFrom"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): boolean
public "syncBooleanElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: boolean): void
public "syncChildDataEntityTo"(arg0: $ISyncableEntity$Type, arg1: string, arg2: $CompoundTag$Type, arg3: $ISyncableEntity$SyncReason$Type): void
public "syncBooleanElementFrom"(arg0: string, arg1: $CompoundTag$Type, arg2: $BooleanConsumer$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $CompoundTag$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHolder$Type): void
public "syncDataElementTo"(arg0: string, arg1: $CompoundTag$Type, arg2: $ItemStackHandler$Type): void
get "fuelRichness"(): float
get "fuelConsumedLastTick"(): float
get "amountGeneratedLastTick"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stats$Type = ($Stats);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stats_ = $Stats$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$IFluidContainer" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FluidType, $FluidType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$FluidType"
import {$Coolant, $Coolant$Type} from "packages/it/zerono/mods/extremereactors/api/coolant/$Coolant"
import {$IoDirection, $IoDirection$Type} from "packages/it/zerono/mods/zerocore/lib/data/$IoDirection"
import {$Vapor, $Vapor$Type} from "packages/it/zerono/mods/extremereactors/api/coolant/$Vapor"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IMultiblockGeneratorVariant, $IMultiblockGeneratorVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/variant/$IMultiblockGeneratorVariant"
import {$OperationMode, $OperationMode$Type} from "packages/it/zerono/mods/zerocore/lib/data/stack/$OperationMode"

export interface $IFluidContainer {

 "getCapacity"(): integer
 "setCapacity"(arg0: integer): void
 "extract"(arg0: $FluidType$Type, arg1: integer, arg2: $OperationMode$Type): $FluidStack
 "getWrapper"(arg0: $IoDirection$Type): $IFluidHandler
 "getVapor"(): $Optional<($Vapor)>
 "getCoolant"(): $Optional<($Coolant)>
 "getLiquid"(): $Optional<($Fluid)>
 "getGas"(): $Optional<($Fluid)>
 "getLiquidAmount"(): integer
 "getGasAmount"(): integer
 "getLiquidStoredPercentage"(): double
 "getGasStoredPercentage"(): double
 "getLiquidTemperature"(arg0: double): double
 "getLiquidVaporizedLastTick"(): integer
 "mapVapor"<T>(arg0: $Function$Type<($Vapor$Type), (T)>, arg1: T): T
 "onAbsorbHeat"(arg0: double, arg1: $IMultiblockGeneratorVariant$Type): double
 "onCondensation"(arg0: integer, arg1: boolean, arg2: $IMultiblockGeneratorVariant$Type): integer
 "mapCoolant"<T>(arg0: $Function$Type<($Coolant$Type), (T)>, arg1: T): T
}

export namespace $IFluidContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidContainer$Type = ($IFluidContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidContainer_ = $IFluidContainer$Type;
}}
declare module "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$MultiblockReactor" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$UpdateClientsFuelRodsLayout, $UpdateClientsFuelRodsLayout$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/network/$UpdateClientsFuelRodsLayout"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CuboidBoundingBox, $CuboidBoundingBox$Type} from "packages/it/zerono/mods/zerocore/lib/data/geometry/$CuboidBoundingBox"
import {$OperationalMode, $OperationalMode$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$OperationalMode"
import {$AbstractGeneratorMultiblockController, $AbstractGeneratorMultiblockController$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$AbstractGeneratorMultiblockController"
import {$ReactorPartType, $ReactorPartType$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$ReactorPartType"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IIrradiationSource, $IIrradiationSource$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IIrradiationSource"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$IRadiationModerator, $IRadiationModerator$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/radiation/$IRadiationModerator"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IReactorWriter, $IReactorWriter$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IReactorWriter"
import {$IoDirection, $IoDirection$Type} from "packages/it/zerono/mods/zerocore/lib/data/$IoDirection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IDebugMessages, $IDebugMessages$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebugMessages"
import {$IMultiblockReactorVariant, $IMultiblockReactorVariant$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/variant/$IMultiblockReactorVariant"
import {$IDebuggable, $IDebuggable$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebuggable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ReactorControlRodEntity, $ReactorControlRodEntity$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/part/$ReactorControlRodEntity"
import {$Stats, $Stats$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$Stats"
import {$IEvent, $IEvent$Type} from "packages/it/zerono/mods/zerocore/lib/event/$IEvent"
import {$ISyncableEntity$SyncReason, $ISyncableEntity$SyncReason$Type} from "packages/it/zerono/mods/zerocore/lib/data/nbt/$ISyncableEntity$SyncReason"
import {$FuelRodsLayout, $FuelRodsLayout$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$FuelRodsLayout"
import {$IFluidContainer, $IFluidContainer$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/common/$IFluidContainer"
import {$FuelProperties, $FuelProperties$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$FuelProperties"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"
import {$IMultiblockPart, $IMultiblockPart$Type} from "packages/it/zerono/mods/zerocore/lib/multiblock/$IMultiblockPart"
import {$Reactant, $Reactant$Type} from "packages/it/zerono/mods/extremereactors/api/reactor/$Reactant"
import {$IHeat, $IHeat$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IHeat"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$IFuelContainer, $IFuelContainer$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IFuelContainer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$IReactorMachine, $IReactorMachine$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IReactorMachine"
import {$IReactorEnvironment, $IReactorEnvironment$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$IReactorEnvironment"
import {$WasteEjectionSetting, $WasteEjectionSetting$Type} from "packages/it/zerono/mods/extremereactors/gamecontent/multiblock/reactor/$WasteEjectionSetting"

export class $MultiblockReactor extends $AbstractGeneratorMultiblockController<($MultiblockReactor), ($IMultiblockReactorVariant)> implements $IReactorMachine, $IReactorEnvironment, $IReactorWriter, $IDebuggable {
readonly "DataUpdated": $IEvent<($Runnable)>

constructor(arg0: $Level$Type, arg1: $IMultiblockReactorVariant$Type)

public "getCapacity"(): integer
public "getEnvironment"(): $IReactorEnvironment
public "reset"(): void
public "onUpdateClientsFuelRodsLayout"(arg0: $UpdateClientsFuelRodsLayout$Type): void
public "getPartsCount"(arg0: $ReactorPartType$Type): integer
public "isMachineActive"(): boolean
public "setMachineActive"(arg0: boolean): void
public "getFuelHeatValue"(): $DoubleSupplier
public "getFuelFertility"(): float
public "getFuelToReactorHeatTransferCoefficient"(): float
public "getReactorToCoolantSystemHeatTransferCoefficient"(): float
public "getFluidHandler"(arg0: $IoDirection$Type): $Optional<($IFluidHandler)>
public "getFuel"(): $Optional<($Reactant)>
public "isPartCompatible"(arg0: $IMultiblockPart$Type<($MultiblockReactor$Type)>): boolean
public "refuel"(): void
public "getFuelProperties"(): $FuelProperties
public "getFuelAmount"(): integer
public "getWasteAmount"(): integer
public "getFuelRodsCount"(): integer
public "syncDataFrom"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): void
public "syncDataTo"(arg0: $CompoundTag$Type, arg1: $ISyncableEntity$SyncReason$Type): $CompoundTag
public "getWaste"(): $Optional<($Reactant)>
public "getCoolantAmount"(): integer
public "getVaporAmount"(): integer
public "getPowerTapsCount"(): integer
public "ejectFuel"(arg0: boolean): void
public "ejectFuel"(arg0: boolean, arg1: $BlockPos$Type): void
public "ejectFuel"(): void
public "getFuelRodsLayout"(): $FuelRodsLayout
public "setControlRodsInsertionRatio"(arg0: integer): void
public "setWasteEjectionMode"(arg0: $WasteEjectionSetting$Type): void
public "getWasteEjectionMode"(): $WasteEjectionSetting
public "changeControlRodsInsertionRatio"(arg0: integer): void
public "performRefuelingCycle"(): boolean
public "getNextIrradiationSource"(): $IIrradiationSource
public "getReactorHeatValue"(): $DoubleSupplier
public "getReactorHeatLossCoefficient"(): float
public "getControlRodLocations"(): $List<($BlockPos)>
public "getControlRodByIndex"(arg0: integer): $Optional<($ReactorControlRodEntity)>
public "getControlRodsCount"(): integer
public "getDebugMessages"(arg0: $LogicalSide$Type, arg1: $IDebugMessages$Type): void
public "voidReactants"(): void
public "getLiquidHandler"(): $Optional<($IFluidHandler)>
public "getGasHandler"(): $Optional<($IFluidHandler)>
public "getFuelContainer"(): $IFuelContainer
public "getFluidContainer"(): $IFluidContainer
public "getUiStats"(): $Stats
public "onFluidPortChanged"(): void
public "getOperationalMode"(): $OperationalMode
public "getFuelHeat"(): $IHeat
public "getReactorVolume"(): integer
public "getReactorHeat"(): $IHeat
public "performInputCycle"(): boolean
public "ejectWaste"(): void
public "ejectWaste"(arg0: boolean, arg1: $BlockPos$Type): void
public "ejectWaste"(arg0: boolean): void
public "performOutputCycle"(): void
public "isSimulator"(): boolean
public "getModerator"(arg0: $BlockPos$Type): $IRadiationModerator
/**
 * 
 * @deprecated
 */
public "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>): void
/**
 * 
 * @deprecated
 */
public "forBoundingBoxCoordinates"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockPos$Type)>, arg1: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): void
public "getReferenceCoord"(): $Optional<($BlockPos)>
public "getBoundingBox"(): $CuboidBoundingBox
public "getWorld"(): $Level
/**
 * 
 * @deprecated
 */
public "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T, arg2: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>, arg3: $Function$Type<($BlockPos$Type), ($BlockPos$Type)>): T
/**
 * 
 * @deprecated
 */
public "mapBoundingBoxCoordinates"<T>(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockPos$Type), (T)>, arg1: T): T
/**
 * 
 * @deprecated
 */
public "getMinimumCoord"(): $Optional<($BlockPos)>
public "toggleMachineActive"(): void
get "capacity"(): integer
get "environment"(): $IReactorEnvironment
get "machineActive"(): boolean
set "machineActive"(value: boolean)
get "fuelHeatValue"(): $DoubleSupplier
get "fuelFertility"(): float
get "fuelToReactorHeatTransferCoefficient"(): float
get "reactorToCoolantSystemHeatTransferCoefficient"(): float
get "fuel"(): $Optional<($Reactant)>
get "fuelProperties"(): $FuelProperties
get "fuelAmount"(): integer
get "wasteAmount"(): integer
get "fuelRodsCount"(): integer
get "waste"(): $Optional<($Reactant)>
get "coolantAmount"(): integer
get "vaporAmount"(): integer
get "powerTapsCount"(): integer
get "fuelRodsLayout"(): $FuelRodsLayout
set "controlRodsInsertionRatio"(value: integer)
set "wasteEjectionMode"(value: $WasteEjectionSetting$Type)
get "wasteEjectionMode"(): $WasteEjectionSetting
get "nextIrradiationSource"(): $IIrradiationSource
get "reactorHeatValue"(): $DoubleSupplier
get "reactorHeatLossCoefficient"(): float
get "controlRodLocations"(): $List<($BlockPos)>
get "controlRodsCount"(): integer
get "liquidHandler"(): $Optional<($IFluidHandler)>
get "gasHandler"(): $Optional<($IFluidHandler)>
get "fuelContainer"(): $IFuelContainer
get "fluidContainer"(): $IFluidContainer
get "uiStats"(): $Stats
get "operationalMode"(): $OperationalMode
get "fuelHeat"(): $IHeat
get "reactorVolume"(): integer
get "reactorHeat"(): $IHeat
get "simulator"(): boolean
get "referenceCoord"(): $Optional<($BlockPos)>
get "boundingBox"(): $CuboidBoundingBox
get "world"(): $Level
get "minimumCoord"(): $Optional<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockReactor$Type = ($MultiblockReactor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockReactor_ = $MultiblockReactor$Type;
}}
declare module "packages/it/zerono/mods/zerocore/lib/event/$IEvent" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export interface $IEvent<Handler> {

 "raise"(arg0: $Consumer$Type<(Handler)>): void
 "unsubscribe"(arg0: Handler): void
 "subscribe"(arg0: Handler): Handler
 "unsubscribeAll"(): void
}

export namespace $IEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEvent$Type<Handler> = ($IEvent<(Handler)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEvent_<Handler> = $IEvent$Type<(Handler)>;
}}
declare module "packages/it/zerono/mods/zerocore/lib/$IDebuggable" {
import {$IDebugMessages, $IDebugMessages$Type} from "packages/it/zerono/mods/zerocore/lib/$IDebugMessages"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export interface $IDebuggable {

 "getDebugMessages"(arg0: $LogicalSide$Type, arg1: $IDebugMessages$Type): void

(arg0: $LogicalSide$Type, arg1: $IDebugMessages$Type): void
}

export namespace $IDebuggable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDebuggable$Type = ($IDebuggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDebuggable_ = $IDebuggable$Type;
}}
