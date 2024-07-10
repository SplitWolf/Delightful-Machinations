declare module "packages/com/possible_triangle/flightlib/api/$ISource" {
import {$IJetpack$Context, $IJetpack$Context$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack$Context"

export interface $ISource {

 "isDisabled"(arg0: $IJetpack$Context$Type): boolean

(arg0: $IJetpack$Context$Type): boolean
}

export namespace $ISource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISource$Type = ($ISource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISource_ = $ISource$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$IJetpack$Context" {
import {$FlyingPose, $FlyingPose$Type} from "packages/com/possible_triangle/flightlib/api/$FlyingPose"
import {$IJetpack, $IJetpack$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack"
import {$IJetpack$Context$Companion, $IJetpack$Context$Companion$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack$Context$Companion"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISource, $ISource$Type} from "packages/com/possible_triangle/flightlib/api/$ISource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $IJetpack$Context {
static readonly "Companion": $IJetpack$Context$Companion

constructor(arg0: $IJetpack$Type, arg1: $LivingEntity$Type, arg2: $Level$Type, arg3: $FlyingPose$Type, arg4: $ISource$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $IJetpack$Type, arg1: $LivingEntity$Type, arg2: $Level$Type, arg3: $FlyingPose$Type, arg4: $ISource$Type): $IJetpack$Context
public "getSource"(): $ISource
public "getJetpack"(): $IJetpack
public "getEntity"(): $LivingEntity
public "component4"(): $FlyingPose
public "component5"(): $ISource
public "component3"(): $Level
public "component2"(): $LivingEntity
public "component1"(): $IJetpack
public "getWorld"(): $Level
public "getPose"(): $FlyingPose
get "source"(): $ISource
get "jetpack"(): $IJetpack
get "entity"(): $LivingEntity
get "world"(): $Level
get "pose"(): $FlyingPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJetpack$Context$Type = ($IJetpack$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJetpack$Context_ = $IJetpack$Context$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerTile" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SlicerTile$Companion, $SlicerTile$Companion$Type} from "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerTile$Companion"
import {$TransportedItemStack, $TransportedItemStack$Type} from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DeferralBehaviour, $DeferralBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/simple/$DeferralBehaviour"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$PressingBehaviour, $PressingBehaviour$Type} from "packages/com/simibubi/create/content/kinetics/press/$PressingBehaviour"
import {$PressingBehaviour$PressingBehaviourSpecifics, $PressingBehaviour$PressingBehaviourSpecifics$Type} from "packages/com/simibubi/create/content/kinetics/press/$PressingBehaviour$PressingBehaviourSpecifics"
import {$BasinOperatingBlockEntity, $BasinOperatingBlockEntity$Type} from "packages/com/simibubi/create/content/processing/basin/$BasinOperatingBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $SlicerTile extends $BasinOperatingBlockEntity implements $PressingBehaviour$PressingBehaviourSpecifics {
static readonly "Companion": $SlicerTile$Companion
 "basinChecker": $DeferralBehaviour
 "basinRemoved": boolean
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "initialize"(): void
public "addToTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getRenderedHeadRotationSpeed"(): float
public "onPressingCompleted"(): void
public "startProcessingBasin"(): void
public "getRenderedHeadOffset"(arg0: float): float
public "getCorrectDirection"(): boolean
public "getCuttingBehaviour"(): $PressingBehaviour
public "getHeldItem"(): $ItemStack
public "setHeldItem"(arg0: $ItemStack$Type): void
public "getCanProcess"(): boolean
public "getParticleAmount"(): integer
public "getKineticSpeed"(): float
public "tryProcessInWorld"(arg0: $ItemEntity$Type, arg1: boolean): boolean
public "canProcessInBulk"(): boolean
public "tryProcessInBasin"(arg0: boolean): boolean
public "tryProcessOnBelt"(arg0: $TransportedItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: boolean): boolean
get "renderedHeadRotationSpeed"(): float
get "correctDirection"(): boolean
get "cuttingBehaviour"(): $PressingBehaviour
get "heldItem"(): $ItemStack
set "heldItem"(value: $ItemStack$Type)
get "canProcess"(): boolean
get "particleAmount"(): integer
get "kineticSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerTile$Type = ($SlicerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerTile_ = $SlicerTile$Type;
}}
declare module "packages/com/possible_triangle/create_jetpack/item/$JetpackItem" {
import {$BacktankItem$BacktankBlockItem, $BacktankItem$BacktankBlockItem$Type} from "packages/com/simibubi/create/content/equipment/armor/$BacktankItem$BacktankBlockItem"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ControlType, $ControlType$Type} from "packages/com/possible_triangle/flightlib/api/$ControlType"
import {$IJetpack, $IJetpack$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BacktankItem, $BacktankItem$Type} from "packages/com/simibubi/create/content/equipment/armor/$BacktankItem"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$IJetpack$Context, $IJetpack$Context$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack$Context"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JetpackItem extends $BacktankItem implements $IJetpack, $ICapabilityProvider {
static readonly "SLOT": $EquipmentSlot
static readonly "TYPE": $ArmorItem$Type
static readonly "BAR_COLOR": integer
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

constructor(arg0: $Item$Properties$Type, arg1: $ArmorMaterial$Type, arg2: $ResourceLocation$Type, arg3: $ItemEntry$Type<($BacktankItem$BacktankBlockItem$Type)>)

public "isValid"(arg0: $IJetpack$Context$Type): boolean
public "hoverSpeed"(arg0: $IJetpack$Context$Type): double
public "hoverHorizontalSpeed"(arg0: $IJetpack$Context$Type): double
public "isHovering"(arg0: $IJetpack$Context$Type): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getThrusters"(arg0: $IJetpack$Context$Type): $List<($Vec3)>
public "activeType"(arg0: $IJetpack$Context$Type): $ControlType
public "horizontalSpeed"(arg0: $IJetpack$Context$Type): double
public "isUsable"(arg0: $IJetpack$Context$Type): boolean
public "acceleration"(arg0: $IJetpack$Context$Type): double
public "elytraBoost"(): double
public "hoverType"(arg0: $IJetpack$Context$Type): $ControlType
public "createParticles"(): $ParticleOptions
public "onUse"(arg0: $IJetpack$Context$Type): void
public "swimModifier"(arg0: $IJetpack$Context$Type): double
public "verticalSpeed"(arg0: $IJetpack$Context$Type): double
public "isThrusting"(arg0: $IJetpack$Context$Type): boolean
public "boostsElytra"(): boolean
public "hoverVerticalSpeed"(arg0: $IJetpack$Context$Type): double
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackItem$Type = ($JetpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JetpackItem_ = $JetpackItem$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$ControlType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $ControlType extends $Enum<($ControlType)> {
static readonly "ALWAYS": $ControlType
static readonly "NEVER": $ControlType
static readonly "TOGGLE": $ControlType


public static "values"(): ($ControlType)[]
public static "valueOf"(arg0: string): $ControlType
public static "getEntries"(): $EnumEntries<($ControlType)>
get "entries"(): $EnumEntries<($ControlType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlType$Type = (("always") | ("never") | ("toggle")) | ($ControlType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlType_ = $ControlType$Type;
}}
declare module "packages/com/possible_triangle/create_jetpack/$CopyNbtMechanicalCraftingRecipe$Serializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$MechanicalCraftingRecipe$Serializer, $MechanicalCraftingRecipe$Serializer$Type} from "packages/com/simibubi/create/content/kinetics/crafter/$MechanicalCraftingRecipe$Serializer"

export class $CopyNbtMechanicalCraftingRecipe$Serializer extends $MechanicalCraftingRecipe$Serializer {
static readonly "INSTANCE": $CopyNbtMechanicalCraftingRecipe$Serializer


public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyNbtMechanicalCraftingRecipe$Serializer$Type = ($CopyNbtMechanicalCraftingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopyNbtMechanicalCraftingRecipe$Serializer_ = $CopyNbtMechanicalCraftingRecipe$Serializer$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$IJetpack" {
import {$IJetpack$Context, $IJetpack$Context$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack$Context"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ControlType, $ControlType$Type} from "packages/com/possible_triangle/flightlib/api/$ControlType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $IJetpack {

 "isValid"(arg0: $IJetpack$Context$Type): boolean
 "hoverSpeed"(arg0: $IJetpack$Context$Type): double
 "hoverHorizontalSpeed"(arg0: $IJetpack$Context$Type): double
 "isHovering"(arg0: $IJetpack$Context$Type): boolean
 "getThrusters"(arg0: $IJetpack$Context$Type): $List<($Vec3)>
 "activeType"(arg0: $IJetpack$Context$Type): $ControlType
 "horizontalSpeed"(arg0: $IJetpack$Context$Type): double
 "isUsable"(arg0: $IJetpack$Context$Type): boolean
 "acceleration"(arg0: $IJetpack$Context$Type): double
 "elytraBoost"(): double
 "hoverType"(arg0: $IJetpack$Context$Type): $ControlType
 "createParticles"(): $ParticleOptions
 "onUse"(arg0: $IJetpack$Context$Type): void
 "swimModifier"(arg0: $IJetpack$Context$Type): double
 "verticalSpeed"(arg0: $IJetpack$Context$Type): double
 "isThrusting"(arg0: $IJetpack$Context$Type): boolean
 "boostsElytra"(): boolean
 "hoverVerticalSpeed"(arg0: $IJetpack$Context$Type): double
}

export namespace $IJetpack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJetpack$Type = ($IJetpack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJetpack_ = $IJetpack$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$SlicerTile, $SlicerTile$Type} from "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerTile"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICogWheel, $ICogWheel$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ICogWheel"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SlicerBlock extends $KineticBlock implements $IBE<($SlicerTile)>, $ICogWheel {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
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
public "getBlockEntityClass"(): $Class<($SlicerTile)>
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "getParticleInitialRadius"(): float
public "getParticleTargetRadius"(): float
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<($SlicerTile)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($SlicerTile)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($SlicerTile$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($SlicerTile$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $SlicerTile
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "isLargeCog"(): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public "isDedicatedCogWheel"(): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public "isSmallCog"(): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($SlicerTile)>
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
get "particleInitialRadius"(): float
get "particleTargetRadius"(): float
get "blockEntityType"(): $BlockEntityType<($SlicerTile)>
get "largeCog"(): boolean
get "dedicatedCogWheel"(): boolean
get "smallCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerBlock$Type = ($SlicerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerBlock_ = $SlicerBlock$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/sprinkler/$SprinklerBlock$Companion" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SprinklerBlock$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getSHAPE"(): $VoxelShape
get "sHAPE"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprinklerBlock$Companion$Type = ($SprinklerBlock$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprinklerBlock$Companion_ = $SprinklerBlock$Companion$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$FlyingPose" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FlyingPose$Companion, $FlyingPose$Companion$Type} from "packages/com/possible_triangle/flightlib/api/$FlyingPose$Companion"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $FlyingPose extends $Enum<($FlyingPose)> {
static readonly "Companion": $FlyingPose$Companion
static readonly "UPRIGHT": $FlyingPose
static readonly "SUPERMAN": $FlyingPose


public static "values"(): ($FlyingPose)[]
public static "valueOf"(arg0: string): $FlyingPose
public static "getEntries"(): $EnumEntries<($FlyingPose)>
get "entries"(): $EnumEntries<($FlyingPose)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlyingPose$Type = (("superman") | ("upright")) | ($FlyingPose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlyingPose_ = $FlyingPose$Type;
}}
declare module "packages/com/possible_triangle/flightlib/mixins/$ServerGamePacketListenerImplAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerGamePacketListenerImplAccessor {

 "setAboveGroundTickCount"(arg0: integer): void

(arg0: integer): void
}

export namespace $ServerGamePacketListenerImplAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImplAccessor$Type = ($ServerGamePacketListenerImplAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerGamePacketListenerImplAccessor_ = $ServerGamePacketListenerImplAccessor$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/sprinkler/$WetAir" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$AirBlock, $AirBlock$Type} from "packages/net/minecraft/world/level/block/$AirBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WetAir extends $AirBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WetAir$Type = ($WetAir);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WetAir_ = $WetAir$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/mixins/$RecipeManagerAccessor" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $RecipeManagerAccessor {

 "getByName"(): $Map<($ResourceLocation), ($Recipe<(any)>)>
 "setRecipes"(arg0: $Map$Type<($RecipeType$Type<(any)>), ($Map$Type<($ResourceLocation$Type), ($Recipe$Type<(any)>)>)>): void
 "setByName"(arg0: $Map$Type<($ResourceLocation$Type), ($Recipe$Type<(any)>)>): void
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerAccessor$Type = ($RecipeManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeManagerAccessor_ = $RecipeManagerAccessor$Type;
}}
declare module "packages/com/possible_triangle/create_jetpack/item/$JetpackItem$Layered" {
import {$BacktankItem$BacktankBlockItem, $BacktankItem$BacktankBlockItem$Type} from "packages/com/simibubi/create/content/equipment/armor/$BacktankItem$BacktankBlockItem"
import {$JetpackItem, $JetpackItem$Type} from "packages/com/possible_triangle/create_jetpack/item/$JetpackItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$LayeredArmorItem, $LayeredArmorItem$Type} from "packages/com/simibubi/create/foundation/item/$LayeredArmorItem"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$HumanoidArmorLayer, $HumanoidArmorLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$HumanoidArmorLayer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JetpackItem$Layered extends $JetpackItem implements $LayeredArmorItem {
static readonly "SLOT": $EquipmentSlot
static readonly "TYPE": $ArmorItem$Type
static readonly "BAR_COLOR": integer
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

constructor(arg0: $Item$Properties$Type, arg1: $ArmorMaterial$Type, arg2: $ResourceLocation$Type, arg3: $ItemEntry$Type<($BacktankItem$BacktankBlockItem$Type)>)

public "getArmorTextureLocation"(arg0: $LivingEntity$Type, arg1: $EquipmentSlot$Type, arg2: $ItemStack$Type, arg3: integer): string
public "renderArmorPiece"(arg0: $HumanoidArmorLayer$Type<(any), (any), (any)>, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: $LivingEntity$Type, arg4: $EquipmentSlot$Type, arg5: integer, arg6: $HumanoidModel$Type<(any)>, arg7: $ItemStack$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackItem$Layered$Type = ($JetpackItem$Layered);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JetpackItem$Layered_ = $JetpackItem$Layered$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$IJetpack$Context$Companion" {
import {$FlyingPose, $FlyingPose$Type} from "packages/com/possible_triangle/flightlib/api/$FlyingPose"
import {$IJetpack$Context, $IJetpack$Context$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack$Context"
import {$IJetpack, $IJetpack$Type} from "packages/com/possible_triangle/flightlib/api/$IJetpack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISource, $ISource$Type} from "packages/com/possible_triangle/flightlib/api/$ISource"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $IJetpack$Context$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "builder"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $FlyingPose$Type, arg3: $ISource$Type): $Function1<($IJetpack), ($IJetpack$Context)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJetpack$Context$Companion$Type = ($IJetpack$Context$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJetpack$Context$Companion_ = $IJetpack$Context$Companion$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerTile$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SlicerTile$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerTile$Companion$Type = ($SlicerTile$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerTile$Companion_ = $SlicerTile$Companion$Type;
}}
declare module "packages/com/possible_triangle/create_jetpack/block/$JetpackBlock" {
import {$BacktankBlock, $BacktankBlock$Type} from "packages/com/simibubi/create/content/equipment/armor/$BacktankBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $JetpackBlock extends $BacktankBlock {
static readonly "HORIZONTAL_FACING": $Property<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $ItemLike$Type, arg1: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetpackBlock$Type = ($JetpackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JetpackBlock_ = $JetpackBlock$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/sprinkler/$SprinklerBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SprinklerBlock$Companion, $SprinklerBlock$Companion$Type} from "packages/com/possible_triangle/sliceanddice/block/sprinkler/$SprinklerBlock$Companion"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SprinklerTile, $SprinklerTile$Type} from "packages/com/possible_triangle/sliceanddice/block/sprinkler/$SprinklerTile"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SprinklerBlock extends $Block implements $IWrenchable, $IBE<($SprinklerTile)> {
static readonly "Companion": $SprinklerBlock$Companion
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
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

public "getBlockEntityClass"(): $Class<($SprinklerTile)>
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<($SprinklerTile)>
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($SprinklerTile)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($SprinklerTile$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($SprinklerTile$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $SprinklerTile
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($SprinklerTile)>
get "blockEntityType"(): $BlockEntityType<($SprinklerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprinklerBlock$Type = ($SprinklerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprinklerBlock_ = $SprinklerBlock$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/sprinkler/$SprinklerTile" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SprinklerTile extends $SmartBlockEntity implements $IHaveGoggleInformation {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "writeSafe"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprinklerTile$Type = ($SprinklerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprinklerTile_ = $SprinklerTile$Type;
}}
declare module "packages/com/possible_triangle/flightlib/api/$FlyingPose$Companion" {
import {$FlyingPose, $FlyingPose$Type} from "packages/com/possible_triangle/flightlib/api/$FlyingPose"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FlyingPose$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "get"(arg0: $LivingEntity$Type): $FlyingPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlyingPose$Companion$Type = ($FlyingPose$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlyingPose$Companion_ = $FlyingPose$Companion$Type;
}}
