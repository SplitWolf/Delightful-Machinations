declare module "packages/owmii/powah/item/$BindingCardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBase, $ItemBase$Type} from "packages/owmii/powah/lib/item/$ItemBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BindingCardItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type, isMultiDim: boolean)

public "isMultiDim"(stack: $ItemStack$Type): boolean
public "getPlayer"(level: $ServerLevel$Type, stack: $ItemStack$Type): $Optional<($ServerPlayer)>
public "use"(worldIn: $Level$Type, playerIn: $Player$Type, handIn: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(stack: $ItemStack$Type, playerIn: $Player$Type, target: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BindingCardItem$Type = ($BindingCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BindingCardItem_ = $BindingCardItem$Type;
}}
declare module "packages/owmii/powah/api/energy/endernetwork/$IEnderExtender" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEnderExtender {

 "getExtendedCapacity"(arg0: $ItemStack$Type): long
 "getExtendedEnergy"(arg0: $ItemStack$Type): long
}

export namespace $IEnderExtender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnderExtender$Type = ($IEnderExtender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnderExtender_ = $IEnderExtender$Type;
}}
declare module "packages/owmii/powah/lib/item/$IItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemModelType, $ItemModelType$Type} from "packages/owmii/powah/lib/data/$ItemModelType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItem {

 "getItemModelType"(): $ItemModelType
 "oneTimeInfo"(player: $Player$Type, stack: $ItemStack$Type, component: $Component$Type): void
}

export namespace $IItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItem$Type = ($IItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItem_ = $IItem$Type;
}}
declare module "packages/owmii/powah/block/ender/$EnderGateBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnderConfig, $EnderConfig$Type} from "packages/owmii/powah/config/v2/types/$EnderConfig"

export class $EnderGateBlock extends $AbstractEnergyBlock<($EnderConfig), ($EnderGateBlock)> {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "getConfig"(): $EnderConfig
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
get "config"(): $EnderConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderGateBlock$Type = ($EnderGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderGateBlock_ = $EnderGateBlock$Type;
}}
declare module "packages/owmii/powah/lib/block/$AbstractGeneratorBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GeneratorConfig, $GeneratorConfig$Type} from "packages/owmii/powah/config/v2/types/$GeneratorConfig"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Energy$Item, $Energy$Item$Type} from "packages/owmii/powah/lib/logistics/energy/$Energy$Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Transfer, $Transfer$Type} from "packages/owmii/powah/lib/logistics/$Transfer"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InfoBox, $InfoBox$Type} from "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"

export class $AbstractGeneratorBlock<B extends $AbstractGeneratorBlock<(B)>> extends $AbstractEnergyBlock<($GeneratorConfig), (B)> {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type)
constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "additionalEnergyInfo"(stack: $ItemStack$Type, energy: $Energy$Item$Type, tooltip: $List$Type<($Component$Type)>): void
public "getTransferType"(): $Transfer
public "getInfoBox"(stack: $ItemStack$Type, box: $InfoBox$Type): $InfoBox
get "transferType"(): $Transfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGeneratorBlock$Type<B> = ($AbstractGeneratorBlock<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGeneratorBlock_<B> = $AbstractGeneratorBlock$Type<(B)>;
}}
declare module "packages/owmii/powah/item/$CapacitorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBase, $ItemBase$Type} from "packages/owmii/powah/lib/item/$ItemBase"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapacitorItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorItem$Type = ($CapacitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacitorItem_ = $CapacitorItem$Type;
}}
declare module "packages/owmii/powah/config/$IConfigHolder" {
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export interface $IConfigHolder<V extends ($Enum<(V)>) & ($IVariant<(V)>), C> {

 "getConfig"(): C

(): C
}

export namespace $IConfigHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigHolder$Type<V, C> = ($IConfigHolder<(V), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigHolder_<V, C> = $IConfigHolder$Type<(V), (C)>;
}}
declare module "packages/owmii/powah/block/energizing/$EnergizingRodTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EnergyConfig, $EnergyConfig$Type} from "packages/owmii/powah/config/v2/types/$EnergyConfig"
import {$AbstractEnergyStorage, $AbstractEnergyStorage$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyStorage"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EnergizingOrbTile, $EnergizingOrbTile$Type} from "packages/owmii/powah/block/energizing/$EnergizingOrbTile"
import {$EnergizingRodBlock, $EnergizingRodBlock$Type} from "packages/owmii/powah/block/energizing/$EnergizingRodBlock"
import {$Redstone, $Redstone$Type} from "packages/owmii/powah/lib/logistics/$Redstone"
import {$Ticker, $Ticker$Type} from "packages/owmii/powah/lib/util/$Ticker"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $EnergizingRodTile extends $AbstractEnergyStorage<($EnergyConfig), ($EnergizingRodBlock)> {
readonly "coolDown": $Ticker
 "ticks": integer

constructor(pos: $BlockPos$Type, state: $BlockState$Type, variant: $Tier$Type)
constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public "getRenderBoundingBox"(): $AABB
public "getOrbPos"(): $BlockPos
public "hasOrb"(): boolean
public "setOrbPos"(orbPos: $BlockPos$Type): void
public "getOrbTile"(): $EnergizingOrbTile
public "readSync"(nbt: $CompoundTag$Type): void
public "writeSync"(nbt: $CompoundTag$Type): $CompoundTag
public "isEnergyPresent"(side: $Direction$Type): boolean
public "keepEnergy"(): boolean
public "setRedstoneMode"(arg0: $Redstone$Type): void
public "getRedstoneMode"(): $Redstone
get "renderBoundingBox"(): $AABB
get "orbPos"(): $BlockPos
set "orbPos"(value: $BlockPos$Type)
get "orbTile"(): $EnergizingOrbTile
set "redstoneMode"(value: $Redstone$Type)
get "redstoneMode"(): $Redstone
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizingRodTile$Type = ($EnergizingRodTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizingRodTile_ = $EnergizingRodTile$Type;
}}
declare module "packages/owmii/powah/lib/registry/$IVariant" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export interface $IVariant<V extends ($Enum<(V)>) & ($IVariant<(V)>)> {

 "getName"(): string
 "isEmpty"(): boolean
 "write"(nbt: $CompoundTag$Type, v: V, key: string): $CompoundTag
 "read"(nbt: $CompoundTag$Type, key: string): V
 "ordinal"(): integer
 "getVariants"(): (V)[]
}

export namespace $IVariant {
function getEmpty<T>(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariant$Type<V> = ($IVariant<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariant_<V> = $IVariant$Type<(V)>;
}}
declare module "packages/owmii/powah/lib/data/$ItemModelType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ItemModelType extends $Enum<($ItemModelType)> {
static readonly "GENERATED": $ItemModelType
static readonly "HANDHELD": $ItemModelType
static readonly "BLOCK": $ItemModelType
static readonly "CUSTOM": $ItemModelType


public static "values"(): ($ItemModelType)[]
public static "valueOf"(name: string): $ItemModelType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelType$Type = (("generated") | ("custom") | ("handheld") | ("block")) | ($ItemModelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelType_ = $ItemModelType$Type;
}}
declare module "packages/owmii/powah/lib/item/$ItemBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IItem, $IItem$Type} from "packages/owmii/powah/lib/item/$IItem"
import {$ItemModelType, $ItemModelType$Type} from "packages/owmii/powah/lib/data/$ItemModelType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBase extends $Item implements $IItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "onItemUse"(world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, side: $Direction$Type, hit: $Vec3$Type): $InteractionResult
public "onItemUseFirst"(stack: $ItemStack$Type, context: $UseOnContext$Type): $InteractionResult
public "onItemUseFirst"(stack: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, side: $Direction$Type, hit: $Vec3$Type): $InteractionResult
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "getItemModelType"(): $ItemModelType
public "oneTimeInfo"(player: $Player$Type, stack: $ItemStack$Type, component: $Component$Type): void
get "itemModelType"(): $ItemModelType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBase$Type = ($ItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBase_ = $ItemBase$Type;
}}
declare module "packages/owmii/powah/lib/logistics/fluid/$FluidTank" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"

export class $FluidTank {

constructor(capacity: long)
constructor(capacity: long, validator: $Predicate$Type<($FluidStack$Type)>)

public "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean): $FluidStack
public "getCapacity"(): long
public "setCapacity"(capacity: long): $FluidTank
public "isEmpty"(): boolean
public "fill"(resource: $FluidStack$Type, simulate: boolean): long
public "getSpace"(): long
public "getFluidAmount"(): long
public "setFluid"(stack: $FluidStack$Type): void
public "getFluid"(): $FluidStack
public "getFluidInTank"(tank: integer): $FluidStack
public "getTanks"(): integer
public "getTankCapacity"(tank: integer): long
public "isFluidValid"(tank: integer, stack: $FluidStack$Type): boolean
public "isFluidValid"(stack: $FluidStack$Type): boolean
public "readFromNBT"(nbt: $CompoundTag$Type): $FluidTank
public "writeToNBT"(nbt: $CompoundTag$Type): $CompoundTag
public "setValidator"(validator: $Predicate$Type<($FluidStack$Type)>): $FluidTank
get "capacity"(): long
set "capacity"(value: long)
get "empty"(): boolean
get "space"(): long
get "fluidAmount"(): long
set "fluid"(value: $FluidStack$Type)
get "fluid"(): $FluidStack
get "tanks"(): integer
set "validator"(value: $Predicate$Type<($FluidStack$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTank$Type = ($FluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTank_ = $FluidTank$Type;
}}
declare module "packages/owmii/powah/lib/logistics/inventory/$ItemStackHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackHandler {

constructor(stacks: $NonNullList$Type<($ItemStack$Type)>)
constructor(size: integer)
constructor()

public "setSize"(size: integer): void
public "getSlots"(): integer
public "getSlotLimit"(slot: integer): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getStackInSlot"(slot: integer): $ItemStack
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
set "size"(value: integer)
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHandler$Type = ($ItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackHandler_ = $ItemStackHandler$Type;
}}
declare module "packages/owmii/powah/lib/block/$AbstractEnergyBlock" {
import {$IConfigHolder, $IConfigHolder$Type} from "packages/owmii/powah/config/$IConfigHolder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Energy$Item, $Energy$Item$Type} from "packages/owmii/powah/lib/logistics/energy/$Energy$Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEnergyItemProvider, $IEnergyItemProvider$Type} from "packages/owmii/powah/lib/item/$IEnergyItemProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Transfer, $Transfer$Type} from "packages/owmii/powah/lib/logistics/$Transfer"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InfoBox, $InfoBox$Type} from "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/owmii/powah/lib/block/$AbstractBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InfoBox$IInfoBoxHolder, $InfoBox$IInfoBoxHolder$Type} from "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox$IInfoBoxHolder"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$IEnergyConfig, $IEnergyConfig$Type} from "packages/owmii/powah/config/$IEnergyConfig"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractEnergyBlock<C extends $IEnergyConfig<($Tier)>, B extends $AbstractEnergyBlock<(C), (B)>> extends $AbstractBlock<($Tier), (B)> implements $IConfigHolder<($Tier), (C)>, $InfoBox$IInfoBoxHolder, $IEnergyItemProvider {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type)
constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "additionalEnergyInfo"(stack: $ItemStack$Type, energy: $Energy$Item$Type, tooltip: $List$Type<($Component$Type)>): void
public "addEnergyTransferInfo"(stack: $ItemStack$Type, storage: $Energy$Item$Type, tooltip: $List$Type<($Component$Type)>): void
public "getAnalogOutputSignal"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getTransferType"(): $Transfer
public "addEnergyInfo"(stack: $ItemStack$Type, storage: $Energy$Item$Type, tooltip: $List$Type<($Component$Type)>): void
public "getInfoBox"(stack: $ItemStack$Type, box: $InfoBox$Type): $InfoBox
public "isChargeable"(stack: $ItemStack$Type): boolean
public "getConfig"(): C
get "transferType"(): $Transfer
get "config"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEnergyBlock$Type<C, B> = ($AbstractEnergyBlock<(C), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEnergyBlock_<C, B> = $AbstractEnergyBlock$Type<(C), (B)>;
}}
declare module "packages/owmii/powah/block/reactor/$ReactorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Energy$Item, $Energy$Item$Type} from "packages/owmii/powah/lib/logistics/energy/$Energy$Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnergyBlockItem, $EnergyBlockItem$Type} from "packages/owmii/powah/lib/item/$EnergyBlockItem"
import {$InfoBox, $InfoBox$Type} from "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$AbstractGeneratorBlock, $AbstractGeneratorBlock$Type} from "packages/owmii/powah/lib/block/$AbstractGeneratorBlock"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GeneratorConfig, $GeneratorConfig$Type} from "packages/owmii/powah/config/v2/types/$GeneratorConfig"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $ReactorBlock extends $AbstractGeneratorBlock<($ReactorBlock)> {
static readonly "CORE": $BooleanProperty
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"<T extends $AbstractTileEntity<(any), (any)>>(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "getConfig"(): $GeneratorConfig
public "additionalEnergyInfo"(stack: $ItemStack$Type, energy: $Energy$Item$Type, tooltip: $List$Type<($Component$Type)>): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getBlockItem"(properties: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>): $EnergyBlockItem<(any), (any)>
public "getInfoBox"(stack: $ItemStack$Type, box: $InfoBox$Type): $InfoBox
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
get "config"(): $GeneratorConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorBlock$Type = ($ReactorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorBlock_ = $ReactorBlock$Type;
}}
declare module "packages/owmii/powah/lib/util/$Ticker" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $Ticker {

constructor(max: double)

public "add"(ticks: double): void
public "isEmpty"(): boolean
public static "empty"(): $Ticker
public "write"(compound: $CompoundTag$Type, key: string): void
public "read"(compound: $CompoundTag$Type, key: string): void
public "reset"(): void
public "setAll"(ticks: double): void
public "getMax"(): double
public "getEmpty"(): double
public "back"(): void
public "back"(value: double): void
public "onward"(): void
public "ended"(): boolean
public "subSized"(): float
public "getTicks"(): double
public "setMax"(max: double): void
public "perCent"(): double
public "setTicks"(ticks: double): void
public static "delayed"(delay: double): boolean
set "all"(value: double)
get "max"(): double
get "ticks"(): double
set "max"(value: double)
set "ticks"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ticker$Type = ($Ticker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ticker_ = $Ticker$Type;
}}
declare module "packages/owmii/powah/lib/item/$EnergyItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VarItem, $VarItem$Type} from "packages/owmii/powah/lib/item/$VarItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IEnergyItemProvider, $IEnergyItemProvider$Type} from "packages/owmii/powah/lib/item/$IEnergyItemProvider"
import {$IEnergyContainingItem$Info, $IEnergyContainingItem$Info$Type} from "packages/owmii/powah/lib/item/$IEnergyContainingItem$Info"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InfoBox, $InfoBox$Type} from "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InfoBox$IInfoBoxHolder, $InfoBox$IInfoBoxHolder$Type} from "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox$IInfoBoxHolder"
import {$IEnergyConfig, $IEnergyConfig$Type} from "packages/owmii/powah/config/$IEnergyConfig"
import {$IEnergyContainingItem, $IEnergyContainingItem$Type} from "packages/owmii/powah/lib/item/$IEnergyContainingItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyItem<V extends ($Enum<(V)>) & ($IVariant<(V)>), C extends $IEnergyConfig<(V)>, I extends $EnergyItem<(V), (C), (I)>> extends $VarItem<(V), (I)> implements $InfoBox$IInfoBoxHolder, $IEnergyItemProvider, $IEnergyContainingItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type, variant: V)
constructor(properties: $Item$Properties$Type)

public "getConfig"(): $IEnergyConfig<(V)>
public "getEnergyInfo"(): $IEnergyContainingItem$Info
public "getInfoBox"(stack: $ItemStack$Type, box: $InfoBox$Type): $InfoBox
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
public "isChargeable"(stack: $ItemStack$Type): boolean
get "config"(): $IEnergyConfig<(V)>
get "energyInfo"(): $IEnergyContainingItem$Info
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyItem$Type<V, C, I> = ($EnergyItem<(V), (C), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyItem_<V, C, I> = $EnergyItem$Type<(V), (C), (I)>;
}}
declare module "packages/owmii/powah/config/v2/types/$GeneratorConfig" {
import {$TieredEnergyValues, $TieredEnergyValues$Type} from "packages/owmii/powah/config/v2/values/$TieredEnergyValues"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$IEnergyConfig, $IEnergyConfig$Type} from "packages/owmii/powah/config/$IEnergyConfig"

export class $GeneratorConfig implements $IEnergyConfig<($Tier)> {
 "capacities": $TieredEnergyValues
 "transfer_rates": $TieredEnergyValues
 "generation_rates": $TieredEnergyValues

constructor(capacities: $TieredEnergyValues$Type, transfer_rates: $TieredEnergyValues$Type, generation_rates: $TieredEnergyValues$Type)

public "getCapacity"(variant: $Tier$Type): long
public "getGeneration"(variant: $Tier$Type): long
public "getTransfer"(variant: $Tier$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorConfig$Type = ($GeneratorConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratorConfig_ = $GeneratorConfig$Type;
}}
declare module "packages/owmii/powah/config/v2/values/$TieredEnergyValues" {
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"

export class $TieredEnergyValues {
 "starter": long
 "basic": long
 "hardened": long
 "blazing": long
 "niotic": long
 "spirited": long
 "nitro": long

constructor(starter: long, basic: long, hardened: long, blazing: long, niotic: long, spirited: long, nitro: long)

public "get"(tier: $Tier$Type): long
public "copy"(factor: long): $TieredEnergyValues
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredEnergyValues$Type = ($TieredEnergyValues);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredEnergyValues_ = $TieredEnergyValues$Type;
}}
declare module "packages/owmii/powah/block/energizing/$EnergizingOrbBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/owmii/powah/lib/block/$AbstractBlock"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$IVariant$Single, $IVariant$Single$Type} from "packages/owmii/powah/lib/registry/$IVariant$Single"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$WrenchMode, $WrenchMode$Type} from "packages/owmii/powah/api/wrench/$WrenchMode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IHud, $IHud$Type} from "packages/owmii/powah/lib/client/handler/$IHud"
import {$IWrenchable, $IWrenchable$Type} from "packages/owmii/powah/api/wrench/$IWrenchable"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $EnergizingOrbBlock extends $AbstractBlock<($IVariant$Single), ($EnergizingOrbBlock)> implements $SimpleWaterloggedBlock, $IWrenchable, $IHud {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type)

public "search"(worldIn: $Level$Type, pos: $BlockPos$Type): void
public "getAnalogOutputSignal"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type): integer
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "onWrench"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, side: $Direction$Type, mode: $WrenchMode$Type, hit: $Vec3$Type): boolean
public "renderHud"(gui: $GuiGraphics$Type, state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, result: $BlockHitResult$Type, te: $BlockEntity$Type): boolean
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
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
export type $EnergizingOrbBlock$Type = ($EnergizingOrbBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizingOrbBlock_ = $EnergizingOrbBlock$Type;
}}
declare module "packages/owmii/powah/block/hopper/$EnergyHopperBlock" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$EnergyBlockItem, $EnergyBlockItem$Type} from "packages/owmii/powah/lib/item/$EnergyBlockItem"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$ChargingConfig, $ChargingConfig$Type} from "packages/owmii/powah/config/v2/types/$ChargingConfig"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnergyHopperBlock extends $AbstractEnergyBlock<($ChargingConfig), ($EnergyHopperBlock)> {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"<T extends $AbstractTileEntity<(any), (any)>>(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "getConfig"(): $ChargingConfig
public "getBlockItem"(properties: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>): $EnergyBlockItem<(any), (any)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
get "config"(): $ChargingConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyHopperBlock$Type = ($EnergyHopperBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyHopperBlock_ = $EnergyHopperBlock$Type;
}}
declare module "packages/owmii/powah/block/$Tier" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Tier extends $Enum<($Tier)> implements $IVariant<($Tier)> {
static readonly "STARTER": $Tier
static readonly "BASIC": $Tier
static readonly "HARDENED": $Tier
static readonly "BLAZING": $Tier
static readonly "NIOTIC": $Tier
static readonly "SPIRITED": $Tier
static readonly "NITRO": $Tier
static readonly "CREATIVE": $Tier


public static "values"(): ($Tier)[]
public static "valueOf"(name: string): $Tier
public "getColor"(): integer
public static "getNormalVariants"(): ($Tier)[]
public "getName"(): string
public "isEmpty"(): boolean
public "write"(nbt: $CompoundTag$Type, v: $Tier$Type, key: string): $CompoundTag
public "read"(nbt: $CompoundTag$Type, key: string): $Tier
public "ordinal"(): integer
public static "getEmpty"<T extends $IVariant<(any)>>(): T
get "color"(): integer
get "normalVariants"(): ($Tier)[]
get "name"(): string
get "empty"(): boolean
get "empty"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tier$Type = (("blazing") | ("starter") | ("spirited") | ("nitro") | ("niotic") | ("basic") | ("hardened") | ("creative")) | ($Tier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tier_ = $Tier$Type;
}}
declare module "packages/owmii/powah/item/$LensOfEnderItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemBase, $ItemBase$Type} from "packages/owmii/powah/lib/item/$ItemBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LensOfEnderItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "onItemUseFirst"(stack: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, side: $Direction$Type, hit: $Vec3$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LensOfEnderItem$Type = ($LensOfEnderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LensOfEnderItem_ = $LensOfEnderItem$Type;
}}
declare module "packages/owmii/powah/lib/client/handler/$IHud" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IHud {

 "renderHud"(arg0: $GuiGraphics$Type, arg1: $BlockState$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Player$Type, arg5: $BlockHitResult$Type, arg6: $BlockEntity$Type): boolean

(arg0: $GuiGraphics$Type, arg1: $BlockState$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Player$Type, arg5: $BlockHitResult$Type, arg6: $BlockEntity$Type): boolean
}

export namespace $IHud {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHud$Type = ($IHud);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHud_ = $IHud$Type;
}}
declare module "packages/owmii/powah/lib/item/$VarItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IVariantEntry, $IVariantEntry$Type} from "packages/owmii/powah/lib/registry/$IVariantEntry"
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBase, $ItemBase$Type} from "packages/owmii/powah/lib/item/$ItemBase"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VarItem<V extends ($Enum<(V)>) & ($IVariant<(V)>), I extends $VarItem<(V), (I)>> extends $ItemBase implements $IVariantEntry<(V), (I)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type, variant: V)
constructor(properties: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VarItem$Type<V, I> = ($VarItem<(V), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VarItem_<V, I> = $VarItem$Type<(V), (I)>;
}}
declare module "packages/owmii/powah/item/$EnergyCellItem" {
import {$EnergyConfig, $EnergyConfig$Type} from "packages/owmii/powah/config/v2/types/$EnergyConfig"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IEnderExtender, $IEnderExtender$Type} from "packages/owmii/powah/api/energy/endernetwork/$IEnderExtender"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnergyBlockItem, $EnergyBlockItem$Type} from "packages/owmii/powah/lib/item/$EnergyBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$EnergyCellBlock, $EnergyCellBlock$Type} from "packages/owmii/powah/block/energycell/$EnergyCellBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyCellItem extends $EnergyBlockItem<($EnergyConfig), ($EnergyCellBlock)> implements $IEnderExtender {
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

constructor(block: $EnergyCellBlock$Type, properties: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>)

public "getExtendedCapacity"(stack: $ItemStack$Type): long
public "getExtendedEnergy"(stack: $ItemStack$Type): long
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isFoil"(stack: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCellItem$Type = ($EnergyCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCellItem_ = $EnergyCellItem$Type;
}}
declare module "packages/owmii/powah/lib/logistics/inventory/$Inventory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IInventoryHolder, $IInventoryHolder$Type} from "packages/owmii/powah/lib/block/$IInventoryHolder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Stacks, $Stacks$Type} from "packages/owmii/powah/lib/item/$Stacks"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/owmii/powah/lib/logistics/inventory/$ItemStackHandler"

export class $Inventory extends $ItemStackHandler {

constructor(size: integer)
constructor(stacks: $Stacks$Type, tile: $IInventoryHolder$Type)
constructor(stacks: $Stacks$Type)

public "drop"(world: $Level$Type, pos: $BlockPos$Type): void
public "drop"(index: integer, world: $Level$Type, pos: $BlockPos$Type): void
public "add"(size: integer): $Inventory
public "clear"(): void
public "isEmpty"(): boolean
public "isBlank"(): boolean
public "set"(size: integer): $Inventory
public static "create"<I extends ($AbstractTileEntity<(any), (any)>) & ($IInventoryHolder)>(size: integer, tile: I): $Inventory
public static "create"(size: integer): $Inventory
public "getFirst"(): $ItemStack
public "getLast"(): $ItemStack
public "getLast"(count: integer): $Stacks
public "isFull"(): boolean
public "onContentsChanged"(slot: integer): void
public "extractItemFromSlot"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getStacks"(): $Stacks
public "removeNext"(): $ItemStack
public "addNext"(stack: $ItemStack$Type): $ItemStack
public "getNonEmptyStacks"(): $List<($ItemStack)>
public "isSlotEmpty"(slot: integer): boolean
public "setSendUpdates"(sendUpdates: boolean): void
public "setSlotEmpty"(slot: integer): $ItemStack
public static "calcRedstone"(inv: $ItemStackHandler$Type): integer
public "getPlatformWrapper"(): any
public "canPut"(outputs: $Stacks$Type, slots: $Stacks$Type): $Stacks
public "canPut"(outputs: $Stacks$Type, ...slots: (integer)[]): $Stacks
public "fromSlotArray"(...slots: (integer)[]): $Stacks
public "getLastSlot"(): integer
public "hasEmptySlot"(): boolean
public "getSlotLimit"(slot: integer): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean, ...ex: (integer)[]): $ItemStack
public "setTile"(tile: $IInventoryHolder$Type): void
public static "createBlank"(): $Inventory
public static "createBlank"<I extends ($AbstractTileEntity<(any), (any)>) & ($IInventoryHolder)>(tile: I): $Inventory
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "canExtract"(slot: integer, stack: $ItemStack$Type): boolean
get "empty"(): boolean
get "blank"(): boolean
get "first"(): $ItemStack
get "last"(): $ItemStack
get "full"(): boolean
get "stacks"(): $Stacks
get "nonEmptyStacks"(): $List<($ItemStack)>
set "sendUpdates"(value: boolean)
set "slotEmpty"(value: integer)
get "platformWrapper"(): any
get "lastSlot"(): integer
set "tile"(value: $IInventoryHolder$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Inventory$Type = ($Inventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Inventory_ = $Inventory$Type;
}}
declare module "packages/owmii/powah/lib/logistics/inventory/$RecipeWrapper" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/owmii/powah/lib/logistics/inventory/$ItemStackHandler"

export class $RecipeWrapper implements $Container {

constructor(inv: $ItemStackHandler$Type)

public "removeItem"(slot: integer, count: integer): $ItemStack
public "clearContent"(): void
public "isEmpty"(): boolean
public "canPlaceItem"(slot: integer, stack: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public "startOpen"(player: $Player$Type): void
public "stillValid"(player: $Player$Type): boolean
public "stopOpen"(player: $Player$Type): void
public "setItem"(slot: integer, stack: $ItemStack$Type): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(slot: integer): $ItemStack
public "removeItemNoUpdate"(index: integer): $ItemStack
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
export type $RecipeWrapper$Type = ($RecipeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeWrapper_ = $RecipeWrapper$Type;
}}
declare module "packages/owmii/powah/config/v2/types/$CableConfig" {
import {$TieredEnergyValues, $TieredEnergyValues$Type} from "packages/owmii/powah/config/v2/values/$TieredEnergyValues"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$IEnergyConfig, $IEnergyConfig$Type} from "packages/owmii/powah/config/$IEnergyConfig"

export class $CableConfig implements $IEnergyConfig<($Tier)> {
 "transfer_rates": $TieredEnergyValues

constructor(transfer_rates: $TieredEnergyValues$Type)

public "getCapacity"(variant: $Tier$Type): long
public "getTransfer"(variant: $Tier$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableConfig$Type = ($CableConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableConfig_ = $CableConfig$Type;
}}
declare module "packages/owmii/powah/lib/item/$IEnergyContainingItem$Info" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $IEnergyContainingItem$Info extends $Record {

constructor(capacity: long, maxInsert: long, maxExtract: long)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "capacity"(): long
public "maxExtract"(): long
public "maxInsert"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyContainingItem$Info$Type = ($IEnergyContainingItem$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyContainingItem$Info_ = $IEnergyContainingItem$Info$Type;
}}
declare module "packages/owmii/powah/lib/block/$AbstractTileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRedstoneInteract, $IRedstoneInteract$Type} from "packages/owmii/powah/lib/logistics/$IRedstoneInteract"
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tank, $Tank$Type} from "packages/owmii/powah/lib/logistics/fluid/$Tank"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/owmii/powah/lib/block/$AbstractBlock"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Redstone, $Redstone$Type} from "packages/owmii/powah/lib/logistics/$Redstone"
import {$Inventory, $Inventory$Type} from "packages/owmii/powah/lib/logistics/inventory/$Inventory"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IBlockEntity, $IBlockEntity$Type} from "packages/owmii/powah/lib/block/$IBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractTileEntity<V extends $IVariant<(any)>, B extends $AbstractBlock<(V), (B)>> extends $BlockEntity implements $IBlockEntity, $IRedstoneInteract {

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)
constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type, variant: V)

public "getBlock"(): B
public "sync"(): void
public "getVariant"(): V
public "isRemote"(): boolean
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "onRemoved"(world: $Level$Type, state: $BlockState$Type, newState: $BlockState$Type, isMoving: boolean): void
public "onPlaced"(world: $Level$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "storeToStack"(stack: $ItemStack$Type): $ItemStack
public "getTank"(): $Tank
public "setRedstoneMode"(mode: $Redstone$Type): void
public "writeStorable"(nbt: $CompoundTag$Type): $CompoundTag
public "checkRedstone"(): boolean
public "keepStorable"(): boolean
public "setContainerOpen"(value: boolean): void
public static "fromStack"<T extends $AbstractTileEntity<(any), (any)>>(stack: $ItemStack$Type, tile: T): T
public "getRedstoneMode"(): $Redstone
public "readStorable"(nbt: $CompoundTag$Type): void
public "getInventory"(): $Inventory
public "load"(tag: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onAdded"(world: $Level$Type, state: $BlockState$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "nextRedstoneMode"(): void
get "block"(): B
get "variant"(): V
get "remote"(): boolean
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "tank"(): $Tank
set "redstoneMode"(value: $Redstone$Type)
set "containerOpen"(value: boolean)
get "redstoneMode"(): $Redstone
get "inventory"(): $Inventory
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTileEntity$Type<V, B> = ($AbstractTileEntity<(V), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTileEntity_<V, B> = $AbstractTileEntity$Type<(V), (B)>;
}}
declare module "packages/owmii/powah/config/v2/types/$EnergyConfig" {
import {$TieredEnergyValues, $TieredEnergyValues$Type} from "packages/owmii/powah/config/v2/values/$TieredEnergyValues"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$IEnergyConfig, $IEnergyConfig$Type} from "packages/owmii/powah/config/$IEnergyConfig"

export class $EnergyConfig implements $IEnergyConfig<($Tier)> {
 "capacities": $TieredEnergyValues
 "transfer_rates": $TieredEnergyValues

constructor(capacities: $TieredEnergyValues$Type, transfer_rates: $TieredEnergyValues$Type)

public "getCapacity"(variant: $Tier$Type): long
public "getTransfer"(variant: $Tier$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyConfig$Type = ($EnergyConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyConfig_ = $EnergyConfig$Type;
}}
declare module "packages/owmii/powah/lib/item/$IEnergyItemProvider" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEnergyItemProvider {

 "isChargeable"(arg0: $ItemStack$Type): boolean

(arg0: $ItemStack$Type): boolean
}

export namespace $IEnergyItemProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyItemProvider$Type = ($IEnergyItemProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyItemProvider_ = $IEnergyItemProvider$Type;
}}
declare module "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox" {
import {$LinkedHashMap, $LinkedHashMap$Type} from "packages/java/util/$LinkedHashMap"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $InfoBox {
static readonly "EMPTY": $InfoBox

constructor(titleStyle: $Style$Type, valueStyle: $Style$Type)
constructor(titleColor: integer, valueColor: integer)
constructor(titleStyle: $ChatFormatting$Type, valueStyle: $ChatFormatting$Type)
constructor()

public "set"(title: $MutableComponent$Type, value: $MutableComponent$Type): void
public "getLines"(): $LinkedHashMap<($MutableComponent), ($MutableComponent)>
public "setValueStyle"(valueStyle: $Style$Type): $InfoBox
public "setTitleStyle"(titleStyle: $Style$Type): $InfoBox
get "lines"(): $LinkedHashMap<($MutableComponent), ($MutableComponent)>
set "valueStyle"(value: $Style$Type)
set "titleStyle"(value: $Style$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoBox$Type = ($InfoBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoBox_ = $InfoBox$Type;
}}
declare module "packages/owmii/powah/lib/logistics/$IRedstoneInteract" {
import {$Redstone, $Redstone$Type} from "packages/owmii/powah/lib/logistics/$Redstone"

export interface $IRedstoneInteract {

 "setRedstoneMode"(arg0: $Redstone$Type): void
 "getRedstoneMode"(): $Redstone
 "nextRedstoneMode"(): void
}

export namespace $IRedstoneInteract {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRedstoneInteract$Type = ($IRedstoneInteract);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRedstoneInteract_ = $IRedstoneInteract$Type;
}}
declare module "packages/owmii/powah/lib/item/$Stacks" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Stacks extends $NonNullList<($ItemStack)> {


public "copy"(): $Stacks
public static "create"(): $Stacks
public static "from"(stacks: $NonNullList$Type<($ItemStack$Type)>): $Stacks
public static "from"(...elements: ($ItemStack$Type)[]): $Stacks
public static "withSize"(size: integer, fill: $ItemStack$Type): $Stacks
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "contains"(arg0: any): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stacks$Type = ($Stacks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stacks_ = $Stacks$Type;
}}
declare module "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox$IInfoBoxHolder" {
import {$InfoBox, $InfoBox$Type} from "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $InfoBox$IInfoBoxHolder {

 "getInfoBox"(arg0: $ItemStack$Type, arg1: $InfoBox$Type): $InfoBox

(arg0: $ItemStack$Type, arg1: $InfoBox$Type): $InfoBox
}

export namespace $InfoBox$IInfoBoxHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoBox$IInfoBoxHolder$Type = ($InfoBox$IInfoBoxHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoBox$IInfoBoxHolder_ = $InfoBox$IInfoBoxHolder$Type;
}}
declare module "packages/owmii/powah/lib/registry/$IVariantEntry" {
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"

export interface $IVariantEntry<V extends $IVariant<(any)>, R extends $IVariantEntry<(V), (R)>> {

 "getVariant"(): V

(): V
}

export namespace $IVariantEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariantEntry$Type<V, R> = ($IVariantEntry<(V), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariantEntry_<V, R> = $IVariantEntry$Type<(V), (R)>;
}}
declare module "packages/owmii/powah/api/wrench/$WrenchMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WrenchMode extends $Enum<($WrenchMode)> {
static readonly "CONFIG": $WrenchMode
static readonly "LINK": $WrenchMode
static readonly "ROTATE": $WrenchMode


public static "values"(): ($WrenchMode)[]
public static "valueOf"(name: string): $WrenchMode
public "rotate"(): boolean
public "config"(): boolean
public "link"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchMode$Type = (("rotate") | ("link") | ("config")) | ($WrenchMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrenchMode_ = $WrenchMode$Type;
}}
declare module "packages/owmii/powah/item/$WrenchItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemBase, $ItemBase$Type} from "packages/owmii/powah/lib/item/$ItemBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IWrench, $IWrench$Type} from "packages/owmii/powah/api/wrench/$IWrench"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IHudItem, $IHudItem$Type} from "packages/owmii/powah/lib/client/handler/$IHudItem"
import {$WrenchMode, $WrenchMode$Type} from "packages/owmii/powah/api/wrench/$WrenchMode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WrenchItem extends $ItemBase implements $IHudItem, $IWrench {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getWrenchMode"(stack: $ItemStack$Type): $WrenchMode
public "getWrenchNBT"(stack: $ItemStack$Type): $CompoundTag
public "renderHud"(world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, side: $Direction$Type, hit: $Vec3$Type): boolean
public "onItemUseFirst"(stack: $ItemStack$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, side: $Direction$Type, hit: $Vec3$Type): $InteractionResult
public "use"(worldIn: $Level$Type, playerIn: $Player$Type, handIn: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(stack: $ItemStack$Type, worldIn: $Level$Type, entityIn: $Entity$Type, itemSlot: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, worldIn: $Level$Type, tooltip: $List$Type<($Component$Type)>, flagIn: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchItem$Type = ($WrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrenchItem_ = $WrenchItem$Type;
}}
declare module "packages/owmii/powah/lib/block/$AbstractBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ItemBlock, $ItemBlock$Type} from "packages/owmii/powah/lib/item/$ItemBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IVariantEntry, $IVariantEntry$Type} from "packages/owmii/powah/lib/registry/$IVariantEntry"
import {$IBlock, $IBlock$Type} from "packages/owmii/powah/lib/block/$IBlock"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractBlock<V extends $IVariant<(any)>, B extends $AbstractBlock<(V), (B)>> extends $Block implements $IVariantEntry<(V), (B)>, $IBlock<(V), (B)> {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type)
constructor(properties: $BlockBehaviour$Properties$Type, variant: V)

public static "box"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): $VoxelShape
public "getDisplayName"(stack: $ItemStack$Type): $Component
public "getVariant"(): V
public "getContainer"<T extends $AbstractTileEntity<(any), (any)>>(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "playerDestroy"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type, state: $BlockState$Type, te: $BlockEntity$Type, stack: $ItemStack$Type): void
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "triggerEvent"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, id: integer, param: integer): boolean
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getFluidState"(state: $BlockState$Type): $FluidState
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getCloneItemStack"(world: $BlockGetter$Type, pos: $BlockPos$Type): $ItemStack
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getBlockItem"(properties: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>): $ItemBlock<(any), (any)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "variant"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlock$Type<V, B> = ($AbstractBlock<(V), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlock_<V, B> = $AbstractBlock$Type<(V), (B)>;
}}
declare module "packages/owmii/powah/item/$PhotoelectricPaneItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBase, $ItemBase$Type} from "packages/owmii/powah/lib/item/$ItemBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PhotoelectricPaneItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "interactLivingEntity"(stack: $ItemStack$Type, playerIn: $Player$Type, target: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotoelectricPaneItem$Type = ($PhotoelectricPaneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotoelectricPaneItem_ = $PhotoelectricPaneItem$Type;
}}
declare module "packages/owmii/powah/config/$IEnergyConfig" {
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export interface $IEnergyConfig<V extends ($Enum<(V)>) & ($IVariant<(V)>)> {

 "getCapacity"(arg0: V): long
 "getTransfer"(arg0: V): long
}

export namespace $IEnergyConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyConfig$Type<V> = ($IEnergyConfig<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyConfig_<V> = $IEnergyConfig$Type<(V)>;
}}
declare module "packages/owmii/powah/lib/logistics/fluid/$Tank" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidTank, $FluidTank$Type} from "packages/owmii/powah/lib/logistics/fluid/$FluidTank"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Tank extends $FluidTank {

constructor(capacity: integer)
constructor(capacity: integer, validator: $Predicate$Type<($FluidStack$Type)>)

public "validate"(validator: $Predicate$Type<($FluidStack$Type)>): $Tank
public "onContentsChanged"(): void
public "setSendUpdates"(sendUpdates: boolean): void
public "getPlatformWrapper"(): any
public "setChange"(changed: $Runnable$Type): $Tank
public "readFromNBT"(nbt: $CompoundTag$Type, key: string): $FluidTank
public "writeToNBT"(nbt: $CompoundTag$Type, key: string): $CompoundTag
set "sendUpdates"(value: boolean)
get "platformWrapper"(): any
set "change"(value: $Runnable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tank$Type = ($Tank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tank_ = $Tank$Type;
}}
declare module "packages/owmii/powah/block/discharger/$EnergyDischargerBlock" {
import {$EnergyConfig, $EnergyConfig$Type} from "packages/owmii/powah/config/v2/types/$EnergyConfig"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Transfer, $Transfer$Type} from "packages/owmii/powah/lib/logistics/$Transfer"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnergyDischargerBlock extends $AbstractEnergyBlock<($EnergyConfig), ($EnergyDischargerBlock)> {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"<T extends $AbstractTileEntity<(any), (any)>>(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "getConfig"(): $EnergyConfig
public "getTransferType"(): $Transfer
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
get "config"(): $EnergyConfig
get "transferType"(): $Transfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyDischargerBlock$Type = ($EnergyDischargerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyDischargerBlock_ = $EnergyDischargerBlock$Type;
}}
declare module "packages/owmii/powah/block/solar/$SolarBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$AbstractGeneratorBlock, $AbstractGeneratorBlock$Type} from "packages/owmii/powah/lib/block/$AbstractGeneratorBlock"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"

export class $SolarBlock extends $AbstractGeneratorBlock<($SolarBlock)> implements $SimpleWaterloggedBlock {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "canAttach"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getConnectedSides"(state: $BlockState$Type): $List<($Direction)>
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
export type $SolarBlock$Type = ($SolarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolarBlock_ = $SolarBlock$Type;
}}
declare module "packages/owmii/powah/item/$ChargedSnowballItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBase, $ItemBase$Type} from "packages/owmii/powah/lib/item/$ItemBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChargedSnowballItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "use"(worldIn: $Level$Type, playerIn: $Player$Type, handIn: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedSnowballItem$Type = ($ChargedSnowballItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargedSnowballItem_ = $ChargedSnowballItem$Type;
}}
declare module "packages/owmii/powah/block/thermo/$ThermoBlock" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$EnergyBlockItem, $EnergyBlockItem$Type} from "packages/owmii/powah/lib/item/$EnergyBlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$AbstractGeneratorBlock, $AbstractGeneratorBlock$Type} from "packages/owmii/powah/lib/block/$AbstractGeneratorBlock"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ThermoBlock extends $AbstractGeneratorBlock<($ThermoBlock)> {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, blockRayTraceResult: $BlockHitResult$Type): $InteractionResult
public "getBlockItem"(properties: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>): $EnergyBlockItem<(any), (any)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoBlock$Type = ($ThermoBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermoBlock_ = $ThermoBlock$Type;
}}
declare module "packages/owmii/powah/lib/block/$IBlockEntity" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IBlockEntity {

 "onRemoved"(world: $Level$Type, state: $BlockState$Type, newState: $BlockState$Type, isMoving: boolean): void
 "onPlaced"(world: $Level$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
 "onAdded"(world: $Level$Type, state: $BlockState$Type, oldState: $BlockState$Type, isMoving: boolean): void
}

export namespace $IBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntity$Type = ($IBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntity_ = $IBlockEntity$Type;
}}
declare module "packages/owmii/powah/lib/client/handler/$IHudItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IHudItem {

 "renderHud"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $Direction$Type, arg5: $Vec3$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $Direction$Type, arg5: $Vec3$Type): boolean
}

export namespace $IHudItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHudItem$Type = ($IHudItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHudItem_ = $IHudItem$Type;
}}
declare module "packages/owmii/powah/config/v2/types/$EnderConfig" {
import {$TieredEnergyValues, $TieredEnergyValues$Type} from "packages/owmii/powah/config/v2/values/$TieredEnergyValues"
import {$TieredChannelValues, $TieredChannelValues$Type} from "packages/owmii/powah/config/v2/values/$TieredChannelValues"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$IEnergyConfig, $IEnergyConfig$Type} from "packages/owmii/powah/config/$IEnergyConfig"

export class $EnderConfig implements $IEnergyConfig<($Tier)> {
 "transfer_rates": $TieredEnergyValues
 "channels": $TieredChannelValues

constructor(transfer_rates: $TieredEnergyValues$Type, channels: $TieredChannelValues$Type)

public "getCapacity"(variant: $Tier$Type): long
public "getTransfer"(variant: $Tier$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderConfig$Type = ($EnderConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderConfig_ = $EnderConfig$Type;
}}
declare module "packages/owmii/powah/config/v2/values/$TieredChannelValues" {
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"

export class $TieredChannelValues {
 "starter": integer
 "basic": integer
 "hardened": integer
 "blazing": integer
 "niotic": integer
 "spirited": integer
 "nitro": integer

constructor(starter: integer, basic: integer, hardened: integer, blazing: integer, niotic: integer, spirited: integer, nitro: integer)

public "get"(tier: $Tier$Type): integer
public static "getDefault"(): $TieredChannelValues
get "default"(): $TieredChannelValues
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredChannelValues$Type = ($TieredChannelValues);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredChannelValues_ = $TieredChannelValues$Type;
}}
declare module "packages/owmii/powah/block/transmitter/$PlayerTransmitterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnergyBlockItem, $EnergyBlockItem$Type} from "packages/owmii/powah/lib/item/$EnergyBlockItem"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ChargingConfig, $ChargingConfig$Type} from "packages/owmii/powah/config/v2/types/$ChargingConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $PlayerTransmitterBlock extends $AbstractEnergyBlock<($ChargingConfig), ($PlayerTransmitterBlock)> {
static readonly "TOP": $BooleanProperty
static readonly "TOP_SHAPE": $VoxelShape
static readonly "BOTTOM_SHAPE": $VoxelShape
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "getConfig"(): $ChargingConfig
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "playerDestroy"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type, state: $BlockState$Type, te: $BlockEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "updateShape"(state: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, world: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getBlockItem"(properties: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>): $EnergyBlockItem<(any), (any)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
get "config"(): $ChargingConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTransmitterBlock$Type = ($PlayerTransmitterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTransmitterBlock_ = $PlayerTransmitterBlock$Type;
}}
declare module "packages/owmii/powah/lib/logistics/energy/$Energy" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Energy$Item, $Energy$Item$Type} from "packages/owmii/powah/lib/logistics/energy/$Energy$Item"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Energy {
static readonly "EMPTY": $Energy
static readonly "MAX": long
static readonly "MIN": long
 "platformWrapper": any

constructor(capacity: long, maxExtract: long, maxReceive: long)
constructor(energy: $Energy$Type)

public "getCapacity"(): long
public "setCapacity"(capacity: long): $Energy
public "produce"(amount: long): long
public static "get"(stack: $ItemStack$Type): $Optional<($Energy$Item)>
public "clone"(other: $Energy$Type): boolean
public static "extract"(stack: $ItemStack$Type, energy: long, simulate: boolean): long
public "isEmpty"(): boolean
public "write"(nbt: $CompoundTag$Type, capacity: boolean, transfer: boolean): $CompoundTag
public "write"(nbt: $CompoundTag$Type, key: string, capacity: boolean, transfer: boolean): $CompoundTag
public "write"(capacity: boolean, transfer: boolean): $CompoundTag
public "write"(key: string, capacity: boolean, transfer: boolean): $CompoundTag
public "read"(nbt: $CompoundTag$Type, capacity: boolean, transfer: boolean): $Energy
public "read"(nbt: $CompoundTag$Type, key: string, capacity: boolean, transfer: boolean): $Energy
public static "isPresent"(stack: $ItemStack$Type): boolean
public static "create"(capacity: long, transfer: long): $Energy
public static "create"(capacity: long): $Energy
public static "create"(capacity: long, maxExtract: long, maxReceive: long): $Energy
public "setAll"(value: long): $Energy
public static "ifPresent"(stack: $ItemStack$Type, energyItem: $Consumer$Type<($Energy$Item$Type)>): void
public static "from"(energy: $Energy$Type): $Energy
public "getPercent"(): long
public "getTransfer"(): long
public "isFull"(): boolean
public "getEmpty"(): long
public static "receive"(stack: $ItemStack$Type, energy: long, simulate: boolean): long
public "consume"(amount: long): long
public "extractEnergy"(maxExtract: long, simulate: boolean): long
public "canReceive"(): boolean
public "getMaxEnergyStored"(): long
public "receiveEnergy"(maxReceive: long, simulate: boolean): long
public "getEnergyStored"(): long
public "setStored"(stored: long): $Energy
public "getMaxExtract"(): long
public static "getEnergy"(stack: $ItemStack$Type): $Optional<($Energy)>
public "hasEnergy"(): boolean
public "getMaxReceive"(): long
public "toComparatorPower"(): integer
public static "getStored"(stack: $ItemStack$Type): long
public "getStored"(): long
public "subSized"(): float
public "setTransfer"(transfer: long): $Energy
public static "chargeable"(stack: $ItemStack$Type): boolean
public "canExtract"(): boolean
public "setMaxExtract"(maxExtract: long): $Energy
public "setMaxTransfer"(): $Energy
public "removeCapacity"(amount: long): void
public "setMaxReceive"(maxReceive: long): $Energy
public "addCapacity"(amount: long): void
get "capacity"(): long
set "capacity"(value: long)
get "empty"(): boolean
set "all"(value: long)
get "percent"(): long
get "transfer"(): long
get "full"(): boolean
get "empty"(): long
get "maxEnergyStored"(): long
get "energyStored"(): long
set "stored"(value: long)
get "maxExtract"(): long
get "maxReceive"(): long
get "stored"(): long
set "transfer"(value: long)
set "maxExtract"(value: long)
set "maxReceive"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Energy$Type = ($Energy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Energy_ = $Energy$Type;
}}
declare module "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $AbstractContainer extends $AbstractContainerMenu {
readonly "player": $Player
readonly "world": $Level
static readonly "DUMMY": $AbstractContainerMenu
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "stateId": integer
 "containerId": integer
readonly "containerListeners": $List<($ContainerListener)>

constructor(type: $MenuType$Type<(any)>, id: integer, inventory: $Inventory$Type, buffer: $FriendlyByteBuf$Type)
constructor(type: $MenuType$Type<(any)>, id: integer, inventory: $Inventory$Type)

public "stillValid"(playerIn: $Player$Type): boolean
public "initializeContents"(stateId: integer, items: $List$Type<($ItemStack$Type)>, carried: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainer$Type = ($AbstractContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainer_ = $AbstractContainer$Type;
}}
declare module "packages/owmii/powah/block/energizing/$EnergizingRodBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EnergyConfig, $EnergyConfig$Type} from "packages/owmii/powah/config/v2/types/$EnergyConfig"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$WrenchMode, $WrenchMode$Type} from "packages/owmii/powah/api/wrench/$WrenchMode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IHud, $IHud$Type} from "packages/owmii/powah/lib/client/handler/$IHud"
import {$EnergizingRodTile, $EnergizingRodTile$Type} from "packages/owmii/powah/block/energizing/$EnergizingRodTile"
import {$IWrenchable, $IWrenchable$Type} from "packages/owmii/powah/api/wrench/$IWrenchable"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"

export class $EnergizingRodBlock extends $AbstractEnergyBlock<($EnergyConfig), ($EnergizingRodBlock)> implements $SimpleWaterloggedBlock, $IWrenchable, $IHud {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getConfig"(): $EnergyConfig
public "onPlace"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "onWrench"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, side: $Direction$Type, mode: $WrenchMode$Type, hit: $Vec3$Type): boolean
public "setOrbPos"(worldIn: $Level$Type, pos: $BlockPos$Type, tile: $EnergizingRodTile$Type): void
public "renderHud"(gui: $GuiGraphics$Type, state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, result: $BlockHitResult$Type, te: $BlockEntity$Type): boolean
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "config"(): $EnergyConfig
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizingRodBlock$Type = ($EnergizingRodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizingRodBlock_ = $EnergizingRodBlock$Type;
}}
declare module "packages/owmii/powah/lib/logistics/$Transfer" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Transfer extends $Enum<($Transfer)> {
static readonly "ALL": $Transfer
static readonly "EXTRACT": $Transfer
static readonly "RECEIVE": $Transfer
static readonly "NONE": $Transfer
readonly "canExtract": boolean
readonly "canReceive": boolean


public static "values"(): ($Transfer)[]
public static "valueOf"(name: string): $Transfer
public "next"(type: $Transfer$Type): $Transfer
public "getDisplayName"(): $Component
public "getDisplayName2"(): $Component
get "displayName"(): $Component
get "displayName2"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transfer$Type = (("all") | ("receive") | ("extract") | ("none")) | ($Transfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transfer_ = $Transfer$Type;
}}
declare module "packages/owmii/powah/lib/logistics/$Redstone" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Redstone extends $Enum<($Redstone)> {
static readonly "IGNORE": $Redstone
static readonly "ON": $Redstone
static readonly "OFF": $Redstone


public static "values"(): ($Redstone)[]
public static "valueOf"(name: string): $Redstone
public "next"(): $Redstone
public "getDisplayName"(): $Component
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Redstone$Type = (("ignore") | ("off") | ("on")) | ($Redstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Redstone_ = $Redstone$Type;
}}
declare module "packages/owmii/powah/block/cable/$CableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEnergyConnector, $IEnergyConnector$Type} from "packages/owmii/powah/api/energy/$IEnergyConnector"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$CableConfig, $CableConfig$Type} from "packages/owmii/powah/config/v2/types/$CableConfig"

export class $CableBlock extends $AbstractEnergyBlock<($CableConfig), ($CableBlock)> implements $SimpleWaterloggedBlock, $IEnergyConnector {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"<T extends $AbstractTileEntity<(any), (any)>>(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "canConnectEnergy"(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public static "getHitSide"(hit: $Vec3$Type, pos: $BlockPos$Type): $Optional<($Direction)>
public "canAttach"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): (boolean)[]
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "isChargeable"(stack: $ItemStack$Type): boolean
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
export type $CableBlock$Type = ($CableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlock_ = $CableBlock$Type;
}}
declare module "packages/owmii/powah/lib/block/$IInventoryHolder" {
import {$Inventory, $Inventory$Type} from "packages/owmii/powah/lib/logistics/inventory/$Inventory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IInventoryHolder {

 "grow"(slot: integer, amount: integer): $ItemStack
 "getStack"(slot: integer): $ItemStack
 "shrink"(slot: integer, amount: integer): $ItemStack
 "shrink"(slots: (integer)[], amount: integer): void
 "canInsert"(arg0: integer, arg1: $ItemStack$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "onSlotChanged"(slot: integer): void
 "getInventory"(): $Inventory
 "canExtract"(arg0: integer, arg1: $ItemStack$Type): boolean
}

export namespace $IInventoryHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryHolder$Type = ($IInventoryHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryHolder_ = $IInventoryHolder$Type;
}}
declare module "packages/owmii/powah/lib/item/$ItemBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IItem, $IItem$Type} from "packages/owmii/powah/lib/item/$IItem"
import {$IVariantEntry, $IVariantEntry$Type} from "packages/owmii/powah/lib/registry/$IVariantEntry"
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$ItemModelType, $ItemModelType$Type} from "packages/owmii/powah/lib/data/$ItemModelType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IBlock, $IBlock$Type} from "packages/owmii/powah/lib/block/$IBlock"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlock<V extends $IVariant<(any)>, B extends ($Block) & ($IBlock<(V), (B)>)> extends $BlockItem implements $IItem, $IVariantEntry<(V), (B)> {
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

constructor(block: B, builder: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>)

public "getVariant"(): V
public "getItemModelType"(): $ItemModelType
public "getName"(stack: $ItemStack$Type): $Component
public "getBlock"(): B
public "oneTimeInfo"(player: $Player$Type, stack: $ItemStack$Type, component: $Component$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "variant"(): V
get "itemModelType"(): $ItemModelType
get "block"(): B
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlock$Type<V, B> = ($ItemBlock<(V), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlock_<V, B> = $ItemBlock$Type<(V), (B)>;
}}
declare module "packages/owmii/powah/lib/logistics/energy/$SideConfig" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractEnergyStorage, $AbstractEnergyStorage$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyStorage"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Transfer, $Transfer$Type} from "packages/owmii/powah/lib/logistics/$Transfer"

export class $SideConfig {

constructor(storage: $AbstractEnergyStorage$Type<(any), (any)>)

public "setType"(side: $Direction$Type, type: $Transfer$Type): void
public "init"(): void
public "write"(nbt: $CompoundTag$Type): $CompoundTag
public "read"(nbt: $CompoundTag$Type): void
public "getType"(side: $Direction$Type): $Transfer
public "nextType"(side: $Direction$Type): void
public "nextTypeAll"(): void
public "isAllEquals"(): boolean
get "allEquals"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SideConfig$Type = ($SideConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SideConfig_ = $SideConfig$Type;
}}
declare module "packages/owmii/powah/config/v2/types/$ChargingConfig" {
import {$TieredEnergyValues, $TieredEnergyValues$Type} from "packages/owmii/powah/config/v2/values/$TieredEnergyValues"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$IEnergyConfig, $IEnergyConfig$Type} from "packages/owmii/powah/config/$IEnergyConfig"

export class $ChargingConfig implements $IEnergyConfig<($Tier)> {
 "capacities": $TieredEnergyValues
 "transfer_rates": $TieredEnergyValues
 "charging_rates": $TieredEnergyValues

constructor(capacities: $TieredEnergyValues$Type, transfer_rates: $TieredEnergyValues$Type, charging_rates: $TieredEnergyValues$Type)

public "getCapacity"(variant: $Tier$Type): long
public "getTransfer"(variant: $Tier$Type): long
public "getChargingSpeed"(variant: $Tier$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingConfig$Type = ($ChargingConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingConfig_ = $ChargingConfig$Type;
}}
declare module "packages/owmii/powah/item/$UraniniteItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBase, $ItemBase$Type} from "packages/owmii/powah/lib/item/$ItemBase"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UraniniteItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UraniniteItem$Type = ($UraniniteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UraniniteItem_ = $UraniniteItem$Type;
}}
declare module "packages/owmii/powah/item/$ReactorItem" {
import {$GeneratorConfig, $GeneratorConfig$Type} from "packages/owmii/powah/config/v2/types/$GeneratorConfig"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EnergyBlockItem, $EnergyBlockItem$Type} from "packages/owmii/powah/lib/item/$EnergyBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ReactorBlock, $ReactorBlock$Type} from "packages/owmii/powah/block/reactor/$ReactorBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReactorItem extends $EnergyBlockItem<($GeneratorConfig), ($ReactorBlock)> {
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

constructor(block: $ReactorBlock$Type, properties: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>)

public "place"(context: $BlockPlaceContext$Type): $InteractionResult
public "initializeClient"(consumer: $Consumer$Type<(any)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorItem$Type = ($ReactorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorItem_ = $ReactorItem$Type;
}}
declare module "packages/owmii/powah/lib/item/$EnergyBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IEnergyItemProvider, $IEnergyItemProvider$Type} from "packages/owmii/powah/lib/item/$IEnergyItemProvider"
import {$IEnergyContainingItem$Info, $IEnergyContainingItem$Info$Type} from "packages/owmii/powah/lib/item/$IEnergyContainingItem$Info"
import {$Transfer, $Transfer$Type} from "packages/owmii/powah/lib/logistics/$Transfer"
import {$InfoBox, $InfoBox$Type} from "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$ItemBlock, $ItemBlock$Type} from "packages/owmii/powah/lib/item/$ItemBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InfoBox$IInfoBoxHolder, $InfoBox$IInfoBoxHolder$Type} from "packages/owmii/powah/lib/client/wiki/page/panel/$InfoBox$IInfoBoxHolder"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$IEnergyConfig, $IEnergyConfig$Type} from "packages/owmii/powah/config/$IEnergyConfig"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$IEnergyContainingItem, $IEnergyContainingItem$Type} from "packages/owmii/powah/lib/item/$IEnergyContainingItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyBlockItem<C extends $IEnergyConfig<($Tier)>, B extends $AbstractEnergyBlock<(C), (B)>> extends $ItemBlock<($Tier), (B)> implements $InfoBox$IInfoBoxHolder, $IEnergyItemProvider, $IEnergyContainingItem {
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

constructor(block: B, builder: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>)

public "getConfig"(): C
public "getEnergyInfo"(): $IEnergyContainingItem$Info
public "getTransferType"(): $Transfer
public "getInfoBox"(stack: $ItemStack$Type, box: $InfoBox$Type): $InfoBox
public "isChargeable"(stack: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "config"(): C
get "energyInfo"(): $IEnergyContainingItem$Info
get "transferType"(): $Transfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyBlockItem$Type<C, B> = ($EnergyBlockItem<(C), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyBlockItem_<C, B> = $EnergyBlockItem$Type<(C), (B)>;
}}
declare module "packages/owmii/powah/lib/block/$AbstractTickableTile" {
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/owmii/powah/lib/block/$AbstractBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractTickableTile<V extends $IVariant<(any)>, B extends $AbstractBlock<(V), (B)>> extends $AbstractTileEntity<(V), (B)> {
 "ticks": integer

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)
constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type, variant: V)

public "sync"(delay: integer): void
public "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTickableTile$Type<V, B> = ($AbstractTickableTile<(V), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTickableTile_<V, B> = $AbstractTickableTile$Type<(V), (B)>;
}}
declare module "packages/owmii/powah/block/energycell/$EnergyCellBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EnergyConfig, $EnergyConfig$Type} from "packages/owmii/powah/config/v2/types/$EnergyConfig"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnergyCellBlock extends $AbstractEnergyBlock<($EnergyConfig), ($EnergyCellBlock)> implements $SimpleWaterloggedBlock {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, tier: $Tier$Type)

public "getContainer"(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
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
export type $EnergyCellBlock$Type = ($EnergyCellBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCellBlock_ = $EnergyCellBlock$Type;
}}
declare module "packages/owmii/powah/item/$BatteryItem" {
import {$EnergyConfig, $EnergyConfig$Type} from "packages/owmii/powah/config/v2/types/$EnergyConfig"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IEnderExtender, $IEnderExtender$Type} from "packages/owmii/powah/api/energy/endernetwork/$IEnderExtender"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EnergyItem, $EnergyItem$Type} from "packages/owmii/powah/lib/item/$EnergyItem"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$IEnergyConfig, $IEnergyConfig$Type} from "packages/owmii/powah/config/$IEnergyConfig"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BatteryItem extends $EnergyItem<($Tier), ($EnergyConfig), ($BatteryItem)> implements $IEnderExtender {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type, variant: $Tier$Type)

public "getConfig"(): $IEnergyConfig<($Tier)>
public "getExtendedCapacity"(stack: $ItemStack$Type): long
public "getExtendedEnergy"(stack: $ItemStack$Type): long
public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, itemSlot: integer, isSelected: boolean): void
public "isFoil"(stack: $ItemStack$Type): boolean
get "config"(): $IEnergyConfig<($Tier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryItem$Type = ($BatteryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryItem_ = $BatteryItem$Type;
}}
declare module "packages/owmii/powah/api/wrench/$IWrenchable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$WrenchMode, $WrenchMode$Type} from "packages/owmii/powah/api/wrench/$WrenchMode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWrenchable {

 "onWrench"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $Direction$Type, arg6: $WrenchMode$Type, arg7: $Vec3$Type): boolean

(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $Direction$Type, arg6: $WrenchMode$Type, arg7: $Vec3$Type): boolean
}

export namespace $IWrenchable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrenchable$Type = ($IWrenchable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWrenchable_ = $IWrenchable$Type;
}}
declare module "packages/owmii/powah/lib/item/$IEnergyContainingItem" {
import {$IEnergyContainingItem$Info, $IEnergyContainingItem$Info$Type} from "packages/owmii/powah/lib/item/$IEnergyContainingItem$Info"

export interface $IEnergyContainingItem {

 "getEnergyInfo"(): $IEnergyContainingItem$Info

(): $IEnergyContainingItem$Info
}

export namespace $IEnergyContainingItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyContainingItem$Type = ($IEnergyContainingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyContainingItem_ = $IEnergyContainingItem$Type;
}}
declare module "packages/owmii/powah/block/ender/$EnderCellBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EnderConfig, $EnderConfig$Type} from "packages/owmii/powah/config/v2/types/$EnderConfig"

export class $EnderCellBlock extends $AbstractEnergyBlock<($EnderConfig), ($EnderCellBlock)> {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderCellBlock$Type = ($EnderCellBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderCellBlock_ = $EnderCellBlock$Type;
}}
declare module "packages/owmii/powah/block/energizing/$EnergizingOrbTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IInventoryHolder, $IInventoryHolder$Type} from "packages/owmii/powah/lib/block/$IInventoryHolder"
import {$IVariant$Single, $IVariant$Single$Type} from "packages/owmii/powah/lib/registry/$IVariant$Single"
import {$EnergizingOrbBlock, $EnergizingOrbBlock$Type} from "packages/owmii/powah/block/energizing/$EnergizingOrbBlock"
import {$Inventory, $Inventory$Type} from "packages/owmii/powah/lib/logistics/inventory/$Inventory"
import {$AbstractTickableTile, $AbstractTickableTile$Type} from "packages/owmii/powah/lib/block/$AbstractTickableTile"
import {$Energy, $Energy$Type} from "packages/owmii/powah/lib/logistics/energy/$Energy"
import {$EnergizingRecipe, $EnergizingRecipe$Type} from "packages/owmii/powah/block/energizing/$EnergizingRecipe"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnergizingOrbTile extends $AbstractTickableTile<($IVariant$Single), ($EnergizingOrbBlock)> implements $IInventoryHolder {
 "ticks": integer

constructor(pos: $BlockPos$Type, state: $BlockState$Type)

public "getBuffer"(): $Energy
public "canInsert"(index: integer, stack: $ItemStack$Type): boolean
public "setContainRecipe"(containRecipe: boolean): void
public "fillEnergy"(amount: long): long
public "currRecipe"(): $EnergizingRecipe
public "getOrbCenter"(): $Vec3
public "containRecipe"(): boolean
public "getOrbUp"(): $Direction
public "getSlotLimit"(index: integer): integer
public "readSync"(nbt: $CompoundTag$Type): void
public "writeSync"(nbt: $CompoundTag$Type): $CompoundTag
public "onSlotChanged"(index: integer): void
public "canExtract"(slot: integer, stack: $ItemStack$Type): boolean
public "grow"(slot: integer, amount: integer): $ItemStack
public "getStack"(slot: integer): $ItemStack
public "shrink"(slot: integer, amount: integer): $ItemStack
public "shrink"(slots: (integer)[], amount: integer): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getInventory"(): $Inventory
get "buffer"(): $Energy
get "orbCenter"(): $Vec3
get "orbUp"(): $Direction
get "inventory"(): $Inventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizingOrbTile$Type = ($EnergizingOrbTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizingOrbTile_ = $EnergizingOrbTile$Type;
}}
declare module "packages/owmii/powah/block/energizing/$EnergizingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$EnergizingRecipe, $EnergizingRecipe$Type} from "packages/owmii/powah/block/energizing/$EnergizingRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $EnergizingRecipe$Serializer implements $RecipeSerializer<($EnergizingRecipe)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, json: $JsonObject$Type): $EnergizingRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $EnergizingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $EnergizingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $EnergizingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizingRecipe$Serializer$Type = ($EnergizingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizingRecipe$Serializer_ = $EnergizingRecipe$Serializer$Type;
}}
declare module "packages/owmii/powah/api/wrench/$IWrench" {
import {$WrenchMode, $WrenchMode$Type} from "packages/owmii/powah/api/wrench/$WrenchMode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IWrench {

 "getWrenchMode"(arg0: $ItemStack$Type): $WrenchMode

(arg0: $ItemStack$Type): $WrenchMode
}

export namespace $IWrench {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrench$Type = ($IWrench);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWrench_ = $IWrench$Type;
}}
declare module "packages/owmii/powah/block/furnator/$FurnatorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$AbstractGeneratorBlock, $AbstractGeneratorBlock$Type} from "packages/owmii/powah/lib/block/$AbstractGeneratorBlock"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GeneratorConfig, $GeneratorConfig$Type} from "packages/owmii/powah/config/v2/types/$GeneratorConfig"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"

export class $FurnatorBlock extends $AbstractGeneratorBlock<($FurnatorBlock)> implements $SimpleWaterloggedBlock {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"(id: integer, playerInventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "getConfig"(): $GeneratorConfig
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "config"(): $GeneratorConfig
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnatorBlock$Type = ($FurnatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnatorBlock_ = $FurnatorBlock$Type;
}}
declare module "packages/owmii/powah/lib/registry/$IVariant$Single" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IVariant$Single extends $Enum<($IVariant$Single)> implements $IVariant<($IVariant$Single)> {
static readonly "SINGLE": $IVariant$Single


public static "values"(): ($IVariant$Single)[]
public static "valueOf"(name: string): $IVariant$Single
public "getName"(): string
public "isEmpty"(): boolean
public "write"(nbt: $CompoundTag$Type, v: $IVariant$Single$Type, key: string): $CompoundTag
public "read"(nbt: $CompoundTag$Type, key: string): $IVariant$Single
public "ordinal"(): integer
public static "getEmpty"<T extends $IVariant<(any)>>(): T
get "name"(): string
get "empty"(): boolean
get "empty"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariant$Single$Type = (("single")) | ($IVariant$Single);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariant$Single_ = $IVariant$Single$Type;
}}
declare module "packages/owmii/powah/lib/block/$IBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$IVariantEntry, $IVariantEntry$Type} from "packages/owmii/powah/lib/registry/$IVariantEntry"
import {$IVariant, $IVariant$Type} from "packages/owmii/powah/lib/registry/$IVariant"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBlock, $ItemBlock$Type} from "packages/owmii/powah/lib/item/$ItemBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $IBlock<V extends $IVariant<(any)>, B extends ($Block) & ($IBlock<(V), (B)>)> extends $IVariantEntry<(V), (B)>, $EntityBlock {

 "getBlockItem"(properties: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>): $ItemBlock<(any), (any)>
 "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
 "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "getVariant"(): V
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener

(properties: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>): $ItemBlock<(any), (any)>
}

export namespace $IBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlock$Type<V, B> = ($IBlock<(V), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlock_<V, B> = $IBlock$Type<(V), (B)>;
}}
declare module "packages/owmii/powah/block/energizing/$EnergizingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/owmii/powah/lib/logistics/inventory/$RecipeWrapper"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $EnergizingRecipe implements $Recipe<($RecipeWrapper)> {
static readonly "ID": $ResourceLocation

constructor(id: $ResourceLocation$Type, output: $ItemStack$Type, energy: long, ...ingredients: ($Ingredient$Type)[])
constructor(id: $ResourceLocation$Type, output: $ItemStack$Type, energy: long, ingredients: $NonNullList$Type<($Ingredient$Type)>)

public "matches"(inv: $RecipeWrapper$Type, world: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "getResultItem"(): $ItemStack
public "isSpecial"(): boolean
public "getEnergy"(): long
public "assemble"(inv: $RecipeWrapper$Type, registry: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getRemainingItems"(arg0: $RecipeWrapper$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "resultItem"(): $ItemStack
get "special"(): boolean
get "energy"(): long
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
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
export type $EnergizingRecipe$Type = ($EnergizingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizingRecipe_ = $EnergizingRecipe$Type;
}}
declare module "packages/owmii/powah/block/magmator/$MagmatorBlock" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$Type} from "packages/owmii/powah/lib/block/$AbstractTileEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractContainer, $AbstractContainer$Type} from "packages/owmii/powah/lib/logistics/inventory/$AbstractContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$EnergyBlockItem, $EnergyBlockItem$Type} from "packages/owmii/powah/lib/item/$EnergyBlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$AbstractGeneratorBlock, $AbstractGeneratorBlock$Type} from "packages/owmii/powah/lib/block/$AbstractGeneratorBlock"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MagmatorBlock extends $AbstractGeneratorBlock<($MagmatorBlock)> {
static readonly "SEMI_FULL_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "soundType": $SoundType
readonly "properties": $BlockBehaviour$Properties

constructor(properties: $BlockBehaviour$Properties$Type, variant: $Tier$Type)

public "getContainer"<T extends $AbstractTileEntity<(any), (any)>>(id: integer, inventory: $Inventory$Type, te: $AbstractTileEntity$Type<(any), (any)>, result: $BlockHitResult$Type): $AbstractContainer
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "getBlockItem"(properties: $Item$Properties$Type, group: $ResourceKey$Type<($CreativeModeTab$Type)>): $EnergyBlockItem<(any), (any)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagmatorBlock$Type = ($MagmatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagmatorBlock_ = $MagmatorBlock$Type;
}}
declare module "packages/owmii/powah/item/$PowahBookItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBase, $ItemBase$Type} from "packages/owmii/powah/lib/item/$ItemBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PowahBookItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "use"(worldIn: $Level$Type, playerIn: $Player$Type, handIn: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowahBookItem$Type = ($PowahBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowahBookItem_ = $PowahBookItem$Type;
}}
declare module "packages/owmii/powah/lib/logistics/energy/$Energy$Item" {
import {$Energy, $Energy$Type} from "packages/owmii/powah/lib/logistics/energy/$Energy"
import {$IEnergyContainingItem$Info, $IEnergyContainingItem$Info$Type} from "packages/owmii/powah/lib/item/$IEnergyContainingItem$Info"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Energy$Item extends $Energy {
static readonly "EMPTY": $Energy
static readonly "MAX": long
static readonly "MIN": long
 "platformWrapper": any

constructor(stack: $ItemStack$Type, capacity: long, maxExtract: long, maxReceive: long)
constructor(stack: $ItemStack$Type, info: $IEnergyContainingItem$Info$Type)
constructor(stack: $ItemStack$Type, energy: $Energy$Item$Type)

public "consume"(amount: long): long
public "extractEnergy"(maxExtract: long, simulate: boolean): long
public "receiveEnergy"(maxReceive: long, simulate: boolean): long
public "setStoredAndWrite"(stored: long): void
set "storedAndWrite"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Energy$Item$Type = ($Energy$Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Energy$Item_ = $Energy$Item$Type;
}}
declare module "packages/owmii/powah/item/$AerialPearlItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBase, $ItemBase$Type} from "packages/owmii/powah/lib/item/$ItemBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AerialPearlItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "interactLivingEntity"(stack: $ItemStack$Type, playerIn: $Player$Type, target: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AerialPearlItem$Type = ($AerialPearlItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AerialPearlItem_ = $AerialPearlItem$Type;
}}
declare module "packages/owmii/powah/api/energy/$IEnergyConnector" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEnergyConnector {

}

export namespace $IEnergyConnector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyConnector$Type = ($IEnergyConnector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyConnector_ = $IEnergyConnector$Type;
}}
declare module "packages/owmii/powah/lib/block/$AbstractEnergyStorage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRedstoneInteract, $IRedstoneInteract$Type} from "packages/owmii/powah/lib/logistics/$IRedstoneInteract"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SideConfig, $SideConfig$Type} from "packages/owmii/powah/lib/logistics/energy/$SideConfig"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Transfer, $Transfer$Type} from "packages/owmii/powah/lib/logistics/$Transfer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$Type} from "packages/owmii/powah/lib/block/$AbstractEnergyBlock"
import {$Redstone, $Redstone$Type} from "packages/owmii/powah/lib/logistics/$Redstone"
import {$AbstractTickableTile, $AbstractTickableTile$Type} from "packages/owmii/powah/lib/block/$AbstractTickableTile"
import {$Energy, $Energy$Type} from "packages/owmii/powah/lib/logistics/energy/$Energy"
import {$Tier, $Tier$Type} from "packages/owmii/powah/block/$Tier"
import {$IEnergyConfig, $IEnergyConfig$Type} from "packages/owmii/powah/config/$IEnergyConfig"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractEnergyStorage<C extends $IEnergyConfig<($Tier)>, B extends $AbstractEnergyBlock<(C), (B)>> extends $AbstractTickableTile<($Tier), (B)> implements $IRedstoneInteract {
 "ticks": integer

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)
constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type, variant: $Tier$Type)

public "extractEnergy"(maxExtract: long, simulate: boolean, side: $Direction$Type): long
public "receiveEnergy"(maxReceive: long, simulate: boolean, side: $Direction$Type): long
public "getEnergy"(): $Energy
public "getTransferType"(): $Transfer
public "writeStorable"(nbt: $CompoundTag$Type): $CompoundTag
public "readSync"(nbt: $CompoundTag$Type): void
public "writeSync"(nbt: $CompoundTag$Type): $CompoundTag
public "readStorable"(nbt: $CompoundTag$Type): void
public "canReceiveEnergy"(side: $Direction$Type): boolean
public "canExtractEnergy"(side: $Direction$Type): boolean
public "isEnergyPresent"(side: $Direction$Type): boolean
public "getSideConfig"(): $SideConfig
public "keepEnergy"(): boolean
public "onAdded"(world: $Level$Type, state: $BlockState$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "setRedstoneMode"(arg0: $Redstone$Type): void
public "getRedstoneMode"(): $Redstone
get "energy"(): $Energy
get "transferType"(): $Transfer
get "sideConfig"(): $SideConfig
set "redstoneMode"(value: $Redstone$Type)
get "redstoneMode"(): $Redstone
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEnergyStorage$Type<C, B> = ($AbstractEnergyStorage<(C), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEnergyStorage_<C, B> = $AbstractEnergyStorage$Type<(C), (B)>;
}}
