declare module "packages/net/blay09/mods/farmingforblockheads/block/$MarketBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $MarketBlock extends $BaseEntityBlock {
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

constructor()

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarketBlock$Type = ($MarketBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarketBlock_ = $MarketBlock$Type;
}}
declare module "packages/net/blay09/mods/waystones/api/$IWaystone" {
import {$WaystoneOrigin, $WaystoneOrigin$Type} from "packages/net/blay09/mods/waystones/api/$WaystoneOrigin"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$TeleportDestination, $TeleportDestination$Type} from "packages/net/blay09/mods/waystones/api/$TeleportDestination"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IWaystone {

 "getName"(): string
 "isValid"(): boolean
 "isGlobal"(): boolean
 "getDimension"(): $ResourceKey<($Level)>
 "getOrigin"(): $WaystoneOrigin
 "hasName"(): boolean
 "getPos"(): $BlockPos
 "getOwnerUid"(): $UUID
 "getWaystoneType"(): $ResourceLocation
 "wasGenerated"(): boolean
 "getWaystoneUid"(): $UUID
 "isValidInLevel"(arg0: $ServerLevel$Type): boolean
 "resolveDestination"(arg0: $ServerLevel$Type): $TeleportDestination
 "isOwner"(arg0: $Player$Type): boolean
 "hasOwner"(): boolean
}

export namespace $IWaystone {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWaystone$Type = ($IWaystone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWaystone_ = $IWaystone$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$KitchenFloorBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $KitchenFloorBlock extends $Block {
static readonly "name": string
static readonly "registryName": $ResourceLocation
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KitchenFloorBlock$Type = ($KitchenFloorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KitchenFloorBlock_ = $KitchenFloorBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/item/$ItemRecipeBook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemRecipeBook$RecipeBookEdition, $ItemRecipeBook$RecipeBookEdition$Type} from "packages/net/blay09/mods/cookingforblockheads/item/$ItemRecipeBook$RecipeBookEdition"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemRecipeBook extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $ItemRecipeBook$RecipeBookEdition$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRecipeBook$Type = ($ItemRecipeBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRecipeBook_ = $ItemRecipeBook$Type;
}}
declare module "packages/net/blay09/mods/farmingforblockheads/block/$ChickenNestBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
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
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ChickenNestBlock extends $BaseEntityBlock {
static readonly "name": string
static readonly "registryName": $ResourceLocation
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


public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChickenNestBlock$Type = ($ChickenNestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChickenNestBlock_ = $ChickenNestBlock$Type;
}}
declare module "packages/net/blay09/mods/waystones/item/$ReturnScrollItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BoundScrollItem, $BoundScrollItem$Type} from "packages/net/blay09/mods/waystones/item/$BoundScrollItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReturnScrollItem extends $BoundScrollItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReturnScrollItem$Type = ($ReturnScrollItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReturnScrollItem_ = $ReturnScrollItem$Type;
}}
declare module "packages/net/blay09/mods/waystones/block/$SharestoneBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WaystoneOrigin, $WaystoneOrigin$Type} from "packages/net/blay09/mods/waystones/api/$WaystoneOrigin"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WaystoneBlockBase, $WaystoneBlockBase$Type} from "packages/net/blay09/mods/waystones/block/$WaystoneBlockBase"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SharestoneBlock extends $WaystoneBlockBase {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "ORIGIN": $EnumProperty<($WaystoneOrigin)>
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

public "getColor"(): $DyeColor
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SharestoneBlock$Type = ($SharestoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SharestoneBlock_ = $SharestoneBlock$Type;
}}
declare module "packages/net/blay09/mods/balm/api/block/$CustomFarmBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $CustomFarmBlock {

 "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $Block$Type): boolean
 "isFertile"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
}

export namespace $CustomFarmBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomFarmBlock$Type = ($CustomFarmBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomFarmBlock_ = $CustomFarmBlock$Type;
}}
declare module "packages/net/blay09/mods/farmingforblockheads/item/$FertilizerItem$FertilizerType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $FertilizerItem$FertilizerType extends $Enum<($FertilizerItem$FertilizerType)> {
static readonly "HEALTHY": $FertilizerItem$FertilizerType
static readonly "RICH": $FertilizerItem$FertilizerType
static readonly "STABLE": $FertilizerItem$FertilizerType


public static "values"(): ($FertilizerItem$FertilizerType)[]
public static "valueOf"(arg0: string): $FertilizerItem$FertilizerType
public "canFertilize"(arg0: $BlockState$Type): boolean
public "applyFertilizer"(arg0: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FertilizerItem$FertilizerType$Type = (("healthy") | ("stable") | ("rich")) | ($FertilizerItem$FertilizerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FertilizerItem$FertilizerType_ = $FertilizerItem$FertilizerType$Type;
}}
declare module "packages/net/blay09/mods/waystones/item/$WarpScrollItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IResetUseOnDamage, $IResetUseOnDamage$Type} from "packages/net/blay09/mods/waystones/api/$IResetUseOnDamage"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ScrollItemBase, $ScrollItemBase$Type} from "packages/net/blay09/mods/waystones/item/$ScrollItemBase"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WarpScrollItem extends $ScrollItemBase implements $IResetUseOnDamage {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpScrollItem$Type = ($WarpScrollItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpScrollItem_ = $WarpScrollItem$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$ToolRackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockKitchen, $BlockKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockKitchen"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ToolRackBlock extends $BlockKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolRackBlock$Type = ($ToolRackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolRackBlock_ = $ToolRackBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$MilkJarBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BucketPickup, $BucketPickup$Type} from "packages/net/minecraft/world/level/block/$BucketPickup"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockKitchen, $BlockKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockKitchen"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $MilkJarBlock extends $BlockKitchen implements $BucketPickup {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MilkJarBlock$Type = ($MilkJarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MilkJarBlock_ = $MilkJarBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$DyedOvenBlock" {
import {$OvenBlock, $OvenBlock$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$OvenBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $DyedOvenBlock extends $OvenBlock {
static "POWERED": $BooleanProperty
static "ACTIVE": $BooleanProperty
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

constructor(arg0: $DyeColor$Type)

public "getColor"(): $DyeColor
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyedOvenBlock$Type = ($DyedOvenBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyedOvenBlock_ = $DyedOvenBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/menu/slot/$CraftMatrixFakeSlot" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FakeSlot, $FakeSlot$Type} from "packages/net/blay09/mods/cookingforblockheads/menu/slot/$FakeSlot"

export class $CraftMatrixFakeSlot extends $FakeSlot {
readonly "slot": integer
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)

public "updateSlot"(arg0: float): void
public "setAvailable"(arg0: boolean): void
public "isAvailable"(): boolean
public "isLocked"(): boolean
public "setLocked"(arg0: boolean): void
public "hasItem"(): boolean
public "isActive"(): boolean
public "getItem"(): $ItemStack
public "setIngredient"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getVisibleStacks"(): $NonNullList<($ItemStack)>
public "scrollDisplayList"(arg0: integer): void
set "available"(value: boolean)
get "available"(): boolean
get "locked"(): boolean
set "locked"(value: boolean)
get "active"(): boolean
get "item"(): $ItemStack
set "ingredient"(value: $NonNullList$Type<($ItemStack$Type)>)
get "visibleStacks"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftMatrixFakeSlot$Type = ($CraftMatrixFakeSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftMatrixFakeSlot_ = $CraftMatrixFakeSlot$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/api/capability/$IngredientPredicate" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IngredientPredicate {

 "test"(arg0: $ItemStack$Type, arg1: integer): boolean

(arg0: $ItemStack$Type, arg1: integer): boolean
}

export namespace $IngredientPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientPredicate$Type = ($IngredientPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientPredicate_ = $IngredientPredicate$Type;
}}
declare module "packages/net/blay09/mods/waystones/block/$WarpPlateBlock$WarpPlateStatus" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $WarpPlateBlock$WarpPlateStatus extends $Enum<($WarpPlateBlock$WarpPlateStatus)> implements $StringRepresentable {
static readonly "IDLE": $WarpPlateBlock$WarpPlateStatus
static readonly "ACTIVE": $WarpPlateBlock$WarpPlateStatus
static readonly "INVALID": $WarpPlateBlock$WarpPlateStatus


public static "values"(): ($WarpPlateBlock$WarpPlateStatus)[]
public static "valueOf"(arg0: string): $WarpPlateBlock$WarpPlateStatus
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpPlateBlock$WarpPlateStatus$Type = (("idle") | ("invalid") | ("active")) | ($WarpPlateBlock$WarpPlateStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpPlateBlock$WarpPlateStatus_ = $WarpPlateBlock$WarpPlateStatus$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$CornerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockDyeableKitchen, $BlockDyeableKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockDyeableKitchen"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CornerBlock extends $BlockDyeableKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CornerBlock$Type = ($CornerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CornerBlock_ = $CornerBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/item/$ItemHeatingUnit" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemHeatingUnit extends $Item {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHeatingUnit$Type = ($ItemHeatingUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHeatingUnit_ = $ItemHeatingUnit$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$CuttingBoardBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockKitchen, $BlockKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockKitchen"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CuttingBoardBlock extends $BlockKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingBoardBlock$Type = ($CuttingBoardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingBoardBlock_ = $CuttingBoardBlock$Type;
}}
declare module "packages/net/blay09/mods/balm/mixin/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "getMouseX"(): double
 "getMouseY"(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$Type;
}}
declare module "packages/net/blay09/mods/farmingforblockheads/block/$FeedingTroughBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FeedingTroughBlock extends $BaseEntityBlock {
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


public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingTroughBlock$Type = ($FeedingTroughBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedingTroughBlock_ = $FeedingTroughBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$FridgeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockDyeableKitchen, $BlockDyeableKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockDyeableKitchen"
import {$FridgeBlock$FridgeModelType, $FridgeBlock$FridgeModelType$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$FridgeBlock$FridgeModelType"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $FridgeBlock extends $BlockDyeableKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "MODEL_TYPE": $EnumProperty<($FridgeBlock$FridgeModelType)>
static readonly "PRESERVATION_CHAMBER": $BooleanProperty
static readonly "ICE_UNIT": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
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
export type $FridgeBlock$Type = ($FridgeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FridgeBlock_ = $FridgeBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/registry/$FoodRecipeWithIngredients" {
import {$FoodRecipe, $FoodRecipe$Type} from "packages/net/blay09/mods/cookingforblockheads/registry/recipe/$FoodRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FoodRecipeType, $FoodRecipeType$Type} from "packages/net/blay09/mods/cookingforblockheads/registry/$FoodRecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RecipeStatus, $RecipeStatus$Type} from "packages/net/blay09/mods/cookingforblockheads/api/$RecipeStatus"

export class $FoodRecipeWithIngredients {

constructor(arg0: $ItemStack$Type, arg1: $FoodRecipeType$Type, arg2: $RecipeStatus$Type, arg3: integer, arg4: $List$Type<($NonNullList$Type<($ItemStack$Type)>)>, arg5: integer)

public static "fromFoodRecipe"(arg0: $FoodRecipe$Type, arg1: $RecipeStatus$Type, arg2: $List$Type<($NonNullList$Type<($ItemStack$Type)>)>, arg3: integer): $FoodRecipeWithIngredients
public "getAvailabilityMap"(): integer
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $FoodRecipeWithIngredients
public "getRecipeWidth"(): integer
public "getRecipeType"(): $FoodRecipeType
public "getCraftMatrix"(): $List<($NonNullList<($ItemStack)>)>
public "getRecipeStatus"(): $RecipeStatus
public "getOutputItem"(): $ItemStack
get "availabilityMap"(): integer
get "recipeWidth"(): integer
get "recipeType"(): $FoodRecipeType
get "craftMatrix"(): $List<($NonNullList<($ItemStack)>)>
get "recipeStatus"(): $RecipeStatus
get "outputItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodRecipeWithIngredients$Type = ($FoodRecipeWithIngredients);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodRecipeWithIngredients_ = $FoodRecipeWithIngredients$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/registry/$FoodRecipeType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FoodRecipeType extends $Enum<($FoodRecipeType)> {
static readonly "CRAFTING": $FoodRecipeType
static readonly "SMELTING": $FoodRecipeType


public static "values"(): ($FoodRecipeType)[]
public static "valueOf"(arg0: string): $FoodRecipeType
public static "fromId"(arg0: integer): $FoodRecipeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodRecipeType$Type = (("crafting") | ("smelting")) | ($FoodRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodRecipeType_ = $FoodRecipeType$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/registry/recipe/$FoodIngredient" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FoodIngredient {

constructor(arg0: $Ingredient$Type, arg1: boolean)

public "getItemStacks"(): ($ItemStack)[]
public "isToolItem"(): boolean
public "isValidItem"(arg0: $ItemStack$Type): boolean
get "itemStacks"(): ($ItemStack)[]
get "toolItem"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodIngredient$Type = ($FoodIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodIngredient_ = $FoodIngredient$Type;
}}
declare module "packages/net/blay09/mods/waystones/item/$WarpDustItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WarpDustItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpDustItem$Type = ($WarpDustItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpDustItem_ = $WarpDustItem$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/$KitchenMultiBlock" {
import {$IKitchenMultiBlock, $IKitchenMultiBlock$Type} from "packages/net/blay09/mods/cookingforblockheads/api/$IKitchenMultiBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IKitchenItemProvider, $IKitchenItemProvider$Type} from "packages/net/blay09/mods/cookingforblockheads/api/capability/$IKitchenItemProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $KitchenMultiBlock implements $IKitchenMultiBlock {


public "trySmelt"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: boolean): void
public "getItemProviders"(arg0: $Inventory$Type): $List<($IKitchenItemProvider)>
public static "buildFromLocation"(arg0: $Level$Type, arg1: $BlockPos$Type): $KitchenMultiBlock
public "smeltItem"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public static "registerConnectorBlock"(arg0: $Block$Type): void
public "hasSmeltingProvider"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KitchenMultiBlock$Type = ($KitchenMultiBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KitchenMultiBlock_ = $KitchenMultiBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$CabinetBlock" {
import {$CounterBlock, $CounterBlock$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$CounterBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CabinetBlock extends $CounterBlock {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CabinetBlock$Type = ($CabinetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CabinetBlock_ = $CabinetBlock$Type;
}}
declare module "packages/net/blay09/mods/waystones/api/$IFOVOnUse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFOVOnUse {

}

export namespace $IFOVOnUse {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFOVOnUse$Type = ($IFOVOnUse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFOVOnUse_ = $IFOVOnUse$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$ToasterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockKitchen, $BlockKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockKitchen"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ToasterBlock extends $BlockKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "ACTIVE": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToasterBlock$Type = ($ToasterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToasterBlock_ = $ToasterBlock$Type;
}}
declare module "packages/net/blay09/mods/balm/mixin/$KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeyMappingAccessor {

 "getKey"(): $InputConstants$Key

(): $InputConstants$Key
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$Type = ($KeyMappingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessor_ = $KeyMappingAccessor$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$OvenBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockKitchen, $BlockKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockKitchen"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $OvenBlock extends $BlockKitchen {
static "POWERED": $BooleanProperty
static "ACTIVE": $BooleanProperty
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OvenBlock$Type = ($OvenBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OvenBlock_ = $OvenBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/api/$RecipeStatus" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecipeStatus extends $Enum<($RecipeStatus)> {
static readonly "MISSING_INGREDIENTS": $RecipeStatus
static readonly "MISSING_TOOLS": $RecipeStatus
static readonly "AVAILABLE": $RecipeStatus


public static "values"(): ($RecipeStatus)[]
public static "valueOf"(arg0: string): $RecipeStatus
public static "fromId"(arg0: integer): $RecipeStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeStatus$Type = (("missing_ingredients") | ("available") | ("missing_tools")) | ($RecipeStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeStatus_ = $RecipeStatus$Type;
}}
declare module "packages/net/blay09/mods/farmingforblockheads/block/$FertilizedFarmlandBlock$FarmlandTrait" {
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export interface $FertilizedFarmlandBlock$FarmlandTrait {

 "getDoubleGrowthChance"(): float
 "getTraitName"(): string
 "isStable"(): boolean
 "getBonusCropChance"(): float
 "getTraitColor"(): $ChatFormatting
}

export namespace $FertilizedFarmlandBlock$FarmlandTrait {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FertilizedFarmlandBlock$FarmlandTrait$Type = ($FertilizedFarmlandBlock$FarmlandTrait);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FertilizedFarmlandBlock$FarmlandTrait_ = $FertilizedFarmlandBlock$FarmlandTrait$Type;
}}
declare module "packages/net/blay09/mods/waystones/api/$WaystoneOrigin" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $WaystoneOrigin extends $Enum<($WaystoneOrigin)> implements $StringRepresentable {
static readonly "UNKNOWN": $WaystoneOrigin
static readonly "WILDERNESS": $WaystoneOrigin
static readonly "DUNGEON": $WaystoneOrigin
static readonly "VILLAGE": $WaystoneOrigin
static readonly "PLAYER": $WaystoneOrigin


public static "values"(): ($WaystoneOrigin)[]
public static "valueOf"(arg0: string): $WaystoneOrigin
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaystoneOrigin$Type = (("wilderness") | ("village") | ("dungeon") | ("unknown") | ("player")) | ($WaystoneOrigin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaystoneOrigin_ = $WaystoneOrigin$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$SpiceRackBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockKitchen, $BlockKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockKitchen"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SpiceRackBlock extends $BlockKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiceRackBlock$Type = ($SpiceRackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiceRackBlock_ = $SpiceRackBlock$Type;
}}
declare module "packages/net/blay09/mods/waystones/block/$PortstoneBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$WaystoneOrigin, $WaystoneOrigin$Type} from "packages/net/blay09/mods/waystones/api/$WaystoneOrigin"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$WaystoneBlockBase, $WaystoneBlockBase$Type} from "packages/net/blay09/mods/waystones/block/$WaystoneBlockBase"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $PortstoneBlock extends $WaystoneBlockBase {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "ORIGIN": $EnumProperty<($WaystoneOrigin)>
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
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortstoneBlock$Type = ($PortstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortstoneBlock_ = $PortstoneBlock$Type;
}}
declare module "packages/net/blay09/mods/kuma/mixin/$KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeyMappingAccessor {

 "getKey"(): $InputConstants$Key

(): $InputConstants$Key
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$Type = ($KeyMappingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessor_ = $KeyMappingAccessor$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/item/$ItemPreservationChamber" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPreservationChamber extends $Item {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPreservationChamber$Type = ($ItemPreservationChamber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPreservationChamber_ = $ItemPreservationChamber$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/api/$FoodRecipeWithStatus" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RecipeStatus, $RecipeStatus$Type} from "packages/net/blay09/mods/cookingforblockheads/api/$RecipeStatus"

export class $FoodRecipeWithStatus {

constructor(arg0: $ItemStack$Type, arg1: $RecipeStatus$Type)

public "getStatus"(): $RecipeStatus
public "getOutputItem"(): $ItemStack
get "status"(): $RecipeStatus
get "outputItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodRecipeWithStatus$Type = ($FoodRecipeWithStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodRecipeWithStatus_ = $FoodRecipeWithStatus$Type;
}}
declare module "packages/net/blay09/mods/waystones/block/$WaystoneBlockBase" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$WaystoneOrigin, $WaystoneOrigin$Type} from "packages/net/blay09/mods/waystones/api/$WaystoneOrigin"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $WaystoneBlockBase extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "ORIGIN": $EnumProperty<($WaystoneOrigin)>
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

public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
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
export type $WaystoneBlockBase$Type = ($WaystoneBlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaystoneBlockBase_ = $WaystoneBlockBase$Type;
}}
declare module "packages/net/blay09/mods/waystones/mixin/$StructureTemplatePoolAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $StructureTemplatePoolAccessor {

 "getTemplates"(): $ObjectArrayList<($StructurePoolElement)>
 "setTemplates"(arg0: $ObjectArrayList$Type<($StructurePoolElement$Type)>): void
 "setRawTemplates"(arg0: $List$Type<($Pair$Type<($StructurePoolElement$Type), (integer)>)>): void
 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}

export namespace $StructureTemplatePoolAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplatePoolAccessor$Type = ($StructureTemplatePoolAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplatePoolAccessor_ = $StructureTemplatePoolAccessor$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/api/$IKitchenMultiBlock" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$IKitchenItemProvider, $IKitchenItemProvider$Type} from "packages/net/blay09/mods/cookingforblockheads/api/capability/$IKitchenItemProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $IKitchenMultiBlock {

 "getItemProviders"(arg0: $Inventory$Type): $List<($IKitchenItemProvider)>
 "smeltItem"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
 "hasSmeltingProvider"(): boolean
}

export namespace $IKitchenMultiBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKitchenMultiBlock$Type = ($IKitchenMultiBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKitchenMultiBlock_ = $IKitchenMultiBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$BlockDyeableKitchen" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockKitchen, $BlockKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockKitchen"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockDyeableKitchen extends $BlockKitchen {
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDyeableKitchen$Type = ($BlockDyeableKitchen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDyeableKitchen_ = $BlockDyeableKitchen$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$FridgeBlock$FridgeModelType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FridgeBlock$FridgeModelType extends $Enum<($FridgeBlock$FridgeModelType)> implements $StringRepresentable {
static readonly "SMALL": $FridgeBlock$FridgeModelType
static readonly "LARGE_LOWER": $FridgeBlock$FridgeModelType
static readonly "LARGE_UPPER": $FridgeBlock$FridgeModelType


public static "values"(): ($FridgeBlock$FridgeModelType)[]
public static "valueOf"(arg0: string): $FridgeBlock$FridgeModelType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FridgeBlock$FridgeModelType$Type = (("small") | ("large_lower") | ("large_upper")) | ($FridgeBlock$FridgeModelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FridgeBlock$FridgeModelType_ = $FridgeBlock$FridgeModelType$Type;
}}
declare module "packages/net/blay09/mods/balm/api/entity/$BalmEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $BalmEntity {

 "getFabricBalmData"(): $CompoundTag
 "setFabricBalmData"(arg0: $CompoundTag$Type): void
}

export namespace $BalmEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalmEntity$Type = ($BalmEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BalmEntity_ = $BalmEntity$Type;
}}
declare module "packages/net/blay09/mods/waystones/recipe/$WarpPlateRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $WarpPlateRecipe implements $Recipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $Ingredient$Type, arg3: $NonNullList$Type<($Ingredient$Type)>)

public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
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
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "id"(): $ResourceLocation
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
export type $WarpPlateRecipe$Type = ($WarpPlateRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpPlateRecipe_ = $WarpPlateRecipe$Type;
}}
declare module "packages/net/blay09/mods/farmingforblockheads/block/$FertilizedFarmlandBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FarmBlock, $FarmBlock$Type} from "packages/net/minecraft/world/level/block/$FarmBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$FertilizedFarmlandBlock$FarmlandTrait, $FertilizedFarmlandBlock$FarmlandTrait$Type} from "packages/net/blay09/mods/farmingforblockheads/block/$FertilizedFarmlandBlock$FarmlandTrait"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomFarmBlock, $CustomFarmBlock$Type} from "packages/net/blay09/mods/balm/api/block/$CustomFarmBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FertilizedFarmlandBlock extends $FarmBlock implements $CustomFarmBlock {
static readonly "MOISTURE": $IntegerProperty
static readonly "MAX_MOISTURE": integer
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

constructor(...arg0: ($FertilizedFarmlandBlock$FarmlandTrait$Type)[])

public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $Block$Type): boolean
public "isFertile"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDoubleGrowthChance"(): float
public "getRegressionChance"(): float
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTraits"(): $Collection<($FertilizedFarmlandBlock$FarmlandTrait)>
public "getBonusCropChance"(): float
get "doubleGrowthChance"(): float
get "regressionChance"(): float
get "traits"(): $Collection<($FertilizedFarmlandBlock$FarmlandTrait)>
get "bonusCropChance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FertilizedFarmlandBlock$Type = ($FertilizedFarmlandBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FertilizedFarmlandBlock_ = $FertilizedFarmlandBlock$Type;
}}
declare module "packages/net/blay09/mods/waystones/recipe/$WarpPlateRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$WarpPlateRecipe, $WarpPlateRecipe$Type} from "packages/net/blay09/mods/waystones/recipe/$WarpPlateRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $WarpPlateRecipe$Serializer implements $RecipeSerializer<($WarpPlateRecipe)> {


public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $WarpPlateRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $WarpPlateRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $WarpPlateRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $WarpPlateRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpPlateRecipe$Serializer$Type = ($WarpPlateRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpPlateRecipe$Serializer_ = $WarpPlateRecipe$Serializer$Type;
}}
declare module "packages/net/blay09/mods/waystones/api/$IAttunementItem" {
import {$IWaystone, $IWaystone$Type} from "packages/net/blay09/mods/waystones/api/$IWaystone"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IAttunementItem {

 "getWaystoneAttunedTo"(arg0: $MinecraftServer$Type, arg1: $ItemStack$Type): $IWaystone
 "setWaystoneAttunedTo"(arg0: $ItemStack$Type, arg1: $IWaystone$Type): void
}

export namespace $IAttunementItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttunementItem$Type = ($IAttunementItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttunementItem_ = $IAttunementItem$Type;
}}
declare module "packages/net/blay09/mods/waystones/item/$BoundScrollItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IResetUseOnDamage, $IResetUseOnDamage$Type} from "packages/net/blay09/mods/waystones/api/$IResetUseOnDamage"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IFOVOnUse, $IFOVOnUse$Type} from "packages/net/blay09/mods/waystones/api/$IFOVOnUse"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IWaystone, $IWaystone$Type} from "packages/net/blay09/mods/waystones/api/$IWaystone"
import {$IAttunementItem, $IAttunementItem$Type} from "packages/net/blay09/mods/waystones/api/$IAttunementItem"
import {$ScrollItemBase, $ScrollItemBase$Type} from "packages/net/blay09/mods/waystones/item/$ScrollItemBase"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BoundScrollItem extends $ScrollItemBase implements $IResetUseOnDamage, $IFOVOnUse, $IAttunementItem {
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
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getWaystoneAttunedTo"(arg0: $MinecraftServer$Type, arg1: $ItemStack$Type): $IWaystone
public "setWaystoneAttunedTo"(arg0: $ItemStack$Type, arg1: $IWaystone$Type): void
/**
 * 
 * @deprecated
 */
public static "setBoundTo"(arg0: $ItemStack$Type, arg1: $IWaystone$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundScrollItem$Type = ($BoundScrollItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundScrollItem_ = $BoundScrollItem$Type;
}}
declare module "packages/net/blay09/mods/waystones/item/$AbstractAttunedShardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IWaystone, $IWaystone$Type} from "packages/net/blay09/mods/waystones/api/$IWaystone"
import {$IAttunementItem, $IAttunementItem$Type} from "packages/net/blay09/mods/waystones/api/$IAttunementItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractAttunedShardItem extends $Item implements $IAttunementItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getWaystoneAttunedTo"(arg0: $MinecraftServer$Type, arg1: $ItemStack$Type): $IWaystone
public "setWaystoneAttunedTo"(arg0: $ItemStack$Type, arg1: $IWaystone$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAttunedShardItem$Type = ($AbstractAttunedShardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAttunedShardItem_ = $AbstractAttunedShardItem$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$BlockKitchen" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockKitchen extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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


public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public static "shouldBlockRenderLowered"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "shouldBePlacedFlipped"(arg0: $BlockPlaceContext$Type, arg1: $Direction$Type): boolean
public "tryRecolorBlock"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Player$Type, arg5: $BlockHitResult$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockKitchen$Type = ($BlockKitchen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockKitchen_ = $BlockKitchen$Type;
}}
declare module "packages/net/blay09/mods/waystones/api/$TeleportDestination" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $TeleportDestination {

constructor(arg0: $ServerLevel$Type, arg1: $Vec3$Type, arg2: $Direction$Type)

public "getLocation"(): $Vec3
public "getLevel"(): $ServerLevel
public "getDirection"(): $Direction
get "location"(): $Vec3
get "level"(): $ServerLevel
get "direction"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportDestination$Type = ($TeleportDestination);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeleportDestination_ = $TeleportDestination$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$SinkBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockDyeableKitchen, $BlockDyeableKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockDyeableKitchen"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SinkBlock extends $BlockDyeableKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinkBlock$Type = ($SinkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SinkBlock_ = $SinkBlock$Type;
}}
declare module "packages/net/blay09/mods/waystones/item/$CrumblingAttunedShardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractAttunedShardItem, $AbstractAttunedShardItem$Type} from "packages/net/blay09/mods/waystones/item/$AbstractAttunedShardItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CrumblingAttunedShardItem extends $AbstractAttunedShardItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrumblingAttunedShardItem$Type = ($CrumblingAttunedShardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrumblingAttunedShardItem_ = $CrumblingAttunedShardItem$Type;
}}
declare module "packages/net/blay09/mods/waystones/block/$WarpPlateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WaystoneOrigin, $WaystoneOrigin$Type} from "packages/net/blay09/mods/waystones/api/$WaystoneOrigin"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WarpPlateBlock$WarpPlateStatus, $WarpPlateBlock$WarpPlateStatus$Type} from "packages/net/blay09/mods/waystones/block/$WarpPlateBlock$WarpPlateStatus"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$WaystoneBlockBase, $WaystoneBlockBase$Type} from "packages/net/blay09/mods/waystones/block/$WaystoneBlockBase"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWaystone, $IWaystone$Type} from "packages/net/blay09/mods/waystones/api/$IWaystone"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $WarpPlateBlock extends $WaystoneBlockBase {
/**
 * 
 * @deprecated
 */
static readonly "ACTIVE": $BooleanProperty
static readonly "STATUS": $EnumProperty<($WarpPlateBlock$WarpPlateStatus)>
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "ORIGIN": $EnumProperty<($WaystoneOrigin)>
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
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "getGalacticName"(arg0: $IWaystone$Type): $Component
public static "getColorForName"(arg0: string): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpPlateBlock$Type = ($WarpPlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpPlateBlock_ = $WarpPlateBlock$Type;
}}
declare module "packages/net/blay09/mods/balm/mixin/$AbstractContainerScreenAccessor" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $AbstractContainerScreenAccessor {

 "callRenderSlot"(arg0: $GuiGraphics$Type, arg1: $Slot$Type): void
 "getTopPos"(): integer
 "getImageHeight"(): integer
 "getHoveredSlot"(): $Slot
 "getLeftPos"(): integer
 "getImageWidth"(): integer
 "callIsHovering"(arg0: $Slot$Type, arg1: double, arg2: double): boolean
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
declare module "packages/net/blay09/mods/inventoryessentials/mixin/$AbstractContainerScreenAccessor" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"

export interface $AbstractContainerScreenAccessor {

 "callHasClickedOutside"(arg0: double, arg1: double, arg2: integer, arg3: integer, arg4: integer): boolean
 "getTopPos"(): integer
 "getHoveredSlot"(): $Slot
 "getLeftPos"(): integer
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/api/$SourceItem" {
import {$IKitchenItemProvider, $IKitchenItemProvider$Type} from "packages/net/blay09/mods/cookingforblockheads/api/capability/$IKitchenItemProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $SourceItem {

constructor(arg0: $IKitchenItemProvider$Type, arg1: integer, arg2: $ItemStack$Type)

public "getSourceSlot"(): integer
public "getSourceProvider"(): $IKitchenItemProvider
public "getSourceStack"(): $ItemStack
get "sourceSlot"(): integer
get "sourceProvider"(): $IKitchenItemProvider
get "sourceStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceItem$Type = ($SourceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceItem_ = $SourceItem$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$CowJarBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MilkJarBlock, $MilkJarBlock$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$MilkJarBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CowJarBlock extends $MilkJarBlock {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CowJarBlock$Type = ($CowJarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CowJarBlock_ = $CowJarBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/menu/slot/$RecipeFakeSlot" {
import {$FoodRecipeWithStatus, $FoodRecipeWithStatus$Type} from "packages/net/blay09/mods/cookingforblockheads/api/$FoodRecipeWithStatus"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FakeSlot, $FakeSlot$Type} from "packages/net/blay09/mods/cookingforblockheads/menu/slot/$FakeSlot"

export class $RecipeFakeSlot extends $FakeSlot {
readonly "slot": integer
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)

public "setFoodRecipe"(arg0: $FoodRecipeWithStatus$Type): void
public "getRecipe"(): $FoodRecipeWithStatus
public "hasItem"(): boolean
public "isActive"(): boolean
public "getItem"(): $ItemStack
set "foodRecipe"(value: $FoodRecipeWithStatus$Type)
get "recipe"(): $FoodRecipeWithStatus
get "active"(): boolean
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFakeSlot$Type = ($RecipeFakeSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFakeSlot_ = $RecipeFakeSlot$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$CounterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockDyeableKitchen, $BlockDyeableKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockDyeableKitchen"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CounterBlock extends $BlockDyeableKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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
constructor(arg0: $ResourceLocation$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterBlock$Type = ($CounterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CounterBlock_ = $CounterBlock$Type;
}}
declare module "packages/net/blay09/mods/waystones/worldgen/$WaystoneStructurePoolElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WaystoneStructurePoolElement {

 "waystones$isWaystone"(): boolean
 "waystones$setIsWaystone"(arg0: boolean): void
}

export namespace $WaystoneStructurePoolElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaystoneStructurePoolElement$Type = ($WaystoneStructurePoolElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaystoneStructurePoolElement_ = $WaystoneStructurePoolElement$Type;
}}
declare module "packages/net/blay09/mods/waystones/item/$ScrollItemBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScrollItemBase extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollItemBase$Type = ($ScrollItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrollItemBase_ = $ScrollItemBase$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/registry/recipe/$FoodRecipe" {
import {$FoodIngredient, $FoodIngredient$Type} from "packages/net/blay09/mods/cookingforblockheads/registry/recipe/$FoodIngredient"
import {$FoodRecipeType, $FoodRecipeType$Type} from "packages/net/blay09/mods/cookingforblockheads/registry/$FoodRecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FoodRecipe {

constructor()

public "getType"(): $FoodRecipeType
public "getRecipeWidth"(): integer
public "getRegistryName"(): $ResourceLocation
public "getCraftMatrix"(): $List<($FoodIngredient)>
public "fillCraftMatrix"(arg0: $Recipe$Type<(any)>): void
public "getOutputItem"(): $ItemStack
get "type"(): $FoodRecipeType
get "recipeWidth"(): integer
get "registryName"(): $ResourceLocation
get "craftMatrix"(): $List<($FoodIngredient)>
get "outputItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodRecipe$Type = ($FoodRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodRecipe_ = $FoodRecipe$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$CookingTableBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockDyeableKitchen, $BlockDyeableKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockDyeableKitchen"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CookingTableBlock extends $BlockDyeableKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingTableBlock$Type = ($CookingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingTableBlock_ = $CookingTableBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/item/$ItemIceUnit" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemIceUnit extends $Item {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemIceUnit$Type = ($ItemIceUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemIceUnit_ = $ItemIceUnit$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$FruitBasketBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockKitchen, $BlockKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockKitchen"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FruitBasketBlock extends $BlockKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitBasketBlock$Type = ($FruitBasketBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitBasketBlock_ = $FruitBasketBlock$Type;
}}
declare module "packages/net/blay09/mods/balm/mixin/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "setY"(arg0: integer): void
 "setX"(arg0: integer): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
declare module "packages/net/blay09/mods/balm/mixin/$ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"

export interface $ScreenAccessor {

 "balm_getChildren"(): $List<($GuiEventListener)>
 "balm_getRenderables"(): $List<($Renderable)>
 "balm_getNarratables"(): $List<($NarratableEntry)>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$Type;
}}
declare module "packages/net/blay09/mods/waystones/item/$WarpStoneItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IResetUseOnDamage, $IResetUseOnDamage$Type} from "packages/net/blay09/mods/waystones/api/$IResetUseOnDamage"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WarpStoneItem extends $Item implements $IResetUseOnDamage {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpStoneItem$Type = ($WarpStoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpStoneItem_ = $WarpStoneItem$Type;
}}
declare module "packages/net/blay09/mods/farmingforblockheads/item/$FertilizerItem" {
import {$FertilizerItem$FertilizerType, $FertilizerItem$FertilizerType$Type} from "packages/net/blay09/mods/farmingforblockheads/item/$FertilizerItem$FertilizerType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FertilizerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $FertilizerItem$FertilizerType$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FertilizerItem$Type = ($FertilizerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FertilizerItem_ = $FertilizerItem$Type;
}}
declare module "packages/net/blay09/mods/waystones/worldgen/$WaystoneFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $WaystoneFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $Codec$Type<($NoneFeatureConfiguration$Type)>, arg1: $BlockState$Type)

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaystoneFeature$Type = ($WaystoneFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaystoneFeature_ = $WaystoneFeature$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/item/$ItemRecipeBook$RecipeBookEdition" {
import {$RecipeBookMenu, $RecipeBookMenu$Type} from "packages/net/blay09/mods/cookingforblockheads/menu/$RecipeBookMenu"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"

export class $ItemRecipeBook$RecipeBookEdition extends $Enum<($ItemRecipeBook$RecipeBookEdition)> {
static readonly "NO_FILTER": $ItemRecipeBook$RecipeBookEdition
static readonly "RECIPE": $ItemRecipeBook$RecipeBookEdition
static readonly "CRAFTING": $ItemRecipeBook$RecipeBookEdition


public "getName"(): string
public static "values"(): ($ItemRecipeBook$RecipeBookEdition)[]
public static "valueOf"(arg0: string): $ItemRecipeBook$RecipeBookEdition
public "getContainerTypeSupplier"(): $Supplier<($MenuType<($RecipeBookMenu)>)>
get "name"(): string
get "containerTypeSupplier"(): $Supplier<($MenuType<($RecipeBookMenu)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRecipeBook$RecipeBookEdition$Type = (("no_filter") | ("crafting") | ("recipe")) | ($ItemRecipeBook$RecipeBookEdition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRecipeBook$RecipeBookEdition_ = $ItemRecipeBook$RecipeBookEdition$Type;
}}
declare module "packages/net/blay09/mods/waystones/item/$AttunedShardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractAttunedShardItem, $AbstractAttunedShardItem$Type} from "packages/net/blay09/mods/waystones/item/$AbstractAttunedShardItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AttunedShardItem extends $AbstractAttunedShardItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttunedShardItem$Type = ($AttunedShardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttunedShardItem_ = $AttunedShardItem$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/api/capability/$IKitchenItemProvider" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$IngredientPredicate, $IngredientPredicate$Type} from "packages/net/blay09/mods/cookingforblockheads/api/capability/$IngredientPredicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SourceItem, $SourceItem$Type} from "packages/net/blay09/mods/cookingforblockheads/api/$SourceItem"

export interface $IKitchenItemProvider {

/**
 * 
 * @deprecated
 */
 "getSlots"(): integer
/**
 * 
 * @deprecated
 */
 "getStackInSlot"(arg0: integer): $ItemStack
 "findSourceAndMarkAsUsed"(arg0: $IngredientPredicate$Type, arg1: integer, arg2: $List$Type<($IKitchenItemProvider$Type)>, arg3: boolean, arg4: boolean): $SourceItem
 "returnItemStack"(arg0: $ItemStack$Type, arg1: $SourceItem$Type): $ItemStack
/**
 * 
 * @deprecated
 */
 "returnItemStack"(arg0: $ItemStack$Type): $ItemStack
 "consumeSourceItem"(arg0: $SourceItem$Type, arg1: integer, arg2: $List$Type<($IKitchenItemProvider$Type)>, arg3: boolean): void
 "getCountInSlot"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
 "useItemStack"(arg0: integer, arg1: integer, arg2: boolean, arg3: $List$Type<($IKitchenItemProvider$Type)>, arg4: boolean): $ItemStack
/**
 * 
 * @deprecated
 */
 "findAndMarkAsUsed"(arg0: $IngredientPredicate$Type, arg1: integer, arg2: $List$Type<($IKitchenItemProvider$Type)>, arg3: boolean, arg4: boolean): $ItemStack
 "markAsUsed"(arg0: $SourceItem$Type, arg1: integer, arg2: $List$Type<($IKitchenItemProvider$Type)>, arg3: boolean): void
 "resetSimulation"(): void
 "findSource"(arg0: $IngredientPredicate$Type, arg1: integer, arg2: $List$Type<($IKitchenItemProvider$Type)>, arg3: boolean, arg4: boolean): $SourceItem
 "getSimulatedUseCount"(arg0: integer): integer
}

export namespace $IKitchenItemProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKitchenItemProvider$Type = ($IKitchenItemProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKitchenItemProvider_ = $IKitchenItemProvider$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/menu/$RecipeBookMenu" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$RecipeFakeSlot, $RecipeFakeSlot$Type} from "packages/net/blay09/mods/cookingforblockheads/menu/slot/$RecipeFakeSlot"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$FoodRecipeType, $FoodRecipeType$Type} from "packages/net/blay09/mods/cookingforblockheads/registry/$FoodRecipeType"
import {$CraftMatrixFakeSlot, $CraftMatrixFakeSlot$Type} from "packages/net/blay09/mods/cookingforblockheads/menu/slot/$CraftMatrixFakeSlot"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$FoodRecipeWithStatus, $FoodRecipeWithStatus$Type} from "packages/net/blay09/mods/cookingforblockheads/api/$FoodRecipeWithStatus"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$FoodRecipeWithIngredients, $FoodRecipeWithIngredients$Type} from "packages/net/blay09/mods/cookingforblockheads/registry/$FoodRecipeWithIngredients"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$KitchenMultiBlock, $KitchenMultiBlock$Type} from "packages/net/blay09/mods/cookingforblockheads/$KitchenMultiBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $RecipeBookMenu extends $AbstractContainerMenu {
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

constructor(arg0: $MenuType$Type<($RecipeBookMenu$Type)>, arg1: integer, arg2: $Player$Type)

public "allowCrafting"(): $RecipeBookMenu
public "setNoFilter"(): $RecipeBookMenu
public "isAllowCrafting"(): boolean
public "getSelection"(): $FoodRecipeWithIngredients
public "setSelectedRecipe"(arg0: $FoodRecipeWithStatus$Type, arg1: boolean): void
public "hasVariants"(): boolean
public "getSelectionIndex"(): integer
public "nextSubRecipe"(arg0: integer): void
public "getItemListCount"(): integer
public "getRecipeCount"(): integer
public "isSelectedSlot"(arg0: $RecipeFakeSlot$Type): boolean
public "updateSlots"(arg0: float): void
public "setSortComparator"(arg0: $Comparator$Type<($FoodRecipeWithStatus$Type)>): void
public "search"(arg0: string): void
public "isDirty"(): boolean
public "setRecipeList"(arg0: $ItemStack$Type, arg1: $List$Type<($FoodRecipeWithIngredients$Type)>): void
public "stillValid"(arg0: $Player$Type): boolean
public "tryCraft"(arg0: $ItemStack$Type, arg1: $FoodRecipeType$Type, arg2: $NonNullList$Type<($ItemStack$Type)>, arg3: boolean): void
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$Type, arg3: $Player$Type): void
public "slotsChanged"(arg0: $Container$Type): void
public "getSelectedRecipeIndex"(): integer
public "setScrollOffset"(arg0: integer): void
public "setDirty"(arg0: boolean): void
public "broadcastChanges"(): void
public "hasOven"(): boolean
public "setItemList"(arg0: $Collection$Type<($FoodRecipeWithStatus$Type)>): void
public "findAndSendRecipes"(arg0: $ItemStack$Type, arg1: boolean): void
public "setHasOven"(arg0: boolean): void
public "setKitchenMultiBlock"(arg0: $KitchenMultiBlock$Type): $RecipeBookMenu
public "findAndSendItemList"(): void
public "populateMatrixSlots"(arg0: $FoodRecipeWithIngredients$Type): void
public "getCraftingMatrixSlots"(): $List<($CraftMatrixFakeSlot)>
public "populateRecipeSlots"(): void
public "findAvailableRecipe"(arg0: $ItemStack$Type): $FoodRecipeWithStatus
get "selection"(): $FoodRecipeWithIngredients
get "selectionIndex"(): integer
get "itemListCount"(): integer
get "recipeCount"(): integer
set "sortComparator"(value: $Comparator$Type<($FoodRecipeWithStatus$Type)>)
get "dirty"(): boolean
get "selectedRecipeIndex"(): integer
set "scrollOffset"(value: integer)
set "dirty"(value: boolean)
set "itemList"(value: $Collection$Type<($FoodRecipeWithStatus$Type)>)
set "kitchenMultiBlock"(value: $KitchenMultiBlock$Type)
get "craftingMatrixSlots"(): $List<($CraftMatrixFakeSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookMenu$Type = ($RecipeBookMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeBookMenu_ = $RecipeBookMenu$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/block/$HangingCornerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockDyeableKitchen, $BlockDyeableKitchen$Type} from "packages/net/blay09/mods/cookingforblockheads/block/$BlockDyeableKitchen"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $HangingCornerBlock extends $BlockDyeableKitchen {
static readonly "name": string
static readonly "registryName": $ResourceLocation
static readonly "FACING": $DirectionProperty
static readonly "LOWERED": $BooleanProperty
static readonly "FLIPPED": $BooleanProperty
static readonly "HAS_COLOR": $BooleanProperty
static readonly "COLOR": $EnumProperty<($DyeColor)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingCornerBlock$Type = ($HangingCornerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangingCornerBlock_ = $HangingCornerBlock$Type;
}}
declare module "packages/net/blay09/mods/waystones/api/$IResetUseOnDamage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IResetUseOnDamage {

}

export namespace $IResetUseOnDamage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResetUseOnDamage$Type = ($IResetUseOnDamage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IResetUseOnDamage_ = $IResetUseOnDamage$Type;
}}
declare module "packages/net/blay09/mods/farmingforblockheads/mixin/$FarmBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FarmBlockAccessor {

}

export namespace $FarmBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmBlockAccessor$Type = ($FarmBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FarmBlockAccessor_ = $FarmBlockAccessor$Type;
}}
declare module "packages/net/blay09/mods/waystones/block/$WaystoneBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$WaystoneOrigin, $WaystoneOrigin$Type} from "packages/net/blay09/mods/waystones/api/$WaystoneOrigin"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$WaystoneBlockBase, $WaystoneBlockBase$Type} from "packages/net/blay09/mods/waystones/block/$WaystoneBlockBase"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $WaystoneBlock extends $WaystoneBlockBase {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "ORIGIN": $EnumProperty<($WaystoneOrigin)>
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
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaystoneBlock$Type = ($WaystoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaystoneBlock_ = $WaystoneBlock$Type;
}}
declare module "packages/net/blay09/mods/cookingforblockheads/menu/slot/$FakeSlot" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FakeSlot extends $Slot {
readonly "slot": integer
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)

public "setChanged"(): void
public "set"(arg0: $ItemStack$Type): void
public "getMaxStackSize"(): integer
public "remove"(arg0: integer): $ItemStack
public "hasItem"(): boolean
public "getItem"(): $ItemStack
public "mayPickup"(arg0: $Player$Type): boolean
public "mayPlace"(arg0: $ItemStack$Type): boolean
public "setDisplayStack"(arg0: $ItemStack$Type): void
get "maxStackSize"(): integer
get "item"(): $ItemStack
set "displayStack"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeSlot$Type = ($FakeSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeSlot_ = $FakeSlot$Type;
}}
