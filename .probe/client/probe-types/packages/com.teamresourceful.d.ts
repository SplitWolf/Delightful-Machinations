declare module "packages/com/teamresourceful/resourcefullib/common/registry/$RegistryEntry" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegistryEntry<T> extends $Supplier<(T)> {

 "get"(): T
 "getId"(): $ResourceLocation
}

export namespace $RegistryEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$Type<T> = ($RegistryEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryEntry_<T> = $RegistryEntry$Type<(T)>;
}}
