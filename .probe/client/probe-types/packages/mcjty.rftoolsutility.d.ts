declare module "packages/mcjty/rftoolsutility/modules/teleporter/items/porter/$ChargedPorterItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEnergyItem, $IEnergyItem$Type} from "packages/mcjty/lib/varia/$IEnergyItem"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
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
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $ChargedPorterItem extends $Item implements $IEnergyItem, $INBTPreservingIngredient, $ITooltipSettings {
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "initOverrides"(arg0: $ChargedPorterItem$Type): void
public "extractEnergyL"(arg0: $ItemStack$Type, arg1: long, arg2: boolean): long
public "getEnergyStoredL"(arg0: $ItemStack$Type): long
public "receiveEnergyL"(arg0: $ItemStack$Type, arg1: long, arg2: boolean): long
public "getTagsToPreserve"(): $Collection<(string)>
public "extractEnergyNoMax"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
public "getManualEntry"(): $ManualEntry
public "getMaxEnergyStoredL"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
public "getMaxEnergyStored"(arg0: $ItemStack$Type): integer
public "receiveEnergy"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): integer
public "getEnergyStored"(arg0: $ItemStack$Type): integer
public "getMaxWidth"(): integer
get "tagsToPreserve"(): $Collection<(string)>
get "manualEntry"(): $ManualEntry
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedPorterItem$Type = ($ChargedPorterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargedPorterItem_ = $ChargedPorterItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/teleporter/blocks/$MatterTransmitterBlock" {
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MatterTransmitterBlock extends $BaseBlock {
static "clientSideId": integer
static "clientSideName": string
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getRotationType"(): $RotationType
public static "setDestinationInfo"(arg0: integer, arg1: string): void
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterTransmitterBlock$Type = ($MatterTransmitterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterTransmitterBlock_ = $MatterTransmitterBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$TextClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $TextClientScreenModule implements $IClientScreenModule<($IModuleData)> {

constructor()

public "setColor"(arg0: integer): void
public "setLine"(arg0: string): void
public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $IModuleData$Type, arg6: $ModuleRenderInfo$Type): void
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "getTransformMode"(): $IClientScreenModule$TransformMode
public "needsServerData"(): boolean
public "setLarge"(arg0: boolean): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
set "color"(value: integer)
set "line"(value: string)
get "height"(): integer
get "transformMode"(): $IClientScreenModule$TransformMode
set "large"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextClientScreenModule$Type = ($TextClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextClientScreenModule_ = $TextClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/teleporter/blocks/$SimpleDialerItemBlock" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleDialerItemBlock extends $BlockItem {
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

constructor(arg0: $Block$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleDialerItemBlock$Type = ($SimpleDialerItemBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleDialerItemBlock_ = $SimpleDialerItemBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$MachineInformationScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleDataString, $IModuleDataString$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataString"

export class $MachineInformationScreenModule implements $IScreenModule<($IModuleDataString)> {

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
export type $MachineInformationScreenModule$Type = ($MachineInformationScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInformationScreenModule_ = $MachineInformationScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/spawner/recipes/$SpawnerRecipes$MobSpawnAmount" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $SpawnerRecipes$MobSpawnAmount {

constructor(arg0: $Ingredient$Type, arg1: float)

public "getObject"(): $Ingredient
public static "create"(arg0: $Ingredient$Type, arg1: float): $SpawnerRecipes$MobSpawnAmount
public "match"(arg0: $ItemStack$Type): float
public "getAmount"(): float
get "object"(): $Ingredient
get "amount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerRecipes$MobSpawnAmount$Type = ($SpawnerRecipes$MobSpawnAmount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerRecipes$MobSpawnAmount_ = $SpawnerRecipes$MobSpawnAmount$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$EnergyPlusModuleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnergyPlusBarClientScreenModule, $EnergyPlusBarClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$EnergyPlusBarClientScreenModule"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EnergyPlusBarScreenModule, $EnergyPlusBarScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$EnergyPlusBarScreenModule"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyPlusModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($EnergyPlusBarClientScreenModule)>
public "getServerScreenModule"(): $Class<($EnergyPlusBarScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($EnergyPlusBarClientScreenModule)>
get "serverScreenModule"(): $Class<($EnergyPlusBarScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPlusModuleItem$Type = ($EnergyPlusModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyPlusModuleItem_ = $EnergyPlusModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/blocks/$ScreenHitBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ScreenHitBlock extends $BaseBlock {
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

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "activate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getScreenBlockPos"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockPos
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenHitBlock$Type = ($ScreenHitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenHitBlock_ = $ScreenHitBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$ClockModuleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ClockScreenModule, $ClockScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ClockScreenModule"
import {$ClockClientScreenModule, $ClockClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ClockClientScreenModule"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ClockModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($ClockClientScreenModule)>
public "getServerScreenModule"(): $Class<($ClockScreenModule)>
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($ClockClientScreenModule)>
get "serverScreenModule"(): $Class<($ClockScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClockModuleItem$Type = ($ClockModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClockModuleItem_ = $ClockModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/teleporter/blocks/$SimpleDialerBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$LogicFacing, $LogicFacing$Type} from "packages/mcjty/lib/varia/$LogicFacing"
import {$LogicSlabBlock, $LogicSlabBlock$Type} from "packages/mcjty/lib/blocks/$LogicSlabBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SimpleDialerBlock extends $LogicSlabBlock {
static readonly "LOGIC_FACING": $EnumProperty<($LogicFacing)>
static readonly "BLOCK_DOWN": $VoxelShape
static readonly "BLOCK_UP": $VoxelShape
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

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleDialerBlock$Type = ($SimpleDialerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleDialerBlock_ = $SimpleDialerBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$CounterClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IModuleDataInteger, $IModuleDataInteger$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataInteger"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $CounterClientScreenModule implements $IClientScreenModule<($IModuleDataInteger)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $IModuleDataInteger$Type, arg6: $ModuleRenderInfo$Type): void
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
export type $CounterClientScreenModule$Type = ($CounterClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CounterClientScreenModule_ = $CounterClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$EnergyModuleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$EnergyBarScreenModule, $EnergyBarScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$EnergyBarScreenModule"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$EnergyBarClientScreenModule, $EnergyBarClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$EnergyBarClientScreenModule"

export class $EnergyModuleItem extends $GenericModuleItem implements $INBTPreservingIngredient {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($EnergyBarClientScreenModule)>
public "getServerScreenModule"(): $Class<($EnergyBarScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getTagsToPreserve"(): $Collection<(string)>
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($EnergyBarClientScreenModule)>
get "serverScreenModule"(): $Class<($EnergyBarScreenModule)>
get "tagsToPreserve"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyModuleItem$Type = ($EnergyModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyModuleItem_ = $EnergyModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$FluidBarScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleDataContents, $IModuleDataContents$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataContents"

export class $FluidBarScreenModule implements $IScreenModule<($IModuleDataContents)> {

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
export type $FluidBarScreenModule$Type = ($FluidBarScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBarScreenModule_ = $FluidBarScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/spawner/items/$SyringeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseItem, $BaseItem$Type} from "packages/mcjty/lib/items/$BaseItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SyringeItem extends $BaseItem {
static readonly "MAX_SYRINGE_MODEL_LEVEL": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public static "getLevel"(arg0: $ItemStack$Type): integer
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getMobId"(arg0: $ItemStack$Type): string
public static "createMobSyringe"(arg0: $ResourceLocation$Type): $ItemStack
public static "getMobName"(arg0: $ItemStack$Type): string
public static "initOverrides"(arg0: $SyringeItem$Type): void
public static "getEntityLivingFromClickedEntity"(arg0: $Entity$Type): $LivingEntity
public "getItemsForTab"(): $List<($ItemStack)>
get "itemsForTab"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeItem$Type = ($SyringeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyringeItem_ = $SyringeItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$FluidBarClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$IModuleDataContents, $IModuleDataContents$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataContents"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $FluidBarClientScreenModule implements $IClientScreenModule<($IModuleDataContents)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $IModuleDataContents$Type, arg6: $ModuleRenderInfo$Type): void
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
export type $FluidBarClientScreenModule$Type = ($FluidBarClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBarClientScreenModule_ = $FluidBarClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/teleporter/items/teleportprobe/$TeleportProbeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TeleportProbeItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportProbeItem$Type = ($TeleportProbeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeleportProbeItem_ = $TeleportProbeItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/teleporter/blocks/$DialingDeviceBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $DialingDeviceBlock extends $BaseBlock {
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
export type $DialingDeviceBlock$Type = ($DialingDeviceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DialingDeviceBlock_ = $DialingDeviceBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/teleporter/blocks/$MatterReceiverBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $MatterReceiverBlock extends $BaseBlock {
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRotationType"(): $RotationType
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterReceiverBlock$Type = ($MatterReceiverBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterReceiverBlock_ = $MatterReceiverBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$MachineInformationClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IModuleDataString, $IModuleDataString$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataString"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $MachineInformationClientScreenModule implements $IClientScreenModule<($IModuleDataString)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $IModuleDataString$Type, arg6: $ModuleRenderInfo$Type): void
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
export type $MachineInformationClientScreenModule$Type = ($MachineInformationClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInformationClientScreenModule_ = $MachineInformationClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$TextScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$IScreenDataHelper, $IScreenDataHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenDataHelper"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TextScreenModule implements $IScreenModule<($IModuleData)> {

constructor()

public "getData"(arg0: $IScreenDataHelper$Type, arg1: $Level$Type, arg2: long): $IModuleData
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
export type $TextScreenModule$Type = ($TextScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextScreenModule_ = $TextScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$FluidPlusModuleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FluidPlusBarScreenModule, $FluidPlusBarScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$FluidPlusBarScreenModule"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$FluidPlusBarClientScreenModule, $FluidPlusBarClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$FluidPlusBarClientScreenModule"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidPlusModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($FluidPlusBarClientScreenModule)>
public "getServerScreenModule"(): $Class<($FluidPlusBarScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($FluidPlusBarClientScreenModule)>
get "serverScreenModule"(): $Class<($FluidPlusBarScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlusModuleItem$Type = ($FluidPlusModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPlusModuleItem_ = $FluidPlusModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$EnergyBarScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleDataContents, $IModuleDataContents$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataContents"

export class $EnergyBarScreenModule implements $IScreenModule<($IModuleDataContents)> {

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
export type $EnergyBarScreenModule$Type = ($EnergyBarScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyBarScreenModule_ = $EnergyBarScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$ItemStackPlusScreenModule" {
import {$ItemStackScreenModule, $ItemStackScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ItemStackScreenModule"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $ItemStackPlusScreenModule extends $ItemStackScreenModule {

constructor()

public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackPlusScreenModule$Type = ($ItemStackPlusScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackPlusScreenModule_ = $ItemStackPlusScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$ButtonScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IModuleDataBoolean, $IModuleDataBoolean$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataBoolean"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ButtonScreenModule implements $IScreenModule<($IModuleDataBoolean)> {

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
export type $ButtonScreenModule$Type = ($ButtonScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonScreenModule_ = $ButtonScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/environmental/recipes/$SyringeRecipeType" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$SyringeBasedRecipe, $SyringeBasedRecipe$Type} from "packages/mcjty/rftoolsutility/modules/environmental/recipes/$SyringeBasedRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SyringeRecipeType implements $RecipeType<($SyringeBasedRecipe)> {

constructor()

public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<($SyringeBasedRecipe)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<($SyringeBasedRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeRecipeType$Type = ($SyringeRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyringeRecipeType_ = $SyringeRecipeType$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$ClockScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$IScreenDataHelper, $IScreenDataHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenDataHelper"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ClockScreenModule implements $IScreenModule<($IModuleData)> {

constructor()

public "getData"(arg0: $IScreenDataHelper$Type, arg1: $Level$Type, arg2: long): $IModuleData
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
export type $ClockScreenModule$Type = ($ClockScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClockScreenModule_ = $ClockScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/spawner/blocks/$MatterBeamerBlock" {
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $MatterBeamerBlock extends $BaseBlock {
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

public "getRotationType"(): $RotationType
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterBeamerBlock$Type = ($MatterBeamerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterBeamerBlock_ = $MatterBeamerBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$EnergyBarClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$IModuleDataContents, $IModuleDataContents$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataContents"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $EnergyBarClientScreenModule implements $IClientScreenModule<($IModuleDataContents)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $IModuleDataContents$Type, arg6: $ModuleRenderInfo$Type): void
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
export type $EnergyBarClientScreenModule$Type = ($EnergyBarClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyBarClientScreenModule_ = $EnergyBarClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$CounterPlusScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CounterScreenModule, $CounterScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$CounterScreenModule"

export class $CounterPlusScreenModule extends $CounterScreenModule {

constructor()

public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterPlusScreenModule$Type = ($CounterPlusScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CounterPlusScreenModule_ = $CounterPlusScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ComputerClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ComputerScreenModule$ModuleComputerInfo, $ComputerScreenModule$ModuleComputerInfo$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ComputerScreenModule$ModuleComputerInfo"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $ComputerClientScreenModule implements $IClientScreenModule<($ComputerScreenModule$ModuleComputerInfo)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $ComputerScreenModule$ModuleComputerInfo$Type, arg6: $ModuleRenderInfo$Type): void
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
export type $ComputerClientScreenModule$Type = ($ComputerClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerClientScreenModule_ = $ComputerClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$ComputerModuleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ComputerScreenModule, $ComputerScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ComputerScreenModule"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ComputerClientScreenModule, $ComputerClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ComputerClientScreenModule"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ComputerModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($ComputerClientScreenModule)>
public "getServerScreenModule"(): $Class<($ComputerScreenModule)>
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($ComputerClientScreenModule)>
get "serverScreenModule"(): $Class<($ComputerScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerModuleItem$Type = ($ComputerModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerModuleItem_ = $ComputerModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$ButtonModuleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ButtonClientScreenModule, $ButtonClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ButtonClientScreenModule"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ButtonScreenModule, $ButtonScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ButtonScreenModule"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ButtonModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public static "getChannel"(arg0: $ItemStack$Type): integer
public "getClientScreenModule"(): $Class<($ButtonClientScreenModule)>
public "getServerScreenModule"(): $Class<($ButtonScreenModule)>
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($ButtonClientScreenModule)>
get "serverScreenModule"(): $Class<($ButtonScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonModuleItem$Type = ($ButtonModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonModuleItem_ = $ButtonModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$ItemStackScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStackScreenModule$ModuleDataStacks, $ItemStackScreenModule$ModuleDataStacks$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ItemStackScreenModule$ModuleDataStacks"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemStackScreenModule implements $IScreenModule<($ItemStackScreenModule$ModuleDataStacks)> {

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
export type $ItemStackScreenModule$Type = ($ItemStackScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackScreenModule_ = $ItemStackScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/teleporter/blocks/$MatterBoosterBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MatterBoosterBlock extends $Block {
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
public static "getFacingFromEntity"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterBoosterBlock$Type = ($MatterBoosterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterBoosterBlock_ = $MatterBoosterBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$MachineInformationModuleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$IModuleProvider, $IModuleProvider$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleProvider"
import {$MachineInformationScreenModule, $MachineInformationScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$MachineInformationScreenModule"
import {$MachineInformationClientScreenModule, $MachineInformationClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$MachineInformationClientScreenModule"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineInformationModuleItem extends $GenericModuleItem implements $IModuleProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($MachineInformationClientScreenModule)>
public "getServerScreenModule"(): $Class<($MachineInformationScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($MachineInformationClientScreenModule)>
get "serverScreenModule"(): $Class<($MachineInformationScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInformationModuleItem$Type = ($MachineInformationModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineInformationModuleItem_ = $MachineInformationModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ClockClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $ClockClientScreenModule implements $IClientScreenModule<($IModuleData)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $IModuleData$Type, arg6: $ModuleRenderInfo$Type): void
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
export type $ClockClientScreenModule$Type = ($ClockClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClockClientScreenModule_ = $ClockClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ButtonClientScreenModule" {
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

export class $ButtonClientScreenModule implements $IClientScreenModule<($IModuleDataBoolean)> {

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
export type $ButtonClientScreenModule$Type = ($ButtonClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonClientScreenModule_ = $ButtonClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$CounterScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IModuleDataInteger, $IModuleDataInteger$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataInteger"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CounterScreenModule implements $IScreenModule<($IModuleDataInteger)> {

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
export type $CounterScreenModule$Type = ($CounterScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CounterScreenModule_ = $CounterScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$InventoryModuleItem" {
import {$ItemStackScreenModule, $ItemStackScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ItemStackScreenModule"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ItemStackClientScreenModule, $ItemStackClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ItemStackClientScreenModule"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InventoryModuleItem extends $GenericModuleItem implements $INBTPreservingIngredient {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($ItemStackClientScreenModule)>
public "getServerScreenModule"(): $Class<($ItemStackScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getTagsToPreserve"(): $Collection<(string)>
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($ItemStackClientScreenModule)>
get "serverScreenModule"(): $Class<($ItemStackScreenModule)>
get "tagsToPreserve"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryModuleItem$Type = ($InventoryModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryModuleItem_ = $InventoryModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/logic/items/$RedstoneInformationItem" {
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITabletSupport, $ITabletSupport$Type} from "packages/mcjty/rftoolsbase/api/various/$ITabletSupport"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $RedstoneInformationItem extends $Item implements $ITabletSupport, $ITooltipSettings {
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public static "getChannels"(arg0: $ItemStack$Type): $Set<(integer)>
public static "removeChannel"(arg0: $ItemStack$Type, arg1: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "openGui"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public static "addChannel"(arg0: $ItemStack$Type, arg1: integer): boolean
public "getManualEntry"(): $ManualEntry
public "getInstalledTablet"(): $Item
public "getMaxWidth"(): integer
get "manualEntry"(): $ManualEntry
get "installedTablet"(): $Item
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneInformationItem$Type = ($RedstoneInformationItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneInformationItem_ = $RedstoneInformationItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$CounterModuleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$CounterScreenModule, $CounterScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$CounterScreenModule"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CounterClientScreenModule, $CounterClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$CounterClientScreenModule"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CounterModuleItem extends $GenericModuleItem implements $INBTPreservingIngredient {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($CounterClientScreenModule)>
public "getServerScreenModule"(): $Class<($CounterScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getTagsToPreserve"(): $Collection<(string)>
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($CounterClientScreenModule)>
get "serverScreenModule"(): $Class<($CounterScreenModule)>
get "tagsToPreserve"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterModuleItem$Type = ($CounterModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CounterModuleItem_ = $CounterModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$ItemStackScreenModule$ModuleDataStacks" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackScreenModule$ModuleDataStacks implements $IModuleData {
static readonly "ID": string

constructor(arg0: $FriendlyByteBuf$Type)
constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type)

public "getId"(): string
public "getStack"(arg0: integer): $ItemStack
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackScreenModule$ModuleDataStacks$Type = ($ItemStackScreenModule$ModuleDataStacks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackScreenModule$ModuleDataStacks_ = $ItemStackScreenModule$ModuleDataStacks$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/$ScreenLinkItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITabletSupport, $ITabletSupport$Type} from "packages/mcjty/rftoolsbase/api/various/$ITabletSupport"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScreenLinkItem extends $Item implements $ITabletSupport {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "openGui"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "getInstalledTablet"(): $Item
get "installedTablet"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenLinkItem$Type = ($ScreenLinkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenLinkItem_ = $ScreenLinkItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/teleporter/items/porter/$AdvancedChargedPorterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ChargedPorterItem, $ChargedPorterItem$Type} from "packages/mcjty/rftoolsutility/modules/teleporter/items/porter/$ChargedPorterItem"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IItemCycler, $IItemCycler$Type} from "packages/mcjty/rftoolsbase/api/various/$IItemCycler"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AdvancedChargedPorterItem extends $ChargedPorterItem implements $IItemCycler {
static readonly "MAXTARGETS": integer
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedChargedPorterItem$Type = ($AdvancedChargedPorterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedChargedPorterItem_ = $AdvancedChargedPorterItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$RedstoneModuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RedstoneScreenModule, $RedstoneScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$RedstoneScreenModule"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$RedstoneClientScreenModule, $RedstoneClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$RedstoneClientScreenModule"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RedstoneModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($RedstoneClientScreenModule)>
public "getServerScreenModule"(): $Class<($RedstoneScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($RedstoneClientScreenModule)>
get "serverScreenModule"(): $Class<($RedstoneScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneModuleItem$Type = ($RedstoneModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneModuleItem_ = $RedstoneModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$EnergyPlusBarScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnergyBarScreenModule, $EnergyBarScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$EnergyBarScreenModule"

export class $EnergyPlusBarScreenModule extends $EnergyBarScreenModule {

constructor()

public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPlusBarScreenModule$Type = ($EnergyPlusBarScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyPlusBarScreenModule_ = $EnergyPlusBarScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$FluidPlusBarClientScreenModule" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FluidBarClientScreenModule, $FluidBarClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$FluidBarClientScreenModule"

export class $FluidPlusBarClientScreenModule extends $FluidBarClientScreenModule {

constructor()

public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlusBarClientScreenModule$Type = ($FluidPlusBarClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPlusBarClientScreenModule_ = $FluidPlusBarClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$ComputerScreenModule$ColoredText" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ComputerScreenModule$ColoredText {

constructor(arg0: string, arg1: integer)

public "getText"(): string
public "getColor"(): integer
get "text"(): string
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerScreenModule$ColoredText$Type = ($ComputerScreenModule$ColoredText);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerScreenModule$ColoredText_ = $ComputerScreenModule$ColoredText$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$InventoryPlusModuleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStackPlusClientScreenModule, $ItemStackPlusClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ItemStackPlusClientScreenModule"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStackPlusScreenModule, $ItemStackPlusScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ItemStackPlusScreenModule"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InventoryPlusModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($ItemStackPlusClientScreenModule)>
public "getServerScreenModule"(): $Class<($ItemStackPlusScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($ItemStackPlusClientScreenModule)>
get "serverScreenModule"(): $Class<($ItemStackPlusScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryPlusModuleItem$Type = ($InventoryPlusModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryPlusModuleItem_ = $InventoryPlusModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$RedstoneClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IModuleDataInteger, $IModuleDataInteger$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataInteger"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $RedstoneClientScreenModule implements $IClientScreenModule<($IModuleDataInteger)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $IModuleDataInteger$Type, arg6: $ModuleRenderInfo$Type): void
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
export type $RedstoneClientScreenModule$Type = ($RedstoneClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneClientScreenModule_ = $RedstoneClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$FluidModuleItem" {
import {$FluidBarScreenModule, $FluidBarScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$FluidBarScreenModule"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$FluidBarClientScreenModule, $FluidBarClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$FluidBarClientScreenModule"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidModuleItem extends $GenericModuleItem implements $INBTPreservingIngredient {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($FluidBarClientScreenModule)>
public "getServerScreenModule"(): $Class<($FluidBarScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getTagsToPreserve"(): $Collection<(string)>
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($FluidBarClientScreenModule)>
get "serverScreenModule"(): $Class<($FluidBarScreenModule)>
get "tagsToPreserve"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidModuleItem$Type = ($FluidModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidModuleItem_ = $FluidModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/crafter/blocks/$CrafterBlock" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $CrafterBlock extends $BaseBlock implements $INBTPreservingIngredient {
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

constructor(arg0: $BlockEntityType$BlockEntitySupplier$Type<($BlockEntity$Type)>)

public "getTagsToPreserve"(): $Collection<(string)>
get "tagsToPreserve"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrafterBlock$Type = ($CrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrafterBlock_ = $CrafterBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$ComputerScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ComputerScreenModule$ModuleComputerInfo, $ComputerScreenModule$ModuleComputerInfo$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ComputerScreenModule$ModuleComputerInfo"

export class $ComputerScreenModule implements $IScreenModule<($ComputerScreenModule$ModuleComputerInfo)> {

constructor()

public "getTag"(): string
public "addText"(arg0: string, arg1: integer): void
public "clearText"(): void
public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
public "needsController"(): boolean
get "tag"(): string
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerScreenModule$Type = ($ComputerScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerScreenModule_ = $ComputerScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$EnergyPlusBarClientScreenModule" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnergyBarClientScreenModule, $EnergyBarClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$EnergyBarClientScreenModule"

export class $EnergyPlusBarClientScreenModule extends $EnergyBarClientScreenModule {

constructor()

public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPlusBarClientScreenModule$Type = ($EnergyPlusBarClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyPlusBarClientScreenModule_ = $EnergyPlusBarClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/environmental/recipes/$SyringeBasedRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BaseShapedRecipe, $BaseShapedRecipe$Type} from "packages/mcjty/lib/crafting/$BaseShapedRecipe"

export class $SyringeBasedRecipe extends $BaseShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type, arg6: $ResourceLocation$Type, arg7: integer)
constructor(arg0: $ShapedRecipe$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: $ItemStack$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getMobId"(): $ResourceLocation
public "getSyringeIndex"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "mobId"(): $ResourceLocation
get "syringeIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeBasedRecipe$Type = ($SyringeBasedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyringeBasedRecipe_ = $SyringeBasedRecipe$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/spawner/recipes/$SpawnerRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$SpawnerRecipes$MobSpawnAmount, $SpawnerRecipes$MobSpawnAmount$Type} from "packages/mcjty/rftoolsutility/modules/spawner/recipes/$SpawnerRecipes$MobSpawnAmount"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$BaseRecipe, $BaseRecipe$Type} from "packages/mcjty/lib/crafting/$BaseRecipe"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SpawnerRecipe implements $BaseRecipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $SpawnerRecipes$MobSpawnAmount$Type, arg2: $SpawnerRecipes$MobSpawnAmount$Type, arg3: $SpawnerRecipes$MobSpawnAmount$Type, arg4: integer, arg5: $ResourceLocation$Type)

public "getEntity"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "getItem3"(): $SpawnerRecipes$MobSpawnAmount
public "getItem1"(): $SpawnerRecipes$MobSpawnAmount
public "getItem2"(): $SpawnerRecipes$MobSpawnAmount
public "getSpawnRf"(): integer
public static "getResultItem"(arg0: $Recipe$Type<(any)>, arg1: $Level$Type): $ItemStack
public static "assemble"(arg0: $Recipe$Type<(any)>, arg1: $CraftingContainer$Type, arg2: $Level$Type): $ItemStack
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
get "entity"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "id"(): $ResourceLocation
get "item3"(): $SpawnerRecipes$MobSpawnAmount
get "item1"(): $SpawnerRecipes$MobSpawnAmount
get "item2"(): $SpawnerRecipes$MobSpawnAmount
get "spawnRf"(): integer
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
export type $SpawnerRecipe$Type = ($SpawnerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerRecipe_ = $SpawnerRecipe$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ItemStackClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$ItemStackScreenModule$ModuleDataStacks, $ItemStackScreenModule$ModuleDataStacks$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ItemStackScreenModule$ModuleDataStacks"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $ItemStackClientScreenModule implements $IClientScreenModule<($ItemStackScreenModule$ModuleDataStacks)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $ItemStackScreenModule$ModuleDataStacks$Type, arg6: $ModuleRenderInfo$Type): void
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
export type $ItemStackClientScreenModule$Type = ($ItemStackClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackClientScreenModule_ = $ItemStackClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$CounterPlusModuleItem" {
import {$CounterPlusClientScreenModule, $CounterPlusClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$CounterPlusClientScreenModule"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CounterPlusScreenModule, $CounterPlusScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$CounterPlusScreenModule"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CounterPlusModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($CounterPlusClientScreenModule)>
public "getServerScreenModule"(): $Class<($CounterPlusScreenModule)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($CounterPlusClientScreenModule)>
get "serverScreenModule"(): $Class<($CounterPlusScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterPlusModuleItem$Type = ($CounterPlusModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CounterPlusModuleItem_ = $CounterPlusModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/logic/blocks/$RedstoneChannelBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/mcjty/lib/builder/$BlockBuilder"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$LogicFacing, $LogicFacing$Type} from "packages/mcjty/lib/varia/$LogicFacing"
import {$LogicSlabBlock, $LogicSlabBlock$Type} from "packages/mcjty/lib/blocks/$LogicSlabBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RedstoneChannelBlock extends $LogicSlabBlock {
static readonly "LOGIC_FACING": $EnumProperty<($LogicFacing)>
static readonly "BLOCK_DOWN": $VoxelShape
static readonly "BLOCK_UP": $VoxelShape
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

constructor(arg0: $BlockBuilder$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneChannelBlock$Type = ($RedstoneChannelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneChannelBlock_ = $RedstoneChannelBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/spawner/recipes/$SpawnerRecipeType" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$SpawnerRecipe, $SpawnerRecipe$Type} from "packages/mcjty/rftoolsutility/modules/spawner/recipes/$SpawnerRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SpawnerRecipeType implements $RecipeType<($SpawnerRecipe)> {

constructor()

public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<($SpawnerRecipe)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<($SpawnerRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerRecipeType$Type = ($SpawnerRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerRecipeType_ = $SpawnerRecipeType$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/spawner/recipes/$SpawnerRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SpawnerRecipe, $SpawnerRecipe$Type} from "packages/mcjty/rftoolsutility/modules/spawner/recipes/$SpawnerRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SpawnerRecipeSerializer implements $RecipeSerializer<($SpawnerRecipe)> {

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
export type $SpawnerRecipeSerializer$Type = ($SpawnerRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerRecipeSerializer_ = $SpawnerRecipeSerializer$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/items/modules/$TextModuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TextScreenModule, $TextScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$TextScreenModule"
import {$TextClientScreenModule, $TextClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$TextClientScreenModule"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TextModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor()

public "getModuleName"(): string
public "getClientScreenModule"(): $Class<($TextClientScreenModule)>
public "getServerScreenModule"(): $Class<($TextScreenModule)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
get "moduleName"(): string
get "clientScreenModule"(): $Class<($TextClientScreenModule)>
get "serverScreenModule"(): $Class<($TextScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextModuleItem$Type = ($TextModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextModuleItem_ = $TextModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/logic/blocks/$RedstoneTransmitterBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$RedstoneChannelBlock, $RedstoneChannelBlock$Type} from "packages/mcjty/rftoolsutility/modules/logic/blocks/$RedstoneChannelBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$LogicFacing, $LogicFacing$Type} from "packages/mcjty/lib/varia/$LogicFacing"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RedstoneTransmitterBlock extends $RedstoneChannelBlock {
static readonly "LOGIC_FACING": $EnumProperty<($LogicFacing)>
static readonly "BLOCK_DOWN": $VoxelShape
static readonly "BLOCK_UP": $VoxelShape
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneTransmitterBlock$Type = ($RedstoneTransmitterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneTransmitterBlock_ = $RedstoneTransmitterBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/environmental/recipes/$SyringeRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SyringeBasedRecipe, $SyringeBasedRecipe$Type} from "packages/mcjty/rftoolsutility/modules/environmental/recipes/$SyringeBasedRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SyringeRecipeSerializer implements $RecipeSerializer<($SyringeBasedRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SyringeBasedRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SyringeBasedRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SyringeBasedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SyringeBasedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeRecipeSerializer$Type = ($SyringeRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyringeRecipeSerializer_ = $SyringeRecipeSerializer$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$RedstoneScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IModuleDataInteger, $IModuleDataInteger$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleDataInteger"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RedstoneScreenModule implements $IScreenModule<($IModuleDataInteger)> {

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
export type $RedstoneScreenModule$Type = ($RedstoneScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneScreenModule_ = $RedstoneScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$CounterPlusClientScreenModule" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CounterClientScreenModule, $CounterClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$CounterClientScreenModule"

export class $CounterPlusClientScreenModule extends $CounterClientScreenModule {

constructor()

public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterPlusClientScreenModule$Type = ($CounterPlusClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CounterPlusClientScreenModule_ = $CounterPlusClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ItemStackPlusClientScreenModule" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStackClientScreenModule, $ItemStackClientScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modulesclient/$ItemStackClientScreenModule"

export class $ItemStackPlusClientScreenModule extends $ItemStackClientScreenModule {

constructor()

public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackPlusClientScreenModule$Type = ($ItemStackPlusClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackPlusClientScreenModule_ = $ItemStackPlusClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/blocks/$ScreenBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IModuleProvider, $IModuleProvider$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleProvider"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ScreenBlock extends $BaseBlock {
static readonly "HORIZ_FACING": $DirectionProperty
static readonly "BLOCK_AABB": $VoxelShape
static readonly "NORTH_AABB": $VoxelShape
static readonly "SOUTH_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "EAST_AABB": $VoxelShape
static readonly "UP_AABB": $VoxelShape
static readonly "DOWN_AABB": $VoxelShape
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

constructor(arg0: $BlockEntityType$BlockEntitySupplier$Type<($BlockEntity$Type)>, arg1: boolean)

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "activate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "cycleSizeMode"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "cycleTranspMode"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "getModuleProvider"(arg0: $ItemStack$Type): $LazyOptional<($IModuleProvider)>
public static "hasModuleProvider"(arg0: $ItemStack$Type): boolean
public "isCreative"(): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "cycleSizeTranspMode"(arg0: $Level$Type, arg1: $BlockPos$Type): void
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlock$Type = ($ScreenBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBlock_ = $ScreenBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$FluidPlusBarScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidBarScreenModule, $FluidBarScreenModule$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$FluidBarScreenModule"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidPlusBarScreenModule extends $FluidBarScreenModule {

constructor()

public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlusBarScreenModule$Type = ($FluidPlusBarScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPlusBarScreenModule_ = $FluidPlusBarScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/modules/$ComputerScreenModule$ModuleComputerInfo" {
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$ComputerScreenModule$ColoredText, $ComputerScreenModule$ColoredText$Type} from "packages/mcjty/rftoolsutility/modules/screen/modules/$ComputerScreenModule$ColoredText"

export class $ComputerScreenModule$ModuleComputerInfo extends $ArrayList<($ComputerScreenModule$ColoredText)> implements $IModuleData {
static readonly "ID": string

constructor(arg0: $ByteBuf$Type)
constructor()

public "getId"(): string
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerScreenModule$ModuleComputerInfo$Type = ($ComputerScreenModule$ModuleComputerInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerScreenModule$ModuleComputerInfo_ = $ComputerScreenModule$ModuleComputerInfo$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/teleporter/blocks/$DestinationAnalyzerBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $DestinationAnalyzerBlock extends $Block {
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
public static "getFacingFromEntity"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DestinationAnalyzerBlock$Type = ($DestinationAnalyzerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DestinationAnalyzerBlock_ = $DestinationAnalyzerBlock$Type;
}}
declare module "packages/mcjty/rftoolsutility/modules/screen/blocks/$ScreenControllerBlock" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $ScreenControllerBlock extends $BaseBlock {
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

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenControllerBlock$Type = ($ScreenControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenControllerBlock_ = $ScreenControllerBlock$Type;
}}
