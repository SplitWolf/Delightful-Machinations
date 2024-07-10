declare module "packages/com/tom/createores/recipe/$ExcavatingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$SmartInventory, $SmartInventory$Type} from "packages/com/simibubi/create/foundation/item/$SmartInventory"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ExcavatingRecipe implements $Recipe<($SmartInventory)> {
 "id": $ResourceLocation
 "type": $RecipeType<(any)>
 "serializer": $RecipeSerializer<(any)>
 "veinId": $ResourceLocation
 "drill": $Ingredient
 "priority": integer
 "ticks": integer
 "stressMul": integer
 "drillingFluid": $FluidIngredient

constructor(arg0: $ResourceLocation$Type, arg1: $RecipeType$Type<(any)>, arg2: $RecipeSerializer$Type<(any)>)

public "matches"(arg0: $SmartInventory$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getDrill"(): $Ingredient
public "getStress"(): integer
public "getDrillingFluid"(): $FluidIngredient
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $SmartInventory$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getTicks"(): integer
public "getId"(): $ResourceLocation
public "getRemainingItems"(arg0: $SmartInventory$Type): $NonNullList<($ItemStack)>
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
get "serializer"(): $RecipeSerializer<(any)>
get "drill"(): $Ingredient
get "stress"(): integer
get "drillingFluid"(): $FluidIngredient
get "ticks"(): integer
get "id"(): $ResourceLocation
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
export type $ExcavatingRecipe$Type = ($ExcavatingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExcavatingRecipe_ = $ExcavatingRecipe$Type;
}}
declare module "packages/com/tom/createores/block/entity/$ExtractorBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ExtractorRecipe, $ExtractorRecipe$Type} from "packages/com/tom/createores/recipe/$ExtractorRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ExcavatingBlockEntityImpl, $ExcavatingBlockEntityImpl$Type} from "packages/com/tom/createores/block/entity/$ExcavatingBlockEntityImpl"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IOBlockType, $IOBlockType$Type} from "packages/com/tom/createores/util/$IOBlockType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $ExtractorBlockEntity extends $ExcavatingBlockEntityImpl<($ExtractorRecipe)> {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "invalidate"(): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getCaps"<T>(arg0: $Capability$Type<(T)>, arg1: $IOBlockType$Type): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractorBlockEntity$Type = ($ExtractorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtractorBlockEntity_ = $ExtractorBlockEntity$Type;
}}
declare module "packages/com/tom/peripherals/item/$PortableKeyboardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
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
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PortableKeyboardItem extends $Item {
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
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "openKeyboard"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableKeyboardItem$Type = ($PortableKeyboardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableKeyboardItem_ = $PortableKeyboardItem$Type;
}}
declare module "packages/com/tom/createores/block/entity/$IDrill" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IDrill {

 "isActive"(): boolean
 "getDrill"(): $ItemStack
 "getBelow"(): $BlockPos
}

export namespace $IDrill {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrill$Type = ($IDrill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrill_ = $IDrill$Type;
}}
declare module "packages/com/tom/createores/block/entity/$MultiblockCapHandler$Kinetic" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MultiblockCapHandler$Kinetic {

 "setStress"(arg0: float): void
 "getRotationSpeed"(): float
}

export namespace $MultiblockCapHandler$Kinetic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockCapHandler$Kinetic$Type = ($MultiblockCapHandler$Kinetic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockCapHandler$Kinetic_ = $MultiblockCapHandler$Kinetic$Type;
}}
declare module "packages/com/tom/createores/block/entity/$MultiblockCapHandler" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IOBlockType, $IOBlockType$Type} from "packages/com/tom/createores/util/$IOBlockType"
import {$MultiblockCapHandler$Kinetic, $MultiblockCapHandler$Kinetic$Type} from "packages/com/tom/createores/block/entity/$MultiblockCapHandler$Kinetic"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $MultiblockCapHandler extends $IHaveGoggleInformation {

 "getCaps"<T>(arg0: $Capability$Type<(T)>, arg1: $IOBlockType$Type): $LazyOptional<(T)>
 "addKinetic"(arg0: $MultiblockCapHandler$Kinetic$Type): void
 "dropInv"(): void
 "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
 "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
}

export namespace $MultiblockCapHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockCapHandler$Type = ($MultiblockCapHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockCapHandler_ = $MultiblockCapHandler$Type;
}}
declare module "packages/com/tom/createores/block/entity/$DrillBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ExcavatingBlockEntityImpl, $ExcavatingBlockEntityImpl$Type} from "packages/com/tom/createores/block/entity/$ExcavatingBlockEntityImpl"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IOBlockType, $IOBlockType$Type} from "packages/com/tom/createores/util/$IOBlockType"
import {$DrillingRecipe, $DrillingRecipe$Type} from "packages/com/tom/createores/recipe/$DrillingRecipe"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $DrillBlockEntity extends $ExcavatingBlockEntityImpl<($DrillingRecipe)> {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "invalidate"(): void
public "getCaps"<T>(arg0: $Capability$Type<(T)>, arg1: $IOBlockType$Type): $LazyOptional<(T)>
public "dropInv"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBlockEntity$Type = ($DrillBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillBlockEntity_ = $DrillBlockEntity$Type;
}}
declare module "packages/com/tom/peripherals/block/$WatchDogTimerBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $WatchDogTimerBlock extends $Block implements $EntityBlock {
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
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchDogTimerBlock$Type = ($WatchDogTimerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatchDogTimerBlock_ = $WatchDogTimerBlock$Type;
}}
declare module "packages/com/tom/createores/item/$OreVeinFinderItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OreVeinFinderItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreVeinFinderItem$Type = ($OreVeinFinderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreVeinFinderItem_ = $OreVeinFinderItem$Type;
}}
declare module "packages/com/tom/createores/recipe/$ExcavatingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CreateOreExcavation$RecipeTypeGroup, $CreateOreExcavation$RecipeTypeGroup$Type} from "packages/com/tom/createores/$CreateOreExcavation$RecipeTypeGroup"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ExcavatingRecipe$RecipeFactory, $ExcavatingRecipe$RecipeFactory$Type} from "packages/com/tom/createores/recipe/$ExcavatingRecipe$RecipeFactory"
import {$ExcavatingRecipe, $ExcavatingRecipe$Type} from "packages/com/tom/createores/recipe/$ExcavatingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ExcavatingRecipe$Serializer<T extends $ExcavatingRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $CreateOreExcavation$RecipeTypeGroup$Type<(any)>, arg1: $ExcavatingRecipe$RecipeFactory$Type<(T)>)

public "toJson"(arg0: T, arg1: $JsonObject$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingRecipe$Serializer$Type<T> = ($ExcavatingRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExcavatingRecipe$Serializer_<T> = $ExcavatingRecipe$Serializer$Type<(T)>;
}}
declare module "packages/com/tom/peripherals/block/$IForgeBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeBlock {

 "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
}

export namespace $IForgeBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlock$Type = ($IForgeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlock_ = $IForgeBlock$Type;
}}
declare module "packages/com/tom/createores/block/entity/$MultiblockBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MultiblockBlockEntity extends $BlockEntity implements $IHaveGoggleInformation {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBlockEntity$Type = ($MultiblockBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockBlockEntity_ = $MultiblockBlockEntity$Type;
}}
declare module "packages/com/tom/createores/block/entity/$ExcavatingBlockEntityImpl" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ExcavatingBlockEntity, $ExcavatingBlockEntity$Type} from "packages/com/tom/createores/block/entity/$ExcavatingBlockEntity"
import {$IOBlockType, $IOBlockType$Type} from "packages/com/tom/createores/util/$IOBlockType"
import {$ExcavatingRecipe, $ExcavatingRecipe$Type} from "packages/com/tom/createores/recipe/$ExcavatingRecipe"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $ExcavatingBlockEntityImpl<R extends $ExcavatingRecipe> extends $ExcavatingBlockEntity<(R)> {


public "invalidate"(): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: R): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getCaps"<T>(arg0: $Capability$Type<(T)>, arg1: $IOBlockType$Type): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingBlockEntityImpl$Type<R> = ($ExcavatingBlockEntityImpl<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExcavatingBlockEntityImpl_<R> = $ExcavatingBlockEntityImpl$Type<(R)>;
}}
declare module "packages/com/tom/peripherals/block/$MonitorBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $MonitorBlock extends $Block implements $EntityBlock {
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
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonitorBlock$Type = ($MonitorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonitorBlock_ = $MonitorBlock$Type;
}}
declare module "packages/com/tom/createores/kubejs/$ExtractorRecipeJS" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$OutputFluid, $OutputFluid$Type} from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ExcavatingRecipeJS, $ExcavatingRecipeJS$Type} from "packages/com/tom/createores/kubejs/$ExcavatingRecipeJS"

export class $ExtractorRecipeJS extends $ExcavatingRecipeJS<($ExtractorRecipeJS)> {
static readonly "RESULT": $RecipeKey<($OutputFluid)>
static readonly "VEIN_NAME": $RecipeKey<(string)>
static readonly "TICKS": $RecipeKey<(integer)>
static readonly "SCHEMA": $RecipeSchema
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
export type $ExtractorRecipeJS$Type = ($ExtractorRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtractorRecipeJS_ = $ExtractorRecipeJS$Type;
}}
declare module "packages/com/tom/createores/util/$IOBlockType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $IOBlockType extends $Enum<($IOBlockType)> implements $StringRepresentable {
static readonly "ITEM_IN": $IOBlockType
static readonly "ITEM_OUT": $IOBlockType
static readonly "FLUID_IN": $IOBlockType
static readonly "FLUID_OUT": $IOBlockType
static readonly "ENERGY_IN": $IOBlockType
static readonly "ENERGY_OUT": $IOBlockType


public static "values"(): ($IOBlockType)[]
public static "valueOf"(arg0: string): $IOBlockType
public "getSerializedName"(): string
public "getCap"(): $Capability<(any)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "cap"(): $Capability<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOBlockType$Type = (("energy_out") | ("item_in") | ("item_out") | ("fluid_in") | ("fluid_out") | ("energy_in")) | ($IOBlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOBlockType_ = $IOBlockType$Type;
}}
declare module "packages/com/tom/createores/util/$ThreeState" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ThreeState extends $Enum<($ThreeState)> {
static readonly "DEFAULT": $ThreeState
static readonly "ALWAYS": $ThreeState
static readonly "NEVER": $ThreeState
static readonly "VALUES": ($ThreeState)[]


public static "get"(arg0: $JsonObject$Type, arg1: string): $ThreeState
public static "values"(): ($ThreeState)[]
public static "valueOf"(arg0: string): $ThreeState
public "toJson"(arg0: $JsonObject$Type, arg1: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreeState$Type = (("always") | ("never") | ("default")) | ($ThreeState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreeState_ = $ThreeState$Type;
}}
declare module "packages/com/tom/createores/item/$MultiBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultiBlockItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockItem$Type = ($MultiBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockItem_ = $MultiBlockItem$Type;
}}
declare module "packages/com/tom/createores/block/$MultiblockBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MultiblockBlockEntity, $MultiblockBlockEntity$Type} from "packages/com/tom/createores/block/entity/$MultiblockBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockPart$MultiblockGhostPart, $MultiblockPart$MultiblockGhostPart$Type} from "packages/com/tom/createores/block/$MultiblockPart$MultiblockGhostPart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $MultiblockBlock extends $Block implements $MultiblockPart$MultiblockGhostPart, $IBE<($MultiblockBlockEntity)> {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getBlockEntityClass"(): $Class<($MultiblockBlockEntity)>
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getParentDir"(arg0: $BlockState$Type): $Direction
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "makeCtx"(arg0: $UseOnContext$Type, arg1: $BlockPos$Type): $UseOnContext
public "onActivate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "pickBlock"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "hasParent"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "destroyParent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($MultiblockBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($MultiblockBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($MultiblockBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $MultiblockBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
get "blockEntityClass"(): $Class<($MultiblockBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBlock$Type = ($MultiblockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockBlock_ = $MultiblockBlock$Type;
}}
declare module "packages/com/tom/createores/block/$MultiblockPart$MultiblockMainPart" {
import {$MultiblockPart, $MultiblockPart$Type} from "packages/com/tom/createores/block/$MultiblockPart"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiblockPart$MultiblockMainPart$MultiblockPartType, $MultiblockPart$MultiblockMainPart$MultiblockPartType$Type} from "packages/com/tom/createores/block/$MultiblockPart$MultiblockMainPart$MultiblockPartType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $MultiblockPart$MultiblockMainPart extends $MultiblockPart {

 "getSize"(arg0: $Direction$Type): $Vec3i
 "getStart"(arg0: $Direction$Type): $Vec3i
 "getMultiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
 "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
 "getGhostDirection"(arg0: $Direction$Type, arg1: integer, arg2: integer, arg3: integer): $Direction
 "getBlockRotation"(arg0: $Direction$Type, arg1: $MultiblockPart$MultiblockMainPart$MultiblockPartType$Type): $Direction
 "getPartTypeAt"(arg0: $Direction$Type, arg1: integer, arg2: integer, arg3: integer): $MultiblockPart$MultiblockMainPart$MultiblockPartType
 "onActivate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
 "pickBlock"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
 "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
 "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
}

export namespace $MultiblockPart$MultiblockMainPart {
function props(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
function propsGhost(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPart$MultiblockMainPart$Type = ($MultiblockPart$MultiblockMainPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPart$MultiblockMainPart_ = $MultiblockPart$MultiblockMainPart$Type;
}}
declare module "packages/com/tom/peripherals/block/$GPUBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $GPUBlock extends $Block implements $EntityBlock {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GPUBlock$Type = ($GPUBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GPUBlock_ = $GPUBlock$Type;
}}
declare module "packages/com/tom/createores/block/$KineticInputBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$MultiblockPart$MultiblockGhostPart, $MultiblockPart$MultiblockGhostPart$Type} from "packages/com/tom/createores/block/$MultiblockPart$MultiblockGhostPart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$KineticInputBlockEntity, $KineticInputBlockEntity$Type} from "packages/com/tom/createores/block/entity/$KineticInputBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $KineticInputBlock extends $KineticBlock implements $MultiblockPart$MultiblockGhostPart, $IBE<($KineticInputBlockEntity)> {
static readonly "SHAFT_FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getBlockEntityClass"(): $Class<($KineticInputBlockEntity)>
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getParentDir"(arg0: $BlockState$Type): $Direction
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "makeCtx"(arg0: $UseOnContext$Type, arg1: $BlockPos$Type): $UseOnContext
public "onActivate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "pickBlock"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "hasParent"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "destroyParent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($KineticInputBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($KineticInputBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($KineticInputBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $KineticInputBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($KineticInputBlockEntity)>
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticInputBlock$Type = ($KineticInputBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KineticInputBlock_ = $KineticInputBlock$Type;
}}
declare module "packages/com/tom/peripherals/block/$RedstonePortBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IForgeBlock, $IForgeBlock$Type} from "packages/com/tom/peripherals/block/$IForgeBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBundledRedstoneBlock, $IBundledRedstoneBlock$Type} from "packages/dan200/computercraft/shared/common/$IBundledRedstoneBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $RedstonePortBlock extends $Block implements $EntityBlock, $IForgeBlock, $IBundledRedstoneBlock {
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

public "getBundledRedstoneOutput"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstonePortBlock$Type = ($RedstonePortBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstonePortBlock_ = $RedstonePortBlock$Type;
}}
declare module "packages/com/tom/createores/block/$MultiblockPart$MultiblockMainPart$MultiblockPartType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $MultiblockPart$MultiblockMainPart$MultiblockPartType extends $Enum<($MultiblockPart$MultiblockMainPart$MultiblockPartType)> {
static readonly "BLANK": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "MAIN": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "KINETIC": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "ITEM_IN": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "ITEM_OUT": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "FLUID_IN": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "FLUID_OUT": $MultiblockPart$MultiblockMainPart$MultiblockPartType


public static "values"(): ($MultiblockPart$MultiblockMainPart$MultiblockPartType)[]
public static "valueOf"(arg0: string): $MultiblockPart$MultiblockMainPart$MultiblockPartType
public "getBlockState"(arg0: $Direction$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPart$MultiblockMainPart$MultiblockPartType$Type = (("blank") | ("item_in") | ("item_out") | ("main") | ("kinetic") | ("fluid_in") | ("fluid_out")) | ($MultiblockPart$MultiblockMainPart$MultiblockPartType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPart$MultiblockMainPart$MultiblockPartType_ = $MultiblockPart$MultiblockMainPart$MultiblockPartType$Type;
}}
declare module "packages/com/tom/createores/recipe/$ExcavatingRecipe$RecipeFactory" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ExcavatingRecipe, $ExcavatingRecipe$Type} from "packages/com/tom/createores/recipe/$ExcavatingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ExcavatingRecipe$RecipeFactory<T extends $ExcavatingRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $RecipeType$Type<(any)>, arg2: $RecipeSerializer$Type<(any)>): T

(arg0: $ResourceLocation$Type, arg1: $RecipeType$Type<(any)>, arg2: $RecipeSerializer$Type<(any)>): T
}

export namespace $ExcavatingRecipe$RecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingRecipe$RecipeFactory$Type<T> = ($ExcavatingRecipe$RecipeFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExcavatingRecipe$RecipeFactory_<T> = $ExcavatingRecipe$RecipeFactory$Type<(T)>;
}}
declare module "packages/com/tom/createores/block/$IOBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IOBlockType, $IOBlockType$Type} from "packages/com/tom/createores/util/$IOBlockType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockPart$MultiblockGhostPart, $MultiblockPart$MultiblockGhostPart$Type} from "packages/com/tom/createores/block/$MultiblockPart$MultiblockGhostPart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$IOBlockEntity, $IOBlockEntity$Type} from "packages/com/tom/createores/block/entity/$IOBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $IOBlock extends $BaseEntityBlock implements $MultiblockPart$MultiblockGhostPart, $IBE<($IOBlockEntity)> {
static readonly "TYPE": $EnumProperty<($IOBlockType)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getBlockEntityClass"(): $Class<($IOBlockEntity)>
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getParentDir"(arg0: $BlockState$Type): $Direction
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "makeCtx"(arg0: $UseOnContext$Type, arg1: $BlockPos$Type): $UseOnContext
public "onActivate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "pickBlock"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "hasParent"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "destroyParent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IOBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($IOBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($IOBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $IOBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
get "blockEntityClass"(): $Class<($IOBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOBlock$Type = ($IOBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOBlock_ = $IOBlock$Type;
}}
declare module "packages/com/tom/createores/block/$ExtractorBlock" {
import {$NonNullUnaryOperator, $NonNullUnaryOperator$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiblockPart$MultiblockMainPart$MultiblockPartType, $MultiblockPart$MultiblockMainPart$MultiblockPartType$Type} from "packages/com/tom/createores/block/$MultiblockPart$MultiblockMainPart$MultiblockPartType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ExtractorBlockEntity, $ExtractorBlockEntity$Type} from "packages/com/tom/createores/block/entity/$ExtractorBlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MultiblockController, $MultiblockController$Type} from "packages/com/tom/createores/block/$MultiblockController"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ExtractorBlock extends $MultiblockController implements $IBE<($ExtractorBlockEntity)> {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStart"(arg0: $Direction$Type): $Vec3i
public "getBlockEntityClass"(): $Class<($ExtractorBlockEntity)>
public "getMultiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onActivate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getBlockRotation"(arg0: $Direction$Type, arg1: $MultiblockPart$MultiblockMainPart$MultiblockPartType$Type): $Direction
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($ExtractorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($ExtractorBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($ExtractorBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ExtractorBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
get "blockEntityClass"(): $Class<($ExtractorBlockEntity)>
get "multiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractorBlock$Type = ($ExtractorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtractorBlock_ = $ExtractorBlock$Type;
}}
declare module "packages/com/tom/createores/recipe/$VeinRecipe$RecipeFactory" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$VeinRecipe, $VeinRecipe$Type} from "packages/com/tom/createores/recipe/$VeinRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $VeinRecipe$RecipeFactory<T extends $VeinRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $RecipeType$Type<(any)>, arg2: $RecipeSerializer$Type<(any)>): T

(arg0: $ResourceLocation$Type, arg1: $RecipeType$Type<(any)>, arg2: $RecipeSerializer$Type<(any)>): T
}

export namespace $VeinRecipe$RecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeinRecipe$RecipeFactory$Type<T> = ($VeinRecipe$RecipeFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeinRecipe$RecipeFactory_<T> = $VeinRecipe$RecipeFactory$Type<(T)>;
}}
declare module "packages/com/tom/createores/block/$MultiblockPart$MultiblockGhostPart" {
import {$MultiblockPart, $MultiblockPart$Type} from "packages/com/tom/createores/block/$MultiblockPart"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $MultiblockPart$MultiblockGhostPart extends $MultiblockPart {

 "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
 "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
 "onActivate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
 "pickBlock"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "hasParent"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
 "getParentDir"(arg0: $BlockState$Type): $Direction
 "destroyParent"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
 "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
 "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
 "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void

(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
}

export namespace $MultiblockPart$MultiblockGhostPart {
function makeCtx(arg0: $UseOnContext$Type, arg1: $BlockPos$Type): $UseOnContext
function props(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
function propsGhost(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPart$MultiblockGhostPart$Type = ($MultiblockPart$MultiblockGhostPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPart$MultiblockGhostPart_ = $MultiblockPart$MultiblockGhostPart$Type;
}}
declare module "packages/com/tom/createores/recipe/$VeinRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ThreeState, $ThreeState$Type} from "packages/com/tom/createores/util/$ThreeState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$SmartInventory, $SmartInventory$Type} from "packages/com/simibubi/create/foundation/item/$SmartInventory"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$RandomSpreadStructurePlacement, $RandomSpreadStructurePlacement$Type} from "packages/net/minecraft/world/level/levelgen/structure/placement/$RandomSpreadStructurePlacement"

export class $VeinRecipe implements $Recipe<($SmartInventory)> {
 "id": $ResourceLocation
 "type": $RecipeType<(any)>
 "serializer": $RecipeSerializer<(any)>
 "priority": integer
 "veinName": $Component
 "biomeWhitelist": $TagKey<($Biome)>
 "biomeBlacklist": $TagKey<($Biome)>
 "finite": $ThreeState
 "amountMultiplierMin": float
 "amountMultiplierMax": float
 "placement": $RandomSpreadStructurePlacement
 "icon": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $RecipeType$Type<(any)>, arg2: $RecipeSerializer$Type<(any)>)

public "getName"(): $Component
public "matches"(arg0: $SmartInventory$Type, arg1: $Level$Type): boolean
public "isFinite"(): $ThreeState
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $SmartInventory$Type, arg1: $RegistryAccess$Type): $ItemStack
public "canGenerate"(arg0: $ServerLevel$Type, arg1: $Holder$Type<($Biome$Type)>): boolean
public "getMinAmount"(): float
public "isInfiniteClient"(): boolean
public "getMaxAmountClient"(): long
public "getMinAmountClient"(): long
public "getPlacement"(): $RandomSpreadStructurePlacement
public "getMaxAmount"(): float
public "getId"(): $ResourceLocation
public "getNegGenerationPriority"(): integer
public "getRemainingItems"(arg0: $SmartInventory$Type): $NonNullList<($ItemStack)>
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
get "name"(): $Component
get "finite"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "minAmount"(): float
get "infiniteClient"(): boolean
get "maxAmountClient"(): long
get "minAmountClient"(): long
get "placement"(): $RandomSpreadStructurePlacement
get "maxAmount"(): float
get "id"(): $ResourceLocation
get "negGenerationPriority"(): integer
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
export type $VeinRecipe$Type = ($VeinRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeinRecipe_ = $VeinRecipe$Type;
}}
declare module "packages/com/tom/peripherals/block/$KeyboardBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $KeyboardBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
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
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyboardBlock$Type = ($KeyboardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyboardBlock_ = $KeyboardBlock$Type;
}}
declare module "packages/com/tom/createores/kubejs/$ExcavatingRecipeJS" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidStackJS, $FluidStackJS$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"

export class $ExcavatingRecipeJS<T extends $ExcavatingRecipeJS<(T)>> extends $RecipeJS {
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

public "priority"(arg0: integer): T
public "drill"(arg0: $InputItem$Type): T
public "stress"(arg0: integer): T
public "serialize"(): void
public "deserialize"(arg0: boolean): void
public "fluid"(arg0: $FluidStackJS$Type): T
public "initValues"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingRecipeJS$Type<T> = ($ExcavatingRecipeJS<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExcavatingRecipeJS_<T> = $ExcavatingRecipeJS$Type<(T)>;
}}
declare module "packages/com/tom/createores/block/$DrillBlock" {
import {$NonNullUnaryOperator, $NonNullUnaryOperator$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DrillBlockEntity, $DrillBlockEntity$Type} from "packages/com/tom/createores/block/entity/$DrillBlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiblockPart$MultiblockMainPart$MultiblockPartType, $MultiblockPart$MultiblockMainPart$MultiblockPartType$Type} from "packages/com/tom/createores/block/$MultiblockPart$MultiblockMainPart$MultiblockPartType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MultiblockController, $MultiblockController$Type} from "packages/com/tom/createores/block/$MultiblockController"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DrillBlock extends $MultiblockController implements $IBE<($DrillBlockEntity)> {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStart"(arg0: $Direction$Type): $Vec3i
public "getBlockEntityClass"(): $Class<($DrillBlockEntity)>
public "getMultiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onActivate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getBlockRotation"(arg0: $Direction$Type, arg1: $MultiblockPart$MultiblockMainPart$MultiblockPartType$Type): $Direction
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($DrillBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($DrillBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($DrillBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $DrillBlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
get "blockEntityClass"(): $Class<($DrillBlockEntity)>
get "multiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBlock$Type = ($DrillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillBlock_ = $DrillBlock$Type;
}}
declare module "packages/com/tom/createores/recipe/$ExtractorRecipe" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ExcavatingRecipe, $ExcavatingRecipe$Type} from "packages/com/tom/createores/recipe/$ExcavatingRecipe"

export class $ExtractorRecipe extends $ExcavatingRecipe {
 "output": $FluidStack
 "id": $ResourceLocation
 "type": $RecipeType<(any)>
 "serializer": $RecipeSerializer<(any)>
 "veinId": $ResourceLocation
 "drill": $Ingredient
 "priority": integer
 "ticks": integer
 "stressMul": integer
 "drillingFluid": $FluidIngredient

constructor(arg0: $ResourceLocation$Type, arg1: $RecipeType$Type<(any)>, arg2: $RecipeSerializer$Type<(any)>)

public "getOutput"(): $FluidStack
get "output"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractorRecipe$Type = ($ExtractorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtractorRecipe_ = $ExtractorRecipe$Type;
}}
declare module "packages/com/tom/peripherals/block/$KeyboardDongleBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $KeyboardDongleBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
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
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyboardDongleBlock$Type = ($KeyboardDongleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyboardDongleBlock_ = $KeyboardDongleBlock$Type;
}}
declare module "packages/com/tom/createores/recipe/$DrillingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ExcavatingRecipe, $ExcavatingRecipe$Type} from "packages/com/tom/createores/recipe/$ExcavatingRecipe"
import {$ProcessingOutput, $ProcessingOutput$Type} from "packages/com/simibubi/create/content/processing/recipe/$ProcessingOutput"

export class $DrillingRecipe extends $ExcavatingRecipe {
 "output": $NonNullList<($ProcessingOutput)>
 "id": $ResourceLocation
 "type": $RecipeType<(any)>
 "serializer": $RecipeSerializer<(any)>
 "veinId": $ResourceLocation
 "drill": $Ingredient
 "priority": integer
 "ticks": integer
 "stressMul": integer
 "drillingFluid": $FluidIngredient

constructor(arg0: $ResourceLocation$Type, arg1: $RecipeType$Type<(any)>, arg2: $RecipeSerializer$Type<(any)>)

public "getOutput"(): $NonNullList<($ProcessingOutput)>
get "output"(): $NonNullList<($ProcessingOutput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillingRecipe$Type = ($DrillingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillingRecipe_ = $DrillingRecipe$Type;
}}
declare module "packages/com/tom/createores/recipe/$VeinRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CreateOreExcavation$RecipeTypeGroup, $CreateOreExcavation$RecipeTypeGroup$Type} from "packages/com/tom/createores/$CreateOreExcavation$RecipeTypeGroup"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$VeinRecipe, $VeinRecipe$Type} from "packages/com/tom/createores/recipe/$VeinRecipe"
import {$VeinRecipe$RecipeFactory, $VeinRecipe$RecipeFactory$Type} from "packages/com/tom/createores/recipe/$VeinRecipe$RecipeFactory"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $VeinRecipe$Serializer<T extends $VeinRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $CreateOreExcavation$RecipeTypeGroup$Type<(any)>, arg1: $VeinRecipe$RecipeFactory$Type<(T)>)

public "toJson"(arg0: T, arg1: $JsonObject$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeinRecipe$Serializer$Type<T> = ($VeinRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeinRecipe$Serializer_<T> = $VeinRecipe$Serializer$Type<(T)>;
}}
declare module "packages/com/tom/createores/$CreateOreExcavation$RecipeTypeGroup" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CreateOreExcavation$RecipeTypeGroup<T extends $Recipe<(any)>> {

constructor(arg0: $ResourceLocation$Type)

public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(T)>
public "getRecipeType"(): $RecipeType<(T)>
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(T)>
get "recipeType"(): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateOreExcavation$RecipeTypeGroup$Type<T> = ($CreateOreExcavation$RecipeTypeGroup<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreateOreExcavation$RecipeTypeGroup_<T> = $CreateOreExcavation$RecipeTypeGroup$Type<(T)>;
}}
declare module "packages/com/tom/createores/block/$MultiblockController" {
import {$NonNullUnaryOperator, $NonNullUnaryOperator$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiblockPart$MultiblockMainPart, $MultiblockPart$MultiblockMainPart$Type} from "packages/com/tom/createores/block/$MultiblockPart$MultiblockMainPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiblockPart$MultiblockMainPart$MultiblockPartType, $MultiblockPart$MultiblockMainPart$MultiblockPartType$Type} from "packages/com/tom/createores/block/$MultiblockPart$MultiblockMainPart$MultiblockPartType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $MultiblockController extends $Block implements $MultiblockPart$MultiblockMainPart {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "pickBlock"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getSize"(arg0: $Direction$Type): $Vec3i
public "getStart"(arg0: $Direction$Type): $Vec3i
public "getMultiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getGhostDirection"(arg0: $Direction$Type, arg1: integer, arg2: integer, arg3: integer): $Direction
public "getBlockRotation"(arg0: $Direction$Type, arg1: $MultiblockPart$MultiblockMainPart$MultiblockPartType$Type): $Direction
public "getPartTypeAt"(arg0: $Direction$Type, arg1: integer, arg2: integer, arg3: integer): $MultiblockPart$MultiblockMainPart$MultiblockPartType
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public "onActivate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
get "multiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockController$Type = ($MultiblockController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockController_ = $MultiblockController$Type;
}}
declare module "packages/com/tom/createores/kubejs/$DrillingRecipeJS" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ExcavatingRecipeJS, $ExcavatingRecipeJS$Type} from "packages/com/tom/createores/kubejs/$ExcavatingRecipeJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export class $DrillingRecipeJS extends $ExcavatingRecipeJS<($DrillingRecipeJS)> {
static readonly "RESULTS": $RecipeKey<(($OutputItem)[])>
static readonly "VEIN_NAME": $RecipeKey<(string)>
static readonly "TICKS": $RecipeKey<(integer)>
static readonly "SCHEMA": $RecipeSchema
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
export type $DrillingRecipeJS$Type = ($DrillingRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillingRecipeJS_ = $DrillingRecipeJS$Type;
}}
declare module "packages/com/tom/peripherals/item/$LaserPointerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LaserPointerItem extends $Item {
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
export type $LaserPointerItem$Type = ($LaserPointerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaserPointerItem_ = $LaserPointerItem$Type;
}}
declare module "packages/com/tom/createores/kubejs/$VeinRecipeJS" {
import {$RecipeKey, $RecipeKey$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export class $VeinRecipeJS extends $RecipeJS {
static readonly "ICON": $RecipeKey<($OutputItem)>
static readonly "NAME": $RecipeKey<($Component)>
static readonly "SCHEMA": $RecipeSchema
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

public "priority"(arg0: integer): $VeinRecipeJS
public "spread"(arg0: string): $VeinRecipeJS
public "placement"(arg0: integer, arg1: integer, arg2: integer): $VeinRecipeJS
public "biomeWhitelist"(arg0: string): $VeinRecipeJS
public "biomeBlacklist"(arg0: string): $VeinRecipeJS
public "reduction"(arg0: string): $VeinRecipeJS
public "alwaysInfinite"(): $VeinRecipeJS
public "defaultFinite"(): $VeinRecipeJS
public "veinSize"(arg0: float, arg1: float): $VeinRecipeJS
public "alwaysFinite"(): $VeinRecipeJS
public "initValues"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeinRecipeJS$Type = ($VeinRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeinRecipeJS_ = $VeinRecipeJS$Type;
}}
declare module "packages/com/tom/createores/block/$MultiblockPart" {
import {$NonNullUnaryOperator, $NonNullUnaryOperator$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $MultiblockPart extends $IWrenchable {

 "onActivate"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
 "pickBlock"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
 "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
 "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
 "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
}

export namespace $MultiblockPart {
function props(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
function propsGhost(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPart$Type = ($MultiblockPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPart_ = $MultiblockPart$Type;
}}
declare module "packages/com/tom/createores/block/entity/$IOBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $IOBlockEntity extends $BlockEntity implements $IHaveGoggleInformation {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "setRemoved"(): void
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOBlockEntity$Type = ($IOBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOBlockEntity_ = $IOBlockEntity$Type;
}}
declare module "packages/com/tom/createores/block/entity/$ExcavatingBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ExcavatingRecipe, $ExcavatingRecipe$Type} from "packages/com/tom/createores/recipe/$ExcavatingRecipe"
import {$MultiblockCapHandler$Kinetic, $MultiblockCapHandler$Kinetic$Type} from "packages/com/tom/createores/block/entity/$MultiblockCapHandler$Kinetic"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$MultiblockCapHandler, $MultiblockCapHandler$Type} from "packages/com/tom/createores/block/entity/$MultiblockCapHandler"
import {$IDrill, $IDrill$Type} from "packages/com/tom/createores/block/entity/$IDrill"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IOBlockType, $IOBlockType$Type} from "packages/com/tom/createores/util/$IOBlockType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ExcavatingBlockEntity<R extends $ExcavatingRecipe> extends $SmartBlockEntity implements $MultiblockCapHandler, $IDrill {


public "isActive"(): boolean
public "initialize"(): void
public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "lazyTick"(): void
public "getDrill"(): $ItemStack
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: R): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getBelow"(): $BlockPos
public "addKinetic"(arg0: $MultiblockCapHandler$Kinetic$Type): void
public "updateRecipe"(): void
public "dropInv"(): void
public "onClick"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "getCaps"<T>(arg0: $Capability$Type<(T)>, arg1: $IOBlockType$Type): $LazyOptional<(T)>
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "active"(): boolean
get "drill"(): $ItemStack
get "below"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingBlockEntity$Type<R> = ($ExcavatingBlockEntity<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExcavatingBlockEntity_<R> = $ExcavatingBlockEntity$Type<(R)>;
}}
declare module "packages/com/tom/createores/block/entity/$KineticInputBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockCapHandler$Kinetic, $MultiblockCapHandler$Kinetic$Type} from "packages/com/tom/createores/block/entity/$MultiblockCapHandler$Kinetic"

export class $KineticInputBlockEntity extends $KineticBlockEntity implements $MultiblockCapHandler$Kinetic {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "initialize"(): void
public "calculateAddedStressCapacity"(): float
public "calculateStressApplied"(): float
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "setStress"(arg0: float): void
public "getRotationSpeed"(): float
set "stress"(value: float)
get "rotationSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticInputBlockEntity$Type = ($KineticInputBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KineticInputBlockEntity_ = $KineticInputBlockEntity$Type;
}}
