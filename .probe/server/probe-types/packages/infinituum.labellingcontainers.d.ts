declare module "packages/infinituum/labellingcontainers/items/$LabelPrinterItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LabelPrinterItem$LabelPrinterMode, $LabelPrinterItem$LabelPrinterMode$Type} from "packages/infinituum/labellingcontainers/items/$LabelPrinterItem$LabelPrinterMode"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LabelPrinterItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(settings: $Item$Properties$Type)

public static "setMode"(itemStack: $ItemStack$Type, mode: $LabelPrinterItem$LabelPrinterMode$Type): void
public static "getMode"(itemStack: $ItemStack$Type): $LabelPrinterItem$LabelPrinterMode
public static "getLabel"(itemStack: $ItemStack$Type): string
public static "setLabel"(itemStack: $ItemStack$Type, text: string): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public static "setDisplayItem"(itemStack: $ItemStack$Type, itemToDisplay: $ItemStack$Type): void
public static "setModeIndex"(itemStack: $ItemStack$Type, modeIndex: integer): void
public static "getModeIndex"(itemStack: $ItemStack$Type): integer
public static "getDisplayItem"(itemStack: $ItemStack$Type): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelPrinterItem$Type = ($LabelPrinterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelPrinterItem_ = $LabelPrinterItem$Type;
}}
declare module "packages/infinituum/labellingcontainers/utils/$Taggable" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $Taggable {

 "labellingcontainers$setDisplayItem"(arg0: $Item$Type, arg1: boolean): void
 "labellingcontainers$getLabel"(): $MutableComponent
 "labellingcontainers$setLabel"(arg0: $MutableComponent$Type, arg1: boolean): void
 "labellingcontainers$getDisplayItem"(): $Item
}

export namespace $Taggable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Taggable$Type = ($Taggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Taggable_ = $Taggable$Type;
}}
declare module "packages/infinituum/labellingcontainers/items/$LabelPrinterItem$LabelPrinterMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LabelPrinterItem$LabelPrinterMode extends $Enum<($LabelPrinterItem$LabelPrinterMode)> {
static readonly "CREATE": $LabelPrinterItem$LabelPrinterMode
static readonly "COPY": $LabelPrinterItem$LabelPrinterMode


public static "values"(): ($LabelPrinterItem$LabelPrinterMode)[]
public static "valueOf"(name: string): $LabelPrinterItem$LabelPrinterMode
public "swap"(): $LabelPrinterItem$LabelPrinterMode
public static "fromIndex"(index: integer): $LabelPrinterItem$LabelPrinterMode
public "getDisplayable"(): $Component
get "displayable"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelPrinterItem$LabelPrinterMode$Type = (("create") | ("copy")) | ($LabelPrinterItem$LabelPrinterMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelPrinterItem$LabelPrinterMode_ = $LabelPrinterItem$LabelPrinterMode$Type;
}}
