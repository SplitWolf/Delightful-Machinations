declare module "packages/com/communi/suggestu/scena/core/registries/$SimpleCustomRegistryEntry" {
import {$ICustomRegistryEntry, $ICustomRegistryEntry$Type} from "packages/com/communi/suggestu/scena/core/registries/$ICustomRegistryEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SimpleCustomRegistryEntry<V> implements $ICustomRegistryEntry {

constructor()

public "getRegistryName"(): $ResourceLocation
public "setRegistryName"(arg0: $ResourceLocation$Type): V
get "registryName"(): $ResourceLocation
set "registryName"(value: $ResourceLocation$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCustomRegistryEntry$Type<V> = ($SimpleCustomRegistryEntry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleCustomRegistryEntry_<V> = $SimpleCustomRegistryEntry$Type<(V)>;
}}
declare module "packages/com/communi/suggestu/saecularia/caudices/core/block/$IBlockWithWorldlyProperties" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BeaconBeamBlock, $BeaconBeamBlock$Type} from "packages/net/minecraft/world/level/block/$BeaconBeamBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IBlockWithWorldlyProperties extends $ItemLike, $BeaconBeamBlock {

 "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
 "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
 "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
 "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
 "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "getColor"(): $DyeColor
 "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
 "canBeGrass"(arg0: $LevelReader$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean
 "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
 "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
 "asItem"(): $Item
}

export namespace $IBlockWithWorldlyProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockWithWorldlyProperties$Type = ($IBlockWithWorldlyProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockWithWorldlyProperties_ = $IBlockWithWorldlyProperties$Type;
}}
declare module "packages/com/communi/suggestu/scena/core/registries/$ICustomRegistry" {
import {$ICustomRegistryEntry, $ICustomRegistryEntry$Type} from "packages/com/communi/suggestu/scena/core/registries/$ICustomRegistryEntry"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICustomRegistry<T extends $ICustomRegistryEntry> {

 "get"(arg0: $ResourceLocation$Type): $Optional<(T)>
 "forEach"(arg0: $Consumer$Type<(T)>): void
 "getNames"(): $Set<($ResourceLocation)>
 "getValues"(): $Collection<(T)>
}

export namespace $ICustomRegistry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomRegistry$Type<T> = ($ICustomRegistry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomRegistry_<T> = $ICustomRegistry$Type<(T)>;
}}
declare module "packages/com/communi/suggestu/scena/core/registries/$ICustomRegistryEntry" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICustomRegistryEntry {

 "getRegistryName"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $ICustomRegistryEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomRegistryEntry$Type = ($ICustomRegistryEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomRegistryEntry_ = $ICustomRegistryEntry$Type;
}}
declare module "packages/com/communi/suggestu/scena/core/fluid/$FluidInformation" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $FluidInformation extends $Record {

constructor(fluid: $Fluid$Type, amount: long, data: $CompoundTag$Type)
constructor(arg0: $Fluid$Type, arg1: long)
constructor(arg0: $Fluid$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "data"(): $CompoundTag
public "amount"(): long
public "withAmount"(arg0: long): $FluidInformation
public "withSource"(): $FluidInformation
public "fluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidInformation$Type = ($FluidInformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidInformation_ = $FluidInformation$Type;
}}
declare module "packages/com/communi/suggestu/scena/core/item/$IWearableItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IWearableItem extends $Equipable {

 "getSlot"(): $EquipmentSlot
 "getEquipSound"(): $SoundEvent
 "getEquipmentSlot"(): $EquipmentSlot
 "swapWithEquipmentSlot"(arg0: $Item$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>

(): $EquipmentSlot
}

export namespace $IWearableItem {
function get(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWearableItem$Type = ($IWearableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWearableItem_ = $IWearableItem$Type;
}}
