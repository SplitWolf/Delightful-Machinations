declare module "packages/commoble/jumbofurnace/jumbo_furnace/$JumboFurnaceItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JumboFurnaceItem extends $Item {
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
export type $JumboFurnaceItem$Type = ($JumboFurnaceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JumboFurnaceItem_ = $JumboFurnaceItem$Type;
}}
declare module "packages/commoble/jumbofurnace/recipes/$ClaimableRecipeWrapper" {
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ClaimableRecipeWrapper extends $RecipeWrapper {

constructor(arg0: $IItemHandlerModifiable$Type)

public "getRecipeCount"(): integer
public "getRecipes"(): $List<($Recipe<($ClaimableRecipeWrapper)>)>
public "getItemsBeingSmelted"(): $IItemHandler
public "matchAndClaimInputs"(arg0: $Recipe$Type<($ClaimableRecipeWrapper$Type)>, arg1: $Level$Type, arg2: $IItemHandler$Type): boolean
public "hasUnusedInputsLeft"(): boolean
public "getUnusedInputs"(): $IItemHandler
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "recipeCount"(): integer
get "recipes"(): $List<($Recipe<($ClaimableRecipeWrapper)>)>
get "itemsBeingSmelted"(): $IItemHandler
get "unusedInputs"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClaimableRecipeWrapper$Type = ($ClaimableRecipeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClaimableRecipeWrapper_ = $ClaimableRecipeWrapper$Type;
}}
declare module "packages/commoble/jumbofurnace/recipes/$JumboFurnaceRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ClaimableRecipeWrapper, $ClaimableRecipeWrapper$Type} from "packages/commoble/jumbofurnace/recipes/$ClaimableRecipeWrapper"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$SmeltingRecipe, $SmeltingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmeltingRecipe"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $JumboFurnaceRecipe implements $Recipe<($ClaimableRecipeWrapper)> {
readonly "type": $RecipeType<(any)>
readonly "id": $ResourceLocation
readonly "group": string
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "result": $ItemStack
readonly "experience": float

constructor(arg0: $SmeltingRecipe$Type)
constructor(arg0: $RecipeType$Type<(any)>, arg1: $ResourceLocation$Type, arg2: string, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: float)

public "matches"(arg0: $ClaimableRecipeWrapper$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "assemble"(arg0: $ClaimableRecipeWrapper$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $ClaimableRecipeWrapper$Type): $NonNullList<($ItemStack)>
public "getId"(): $ResourceLocation
public "getSpecificity"(): integer
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
get "special"(): boolean
get "id"(): $ResourceLocation
get "specificity"(): integer
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
export type $JumboFurnaceRecipe$Type = ($JumboFurnaceRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JumboFurnaceRecipe_ = $JumboFurnaceRecipe$Type;
}}
declare module "packages/commoble/jumbofurnace/recipes/$JumboFurnaceRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$JumboFurnaceRecipe, $JumboFurnaceRecipe$Type} from "packages/commoble/jumbofurnace/recipes/$JumboFurnaceRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $JumboFurnaceRecipeSerializer implements $RecipeSerializer<($JumboFurnaceRecipe)> {
readonly "recipeType": $RecipeType<($JumboFurnaceRecipe)>

constructor(arg0: $RecipeType$Type<($JumboFurnaceRecipe$Type)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $JumboFurnaceRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $JumboFurnaceRecipe
public static "readIngredients"(arg0: $JsonArray$Type): $NonNullList<($Ingredient)>
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $JumboFurnaceRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $JumboFurnaceRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JumboFurnaceRecipeSerializer$Type = ($JumboFurnaceRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JumboFurnaceRecipeSerializer_ = $JumboFurnaceRecipeSerializer$Type;
}}
declare module "packages/commoble/jumbofurnace/jumbo_furnace/$JumboFurnaceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $JumboFurnaceBlock extends $Block implements $EntityBlock {
static readonly "X": $IntegerProperty
static readonly "Y": $IntegerProperty
static readonly "Z": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "getCorePos"(arg0: $BlockState$Type, arg1: $BlockPos$Type): $BlockPos
public "destroyNextBlockPos"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "getSmelterHoleDirection"(arg0: $BlockState$Type): $Direction
public static "calcRedstoneFromItemHandler"(arg0: $IItemHandler$Type): integer
public "getStatesForFurnace"(arg0: $BlockPos$Type): $List<($Pair<($BlockPos), ($BlockState)>)>
/**
 * 
 * @deprecated
 */
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isCore"(arg0: $BlockState$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JumboFurnaceBlock$Type = ($JumboFurnaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JumboFurnaceBlock_ = $JumboFurnaceBlock$Type;
}}
