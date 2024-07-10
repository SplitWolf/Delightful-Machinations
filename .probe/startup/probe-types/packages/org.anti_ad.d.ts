declare module "packages/org/anti_ad/mc/ipnext/mixin/$IMixinKeyBinding" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IMixinKeyBinding {

 "getPressed"(): boolean
 "getKeyCode"(): $InputConstants$Key
 "getTimesPressed"(): integer
 "setPressed"(arg0: boolean): void
 "setTimesPressed"(arg0: integer): void
}

export namespace $IMixinKeyBinding {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinKeyBinding$Type = ($IMixinKeyBinding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinKeyBinding_ = $IMixinKeyBinding$Type;
}}
declare module "packages/org/anti_ad/mc/ipnext/mixinhelpers/$IMixinItemGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinItemGroup {

 "getIPNPriorityIndex"(): integer
 "setIPNPriorityIndex"(arg0: integer): void
}

export namespace $IMixinItemGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinItemGroup$Type = ($IMixinItemGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinItemGroup_ = $IMixinItemGroup$Type;
}}
