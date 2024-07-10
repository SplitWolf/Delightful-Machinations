declare module "packages/mekanism/api/chemical/slurry/$ISlurryTank" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ChemicalAttributeValidator, $ChemicalAttributeValidator$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttributeValidator"
import {$AutomationType, $AutomationType$Type} from "packages/mekanism/api/$AutomationType"
import {$IEmptySlurryProvider, $IEmptySlurryProvider$Type} from "packages/mekanism/api/chemical/slurry/$IEmptySlurryProvider"
import {$SlurryStack, $SlurryStack$Type} from "packages/mekanism/api/chemical/slurry/$SlurryStack"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$IChemicalTank, $IChemicalTank$Type} from "packages/mekanism/api/chemical/$IChemicalTank"
import {$Slurry, $Slurry$Type} from "packages/mekanism/api/chemical/slurry/$Slurry"

export interface $ISlurryTank extends $IChemicalTank<($Slurry), ($SlurryStack)>, $IEmptySlurryProvider {

 "createStack"(arg0: $SlurryStack$Type, arg1: long): $SlurryStack
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getCapacity"(): long
 "extract"(arg0: long, arg1: $Action$Type, arg2: $AutomationType$Type): $SlurryStack
 "insert"(arg0: $SlurryStack$Type, arg1: $Action$Type, arg2: $AutomationType$Type): $SlurryStack
 "isEmpty"(): boolean
 "getType"(): $Slurry
 "getStack"(): $SlurryStack
 "isValid"(arg0: $SlurryStack$Type): boolean
 "setEmpty"(): void
 "setStack"(arg0: $SlurryStack$Type): void
 "getAttributeValidator"(): $ChemicalAttributeValidator
 "growStack"(arg0: long, arg1: $Action$Type): long
 "getStored"(): long
 "setStackUnchecked"(arg0: $SlurryStack$Type): void
 "isTypeEqual"(arg0: $Slurry$Type): boolean
 "isTypeEqual"(arg0: $SlurryStack$Type): boolean
 "serializeNBT"(): $CompoundTag
 "getNeeded"(): long
 "setStackSize"(arg0: long, arg1: $Action$Type): long
 "shrinkStack"(arg0: long, arg1: $Action$Type): long
 "getEmptyStack"(): $SlurryStack
 "onContentsChanged"(): void
}

export namespace $ISlurryTank {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlurryTank$Type = ($ISlurryTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlurryTank_ = $ISlurryTank$Type;
}}
declare module "packages/mekanism/api/gear/$ModuleData" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IItemProvider, $IItemProvider$Type} from "packages/mekanism/api/providers/$IItemProvider"
import {$IModuleDataProvider, $IModuleDataProvider$Type} from "packages/mekanism/api/providers/$IModuleDataProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ICustomModule, $ICustomModule$Type} from "packages/mekanism/api/gear/$ICustomModule"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ModuleData$ModuleDataBuilder, $ModuleData$ModuleDataBuilder$Type} from "packages/mekanism/api/gear/$ModuleData$ModuleDataBuilder"

export class $ModuleData<MODULE extends $ICustomModule<(MODULE)>> implements $IModuleDataProvider<(MODULE)> {

constructor(arg0: $ModuleData$ModuleDataBuilder$Type<(MODULE)>)

public "get"(): MODULE
public "getRarity"(): $Rarity
public "getModuleData"(): $ModuleData<(MODULE)>
public "getMaxStackSize"(): integer
public "getItemProvider"(): $IItemProvider
public "getRegistryName"(): $ResourceLocation
public "getTranslationKey"(): string
public "isNoDisable"(): boolean
public "getExclusiveFlags"(): integer
public "rendersHUD"(): boolean
public "isExclusive"(arg0: integer): boolean
public "isModeChangeDisabledByDefault"(): boolean
public "getDescriptionTranslationKey"(): string
public "isDisabledByDefault"(): boolean
public "handlesModeChange"(): boolean
public "getName"(): string
public "getTextComponent"(): $Component
get "rarity"(): $Rarity
get "moduleData"(): $ModuleData<(MODULE)>
get "maxStackSize"(): integer
get "itemProvider"(): $IItemProvider
get "registryName"(): $ResourceLocation
get "translationKey"(): string
get "noDisable"(): boolean
get "exclusiveFlags"(): integer
get "modeChangeDisabledByDefault"(): boolean
get "descriptionTranslationKey"(): string
get "disabledByDefault"(): boolean
get "name"(): string
get "textComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleData$Type<MODULE> = ($ModuleData<(MODULE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleData_<MODULE> = $ModuleData$Type<(MODULE)>;
}}
declare module "packages/mekanism/api/gear/config/$ModuleConfigData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $ModuleConfigData<TYPE> {

 "get"(): TYPE
 "write"(arg0: string, arg1: $CompoundTag$Type): void
 "read"(arg0: string, arg1: $CompoundTag$Type): void
 "set"(arg0: TYPE): void
}

export namespace $ModuleConfigData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleConfigData$Type<TYPE> = ($ModuleConfigData<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleConfigData_<TYPE> = $ModuleConfigData$Type<(TYPE)>;
}}
declare module "packages/mekanism/api/energy/$IMekanismStrictEnergyHandler" {
import {$IEnergyContainer, $IEnergyContainer$Type} from "packages/mekanism/api/energy/$IEnergyContainer"
import {$ISidedStrictEnergyHandler, $ISidedStrictEnergyHandler$Type} from "packages/mekanism/api/energy/$ISidedStrictEnergyHandler"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"
import {$IContentsListener, $IContentsListener$Type} from "packages/mekanism/api/$IContentsListener"

export interface $IMekanismStrictEnergyHandler extends $ISidedStrictEnergyHandler, $IContentsListener {

 "setEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Direction$Type): void
 "getEnergyContainerCount"(arg0: $Direction$Type): integer
 "getEnergyContainers"(arg0: $Direction$Type): $List<($IEnergyContainer)>
 "extractEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Direction$Type, arg3: $Action$Type): $FloatingLong
 "getEnergy"(arg0: integer, arg1: $Direction$Type): $FloatingLong
 "getMaxEnergy"(arg0: integer, arg1: $Direction$Type): $FloatingLong
 "canHandleEnergy"(): boolean
 "getEnergyContainer"(arg0: integer, arg1: $Direction$Type): $IEnergyContainer
 "insertEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Direction$Type, arg3: $Action$Type): $FloatingLong
 "getNeededEnergy"(arg0: integer, arg1: $Direction$Type): $FloatingLong
 "setEnergy"(arg0: integer, arg1: $FloatingLong$Type): void
 "getEnergyContainerCount"(): integer
 "extractEnergy"(arg0: $FloatingLong$Type, arg1: $Direction$Type, arg2: $Action$Type): $FloatingLong
 "extractEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Action$Type): $FloatingLong
 "getEnergy"(arg0: integer): $FloatingLong
 "getEnergySideFor"(): $Direction
 "getMaxEnergy"(arg0: integer): $FloatingLong
 "insertEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Action$Type): $FloatingLong
 "insertEnergy"(arg0: $FloatingLong$Type, arg1: $Direction$Type, arg2: $Action$Type): $FloatingLong
 "getNeededEnergy"(arg0: integer): $FloatingLong
 "onContentsChanged"(): void
 "extractEnergy"(arg0: $FloatingLong$Type, arg1: $Action$Type): $FloatingLong
 "insertEnergy"(arg0: $FloatingLong$Type, arg1: $Action$Type): $FloatingLong
}

export namespace $IMekanismStrictEnergyHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMekanismStrictEnergyHandler$Type = ($IMekanismStrictEnergyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMekanismStrictEnergyHandler_ = $IMekanismStrictEnergyHandler$Type;
}}
declare module "packages/mekanism/api/recipes/$RotaryRecipe" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FluidStackIngredient, $FluidStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$FluidStackIngredient"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChemicalStackIngredient$GasStackIngredient, $ChemicalStackIngredient$GasStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$GasStackIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RotaryRecipe extends $MekanismRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $FluidStackIngredient$Type, arg2: $ChemicalStackIngredient$GasStackIngredient$Type, arg3: $GasStack$Type, arg4: $FluidStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $ChemicalStackIngredient$GasStackIngredient$Type, arg2: $FluidStack$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $FluidStackIngredient$Type, arg2: $GasStack$Type)

public "test"(arg0: $GasStack$Type): boolean
public "test"(arg0: $FluidStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getGasInput"(): $ChemicalStackIngredient$GasStackIngredient
public "getFluidInput"(): $FluidStackIngredient
public "getFluidOutput"(arg0: $GasStack$Type): $FluidStack
public "getGasOutputDefinition"(): $List<($GasStack)>
public "getFluidOutputDefinition"(): $List<($FluidStack)>
public "hasGasToFluid"(): boolean
public "hasFluidToGas"(): boolean
public "getGasOutput"(arg0: $FluidStack$Type): $GasStack
get "incomplete"(): boolean
get "gasInput"(): $ChemicalStackIngredient$GasStackIngredient
get "fluidInput"(): $FluidStackIngredient
get "gasOutputDefinition"(): $List<($GasStack)>
get "fluidOutputDefinition"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotaryRecipe$Type = ($RotaryRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotaryRecipe_ = $RotaryRecipe$Type;
}}
declare module "packages/mekanism/api/recipes/$ItemStackGasToItemStackRecipe" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ChemicalStackIngredient$GasStackIngredient, $ChemicalStackIngredient$GasStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$GasStackIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemStackChemicalToItemStackRecipe, $ItemStackChemicalToItemStackRecipe$Type} from "packages/mekanism/api/recipes/chemical/$ItemStackChemicalToItemStackRecipe"

export class $ItemStackGasToItemStackRecipe extends $ItemStackChemicalToItemStackRecipe<($Gas), ($GasStack), ($ChemicalStackIngredient$GasStackIngredient)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $ChemicalStackIngredient$GasStackIngredient$Type, arg3: $ItemStack$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackGasToItemStackRecipe$Type = ($ItemStackGasToItemStackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackGasToItemStackRecipe_ = $ItemStackGasToItemStackRecipe$Type;
}}
declare module "packages/mekanism/api/chemical/merged/$MergedChemicalTank" {
import {$IPigmentTank, $IPigmentTank$Type} from "packages/mekanism/api/chemical/pigment/$IPigmentTank"
import {$MergedChemicalTank$Current, $MergedChemicalTank$Current$Type} from "packages/mekanism/api/chemical/merged/$MergedChemicalTank$Current"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IChemicalTank, $IChemicalTank$Type} from "packages/mekanism/api/chemical/$IChemicalTank"
import {$ChemicalType, $ChemicalType$Type} from "packages/mekanism/api/chemical/$ChemicalType"
import {$IInfusionTank, $IInfusionTank$Type} from "packages/mekanism/api/chemical/infuse/$IInfusionTank"
import {$IGasTank, $IGasTank$Type} from "packages/mekanism/api/chemical/gas/$IGasTank"
import {$ISlurryTank, $ISlurryTank$Type} from "packages/mekanism/api/chemical/slurry/$ISlurryTank"

export class $MergedChemicalTank {


public static "create"(arg0: $IGasTank$Type, arg1: $IInfusionTank$Type, arg2: $IPigmentTank$Type, arg3: $ISlurryTank$Type): $MergedChemicalTank
public "getAllTanks"(): $Collection<($IChemicalTank<(any), (any)>)>
public "getCurrent"(): $MergedChemicalTank$Current
public "getTankFromCurrent"(arg0: $MergedChemicalTank$Current$Type): $IChemicalTank<(any), (any)>
public "getTankForType"(arg0: $ChemicalType$Type): $IChemicalTank<(any), (any)>
public "getGasTank"(): $IGasTank
public "getInfusionTank"(): $IInfusionTank
public "getPigmentTank"(): $IPigmentTank
public "getSlurryTank"(): $ISlurryTank
get "allTanks"(): $Collection<($IChemicalTank<(any), (any)>)>
get "current"(): $MergedChemicalTank$Current
get "gasTank"(): $IGasTank
get "infusionTank"(): $IInfusionTank
get "pigmentTank"(): $IPigmentTank
get "slurryTank"(): $ISlurryTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MergedChemicalTank$Type = ($MergedChemicalTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MergedChemicalTank_ = $MergedChemicalTank$Type;
}}
declare module "packages/mekanism/api/chemical/slurry/$ISlurryHandler$ISidedSlurryHandler" {
import {$SlurryStack, $SlurryStack$Type} from "packages/mekanism/api/chemical/slurry/$SlurryStack"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$ISidedChemicalHandler, $ISidedChemicalHandler$Type} from "packages/mekanism/api/chemical/$ISidedChemicalHandler"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Slurry, $Slurry$Type} from "packages/mekanism/api/chemical/slurry/$Slurry"
import {$ISlurryHandler, $ISlurryHandler$Type} from "packages/mekanism/api/chemical/slurry/$ISlurryHandler"

export interface $ISlurryHandler$ISidedSlurryHandler extends $ISidedChemicalHandler<($Slurry), ($SlurryStack)>, $ISlurryHandler {

 "isValid"(arg0: integer, arg1: $SlurryStack$Type): boolean
 "isValid"(arg0: integer, arg1: $SlurryStack$Type, arg2: $Direction$Type): boolean
 "insertChemical"(arg0: $SlurryStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $SlurryStack
 "insertChemical"(arg0: integer, arg1: $SlurryStack$Type, arg2: $Direction$Type, arg3: $Action$Type): $SlurryStack
 "insertChemical"(arg0: integer, arg1: $SlurryStack$Type, arg2: $Action$Type): $SlurryStack
 "setChemicalInTank"(arg0: integer, arg1: $SlurryStack$Type): void
 "setChemicalInTank"(arg0: integer, arg1: $SlurryStack$Type, arg2: $Direction$Type): void
 "getSideFor"(): $Direction
 "getTanks"(): integer
 "getTanks"(arg0: $Direction$Type): integer
 "getTankCapacity"(arg0: integer): long
 "getTankCapacity"(arg0: integer, arg1: $Direction$Type): long
 "getChemicalInTank"(arg0: integer, arg1: $Direction$Type): $SlurryStack
 "getChemicalInTank"(arg0: integer): $SlurryStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Direction$Type, arg3: $Action$Type): $SlurryStack
 "extractChemical"(arg0: long, arg1: $Direction$Type, arg2: $Action$Type): $SlurryStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): $SlurryStack
 "extractChemical"(arg0: $SlurryStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $SlurryStack
 "insertChemical"(arg0: $SlurryStack$Type, arg1: $Action$Type): $SlurryStack
 "extractChemical"(arg0: long, arg1: $Action$Type): $SlurryStack
 "extractChemical"(arg0: $SlurryStack$Type, arg1: $Action$Type): $SlurryStack
 "getEmptyStack"(): $SlurryStack
}

export namespace $ISlurryHandler$ISidedSlurryHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlurryHandler$ISidedSlurryHandler$Type = ($ISlurryHandler$ISidedSlurryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlurryHandler$ISidedSlurryHandler_ = $ISlurryHandler$ISidedSlurryHandler$Type;
}}
declare module "packages/mekanism/api/recipes/$ItemStackToPigmentRecipe" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStackToChemicalRecipe, $ItemStackToChemicalRecipe$Type} from "packages/mekanism/api/recipes/chemical/$ItemStackToChemicalRecipe"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PigmentStack, $PigmentStack$Type} from "packages/mekanism/api/chemical/pigment/$PigmentStack"

export class $ItemStackToPigmentRecipe extends $ItemStackToChemicalRecipe<($Pigment), ($PigmentStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $PigmentStack$Type)

public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackToPigmentRecipe$Type = ($ItemStackToPigmentRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackToPigmentRecipe_ = $ItemStackToPigmentRecipe$Type;
}}
declare module "packages/mekanism/api/tier/$ITier" {
import {$BaseTier, $BaseTier$Type} from "packages/mekanism/api/tier/$BaseTier"

export interface $ITier {

 "getBaseTier"(): $BaseTier

(): $BaseTier
}

export namespace $ITier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITier$Type = ($ITier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITier_ = $ITier$Type;
}}
declare module "packages/mekanism/api/security/$SecurityMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IIncrementalEnum, $IIncrementalEnum$Type} from "packages/mekanism/api/$IIncrementalEnum"
import {$IHasTextComponent, $IHasTextComponent$Type} from "packages/mekanism/api/text/$IHasTextComponent"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $SecurityMode extends $Enum<($SecurityMode)> implements $IIncrementalEnum<($SecurityMode)>, $IHasTextComponent {
static readonly "PUBLIC": $SecurityMode
static readonly "PRIVATE": $SecurityMode
static readonly "TRUSTED": $SecurityMode


public static "values"(): ($SecurityMode)[]
public static "valueOf"(arg0: string): $SecurityMode
public "byIndex"(arg0: integer): $SecurityMode
public static "byIndexStatic"(arg0: integer): $SecurityMode
public "getTextComponent"(): $Component
public "ordinal"(): integer
public "adjust"(arg0: integer): $SecurityMode
public "adjust"(arg0: integer, arg1: $Predicate$Type<($SecurityMode$Type)>): $SecurityMode
public "getNext"(arg0: $Predicate$Type<($SecurityMode$Type)>): $SecurityMode
public "getNext"(): $SecurityMode
public "getPrevious"(): $SecurityMode
public "getPrevious"(arg0: $Predicate$Type<($SecurityMode$Type)>): $SecurityMode
get "textComponent"(): $Component
get "next"(): $SecurityMode
get "previous"(): $SecurityMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecurityMode$Type = (("private") | ("public") | ("trusted")) | ($SecurityMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecurityMode_ = $SecurityMode$Type;
}}
declare module "packages/mekanism/api/recipes/$NucleosynthesizingRecipe" {
import {$ItemStackGasToItemStackRecipe, $ItemStackGasToItemStackRecipe$Type} from "packages/mekanism/api/recipes/$ItemStackGasToItemStackRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ChemicalStackIngredient$GasStackIngredient, $ChemicalStackIngredient$GasStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$GasStackIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $NucleosynthesizingRecipe extends $ItemStackGasToItemStackRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $ChemicalStackIngredient$GasStackIngredient$Type, arg3: $ItemStack$Type, arg4: integer)

public "write"(arg0: $FriendlyByteBuf$Type): void
public "getDuration"(): integer
get "duration"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NucleosynthesizingRecipe$Type = ($NucleosynthesizingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NucleosynthesizingRecipe_ = $NucleosynthesizingRecipe$Type;
}}
declare module "packages/mekanism/api/recipes/chemical/$ChemicalChemicalToChemicalRecipe" {
import {$ChemicalStackIngredient, $ChemicalStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ChemicalChemicalToChemicalRecipe<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>, INGREDIENT extends $ChemicalStackIngredient<(CHEMICAL), (STACK)>> extends $MekanismRecipe implements $BiPredicate<(STACK), (STACK)> {

constructor(arg0: $ResourceLocation$Type, arg1: INGREDIENT, arg2: INGREDIENT, arg3: STACK)

public "test"(arg0: STACK, arg1: STACK): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getOutput"(arg0: STACK, arg1: STACK): STACK
public "getOutputDefinition"(): $List<(STACK)>
public "getLeftInput"(): INGREDIENT
public "getRightInput"(): INGREDIENT
public "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<(STACK), (STACK)>
public "negate"(): $BiPredicate<(STACK), (STACK)>
public "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<(STACK), (STACK)>
get "incomplete"(): boolean
get "outputDefinition"(): $List<(STACK)>
get "leftInput"(): INGREDIENT
get "rightInput"(): INGREDIENT
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalChemicalToChemicalRecipe$Type<CHEMICAL, STACK, INGREDIENT> = ($ChemicalChemicalToChemicalRecipe<(CHEMICAL), (STACK), (INGREDIENT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalChemicalToChemicalRecipe_<CHEMICAL, STACK, INGREDIENT> = $ChemicalChemicalToChemicalRecipe$Type<(CHEMICAL), (STACK), (INGREDIENT)>;
}}
declare module "packages/mekanism/api/$IContentsListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IContentsListener {

 "onContentsChanged"(): void

(): void
}

export namespace $IContentsListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentsListener$Type = ($IContentsListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContentsListener_ = $IContentsListener$Type;
}}
declare module "packages/mekanism/api/$SupportsColorMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SupportsColorMap {

 "getColor"(arg0: integer): float
 "getRgbCode"(): (integer)[]
 "setColorFromAtlas"(arg0: (integer)[]): void
 "getRgbCodeFloat"(): (float)[]
}

export namespace $SupportsColorMap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportsColorMap$Type = ($SupportsColorMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportsColorMap_ = $SupportsColorMap$Type;
}}
declare module "packages/mekanism/api/recipes/$PressurizedReactionRecipe$PressurizedReactionRecipeOutput" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $PressurizedReactionRecipe$PressurizedReactionRecipeOutput extends $Record {

constructor(item: $ItemStack$Type, gas: $GasStack$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "item"(): $ItemStack
public "gas"(): $GasStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressurizedReactionRecipe$PressurizedReactionRecipeOutput$Type = ($PressurizedReactionRecipe$PressurizedReactionRecipeOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressurizedReactionRecipe$PressurizedReactionRecipeOutput_ = $PressurizedReactionRecipe$PressurizedReactionRecipeOutput$Type;
}}
declare module "packages/mekanism/api/chemical/gas/$GasBuilder" {
import {$ChemicalBuilder, $ChemicalBuilder$Type} from "packages/mekanism/api/chemical/$ChemicalBuilder"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GasBuilder extends $ChemicalBuilder<($Gas), ($GasBuilder)> {


public static "builder"(): $GasBuilder
public static "builder"(arg0: $ResourceLocation$Type): $GasBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasBuilder$Type = ($GasBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasBuilder_ = $GasBuilder$Type;
}}
declare module "packages/mekanism/api/energy/$IEnergyContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AutomationType, $AutomationType$Type} from "packages/mekanism/api/$AutomationType"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"
import {$IContentsListener, $IContentsListener$Type} from "packages/mekanism/api/$IContentsListener"

export interface $IEnergyContainer extends $INBTSerializable<($CompoundTag)>, $IContentsListener {

 "extract"(arg0: $FloatingLong$Type, arg1: $Action$Type, arg2: $AutomationType$Type): $FloatingLong
 "insert"(arg0: $FloatingLong$Type, arg1: $Action$Type, arg2: $AutomationType$Type): $FloatingLong
 "isEmpty"(): boolean
 "setEmpty"(): void
 "setEnergy"(arg0: $FloatingLong$Type): void
 "getEnergy"(): $FloatingLong
 "getNeeded"(): $FloatingLong
 "getMaxEnergy"(): $FloatingLong
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "onContentsChanged"(): void
}

export namespace $IEnergyContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyContainer$Type = ($IEnergyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyContainer_ = $IEnergyContainer$Type;
}}
declare module "packages/mekanism/api/chemical/slurry/$SlurryBuilder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ChemicalBuilder, $ChemicalBuilder$Type} from "packages/mekanism/api/chemical/$ChemicalBuilder"
import {$Slurry, $Slurry$Type} from "packages/mekanism/api/chemical/slurry/$Slurry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $SlurryBuilder extends $ChemicalBuilder<($Slurry), ($SlurryBuilder)> {


public static "clean"(): $SlurryBuilder
public static "builder"(arg0: $ResourceLocation$Type): $SlurryBuilder
public static "dirty"(): $SlurryBuilder
public "getOreTag"(): $TagKey<($Item)>
public "ore"(arg0: $ResourceLocation$Type): $SlurryBuilder
public "ore"(arg0: $TagKey$Type<($Item$Type)>): $SlurryBuilder
get "oreTag"(): $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlurryBuilder$Type = ($SlurryBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlurryBuilder_ = $SlurryBuilder$Type;
}}
declare module "packages/mekanism/api/$RelativeSide" {
import {$IHasTranslationKey, $IHasTranslationKey$Type} from "packages/mekanism/api/text/$IHasTranslationKey"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $RelativeSide extends $Enum<($RelativeSide)> implements $IHasTranslationKey {
static readonly "FRONT": $RelativeSide
static readonly "LEFT": $RelativeSide
static readonly "RIGHT": $RelativeSide
static readonly "BACK": $RelativeSide
static readonly "TOP": $RelativeSide
static readonly "BOTTOM": $RelativeSide


public static "values"(): ($RelativeSide)[]
public static "valueOf"(arg0: string): $RelativeSide
public "getDirection"(arg0: $Direction$Type): $Direction
public static "byIndex"(arg0: integer): $RelativeSide
public "getTranslationKey"(): string
public static "fromDirections"(arg0: $Direction$Type, arg1: $Direction$Type): $RelativeSide
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeSide$Type = (("top") | ("left") | ("bottom") | ("back") | ("front") | ("right")) | ($RelativeSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelativeSide_ = $RelativeSide$Type;
}}
declare module "packages/mekanism/api/providers/$IChemicalProvider" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IBaseProvider, $IBaseProvider$Type} from "packages/mekanism/api/providers/$IBaseProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IChemicalProvider<CHEMICAL extends $Chemical<(CHEMICAL)>> extends $IBaseProvider {

 "getStack"(arg0: long): $ChemicalStack<(CHEMICAL)>
 "getChemical"(): CHEMICAL
 "getRegistryName"(): $ResourceLocation
 "getTranslationKey"(): string
 "getTextComponent"(): $Component
 "getName"(): string
}

export namespace $IChemicalProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChemicalProvider$Type<CHEMICAL> = ($IChemicalProvider<(CHEMICAL)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChemicalProvider_<CHEMICAL> = $IChemicalProvider$Type<(CHEMICAL)>;
}}
declare module "packages/mekanism/api/security/$ISecurityObject" {
import {$SecurityMode, $SecurityMode$Type} from "packages/mekanism/api/security/$SecurityMode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IOwnerObject, $IOwnerObject$Type} from "packages/mekanism/api/security/$IOwnerObject"

export interface $ISecurityObject extends $IOwnerObject {

 "setSecurityMode"(arg0: $SecurityMode$Type): void
 "onSecurityChanged"(arg0: $SecurityMode$Type, arg1: $SecurityMode$Type): void
 "getSecurityMode"(): $SecurityMode
 "getOwnerName"(): string
 "ownerMatches"(arg0: $Player$Type): boolean
 "setOwnerUUID"(arg0: $UUID$Type): void
 "getOwnerUUID"(): $UUID
}

export namespace $ISecurityObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISecurityObject$Type = ($ISecurityObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISecurityObject_ = $ISecurityObject$Type;
}}
declare module "packages/mekanism/api/$AutomationType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AutomationType extends $Enum<($AutomationType)> {
static readonly "EXTERNAL": $AutomationType
static readonly "INTERNAL": $AutomationType
static readonly "MANUAL": $AutomationType


public static "values"(): ($AutomationType)[]
public static "valueOf"(arg0: string): $AutomationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomationType$Type = (("external") | ("internal") | ("manual")) | ($AutomationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomationType_ = $AutomationType$Type;
}}
declare module "packages/mekanism/api/$IDisableableEnum" {
import {$IIncrementalEnum, $IIncrementalEnum$Type} from "packages/mekanism/api/$IIncrementalEnum"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export interface $IDisableableEnum<TYPE extends ($Enum<(TYPE)>) & ($IDisableableEnum<(TYPE)>)> extends $IIncrementalEnum<(TYPE)> {

 "isEnabled"(): boolean
 "adjust"(arg0: integer): TYPE
 "getNext"(arg0: $Predicate$Type<(TYPE)>): TYPE
 "getPrevious"(arg0: $Predicate$Type<(TYPE)>): TYPE
 "ordinal"(): integer
 "adjust"(arg0: integer, arg1: $Predicate$Type<(TYPE)>): TYPE
 "getNext"(): TYPE
 "byIndex"(arg0: integer): TYPE
 "getPrevious"(): TYPE
}

export namespace $IDisableableEnum {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDisableableEnum$Type<TYPE> = ($IDisableableEnum<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDisableableEnum_<TYPE> = $IDisableableEnum$Type<(TYPE)>;
}}
declare module "packages/mekanism/api/recipes/$ChemicalDissolutionRecipe" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$BoxedChemicalStack, $BoxedChemicalStack$Type} from "packages/mekanism/api/chemical/merged/$BoxedChemicalStack"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ChemicalStackIngredient$GasStackIngredient, $ChemicalStackIngredient$GasStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$GasStackIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ChemicalDissolutionRecipe extends $MekanismRecipe implements $BiPredicate<($ItemStack), ($GasStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $ChemicalStackIngredient$GasStackIngredient$Type, arg3: $ChemicalStack$Type<(any)>)

public "test"(arg0: $ItemStack$Type, arg1: $GasStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getOutput"(arg0: $ItemStack$Type, arg1: $GasStack$Type): $BoxedChemicalStack
public "getGasInput"(): $ChemicalStackIngredient$GasStackIngredient
public "getOutputDefinition"(): $List<($BoxedChemicalStack)>
public "getItemInput"(): $ItemStackIngredient
public "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($ItemStack), ($GasStack)>
public "negate"(): $BiPredicate<($ItemStack), ($GasStack)>
public "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($ItemStack), ($GasStack)>
get "incomplete"(): boolean
get "gasInput"(): $ChemicalStackIngredient$GasStackIngredient
get "outputDefinition"(): $List<($BoxedChemicalStack)>
get "itemInput"(): $ItemStackIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalDissolutionRecipe$Type = ($ChemicalDissolutionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalDissolutionRecipe_ = $ChemicalDissolutionRecipe$Type;
}}
declare module "packages/mekanism/api/recipes/$ItemStackToEnergyRecipe" {
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"

export class $ItemStackToEnergyRecipe extends $MekanismRecipe implements $Predicate<($ItemStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $FloatingLong$Type)

public "getInput"(): $ItemStackIngredient
public "test"(arg0: $ItemStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getOutput"(arg0: $ItemStack$Type): $FloatingLong
public "getOutputDefinition"(): $List<($FloatingLong)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "input"(): $ItemStackIngredient
get "incomplete"(): boolean
get "outputDefinition"(): $List<($FloatingLong)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackToEnergyRecipe$Type = ($ItemStackToEnergyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackToEnergyRecipe_ = $ItemStackToEnergyRecipe$Type;
}}
declare module "packages/mekanism/api/chemical/$BasicChemicalTank" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$IChemicalHandler, $IChemicalHandler$Type} from "packages/mekanism/api/chemical/$IChemicalHandler"
import {$ChemicalAttributeValidator, $ChemicalAttributeValidator$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttributeValidator"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AutomationType, $AutomationType$Type} from "packages/mekanism/api/$AutomationType"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$IChemicalTank, $IChemicalTank$Type} from "packages/mekanism/api/chemical/$IChemicalTank"

export class $BasicChemicalTank<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>> implements $IChemicalTank<(CHEMICAL), (STACK)>, $IChemicalHandler<(CHEMICAL), (STACK)> {


public "getCapacity"(): long
public "extract"(arg0: long, arg1: $Action$Type, arg2: $AutomationType$Type): STACK
public "insert"(arg0: STACK, arg1: $Action$Type, arg2: $AutomationType$Type): STACK
public "isEmpty"(): boolean
public "getType"(): CHEMICAL
public "getStack"(): STACK
public "isValid"(arg0: STACK): boolean
public "isValid"(arg0: integer, arg1: STACK): boolean
public "setStack"(arg0: STACK): void
public "insertChemical"(arg0: integer, arg1: STACK, arg2: $Action$Type): STACK
public "onContentsChanged"(): void
public "setChemicalInTank"(arg0: integer, arg1: STACK): void
public "getAttributeValidator"(): $ChemicalAttributeValidator
public "growStack"(arg0: long, arg1: $Action$Type): long
public "getStored"(): long
public "setStackUnchecked"(arg0: STACK): void
public "isTypeEqual"(arg0: STACK): boolean
public "isTypeEqual"(arg0: CHEMICAL): boolean
public "getTanks"(): integer
public "getTankCapacity"(arg0: integer): long
public "getChemicalInTank"(arg0: integer): STACK
public "setStackSize"(arg0: long, arg1: $Action$Type): long
public "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): STACK
public "setEmpty"(): void
public "createStack"(arg0: STACK, arg1: long): STACK
public "getNeeded"(): long
public "shrinkStack"(arg0: long, arg1: $Action$Type): long
public "insertChemical"(arg0: STACK, arg1: $Action$Type): STACK
public "extractChemical"(arg0: long, arg1: $Action$Type): STACK
public "extractChemical"(arg0: STACK, arg1: $Action$Type): STACK
public "getEmptyStack"(): STACK
public "deserializeNBT"(arg0: $CompoundTag$Type): void
get "capacity"(): long
get "empty"(): boolean
get "type"(): CHEMICAL
get "stack"(): STACK
set "stack"(value: STACK)
get "attributeValidator"(): $ChemicalAttributeValidator
get "stored"(): long
set "stackUnchecked"(value: STACK)
get "tanks"(): integer
get "needed"(): long
get "emptyStack"(): STACK
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicChemicalTank$Type<CHEMICAL, STACK> = ($BasicChemicalTank<(CHEMICAL), (STACK)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicChemicalTank_<CHEMICAL, STACK> = $BasicChemicalTank$Type<(CHEMICAL), (STACK)>;
}}
declare module "packages/mekanism/api/recipes/$FluidToFluidRecipe" {
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FluidStackIngredient, $FluidStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$FluidStackIngredient"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $FluidToFluidRecipe extends $MekanismRecipe implements $Predicate<($FluidStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $FluidStackIngredient$Type, arg2: $FluidStack$Type)

public "getInput"(): $FluidStackIngredient
public "test"(arg0: $FluidStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getOutput"(arg0: $FluidStack$Type): $FluidStack
public "getOutputDefinition"(): $List<($FluidStack)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
get "input"(): $FluidStackIngredient
get "incomplete"(): boolean
get "outputDefinition"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidToFluidRecipe$Type = ($FluidToFluidRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidToFluidRecipe_ = $FluidToFluidRecipe$Type;
}}
declare module "packages/mekanism/api/chemical/slurry/$EmptySlurry" {
import {$Slurry, $Slurry$Type} from "packages/mekanism/api/chemical/slurry/$Slurry"

export class $EmptySlurry extends $Slurry {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptySlurry$Type = ($EmptySlurry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptySlurry_ = $EmptySlurry$Type;
}}
declare module "packages/mekanism/api/text/$APILang" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ILangEntry, $ILangEntry$Type} from "packages/mekanism/api/text/$ILangEntry"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$EnumColor, $EnumColor$Type} from "packages/mekanism/api/text/$EnumColor"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $APILang extends $Enum<($APILang)> implements $ILangEntry {
static readonly "UPGRADE_SPEED": $APILang
static readonly "UPGRADE_SPEED_DESCRIPTION": $APILang
static readonly "UPGRADE_ENERGY": $APILang
static readonly "UPGRADE_ENERGY_DESCRIPTION": $APILang
static readonly "UPGRADE_FILTER": $APILang
static readonly "UPGRADE_FILTER_DESCRIPTION": $APILang
static readonly "UPGRADE_GAS": $APILang
static readonly "UPGRADE_GAS_DESCRIPTION": $APILang
static readonly "UPGRADE_MUFFLING": $APILang
static readonly "UPGRADE_MUFFLING_DESCRIPTION": $APILang
static readonly "UPGRADE_ANCHOR": $APILang
static readonly "UPGRADE_ANCHOR_DESCRIPTION": $APILang
static readonly "UPGRADE_STONE_GENERATOR": $APILang
static readonly "UPGRADE_STONE_GENERATOR_DESCRIPTION": $APILang
static readonly "UPGRADE_MAX_INSTALLED": $APILang
static readonly "TRUE_LOWER": $APILang
static readonly "FALSE_LOWER": $APILang
static readonly "DOWN": $APILang
static readonly "UP": $APILang
static readonly "NORTH": $APILang
static readonly "SOUTH": $APILang
static readonly "WEST": $APILang
static readonly "EAST": $APILang
static readonly "FRONT": $APILang
static readonly "LEFT": $APILang
static readonly "RIGHT": $APILang
static readonly "BACK": $APILang
static readonly "TOP": $APILang
static readonly "BOTTOM": $APILang
static readonly "COLOR_BLACK": $APILang
static readonly "COLOR_DARK_BLUE": $APILang
static readonly "COLOR_DARK_GREEN": $APILang
static readonly "COLOR_DARK_AQUA": $APILang
static readonly "COLOR_DARK_RED": $APILang
static readonly "COLOR_PURPLE": $APILang
static readonly "COLOR_ORANGE": $APILang
static readonly "COLOR_GRAY": $APILang
static readonly "COLOR_DARK_GRAY": $APILang
static readonly "COLOR_INDIGO": $APILang
static readonly "COLOR_BRIGHT_GREEN": $APILang
static readonly "COLOR_AQUA": $APILang
static readonly "COLOR_RED": $APILang
static readonly "COLOR_PINK": $APILang
static readonly "COLOR_YELLOW": $APILang
static readonly "COLOR_WHITE": $APILang
static readonly "COLOR_BROWN": $APILang
static readonly "COLOR_BRIGHT_PINK": $APILang
static readonly "CHEMICAL_ATTRIBUTE_RADIATION": $APILang
static readonly "CHEMICAL_ATTRIBUTE_COOLANT_EFFICIENCY": $APILang
static readonly "CHEMICAL_ATTRIBUTE_COOLANT_ENTHALPY": $APILang
static readonly "CHEMICAL_ATTRIBUTE_FUEL_BURN_TICKS": $APILang
static readonly "CHEMICAL_ATTRIBUTE_FUEL_ENERGY_DENSITY": $APILang
static readonly "PUBLIC": $APILang
static readonly "TRUSTED": $APILang
static readonly "PRIVATE": $APILang


public static "values"(): ($APILang)[]
public static "valueOf"(arg0: string): $APILang
public "getTranslationKey"(): string
public "translate"(...arg0: (any)[]): $MutableComponent
public "translateColored"(arg0: $EnumColor$Type, ...arg1: (any)[]): $MutableComponent
public "translateColored"(arg0: $TextColor$Type, ...arg1: (any)[]): $MutableComponent
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APILang$Type = (("chemical_attribute_radiation") | ("color_indigo") | ("upgrade_energy_description") | ("down") | ("color_pink") | ("color_orange") | ("upgrade_stone_generator") | ("upgrade_muffling") | ("west") | ("up") | ("upgrade_anchor") | ("color_red") | ("upgrade_filter") | ("upgrade_gas") | ("bottom") | ("color_yellow") | ("color_black") | ("color_dark_red") | ("color_dark_gray") | ("left") | ("color_bright_green") | ("chemical_attribute_coolant_efficiency") | ("upgrade_gas_description") | ("chemical_attribute_coolant_enthalpy") | ("upgrade_stone_generator_description") | ("private") | ("upgrade_max_installed") | ("south") | ("north") | ("back") | ("color_aqua") | ("upgrade_filter_description") | ("true_lower") | ("east") | ("upgrade_speed") | ("top") | ("color_dark_green") | ("public") | ("upgrade_anchor_description") | ("color_dark_blue") | ("chemical_attribute_fuel_burn_ticks") | ("color_brown") | ("upgrade_energy") | ("color_gray") | ("color_white") | ("color_purple") | ("right") | ("upgrade_speed_description") | ("upgrade_muffling_description") | ("chemical_attribute_fuel_energy_density") | ("false_lower") | ("color_dark_aqua") | ("trusted") | ("color_bright_pink") | ("front")) | ($APILang);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APILang_ = $APILang$Type;
}}
declare module "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InputIngredient, $InputIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$InputIngredient"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ChemicalStackIngredient<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>> extends $InputIngredient<(STACK)> {

 "testType"(arg0: CHEMICAL): boolean
 "write"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(): $JsonElement
 "getRepresentations"(): $List<(STACK)>
 "hasNoMatchingInstances"(): boolean
 "getNeededAmount"(arg0: STACK): long
 "testType"(arg0: STACK): boolean
 "getMatchingInstance"(arg0: STACK): STACK
 "test"(arg0: STACK): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<(STACK)>
 "negate"(): $Predicate<(STACK)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<(STACK)>
}

export namespace $ChemicalStackIngredient {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<(STACK)>
function isEqual<T>(arg0: any): $Predicate<(STACK)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalStackIngredient$Type<CHEMICAL, STACK> = ($ChemicalStackIngredient<(CHEMICAL), (STACK)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalStackIngredient_<CHEMICAL, STACK> = $ChemicalStackIngredient$Type<(CHEMICAL), (STACK)>;
}}
declare module "packages/mekanism/api/recipes/$FluidSlurryToSlurryRecipe" {
import {$FluidStackIngredient, $FluidStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$FluidStackIngredient"
import {$SlurryStack, $SlurryStack$Type} from "packages/mekanism/api/chemical/slurry/$SlurryStack"
import {$ChemicalStackIngredient$SlurryStackIngredient, $ChemicalStackIngredient$SlurryStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$SlurryStackIngredient"
import {$Slurry, $Slurry$Type} from "packages/mekanism/api/chemical/slurry/$Slurry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidChemicalToChemicalRecipe, $FluidChemicalToChemicalRecipe$Type} from "packages/mekanism/api/recipes/chemical/$FluidChemicalToChemicalRecipe"

export class $FluidSlurryToSlurryRecipe extends $FluidChemicalToChemicalRecipe<($Slurry), ($SlurryStack), ($ChemicalStackIngredient$SlurryStackIngredient)> {

constructor(arg0: $ResourceLocation$Type, arg1: $FluidStackIngredient$Type, arg2: $ChemicalStackIngredient$SlurryStackIngredient$Type, arg3: $SlurryStack$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSlurryToSlurryRecipe$Type = ($FluidSlurryToSlurryRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidSlurryToSlurryRecipe_ = $FluidSlurryToSlurryRecipe$Type;
}}
declare module "packages/mekanism/api/fluid/$IExtendedFluidTank" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AutomationType, $AutomationType$Type} from "packages/mekanism/api/$AutomationType"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"
import {$IContentsListener, $IContentsListener$Type} from "packages/mekanism/api/$IContentsListener"

export interface $IExtendedFluidTank extends $IFluidTank, $INBTSerializable<($CompoundTag)>, $IContentsListener {

/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "extract"(arg0: integer, arg1: $Action$Type, arg2: $AutomationType$Type): $FluidStack
 "insert"(arg0: $FluidStack$Type, arg1: $Action$Type, arg2: $AutomationType$Type): $FluidStack
 "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "isFluidEqual"(arg0: $FluidStack$Type): boolean
 "setEmpty"(): void
 "setStack"(arg0: $FluidStack$Type): void
 "growStack"(arg0: integer, arg1: $Action$Type): integer
 "setStackUnchecked"(arg0: $FluidStack$Type): void
 "getNeeded"(): integer
 "setStackSize"(arg0: integer, arg1: $Action$Type): integer
 "shrinkStack"(arg0: integer, arg1: $Action$Type): integer
 "getCapacity"(): integer
 "getFluidAmount"(): integer
 "getFluid"(): $FluidStack
 "isFluidValid"(arg0: $FluidStack$Type): boolean
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "onContentsChanged"(): void
}

export namespace $IExtendedFluidTank {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedFluidTank$Type = ($IExtendedFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedFluidTank_ = $IExtendedFluidTank$Type;
}}
declare module "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$SlurryStackIngredient" {
import {$ChemicalStackIngredient, $ChemicalStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$SlurryStack, $SlurryStack$Type} from "packages/mekanism/api/chemical/slurry/$SlurryStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Slurry, $Slurry$Type} from "packages/mekanism/api/chemical/slurry/$Slurry"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ChemicalStackIngredient$SlurryStackIngredient extends $ChemicalStackIngredient<($Slurry), ($SlurryStack)> {

 "testType"(arg0: $Slurry$Type): boolean
 "write"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(): $JsonElement
 "getRepresentations"(): $List<($SlurryStack)>
 "hasNoMatchingInstances"(): boolean
 "getNeededAmount"(arg0: $SlurryStack$Type): long
 "testType"(arg0: $SlurryStack$Type): boolean
 "getMatchingInstance"(arg0: $SlurryStack$Type): $SlurryStack
 "test"(arg0: $SlurryStack$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($SlurryStack)>
 "negate"(): $Predicate<($SlurryStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($SlurryStack)>
}

export namespace $ChemicalStackIngredient$SlurryStackIngredient {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($SlurryStack)>
function isEqual<T>(arg0: any): $Predicate<($SlurryStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalStackIngredient$SlurryStackIngredient$Type = ($ChemicalStackIngredient$SlurryStackIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalStackIngredient$SlurryStackIngredient_ = $ChemicalStackIngredient$SlurryStackIngredient$Type;
}}
declare module "packages/mekanism/api/heat/$ISidedHeatHandler" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IHeatHandler, $IHeatHandler$Type} from "packages/mekanism/api/heat/$IHeatHandler"

export interface $ISidedHeatHandler extends $IHeatHandler {

 "getTemperature"(arg0: integer): double
 "getTemperature"(arg0: integer, arg1: $Direction$Type): double
 "getTotalHeatCapacity"(arg0: $Direction$Type): double
 "getInverseConduction"(arg0: integer, arg1: $Direction$Type): double
 "getInverseConduction"(arg0: integer): double
 "getTotalTemperature"(arg0: $Direction$Type): double
 "getHeatCapacitorCount"(): integer
 "getHeatCapacitorCount"(arg0: $Direction$Type): integer
 "getTotalInverseConductionCoefficient"(arg0: $Direction$Type): double
 "getHeatSideFor"(): $Direction
 "getHeatCapacity"(arg0: integer): double
 "getHeatCapacity"(arg0: integer, arg1: $Direction$Type): double
 "handleHeat"(arg0: double, arg1: $Direction$Type): void
 "handleHeat"(arg0: integer, arg1: double): void
 "handleHeat"(arg0: integer, arg1: double, arg2: $Direction$Type): void
 "getTotalInverseConduction"(): double
 "getTotalHeatCapacity"(): double
 "getTotalTemperature"(): double
 "handleHeat"(arg0: double): void
}

export namespace $ISidedHeatHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedHeatHandler$Type = ($ISidedHeatHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedHeatHandler_ = $ISidedHeatHandler$Type;
}}
declare module "packages/mekanism/api/recipes/ingredients/$FluidStackIngredient" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InputIngredient, $InputIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$InputIngredient"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"

export class $FluidStackIngredient implements $InputIngredient<($FluidStack)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type): void
public "serialize"(): $JsonElement
public "getRepresentations"(): $List<($FluidStack)>
public "hasNoMatchingInstances"(): boolean
public "getNeededAmount"(arg0: $FluidStack$Type): long
public "testType"(arg0: $FluidStack$Type): boolean
public "getMatchingInstance"(arg0: $FluidStack$Type): $FluidStack
public "test"(arg0: $FluidStack$Type): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
get "representations"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStackIngredient$Type = ($FluidStackIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStackIngredient_ = $FluidStackIngredient$Type;
}}
declare module "packages/mekanism/api/chemical/gas/$IGasHandler$ISidedGasHandler" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$ISidedChemicalHandler, $ISidedChemicalHandler$Type} from "packages/mekanism/api/chemical/$ISidedChemicalHandler"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$IGasHandler, $IGasHandler$Type} from "packages/mekanism/api/chemical/gas/$IGasHandler"

export interface $IGasHandler$ISidedGasHandler extends $ISidedChemicalHandler<($Gas), ($GasStack)>, $IGasHandler {

 "isValid"(arg0: integer, arg1: $GasStack$Type): boolean
 "isValid"(arg0: integer, arg1: $GasStack$Type, arg2: $Direction$Type): boolean
 "insertChemical"(arg0: $GasStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $GasStack
 "insertChemical"(arg0: integer, arg1: $GasStack$Type, arg2: $Direction$Type, arg3: $Action$Type): $GasStack
 "insertChemical"(arg0: integer, arg1: $GasStack$Type, arg2: $Action$Type): $GasStack
 "setChemicalInTank"(arg0: integer, arg1: $GasStack$Type): void
 "setChemicalInTank"(arg0: integer, arg1: $GasStack$Type, arg2: $Direction$Type): void
 "getSideFor"(): $Direction
 "getTanks"(): integer
 "getTanks"(arg0: $Direction$Type): integer
 "getTankCapacity"(arg0: integer): long
 "getTankCapacity"(arg0: integer, arg1: $Direction$Type): long
 "getChemicalInTank"(arg0: integer, arg1: $Direction$Type): $GasStack
 "getChemicalInTank"(arg0: integer): $GasStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Direction$Type, arg3: $Action$Type): $GasStack
 "extractChemical"(arg0: long, arg1: $Direction$Type, arg2: $Action$Type): $GasStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): $GasStack
 "extractChemical"(arg0: $GasStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $GasStack
 "insertChemical"(arg0: $GasStack$Type, arg1: $Action$Type): $GasStack
 "extractChemical"(arg0: long, arg1: $Action$Type): $GasStack
 "extractChemical"(arg0: $GasStack$Type, arg1: $Action$Type): $GasStack
 "getEmptyStack"(): $GasStack
}

export namespace $IGasHandler$ISidedGasHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGasHandler$ISidedGasHandler$Type = ($IGasHandler$ISidedGasHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGasHandler$ISidedGasHandler_ = $IGasHandler$ISidedGasHandler$Type;
}}
declare module "packages/mekanism/api/radial/$RadialData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$INestedRadialMode, $INestedRadialMode$Type} from "packages/mekanism/api/radial/mode/$INestedRadialMode"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRadialMode, $IRadialMode$Type} from "packages/mekanism/api/radial/mode/$IRadialMode"

export class $RadialData<MODE extends $IRadialMode> {


public "getIdentifier"(): $ResourceLocation
public "index"(arg0: $List$Type<(MODE)>, arg1: MODE): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "fromIdentifier"(arg0: $ResourceLocation$Type): $INestedRadialMode
public "getModes"(): $List<(MODE)>
public "getDefaultMode"(arg0: $List$Type<(MODE)>): MODE
public "indexNullable"(arg0: $List$Type<(MODE)>, arg1: MODE): integer
public "tryGetNetworkRepresentation"(arg0: $IRadialMode$Type): integer
public "fromNetworkRepresentation"(arg0: integer): MODE
public "getNetworkRepresentation"(arg0: MODE): integer
get "identifier"(): $ResourceLocation
get "modes"(): $List<(MODE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadialData$Type<MODE> = ($RadialData<(MODE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadialData_<MODE> = $RadialData$Type<(MODE)>;
}}
declare module "packages/mekanism/api/gear/$ICustomModule" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IModule, $IModule$Type} from "packages/mekanism/api/gear/$IModule"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICustomModule$ModuleDispenseResult, $ICustomModule$ModuleDispenseResult$Type} from "packages/mekanism/api/gear/$ICustomModule$ModuleDispenseResult"
import {$IHUDElement, $IHUDElement$Type} from "packages/mekanism/api/gear/$IHUDElement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ModuleConfigItemCreator, $ModuleConfigItemCreator$Type} from "packages/mekanism/api/gear/config/$ModuleConfigItemCreator"
import {$ICustomModule$ModuleDamageAbsorbInfo, $ICustomModule$ModuleDamageAbsorbInfo$Type} from "packages/mekanism/api/gear/$ICustomModule$ModuleDamageAbsorbInfo"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockSource, $BlockSource$Type} from "packages/net/minecraft/core/$BlockSource"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$NestedRadialMode, $NestedRadialMode$Type} from "packages/mekanism/api/radial/mode/$NestedRadialMode"
import {$IRadialMode, $IRadialMode$Type} from "packages/mekanism/api/radial/mode/$IRadialMode"
import {$RadialData, $RadialData$Type} from "packages/mekanism/api/radial/$RadialData"

export interface $ICustomModule<MODULE extends $ICustomModule<(MODULE)>> {

 "setMode"<MODE extends $IRadialMode>(arg0: $IModule$Type<(MODULE)>, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $RadialData$Type<(MODE)>, arg4: MODE): boolean
 "getMode"<MODE extends $IRadialMode>(arg0: $IModule$Type<(MODULE)>, arg1: $ItemStack$Type, arg2: $RadialData$Type<(MODE)>): MODE
 "init"(arg0: $IModule$Type<(MODULE)>, arg1: $ModuleConfigItemCreator$Type): void
 "getDamageAbsorbInfo"(arg0: $IModule$Type<(MODULE)>, arg1: $DamageSource$Type): $ICustomModule$ModuleDamageAbsorbInfo
 "onItemUse"(arg0: $IModule$Type<(MODULE)>, arg1: $UseOnContext$Type): $InteractionResult
 "onRemoved"(arg0: $IModule$Type<(MODULE)>, arg1: boolean): void
 "onAdded"(arg0: $IModule$Type<(MODULE)>, arg1: boolean): void
 "addHUDElements"(arg0: $IModule$Type<(MODULE)>, arg1: $Player$Type, arg2: $Consumer$Type<($IHUDElement$Type)>): void
 "canPerformAction"(arg0: $IModule$Type<(MODULE)>, arg1: $ToolAction$Type): boolean
 "tickServer"(arg0: $IModule$Type<(MODULE)>, arg1: $Player$Type): void
 "onInteract"(arg0: $IModule$Type<(MODULE)>, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
 "getModeScrollComponent"(arg0: $IModule$Type<(MODULE)>, arg1: $ItemStack$Type): $Component
 "onDispense"(arg0: $IModule$Type<(MODULE)>, arg1: $BlockSource$Type): $ICustomModule$ModuleDispenseResult
 "addRadialModes"(arg0: $IModule$Type<(MODULE)>, arg1: $ItemStack$Type, arg2: $Consumer$Type<($NestedRadialMode$Type)>): void
 "changeMode"(arg0: $IModule$Type<(MODULE)>, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: integer, arg4: boolean): void
 "addHUDStrings"(arg0: $IModule$Type<(MODULE)>, arg1: $Player$Type, arg2: $Consumer$Type<($Component$Type)>): void
 "onEnabledStateChange"(arg0: $IModule$Type<(MODULE)>): void
 "canChangeModeWhenDisabled"(arg0: $IModule$Type<(MODULE)>): boolean
 "canChangeRadialModeWhenDisabled"(arg0: $IModule$Type<(MODULE)>): boolean
 "tickClient"(arg0: $IModule$Type<(MODULE)>, arg1: $Player$Type): void
}

export namespace $ICustomModule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomModule$Type<MODULE> = ($ICustomModule<(MODULE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomModule_<MODULE> = $ICustomModule$Type<(MODULE)>;
}}
declare module "packages/mekanism/api/chemical/$IChemicalTank" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$ChemicalAttributeValidator, $ChemicalAttributeValidator$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttributeValidator"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AutomationType, $AutomationType$Type} from "packages/mekanism/api/$AutomationType"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IEmptyStackProvider, $IEmptyStackProvider$Type} from "packages/mekanism/api/chemical/$IEmptyStackProvider"
import {$IContentsListener, $IContentsListener$Type} from "packages/mekanism/api/$IContentsListener"

export interface $IChemicalTank<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>> extends $IEmptyStackProvider<(CHEMICAL), (STACK)>, $INBTSerializable<($CompoundTag)>, $IContentsListener {

 "getCapacity"(): long
 "extract"(arg0: long, arg1: $Action$Type, arg2: $AutomationType$Type): STACK
 "insert"(arg0: STACK, arg1: $Action$Type, arg2: $AutomationType$Type): STACK
 "isEmpty"(): boolean
 "getType"(): CHEMICAL
 "getStack"(): STACK
 "isValid"(arg0: STACK): boolean
 "setEmpty"(): void
 "setStack"(arg0: STACK): void
 "getAttributeValidator"(): $ChemicalAttributeValidator
 "growStack"(arg0: long, arg1: $Action$Type): long
 "getStored"(): long
 "setStackUnchecked"(arg0: STACK): void
 "createStack"(arg0: STACK, arg1: long): STACK
 "isTypeEqual"(arg0: CHEMICAL): boolean
 "isTypeEqual"(arg0: STACK): boolean
 "serializeNBT"(): $CompoundTag
 "getNeeded"(): long
 "setStackSize"(arg0: long, arg1: $Action$Type): long
 "shrinkStack"(arg0: long, arg1: $Action$Type): long
 "getEmptyStack"(): STACK
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "onContentsChanged"(): void
}

export namespace $IChemicalTank {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChemicalTank$Type<CHEMICAL, STACK> = ($IChemicalTank<(CHEMICAL), (STACK)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChemicalTank_<CHEMICAL, STACK> = $IChemicalTank$Type<(CHEMICAL), (STACK)>;
}}
declare module "packages/mekanism/api/chemical/infuse/$IInfusionHandler" {
import {$IChemicalHandler, $IChemicalHandler$Type} from "packages/mekanism/api/chemical/$IChemicalHandler"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"
import {$IEmptyInfusionProvider, $IEmptyInfusionProvider$Type} from "packages/mekanism/api/chemical/infuse/$IEmptyInfusionProvider"
import {$InfusionStack, $InfusionStack$Type} from "packages/mekanism/api/chemical/infuse/$InfusionStack"

export interface $IInfusionHandler extends $IChemicalHandler<($InfuseType), ($InfusionStack)>, $IEmptyInfusionProvider {

 "isValid"(arg0: integer, arg1: $InfusionStack$Type): boolean
 "insertChemical"(arg0: integer, arg1: $InfusionStack$Type, arg2: $Action$Type): $InfusionStack
 "insertChemical"(arg0: $InfusionStack$Type, arg1: $Action$Type): $InfusionStack
 "setChemicalInTank"(arg0: integer, arg1: $InfusionStack$Type): void
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): long
 "getChemicalInTank"(arg0: integer): $InfusionStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): $InfusionStack
 "extractChemical"(arg0: long, arg1: $Action$Type): $InfusionStack
 "extractChemical"(arg0: $InfusionStack$Type, arg1: $Action$Type): $InfusionStack
 "getEmptyStack"(): $InfusionStack
}

export namespace $IInfusionHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInfusionHandler$Type = ($IInfusionHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInfusionHandler_ = $IInfusionHandler$Type;
}}
declare module "packages/mekanism/api/$Action" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export class $Action extends $Enum<($Action)> {
static readonly "EXECUTE": $Action
static readonly "SIMULATE": $Action


public static "get"(arg0: boolean): $Action
public static "values"(): ($Action)[]
public static "valueOf"(arg0: string): $Action
public "execute"(): boolean
public "combine"(arg0: boolean): $Action
public "simulate"(): boolean
public static "fromFluidAction"(arg0: $IFluidHandler$FluidAction$Type): $Action
public "toFluidAction"(): $IFluidHandler$FluidAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Action$Type = (("execute") | ("simulate")) | ($Action);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Action_ = $Action$Type;
}}
declare module "packages/mekanism/api/chemical/attribute/$ChemicalAttributeValidator" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$ChemicalAttribute, $ChemicalAttribute$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttribute"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $ChemicalAttributeValidator {

 "validate"(arg0: $ChemicalAttribute$Type): boolean
 "process"(arg0: $ChemicalStack$Type<(any)>): boolean
 "process"(arg0: $Chemical$Type<(any)>): boolean

(arg0: $ChemicalAttribute$Type): boolean
}

export namespace $ChemicalAttributeValidator {
const DEFAULT: $ChemicalAttributeValidator
const ALWAYS_ALLOW: $ChemicalAttributeValidator
function create(...arg0: ($Class$Type<(any)>)[]): $ChemicalAttributeValidator
function createStrict(...arg0: ($Class$Type<(any)>)[]): $ChemicalAttributeValidator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalAttributeValidator$Type = ($ChemicalAttributeValidator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalAttributeValidator_ = $ChemicalAttributeValidator$Type;
}}
declare module "packages/mekanism/api/recipes/chemical/$FluidChemicalToChemicalRecipe" {
import {$ChemicalStackIngredient, $ChemicalStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FluidStackIngredient, $FluidStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$FluidStackIngredient"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $FluidChemicalToChemicalRecipe<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>, INGREDIENT extends $ChemicalStackIngredient<(CHEMICAL), (STACK)>> extends $MekanismRecipe implements $BiPredicate<($FluidStack), (STACK)> {

constructor(arg0: $ResourceLocation$Type, arg1: $FluidStackIngredient$Type, arg2: INGREDIENT, arg3: STACK)

public "test"(arg0: $FluidStack$Type, arg1: STACK): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getOutput"(arg0: $FluidStack$Type, arg1: STACK): STACK
public "getOutputDefinition"(): $List<(STACK)>
public "getChemicalInput"(): INGREDIENT
public "getFluidInput"(): $FluidStackIngredient
public "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($FluidStack), (STACK)>
public "negate"(): $BiPredicate<($FluidStack), (STACK)>
public "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($FluidStack), (STACK)>
get "incomplete"(): boolean
get "outputDefinition"(): $List<(STACK)>
get "chemicalInput"(): INGREDIENT
get "fluidInput"(): $FluidStackIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidChemicalToChemicalRecipe$Type<CHEMICAL, STACK, INGREDIENT> = ($FluidChemicalToChemicalRecipe<(CHEMICAL), (STACK), (INGREDIENT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidChemicalToChemicalRecipe_<CHEMICAL, STACK, INGREDIENT> = $FluidChemicalToChemicalRecipe$Type<(CHEMICAL), (STACK), (INGREDIENT)>;
}}
declare module "packages/mekanism/api/fluid/$IMekanismFluidHandler" {
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$ISidedFluidHandler, $ISidedFluidHandler$Type} from "packages/mekanism/api/fluid/$ISidedFluidHandler"
import {$IContentsListener, $IContentsListener$Type} from "packages/mekanism/api/$IContentsListener"
import {$IExtendedFluidTank, $IExtendedFluidTank$Type} from "packages/mekanism/api/fluid/$IExtendedFluidTank"

export interface $IMekanismFluidHandler extends $ISidedFluidHandler, $IContentsListener {

 "getFluidInTank"(arg0: integer, arg1: $Direction$Type): $FluidStack
 "getTanks"(arg0: $Direction$Type): integer
 "getTankCapacity"(arg0: integer, arg1: $Direction$Type): integer
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type, arg2: $Direction$Type): boolean
 "getFluidTanks"(arg0: $Direction$Type): $List<($IExtendedFluidTank)>
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Direction$Type, arg3: $Action$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$Type, arg2: $Direction$Type, arg3: $Action$Type): $FluidStack
 "canHandleFluid"(): boolean
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type, arg2: $Direction$Type): void
 "getFluidTank"(arg0: integer, arg1: $Direction$Type): $IExtendedFluidTank
 "getFluidInTank"(arg0: integer): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "extractFluid"(arg0: $FluidStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Action$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Direction$Type, arg2: $Action$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$Type, arg2: $Action$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $FluidStack
 "getFluidSideFor"(): $Direction
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type): void
 "onContentsChanged"(): void
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "extractFluid"(arg0: $FluidStack$Type, arg1: $Action$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Action$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$Type, arg1: $Action$Type): $FluidStack
}

export namespace $IMekanismFluidHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMekanismFluidHandler$Type = ($IMekanismFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMekanismFluidHandler_ = $IMekanismFluidHandler$Type;
}}
declare module "packages/mekanism/api/text/$IHasTranslationKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHasTranslationKey {

 "getTranslationKey"(): string

(): string
}

export namespace $IHasTranslationKey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasTranslationKey$Type = ($IHasTranslationKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasTranslationKey_ = $IHasTranslationKey$Type;
}}
declare module "packages/mekanism/api/providers/$ISlurryProvider" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SlurryStack, $SlurryStack$Type} from "packages/mekanism/api/chemical/slurry/$SlurryStack"
import {$IChemicalProvider, $IChemicalProvider$Type} from "packages/mekanism/api/providers/$IChemicalProvider"
import {$Slurry, $Slurry$Type} from "packages/mekanism/api/chemical/slurry/$Slurry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ISlurryProvider extends $IChemicalProvider<($Slurry)> {

 "getStack"(arg0: long): $SlurryStack
 "getChemical"(): $Slurry
 "getRegistryName"(): $ResourceLocation
 "getTranslationKey"(): string
 "getTextComponent"(): $Component
 "getName"(): string

(arg0: long): $SlurryStack
}

export namespace $ISlurryProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlurryProvider$Type = ($ISlurryProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlurryProvider_ = $ISlurryProvider$Type;
}}
declare module "packages/mekanism/api/gear/$ModuleData$ModuleDataBuilder" {
import {$ModuleData$ExclusiveFlag, $ModuleData$ExclusiveFlag$Type} from "packages/mekanism/api/gear/$ModuleData$ExclusiveFlag"
import {$IItemProvider, $IItemProvider$Type} from "packages/mekanism/api/providers/$IItemProvider"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$ICustomModule, $ICustomModule$Type} from "packages/mekanism/api/gear/$ICustomModule"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $ModuleData$ModuleDataBuilder<MODULE extends $ICustomModule<(MODULE)>> {


public "exclusive"(...arg0: ($ModuleData$ExclusiveFlag$Type)[]): $ModuleData$ModuleDataBuilder<(MODULE)>
public "exclusive"(arg0: integer): $ModuleData$ModuleDataBuilder<(MODULE)>
public static "marker"(arg0: $IItemProvider$Type): $ModuleData$ModuleDataBuilder<(any)>
public "maxStackSize"(arg0: integer): $ModuleData$ModuleDataBuilder<(MODULE)>
public static "custom"<MODULE extends $ICustomModule<(MODULE)>>(arg0: $NonNullSupplier$Type<(MODULE)>, arg1: $IItemProvider$Type): $ModuleData$ModuleDataBuilder<(MODULE)>
public "rarity"(arg0: $Rarity$Type): $ModuleData$ModuleDataBuilder<(MODULE)>
public "noDisable"(): $ModuleData$ModuleDataBuilder<(MODULE)>
public "disabledByDefault"(): $ModuleData$ModuleDataBuilder<(MODULE)>
public "rendersHUD"(): $ModuleData$ModuleDataBuilder<(MODULE)>
public "modeChangeDisabledByDefault"(): $ModuleData$ModuleDataBuilder<(MODULE)>
public "handlesModeChange"(): $ModuleData$ModuleDataBuilder<(MODULE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleData$ModuleDataBuilder$Type<MODULE> = ($ModuleData$ModuleDataBuilder<(MODULE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleData$ModuleDataBuilder_<MODULE> = $ModuleData$ModuleDataBuilder$Type<(MODULE)>;
}}
declare module "packages/mekanism/api/chemical/pigment/$PigmentBuilder" {
import {$ChemicalBuilder, $ChemicalBuilder$Type} from "packages/mekanism/api/chemical/$ChemicalBuilder"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PigmentBuilder extends $ChemicalBuilder<($Pigment), ($PigmentBuilder)> {


public static "builder"(): $PigmentBuilder
public static "builder"(arg0: $ResourceLocation$Type): $PigmentBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PigmentBuilder$Type = ($PigmentBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PigmentBuilder_ = $PigmentBuilder$Type;
}}
declare module "packages/mekanism/api/providers/$IBaseProvider" {
import {$IHasTranslationKey, $IHasTranslationKey$Type} from "packages/mekanism/api/text/$IHasTranslationKey"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHasTextComponent, $IHasTextComponent$Type} from "packages/mekanism/api/text/$IHasTextComponent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IBaseProvider extends $IHasTextComponent, $IHasTranslationKey {

 "getName"(): string
 "getRegistryName"(): $ResourceLocation
 "getTextComponent"(): $Component
 "getTranslationKey"(): string
}

export namespace $IBaseProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBaseProvider$Type = ($IBaseProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBaseProvider_ = $IBaseProvider$Type;
}}
declare module "packages/mekanism/api/$IConfigCardAccess" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"

export interface $IConfigCardAccess {

 "getConfigurationDataType"(): $BlockEntityType<(any)>
 "isConfigurationDataCompatible"(arg0: $BlockEntityType$Type<(any)>): boolean
 "configurationDataSet"(): void
 "getConfigurationData"(arg0: $Player$Type): $CompoundTag
 "setConfigurationData"(arg0: $Player$Type, arg1: $CompoundTag$Type): void
 "getConfigCardName"(): string
}

export namespace $IConfigCardAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigCardAccess$Type = ($IConfigCardAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigCardAccess_ = $IConfigCardAccess$Type;
}}
declare module "packages/mekanism/api/chemical/pigment/$Pigment" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$PigmentBuilder, $PigmentBuilder$Type} from "packages/mekanism/api/chemical/pigment/$PigmentBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IPigmentProvider, $IPigmentProvider$Type} from "packages/mekanism/api/providers/$IPigmentProvider"
import {$PigmentStack, $PigmentStack$Type} from "packages/mekanism/api/chemical/pigment/$PigmentStack"

export class $Pigment extends $Chemical<($Pigment)> implements $IPigmentProvider {

constructor(arg0: $PigmentBuilder$Type)

public "toString"(): string
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "isEmptyType"(): boolean
public "getRegistryName"(): $ResourceLocation
public static "readFromNBT"(arg0: $CompoundTag$Type): $Pigment
public static "getFromRegistry"(arg0: $ResourceLocation$Type): $Pigment
public "getStack"(arg0: long): $PigmentStack
get "emptyType"(): boolean
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pigment$Type = ($Pigment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pigment_ = $Pigment$Type;
}}
declare module "packages/mekanism/api/recipes/$ItemStackToItemStackRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemStackToItemStackRecipe extends $MekanismRecipe implements $Predicate<($ItemStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $ItemStack$Type)

public "getInput"(): $ItemStackIngredient
public "test"(arg0: $ItemStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOutput"(arg0: $ItemStack$Type): $ItemStack
public "getOutputDefinition"(): $List<($ItemStack)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "input"(): $ItemStackIngredient
get "incomplete"(): boolean
get "outputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackToItemStackRecipe$Type = ($ItemStackToItemStackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackToItemStackRecipe_ = $ItemStackToItemStackRecipe$Type;
}}
declare module "packages/mekanism/api/chemical/$IChemicalHandler" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$IEmptyStackProvider, $IEmptyStackProvider$Type} from "packages/mekanism/api/chemical/$IEmptyStackProvider"

export interface $IChemicalHandler<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>> extends $IEmptyStackProvider<(CHEMICAL), (STACK)> {

 "isValid"(arg0: integer, arg1: STACK): boolean
 "insertChemical"(arg0: integer, arg1: STACK, arg2: $Action$Type): STACK
 "insertChemical"(arg0: STACK, arg1: $Action$Type): STACK
 "setChemicalInTank"(arg0: integer, arg1: STACK): void
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): long
 "getChemicalInTank"(arg0: integer): STACK
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): STACK
 "extractChemical"(arg0: long, arg1: $Action$Type): STACK
 "extractChemical"(arg0: STACK, arg1: $Action$Type): STACK
 "getEmptyStack"(): STACK
}

export namespace $IChemicalHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChemicalHandler$Type<CHEMICAL, STACK> = ($IChemicalHandler<(CHEMICAL), (STACK)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChemicalHandler_<CHEMICAL, STACK> = $IChemicalHandler$Type<(CHEMICAL), (STACK)>;
}}
declare module "packages/mekanism/api/chemical/gas/$IGasTank" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ChemicalAttributeValidator, $ChemicalAttributeValidator$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttributeValidator"
import {$AutomationType, $AutomationType$Type} from "packages/mekanism/api/$AutomationType"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$IChemicalTank, $IChemicalTank$Type} from "packages/mekanism/api/chemical/$IChemicalTank"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$IEmptyGasProvider, $IEmptyGasProvider$Type} from "packages/mekanism/api/chemical/gas/$IEmptyGasProvider"

export interface $IGasTank extends $IChemicalTank<($Gas), ($GasStack)>, $IEmptyGasProvider {

 "createStack"(arg0: $GasStack$Type, arg1: long): $GasStack
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getCapacity"(): long
 "extract"(arg0: long, arg1: $Action$Type, arg2: $AutomationType$Type): $GasStack
 "insert"(arg0: $GasStack$Type, arg1: $Action$Type, arg2: $AutomationType$Type): $GasStack
 "isEmpty"(): boolean
 "getType"(): $Gas
 "getStack"(): $GasStack
 "isValid"(arg0: $GasStack$Type): boolean
 "setEmpty"(): void
 "setStack"(arg0: $GasStack$Type): void
 "getAttributeValidator"(): $ChemicalAttributeValidator
 "growStack"(arg0: long, arg1: $Action$Type): long
 "getStored"(): long
 "setStackUnchecked"(arg0: $GasStack$Type): void
 "isTypeEqual"(arg0: $Gas$Type): boolean
 "isTypeEqual"(arg0: $GasStack$Type): boolean
 "serializeNBT"(): $CompoundTag
 "getNeeded"(): long
 "setStackSize"(arg0: long, arg1: $Action$Type): long
 "shrinkStack"(arg0: long, arg1: $Action$Type): long
 "getEmptyStack"(): $GasStack
 "onContentsChanged"(): void
}

export namespace $IGasTank {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGasTank$Type = ($IGasTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGasTank_ = $IGasTank$Type;
}}
declare module "packages/mekanism/api/$Upgrade" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IHasTranslationKey, $IHasTranslationKey$Type} from "packages/mekanism/api/text/$IHasTranslationKey"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumColor, $EnumColor$Type} from "packages/mekanism/api/text/$EnumColor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Upgrade extends $Enum<($Upgrade)> implements $IHasTranslationKey {
static readonly "SPEED": $Upgrade
static readonly "ENERGY": $Upgrade
static readonly "FILTER": $Upgrade
static readonly "GAS": $Upgrade
static readonly "MUFFLING": $Upgrade
static readonly "ANCHOR": $Upgrade
static readonly "STONE_GENERATOR": $Upgrade


public "getDescription"(): $Component
public static "values"(): ($Upgrade)[]
public static "valueOf"(arg0: string): $Upgrade
public "getTag"(arg0: integer): $CompoundTag
public "getMax"(): integer
public static "saveMap"(arg0: $Map$Type<($Upgrade$Type), (integer)>, arg1: $CompoundTag$Type): void
public "getRawName"(): string
public "getColor"(): $EnumColor
public static "buildMap"(arg0: $CompoundTag$Type): $Map<($Upgrade), (integer)>
public "getTranslationKey"(): string
public static "byIndexStatic"(arg0: integer): $Upgrade
get "description"(): $Component
get "max"(): integer
get "rawName"(): string
get "color"(): $EnumColor
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Upgrade$Type = (("filter") | ("stone_generator") | ("anchor") | ("gas") | ("muffling") | ("speed") | ("energy")) | ($Upgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Upgrade_ = $Upgrade$Type;
}}
declare module "packages/mekanism/api/recipes/$ItemStackToGasRecipe" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStackToChemicalRecipe, $ItemStackToChemicalRecipe$Type} from "packages/mekanism/api/recipes/chemical/$ItemStackToChemicalRecipe"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemStackToGasRecipe extends $ItemStackToChemicalRecipe<($Gas), ($GasStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $GasStack$Type)

public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackToGasRecipe$Type = ($ItemStackToGasRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackToGasRecipe_ = $ItemStackToGasRecipe$Type;
}}
declare module "packages/mekanism/api/inventory/qio/$IQIOFrequency" {
import {$ObjLongConsumer, $ObjLongConsumer$Type} from "packages/java/util/function/$ObjLongConsumer"
import {$SecurityMode, $SecurityMode$Type} from "packages/mekanism/api/security/$SecurityMode"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$IHashedItem, $IHashedItem$Type} from "packages/mekanism/api/inventory/$IHashedItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IFrequency, $IFrequency$Type} from "packages/mekanism/api/$IFrequency"

export interface $IQIOFrequency extends $IFrequency {

 "getStored"(arg0: $ItemStack$Type): long
 "massInsert"(arg0: $ItemStack$Type, arg1: long, arg2: $Action$Type): long
 "forAllStored"(arg0: $ObjLongConsumer$Type<($ItemStack$Type)>): void
 "massExtract"(arg0: $ItemStack$Type, arg1: long, arg2: $Action$Type): long
 "forAllHashedStored"(arg0: $ObjLongConsumer$Type<($IHashedItem$Type)>): void
 "getName"(): string
 "getOwner"(): $UUID
 "isValid"(): boolean
 "getSecurity"(): $SecurityMode
}

export namespace $IQIOFrequency {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQIOFrequency$Type = ($IQIOFrequency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQIOFrequency_ = $IQIOFrequency$Type;
}}
declare module "packages/mekanism/api/chemical/infuse/$EmptyInfuseType" {
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"

export class $EmptyInfuseType extends $InfuseType {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyInfuseType$Type = ($EmptyInfuseType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyInfuseType_ = $EmptyInfuseType$Type;
}}
declare module "packages/mekanism/api/recipes/$GasToGasRecipe" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$ChemicalToChemicalRecipe, $ChemicalToChemicalRecipe$Type} from "packages/mekanism/api/recipes/chemical/$ChemicalToChemicalRecipe"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$ChemicalStackIngredient$GasStackIngredient, $ChemicalStackIngredient$GasStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$GasStackIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GasToGasRecipe extends $ChemicalToChemicalRecipe<($Gas), ($GasStack), ($ChemicalStackIngredient$GasStackIngredient)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ChemicalStackIngredient$GasStackIngredient$Type, arg2: $GasStack$Type)

public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasToGasRecipe$Type = ($GasToGasRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasToGasRecipe_ = $GasToGasRecipe$Type;
}}
declare module "packages/mekanism/api/chemical/$ISidedChemicalHandler" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$IChemicalHandler, $IChemicalHandler$Type} from "packages/mekanism/api/chemical/$IChemicalHandler"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $ISidedChemicalHandler<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>> extends $IChemicalHandler<(CHEMICAL), (STACK)> {

 "isValid"(arg0: integer, arg1: STACK): boolean
 "isValid"(arg0: integer, arg1: STACK, arg2: $Direction$Type): boolean
 "insertChemical"(arg0: STACK, arg1: $Direction$Type, arg2: $Action$Type): STACK
 "insertChemical"(arg0: integer, arg1: STACK, arg2: $Direction$Type, arg3: $Action$Type): STACK
 "insertChemical"(arg0: integer, arg1: STACK, arg2: $Action$Type): STACK
 "setChemicalInTank"(arg0: integer, arg1: STACK): void
 "setChemicalInTank"(arg0: integer, arg1: STACK, arg2: $Direction$Type): void
 "getSideFor"(): $Direction
 "getTanks"(): integer
 "getTanks"(arg0: $Direction$Type): integer
 "getTankCapacity"(arg0: integer): long
 "getTankCapacity"(arg0: integer, arg1: $Direction$Type): long
 "getChemicalInTank"(arg0: integer, arg1: $Direction$Type): STACK
 "getChemicalInTank"(arg0: integer): STACK
 "extractChemical"(arg0: integer, arg1: long, arg2: $Direction$Type, arg3: $Action$Type): STACK
 "extractChemical"(arg0: long, arg1: $Direction$Type, arg2: $Action$Type): STACK
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): STACK
 "extractChemical"(arg0: STACK, arg1: $Direction$Type, arg2: $Action$Type): STACK
 "insertChemical"(arg0: STACK, arg1: $Action$Type): STACK
 "extractChemical"(arg0: long, arg1: $Action$Type): STACK
 "extractChemical"(arg0: STACK, arg1: $Action$Type): STACK
 "getEmptyStack"(): STACK
}

export namespace $ISidedChemicalHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedChemicalHandler$Type<CHEMICAL, STACK> = ($ISidedChemicalHandler<(CHEMICAL), (STACK)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedChemicalHandler_<CHEMICAL, STACK> = $ISidedChemicalHandler$Type<(CHEMICAL), (STACK)>;
}}
declare module "packages/mekanism/api/recipes/$ChemicalCrystallizerRecipe" {
import {$ChemicalStackIngredient, $ChemicalStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$BoxedChemicalStack, $BoxedChemicalStack$Type} from "packages/mekanism/api/chemical/merged/$BoxedChemicalStack"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ChemicalCrystallizerRecipe extends $MekanismRecipe implements $Predicate<($BoxedChemicalStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ChemicalStackIngredient$Type<(any), (any)>, arg2: $ItemStack$Type)

public "getInput"(): $ChemicalStackIngredient<(any), (any)>
public "test"(arg0: $ChemicalStack$Type<(any)>): boolean
public "test"(arg0: $BoxedChemicalStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOutput"(arg0: $BoxedChemicalStack$Type): $ItemStack
public "getOutputDefinition"(): $List<($ItemStack)>
public "testType"(arg0: $ChemicalStack$Type<(any)>): boolean
public "testType"(arg0: $BoxedChemicalStack$Type): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BoxedChemicalStack)>
public "negate"(): $Predicate<($BoxedChemicalStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BoxedChemicalStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BoxedChemicalStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($BoxedChemicalStack)>
get "input"(): $ChemicalStackIngredient<(any), (any)>
get "incomplete"(): boolean
get "outputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalCrystallizerRecipe$Type = ($ChemicalCrystallizerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalCrystallizerRecipe_ = $ChemicalCrystallizerRecipe$Type;
}}
declare module "packages/mekanism/api/heat/$HeatAPI$HeatTransfer" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $HeatAPI$HeatTransfer extends $Record {

constructor(adjacentTransfer: double, environmentTransfer: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "adjacentTransfer"(): double
public "environmentTransfer"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatAPI$HeatTransfer$Type = ($HeatAPI$HeatTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatAPI$HeatTransfer_ = $HeatAPI$HeatTransfer$Type;
}}
declare module "packages/mekanism/api/recipes/$MetallurgicInfuserRecipe" {
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$InfusionStack, $InfusionStack$Type} from "packages/mekanism/api/chemical/infuse/$InfusionStack"
import {$ItemStackChemicalToItemStackRecipe, $ItemStackChemicalToItemStackRecipe$Type} from "packages/mekanism/api/recipes/chemical/$ItemStackChemicalToItemStackRecipe"
import {$ChemicalStackIngredient$InfusionStackIngredient, $ChemicalStackIngredient$InfusionStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$InfusionStackIngredient"

export class $MetallurgicInfuserRecipe extends $ItemStackChemicalToItemStackRecipe<($InfuseType), ($InfusionStack), ($ChemicalStackIngredient$InfusionStackIngredient)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $ChemicalStackIngredient$InfusionStackIngredient$Type, arg3: $ItemStack$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetallurgicInfuserRecipe$Type = ($MetallurgicInfuserRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetallurgicInfuserRecipe_ = $MetallurgicInfuserRecipe$Type;
}}
declare module "packages/mekanism/api/chemical/attribute/$ChemicalAttribute" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ChemicalAttribute {

constructor()

public "addTooltipText"(arg0: $List$Type<($Component$Type)>): $List<($Component)>
public "needsValidation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalAttribute$Type = ($ChemicalAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalAttribute_ = $ChemicalAttribute$Type;
}}
declare module "packages/mekanism/api/chemical/pigment/$IEmptyPigmentProvider" {
import {$IEmptyStackProvider, $IEmptyStackProvider$Type} from "packages/mekanism/api/chemical/$IEmptyStackProvider"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$PigmentStack, $PigmentStack$Type} from "packages/mekanism/api/chemical/pigment/$PigmentStack"

export interface $IEmptyPigmentProvider extends $IEmptyStackProvider<($Pigment), ($PigmentStack)> {

 "getEmptyStack"(): $PigmentStack
}

export namespace $IEmptyPigmentProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmptyPigmentProvider$Type = ($IEmptyPigmentProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmptyPigmentProvider_ = $IEmptyPigmentProvider$Type;
}}
declare module "packages/mekanism/api/chemical/gas/$IGasHandler" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$IChemicalHandler, $IChemicalHandler$Type} from "packages/mekanism/api/chemical/$IChemicalHandler"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$IEmptyGasProvider, $IEmptyGasProvider$Type} from "packages/mekanism/api/chemical/gas/$IEmptyGasProvider"

export interface $IGasHandler extends $IChemicalHandler<($Gas), ($GasStack)>, $IEmptyGasProvider {

 "isValid"(arg0: integer, arg1: $GasStack$Type): boolean
 "insertChemical"(arg0: integer, arg1: $GasStack$Type, arg2: $Action$Type): $GasStack
 "insertChemical"(arg0: $GasStack$Type, arg1: $Action$Type): $GasStack
 "setChemicalInTank"(arg0: integer, arg1: $GasStack$Type): void
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): long
 "getChemicalInTank"(arg0: integer): $GasStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): $GasStack
 "extractChemical"(arg0: long, arg1: $Action$Type): $GasStack
 "extractChemical"(arg0: $GasStack$Type, arg1: $Action$Type): $GasStack
 "getEmptyStack"(): $GasStack
}

export namespace $IGasHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGasHandler$Type = ($IGasHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGasHandler_ = $IGasHandler$Type;
}}
declare module "packages/mekanism/api/recipes/$ItemStackToInfuseTypeRecipe" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"
import {$ItemStackToChemicalRecipe, $ItemStackToChemicalRecipe$Type} from "packages/mekanism/api/recipes/chemical/$ItemStackToChemicalRecipe"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$InfusionStack, $InfusionStack$Type} from "packages/mekanism/api/chemical/infuse/$InfusionStack"

export class $ItemStackToInfuseTypeRecipe extends $ItemStackToChemicalRecipe<($InfuseType), ($InfusionStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $InfusionStack$Type)

public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackToInfuseTypeRecipe$Type = ($ItemStackToInfuseTypeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackToInfuseTypeRecipe_ = $ItemStackToInfuseTypeRecipe$Type;
}}
declare module "packages/mekanism/api/providers/$IGasProvider" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IChemicalProvider, $IChemicalProvider$Type} from "packages/mekanism/api/providers/$IChemicalProvider"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IGasProvider extends $IChemicalProvider<($Gas)> {

 "getStack"(arg0: long): $GasStack
 "getChemical"(): $Gas
 "getRegistryName"(): $ResourceLocation
 "getTranslationKey"(): string
 "getTextComponent"(): $Component
 "getName"(): string

(arg0: long): $GasStack
}

export namespace $IGasProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGasProvider$Type = ($IGasProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGasProvider_ = $IGasProvider$Type;
}}
declare module "packages/mekanism/api/inventory/$IHashedItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IHashedItem {

 "getItem"(): $Item
 "createStack"(arg0: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getInternalTag"(): $CompoundTag
 "getInternalStack"(): $ItemStack
}

export namespace $IHashedItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHashedItem$Type = ($IHashedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHashedItem_ = $IHashedItem$Type;
}}
declare module "packages/mekanism/api/tier/$AlloyTier" {
import {$ITier, $ITier$Type} from "packages/mekanism/api/tier/$ITier"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BaseTier, $BaseTier$Type} from "packages/mekanism/api/tier/$BaseTier"

export class $AlloyTier extends $Enum<($AlloyTier)> implements $ITier {
static readonly "INFUSED": $AlloyTier
static readonly "REINFORCED": $AlloyTier
static readonly "ATOMIC": $AlloyTier


public "getName"(): string
public static "values"(): ($AlloyTier)[]
public static "valueOf"(arg0: string): $AlloyTier
public "getBaseTier"(): $BaseTier
get "name"(): string
get "baseTier"(): $BaseTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloyTier$Type = (("atomic") | ("infused") | ("reinforced")) | ($AlloyTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlloyTier_ = $AlloyTier$Type;
}}
declare module "packages/mekanism/api/chemical/merged/$MergedChemicalTank$Current" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MergedChemicalTank$Current extends $Enum<($MergedChemicalTank$Current)> {
static readonly "EMPTY": $MergedChemicalTank$Current
static readonly "GAS": $MergedChemicalTank$Current
static readonly "INFUSION": $MergedChemicalTank$Current
static readonly "PIGMENT": $MergedChemicalTank$Current
static readonly "SLURRY": $MergedChemicalTank$Current


public static "values"(): ($MergedChemicalTank$Current)[]
public static "valueOf"(arg0: string): $MergedChemicalTank$Current
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MergedChemicalTank$Current$Type = (("infusion") | ("gas") | ("pigment") | ("slurry") | ("empty")) | ($MergedChemicalTank$Current);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MergedChemicalTank$Current_ = $MergedChemicalTank$Current$Type;
}}
declare module "packages/mekanism/api/heat/$IMekanismHeatHandler" {
import {$IHeatCapacitor, $IHeatCapacitor$Type} from "packages/mekanism/api/heat/$IHeatCapacitor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IContentsListener, $IContentsListener$Type} from "packages/mekanism/api/$IContentsListener"
import {$ISidedHeatHandler, $ISidedHeatHandler$Type} from "packages/mekanism/api/heat/$ISidedHeatHandler"

export interface $IMekanismHeatHandler extends $ISidedHeatHandler, $IContentsListener {

 "getTemperature"(arg0: integer, arg1: $Direction$Type): double
 "getTotalInverseInsulation"(arg0: $Direction$Type): double
 "getInverseInsulation"(arg0: integer, arg1: $Direction$Type): double
 "getInverseConduction"(arg0: integer, arg1: $Direction$Type): double
 "getHeatCapacitorCount"(arg0: $Direction$Type): integer
 "getHeatCapacity"(arg0: integer, arg1: $Direction$Type): double
 "handleHeat"(arg0: integer, arg1: double, arg2: $Direction$Type): void
 "getHeatCapacitor"(arg0: integer, arg1: $Direction$Type): $IHeatCapacitor
 "canHandleHeat"(): boolean
 "getHeatCapacitors"(arg0: $Direction$Type): $List<($IHeatCapacitor)>
 "getTemperature"(arg0: integer): double
 "getTotalHeatCapacity"(arg0: $Direction$Type): double
 "getInverseConduction"(arg0: integer): double
 "getTotalTemperature"(arg0: $Direction$Type): double
 "getHeatCapacitorCount"(): integer
 "getTotalInverseConductionCoefficient"(arg0: $Direction$Type): double
 "getHeatSideFor"(): $Direction
 "getHeatCapacity"(arg0: integer): double
 "handleHeat"(arg0: double, arg1: $Direction$Type): void
 "handleHeat"(arg0: integer, arg1: double): void
 "onContentsChanged"(): void
 "getTotalInverseConduction"(): double
 "getTotalHeatCapacity"(): double
 "getTotalTemperature"(): double
 "handleHeat"(arg0: double): void
}

export namespace $IMekanismHeatHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMekanismHeatHandler$Type = ($IMekanismHeatHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMekanismHeatHandler_ = $IMekanismHeatHandler$Type;
}}
declare module "packages/mekanism/api/chemical/slurry/$Slurry" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$SlurryStack, $SlurryStack$Type} from "packages/mekanism/api/chemical/slurry/$SlurryStack"
import {$ISlurryProvider, $ISlurryProvider$Type} from "packages/mekanism/api/providers/$ISlurryProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SlurryBuilder, $SlurryBuilder$Type} from "packages/mekanism/api/chemical/slurry/$SlurryBuilder"

export class $Slurry extends $Chemical<($Slurry)> implements $ISlurryProvider {

constructor(arg0: $SlurryBuilder$Type)

public "toString"(): string
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "getOreTag"(): $TagKey<($Item)>
public "isEmptyType"(): boolean
public "getRegistryName"(): $ResourceLocation
public static "readFromNBT"(arg0: $CompoundTag$Type): $Slurry
public static "getFromRegistry"(arg0: $ResourceLocation$Type): $Slurry
public "getStack"(arg0: long): $SlurryStack
get "oreTag"(): $TagKey<($Item)>
get "emptyType"(): boolean
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Slurry$Type = ($Slurry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Slurry_ = $Slurry$Type;
}}
declare module "packages/mekanism/api/recipes/$MekanismRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IgnoredIInventory, $IgnoredIInventory$Type} from "packages/mekanism/api/inventory/$IgnoredIInventory"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $MekanismRecipe implements $Recipe<($IgnoredIInventory)> {


public "matches"(arg0: $IgnoredIInventory$Type, arg1: $Level$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "assemble"(arg0: $IgnoredIInventory$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getRemainingItems"(arg0: $IgnoredIInventory$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
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
get "incomplete"(): boolean
get "special"(): boolean
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
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
export type $MekanismRecipe$Type = ($MekanismRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MekanismRecipe_ = $MekanismRecipe$Type;
}}
declare module "packages/mekanism/api/chemical/attribute/$IChemicalAttributeContainer" {
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ToIntBiFunction, $ToIntBiFunction$Type} from "packages/java/util/function/$ToIntBiFunction"
import {$ChemicalAttribute, $ChemicalAttribute$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttribute"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ToLongBiFunction, $ToLongBiFunction$Type} from "packages/java/util/function/$ToLongBiFunction"
import {$ToLongFunction, $ToLongFunction$Type} from "packages/java/util/function/$ToLongFunction"
import {$ToDoubleFunction, $ToDoubleFunction$Type} from "packages/java/util/function/$ToDoubleFunction"
import {$ToDoubleBiFunction, $ToDoubleBiFunction$Type} from "packages/java/util/function/$ToDoubleBiFunction"

export interface $IChemicalAttributeContainer<SELF extends $IChemicalAttributeContainer<(SELF)>> {

 "get"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>): ATTRIBUTE
 "getAttributes"(): $Collection<($ChemicalAttribute)>
 "has"(arg0: $Class$Type<(any)>): boolean
 "ifAttributePresent"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $Consumer$Type<(any)>): void
 "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $BiFunction$Type<(SELF), (any), (any)>, arg2: V): V
 "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $Function$Type<(any), (any)>, arg2: V): V
 "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToLongFunction$Type<(any)>): long
 "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToLongBiFunction$Type<(SELF), (any)>): long
 "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToIntBiFunction$Type<(SELF), (any)>): integer
 "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToIntFunction$Type<(any)>): integer
 "getAttributeTypes"(): $Collection<($Class<(any)>)>
 "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToDoubleBiFunction$Type<(SELF), (any)>): double
 "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToDoubleFunction$Type<(any)>): double
}

export namespace $IChemicalAttributeContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChemicalAttributeContainer$Type<SELF> = ($IChemicalAttributeContainer<(SELF)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChemicalAttributeContainer_<SELF> = $IChemicalAttributeContainer$Type<(SELF)>;
}}
declare module "packages/mekanism/api/gear/$ICustomModule$ModuleDispenseResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ICustomModule$ModuleDispenseResult extends $Enum<($ICustomModule$ModuleDispenseResult)> {
static readonly "HANDLED": $ICustomModule$ModuleDispenseResult
static readonly "DEFAULT": $ICustomModule$ModuleDispenseResult
static readonly "FAIL_PREVENT_DROP": $ICustomModule$ModuleDispenseResult


public static "values"(): ($ICustomModule$ModuleDispenseResult)[]
public static "valueOf"(arg0: string): $ICustomModule$ModuleDispenseResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomModule$ModuleDispenseResult$Type = (("fail_prevent_drop") | ("default") | ("handled")) | ($ICustomModule$ModuleDispenseResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomModule$ModuleDispenseResult_ = $ICustomModule$ModuleDispenseResult$Type;
}}
declare module "packages/mekanism/api/chemical/pigment/$IPigmentHandler" {
import {$IChemicalHandler, $IChemicalHandler$Type} from "packages/mekanism/api/chemical/$IChemicalHandler"
import {$IEmptyPigmentProvider, $IEmptyPigmentProvider$Type} from "packages/mekanism/api/chemical/pigment/$IEmptyPigmentProvider"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$PigmentStack, $PigmentStack$Type} from "packages/mekanism/api/chemical/pigment/$PigmentStack"

export interface $IPigmentHandler extends $IChemicalHandler<($Pigment), ($PigmentStack)>, $IEmptyPigmentProvider {

 "isValid"(arg0: integer, arg1: $PigmentStack$Type): boolean
 "insertChemical"(arg0: integer, arg1: $PigmentStack$Type, arg2: $Action$Type): $PigmentStack
 "insertChemical"(arg0: $PigmentStack$Type, arg1: $Action$Type): $PigmentStack
 "setChemicalInTank"(arg0: integer, arg1: $PigmentStack$Type): void
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): long
 "getChemicalInTank"(arg0: integer): $PigmentStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): $PigmentStack
 "extractChemical"(arg0: long, arg1: $Action$Type): $PigmentStack
 "extractChemical"(arg0: $PigmentStack$Type, arg1: $Action$Type): $PigmentStack
 "getEmptyStack"(): $PigmentStack
}

export namespace $IPigmentHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPigmentHandler$Type = ($IPigmentHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPigmentHandler_ = $IPigmentHandler$Type;
}}
declare module "packages/mekanism/api/text/$IHasTextComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $IHasTextComponent {

 "getTextComponent"(): $Component

(): $Component
}

export namespace $IHasTextComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasTextComponent$Type = ($IHasTextComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasTextComponent_ = $IHasTextComponent$Type;
}}
declare module "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InputIngredient, $InputIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$InputIngredient"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackIngredient implements $InputIngredient<($ItemStack)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type): void
public "serialize"(): $JsonElement
public "getRepresentations"(): $List<($ItemStack)>
public "hasNoMatchingInstances"(): boolean
public "getNeededAmount"(arg0: $ItemStack$Type): long
public "testType"(arg0: $ItemStack$Type): boolean
public "getMatchingInstance"(arg0: $ItemStack$Type): $ItemStack
public "test"(arg0: $ItemStack$Type): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "representations"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackIngredient$Type = ($ItemStackIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackIngredient_ = $ItemStackIngredient$Type;
}}
declare module "packages/mekanism/api/chemical/$ChemicalBuilder" {
import {$ChemicalAttribute, $ChemicalAttribute$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttribute"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChemicalBuilder<CHEMICAL extends $Chemical<(CHEMICAL)>, BUILDER extends $ChemicalBuilder<(CHEMICAL), (BUILDER)>> {


public "isHidden"(): boolean
public "with"(arg0: $ChemicalAttribute$Type): BUILDER
public "getTexture"(): $ResourceLocation
public "hidden"(): BUILDER
public "tint"(arg0: integer): BUILDER
public "getTint"(): integer
public "getAttributeMap"(): $Map<($Class<(any)>), ($ChemicalAttribute)>
get "texture"(): $ResourceLocation
get "attributeMap"(): $Map<($Class<(any)>), ($ChemicalAttribute)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalBuilder$Type<CHEMICAL, BUILDER> = ($ChemicalBuilder<(CHEMICAL), (BUILDER)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalBuilder_<CHEMICAL, BUILDER> = $ChemicalBuilder$Type<(CHEMICAL), (BUILDER)>;
}}
declare module "packages/mekanism/api/inventory/$IInventorySlot" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AutomationType, $AutomationType$Type} from "packages/mekanism/api/$AutomationType"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IContentsListener, $IContentsListener$Type} from "packages/mekanism/api/$IContentsListener"

export interface $IInventorySlot extends $INBTSerializable<($CompoundTag)>, $IContentsListener {

 "isEmpty"(): boolean
 "getStack"(): $ItemStack
 "getCount"(): integer
 "setEmpty"(): void
 "getLimit"(arg0: $ItemStack$Type): integer
 "setStack"(arg0: $ItemStack$Type): void
 "growStack"(arg0: integer, arg1: $Action$Type): integer
 "extractItem"(arg0: integer, arg1: $Action$Type, arg2: $AutomationType$Type): $ItemStack
 "isItemValid"(arg0: $ItemStack$Type): boolean
 "insertItem"(arg0: $ItemStack$Type, arg1: $Action$Type, arg2: $AutomationType$Type): $ItemStack
 "setStackSize"(arg0: integer, arg1: $Action$Type): integer
 "shrinkStack"(arg0: integer, arg1: $Action$Type): integer
 "createContainerSlot"(): $Slot
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "onContentsChanged"(): void
}

export namespace $IInventorySlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventorySlot$Type = ($IInventorySlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventorySlot_ = $IInventorySlot$Type;
}}
declare module "packages/mekanism/api/providers/$IModuleDataProvider" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleData, $ModuleData$Type} from "packages/mekanism/api/gear/$ModuleData"
import {$IBaseProvider, $IBaseProvider$Type} from "packages/mekanism/api/providers/$IBaseProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ICustomModule, $ICustomModule$Type} from "packages/mekanism/api/gear/$ICustomModule"

export interface $IModuleDataProvider<MODULE extends $ICustomModule<(MODULE)>> extends $IBaseProvider {

 "getModuleData"(): $ModuleData<(MODULE)>
 "getRegistryName"(): $ResourceLocation
 "getTranslationKey"(): string
 "getName"(): string
 "getTextComponent"(): $Component

(): $ModuleData<(MODULE)>
}

export namespace $IModuleDataProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleDataProvider$Type<MODULE> = ($IModuleDataProvider<(MODULE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleDataProvider_<MODULE> = $IModuleDataProvider$Type<(MODULE)>;
}}
declare module "packages/mekanism/api/gear/$ICustomModule$ModuleDamageAbsorbInfo" {
import {$FloatingLongSupplier, $FloatingLongSupplier$Type} from "packages/mekanism/api/math/$FloatingLongSupplier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FloatSupplier, $FloatSupplier$Type} from "packages/mekanism/api/functions/$FloatSupplier"

export class $ICustomModule$ModuleDamageAbsorbInfo extends $Record {

constructor(absorptionRatio: $FloatSupplier$Type, energyCost: $FloatingLongSupplier$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "absorptionRatio"(): $FloatSupplier
public "energyCost"(): $FloatingLongSupplier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomModule$ModuleDamageAbsorbInfo$Type = ($ICustomModule$ModuleDamageAbsorbInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomModule$ModuleDamageAbsorbInfo_ = $ICustomModule$ModuleDamageAbsorbInfo$Type;
}}
declare module "packages/mekanism/api/chemical/gas/$Gas" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$IGasProvider, $IGasProvider$Type} from "packages/mekanism/api/providers/$IGasProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GasBuilder, $GasBuilder$Type} from "packages/mekanism/api/chemical/gas/$GasBuilder"

export class $Gas extends $Chemical<($Gas)> implements $IGasProvider {

constructor(arg0: $GasBuilder$Type)

public "toString"(): string
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "isEmptyType"(): boolean
public "getRegistryName"(): $ResourceLocation
public static "readFromNBT"(arg0: $CompoundTag$Type): $Gas
public static "getFromRegistry"(arg0: $ResourceLocation$Type): $Gas
public "getStack"(arg0: long): $GasStack
get "emptyType"(): boolean
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gas$Type = ($Gas);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Gas_ = $Gas$Type;
}}
declare module "packages/mekanism/api/chemical/infuse/$InfusionStack" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"
import {$IInfuseTypeProvider, $IInfuseTypeProvider$Type} from "packages/mekanism/api/providers/$IInfuseTypeProvider"

export class $InfusionStack extends $ChemicalStack<($InfuseType)> {
static readonly "EMPTY": $InfusionStack

constructor(arg0: $IInfuseTypeProvider$Type, arg1: long)
constructor(arg0: $InfusionStack$Type, arg1: long)

public static "readFromNBT"(arg0: $CompoundTag$Type): $InfusionStack
public static "readFromPacket"(arg0: $FriendlyByteBuf$Type): $InfusionStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusionStack$Type = ($InfusionStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfusionStack_ = $InfusionStack$Type;
}}
declare module "packages/mekanism/api/chemical/pigment/$IPigmentHandler$ISidedPigmentHandler" {
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$ISidedChemicalHandler, $ISidedChemicalHandler$Type} from "packages/mekanism/api/chemical/$ISidedChemicalHandler"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$IPigmentHandler, $IPigmentHandler$Type} from "packages/mekanism/api/chemical/pigment/$IPigmentHandler"
import {$PigmentStack, $PigmentStack$Type} from "packages/mekanism/api/chemical/pigment/$PigmentStack"

export interface $IPigmentHandler$ISidedPigmentHandler extends $ISidedChemicalHandler<($Pigment), ($PigmentStack)>, $IPigmentHandler {

 "isValid"(arg0: integer, arg1: $PigmentStack$Type): boolean
 "isValid"(arg0: integer, arg1: $PigmentStack$Type, arg2: $Direction$Type): boolean
 "insertChemical"(arg0: $PigmentStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $PigmentStack
 "insertChemical"(arg0: integer, arg1: $PigmentStack$Type, arg2: $Direction$Type, arg3: $Action$Type): $PigmentStack
 "insertChemical"(arg0: integer, arg1: $PigmentStack$Type, arg2: $Action$Type): $PigmentStack
 "setChemicalInTank"(arg0: integer, arg1: $PigmentStack$Type): void
 "setChemicalInTank"(arg0: integer, arg1: $PigmentStack$Type, arg2: $Direction$Type): void
 "getSideFor"(): $Direction
 "getTanks"(): integer
 "getTanks"(arg0: $Direction$Type): integer
 "getTankCapacity"(arg0: integer): long
 "getTankCapacity"(arg0: integer, arg1: $Direction$Type): long
 "getChemicalInTank"(arg0: integer, arg1: $Direction$Type): $PigmentStack
 "getChemicalInTank"(arg0: integer): $PigmentStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Direction$Type, arg3: $Action$Type): $PigmentStack
 "extractChemical"(arg0: long, arg1: $Direction$Type, arg2: $Action$Type): $PigmentStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): $PigmentStack
 "extractChemical"(arg0: $PigmentStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $PigmentStack
 "insertChemical"(arg0: $PigmentStack$Type, arg1: $Action$Type): $PigmentStack
 "extractChemical"(arg0: long, arg1: $Action$Type): $PigmentStack
 "extractChemical"(arg0: $PigmentStack$Type, arg1: $Action$Type): $PigmentStack
 "getEmptyStack"(): $PigmentStack
}

export namespace $IPigmentHandler$ISidedPigmentHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPigmentHandler$ISidedPigmentHandler$Type = ($IPigmentHandler$ISidedPigmentHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPigmentHandler$ISidedPigmentHandler_ = $IPigmentHandler$ISidedPigmentHandler$Type;
}}
declare module "packages/mekanism/api/heat/$IHeatCapacitor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IContentsListener, $IContentsListener$Type} from "packages/mekanism/api/$IContentsListener"

export interface $IHeatCapacitor extends $INBTSerializable<($CompoundTag)>, $IContentsListener {

 "getTemperature"(): double
 "getInverseInsulation"(): double
 "getInverseConduction"(): double
 "serializeNBT"(): $CompoundTag
 "getHeatCapacity"(): double
 "handleHeat"(arg0: double): void
 "getHeat"(): double
 "setHeat"(arg0: double): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "onContentsChanged"(): void
}

export namespace $IHeatCapacitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHeatCapacitor$Type = ($IHeatCapacitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHeatCapacitor_ = $IHeatCapacitor$Type;
}}
declare module "packages/mekanism/api/chemical/$ChemicalStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IHasTranslationKey, $IHasTranslationKey$Type} from "packages/mekanism/api/text/$IHasTranslationKey"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHasTextComponent, $IHasTextComponent$Type} from "packages/mekanism/api/text/$IHasTextComponent"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ToIntBiFunction, $ToIntBiFunction$Type} from "packages/java/util/function/$ToIntBiFunction"
import {$ChemicalAttribute, $ChemicalAttribute$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttribute"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IChemicalAttributeContainer, $IChemicalAttributeContainer$Type} from "packages/mekanism/api/chemical/attribute/$IChemicalAttributeContainer"
import {$ToLongBiFunction, $ToLongBiFunction$Type} from "packages/java/util/function/$ToLongBiFunction"
import {$ToLongFunction, $ToLongFunction$Type} from "packages/java/util/function/$ToLongFunction"
import {$ToDoubleFunction, $ToDoubleFunction$Type} from "packages/java/util/function/$ToDoubleFunction"
import {$ToDoubleBiFunction, $ToDoubleBiFunction$Type} from "packages/java/util/function/$ToDoubleBiFunction"

export class $ChemicalStack<CHEMICAL extends $Chemical<(CHEMICAL)>> implements $IHasTextComponent, $IHasTranslationKey, $IChemicalAttributeContainer<($ChemicalStack<(CHEMICAL)>)> {


public "get"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>): ATTRIBUTE
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "contains"(arg0: $ChemicalStack$Type<(CHEMICAL)>): boolean
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "copy"(): $ChemicalStack<(CHEMICAL)>
public "getType"(): CHEMICAL
public "getAttributes"(): $Collection<($ChemicalAttribute)>
public "grow"(arg0: long): void
public "has"(arg0: $Class$Type<(any)>): boolean
public "setAmount"(arg0: long): void
public "getTypeRegistryName"(): $ResourceLocation
public "getRaw"(): CHEMICAL
public "shrink"(arg0: long): void
public "getChemicalColorRepresentation"(): integer
public "isTypeEqual"(arg0: CHEMICAL): boolean
public "isTypeEqual"(arg0: $ChemicalStack$Type<(CHEMICAL)>): boolean
public "getAttributeTypes"(): $Collection<($Class<(any)>)>
public "isStackIdentical"(arg0: $ChemicalStack$Type<(CHEMICAL)>): boolean
public "getChemicalTint"(): integer
public "getAmount"(): long
public "getTranslationKey"(): string
public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public "getTextComponent"(): $Component
public "ifAttributePresent"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $Consumer$Type<(any)>): void
public "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $BiFunction$Type<($ChemicalStack$Type<(CHEMICAL)>), (any), (any)>, arg2: V): V
public "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $Function$Type<(any), (any)>, arg2: V): V
public "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToLongFunction$Type<(any)>): long
public "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToLongBiFunction$Type<($ChemicalStack$Type<(CHEMICAL)>), (any)>): long
public "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToIntBiFunction$Type<($ChemicalStack$Type<(CHEMICAL)>), (any)>): integer
public "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToIntFunction$Type<(any)>): integer
public "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToDoubleBiFunction$Type<($ChemicalStack$Type<(CHEMICAL)>), (any)>): double
public "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToDoubleFunction$Type<(any)>): double
get "empty"(): boolean
get "type"(): CHEMICAL
get "attributes"(): $Collection<($ChemicalAttribute)>
set "amount"(value: long)
get "typeRegistryName"(): $ResourceLocation
get "raw"(): CHEMICAL
get "chemicalColorRepresentation"(): integer
get "attributeTypes"(): $Collection<($Class<(any)>)>
get "chemicalTint"(): integer
get "amount"(): long
get "translationKey"(): string
get "textComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalStack$Type<CHEMICAL> = ($ChemicalStack<(CHEMICAL)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalStack_<CHEMICAL> = $ChemicalStack$Type<(CHEMICAL)>;
}}
declare module "packages/mekanism/api/inventory/$ISidedItemHandler" {
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $ISidedItemHandler extends $IItemHandlerModifiable {

 "getSlots"(): integer
 "getSlots"(arg0: $Direction$Type): integer
 "getInventorySideFor"(): $Direction
 "getSlotLimit"(arg0: integer, arg1: $Direction$Type): integer
 "getSlotLimit"(arg0: integer): integer
 "extractItem"(arg0: integer, arg1: integer, arg2: $Direction$Type, arg3: $Action$Type): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): void
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type, arg3: $Action$Type): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "getStackInSlot"(arg0: integer, arg1: $Direction$Type): $ItemStack
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $IItemHandler
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "getSlotLimit"(i: integer): integer
 "isMutable"(): boolean
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "getHeight"(): integer
 "asContainer"(): $Container
 "clear"(ingredient: $Ingredient$Type): void
 "clear"(): void
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "setChanged"(): void
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "count"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "isEmpty"(): boolean
}

export namespace $ISidedItemHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedItemHandler$Type = ($ISidedItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedItemHandler_ = $ISidedItemHandler$Type;
}}
declare module "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$GasStackIngredient" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ChemicalStackIngredient$GasStackIngredient extends $ChemicalStackIngredient<($Gas), ($GasStack)> {

 "testType"(arg0: $Gas$Type): boolean
 "write"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(): $JsonElement
 "getRepresentations"(): $List<($GasStack)>
 "hasNoMatchingInstances"(): boolean
 "getNeededAmount"(arg0: $GasStack$Type): long
 "testType"(arg0: $GasStack$Type): boolean
 "getMatchingInstance"(arg0: $GasStack$Type): $GasStack
 "test"(arg0: $GasStack$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($GasStack)>
 "negate"(): $Predicate<($GasStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($GasStack)>
}

export namespace $ChemicalStackIngredient$GasStackIngredient {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($GasStack)>
function isEqual<T>(arg0: any): $Predicate<($GasStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalStackIngredient$GasStackIngredient$Type = ($ChemicalStackIngredient$GasStackIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalStackIngredient$GasStackIngredient_ = $ChemicalStackIngredient$GasStackIngredient$Type;
}}
declare module "packages/mekanism/api/chemical/infuse/$InfuseTypeBuilder" {
import {$ChemicalBuilder, $ChemicalBuilder$Type} from "packages/mekanism/api/chemical/$ChemicalBuilder"
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $InfuseTypeBuilder extends $ChemicalBuilder<($InfuseType), ($InfuseTypeBuilder)> {


public static "builder"(): $InfuseTypeBuilder
public static "builder"(arg0: $ResourceLocation$Type): $InfuseTypeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfuseTypeBuilder$Type = ($InfuseTypeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfuseTypeBuilder_ = $InfuseTypeBuilder$Type;
}}
declare module "packages/mekanism/api/$IFrequency" {
import {$SecurityMode, $SecurityMode$Type} from "packages/mekanism/api/security/$SecurityMode"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IFrequency {

 "getName"(): string
 "getOwner"(): $UUID
 "isValid"(): boolean
 "getSecurity"(): $SecurityMode
}

export namespace $IFrequency {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFrequency$Type = ($IFrequency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFrequency_ = $IFrequency$Type;
}}
declare module "packages/mekanism/api/gear/$IHUDElement" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IHUDElement {

 "getText"(): $Component
 "getColor"(): integer
 "getIcon"(): $ResourceLocation
}

export namespace $IHUDElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHUDElement$Type = ($IHUDElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHUDElement_ = $IHUDElement$Type;
}}
declare module "packages/mekanism/api/$Coord4D" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Coord4D {
readonly "dimension": $ResourceKey<($Level)>

constructor(arg0: $BlockEntity$Type)
constructor(arg0: $Vec3i$Type, arg1: $ResourceKey$Type<($Level$Type)>)
constructor(arg0: $Entity$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: $ResourceKey$Type<($Level$Type)>)
constructor(arg0: $Vec3i$Type, arg1: $Level$Type)

public "getY"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$Type): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public static "read"(arg0: $FriendlyByteBuf$Type): $Coord4D
public static "read"(arg0: $CompoundTag$Type): $Coord4D
public "offset"(arg0: $Direction$Type): $Coord4D
public "offset"(arg0: $Direction$Type, arg1: integer): $Coord4D
public "getX"(): integer
public "translate"(arg0: integer, arg1: integer, arg2: integer): $Coord4D
public "getZ"(): integer
public "distanceToSquared"(arg0: $Coord4D$Type): double
public "getPos"(): $BlockPos
public "distanceTo"(arg0: $Coord4D$Type): double
get "y"(): integer
get "x"(): integer
get "z"(): integer
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Coord4D$Type = ($Coord4D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Coord4D_ = $Coord4D$Type;
}}
declare module "packages/mekanism/api/$Chunk3D" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Coord4D, $Coord4D$Type} from "packages/mekanism/api/$Coord4D"

export class $Chunk3D extends $ChunkPos {
readonly "dimension": $ResourceKey<($Level)>
static readonly "INVALID_CHUNK_POS": long
static readonly "ZERO": $ChunkPos
static readonly "REGION_SIZE": integer
static readonly "REGION_MAX_INDEX": integer
readonly "x": integer
readonly "z": integer

constructor(arg0: $Coord4D$Type)
constructor(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $ChunkPos$Type)
constructor(arg0: $ResourceKey$Type<($Level$Type)>, arg1: long)
constructor(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "expand"(arg0: integer): $Set<($Chunk3D)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chunk3D$Type = ($Chunk3D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chunk3D_ = $Chunk3D$Type;
}}
declare module "packages/mekanism/api/chemical/slurry/$IEmptySlurryProvider" {
import {$SlurryStack, $SlurryStack$Type} from "packages/mekanism/api/chemical/slurry/$SlurryStack"
import {$Slurry, $Slurry$Type} from "packages/mekanism/api/chemical/slurry/$Slurry"
import {$IEmptyStackProvider, $IEmptyStackProvider$Type} from "packages/mekanism/api/chemical/$IEmptyStackProvider"

export interface $IEmptySlurryProvider extends $IEmptyStackProvider<($Slurry), ($SlurryStack)> {

 "getEmptyStack"(): $SlurryStack
}

export namespace $IEmptySlurryProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmptySlurryProvider$Type = ($IEmptySlurryProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmptySlurryProvider_ = $IEmptySlurryProvider$Type;
}}
declare module "packages/mekanism/api/fluid/$ISidedFluidHandler" {
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IExtendedFluidHandler, $IExtendedFluidHandler$Type} from "packages/mekanism/api/fluid/$IExtendedFluidHandler"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export interface $ISidedFluidHandler extends $IExtendedFluidHandler {

 "getFluidInTank"(arg0: integer, arg1: $Direction$Type): $FluidStack
 "getFluidInTank"(arg0: integer): $FluidStack
 "getTanks"(arg0: $Direction$Type): integer
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer, arg1: $Direction$Type): integer
 "getTankCapacity"(arg0: integer): integer
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type, arg2: $Direction$Type): boolean
 "extractFluid"(arg0: $FluidStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Direction$Type, arg3: $Action$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Action$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Direction$Type, arg2: $Action$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$Type, arg2: $Direction$Type, arg3: $Action$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$Type, arg2: $Action$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $FluidStack
 "getFluidSideFor"(): $Direction
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type): void
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type, arg2: $Direction$Type): void
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "extractFluid"(arg0: $FluidStack$Type, arg1: $Action$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Action$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$Type, arg1: $Action$Type): $FluidStack
}

export namespace $ISidedFluidHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedFluidHandler$Type = ($ISidedFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedFluidHandler_ = $ISidedFluidHandler$Type;
}}
declare module "packages/mekanism/api/chemical/merged/$BoxedChemicalStack" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHasTextComponent, $IHasTextComponent$Type} from "packages/mekanism/api/text/$IHasTextComponent"
import {$BoxedChemical, $BoxedChemical$Type} from "packages/mekanism/api/chemical/merged/$BoxedChemical"
import {$ChemicalType, $ChemicalType$Type} from "packages/mekanism/api/chemical/$ChemicalType"

export class $BoxedChemicalStack implements $IHasTextComponent {
static readonly "EMPTY": $BoxedChemicalStack


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$Type): $BoxedChemicalStack
public "copy"(): $BoxedChemicalStack
public "getType"(): $BoxedChemical
public static "box"(arg0: $ChemicalStack$Type<(any)>): $BoxedChemicalStack
public "getChemicalStack"(): $ChemicalStack<(any)>
public "getChemicalType"(): $ChemicalType
public "getTextComponent"(): $Component
get "empty"(): boolean
get "type"(): $BoxedChemical
get "chemicalStack"(): $ChemicalStack<(any)>
get "chemicalType"(): $ChemicalType
get "textComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoxedChemicalStack$Type = ($BoxedChemicalStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoxedChemicalStack_ = $BoxedChemicalStack$Type;
}}
declare module "packages/mekanism/api/chemical/$IEmptyStackProvider" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"

export interface $IEmptyStackProvider<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>> {

 "getEmptyStack"(): STACK

(): STACK
}

export namespace $IEmptyStackProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmptyStackProvider$Type<CHEMICAL, STACK> = ($IEmptyStackProvider<(CHEMICAL), (STACK)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmptyStackProvider_<CHEMICAL, STACK> = $IEmptyStackProvider$Type<(CHEMICAL), (STACK)>;
}}
declare module "packages/mekanism/api/recipes/ingredients/$InputIngredient" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $InputIngredient<TYPE> extends $Predicate<(TYPE)> {

 "write"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(): $JsonElement
 "getRepresentations"(): $List<(TYPE)>
 "hasNoMatchingInstances"(): boolean
 "getNeededAmount"(arg0: TYPE): long
 "testType"(arg0: TYPE): boolean
 "getMatchingInstance"(arg0: TYPE): TYPE
 "test"(arg0: TYPE): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<(TYPE)>
 "negate"(): $Predicate<(TYPE)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<(TYPE)>
}

export namespace $InputIngredient {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<(TYPE)>
function isEqual<T>(arg0: any): $Predicate<(TYPE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputIngredient$Type<TYPE> = ($InputIngredient<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputIngredient_<TYPE> = $InputIngredient$Type<(TYPE)>;
}}
declare module "packages/mekanism/api/chemical/infuse/$IEmptyInfusionProvider" {
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"
import {$IEmptyStackProvider, $IEmptyStackProvider$Type} from "packages/mekanism/api/chemical/$IEmptyStackProvider"
import {$InfusionStack, $InfusionStack$Type} from "packages/mekanism/api/chemical/infuse/$InfusionStack"

export interface $IEmptyInfusionProvider extends $IEmptyStackProvider<($InfuseType), ($InfusionStack)> {

 "getEmptyStack"(): $InfusionStack
}

export namespace $IEmptyInfusionProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmptyInfusionProvider$Type = ($IEmptyInfusionProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmptyInfusionProvider_ = $IEmptyInfusionProvider$Type;
}}
declare module "packages/mekanism/api/chemical/slurry/$SlurryStack" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Slurry, $Slurry$Type} from "packages/mekanism/api/chemical/slurry/$Slurry"
import {$ISlurryProvider, $ISlurryProvider$Type} from "packages/mekanism/api/providers/$ISlurryProvider"

export class $SlurryStack extends $ChemicalStack<($Slurry)> {
static readonly "EMPTY": $SlurryStack

constructor(arg0: $ISlurryProvider$Type, arg1: long)
constructor(arg0: $SlurryStack$Type, arg1: long)

public static "readFromNBT"(arg0: $CompoundTag$Type): $SlurryStack
public static "readFromPacket"(arg0: $FriendlyByteBuf$Type): $SlurryStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlurryStack$Type = ($SlurryStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlurryStack_ = $SlurryStack$Type;
}}
declare module "packages/mekanism/api/recipes/$CombinerRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CombinerRecipe extends $MekanismRecipe implements $BiPredicate<($ItemStack), ($ItemStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $ItemStackIngredient$Type, arg3: $ItemStack$Type)

public "test"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOutput"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public "getOutputDefinition"(): $List<($ItemStack)>
public "getMainInput"(): $ItemStackIngredient
public "getExtraInput"(): $ItemStackIngredient
public "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($ItemStack), ($ItemStack)>
public "negate"(): $BiPredicate<($ItemStack), ($ItemStack)>
public "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($ItemStack), ($ItemStack)>
get "incomplete"(): boolean
get "outputDefinition"(): $List<($ItemStack)>
get "mainInput"(): $ItemStackIngredient
get "extraInput"(): $ItemStackIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinerRecipe$Type = ($CombinerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombinerRecipe_ = $CombinerRecipe$Type;
}}
declare module "packages/mekanism/api/chemical/pigment/$IPigmentTank" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ChemicalAttributeValidator, $ChemicalAttributeValidator$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttributeValidator"
import {$AutomationType, $AutomationType$Type} from "packages/mekanism/api/$AutomationType"
import {$IEmptyPigmentProvider, $IEmptyPigmentProvider$Type} from "packages/mekanism/api/chemical/pigment/$IEmptyPigmentProvider"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$IChemicalTank, $IChemicalTank$Type} from "packages/mekanism/api/chemical/$IChemicalTank"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$PigmentStack, $PigmentStack$Type} from "packages/mekanism/api/chemical/pigment/$PigmentStack"

export interface $IPigmentTank extends $IChemicalTank<($Pigment), ($PigmentStack)>, $IEmptyPigmentProvider {

 "createStack"(arg0: $PigmentStack$Type, arg1: long): $PigmentStack
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getCapacity"(): long
 "extract"(arg0: long, arg1: $Action$Type, arg2: $AutomationType$Type): $PigmentStack
 "insert"(arg0: $PigmentStack$Type, arg1: $Action$Type, arg2: $AutomationType$Type): $PigmentStack
 "isEmpty"(): boolean
 "getType"(): $Pigment
 "getStack"(): $PigmentStack
 "isValid"(arg0: $PigmentStack$Type): boolean
 "setEmpty"(): void
 "setStack"(arg0: $PigmentStack$Type): void
 "getAttributeValidator"(): $ChemicalAttributeValidator
 "growStack"(arg0: long, arg1: $Action$Type): long
 "getStored"(): long
 "setStackUnchecked"(arg0: $PigmentStack$Type): void
 "isTypeEqual"(arg0: $Pigment$Type): boolean
 "isTypeEqual"(arg0: $PigmentStack$Type): boolean
 "serializeNBT"(): $CompoundTag
 "getNeeded"(): long
 "setStackSize"(arg0: long, arg1: $Action$Type): long
 "shrinkStack"(arg0: long, arg1: $Action$Type): long
 "getEmptyStack"(): $PigmentStack
 "onContentsChanged"(): void
}

export namespace $IPigmentTank {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPigmentTank$Type = ($IPigmentTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPigmentTank_ = $IPigmentTank$Type;
}}
declare module "packages/mekanism/api/inventory/$IMekanismInventory" {
import {$ISidedItemHandler, $ISidedItemHandler$Type} from "packages/mekanism/api/inventory/$ISidedItemHandler"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$IInventorySlot, $IInventorySlot$Type} from "packages/mekanism/api/inventory/$IInventorySlot"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IContentsListener, $IContentsListener$Type} from "packages/mekanism/api/$IContentsListener"

export interface $IMekanismInventory extends $ISidedItemHandler, $IContentsListener {

 "getSlots"(arg0: $Direction$Type): integer
 "hasInventory"(): boolean
 "getSlotLimit"(arg0: integer, arg1: $Direction$Type): integer
 "extractItem"(arg0: integer, arg1: integer, arg2: $Direction$Type, arg3: $Action$Type): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): void
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type, arg3: $Action$Type): $ItemStack
 "getStackInSlot"(arg0: integer, arg1: $Direction$Type): $ItemStack
 "getInventorySlots"(arg0: $Direction$Type): $List<($IInventorySlot)>
 "getInventorySlot"(arg0: integer, arg1: $Direction$Type): $IInventorySlot
 "isInventoryEmpty"(arg0: $Direction$Type): boolean
 "isInventoryEmpty"(): boolean
 "getSlots"(): integer
 "getInventorySideFor"(): $Direction
 "getSlotLimit"(arg0: integer): integer
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "onContentsChanged"(): void
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $IItemHandler
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "getSlotLimit"(i: integer): integer
 "isMutable"(): boolean
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "getHeight"(): integer
 "asContainer"(): $Container
 "clear"(ingredient: $Ingredient$Type): void
 "clear"(): void
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "setChanged"(): void
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "count"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "isEmpty"(): boolean
}

export namespace $IMekanismInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMekanismInventory$Type = ($IMekanismInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMekanismInventory_ = $IMekanismInventory$Type;
}}
declare module "packages/mekanism/api/recipes/$PigmentMixingRecipe" {
import {$ChemicalChemicalToChemicalRecipe, $ChemicalChemicalToChemicalRecipe$Type} from "packages/mekanism/api/recipes/chemical/$ChemicalChemicalToChemicalRecipe"
import {$ChemicalStackIngredient$PigmentStackIngredient, $ChemicalStackIngredient$PigmentStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$PigmentStackIngredient"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PigmentStack, $PigmentStack$Type} from "packages/mekanism/api/chemical/pigment/$PigmentStack"

export class $PigmentMixingRecipe extends $ChemicalChemicalToChemicalRecipe<($Pigment), ($PigmentStack), ($ChemicalStackIngredient$PigmentStackIngredient)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ChemicalStackIngredient$PigmentStackIngredient$Type, arg2: $ChemicalStackIngredient$PigmentStackIngredient$Type, arg3: $PigmentStack$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PigmentMixingRecipe$Type = ($PigmentMixingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PigmentMixingRecipe_ = $PigmentMixingRecipe$Type;
}}
declare module "packages/mekanism/api/recipes/$ChemicalInfuserRecipe" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$ChemicalChemicalToChemicalRecipe, $ChemicalChemicalToChemicalRecipe$Type} from "packages/mekanism/api/recipes/chemical/$ChemicalChemicalToChemicalRecipe"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$ChemicalStackIngredient$GasStackIngredient, $ChemicalStackIngredient$GasStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$GasStackIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ChemicalInfuserRecipe extends $ChemicalChemicalToChemicalRecipe<($Gas), ($GasStack), ($ChemicalStackIngredient$GasStackIngredient)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ChemicalStackIngredient$GasStackIngredient$Type, arg2: $ChemicalStackIngredient$GasStackIngredient$Type, arg3: $GasStack$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalInfuserRecipe$Type = ($ChemicalInfuserRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalInfuserRecipe_ = $ChemicalInfuserRecipe$Type;
}}
declare module "packages/mekanism/api/lasers/$ILaserReceptor" {
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"

export interface $ILaserReceptor {

 "receiveLaserEnergy"(arg0: $FloatingLong$Type): void
 "canLasersDig"(): boolean
}

export namespace $ILaserReceptor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILaserReceptor$Type = ($ILaserReceptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILaserReceptor_ = $ILaserReceptor$Type;
}}
declare module "packages/mekanism/api/chemical/pigment/$PigmentStack" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$IPigmentProvider, $IPigmentProvider$Type} from "packages/mekanism/api/providers/$IPigmentProvider"

export class $PigmentStack extends $ChemicalStack<($Pigment)> {
static readonly "EMPTY": $PigmentStack

constructor(arg0: $IPigmentProvider$Type, arg1: long)
constructor(arg0: $PigmentStack$Type, arg1: long)

public static "readFromNBT"(arg0: $CompoundTag$Type): $PigmentStack
public static "readFromPacket"(arg0: $FriendlyByteBuf$Type): $PigmentStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PigmentStack$Type = ($PigmentStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PigmentStack_ = $PigmentStack$Type;
}}
declare module "packages/mekanism/api/recipes/$PressurizedReactionRecipe" {
import {$TriPredicate, $TriPredicate$Type} from "packages/net/minecraftforge/common/util/$TriPredicate"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ChemicalStackIngredient$GasStackIngredient, $ChemicalStackIngredient$GasStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$GasStackIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$FluidStackIngredient, $FluidStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$FluidStackIngredient"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"
import {$PressurizedReactionRecipe$PressurizedReactionRecipeOutput, $PressurizedReactionRecipe$PressurizedReactionRecipeOutput$Type} from "packages/mekanism/api/recipes/$PressurizedReactionRecipe$PressurizedReactionRecipeOutput"

export class $PressurizedReactionRecipe extends $MekanismRecipe implements $TriPredicate<($ItemStack), ($FluidStack), ($GasStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $FluidStackIngredient$Type, arg3: $ChemicalStackIngredient$GasStackIngredient$Type, arg4: $FloatingLong$Type, arg5: integer, arg6: $ItemStack$Type, arg7: $GasStack$Type)

public "test"(arg0: $ItemStack$Type, arg1: $FluidStack$Type, arg2: $GasStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getDuration"(): integer
public "getEnergyRequired"(): $FloatingLong
public "isIncomplete"(): boolean
public "getOutput"(arg0: $ItemStack$Type, arg1: $FluidStack$Type, arg2: $GasStack$Type): $PressurizedReactionRecipe$PressurizedReactionRecipeOutput
public "getOutputDefinition"(): $List<($PressurizedReactionRecipe$PressurizedReactionRecipeOutput)>
public "getInputFluid"(): $FluidStackIngredient
public "getInputGas"(): $ChemicalStackIngredient$GasStackIngredient
public "getInputSolid"(): $ItemStackIngredient
public "or"(arg0: $TriPredicate$Type<(any), (any), (any)>): $TriPredicate<($ItemStack), ($FluidStack), ($GasStack)>
public "negate"(): $TriPredicate<($ItemStack), ($FluidStack), ($GasStack)>
public "and"(arg0: $TriPredicate$Type<(any), (any), (any)>): $TriPredicate<($ItemStack), ($FluidStack), ($GasStack)>
get "duration"(): integer
get "energyRequired"(): $FloatingLong
get "incomplete"(): boolean
get "outputDefinition"(): $List<($PressurizedReactionRecipe$PressurizedReactionRecipeOutput)>
get "inputFluid"(): $FluidStackIngredient
get "inputGas"(): $ChemicalStackIngredient$GasStackIngredient
get "inputSolid"(): $ItemStackIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressurizedReactionRecipe$Type = ($PressurizedReactionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressurizedReactionRecipe_ = $PressurizedReactionRecipe$Type;
}}
declare module "packages/mekanism/api/math/$FloatingLong" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $FloatingLong extends number implements $Comparable<($FloatingLong)> {
static readonly "ZERO": $FloatingLong
static readonly "ONE": $FloatingLong
static readonly "MAX_VALUE": $FloatingLong


public "add"(arg0: long): $FloatingLong
public "add"(arg0: $FloatingLong$Type): $FloatingLong
public "add"(arg0: double): $FloatingLong
public "equals"(arg0: $FloatingLong$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "toString"(arg0: integer): string
public "hashCode"(): integer
public "min"(arg0: $FloatingLong$Type): $FloatingLong
public "max"(arg0: $FloatingLong$Type): $FloatingLong
public "floor"(): $FloatingLong
public "ceil"(): $FloatingLong
public "compareTo"(arg0: $FloatingLong$Type): integer
public "byteValue"(): byte
public "shortValue"(): short
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "getValue"(): long
public "copy"(): $FloatingLong
public static "create"(arg0: double): $FloatingLong
public static "create"(arg0: long, arg1: short): $FloatingLong
public static "create"(arg0: long): $FloatingLong
public "multiply"(arg0: double): $FloatingLong
public "multiply"(arg0: $FloatingLong$Type): $FloatingLong
public "multiply"(arg0: long): $FloatingLong
public "subtract"(arg0: $FloatingLong$Type): $FloatingLong
public "subtract"(arg0: long): $FloatingLong
public "subtract"(arg0: double): $FloatingLong
public "divide"(arg0: long): $FloatingLong
public "divide"(arg0: $FloatingLong$Type): $FloatingLong
public "divide"(arg0: double): $FloatingLong
public "isZero"(): boolean
public "greaterThan"(arg0: $FloatingLong$Type): boolean
public "timesEqual"(arg0: $FloatingLong$Type): $FloatingLong
public "timesEqual"(arg0: long): $FloatingLong
public "plusEqual"(arg0: long): $FloatingLong
public "plusEqual"(arg0: $FloatingLong$Type): $FloatingLong
public "writeToBuffer"(arg0: $FriendlyByteBuf$Type): void
public static "readFromBuffer"(arg0: $FriendlyByteBuf$Type): $FloatingLong
public "divideToUnsignedLong"(arg0: $FloatingLong$Type): long
public "smallerOrEqual"(arg0: $FloatingLong$Type): boolean
public static "createConst"(arg0: long, arg1: short): $FloatingLong
public static "createConst"(arg0: double): $FloatingLong
public static "createConst"(arg0: long): $FloatingLong
public "copyAsConst"(): $FloatingLong
public static "parseFloatingLong"(arg0: string, arg1: boolean): $FloatingLong
public static "parseFloatingLong"(arg0: string): $FloatingLong
public "getDecimal"(): short
public "minusEqual"(arg0: long): $FloatingLong
public "minusEqual"(arg0: $FloatingLong$Type): $FloatingLong
public "greaterOrEqual"(arg0: $FloatingLong$Type): boolean
public "absDifference"(arg0: $FloatingLong$Type): $FloatingLong
public "divideToLong"(arg0: $FloatingLong$Type): long
public "divideEquals"(arg0: $FloatingLong$Type): $FloatingLong
public "divideEquals"(arg0: long): $FloatingLong
public "divideToInt"(arg0: $FloatingLong$Type): integer
public "smallerThan"(arg0: $FloatingLong$Type): boolean
public "divideToLevel"(arg0: $FloatingLong$Type): double
public "floorSelf"(): $FloatingLong
public "ceilSelf"(): $FloatingLong
get "value"(): long
get "zero"(): boolean
get "decimal"(): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatingLong$Type = ($FloatingLong);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatingLong_ = $FloatingLong$Type;
}}
declare module "packages/mekanism/api/radial/mode/$NestedRadialMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ILangEntry, $ILangEntry$Type} from "packages/mekanism/api/text/$ILangEntry"
import {$INestedRadialMode, $INestedRadialMode$Type} from "packages/mekanism/api/radial/mode/$INestedRadialMode"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RadialData, $RadialData$Type} from "packages/mekanism/api/radial/$RadialData"
import {$EnumColor, $EnumColor$Type} from "packages/mekanism/api/text/$EnumColor"

export class $NestedRadialMode extends $Record implements $INestedRadialMode {

constructor(nestedData: $RadialData$Type<(any)>, sliceName: $Component$Type, icon: $ResourceLocation$Type, color: $EnumColor$Type)
constructor(arg0: $RadialData$Type<(any)>, arg1: $ILangEntry$Type, arg2: $ResourceLocation$Type, arg3: $EnumColor$Type)
constructor(arg0: $RadialData$Type<(any)>, arg1: $Component$Type, arg2: $ResourceLocation$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "color"(): $EnumColor
public "icon"(): $ResourceLocation
public "hasNestedData"(): boolean
public "sliceName"(): $Component
public "nestedData"(): $RadialData<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NestedRadialMode$Type = ($NestedRadialMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NestedRadialMode_ = $NestedRadialMode$Type;
}}
declare module "packages/mekanism/api/recipes/cache/$CachedRecipe$OperationTracker$RecipeError" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CachedRecipe$OperationTracker$RecipeError {
static readonly "INPUT_DOESNT_PRODUCE_OUTPUT": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_ENERGY": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_ENERGY_REDUCED_RATE": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_INPUT": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_SECONDARY_INPUT": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_LEFT_INPUT": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_RIGHT_INPUT": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_OUTPUT_SPACE": $CachedRecipe$OperationTracker$RecipeError


public static "create"(): $CachedRecipe$OperationTracker$RecipeError
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedRecipe$OperationTracker$RecipeError$Type = ($CachedRecipe$OperationTracker$RecipeError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedRecipe$OperationTracker$RecipeError_ = $CachedRecipe$OperationTracker$RecipeError$Type;
}}
declare module "packages/mekanism/api/heat/$IHeatHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHeatHandler {

 "getTemperature"(arg0: integer): double
 "getTotalInverseConduction"(): double
 "getTotalHeatCapacity"(): double
 "getInverseConduction"(arg0: integer): double
 "getTotalTemperature"(): double
 "getHeatCapacitorCount"(): integer
 "getHeatCapacity"(arg0: integer): double
 "handleHeat"(arg0: double): void
 "handleHeat"(arg0: integer, arg1: double): void
}

export namespace $IHeatHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHeatHandler$Type = ($IHeatHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHeatHandler_ = $IHeatHandler$Type;
}}
declare module "packages/mekanism/api/providers/$IItemProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IBaseProvider, $IBaseProvider$Type} from "packages/mekanism/api/providers/$IBaseProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IItemProvider extends $IBaseProvider, $ItemLike {

 "getItemStack"(): $ItemStack
 "getItemStack"(arg0: integer): $ItemStack
 "getRegistryName"(): $ResourceLocation
 "getTranslationKey"(): string
 "getName"(): string
 "getTextComponent"(): $Component
 "asItem"(): $Item

(): $ItemStack
}

export namespace $IItemProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemProvider$Type = ($IItemProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemProvider_ = $IItemProvider$Type;
}}
declare module "packages/mekanism/api/recipes/cache/$CachedRecipe" {
import {$FloatingLongSupplier, $FloatingLongSupplier$Type} from "packages/mekanism/api/math/$FloatingLongSupplier"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$CachedRecipe$OperationTracker, $CachedRecipe$OperationTracker$Type} from "packages/mekanism/api/recipes/cache/$CachedRecipe$OperationTracker"
import {$IEnergyContainer, $IEnergyContainer$Type} from "packages/mekanism/api/energy/$IEnergyContainer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$CachedRecipe$OperationTracker$RecipeError, $CachedRecipe$OperationTracker$RecipeError$Type} from "packages/mekanism/api/recipes/cache/$CachedRecipe$OperationTracker$RecipeError"

export class $CachedRecipe<RECIPE extends $MekanismRecipe> {


public "process"(): void
public "getRecipe"(): RECIPE
public "setActive"(arg0: $BooleanConsumer$Type): $CachedRecipe<(RECIPE)>
public "setBaselineMaxOperations"(arg0: $IntSupplier$Type): $CachedRecipe<(RECIPE)>
public "loadSavedOperatingTicks"(arg0: integer): void
public "setCanHolderFunction"(arg0: $BooleanSupplier$Type): $CachedRecipe<(RECIPE)>
public "setEnergyRequirements"(arg0: $FloatingLongSupplier$Type, arg1: $IEnergyContainer$Type): $CachedRecipe<(RECIPE)>
public "setOperatingTicksChanged"(arg0: $IntConsumer$Type): $CachedRecipe<(RECIPE)>
public "setOnFinish"(arg0: $Runnable$Type): $CachedRecipe<(RECIPE)>
public "setRequiredTicks"(arg0: $IntSupplier$Type): $CachedRecipe<(RECIPE)>
public "setErrorsChanged"(arg0: $Consumer$Type<($Set$Type<($CachedRecipe$OperationTracker$RecipeError$Type)>)>): $CachedRecipe<(RECIPE)>
public "isInputValid"(): boolean
public "setPostProcessOperations"(arg0: $Consumer$Type<($CachedRecipe$OperationTracker$Type)>): $CachedRecipe<(RECIPE)>
get "recipe"(): RECIPE
set "active"(value: $BooleanConsumer$Type)
set "baselineMaxOperations"(value: $IntSupplier$Type)
set "canHolderFunction"(value: $BooleanSupplier$Type)
set "operatingTicksChanged"(value: $IntConsumer$Type)
set "onFinish"(value: $Runnable$Type)
set "requiredTicks"(value: $IntSupplier$Type)
set "errorsChanged"(value: $Consumer$Type<($Set$Type<($CachedRecipe$OperationTracker$RecipeError$Type)>)>)
get "inputValid"(): boolean
set "postProcessOperations"(value: $Consumer$Type<($CachedRecipe$OperationTracker$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedRecipe$Type<RECIPE> = ($CachedRecipe<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedRecipe_<RECIPE> = $CachedRecipe$Type<(RECIPE)>;
}}
declare module "packages/mekanism/api/chemical/merged/$BoxedChemical" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHasTextComponent, $IHasTextComponent$Type} from "packages/mekanism/api/text/$IHasTextComponent"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ChemicalType, $ChemicalType$Type} from "packages/mekanism/api/chemical/$ChemicalType"

export class $BoxedChemical implements $IHasTextComponent {
static readonly "EMPTY": $BoxedChemical


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$Type): $BoxedChemical
public static "read"(arg0: $FriendlyByteBuf$Type): $BoxedChemical
public static "box"(arg0: $Chemical$Type<(any)>): $BoxedChemical
public "getChemicalType"(): $ChemicalType
public "getChemical"(): $Chemical<(any)>
public "getTextComponent"(): $Component
get "empty"(): boolean
get "chemicalType"(): $ChemicalType
get "chemical"(): $Chemical<(any)>
get "textComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoxedChemical$Type = ($BoxedChemical);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoxedChemical_ = $BoxedChemical$Type;
}}
declare module "packages/mekanism/api/recipes/chemical/$ItemStackToChemicalRecipe" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemStackToChemicalRecipe<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>> extends $MekanismRecipe implements $Predicate<($ItemStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: STACK)

public "getInput"(): $ItemStackIngredient
public "test"(arg0: $ItemStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getOutput"(arg0: $ItemStack$Type): STACK
public "getOutputDefinition"(): $List<(STACK)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "input"(): $ItemStackIngredient
get "incomplete"(): boolean
get "outputDefinition"(): $List<(STACK)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackToChemicalRecipe$Type<CHEMICAL, STACK> = ($ItemStackToChemicalRecipe<(CHEMICAL), (STACK)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackToChemicalRecipe_<CHEMICAL, STACK> = $ItemStackToChemicalRecipe$Type<(CHEMICAL), (STACK)>;
}}
declare module "packages/mekanism/api/inventory/qio/$IQIOComponent" {
import {$IQIOFrequency, $IQIOFrequency$Type} from "packages/mekanism/api/inventory/qio/$IQIOFrequency"

export interface $IQIOComponent {

 "getQIOFrequency"(): $IQIOFrequency

(): $IQIOFrequency
}

export namespace $IQIOComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQIOComponent$Type = ($IQIOComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQIOComponent_ = $IQIOComponent$Type;
}}
declare module "packages/mekanism/api/recipes/chemical/$ItemStackChemicalToItemStackRecipe" {
import {$ChemicalStackIngredient, $ChemicalStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemStackChemicalToItemStackRecipe<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>, INGREDIENT extends $ChemicalStackIngredient<(CHEMICAL), (STACK)>> extends $MekanismRecipe implements $BiPredicate<($ItemStack), (STACK)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: INGREDIENT, arg3: $ItemStack$Type)

public "test"(arg0: $ItemStack$Type, arg1: STACK): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOutput"(arg0: $ItemStack$Type, arg1: STACK): $ItemStack
public "getOutputDefinition"(): $List<($ItemStack)>
public "getChemicalInput"(): INGREDIENT
public "getItemInput"(): $ItemStackIngredient
public "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($ItemStack), (STACK)>
public "negate"(): $BiPredicate<($ItemStack), (STACK)>
public "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($ItemStack), (STACK)>
get "incomplete"(): boolean
get "outputDefinition"(): $List<($ItemStack)>
get "chemicalInput"(): INGREDIENT
get "itemInput"(): $ItemStackIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackChemicalToItemStackRecipe$Type<CHEMICAL, STACK, INGREDIENT> = ($ItemStackChemicalToItemStackRecipe<(CHEMICAL), (STACK), (INGREDIENT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackChemicalToItemStackRecipe_<CHEMICAL, STACK, INGREDIENT> = $ItemStackChemicalToItemStackRecipe$Type<(CHEMICAL), (STACK), (INGREDIENT)>;
}}
declare module "packages/mekanism/api/gear/config/$IModuleConfigItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IModuleConfigItem<TYPE> {

 "getName"(): string
 "get"(): TYPE
 "set"(arg0: TYPE): void
}

export namespace $IModuleConfigItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleConfigItem$Type<TYPE> = ($IModuleConfigItem<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleConfigItem_<TYPE> = $IModuleConfigItem$Type<(TYPE)>;
}}
declare module "packages/mekanism/api/functions/$FloatSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FloatSupplier {

 "getAsFloat"(): float

(): float
}

export namespace $FloatSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatSupplier$Type = ($FloatSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatSupplier_ = $FloatSupplier$Type;
}}
declare module "packages/mekanism/api/recipes/chemical/$ChemicalToChemicalRecipe" {
import {$ChemicalStackIngredient, $ChemicalStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ChemicalToChemicalRecipe<CHEMICAL extends $Chemical<(CHEMICAL)>, STACK extends $ChemicalStack<(CHEMICAL)>, INGREDIENT extends $ChemicalStackIngredient<(CHEMICAL), (STACK)>> extends $MekanismRecipe implements $Predicate<(STACK)> {

constructor(arg0: $ResourceLocation$Type, arg1: INGREDIENT, arg2: STACK)

public "getInput"(): INGREDIENT
public "test"(arg0: STACK): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getOutput"(arg0: STACK): STACK
public "getOutputDefinition"(): $List<(STACK)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(STACK)>
public "negate"(): $Predicate<(STACK)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(STACK)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(STACK)>
public static "isEqual"<T>(arg0: any): $Predicate<(STACK)>
get "input"(): INGREDIENT
get "incomplete"(): boolean
get "outputDefinition"(): $List<(STACK)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalToChemicalRecipe$Type<CHEMICAL, STACK, INGREDIENT> = ($ChemicalToChemicalRecipe<(CHEMICAL), (STACK), (INGREDIENT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalToChemicalRecipe_<CHEMICAL, STACK, INGREDIENT> = $ChemicalToChemicalRecipe$Type<(CHEMICAL), (STACK), (INGREDIENT)>;
}}
declare module "packages/mekanism/api/chemical/infuse/$IInfusionTank" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ChemicalAttributeValidator, $ChemicalAttributeValidator$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttributeValidator"
import {$AutomationType, $AutomationType$Type} from "packages/mekanism/api/$AutomationType"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"
import {$IChemicalTank, $IChemicalTank$Type} from "packages/mekanism/api/chemical/$IChemicalTank"
import {$IEmptyInfusionProvider, $IEmptyInfusionProvider$Type} from "packages/mekanism/api/chemical/infuse/$IEmptyInfusionProvider"
import {$InfusionStack, $InfusionStack$Type} from "packages/mekanism/api/chemical/infuse/$InfusionStack"

export interface $IInfusionTank extends $IChemicalTank<($InfuseType), ($InfusionStack)>, $IEmptyInfusionProvider {

 "createStack"(arg0: $InfusionStack$Type, arg1: long): $InfusionStack
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getCapacity"(): long
 "extract"(arg0: long, arg1: $Action$Type, arg2: $AutomationType$Type): $InfusionStack
 "insert"(arg0: $InfusionStack$Type, arg1: $Action$Type, arg2: $AutomationType$Type): $InfusionStack
 "isEmpty"(): boolean
 "getType"(): $InfuseType
 "getStack"(): $InfusionStack
 "isValid"(arg0: $InfusionStack$Type): boolean
 "setEmpty"(): void
 "setStack"(arg0: $InfusionStack$Type): void
 "getAttributeValidator"(): $ChemicalAttributeValidator
 "growStack"(arg0: long, arg1: $Action$Type): long
 "getStored"(): long
 "setStackUnchecked"(arg0: $InfusionStack$Type): void
 "isTypeEqual"(arg0: $InfuseType$Type): boolean
 "isTypeEqual"(arg0: $InfusionStack$Type): boolean
 "serializeNBT"(): $CompoundTag
 "getNeeded"(): long
 "setStackSize"(arg0: long, arg1: $Action$Type): long
 "shrinkStack"(arg0: long, arg1: $Action$Type): long
 "getEmptyStack"(): $InfusionStack
 "onContentsChanged"(): void
}

export namespace $IInfusionTank {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInfusionTank$Type = ($IInfusionTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInfusionTank_ = $IInfusionTank$Type;
}}
declare module "packages/mekanism/api/security/$IOwnerObject" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IOwnerObject {

 "getOwnerName"(): string
 "ownerMatches"(arg0: $Player$Type): boolean
 "setOwnerUUID"(arg0: $UUID$Type): void
 "getOwnerUUID"(): $UUID
}

export namespace $IOwnerObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnerObject$Type = ($IOwnerObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnerObject_ = $IOwnerObject$Type;
}}
declare module "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$InfusionStackIngredient" {
import {$ChemicalStackIngredient, $ChemicalStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InfusionStack, $InfusionStack$Type} from "packages/mekanism/api/chemical/infuse/$InfusionStack"

export interface $ChemicalStackIngredient$InfusionStackIngredient extends $ChemicalStackIngredient<($InfuseType), ($InfusionStack)> {

 "testType"(arg0: $InfuseType$Type): boolean
 "write"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(): $JsonElement
 "getRepresentations"(): $List<($InfusionStack)>
 "hasNoMatchingInstances"(): boolean
 "getNeededAmount"(arg0: $InfusionStack$Type): long
 "testType"(arg0: $InfusionStack$Type): boolean
 "getMatchingInstance"(arg0: $InfusionStack$Type): $InfusionStack
 "test"(arg0: $InfusionStack$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($InfusionStack)>
 "negate"(): $Predicate<($InfusionStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($InfusionStack)>
}

export namespace $ChemicalStackIngredient$InfusionStackIngredient {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($InfusionStack)>
function isEqual<T>(arg0: any): $Predicate<($InfusionStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalStackIngredient$InfusionStackIngredient$Type = ($ChemicalStackIngredient$InfusionStackIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalStackIngredient$InfusionStackIngredient_ = $ChemicalStackIngredient$InfusionStackIngredient$Type;
}}
declare module "packages/mekanism/api/recipes/$ElectrolysisRecipe" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FluidStackIngredient, $FluidStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$FluidStackIngredient"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ElectrolysisRecipe$ElectrolysisRecipeOutput, $ElectrolysisRecipe$ElectrolysisRecipeOutput$Type} from "packages/mekanism/api/recipes/$ElectrolysisRecipe$ElectrolysisRecipeOutput"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"

export class $ElectrolysisRecipe extends $MekanismRecipe implements $Predicate<($FluidStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $FluidStackIngredient$Type, arg2: $FloatingLong$Type, arg3: $GasStack$Type, arg4: $GasStack$Type)

public "getInput"(): $FluidStackIngredient
public "test"(arg0: $FluidStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "isIncomplete"(): boolean
public "getOutput"(arg0: $FluidStack$Type): $ElectrolysisRecipe$ElectrolysisRecipeOutput
public "getOutputDefinition"(): $List<($ElectrolysisRecipe$ElectrolysisRecipeOutput)>
public "getEnergyMultiplier"(): $FloatingLong
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
get "input"(): $FluidStackIngredient
get "incomplete"(): boolean
get "outputDefinition"(): $List<($ElectrolysisRecipe$ElectrolysisRecipeOutput)>
get "energyMultiplier"(): $FloatingLong
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrolysisRecipe$Type = ($ElectrolysisRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrolysisRecipe_ = $ElectrolysisRecipe$Type;
}}
declare module "packages/mekanism/api/chemical/slurry/$ISlurryHandler" {
import {$IChemicalHandler, $IChemicalHandler$Type} from "packages/mekanism/api/chemical/$IChemicalHandler"
import {$IEmptySlurryProvider, $IEmptySlurryProvider$Type} from "packages/mekanism/api/chemical/slurry/$IEmptySlurryProvider"
import {$SlurryStack, $SlurryStack$Type} from "packages/mekanism/api/chemical/slurry/$SlurryStack"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$Slurry, $Slurry$Type} from "packages/mekanism/api/chemical/slurry/$Slurry"

export interface $ISlurryHandler extends $IChemicalHandler<($Slurry), ($SlurryStack)>, $IEmptySlurryProvider {

 "isValid"(arg0: integer, arg1: $SlurryStack$Type): boolean
 "insertChemical"(arg0: integer, arg1: $SlurryStack$Type, arg2: $Action$Type): $SlurryStack
 "insertChemical"(arg0: $SlurryStack$Type, arg1: $Action$Type): $SlurryStack
 "setChemicalInTank"(arg0: integer, arg1: $SlurryStack$Type): void
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): long
 "getChemicalInTank"(arg0: integer): $SlurryStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): $SlurryStack
 "extractChemical"(arg0: long, arg1: $Action$Type): $SlurryStack
 "extractChemical"(arg0: $SlurryStack$Type, arg1: $Action$Type): $SlurryStack
 "getEmptyStack"(): $SlurryStack
}

export namespace $ISlurryHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlurryHandler$Type = ($ISlurryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlurryHandler_ = $ISlurryHandler$Type;
}}
declare module "packages/mekanism/api/chemical/$ChemicalType" {
import {$ChemicalStackIngredient, $ChemicalStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ChemicalType extends $Enum<($ChemicalType)> implements $StringRepresentable {
static readonly "GAS": $ChemicalType
static readonly "INFUSION": $ChemicalType
static readonly "PIGMENT": $ChemicalType
static readonly "SLURRY": $ChemicalType


public static "fromString"(arg0: string): $ChemicalType
public static "values"(): ($ChemicalType)[]
public "isInstance"(arg0: $Chemical$Type<(any)>): boolean
public static "valueOf"(arg0: string): $ChemicalType
public "write"(arg0: $CompoundTag$Type): void
public static "getTypeFor"(arg0: $Chemical$Type<(any)>): $ChemicalType
public static "getTypeFor"(arg0: $ChemicalStackIngredient$Type<(any), (any)>): $ChemicalType
public static "getTypeFor"(arg0: $ChemicalStack$Type<(any)>): $ChemicalType
public "getSerializedName"(): string
public static "fromNBT"(arg0: $CompoundTag$Type): $ChemicalType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalType$Type = (("infusion") | ("gas") | ("pigment") | ("slurry")) | ($ChemicalType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalType_ = $ChemicalType$Type;
}}
declare module "packages/mekanism/api/providers/$IInfuseTypeProvider" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"
import {$IChemicalProvider, $IChemicalProvider$Type} from "packages/mekanism/api/providers/$IChemicalProvider"
import {$InfusionStack, $InfusionStack$Type} from "packages/mekanism/api/chemical/infuse/$InfusionStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IInfuseTypeProvider extends $IChemicalProvider<($InfuseType)> {

 "getStack"(arg0: long): $InfusionStack
 "getChemical"(): $InfuseType
 "getRegistryName"(): $ResourceLocation
 "getTranslationKey"(): string
 "getTextComponent"(): $Component
 "getName"(): string

(arg0: long): $InfusionStack
}

export namespace $IInfuseTypeProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInfuseTypeProvider$Type = ($IInfuseTypeProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInfuseTypeProvider_ = $IInfuseTypeProvider$Type;
}}
declare module "packages/mekanism/api/chemical/gas/$EmptyGas" {
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"

export class $EmptyGas extends $Gas {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyGas$Type = ($EmptyGas);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyGas_ = $EmptyGas$Type;
}}
declare module "packages/mekanism/api/energy/$ISidedStrictEnergyHandler" {
import {$IStrictEnergyHandler, $IStrictEnergyHandler$Type} from "packages/mekanism/api/energy/$IStrictEnergyHandler"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"

export interface $ISidedStrictEnergyHandler extends $IStrictEnergyHandler {

 "setEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Direction$Type): void
 "setEnergy"(arg0: integer, arg1: $FloatingLong$Type): void
 "getEnergyContainerCount"(): integer
 "getEnergyContainerCount"(arg0: $Direction$Type): integer
 "extractEnergy"(arg0: $FloatingLong$Type, arg1: $Direction$Type, arg2: $Action$Type): $FloatingLong
 "extractEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Action$Type): $FloatingLong
 "extractEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Direction$Type, arg3: $Action$Type): $FloatingLong
 "getEnergy"(arg0: integer, arg1: $Direction$Type): $FloatingLong
 "getEnergy"(arg0: integer): $FloatingLong
 "getEnergySideFor"(): $Direction
 "getMaxEnergy"(arg0: integer, arg1: $Direction$Type): $FloatingLong
 "getMaxEnergy"(arg0: integer): $FloatingLong
 "insertEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Direction$Type, arg3: $Action$Type): $FloatingLong
 "insertEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Action$Type): $FloatingLong
 "insertEnergy"(arg0: $FloatingLong$Type, arg1: $Direction$Type, arg2: $Action$Type): $FloatingLong
 "getNeededEnergy"(arg0: integer, arg1: $Direction$Type): $FloatingLong
 "getNeededEnergy"(arg0: integer): $FloatingLong
 "extractEnergy"(arg0: $FloatingLong$Type, arg1: $Action$Type): $FloatingLong
 "insertEnergy"(arg0: $FloatingLong$Type, arg1: $Action$Type): $FloatingLong
}

export namespace $ISidedStrictEnergyHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedStrictEnergyHandler$Type = ($ISidedStrictEnergyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedStrictEnergyHandler_ = $ISidedStrictEnergyHandler$Type;
}}
declare module "packages/mekanism/api/chemical/infuse/$IInfusionHandler$ISidedInfusionHandler" {
import {$IInfusionHandler, $IInfusionHandler$Type} from "packages/mekanism/api/chemical/infuse/$IInfusionHandler"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$ISidedChemicalHandler, $ISidedChemicalHandler$Type} from "packages/mekanism/api/chemical/$ISidedChemicalHandler"
import {$InfuseType, $InfuseType$Type} from "packages/mekanism/api/chemical/infuse/$InfuseType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InfusionStack, $InfusionStack$Type} from "packages/mekanism/api/chemical/infuse/$InfusionStack"

export interface $IInfusionHandler$ISidedInfusionHandler extends $ISidedChemicalHandler<($InfuseType), ($InfusionStack)>, $IInfusionHandler {

 "isValid"(arg0: integer, arg1: $InfusionStack$Type): boolean
 "isValid"(arg0: integer, arg1: $InfusionStack$Type, arg2: $Direction$Type): boolean
 "insertChemical"(arg0: $InfusionStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $InfusionStack
 "insertChemical"(arg0: integer, arg1: $InfusionStack$Type, arg2: $Direction$Type, arg3: $Action$Type): $InfusionStack
 "insertChemical"(arg0: integer, arg1: $InfusionStack$Type, arg2: $Action$Type): $InfusionStack
 "setChemicalInTank"(arg0: integer, arg1: $InfusionStack$Type): void
 "setChemicalInTank"(arg0: integer, arg1: $InfusionStack$Type, arg2: $Direction$Type): void
 "getSideFor"(): $Direction
 "getTanks"(): integer
 "getTanks"(arg0: $Direction$Type): integer
 "getTankCapacity"(arg0: integer): long
 "getTankCapacity"(arg0: integer, arg1: $Direction$Type): long
 "getChemicalInTank"(arg0: integer, arg1: $Direction$Type): $InfusionStack
 "getChemicalInTank"(arg0: integer): $InfusionStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Direction$Type, arg3: $Action$Type): $InfusionStack
 "extractChemical"(arg0: long, arg1: $Direction$Type, arg2: $Action$Type): $InfusionStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$Type): $InfusionStack
 "extractChemical"(arg0: $InfusionStack$Type, arg1: $Direction$Type, arg2: $Action$Type): $InfusionStack
 "insertChemical"(arg0: $InfusionStack$Type, arg1: $Action$Type): $InfusionStack
 "extractChemical"(arg0: long, arg1: $Action$Type): $InfusionStack
 "extractChemical"(arg0: $InfusionStack$Type, arg1: $Action$Type): $InfusionStack
 "getEmptyStack"(): $InfusionStack
}

export namespace $IInfusionHandler$ISidedInfusionHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInfusionHandler$ISidedInfusionHandler$Type = ($IInfusionHandler$ISidedInfusionHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInfusionHandler$ISidedInfusionHandler_ = $IInfusionHandler$ISidedInfusionHandler$Type;
}}
declare module "packages/mekanism/api/$IConfigurable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export interface $IConfigurable {

 "onRightClick"(arg0: $Player$Type): $InteractionResult
 "onSneakRightClick"(arg0: $Player$Type): $InteractionResult
}

export namespace $IConfigurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurable$Type = ($IConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurable_ = $IConfigurable$Type;
}}
declare module "packages/mekanism/api/fluid/$IExtendedFluidHandler" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export interface $IExtendedFluidHandler extends $IFluidHandler {

/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "extractFluid"(arg0: $FluidStack$Type, arg1: $Action$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Action$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Action$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$Type, arg2: $Action$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$Type, arg1: $Action$Type): $FluidStack
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type): void
 "getFluidInTank"(arg0: integer): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
}

export namespace $IExtendedFluidHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedFluidHandler$Type = ($IExtendedFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedFluidHandler_ = $IExtendedFluidHandler$Type;
}}
declare module "packages/mekanism/api/$Upgrade$IUpgradeInfoHandler" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Upgrade, $Upgrade$Type} from "packages/mekanism/api/$Upgrade"

export interface $Upgrade$IUpgradeInfoHandler {

 "getInfo"(arg0: $Upgrade$Type): $List<($Component)>

(arg0: $Upgrade$Type): $List<($Component)>
}

export namespace $Upgrade$IUpgradeInfoHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Upgrade$IUpgradeInfoHandler$Type = ($Upgrade$IUpgradeInfoHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Upgrade$IUpgradeInfoHandler_ = $Upgrade$IUpgradeInfoHandler$Type;
}}
declare module "packages/mekanism/api/providers/$IPigmentProvider" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IChemicalProvider, $IChemicalProvider$Type} from "packages/mekanism/api/providers/$IChemicalProvider"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PigmentStack, $PigmentStack$Type} from "packages/mekanism/api/chemical/pigment/$PigmentStack"

export interface $IPigmentProvider extends $IChemicalProvider<($Pigment)> {

 "getStack"(arg0: long): $PigmentStack
 "getChemical"(): $Pigment
 "getRegistryName"(): $ResourceLocation
 "getTranslationKey"(): string
 "getTextComponent"(): $Component
 "getName"(): string

(arg0: long): $PigmentStack
}

export namespace $IPigmentProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPigmentProvider$Type = ($IPigmentProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPigmentProvider_ = $IPigmentProvider$Type;
}}
declare module "packages/mekanism/api/gear/config/$ModuleConfigItemCreator" {
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$ModuleConfigData, $ModuleConfigData$Type} from "packages/mekanism/api/gear/config/$ModuleConfigData"
import {$ILangEntry, $ILangEntry$Type} from "packages/mekanism/api/text/$ILangEntry"
import {$IModuleConfigItem, $IModuleConfigItem$Type} from "packages/mekanism/api/gear/config/$IModuleConfigItem"

export interface $ModuleConfigItemCreator {

 "createDisableableConfigItem"(arg0: string, arg1: $ILangEntry$Type, arg2: boolean, arg3: $BooleanSupplier$Type): $IModuleConfigItem<(boolean)>
 "createConfigItem"<TYPE>(arg0: string, arg1: $ILangEntry$Type, arg2: $ModuleConfigData$Type<(TYPE)>): $IModuleConfigItem<(TYPE)>
}

export namespace $ModuleConfigItemCreator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleConfigItemCreator$Type = ($ModuleConfigItemCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleConfigItemCreator_ = $ModuleConfigItemCreator$Type;
}}
declare module "packages/mekanism/api/$IAlloyInteraction" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AlloyTier, $AlloyTier$Type} from "packages/mekanism/api/tier/$AlloyTier"

export interface $IAlloyInteraction {

 "onAlloyInteraction"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $AlloyTier$Type): void

(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $AlloyTier$Type): void
}

export namespace $IAlloyInteraction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAlloyInteraction$Type = ($IAlloyInteraction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAlloyInteraction_ = $IAlloyInteraction$Type;
}}
declare module "packages/mekanism/api/recipes/$PaintingRecipe" {
import {$ChemicalStackIngredient$PigmentStackIngredient, $ChemicalStackIngredient$PigmentStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$PigmentStackIngredient"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemStackChemicalToItemStackRecipe, $ItemStackChemicalToItemStackRecipe$Type} from "packages/mekanism/api/recipes/chemical/$ItemStackChemicalToItemStackRecipe"
import {$PigmentStack, $PigmentStack$Type} from "packages/mekanism/api/chemical/pigment/$PigmentStack"

export class $PaintingRecipe extends $ItemStackChemicalToItemStackRecipe<($Pigment), ($PigmentStack), ($ChemicalStackIngredient$PigmentStackIngredient)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $ChemicalStackIngredient$PigmentStackIngredient$Type, arg3: $ItemStack$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingRecipe$Type = ($PaintingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingRecipe_ = $PaintingRecipe$Type;
}}
declare module "packages/mekanism/api/math/$FloatingLongSupplier" {
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"

export interface $FloatingLongSupplier extends $Supplier<($FloatingLong)>, $NonNullSupplier<($FloatingLong)> {

 "get"(): $FloatingLong

(): $FloatingLong
}

export namespace $FloatingLongSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatingLongSupplier$Type = ($FloatingLongSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatingLongSupplier_ = $FloatingLongSupplier$Type;
}}
declare module "packages/mekanism/api/gear/$ModuleData$ExclusiveFlag" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ModuleData$ExclusiveFlag extends $Enum<($ModuleData$ExclusiveFlag)> {
static readonly "INTERACT_EMPTY": $ModuleData$ExclusiveFlag
static readonly "INTERACT_ENTITY": $ModuleData$ExclusiveFlag
static readonly "INTERACT_BLOCK": $ModuleData$ExclusiveFlag
static readonly "OVERRIDE_JUMP": $ModuleData$ExclusiveFlag
static readonly "OVERRIDE_DROPS": $ModuleData$ExclusiveFlag
static readonly "NONE": integer
static readonly "ANY": integer
static readonly "INTERACT_ANY": integer


public static "values"(): ($ModuleData$ExclusiveFlag)[]
public static "valueOf"(arg0: string): $ModuleData$ExclusiveFlag
public "getMask"(): integer
public static "getCompoundMask"(...arg0: ($ModuleData$ExclusiveFlag$Type)[]): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleData$ExclusiveFlag$Type = (("override_drops") | ("interact_empty") | ("interact_entity") | ("override_jump") | ("interact_block")) | ($ModuleData$ExclusiveFlag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleData$ExclusiveFlag_ = $ModuleData$ExclusiveFlag$Type;
}}
declare module "packages/mekanism/api/chemical/$Chemical" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ToIntBiFunction, $ToIntBiFunction$Type} from "packages/java/util/function/$ToIntBiFunction"
import {$ChemicalAttribute, $ChemicalAttribute$Type} from "packages/mekanism/api/chemical/attribute/$ChemicalAttribute"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IChemicalAttributeContainer, $IChemicalAttributeContainer$Type} from "packages/mekanism/api/chemical/attribute/$IChemicalAttributeContainer"
import {$IChemicalProvider, $IChemicalProvider$Type} from "packages/mekanism/api/providers/$IChemicalProvider"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ToLongBiFunction, $ToLongBiFunction$Type} from "packages/java/util/function/$ToLongBiFunction"
import {$ToLongFunction, $ToLongFunction$Type} from "packages/java/util/function/$ToLongFunction"
import {$ToDoubleFunction, $ToDoubleFunction$Type} from "packages/java/util/function/$ToDoubleFunction"
import {$ToDoubleBiFunction, $ToDoubleBiFunction$Type} from "packages/java/util/function/$ToDoubleBiFunction"

export class $Chemical<CHEMICAL extends $Chemical<(CHEMICAL)>> implements $IChemicalProvider<(CHEMICAL)>, $IChemicalAttributeContainer<(CHEMICAL)> {


public "get"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>): ATTRIBUTE
public "isHidden"(): boolean
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "getAttributes"(): $Collection<($ChemicalAttribute)>
public "addAttribute"(arg0: $ChemicalAttribute$Type): void
public "is"(arg0: $TagKey$Type<(CHEMICAL)>): boolean
public "has"(arg0: $Class$Type<(any)>): boolean
public "getIcon"(): $ResourceLocation
public "getColorRepresentation"(): integer
public "getAttributeTypes"(): $Collection<($Class<(any)>)>
public "getChemical"(): CHEMICAL
public "isEmptyType"(): boolean
public "getRegistryName"(): $ResourceLocation
public "getTranslationKey"(): string
public "getTags"(): $Stream<($TagKey<(CHEMICAL)>)>
public "getTint"(): integer
public "getTextComponent"(): $Component
public "getStack"(arg0: long): $ChemicalStack<(CHEMICAL)>
public "ifAttributePresent"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $Consumer$Type<(any)>): void
public "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $BiFunction$Type<(CHEMICAL), (any), (any)>, arg2: V): V
public "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $Function$Type<(any), (any)>, arg2: V): V
public "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToLongFunction$Type<(any)>): long
public "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToLongBiFunction$Type<(CHEMICAL), (any)>): long
public "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToIntBiFunction$Type<(CHEMICAL), (any)>): integer
public "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToIntFunction$Type<(any)>): integer
public "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToDoubleBiFunction$Type<(CHEMICAL), (any)>): double
public "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$Type<(ATTRIBUTE)>, arg1: $ToDoubleFunction$Type<(any)>): double
public "getName"(): string
get "hidden"(): boolean
get "attributes"(): $Collection<($ChemicalAttribute)>
get "icon"(): $ResourceLocation
get "colorRepresentation"(): integer
get "attributeTypes"(): $Collection<($Class<(any)>)>
get "chemical"(): CHEMICAL
get "emptyType"(): boolean
get "registryName"(): $ResourceLocation
get "translationKey"(): string
get "tags"(): $Stream<($TagKey<(CHEMICAL)>)>
get "tint"(): integer
get "textComponent"(): $Component
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chemical$Type<CHEMICAL> = ($Chemical<(CHEMICAL)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chemical_<CHEMICAL> = $Chemical$Type<(CHEMICAL)>;
}}
declare module "packages/mekanism/api/tier/$BaseTier" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SupportsColorMap, $SupportsColorMap$Type} from "packages/mekanism/api/$SupportsColorMap"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $BaseTier extends $Enum<($BaseTier)> implements $StringRepresentable, $SupportsColorMap {
static readonly "BASIC": $BaseTier
static readonly "ADVANCED": $BaseTier
static readonly "ELITE": $BaseTier
static readonly "ULTIMATE": $BaseTier
static readonly "CREATIVE": $BaseTier


public static "values"(): ($BaseTier)[]
public static "valueOf"(arg0: string): $BaseTier
public "getSimpleName"(): string
public "getColor"(): $TextColor
public "getSerializedName"(): string
public "getMapColor"(): $MapColor
public "getRgbCode"(): (integer)[]
public "setColorFromAtlas"(arg0: (integer)[]): void
public "getLowerName"(): string
public static "byIndexStatic"(arg0: integer): $BaseTier
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public "getColor"(arg0: integer): float
public "getRgbCodeFloat"(): (float)[]
get "simpleName"(): string
get "color"(): $TextColor
get "serializedName"(): string
get "mapColor"(): $MapColor
get "rgbCode"(): (integer)[]
set "colorFromAtlas"(value: (integer)[])
get "lowerName"(): string
get "rgbCodeFloat"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseTier$Type = (("elite") | ("advanced") | ("ultimate") | ("basic") | ("creative")) | ($BaseTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseTier_ = $BaseTier$Type;
}}
declare module "packages/mekanism/api/text/$ILangEntry" {
import {$IHasTranslationKey, $IHasTranslationKey$Type} from "packages/mekanism/api/text/$IHasTranslationKey"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$EnumColor, $EnumColor$Type} from "packages/mekanism/api/text/$EnumColor"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export interface $ILangEntry extends $IHasTranslationKey {

 "translate"(...arg0: (any)[]): $MutableComponent
 "translateColored"(arg0: $EnumColor$Type, ...arg1: (any)[]): $MutableComponent
 "translateColored"(arg0: $TextColor$Type, ...arg1: (any)[]): $MutableComponent
 "getTranslationKey"(): string

(...arg0: (any)[]): $MutableComponent
}

export namespace $ILangEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILangEntry$Type = ($ILangEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILangEntry_ = $ILangEntry$Type;
}}
declare module "packages/mekanism/api/text/$EnumColor" {
import {$APILang, $APILang$Type} from "packages/mekanism/api/text/$APILang"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$IIncrementalEnum, $IIncrementalEnum$Type} from "packages/mekanism/api/$IIncrementalEnum"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$SupportsColorMap, $SupportsColorMap$Type} from "packages/mekanism/api/$SupportsColorMap"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $EnumColor extends $Enum<($EnumColor)> implements $IIncrementalEnum<($EnumColor)>, $SupportsColorMap {
static readonly "BLACK": $EnumColor
static readonly "DARK_BLUE": $EnumColor
static readonly "DARK_GREEN": $EnumColor
static readonly "DARK_AQUA": $EnumColor
static readonly "DARK_RED": $EnumColor
static readonly "PURPLE": $EnumColor
static readonly "ORANGE": $EnumColor
static readonly "GRAY": $EnumColor
static readonly "DARK_GRAY": $EnumColor
static readonly "INDIGO": $EnumColor
static readonly "BRIGHT_GREEN": $EnumColor
static readonly "AQUA": $EnumColor
static readonly "RED": $EnumColor
static readonly "PINK": $EnumColor
static readonly "YELLOW": $EnumColor
static readonly "WHITE": $EnumColor
static readonly "BROWN": $EnumColor
static readonly "BRIGHT_PINK": $EnumColor
readonly "code": string


public "getName"(): $MutableComponent
public "toString"(): string
public static "values"(): ($EnumColor)[]
public static "valueOf"(arg0: string): $EnumColor
public "getColoredName"(): $Component
public "byIndex"(arg0: integer): $EnumColor
public "getColor"(): $TextColor
public "getMapColor"(): $MapColor
public "getRegistryPrefix"(): string
public "getRgbCode"(): (integer)[]
public "setColorFromAtlas"(arg0: (integer)[]): void
public "getDyeColor"(): $DyeColor
public "getEnglishName"(): string
public "getLangEntry"(): $APILang
public static "byIndexStatic"(arg0: integer): $EnumColor
public "ordinal"(): integer
public "adjust"(arg0: integer): $EnumColor
public "adjust"(arg0: integer, arg1: $Predicate$Type<($EnumColor$Type)>): $EnumColor
public "getNext"(arg0: $Predicate$Type<($EnumColor$Type)>): $EnumColor
public "getNext"(): $EnumColor
public "getPrevious"(): $EnumColor
public "getPrevious"(arg0: $Predicate$Type<($EnumColor$Type)>): $EnumColor
public "getColor"(arg0: integer): float
public "getRgbCodeFloat"(): (float)[]
get "name"(): $MutableComponent
get "coloredName"(): $Component
get "color"(): $TextColor
get "mapColor"(): $MapColor
get "registryPrefix"(): string
get "rgbCode"(): (integer)[]
set "colorFromAtlas"(value: (integer)[])
get "dyeColor"(): $DyeColor
get "englishName"(): string
get "langEntry"(): $APILang
get "next"(): $EnumColor
get "previous"(): $EnumColor
get "rgbCodeFloat"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumColor$Type = (("pink") | ("dark_red") | ("dark_green") | ("black") | ("yellow") | ("brown") | ("bright_pink") | ("dark_blue") | ("orange") | ("red") | ("aqua") | ("gray") | ("white") | ("bright_green") | ("dark_aqua") | ("purple") | ("dark_gray") | ("indigo")) | ($EnumColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumColor_ = $EnumColor$Type;
}}
declare module "packages/mekanism/api/recipes/$SawmillRecipe" {
import {$MekanismRecipe, $MekanismRecipe$Type} from "packages/mekanism/api/recipes/$MekanismRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStackIngredient, $ItemStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ItemStackIngredient"
import {$SawmillRecipe$ChanceOutput, $SawmillRecipe$ChanceOutput$Type} from "packages/mekanism/api/recipes/$SawmillRecipe$ChanceOutput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SawmillRecipe extends $MekanismRecipe implements $Predicate<($ItemStack)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStackIngredient$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type, arg4: double)

public "getInput"(): $ItemStackIngredient
public "test"(arg0: $ItemStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getSecondaryChance"(): double
public "isIncomplete"(): boolean
public "getOutput"(arg0: $ItemStack$Type): $SawmillRecipe$ChanceOutput
public "getMainOutputDefinition"(): $List<($ItemStack)>
public "getSecondaryOutputDefinition"(): $List<($ItemStack)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "input"(): $ItemStackIngredient
get "secondaryChance"(): double
get "incomplete"(): boolean
get "mainOutputDefinition"(): $List<($ItemStack)>
get "secondaryOutputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawmillRecipe$Type = ($SawmillRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawmillRecipe_ = $SawmillRecipe$Type;
}}
declare module "packages/mekanism/api/radial/mode/$IRadialMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnumColor, $EnumColor$Type} from "packages/mekanism/api/text/$EnumColor"

export interface $IRadialMode {

 "color"(): $EnumColor
 "icon"(): $ResourceLocation
 "sliceName"(): $Component
}

export namespace $IRadialMode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRadialMode$Type = ($IRadialMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRadialMode_ = $IRadialMode$Type;
}}
declare module "packages/mekanism/api/gear/$IModule" {
import {$IEnergyContainer, $IEnergyContainer$Type} from "packages/mekanism/api/energy/$IEnergyContainer"
import {$FloatingLongSupplier, $FloatingLongSupplier$Type} from "packages/mekanism/api/math/$FloatingLongSupplier"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleData, $ModuleData$Type} from "packages/mekanism/api/gear/$ModuleData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IHasTextComponent, $IHasTextComponent$Type} from "packages/mekanism/api/text/$IHasTextComponent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"
import {$ICustomModule, $ICustomModule$Type} from "packages/mekanism/api/gear/$ICustomModule"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IModule<MODULE extends $ICustomModule<(MODULE)>> {

 "isEnabled"(): boolean
 "getData"(): $ModuleData<(MODULE)>
 "getContainer"(): $ItemStack
 "hasEnoughEnergy"(arg0: $FloatingLong$Type): boolean
 "hasEnoughEnergy"(arg0: $FloatingLongSupplier$Type): boolean
 "renderHUD"(): boolean
 "getContainerEnergy"(): $FloatingLong
 "getInstalledCount"(): integer
 "toggleEnabled"(arg0: $Player$Type, arg1: $Component$Type): void
 "getEnergyContainer"(): $IEnergyContainer
 "handlesRadialModeChange"(): boolean
 "getCustomInstance"(): MODULE
 "useEnergy"(arg0: $LivingEntity$Type, arg1: $IEnergyContainer$Type, arg2: $FloatingLong$Type, arg3: boolean): $FloatingLong
 "useEnergy"(arg0: $LivingEntity$Type, arg1: $FloatingLong$Type): $FloatingLong
 "useEnergy"(arg0: $LivingEntity$Type, arg1: $FloatingLong$Type, arg2: boolean): $FloatingLong
 "canUseEnergy"(arg0: $LivingEntity$Type, arg1: $IEnergyContainer$Type, arg2: $FloatingLong$Type, arg3: boolean): boolean
 "canUseEnergy"(arg0: $LivingEntity$Type, arg1: $FloatingLong$Type, arg2: boolean): boolean
 "canUseEnergy"(arg0: $LivingEntity$Type, arg1: $FloatingLong$Type): boolean
 "handlesModeChange"(): boolean
 "displayModeChange"(arg0: $Player$Type, arg1: $Component$Type, arg2: $IHasTextComponent$Type): void
}

export namespace $IModule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModule$Type<MODULE> = ($IModule<(MODULE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModule_<MODULE> = $IModule$Type<(MODULE)>;
}}
declare module "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient$PigmentStackIngredient" {
import {$ChemicalStackIngredient, $ChemicalStackIngredient$Type} from "packages/mekanism/api/recipes/ingredients/$ChemicalStackIngredient"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"
import {$PigmentStack, $PigmentStack$Type} from "packages/mekanism/api/chemical/pigment/$PigmentStack"

export interface $ChemicalStackIngredient$PigmentStackIngredient extends $ChemicalStackIngredient<($Pigment), ($PigmentStack)> {

 "testType"(arg0: $Pigment$Type): boolean
 "write"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(): $JsonElement
 "getRepresentations"(): $List<($PigmentStack)>
 "hasNoMatchingInstances"(): boolean
 "getNeededAmount"(arg0: $PigmentStack$Type): long
 "testType"(arg0: $PigmentStack$Type): boolean
 "getMatchingInstance"(arg0: $PigmentStack$Type): $PigmentStack
 "test"(arg0: $PigmentStack$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($PigmentStack)>
 "negate"(): $Predicate<($PigmentStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($PigmentStack)>
}

export namespace $ChemicalStackIngredient$PigmentStackIngredient {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($PigmentStack)>
function isEqual<T>(arg0: any): $Predicate<($PigmentStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalStackIngredient$PigmentStackIngredient$Type = ($ChemicalStackIngredient$PigmentStackIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalStackIngredient$PigmentStackIngredient_ = $ChemicalStackIngredient$PigmentStackIngredient$Type;
}}
declare module "packages/mekanism/api/radial/mode/$INestedRadialMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRadialMode, $IRadialMode$Type} from "packages/mekanism/api/radial/mode/$IRadialMode"
import {$RadialData, $RadialData$Type} from "packages/mekanism/api/radial/$RadialData"
import {$EnumColor, $EnumColor$Type} from "packages/mekanism/api/text/$EnumColor"

export interface $INestedRadialMode extends $IRadialMode {

 "hasNestedData"(): boolean
 "nestedData"(): $RadialData<(any)>
 "color"(): $EnumColor
 "icon"(): $ResourceLocation
 "sliceName"(): $Component
}

export namespace $INestedRadialMode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INestedRadialMode$Type = ($INestedRadialMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INestedRadialMode_ = $INestedRadialMode$Type;
}}
declare module "packages/mekanism/api/chemical/infuse/$InfuseType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InfuseTypeBuilder, $InfuseTypeBuilder$Type} from "packages/mekanism/api/chemical/infuse/$InfuseTypeBuilder"
import {$Chemical, $Chemical$Type} from "packages/mekanism/api/chemical/$Chemical"
import {$IInfuseTypeProvider, $IInfuseTypeProvider$Type} from "packages/mekanism/api/providers/$IInfuseTypeProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$InfusionStack, $InfusionStack$Type} from "packages/mekanism/api/chemical/infuse/$InfusionStack"

export class $InfuseType extends $Chemical<($InfuseType)> implements $IInfuseTypeProvider {

constructor(arg0: $InfuseTypeBuilder$Type)

public "toString"(): string
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "isEmptyType"(): boolean
public "getRegistryName"(): $ResourceLocation
public static "readFromNBT"(arg0: $CompoundTag$Type): $InfuseType
public static "getFromRegistry"(arg0: $ResourceLocation$Type): $InfuseType
public "getStack"(arg0: long): $InfusionStack
get "emptyType"(): boolean
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfuseType$Type = ($InfuseType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfuseType_ = $InfuseType$Type;
}}
declare module "packages/mekanism/api/chemical/gas/$GasStack" {
import {$ChemicalStack, $ChemicalStack$Type} from "packages/mekanism/api/chemical/$ChemicalStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IGasProvider, $IGasProvider$Type} from "packages/mekanism/api/providers/$IGasProvider"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"

export class $GasStack extends $ChemicalStack<($Gas)> {
static readonly "EMPTY": $GasStack

constructor(arg0: $IGasProvider$Type, arg1: long)
constructor(arg0: $GasStack$Type, arg1: long)

public static "readFromNBT"(arg0: $CompoundTag$Type): $GasStack
public static "readFromPacket"(arg0: $FriendlyByteBuf$Type): $GasStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasStack$Type = ($GasStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasStack_ = $GasStack$Type;
}}
declare module "packages/mekanism/api/recipes/cache/$CachedRecipe$OperationTracker" {
import {$CachedRecipe$OperationTracker$RecipeError, $CachedRecipe$OperationTracker$RecipeError$Type} from "packages/mekanism/api/recipes/cache/$CachedRecipe$OperationTracker$RecipeError"

export class $CachedRecipe$OperationTracker {


public "resetProgress"(arg0: $CachedRecipe$OperationTracker$RecipeError$Type): void
public "addError"(arg0: $CachedRecipe$OperationTracker$RecipeError$Type): void
public "mismatchedRecipe"(): void
public "updateOperations"(arg0: integer): boolean
public "shouldContinueChecking"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedRecipe$OperationTracker$Type = ($CachedRecipe$OperationTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedRecipe$OperationTracker_ = $CachedRecipe$OperationTracker$Type;
}}
declare module "packages/mekanism/api/$IIncrementalEnum" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export interface $IIncrementalEnum<TYPE extends ($Enum<(TYPE)>) & ($IIncrementalEnum<(TYPE)>)> {

 "ordinal"(): integer
 "adjust"(arg0: integer): TYPE
 "adjust"(arg0: integer, arg1: $Predicate$Type<(TYPE)>): TYPE
 "getNext"(arg0: $Predicate$Type<(TYPE)>): TYPE
 "getNext"(): TYPE
 "byIndex"(arg0: integer): TYPE
 "getPrevious"(): TYPE
 "getPrevious"(arg0: $Predicate$Type<(TYPE)>): TYPE
}

export namespace $IIncrementalEnum {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIncrementalEnum$Type<TYPE> = ($IIncrementalEnum<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIncrementalEnum_<TYPE> = $IIncrementalEnum$Type<(TYPE)>;
}}
declare module "packages/mekanism/api/inventory/$IgnoredIInventory" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $IgnoredIInventory implements $Container {
static readonly "INSTANCE": $IgnoredIInventory


public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "clearContent"(): void
public "isEmpty"(): boolean
public "stillValid"(arg0: $Player$Type): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "countItem"(arg0: $Item$Type): integer
public "stopOpen"(arg0: $Player$Type): void
public "getHeight"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "asContainer"(): $Container
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "clear"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getSlotLimit"(slot: integer): integer
public "isMutable"(): boolean
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "setChanged"(): void
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public static "tryClear"(arg0: any): void
public "clear"(ingredient: $Ingredient$Type): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "isEmpty"(): boolean
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "height"(): integer
get "mutable"(): boolean
get "width"(): integer
get "slots"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IgnoredIInventory$Type = ($IgnoredIInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IgnoredIInventory_ = $IgnoredIInventory$Type;
}}
declare module "packages/mekanism/api/recipes/$SawmillRecipe$ChanceOutput" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $SawmillRecipe$ChanceOutput {


public "getSecondaryOutput"(): $ItemStack
public "getMainOutput"(): $ItemStack
public "getMaxSecondaryOutput"(): $ItemStack
public "nextSecondaryOutput"(): $ItemStack
get "secondaryOutput"(): $ItemStack
get "mainOutput"(): $ItemStack
get "maxSecondaryOutput"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawmillRecipe$ChanceOutput$Type = ($SawmillRecipe$ChanceOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawmillRecipe$ChanceOutput_ = $SawmillRecipe$ChanceOutput$Type;
}}
declare module "packages/mekanism/api/recipes/$ElectrolysisRecipe$ElectrolysisRecipeOutput" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ElectrolysisRecipe$ElectrolysisRecipeOutput extends $Record {

constructor(left: $GasStack$Type, right: $GasStack$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "left"(): $GasStack
public "right"(): $GasStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrolysisRecipe$ElectrolysisRecipeOutput$Type = ($ElectrolysisRecipe$ElectrolysisRecipeOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrolysisRecipe$ElectrolysisRecipeOutput_ = $ElectrolysisRecipe$ElectrolysisRecipeOutput$Type;
}}
declare module "packages/mekanism/api/robit/$RobitSkin" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $RobitSkin {

 "textures"(): $List<($ResourceLocation)>
 "codec"(): $Codec<(any)>
 "customModel"(): $ResourceLocation
 "isUnlocked"(arg0: $Player$Type): boolean
}

export namespace $RobitSkin {
function getTranslationKey(arg0: $ResourceKey$Type<(any)>): string
function getTranslatedName(arg0: $ResourceKey$Type<(any)>): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RobitSkin$Type = ($RobitSkin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RobitSkin_ = $RobitSkin$Type;
}}
declare module "packages/mekanism/api/energy/$IStrictEnergyHandler" {
import {$Action, $Action$Type} from "packages/mekanism/api/$Action"
import {$FloatingLong, $FloatingLong$Type} from "packages/mekanism/api/math/$FloatingLong"

export interface $IStrictEnergyHandler {

 "setEnergy"(arg0: integer, arg1: $FloatingLong$Type): void
 "getEnergyContainerCount"(): integer
 "extractEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Action$Type): $FloatingLong
 "extractEnergy"(arg0: $FloatingLong$Type, arg1: $Action$Type): $FloatingLong
 "getEnergy"(arg0: integer): $FloatingLong
 "getMaxEnergy"(arg0: integer): $FloatingLong
 "insertEnergy"(arg0: integer, arg1: $FloatingLong$Type, arg2: $Action$Type): $FloatingLong
 "insertEnergy"(arg0: $FloatingLong$Type, arg1: $Action$Type): $FloatingLong
 "getNeededEnergy"(arg0: integer): $FloatingLong
}

export namespace $IStrictEnergyHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStrictEnergyHandler$Type = ($IStrictEnergyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStrictEnergyHandler_ = $IStrictEnergyHandler$Type;
}}
declare module "packages/mekanism/api/chemical/gas/$IEmptyGasProvider" {
import {$GasStack, $GasStack$Type} from "packages/mekanism/api/chemical/gas/$GasStack"
import {$Gas, $Gas$Type} from "packages/mekanism/api/chemical/gas/$Gas"
import {$IEmptyStackProvider, $IEmptyStackProvider$Type} from "packages/mekanism/api/chemical/$IEmptyStackProvider"

export interface $IEmptyGasProvider extends $IEmptyStackProvider<($Gas), ($GasStack)> {

 "getEmptyStack"(): $GasStack
}

export namespace $IEmptyGasProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmptyGasProvider$Type = ($IEmptyGasProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmptyGasProvider_ = $IEmptyGasProvider$Type;
}}
declare module "packages/mekanism/api/providers/$IBlockProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IItemProvider, $IItemProvider$Type} from "packages/mekanism/api/providers/$IItemProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IBlockProvider extends $IItemProvider {

 "getBlock"(): $Block
 "getRegistryName"(): $ResourceLocation
 "getTranslationKey"(): string
 "getItemStack"(): $ItemStack
 "getItemStack"(arg0: integer): $ItemStack
 "getName"(): string
 "getTextComponent"(): $Component
 "asItem"(): $Item
}

export namespace $IBlockProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockProvider$Type = ($IBlockProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockProvider_ = $IBlockProvider$Type;
}}
declare module "packages/mekanism/api/chemical/pigment/$EmptyPigment" {
import {$Pigment, $Pigment$Type} from "packages/mekanism/api/chemical/pigment/$Pigment"

export class $EmptyPigment extends $Pigment {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyPigment$Type = ($EmptyPigment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyPigment_ = $EmptyPigment$Type;
}}
