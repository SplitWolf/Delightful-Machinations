declare module "packages/fuzs/universalenchants/mixin/accessor/$AbstractArrowAccessor" {
import {$IntOpenHashSet, $IntOpenHashSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntOpenHashSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractArrowAccessor {

 "setPiercingIgnoreEntityIds"(arg0: $IntOpenHashSet$Type): void
 "getPiercingIgnoreEntityIds"(): $IntOpenHashSet
 "callGetPickupItem"(): $ItemStack
 "getKnockback"(): integer
}

export namespace $AbstractArrowAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractArrowAccessor$Type = ($AbstractArrowAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractArrowAccessor_ = $AbstractArrowAccessor$Type;
}}
declare module "packages/fuzs/universalenchants/mixin/accessor/$ExperienceOrbAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExperienceOrbAccessor {

 "getCount"(): integer
 "setCount"(arg0: integer): void
}

export namespace $ExperienceOrbAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceOrbAccessor$Type = ($ExperienceOrbAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceOrbAccessor_ = $ExperienceOrbAccessor$Type;
}}
declare module "packages/fuzs/universalenchants/mixin/accessor/$LivingEntityAccessor" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $LivingEntityAccessor {

 "getLastHurtByPlayerTime"(): integer
 "callGetExperienceReward"(): integer
 "callShouldDropExperience"(): boolean
 "callIsAlwaysExperienceDropper"(): boolean
 "getLastHurtByPlayer"(): $Player
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$Type;
}}
declare module "packages/fuzs/universalenchants/mixin/accessor/$EnchantmentAccessor" {
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export interface $EnchantmentAccessor {

 "universalenchants$setSlots"(arg0: ($EquipmentSlot$Type)[]): void
 "universalenchants$setCategory"(arg0: $EnchantmentCategory$Type): void
}

export namespace $EnchantmentAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentAccessor$Type = ($EnchantmentAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentAccessor_ = $EnchantmentAccessor$Type;
}}
