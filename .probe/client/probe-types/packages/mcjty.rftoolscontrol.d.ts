declare module "packages/mcjty/rftoolscontrol/modules/various/items/interactionmodule/$InteractionClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$IModuleDataBoolean, $IModuleDataBoolean$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataBoolean"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $InteractionClientScreenModule implements $IClientScreenModule<($IModuleDataBoolean)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $IModuleDataBoolean$Type, arg6: $ModuleRenderInfo$Type): void
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "getTransformMode"(): $IClientScreenModule$TransformMode
public "needsServerData"(): boolean
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "height"(): integer
get "transformMode"(): $IClientScreenModule$TransformMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionClientScreenModule$Type = ($InteractionClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractionClientScreenModule_ = $InteractionClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/$CardBaseItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $CardBaseItem extends $Item implements $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

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
export type $CardBaseItem$Type = ($CardBaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CardBaseItem_ = $CardBaseItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/consolemodule/$ConsoleScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModuleDataLog, $ModuleDataLog$Type} from "packages/mcjty/rftoolscontrol/compat/rftoolssupport/$ModuleDataLog"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ConsoleScreenModule implements $IScreenModule<($ModuleDataLog)> {

constructor()

public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConsoleScreenModule$Type = ($ConsoleScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConsoleScreenModule_ = $ConsoleScreenModule$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/variablemodule/$VariableScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$ModuleDataVariable, $ModuleDataVariable$Type} from "packages/mcjty/rftoolscontrol/compat/rftoolssupport/$ModuleDataVariable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VariableScreenModule implements $IScreenModule<($ModuleDataVariable)> {

constructor()

public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableScreenModule$Type = ($VariableScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariableScreenModule_ = $VariableScreenModule$Type;
}}
declare module "packages/mcjty/rftoolscontrol/compat/rftoolssupport/$ModuleDataVectorArt" {
import {$GfxOp, $GfxOp$Type} from "packages/mcjty/rftoolscontrol/modules/processor/vectorart/$GfxOp"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModuleDataVectorArt implements $IModuleData {
static readonly "ID": string

constructor(arg0: $Map$Type<(string), ($GfxOp$Type)>, arg1: $List$Type<(string)>)
constructor(arg0: $List$Type<($GfxOp$Type)>)

public "getId"(): string
public "getOperations"(): $Map<(string), ($GfxOp)>
public "getSortedOperations"(): $List<($GfxOp)>
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "getOrderedOps"(): $List<(string)>
get "id"(): string
get "operations"(): $Map<(string), ($GfxOp)>
get "sortedOperations"(): $List<($GfxOp)>
get "orderedOps"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDataVectorArt$Type = ($ModuleDataVectorArt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDataVectorArt_ = $ModuleDataVectorArt$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/$ProgramCardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $ProgramCardItem extends $Item implements $ITooltipSettings {
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setCardName"(arg0: $ItemStack$Type, arg1: string): void
public static "getCardName"(arg0: $ItemStack$Type): string
public "getManualEntry"(): $ManualEntry
public "getMaxWidth"(): integer
get "manualEntry"(): $ManualEntry
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgramCardItem$Type = ($ProgramCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgramCardItem_ = $ProgramCardItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/interactionmodule/$InteractionScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IModuleDataBoolean, $IModuleDataBoolean$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataBoolean"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InteractionScreenModule implements $IScreenModule<($IModuleDataBoolean)> {

constructor()

public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionScreenModule$Type = ($InteractionScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractionScreenModule_ = $InteractionScreenModule$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/variablemodule/$VariableClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$ModuleDataVariable, $ModuleDataVariable$Type} from "packages/mcjty/rftoolscontrol/compat/rftoolssupport/$ModuleDataVariable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $VariableClientScreenModule implements $IClientScreenModule<($ModuleDataVariable)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $ModuleDataVariable$Type, arg6: $ModuleRenderInfo$Type): void
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "getTransformMode"(): $IClientScreenModule$TransformMode
public "needsServerData"(): boolean
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "height"(): integer
get "transformMode"(): $IClientScreenModule$TransformMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableClientScreenModule$Type = ($VariableClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariableClientScreenModule_ = $VariableClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/processor/items/$NetworkCardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $NetworkCardItem extends $Item implements $ITooltipSettings {
static readonly "TIER_NORMAL": integer
static readonly "TIER_ADVANCED": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTier"(): integer
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "tier"(): integer
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkCardItem$Type = ($NetworkCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkCardItem_ = $NetworkCardItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/processor/items/$RAMChipItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $RAMChipItem extends $Item implements $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

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
export type $RAMChipItem$Type = ($RAMChipItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RAMChipItem_ = $RAMChipItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/vectorartmodule/$VectorArtScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModuleDataVectorArt, $ModuleDataVectorArt$Type} from "packages/mcjty/rftoolscontrol/compat/rftoolssupport/$ModuleDataVectorArt"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VectorArtScreenModule implements $IScreenModule<($ModuleDataVectorArt)> {

constructor()

public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VectorArtScreenModule$Type = ($VectorArtScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VectorArtScreenModule_ = $VectorArtScreenModule$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/multitank/blocks/$MultiTankBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $MultiTankBlock extends $BaseBlock {
static readonly "SMALLER_CUBE": $VoxelShape
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

public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getRotationType"(): $RotationType
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTankBlock$Type = ($MultiTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTankBlock_ = $MultiTankBlock$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/programmer/blocks/$ProgrammerBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $ProgrammerBlock extends $BaseBlock {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgrammerBlock$Type = ($ProgrammerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgrammerBlock_ = $ProgrammerBlock$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/processor/items/$GraphicsCardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $GraphicsCardItem extends $Item implements $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

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
export type $GraphicsCardItem$Type = ($GraphicsCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphicsCardItem_ = $GraphicsCardItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/interactionmodule/$InteractionModuleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionClientScreenModule, $InteractionClientScreenModule$Type} from "packages/mcjty/rftoolscontrol/modules/various/items/interactionmodule/$InteractionClientScreenModule"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionScreenModule, $InteractionScreenModule$Type} from "packages/mcjty/rftoolscontrol/modules/various/items/interactionmodule/$InteractionScreenModule"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InteractionModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($InteractionClientScreenModule)>
public "getServerScreenModule"(): $Class<($InteractionScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($InteractionClientScreenModule)>
get "serverScreenModule"(): $Class<($InteractionScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionModuleItem$Type = ($InteractionModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractionModuleItem_ = $InteractionModuleItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/processor/blocks/$ProcessorBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ProcessorBlock extends $BaseBlock {
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

public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessorBlock$Type = ($ProcessorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessorBlock_ = $ProcessorBlock$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/blocks/$NodeBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $NodeBlock extends $BaseBlock {
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

public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeBlock$Type = ($NodeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeBlock_ = $NodeBlock$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/$TokenItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $TokenItem extends $Item implements $ITooltipSettings {
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

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
export type $TokenItem$Type = ($TokenItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TokenItem_ = $TokenItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/processor/items/$CPUCoreItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $CPUCoreItem extends $Item implements $ITooltipSettings {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: integer)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTier"(): integer
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "tier"(): integer
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPUCoreItem$Type = ($CPUCoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CPUCoreItem_ = $CPUCoreItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/vectorartmodule/$VectorArtClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$ModuleDataVectorArt, $ModuleDataVectorArt$Type} from "packages/mcjty/rftoolscontrol/compat/rftoolssupport/$ModuleDataVectorArt"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $VectorArtClientScreenModule implements $IClientScreenModule<($ModuleDataVectorArt)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $ModuleDataVectorArt$Type, arg6: $ModuleRenderInfo$Type): void
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "getTransformMode"(): $IClientScreenModule$TransformMode
public "needsServerData"(): boolean
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "height"(): integer
get "transformMode"(): $IClientScreenModule$TransformMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VectorArtClientScreenModule$Type = ($VectorArtClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VectorArtClientScreenModule_ = $VectorArtClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/blocks/$WorkbenchBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $WorkbenchBlock extends $BaseBlock {
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
declare module "packages/mcjty/rftoolscontrol/modules/various/items/consolemodule/$ConsoleClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModuleDataLog, $ModuleDataLog$Type} from "packages/mcjty/rftoolscontrol/compat/rftoolssupport/$ModuleDataLog"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $ConsoleClientScreenModule implements $IClientScreenModule<($ModuleDataLog)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $ModuleDataLog$Type, arg6: $ModuleRenderInfo$Type): void
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "getTransformMode"(): $IClientScreenModule$TransformMode
public "needsServerData"(): boolean
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "height"(): integer
get "transformMode"(): $IClientScreenModule$TransformMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConsoleClientScreenModule$Type = ($ConsoleClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConsoleClientScreenModule_ = $ConsoleClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/processor/vectorart/$GfxOp" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$GfxOpType, $GfxOpType$Type} from "packages/mcjty/rftoolscontrol/modules/processor/vectorart/$GfxOpType"

export class $GfxOp {

constructor()

public "getType"(): $GfxOpType
public static "readFromBuf"(arg0: $FriendlyByteBuf$Type): $GfxOp
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type): void
public static "readFromNBT"(arg0: $CompoundTag$Type): $GfxOp
public "writeToNBT"(): $CompoundTag
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
get "type"(): $GfxOpType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GfxOp$Type = ($GfxOp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GfxOp_ = $GfxOp$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/craftingstation/blocks/$CraftingStationBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $CraftingStationBlock extends $BaseBlock {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingStationBlock$Type = ($CraftingStationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingStationBlock_ = $CraftingStationBlock$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/consolemodule/$ConsoleModuleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ConsoleScreenModule, $ConsoleScreenModule$Type} from "packages/mcjty/rftoolscontrol/modules/various/items/consolemodule/$ConsoleScreenModule"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ConsoleClientScreenModule, $ConsoleClientScreenModule$Type} from "packages/mcjty/rftoolscontrol/modules/various/items/consolemodule/$ConsoleClientScreenModule"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITabletSupport, $ITabletSupport$Type} from "packages/mcjty/rftoolsbase/api/various/$ITabletSupport"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConsoleModuleItem extends $GenericModuleItem implements $ITabletSupport {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($ConsoleClientScreenModule)>
public "getServerScreenModule"(): $Class<($ConsoleScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "openGui"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
public "getInstalledTablet"(): $Item
get "moduleName"(): string
get "clientScreenModule"(): $Class<($ConsoleClientScreenModule)>
get "serverScreenModule"(): $Class<($ConsoleScreenModule)>
get "installedTablet"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConsoleModuleItem$Type = ($ConsoleModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConsoleModuleItem_ = $ConsoleModuleItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/compat/rftoolssupport/$ModuleDataVariable" {
import {$Parameter, $Parameter$Type} from "packages/mcjty/rftoolsbase/api/control/parameters/$Parameter"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"

export class $ModuleDataVariable implements $IModuleData {
static readonly "ID": string

constructor(arg0: $Parameter$Type)

public "getParameter"(): $Parameter
public "getId"(): string
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
get "parameter"(): $Parameter
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDataVariable$Type = ($ModuleDataVariable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDataVariable_ = $ModuleDataVariable$Type;
}}
declare module "packages/mcjty/rftoolscontrol/compat/rftoolssupport/$ModuleDataLog" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"

export class $ModuleDataLog implements $IModuleData {
static readonly "ID": string

constructor(arg0: $List$Type<(string)>)

public "getId"(): string
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "getLog"(): $List<(string)>
get "id"(): string
get "log"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleDataLog$Type = ($ModuleDataLog);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleDataLog_ = $ModuleDataLog$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/variablemodule/$VariableModuleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$VariableScreenModule, $VariableScreenModule$Type} from "packages/mcjty/rftoolscontrol/modules/various/items/variablemodule/$VariableScreenModule"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$VariableClientScreenModule, $VariableClientScreenModule$Type} from "packages/mcjty/rftoolscontrol/modules/various/items/variablemodule/$VariableClientScreenModule"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VariableModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($VariableClientScreenModule)>
public "getServerScreenModule"(): $Class<($VariableScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($VariableClientScreenModule)>
get "serverScreenModule"(): $Class<($VariableScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableModuleItem$Type = ($VariableModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariableModuleItem_ = $VariableModuleItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/various/items/vectorartmodule/$VectorArtModuleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$VectorArtClientScreenModule, $VectorArtClientScreenModule$Type} from "packages/mcjty/rftoolscontrol/modules/various/items/vectorartmodule/$VectorArtClientScreenModule"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$VectorArtScreenModule, $VectorArtScreenModule$Type} from "packages/mcjty/rftoolscontrol/modules/various/items/vectorartmodule/$VectorArtScreenModule"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VectorArtModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($VectorArtClientScreenModule)>
public "getServerScreenModule"(): $Class<($VectorArtScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($VectorArtClientScreenModule)>
get "serverScreenModule"(): $Class<($VectorArtScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VectorArtModuleItem$Type = ($VectorArtModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VectorArtModuleItem_ = $VectorArtModuleItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/processor/items/$NetworkIdentifierItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
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
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $NetworkIdentifierItem extends $Item implements $ITooltipSettings {
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
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkIdentifierItem$Type = ($NetworkIdentifierItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkIdentifierItem_ = $NetworkIdentifierItem$Type;
}}
declare module "packages/mcjty/rftoolscontrol/modules/processor/vectorart/$GfxOpType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GfxOpType extends $Enum<($GfxOpType)> {
static readonly "OP_BOX": $GfxOpType
static readonly "OP_LINE": $GfxOpType
static readonly "OP_TEXT": $GfxOpType


public static "values"(): ($GfxOpType)[]
public static "valueOf"(arg0: string): $GfxOpType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GfxOpType$Type = (("op_text") | ("op_box") | ("op_line")) | ($GfxOpType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GfxOpType_ = $GfxOpType$Type;
}}
