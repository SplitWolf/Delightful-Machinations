declare module "packages/team/creative/itemphysic/client/$ItemEntityRendering" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityRendering {

 "skipRendering"(): boolean

(): boolean
}

export namespace $ItemEntityRendering {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityRendering$Type = ($ItemEntityRendering);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityRendering_ = $ItemEntityRendering$Type;
}}
declare module "packages/team/creative/itemphysic/mixin/$EntityAccessor" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $EntityAccessor {

 "getStuckSpeedMultiplier"(): $Vec3
 "getFluidOnEyes"(): $Set<($TagKey<($Fluid)>)>
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "getLastMouseEventTime"(): double

(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$BufferBuilderAccessor" {
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export interface $BufferBuilderAccessor {

 "getBuffer"(): $ByteBuffer
 "getVertices"(): integer
 "getNextElementByte"(): integer
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderAccessor$Type = ($BufferBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderAccessor_ = $BufferBuilderAccessor$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$VoxelShapeAccessor" {
import {$DiscreteVoxelShape, $DiscreteVoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"

export interface $VoxelShapeAccessor {

 "setShape"(arg0: $DiscreteVoxelShape$Type): void

(arg0: $DiscreteVoxelShape$Type): void
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccessor$Type = ($VoxelShapeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeAccessor_ = $VoxelShapeAccessor$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$VanillaPackResourcesAccessor" {
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $VanillaPackResourcesAccessor {

 "getPathsForType"(): $Map<($PackType), ($List<($Path)>)>

(): $Map<($PackType), ($List<($Path)>)>
}

export namespace $VanillaPackResourcesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaPackResourcesAccessor$Type = ($VanillaPackResourcesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaPackResourcesAccessor_ = $VanillaPackResourcesAccessor$Type;
}}
declare module "packages/team/creative/creativecore/mixin/$StringSplitterAccessor" {
import {$StringSplitter$WidthProvider, $StringSplitter$WidthProvider$Type} from "packages/net/minecraft/client/$StringSplitter$WidthProvider"

export interface $StringSplitterAccessor {

 "getWidthProvider"(): $StringSplitter$WidthProvider

(): $StringSplitter$WidthProvider
}

export namespace $StringSplitterAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitterAccessor$Type = ($StringSplitterAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringSplitterAccessor_ = $StringSplitterAccessor$Type;
}}
declare module "packages/team/creative/itemphysic/mixin/$ItemEntityAccessor" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $ItemEntityAccessor {

 "getTarget"(): $UUID

(): $UUID
}

export namespace $ItemEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityAccessor$Type = ($ItemEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityAccessor_ = $ItemEntityAccessor$Type;
}}
