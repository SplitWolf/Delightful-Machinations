declare module "packages/de/srendi/advancedperipherals/common/util/fakeplayer/$APFakePlayer" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Abilities, $Abilities$Type} from "packages/net/minecraft/world/entity/player/$Abilities"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$FakePlayer, $FakePlayer$Type} from "packages/net/minecraftforge/common/util/$FakePlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$Type} from "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ServerPlayerGameMode, $ServerPlayerGameMode$Type} from "packages/net/minecraft/server/level/$ServerPlayerGameMode"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$FishingHook, $FishingHook$Type} from "packages/net/minecraft/world/entity/projectile/$FishingHook"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$InventoryMenu, $InventoryMenu$Type} from "packages/net/minecraft/world/inventory/$InventoryMenu"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Pair, $Pair$Type} from "packages/de/srendi/advancedperipherals/common/util/$Pair"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $APFakePlayer extends $FakePlayer {
static readonly "PROFILE": $GameProfile
 "connection": $ServerGamePacketListenerImpl
readonly "server": $MinecraftServer
readonly "gameMode": $ServerPlayerGameMode
 "lastSentHealth": float
 "lastSentFood": integer
 "lastSentExp": integer
 "camera": $Entity
 "isChangingDimension": boolean
 "containerCounter": integer
 "latency": integer
 "wonGame": boolean
static readonly "PERSISTED_NBT_TAG": string
static readonly "MAX_NAME_LENGTH": integer
static readonly "MAX_HEALTH": integer
static readonly "SLEEP_DURATION": integer
static readonly "WAKE_UP_DURATION": integer
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "CROUCH_BB_HEIGHT": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_EYE_HEIGHT": float
static readonly "STANDING_DIMENSIONS": $EntityDimensions
readonly "inventory": $Inventory
readonly "inventoryMenu": $InventoryMenu
 "containerMenu": $AbstractContainerMenu
 "oBob": float
 "bob": float
 "takeXpDelay": integer
 "xCloakO": double
 "yCloakO": double
 "zCloakO": double
 "xCloak": double
 "yCloak": double
 "zCloak": double
readonly "abilities": $Abilities
 "experienceLevel": integer
 "totalExperience": integer
 "experienceProgress": float
 "fishing": $FishingHook
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "attributes": $AttributeMap
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "lastHurtByPlayer": $Player
 "lastHurtByPlayerTime": integer
 "dead": boolean
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "effectsDirty": boolean
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
 "age": integer
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

constructor(arg0: $ServerLevel$Type, arg1: $Entity$Type, arg2: $GameProfile$Type)

public "use"(arg0: boolean, arg1: boolean): $InteractionResult
public "use"(arg0: boolean, arg1: boolean, arg2: $Predicate$Type<($Entity$Type)>): $InteractionResult
public "isSilent"(): boolean
public "canAttack"(arg0: $LivingEntity$Type): boolean
public "useOnEntity"(): $InteractionResult
public "useOnBlock"(): $InteractionResult
public "setLevel"(arg0: $Level$Type): void
public "getEyeHeight"(arg0: $Pose$Type): float
public "playSound"(arg0: $SoundEvent$Type, arg1: float, arg2: float): void
public "awardStat"(arg0: $Stat$Type<(any)>): void
public "digBlock"(): $Pair<(boolean), (string)>
/**
 * 
 * @deprecated
 */
public "digBlock"(arg0: $Direction$Type): $Pair<(boolean), (string)>
public static "wrapActionWithRot"<T>(arg0: float, arg1: float, arg2: $Function$Type<($APFakePlayer$Type), (T)>): $Function<($APFakePlayer), (T)>
public "doActionWithRot"<T>(arg0: float, arg1: float, arg2: $Function$Type<($APFakePlayer$Type), (T)>): T
public "findHit"(arg0: boolean, arg1: boolean): $HitResult
public "findHit"(arg0: boolean, arg1: boolean, arg2: $Predicate$Type<($Entity$Type)>): $HitResult
public static "wrapActionWithShiftKey"<T>(arg0: boolean, arg1: $Function$Type<($APFakePlayer$Type), (T)>): $Function<($APFakePlayer), (T)>
public "useOnSpecificEntity"(arg0: $Entity$Type, arg1: $HitResult$Type): $InteractionResult
public "doActionWithShiftKey"<T>(arg0: boolean, arg1: $Function$Type<($APFakePlayer$Type), (T)>): T
public "useOnFilteredEntity"(arg0: $Predicate$Type<($Entity$Type)>): $InteractionResult
public "getCachedFeetBlockState"(): $BlockState
get "silent"(): boolean
set "level"(value: $Level$Type)
get "cachedFeetBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APFakePlayer$Type = ($APFakePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APFakePlayer_ = $APFakePlayer$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralPlugin" {
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$BoundMethod, $BoundMethod$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$BoundMethod"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IPeripheralOperation, $IPeripheralOperation$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralOperation"

export interface $IPeripheralPlugin {

 "getMethods"(): $List<($BoundMethod)>
 "getOperations"(): ($IPeripheralOperation<(any)>)[]
 "isSuitable"(arg0: $IPeripheral$Type): boolean
}

export namespace $IPeripheralPlugin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralPlugin$Type = ($IPeripheralPlugin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralPlugin_ = $IPeripheralPlugin$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/base/$BaseBlockEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$BaseBlock, $BaseBlock$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$BaseBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BaseBlockEntityBlock extends $BaseBlock implements $EntityBlock {
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: $BlockBehaviour$Properties$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
/**
 * 
 * @deprecated
 */
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntityBlock$Type = ($BaseBlockEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntityBlock_ = $BaseBlockEntityBlock$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$OperationAbility" {
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$BoundMethod, $BoundMethod$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$BoundMethod"
import {$IPeripheralOperation, $IPeripheralOperation$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralOperation"
import {$IPeripheralFunction, $IPeripheralFunction$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$IPeripheralPlugin, $IPeripheralPlugin$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralPlugin"
import {$OperationAbility$FailReason, $OperationAbility$FailReason$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$OperationAbility$FailReason"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$IPeripheralOwner, $IPeripheralOwner$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IOwnerAbility, $IOwnerAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IOwnerAbility"
import {$IPeripheralCheck, $IPeripheralCheck$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralCheck"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OperationAbility implements $IOwnerAbility, $IPeripheralPlugin {

constructor(arg0: $IPeripheralOwner$Type)

public "performOperation"<T>(arg0: $IPeripheralOperation$Type<(T)>, arg1: T, arg2: $IPeripheralCheck$Type<(T)>, arg3: $IPeripheralFunction$Type<(T), ($MethodResult$Type)>, arg4: $Consumer$Type<(T)>, arg5: $BiConsumer$Type<($MethodResult$Type), ($OperationAbility$FailReason$Type)>): $MethodResult
public "collectConfiguration"(arg0: $Map$Type<(string), (any)>): void
public "isOnCooldown"(arg0: $IPeripheralOperation$Type<(any)>): boolean
public "getCurrentCooldown"(arg0: $IPeripheralOperation$Type<(any)>): integer
public "registerOperation"(arg0: $IPeripheralOperation$Type<(any)>): void
public "getOperationCooldown"(arg0: string): $MethodResult
public "getMethods"(): $List<($BoundMethod)>
public "getOperations"(): ($IPeripheralOperation<(any)>)[]
public "isSuitable"(arg0: $IPeripheral$Type): boolean
get "methods"(): $List<($BoundMethod)>
get "operations"(): ($IPeripheralOperation<(any)>)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationAbility$Type = ($OperationAbility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperationAbility_ = $OperationAbility$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IBasePeripheral" {
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPeripheralOwner, $IPeripheralOwner$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $IBasePeripheral<T extends $IPeripheralOwner> extends $IPeripheral {

 "isEnabled"(): boolean
 "getPeripheralOwner"(): T
 "getConnectedComputers"(): $Iterable<($IComputerAccess)>
 "equals"(arg0: $IPeripheral$Type): boolean
 "getType"(): string
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$Type): void
 "detach"(arg0: $IComputerAccess$Type): void
 "getAdditionalTypes"(): $Set<(string)>
}

export namespace $IBasePeripheral {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBasePeripheral$Type<T> = ($IBasePeripheral<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBasePeripheral_<T> = $IBasePeripheral$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$OperationAbility$FailReason" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $OperationAbility$FailReason extends $Enum<($OperationAbility$FailReason)> {
static readonly "COOLDOWN": $OperationAbility$FailReason
static readonly "NOT_ENOUGH_FUEL": $OperationAbility$FailReason
static readonly "CHECK_FAILED": $OperationAbility$FailReason


public static "values"(): ($OperationAbility$FailReason)[]
public static "valueOf"(arg0: string): $OperationAbility$FailReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationAbility$FailReason$Type = (("check_failed") | ("cooldown") | ("not_enough_fuel")) | ($OperationAbility$FailReason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperationAbility$FailReason_ = $OperationAbility$FailReason$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/$MemoryCardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseItem, $BaseItem$Type} from "packages/de/srendi/advancedperipherals/common/items/base/$BaseItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MemoryCardItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "isEnabled"(): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCardItem$Type = ($MemoryCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryCardItem_ = $MemoryCardItem$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralOperation" {
import {$IConfigHandler, $IConfigHandler$Type} from "packages/de/srendi/advancedperipherals/lib/misc/$IConfigHandler"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IPeripheralOperation<T> extends $IConfigHandler {

 "getInitialCooldown"(): integer
 "getCooldown"(arg0: T): integer
 "getCost"(arg0: T): integer
 "computerDescription"(): $Map<(string), (any)>
 "name"(): string
 "settingsPostfix"(): string
 "settingsName"(): string
 "addToConfig"(arg0: $ForgeConfigSpec$Builder$Type): void
}

export namespace $IPeripheralOperation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralOperation$Type<T> = ($IPeripheralOperation<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralOperation_<T> = $IPeripheralOperation$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/blockentities/$PlayerDetectorEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PlayerDetectorPeripheral, $PlayerDetectorPeripheral$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/peripheral/$PlayerDetectorPeripheral"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PeripheralBlockEntity, $PeripheralBlockEntity$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$PeripheralBlockEntity"

export class $PlayerDetectorEntity extends $PeripheralBlockEntity<($PlayerDetectorPeripheral)> {
 "lockKey": $LockCode

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "handleTick"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): void
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorEntity$Type = ($PlayerDetectorEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDetectorEntity_ = $PlayerDetectorEntity$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/misc/$IConfigHandler" {
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export interface $IConfigHandler {

 "name"(): string
 "settingsPostfix"(): string
 "settingsName"(): string
 "addToConfig"(arg0: $ForgeConfigSpec$Builder$Type): void
}

export namespace $IConfigHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigHandler$Type = ($IConfigHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigHandler_ = $IConfigHandler$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/base/$BaseItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
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

export class $BaseItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)
constructor()

public "isEnabled"(): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "enabled"(): boolean
get "description"(): $Component
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
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$BoundMethod" {
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$PeripheralMethod, $PeripheralMethod$Type} from "packages/dan200/computercraft/core/methods/$PeripheralMethod"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"

export class $BoundMethod {

constructor(arg0: any, arg1: string, arg2: $PeripheralMethod$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "apply"(arg0: $IComputerAccess$Type, arg1: $ILuaContext$Type, arg2: $IArguments$Type): $MethodResult
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundMethod$Type = ($BoundMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundMethod_ = $BoundMethod$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$FuelAbility" {
import {$IPeripheralPlugin, $IPeripheralPlugin$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralPlugin"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$IPeripheralOwner, $IPeripheralOwner$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner"
import {$BoundMethod, $BoundMethod$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$BoundMethod"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IOwnerAbility, $IOwnerAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IOwnerAbility"
import {$IPeripheralOperation, $IPeripheralOperation$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralOperation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FuelAbility<T extends $IPeripheralOwner> implements $IOwnerAbility, $IPeripheralPlugin {

constructor(arg0: T)

public "addFuel"(arg0: integer): void
public "collectConfiguration"(arg0: $Map$Type<(string), (any)>): void
public "getFuelLevel"(): integer
public "consumeFuel"(arg0: integer, arg1: boolean): boolean
public "reduceCooldownAccordingToConsumptionRate"(arg0: integer): integer
public "getFuelMaxCount"(): integer
public "getFuelCount"(): integer
public "getMaxFuelLevel"(): integer
public "getFuelConsumptionMultiply"(): integer
public "getFuelConsumptionRate"(): integer
public "isFuelConsumptionDisable"(): boolean
public "setFuelConsumptionRate"(arg0: integer): $MethodResult
public "getMethods"(): $List<($BoundMethod)>
public "getOperations"(): ($IPeripheralOperation<(any)>)[]
public "isSuitable"(arg0: $IPeripheral$Type): boolean
get "fuelLevel"(): integer
get "fuelMaxCount"(): integer
get "fuelCount"(): integer
get "maxFuelLevel"(): integer
get "fuelConsumptionMultiply"(): integer
get "fuelConsumptionRate"(): integer
get "fuelConsumptionDisable"(): boolean
set "fuelConsumptionRate"(value: integer)
get "methods"(): $List<($BoundMethod)>
get "operations"(): ($IPeripheralOperation<(any)>)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelAbility$Type<T> = ($FuelAbility<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelAbility_<T> = $FuelAbility$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IOwnerAbility" {
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IOwnerAbility {

 "collectConfiguration"(arg0: $Map$Type<(string), (any)>): void
}

export namespace $IOwnerAbility {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnerAbility$Type = ($IOwnerAbility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnerAbility_ = $IOwnerAbility$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/$RedstoneIntegratorBlock" {
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BaseBlockEntityBlock, $BaseBlockEntityBlock$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$BaseBlockEntityBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RedstoneIntegratorBlock extends $BaseBlockEntityBlock {
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
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

public "isSignalSource"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneIntegratorBlock$Type = ($RedstoneIntegratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneIntegratorBlock_ = $RedstoneIntegratorBlock$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/base/$BaseBlockItem" {
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

export class $BaseBlockItem extends $BlockItem {
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
constructor(arg0: $Block$Type)

public "isEnabled"(): boolean
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$Type = ($BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem_ = $BaseBlockItem$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/base/$PeripheralBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$IPeripheralTileEntity, $IPeripheralTileEntity$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralTileEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BasePeripheral, $BasePeripheral$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$BasePeripheral"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BaseContainerBlockEntity, $BaseContainerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $PeripheralBlockEntity<T extends $BasePeripheral<(any)>> extends $BaseContainerBlockEntity implements $WorldlyContainer, $MenuProvider, $IPeripheralTileEntity {
 "lockKey": $LockCode

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "clearContent"(): void
public "isEmpty"(): boolean
public "getCapability"<T1>(arg0: $Capability$Type<(T1)>, arg1: $Direction$Type): $LazyOptional<(T1)>
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "stillValid"(arg0: $Player$Type): boolean
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "invalidateCaps"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getConnectedComputers"(): $Iterable<($IComputerAccess)>
public "getPeripheralSettings"(): $CompoundTag
public "markSettingsChanged"(): void
public "getDisplayName"(): $Component
public "handleTick"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "empty"(): boolean
get "containerSize"(): integer
get "connectedComputers"(): $Iterable<($IComputerAccess)>
get "peripheralSettings"(): $CompoundTag
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralBlockEntity$Type<T> = ($PeripheralBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralBlockEntity_<T> = $PeripheralBlockEntity$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$BasePeripheral" {
import {$IBasePeripheral, $IBasePeripheral$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IBasePeripheral"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$IPeripheralOwner, $IPeripheralOwner$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$IDynamicPeripheral, $IDynamicPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IDynamicPeripheral"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BasePeripheral<O extends $IPeripheralOwner> implements $IBasePeripheral<(O)>, $IDynamicPeripheral {


public "getName"(): string
public "equals"(arg0: $IPeripheral$Type): boolean
public "getType"(): string
public "getTarget"(): any
public "attach"(arg0: $IComputerAccess$Type): void
public "detach"(arg0: $IComputerAccess$Type): void
public "getMethodNames"(): (string)[]
public "getConfiguration"(): $Map<(string), (any)>
public "getPeripheralOwner"(): O
public "getPeripheralConfiguration"(): $Map<(string), (any)>
public "getConnectedComputers"(): $Iterable<($IComputerAccess)>
public "callMethod"(arg0: $IComputerAccess$Type, arg1: $ILuaContext$Type, arg2: integer, arg3: $IArguments$Type): $MethodResult
public "isEnabled"(): boolean
public "getAdditionalTypes"(): $Set<(string)>
get "name"(): string
get "type"(): string
get "target"(): any
get "methodNames"(): (string)[]
get "configuration"(): $Map<(string), (any)>
get "peripheralOwner"(): O
get "peripheralConfiguration"(): $Map<(string), (any)>
get "connectedComputers"(): $Iterable<($IComputerAccess)>
get "enabled"(): boolean
get "additionalTypes"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePeripheral$Type<O> = ($BasePeripheral<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePeripheral_<O> = $BasePeripheral$Type<(O)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/$APBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BaseBlockItem, $BaseBlockItem$Type} from "packages/de/srendi/advancedperipherals/common/items/base/$BaseBlockItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $APBlockItem extends $BaseBlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $Supplier$Type<(boolean)>)
constructor(arg0: $Block$Type, arg1: $Supplier$Type<(boolean)>)

public "isEnabled"(): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APBlockItem$Type = ($APBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APBlockItem_ = $APBlockItem$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$PeripheralOwnerAbility" {
import {$FuelAbility, $FuelAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$FuelAbility"
import {$OperationAbility, $OperationAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$OperationAbility"

export class $PeripheralOwnerAbility<T> {
static readonly "FUEL": $PeripheralOwnerAbility<($FuelAbility<(any)>)>
static readonly "OPERATION": $PeripheralOwnerAbility<($OperationAbility)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralOwnerAbility$Type<T> = ($PeripheralOwnerAbility<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralOwnerAbility_<T> = $PeripheralOwnerAbility$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/util/$Pair" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $Pair<T, V> {

constructor(arg0: T, arg1: V)

public static "of"<T, V>(arg0: T, arg1: V): $Pair<(T), (V)>
public "reduce"<R>(arg0: $BiFunction$Type<(T), (V), (R)>): R
public "getRight"(): V
public "getLeft"(): T
public "mapBoth"<T1, V1>(arg0: $BiFunction$Type<(T), (V), ($Pair$Type<(T1), (V1)>)>): $Pair<(T1), (V1)>
public "mapRight"<V1>(arg0: $Function$Type<(V), (V1)>): $Pair<(T), (V1)>
public "mapLeft"<T1>(arg0: $Function$Type<(T), (T1)>): $Pair<(T1), (V)>
public "ignoreRight"<V1>(): $Pair<(T), (V1)>
public "ifLeftPresent"(arg0: $Consumer$Type<(T)>): void
public "leftPresent"(): boolean
public "rightPresent"(): boolean
public "ifRightPresent"(arg0: $Consumer$Type<(V)>): void
public static "onlyRight"<T, V>(arg0: V): $Pair<(T), (V)>
public static "onlyLeft"<T, V>(arg0: T): $Pair<(T), (V)>
public "ignoreLeft"<T1>(): $Pair<(T1), (V)>
get "right"(): V
get "left"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<T, V> = ($Pair<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<T, V> = $Pair$Type<(T), (V)>;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralCheck" {
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"

export interface $IPeripheralCheck<T> {

 "check"(arg0: T): $MethodResult
 "checkAlso"(arg0: $IPeripheralCheck$Type<(T)>): $IPeripheralCheck<(T)>

(arg0: T): $MethodResult
}

export namespace $IPeripheralCheck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralCheck$Type<T> = ($IPeripheralCheck<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralCheck_<T> = $IPeripheralCheck$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/lib/metaphysics/$IFeedableAutomataCore" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFeedableAutomataCore {

}

export namespace $IFeedableAutomataCore {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFeedableAutomataCore$Type = ($IFeedableAutomataCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFeedableAutomataCore_ = $IFeedableAutomataCore$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/$PlayerDetectorBlock" {
import {$PlayerDetectorEntity, $PlayerDetectorEntity$Type} from "packages/de/srendi/advancedperipherals/common/blocks/blockentities/$PlayerDetectorEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$APBlockEntityBlock, $APBlockEntityBlock$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$APBlockEntityBlock"

export class $PlayerDetectorBlock extends $APBlockEntityBlock<($PlayerDetectorEntity)> {
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
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
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
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
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralTileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"

export interface $IPeripheralTileEntity {

 "handleTick"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): void
 "getPeripheralSettings"(): $CompoundTag
 "markSettingsChanged"(): void
}

export namespace $IPeripheralTileEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralTileEntity$Type = ($IPeripheralTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralTileEntity_ = $IPeripheralTileEntity$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/base/$IHarvestableBlock" {
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IHarvestableBlock {

 "getHarvestTag"(): $TagKey<($Block)>
 "getToolTag"(): $TagKey<($Block)>

(): $TagKey<($Block)>
}

export namespace $IHarvestableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHarvestableBlock$Type = ($IHarvestableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHarvestableBlock_ = $IHarvestableBlock$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/base/$APBlockEntityBlock" {
import {$BaseBlockEntityBlock, $BaseBlockEntityBlock$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$BaseBlockEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $APBlockEntityBlock<T extends $BlockEntity> extends $BaseBlockEntityBlock {
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>, arg1: $BlockBehaviour$Properties$Type, arg2: boolean)
constructor(arg0: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>, arg1: boolean)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APBlockEntityBlock$Type<T> = ($APBlockEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APBlockEntityBlock_<T> = $APBlockEntityBlock$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/peripheral/$PlayerDetectorPeripheral" {
import {$TurtleSide, $TurtleSide$Type} from "packages/dan200/computercraft/api/turtle/$TurtleSide"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$BasePeripheral, $BasePeripheral$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$BasePeripheral"
import {$IPeripheralOwner, $IPeripheralOwner$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IPocketAccess, $IPocketAccess$Type} from "packages/dan200/computercraft/api/pocket/$IPocketAccess"
import {$ITurtleAccess, $ITurtleAccess$Type} from "packages/dan200/computercraft/api/turtle/$ITurtleAccess"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$PeripheralBlockEntity, $PeripheralBlockEntity$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$PeripheralBlockEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlayerDetectorPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": string

constructor(arg0: $IPocketAccess$Type)
constructor(arg0: $ITurtleAccess$Type, arg1: $TurtleSide$Type)
constructor(arg0: $PeripheralBlockEntity$Type<(any)>)

public "isEnabled"(): boolean
public "getPlayersInRange"(arg0: integer): $List<(string)>
public "isPlayersInCoords"(arg0: $Map$Type<(any), (any)>, arg1: $Map$Type<(any), (any)>): boolean
public "isPlayersInRange"(arg0: integer): boolean
public "isPlayerInCoords"(arg0: $Map$Type<(any), (any)>, arg1: $Map$Type<(any), (any)>, arg2: string): boolean
public "getPlayersInCubic"(arg0: integer, arg1: integer, arg2: integer): $List<(string)>
public "isPlayersInCubic"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getPlayersInCoords"(arg0: $Map$Type<(any), (any)>, arg1: $Map$Type<(any), (any)>): $MethodResult
public "getOnlinePlayers"(): (string)[]
public "isPlayerInRange"(arg0: integer, arg1: string): boolean
public "getPlayerPos"(arg0: $IArguments$Type): $Map<(string), (any)>
public "isPlayerInCubic"(arg0: integer, arg1: integer, arg2: integer, arg3: string): boolean
get "enabled"(): boolean
get "onlinePlayers"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorPeripheral$Type = ($PlayerDetectorPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDetectorPeripheral_ = $PlayerDetectorPeripheral$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/$WeakAutomataCore" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IFeedableAutomataCore, $IFeedableAutomataCore$Type} from "packages/de/srendi/advancedperipherals/lib/metaphysics/$IFeedableAutomataCore"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$APItem, $APItem$Type} from "packages/de/srendi/advancedperipherals/common/items/$APItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WeakAutomataCore extends $APItem implements $IFeedableAutomataCore {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)
constructor()

public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakAutomataCore$Type = ($WeakAutomataCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeakAutomataCore_ = $WeakAutomataCore$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PeripheralOwnerAbility, $PeripheralOwnerAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$PeripheralOwnerAbility"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IPeripheralOperation, $IPeripheralOperation$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralOperation"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IOwnerAbility, $IOwnerAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IOwnerAbility"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$APFakePlayer, $APFakePlayer$Type} from "packages/de/srendi/advancedperipherals/common/util/fakeplayer/$APFakePlayer"

export interface $IPeripheralOwner {

 "getOwner"(): $Player
 "move"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "getLevel"(): $Level
 "getOrientation"(): $FrontAndTop
 "getFacing"(): $Direction
 "getCustomName"(): string
 "markDataStorageDirty"(): void
 "getPos"(): $BlockPos
 "getDataStorage"(): $CompoundTag
 "destroyUpgrade"(): void
 "getToolInMainHand"(): $ItemStack
 "storeItem"(arg0: $ItemStack$Type): $ItemStack
 "attachAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$Type<(T)>, arg1: T): void
 "attachOperation"(arg0: $Collection$Type<($IPeripheralOperation$Type<(any)>)>): void
 "attachOperation"(...arg0: ($IPeripheralOperation$Type<(any)>)[]): void
 "getAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$Type<(T)>): T
 "getAbilities"(): $Collection<($IOwnerAbility)>
 "isMovementPossible"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "withPlayer"<T>(arg0: $Function$Type<($APFakePlayer$Type), (T)>): T
}

export namespace $IPeripheralOwner {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralOwner$Type = ($IPeripheralOwner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralOwner_ = $IPeripheralOwner$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/base/$BaseBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IHarvestableBlock, $IHarvestableBlock$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$IHarvestableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BaseBlock extends $Block implements $IHarvestableBlock {
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $TagKey$Type<($Block$Type)>)
constructor(arg0: $TagKey$Type<($Block$Type)>)
constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getHarvestTag"(): $TagKey<($Block)>
public "getToolTag"(): $TagKey<($Block)>
get "harvestTag"(): $TagKey<($Block)>
get "toolTag"(): $TagKey<($Block)>
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
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPeripheralFunction<T, R> {

 "apply"(arg0: T): R

(arg0: T): R
}

export namespace $IPeripheralFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralFunction$Type<T, R> = ($IPeripheralFunction<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralFunction_<T, R> = $IPeripheralFunction$Type<(T), (R)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/$APItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BaseItem, $BaseItem$Type} from "packages/de/srendi/advancedperipherals/common/items/base/$BaseItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $APItem extends $BaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<(boolean)>)
constructor(arg0: $Supplier$Type<(boolean)>)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APItem$Type = ($APItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APItem_ = $APItem$Type;
}}
