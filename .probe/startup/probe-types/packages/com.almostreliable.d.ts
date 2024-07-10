declare module "packages/com/almostreliable/ponderjs/$PonderItemTagEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$PonderTag, $PonderTag$Type} from "packages/com/simibubi/create/foundation/ponder/$PonderTag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $PonderItemTagEventJS extends $EventJS {

constructor()

public "createTag"(arg0: string, arg1: $ItemStack$Type, arg2: string, arg3: string): void
public "createTag"(arg0: string, arg1: $ItemStack$Type, arg2: string, arg3: string, arg4: $Ingredient$Type): void
public "add"(arg0: $PonderTag$Type, arg1: $Ingredient$Type): void
public "remove"(arg0: $PonderTag$Type, arg1: $Ingredient$Type): void
public "removeTag"(...arg0: ($PonderTag$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderItemTagEventJS$Type = ($PonderItemTagEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderItemTagEventJS_ = $PonderItemTagEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder" {
import {$DistancePredicate, $DistancePredicate$Type} from "packages/net/minecraft/advancements/critereon/$DistancePredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $DistancePredicateBuilder {

constructor()

public "y"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "build"(): $DistancePredicate
public "x"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "absolute"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "z"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "horizontal"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistancePredicateBuilder$Type = ($DistancePredicateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistancePredicateBuilder_ = $DistancePredicateBuilder$Type;
}}
declare module "packages/com/almostreliable/unified/utils/$UnifyTag" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $UnifyTag<T> extends $Record {

constructor(boundType: $Class$Type<(T)>, location: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "location"(): $ResourceLocation
public static "item"(location: $ResourceLocation$Type): $UnifyTag<($Item)>
public static "block"(location: $ResourceLocation$Type): $UnifyTag<($Block)>
public "boundType"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnifyTag$Type<T> = ($UnifyTag<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnifyTag_<T> = $UnifyTag$Type<(T)>;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder" {
import {$ParticleTransformation, $ParticleTransformation$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ParticleTransformation$Simple, $ParticleTransformation$Simple$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation$Simple"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ParticleDataBuilder<O extends $ParticleDataBuilder<(O), (PO)>, PO extends $ParticleOptions> {

constructor()

public "lifetime"(arg0: integer): O
public "scale"(arg0: float): O
public "transform"(arg0: $ParticleTransformation$Type): O
public "roll"(arg0: float): O
public "color"(arg0: $Color$Type): O
public "density"(arg0: integer): O
public "collision"(arg0: boolean): O
public "delta"(arg0: $Vec3$Type): O
public "transformPosition"(arg0: $ParticleTransformation$Simple$Type): O
public "motion"(arg0: $Vec3$Type): O
public "area"(arg0: $Vec3$Type): O
public "gravity"(arg0: float): O
public "speed"(arg0: $Vec3$Type): O
public "friction"(arg0: float): O
public "withinBlockSpace"(): O
public "transformMotion"(arg0: $ParticleTransformation$Simple$Type): O
public "physics"(arg0: boolean): O
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleDataBuilder$Type<O, PO> = ($ParticleDataBuilder<(O), (PO)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleDataBuilder_<O, PO> = $ParticleDataBuilder$Type<(O), (PO)>;
}}
declare module "packages/com/almostreliable/ponderjs/api/$ExtendedSceneBuilder$ExtendedWorldInstructions" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockStateFunction, $BlockStateFunction$Type} from "packages/com/almostreliable/ponderjs/util/$BlockStateFunction"
import {$Selection, $Selection$Type} from "packages/com/simibubi/create/foundation/ponder/$Selection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ExtendedSceneBuilder, $ExtendedSceneBuilder$Type} from "packages/com/almostreliable/ponderjs/api/$ExtendedSceneBuilder"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SceneBuilder$WorldInstructions, $SceneBuilder$WorldInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$WorldInstructions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ElementLink, $ElementLink$Type} from "packages/com/simibubi/create/foundation/ponder/$ElementLink"
import {$EntityElement, $EntityElement$Type} from "packages/com/simibubi/create/foundation/ponder/element/$EntityElement"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ExtendedSceneBuilder$ExtendedWorldInstructions extends $SceneBuilder$WorldInstructions {

constructor(arg0: $ExtendedSceneBuilder$Type)

public "createEntity"(arg0: $EntityType$Type<(any)>, arg1: $Vec3$Type): $ElementLink<($EntityElement)>
public "createEntity"(arg0: $EntityType$Type<(any)>, arg1: $Vec3$Type, arg2: $Consumer$Type<($Entity$Type)>): $ElementLink<($EntityElement)>
public "modifyBlocks"(arg0: $Selection$Type, arg1: $BlockStateFunction$Type, arg2: boolean): void
public "modifyBlocks"(arg0: $Selection$Type, arg1: boolean, arg2: $BlockStateFunction$Type): void
public "modifyBlocks"(arg0: $Selection$Type, arg1: $BlockStateFunction$Type): void
public "removeEntity"(arg0: $ElementLink$Type<($EntityElement$Type)>): void
public "modifyBlockEntityNBT"(arg0: $Selection$Type, arg1: boolean, arg2: $Consumer$Type<($CompoundTag$Type)>): void
public "modifyBlockEntityNBT"(arg0: $Selection$Type, arg1: $Consumer$Type<($CompoundTag$Type)>): void
public "modifyBlock"(arg0: $BlockPos$Type, arg1: $BlockStateFunction$Type, arg2: boolean): void
public "setBlocks"(arg0: $Selection$Type, arg1: $BlockState$Type): void
public "setBlocks"(arg0: $Selection$Type, arg1: boolean, arg2: $BlockState$Type): void
/**
 * 
 * @deprecated
 */
public "modifyTileNBT"(arg0: $Selection$Type, arg1: $Consumer$Type<($CompoundTag$Type)>, arg2: boolean): void
/**
 * 
 * @deprecated
 */
public "modifyTileNBT"(arg0: $Selection$Type, arg1: $Consumer$Type<($CompoundTag$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSceneBuilder$ExtendedWorldInstructions$Type = ($ExtendedSceneBuilder$ExtendedWorldInstructions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSceneBuilder$ExtendedWorldInstructions_ = $ExtendedSceneBuilder$ExtendedWorldInstructions$Type;
}}
declare module "packages/com/almostreliable/ponderjs/api/$SceneBuildingUtilDelegate" {
import {$SceneBuildingUtil, $SceneBuildingUtil$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuildingUtil"
import {$SceneBuildingUtil$SelectionUtil, $SceneBuildingUtil$SelectionUtil$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuildingUtil$SelectionUtil"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SceneBuildingUtil$PositionUtil, $SceneBuildingUtil$PositionUtil$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuildingUtil$PositionUtil"
import {$SceneBuildingUtil$VectorUtil, $SceneBuildingUtil$VectorUtil$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuildingUtil$VectorUtil"

export class $SceneBuildingUtilDelegate {

constructor(arg0: $SceneBuildingUtil$Type)

public "getDefaultState"(arg0: $Block$Type): $BlockState
public "getGrid"(): $SceneBuildingUtil$PositionUtil
public "getVector"(): $SceneBuildingUtil$VectorUtil
public "getSelect"(): $SceneBuildingUtil$SelectionUtil
get "grid"(): $SceneBuildingUtil$PositionUtil
get "vector"(): $SceneBuildingUtil$VectorUtil
get "select"(): $SceneBuildingUtil$SelectionUtil
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneBuildingUtilDelegate$Type = ($SceneBuildingUtilDelegate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneBuildingUtilDelegate_ = $SceneBuildingUtilDelegate$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootEntry$Generator" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootEntry$Generator {

 "create"(arg0: $LootContext$Type): $ItemStack

(arg0: $LootContext$Type): $ItemStack
}

export namespace $LootEntry$Generator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$Generator$Type = ($LootEntry$Generator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntry$Generator_ = $LootEntry$Generator$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation$Data" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $ParticleTransformation$Data extends $Record {

constructor(position: $Vec3$Type, motion: $Vec3$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "position"(): $Vec3
public static "of"(arg0: any): $ParticleTransformation$Data
public "motion"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleTransformation$Data$Type = ($ParticleTransformation$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleTransformation$Data_ = $ParticleTransformation$Data$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Modifier {

constructor(probability: float, attribute: $Attribute$Type, operation: $AttributeModifier$Operation$Type, amount: $NumberProvider$Type, name: string, slots: $Function$Type<($ItemStack$Type), (($EquipmentSlot$Type)[])>, uuid: $UUID$Type)

public "createAttributeModifier"(context: $LootContext$Type): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Type = ($AddAttributesFunction$Modifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier_ = $AddAttributesFunction$Modifier$Type;
}}
declare module "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker" {
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
import {$ClientRecipeTracker$ClientRecipeLink, $ClientRecipeTracker$ClientRecipeLink$Type} from "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker$ClientRecipeLink"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ClientRecipeTracker implements $Recipe<($Container)> {
static readonly "ID": $ResourceLocation
static readonly "RECIPES": string
static readonly "NAMESPACE": string
static readonly "UNIFIED_FLAG": integer
static readonly "DUPLICATE_FLAG": integer
static readonly "SERIALIZER": $RecipeSerializer<($ClientRecipeTracker)>
static readonly "TYPE": $RecipeType<($ClientRecipeTracker)>


public "getLink"(recipeId: $ResourceLocation$Type): $ClientRecipeTracker$ClientRecipeLink
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "assemble"(container: $Container$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "matches"(container: $Container$Type, level: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isSpecial"(): boolean
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
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
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
export type $ClientRecipeTracker$Type = ($ClientRecipeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker_ = $ClientRecipeTracker$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder" {
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AddAttributesFunction$Modifier$Builder, $AddAttributesFunction$Modifier$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder"
import {$AddAttributesFunction, $AddAttributesFunction$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {

constructor()

public "add"(modifier: $AddAttributesFunction$Modifier$Type): $AddAttributesFunction$Builder
public "add"(attribute: $Attribute$Type, amount: $NumberProvider$Type, action: $Consumer$Type<($AddAttributesFunction$Modifier$Builder$Type)>): $AddAttributesFunction$Builder
public "build"(): $AddAttributesFunction
public "simple"(probability: float, attribute: $Attribute$Type, amount: $NumberProvider$Type): $AddAttributesFunction$Builder
public "simple"(attribute: $Attribute$Type, amount: $NumberProvider$Type): $AddAttributesFunction$Builder
public "preserveDefaults"(flag: boolean): $AddAttributesFunction$Builder
public "forSlots"(probability: float, attribute: $Attribute$Type, amount: $NumberProvider$Type, slots: ($EquipmentSlot$Type)[]): $AddAttributesFunction$Builder
public "forSlots"(attribute: $Attribute$Type, amount: $NumberProvider$Type, slots: ($EquipmentSlot$Type)[]): $AddAttributesFunction$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Builder$Type = ($AddAttributesFunction$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Builder_ = $AddAttributesFunction$Builder$Type;
}}
declare module "packages/com/almostreliable/ponderjs/api/$AbstractPonderBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PonderTag, $PonderTag$Type} from "packages/com/simibubi/create/foundation/ponder/$PonderTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $AbstractPonderBuilder<S extends $AbstractPonderBuilder<(S)>> {

constructor(arg0: $Set$Type<($Item$Type)>)

public "tag"(...arg0: ($PonderTag$Type)[]): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPonderBuilder$Type<S> = ($AbstractPonderBuilder<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPonderBuilder_<S> = $AbstractPonderBuilder$Type<(S)>;
}}
declare module "packages/com/almostreliable/unified/config/$UnifyConfig$TagInheritanceMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UnifyConfig$TagInheritanceMode extends $Enum<($UnifyConfig$TagInheritanceMode)> {
static readonly "ALLOW": $UnifyConfig$TagInheritanceMode
static readonly "DENY": $UnifyConfig$TagInheritanceMode


public static "values"(): ($UnifyConfig$TagInheritanceMode)[]
public static "valueOf"(name: string): $UnifyConfig$TagInheritanceMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnifyConfig$TagInheritanceMode$Type = (("allow") | ("deny")) | ($UnifyConfig$TagInheritanceMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnifyConfig$TagInheritanceMode_ = $UnifyConfig$TagInheritanceMode$Type;
}}
declare module "packages/com/almostreliable/unified/compat/$AlmostKube" {
import {$UnifyConfig, $UnifyConfig$Type} from "packages/com/almostreliable/unified/config/$UnifyConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AlmostKube {


public static "getItemIds"(tag: $ResourceLocation$Type): $Set<(string)>
public static "getUnifyConfig"(): $UnifyConfig
public static "getPreferredTagForItem"(stack: $ItemStack$Type): string
public static "getReplacementForItem"(stack: $ItemStack$Type): $ItemStack
public static "getPreferredItemForTag"(tag: $ResourceLocation$Type): $ItemStack
public static "getTags"(): $Set<(string)>
get "unifyConfig"(): $UnifyConfig
get "tags"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlmostKube$Type = ($AlmostKube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlmostKube_ = $AlmostKube$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$LootActionsContainer" {
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$ILootAction, $ILootAction$Type} from "packages/com/almostreliable/lootjs/core/$ILootAction"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $LootActionsContainer<A extends $LootActionsContainer<(any)>> {

 "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): A
 "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): A
 "removeLoot"(filter: $ItemFilter$Type): A
 "addSequenceLoot"(...entries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): A
 "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): A
 "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): A
 "addAction"(arg0: $ILootAction$Type): A
 "addLoot"(...entries: ($LootEntry$Type)[]): A
 "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): A
 "dropExperience"(amount: integer): A
 "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): A
 "triggerLightningStrike"(shouldDamage: boolean): A

(radius: float, destroy: boolean, fire: boolean): A
}

export namespace $LootActionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionsContainer$Type<A> = ($LootActionsContainer<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootActionsContainer_<A> = $LootActionsContainer$Type<(A)>;
}}
declare module "packages/com/almostreliable/ponderjs/mixin/$PonderWorldAccessor" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $PonderWorldAccessor {

 "ponderjs$makeParticle"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle

(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
}

export namespace $PonderWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderWorldAccessor$Type = ($PonderWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderWorldAccessor_ = $PonderWorldAccessor$Type;
}}
declare module "packages/com/almostreliable/ponderjs/$PonderRegistryEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$PonderBuilderJS, $PonderBuilderJS$Type} from "packages/com/almostreliable/ponderjs/$PonderBuilderJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $PonderRegistryEventJS extends $EventJS {

constructor()

public "create"(arg0: $Ingredient$Type): $PonderBuilderJS
public "printParticleNames"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderRegistryEventJS$Type = ($PonderRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderRegistryEventJS_ = $PonderRegistryEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootHandler" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootHandler {

 "applyLootHandler"(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean

(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootHandler$Type = ($ILootHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootHandler_ = $ILootHandler$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootActionsContainer, $LootActionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootActionsContainer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$LootContextJS, $LootContextJS$Type} from "packages/com/almostreliable/lootjs/kube/$LootContextJS"
import {$GroupedLootBuilder, $GroupedLootBuilder$Type} from "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootActionsBuilderJS implements $LootConditionsContainer<($LootActionsBuilderJS)>, $LootFunctionsContainer<($LootActionsBuilderJS)>, $LootActionsContainer<($LootActionsBuilderJS)> {
static readonly "DEPRECATED_MSG": string

constructor()

public "group"(callback: $Consumer$Type<($GroupedLootBuilder$Type)>): $LootActionsBuilderJS
public "apply"(action: $Consumer$Type<($LootContextJS$Type)>): $LootActionsBuilderJS
public "pool"(callback: $Consumer$Type<($GroupedLootBuilder$Type)>): $LootActionsBuilderJS
public "getLogName"(alternative: string): string
public "playerAction"(action: $Consumer$Type<($ServerPlayer$Type)>): $LootActionsBuilderJS
public "logName"(logName: string): $LootActionsBuilderJS
public "or"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "and"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "not"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "matchMainHand"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$Type, exact: boolean): $LootActionsBuilderJS
public "timeCheck"(period: long, min: integer, max: integer): $LootActionsBuilderJS
public "timeCheck"(min: integer, max: integer): $LootActionsBuilderJS
public "matchOffHand"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "weatherCheck"(map: $Map$Type<(string), (boolean)>): $LootActionsBuilderJS
public "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "anyStructure"(idOrTags: (string)[], exact: boolean): $LootActionsBuilderJS
public "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): $LootActionsBuilderJS
public "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "killedByPlayer"(): $LootActionsBuilderJS
public "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): $LootActionsBuilderJS
public "matchFluid"(resolver: $Resolver$Type): $LootActionsBuilderJS
public "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "anyBiome"(...resolvers: ($Resolver$Type)[]): $LootActionsBuilderJS
public "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): $LootActionsBuilderJS
public "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): $LootActionsBuilderJS
public "hasAnyStage"(...stages: (string)[]): $LootActionsBuilderJS
public "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $List<($ILootCondition)>
public "customCondition"(json: $JsonObject$Type): $LootActionsBuilderJS
public "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "biome"(...resolvers: ($Resolver$Type)[]): $LootActionsBuilderJS
public "survivesExplosion"(): $LootActionsBuilderJS
public "lightLevel"(min: integer, max: integer): $LootActionsBuilderJS
public "addCondition"(builder: $LootItemCondition$Builder$Type): $LootActionsBuilderJS
public "randomChance"(value: float): $LootActionsBuilderJS
public "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): $LootActionsBuilderJS
public "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): $LootActionsBuilderJS
public "randomChanceWithLooting"(value: float, looting: float): $LootActionsBuilderJS
public "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): $LootActionsBuilderJS
public "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): $LootActionsBuilderJS
public "setName"(component: $Component$Type): $LootActionsBuilderJS
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $LootActionsBuilderJS
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "damage"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $LootActionsBuilderJS
public "simulateExplosionDecay"(): $LootActionsBuilderJS
public "addFunction"(builder: $LootItemFunction$Builder$Type): $LootActionsBuilderJS
public "enchantRandomly"(): $LootActionsBuilderJS
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $LootActionsBuilderJS
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $LootActionsBuilderJS
public "limitCount"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $LootActionsBuilderJS
public "smeltLoot"(): $LootActionsBuilderJS
public "applyOreBonus"(enchantment: $Enchantment$Type): $LootActionsBuilderJS
public "addPotion"(potion: $Potion$Type): $LootActionsBuilderJS
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "addLore"(...components: ($Component$Type)[]): $LootActionsBuilderJS
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $LootActionsBuilderJS
public "replaceLore"(...components: ($Component$Type)[]): $LootActionsBuilderJS
public "customFunction"(json: $JsonObject$Type): $LootActionsBuilderJS
public "addNbt"(tag: $CompoundTag$Type): $LootActionsBuilderJS
public "addNBT"(tag: $CompoundTag$Type): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): $LootActionsBuilderJS
public "removeLoot"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "addSequenceLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): $LootActionsBuilderJS
public "addLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): $LootActionsBuilderJS
public "dropExperience"(amount: integer): $LootActionsBuilderJS
public "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "triggerLightningStrike"(shouldDamage: boolean): $LootActionsBuilderJS
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionsBuilderJS$Type = ($LootActionsBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootActionsBuilderJS_ = $LootActionsBuilderJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/filters/$ItemFilter" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemFilter extends $Predicate<($ItemStack)> {

 "test"(arg0: $ItemStack$Type): boolean
 "or"(other: $ItemFilter$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(other: $ItemFilter$Type): $ItemFilter
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>

(arg0: $ItemStack$Type): boolean
}

export namespace $ItemFilter {
const ALWAYS_FALSE: $ItemFilter
const ALWAYS_TRUE: $ItemFilter
const SWORD: $ItemFilter
const PICKAXE: $ItemFilter
const AXE: $ItemFilter
const SHOVEL: $ItemFilter
const HOE: $ItemFilter
const TOOL: $ItemFilter
const POTION: $ItemFilter
const HAS_TIER: $ItemFilter
const PROJECTILE_WEAPON: $ItemFilter
const ARMOR: $ItemFilter
const WEAPON: $ItemFilter
const HEAD_ARMOR: $ItemFilter
const CHEST_ARMOR: $ItemFilter
const LEGS_ARMOR: $ItemFilter
const FEET_ARMOR: $ItemFilter
const FOOD: $ItemFilter
const DAMAGEABLE: $ItemFilter
const DAMAGED: $ItemFilter
const ENCHANTABLE: $ItemFilter
const ENCHANTED: $ItemFilter
const BLOCK: $ItemFilter
function or(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function and(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function not(itemFilter: $ItemFilter$Type): $ItemFilter
function custom(predicate: $Predicate$Type<($ItemStack$Type)>): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type, min: integer, max: integer): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type): $ItemFilter
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$Type = ($ItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilter_ = $ItemFilter$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $LootConditionsContainer<B extends $LootConditionsContainer<(any)>> {

 "or"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "and"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "not"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "matchMainHand"(filter: $ItemFilter$Type): B
 "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): B
 "matchLoot"(filter: $ItemFilter$Type): B
 "matchLoot"(filter: $ItemFilter$Type, exact: boolean): B
 "timeCheck"(period: long, min: integer, max: integer): B
 "timeCheck"(min: integer, max: integer): B
 "matchOffHand"(filter: $ItemFilter$Type): B
 "weatherCheck"(map: $Map$Type<(string), (boolean)>): B
 "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): B
 "anyStructure"(idOrTags: (string)[], exact: boolean): B
 "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): B
 "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "killedByPlayer"(): B
 "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): B
 "matchFluid"(resolver: $Resolver$Type): B
 "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "anyBiome"(...resolvers: ($Resolver$Type)[]): B
 "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): B
 "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): B
 "hasAnyStage"(...stages: (string)[]): B
 "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): $List<($ILootCondition)>
 "customCondition"(json: $JsonObject$Type): B
 "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "biome"(...resolvers: ($Resolver$Type)[]): B
 "survivesExplosion"(): B
 "lightLevel"(min: integer, max: integer): B
 "addCondition"(builder: $LootItemCondition$Builder$Type): B
 "addCondition"(arg0: $ILootCondition$Type): B
 "randomChance"(value: float): B
 "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): B
 "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): B
 "randomChanceWithLooting"(value: float, looting: float): B
 "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): B
 "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): B

(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
}

export namespace $LootConditionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConditionsContainer$Type<B> = ($LootConditionsContainer<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootConditionsContainer_<B> = $LootConditionsContainer$Type<(B)>;
}}
declare module "packages/com/almostreliable/unified/config/$Config" {
import {$Config$Serializer, $Config$Serializer$Type} from "packages/com/almostreliable/unified/config/$Config$Serializer"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"

export class $Config {

constructor()

public static "load"<T extends $Config>(name: string, serializer: $Config$Serializer$Type<(T)>): T
public static "save"<T extends $Config>(p: $Path$Type, config: T, serializer: $Config$Serializer$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Type = ($Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config_ = $Config$Type;
}}
declare module "packages/com/almostreliable/ponderjs/util/$BlockStateFunction" {
import {$Context, $Context$Type} from "packages/dev/latvian/mods/rhino/$Context"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$BlockIDPredicate, $BlockIDPredicate$Type} from "packages/dev/latvian/mods/kubejs/block/predicate/$BlockIDPredicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $BlockStateFunction extends $Function<($BlockIDPredicate), ($BlockState)> {

 "apply"(arg0: $BlockIDPredicate$Type): $BlockState
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($BlockState)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($BlockIDPredicate), (V)>

(arg0: $Context$Type, arg1: any): $BlockStateFunction
}

export namespace $BlockStateFunction {
function of(arg0: $Context$Type, arg1: any): $BlockStateFunction
function from(arg0: $BlockStateFunction$Type): $UnaryOperator<($BlockState)>
function identity<T>(): $Function<($BlockIDPredicate), ($BlockIDPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateFunction$Type = ($BlockStateFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateFunction_ = $BlockStateFunction$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder$DustParticleDataBuilder" {
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$DustParticleOptionsBase, $DustParticleOptionsBase$Type} from "packages/net/minecraft/core/particles/$DustParticleOptionsBase"
import {$ParticleDataBuilder, $ParticleDataBuilder$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder"

export class $ParticleDataBuilder$DustParticleDataBuilder extends $ParticleDataBuilder<($ParticleDataBuilder$DustParticleDataBuilder), ($DustParticleOptionsBase)> {

constructor(arg0: $Color$Type, arg1: $Color$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleDataBuilder$DustParticleDataBuilder$Type = ($ParticleDataBuilder$DustParticleDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleDataBuilder$DustParticleDataBuilder_ = $ParticleDataBuilder$DustParticleDataBuilder$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootAction extends $ILootHandler {

 "applyLootHandler"(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean

(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootAction$Type = ($ILootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootAction_ = $ILootAction$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootContextType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LootContextType extends $Enum<($LootContextType)> {
static readonly "UNKNOWN": $LootContextType
static readonly "BLOCK": $LootContextType
static readonly "ENTITY": $LootContextType
static readonly "CHEST": $LootContextType
static readonly "FISHING": $LootContextType
static readonly "GIFT": $LootContextType
static readonly "PIGLIN_BARTER": $LootContextType
static readonly "ADVANCEMENT_ENTITY": $LootContextType
static readonly "ADVANCEMENT_REWARD": $LootContextType


public static "values"(): ($LootContextType)[]
public static "valueOf"(name: string): $LootContextType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextType$Type = (("gift") | ("chest") | ("piglin_barter") | ("advancement_entity") | ("advancement_reward") | ("fishing") | ("block") | ("entity") | ("unknown")) | ($LootContextType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextType_ = $LootContextType$Type;
}}
declare module "packages/com/almostreliable/unified/config/$UnifyConfig" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$UnifyTag, $UnifyTag$Type} from "packages/com/almostreliable/unified/utils/$UnifyTag"
import {$UnifyConfig$TagInheritanceMode, $UnifyConfig$TagInheritanceMode$Type} from "packages/com/almostreliable/unified/config/$UnifyConfig$TagInheritanceMode"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Config, $Config$Type} from "packages/com/almostreliable/unified/config/$Config"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnifyConfig extends $Config {
static readonly "NAME": string

constructor(modPriorities: $List$Type<(string)>, stoneStrata: $List$Type<(string)>, unbakedTags: $List$Type<(string)>, materials: $List$Type<(string)>, priorityOverrides: $Map$Type<($ResourceLocation$Type), (string)>, customTags: $Map$Type<($ResourceLocation$Type), ($Set$Type<($ResourceLocation$Type)>)>, tagOwnerships: $Map$Type<($ResourceLocation$Type), ($Set$Type<($ResourceLocation$Type)>)>, itemTagInheritanceMode: $Enum$Type<($UnifyConfig$TagInheritanceMode$Type)>, itemTagInheritance: $Map$Type<($ResourceLocation$Type), ($Set$Type<($Pattern$Type)>)>, blockTagInheritanceMode: $Enum$Type<($UnifyConfig$TagInheritanceMode$Type)>, blockTagInheritance: $Map$Type<($ResourceLocation$Type), ($Set$Type<($Pattern$Type)>)>, ignoredTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>, ignoredItems: $Set$Type<($Pattern$Type)>, ignoredRecipeTypes: $Set$Type<($Pattern$Type)>, ignoredRecipes: $Set$Type<($Pattern$Type)>, hideJeiRei: boolean)

public "clearCache"(): void
public "bakeAndValidateTags"(tags: $Map$Type<($ResourceLocation$Type), ($Collection$Type<($Holder$Type<($Item$Type)>)>)>): $Set<($UnifyTag<($Item)>)>
public "getMaterials"(): $List<(string)>
public "reiOrJeiDisabled"(): boolean
public "getTagOwnerships"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
public "shouldInheritBlockTag"(itemTag: $UnifyTag$Type<($Block$Type)>, dominantTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>): boolean
public "getPriorityOverrides"(): $Map<($ResourceLocation), (string)>
public "shouldInheritItemTag"(itemTag: $UnifyTag$Type<($Item$Type)>, dominantTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>): boolean
public "includeRecipe"(recipe: $ResourceLocation$Type): boolean
public "getModPriorities"(): $List<(string)>
public "bakeTags"(): $Set<($UnifyTag<($Item)>)>
public "getStoneStrata"(): $List<(string)>
public "getCustomTags"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
public "includeItem"(item: $ResourceLocation$Type): boolean
public "includeRecipeType"(type: $ResourceLocation$Type): boolean
get "materials"(): $List<(string)>
get "tagOwnerships"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
get "priorityOverrides"(): $Map<($ResourceLocation), (string)>
get "modPriorities"(): $List<(string)>
get "stoneStrata"(): $List<(string)>
get "customTags"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnifyConfig$Type = ($UnifyConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnifyConfig_ = $UnifyConfig$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootEntry" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$LootEntry$Generator, $LootEntry$Generator$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry$Generator"

export class $LootEntry implements $LootFunctionsContainer<($LootEntry)> {

constructor(generator: $LootEntry$Generator$Type)
constructor(itemStack: $ItemStack$Type)
constructor(item: $Item$Type)

public "getWeight"(): integer
public "when"(action: $Consumer$Type<($LootConditionsContainer$Type<(any)>)>): $LootEntry
public "createItem"(context: $LootContext$Type): $ItemStack
public "withChance"(chance: integer): $LootEntry
public "withWeight"(weight: integer): $LootEntry
public "matchesConditions"(context: $LootContext$Type): boolean
public "hasWeight"(): boolean
public "setName"(component: $Component$Type): $LootEntry
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $LootEntry
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($LootEntry$Type)>)>): $LootEntry
public "damage"(numberProvider: $NumberProvider$Type): $LootEntry
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $LootEntry
public "simulateExplosionDecay"(): $LootEntry
public "addFunction"(builder: $LootItemFunction$Builder$Type): $LootEntry
public "enchantRandomly"(): $LootEntry
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $LootEntry
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $LootEntry
public "limitCount"(numberProvider: $NumberProvider$Type): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $LootEntry
public "smeltLoot"(): $LootEntry
public "applyOreBonus"(enchantment: $Enchantment$Type): $LootEntry
public "addPotion"(potion: $Potion$Type): $LootEntry
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $LootEntry
public "addLore"(...components: ($Component$Type)[]): $LootEntry
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $LootEntry
public "replaceLore"(...components: ($Component$Type)[]): $LootEntry
public "customFunction"(json: $JsonObject$Type): $LootEntry
public "addNbt"(tag: $CompoundTag$Type): $LootEntry
public "addNBT"(tag: $CompoundTag$Type): $LootEntry
get "weight"(): integer
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$Type = ($LootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntry_ = $LootEntry$Type;
}}
declare module "packages/com/almostreliable/lootjs/filters/$Resolver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Resolver {


public static "of"(value: string): $Resolver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resolver$Type = ($Resolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resolver_ = $Resolver$Type;
}}
declare module "packages/com/almostreliable/lootjs/mixin/$LootItemConditionMixin" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootItemConditionMixin extends $ILootCondition {

 "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
 "test"(arg0: $LootContext$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
 "negate"(): $Predicate<($LootContext)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>

(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $LootItemConditionMixin {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
function isEqual<T>(arg0: any): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootItemConditionMixin$Type = ($LootItemConditionMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootItemConditionMixin_ = $LootItemConditionMixin$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS" {
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$EntityPredicate, $EntityPredicate$Type} from "packages/net/minecraft/advancements/critereon/$EntityPredicate"
import {$ExtendedEntityFlagsPredicate$IBuilder, $ExtendedEntityFlagsPredicate$IBuilder$Type} from "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EntityPredicateBuilderJS implements $ExtendedEntityFlagsPredicate$IBuilder<($EntityPredicate)> {

constructor()

public "build"(): $EntityPredicate
public "matchFluid"(resolver: $Resolver$Type): $EntityPredicateBuilderJS
public "isUnderWater"(flag: boolean): $EntityPredicateBuilderJS
public "nbt"(nbt: $CompoundTag$Type): $EntityPredicateBuilderJS
public "isCrouching"(flag: boolean): $EntityPredicateBuilderJS
public "hasEffect"(effect: $MobEffect$Type, amplifier: integer): $EntityPredicateBuilderJS
public "hasEffect"(effect: $MobEffect$Type): $EntityPredicateBuilderJS
public "isSprinting"(flag: boolean): $EntityPredicateBuilderJS
public "isInWater"(flag: boolean): $EntityPredicateBuilderJS
public "matchMount"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $EntityPredicateBuilderJS
public "matchSlot"(slot: $EquipmentSlot$Type, itemFilter: $ItemFilter$Type): $EntityPredicateBuilderJS
public "anyType"(...resolvers: ($Resolver$Type)[]): $EntityPredicateBuilderJS
public "isUndeadMob"(flag: boolean): $EntityPredicateBuilderJS
public "isArthropodMob"(flag: boolean): $EntityPredicateBuilderJS
public "isWaterMob"(flag: boolean): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$Type, propertyMap: $Map$Type<(string), (string)>): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$Type): $EntityPredicateBuilderJS
public "isCreature"(flag: boolean): $EntityPredicateBuilderJS
public "matchTargetedEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $EntityPredicateBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPredicateBuilderJS$Type = ($EntityPredicateBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPredicateBuilderJS_ = $EntityPredicateBuilderJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GroupedLootAction, $GroupedLootAction$Type} from "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootActionsContainer, $LootActionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootActionsContainer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GroupedLootBuilder implements $LootConditionsContainer<($GroupedLootBuilder)>, $LootFunctionsContainer<($GroupedLootBuilder)>, $LootActionsContainer<($GroupedLootBuilder)> {

constructor()

public "build"(): $GroupedLootAction
public "rolls"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "or"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "and"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "not"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "matchMainHand"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$Type, exact: boolean): $GroupedLootBuilder
public "timeCheck"(period: long, min: integer, max: integer): $GroupedLootBuilder
public "timeCheck"(min: integer, max: integer): $GroupedLootBuilder
public "matchOffHand"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "weatherCheck"(map: $Map$Type<(string), (boolean)>): $GroupedLootBuilder
public "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): $GroupedLootBuilder
public "anyStructure"(idOrTags: (string)[], exact: boolean): $GroupedLootBuilder
public "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): $GroupedLootBuilder
public "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "killedByPlayer"(): $GroupedLootBuilder
public "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): $GroupedLootBuilder
public "matchFluid"(resolver: $Resolver$Type): $GroupedLootBuilder
public "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "anyBiome"(...resolvers: ($Resolver$Type)[]): $GroupedLootBuilder
public "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): $GroupedLootBuilder
public "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): $GroupedLootBuilder
public "hasAnyStage"(...stages: (string)[]): $GroupedLootBuilder
public "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $List<($ILootCondition)>
public "customCondition"(json: $JsonObject$Type): $GroupedLootBuilder
public "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "biome"(...resolvers: ($Resolver$Type)[]): $GroupedLootBuilder
public "survivesExplosion"(): $GroupedLootBuilder
public "lightLevel"(min: integer, max: integer): $GroupedLootBuilder
public "addCondition"(builder: $LootItemCondition$Builder$Type): $GroupedLootBuilder
public "randomChance"(value: float): $GroupedLootBuilder
public "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): $GroupedLootBuilder
public "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): $GroupedLootBuilder
public "randomChanceWithLooting"(value: float, looting: float): $GroupedLootBuilder
public "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): $GroupedLootBuilder
public "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): $GroupedLootBuilder
public "setName"(component: $Component$Type): $GroupedLootBuilder
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $GroupedLootBuilder
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "damage"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $GroupedLootBuilder
public "simulateExplosionDecay"(): $GroupedLootBuilder
public "addFunction"(builder: $LootItemFunction$Builder$Type): $GroupedLootBuilder
public "enchantRandomly"(): $GroupedLootBuilder
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $GroupedLootBuilder
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $GroupedLootBuilder
public "limitCount"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $GroupedLootBuilder
public "smeltLoot"(): $GroupedLootBuilder
public "applyOreBonus"(enchantment: $Enchantment$Type): $GroupedLootBuilder
public "addPotion"(potion: $Potion$Type): $GroupedLootBuilder
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "addLore"(...components: ($Component$Type)[]): $GroupedLootBuilder
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $GroupedLootBuilder
public "replaceLore"(...components: ($Component$Type)[]): $GroupedLootBuilder
public "customFunction"(json: $JsonObject$Type): $GroupedLootBuilder
public "addNbt"(tag: $CompoundTag$Type): $GroupedLootBuilder
public "addNBT"(tag: $CompoundTag$Type): $GroupedLootBuilder
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $GroupedLootBuilder
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): $GroupedLootBuilder
public "removeLoot"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "addSequenceLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): $GroupedLootBuilder
public "addLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): $GroupedLootBuilder
public "dropExperience"(amount: integer): $GroupedLootBuilder
public "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "triggerLightningStrike"(shouldDamage: boolean): $GroupedLootBuilder
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootBuilder$Type = ($GroupedLootBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootBuilder_ = $GroupedLootBuilder$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$LootContextType, $LootContextType$Type} from "packages/com/almostreliable/lootjs/core/$LootContextType"
import {$LootActionsBuilderJS, $LootActionsBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"

export class $LootModificationEventJS extends $EventJS {

constructor()

public "enableLogging"(): void
public "addBlockLootModifier"(o: any): $LootActionsBuilderJS
public "disableSkeletonHeadDrop"(): void
public "addLootTypeModifier"(...types: ($LootContextType$Type)[]): $LootActionsBuilderJS
public "addEntityLootModifier"(...entities: ($EntityType$Type<(any)>)[]): $LootActionsBuilderJS
public "addLootTableModifier"(...filters: ($ResourceLocationFilter$Type)[]): $LootActionsBuilderJS
public "disableWitherStarDrop"(): void
public "disableZombieHeadDrop"(): void
public "disableCreeperHeadDrop"(): void
public "disableLootModification"(...filters: ($ResourceLocationFilter$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModificationEventJS$Type = ($LootModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootModificationEventJS_ = $LootModificationEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedEntityFlagsPredicate$IBuilder<T> {

 "build"(): T
 "isSwimming"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isUnderWater"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isOnGround"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isCrouching"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isOnFire"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isSprinting"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isBaby"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isInWater"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isMonster"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isIllegarMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isUndeadMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isArthropodMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isWaterMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isCreature"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
}

export namespace $ExtendedEntityFlagsPredicate$IBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedEntityFlagsPredicate$IBuilder$Type<T> = ($ExtendedEntityFlagsPredicate$IBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedEntityFlagsPredicate$IBuilder_<T> = $ExtendedEntityFlagsPredicate$IBuilder$Type<(T)>;
}}
declare module "packages/com/almostreliable/ponderjs/api/$ExtendedSceneBuilder" {
import {$SceneBuilder$OverlayInstructions, $SceneBuilder$OverlayInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$OverlayInstructions"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$SceneBuilder$DebugInstructions, $SceneBuilder$DebugInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$DebugInstructions"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ExtendedSceneBuilder$ExtendedWorldInstructions, $ExtendedSceneBuilder$ExtendedWorldInstructions$Type} from "packages/com/almostreliable/ponderjs/api/$ExtendedSceneBuilder$ExtendedWorldInstructions"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$SceneBuilder$EffectInstructions, $SceneBuilder$EffectInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$EffectInstructions"
import {$PonderScene, $PonderScene$Type} from "packages/com/simibubi/create/foundation/ponder/$PonderScene"
import {$SceneBuilder$SpecialInstructions, $SceneBuilder$SpecialInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$SpecialInstructions"
import {$TextWindowElement$Builder, $TextWindowElement$Builder$Type} from "packages/com/simibubi/create/foundation/ponder/element/$TextWindowElement$Builder"
import {$ParticleInstructions, $ParticleInstructions$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleInstructions"
import {$SceneBuilder$WorldInstructions, $SceneBuilder$WorldInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$WorldInstructions"
import {$SceneBuilder, $SceneBuilder$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InputWindowElement, $InputWindowElement$Type} from "packages/com/simibubi/create/foundation/ponder/element/$InputWindowElement"
import {$Pointing, $Pointing$Type} from "packages/com/simibubi/create/foundation/utility/$Pointing"

export class $ExtendedSceneBuilder extends $SceneBuilder {
readonly "overlay": $SceneBuilder$OverlayInstructions
 "world": $SceneBuilder$WorldInstructions
readonly "debug": $SceneBuilder$DebugInstructions
readonly "effects": $SceneBuilder$EffectInstructions
 "special": $SceneBuilder$SpecialInstructions

constructor(arg0: $PonderScene$Type)

public "getDebug"(): $SceneBuilder$DebugInstructions
public "text"(arg0: integer, arg1: string): $TextWindowElement$Builder
public "text"(arg0: integer, arg1: string, arg2: $Vec3$Type): $TextWindowElement$Builder
public "getLevel"(): $ExtendedSceneBuilder$ExtendedWorldInstructions
public "playSound"(arg0: $SoundEvent$Type): void
public "playSound"(arg0: $SoundEvent$Type, arg1: $SoundSource$Type, arg2: float, arg3: float): void
public "playSound"(arg0: $SoundEvent$Type, arg1: float): void
public "getEffects"(): $SceneBuilder$EffectInstructions
public "getOverlay"(): $SceneBuilder$OverlayInstructions
public "getWorld"(): $ExtendedSceneBuilder$ExtendedWorldInstructions
public "getSpecial"(): $SceneBuilder$SpecialInstructions
public "showControls"(arg0: integer, arg1: $Vec3$Type, arg2: $Pointing$Type): $InputWindowElement
public "sharedText"(arg0: integer, arg1: $ResourceLocation$Type): $TextWindowElement$Builder
public "sharedText"(arg0: integer, arg1: $ResourceLocation$Type, arg2: $Vec3$Type): $TextWindowElement$Builder
public "showStructure"(arg0: integer): void
public "showStructure"(): void
public "encapsulateBounds"(arg0: $BlockPos$Type): void
public "getParticles"(): $ParticleInstructions
get "debug"(): $SceneBuilder$DebugInstructions
get "level"(): $ExtendedSceneBuilder$ExtendedWorldInstructions
get "effects"(): $SceneBuilder$EffectInstructions
get "overlay"(): $SceneBuilder$OverlayInstructions
get "world"(): $ExtendedSceneBuilder$ExtendedWorldInstructions
get "special"(): $SceneBuilder$SpecialInstructions
get "particles"(): $ParticleInstructions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSceneBuilder$Type = ($ExtendedSceneBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSceneBuilder_ = $ExtendedSceneBuilder$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder$Static" {
import {$ParticleDataBuilder, $ParticleDataBuilder$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ParticleDataBuilder$Static extends $ParticleDataBuilder<($ParticleDataBuilder$Static), ($ParticleOptions)> {

constructor(arg0: $ParticleOptions$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleDataBuilder$Static$Type = ($ParticleDataBuilder$Static);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleDataBuilder$Static_ = $ParticleDataBuilder$Static$Type;
}}
declare module "packages/com/almostreliable/ponderjs/mixin/$SceneBuilderAccessor" {
import {$SceneBuilder$SpecialInstructions, $SceneBuilder$SpecialInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$SpecialInstructions"
import {$SceneBuilder$WorldInstructions, $SceneBuilder$WorldInstructions$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder$WorldInstructions"
import {$PonderScene, $PonderScene$Type} from "packages/com/simibubi/create/foundation/ponder/$PonderScene"

export interface $SceneBuilderAccessor {

 "ponderjs$getPonderScene"(): $PonderScene
 "ponderjs$setWorldInstructions"(arg0: $SceneBuilder$WorldInstructions$Type): void
 "ponderjs$setSpecialInstructions"(arg0: $SceneBuilder$SpecialInstructions$Type): void
}

export namespace $SceneBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneBuilderAccessor$Type = ($SceneBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneBuilderAccessor_ = $SceneBuilderAccessor$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootCondition" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootCondition extends $ILootHandler, $Predicate<($LootContext)> {

 "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
 "test"(arg0: $LootContext$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
 "negate"(): $Predicate<($LootContext)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>

(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootCondition {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
function isEqual<T>(arg0: any): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootCondition$Type = ($ILootCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootCondition_ = $ILootCondition$Type;
}}
declare module "packages/com/almostreliable/ponderjs/api/$ExtendedPonderStoryBoard" {
import {$ExtendedSceneBuilder, $ExtendedSceneBuilder$Type} from "packages/com/almostreliable/ponderjs/api/$ExtendedSceneBuilder"
import {$SceneBuildingUtilDelegate, $SceneBuildingUtilDelegate$Type} from "packages/com/almostreliable/ponderjs/api/$SceneBuildingUtilDelegate"

export interface $ExtendedPonderStoryBoard {

 "program"(arg0: $ExtendedSceneBuilder$Type, arg1: $SceneBuildingUtilDelegate$Type): void

(arg0: $ExtendedSceneBuilder$Type, arg1: $SceneBuildingUtilDelegate$Type): void
}

export namespace $ExtendedPonderStoryBoard {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedPonderStoryBoard$Type = ($ExtendedPonderStoryBoard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedPonderStoryBoard_ = $ExtendedPonderStoryBoard$Type;
}}
declare module "packages/com/almostreliable/ponderjs/$PonderBuilderJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ExtendedPonderStoryBoard, $ExtendedPonderStoryBoard$Type} from "packages/com/almostreliable/ponderjs/api/$ExtendedPonderStoryBoard"
import {$AbstractPonderBuilder, $AbstractPonderBuilder$Type} from "packages/com/almostreliable/ponderjs/api/$AbstractPonderBuilder"

export class $PonderBuilderJS extends $AbstractPonderBuilder<($PonderBuilderJS)> {
static readonly "BASIC_STRUCTURE": string

constructor(arg0: $Set$Type<($Item$Type)>)

public "getSelf"(): $PonderBuilderJS
public "scene"(arg0: string, arg1: string, arg2: $ExtendedPonderStoryBoard$Type): $PonderBuilderJS
public "scene"(arg0: string, arg1: string, arg2: string, arg3: $ExtendedPonderStoryBoard$Type): $PonderBuilderJS
get "self"(): $PonderBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderBuilderJS$Type = ($PonderBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderBuilderJS_ = $PonderBuilderJS$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation$Simple" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $ParticleTransformation$Simple {

 "apply"(arg0: float, arg1: $Vec3$Type): $Vec3

(arg0: float, arg1: $Vec3$Type): $Vec3
}

export namespace $ParticleTransformation$Simple {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleTransformation$Simple$Type = ($ParticleTransformation$Simple);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleTransformation$Simple_ = $ParticleTransformation$Simple$Type;
}}
declare module "packages/com/almostreliable/ponderjs/mixin/$ParticleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ParticleAccessor {

 "ponderjs$setAlpha"(arg0: float): void
 "ponderjs$setRoll"(arg0: float): void
 "ponderjs$setFriction"(arg0: float): void
 "ponderjs$setLifetime"(arg0: integer): void
 "ponderjs$setStoppedByCollision"(arg0: boolean): void
 "ponderjs$setGravity"(arg0: float): void
 "ponderjs$setHasPhysics"(arg0: boolean): void
}

export namespace $ParticleAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleAccessor$Type = ($ParticleAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleAccessor_ = $ParticleAccessor$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ILootAction, $ILootAction$Type} from "packages/com/almostreliable/lootjs/core/$ILootAction"

export class $CompositeLootAction implements $ILootAction {

constructor(handlers: $Collection$Type<($ILootHandler$Type)>)

public "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeLootAction$Type = ($CompositeLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeLootAction_ = $CompositeLootAction$Type;
}}
declare module "packages/com/almostreliable/unified/config/$Config$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Config, $Config$Type} from "packages/com/almostreliable/unified/config/$Config"

export class $Config$Serializer<T extends $Config> {

constructor()

public "isInvalid"(): boolean
public "serialize"(arg0: T): $JsonObject
public "safeGet"<V>(supplier: $Supplier$Type<(V)>, defaultValue: V): V
public "deserialize"(arg0: $JsonObject$Type): T
get "invalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Serializer$Type<T> = ($Config$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config$Serializer_<T> = $Config$Serializer$Type<(T)>;
}}
declare module "packages/com/almostreliable/lootjs/forge/filters/$ForgeItemFilter" {
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ForgeItemFilter extends $ItemFilter {

 "test"(arg0: $ItemStack$Type): boolean
 "or"(other: $ItemFilter$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(other: $ItemFilter$Type): $ItemFilter
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>

(...actions: (string)[]): $ItemFilter
}

export namespace $ForgeItemFilter {
function canPerformAnyAction(...actions: (string)[]): $ItemFilter
function canPerformAction(...actions: (string)[]): $ItemFilter
function or(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function and(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function not(itemFilter: $ItemFilter$Type): $ItemFilter
function custom(predicate: $Predicate$Type<($ItemStack$Type)>): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type, min: integer, max: integer): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type): $ItemFilter
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeItemFilter$Type = ($ForgeItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeItemFilter_ = $ForgeItemFilter$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CompositeLootAction, $CompositeLootAction$Type} from "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $GroupedLootAction extends $CompositeLootAction {

constructor(numberProvider: $NumberProvider$Type, handlers: $Collection$Type<($ILootHandler$Type)>)

public "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootAction$Type = ($GroupedLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootAction_ = $GroupedLootAction$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootEntryWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $LootEntryWrapper {

constructor()

public static "of"(arg0: $ItemStack$Type, count: integer, nbt: $CompoundTag$Type): $LootEntry
public static "of"(arg0: $ItemStack$Type, nbt: $CompoundTag$Type): $LootEntry
public static "of"(arg0: $ItemStack$Type, count: integer): $LootEntry
public static "of"(o: any): $LootEntry
public static "ofJson"(json: $JsonObject$Type): $LootEntry
public static "withChance"(o: any, chance: integer): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntryWrapper$Type = ($LootEntryWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntryWrapper_ = $LootEntryWrapper$Type;
}}
declare module "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker$ClientRecipeLink" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientRecipeTracker$ClientRecipeLink extends $Record {

constructor(id: $ResourceLocation$Type, isUnified: boolean, isDuplicate: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "isDuplicate"(): boolean
public "isUnified"(): boolean
get "duplicate"(): boolean
get "unified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$ClientRecipeLink$Type = ($ClientRecipeTracker$ClientRecipeLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker$ClientRecipeLink_ = $ClientRecipeTracker$ClientRecipeLink$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$AllOfCondition$Builder, $AllOfCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$AllOfCondition$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AnyOfCondition$Builder, $AnyOfCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$AnyOfCondition$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $DamageSourcePredicateBuilderJS implements $LootItemCondition$Builder {

constructor()

public "is"(tag: $ResourceLocation$Type): $DamageSourcePredicateBuilderJS
public "isNot"(tag: $ResourceLocation$Type): $DamageSourcePredicateBuilderJS
public "anyType"(...names: (string)[]): $DamageSourcePredicateBuilderJS
public "matchDirectEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $DamageSourcePredicateBuilderJS
public "matchSourceEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $DamageSourcePredicateBuilderJS
public "and"(arg0: $LootItemCondition$Builder$Type): $AllOfCondition$Builder
public "or"(arg0: $LootItemCondition$Builder$Type): $AnyOfCondition$Builder
public "invert"(): $LootItemCondition$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourcePredicateBuilderJS$Type = ($DamageSourcePredicateBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageSourcePredicateBuilderJS_ = $DamageSourcePredicateBuilderJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Modifier$Builder {

constructor(attribute: $Attribute$Type, amount: $NumberProvider$Type)

public "setName"(name: string): void
public "build"(): $AddAttributesFunction$Modifier
public "setSlots"(slots: ($EquipmentSlot$Type)[]): void
public "setUuid"(uuid: $UUID$Type): void
public "setOperation"(operation: $AttributeModifier$Operation$Type): void
public "setProbability"(probability: float): void
set "name"(value: string)
set "slots"(value: ($EquipmentSlot$Type)[])
set "uuid"(value: $UUID$Type)
set "operation"(value: $AttributeModifier$Operation$Type)
set "probability"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Builder$Type = ($AddAttributesFunction$Modifier$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier$Builder_ = $AddAttributesFunction$Modifier$Builder$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export interface $LootFunctionsContainer<F extends $LootFunctionsContainer<(any)>> {

 "setName"(component: $Component$Type): F
 "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): F
 "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<(F)>)>): F
 "damage"(numberProvider: $NumberProvider$Type): F
 "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): F
 "simulateExplosionDecay"(): F
 "addFunction"(builder: $LootItemFunction$Builder$Type): F
 "addFunction"(arg0: $LootItemFunction$Type): F
 "enchantRandomly"(): F
 "enchantRandomly"(enchantments: ($Enchantment$Type)[]): F
 "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): F
 "limitCount"(numberProvider: $NumberProvider$Type): F
 "enchantWithLevels"(numberProvider: $NumberProvider$Type): F
 "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): F
 "smeltLoot"(): F
 "applyOreBonus"(enchantment: $Enchantment$Type): F
 "addPotion"(potion: $Potion$Type): F
 "applyLootingBonus"(numberProvider: $NumberProvider$Type): F
 "addLore"(...components: ($Component$Type)[]): F
 "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): F
 "replaceLore"(...components: ($Component$Type)[]): F
 "customFunction"(json: $JsonObject$Type): F
 "addNbt"(tag: $CompoundTag$Type): F
 "addNBT"(tag: $CompoundTag$Type): F

(component: $Component$Type): F
}

export namespace $LootFunctionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunctionsContainer$Type<F> = ($LootFunctionsContainer<(F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFunctionsContainer_<F> = $LootFunctionsContainer$Type<(F)>;
}}
declare module "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ResourceLocationFilter extends $Predicate<($ResourceLocation)> {

 "test"(arg0: $ResourceLocation$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>
 "negate"(): $Predicate<($ResourceLocation)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>

(arg0: $ResourceLocation$Type): boolean
}

export namespace $ResourceLocationFilter {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>
function isEqual<T>(arg0: any): $Predicate<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLocationFilter$Type = ($ResourceLocationFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceLocationFilter_ = $ResourceLocationFilter$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/wrapper/$IntervalJS" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $IntervalJS {

constructor()

public "toString"(): string
public "min"(min: double): $IntervalJS
public "max"(max: double): $IntervalJS
public "matches"(value: double): boolean
public "between"(min: double, max: double): $IntervalJS
public static "ofInt"(o: any): $MinMaxBounds$Ints
public static "ofDoubles"(o: any): $MinMaxBounds$Doubles
public "getVanillaDoubles"(): $MinMaxBounds$Doubles
public "getVanillaInt"(): $MinMaxBounds$Ints
public "matchesSqr"(value: double): boolean
get "vanillaDoubles"(): $MinMaxBounds$Doubles
get "vanillaInt"(): $MinMaxBounds$Ints
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntervalJS$Type = ($IntervalJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntervalJS_ = $IntervalJS$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation" {
import {$ParticleTransformation$Data, $ParticleTransformation$Data$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation$Data"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ParticleTransformation$Simple, $ParticleTransformation$Simple$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleTransformation$Simple"

export interface $ParticleTransformation {

 "apply"(arg0: float, arg1: $Vec3$Type, arg2: $Vec3$Type): $ParticleTransformation$Data

(arg0: float, arg1: $Vec3$Type, arg2: $Vec3$Type): $ParticleTransformation$Data
}

export namespace $ParticleTransformation {
function onlyPosition(arg0: $ParticleTransformation$Simple$Type): $ParticleTransformation
function onlyMotion(arg0: $ParticleTransformation$Simple$Type): $ParticleTransformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleTransformation$Type = ($ParticleTransformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleTransformation_ = $ParticleTransformation$Type;
}}
declare module "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker$Serializer" {
import {$ClientRecipeTracker, $ClientRecipeTracker$Type} from "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ClientRecipeTracker$Serializer implements $RecipeSerializer<($ClientRecipeTracker)> {

constructor()

public "fromJson"(recipeId: $ResourceLocation$Type, json: $JsonObject$Type): $ClientRecipeTracker
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $ClientRecipeTracker
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $ClientRecipeTracker$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ClientRecipeTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$Serializer$Type = ($ClientRecipeTracker$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker$Serializer_ = $ClientRecipeTracker$Serializer$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootContextJS" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootContextType, $LootContextType$Type} from "packages/com/almostreliable/lootjs/core/$LootContextType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LootContextJS {

constructor(context: $LootContext$Type)

public "getPosition"(): $Vec3
public "getType"(): $LootContextType
public "cancel"(): void
public "getLevel"(): $ServerLevel
public "getCustomData"(): $Map<(string), (any)>
public "getEntity"(): $Entity
public "removeLoot"(itemFilter: $ItemFilter$Type): void
public "isCanceled"(): boolean
public "getDamageSource"(): $DamageSource
public "getPlayer"(): $ServerPlayer
public "getServer"(): $MinecraftServer
public "getRandom"(): $RandomSource
public "getBlockPos"(): $BlockPos
public "getTool"(): $ItemStack
public "addLoot"(lootEntry: $LootEntry$Type): void
public "getLootTableId"(): $ResourceLocation
public "getLoot"(): $List<($ItemStack)>
public "isExploded"(): boolean
public "getExplosionRadius"(): float
public "lootSize"(): integer
public "findLoot"(itemFilter: $ItemFilter$Type): $List<($ItemStack)>
public "getLuck"(): float
public "getLooting"(): integer
public "hasLoot"(ingredient: $ItemFilter$Type): boolean
public "getDestroyedBlock"(): $BlockContainerJS
public "getVanillaContext"(): $LootContext
public "forEachLoot"(action: $Consumer$Type<($ItemStack$Type)>): void
public "getKillerEntity"(): $Entity
get "position"(): $Vec3
get "type"(): $LootContextType
get "level"(): $ServerLevel
get "customData"(): $Map<(string), (any)>
get "entity"(): $Entity
get "canceled"(): boolean
get "damageSource"(): $DamageSource
get "player"(): $ServerPlayer
get "server"(): $MinecraftServer
get "random"(): $RandomSource
get "blockPos"(): $BlockPos
get "tool"(): $ItemStack
get "lootTableId"(): $ResourceLocation
get "loot"(): $List<($ItemStack)>
get "exploded"(): boolean
get "explosionRadius"(): float
get "luck"(): float
get "looting"(): integer
get "destroyedBlock"(): $BlockContainerJS
get "vanillaContext"(): $LootContext
get "killerEntity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextJS$Type = ($LootContextJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextJS_ = $LootContextJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$LootItemFunctionType, $LootItemFunctionType$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunctionType"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"

export class $AddAttributesFunction implements $LootItemFunction {

constructor(preserveDefaultModifier: boolean, modifiers: $List$Type<($AddAttributesFunction$Modifier$Type)>)

public "apply"(itemStack: $ItemStack$Type, context: $LootContext$Type): $ItemStack
public "preserveDefaultAttributes"(itemStack: $ItemStack$Type, slot: $EquipmentSlot$Type): void
public "getType"(): $LootItemFunctionType
public static "decorate"(arg0: $BiFunction$Type<($ItemStack$Type), ($LootContext$Type), ($ItemStack$Type)>, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $LootContext$Type): $Consumer<($ItemStack)>
public "validate"(arg0: $ValidationContext$Type): void
public "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
public "andThen"<V>(arg0: $Function$Type<(any), (any)>): $BiFunction<($ItemStack), ($LootContext), (V)>
get "type"(): $LootItemFunctionType
get "referencedContextParams"(): $Set<($LootContextParam<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Type = ($AddAttributesFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction_ = $AddAttributesFunction$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ModifyLootAction$Callback {

 "modify"(arg0: $ItemStack$Type): $ItemStack

(arg0: $ItemStack$Type): $ItemStack
}

export namespace $ModifyLootAction$Callback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyLootAction$Callback$Type = ($ModifyLootAction$Callback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyLootAction$Callback_ = $ModifyLootAction$Callback$Type;
}}
declare module "packages/com/almostreliable/ponderjs/particles/$ParticleInstructions" {
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleDataBuilder$DustParticleDataBuilder, $ParticleDataBuilder$DustParticleDataBuilder$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder$DustParticleDataBuilder"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$SceneBuilder, $SceneBuilder$Type} from "packages/com/simibubi/create/foundation/ponder/$SceneBuilder"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ParticleDataBuilder, $ParticleDataBuilder$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"
import {$ParticleDataBuilder$Static, $ParticleDataBuilder$Static$Type} from "packages/com/almostreliable/ponderjs/particles/$ParticleDataBuilder$Static"

export class $ParticleInstructions {

constructor(arg0: $SceneBuilder$Type)

public "item"(arg0: integer, arg1: $ItemStack$Type, arg2: $Vec3$Type): $ParticleDataBuilder$Static
public "block"(arg0: integer, arg1: $BlockState$Type, arg2: $Vec3$Type): $ParticleDataBuilder$Static
public "dust"(arg0: integer, arg1: $Color$Type, arg2: $Vec3$Type): $ParticleDataBuilder$DustParticleDataBuilder
public "dust"(arg0: integer, arg1: $Color$Type, arg2: $Color$Type, arg3: $Vec3$Type): $ParticleDataBuilder$DustParticleDataBuilder
public "simple"(arg0: integer, arg1: $ParticleType$Type<(any)>, arg2: $Vec3$Type): $ParticleDataBuilder<(any), (any)>
public "fluid"(arg0: integer, arg1: $FluidStackJS$Type, arg2: $Vec3$Type): $ParticleDataBuilder<(any), (any)>
public "basin"(arg0: integer, arg1: $FluidStackJS$Type, arg2: $Vec3$Type): $ParticleDataBuilder<(any), (any)>
public "drip"(arg0: integer, arg1: $FluidStackJS$Type, arg2: $Vec3$Type): $ParticleDataBuilder<(any), (any)>
public "rotationIndicator"(arg0: integer, arg1: $Vec3$Type, arg2: float, arg3: float, arg4: $Direction$Axis$Type): $ParticleDataBuilder<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleInstructions$Type = ($ParticleInstructions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleInstructions_ = $ParticleInstructions$Type;
}}
