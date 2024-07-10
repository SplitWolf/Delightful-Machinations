declare module "packages/earth/terrarium/chipped/common/blocks/$WorkbenchBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/teamresourceful/resourcefullib/common/registry/$RegistryEntry"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ChippedRecipe, $ChippedRecipe$Type} from "packages/earth/terrarium/chipped/common/recipes/$ChippedRecipe"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$WorkbenchBlock$WorkbenchModelType, $WorkbenchBlock$WorkbenchModelType$Type} from "packages/earth/terrarium/chipped/common/blocks/$WorkbenchBlock$WorkbenchModelType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $WorkbenchBlock extends $HorizontalDirectionalBlock {
static readonly "MODEL_TYPE": $EnumProperty<($WorkbenchBlock$WorkbenchModelType)>
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

constructor(recipeType: $RegistryEntry$Type<($RecipeType$Type<($ChippedRecipe$Type)>)>, properties: $BlockBehaviour$Properties$Type)

public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
/**
 * 
 * @deprecated
 */
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "recipeType"(): $RecipeType<($ChippedRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchBlock$Type = ($WorkbenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchBlock_ = $WorkbenchBlock$Type;
}}
declare module "packages/earth/terrarium/chipped/common/blocks/$SpecialPointedDripstoneBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Fallable, $Fallable$Type} from "packages/net/minecraft/world/level/block/$Fallable"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockBehaviour$OffsetType, $BlockBehaviour$OffsetType$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DripstoneThickness, $DripstoneThickness$Type} from "packages/net/minecraft/world/level/block/state/properties/$DripstoneThickness"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $SpecialPointedDripstoneBlock extends $Block implements $Fallable, $SimpleWaterloggedBlock {
static readonly "TIP_DIRECTION": $DirectionProperty
static readonly "THICKNESS": $EnumProperty<($DripstoneThickness)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $Random$Type): void
public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, fallDistance: float): void
public static "growStalactiteOrStalagmiteIfPossible"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $Random$Type): void
public "randomTick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $Random$Type): void
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $Random$Type): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "isCollisionShapeFullBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getMaxHorizontalOffset"(): float
public "getOcclusionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "onBrokenAfterFall"(level: $Level$Type, pos: $BlockPos$Type, fallingBlock: $FallingBlockEntity$Type): void
public "getPistonPushReaction"(state: $BlockState$Type): $PushReaction
public "onProjectileHit"(level: $Level$Type, state: $BlockState$Type, hit: $BlockHitResult$Type, projectile: $Projectile$Type): void
public static "getCauldronFillFluidType"(level: $Level$Type, pos: $BlockPos$Type): $Fluid
public "getHurtsEntitySelector"(): $Predicate<($Entity)>
public static "canDrip"(state: $BlockState$Type): boolean
public static "maybeFillCauldron"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, randChance: float): void
public "getOffsetType"(): $BlockBehaviour$OffsetType
public "getFallDamageSource"(arg0: $Entity$Type): $DamageSource
public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "maxHorizontalOffset"(): float
get "hurtsEntitySelector"(): $Predicate<($Entity)>
get "offsetType"(): $BlockBehaviour$OffsetType
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialPointedDripstoneBlock$Type = ($SpecialPointedDripstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialPointedDripstoneBlock_ = $SpecialPointedDripstoneBlock$Type;
}}
declare module "packages/earth/terrarium/chipped/common/blocks/$SpecialLanternBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
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
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SpecialLanternBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "CHONK_LANTERN_SHAPE": $VoxelShape
static readonly "THICC_LANTERN_SHAPE": $VoxelShape
static readonly "DONUT_LANTERN_SHAPE_EAST": $VoxelShape
static readonly "DONUT_LANTERN_SHAPE_NORTH": $VoxelShape
static readonly "TALL_LANTERN_SHAPE": $VoxelShape
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

constructor(properties: $BlockBehaviour$Properties$Type, shape: $VoxelShape$Type)
constructor(properties: $BlockBehaviour$Properties$Type, toEast: $VoxelShape$Type, toNorth: $VoxelShape$Type)

public "getShape"(state: $BlockState$Type): $VoxelShape
public "getShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
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
export type $SpecialLanternBlock$Type = ($SpecialLanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialLanternBlock_ = $SpecialLanternBlock$Type;
}}
declare module "packages/earth/terrarium/chipped/common/recipes/$ChippedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ChippedRecipe, $ChippedRecipe$Type} from "packages/earth/terrarium/chipped/common/recipes/$ChippedRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ChippedRecipe$Serializer extends $Record implements $RecipeSerializer<($ChippedRecipe)> {

constructor(type: $Supplier$Type<($RecipeType$Type<($ChippedRecipe$Type)>)>, icon: $Supplier$Type<($Block$Type)>)

public "type"(): $Supplier<($RecipeType<($ChippedRecipe)>)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "fromJson"(id: $ResourceLocation$Type, json: $JsonObject$Type): $ChippedRecipe
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $ChippedRecipe
public "icon"(): $Supplier<($Block)>
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $ChippedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ChippedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChippedRecipe$Serializer$Type = ($ChippedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChippedRecipe$Serializer_ = $ChippedRecipe$Serializer$Type;
}}
declare module "packages/earth/terrarium/chipped/common/blocks/$DirectionBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $DirectionBlock extends $HorizontalDirectionalBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionBlock$Type = ($DirectionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionBlock_ = $DirectionBlock$Type;
}}
declare module "packages/earth/terrarium/chipped/common/recipes/$ChippedRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ChippedRecipe$Serializer, $ChippedRecipe$Serializer$Type} from "packages/earth/terrarium/chipped/common/recipes/$ChippedRecipe$Serializer"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ChippedRecipe extends $Record implements $Recipe<($Container)> {

constructor(serializer: $ChippedRecipe$Serializer$Type, id: $ResourceLocation$Type, group: string, tags: $List$Type<(any)>, icon: $Block$Type)

public "group"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "serializer"(): $ChippedRecipe$Serializer
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(i: integer, j: integer): boolean
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "assemble"(container: $Container$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "matches"(container: $Container$Type, level: $Level$Type): boolean
public "isSpecial"(): boolean
public "icon"(): $Block
public "tags"(): $List<(any)>
public "getId"(): $ResourceLocation
public "getResults"(stack: $ItemStack$Type): $Stream<($ItemStack)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
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
get "toastSymbol"(): $ItemStack
get "special"(): boolean
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChippedRecipe$Type = ($ChippedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChippedRecipe_ = $ChippedRecipe$Type;
}}
declare module "packages/earth/terrarium/chipped/common/blocks/$WorkbenchBlock$WorkbenchModelType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $WorkbenchBlock$WorkbenchModelType extends $Enum<($WorkbenchBlock$WorkbenchModelType)> implements $StringRepresentable {
static readonly "MAIN": $WorkbenchBlock$WorkbenchModelType
static readonly "SIDE": $WorkbenchBlock$WorkbenchModelType


public "toString"(): string
public static "values"(): ($WorkbenchBlock$WorkbenchModelType)[]
public static "valueOf"(name: string): $WorkbenchBlock$WorkbenchModelType
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
export type $WorkbenchBlock$WorkbenchModelType$Type = (("side") | ("main")) | ($WorkbenchBlock$WorkbenchModelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchBlock$WorkbenchModelType_ = $WorkbenchBlock$WorkbenchModelType$Type;
}}
