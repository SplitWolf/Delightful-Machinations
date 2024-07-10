declare module "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataBoolean" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"

export interface $IModuleDataBoolean extends $IModuleData {

 "get"(): boolean
 "getId"(): string
 "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IModuleDataBoolean {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleDataBoolean$Type = ($IModuleDataBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleDataBoolean_ = $IModuleDataBoolean$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/various/$IItemCycler" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemCycler {

 "cycle"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: boolean): void

(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: boolean): void
}

export namespace $IItemCycler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemCycler$Type = ($IItemCycler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemCycler_ = $IItemCycler$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/various/$ITabletSupport" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITabletSupport {

 "openGui"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
 "getInstalledTablet"(): $Item
}

export namespace $ITabletSupport {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITabletSupport$Type = ($ITabletSupport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITabletSupport_ = $ITabletSupport$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IClientScreenModule$TransformMode extends $Enum<($IClientScreenModule$TransformMode)> {
static readonly "NONE": $IClientScreenModule$TransformMode
static readonly "TEXT": $IClientScreenModule$TransformMode
static readonly "TEXTLARGE": $IClientScreenModule$TransformMode
static readonly "ITEM": $IClientScreenModule$TransformMode


public static "values"(): ($IClientScreenModule$TransformMode)[]
public static "valueOf"(arg0: string): $IClientScreenModule$TransformMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientScreenModule$TransformMode$Type = (("item") | ("textlarge") | ("none") | ("text")) | ($IClientScreenModule$TransformMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientScreenModule$TransformMode_ = $IClientScreenModule$TransformMode$Type;
}}
declare module "packages/mcjty/rftoolsbase/modules/various/items/$ManualItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
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
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $ManualItem extends $Item implements $ITooltipSettings {
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
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualItem$Type = ($ManualItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManualItem_ = $ManualItem$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$TextAlign" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TextAlign extends $Enum<($TextAlign)> {
static readonly "ALIGN_LEFT": $TextAlign
static readonly "ALIGN_CENTER": $TextAlign
static readonly "ALIGN_RIGHT": $TextAlign


public static "get"(arg0: string): $TextAlign
public static "values"(): ($TextAlign)[]
public static "valueOf"(arg0: string): $TextAlign
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextAlign$Type = (("align_left") | ("align_center") | ("align_right")) | ($TextAlign);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextAlign_ = $TextAlign$Type;
}}
declare module "packages/mcjty/rftoolsbase/tools/$GenericModuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IModuleProvider, $IModuleProvider$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $GenericModuleItem extends $Item implements $IModuleProvider, $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getModuleName"(): string
public "getClientScreenModule"(): $Class<(any)>
public "getServerScreenModule"(): $Class<(any)>
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "moduleName"(): string
get "clientScreenModule"(): $Class<(any)>
get "serverScreenModule"(): $Class<(any)>
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericModuleItem$Type = ($GenericModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericModuleItem_ = $GenericModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/code/$ICompiledOpcode" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$IParameter, $IParameter$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$IParameter"

export interface $ICompiledOpcode {

 "getParameters"(): $List<($IParameter)>

(): $List<($IParameter)>
}

export namespace $ICompiledOpcode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICompiledOpcode$Type = ($ICompiledOpcode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICompiledOpcode_ = $ICompiledOpcode$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export interface $IClientScreenModule<T extends $IModuleData> {

 "getHeight"(): integer
 "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: T, arg6: $ModuleRenderInfo$Type): void
 "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
 "getTransformMode"(): $IClientScreenModule$TransformMode
 "needsServerData"(): boolean
 "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
}

export namespace $IClientScreenModule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientScreenModule$Type<T> = ($IClientScreenModule<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientScreenModule_<T> = $IClientScreenModule$Type<(T)>;
}}
declare module "packages/mcjty/rftoolsbase/modules/tablet/items/$TabletItem" {
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
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
import {$BaseItem, $BaseItem$Type} from "packages/mcjty/lib/items/$BaseItem"
import {$IItemCycler, $IItemCycler$Type} from "packages/mcjty/rftoolsbase/api/various/$IItemCycler"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $TabletItem extends $BaseItem implements $IItemCycler, $ITooltipSettings {
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "cycle"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: boolean): void
public static "getHand"(arg0: $Player$Type): $InteractionHand
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getManualEntry"(): $ManualEntry
public static "getCurrentSlot"(arg0: $ItemStack$Type): integer
public static "getContainingItem"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public static "setContainingItem"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: integer, arg3: $ItemStack$Type): void
public static "setCurrentSlot"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer): void
public "getItemsForTab"(): $List<($ItemStack)>
public "getMaxWidth"(): integer
get "manualEntry"(): $ManualEntry
get "itemsForTab"(): $List<($ItemStack)>
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabletItem$Type = ($TabletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TabletItem_ = $TabletItem$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModuleRenderInfo {
readonly "factor": float
readonly "pos": $BlockPos
readonly "hitx": integer
readonly "hity": integer
readonly "truetype": boolean
readonly "fontId": $ResourceLocation

constructor(arg0: float, arg1: $BlockPos$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean, arg6: $ResourceLocation$Type)

public "getLightmapValue"(): integer
get "lightmapValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleRenderInfo$Type = ($ModuleRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleRenderInfo_ = $ModuleRenderInfo$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/code/$Function$Builder" {
import {$ParameterType, $ParameterType$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$ParameterType"
import {$Function, $Function$Type} from "packages/mcjty/rftoolsbase/api/control/code/$Function"
import {$IFunctionRunnable, $IFunctionRunnable$Type} from "packages/mcjty/rftoolsbase/api/control/code/$IFunctionRunnable"

export class $Function$Builder {

constructor()

public "name"(arg0: string): $Function$Builder
public "type"(arg0: $ParameterType$Type): $Function$Builder
public "build"(): $Function
public "id"(arg0: string): $Function$Builder
public "description"(...arg0: (string)[]): $Function$Builder
public "runnable"(arg0: $IFunctionRunnable$Type): $Function$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$Builder$Type = ($Function$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function$Builder_ = $Function$Builder$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/parameters/$BlockSide" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $BlockSide implements $Comparable<($BlockSide)> {

constructor(arg0: string, arg1: $Direction$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $BlockSide$Type): integer
public "getNodeName"(): string
public "getSide"(): $Direction
public "getStringRepresentation"(): string
public "getNodeNameSafe"(): string
public "hasNodeName"(): boolean
get "nodeName"(): string
get "side"(): $Direction
get "stringRepresentation"(): string
get "nodeNameSafe"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSide$Type = ($BlockSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSide_ = $BlockSide$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder$Choice" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $IModuleGuiBuilder$Choice {

constructor(arg0: string, ...arg1: (string)[])

public "getName"(): string
public "getTooltips"(): (string)[]
get "name"(): string
get "tooltips"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleGuiBuilder$Choice$Type = ($IModuleGuiBuilder$Choice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleGuiBuilder$Choice_ = $IModuleGuiBuilder$Choice$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/machines/$IProcessor" {
import {$Tuple, $Tuple$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$Tuple"
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$BlockSide, $BlockSide$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$BlockSide"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$IProgram, $IProgram$Type} from "packages/mcjty/rftoolsbase/api/control/machines/$IProgram"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ICompiledOpcode, $ICompiledOpcode$Type} from "packages/mcjty/rftoolsbase/api/control/code/$ICompiledOpcode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IParameter, $IParameter$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$IParameter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$Inventory"
import {$IOpcodeRunnable$OpcodeResult, $IOpcodeRunnable$OpcodeResult$Type} from "packages/mcjty/rftoolsbase/api/control/code/$IOpcodeRunnable$OpcodeResult"

export interface $IProcessor {

 "signal"(arg0: $Tuple$Type): integer
 "signal"(arg0: string): integer
 "log"(arg0: string): void
 "setVariable"(arg0: $IProgram$Type, arg1: integer): void
 "getVariable"(arg0: $IProgram$Type, arg1: integer): $IParameter
 "sendMessage"(arg0: $IProgram$Type, arg1: integer, arg2: string, arg3: integer): void
 "getEnergy"(arg0: $Inventory$Type): integer
 "getMaxEnergy"(arg0: $Inventory$Type): integer
 "getCraftResult"(arg0: $IProgram$Type): $ItemStack
 "evaluateItemParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $ItemStack
 "evaluateInventoryParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $Inventory
 "evaluateSideParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $BlockSide
 "evaluateTupleParameterNonNull"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $Tuple
 "evaluateItemParameterNonNull"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $ItemStack
 "evaluateFluidParameterNonNull"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $FluidStack
 "evaluateInventoryParameterNonNull"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $Inventory
 "evaluateStringParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): string
 "evaluateIntParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): integer
 "evaluateTupleParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $Tuple
 "evaluateSideParameterNonNull"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $BlockSide
 "evaluateLngParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): long
 "evaluateLongParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): long
 "evaluateIntegerParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): integer
 "evaluateNumberParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): number
 "evaluateVectorParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $List<($IParameter)>
 "evaluateVectorParameterNonNull"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $List<($IParameter)>
 "evaluateFluidParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): $FluidStack
 "evaluateParameterNonNull"<T>(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): T
 "evaluateBoolParameter"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): boolean
 "evaluateStringParameterNonNull"(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): string
 "getLiquid"(arg0: $Inventory$Type): integer
 "evaluateParameter"<T>(arg0: $ICompiledOpcode$Type, arg1: $IProgram$Type, arg2: integer): T
 "getPositionAt"(arg0: $BlockSide$Type): $BlockPos
 "gfxDrawText"(arg0: $IProgram$Type, arg1: string, arg2: $Tuple$Type, arg3: string, arg4: integer): void
/**
 * 
 * @deprecated
 */
 "gfxDrawText"(arg0: $IProgram$Type, arg1: string, arg2: integer, arg3: integer, arg4: string, arg5: integer): void
/**
 * 
 * @deprecated
 */
 "gfxDrawBox"(arg0: $IProgram$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "gfxDrawBox"(arg0: $IProgram$Type, arg1: string, arg2: $Tuple$Type, arg3: $Tuple$Type, arg4: integer): void
 "gfxDrawLine"(arg0: $IProgram$Type, arg1: string, arg2: $Tuple$Type, arg3: $Tuple$Type, arg4: integer): void
/**
 * 
 * @deprecated
 */
 "gfxDrawLine"(arg0: $IProgram$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "gfxClear"(arg0: $IProgram$Type, arg1: string): void
 "getItemHandlerAt"(arg0: $Inventory$Type): $LazyOptional<($IItemHandler)>
 "readRedstoneIn"(arg0: $BlockSide$Type): integer
 "setPowerOut"(arg0: $BlockSide$Type, arg1: integer): void
 "requestCraft"(arg0: $Ingredient$Type, arg1: $Inventory$Type): boolean
 "getTileEntityAt"(arg0: $BlockSide$Type): $BlockEntity
 "findCraftingCard"(arg0: $IProgram$Type, arg1: $Inventory$Type, arg2: $ItemStack$Type): $ItemStack
 "releaseLock"(arg0: string): void
 "placeLock"(arg0: string): $IOpcodeRunnable$OpcodeResult
 "testLock"(arg0: string): boolean
 "getMaxLiquid"(arg0: $Inventory$Type): integer
 "getEnergyLong"(arg0: $Inventory$Type): long
 "getMaxEnergyLong"(arg0: $Inventory$Type): long
 "getFluidHandlerAt"(arg0: $Inventory$Type): $LazyOptional<($IFluidHandler)>
 "getItemInternal"(arg0: $IProgram$Type, arg1: integer): $ItemStack
}

export namespace $IProcessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProcessor$Type = ($IProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProcessor_ = $IProcessor$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/parameters/$Inventory" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockSide, $BlockSide$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$BlockSide"

export class $Inventory extends $BlockSide {

constructor(arg0: string, arg1: $Direction$Type, arg2: $Direction$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "serialize"(): string
public static "deserialize"(arg0: string): $Inventory
public "getSide"(): $Direction
public "getStringRepresentation"(): string
public "getIntSide"(): $Direction
get "side"(): $Direction
get "stringRepresentation"(): string
get "intSide"(): $Direction
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
declare module "packages/mcjty/rftoolsbase/api/control/code/$IOpcodeRunnable$OpcodeResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IOpcodeRunnable$OpcodeResult extends $Enum<($IOpcodeRunnable$OpcodeResult)> {
static readonly "POSITIVE": $IOpcodeRunnable$OpcodeResult
static readonly "NEGATIVE": $IOpcodeRunnable$OpcodeResult
static readonly "HOLD": $IOpcodeRunnable$OpcodeResult


public static "values"(): ($IOpcodeRunnable$OpcodeResult)[]
public static "valueOf"(arg0: string): $IOpcodeRunnable$OpcodeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOpcodeRunnable$OpcodeResult$Type = (("negative") | ("positive") | ("hold")) | ($IOpcodeRunnable$OpcodeResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOpcodeRunnable$OpcodeResult_ = $IOpcodeRunnable$OpcodeResult$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataContents" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"

export interface $IModuleDataContents extends $IModuleData {

 "getContents"(): long
 "getMaxContents"(): long
 "getLastPerTick"(): long
 "getId"(): string
 "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IModuleDataContents {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleDataContents$Type = ($IModuleDataContents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleDataContents_ = $IModuleDataContents$Type;
}}
declare module "packages/mcjty/rftoolsbase/modules/crafting/items/$CraftingCardItem" {
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackList, $ItemStackList$Type} from "packages/mcjty/lib/varia/$ItemStackList"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $CraftingCardItem extends $Item implements $ITooltipSettings {
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public static "getResult"(arg0: $ItemStack$Type): $ItemStack
public static "getIngredients"(arg0: $ItemStack$Type): $List<($Ingredient)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $RecipeType$Type<(any)>): $Recipe<(any)>
public static "getIngredientStacks"(arg0: $ItemStack$Type): $List<($ItemStack)>
public static "getStacksFromItem"(arg0: $ItemStack$Type): $ItemStackList
public static "fitsGrid"(arg0: $ItemStack$Type): boolean
public "getManualEntry"(): $ManualEntry
public static "testRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type): void
public static "putStacksInItem"(arg0: $ItemStack$Type, arg1: $ItemStackList$Type): void
public static "getIngredientsGrid"(arg0: $ItemStack$Type): $List<($Ingredient)>
public "getMaxWidth"(): integer
get "manualEntry"(): $ManualEntry
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingCardItem$Type = ($CraftingCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingCardItem_ = $CraftingCardItem$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataInteger" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"

export interface $IModuleDataInteger extends $IModuleData {

 "get"(): integer
 "getId"(): string
 "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IModuleDataInteger {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleDataInteger$Type = ($IModuleDataInteger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleDataInteger_ = $IModuleDataInteger$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$ITextRenderHelper" {
import {$TextAlign, $TextAlign$Type} from "packages/mcjty/rftoolsbase/api/screens/$TextAlign"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export interface $ITextRenderHelper {

 "setup"(arg0: string, arg1: integer, arg2: $ModuleRenderInfo$Type): void
 "getText"(): string
 "align"(arg0: $TextAlign$Type): $ITextRenderHelper
 "renderText"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $ModuleRenderInfo$Type): void
 "setDirty"(): void
 "large"(arg0: boolean): $ITextRenderHelper
 "isLarge"(): boolean
 "getAlign"(): $TextAlign
}

export namespace $ITextRenderHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextRenderHelper$Type = ($ITextRenderHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITextRenderHelper_ = $ITextRenderHelper$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/code/$Function" {
import {$ParameterType, $ParameterType$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$ParameterType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFunctionRunnable, $IFunctionRunnable$Type} from "packages/mcjty/rftoolsbase/api/control/code/$IFunctionRunnable"
import {$Function$Builder, $Function$Builder$Type} from "packages/mcjty/rftoolsbase/api/control/code/$Function$Builder"

export class $Function {


public "getDescription"(): $List<(string)>
public "getName"(): string
public "getReturnType"(): $ParameterType
public "getId"(): string
public static "builder"(): $Function$Builder
public "getFunctionRunnable"(): $IFunctionRunnable
get "description"(): $List<(string)>
get "name"(): string
get "returnType"(): $ParameterType
get "id"(): string
get "functionRunnable"(): $IFunctionRunnable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$Type = ($Function);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function_ = $Function$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataString" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"

export interface $IModuleDataString extends $IModuleData {

 "get"(): string
 "getId"(): string
 "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IModuleDataString {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleDataString$Type = ($IModuleDataString);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleDataString_ = $IModuleDataString$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/parameters/$ParameterValue" {
import {$Function, $Function$Type} from "packages/mcjty/rftoolsbase/api/control/code/$Function"

export class $ParameterValue {


public "getValue"(): any
public "getFunction"(): $Function
public static "function"(arg0: $Function$Type): $ParameterValue
public static "constant"(arg0: any): $ParameterValue
public "isConstant"(): boolean
public static "variable"(arg0: integer): $ParameterValue
public "isVariable"(): boolean
public "isFunction"(): boolean
public "getVariableIndex"(): integer
get "value"(): any
get "variableIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParameterValue$Type = ($ParameterValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParameterValue_ = $ParameterValue$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$ILevelRenderHelper" {
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$FormatStyle, $FormatStyle$Type} from "packages/mcjty/rftoolsbase/api/screens/$FormatStyle"
import {$IModuleDataContents, $IModuleDataContents$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataContents"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export interface $ILevelRenderHelper {

 "format"(arg0: $FormatStyle$Type): $ILevelRenderHelper
 "color"(arg0: integer, arg1: integer): $ILevelRenderHelper
 "label"(arg0: string): $ILevelRenderHelper
 "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: integer, arg3: integer, arg4: $IModuleDataContents$Type, arg5: $ModuleRenderInfo$Type): void
 "settings"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $ILevelRenderHelper
 "gradient"(arg0: integer, arg1: integer): $ILevelRenderHelper
}

export namespace $ILevelRenderHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelRenderHelper$Type = ($ILevelRenderHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILevelRenderHelper_ = $ILevelRenderHelper$Type;
}}
declare module "packages/mcjty/rftoolsbase/modules/informationscreen/blocks/$InformationScreenBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $InformationScreenBlock extends $BaseBlock {
static readonly "BLOCK_NORTH": $VoxelShape
static readonly "BLOCK_SOUTH": $VoxelShape
static readonly "BLOCK_WEST": $VoxelShape
static readonly "BLOCK_EAST": $VoxelShape
static readonly "HORIZ_PROPERTIES": ($Property<(any)>)[]
static readonly "ROTATING_PROPERTIES": ($Property<(any)>)[]
static readonly "NONE_PROPERTIES": ($Property<(any)>)[]
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
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getRotationType"(): $RotationType
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InformationScreenBlock$Type = ($InformationScreenBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InformationScreenBlock_ = $InformationScreenBlock$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/machines/$IProgram" {
import {$IParameter, $IParameter$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$IParameter"

export interface $IProgram {

 "setDelay"(arg0: integer): void
 "getDelay"(): integer
 "isDead"(): boolean
 "killMe"(): void
 "hasCraftTicket"(): boolean
 "setLastValue"(arg0: $IParameter$Type): void
 "getCraftTicket"(): string
 "getLastValue"(): $IParameter
}

export namespace $IProgram {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProgram$Type = ($IProgram);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProgram_ = $IProgram$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/parameters/$ParameterType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ParameterType extends $Enum<($ParameterType)> {
static readonly "PAR_STRING": $ParameterType
static readonly "PAR_INTEGER": $ParameterType
static readonly "PAR_FLOAT": $ParameterType
static readonly "PAR_SIDE": $ParameterType
static readonly "PAR_BOOLEAN": $ParameterType
static readonly "PAR_INVENTORY": $ParameterType
static readonly "PAR_ITEM": $ParameterType
static readonly "PAR_EXCEPTION": $ParameterType
static readonly "PAR_TUPLE": $ParameterType
static readonly "PAR_FLUID": $ParameterType
static readonly "PAR_VECTOR": $ParameterType
static readonly "PAR_LONG": $ParameterType
static readonly "PAR_NUMBER": $ParameterType


public "getName"(): string
public static "values"(): ($ParameterType)[]
public static "valueOf"(arg0: string): $ParameterType
public static "getByName"(arg0: string): $ParameterType
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParameterType$Type = (("par_integer") | ("par_item") | ("par_float") | ("par_side") | ("par_boolean") | ("par_long") | ("par_tuple") | ("par_string") | ("par_inventory") | ("par_fluid") | ("par_number") | ("par_exception") | ("par_vector")) | ($ParameterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParameterType_ = $ParameterType$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/parameters/$Parameter" {
import {$ParameterType, $ParameterType$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$ParameterType"
import {$Parameter$Builder, $Parameter$Builder$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$Parameter$Builder"
import {$ParameterValue, $ParameterValue$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$ParameterValue"
import {$IParameter, $IParameter$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$IParameter"

export class $Parameter implements $IParameter {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isSet"(): boolean
public static "builder"(): $Parameter$Builder
public "getParameterValue"(): $ParameterValue
public "getParameterType"(): $ParameterType
get "set"(): boolean
get "parameterValue"(): $ParameterValue
get "parameterType"(): $ParameterType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Parameter$Type = ($Parameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Parameter_ = $Parameter$Type;
}}
declare module "packages/mcjty/rftoolsbase/modules/various/items/$SmartWrenchItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SmartWrench, $SmartWrench$Type} from "packages/mcjty/lib/api/smartwrench/$SmartWrench"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SmartWrenchMode, $SmartWrenchMode$Type} from "packages/mcjty/lib/api/smartwrench/$SmartWrenchMode"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $SmartWrenchItem extends $Item implements $SmartWrench, $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $SmartWrenchMode$Type)

public "getMode"(): $SmartWrenchMode
public "getMode"(arg0: $ItemStack$Type): $SmartWrenchMode
public static "getCurrentBlock"(arg0: $ItemStack$Type): $Optional<($GlobalPos)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public static "setCurrentBlock"(arg0: $ItemStack$Type, arg1: $GlobalPos$Type): void
public static "getCurrentMode"(arg0: $ItemStack$Type): $SmartWrenchMode
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "mode"(): $SmartWrenchMode
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartWrenchItem$Type = ($SmartWrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartWrenchItem_ = $SmartWrenchItem$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/parameters/$Parameter$Builder" {
import {$ParameterType, $ParameterType$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$ParameterType"
import {$Parameter, $Parameter$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$Parameter"
import {$ParameterValue, $ParameterValue$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$ParameterValue"

export class $Parameter$Builder {

constructor()

public "type"(arg0: $ParameterType$Type): $Parameter$Builder
public "value"(arg0: $ParameterValue$Type): $Parameter$Builder
public "build"(): $Parameter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Parameter$Builder$Type = ($Parameter$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Parameter$Builder_ = $Parameter$Builder$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/code/$IFunctionRunnable" {
import {$IProgram, $IProgram$Type} from "packages/mcjty/rftoolsbase/api/control/machines/$IProgram"
import {$IProcessor, $IProcessor$Type} from "packages/mcjty/rftoolsbase/api/control/machines/$IProcessor"

export interface $IFunctionRunnable {

 "run"(arg0: $IProcessor$Type, arg1: $IProgram$Type): any

(arg0: $IProcessor$Type, arg1: $IProgram$Type): any
}

export namespace $IFunctionRunnable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFunctionRunnable$Type = ($IFunctionRunnable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFunctionRunnable_ = $IFunctionRunnable$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/parameters/$Tuple" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Tuple extends $Record implements $Comparable<($Tuple)> {

constructor(x: integer, y: integer)

public "y"(): integer
public "getY"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Tuple$Type): integer
public "x"(): integer
public "getX"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tuple$Type = ($Tuple);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tuple_ = $Tuple$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/client/$IHudSupport" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IHudSupport {

 "getHudPos"(): $BlockPos
 "getLastUpdateTime"(): long
 "getBlockOrientation"(): $Direction
 "setLastUpdateTime"(arg0: long): void
 "getClientLog"(): $List<(string)>
 "isBlockAboveAir"(): boolean
}

export namespace $IHudSupport {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHudSupport$Type = ($IHudSupport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHudSupport_ = $IHudSupport$Type;
}}
declare module "packages/mcjty/rftoolsbase/modules/filter/items/$FilterModuleItem" {
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ITooltipExtras, $ITooltipExtras$Type} from "packages/mcjty/lib/tooltips/$ITooltipExtras"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $FilterModuleItem extends $Item implements $ITooltipSettings, $ITooltipExtras {
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public static "getCache"(arg0: $ItemStack$Type): $Predicate<($ItemStack)>
public "getItems"(arg0: $ItemStack$Type): $List<($Pair<($ItemStack), (integer)>)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getManualEntry"(): $ManualEntry
public "getMaxWidth"(): integer
get "manualEntry"(): $ManualEntry
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterModuleItem$Type = ($FilterModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterModuleItem_ = $FilterModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IModuleGuiBuilder$Choice, $IModuleGuiBuilder$Choice$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder$Choice"

export interface $IModuleGuiBuilder {

 "format"(arg0: string): $IModuleGuiBuilder
 "mode"(arg0: string): $IModuleGuiBuilder
 "integer"(arg0: string, ...arg1: (string)[]): $IModuleGuiBuilder
 "text"(arg0: string, ...arg1: (string)[]): $IModuleGuiBuilder
 "color"(arg0: string, ...arg1: (string)[]): $IModuleGuiBuilder
 "block"(arg0: string): $IModuleGuiBuilder
 "label"(arg0: string): $IModuleGuiBuilder
 "nl"(): $IModuleGuiBuilder
 "toggle"(arg0: string, arg1: string, ...arg2: (string)[]): $IModuleGuiBuilder
 "getCurrentData"(): $CompoundTag
 "toggleNegative"(arg0: string, arg1: string, ...arg2: (string)[]): $IModuleGuiBuilder
 "choices"(arg0: string, ...arg1: ($IModuleGuiBuilder$Choice$Type)[]): $IModuleGuiBuilder
 "choices"(arg0: string, arg1: string, ...arg2: (string)[]): $IModuleGuiBuilder
 "getWorld"(): $Level
 "leftLabel"(arg0: string): $IModuleGuiBuilder
 "ghostStack"(arg0: string): $IModuleGuiBuilder
}

export namespace $IModuleGuiBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleGuiBuilder$Type = ($IModuleGuiBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleGuiBuilder_ = $IModuleGuiBuilder$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$ILevelRenderHelper, $ILevelRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$ILevelRenderHelper"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$FormatStyle, $FormatStyle$Type} from "packages/mcjty/rftoolsbase/api/screens/$FormatStyle"
import {$IModuleDataContents, $IModuleDataContents$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataContents"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"
import {$ITextRenderHelper, $ITextRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$ITextRenderHelper"

export interface $IModuleRenderHelper {

 "format"(arg0: string, arg1: $FormatStyle$Type): string
 "renderText"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $ModuleRenderInfo$Type, arg6: string): void
 "createLevelRenderHelper"(): $ILevelRenderHelper
 "createTextRenderHelper"(): $ITextRenderHelper
/**
 * 
 * @deprecated
 */
 "renderLevel"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $Font$Type, arg3: integer, arg4: integer, arg5: $IModuleDataContents$Type, arg6: string, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: $FormatStyle$Type): void
 "renderTextTrimmed"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $ModuleRenderInfo$Type, arg6: string, arg7: integer): void
}

export namespace $IModuleRenderHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleRenderHelper$Type = ($IModuleRenderHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleRenderHelper_ = $IModuleRenderHelper$Type;
}}
declare module "packages/mcjty/rftoolsbase/modules/worldgen/blocks/$DimensionalShardBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $DimensionalShardBlock extends $Block {
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

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionalShardBlock$Type = ($DimensionalShardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionalShardBlock_ = $DimensionalShardBlock$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$FormatStyle" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FormatStyle extends $Enum<($FormatStyle)> {
static readonly "MODE_FULL": $FormatStyle
static readonly "MODE_COMPACT": $FormatStyle
static readonly "MODE_COMMAS": $FormatStyle


public "getName"(): string
public static "values"(): ($FormatStyle)[]
public static "valueOf"(arg0: string): $FormatStyle
public static "getStyle"(arg0: string): $FormatStyle
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormatStyle$Type = (("mode_full") | ("mode_commas") | ("mode_compact")) | ($FormatStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FormatStyle_ = $FormatStyle$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$IScreenDataHelper" {
import {$IModuleDataInteger, $IModuleDataInteger$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataInteger"
import {$IModuleDataBoolean, $IModuleDataBoolean$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataBoolean"
import {$IModuleDataContents, $IModuleDataContents$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataContents"
import {$IModuleDataString, $IModuleDataString$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataString"

export interface $IScreenDataHelper {

 "createString"(arg0: string): $IModuleDataString
 "createInteger"(arg0: integer): $IModuleDataInteger
 "createBoolean"(arg0: boolean): $IModuleDataBoolean
 "createContents"(arg0: long, arg1: long, arg2: long): $IModuleDataContents
}

export namespace $IScreenDataHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenDataHelper$Type = ($IScreenDataHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenDataHelper_ = $IScreenDataHelper$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $IModuleData {

 "getId"(): string
 "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IModuleData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleData$Type = ($IModuleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleData_ = $IModuleData$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/control/parameters/$IParameter" {
import {$ParameterType, $ParameterType$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$ParameterType"
import {$ParameterValue, $ParameterValue$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$ParameterValue"

export interface $IParameter {

 "isSet"(): boolean
 "getParameterValue"(): $ParameterValue
 "getParameterType"(): $ParameterType
}

export namespace $IParameter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IParameter$Type = ($IParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IParameter_ = $IParameter$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$IModuleProvider" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $IModuleProvider {

 "getModuleName"(): string
 "getClientScreenModule"(): $Class<(any)>
 "getServerScreenModule"(): $Class<(any)>
 "createGui"(arg0: $IModuleGuiBuilder$Type): void
}

export namespace $IModuleProvider {
const CAPABILITY: $Capability<($IModuleProvider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleProvider$Type = ($IModuleProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleProvider_ = $IModuleProvider$Type;
}}
declare module "packages/mcjty/rftoolsbase/api/screens/$IScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$IScreenDataHelper, $IScreenDataHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenDataHelper"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IScreenModule<T extends $IModuleData> {

 "getData"(arg0: $IScreenDataHelper$Type, arg1: $Level$Type, arg2: long): T
 "getRfPerTick"(): integer
 "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
 "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
 "needsController"(): boolean
}

export namespace $IScreenModule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenModule$Type<T> = ($IScreenModule<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenModule_<T> = $IScreenModule$Type<(T)>;
}}
