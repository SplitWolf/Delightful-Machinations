declare module "packages/site/siredvin/peripheralium/common/items/$PeripheralItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$DescriptiveItem, $DescriptiveItem$Type} from "packages/site/siredvin/peripheralium/common/items/$DescriptiveItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PeripheralItem extends $DescriptiveItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<(boolean)>, arg2: boolean, ...arg3: ($Function$Type<($PeripheralItem$Type), ($List$Type<($Component$Type)>)>)[])
constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<(any)>, arg2: boolean, arg3: ($Function$Type<(any), (any)>)[], arg4: integer, arg5: $DefaultConstructorMarker$Type)

public "isEnabled"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralItem$Type = ($PeripheralItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralItem_ = $PeripheralItem$Type;
}}
declare module "packages/site/siredvin/turtlematic/common/items/$SoulVial$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SoulVial$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulVial$Companion$Type = ($SoulVial$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulVial$Companion_ = $SoulVial$Companion$Type;
}}
declare module "packages/site/siredvin/peripheralium/common/items/$DescriptiveItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DescriptiveItem extends $Item {
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
export type $DescriptiveItem$Type = ($DescriptiveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DescriptiveItem_ = $DescriptiveItem$Type;
}}
declare module "packages/site/siredvin/turtlematic/common/items/base/$BaseAutomataCore" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutomataCoreTier, $IAutomataCoreTier$Type} from "packages/site/siredvin/turtlematic/api/$IAutomataCoreTier"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PeripheralItem, $PeripheralItem$Type} from "packages/site/siredvin/peripheralium/common/items/$PeripheralItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseAutomataCore extends $PeripheralItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $IAutomataCoreTier$Type, arg1: $Supplier$Type<(any)>, arg2: ($Function$Type<(any), (any)>)[], arg3: $BiFunction$Type<(any), (any), (any)>, arg4: integer, arg5: $DefaultConstructorMarker$Type)
constructor(arg0: $IAutomataCoreTier$Type, arg1: $Supplier$Type<(boolean)>, arg2: ($Function$Type<($PeripheralItem$Type), ($List$Type<($Component$Type)>)>)[], arg3: $BiFunction$Type<($ItemStack$Type), ($Level$Type), ($List$Type<($Component$Type)>)>)
constructor(arg0: $IAutomataCoreTier$Type, arg1: $Item$Properties$Type, arg2: $Supplier$Type<(boolean)>, arg3: ($Function$Type<($PeripheralItem$Type), ($List$Type<($Component$Type)>)>)[], arg4: $BiFunction$Type<($ItemStack$Type), ($Level$Type), ($List$Type<($Component$Type)>)>)
constructor(arg0: $IAutomataCoreTier$Type, arg1: $Item$Properties$Type, arg2: $Supplier$Type<(any)>, arg3: ($Function$Type<(any), (any)>)[], arg4: $BiFunction$Type<(any), (any), (any)>, arg5: integer, arg6: $DefaultConstructorMarker$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCoreTier"(): $IAutomataCoreTier
get "coreTier"(): $IAutomataCoreTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseAutomataCore$Type = ($BaseAutomataCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseAutomataCore_ = $BaseAutomataCore$Type;
}}
declare module "packages/site/siredvin/turtlematic/common/items/$RecipeAutomataCore" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAutomataCoreTier, $IAutomataCoreTier$Type} from "packages/site/siredvin/turtlematic/api/$IAutomataCoreTier"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PeripheralItem, $PeripheralItem$Type} from "packages/site/siredvin/peripheralium/common/items/$PeripheralItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$BaseAutomataCore, $BaseAutomataCore$Type} from "packages/site/siredvin/turtlematic/common/items/base/$BaseAutomataCore"

export class $RecipeAutomataCore extends $BaseAutomataCore {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $IAutomataCoreTier$Type, arg1: $Supplier$Type<(any)>, arg2: ($Function$Type<(any), (any)>)[], arg3: $BiFunction$Type<(any), (any), (any)>, arg4: integer, arg5: $DefaultConstructorMarker$Type)
constructor(arg0: $IAutomataCoreTier$Type, arg1: $Supplier$Type<(boolean)>, arg2: ($Function$Type<($PeripheralItem$Type), ($List$Type<($Component$Type)>)>)[], arg3: $BiFunction$Type<($ItemStack$Type), ($Level$Type), ($List$Type<($Component$Type)>)>)
constructor(arg0: $IAutomataCoreTier$Type, arg1: $Item$Properties$Type, arg2: $Supplier$Type<(any)>, arg3: ($Function$Type<(any), (any)>)[], arg4: $BiFunction$Type<(any), (any), (any)>, arg5: integer, arg6: $DefaultConstructorMarker$Type)
constructor(arg0: $IAutomataCoreTier$Type, arg1: $Item$Properties$Type, arg2: $Supplier$Type<(boolean)>, arg3: ($Function$Type<($PeripheralItem$Type), ($List$Type<($Component$Type)>)>)[], arg4: $BiFunction$Type<($ItemStack$Type), ($Level$Type), ($List$Type<($Component$Type)>)>)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeAutomataCore$Type = ($RecipeAutomataCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeAutomataCore_ = $RecipeAutomataCore$Type;
}}
declare module "packages/site/siredvin/peripheralium/util/$Pair" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Pair$Companion, $Pair$Companion$Type} from "packages/site/siredvin/peripheralium/util/$Pair$Companion"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $Pair<T, V> {
static readonly "Companion": $Pair$Companion

constructor(arg0: T, arg1: V)

public "reduce"<R>(arg0: $BiFunction$Type<(T), (V), (R)>): R
public "getRight"(): V
public "getLeft"(): T
public "mapBoth"<T1, V1>(arg0: $BiFunction$Type<(T), (V), ($Pair$Type<(T1), (V1)>)>): $Pair<(T1), (V1)>
public "mapRight"<V1>(arg0: $Function$Type<(V), (V1)>): $Pair<(T), (V1)>
public "mapLeft"<T1>(arg0: $Function$Type<(T), (T1)>): $Pair<(T1), (V)>
public "ignoreRight"<V1>(): $Pair<(T), (V1)>
public "leftPresent"(): boolean
public "rightPresent"(): boolean
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
declare module "packages/site/siredvin/turtlematic/common/recipe/$SoulHarvestIngredient" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $SoulHarvestIngredient {

 "getDescription"(): string
 "getName"(): string
 "match"(arg0: $Entity$Type): boolean
 "getRequiredCount"(): integer
}

export namespace $SoulHarvestIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulHarvestIngredient$Type = ($SoulHarvestIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulHarvestIngredient_ = $SoulHarvestIngredient$Type;
}}
declare module "packages/site/siredvin/turtlematic/api/$ISoulFeedableItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RecipeEntityRepresentation, $RecipeEntityRepresentation$Type} from "packages/site/siredvin/turtlematic/api/$RecipeEntityRepresentation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Pair, $Pair$Type} from "packages/site/siredvin/peripheralium/util/$Pair"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SoulHarvestRecipe, $SoulHarvestRecipe$Type} from "packages/site/siredvin/turtlematic/common/recipe/$SoulHarvestRecipe"

export interface $ISoulFeedableItem extends $ItemLike {

 "getActiveRecipe"(arg0: $ItemStack$Type): $SoulHarvestRecipe
 "consumeEntitySoul"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type): $Pair<($ItemStack), (string)>
 "getEntityRepresentation"(arg0: $ItemStack$Type, arg1: $SoulHarvestRecipe$Type): $List<($RecipeEntityRepresentation)>
 "asItem"(): $Item
}

export namespace $ISoulFeedableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoulFeedableItem$Type = ($ISoulFeedableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoulFeedableItem_ = $ISoulFeedableItem$Type;
}}
declare module "packages/site/siredvin/peripheralium/api/config/$IConfigHandler" {
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export interface $IConfigHandler {

 "getName"(): string
 "settingsName"(): string
 "getSettingsPostfix"(): string
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
declare module "packages/site/siredvin/turtlematic/common/recipe/$SoulHarvestRecipe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Pair, $Pair$Type} from "packages/site/siredvin/peripheralium/util/$Pair"
import {$SoulHarvestIngredient, $SoulHarvestIngredient$Type} from "packages/site/siredvin/turtlematic/common/recipe/$SoulHarvestIngredient"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoulHarvestRecipe {

constructor(arg0: $List$Type<(any)>, arg1: $Item$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $List$Type<(any)>, arg1: $Item$Type): $SoulHarvestRecipe
public "getIngredients"(): $List<($SoulHarvestIngredient)>
public "component2"(): $Item
public "component1"(): $List<($SoulHarvestIngredient)>
public "targetIngredient"(arg0: $Entity$Type): $SoulHarvestIngredient
public "getResultSoul"(): $Item
public "isFinished"(arg0: $CompoundTag$Type): boolean
public "isSuitable"(arg0: $Entity$Type, arg1: $CompoundTag$Type): boolean
public "isSuitable"(arg0: string): boolean
public "isSuitable"(arg0: $Entity$Type): boolean
public "consumeEntity"(arg0: $ItemStack$Type, arg1: $Entity$Type): $Pair<($ItemStack), (string)>
get "ingredients"(): $List<($SoulHarvestIngredient)>
get "resultSoul"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulHarvestRecipe$Type = ($SoulHarvestRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulHarvestRecipe_ = $SoulHarvestRecipe$Type;
}}
declare module "packages/site/siredvin/turtlematic/common/items/$SoulVial" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SoulVial$Companion, $SoulVial$Companion$Type} from "packages/site/siredvin/turtlematic/common/items/$SoulVial$Companion"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DescriptiveItem, $DescriptiveItem$Type} from "packages/site/siredvin/peripheralium/common/items/$DescriptiveItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulVial extends $DescriptiveItem {
static readonly "Companion": $SoulVial$Companion
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulVial$Type = ($SoulVial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulVial_ = $SoulVial$Type;
}}
declare module "packages/site/siredvin/peripheralium/common/items/$DescriptiveBlockItem" {
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

export class $DescriptiveBlockItem extends $BlockItem {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DescriptiveBlockItem$Type = ($DescriptiveBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DescriptiveBlockItem_ = $DescriptiveBlockItem$Type;
}}
declare module "packages/site/siredvin/turtlematic/common/items/$ForgedAutomataCore" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ISoulFeedableItem, $ISoulFeedableItem$Type} from "packages/site/siredvin/turtlematic/api/$ISoulFeedableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Pair, $Pair$Type} from "packages/site/siredvin/peripheralium/util/$Pair"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SoulHarvestRecipe, $SoulHarvestRecipe$Type} from "packages/site/siredvin/turtlematic/common/recipe/$SoulHarvestRecipe"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RecipeEntityRepresentation, $RecipeEntityRepresentation$Type} from "packages/site/siredvin/turtlematic/api/$RecipeEntityRepresentation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DescriptiveItem, $DescriptiveItem$Type} from "packages/site/siredvin/peripheralium/common/items/$DescriptiveItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgedAutomataCore extends $DescriptiveItem implements $ISoulFeedableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getActiveRecipe"(arg0: $ItemStack$Type): $SoulHarvestRecipe
public "consumeEntitySoul"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type): $Pair<($ItemStack), (string)>
public "getEntityRepresentation"(arg0: $ItemStack$Type, arg1: $SoulHarvestRecipe$Type): $List<($RecipeEntityRepresentation)>
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgedAutomataCore$Type = ($ForgedAutomataCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgedAutomataCore_ = $ForgedAutomataCore$Type;
}}
declare module "packages/site/siredvin/turtlematic/api/$IAutomataCoreTier" {
import {$IConfigHandler, $IConfigHandler$Type} from "packages/site/siredvin/peripheralium/api/config/$IConfigHandler"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IAutomataCoreTier extends $IConfigHandler {

 "getCooldownReduceFactor"(): double
 "getMaxFuelConsumptionRate"(): integer
 "getInteractionRadius"(): integer
 "getTraits"(): $Set<($ResourceLocation)>
 "needRestoreDurability"(): boolean
 "getName"(): string
 "settingsName"(): string
 "getSettingsPostfix"(): string
 "addToConfig"(arg0: $ForgeConfigSpec$Builder$Type): void
}

export namespace $IAutomataCoreTier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutomataCoreTier$Type = ($IAutomataCoreTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutomataCoreTier_ = $IAutomataCoreTier$Type;
}}
declare module "packages/site/siredvin/turtlematic/api/$RecipeEntityRepresentation" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $RecipeEntityRepresentation {

constructor(arg0: integer, arg1: integer, arg2: string)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: integer, arg1: integer, arg2: string): $RecipeEntityRepresentation
public "component3"(): string
public "component2"(): integer
public "component1"(): integer
public "getRequiredCount"(): integer
public "toComponent"(): $Component
public "getLeftCount"(): integer
public "getConsumedCount"(): integer
get "name"(): string
get "requiredCount"(): integer
get "leftCount"(): integer
get "consumedCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeEntityRepresentation$Type = ($RecipeEntityRepresentation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeEntityRepresentation_ = $RecipeEntityRepresentation$Type;
}}
declare module "packages/site/siredvin/turtlematic/common/items/$AutomataCore" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ISoulFeedableItem, $ISoulFeedableItem$Type} from "packages/site/siredvin/turtlematic/api/$ISoulFeedableItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Pair, $Pair$Type} from "packages/site/siredvin/peripheralium/util/$Pair"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SoulHarvestRecipe, $SoulHarvestRecipe$Type} from "packages/site/siredvin/turtlematic/common/recipe/$SoulHarvestRecipe"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RecipeEntityRepresentation, $RecipeEntityRepresentation$Type} from "packages/site/siredvin/turtlematic/api/$RecipeEntityRepresentation"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$BaseAutomataCore, $BaseAutomataCore$Type} from "packages/site/siredvin/turtlematic/common/items/base/$BaseAutomataCore"

export class $AutomataCore extends $BaseAutomataCore implements $ISoulFeedableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getActiveRecipe"(arg0: $ItemStack$Type): $SoulHarvestRecipe
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "consumeEntitySoul"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type): $Pair<($ItemStack), (string)>
public "getEntityRepresentation"(arg0: $ItemStack$Type, arg1: $SoulHarvestRecipe$Type): $List<($RecipeEntityRepresentation)>
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomataCore$Type = ($AutomataCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomataCore_ = $AutomataCore$Type;
}}
declare module "packages/site/siredvin/peripheralium/util/$Pair$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Pair, $Pair$Type} from "packages/site/siredvin/peripheralium/util/$Pair"

export class $Pair$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "of"<T, V>(arg0: T, arg1: V): $Pair<(T), (V)>
public "onlyRight"<T, V>(arg0: V): $Pair<(T), (V)>
public "onlyLeft"<T, V>(arg0: T): $Pair<(T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Companion$Type = ($Pair$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair$Companion_ = $Pair$Companion$Type;
}}
