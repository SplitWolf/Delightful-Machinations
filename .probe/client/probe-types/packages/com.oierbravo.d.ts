declare module "packages/com/oierbravo/create_mechanical_spawner/content/components/$SpawnerRecipe$SpawnerRecipeWrapper" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $SpawnerRecipe$SpawnerRecipeWrapper extends $SimpleContainer {
readonly "items": $NonNullList<($ItemStack)>

constructor(arg0: $FluidStack$Type)

public "getFluidStack"(): $FluidStack
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "fluidStack"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerRecipe$SpawnerRecipeWrapper$Type = ($SpawnerRecipe$SpawnerRecipeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerRecipe$SpawnerRecipeWrapper_ = $SpawnerRecipe$SpawnerRecipeWrapper$Type;
}}
declare module "packages/com/oierbravo/create_mechanical_spawner/content/components/$SpawnerRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$SpawnerRecipe, $SpawnerRecipe$Type} from "packages/com/oierbravo/create_mechanical_spawner/content/components/$SpawnerRecipe"

export class $SpawnerRecipe$Serializer implements $RecipeSerializer<($SpawnerRecipe)> {
static readonly "INSTANCE": $SpawnerRecipe$Serializer
static readonly "ID": $ResourceLocation

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SpawnerRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SpawnerRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SpawnerRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SpawnerRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerRecipe$Serializer$Type = ($SpawnerRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerRecipe$Serializer_ = $SpawnerRecipe$Serializer$Type;
}}
declare module "packages/com/oierbravo/create_mechanical_spawner/content/components/$SpawnerBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpawnerBlockEntity, $SpawnerBlockEntity$Type} from "packages/com/oierbravo/create_mechanical_spawner/content/components/$SpawnerBlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HorizontalKineticBlock, $HorizontalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$HorizontalKineticBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SpawnerBlock extends $HorizontalKineticBlock implements $IBE<($SpawnerBlockEntity)>, $IWrenchable {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityClass"(): $Class<($SpawnerBlockEntity)>
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($SpawnerBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($SpawnerBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($SpawnerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $SpawnerBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($SpawnerBlockEntity)>
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerBlock$Type = ($SpawnerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerBlock_ = $SpawnerBlock$Type;
}}
declare module "packages/com/oierbravo/create_mechanical_spawner/content/components/$SpawnerRecipeBuilder$SpawnerRecipeParams" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SpawnerRecipeBuilder$SpawnerRecipeParams {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerRecipeBuilder$SpawnerRecipeParams$Type = ($SpawnerRecipeBuilder$SpawnerRecipeParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerRecipeBuilder$SpawnerRecipeParams_ = $SpawnerRecipeBuilder$SpawnerRecipeParams$Type;
}}
declare module "packages/com/oierbravo/create_mechanical_spawner/content/components/$SpawnerRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$SpawnerRecipe$SpawnerRecipeWrapper, $SpawnerRecipe$SpawnerRecipeWrapper$Type} from "packages/com/oierbravo/create_mechanical_spawner/content/components/$SpawnerRecipe$SpawnerRecipeWrapper"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeTypeInfo, $IRecipeTypeInfo$Type} from "packages/com/simibubi/create/foundation/recipe/$IRecipeTypeInfo"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$SpawnerRecipeBuilder$SpawnerRecipeParams, $SpawnerRecipeBuilder$SpawnerRecipeParams$Type} from "packages/com/oierbravo/create_mechanical_spawner/content/components/$SpawnerRecipeBuilder$SpawnerRecipeParams"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SpawnerRecipe implements $Recipe<($SimpleContainer)>, $IRecipeTypeInfo {

constructor(arg0: $SpawnerRecipeBuilder$SpawnerRecipeParams$Type)

public "matches"(arg0: $SimpleContainer$Type, arg1: $Level$Type): boolean
public "matches"(arg0: $FluidStack$Type): boolean
public "matches"(arg0: $SpawnerRecipe$SpawnerRecipeWrapper$Type, arg1: $Level$Type): boolean
public "getFluidAmount"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getProcessingTime"(): integer
public "assemble"(arg0: $SimpleContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getFluidIngredient"(): $FluidIngredient
public "getId"(): $ResourceLocation
public "getMob"(): $EntityType<(any)>
public "getRemainingItems"(arg0: $SimpleContainer$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getType"<T extends $RecipeType<(any)>>(): T
public "getSerializer"<T extends $RecipeSerializer<(any)>>(): T
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
get "fluidAmount"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "processingTime"(): integer
get "fluidIngredient"(): $FluidIngredient
get "id"(): $ResourceLocation
get "mob"(): $EntityType<(any)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "id"(): $ResourceLocation
get "type"(): T
get "serializer"(): T
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
export type $SpawnerRecipe$Type = ($SpawnerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerRecipe_ = $SpawnerRecipe$Type;
}}
declare module "packages/com/oierbravo/create_mechanical_spawner/content/components/$SpawnerBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpawnerBlockEntity extends $KineticBlockEntity {
 "timer": integer
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getRange"(): integer
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "spawnParticles"(): void
public static "getCapacityMultiplier"(): integer
public "getSpawnBlockPosition"(arg0: $Direction$Type, arg1: boolean): $List<($BlockPos)>
public "getProcessingSpeed"(): integer
public "getProgressPercent"(): integer
public "collectSpawnGroup"(): $List<($SpawnerBlockEntity)>
get "range"(): integer
get "capacityMultiplier"(): integer
get "processingSpeed"(): integer
get "progressPercent"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerBlockEntity$Type = ($SpawnerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerBlockEntity_ = $SpawnerBlockEntity$Type;
}}
declare module "packages/com/oierbravo/create_mechanical_spawner/compat/kubejs/$SpawnerRecipeSchema$SpawnerRecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpawnerRecipeSchema$SpawnerRecipeJS extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerRecipeSchema$SpawnerRecipeJS$Type = ($SpawnerRecipeSchema$SpawnerRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerRecipeSchema$SpawnerRecipeJS_ = $SpawnerRecipeSchema$SpawnerRecipeJS$Type;
}}
