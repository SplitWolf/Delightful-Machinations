declare module "packages/eldritch/cookie/kubejs/mysticalagriculture/registry/$CropTierBuilder" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CropTierBuilder {

constructor(id: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropTierBuilder$Type = ($CropTierBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropTierBuilder_ = $CropTierBuilder$Type;
}}
declare module "packages/eldritch/cookie/kubejs/mysticalagriculture/registry/$CropRegistryEventJS" {
import {$CropBuilder, $CropBuilder$Type} from "packages/eldritch/cookie/kubejs/mysticalagriculture/registry/$CropBuilder"
import {$CropTierBuilder, $CropTierBuilder$Type} from "packages/eldritch/cookie/kubejs/mysticalagriculture/registry/$CropTierBuilder"
import {$CropTypeBuilder, $CropTypeBuilder$Type} from "packages/eldritch/cookie/kubejs/mysticalagriculture/registry/$CropTypeBuilder"
import {$ICropRegistry, $ICropRegistry$Type} from "packages/com/blakebr0/mysticalagriculture/api/registry/$ICropRegistry"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$List, $List$Type} from "packages/java/util/$List"

export class $CropRegistryEventJS extends $StartupEventJS {
readonly "registry": $ICropRegistry
readonly "createdCrops": $List<($CropBuilder)>
readonly "createdTiers": $List<($CropTierBuilder)>
readonly "createdCropTypes": $List<($CropTypeBuilder)>

constructor(registry: $ICropRegistry$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropRegistryEventJS$Type = ($CropRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropRegistryEventJS_ = $CropRegistryEventJS$Type;
}}
declare module "packages/eldritch/cookie/kubejs/mysticalagriculture/registry/$CropBuilder" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CropBuilder {

constructor(id: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropBuilder$Type = ($CropBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropBuilder_ = $CropBuilder$Type;
}}
declare module "packages/eldritch/cookie/kubejs/mysticalagriculture/registry/$CropTypeBuilder$CraftingSeedGenerationInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CropTypeBuilder$CraftingSeedGenerationInfo extends $Record {

constructor(item: $ResourceLocation$Type, texture: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "item"(): $ResourceLocation
public "texture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropTypeBuilder$CraftingSeedGenerationInfo$Type = ($CropTypeBuilder$CraftingSeedGenerationInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropTypeBuilder$CraftingSeedGenerationInfo_ = $CropTypeBuilder$CraftingSeedGenerationInfo$Type;
}}
declare module "packages/eldritch/cookie/kubejs/mysticalagriculture/registry/$MobSoulTypeRegistryEventJS" {
import {$IMobSoulTypeRegistry, $IMobSoulTypeRegistry$Type} from "packages/com/blakebr0/mysticalagriculture/api/registry/$IMobSoulTypeRegistry"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"

export class $MobSoulTypeRegistryEventJS extends $StartupEventJS {
readonly "registry": $IMobSoulTypeRegistry

constructor(registry: $IMobSoulTypeRegistry$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSoulTypeRegistryEventJS$Type = ($MobSoulTypeRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSoulTypeRegistryEventJS_ = $MobSoulTypeRegistryEventJS$Type;
}}
declare module "packages/eldritch/cookie/kubejs/mysticalagriculture/registry/$CropTypeBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CropType, $CropType$Type} from "packages/com/blakebr0/mysticalagriculture/api/crop/$CropType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CropTypeBuilder$CraftingSeedGenerationInfo, $CropTypeBuilder$CraftingSeedGenerationInfo$Type} from "packages/eldritch/cookie/kubejs/mysticalagriculture/registry/$CropTypeBuilder$CraftingSeedGenerationInfo"

export class $CropTypeBuilder implements $Supplier<($CropType)> {
readonly "id": $ResourceLocation
readonly "toGenerate": $List<($CropTypeBuilder$CraftingSeedGenerationInfo)>

constructor(id: $ResourceLocation$Type)

public "setCraftingSeed"(craftingSeed: $Item$Type): $CropTypeBuilder
public "setCraftingSeed"(craftingSeed: $Supplier$Type<(any)>): $CropTypeBuilder
public "setCraftingSeedToGenerated"(): $CropTypeBuilder
public "createCropType"(): $CropType
public "setStemModel"(stemModel: string): $CropTypeBuilder
set "craftingSeed"(value: $Item$Type)
set "craftingSeed"(value: $Supplier$Type<(any)>)
set "stemModel"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropTypeBuilder$Type = ($CropTypeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropTypeBuilder_ = $CropTypeBuilder$Type;
}}
declare module "packages/eldritch/cookie/kubejs/mysticalagriculture/recipe/$SoulExtractionRecipeSchema$SoulExtractionRecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SoulExtractionRecipeSchema$SoulExtractionRecipeJS extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulExtractionRecipeSchema$SoulExtractionRecipeJS$Type = ($SoulExtractionRecipeSchema$SoulExtractionRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulExtractionRecipeSchema$SoulExtractionRecipeJS_ = $SoulExtractionRecipeSchema$SoulExtractionRecipeJS$Type;
}}
