declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $CustomMapData<H extends $CustomMapData$DirtyCounter> {

 "load"(arg0: $CompoundTag$Type): void
 "save"(arg0: $CompoundTag$Type): void
 "getType"(): $CustomMapData$Type<(any)>
 "onItemUpdate"(data: $MapItemSavedData$Type, entity: $Entity$Type): boolean
 "onItemTooltip"(data: $MapItemSavedData$Type, stack: $ItemStack$Type): $Component
 "setDirty"(data: $MapItemSavedData$Type, dirtySetter: $Consumer$Type<(H)>): void
 "persistOnCopyOrLock"(): boolean
 "createDirtyCounter"(): H
 "saveToUpdateTag"(arg0: $CompoundTag$Type, arg1: H): void
 "loadUpdateTag"(arg0: $CompoundTag$Type): void
}

export namespace $CustomMapData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$Type<H> = ($CustomMapData<(H)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData_<H> = $CustomMapData$Type<(H)>;
}}
declare module "packages/net/mehvahdjukaar/sawmill/$WoodcuttingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$WoodcuttingRecipe, $WoodcuttingRecipe$Type} from "packages/net/mehvahdjukaar/sawmill/$WoodcuttingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $WoodcuttingRecipe$Serializer implements $RecipeSerializer<($WoodcuttingRecipe)> {

constructor()

public static "toJson"(recipe: $WoodcuttingRecipe$Type): $JsonObject
public "fromJson"(recipeId: $ResourceLocation$Type, json: $JsonObject$Type): $WoodcuttingRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $WoodcuttingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $WoodcuttingRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $WoodcuttingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodcuttingRecipe$Serializer$Type = ($WoodcuttingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodcuttingRecipe$Serializer_ = $WoodcuttingRecipe$Serializer$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IBlockHolder" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IBlockHolder {

 "getHeldBlock"(): $BlockState
 "getHeldBlock"(arg0: integer): $BlockState
 "setHeldBlock"(arg0: $BlockState$Type, arg1: integer): boolean
 "setHeldBlock"(state: $BlockState$Type): boolean
}

export namespace $IBlockHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockHolder$Type = ($IBlockHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockHolder_ = $IBlockHolder$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MapDecorationType, $MapDecorationType$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType"

export class $CustomMapDecoration {

constructor(type: $MapDecorationType$Type<(any), (any)>, buffer: $FriendlyByteBuf$Type)
constructor(type: $MapDecorationType$Type<(any), (any)>, x: byte, y: byte, rot: byte, displayName: $Component$Type)

public "getY"(): byte
public "equals"(obj: any): boolean
public "hashCode"(): integer
public "getType"(): $MapDecorationType<(any), (any)>
public "getDisplayName"(): $Component
public "getX"(): byte
public "setY"(y: byte): void
public "setX"(x: byte): void
public "setDisplayName"(displayName: $Component$Type): void
public "saveToBuffer"(buffer: $FriendlyByteBuf$Type): void
public "setRot"(rot: byte): void
public "getRot"(): byte
get "y"(): byte
get "type"(): $MapDecorationType<(any), (any)>
get "displayName"(): $Component
get "x"(): byte
set "y"(value: byte)
set "x"(value: byte)
set "displayName"(value: $Component$Type)
set "rot"(value: byte)
get "rot"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapDecoration$Type = ($CustomMapDecoration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapDecoration_ = $CustomMapDecoration$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IHoldingPlayerExtension" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"

export interface $IHoldingPlayerExtension {

 "moonlight$setCustomMarkersDirty"(): void
 "moonlight$setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type$Type<(any)>, arg1: $Consumer$Type<(H)>): void
}

export namespace $IHoldingPlayerExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHoldingPlayerExtension$Type = ($IHoldingPlayerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHoldingPlayerExtension_ = $IHoldingPlayerExtension$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$BlockPlacerItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockPlacerItem extends $BlockItem {
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

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type)

public static "get"(): $BlockPlacerItem
public "mimicGetPlacementState"(pContext: $BlockPlaceContext$Type, toPlace: $Block$Type): $BlockState
public "getDescriptionId"(): string
public "m_40610_"(pContext: $BlockPlaceContext$Type, pState: $BlockState$Type): boolean
public "mimicUseOn"(pContext: $UseOnContext$Type, toPlace: $Block$Type, foodProperties: $FoodProperties$Type): $InteractionResult
public "mimicPlace"(pContext: $BlockPlaceContext$Type, toPlace: $Block$Type, overrideSound: $SoundType$Type): $InteractionResult
public "registerBlocks"(pBlockToItemMap: $Map$Type<($Block$Type), ($Item$Type)>, pItem: $Item$Type): void
public "getFoodProperties"(): $FoodProperties
public "isEdible"(): boolean
public "getBlock"(): $Block
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "descriptionId"(): string
get "foodProperties"(): $FoodProperties
get "edible"(): boolean
get "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerItem$Type = ($BlockPlacerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlacerItem_ = $BlockPlacerItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement" {
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockPlacerItem, $BlockPlacerItem$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$BlockPlacerItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"

export class $AdditionalItemPlacement {

constructor(placeable: $Block$Type)

public "getPlacedBlock"(): $Block
public "overridePlace"(pContext: $BlockPlaceContext$Type): $InteractionResult
public static "getBlockPlacer"(): $BlockPlacerItem
public "overrideUseOn"(pContext: $UseOnContext$Type, foodProperties: $FoodProperties$Type): $InteractionResult
public "overrideGetPlacementState"(pContext: $BlockPlaceContext$Type): $BlockState
public "overrideUpdatePlacementContext"(context: $BlockPlaceContext$Type): $BlockPlaceContext
get "placedBlock"(): $Block
get "blockPlacer"(): $BlockPlacerItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdditionalItemPlacement$Type = ($AdditionalItemPlacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdditionalItemPlacement_ = $AdditionalItemPlacement$Type;
}}
declare module "packages/net/mehvahdjukaar/sawmill/$WoodcuttingRecipe" {
import {$SingleItemRecipe, $SingleItemRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SingleItemRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $WoodcuttingRecipe extends $SingleItemRecipe {

constructor(resourceLocation: $ResourceLocation$Type, string: string, ingredient: $Ingredient$Type, itemStack: $ItemStack$Type, inputCount: integer)

public "getInputCount"(): integer
public "getToastSymbol"(): $ItemStack
public "matches"(container: $Container$Type, level: $Level$Type): boolean
public "isSpecial"(): boolean
get "inputCount"(): integer
get "toastSymbol"(): $ItemStack
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodcuttingRecipe$Type = ($WoodcuttingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodcuttingRecipe_ = $WoodcuttingRecipe$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$BrainAccessor" {
import {$SensorType, $SensorType$Type} from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import {$Sensor, $Sensor$Type} from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import {$Behavior, $Behavior$Type} from "packages/net/minecraft/world/entity/ai/behavior/$Behavior"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BrainAccessor<E extends $LivingEntity> {

 "getSensors"(): $Map<($SensorType<(any)>), ($Sensor<(any)>)>
 "getAvailableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($Behavior<(any)>)>)>)>
}

export namespace $BrainAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainAccessor$Type<E> = ($BrainAccessor<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainAccessor_<E> = $BrainAccessor$Type<(E)>;
}}
declare module "packages/net/mehvahdjukaar/sawmill/$SawmillBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$WaterBlock, $WaterBlock$Type} from "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SawmillBlock extends $WaterBlock {
static readonly "BOTTOM": $BooleanProperty
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

constructor()

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getMenuProvider"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawmillBlock$Type = ($SawmillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawmillBlock_ = $SawmillBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/block/$WaterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $WaterBlock extends $Block implements $SimpleWaterloggedBlock {
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


public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(stateIn: $BlockState$Type, facing: $Direction$Type, facingState: $BlockState$Type, worldIn: $LevelAccessor$Type, currentPos: $BlockPos$Type, facingPos: $BlockPos$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, reader: $BlockGetter$Type, pos: $BlockPos$Type, PathComputationType: $PathComputationType$Type): boolean
public "getFluidState"(state: $BlockState$Type): $FluidState
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
export type $WaterBlock$Type = ($WaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterBlock_ = $WaterBlock$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MapBlockMarker, $MapBlockMarker$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $MapDecorationType<D extends $CustomMapDecoration, M extends $MapBlockMarker<(D)>> {

 "getAssociatedStructure"(): $Optional<($HolderSet<($Structure)>)>
 "getWorldMarkerFromWorld"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): M
 "loadDecorationFromBuffer"(arg0: $FriendlyByteBuf$Type): D
 "loadMarkerFromNBT"(arg0: $CompoundTag$Type): M
 "getDefaultMapColor"(): integer
 "createEmptyMarker"(): M
 "isFromWorld"(): boolean
 "getCustomFactoryID"(): $ResourceLocation
}

export namespace $MapDecorationType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecorationType$Type<D, M> = ($MapDecorationType<(D), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapDecorationType_<D, M> = $MapDecorationType$Type<(D), (M)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DispenserBlockAccessor {

}

export namespace $DispenserBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockAccessor$Type = ($DispenserBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserBlockAccessor_ = $DispenserBlockAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockEntityAccessor" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $DispenserBlockEntityAccessor {

 "getItems"(): $NonNullList<($ItemStack)>

(): $NonNullList<($ItemStack)>
}

export namespace $DispenserBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockEntityAccessor$Type = ($DispenserBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserBlockEntityAccessor_ = $DispenserBlockEntityAccessor$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedPistonTile" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IExtendedPistonTile {

 "tickMovedBlock"(arg0: $Level$Type, arg1: $BlockPos$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type): void
}

export namespace $IExtendedPistonTile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedPistonTile$Type = ($IExtendedPistonTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedPistonTile_ = $IExtendedPistonTile$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$CaveFilter$Type" {
import {$CaveFilter, $CaveFilter$Type} from "packages/net/mehvahdjukaar/moonlight/core/misc/$CaveFilter"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$PlacementModifierType, $PlacementModifierType$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifierType"

export class $CaveFilter$Type implements $PlacementModifierType<($CaveFilter)> {

constructor()

public "codec"(): $Codec<($CaveFilter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveFilter$Type$Type = ($CaveFilter$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveFilter$Type_ = $CaveFilter$Type$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedItem" {
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"

export interface $IExtendedItem {

 "moonlight$getClientAnimationExtension"(): any
 "moonlight$setClientAnimationExtension"(arg0: any): void
 "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
 "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}

export namespace $IExtendedItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedItem$Type = ($IExtendedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedItem_ = $IExtendedItem$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$CustomMapData, $CustomMapData$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomMapData$Type<T extends $CustomMapData<(any)>> extends $Record {

constructor(id: $ResourceLocation$Type, factory: $Supplier$Type<(T)>)

public "get"(mapData: $MapItemSavedData$Type): T
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$Type$Type<T> = ($CustomMapData$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData$Type_<T> = $CustomMapData$Type$Type<(T)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomMapData$DirtyCounter {

 "isDirty"(): boolean
 "clearDirty"(): void
}

export namespace $CustomMapData$DirtyCounter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$DirtyCounter$Type = ($CustomMapData$DirtyCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapData$DirtyCounter_ = $CustomMapData$DirtyCounter$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IMapDataPacketExtension" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MapItemSavedData$MapPatch, $MapItemSavedData$MapPatch$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData$MapPatch"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $IMapDataPacketExtension {

 "moonlight$getCustomMapDataTag"(): $CompoundTag
 "moonlight$getColorPatch"(): $MapItemSavedData$MapPatch
 "moonlight$sendCustomDecorations"(arg0: $Collection$Type<($CustomMapDecoration$Type)>): void
 "moonlight$sendCustomMapDataTag"(arg0: $CompoundTag$Type): void
 "moonlight$getDimension"(): $ResourceKey<($Level)>
}

export namespace $IMapDataPacketExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMapDataPacketExtension$Type = ($IMapDataPacketExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMapDataPacketExtension_ = $IMapDataPacketExtension$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$MapDecorationType, $MapDecorationType$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MapBlockMarker<D extends $CustomMapDecoration> {
static readonly "HAS_SMALL_TEXTURE_FLAG": integer


public "getName"(): $Component
public "equals"(o: any): boolean
public "hashCode"(): integer
public "setName"(name: $Component$Type): void
public "getType"(): $MapDecorationType<(D), (any)>
public "getFlags"(): integer
public "shouldSave"(): boolean
public "hasFlag"(flag: integer): boolean
public "getRotation"(): float
public "setPos"(pos: $BlockPos$Type): void
public "setRotation"(rot: integer): void
public "createDecorationFromMarker"(data: $MapItemSavedData$Type): D
public "loadFromNBT"(compound: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
public "saveToNBT"(compound: $CompoundTag$Type): $CompoundTag
public "saveToNBT"(): $CompoundTag
public "setPersistent"(persistent: boolean): void
public "getTypeId"(): string
public "getPos"(): $BlockPos
public "shouldRefresh"(): boolean
public "getMarkerId"(): string
get "name"(): $Component
set "name"(value: $Component$Type)
get "type"(): $MapDecorationType<(D), (any)>
get "flags"(): integer
get "rotation"(): float
set "pos"(value: $BlockPos$Type)
set "rotation"(value: integer)
set "persistent"(value: boolean)
get "typeId"(): string
get "pos"(): $BlockPos
get "markerId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapBlockMarker$Type<D> = ($MapBlockMarker<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapBlockMarker_<D> = $MapBlockMarker$Type<(D)>;
}}
declare module "packages/net/mehvahdjukaar/moonlight/api/map/$ExpandedMapData" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomMapDecoration, $CustomMapDecoration$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$CustomMapData$Type, $CustomMapData$Type$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import {$CustomMapData, $CustomMapData$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"
import {$MapBlockMarker, $MapBlockMarker$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$Type} from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ExpandedMapData {

 "copy"(): $MapItemSavedData
 "getCustomData"(): $Map<($ResourceLocation), ($CustomMapData<(any)>)>
 "getVanillaDecorationSize"(): integer
 "getCustomDecorations"(): $Map<(string), ($CustomMapDecoration)>
 "getCustomMarkers"(): $Map<(string), ($MapBlockMarker<(any)>)>
 "addCustomMarker"<M extends $MapBlockMarker<(any)>>(arg0: M): void
 "removeCustomMarker"(arg0: string): boolean
 "setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type$Type<(any)>, arg1: $Consumer$Type<(H)>): void
 "setCustomDecorationsDirty"(): void
 "resetCustomDecoration"(): void
 "toggleCustomDecoration"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
}

export namespace $ExpandedMapData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpandedMapData$Type = ($ExpandedMapData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExpandedMapData_ = $ExpandedMapData$Type;
}}
declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$CaveFilter" {
import {$PlacementFilter, $PlacementFilter$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacementFilter"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$PlacementModifierType, $PlacementModifierType$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifierType"

export class $CaveFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<($CaveFilter)>


public "type"(): $PlacementModifierType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveFilter$Type = ($CaveFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveFilter_ = $CaveFilter$Type;
}}
