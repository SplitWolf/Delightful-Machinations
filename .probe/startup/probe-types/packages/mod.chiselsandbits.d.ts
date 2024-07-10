declare module "packages/mod/chiselsandbits/api/item/documentation/$IDocumentableItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IDocumentableItem {

 "getDocumentableInstances"(arg0: $Item$Type): $Map<(string), ($ItemStack)>
}

export namespace $IDocumentableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDocumentableItem$Type = ($IDocumentableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDocumentableItem_ = $IDocumentableItem$Type;
}}
declare module "packages/mod/chiselsandbits/block/$ModificationTableBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ModificationTableBlock extends $Block {
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModificationTableBlock$Type = ($ModificationTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModificationTableBlock_ = $ModificationTableBlock$Type;
}}
declare module "packages/mod/chiselsandbits/api/measuring/$MeasuringMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MeasuringType, $MeasuringType$Type} from "packages/mod/chiselsandbits/api/measuring/$MeasuringType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IToolMode, $IToolMode$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IToolMode"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MeasuringMode extends $Enum<($MeasuringMode)> implements $IToolMode<($MeasuringType)> {
static readonly "WHITE_BIT": $MeasuringMode
static readonly "ORANGE_BIT": $MeasuringMode
static readonly "MAGENTA_BIT": $MeasuringMode
static readonly "LIGHT_BLUE_BIT": $MeasuringMode
static readonly "YELLOW_BIT": $MeasuringMode
static readonly "LIME_BIT": $MeasuringMode
static readonly "PINK_BIT": $MeasuringMode
static readonly "GRAY_BIT": $MeasuringMode
static readonly "LIGHT_GRAY_BIT": $MeasuringMode
static readonly "CYAN_BIT": $MeasuringMode
static readonly "PURPLE_BIT": $MeasuringMode
static readonly "BLUE_BIT": $MeasuringMode
static readonly "BROWN_BIT": $MeasuringMode
static readonly "GREEN_BIT": $MeasuringMode
static readonly "RED_BIT": $MeasuringMode
static readonly "BLACK_BIT": $MeasuringMode
static readonly "WHITE_BLOCK": $MeasuringMode
static readonly "ORANGE_BLOCK": $MeasuringMode
static readonly "MAGENTA_BLOCK": $MeasuringMode
static readonly "LIGHT_BLUE_BLOCK": $MeasuringMode
static readonly "YELLOW_BLOCK": $MeasuringMode
static readonly "LIME_BLOCK": $MeasuringMode
static readonly "PINK_BLOCK": $MeasuringMode
static readonly "GRAY_BLOCK": $MeasuringMode
static readonly "LIGHT_GRAY_BLOCK": $MeasuringMode
static readonly "CYAN_BLOCK": $MeasuringMode
static readonly "PURPLE_BLOCK": $MeasuringMode
static readonly "BLUE_BLOCK": $MeasuringMode
static readonly "BROWN_BLOCK": $MeasuringMode
static readonly "GREEN_BLOCK": $MeasuringMode
static readonly "RED_BLOCK": $MeasuringMode
static readonly "BLACK_BLOCK": $MeasuringMode
static readonly "WHITE_DISTANCE": $MeasuringMode
static readonly "ORANGE_DISTANCE": $MeasuringMode
static readonly "MAGENTA_DISTANCE": $MeasuringMode
static readonly "LIGHT_BLUE_DISTANCE": $MeasuringMode
static readonly "YELLOW_DISTANCE": $MeasuringMode
static readonly "LIME_DISTANCE": $MeasuringMode
static readonly "PINK_DISTANCE": $MeasuringMode
static readonly "GRAY_DISTANCE": $MeasuringMode
static readonly "LIGHT_GRAY_DISTANCE": $MeasuringMode
static readonly "CYAN_DISTANCE": $MeasuringMode
static readonly "PURPLE_DISTANCE": $MeasuringMode
static readonly "BLUE_DISTANCE": $MeasuringMode
static readonly "BROWN_DISTANCE": $MeasuringMode
static readonly "GREEN_DISTANCE": $MeasuringMode
static readonly "RED_DISTANCE": $MeasuringMode
static readonly "BLACK_DISTANCE": $MeasuringMode


public static "values"(): ($MeasuringMode)[]
public static "valueOf"(arg0: string): $MeasuringMode
public "getType"(): $MeasuringType
public "getDisplayName"(): $Component
public "getGroup"(): $Optional<($MeasuringType)>
public "getColor"(): $DyeColor
public "getIcon"(): $ResourceLocation
public "shouldRenderDisplayNameInMenu"(): boolean
public "getColorVector"(): $Vec3
public "getMultiLineDisplayName"(): $Component
public "isActive"(): boolean
public "shouldRenderName"(): boolean
public "getAlphaChannel"(): double
get "type"(): $MeasuringType
get "displayName"(): $Component
get "group"(): $Optional<($MeasuringType)>
get "color"(): $DyeColor
get "icon"(): $ResourceLocation
get "colorVector"(): $Vec3
get "multiLineDisplayName"(): $Component
get "active"(): boolean
get "alphaChannel"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeasuringMode$Type = (("orange_block") | ("magenta_block") | ("light_gray_block") | ("magenta_bit") | ("black_distance") | ("cyan_block") | ("magenta_distance") | ("blue_block") | ("lime_bit") | ("gray_bit") | ("blue_distance") | ("lime_distance") | ("white_bit") | ("red_bit") | ("brown_bit") | ("orange_distance") | ("lime_block") | ("cyan_bit") | ("gray_distance") | ("blue_bit") | ("purple_distance") | ("purple_block") | ("green_block") | ("light_gray_bit") | ("black_bit") | ("pink_distance") | ("light_blue_bit") | ("purple_bit") | ("brown_distance") | ("pink_block") | ("green_bit") | ("yellow_block") | ("white_distance") | ("light_blue_distance") | ("orange_bit") | ("red_block") | ("gray_block") | ("yellow_distance") | ("pink_bit") | ("black_block") | ("light_blue_block") | ("green_distance") | ("yellow_bit") | ("light_gray_distance") | ("brown_block") | ("cyan_distance") | ("red_distance") | ("white_block")) | ($MeasuringMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeasuringMode_ = $MeasuringMode$Type;
}}
declare module "packages/mod/chiselsandbits/forge/block/$ForgeChiseledBlock" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ChiseledBlock, $ChiseledBlock$Type} from "packages/mod/chiselsandbits/block/$ChiseledBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"

export class $ForgeChiseledBlock extends $ChiseledBlock {
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

public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeChiseledBlock$Type = ($ForgeChiseledBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeChiseledBlock_ = $ForgeChiseledBlock$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/accessor/world/$IWorldAreaAccessor" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IAreaAccessor, $IAreaAccessor$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IAreaAccessor"
import {$IInWorldStateEntryInfo, $IInWorldStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/world/$IInWorldStateEntryInfo"
import {$IPositionMutator, $IPositionMutator$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/sortable/$IPositionMutator"
import {$IMultiStateSnapshot, $IMultiStateSnapshot$Type} from "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IAreaShapeIdentifier, $IAreaShapeIdentifier$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/identifier/$IAreaShapeIdentifier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IWorldObject, $IWorldObject$Type} from "packages/mod/chiselsandbits/api/util/$IWorldObject"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IWorldAreaAccessor extends $IAreaAccessor, $IWorldObject {

 "inWorldStream"(): $Stream<($IInWorldStateEntryInfo)>
 "coveredAreaStream"(): $Stream<($BlockPos)>
 "stream"(): $Stream<($IStateEntryInfo)>
 "createNewShapeIdentifier"(): $IAreaShapeIdentifier
 "streamWithPositionMutator"(arg0: $IPositionMutator$Type): $Stream<($IStateEntryInfo)>
 "forEachWithPositionMutator"(arg0: $IPositionMutator$Type, arg1: $Consumer$Type<($IStateEntryInfo$Type)>): void
 "createSnapshot"(): $IMultiStateSnapshot
 "isInside"(arg0: $Vec3$Type): boolean
 "isInside"(arg0: $BlockPos$Type, arg1: $Vec3$Type): boolean
 "getWorld"(): $LevelAccessor
 "getInWorldEndBlockPoint"(): $BlockPos
 "getInWorldBoundingBox"(): $AABB
 "getInWorldEndPoint"(): $Vec3
 "getInWorldStartPoint"(): $Vec3
 "getInWorldStartBlockPoint"(): $BlockPos
 "getInAreaTarget"(arg0: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getBoundingBox"(): $AABB
}

export namespace $IWorldAreaAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldAreaAccessor$Type = ($IWorldAreaAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldAreaAccessor_ = $IWorldAreaAccessor$Type;
}}
declare module "packages/mod/chiselsandbits/api/chiseling/metadata/$IMetadataKey" {
import {$ICustomRegistryEntry, $ICustomRegistryEntry$Type} from "packages/com/communi/suggestu/scena/core/registries/$ICustomRegistryEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IMetadataKey<T> extends $ICustomRegistryEntry {

 "snapshot"(arg0: T): T
 "getRegistryName"(): $ResourceLocation
}

export namespace $IMetadataKey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMetadataKey$Type<T> = ($IMetadataKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMetadataKey_<T> = $IMetadataKey$Type<(T)>;
}}
declare module "packages/mod/chiselsandbits/api/inventory/bit/$IBitInventory" {
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IBitInventory {

 "extract"(arg0: $IBlockInformation$Type, arg1: integer): void
 "insert"(arg0: $IBlockInformation$Type, arg1: integer): void
 "insert"(arg0: $ItemStack$Type): $ItemStack
 "m_7983_"(): boolean
 "canInsert"(arg0: $IBlockInformation$Type, arg1: integer): boolean
 "canExtract"(arg0: $IBlockInformation$Type, arg1: integer): boolean
 "getMaxExtractAmount"(arg0: $IBlockInformation$Type): integer
 "getMaxInsertAmount"(arg0: $IBlockInformation$Type): integer
 "getContainedStates"(): $Map<($IBlockInformation), (integer)>
 "insertOrDiscard"(arg0: $IBlockInformation$Type, arg1: integer): void
 "canInsertOne"(arg0: $IBlockInformation$Type): boolean
 "extractOne"(arg0: $IBlockInformation$Type): void
 "canExtractOne"(arg0: $IBlockInformation$Type): boolean
 "insertOne"(arg0: $IBlockInformation$Type): void
}

export namespace $IBitInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBitInventory$Type = ($IBitInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBitInventory_ = $IBitInventory$Type;
}}
declare module "packages/mod/chiselsandbits/api/block/bitbag/$IBitBagAcceptingBlock" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBitBagAcceptingBlock {

 "onBitBagInteraction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): void

(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): void
}

export namespace $IBitBagAcceptingBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBitBagAcceptingBlock$Type = ($IBitBagAcceptingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBitBagAcceptingBlock_ = $IBitBagAcceptingBlock$Type;
}}
declare module "packages/mod/chiselsandbits/api/placement/$PlacementResult" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IClientConfiguration, $IClientConfiguration$Type} from "packages/mod/chiselsandbits/api/config/$IClientConfiguration"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PlacementResult {


public static "failure"(arg0: $Function$Type<($IClientConfiguration$Type), ($Supplier$Type<($Vector4f$Type)>)>): $PlacementResult
public static "failure"(arg0: $Function$Type<($IClientConfiguration$Type), ($Supplier$Type<($Vector4f$Type)>)>, arg1: $Component$Type): $PlacementResult
public static "failure"(arg0: $Vector4f$Type): $PlacementResult
public static "failure"(arg0: $Vector4f$Type, arg1: $Component$Type): $PlacementResult
public "isSuccess"(): boolean
public static "success"(arg0: $Function$Type<($IClientConfiguration$Type), ($Supplier$Type<($Vector4f$Type)>)>): $PlacementResult
public static "success"(arg0: $Vector4f$Type): $PlacementResult
public static "success"(): $PlacementResult
public "getColor"(): $Vector4f
public "getFailureMessage"(): $Component
get "color"(): $Vector4f
get "failureMessage"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementResult$Type = ($PlacementResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementResult_ = $PlacementResult$Type;
}}
declare module "packages/mod/chiselsandbits/api/modification/operation/$IModificationOperation" {
import {$ICustomRegistry, $ICustomRegistry$Type} from "packages/com/communi/suggestu/scena/core/registries/$ICustomRegistry"
import {$ICustomRegistryEntry, $ICustomRegistryEntry$Type} from "packages/com/communi/suggestu/scena/core/registries/$ICustomRegistryEntry"
import {$IGenerallyModifiableAreaMutator, $IGenerallyModifiableAreaMutator$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IGenerallyModifiableAreaMutator"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IModificationOperationGroup, $IModificationOperationGroup$Type} from "packages/mod/chiselsandbits/api/modification/operation/$IModificationOperationGroup"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IToolMode, $IToolMode$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IToolMode"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IModificationOperation extends $ICustomRegistryEntry, $IToolMode<($IModificationOperationGroup)> {

 "apply"(arg0: $IGenerallyModifiableAreaMutator$Type): void
 "getRegistryName"(): $ResourceLocation
 "getGroup"(): $Optional<($IModificationOperationGroup)>
 "getDisplayName"(): $Component
 "getMultiLineDisplayName"(): $Component
 "isActive"(): boolean
 "shouldRenderDisplayNameInMenu"(): boolean
 "getColorVector"(): $Vec3
 "shouldRenderName"(): boolean
 "getIcon"(): $ResourceLocation
 "getAlphaChannel"(): double
}

export namespace $IModificationOperation {
function getDefaultMode(): $IModificationOperation
function getRegistry(): $ICustomRegistry<($IModificationOperation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModificationOperation$Type = ($IModificationOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModificationOperation_ = $IModificationOperation$Type;
}}
declare module "packages/mod/chiselsandbits/api/util/$IWorldObject" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IWorldObject {

 "getWorld"(): $LevelAccessor
 "getInWorldEndBlockPoint"(): $BlockPos
 "getInWorldBoundingBox"(): $AABB
 "getInWorldEndPoint"(): $Vec3
 "getInWorldStartPoint"(): $Vec3
 "getInWorldStartBlockPoint"(): $BlockPos
}

export namespace $IWorldObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldObject$Type = ($IWorldObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldObject_ = $IWorldObject$Type;
}}
declare module "packages/mod/chiselsandbits/recipe/modificationtable/$ModificationTableRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$SimpleCustomRegistryEntry, $SimpleCustomRegistryEntry$Type} from "packages/com/communi/suggestu/scena/core/registries/$SimpleCustomRegistryEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModificationTableRecipe, $ModificationTableRecipe$Type} from "packages/mod/chiselsandbits/recipe/modificationtable/$ModificationTableRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ModificationTableRecipeSerializer extends $SimpleCustomRegistryEntry<($RecipeSerializer<(any)>)> implements $RecipeSerializer<($ModificationTableRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ModificationTableRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ModificationTableRecipe
public "getRegistryType"(): $Class<($RecipeSerializer<(any)>)>
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ModificationTableRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ModificationTableRecipe
get "registryType"(): $Class<($RecipeSerializer<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModificationTableRecipeSerializer$Type = ($ModificationTableRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModificationTableRecipeSerializer_ = $ModificationTableRecipeSerializer$Type;
}}
declare module "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation" {
import {$INBTSerializable, $INBTSerializable$Type} from "packages/mod/chiselsandbits/api/util/$INBTSerializable"
import {$IPacketBufferSerializable, $IPacketBufferSerializable$Type} from "packages/mod/chiselsandbits/api/util/$IPacketBufferSerializable"
import {$ISnapshotable, $ISnapshotable$Type} from "packages/mod/chiselsandbits/api/util/$ISnapshotable"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IStateVariant, $IStateVariant$Type} from "packages/mod/chiselsandbits/api/variant/state/$IStateVariant"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IBlockInformation extends $INBTSerializable<($CompoundTag)>, $IPacketBufferSerializable, $ISnapshotable<($IBlockInformation)>, $Comparable<($IBlockInformation)> {

 "getVariant"(): $Optional<($IStateVariant)>
 "getBlockState"(): $BlockState
 "isFluid"(): boolean
 "isAir"(): boolean
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeInto"(arg0: $FriendlyByteBuf$Type): void
 "deserializeFrom"(arg0: $FriendlyByteBuf$Type): void
 "createSnapshot"(): $IBlockInformation
 "compareTo"(arg0: $IBlockInformation$Type): integer
}

export namespace $IBlockInformation {
const AIR: $IBlockInformation
function create(arg0: $Block$Type): $IBlockInformation
function create(arg0: $BlockState$Type): $IBlockInformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockInformation$Type = ($IBlockInformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockInformation_ = $IBlockInformation$Type;
}}
declare module "packages/mod/chiselsandbits/item/$ChiseledBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IChiseledBlockItem, $IChiseledBlockItem$Type} from "packages/mod/chiselsandbits/api/item/chiseled/$IChiseledBlockItem"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PlacementResult, $PlacementResult$Type} from "packages/mod/chiselsandbits/api/placement/$PlacementResult"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$IModificationOperation, $IModificationOperation$Type} from "packages/mod/chiselsandbits/api/modification/operation/$IModificationOperation"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$IMultiStateItemStack, $IMultiStateItemStack$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChiseledBlockItem extends $BlockItem implements $IChiseledBlockItem {
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

public "setMode"(arg0: $ItemStack$Type, arg1: $IModificationOperation$Type): void
public "getDefaultInstance"(): $ItemStack
public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "createItemStack"(arg0: $ItemStack$Type): $IMultiStateItemStack
public "requiresUpdateOnClosure"(): boolean
public "getPossibleModes"(): $Collection<($IModificationOperation)>
public "getPlacementResult"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $PlacementResult
public "getTargetedPosition"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vec3
public "overridesOccupiedBits"(arg0: $ItemStack$Type): boolean
public "getWireFrameColor"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vector4f
public "getWireFrame"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $VoxelShape
public "ignoreDepthForPlacement"(arg0: $ItemStack$Type, arg1: $PlacementResult$Type): boolean
public "ignoreDepth"(arg0: $ItemStack$Type): boolean
public "setMode"(arg0: $ItemStack$Type, arg1: integer): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
get "defaultInstance"(): $ItemStack
get "possibleModes"(): $Collection<($IModificationOperation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledBlockItem$Type = ($ChiseledBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledBlockItem_ = $ChiseledBlockItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/mutator/$IMirrorAndRotateble" {
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export interface $IMirrorAndRotateble {

 "rotate"(arg0: $Direction$Axis$Type, arg1: integer): void
 "rotate"(arg0: $Direction$Axis$Type): void
 "mirror"(arg0: $Direction$Axis$Type): void
}

export namespace $IMirrorAndRotateble {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMirrorAndRotateble$Type = ($IMirrorAndRotateble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMirrorAndRotateble_ = $IMirrorAndRotateble$Type;
}}
declare module "packages/mod/chiselsandbits/block/entities/$BitStorageBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidInformation, $FluidInformation$Type} from "packages/com/communi/suggestu/scena/core/fluid/$FluidInformation"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockInformation, $BlockInformation$Type} from "packages/mod/chiselsandbits/blockinformation/$BlockInformation"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BitStorageBlockEntity extends $BlockEntity implements $Container {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getBits"(): integer
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "clearContent"(): void
public "isEmpty"(): boolean
public "getFluid"(): $Optional<($FluidInformation)>
public "getFacing"(): $Direction
public "stillValid"(arg0: $Player$Type): boolean
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "getLightValue"(): integer
public "insertBitsFromFluid"(arg0: $FluidInformation$Type): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "m_183515_"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "getContainedBlockInformation"(): $IBlockInformation
public "containsFluid"(): boolean
public "addHeldBits"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "extractBits"(arg0: integer): void
public "extractBits"(arg0: $Player$Type): boolean
public "addAllPossibleBits"(arg0: $Player$Type): boolean
public "insertBits"(arg0: integer, arg1: $IBlockInformation$Type): void
public "setContents"(arg0: $BlockInformation$Type, arg1: integer): void
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
public "setChanged"(): void
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
get "bits"(): integer
get "empty"(): boolean
get "fluid"(): $Optional<($FluidInformation)>
get "facing"(): $Direction
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "lightValue"(): integer
get "containerSize"(): integer
get "updateTag"(): $CompoundTag
get "containedBlockInformation"(): $IBlockInformation
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
export type $BitStorageBlockEntity$Type = ($BitStorageBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BitStorageBlockEntity_ = $BitStorageBlockEntity$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/pattern/$IPatternItem" {
import {$IChangeTrackingItem, $IChangeTrackingItem$Type} from "packages/mod/chiselsandbits/api/item/change/$IChangeTrackingItem"
import {$IPatternPlacementType, $IPatternPlacementType$Type} from "packages/mod/chiselsandbits/api/pattern/placement/$IPatternPlacementType"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IWithModeItem, $IWithModeItem$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IWithModeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISupportsSealing, $ISupportsSealing$Type} from "packages/mod/chiselsandbits/api/sealing/$ISupportsSealing"
import {$PlacementResult, $PlacementResult$Type} from "packages/mod/chiselsandbits/api/placement/$PlacementResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IPlacementPreviewProvidingItem, $IPlacementPreviewProvidingItem$Type} from "packages/mod/chiselsandbits/api/placement/$IPlacementPreviewProvidingItem"
import {$IMultiStateItemStack, $IMultiStateItemStack$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItemStack"
import {$IMultiStateItem, $IMultiStateItem$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItem"

export interface $IPatternItem extends $IMultiStateItem, $ISupportsSealing, $IWithModeItem<($IPatternPlacementType)>, $IPlacementPreviewProvidingItem, $IChangeTrackingItem {

 "getTargetedPosition"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vec3
 "overridesOccupiedBits"(arg0: $ItemStack$Type): boolean
 "getWireFrameColor"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vector4f
 "getWireFrame"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $VoxelShape
 "getPlacementResult"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $PlacementResult
 "createItemStack"(arg0: $ItemStack$Type): $IMultiStateItemStack
 "seal"(arg0: $ItemStack$Type): $ItemStack
 "setMode"(arg0: $ItemStack$Type, arg1: $IPatternPlacementType$Type): void
 "setMode"(arg0: $ItemStack$Type, arg1: integer): void
 "getMode"(arg0: $ItemStack$Type): $IPatternPlacementType
 "requiresUpdateOnClosure"(): boolean
 "getPossibleModes"(): $Collection<($IPatternPlacementType)>
 "ignoreDepthForPlacement"(arg0: $ItemStack$Type, arg1: $PlacementResult$Type): boolean
 "ignoreDepth"(arg0: $ItemStack$Type): boolean
}

export namespace $IPatternItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternItem$Type = ($IPatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPatternItem_ = $IPatternItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/util/$IPacketBufferSerializable" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $IPacketBufferSerializable {

 "serializeInto"(arg0: $FriendlyByteBuf$Type): void
 "deserializeFrom"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IPacketBufferSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPacketBufferSerializable$Type = ($IPacketBufferSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPacketBufferSerializable_ = $IPacketBufferSerializable$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/mutator/world/$IWorldAreaMutator" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IAreaMutator, $IAreaMutator$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IAreaMutator"
import {$IInWorldStateEntryInfo, $IInWorldStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/world/$IInWorldStateEntryInfo"
import {$IPositionMutator, $IPositionMutator$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/sortable/$IPositionMutator"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$IChangeTracker, $IChangeTracker$Type} from "packages/mod/chiselsandbits/api/change/$IChangeTracker"
import {$IMutableStateEntryInfo, $IMutableStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IMutableStateEntryInfo"
import {$IMultiStateSnapshot, $IMultiStateSnapshot$Type} from "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IBatchMutation, $IBatchMutation$Type} from "packages/mod/chiselsandbits/api/util/$IBatchMutation"
import {$IWorldAreaAccessor, $IWorldAreaAccessor$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/world/$IWorldAreaAccessor"
import {$IAreaShapeIdentifier, $IAreaShapeIdentifier$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/identifier/$IAreaShapeIdentifier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IBatchedAreaMutator, $IBatchedAreaMutator$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/batched/$IBatchedAreaMutator"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IInWorldMutableStateEntryInfo, $IInWorldMutableStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/world/$IInWorldMutableStateEntryInfo"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IWorldAreaMutator extends $IWorldAreaAccessor, $IAreaMutator, $IBatchedAreaMutator {

 "inWorldMutableStream"(): $Stream<($IInWorldMutableStateEntryInfo)>
 "inWorldStream"(): $Stream<($IInWorldStateEntryInfo)>
 "coveredAreaStream"(): $Stream<($BlockPos)>
 "setInBlockTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "clearInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): void
 "mutableStream"(): $Stream<($IMutableStateEntryInfo)>
 "clearInAreaTarget"(arg0: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "setInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "batch"(arg0: $IChangeTracker$Type): $IBatchMutation
 "stream"(): $Stream<($IStateEntryInfo)>
 "createNewShapeIdentifier"(): $IAreaShapeIdentifier
 "streamWithPositionMutator"(arg0: $IPositionMutator$Type): $Stream<($IStateEntryInfo)>
 "forEachWithPositionMutator"(arg0: $IPositionMutator$Type, arg1: $Consumer$Type<($IStateEntryInfo$Type)>): void
 "createSnapshot"(): $IMultiStateSnapshot
 "isInside"(arg0: $Vec3$Type): boolean
 "isInside"(arg0: $BlockPos$Type, arg1: $Vec3$Type): boolean
 "getWorld"(): $LevelAccessor
 "getInWorldEndBlockPoint"(): $BlockPos
 "getInWorldBoundingBox"(): $AABB
 "getInWorldEndPoint"(): $Vec3
 "getInWorldStartPoint"(): $Vec3
 "getInWorldStartBlockPoint"(): $BlockPos
 "batch"(): $IBatchMutation
 "getInAreaTarget"(arg0: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getBoundingBox"(): $AABB
}

export namespace $IWorldAreaMutator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldAreaMutator$Type = ($IWorldAreaMutator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldAreaMutator_ = $IWorldAreaMutator$Type;
}}
declare module "packages/mod/chiselsandbits/api/inventory/bit/$IBitInventoryItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBitInventoryItemStack, $IBitInventoryItemStack$Type} from "packages/mod/chiselsandbits/api/inventory/bit/$IBitInventoryItemStack"

export interface $IBitInventoryItem {

 "create"(arg0: $ItemStack$Type): $IBitInventoryItemStack

(arg0: $ItemStack$Type): $IBitInventoryItemStack
}

export namespace $IBitInventoryItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBitInventoryItem$Type = ($IBitInventoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBitInventoryItem_ = $IBitInventoryItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/multistate/$IStatistics" {
import {$INBTSerializable, $INBTSerializable$Type} from "packages/mod/chiselsandbits/api/util/$INBTSerializable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"

export interface $IStatistics extends $INBTSerializable<($CompoundTag)> {

 "isEmpty"(): boolean
 "getPrimaryState"(): $IBlockInformation
 "getContainedStates"(): $Set<($IBlockInformation)>
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IStatistics {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStatistics$Type = ($IStatistics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStatistics_ = $IStatistics$Type;
}}
declare module "packages/mod/chiselsandbits/api/inventory/bit/$IBitInventoryItemStack" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IBitInventory, $IBitInventory$Type} from "packages/mod/chiselsandbits/api/inventory/bit/$IBitInventory"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IBitInventoryItemStack extends $IBitInventory, $Container {

 "clear"(arg0: $IBlockInformation$Type): void
 "sort"(): void
 "toItemStack"(): $ItemStack
 "listContents"(): $List<($Component)>
 "getFilledRatio"(): double
 "extract"(arg0: $IBlockInformation$Type, arg1: integer): void
 "insert"(arg0: $IBlockInformation$Type, arg1: integer): void
 "insert"(arg0: $ItemStack$Type): $ItemStack
 "isEmpty"(): boolean
 "canInsert"(arg0: $IBlockInformation$Type, arg1: integer): boolean
 "canExtract"(arg0: $IBlockInformation$Type, arg1: integer): boolean
 "getMaxExtractAmount"(arg0: $IBlockInformation$Type): integer
 "getMaxInsertAmount"(arg0: $IBlockInformation$Type): integer
 "getContainedStates"(): $Map<($IBlockInformation), (integer)>
 "insertOrDiscard"(arg0: $IBlockInformation$Type, arg1: integer): void
 "canInsertOne"(arg0: $IBlockInformation$Type): boolean
 "extractOne"(arg0: $IBlockInformation$Type): void
 "canExtractOne"(arg0: $IBlockInformation$Type): boolean
 "insertOne"(arg0: $IBlockInformation$Type): void
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $Container
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
 "getMaxStackSize"(): integer
 "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
 "startOpen"(arg0: $Player$Type): void
 "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "stillValid"(arg0: $Player$Type): boolean
 "countItem"(arg0: $Item$Type): integer
 "stopOpen"(arg0: $Player$Type): void
 "getHeight"(): integer
 "asContainer"(): $Container
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "clear"(): void
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "getSlotLimit"(slot: integer): integer
 "isMutable"(): boolean
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "setChanged"(): void
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "setItem"(arg0: integer, arg1: $ItemStack$Type): void
 "setChanged"(): void
 "getContainerSize"(): integer
 "getItem"(arg0: integer): $ItemStack
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "clearContent"(): void
 "clear"(ingredient: $Ingredient$Type): void
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "count"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "isEmpty"(): boolean
}

export namespace $IBitInventoryItemStack {
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBitInventoryItemStack$Type = ($IBitInventoryItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBitInventoryItemStack_ = $IBitInventoryItemStack$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/mutator/$IGenerallyModifiableAreaMutator" {
import {$IAreaMutator, $IAreaMutator$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IAreaMutator"
import {$IPositionMutator, $IPositionMutator$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/sortable/$IPositionMutator"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$IMutableStateEntryInfo, $IMutableStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IMutableStateEntryInfo"
import {$IMultiStateSnapshot, $IMultiStateSnapshot$Type} from "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot"
import {$IMirrorAndRotateble, $IMirrorAndRotateble$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IMirrorAndRotateble"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IAreaShapeIdentifier, $IAreaShapeIdentifier$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/identifier/$IAreaShapeIdentifier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IGenerallyModifiableAreaMutator extends $IAreaMutator, $IMirrorAndRotateble {

 "setInBlockTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "clearInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): void
 "mutableStream"(): $Stream<($IMutableStateEntryInfo)>
 "clearInAreaTarget"(arg0: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "setInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "rotate"(arg0: $Direction$Axis$Type, arg1: integer): void
 "rotate"(arg0: $Direction$Axis$Type): void
 "mirror"(arg0: $Direction$Axis$Type): void
 "stream"(): $Stream<($IStateEntryInfo)>
 "createNewShapeIdentifier"(): $IAreaShapeIdentifier
 "streamWithPositionMutator"(arg0: $IPositionMutator$Type): $Stream<($IStateEntryInfo)>
 "forEachWithPositionMutator"(arg0: $IPositionMutator$Type, arg1: $Consumer$Type<($IStateEntryInfo$Type)>): void
 "createSnapshot"(): $IMultiStateSnapshot
 "isInside"(arg0: $Vec3$Type): boolean
 "isInside"(arg0: $BlockPos$Type, arg1: $Vec3$Type): boolean
 "getInAreaTarget"(arg0: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getBoundingBox"(): $AABB
}

export namespace $IGenerallyModifiableAreaMutator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenerallyModifiableAreaMutator$Type = ($IGenerallyModifiableAreaMutator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGenerallyModifiableAreaMutator_ = $IGenerallyModifiableAreaMutator$Type;
}}
declare module "packages/mod/chiselsandbits/blockinformation/$BlockInformation" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IStateVariant, $IStateVariant$Type} from "packages/mod/chiselsandbits/api/variant/state/$IStateVariant"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockInformation implements $IBlockInformation {

constructor(arg0: $BlockState$Type, arg1: $Optional$Type<($IStateVariant$Type)>)
constructor(arg0: $FriendlyByteBuf$Type)
constructor(arg0: $CompoundTag$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IBlockInformation$Type): integer
public "getVariant"(): $Optional<($IStateVariant)>
public "getBlockState"(): $BlockState
public "isFluid"(): boolean
public "isAir"(): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "createSnapshot"(): $BlockInformation
public "serializeInto"(arg0: $FriendlyByteBuf$Type): void
public "deserializeFrom"(arg0: $FriendlyByteBuf$Type): void
public static "create"(arg0: $Block$Type): $IBlockInformation
public static "create"(arg0: $BlockState$Type): $IBlockInformation
get "variant"(): $Optional<($IStateVariant)>
get "blockState"(): $BlockState
get "fluid"(): boolean
get "air"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInformation$Type = ($BlockInformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInformation_ = $BlockInformation$Type;
}}
declare module "packages/mod/chiselsandbits/recipe/modificationtable/$ModificationTableRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IMultiStateSnapshot, $IMultiStateSnapshot$Type} from "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$IModificationOperation, $IModificationOperation$Type} from "packages/mod/chiselsandbits/api/modification/operation/$IModificationOperation"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ModificationTableRecipe implements $Recipe<($Container)> {

constructor(arg0: $IModificationOperation$Type)

public "getDisplayName"(): $Component
public "getOperation"(): $IModificationOperation
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getAppliedSnapshot"(arg0: $Container$Type): $IMultiStateSnapshot
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getCraftingBlockResult"(arg0: $Container$Type): $ItemStack
public "getId"(): $ResourceLocation
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
get "displayName"(): $Component
get "operation"(): $IModificationOperation
get "serializer"(): $RecipeSerializer<(any)>
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
export type $ModificationTableRecipe$Type = ($ModificationTableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModificationTableRecipe_ = $ModificationTableRecipe$Type;
}}
declare module "packages/mod/chiselsandbits/api/util/$IWithIcon" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IWithIcon {

 "getIcon"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $IWithIcon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWithIcon$Type = ($IWithIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWithIcon_ = $IWithIcon$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/named/$IPermanentlyHighlightedNameItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPermanentlyHighlightedNameItem {

}

export namespace $IPermanentlyHighlightedNameItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPermanentlyHighlightedNameItem$Type = ($IPermanentlyHighlightedNameItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPermanentlyHighlightedNameItem_ = $IPermanentlyHighlightedNameItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/withmode/$IToolMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IToolModeGroup, $IToolModeGroup$Type} from "packages/mod/chiselsandbits/api/item/withmode/group/$IToolModeGroup"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWithDisplayName, $IWithDisplayName$Type} from "packages/mod/chiselsandbits/api/util/$IWithDisplayName"
import {$IRenderableMode, $IRenderableMode$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IRenderableMode"

export interface $IToolMode<G extends $IToolModeGroup> extends $IWithDisplayName, $IRenderableMode {

 "getGroup"(): $Optional<(G)>
 "getDisplayName"(): $Component
 "getMultiLineDisplayName"(): $Component
 "isActive"(): boolean
 "shouldRenderDisplayNameInMenu"(): boolean
 "getColorVector"(): $Vec3
 "shouldRenderName"(): boolean
 "getIcon"(): $ResourceLocation
 "getAlphaChannel"(): double
}

export namespace $IToolMode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IToolMode$Type<G> = ($IToolMode<(G)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IToolMode_<G> = $IToolMode$Type<(G)>;
}}
declare module "packages/mod/chiselsandbits/block/$ChiseledBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$IMultiStateBlock, $IMultiStateBlock$Type} from "packages/mod/chiselsandbits/api/block/$IMultiStateBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IBlockWithWorldlyProperties, $IBlockWithWorldlyProperties$Type} from "packages/com/communi/suggestu/saecularia/caudices/core/block/$IBlockWithWorldlyProperties"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ClientChiseledBlockExtensions, $ClientChiseledBlockExtensions$Type} from "packages/mod/chiselsandbits/client/block/$ClientChiseledBlockExtensions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $ChiseledBlock extends $Block implements $IMultiStateBlock, $SimpleWaterloggedBlock, $IBlockWithWorldlyProperties {
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

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "hasDynamicShape"(): boolean
public "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "canBeGrass"(arg0: $LevelReader$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean
public "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getPrimaryState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $IBlockInformation
public "getRenderProperties"(): $ClientChiseledBlockExtensions
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getColor"(): $DyeColor
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "renderProperties"(): $ClientChiseledBlockExtensions
get "pickupSound"(): $Optional<($SoundEvent)>
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledBlock$Type = ($ChiseledBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledBlock_ = $ChiseledBlock$Type;
}}
declare module "packages/mod/chiselsandbits/api/chiseling/mode/$IChiselMode" {
import {$ICustomRegistryEntry, $ICustomRegistryEntry$Type} from "packages/com/communi/suggestu/scena/core/registries/$ICustomRegistryEntry"
import {$IAreaAccessor, $IAreaAccessor$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IAreaAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ChiselingOperation, $ChiselingOperation$Type} from "packages/mod/chiselsandbits/api/chiseling/$ChiselingOperation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ICustomRegistry, $ICustomRegistry$Type} from "packages/com/communi/suggestu/scena/core/registries/$ICustomRegistry"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IToolModeGroup, $IToolModeGroup$Type} from "packages/mod/chiselsandbits/api/item/withmode/group/$IToolModeGroup"
import {$IChiselingContext, $IChiselingContext$Type} from "packages/mod/chiselsandbits/api/chiseling/$IChiselingContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IToolMode, $IToolMode$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IToolMode"

export interface $IChiselMode extends $ICustomRegistryEntry, $IToolMode<($IToolModeGroup)> {

 "getShape"(arg0: $IChiselingContext$Type): $VoxelShape
 "onStoppedRightClicking"(arg0: $Player$Type, arg1: $IChiselingContext$Type): void
 "onStoppedLeftClicking"(arg0: $Player$Type, arg1: $IChiselingContext$Type): void
 "requiresPlaceableEditStack"(): boolean
 "onRightClickBy"(arg0: $Player$Type, arg1: $IChiselingContext$Type): $ClickProcessingState
 "getCurrentAccessor"(arg0: $IChiselingContext$Type): $Optional<($IAreaAccessor)>
 "isStillValid"(arg0: $Player$Type, arg1: $IChiselingContext$Type, arg2: $ChiselingOperation$Type): boolean
 "onLeftClickBy"(arg0: $Player$Type, arg1: $IChiselingContext$Type): $ClickProcessingState
 "isSingleClickUse"(): boolean
 "getRegistryName"(): $ResourceLocation
 "getGroup"(): $Optional<($IToolModeGroup)>
 "getDisplayName"(): $Component
 "getMultiLineDisplayName"(): $Component
 "isActive"(): boolean
 "shouldRenderDisplayNameInMenu"(): boolean
 "getColorVector"(): $Vec3
 "shouldRenderName"(): boolean
 "getIcon"(): $ResourceLocation
 "getAlphaChannel"(): double
}

export namespace $IChiselMode {
function getDefaultMode(): $IChiselMode
function getRegistry(): $ICustomRegistry<($IChiselMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChiselMode$Type = ($IChiselMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChiselMode_ = $IChiselMode$Type;
}}
declare module "packages/mod/chiselsandbits/item/bit/$BitItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IBitItem, $IBitItem$Type} from "packages/mod/chiselsandbits/api/item/bit/$IBitItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IDocumentableItem, $IDocumentableItem$Type} from "packages/mod/chiselsandbits/api/item/documentation/$IDocumentableItem"
import {$IChiselMode, $IChiselMode$Type} from "packages/mod/chiselsandbits/api/chiseling/mode/$IChiselMode"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IChiselingItem, $IChiselingItem$Type} from "packages/mod/chiselsandbits/api/item/chisel/$IChiselingItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BitItem extends $Item implements $IChiselingItem, $IBitItem, $IDocumentableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "setMode"(arg0: $ItemStack$Type, arg1: $IChiselMode$Type): void
public "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getBlockInformation"(arg0: $ItemStack$Type): $IBlockInformation
public "renderHighlight"(arg0: $Player$Type, arg1: $LevelRenderer$Type, arg2: $PoseStack$Type, arg3: float): void
public "isDamageableDuringChiseling"(): boolean
public "onMergeOperationWithBagBeginning"(): void
public "onRightClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "handleRightClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
public "onLeftClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "onMergeOperationWithBagEnding"(): void
public "shouldDrawDefaultHighlight"(arg0: $Player$Type): boolean
public "getDocumentableInstances"(arg0: $Item$Type): $Map<(string), ($ItemStack)>
public "handleLeftClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
public "getPossibleModes"(): $Collection<($IChiselMode)>
public "setMode"(arg0: $ItemStack$Type, arg1: integer): void
public "requiresUpdateOnClosure"(): boolean
get "damageableDuringChiseling"(): boolean
get "possibleModes"(): $Collection<($IChiselMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BitItem$Type = ($BitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BitItem_ = $BitItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/wireframe/$IWireframeProvidingItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IWireframeProvidingItem {

 "getTargetedPosition"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vec3
 "getWireFrameColor"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vector4f
 "getWireFrame"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $VoxelShape
 "ignoreDepth"(arg0: $ItemStack$Type): boolean
}

export namespace $IWireframeProvidingItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWireframeProvidingItem$Type = ($IWireframeProvidingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWireframeProvidingItem_ = $IWireframeProvidingItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/util/$IBatchMutation" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"

export interface $IBatchMutation extends $AutoCloseable {

 "close"(): void

(): void
}

export namespace $IBatchMutation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBatchMutation$Type = ($IBatchMutation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBatchMutation_ = $IBatchMutation$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/withmode/$IRenderableMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IWithIcon, $IWithIcon$Type} from "packages/mod/chiselsandbits/api/util/$IWithIcon"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IWithColor, $IWithColor$Type} from "packages/mod/chiselsandbits/api/util/$IWithColor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWithDisplayName, $IWithDisplayName$Type} from "packages/mod/chiselsandbits/api/util/$IWithDisplayName"

export interface $IRenderableMode extends $IWithDisplayName, $IWithIcon, $IWithColor {

 "isActive"(): boolean
 "shouldRenderDisplayNameInMenu"(): boolean
 "getColorVector"(): $Vec3
 "shouldRenderName"(): boolean
 "getDisplayName"(): $Component
 "getMultiLineDisplayName"(): $Component
 "getIcon"(): $ResourceLocation
 "getAlphaChannel"(): double
}

export namespace $IRenderableMode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderableMode$Type = ($IRenderableMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderableMode_ = $IRenderableMode$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/tool/$IQuillItem" {
import {$IInteractableItem, $IInteractableItem$Type} from "packages/mod/chiselsandbits/api/item/interactable/$IInteractableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IQuillItem extends $IInteractableItem {

 "isRunningASimulatedInteraction"(arg0: $ItemStack$Type): boolean
 "getInteractionTarget"(arg0: $ItemStack$Type): $ItemStack
 "getBobbingTickCount"(): float
 "isInteracting"(arg0: $ItemStack$Type): boolean
}

export namespace $IQuillItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuillItem$Type = ($IQuillItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQuillItem_ = $IQuillItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/tool/$IUnsealItem" {
import {$IInteractableItem, $IInteractableItem$Type} from "packages/mod/chiselsandbits/api/item/interactable/$IInteractableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IUnsealItem extends $IInteractableItem {

 "isRunningASimulatedInteraction"(arg0: $ItemStack$Type): boolean
 "getInteractionTarget"(arg0: $ItemStack$Type): $ItemStack
 "getBobbingTickCount"(): float
 "isInteracting"(arg0: $ItemStack$Type): boolean
}

export namespace $IUnsealItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUnsealItem$Type = ($IUnsealItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUnsealItem_ = $IUnsealItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/client/render/preview/placement/$PlacementPreviewRenderMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlacementPreviewRenderMode extends $Enum<($PlacementPreviewRenderMode)> {
static readonly "GHOST_BLOCK_MODEL": $PlacementPreviewRenderMode
static readonly "GHOST_BLOCK_MODEL_SOLID_COLOR": $PlacementPreviewRenderMode
static readonly "WIREFRAME": $PlacementPreviewRenderMode


public static "values"(): ($PlacementPreviewRenderMode)[]
public static "valueOf"(arg0: string): $PlacementPreviewRenderMode
public "isGhost"(): boolean
public "isColoredGhost"(): boolean
public "isWireframe"(): boolean
get "ghost"(): boolean
get "coloredGhost"(): boolean
get "wireframe"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementPreviewRenderMode$Type = (("ghost_block_model_solid_color") | ("wireframe") | ("ghost_block_model")) | ($PlacementPreviewRenderMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementPreviewRenderMode_ = $PlacementPreviewRenderMode$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItem" {
import {$IMultiStateItemStack, $IMultiStateItemStack$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItemStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IMultiStateItem {

 "createItemStack"(arg0: $ItemStack$Type): $IMultiStateItemStack

(arg0: $ItemStack$Type): $IMultiStateItemStack
}

export namespace $IMultiStateItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateItem$Type = ($IMultiStateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateItem_ = $IMultiStateItem$Type;
}}
declare module "packages/mod/chiselsandbits/item/$ChiselItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IChiselMode, $IChiselMode$Type} from "packages/mod/chiselsandbits/api/chiseling/mode/$IChiselMode"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IDynamicallyHighlightedNameItem, $IDynamicallyHighlightedNameItem$Type} from "packages/mod/chiselsandbits/api/item/named/$IDynamicallyHighlightedNameItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IChiselItem, $IChiselItem$Type} from "packages/mod/chiselsandbits/api/item/chisel/$IChiselItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChiselItem extends $DiggerItem implements $IChiselItem, $IDynamicallyHighlightedNameItem {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: $Item$Properties$Type)

public "setMode"(arg0: $ItemStack$Type, arg1: $IChiselMode$Type): void
public "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "getMaxDamage"(): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "renderHighlight"(arg0: $Player$Type, arg1: $LevelRenderer$Type, arg2: $PoseStack$Type, arg3: float): void
public "isDamageableDuringChiseling"(): boolean
public "onLeftClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "shouldDrawDefaultHighlight"(arg0: $Player$Type): boolean
public "handleLeftClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
public "getPossibleModes"(): $Collection<($IChiselMode)>
public "adaptItemStack"(arg0: $ItemStack$Type): $ItemStack
public "setMode"(arg0: $ItemStack$Type, arg1: integer): void
public "requiresUpdateOnClosure"(): boolean
get "maxDamage"(): integer
get "damageableDuringChiseling"(): boolean
get "possibleModes"(): $Collection<($IChiselMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiselItem$Type = ($ChiselItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiselItem_ = $ChiselItem$Type;
}}
declare module "packages/mod/chiselsandbits/item/$SingleUsePatternItem" {
import {$IPatternPlacementType, $IPatternPlacementType$Type} from "packages/mod/chiselsandbits/api/pattern/placement/$IPatternPlacementType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PlacementResult, $PlacementResult$Type} from "packages/mod/chiselsandbits/api/placement/$PlacementResult"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IMultiStateItemStack, $IMultiStateItemStack$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItemStack"
import {$IPatternItem, $IPatternItem$Type} from "packages/mod/chiselsandbits/api/item/pattern/$IPatternItem"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SingleUsePatternItem extends $Item implements $IPatternItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "setMode"(arg0: $ItemStack$Type, arg1: $IPatternPlacementType$Type): void
public "getMode"(arg0: $ItemStack$Type): $IPatternPlacementType
public "seal"(arg0: $ItemStack$Type): $ItemStack
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "createItemStack"(arg0: $ItemStack$Type): $IMultiStateItemStack
public "tryPlace"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "getPossibleModes"(): $Collection<($IPatternPlacementType)>
public "getTargetedPosition"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vec3
public "overridesOccupiedBits"(arg0: $ItemStack$Type): boolean
public "getWireFrameColor"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vector4f
public "getWireFrame"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $VoxelShape
public "getPlacementResult"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $PlacementResult
public "setMode"(arg0: $ItemStack$Type, arg1: integer): void
public "requiresUpdateOnClosure"(): boolean
public "ignoreDepthForPlacement"(arg0: $ItemStack$Type, arg1: $PlacementResult$Type): boolean
public "ignoreDepth"(arg0: $ItemStack$Type): boolean
get "possibleModes"(): $Collection<($IPatternPlacementType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleUsePatternItem$Type = ($SingleUsePatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleUsePatternItem_ = $SingleUsePatternItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/sealing/$ISupportsSealing" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISupportsSealing {

 "seal"(arg0: $ItemStack$Type): $ItemStack

(arg0: $ItemStack$Type): $ItemStack
}

export namespace $ISupportsSealing {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISupportsSealing$Type = ($ISupportsSealing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISupportsSealing_ = $ISupportsSealing$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/click/$ILeftClickControllingItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILeftClickControllingItem {

 "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "onLeftClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "handleLeftClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
}

export namespace $ILeftClickControllingItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILeftClickControllingItem$Type = ($ILeftClickControllingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILeftClickControllingItem_ = $ILeftClickControllingItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/accessor/world/$IInWorldStateEntryInfo" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IWorldObject, $IWorldObject$Type} from "packages/mod/chiselsandbits/api/util/$IWorldObject"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IInWorldStateEntryInfo extends $IStateEntryInfo, $IWorldObject {

 "getBlockPos"(): $BlockPos
 "getInWorldEndPoint"(): $Vec3
 "getInWorldStartPoint"(): $Vec3
 "getInWorldCenterPoint"(): $Vec3
 "getEndPoint"(): $Vec3
 "getBoundingBox"(): $AABB
 "getBlockInformation"(): $IBlockInformation
 "getCenterPoint"(): $Vec3
 "getStartPoint"(): $Vec3
 "getWorld"(): $LevelAccessor
 "getInWorldEndBlockPoint"(): $BlockPos
 "getInWorldBoundingBox"(): $AABB
 "getInWorldStartBlockPoint"(): $BlockPos
}

export namespace $IInWorldStateEntryInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInWorldStateEntryInfo$Type = ($IInWorldStateEntryInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInWorldStateEntryInfo_ = $IInWorldStateEntryInfo$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/accessor/$IStateAccessor" {
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IStateAccessor {

 "getInAreaTarget"(arg0: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $Optional<($IStateEntryInfo)>
}

export namespace $IStateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateAccessor$Type = ($IStateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStateAccessor_ = $IStateAccessor$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/accessor/identifier/$IAreaShapeIdentifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAreaShapeIdentifier {

}

export namespace $IAreaShapeIdentifier {
const DUMMY: $IAreaShapeIdentifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAreaShapeIdentifier$Type = ($IAreaShapeIdentifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAreaShapeIdentifier_ = $IAreaShapeIdentifier$Type;
}}
declare module "packages/mod/chiselsandbits/api/axissize/$CollisionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $CollisionType extends $Enum<($CollisionType)> {
static readonly "NONE_AIR": $CollisionType
static readonly "COLLIDEABLE_ONLY": $CollisionType
static readonly "ALL": $CollisionType


public static "values"(): ($CollisionType)[]
public static "valueOf"(arg0: string): $CollisionType
public "isValidFor"(arg0: $BlockState$Type): boolean
public "isValidFor"(arg0: $IStateEntryInfo$Type): boolean
public "getExampleState"(): $BlockState
get "exampleState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollisionType$Type = (("all") | ("none_air") | ("collideable_only")) | ($CollisionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollisionType_ = $CollisionType$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState$ProcessingResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ClickProcessingState$ProcessingResult extends $Enum<($ClickProcessingState$ProcessingResult)> {
static readonly "DENY": $ClickProcessingState$ProcessingResult
static readonly "DEFAULT": $ClickProcessingState$ProcessingResult
static readonly "ALLOW": $ClickProcessingState$ProcessingResult


public static "values"(): ($ClickProcessingState$ProcessingResult)[]
public static "valueOf"(arg0: string): $ClickProcessingState$ProcessingResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickProcessingState$ProcessingResult$Type = (("allow") | ("deny") | ("default")) | ($ClickProcessingState$ProcessingResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickProcessingState$ProcessingResult_ = $ClickProcessingState$ProcessingResult$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/withmode/group/$IToolModeGroup" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IWithDisplayName, $IWithDisplayName$Type} from "packages/mod/chiselsandbits/api/util/$IWithDisplayName"
import {$IRenderableMode, $IRenderableMode$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IRenderableMode"

export interface $IToolModeGroup extends $IWithDisplayName, $IRenderableMode {

 "getDisplayName"(): $Component
 "getMultiLineDisplayName"(): $Component
 "isActive"(): boolean
 "shouldRenderDisplayNameInMenu"(): boolean
 "getColorVector"(): $Vec3
 "shouldRenderName"(): boolean
 "getIcon"(): $ResourceLocation
 "getAlphaChannel"(): double
}

export namespace $IToolModeGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IToolModeGroup$Type = ($IToolModeGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IToolModeGroup_ = $IToolModeGroup$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/measuring/$IMeasuringTapeItem" {
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$INoHitEffectsItem, $INoHitEffectsItem$Type} from "packages/mod/chiselsandbits/api/item/$INoHitEffectsItem"
import {$IRightClickControllingItem, $IRightClickControllingItem$Type} from "packages/mod/chiselsandbits/api/item/click/$IRightClickControllingItem"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IWithModeItem, $IWithModeItem$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IWithModeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MeasuringMode, $MeasuringMode$Type} from "packages/mod/chiselsandbits/api/measuring/$MeasuringMode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IMeasuringTapeItem extends $INoHitEffectsItem, $IWithModeItem<($MeasuringMode)>, $IRightClickControllingItem {

 "clear"(arg0: $ItemStack$Type): void
 "setStart"(arg0: $ItemStack$Type, arg1: $Vec3$Type): void
 "getStart"(arg0: $ItemStack$Type): $Optional<($Vec3)>
 "onRightClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "setMode"(arg0: $ItemStack$Type, arg1: $MeasuringMode$Type): void
 "setMode"(arg0: $ItemStack$Type, arg1: integer): void
 "getMode"(arg0: $ItemStack$Type): $MeasuringMode
 "requiresUpdateOnClosure"(): boolean
 "getPossibleModes"(): $Collection<($MeasuringMode)>
 "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "handleRightClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
}

export namespace $IMeasuringTapeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMeasuringTapeItem$Type = ($IMeasuringTapeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMeasuringTapeItem_ = $IMeasuringTapeItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/chiseled/$IChiseledBlockItem" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IWithModeItem, $IWithModeItem$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IWithModeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementResult, $PlacementResult$Type} from "packages/mod/chiselsandbits/api/placement/$PlacementResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IModificationOperation, $IModificationOperation$Type} from "packages/mod/chiselsandbits/api/modification/operation/$IModificationOperation"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IPlacementPreviewProvidingItem, $IPlacementPreviewProvidingItem$Type} from "packages/mod/chiselsandbits/api/placement/$IPlacementPreviewProvidingItem"
import {$IMultiStateItemStack, $IMultiStateItemStack$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItemStack"
import {$IMultiStateItem, $IMultiStateItem$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItem"

export interface $IChiseledBlockItem extends $IMultiStateItem, $IPlacementPreviewProvidingItem, $IWithModeItem<($IModificationOperation)> {

 "getTargetedPosition"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vec3
 "overridesOccupiedBits"(arg0: $ItemStack$Type): boolean
 "getWireFrameColor"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vector4f
 "getWireFrame"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $VoxelShape
 "createItemStack"(arg0: $ItemStack$Type): $IMultiStateItemStack
 "ignoreDepthForPlacement"(arg0: $ItemStack$Type, arg1: $PlacementResult$Type): boolean
 "ignoreDepth"(arg0: $ItemStack$Type): boolean
 "setMode"(arg0: $ItemStack$Type, arg1: $IModificationOperation$Type): void
 "setMode"(arg0: $ItemStack$Type, arg1: integer): void
 "getMode"(arg0: $ItemStack$Type): $IModificationOperation
 "requiresUpdateOnClosure"(): boolean
 "getPossibleModes"(): $Collection<($IModificationOperation)>
 "getPlacementResult"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $PlacementResult
}

export namespace $IChiseledBlockItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChiseledBlockItem$Type = ($IChiseledBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChiseledBlockItem_ = $IChiseledBlockItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/aabb/$IAABBOwner" {
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IAABBOwner {

 "getBoundingBox"(): $AABB

(): $AABB
}

export namespace $IAABBOwner {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAABBOwner$Type = ($IAABBOwner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAABBOwner_ = $IAABBOwner$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/tool/$ISealantItem" {
import {$IInteractableItem, $IInteractableItem$Type} from "packages/mod/chiselsandbits/api/item/interactable/$IInteractableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISealantItem extends $IInteractableItem {

 "isRunningASimulatedInteraction"(arg0: $ItemStack$Type): boolean
 "getInteractionTarget"(arg0: $ItemStack$Type): $ItemStack
 "getBobbingTickCount"(): float
 "isInteracting"(arg0: $ItemStack$Type): boolean
}

export namespace $ISealantItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISealantItem$Type = ($ISealantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISealantItem_ = $ISealantItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/util/$IWithDisplayName" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $IWithDisplayName {

 "getDisplayName"(): $Component
 "getMultiLineDisplayName"(): $Component

(): $Component
}

export namespace $IWithDisplayName {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWithDisplayName$Type = ($IWithDisplayName);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWithDisplayName_ = $IWithDisplayName$Type;
}}
declare module "packages/mod/chiselsandbits/item/$WrenchItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$IRightClickControllingItem, $IRightClickControllingItem$Type} from "packages/mod/chiselsandbits/api/item/click/$IRightClickControllingItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IWithModeItem, $IWithModeItem$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IWithModeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IModificationOperation, $IModificationOperation$Type} from "packages/mod/chiselsandbits/api/modification/operation/$IModificationOperation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WrenchItem extends $Item implements $IWithModeItem<($IModificationOperation)>, $IRightClickControllingItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "setMode"(arg0: $ItemStack$Type, arg1: $IModificationOperation$Type): void
public "getMode"(arg0: $ItemStack$Type): $IModificationOperation
public "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "onRightClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "handleRightClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
public "getPossibleModes"(): $Collection<($IModificationOperation)>
public "setMode"(arg0: $ItemStack$Type, arg1: integer): void
public "requiresUpdateOnClosure"(): boolean
get "possibleModes"(): $Collection<($IModificationOperation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchItem$Type = ($WrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrenchItem_ = $WrenchItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/util/$IWithBatchableMutationSupport" {
import {$IBatchMutation, $IBatchMutation$Type} from "packages/mod/chiselsandbits/api/util/$IBatchMutation"

export interface $IWithBatchableMutationSupport {

 "batch"(): $IBatchMutation

(): $IBatchMutation
}

export namespace $IWithBatchableMutationSupport {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWithBatchableMutationSupport$Type = ($IWithBatchableMutationSupport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWithBatchableMutationSupport_ = $IWithBatchableMutationSupport$Type;
}}
declare module "packages/mod/chiselsandbits/api/util/$INBTSerializable" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $INBTSerializable<T extends $Tag> {

 "serializeNBT"(): T
 "deserializeNBT"(arg0: T): void
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$Type<T> = ($INBTSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSerializable_<T> = $INBTSerializable$Type<(T)>;
}}
declare module "packages/mod/chiselsandbits/api/change/$IChangeTracker" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$IMultiStateSnapshot, $IMultiStateSnapshot$Type} from "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot"
import {$IChange, $IChange$Type} from "packages/mod/chiselsandbits/api/change/changes/$IChange"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IChangeTracker extends $IChange {

 "onBlockUpdated"(arg0: $BlockPos$Type, arg1: $IMultiStateSnapshot$Type, arg2: $IMultiStateSnapshot$Type): void
 "clear"(): void
 "onBlocksUpdated"(arg0: $Map$Type<($BlockPos$Type), ($IMultiStateSnapshot$Type)>, arg1: $Map$Type<($BlockPos$Type), ($IMultiStateSnapshot$Type)>): void
 "getChanges"(): $Deque<($IChange)>
 "redo"(arg0: $Player$Type): void
 "undo"(arg0: $Player$Type): void
 "canRedo"(arg0: $Player$Type): boolean
 "canUndo"(arg0: $Player$Type): boolean
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IChangeTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChangeTracker$Type = ($IChangeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChangeTracker_ = $IChangeTracker$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo" {
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IAABBOwner, $IAABBOwner$Type} from "packages/mod/chiselsandbits/api/aabb/$IAABBOwner"

export interface $IStateEntryInfo extends $IAABBOwner {

 "getEndPoint"(): $Vec3
 "getBoundingBox"(): $AABB
 "getBlockInformation"(): $IBlockInformation
 "getCenterPoint"(): $Vec3
 "getStartPoint"(): $Vec3
}

export namespace $IStateEntryInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateEntryInfo$Type = ($IStateEntryInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStateEntryInfo_ = $IStateEntryInfo$Type;
}}
declare module "packages/mod/chiselsandbits/item/$UnsealItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IUnsealItem, $IUnsealItem$Type} from "packages/mod/chiselsandbits/api/item/tool/$IUnsealItem"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnsealItem extends $Item implements $IUnsealItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "spawnParticles"(arg0: $Vec3$Type, arg1: $ItemStack$Type, arg2: $Level$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEnchantmentValue"(): integer
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "isRunningASimulatedInteraction"(arg0: $ItemStack$Type): boolean
public "getInteractionTarget"(arg0: $ItemStack$Type): $ItemStack
public "getBobbingTickCount"(): float
public "isInteracting"(arg0: $ItemStack$Type): boolean
get "enchantmentValue"(): integer
get "bobbingTickCount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnsealItem$Type = ($UnsealItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnsealItem_ = $UnsealItem$Type;
}}
declare module "packages/mod/chiselsandbits/item/$QuillItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IQuillItem, $IQuillItem$Type} from "packages/mod/chiselsandbits/api/item/tool/$IQuillItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuillItem extends $Item implements $IQuillItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "spawnParticles"(arg0: $Vec3$Type, arg1: $ItemStack$Type, arg2: $Level$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEnchantmentValue"(): integer
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "isRunningASimulatedInteraction"(arg0: $ItemStack$Type): boolean
public "getInteractionTarget"(arg0: $ItemStack$Type): $ItemStack
public "getBobbingTickCount"(): float
public "isInteracting"(arg0: $ItemStack$Type): boolean
get "enchantmentValue"(): integer
get "bobbingTickCount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuillItem$Type = ($QuillItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuillItem_ = $QuillItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot" {
import {$IMultiStateObjectStatistics, $IMultiStateObjectStatistics$Type} from "packages/mod/chiselsandbits/api/multistate/statistics/$IMultiStateObjectStatistics"
import {$IPositionMutator, $IPositionMutator$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/sortable/$IPositionMutator"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$IMutableStateEntryInfo, $IMutableStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IMutableStateEntryInfo"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IAreaShapeIdentifier, $IAreaShapeIdentifier$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/identifier/$IAreaShapeIdentifier"
import {$IGenerallyModifiableAreaMutator, $IGenerallyModifiableAreaMutator$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IGenerallyModifiableAreaMutator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IMultiStateItemStack, $IMultiStateItemStack$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IMultiStateSnapshot extends $Cloneable, $IGenerallyModifiableAreaMutator {

 "clone"(): $IMultiStateSnapshot
 "toItemStack"(): $IMultiStateItemStack
 "getStatics"(): $IMultiStateObjectStatistics
 "setInBlockTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "clearInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): void
 "mutableStream"(): $Stream<($IMutableStateEntryInfo)>
 "clearInAreaTarget"(arg0: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "setInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "rotate"(arg0: $Direction$Axis$Type, arg1: integer): void
 "rotate"(arg0: $Direction$Axis$Type): void
 "mirror"(arg0: $Direction$Axis$Type): void
 "stream"(): $Stream<($IStateEntryInfo)>
 "createNewShapeIdentifier"(): $IAreaShapeIdentifier
 "streamWithPositionMutator"(arg0: $IPositionMutator$Type): $Stream<($IStateEntryInfo)>
 "forEachWithPositionMutator"(arg0: $IPositionMutator$Type, arg1: $Consumer$Type<($IStateEntryInfo$Type)>): void
 "createSnapshot"(): $IMultiStateSnapshot
 "isInside"(arg0: $Vec3$Type): boolean
 "isInside"(arg0: $BlockPos$Type, arg1: $Vec3$Type): boolean
 "getInAreaTarget"(arg0: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getBoundingBox"(): $AABB
}

export namespace $IMultiStateSnapshot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateSnapshot$Type = ($IMultiStateSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateSnapshot_ = $IMultiStateSnapshot$Type;
}}
declare module "packages/mod/chiselsandbits/item/$MeasuringTapeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IMeasuringTapeItem, $IMeasuringTapeItem$Type} from "packages/mod/chiselsandbits/api/item/measuring/$IMeasuringTapeItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MeasuringMode, $MeasuringMode$Type} from "packages/mod/chiselsandbits/api/measuring/$MeasuringMode"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MeasuringTapeItem extends $Item implements $IMeasuringTapeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "setMode"(arg0: $ItemStack$Type, arg1: $MeasuringMode$Type): void
public "clear"(arg0: $ItemStack$Type): void
public "setStart"(arg0: $ItemStack$Type, arg1: $Vec3$Type): void
public "getStart"(arg0: $ItemStack$Type): $Optional<($Vec3)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "handleRightClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
public "getPossibleModes"(): $Collection<($MeasuringMode)>
public "onRightClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "setMode"(arg0: $ItemStack$Type, arg1: integer): void
public "requiresUpdateOnClosure"(): boolean
public "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
get "possibleModes"(): $Collection<($MeasuringMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeasuringTapeItem$Type = ($MeasuringTapeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeasuringTapeItem_ = $MeasuringTapeItem$Type;
}}
declare module "packages/mod/chiselsandbits/block/$MateriallyChiseledConversionBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $MateriallyChiseledConversionBlock extends $Block implements $EntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MateriallyChiseledConversionBlock$Type = ($MateriallyChiseledConversionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MateriallyChiseledConversionBlock_ = $MateriallyChiseledConversionBlock$Type;
}}
declare module "packages/mod/chiselsandbits/item/$SealantItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ISealantItem, $ISealantItem$Type} from "packages/mod/chiselsandbits/api/item/tool/$ISealantItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SealantItem extends $Item implements $ISealantItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "spawnParticles"(arg0: $Vec3$Type, arg1: $ItemStack$Type, arg2: $Level$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEnchantmentValue"(): integer
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "isRunningASimulatedInteraction"(arg0: $ItemStack$Type): boolean
public "getInteractionTarget"(arg0: $ItemStack$Type): $ItemStack
public "getBobbingTickCount"(): float
public "isInteracting"(arg0: $ItemStack$Type): boolean
get "enchantmentValue"(): integer
get "bobbingTickCount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SealantItem$Type = ($SealantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SealantItem_ = $SealantItem$Type;
}}
declare module "packages/mod/chiselsandbits/block/$BitStorageBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BitStorageBlockEntity, $BitStorageBlockEntity$Type} from "packages/mod/chiselsandbits/block/entities/$BitStorageBlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$IBitBagAcceptingBlock, $IBitBagAcceptingBlock$Type} from "packages/mod/chiselsandbits/api/block/bitbag/$IBitBagAcceptingBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BitStorageBlock extends $Block implements $EntityBlock, $IBitBagAcceptingBlock {
static readonly "FACING": $Property<($Direction)>
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

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "createEntityFromStack"(arg0: $ItemStack$Type): $BitStorageBlockEntity
public "onBitBagInteraction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): void
public static "updateEntityFromStack"(arg0: $ItemStack$Type, arg1: $BitStorageBlockEntity$Type): boolean
public "getTankDrop"(arg0: $BitStorageBlockEntity$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BitStorageBlock$Type = ($BitStorageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BitStorageBlock_ = $BitStorageBlock$Type;
}}
declare module "packages/mod/chiselsandbits/api/placement/$IPlaceable" {
import {$PlacementResult, $PlacementResult$Type} from "packages/mod/chiselsandbits/api/placement/$PlacementResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPlaceable {

 "getPlacementResult"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $PlacementResult

(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $PlacementResult
}

export namespace $IPlaceable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlaceable$Type = ($IPlaceable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlaceable_ = $IPlaceable$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/accessor/sortable/$IPositionMutator" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export interface $IPositionMutator {

 "mutate"(arg0: $Vec3i$Type): $Vec3i
 "then"(arg0: $IPositionMutator$Type): $IPositionMutator

(arg0: $Vec3i$Type): $Vec3i
}

export namespace $IPositionMutator {
function identity(): $IPositionMutator
function xzy(): $IPositionMutator
function xyz(): $IPositionMutator
function fromAxis(arg0: $Direction$Axis$Type): $IPositionMutator
function zxy(): $IPositionMutator
function zyx(): $IPositionMutator
function yzx(): $IPositionMutator
function yxz(): $IPositionMutator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPositionMutator$Type = ($IPositionMutator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPositionMutator_ = $IPositionMutator$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/pattern/$IMultiUsePatternItem" {
import {$IPatternPlacementType, $IPatternPlacementType$Type} from "packages/mod/chiselsandbits/api/pattern/placement/$IPatternPlacementType"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementResult, $PlacementResult$Type} from "packages/mod/chiselsandbits/api/placement/$PlacementResult"
import {$ISupportsUnsealing, $ISupportsUnsealing$Type} from "packages/mod/chiselsandbits/api/sealing/$ISupportsUnsealing"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IMultiStateItemStack, $IMultiStateItemStack$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItemStack"
import {$IPatternItem, $IPatternItem$Type} from "packages/mod/chiselsandbits/api/item/pattern/$IPatternItem"

export interface $IMultiUsePatternItem extends $IPatternItem, $ISupportsUnsealing {

 "getTargetedPosition"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vec3
 "overridesOccupiedBits"(arg0: $ItemStack$Type): boolean
 "getWireFrameColor"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vector4f
 "getWireFrame"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $VoxelShape
 "getPlacementResult"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $PlacementResult
 "unseal"(arg0: $ItemStack$Type): $ItemStack
 "createItemStack"(arg0: $ItemStack$Type): $IMultiStateItemStack
 "seal"(arg0: $ItemStack$Type): $ItemStack
 "setMode"(arg0: $ItemStack$Type, arg1: $IPatternPlacementType$Type): void
 "setMode"(arg0: $ItemStack$Type, arg1: integer): void
 "getMode"(arg0: $ItemStack$Type): $IPatternPlacementType
 "requiresUpdateOnClosure"(): boolean
 "getPossibleModes"(): $Collection<($IPatternPlacementType)>
 "ignoreDepthForPlacement"(arg0: $ItemStack$Type, arg1: $PlacementResult$Type): boolean
 "ignoreDepth"(arg0: $ItemStack$Type): boolean
}

export namespace $IMultiUsePatternItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiUsePatternItem$Type = ($IMultiUsePatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiUsePatternItem_ = $IMultiUsePatternItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/accessor/$IAreaAccessor" {
import {$IStateAccessor, $IStateAccessor$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateAccessor"
import {$IPositionMutator, $IPositionMutator$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/sortable/$IPositionMutator"
import {$IMultiStateSnapshot, $IMultiStateSnapshot$Type} from "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IAreaShapeIdentifier, $IAreaShapeIdentifier$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/identifier/$IAreaShapeIdentifier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IAABBOwner, $IAABBOwner$Type} from "packages/mod/chiselsandbits/api/aabb/$IAABBOwner"

export interface $IAreaAccessor extends $IStateAccessor, $IAABBOwner {

 "stream"(): $Stream<($IStateEntryInfo)>
 "createNewShapeIdentifier"(): $IAreaShapeIdentifier
 "streamWithPositionMutator"(arg0: $IPositionMutator$Type): $Stream<($IStateEntryInfo)>
 "forEachWithPositionMutator"(arg0: $IPositionMutator$Type, arg1: $Consumer$Type<($IStateEntryInfo$Type)>): void
 "createSnapshot"(): $IMultiStateSnapshot
 "isInside"(arg0: $Vec3$Type): boolean
 "isInside"(arg0: $BlockPos$Type, arg1: $Vec3$Type): boolean
 "getInAreaTarget"(arg0: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getBoundingBox"(): $AABB
}

export namespace $IAreaAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAreaAccessor$Type = ($IAreaAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAreaAccessor_ = $IAreaAccessor$Type;
}}
declare module "packages/mod/chiselsandbits/api/change/changes/$IChange" {
import {$INBTSerializable, $INBTSerializable$Type} from "packages/mod/chiselsandbits/api/util/$INBTSerializable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IChange extends $INBTSerializable<($CompoundTag)> {

 "redo"(arg0: $Player$Type): void
 "undo"(arg0: $Player$Type): void
 "canRedo"(arg0: $Player$Type): boolean
 "canUndo"(arg0: $Player$Type): boolean
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IChange {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChange$Type = ($IChange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChange_ = $IChange$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/chisel/$IChiselingItem" {
import {$IChangeTrackingItem, $IChangeTrackingItem$Type} from "packages/mod/chiselsandbits/api/item/change/$IChangeTrackingItem"
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IWithModeItem, $IWithModeItem$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IWithModeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IChiselMode, $IChiselMode$Type} from "packages/mod/chiselsandbits/api/chiseling/mode/$IChiselMode"
import {$IWithHighlightItem, $IWithHighlightItem$Type} from "packages/mod/chiselsandbits/api/item/withhighlight/$IWithHighlightItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ILeftClickControllingItem, $ILeftClickControllingItem$Type} from "packages/mod/chiselsandbits/api/item/click/$ILeftClickControllingItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $IChiselingItem extends $ILeftClickControllingItem, $IWithModeItem<($IChiselMode)>, $IWithHighlightItem, $IChangeTrackingItem {

 "isDamageableDuringChiseling"(): boolean
 "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "onLeftClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "handleLeftClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
 "setMode"(arg0: $ItemStack$Type, arg1: $IChiselMode$Type): void
 "setMode"(arg0: $ItemStack$Type, arg1: integer): void
 "getMode"(arg0: $ItemStack$Type): $IChiselMode
 "requiresUpdateOnClosure"(): boolean
 "getPossibleModes"(): $Collection<($IChiselMode)>
 "renderHighlight"(arg0: $Player$Type, arg1: $LevelRenderer$Type, arg2: $PoseStack$Type, arg3: float): void
 "shouldDrawDefaultHighlight"(arg0: $Player$Type): boolean
}

export namespace $IChiselingItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChiselingItem$Type = ($IChiselingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChiselingItem_ = $IChiselingItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/withhighlight/$IWithHighlightItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $IWithHighlightItem {

 "renderHighlight"(arg0: $Player$Type, arg1: $LevelRenderer$Type, arg2: $PoseStack$Type, arg3: float): void
 "shouldDrawDefaultHighlight"(arg0: $Player$Type): boolean
}

export namespace $IWithHighlightItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWithHighlightItem$Type = ($IWithHighlightItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWithHighlightItem_ = $IWithHighlightItem$Type;
}}
declare module "packages/mod/chiselsandbits/item/$BitStorageBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BitStorageBlockItem extends $BlockItem {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BitStorageBlockItem$Type = ($BitStorageBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BitStorageBlockItem_ = $BitStorageBlockItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/measuring/$MeasuringType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IToolModeGroup, $IToolModeGroup$Type} from "packages/mod/chiselsandbits/api/item/withmode/group/$IToolModeGroup"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MeasuringType extends $Enum<($MeasuringType)> implements $IToolModeGroup {
static readonly "BIT": $MeasuringType
static readonly "BLOCK": $MeasuringType
static readonly "DISTANCE": $MeasuringType


public static "values"(): ($MeasuringType)[]
public static "valueOf"(arg0: string): $MeasuringType
public "getDisplayName"(): $Component
public "getIcon"(): $ResourceLocation
public "adaptClickedPosition"(arg0: $BlockHitResult$Type): $Vec3
public "getResolution"(): $Vec3
public "adaptStartCorner"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Direction$Type): $Vec3
public "adaptEndCorner"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Direction$Type): $Vec3
public "isNeedsNormalization"(): boolean
public "getMultiLineDisplayName"(): $Component
public "isActive"(): boolean
public "shouldRenderDisplayNameInMenu"(): boolean
public "getColorVector"(): $Vec3
public "shouldRenderName"(): boolean
public "getAlphaChannel"(): double
get "displayName"(): $Component
get "icon"(): $ResourceLocation
get "resolution"(): $Vec3
get "needsNormalization"(): boolean
get "multiLineDisplayName"(): $Component
get "active"(): boolean
get "colorVector"(): $Vec3
get "alphaChannel"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeasuringType$Type = (("distance") | ("block") | ("bit")) | ($MeasuringType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeasuringType_ = $MeasuringType$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/withmode/$IWithModeItem" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IToolMode, $IToolMode$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IToolMode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IWithModeItem<M extends $IToolMode<(any)>> {

 "setMode"(arg0: $ItemStack$Type, arg1: M): void
 "setMode"(arg0: $ItemStack$Type, arg1: integer): void
 "getMode"(arg0: $ItemStack$Type): M
 "requiresUpdateOnClosure"(): boolean
 "getPossibleModes"(): $Collection<(M)>
}

export namespace $IWithModeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWithModeItem$Type<M> = ($IWithModeItem<(M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWithModeItem_<M> = $IWithModeItem$Type<(M)>;
}}
declare module "packages/mod/chiselsandbits/client/block/$ClientChiseledBlockExtensions" {
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ClientChiseledBlockExtensions {

constructor()

public "addHitEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $HitResult$Type, arg3: $ParticleEngine$Type): boolean
public "addDestroyEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ParticleEngine$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChiseledBlockExtensions$Type = ($ClientChiseledBlockExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChiseledBlockExtensions_ = $ClientChiseledBlockExtensions$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/mutator/$IMutableStateEntryInfo" {
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IMutableStateEntryInfo extends $IStateEntryInfo {

 "clear"(): void
 "setBlockInformation"(arg0: $IBlockInformation$Type): void
 "overrideState"(arg0: $IBlockInformation$Type): void
 "getEndPoint"(): $Vec3
 "getBoundingBox"(): $AABB
 "getBlockInformation"(): $IBlockInformation
 "getCenterPoint"(): $Vec3
 "getStartPoint"(): $Vec3
}

export namespace $IMutableStateEntryInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMutableStateEntryInfo$Type = ($IMutableStateEntryInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMutableStateEntryInfo_ = $IMutableStateEntryInfo$Type;
}}
declare module "packages/mod/chiselsandbits/api/sealing/$ISupportsUnsealing" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISupportsUnsealing {

 "unseal"(arg0: $ItemStack$Type): $ItemStack

(arg0: $ItemStack$Type): $ItemStack
}

export namespace $ISupportsUnsealing {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISupportsUnsealing$Type = ($ISupportsUnsealing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISupportsUnsealing_ = $ISupportsUnsealing$Type;
}}
declare module "packages/mod/chiselsandbits/api/pattern/placement/$IPatternPlacementType" {
import {$ICustomRegistryEntry, $ICustomRegistryEntry$Type} from "packages/com/communi/suggestu/scena/core/registries/$ICustomRegistryEntry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IMultiStateSnapshot, $IMultiStateSnapshot$Type} from "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot"
import {$IPlacementProperties, $IPlacementProperties$Type} from "packages/mod/chiselsandbits/api/placement/$IPlacementProperties"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PlacementResult, $PlacementResult$Type} from "packages/mod/chiselsandbits/api/placement/$PlacementResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IToolModeGroup, $IToolModeGroup$Type} from "packages/mod/chiselsandbits/api/item/withmode/group/$IToolModeGroup"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IToolMode, $IToolMode$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IToolMode"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $IPatternPlacementType extends $ICustomRegistryEntry, $IToolMode<($IToolModeGroup)>, $IPlacementProperties {

 "getTargetedPosition"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vec3
 "buildVoxelShapeForWireframe"(arg0: $IMultiStateSnapshot$Type, arg1: $Player$Type, arg2: $Vec3$Type, arg3: $Direction$Type): $VoxelShape
 "performPlacement"(arg0: $IMultiStateSnapshot$Type, arg1: $BlockPlaceContext$Type, arg2: boolean): $PlacementResult
 "getRegistryName"(): $ResourceLocation
 "getGroup"(): $Optional<($IToolModeGroup)>
 "overridesOccupiedBits"(arg0: $ItemStack$Type): boolean
 "getDisplayName"(): $Component
 "getMultiLineDisplayName"(): $Component
 "isActive"(): boolean
 "shouldRenderDisplayNameInMenu"(): boolean
 "getColorVector"(): $Vec3
 "shouldRenderName"(): boolean
 "getIcon"(): $ResourceLocation
 "getAlphaChannel"(): double
}

export namespace $IPatternPlacementType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternPlacementType$Type = ($IPatternPlacementType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPatternPlacementType_ = $IPatternPlacementType$Type;
}}
declare module "packages/mod/chiselsandbits/api/util/$IWithColor" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $IWithColor {

 "getAlphaChannel"(): double
 "getColorVector"(): $Vec3

(): double
}

export namespace $IWithColor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWithColor$Type = ($IWithColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWithColor_ = $IWithColor$Type;
}}
declare module "packages/mod/chiselsandbits/api/placement/$IPlacementPreviewProvidingItem" {
import {$PlacementResult, $PlacementResult$Type} from "packages/mod/chiselsandbits/api/placement/$PlacementResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$IPlaceable, $IPlaceable$Type} from "packages/mod/chiselsandbits/api/placement/$IPlaceable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IWireframeProvidingItem, $IWireframeProvidingItem$Type} from "packages/mod/chiselsandbits/api/item/wireframe/$IWireframeProvidingItem"
import {$IPlacementProperties, $IPlacementProperties$Type} from "packages/mod/chiselsandbits/api/placement/$IPlacementProperties"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPlacementPreviewProvidingItem extends $IWireframeProvidingItem, $IPlaceable, $IPlacementProperties {

 "ignoreDepthForPlacement"(arg0: $ItemStack$Type, arg1: $PlacementResult$Type): boolean
 "ignoreDepth"(arg0: $ItemStack$Type): boolean
 "getTargetedPosition"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vec3
 "getWireFrameColor"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $Vector4f
 "getWireFrame"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $VoxelShape
 "getPlacementResult"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $BlockHitResult$Type): $PlacementResult
 "overridesOccupiedBits"(arg0: $ItemStack$Type): boolean
}

export namespace $IPlacementPreviewProvidingItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlacementPreviewProvidingItem$Type = ($IPlacementPreviewProvidingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlacementPreviewProvidingItem_ = $IPlacementPreviewProvidingItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/click/$IRightClickControllingItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IRightClickControllingItem {

 "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "onRightClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "handleRightClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
}

export namespace $IRightClickControllingItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRightClickControllingItem$Type = ($IRightClickControllingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRightClickControllingItem_ = $IRightClickControllingItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/config/$IClientConfiguration" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$PlacementPreviewRenderMode, $PlacementPreviewRenderMode$Type} from "packages/mod/chiselsandbits/api/client/render/preview/placement/$PlacementPreviewRenderMode"

export interface $IClientConfiguration {

 "getShouldBrokenBlocksBeAddedToClipboard"(): $Supplier<(boolean)>
 "getMissingBitsOrSpacePatternPlacementColor"(): $Supplier<($Vector4f)>
 "getShouldScrollInteractionsChangeMode"(): $Supplier<(boolean)>
 "getEnableMouseIndicatorInRadialMenu"(): $Supplier<(boolean)>
 "getShouldPickedBlocksBeAddedToClipboard"(): $Supplier<(boolean)>
 "getNotFittingPatternPlacementColor"(): $Supplier<($Vector4f)>
 "getPreviewPlacementColor"(): $Supplier<($List<(any)>)>
 "getCullTestingCacheSize"(): $Supplier<(long)>
 "getInvertBitBagFullness"(): $Supplier<(boolean)>
 "getToolModeRenderer"(): $Supplier<(string)>
 "getBitStorageContentCacheSize"(): $Supplier<(long)>
 "getShowCoolDownError"(): $Supplier<(boolean)>
 "getFailedPlacementRenderMode"(): $Supplier<($PlacementPreviewRenderMode)>
 "getEnableFaceLightmapExtraction"(): $Supplier<(boolean)>
 "getSuccessfulPlacementRenderMode"(): $Supplier<($PlacementPreviewRenderMode)>
 "getFaceLayerCacheSize"(): $Supplier<(long)>
 "getModelBuildingThreadCount"(): $Supplier<(integer)>
 "getPatternExportPath"(): $Supplier<(string)>
 "getMutatorPreviewDebug"(): $Supplier<(boolean)>
 "getUseGetLightValue"(): $Supplier<(boolean)>
 "getMutatorPreviewChiselingColor"(): $Supplier<($List<(any)>)>
 "getStackModelCacheSize"(): $Supplier<(long)>
 "getPreviewChiselingColor"(): $Supplier<($List<(any)>)>
 "getMutatorPreviewPlacementColor"(): $Supplier<($List<(any)>)>
 "getSuccessfulPlacementColor"(): $Supplier<($Vector4f)>
 "getModelCacheSize"(): $Supplier<(long)>
 "getPreviewRenderer"(): $Supplier<(string)>
 "getClipboardSize"(): $Supplier<(integer)>
 "getInvertPickBlockBehaviour"(): $Supplier<(boolean)>
}

export namespace $IClientConfiguration {
function getInstance(): $IClientConfiguration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientConfiguration$Type = ($IClientConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientConfiguration_ = $IClientConfiguration$Type;
}}
declare module "packages/mod/chiselsandbits/block/$PatternScannerBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PatternScannerBlock extends $HorizontalDirectionalBlock {
static readonly "FACING": $DirectionProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternScannerBlock$Type = ($PatternScannerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternScannerBlock_ = $PatternScannerBlock$Type;
}}
declare module "packages/mod/chiselsandbits/item/$MonocleItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$IWearableItem, $IWearableItem$Type} from "packages/com/communi/suggestu/scena/core/item/$IWearableItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MonocleItem extends $Item implements $IWearableItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getSlot"(): $EquipmentSlot
public "getEquipSound"(): $SoundEvent
public "getEquipmentSlot"(): $EquipmentSlot
public static "get"(arg0: $ItemStack$Type): $Equipable
public "swapWithEquipmentSlot"(arg0: $Item$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
get "slot"(): $EquipmentSlot
get "equipSound"(): $SoundEvent
get "equipmentSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonocleItem$Type = ($MonocleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonocleItem_ = $MonocleItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/modification/operation/$IModificationOperationGroup" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IToolModeGroup, $IToolModeGroup$Type} from "packages/mod/chiselsandbits/api/item/withmode/group/$IToolModeGroup"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IModificationOperationGroup extends $IToolModeGroup {

 "getDisplayName"(): $Component
 "getMultiLineDisplayName"(): $Component
 "isActive"(): boolean
 "shouldRenderDisplayNameInMenu"(): boolean
 "getColorVector"(): $Vec3
 "shouldRenderName"(): boolean
 "getIcon"(): $ResourceLocation
 "getAlphaChannel"(): double
}

export namespace $IModificationOperationGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModificationOperationGroup$Type = ($IModificationOperationGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModificationOperationGroup_ = $IModificationOperationGroup$Type;
}}
declare module "packages/mod/chiselsandbits/api/chiseling/$IChiselingContext" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IAreaAccessor, $IAreaAccessor$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IAreaAccessor"
import {$IStateAccessor, $IStateAccessor$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateAccessor"
import {$IWorldAreaMutator, $IWorldAreaMutator$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/world/$IWorldAreaMutator"
import {$IMetadataKey, $IMetadataKey$Type} from "packages/mod/chiselsandbits/api/chiseling/metadata/$IMetadataKey"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ChiselingOperation, $ChiselingOperation$Type} from "packages/mod/chiselsandbits/api/chiseling/$ChiselingOperation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IChiselMode, $IChiselMode$Type} from "packages/mod/chiselsandbits/api/chiseling/mode/$IChiselMode"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IChiselingContext extends $IStateAccessor {

 "getMode"(): $IChiselMode
 "setError"(arg0: $MutableComponent$Type): void
 "include"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $IChiselingContext
 "include"(arg0: $Vec3$Type): $IChiselingContext
 "isComplete"(): boolean
 "getError"(): $Optional<($MutableComponent)>
 "getMetadata"<T>(arg0: $IMetadataKey$Type<(T)>): $Optional<(T)>
 "getWorld"(): $LevelAccessor
 "tryDamageItemAndDoOrSetBrokenError"(arg0: $Runnable$Type): integer
 "createSnapshot"(): $IChiselingContext
 "getModeOfOperandus"(): $ChiselingOperation
 "resetMutator"(): void
 "tryDamageItem"(arg0: integer): boolean
 "tryDamageItem"(): boolean
 "setMetadata"<T>(arg0: $IMetadataKey$Type<(T)>, arg1: T): void
 "setStateFilter"(arg0: $Function$Type<($IAreaAccessor$Type), ($Predicate$Type<($IStateEntryInfo$Type)>)>): void
 "getStateFilter"(): $Optional<($Function<($IAreaAccessor), ($Predicate<($IStateEntryInfo)>)>)>
 "getMutator"(): $Optional<($IWorldAreaMutator)>
 "setComplete"(): void
 "isSimulation"(): boolean
 "tryDamageItemAndDo"(arg0: integer, arg1: $Runnable$Type): integer
 "tryDamageItemAndDo"(arg0: $Runnable$Type, arg1: $Runnable$Type): integer
 "tryDamageItemAndDo"(arg0: integer, arg1: $Runnable$Type, arg2: $Runnable$Type): integer
 "clearStateFilter"(): void
 "removeMetadata"(arg0: $IMetadataKey$Type<(any)>): void
 "getInAreaTarget"(arg0: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $Optional<($IStateEntryInfo)>
}

export namespace $IChiselingContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChiselingContext$Type = ($IChiselingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChiselingContext_ = $IChiselingContext$Type;
}}
declare module "packages/mod/chiselsandbits/utils/$ReflectionHelperBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IBlockWithWorldlyProperties, $IBlockWithWorldlyProperties$Type} from "packages/com/communi/suggestu/saecularia/caudices/core/block/$IBlockWithWorldlyProperties"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $ReflectionHelperBlock extends $Block implements $IBlockWithWorldlyProperties {
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
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getExplosionResistance"(): float
public "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getLastInvokedThreadLocalMethodName"(): string
public "setLastInvokedThreadLocalMethodName"(arg0: string): void
public "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getColor"(): $DyeColor
public "canBeGrass"(arg0: $LevelReader$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean
get "explosionResistance"(): float
get "lastInvokedThreadLocalMethodName"(): string
set "lastInvokedThreadLocalMethodName"(value: string)
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionHelperBlock$Type = ($ReflectionHelperBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectionHelperBlock_ = $ReflectionHelperBlock$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/statistics/$IMultiStateObjectStatistics" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$CollisionType, $CollisionType$Type} from "packages/mod/chiselsandbits/api/axissize/$CollisionType"
import {$IStatistics, $IStatistics$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IStatistics"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IMultiStateObjectStatistics extends $IStatistics {

 "shouldCheckWeakPower"(): boolean
 "getCollideableEntries"(arg0: $CollisionType$Type): $BitSet
 "getPrimaryState"(): $IBlockInformation
 "getStateCounts"(): $Map<($IBlockInformation), (integer)>
 "getFullnessFactor"(): float
 "isFullBlock"(): boolean
 "getSlipperiness"(): float
 "getContainedStates"(): $Set<($IBlockInformation)>
 "isEmptyBlock"(): boolean
 "getLightBlockingFactor"(): float
 "canSustainGrassBelow"(): boolean
 "getLightEmissionFactor"(): float
 "getRelativeBlockHardness"(arg0: $Player$Type): float
 "canPropagateSkylight"(): boolean
 "isEmpty"(): boolean
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IMultiStateObjectStatistics {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateObjectStatistics$Type = ($IMultiStateObjectStatistics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateObjectStatistics_ = $IMultiStateObjectStatistics$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/mutator/world/$IInWorldMutableStateEntryInfo" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IInWorldStateEntryInfo, $IInWorldStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/world/$IInWorldStateEntryInfo"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$IMutableStateEntryInfo, $IMutableStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IMutableStateEntryInfo"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IInWorldMutableStateEntryInfo extends $IMutableStateEntryInfo, $IInWorldStateEntryInfo {

 "clear"(): void
 "setBlockInformation"(arg0: $IBlockInformation$Type): void
 "overrideState"(arg0: $IBlockInformation$Type): void
 "getBlockPos"(): $BlockPos
 "getInWorldEndPoint"(): $Vec3
 "getInWorldStartPoint"(): $Vec3
 "getInWorldCenterPoint"(): $Vec3
 "getEndPoint"(): $Vec3
 "getBoundingBox"(): $AABB
 "getBlockInformation"(): $IBlockInformation
 "getCenterPoint"(): $Vec3
 "getStartPoint"(): $Vec3
 "getWorld"(): $LevelAccessor
 "getInWorldEndBlockPoint"(): $BlockPos
 "getInWorldBoundingBox"(): $AABB
 "getInWorldStartBlockPoint"(): $BlockPos
}

export namespace $IInWorldMutableStateEntryInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInWorldMutableStateEntryInfo$Type = ($IInWorldMutableStateEntryInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInWorldMutableStateEntryInfo_ = $IInWorldMutableStateEntryInfo$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/$INoHitEffectsItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INoHitEffectsItem {

}

export namespace $INoHitEffectsItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INoHitEffectsItem$Type = ($INoHitEffectsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INoHitEffectsItem_ = $INoHitEffectsItem$Type;
}}
declare module "packages/mod/chiselsandbits/item/$BitBagItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBitInventoryItem, $IBitInventoryItem$Type} from "packages/mod/chiselsandbits/api/inventory/bit/$IBitInventoryItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IBitInventoryItemStack, $IBitInventoryItemStack$Type} from "packages/mod/chiselsandbits/api/inventory/bit/$IBitInventoryItemStack"

export class $BitBagItem extends $Item implements $IBitInventoryItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "create"(arg0: $ItemStack$Type): $IBitInventoryItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getDurabilityForDisplay"(arg0: $ItemStack$Type): double
public static "dyeBag"(arg0: $ItemStack$Type, arg1: $DyeColor$Type): $ItemStack
public static "getDyedColor"(arg0: $ItemStack$Type): $DyeColor
public "showDurabilityBar"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BitBagItem$Type = ($BitBagItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BitBagItem_ = $BitBagItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/bit/$IBitItem" {
import {$IChangeTrackingItem, $IChangeTrackingItem$Type} from "packages/mod/chiselsandbits/api/item/change/$IChangeTrackingItem"
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$IRightClickControllingItem, $IRightClickControllingItem$Type} from "packages/mod/chiselsandbits/api/item/click/$IRightClickControllingItem"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IWithModeItem, $IWithModeItem$Type} from "packages/mod/chiselsandbits/api/item/withmode/$IWithModeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IChiselMode, $IChiselMode$Type} from "packages/mod/chiselsandbits/api/chiseling/mode/$IChiselMode"
import {$IWithHighlightItem, $IWithHighlightItem$Type} from "packages/mod/chiselsandbits/api/item/withhighlight/$IWithHighlightItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $IBitItem extends $IRightClickControllingItem, $IWithHighlightItem, $IWithModeItem<($IChiselMode)>, $IChangeTrackingItem {

 "getBlockInformation"(arg0: $ItemStack$Type): $IBlockInformation
 "onMergeOperationWithBagBeginning"(): void
 "onMergeOperationWithBagEnding"(): void
 "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "onRightClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "handleRightClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
 "renderHighlight"(arg0: $Player$Type, arg1: $LevelRenderer$Type, arg2: $PoseStack$Type, arg3: float): void
 "shouldDrawDefaultHighlight"(arg0: $Player$Type): boolean
 "setMode"(arg0: $ItemStack$Type, arg1: $IChiselMode$Type): void
 "setMode"(arg0: $ItemStack$Type, arg1: integer): void
 "getMode"(arg0: $ItemStack$Type): $IChiselMode
 "requiresUpdateOnClosure"(): boolean
 "getPossibleModes"(): $Collection<($IChiselMode)>
}

export namespace $IBitItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBitItem$Type = ($IBitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBitItem_ = $IBitItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/mutator/$IAreaMutator" {
import {$IAreaAccessor, $IAreaAccessor$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IAreaAccessor"
import {$IPositionMutator, $IPositionMutator$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/sortable/$IPositionMutator"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$IMutableStateEntryInfo, $IMutableStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IMutableStateEntryInfo"
import {$IMultiStateSnapshot, $IMultiStateSnapshot$Type} from "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IAreaShapeIdentifier, $IAreaShapeIdentifier$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/identifier/$IAreaShapeIdentifier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IAreaMutator extends $IAreaAccessor {

 "setInBlockTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "clearInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): void
 "mutableStream"(): $Stream<($IMutableStateEntryInfo)>
 "clearInAreaTarget"(arg0: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "setInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "stream"(): $Stream<($IStateEntryInfo)>
 "createNewShapeIdentifier"(): $IAreaShapeIdentifier
 "streamWithPositionMutator"(arg0: $IPositionMutator$Type): $Stream<($IStateEntryInfo)>
 "forEachWithPositionMutator"(arg0: $IPositionMutator$Type, arg1: $Consumer$Type<($IStateEntryInfo$Type)>): void
 "createSnapshot"(): $IMultiStateSnapshot
 "isInside"(arg0: $Vec3$Type): boolean
 "isInside"(arg0: $BlockPos$Type, arg1: $Vec3$Type): boolean
 "getInAreaTarget"(arg0: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getBoundingBox"(): $AABB
}

export namespace $IAreaMutator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAreaMutator$Type = ($IAreaMutator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAreaMutator_ = $IAreaMutator$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/change/$IChangeTrackingItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IChangeTrackingItem {

}

export namespace $IChangeTrackingItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChangeTrackingItem$Type = ($IChangeTrackingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChangeTrackingItem_ = $IChangeTrackingItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/variant/state/$IStateVariant" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$ISnapshotable, $ISnapshotable$Type} from "packages/mod/chiselsandbits/api/util/$ISnapshotable"

export interface $IStateVariant extends $Comparable<($IStateVariant)>, $ISnapshotable<($IStateVariant)> {

 "compareTo"(arg0: $IStateVariant$Type): integer
 "createSnapshot"(): $IStateVariant
}

export namespace $IStateVariant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateVariant$Type = ($IStateVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStateVariant_ = $IStateVariant$Type;
}}
declare module "packages/mod/chiselsandbits/api/block/$IMultiStateBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IBlockWithWorldlyProperties, $IBlockWithWorldlyProperties$Type} from "packages/com/communi/suggestu/saecularia/caudices/core/block/$IBlockWithWorldlyProperties"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IMultiStateBlock extends $EntityBlock, $IBlockWithWorldlyProperties {

 "getPrimaryState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $IBlockInformation
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
 "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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

export namespace $IMultiStateBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateBlock$Type = ($IMultiStateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateBlock_ = $IMultiStateBlock$Type;
}}
declare module "packages/mod/chiselsandbits/api/multistate/mutator/batched/$IBatchedAreaMutator" {
import {$IAreaMutator, $IAreaMutator$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IAreaMutator"
import {$IPositionMutator, $IPositionMutator$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/sortable/$IPositionMutator"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$IChangeTracker, $IChangeTracker$Type} from "packages/mod/chiselsandbits/api/change/$IChangeTracker"
import {$IMutableStateEntryInfo, $IMutableStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IMutableStateEntryInfo"
import {$IMultiStateSnapshot, $IMultiStateSnapshot$Type} from "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IBatchMutation, $IBatchMutation$Type} from "packages/mod/chiselsandbits/api/util/$IBatchMutation"
import {$IAreaShapeIdentifier, $IAreaShapeIdentifier$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/identifier/$IAreaShapeIdentifier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IWithBatchableMutationSupport, $IWithBatchableMutationSupport$Type} from "packages/mod/chiselsandbits/api/util/$IWithBatchableMutationSupport"

export interface $IBatchedAreaMutator extends $IAreaMutator, $IWithBatchableMutationSupport {

 "batch"(arg0: $IChangeTracker$Type): $IBatchMutation
 "setInBlockTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "clearInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): void
 "mutableStream"(): $Stream<($IMutableStateEntryInfo)>
 "clearInAreaTarget"(arg0: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "setInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "batch"(): $IBatchMutation
 "stream"(): $Stream<($IStateEntryInfo)>
 "createNewShapeIdentifier"(): $IAreaShapeIdentifier
 "streamWithPositionMutator"(arg0: $IPositionMutator$Type): $Stream<($IStateEntryInfo)>
 "forEachWithPositionMutator"(arg0: $IPositionMutator$Type, arg1: $Consumer$Type<($IStateEntryInfo$Type)>): void
 "createSnapshot"(): $IMultiStateSnapshot
 "isInside"(arg0: $Vec3$Type): boolean
 "isInside"(arg0: $BlockPos$Type, arg1: $Vec3$Type): boolean
 "getInAreaTarget"(arg0: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getBoundingBox"(): $AABB
}

export namespace $IBatchedAreaMutator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBatchedAreaMutator$Type = ($IBatchedAreaMutator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBatchedAreaMutator_ = $IBatchedAreaMutator$Type;
}}
declare module "packages/mod/chiselsandbits/api/chiseling/$ChiselingOperation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChiselingOperation extends $Enum<($ChiselingOperation)> {
static readonly "CHISELING": $ChiselingOperation
static readonly "PLACING": $ChiselingOperation


public static "values"(): ($ChiselingOperation)[]
public static "valueOf"(arg0: string): $ChiselingOperation
public "isChiseling"(): boolean
public "isPlacing"(): boolean
public "processesAir"(): boolean
get "chiseling"(): boolean
get "placing"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiselingOperation$Type = (("chiseling") | ("placing")) | ($ChiselingOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiselingOperation_ = $ChiselingOperation$Type;
}}
declare module "packages/mod/chiselsandbits/block/$ChiseledPrinterBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
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
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ChiseledPrinterBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledPrinterBlock$Type = ($ChiseledPrinterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledPrinterBlock_ = $ChiseledPrinterBlock$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/named/$IDynamicallyHighlightedNameItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IPermanentlyHighlightedNameItem, $IPermanentlyHighlightedNameItem$Type} from "packages/mod/chiselsandbits/api/item/named/$IPermanentlyHighlightedNameItem"

export interface $IDynamicallyHighlightedNameItem extends $IPermanentlyHighlightedNameItem {

 "adaptItemStack"(arg0: $ItemStack$Type): $ItemStack

(arg0: $ItemStack$Type): $ItemStack
}

export namespace $IDynamicallyHighlightedNameItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicallyHighlightedNameItem$Type = ($IDynamicallyHighlightedNameItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicallyHighlightedNameItem_ = $IDynamicallyHighlightedNameItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/placement/$IPlacementProperties" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPlacementProperties {

 "overridesOccupiedBits"(arg0: $ItemStack$Type): boolean
}

export namespace $IPlacementProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlacementProperties$Type = ($IPlacementProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlacementProperties_ = $IPlacementProperties$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/multistate/$IMultiStateItemStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IPositionMutator, $IPositionMutator$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/sortable/$IPositionMutator"
import {$IBlockInformation, $IBlockInformation$Type} from "packages/mod/chiselsandbits/api/blockinformation/$IBlockInformation"
import {$IMutableStateEntryInfo, $IMutableStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IMutableStateEntryInfo"
import {$IMultiStateSnapshot, $IMultiStateSnapshot$Type} from "packages/mod/chiselsandbits/api/multistate/snapshot/$IMultiStateSnapshot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IAreaShapeIdentifier, $IAreaShapeIdentifier$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/identifier/$IAreaShapeIdentifier"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/mod/chiselsandbits/api/util/$INBTSerializable"
import {$IPacketBufferSerializable, $IPacketBufferSerializable$Type} from "packages/mod/chiselsandbits/api/util/$IPacketBufferSerializable"
import {$IGenerallyModifiableAreaMutator, $IGenerallyModifiableAreaMutator$Type} from "packages/mod/chiselsandbits/api/multistate/mutator/$IGenerallyModifiableAreaMutator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IStateEntryInfo, $IStateEntryInfo$Type} from "packages/mod/chiselsandbits/api/multistate/accessor/$IStateEntryInfo"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IStatistics, $IStatistics$Type} from "packages/mod/chiselsandbits/api/item/multistate/$IStatistics"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IMultiStateItemStack extends $IGenerallyModifiableAreaMutator, $INBTSerializable<($CompoundTag)>, $IPacketBufferSerializable {

 "getStatistics"(): $IStatistics
 "toBlockStack"(): $ItemStack
 "toPatternStack"(): $ItemStack
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeInto"(arg0: $FriendlyByteBuf$Type): void
 "deserializeFrom"(arg0: $FriendlyByteBuf$Type): void
 "setInBlockTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "clearInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): void
 "mutableStream"(): $Stream<($IMutableStateEntryInfo)>
 "clearInAreaTarget"(arg0: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "overrideInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): void
 "setInAreaTarget"(arg0: $IBlockInformation$Type, arg1: $Vec3$Type): void
 "rotate"(arg0: $Direction$Axis$Type, arg1: integer): void
 "rotate"(arg0: $Direction$Axis$Type): void
 "mirror"(arg0: $Direction$Axis$Type): void
 "stream"(): $Stream<($IStateEntryInfo)>
 "createNewShapeIdentifier"(): $IAreaShapeIdentifier
 "streamWithPositionMutator"(arg0: $IPositionMutator$Type): $Stream<($IStateEntryInfo)>
 "forEachWithPositionMutator"(arg0: $IPositionMutator$Type, arg1: $Consumer$Type<($IStateEntryInfo$Type)>): void
 "createSnapshot"(): $IMultiStateSnapshot
 "isInside"(arg0: $Vec3$Type): boolean
 "isInside"(arg0: $BlockPos$Type, arg1: $Vec3$Type): boolean
 "getInAreaTarget"(arg0: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getInBlockTarget"(arg0: $BlockPos$Type, arg1: $Vec3$Type): $Optional<($IStateEntryInfo)>
 "getBoundingBox"(): $AABB
}

export namespace $IMultiStateItemStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateItemStack$Type = ($IMultiStateItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateItemStack_ = $IMultiStateItemStack$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/interactable/$IInteractableItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IInteractableItem {

 "isRunningASimulatedInteraction"(arg0: $ItemStack$Type): boolean
 "getInteractionTarget"(arg0: $ItemStack$Type): $ItemStack
 "getBobbingTickCount"(): float
 "isInteracting"(arg0: $ItemStack$Type): boolean
}

export namespace $IInteractableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInteractableItem$Type = ($IInteractableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInteractableItem_ = $IInteractableItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/chisel/$IChiselItem" {
import {$IChiselMode, $IChiselMode$Type} from "packages/mod/chiselsandbits/api/chiseling/mode/$IChiselMode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ClickProcessingState, $ClickProcessingState$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IChiselingItem, $IChiselingItem$Type} from "packages/mod/chiselsandbits/api/item/chisel/$IChiselingItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $IChiselItem extends $IChiselingItem {

 "isDamageableDuringChiseling"(): boolean
 "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "onLeftClickProcessingEnd"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "handleLeftClickProcessing"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $ClickProcessingState$Type): $ClickProcessingState
 "setMode"(arg0: $ItemStack$Type, arg1: $IChiselMode$Type): void
 "setMode"(arg0: $ItemStack$Type, arg1: integer): void
 "getMode"(arg0: $ItemStack$Type): $IChiselMode
 "requiresUpdateOnClosure"(): boolean
 "getPossibleModes"(): $Collection<($IChiselMode)>
 "renderHighlight"(arg0: $Player$Type, arg1: $LevelRenderer$Type, arg2: $PoseStack$Type, arg3: float): void
 "shouldDrawDefaultHighlight"(arg0: $Player$Type): boolean
}

export namespace $IChiselItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChiselItem$Type = ($IChiselItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChiselItem_ = $IChiselItem$Type;
}}
declare module "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState" {
import {$ClickProcessingState$ProcessingResult, $ClickProcessingState$ProcessingResult$Type} from "packages/mod/chiselsandbits/api/item/click/$ClickProcessingState$ProcessingResult"

export class $ClickProcessingState {
static readonly "ALLOW": $ClickProcessingState
static readonly "ALLOW_NO_CANCEL": $ClickProcessingState
static readonly "DENIED": $ClickProcessingState
static readonly "DEFAULT": $ClickProcessingState

constructor(arg0: boolean, arg1: $ClickProcessingState$ProcessingResult$Type)

public "getNextState"(): $ClickProcessingState$ProcessingResult
public "shouldCancel"(): boolean
get "nextState"(): $ClickProcessingState$ProcessingResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickProcessingState$Type = ($ClickProcessingState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickProcessingState_ = $ClickProcessingState$Type;
}}
declare module "packages/mod/chiselsandbits/api/util/$ISnapshotable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISnapshotable<T> {

 "createSnapshot"(): T

(): T
}

export namespace $ISnapshotable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISnapshotable$Type<T> = ($ISnapshotable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISnapshotable_<T> = $ISnapshotable$Type<(T)>;
}}
declare module "packages/mod/chiselsandbits/item/$MagnifyingGlassItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPermanentlyHighlightedNameItem, $IPermanentlyHighlightedNameItem$Type} from "packages/mod/chiselsandbits/api/item/named/$IPermanentlyHighlightedNameItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagnifyingGlassItem extends $Item implements $IPermanentlyHighlightedNameItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnifyingGlassItem$Type = ($MagnifyingGlassItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnifyingGlassItem_ = $MagnifyingGlassItem$Type;
}}
declare module "packages/mod/chiselsandbits/item/$MultiUsePatternItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SingleUsePatternItem, $SingleUsePatternItem$Type} from "packages/mod/chiselsandbits/item/$SingleUsePatternItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IMultiUsePatternItem, $IMultiUsePatternItem$Type} from "packages/mod/chiselsandbits/api/item/pattern/$IMultiUsePatternItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultiUsePatternItem extends $SingleUsePatternItem implements $IMultiUsePatternItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "seal"(arg0: $ItemStack$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "unseal"(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiUsePatternItem$Type = ($MultiUsePatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiUsePatternItem_ = $MultiUsePatternItem$Type;
}}
